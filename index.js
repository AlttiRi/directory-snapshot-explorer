var e=Object.defineProperty,__publicField=(t,a,n)=>(((t,a,n)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n})(t,"symbol"!=typeof a?a+"":a,n),n);import{r as t,c as a,i as n,t as s,s as o,w as r,a as i,b as l,d as c,o as u,e as d,f as p,g as f,u as h,h as v,j as m,k as g,n as y,l as b,m as S,F as w,p as k,q as z,v as D,x as T,y as x,z as _,A as M,B as E,C,D as $,T as P,E as j,G as I,H as F,I as L,J as B}from"./vendor.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&processPreload(e)})).observe(document,{childList:!0,subtree:!0})}function processPreload(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const R=globalThis.setImmediate||function(){const{port1:e,port2:t}=new MessageChannel,a=[];return e.onmessage=function(){a.shift()()},function(e){t.postMessage(null),a.push(e)}}();function sleep(e){return new Promise(void 0===e?e=>R(e):t=>setTimeout(t,e))}const W=["mp4","webm","mkv","avi","mov","m4v","m4v","mpg","mpeg","wmv","flv"];const A=["png","jpg","jpeg","gif","tiff","webp"];const O=["mp3","flac","wav","wma","aac"];function firefoxDateFix(e){return"string"==typeof(t=e)||t instanceof String?e.replace(/(?<y>\d{4})\.(?<m>\d{2})\.(?<d>\d{2})/,"$<y>-$<m>-$<d>"):e;var t}function dateToDayDateString(e,t=!0){e=firefoxDateFix(e);const a=new Date(e);function pad2(e){return e.toString().padStart(2,"0")}"Invalid Date"===a.toString()&&console.warn("Invalid Date value: ",e);const n=t?"UTC":"",s=a[`get${n}FullYear`](),o=a[`get${n}Month`]()+1,r=a[`get${n}Date`]();return s+"."+pad2(o)+"."+pad2(r)}function dateToDayDateTimeString(e,t=!0){e=firefoxDateFix(e);const a=new Date(e);function pad2(e){return e.toString().padStart(2,"0")}const n=t?"UTC":"",s=a[`get${n}Hours`](),o=a[`get${n}Minutes`](),r=a[`get${n}Seconds`](),i=pad2(s)+":"+pad2(o)+":"+pad2(r);return dateToDayDateString(a,t)+" "+i+(t?"Z":"")}async function*iterateAsyncDataSource(e){if(e instanceof Response&&(e=e.body),e instanceof ReadableStream)yield*async function*(e){const t=e.getReader();for(;;){const{done:e,value:a}=await t.read();if(e)break;yield a}}(e);else if(e instanceof Blob)for(const t of function*(e,t=2097152){let a=0;for(;;){const n=e.slice(a,a+t);if(!n.size)break;yield read(n),a+=t}async function read(e){return new Uint8Array(await e.arrayBuffer())}}(e))yield await t}function bytesToSize(e,t=2){if(0===e)return"0 B";t=t<0?0:t;const a=Math.floor(Math.log(e)/Math.log(1024));return Number.parseFloat((e/Math.pow(1024,a)).toFixed(t))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}function bytesToSizeWinLike(e){if(e<1024)return e+" B";let t=Math.floor(Math.log(e)/Math.log(1024)),a=e/Math.pow(1024,t);return a>=1e3&&(t++,a/=1024),function(e){let t;e<10?t=Math.trunc(100*e)/100:e<100?t=Math.trunc(10*e)/10:e<1e3&&(t=Math.trunc(e));if(e<.1)return t.toPrecision(1);if(e<1)return t.toPrecision(2);return t.toPrecision(3)}(a)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}function blue(e){return[`%c${e}`,"color: #2196f3; font-weight: bold;"]}const N=t(!0),H=t("name"),U=t({name:!1,size:!1,mtime:!1}),q=a((()=>U.value[H.value]));const{compare:Z}=new Intl.Collator(void 0,{numeric:!0,sensitivity:"accent"});function comparator(e,t){const a=q.value?-1:1;if(N.value){if("name"===H.value)return Z(e.name,t.name)*a;if("size"===H.value)return(e.size-t.size)*a;if("mtime"===H.value)return(e.mtime-t.mtime)*a}return 0}const J=a((()=>[...me.value.folders.sort(comparator),...me.value.files.sort(comparator),...me.value.symlinks.sort(comparator),...me.value.fifos.sort(comparator),...me.value.charDevs.sort(comparator),...me.value.blockDevs.sort(comparator),...me.value.sockets.sort(comparator)])),K=t(50),G=a((()=>re.value.length?ie.value:J.value)),Y=a((()=>G.value.slice(0,K.value))),V=a((()=>ie.value.length>K.value?ie.value.length:G.value.length)),Q=t(null),X=t("");function addMessage(e){X.value=e}function appendMessage(e){X.value+=e}function debugMessageFromEntry(e){var t;if(console.log(n(e)?"Proxy:":"Raw:",s(e)),e.hasErrors)X.value="";else{const a='"'+e.name.slice(0,20)+(e.name.length<20?"":"...")+'"';let n="";n+=`mtime "${dateToDayDateTimeString(e.mtime,!1)}"`,n+=` —  btime "${dateToDayDateTimeString(null!=(t=e.btime)?t:0,!1)}"`,n+=` — ${a} — ${e.size} (${bytesToSizeWinLike(e.size)})`,X.value=n}}const ee=["folder","file","symlink","fifo","charDev","blockDev","socket"];class SimpleEntry{constructor(e,t,a){this.name=e.name,this.parent=t,this.type=e.type,e.size&&(this._size=e.size),e.mtime&&(this.mtime=e.mtime),e.btime&&(this.btime=e.btime),e.errors&&(this.errors=e.errors.map((e=>a.get(e)))),e.pathTo&&(this.pathTo=e.pathTo),e.content&&(this.content=e.content)}addChild(e){this.children||(this.children=[]),this.children.push(e),this.increaseContentSize(e.size)}addHardlinks(e,t){this.hardlinks=e,this.hardlinksTotal=t}increaseContentSize(e){e&&(this._contentSize||(this._contentSize=0),this._contentSize+=e,this.parent&&e&&this.parent.increaseContentSize(e))}get size(){return"folder"===this.type?this._contentSize||0:this._size||0}get folders(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"folder"===e.type)))||[]}get files(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"file"===e.type)))||[]}get symlinks(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"symlink"===e.type)))||[]}get fifos(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"fifo"===e.type)))||[]}get charDevs(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"charDev"===e.type)))||[]}get blockDevs(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"blockDev"===e.type)))||[]}get sockets(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"socket"===e.type)))||[]}get isEmpty(){var e;return!Boolean(null==(e=this.children)?void 0:e.length)}get hasErrors(){var e;return Boolean(null==(e=this.errors)?void 0:e.length)}get root(){return this.parent?this.parent.root:this}get path(){return this.parent?[...this.parent.path,this]:[this]}get contentTypesStats(){return this.getContentTypesStats()}_getContentTypesStats(e=!0,t={},a=this){if("folder"===a.type&&a.children){for(const n of a.children)t[n.type]?t[n.type]++:t[n.type]=1,"folder"===n.type&&e&&this._getContentTypesStats(e,t,n);return t}}getContentTypesStats(e=!0){console.time("getContentTypesStats");const t=this._getContentTypesStats(e);return console.timeEnd("getContentTypesStats"),t}*[Symbol.iterator](){if(yield this,this.children)for(const e of this.children)yield*e}flat(){return[...this]}static flat(e){return e.map((e=>[...e])).flat()}get pathString(){return this.getPathString()}getPathString(e){const t=this.path.map((e=>e.name));let a;return a=e?[...e.path,...t].join(e.separator||"/"):t.join("/"),a.startsWith("//")?a.slice(1):a}}class EntryStreamParser{constructor(){this.rootId=0,this.map=new Map,this.hidMap=new Map}setMeta(e){this.meta=e;const t=e.errorsMap;t&&(this.errorsIDMap=new Map(Object.entries(t).map((([e,t])=>{const[a,n,s]=e.split(":");return[t,{code:a,syscall:n,errno:Number(s)}]}))))}parse(e){var t;let a=!1;for(const n of e){const e=null!=(t=this.map.get(n.pid))?t:null,s=new SimpleEntry(n,e,this.errorsIDMap);if("folder"===n.type&&this.map.set(n.id,s),null==e||e.addChild(s),n.hid){const e=this.hidMap.get(n.hid)||[];this.hidMap.set(n.hid,[...e,s])}n.pid===this.rootId&&(a=!0)}return{root:this.map.get(this.rootId),rootUpdated:a,processed:e.length}}processHIDMapAsync(){this.hidMap.size&&(console.log("[hidMap]:",this.hidMap),console.time("hidMap"),async function(e){let t=0,a=0;for(const[n,s]of e.entries()){if(!(t++%1e3)){const e=Date.now();e-a>15&&(a=e,await sleep())}const e=Number(n.split(":")[1]);s.forEach((t=>{t.addHardlinks(s,e)}))}}(this.hidMap).then((()=>console.timeEnd("hidMap"))))}}const te=new SimpleEntry({type:"folder",name:"",pid:null},null),ae=t(!1),ne=t(0),se=t(!1),oe=t(!1),re=t("");function clearSearch(){re.value=""}const ie=o([]);function setSearchResult(e){const t=s(e);ie.value=t,K.value=50,function(e){globalThis.search=e,console.log("globalThis.search:",e),Object.defineProperty(globalThis.search,"download",{get(){console.log("download")}}),Object.defineProperty(globalThis.search,"names",{get:()=>globalThis.search.map((e=>e.name))}),Object.defineProperty(globalThis.search,"namelist",{get:()=>globalThis.search.map((e=>e.name)).join("\n")})}(t)}function sortSearch(){const e=Date.now();ie.value.sort(comparator);const t=Date.now()-e;return console.log("[search][sort][time]",t,"ms"),l(ie),t}r([H,q],(()=>{sortSearch()}));let resolve=()=>{},le=Promise.resolve(!0);function normalize(e){return e.toLowerCase()}i((()=>{ae.value?(resolve(!1),le=new Promise((e=>resolve=e))):resolve(!0)}));const ce=function(e,t=50){let a;return function(){a&&clearTimeout(a),a=setTimeout((()=>{e.apply(this,arguments),a=null}),t)}}(performSearch,300);async function performSearch(){if(!1===await le)return;const e=me.value,t=re.value,a=c(e)?s(e):e,n=performance.now();se.value=!0;const{result:o,search:r}=await async function(e,t){var a,n,s,o;let r;if(console.log("[search]      ",t),t.startsWith("//"))t=t.slice(2),r=(e,t)=>e.includes(t);else{const e=normalize(t);e!==t&&(console.log("[search][norm]",e),t=e),r=(e,t)=>normalize(e).includes(t)}function justSearch(t){return findAll(e,(e=>r(e.name,t)))}if(["https://","http://"].some((e=>t.startsWith(e)))){const e=new URL(t);if("www.youtube.com"===e.hostname&&"/watch"===e.pathname)t=e.searchParams.get("v");else{const s=e.pathname.length>1&&e.pathname.endsWith("/"),o=null==(a=(s?e.pathname.slice(0,-1):e.pathname).match(/[^\/]+$/))?void 0:a[0];if(!o)return{result:[],search:t};const{name:r,ext:i}=(null==(n=o.match(/(?<name>.+)(\.(?<ext>.+))$/))?void 0:n.groups)||{name:o};t=r+(s&&i?`.${i}`:"")}return{result:await justSearch(t),search:t}}const i="\\/s(ize)?(?<defaultPrefix>b|k|m|g|t)?[:\\/]";if(t.match(new RegExp(i))){const a=new RegExp(i+"(?<extra1>(?<caret>\\^)|(?<dollar>\\$)|(?<percent>%))?"+"((?<sizeString1>\\s*\\d[\\d\\s\\,]*)((?<dotDecimal1>\\.(?<decimal1>\\d+)?))?(?<prefix1>b|k|m|g|t)?(?<exclamations>!+)?)"+`(?<range>${"(?<extra2>(?<plus>\\+)|(?<minus>\\-)|(?<tildes>\\~+))"}${"((?<sizeString2>\\s*-?\\s*\\d[\\d\\s\\,]*)((?<dotDecimal2>\\.(?<decimal2>\\d+)?))?(?<prefix2>b|k|m|g|t)?)?"})?`),{defaultPrefix:n,caret:o,dollar:r,percent:l,sizeString1:c,decimal1:u,prefix1:d,exclamations:p,plus:f,minus:h,tildes:v,sizeString2:m,decimal2:g,prefix2:y}=(null==(s=t.match(a))?void 0:s.groups)||{};if(c){let t,a,multiplyByPrefix=function(e,t="b"){if(void 0===e)return;const a=["b","k","m","g","t"];return Math.trunc(e*1024**a.indexOf(t))};console.log({defaultPrefix:n,extra1:{caret:o,dollar:r,percent:l},sizeString1:c,decimal1:u,prefix1:d,exclamations:p,extra2:{plus:f,minus:h,tildes:v,sizeString2:m,decimal2:g,prefix2:y}});let s=Number(c.replaceAll(/[\s,]/g,""));const i=s.toString();let b=m&&Number(m.replaceAll(/[\s,]/g,""));const S=null==b?void 0:b.toString(),w=u?Number("0."+u):0,k=g?Number("0."+g):0;async function rangeSearch(n,s){const{_min:o,max:r}=n<s?{_min:n,max:s}:{_min:s,max:n},i=Math.max(0,o);t=`Size search from ${bytesToSizeWinLike(i)} to ${bytesToSizeWinLike(r)}`,a=await findAll(e,(e=>e.size>=i&&e.size<=r))}if(s=multiplyByPrefix(s+w,d||n),b=multiplyByPrefix(b+k,y||n),o)t=`Size search starts with "${i}"`,a=await findAll(e,(e=>e.size.toString().startsWith(i)));else if(r)t=`Size search ends with "${i}"`,a=await findAll(e,(e=>e.size.toString().endsWith(i)));else if(l)t=`Size search includes "${i}"`,a=await findAll(e,(e=>e.size.toString().includes(i)));else if(f&&S)await rangeSearch(s,s+b);else if(h&&S)await rangeSearch(s,b);else if(v)if(S)await rangeSearch(s-b,s+b);else{const e=v.length,t=Math.trunc(5*s*e/100);await rangeSearch(s-t,s+t)}else{const o=d||n;if(o&&"b"!==o){let e=i.length,t=multiplyByPrefix(1,o);1===e&&(t=Math.trunc(t/10));let a=s-t,n=s+t;p&&(a=s,p.length>1&&(n=s+Math.trunc(t/10))),await rangeSearch(a,n)}else t=`Size search ${bytesToSizeWinLike(s)}`,a=await findAll(e,(e=>e.size===s))}return console.log(...blue(t)),{result:a,search:t}}{const e="No size to search";return console.log(...blue(e)),{result:[],search:e}}}if(t.startsWith("/")){const{type:a,word:n}=(null==(o=t.match(/\/type:(?<type>[^\/]+)\/?(?<word>[^\/]*)/))?void 0:o.groups)||{};if(a&&(console.log({type:a,word:n}),ee.includes(a))){return{result:await findAll(e,(e=>e.type===a&&r(e.name,n))),search:t}}}else if(t.includes(" ")){const e=t.split(" ").filter((e=>e));if(e.length>1){let a,n=await justSearch(e.shift());for(;a=e.shift();)n=n.filter((e=>e.name.includes(a)));return{result:n,search:t}}}return{result:await justSearch(t),search:t}}(a,t);if(se.value=!1,oe.value=!1,!o)return;addMessage(`Search time: ${(performance.now()-n).toFixed(2)} ms; `),await sleep(),setSearchResult(o);appendMessage(`Sort time: ${sortSearch().toFixed(2)} ms; `),await sleep(),console.time("search result size computing");const i=new Set(o),l=o.reduce(((e,t)=>computeEntrySize(t,i)+e),0),u=o.filter((e=>"folder"!==e.type)).reduce(((e,t)=>t.size+e),0);console.timeEnd("search result size computing"),console.log({allSize:l,filesSize:u}),appendMessage(`${o.length} items; size: ${bytesToSizeWinLike(u)} (${bytesToSizeWinLike(l)});  search: ${r}`)}function computeEntrySize(e,t){if("folder"!==e.type)return e.size;let a=0;for(const n of e.children||[])t.has(n)||("folder"===n.type?a+=computeEntrySize(n,t):a+=n.size);return a}async function findAll(e,t){let a=[],n=Date.now();for(const s of function*(e){const t=1e3;let a=[];function*takePart(e){for(const n of e.children||[])"folder"===n.type&&(yield*takePart(n)),a.push(n),a.length===t&&(yield a,a=[])}yield*takePart(e),yield a}(e)){const e=Date.now();e-n>15&&(n=e,await sleep());for(const n of s)t(n)&&a.push(n)}return a}async function*parseScan(e){const t=new EntryStreamParser;let a,n;if(e instanceof Response?a=e.headers.get("content-type"):e instanceof Blob&&(a=e.type),function(e){return Boolean(e.match(/^application\/.*?gzip/))}(a)){console.log("parseGZippedJSONScan");for await(const a of async function*(e){const t=new TextDecoder,a=new TextParser;let n=0,s=0;for await(const o of async function*(e){ue||await async function(){if(!ue){const e="https://cdn.jsdelivr.net/npm/pako@2.0.4/dist/pako_inflate.min.js",t="sha256-ZIKs3+RZEULSy0dR6c/mke8V9unZm9vuh05TqvtMdGU=";await function(e,t){return new Promise(((a,n)=>{const s=document.createElement("script");s.onload=a,s.onerror=a=>n({message:"Failed to load script",src:e,integrity:t,event:a}),s.src=e,s.async=!0,t&&(s.integrity=t,s.crossOrigin="anonymous"),document.body.append(s)}))}(e,t),ue=!0,console.log("pako is loaded")}}();let t=[];const a=new pako.Inflate;pako.Inflate.prototype.onData=function(e){t.push(e)};for await(const n of iterateAsyncDataSource(e)){a.push(n);for(const e of t)yield e;t=[]}yield a.result,a.err&&console.error(a.msg)}(e)){if(!(n++%20)){const e=Date.now();e-s>15&&(s=e,await sleep())}const e=t.decode(o,{stream:!0}),r=a.parsePart(e);r.length&&(yield r)}}(e))n||(n=a.shift(),t.setMeta(n)),yield{meta:n,...t.parse(a)}}else if(function(e){return Boolean(e.match(/^application\/.*?json/))}(a)){console.log("streamParseJSONScan");for await(const a of async function*(e){const t=new TextDecoder,a=new TextParser;let n=0,s=0;for await(const o of iterateAsyncDataSource(e)){if(!(n++%10)){const e=Date.now();e-s>15&&(s=e,await sleep())}const e=t.decode(o,{stream:!0}),r=a.parsePart(e);r.length&&(yield r)}}(e))n||(n=a.shift(),t.setMeta(n)),yield{meta:n,...t.parse(a)}}t.processHIDMapAsync()}r(re,(async(e,t)=>{e?(oe.value=!0,e.length-t.length>1?await performSearch():await ce()):setSearchResult([])}));class TextParser{constructor(){__publicField(this,"buffer",""),__publicField(this,"startHandled",!1),__publicField(this,"metaLines",[]),__publicField(this,"objects",[])}trimComma(e){return e.endsWith(",")?e.slice(0,-1):e}handleStart(e){if("["!==e)return""===e?(this.objects.push(this.metaLines.join("")),void(this.startHandled=!0)):void this.metaLines.push(e)}handleLine(e,t){t?this.buffer+=e:this.buffer?(this.objects.push(this.buffer+e),this.buffer=""):this.objects.push(e)}parsePart(e){const t=e.endsWith("\n]"),a=e.split("\n");for(let s=0;s<a.length;s++){const e=a[s],n=s===a.length-1;n&&t||(this.startHandled?this.handleLine(e,n):this.handleStart(e,n))}try{const e=JSON.parse(`[${this.trimComma(this.objects.join(""))}]`);return this.objects=[],e}catch(n){throw console.log(`[${this.trimComma(this.objects.join(""))}]`),console.log(this.objects),console.log(this,{isLastPart:t,textPart:e}),n}}}let ue=!1;const de=o(null),pe=o(null);function updateParsingState(){l(me)}const fe=new class{constructor(){this.abortRequested=!1,this._promise=Promise.resolve(),this._resolve=()=>{}}abort(){return this.abortRequested=!0,this._promise}start(){this._promise=new Promise((e=>this._resolve=e))}abortIfRequested(){return!!fe.abortRequested&&(this.abortRequested=!1,this._resolve(),!0)}};async function setScan(e){ae.value&&await fe.abort(),ne.value=0,ae.value=!0,fe.start();let t=!1,a=!1;const n=Date.now();let s,o=Date.now(),r=0;for await(const{meta:i,root:l,rootUpdated:c,processed:u}of parseScan(e)){if(r+=u,s){const e=(r/s*100).toPrecision(3);ne.value=Number(e)}if(fe.abortIfRequested())return console.log("[setScan][time][aborted]",Date.now()-n,"ms"),!1;!t&&i&&(de.value=i,t=!0,s=i.total,r-=1),!a&&l&&(pe.value=l,globalThis.root=l,openFolder(l),a=!0);const e=Date.now();(c||e-o>50)&&(o=e,updateParsingState(),await sleep())}return updateParsingState(),console.log("[setScan][time]:",Date.now()-n,"ms"),ae.value=!1,!0}const he=a((()=>{var e;return(null==(e=de.value)?void 0:e.separator)||"/"})),ve=a((()=>{var e;return(null==(e=de.value)?void 0:e.path)||[]})),me=o(te),ge=a((()=>me.value.path));function openFolder(e){clearSearch(),me.value=e,K.value=50,globalThis.folder=e,console.log("globalThis.folder:",e)}Object.defineProperty(globalThis,"flat",{get(){var e;return null==(e=globalThis.folder)?void 0:e.flat()}});const ye=a((()=>pe.value&&me.value.isEmpty));r(de,(async(e,t)=>{console.log("[meta]:",de.value);const{files:a,folders:n,symlinks:s,errors:o,total:r,scanDate:i}=de.value;de.value.scanDate&&addMessage(`files: "${a}" folders: "${n}", symlinks: "${s}", errors: "${o}", total: "${r}", scanDate: "${dateToDayDateString(i)}"`)}));const be={class:"scanPath"},Se=["title"],we={class:"part"},ke={class:"part spaced"},ze={key:0,class:"spaced separator"},De={setup(e){const t=a((()=>{if(!de.value)return;const{files:e,folders:t,symlinks:a,charDevs:n,blockDevs:s,fifos:o,sockets:r,total:i,platform:l,scanDate:c}=de.value;function doString(e){return Object.entries(e).map((([e,t])=>function(e){const t=3-Math.trunc(e.length/4);return e+"\t".repeat(t)}(e)+": "+t)).join("\n")}const u=doString({files:e,folders:t,symlinks:a}),d=doString({charDevs:n,blockDevs:s,fifos:o,sockets:r}),p=doString({total:i,platform:l,scanDate:dateToDayDateString(c)});let f;return f="win32"!==l?[u,d,p].join("\n"):[u,p].join("\n"),console.log(f),f})),n=a((()=>{var e;const t=[...ve.value,me.value.root.name].join(he.value);return t.startsWith("//")?t.slice(1):"win32"===(null==(e=de.value)?void 0:e.platform)?t[0].toUpperCase()+t.slice(1):t})),s=a((()=>[...n.value].slice(0,-1).join(""))),o=a((()=>[...n.value].slice(-1).join(""))),r=a((()=>ge.value.length-1&&"/"!==n.value));function goToRoot(){const e=me.value.root;debugMessageFromEntry(e),openFolder(e)}return(e,a)=>(u(),d("span",be,[p("span",{class:"parts",onClick:goToRoot,title:h(t)},[p("span",we,f(h(s)),1),p("span",ke,f(h(o)),1)],8,Se),h(r)?(u(),d("span",ze,f(h(he)),1)):v("",!0)]))},__scopeId:"data-v-7487a6bd"};const Te={class:"opened-folder"},xe={class:"part"},_e={class:"part spaced"},Me={key:0,class:"separator spaced"},Ee={props:["index","count","entry"],setup(e){const t=e,{index:n,count:s,entry:o}=m(t),r=a((()=>n.value+1===s.value)),i=a((()=>[...o.value.name].slice(0,-1).join(""))),l=a((()=>[...o.value.name].slice(-1).join("")));function onClick(){debugMessageFromEntry(o.value),openFolder(o.value)}return(e,t)=>(u(),d("span",Te,[p("span",{class:"parts",onClick:onClick},[p("span",xe,f(h(i)),1),p("span",_e,f(h(l)),1)]),h(r)?v("",!0):(u(),d("span",Me,f(h(he)),1))]))},__scopeId:"data-v-3c8242f7"};const Ce={class:"box"},$e={props:{maxWidth:{default:"max-content",type:String}},setup:e=>(t,a)=>(u(),d("div",Ce,[p("div",{class:"sub",style:y({maxWidth:e.maxWidth})},[g(t.$slots,"default",{},void 0,!0)],4)])),__scopeId:"data-v-f8be0ec4"};const Pe={setup(e){async function onContextmenu(e){e.preventDefault();const t=[...de.value.path,...me.value.path.map((e=>e.name))].join(he.value);console.log("Copy to clipboard:",t),await navigator.clipboard.writeText(t)}return(e,t)=>(u(),d("div",{class:"address",onContextmenu:onContextmenu},[b($e,null,{default:S((()=>[b(De)])),_:1}),(u(!0),d(w,null,k(h(ge).slice(1),((e,t)=>(u(),z($e,null,{default:S((()=>[b(Ee,{entry:e,index:t,count:h(ge).slice(1).length},null,8,["entry","index","count"])])),_:2},1024)))),256))],32))},__scopeId:"data-v-304c3618"};const je={class:"search-wrapper"},Ie={class:"search"},Fe=(e=>(_("data-v-a1c630b0"),e=e(),M(),e))((()=>p("label",{for:"json-scan-search-input",class:"fuck-off-lighthouse"},".",-1))),Le={setup(e){const a=t();function onClearClick(){clearSearch(),a.value.focus()}function onFocus(){!async function(){}()}return(e,t)=>(u(),d("div",je,[p("div",Ie,[D(p("input",{id:"json-scan-search-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>x(re)?re.value=e:null),ref_key:"inputRef",ref:a,onFocus:onFocus},null,544),[[T,h(re)]]),p("button",{onClick:onClearClick},"Clear")]),Fe]))},__scopeId:"data-v-a1c630b0"};class FileEntry{constructor({file:e,parent:t,type:a,name:n}){e&&(this.file=e),t&&(this.parent=t,t.addChild(this)),n&&(this._name=n),this.type=a}get name(){var e;return this._name||(null==(e=this.file)?void 0:e.name)}addChild(e){this.children||(this.children=[]),this.children.push(e),this.increaseContentSize(e.size)}increaseContentSize(e){e&&(this._contentSize||(this._contentSize=0),this._contentSize+=e,this.parent&&this.parent.increaseContentSize(e))}get size(){var e;return"folder"===this.type?this._contentSize||0:(null==(e=this.file)?void 0:e.size)||0}get mtime(){var e;return(null==(e=this.file)?void 0:e.lastModified)||0}get path(){return this.parent?[...this.parent.path,this]:[this]}*[Symbol.iterator](){if(yield this,this.children)for(const e of this.children)yield*e}flat(){return[...this]}static flat(e){return e.map((e=>[...e])).flat()}static async fromDataTransferItems(e){const t=await async function(e){const t=[];for(const a of e)t.push(await dtItemToFileSystemEntry(a));return t}(e);console.log("[fileSystemEntries]:",t);const a=[];for(const n of t)a.push(await fromFileSystemEntry(n));return a}static fromFiles(e){const t=[];for(const a of e)t.push(new FileEntry({file:a,type:"file"}));return t}}async function fromFileSystemEntry(e,t=null){if(e.isFile)try{const n=await(a=e,new Promise(((e,t)=>a.file(e,t))));return new FileEntry({file:n,type:"file",parent:t})}catch(n){return console.error("[fromFileSystemEntry][error]",e.name,n),null}else if(e.isDirectory){const a=new FileEntry({type:"folder",parent:t,name:e.name}),n=async function*(e){const t=e.createReader();let a=[];do{a=await new Promise(((e,a)=>t.readEntries(e,a)));for(const e of a)yield e}while(a.length)}(e);for await(const e of n)await fromFileSystemEntry(e,a);return a}var a}async function dtItemToFileSystemEntry(e){return e.webkitGetAsEntry()}const Be=t([]),Re=t([]),We=t(!1),Ae=t(0),Oe=t([]),Ne=t([]),He=t(!1);i((async()=>{const e=Date.now();He.value=!0,Re.value.length?Ne.value=await FileEntry.fromDataTransferItems(Re.value):Ne.value=FileEntry.fromFiles(Be.value),He.value=!1,console.log("[FileEntry parsing][time]:",Date.now()-e,"ms"),console.log("[fileEntries]",s(Ne.value))}));const Ue=a((()=>Ne.value[0])),qe=a((()=>Ne.value.length));function setDataTransfer(e){console.log(e),setFiles(e.files),function(e){const t=[...e];Re.value=t,console.log("[setDtItems]:",t),console.log(t[0].kind),console.log(t[0].type)}(e.items)}function setFiles(e){const t=[...e];Be.value=t,console.log("[setFiles]:",t)}const Ze={class:"default-hover-text"},Je={setup(e){const t=a((()=>{const e=Ae.value>1?"s":"";return`Drop ${Ae.value} file${e}`}));return(e,a)=>(u(),d("div",Ze,f(h(t)),1))},__scopeId:"data-v-6f26b9b7"};const Ke=["title"],Ge={key:0,class:"parsing"},Ye={key:1},Ve={key:2,style:{display:"contents"}},Qe=E("Select file"),Xe={setup(e){const t=a((()=>Ne.value.slice(0,50).map((e=>e.name)).join("\n")));return(e,a)=>(u(),d("div",{class:"default-prompt-text",title:h(t)},[h(He)?(u(),d("div",Ge,"Parsing...")):h(qe)?(u(),d("div",Ye,f(h(qe))+" file"+f(h(qe)>1?"s":""),1)):(u(),d("div",Ve,[g(e.$slots,"default",{},(()=>[Qe]),!0)]))],8,Ke))},__scopeId:"data-v-14bc35f2"};const et=["accept","multiple"],tt={key:0,class:"content hover"},at={key:1,class:"content selected"},nt={key:2,class:"content prompt"},st={props:{globalDropZone:{type:Boolean,default:!0},accept:{type:String,default:"*/*"},multiple:{type:Boolean,default:!0}},setup(e){const n=e,{globalDropZone:s}=m(n);function onFileInputChange(e){setFiles(e.target.files),Re.value=[]}const o=t(null),r=a((()=>s.value?document.body:o.value));function stopEvent(e){e.preventDefault(),e.stopPropagation()}function onDrop(e){stopEvent(e),We.value=!1,setDataTransfer(e.dataTransfer)}function onDragOver(e){stopEvent(e),e.dataTransfer.dropEffect="copy"}function onDragEnter(e){stopEvent(e),We.value||(We.value=!0,function(e){const t=e.items.length,a=[...e.items].map((e=>e.type)),n=[...new Set(a)];Ae.value=t,Oe.value=n,console.log("[setDataTransferHover]:",t,n)}(e.dataTransfer))}function onDragLeave(e){stopEvent(e),r.value.contains(e.relatedTarget)||(We.value=!1,Ae.value=0,Oe.value=[])}function onKeyDown(e){"Enter"===e.key&&o.value.querySelector("label").click()}return C((()=>{s.value||function(){const dragOverCallback=e=>{r.value.contains(e.target)||(stopEvent(e),e.dataTransfer.dropEffect="none")};document.body.addEventListener("dragover",dragOverCallback)}(),r.value.addEventListener("drop",onDrop),r.value.addEventListener("dragover",onDragOver),r.value.addEventListener("dragleave",onDragLeave),r.value.addEventListener("dragenter",onDragEnter)})),(t,a)=>(u(),d("div",{class:$(["file-input",{"drop-hover":h(We)}]),ref_key:"fileInputElem",ref:o,tabindex:"0",onKeydown:onKeyDown},[p("label",null,[p("input",{type:"file",accept:e.accept,multiple:e.multiple,onChange:onFileInputChange,style:{display:"none"}},null,40,et),h(We)?(u(),d("span",tt,[g(t.$slots,"hover",{},(()=>[b(Je)]),!0)])):h(Ue)&&!h(He)?(u(),d("span",at,[g(t.$slots,"selected",{},(()=>[b(Xe)]),!0)])):(u(),d("span",nt,[g(t.$slots,"prompt",{},(()=>[b(Xe)]),!0)]))]),(u(),z(P,{to:"body"},[p("div",{class:$(["file-input-hover-modal",{"drop-hover":h(We)}])},null,2)]))],34))},__scopeId:"data-v-17ae5af9"};const ot={class:"file-input-wrapper"},rt={setup:e=>(r(Ue,(()=>{Ue.value&&(clearSearch(),setScan(Ue.value.file))})),(e,t)=>(u(),d("div",ot,[b(st,{accept:"application/json,application/gzip",multiple:!1})]))),__scopeId:"data-v-25938aaa"};const it={class:"tabs"},lt=(e=>(_("data-v-0e71da96"),e=e(),M(),e))((()=>p("div",{class:"tab"},null,-1))),ct={setup:e=>(e,t)=>(u(),d("div",it,[b(rt,{class:"tab"}),lt])),__scopeId:"data-v-0e71da96"};const ut=["title"],dt={class:"icon"},pt={class:"name"},ft={class:"mtime"},ht={props:["entry"],setup(e){const t=m(e).entry,n=a((()=>t.value.hasErrors?"":bytesToSizeWinLike(t.value.size))),s=a((()=>"0 B"===n.value?"Z":n.value.split(" ")[1])),o=a((()=>t.value.hasErrors)),r=a((()=>{if(void 0===t.value.mtime)return"";return dateToDayDateTimeString(t.value.mtime,!1).slice(0,-3)})),i=a((()=>t.value.hasErrors?JSON.stringify(t.value.errors[0],null," "):"symlink"===t.value.type?t.value.pathTo:void 0)),l=a((()=>{const e=t.value.type;if("folder"===e)return"📁";if("file"===e){const e=t.value.name;return function(e){const{ext:t}=e.match(/(?<ext>[^.]+)$/).groups;return W.includes(t.toLowerCase())}(e)?"🎦":function(e){const{ext:t}=e.match(/(?<ext>[^.]+)$/).groups;return A.includes(t.toLowerCase())}(e)?"🖼":function(e){const{ext:t}=e.match(/(?<ext>[^.]+)$/).groups;return O.includes(t.toLowerCase())}(e)?"🎵":"📄"}return"symlink"===e?"🔗":"👾"}));function onClick(e){debugMessageFromEntry(t.value),"folder"===t.value.type&&openFolder(t.value)}function onMousedown(e){1===e.button&&(e.preventDefault(),console.log(t.value,t.value.getPathString(de.value)),me.value!==t.value.parent&&openFolder(t.value.parent))}function onMouseover(e){Q.value=t.value}function onMouseleave(e){Q.value=null}return(e,a)=>(u(),d("tr",{class:$(["row",{error:h(o)}]),onClick:onClick,onMousedown:onMousedown,onMouseover:onMouseover,onMouseleave:onMouseleave,title:h(i)},[p("td",dt,f(h(l)),1),p("td",pt,f(h(t).name),1),p("td",{class:$(["size",h(s)])},f(h(n)),3),p("td",ft,f(h(r)),1)],42,ut))},__scopeId:"data-v-71b46689"};const vt={setup(e){const a=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&V.value>K.value&&(K.value=K.value+50)})),n=t(null);return C((()=>{a.observe(n.value)})),j((()=>{a.disconnect()})),(e,t)=>(u(),d("div",{class:"intersection",ref_key:"intersection",ref:n},null,512))},__scopeId:"data-v-5baedc86"};const _withScopeId$3=e=>(_("data-v-7846eebc"),e=e(),M(),e),mt={key:0,class:"rows"},gt={key:1,class:"empty-message"},yt=[_withScopeId$3((()=>p("span",null,"The folder is empty.",-1)))],bt={key:2,class:"error-message"},St=_withScopeId$3((()=>p("h2",null,"Error",-1))),wt=_withScopeId$3((()=>p("td",null,"syscall",-1))),kt=_withScopeId$3((()=>p("td",null,"code",-1))),zt=_withScopeId$3((()=>p("td",null,"errno",-1))),Dt={setup(e){I((e=>({"69bcf61c":s.value})));const n=a((()=>!!me.value.hasErrors&&me.value.errors[0]));function onContextMenu(e){e.preventDefault(),me.value.parent&&openFolder(me.value.parent)}const s=t("880px");return C((()=>{const e=document.body.offsetWidth;if(e<1280){let t=880-(1280-e);t=t<140?140:t,s.value=`${t}px`}})),(e,t)=>(u(),d("div",{class:"content",onContextmenu:onContextMenu},[h(Y).length?(u(),d("table",mt,[p("tbody",null,[(u(!0),d(w,null,k(h(Y),(e=>(u(),z(ht,{entry:e,key:`${e.pathString}//${e.size}`},null,8,["entry"])))),128)),b(vt)])])):v("",!0),h(ye)&&!h(n)?(u(),d("div",gt,yt)):v("",!0),h(n)?(u(),d("div",bt,[p("div",null,[St,p("table",null,[p("tr",null,[wt,p("td",null,[p("pre",null,f(h(n).syscall),1)])]),p("tr",null,[kt,p("td",null,[p("pre",null,f(h(n).code),1)])]),p("tr",null,[zt,p("td",null,[p("pre",null,f(h(n).errno),1)])])])])])):v("",!0)],32))},__scopeId:"data-v-7846eebc"};const Tt={class:"status"},xt={setup(e){const t=a((()=>{var e;return(null==(e=Q.value)?void 0:e.size)&&bytesToSizeWinLike(Q.value.size)}));return(e,a)=>(u(),d("div",Tt,[p("span",null,"Items count: "+f(h(V)),1),D(p("span",null,". Hover item's size: "+f(h(t)),513),[[F,h(Q)]])]))},__scopeId:"data-v-08ca63fc"};const _t={class:"switch"},Mt={setup(e){function onClick(e){H.value===e&&(U.value[H.value]=!U.value[H.value]),H.value=e}return(e,t)=>(u(),d("div",_t,[p("button",{class:$(["order-by-name",{active:"name"===h(H)}]),title:"Order by name",onClick:t[0]||(t[0]=e=>onClick("name"))},f(h(U).name?"N":"n"),3),p("button",{class:$(["order-by-size",{active:"size"===h(H)}]),title:"Order by size",onClick:t[1]||(t[1]=e=>onClick("size"))},f(h(U).size?"S":"s"),3),p("button",{class:$(["order-by-date",{active:"mtime"===h(H)}]),title:"Order by date",onClick:t[2]||(t[2]=e=>onClick("mtime"))},f(h(U).mtime?"D":"d"),3)]))},__scopeId:"data-v-68f2d0ba"};const Et={class:"debug"},Ct={setup:e=>(e,t)=>(u(),d("div",Et,[p("span",null,f(h(X)),1)])),__scopeId:"data-v-0a247d01"};const $t={},Pt={class:"guide"},jt=[L('<div class="text-wrapper" data-v-30daed7b><h2 data-v-30daed7b>No scan selected</h2><div data-v-30daed7b>Use your own directory scan file (created with <a href="https://github.com/AlttiRi/directory-snapshot-explorer#how-to-use" target="_blank" data-v-30daed7b>the scanner</a>). </div><div class="" data-v-30daed7b>Or use the demo scans to take a look at the program work: <ul data-v-30daed7b><li data-v-30daed7b><a href="./?filepath=https://alttiri.github.io/json-flat-scans/windows-admin.json.gz" data-v-30daed7b>Win 10 scan (as Admin)</a></li><li data-v-30daed7b><a href="./?filepath=https://alttiri.github.io/json-flat-scans/ubuntu-admin.json.gz" data-v-30daed7b>Ubuntu scan (as Root)</a></li><li data-v-30daed7b><a href="./?filepath=https://alttiri.github.io/json-flat-scans/linux-master.json.gz" data-v-30daed7b>Linux Source Code scan</a></li></ul></div><div data-v-30daed7b>For more info see the <a href="https://github.com/AlttiRi/directory-snapshot-explorer#file-manager-snapshot-explorer" target="_blank" data-v-30daed7b>Readme</a>.</div></div>',1)];$t.render=function(e,t){return u(),d("div",Pt,jt)},$t.__scopeId="data-v-30daed7b";const It={},Ft={class:"inner-modal"};It.render=function(e,t){return u(),d("div",Ft,[g(e.$slots,"default",{},void 0,!0)])},It.__scopeId="data-v-462d7e6d";const Lt=["title"],Bt=(e=>(_("data-v-52c584b5"),e=e(),M(),e))((()=>p("div",{class:"invisible"},null,-1))),Rt={setup(e){const n=t(performance.memory),s=a((()=>n.value.jsHeapSizeLimit)),o=a((()=>n.value.totalJSHeapSize));a((()=>n.value.usedJSHeapSize));const r=t(null),i=t(!1),l=t(!1),c=a((()=>{const e=o.value/(s.value/100);return i.value=e>100,i.value?100:e})),f=a((()=>bytesToSizeWinLike(o.value))),m=a((()=>n.value));function onMousedown(e){0===e.button&&(l.value=!0),1===e.button&&(e.preventDefault(),l.value=!1,console.clear())}return C((()=>{m.value&&(r.value=setInterval((()=>{n.value=performance.memory}),1e3))})),j((()=>{r.value&&clearInterval(r.value)})),(e,t)=>h(m)?(u(),d("div",{key:0,class:"memory-consuming-component",style:y({width:h(c)+"%"}),title:"Heap size: "+h(f)+(l.value?"\nUse middle mouse button click to clear the console.":""),onMousedown:onMousedown},[p("div",{class:$(["visible",{over100:i.value}])},null,2),Bt],44,Lt)):v("",!0)},__scopeId:"data-v-52c584b5"};const Wt=[(e=>(_("data-v-1eec05ac"),e=e(),M(),e))((()=>p("div",{class:"visible"},null,-1)))],At={setup:e=>(e,t)=>h(ae)?(u(),d("div",{key:0,class:"scan-parsing-progress-component",style:y({width:h(ne)+"%"})},Wt,4)):v("",!0),__scopeId:"data-v-1eec05ac"};const _withScopeId=e=>(_("data-v-62800b56"),e=e(),M(),e),Ot={class:"main"},Nt=E(" [Search]: Scan parsing awaiting "),Ht=_withScopeId((()=>p("div",{class:"readme"},[p("i",null,[p("a",{href:"https://github.com/AlttiRi/directory-snapshot-explorer#file-manager-snapshot-explorer",target:"_blank"},"i")])],-1))),Ut={setup(e){globalThis.bytesToSize=bytesToSize,globalThis.bytesToSizeWinLike=bytesToSizeWinLike;const t=a((()=>!de.value&&!new URL(location.href).searchParams.get("filepath")));return C((async()=>{const e=new URL(location.href),t=e.searchParams.get("filepath");if(t){const e=await fetch(t);await setScan(e)}const a=e.searchParams.get("search");a&&(re.value=a)})),(e,a)=>(u(),d("div",Ot,[b(Rt),b(At),b(Mt,{style:{"grid-area":"switch"}}),b(Pe,{style:{"grid-area":"address"}}),b(Le,{style:{"grid-area":"search"}}),b(ct,{style:{"grid-area":"tabs"}}),h(t)?(u(),z($t,{key:0,style:{"grid-area":"content"}})):h(ae)&&h(oe)?(u(),z(It,{key:1,style:{"grid-area":"content"}},{default:S((()=>[Nt])),_:1})):(u(),z(Dt,{key:2,style:{"grid-area":"content"}})),b(xt,{style:{"grid-area":"status"}}),b(Ct,{style:{"grid-area":"debug"}}),Ht]))},__scopeId:"data-v-62800b56"};B({setup:e=>(e,t)=>(u(),z(Ut))}).mount("#app");
//# sourceMappingURL=index.js.map
