export const setImmediate = globalThis.setImmediate || /*#__PURE__*/ (function() {
    const {port1, port2} = new MessageChannel();
    const queue = [];

    port1.onmessage = function() {
        const callback = queue.shift();
        callback();
    };

    return function(callback) {
        port2.postMessage(null);
        queue.push(callback);
    };
})();

export function sleep(ms) {
    if (ms === undefined) {
        return new Promise(resolve => setImmediate(resolve));
    }
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const shuffle = () => Math.random() >= 0.5 ? -1 : 1;

const videoExtensions = ["mp4", "webm", "mkv", "avi"];
export function isVideo(filename) {
    const {ext} = filename.match(/(?<ext>[^.]+)$/).groups;
    return videoExtensions.includes(ext);
}
const imageExtensions = ["png", "jpg", "jpeg", "gif", "tiff", "webp"];
export function isImage(filename) {
    const {ext} = filename.match(/(?<ext>[^.]+)$/).groups;
    return imageExtensions.includes(ext);
}

export function debounce(runnable, ms = 50) {
    let timerId;
    return function() {
        // console.log({timerId});
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            runnable.apply(this, arguments);
            timerId = null;
        }, ms);
    }
}

// "Sun, 10 Jan 2021 22:22:22 GMT" -> "2021.01.10"
export function dateToDayDateString(dateValue, utc = true) {
    const _date = new Date(dateValue);
    function pad(str) {
        return str.toString().padStart(2, "0");
    }
    const _utc = utc ? "UTC" : "";
    const year  = _date[`get${_utc}FullYear`]();
    const month = _date[`get${_utc}Month`]() + 1;
    const date  = _date[`get${_utc}Date`]();

    // if server error (or missed)
    if (Number(_date) === 0) {
        console.warn("date is 1970.01.01");
        return "";
    }

    return year + "." + pad(month) + "." + pad(date);
}

export function structuredClone(object) {
    return new Promise(resolve => {
        const {port1, port2} = new MessageChannel();
        port1.onmessage = function(message) {
            resolve(message.data);
        };
        port2.postMessage(object);
    });
}

export function appendScript(src, integrity) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        script.onload = resolve;
        script.src = src;
        script.setAttribute("async", "");
        if (integrity) {
            script.integrity = integrity;
            script.setAttribute("crossorigin", "anonymous");
        }
        document.querySelector("body").append(script);
    });
}


export async function *iterateReadableStream(stream) {
    const reader = stream.getReader();
    while (true) {
        const {done, /** @type {Uint8Array} */ value} = await reader.read();
        if (done) {
            break;
        }
        yield value;
    }
}

// chunkSize is 65536, ReadableStream uses the same size.
// There is no speed difference between using of different the chunk's sizes.
export function *iterateArrayBuffer(arrayBuffer, chunkSize = 65536) {
    const buffer = new Uint8Array(arrayBuffer);
    let index = 0;
    while (true) {
        const chunk = buffer.subarray(index, index + chunkSize);
        if (!chunk.length) {
            break;
        }
        yield chunk;
        index += chunkSize;
    }
}

// Iterate Blob (or File)
// Note: `chunkSize` affects the execution speed
// It works with the same speed in Chromium, but a bit faster in Firefox (in comparison with `iterateBlob_v1`)
export function *iterateBlob(blob, chunkSize = 2 * 1024 * 1024) {
    let index = 0;
    while (true) {
        const blobChunk = blob.slice(index, index + chunkSize);
        if (!blobChunk.size) {break;}

        yield read(blobChunk);
        index += chunkSize;
    }

    async function read(blob) {
        return new Uint8Array(await blob.arrayBuffer());
    }
}

export function bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) {
        return "0 B";
    }
    const k = 1024;
    decimals = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}
