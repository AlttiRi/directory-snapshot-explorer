/** @type {ScanEntryType[]} */
import {sleep} from "../util.js";

export const entryTypes = ["folder", "file", "symlink", "fifo", "charDev", "blockDev", "socket"];

export class SimpleEntry {
    // [Symbol.toStringTag] = "SimpleEntry"; // Disables reactivity, BTW.
    /**
     * @param {SerializableScanEntry} entry
     * @param {SimpleEntry|null} parent
     * @param {Map<Number, SimpleScanError>} [errorsIDMap]
     */
    constructor(entry, parent, errorsIDMap) {
        /** @type {String} */
        this.name = entry.name;
        /** @type {SimpleEntry|null} */
        this.parent = parent;
        /** @type {ScanEntryType} */
        this.type = entry.type;

        if (entry.size) {
            /** @type {Number|undefined} */
            this._size = entry.size;
        }
        if (entry.mtime) {
            /** @type {Number|undefined} */
            this.mtime = entry.mtime;
        }
        if (entry.btime) {
            /** @type {Number|undefined} */
            this.btime = entry.btime;
        }

        if (entry.errors) {
            /** @type {SimpleScanError[]}|undefined} */
            this.errors = entry.errors.map(id => errorsIDMap.get(id));
        }

        if (entry.pathTo) {
            /** @type {String|undefined} */
            this.pathTo = entry.pathTo;
        }
        if (entry.content) {
            /** @type {String|undefined} */
            this.content = entry.content;
        }
    }
    /** @param {SimpleEntry} entry */
    addChild(entry) {
        if (!this.children) {
            /** @type {SimpleEntry[]|undefined} */
            this.children = [];
        }
        this.children.push(entry);
        this.increaseContentSize(entry.size);
    }
    /** @param {SimpleEntry[]} entries
     *  @param {Number} total */
    addHardlinks(entries, total) {
        /** @type {SimpleEntry[]|undefined} */
        this.hardlinks = entries;
        /** @type {Number|undefined} */
        this.hardlinksTotal = total;
    }

    increaseContentSize(size) {
        if (!size) {
            return;
        }
        if (!this._contentSize) {
            this._contentSize = 0;
        }
        this._contentSize += size;
        if (this.parent && size) {
            this.parent.increaseContentSize(size);
        }
    }

    /** @return {Number} */
    get size() {
        if (this.type === "folder") {
            return this._contentSize || 0;
        }
        return this._size || 0;
    }

    /** @return {SimpleEntry[]} */
    get folders() {
        return this.children?.filter(e => e.type === "folder") || [];
    }
    /** @return {SimpleEntry[]} */
    get files() {
        return this.children?.filter(e => e.type === "file") || [];
    }
    /** @return {SimpleEntry[]} */
    get symlinks() {
        return this.children?.filter(e => e.type === "symlink") || [];
    }

    /** @return {SimpleEntry[]} */
    get fifos() {
        return this.children?.filter(e => e.type === "fifo") || [];
    }
    /** @return {SimpleEntry[]} */
    get charDevs() {
        return this.children?.filter(e => e.type === "charDev") || [];
    }
    /** @return {SimpleEntry[]} */
    get blockDevs() {
        return this.children?.filter(e => e.type === "blockDev") || [];
    }
    /** @return {SimpleEntry[]} */
    get sockets() {
        return this.children?.filter(e => e.type === "socket") || [];
    }

    /** @return {Boolean} */
    get isEmpty() {
        return !Boolean(this.children?.length);
    }
    /** @return {Boolean} */
    get hasErrors() {
        return Boolean(this.errors?.length);
    }
    /** @return {SimpleEntry} */
    get root() {
        if (!this.parent) {
            return this;
        }
        return this.parent.root;
    }
    /** @return {SimpleEntry[]} */
    get path() {
        if (!this.parent) {
            return [this];
        }
        return [...this.parent.path, this];
    }
}

/**
 * Like `ScanError`, but without `path`.
 * @typedef {Object} SimpleScanError
 * @property {String} code
 * @property {String} syscall
 * @property {Number} errno
 **/

export class EntryStreamParser {
    constructor() {
        this.rootId = 0;
        /** @type {Map<Number, SimpleEntry>} */
        this.map = new Map();
        /** @type {Map<String, SimpleEntry[]>} */
        this.hidMap = new Map();
    }

    /** @param {ScanMeta} meta */
    setMeta(meta) {
        /** @type {ScanMeta} */
        this.meta = meta;
        /** @type {Object<String, Number>} */
        const errorsMap = meta.errorsMap;
        if (!errorsMap) {
            return;
        }
        /** @type {Map<Number, SimpleScanError>|undefined} */
        this.errorsIDMap = new Map(Object.entries(errorsMap)
            .map(([k, v]) => {
                const [code, syscall, errno] = k.split(":");
                return [v, {code, syscall, errno: Number(errno)}];
            }));
    }

    /** @param {SerializableScanEntry[]} sEntriesPart
     * @return {{root: SimpleEntry, rootUpdated: boolean}}
     */
    parse(sEntriesPart) {
        let rootUpdated = false;
        for (const entry of sEntriesPart) {
            /** @type {SimpleEntry|null}*/
            const parent = this.map.get(entry.pid) ?? null;
            const simpleEntry = new SimpleEntry(entry, parent, this.errorsIDMap);
            if (entry.type === "folder") {
                this.map.set(entry.id, simpleEntry);
            }
            parent?.addChild(simpleEntry);
            if (entry.hid) {
                const array = this.hidMap.get(entry.hid) || [];
                this.hidMap.set(entry.hid, [...array, simpleEntry]);
            }
            if (entry.pid === this.rootId) {
                rootUpdated = true;
            }
        }
        return {
            root: this.map.get(this.rootId),
            rootUpdated
        }
    }

    processHIDMapAsync() {
        if (!this.hidMap.size) {
            return;
        }
        console.log("[hidMap]:", this.hidMap);
        console.time("hidMap");
        processHIDMapAsync(this.hidMap)
            .then(() => console.timeEnd("hidMap"));
    }
}

async function processHIDMapAsync(hidMap) {
    let i = 0;
    let time = 0; // `0` to do `sleep` on the first iteration

    for (const [hid, simpleEntries] of hidMap.entries()) {
        if (!(i++ % 1000)) {
            const timeNow = Date.now();
            if (timeNow - time > 15) {
                time = timeNow;
                await sleep();
            }
        }

        /** @type {Number}*/
        const totalLinks = Number(hid.split(":")[1]);
        simpleEntries.forEach(e => {
            e.addHardlinks(simpleEntries, totalLinks);
        });
    }
}

/** @type {SimpleEntry} */
export const folderDummy = new SimpleEntry({
    type: "folder",
    name: "",
    pid: null,
}, null);
