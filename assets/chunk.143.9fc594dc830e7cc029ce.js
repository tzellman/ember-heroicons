var __ember_auto_import__;(()=>{var e={749:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>l,modifier:()=>c})
var i=r(292)
const n=require("@ember/modifier"),o=require("@ember/destroyable")
function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u{constructor(e){this.owner=e,s(this,"capabilities",(0,n.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t)
i.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class l{constructor(e,t){(0,i.setOwner)(this,e)}modify(e,t,r){}}(0,n.setModifierManager)((e=>new u(e)),l)
const a=new class{constructor(){s(this,"capabilities",(0,n.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const i=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:n,named:o}=r,s=e.instance(t,n,o)
"function"==typeof s&&(i.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
function c(e){return(0,n.setModifierManager)((()=>a),e)}},95:(e,t,r)=>{"use strict"
function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function o(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>n,b:()=>i})},386:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
var i=r(95),n=r(574),o=r(797),s=r.n(o)
const u=require("@ember/object/internals")
var l,a,c
let p=(l=(0,n.inject)("page-title"),a=class extends(s()){get tokenId(){return(0,u.guidFor)(this)}constructor(){super(...arguments),(0,i.a)(this,"tokens",c,this),this.tokens.push({id:this.tokenId})}compute(e,t){let r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},c=(0,i._)(a.prototype,"tokens",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)},455:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>y})
var i=r(95),n=r(292)
const o=require("@ember/runloop")
var s=r(574),u=r.n(s),l=r(866)
const a=require("@ember/debug")
var c,p,d,f,h
let m="undefined"!=typeof FastBoot
const b="routeDidChange"
let y=(c=(0,s.inject)("router"),p=(0,s.inject)("-document"),d=class extends(u()){constructor(){super(...arguments),(0,i.a)(this,"router",f,this),(0,i.a)(this,"document",h,this),(0,i.b)(this,"tokens",[]),(0,i.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,i.b)(this,"scheduleTitleUpdate",(()=>{(0,o.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement()
let e=(0,n.getOwner)(this).resolveRegistration("config:environment")
e.pageTitle&&["separator","prepend","replace"].forEach((t=>{(0,l.isEmpty)(e.pageTitle[t])||(this._defaultConfig[t]=e.pageTitle[t])})),this.router.on(b,this.scheduleTitleUpdate)}applyTokenDefaults(e){let t=this._defaultConfig.separator,r=this._defaultConfig.prepend,i=this._defaultConfig.replace
null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){let t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){let t=this._findTokenById(e.id)
if(t){let r=this.tokens.indexOf(t),i=[...this.tokens],n=t.previous
return e.previous=n,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(r,1,e),void(this.tokens=i)}let r=this.tokens.slice(-1)[0]
r&&(e.previous=r,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){let t=this._findTokenById(e),{next:r,previous:i}=t
r&&(r.previous=i),i&&(i.next=r),t.previous=t.next=null
let n=[...this.tokens]
n.splice(n.indexOf(t),1),this.tokens=n}get visibleTokens(){let e=this.tokens,t=e?e.length:0,r=[]
for(;t--;){let i=e[t]
if(i.replace){r.unshift(i)
break}r.unshift(i)}return r}get sortedTokens(){let e=this.visibleTokens,t=!0,r=[],i=[r],n=[]
return e.forEach((e=>{if(e.front)n.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],i.push(r))
let n=r[0]
n&&((e={...e}).separator=n.separator),r.unshift(e)}else t||(t=!0,r=[],i.push(r)),r.push(e)})),n.concat(i.reduce(((e,t)=>e.concat(t)),[]))}toString(){let e=this.sortedTokens,t=[]
for(let r=0,i=e.length;r<i;r++){let n=e[r]
n.title&&(t.push(n.title),r+1<i&&t.push(n.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(b,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
m?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){m||(0,a.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!m)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){let e=r[o]
"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}let i=this.document.createElement("title"),n=this.document.createTextNode(e)
i.appendChild(n),t.appendChild(i)}titleDidUpdate(){}},f=(0,i._)(d.prototype,"router",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,i._)(d.prototype,"document",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d)},589:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var i=r(797),n=r.n(i),o=r(698)
class s extends(n()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,o.Z)(e[t]))return e[t]
return e[e.length-1]}}},500:(e,t,r)=>{"use strict"
function i(e,t){return e===t}r.r(t),r.d(t,{default:()=>i})},217:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>i})},733:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>i})},270:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(614)
function n(...e){return e.every(i.isArray)}},583:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i.isEmpty})
var i=r(866)},370:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i.isEqual})
var i=r(866)},878:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>i})},871:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>i})},57:(e,t,r)=>{"use strict"
function i(e,t){return e!==t}r.r(t),r.d(t,{default:()=>i})},966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(698)
function n(...e){return e.every((e=>!(0,i.Z)(e)))}},254:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var i=r(698),n=r(797),o=r.n(n)
class s extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,i.Z)(e[t]))return e[t]
return e[e.length-1]}}},540:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(698)
function n(e,t){return(0,i.Z)(e)!==(0,i.Z)(t)}},698:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
var i=r(614)
function n(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,i.isArray)(e)?0!==e.length:!!e}},292:e=>{"use strict"
e.exports=require("@ember/application")},614:e=>{"use strict"
e.exports=require("@ember/array")},797:e=>{"use strict"
e.exports=require("@ember/component/helper")},574:e=>{"use strict"
e.exports=require("@ember/service")},866:e=>{"use strict"
e.exports=require("@ember/utils")},38:(e,t,r)=>{var i,n
e.exports=(i=_eai_d,n=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?n("_eai_dyn_"+e):n("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return n("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},i("ember-modifier",["@ember/application"],(function(){return r(749)})),i("ember-page-title/helpers/page-title.js",["@ember/service","@ember/component/helper"],(function(){return r(386)})),i("ember-page-title/services/page-title.js",["@ember/application","@ember/service","@ember/utils"],(function(){return r(455)})),i("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return r(589)})),i("ember-truth-helpers/helpers/eq",[],(function(){return r(500)})),i("ember-truth-helpers/helpers/gt",[],(function(){return r(217)})),i("ember-truth-helpers/helpers/gte",[],(function(){return r(733)})),i("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return r(270)})),i("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return r(583)})),i("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return r(370)})),i("ember-truth-helpers/helpers/lt",[],(function(){return r(878)})),i("ember-truth-helpers/helpers/lte",[],(function(){return r(871)})),i("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return r(966)})),i("ember-truth-helpers/helpers/not-eq",[],(function(){return r(57)})),i("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return r(254)})),void i("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return r(540)})))},307:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function r(i){var n=t[i]
if(void 0!==n)return n.exports
var o=t[i]={exports:{}}
return e[i].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(307)
var i=r(38)
__ember_auto_import__=i})()
