var e=Object.defineProperty,t=("undefined"!=typeof require&&require,(t,n,a)=>(((t,n,a)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a})(t,"symbol"!=typeof n?n+"":n,a),a));import{r as n,c as a,i as s,t as o,w as r,a as l,m as i,u as c,p as u,b as d,o as p,d as h,e as f,f as v,g as m,h as y,j as g,n as b,k as w,l as S,F as k,q as D,s as M,v as T,x as j,y as _,z as P,A as I,B as x,C as z,D as C,E as $,G as E}from"./vendor.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&processPreload(e)})).observe(document,{childList:!0,subtree:!0})}function processPreload(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const B=globalThis.setImmediate||function(){const{port1:e,port2:t}=new MessageChannel,n=[];return e.onmessage=function(){n.shift()()},function(e){t.postMessage(null),n.push(e)}}();function sleep(e){return new Promise(void 0===e?e=>B(e):t=>setTimeout(t,e))}const L=["mp4","webm","mkv","avi"];const F=["png","jpg","jpeg","gif","tiff","webp"];function dateToDayDateString(e,t=!0){const n=new Date(e);function pad2(e){return e.toString().padStart(2,"0")}"Invalid Date"===n.toString()&&console.warn("Invalid Date value: ",e);const a=t?"UTC":"",s=n[`get${a}FullYear`](),o=n[`get${a}Month`]()+1,r=n[`get${a}Date`]();return s+"."+pad2(o)+"."+pad2(r)}function dateToDayDateTimeString(e,t=!0){const n=new Date(e);function pad2(e){return e.toString().padStart(2,"0")}const a=t?"UTC":"",s=n[`get${a}Hours`](),o=n[`get${a}Minutes`](),r=n[`get${a}Seconds`](),l=pad2(s)+":"+pad2(o)+":"+pad2(r);return dateToDayDateString(n,t)+" "+l+(t?"Z":"")}async function*iterateAsyncDataSource(e){if(e instanceof Response&&(e=e.body),e instanceof ReadableStream)yield*async function*(e){const t=e.getReader();for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}(e);else if(e instanceof Blob)for(const t of function*(e,t=2097152){let n=0;for(;;){const a=e.slice(n,n+t);if(!a.size)break;yield read(a),n+=t}async function read(e){return new Uint8Array(await e.arrayBuffer())}}(e))yield await t}function bytesToSizeWinLike(e){if(e<1024)return e+" B";let t=Math.floor(Math.log(e)/Math.log(1024)),n=e/Math.pow(1024,t);return n>=1e3&&(t++,n/=1024),function(e){let t;e<10?t=Math.trunc(100*e)/100:e<100?t=Math.trunc(10*e)/10:e<1e3&&(t=Math.trunc(e));if(e<.1)return t.toPrecision(1);if(e<1)return t.toPrecision(2);return t.toPrecision(3)}(n)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}const O=n(!0),{compare:R}=new Intl.Collator(void 0,{numeric:!0,sensitivity:"accent"});function comparator(e,t){return O.value?R(e.name,t.name):0}const W=a((()=>(te.value,[...se.value.folders.sort(comparator),...se.value.files.sort(comparator),...se.value.symlinks.sort(comparator),...se.value.fifos.sort(comparator),...se.value.charDevs.sort(comparator),...se.value.blockDevs.sort(comparator),...se.value.sockets.sort(comparator)]))),A=n(50),U=a((()=>K.value.length?V.value:W.value)),H=a((()=>U.value.slice(0,A.value))),N=a((()=>V.value.length>A.value?V.value.length:U.value.length)),Z=n(null),q=n("");function addMessage(e){q.value=e}function appendMessage(e){q.value+=e}function debugMessageFromEntry(e){var t;if(console.log(s(e)?"Proxy:":"Raw:",o(e)),e.hasErrors)q.value="";else{const n='"'+e.name.slice(0,20)+(e.name.length<20?"":"...")+'"';let a="";a+=`mtime "${dateToDayDateTimeString(e.mtime,!1)}"`,a+=` —  btime "${dateToDayDateTimeString(null!=(t=e.btime)?t:0,!1)}"`,a+=` — ${n} — ${e.size} (${bytesToSizeWinLike(e.size)})`,q.value=a}}const G=["folder","file","symlink","fifo","charDev","blockDev","socket"];class SimpleEntry{constructor(e,t,n){this.name=e.name,this.parent=t,this.type=e.type,e.size&&(this._size=e.size),e.mtime&&(this.mtime=e.mtime),e.btime&&(this.btime=e.btime),e.errors&&(this.errors=e.errors.map((e=>n.get(e)))),e.pathTo&&(this.pathTo=e.pathTo),e.content&&(this.content=e.content)}addChild(e){this.children||(this.children=[]),this.children.push(e),this.increaseContentSize(e.size)}addHardlinks(e,t){this.hardlinks=e,this.hardlinksTotal=t}increaseContentSize(e){e&&(this._contentSize||(this._contentSize=0),this._contentSize+=e,this.parent&&e&&this.parent.increaseContentSize(e))}get size(){return"folder"===this.type?this._contentSize||0:this._size||0}get folders(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"folder"===e.type)))||[]}get files(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"file"===e.type)))||[]}get symlinks(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"symlink"===e.type)))||[]}get fifos(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"fifo"===e.type)))||[]}get charDevs(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"charDev"===e.type)))||[]}get blockDevs(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"blockDev"===e.type)))||[]}get sockets(){var e;return(null==(e=this.children)?void 0:e.filter((e=>"socket"===e.type)))||[]}get isEmpty(){var e;return!Boolean(null==(e=this.children)?void 0:e.length)}get hasErrors(){var e;return Boolean(null==(e=this.errors)?void 0:e.length)}get root(){return this.parent?this.parent.root:this}get path(){return this.parent?[...this.parent.path,this]:[this]}}class EntryStreamParser{constructor(){this.rootId=0,this.map=new Map,this.hidMap=new Map}setMeta(e){this.meta=e;const t=e.errorsMap;t&&(this.errorsIDMap=new Map(Object.entries(t).map((([e,t])=>{const[n,a,s]=e.split(":");return[t,{code:n,syscall:a,errno:Number(s)}]}))))}parse(e){var t;let n=!1;for(const a of e){const e=null!=(t=this.map.get(a.pid))?t:null,s=new SimpleEntry(a,e,this.errorsIDMap);if("folder"===a.type&&this.map.set(a.id,s),null==e||e.addChild(s),a.hid){const e=this.hidMap.get(a.hid)||[];this.hidMap.set(a.hid,[...e,s])}a.pid===this.rootId&&(n=!0)}return{root:this.map.get(this.rootId),rootUpdated:n}}processHIDMapAsync(){this.hidMap.size&&(console.log("[hidMap]:",this.hidMap),console.time("hidMap"),async function(e){let t=0,n=0;for(const[a,s]of e.entries()){if(!(t++%1e3)){const e=Date.now();e-n>15&&(n=e,await sleep())}const e=Number(a.split(":")[1]);s.forEach((t=>{t.addHardlinks(s,e)}))}}(this.hidMap).then((()=>console.timeEnd("hidMap"))))}}const J=new SimpleEntry({type:"folder",name:"",pid:null},null),K=n("");function clearSearch(){K.value=""}const V=n([]);function setSearchResult(e){const t=o(e);V.value=t,A.value=50,globalThis.search=t,console.log("globalThis.search:",t),Object.defineProperty(globalThis.search,"download",{get(){console.log("download")}}),Object.defineProperty(globalThis.search,"names",{get:()=>globalThis.search.map((e=>e.name))}),Object.defineProperty(globalThis.search,"namelist",{get:()=>globalThis.search.map((e=>e.name)).join("\n")})}const Y=function(e,t=50){let n;return function(){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,arguments),n=null}),t)}}(performSearch,300);async function performSearch(){const e=se.value,t=K.value,n=l(e)?o(e):e,a=performance.now(),s=await async function(e,t){var n;if(t.startsWith("//"))return justSearch(t.slice(2));if(t.startsWith("/")){const{type:a,word:s}=(null==(n=t.match(/\/type:(?<type>[^\/]+)\/?(?<word>[^\/]*)/))?void 0:n.groups)||{};if(a&&(console.log({type:a,word:s}),G.includes(a)))return findAll(e,(e=>e.type===a&&e.name.includes(s)))}else if(t.includes(" ")){const e=t.split(" ").filter((e=>e));if(e.length>1){let t,n=await justSearch(e.shift());for(;t=e.shift();)n=n.filter((e=>e.name.includes(t)));return n}}return justSearch(t);function justSearch(t){return findAll(e,(e=>e.name.includes(t)))}}(n,t);if(!s)return;addMessage(`Search time: ${(performance.now()-a).toFixed(2)} ms; `),await sleep();const r=performance.now(),i=s.sort(comparator);appendMessage(`Sort time: ${(performance.now()-r).toFixed(2)} ms; `),await sleep(),setSearchResult(i),appendMessage(`${s.length} items; search: ${t}`)}async function findAll(e,t){let n=[],a=Date.now();for(const s of function*(e){const t=1e3;let n=[];function*takePart(e){for(const a of e.children||[])"folder"===a.type&&(yield*takePart(a)),n.push(a),n.length===t&&(yield n,n=[])}yield*takePart(e),yield n}(e)){const e=Date.now();e-a>15&&(a=e,await sleep());for(const a of s)t(a)&&n.push(a)}return n}async function*parseScan(e){const t=new EntryStreamParser;let n,a;if(e instanceof Response?n=e.headers.get("content-type"):e instanceof Blob&&(n=e.type),function(e){return Boolean(e.match(/^application\/.*?gzip/))}(n)){console.log("parseGZippedJSONScan");for await(const n of async function*(e){const t=new TextDecoder,n=new TextParser;let a=0,s=0;for await(const o of async function*(e){Q||await async function(){if(!Q){const e="https://cdn.jsdelivr.net/npm/pako@2.0.4/dist/pako_inflate.min.js",t="sha256-ZIKs3+RZEULSy0dR6c/mke8V9unZm9vuh05TqvtMdGU=";await function(e,t){return new Promise(((n,a)=>{const s=document.createElement("script");s.onload=n,s.onerror=n=>a({message:"Failed to load script",src:e,integrity:t,event:n}),s.src=e,s.async=!0,t&&(s.integrity=t,s.crossOrigin="anonymous"),document.body.append(s)}))}(e,t),Q=!0,console.log("pako is loaded")}}();let t=[];const n=new pako.Inflate;pako.Inflate.prototype.onData=function(e){t.push(e)};for await(const a of iterateAsyncDataSource(e)){n.push(a);for(const e of t)yield e;t=[]}yield n.result,n.err&&console.error(n.msg)}(e)){if(!(a++%20)){const e=Date.now();e-s>15&&(s=e,await sleep())}const e=t.decode(o,{stream:!0}),r=n.parsePart(e);r.length&&(yield r)}}(e))a||(a=n.shift(),t.setMeta(a)),yield{meta:a,...t.parse(n)}}else if(function(e){return Boolean(e.match(/^application\/.*?json/))}(n)){console.log("streamParseJSONScan");for await(const n of async function*(e){const t=new TextDecoder,n=new TextParser;let a=0,s=0;for await(const o of iterateAsyncDataSource(e)){if(!(a++%10)){const e=Date.now();e-s>15&&(s=e,await sleep())}const e=t.decode(o,{stream:!0}),r=n.parsePart(e);r.length&&(yield r)}}(e))a||(a=n.shift(),t.setMeta(a)),yield{meta:a,...t.parse(n)}}t.processHIDMapAsync()}r(K,(async(e,t)=>{e?e.length-t.length>1?await performSearch():await Y():setSearchResult([])}));class TextParser{constructor(){t(this,"buffer",""),t(this,"startHandled",!1),t(this,"metaLines",[]),t(this,"objects",[])}trimComma(e){return e.endsWith(",")?e.slice(0,-1):e}handleStart(e){if("["!==e)return""===e?(this.objects.push(this.metaLines.join("")),void(this.startHandled=!0)):void this.metaLines.push(e)}handleLine(e,t){t?this.buffer+=e:this.buffer?(this.objects.push(this.buffer+e),this.buffer=""):this.objects.push(e)}parsePart(e){const t=e.endsWith("\n]"),n=e.split("\n");for(let s=0;s<n.length;s++){const e=n[s],a=s===n.length-1;a&&t||(this.startHandled?this.handleLine(e,a):this.handleStart(e,a))}try{const e=JSON.parse(`[${this.trimComma(this.objects.join(""))}]`);return this.objects=[],e}catch(a){throw console.log(`[${this.trimComma(this.objects.join(""))}]`),console.log(this.objects),console.log(this,{isLastPart:t,textPart:e}),a}}}let Q=!1;const X=n(null),ee=n(null),te=n(0);async function setScan(e){let t=!1,n=!1;console.time("setScan");let a=Date.now();for await(const{meta:s,root:o,rootUpdated:r}of parseScan(e)){!t&&s&&(X.value=i(s),t=!0),!n&&o&&(ee.value=i(o),globalThis.json=o,openFolder(o),n=!0);const e=Date.now();(r||e-a>50)&&(a=e,te.value++,await sleep())}te.value++,console.timeEnd("setScan"),clearSearch()}const ne=a((()=>{var e;return(null==(e=X.value)?void 0:e.separator)||"/"})),ae=a((()=>{var e;return(null==(e=X.value)?void 0:e.path)||[]})),se=n(J),oe=a((()=>se.value.path));function openFolder(e){clearSearch(),se.value=i(c(e)),A.value=50}const re=a((()=>ee.value&&se.value.isEmpty));r(X,(async(e,t)=>{console.log("[meta]:",X.value);const{files:n,folders:a,symlinks:s,errors:o,total:r,scanDate:l}=X.value;X.value.scanDate&&addMessage(`files: "${n}" folders: "${a}", symlinks: "${s}", errors: "${o}", total: "${r}", scanDate: "${dateToDayDateString(l)}"`)}));u("data-v-7487a6bd");const le={class:"scanPath"},ie=["title"],ce={class:"part"},ue={class:"part spaced"},de={key:0,class:"spaced separator"};d();const pe={setup(e){const t=a((()=>{if(!X.value)return;const{files:e,folders:t,symlinks:n,charDevs:a,blockDevs:s,fifos:o,sockets:r,total:l,platform:i,scanDate:c}=X.value;function doString(e){return Object.entries(e).map((([e,t])=>function(e){const t=3-Math.trunc(e.length/4);return e+"\t".repeat(t)}(e)+": "+t)).join("\n")}const u=doString({files:e,folders:t,symlinks:n}),d=doString({charDevs:a,blockDevs:s,fifos:o,sockets:r}),p=doString({total:l,platform:i,scanDate:dateToDayDateString(c)});let h;return h="win32"!==i?[u,d,p].join("\n"):[u,p].join("\n"),console.log(h),h})),n=a((()=>{var e;const t=[...ae.value,se.value.root.name].join(ne.value);return t.startsWith("//")?t.slice(1):"win32"===(null==(e=X.value)?void 0:e.platform)?t[0].toUpperCase()+t.slice(1):t})),s=a((()=>[...n.value].slice(0,-1).join(""))),o=a((()=>[...n.value].slice(-1).join(""))),r=a((()=>oe.value.length-1&&"/"!==n.value));function goToRoot(){const e=se.value.root;debugMessageFromEntry(e),openFolder(e)}return(e,n)=>(p(),h("span",le,[f("span",{class:"parts",onClick:goToRoot,title:c(t)},[f("span",ce,v(c(s)),1),f("span",ue,v(c(o)),1)],8,ie),c(r)?(p(),h("span",de,v(c(ne)),1)):m("",!0)]))},__scopeId:"data-v-7487a6bd"};u("data-v-3c8242f7");const he={class:"opened-folder"},fe={class:"part"},ve={class:"part spaced"},me={key:0,class:"separator spaced"};d();const ye={props:["index","count","entry"],setup(e){const t=e,{index:n,count:s,entry:o}=y(t),r=a((()=>n.value+1===s.value)),l=a((()=>[...o.value.name].slice(0,-1).join(""))),i=a((()=>[...o.value.name].slice(-1).join("")));function onClick(){debugMessageFromEntry(o.value),openFolder(o.value)}return(e,t)=>(p(),h("span",he,[f("span",{class:"parts",onClick:onClick},[f("span",fe,v(c(l)),1),f("span",ve,v(c(i)),1)]),c(r)?m("",!0):(p(),h("span",me,v(c(ne)),1))]))},__scopeId:"data-v-3c8242f7"};u("data-v-f8be0ec4");const ge={class:"box"};d();const be={props:{maxWidth:{default:"max-content",type:String}},setup:e=>(t,n)=>(p(),h("div",ge,[f("div",{class:"sub",style:b({maxWidth:e.maxWidth})},[g(t.$slots,"default",{},void 0,!0)],4)])),__scopeId:"data-v-f8be0ec4"};u("data-v-55c28eea");const we={class:"address"};d();const Se={setup:e=>(e,t)=>(p(),h("div",we,[w(be,null,{default:S((()=>[w(pe)])),_:1}),(p(!0),h(k,null,D(c(oe).slice(1),((e,t)=>(p(),M(be,null,{default:S((()=>[w(ye,{entry:e,index:t,count:c(oe).slice(1).length},null,8,["entry","index","count"])])),_:2},1024)))),256))])),__scopeId:"data-v-55c28eea"};u("data-v-25e26c47");const ke={style:{display:"contents"}},De={class:"search"},Me=f("label",{for:"json-scan-search-input",class:"fuck-off-lighthouse"},".",-1);d();const Te={setup:e=>(e,t)=>(p(),h("div",ke,[f("div",De,[T(f("input",{id:"json-scan-search-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>_(K)?K.value=e:null)},null,512),[[j,c(K)]]),f("button",{onClick:t[1]||(t[1]=(...e)=>c(clearSearch)&&c(clearSearch)(...e))},"Clear")]),Me])),__scopeId:"data-v-25e26c47"};u("data-v-23a29b76");const je={class:"file-select"},_e=P(" Select file "),Pe=f("hr",null,null,-1);d();const Ie={setup(e){function onChange(e){return setScan(e.target.files[0])}return(e,t)=>(p(),h("div",je,[f("label",null,[_e,f("input",{type:"file",accept:"application/json,application/gzip",onChange:onChange},null,32)]),Pe]))},__scopeId:"data-v-23a29b76"};u("data-v-4cf83322");const xe={class:"tabs"},ze=f("div",{class:"tab"},null,-1);d();const Ce={setup:e=>(e,t)=>(p(),h("div",xe,[w(Ie,{class:"tab"}),ze])),__scopeId:"data-v-4cf83322"};u("data-v-03145971");const $e=["title"],Ee={class:"icon"},Be={class:"name"},Le={class:"mtime"};d();const Fe={props:["entry"],setup(e){const t=e,n=a((()=>(te.value,o.value.hasErrors?"":bytesToSizeWinLike(o.value.size)))),s=a((()=>"0 B"===n.value?"Z":n.value.split(" ")[1])),o=y(t).entry,r=a((()=>o.value.hasErrors)),l=a((()=>{if(void 0===o.value.mtime)return"";return dateToDayDateTimeString(o.value.mtime,!1).slice(0,-3)})),i=a((()=>o.value.hasErrors?JSON.stringify(o.value.errors[0],null," "):"symlink"===o.value.type?o.value.pathTo:void 0)),u=a((()=>"folder"===o.value.type?"📁":"file"===o.value.type?function(e){const{ext:t}=e.match(/(?<ext>[^.]+)$/).groups;return L.includes(t)}(o.value.name)?"🎦":function(e){const{ext:t}=e.match(/(?<ext>[^.]+)$/).groups;return F.includes(t)}(o.value.name)?"🖼":"📄":"symlink"===o.value.type?"🔗":"👾"));function onClick(e){debugMessageFromEntry(o.value),"folder"===o.value.type&&openFolder(o.value)}function onMousedown(e){1===e.button&&(e.preventDefault(),console.log(o.value,[...X.value.path,...o.value.path.map((e=>e.name))].join(ne.value).replace("//","/")))}function onMouseover(e){Z.value=o.value}function onMouseleave(e){Z.value=null}return(e,t)=>(p(),h("tr",{class:I(["row",{error:c(r)}]),onClick:onClick,onMousedown:onMousedown,onMouseover:onMouseover,onMouseleave:onMouseleave,title:c(i)},[f("td",Ee,v(c(u)),1),f("td",Be,v(c(o).name),1),f("td",{class:I(["size",c(s)])},v(c(n)),3),f("td",Le,v(c(l)),1)],42,$e))},__scopeId:"data-v-03145971"};const Oe={setup(e){const t=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&N.value>A.value&&(A.value=A.value+50)})),a=n(null);return x((()=>{t.observe(a.value)})),z((()=>{t.disconnect()})),(e,t)=>(p(),h("div",{class:"intersection",ref:(e,t)=>{t.intersection=e,a.value=e}},null,512))},__scopeId:"data-v-5baedc86"};u("data-v-d2171e22");const Re={key:0,class:"rows"},We={key:1,class:"empty-message"},Ae=[f("span",null,"The folder is empty.",-1)],Ue={key:2,class:"error-message"},He=f("h2",null,"Error",-1),Ne=f("td",null,"syscall",-1),Ze=f("td",null,"code",-1),qe=f("td",null,"errno",-1);d();const Ge={setup(e){C((e=>({"78b3c76e":s.value})));const t=a((()=>!!se.value.hasErrors&&se.value.errors[0]));function onContextMenu(e){e.preventDefault(),se.value.parent&&openFolder(se.value.parent)}const s=n("880px");return x((()=>{const e=document.body.offsetWidth;if(e<1280){let t=880-(1280-e);t=t<140?140:t,s.value=`${t}px`}})),(e,n)=>(p(),h("div",{class:"content",onContextmenu:onContextMenu},[c(H).length?(p(),h("table",Re,[f("tbody",null,[(p(!0),h(k,null,D(c(H),(e=>(p(),M(Fe,{entry:e},null,8,["entry"])))),256)),w(Oe)])])):m("",!0),c(re)&&!c(t)?(p(),h("div",We,Ae)):m("",!0),c(t)?(p(),h("div",Ue,[f("div",null,[He,f("table",null,[f("tr",null,[Ne,f("td",null,[f("pre",null,v(c(t).syscall),1)])]),f("tr",null,[Ze,f("td",null,[f("pre",null,v(c(t).code),1)])]),f("tr",null,[qe,f("td",null,[f("pre",null,v(c(t).errno),1)])])])])])):m("",!0)],32))},__scopeId:"data-v-d2171e22"};u("data-v-08ca63fc");const Je={class:"status"};d();const Ke={setup(e){const t=a((()=>{var e;return(null==(e=Z.value)?void 0:e.size)&&bytesToSizeWinLike(Z.value.size)}));return(e,n)=>(p(),h("div",Je,[f("span",null,"Items count: "+v(c(N)),1),T(f("span",null,". Hover item's size: "+v(c(t)),513),[[$,c(Z)]])]))},__scopeId:"data-v-08ca63fc"};u("data-v-16910406");const Ve={class:"debug"},Ye={key:0},Qe={key:1};d();const Xe={setup:e=>(e,t)=>(p(),h("div",Ve,[c(q)?(p(),h("span",Ye,v(c(q)),1)):(p(),h("span",Qe,"_"))])),__scopeId:"data-v-16910406"};u("data-v-5362b760");const et={class:"main"},tt=f("div",{style:{"grid-area":"switch"}},null,-1);d();const nt={setup:e=>(x((async()=>{const e=new URL(location.href),t=e.searchParams.get("filepath");if(t){const e=await fetch(t);await setScan(e)}const n=e.searchParams.get("search");n&&(K.value=n)})),(e,t)=>(p(),h("div",et,[tt,w(Se,{style:{"grid-area":"address"}}),w(Te,{style:{"grid-area":"search"}}),w(Ce,{style:{"grid-area":"tabs"}}),w(Ge,{style:{"grid-area":"content"}}),w(Ke,{style:{"grid-area":"status"}}),w(Xe,{style:{"grid-area":"debug"}})]))),__scopeId:"data-v-5362b760"};E({setup:e=>(e,t)=>(p(),M(nt))}).mount("#app");
//# sourceMappingURL=index.js.map
