var __ember_auto_import__;(()=>{var e={304:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>l,modifier:()=>c})
const n=require("@ember/application"),i=require("@ember/modifier"),o=require("@ember/destroyable")
function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u{constructor(e){this.owner=e,s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t)
n.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class l{constructor(e,t){(0,n.setOwner)(this,e)}modify(e,t,r){}}(0,i.setModifierManager)((e=>new u(e)),l)
const a=new class{constructor(){s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:i,named:o}=r,s=e.instance(t,i,o)
"function"==typeof s&&(n.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
function c(e){return(0,i.setModifierManager)((()=>a),e)}},354:(e,t,r)=>{"use strict"
function n(e,t,r){return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var n}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>i,b:()=>n})},386:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
var n=r(354),i=r(574),o=r(797),s=r.n(o)
const u=require("@ember/object/internals")
var l,a,c
let p=(l=(0,i.inject)("page-title"),a=class extends(s()){constructor(e){super(e),(0,n.a)(this,"tokens",c,this),(0,n.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},c=(0,n._)(a.prototype,"tokens",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)},455:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>y})
var n=r(354)
const i=require("@ember/runloop")
var o=r(574),s=r.n(o),u=r(866)
const l=require("@ember/debug")
var a,c,p,d,f
const h="undefined"!=typeof FastBoot,m="routeDidChange",b=["separator","prepend","replace"]
let y=(a=(0,o.inject)("router"),c=(0,o.inject)("-document"),p=class extends(s()){constructor(e){if(super(e),(0,n.a)(this,"router",d,this),(0,n.a)(this,"document",f,this),(0,n.b)(this,"tokens",[]),(0,n.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,n.b)(this,"scheduleTitleUpdate",(()=>{(0,i.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&b.forEach((e=>{if(!(0,u.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,n=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=n&&(e.replace=n)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),n=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),n.splice(r,1,e),void(this.tokens=n)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:n}=t
r&&(r.previous=n),n&&(n.next=r),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const n=e[t]
if(n){if(n.replace){r.unshift(n)
break}r.unshift(n)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const n=[r],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],n.push(r))
const i=r[0]
i&&((e={...e}).separator=i.separator),r.unshift(e)}else t||(t=!0,r=[],n.push(r)),r.push(e)})),i.concat(n.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,n=e.length;r<n;r++){const i=e[r]
i&&i.title&&(t.push(i.title),r+1<n&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
h?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){h||(0,l.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!h)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){const e=r[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const n=this.document.createElement("title"),i=this.document.createTextNode(e)
n.appendChild(i),t.appendChild(n)}titleDidUpdate(e){}},d=(0,n._)(p.prototype,"router",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,n._)(p.prototype,"document",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)},589:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(797),i=r.n(n),o=r(698)
class s extends(i()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,o.Z)(e[t]))return e[t]
return e[e.length-1]}}},500:(e,t,r)=>{"use strict"
function n(e,t){return e===t}r.r(t),r.d(t,{default:()=>n})},217:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>n})},733:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>n})},270:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(614)
function i(...e){return e.every(n.isArray)}},583:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEmpty})
var n=r(866)},370:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEqual})
var n=r(866)},878:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>n})},871:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>n})},57:(e,t,r)=>{"use strict"
function n(e,t){return e!==t}r.r(t),r.d(t,{default:()=>n})},966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(698)
function i(...e){return e.every((e=>!(0,n.Z)(e)))}},254:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(698),i=r(797),o=r.n(i)
class s extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,n.Z)(e[t]))return e[t]
return e[e.length-1]}}},540:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(698)
function i(e,t){return(0,n.Z)(e)!==(0,n.Z)(t)}},698:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(614)
function i(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,n.isArray)(e)?0!==e.length:!!e}},614:e=>{"use strict"
e.exports=require("@ember/array")},797:e=>{"use strict"
e.exports=require("@ember/component/helper")},574:e=>{"use strict"
e.exports=require("@ember/service")},866:e=>{"use strict"
e.exports=require("@ember/utils")},618:(e,t,r)=>{e.exports=function(){var e=_eai_d,t=_eai_r
function n(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?t("_eai_dyn_"+e):t("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return t("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("ember-modifier",[],(function(){return n(r(304))})),e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper"],(function(){return n(r(386))})),e("ember-page-title/services/page-title",["@ember/service","@ember/utils"],(function(){return n(r(455))})),e("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return n(r(589))})),e("ember-truth-helpers/helpers/eq",[],(function(){return n(r(500))})),e("ember-truth-helpers/helpers/gt",[],(function(){return n(r(217))})),e("ember-truth-helpers/helpers/gte",[],(function(){return n(r(733))})),e("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return n(r(270))})),e("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return n(r(583))})),e("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return n(r(370))})),e("ember-truth-helpers/helpers/lt",[],(function(){return n(r(878))})),e("ember-truth-helpers/helpers/lte",[],(function(){return n(r(871))})),e("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return n(r(966))})),e("ember-truth-helpers/helpers/not-eq",[],(function(){return n(r(57))})),e("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return n(r(254))})),e("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return n(r(540))}))}()},122:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function r(n){var i=t[n]
if(void 0!==i)return i.exports
var o=t[n]={exports:{}}
return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(122)
var n=r(618)
__ember_auto_import__=n})()
