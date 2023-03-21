import{M as F,S as C,j as L,B as O,ag as K,w as B,N,ah as q,ai as V,z as I,aj as J,v as Q}from"./nav-3fa49c10.js";function w(r,t={},e){for(const s in r){const n=r[s],o=e?`${e}:${s}`:s;typeof n=="object"&&n!==null?w(n,t,o):typeof n=="function"&&(t[o]=n)}return t}function z(r,t){return r.reduce((e,s)=>e.then(()=>s.apply(void 0,t)),Promise.resolve())}function G(r,t){return Promise.all(r.map(e=>e.apply(void 0,t)))}function $(r,t){for(const e of r)e(t)}class X{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,s={}){if(!t||typeof e!="function")return()=>{};const n=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${n} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let s,n=(...o)=>(typeof s=="function"&&s(),s=void 0,n=void 0,e(...o));return s=this.hook(t,n),s}removeHook(t,e){if(this._hooks[t]){const s=this._hooks[t].indexOf(e);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const s=this._hooks[t]||[];this._hooks[t]=void 0;for(const n of s)this.hook(t,n)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=w(t),s=Object.keys(e).map(n=>this.hook(n,e[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(t){const e=w(t);for(const s in e)this.removeHook(s,e[s])}callHook(t,...e){return this.callHookWith(z,t,...e)}callHookParallel(t,...e){return this.callHookWith(G,t,...e)}callHookWith(t,e,...s){const n=this._before||this._after?{name:e,args:s,context:{}}:void 0;this._before&&$(this._before,n);const o=t(this._hooks[e]||[],s);return o instanceof Promise?o.finally(()=>{this._after&&n&&$(this._after,n)}):(this._after&&n&&$(this._after,n),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}function Y(){return new X}const Z=["script","style","noscript"],x=["base","meta","link","style","script","noscript"],ee=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function te(r,t){const{props:e,tag:s}=r;if(ee.includes(s))return s;if(s==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof e[o]<"u"){const i=String(e[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const b=(r,t)=>{const{tag:e,$el:s}=r;s&&(Object.entries(e.props).forEach(([n,o])=>{o=String(o);const i=`attr:${n}`;if(n==="class"){if(!o)return;for(const a of o.split(" ")){const l=`${i}:${a}`;t&&t(r,l,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}t&&!n.startsWith("data-h-")&&t(r,i,()=>s.removeAttribute(n)),s.getAttribute(n)!==o&&s.setAttribute(n,o)}),Z.includes(e.tag)&&s.innerHTML!==(e.children||"")&&(s.innerHTML=e.children||""))};function T(r){let t=9;for(let e=0;e<r.length;)t=Math.imul(t^r.charCodeAt(e++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function D(r,t={}){var h,g;const e={shouldRender:!0};if(await r.hooks.callHook("dom:beforeRender",e),!e.shouldRender)return;const s=t.document||window.document,n=r._popSideEffectQueue();r.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([c,f])=>{n[c]=f})});const o=async d=>{const c=r.headEntries().find(_=>_._i===d._e),f={renderId:d._d||T(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:c,staleSideEffects:n};return await r.hooks.callHook("dom:beforeRenderTag",f),f},i=[],a={body:[],head:[]},l=(d,c,f)=>{c=`${d.renderId}:${c}`,d.entry&&(d.entry._sde[c]=f),delete n[c]},u=d=>{r._elMap[d.renderId]=d.$el,i.push(d),l(d,"el",()=>{var c;(c=d.$el)==null||c.remove(),delete r._elMap[d.renderId]})};for(const d of await r.resolveTags()){const c=await o(d);if(!c.shouldRender)continue;const{tag:f}=c;if(f.tag==="title"){s.title=f.children||"",i.push(c);continue}if(f.tag==="htmlAttrs"||f.tag==="bodyAttrs"){c.$el=s[f.tag==="htmlAttrs"?"documentElement":"body"],b(c,l),i.push(c);continue}if(c.$el=r._elMap[c.renderId],!c.$el&&f._hash&&(c.$el=s.querySelector(`${(h=f.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${f.tag}[data-h-${f._hash}]`)),c.$el){c.tag._d&&b(c),u(c);continue}c.$el=s.createElement(f.tag),b(c),a[(g=f.tagPosition)!=null&&g.startsWith("body")?"body":"head"].push(c)}Object.entries(a).forEach(([d,c])=>{var _;if(!c.length)return;const f=(_=s==null?void 0:s[d])==null?void 0:_.children;if(f){for(const p of[...f].reverse()){const E=p.tagName.toLowerCase();if(!x.includes(E))continue;const U=te({tag:E,props:p.getAttributeNames().reduce((y,m)=>({...y,[m]:p.getAttribute(m)}),{})}),H=c.findIndex(y=>{var m;return y&&(y.tag._d===U||((m=p.isEqualNode)==null?void 0:m.call(p,y.$el)))});if(H!==-1){const y=c[H];y.$el=p,b(y),u(y),delete c[H]}}c.forEach(p=>{if(p.$el){switch(p.tag.tagPosition){case"bodyClose":s.body.appendChild(p.$el);break;case"bodyOpen":s.body.insertBefore(p.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(p.$el);break}u(p)}})}});for(const d of i)await r.hooks.callHook("dom:renderTag",d);Object.values(n).forEach(d=>d())}let v=null;async function re(r,t={}){function e(){return v=null,D(r,t)}const s=t.delayFn||(n=>setTimeout(n,10));return v=v||new Promise(n=>s(()=>n(e())))}const se={__proto__:null,debouncedRenderDOMHead:re,get domUpdatePromise(){return v},hashCode:T,renderDOMHead:D},ne=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],oe=["tagPosition","tagPriority","tagDuplicateStrategy"];async function ie(r,t){const e={tag:r,props:{}};return r==="title"||r==="titleTemplate"?(e.children=t instanceof Promise?await t:t,e):(e.props=await ae({...t}),["children","innerHtml","innerHTML"].forEach(s=>{typeof e.props[s]<"u"&&(e.children=e.props[s],typeof e.children=="object"&&(e.children=JSON.stringify(e.children)),delete e.props[s])}),Object.keys(e.props).filter(s=>oe.includes(s)).forEach(s=>{e[s]=e.props[s],delete e.props[s]}),typeof e.props.class=="object"&&!Array.isArray(e.props.class)&&(e.props.class=Object.keys(e.props.class).filter(s=>e.props.class[s])),Array.isArray(e.props.class)&&(e.props.class=e.props.class.join(" ")),e.props.content&&Array.isArray(e.props.content)?e.props.content.map((s,n)=>{const o={...e,props:{...e.props}};return o.props.content=s,o.key=`${e.props.name||e.props.property}:${n}`,o}):e)}async function ae(r){for(const t of Object.keys(r))r[t]instanceof Promise&&(r[t]=await r[t]),String(r[t])==="true"?r[t]="":String(r[t])==="false"&&delete r[t];return r}const j=r=>{if(typeof r.tagPriority=="number")return r.tagPriority;switch(r.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(r.tag){case"base":return-1;case"title":return 1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},ce=(r,t)=>j(r)-j(t),de=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function le(r,t){const{props:e,tag:s}=r;if(de.includes(s))return s;if(s==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof e[o]<"u"){const i=String(e[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const S=(r,t)=>r==null?t||null:typeof r=="function"?r(t):r.replace("%s",t??"");function fe(r){let t=r.findIndex(s=>s.tag==="titleTemplate");const e=r.findIndex(s=>s.tag==="title");if(e!==-1&&t!==-1){const s=S(r[t].children,r[e].children);s!==null?r[e].children=s||r[e].children:delete r[e]}else if(t!==-1){const s=S(r[t].children);s!==null&&(r[t].children=s,r[t].tag="title",t=-1)}return t!==-1&&delete r[t],r.filter(Boolean)}const ue=r=>{r=r||{};const t=r.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:e}){t.forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const s=e.key?`${e.tag}:${e.key}`:le(e);s&&(e._d=s)},"tags:resolve":function(e){const s={};e.tags.forEach(n=>{let o=n._d||n._p;const i=s[o];if(i){let a=n==null?void 0:n.tagDuplicateStrategy;if(!a&&(n.tag==="htmlAttrs"||n.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const u=i.props;["class","style"].forEach(h=>{n.props[h]&&u[h]&&(h==="style"&&!u[h].endsWith(";")&&(u[h]+=";"),n.props[h]=`${u[h]} ${n.props[h]}`)}),s[o].props={...u,...n.props};return}else n._e===i._e&&(o=n._d=`${o}:${n._p}`);const l=Object.keys(n.props).length;if((l===0||l===1&&typeof n.props["data-h-key"]<"u")&&!n.children){delete s[o];return}}s[o]=n}),e.tags=Object.values(s)}}}},he=()=>({hooks:{"tags:resolve":r=>{const t=e=>{var s;return(s=r.tags.find(n=>n._d===e))==null?void 0:s._p};for(const e of r.tags){if(!e.tagPriority||typeof e.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:n,offset:o}of s)if(e.tagPriority.startsWith(n)){const i=e.tagPriority.replace(n,""),a=t(i);typeof a<"u"&&(e._p=a+o)}}r.tags.sort((e,s)=>e._p-s._p).sort(ce)}}}),pe=()=>({hooks:{"tags:resolve":r=>{r.tags=fe(r.tags)}}}),ye=()=>({hooks:{"tag:normalise":function({tag:r}){typeof r.props.body<"u"&&(r.tagPosition="bodyClose",delete r.props.body)}}}),ge=typeof window<"u",me=()=>({hooks:{"tag:normalise":r=>{var n,o;const{tag:t,entry:e}=r,s=typeof t.props._dynamic<"u";!M.includes(t.tag)||!t.key||(t._hash=T(JSON.stringify({tag:t.tag,key:t.key})),!(ge||(o=(n=R())==null?void 0:n.resolvedOptions)!=null&&o.document)&&(e._m==="server"||s)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":r=>{r.tags=r.tags.map(t=>(delete t.props._dynamic,t))}}}),_e=r=>({hooks:{"entries:updated":function(t){if(typeof(r==null?void 0:r.document)>"u"&&typeof window>"u")return;let e=r==null?void 0:r.delayFn;!e&&typeof requestAnimationFrame<"u"&&(e=requestAnimationFrame),Promise.resolve().then(function(){return se}).then(({debouncedRenderDOMHead:s})=>{s(t,{document:(r==null?void 0:r.document)||window.document,delayFn:e})})}}}),be=()=>{const r=(t,e)=>{const s={},n={};Object.entries(e.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?n[i]=a:s[i]=a});let o;return t==="dom"&&e.tag==="script"&&typeof s.src=="string"&&typeof n.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:n,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(e.props=r("ssr",e).props,e))},"dom:beforeRenderTag":function(t){const{props:e,eventHandlers:s,delayedSrc:n}=r("dom",t.tag);Object.keys(s).length&&(t.tag.props=e,t.tag._eventHandlers=s,t.tag._delayedSrc=n)},"dom:renderTag":function(t){const e=t.$el;if(!t.tag._eventHandlers||!e)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:e;Object.entries(t.tag._eventHandlers).forEach(([n,o])=>{const i=`${t.tag._d||t.tag._p}:${n}`,a=n.slice(2).toLowerCase(),l=`data-h-${a}`;if(delete t.staleSideEffects[i],e.hasAttribute(l))return;const u=o;e.setAttribute(l,""),s.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(a,u),e.removeAttribute(l)})}),t.tag._delayedSrc&&e.setAttribute("src",t.tag._delayedSrc)}}}};function ve(r){return Array.isArray(r)?r:[r]}const M=["base","meta","link","style","script","noscript"];let W;const ke=r=>W=r,R=()=>W,He=10;async function $e(r){const t=[];return Object.entries(r.resolvedInput||r.input).filter(([e,s])=>typeof s<"u"&&ne.includes(e)).forEach(([e,s])=>{const n=ve(s);t.push(...n.map(o=>ie(e,o)).flat())}),(await Promise.all(t)).flat().map((e,s)=>(e._e=r._i,e._p=(r._i<<He)+s,e))}const we=()=>[ue(),he(),pe(),me(),be(),ye()],Te=(r={})=>[_e({document:r==null?void 0:r.document,delayFn:r==null?void 0:r.domDelayFn})];function Pe(r={}){const t=Ae({...r,plugins:[...Te(r),...(r==null?void 0:r.plugins)||[]]});return ke(t),t}function Ae(r={}){let t=[],e={},s=0;const n=Y();r!=null&&r.hooks&&n.addHooks(r.hooks),r.plugins=[...we(),...(r==null?void 0:r.plugins)||[]],r.plugins.forEach(a=>a.hooks&&n.addHooks(a.hooks));const o=()=>n.callHook("entries:updated",i),i={resolvedOptions:r,headEntries(){return t},get hooks(){return n},use(a){a.hooks&&n.addHooks(a.hooks)},push(a,l){const u={_i:s++,input:a,_sde:{}};return l!=null&&l.mode&&(u._m=l==null?void 0:l.mode),t.push(u),o(),{dispose(){t=t.filter(h=>h._i!==u._i?!0:(e={...e,...h._sde||{}},h._sde={},o(),!1))},patch(h){t=t.map(g=>(g._i===u._i&&(u.input=g.input=h,o()),g))}}},async resolveTags(){const a={tags:[],entries:[...t]};await n.callHook("entries:resolve",a);for(const l of a.entries)for(const u of await $e(l)){const h={tag:u,entry:l};await n.callHook("tag:normalise",h),a.tags.push(h.tag)}return await n.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...e};return e={},a}};return i.hooks.callHook("init",i),i}function Ee(r){return typeof r=="function"?r():I(r)}function k(r,t=""){if(r instanceof Promise)return r;const e=Ee(r);if(!r||!e)return e;if(Array.isArray(e))return e.map(s=>k(s,t));if(typeof e=="object"){let s=!1;const n=Object.fromEntries(Object.entries(e).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,I(i)]:((typeof i=="function"||J(i))&&(s=!0),[o,k(i,o)])));return s&&M.includes(String(t))&&(n._dynamic=!0),n}return e}const Oe=Q.startsWith("3"),je=typeof window<"u",P="usehead";function A(){return C()&&L(P)||R()}function We(r={}){const t=Pe({...r,domDelayFn:s=>setTimeout(()=>F(()=>s()),10),plugins:[Se(),...(r==null?void 0:r.plugins)||[]]}),e={install(s){Oe&&(s.config.globalProperties.$unhead=t,s.provide(P,t))}};return t.install=e.install,t}const Se=()=>({hooks:{"entries:resolve":function(r){for(const t of r.entries)t.resolvedInput=k(t.input)}}}),Re=function(r,t){r.mixin({beforeCreate(){const e=this.$options,s=e.provide;e.provide=function(){let n;return typeof s=="function"?n=s.call(this):n=s||{},{...n,[P]:t}}}})};function Ce(r,t={}){const e=A(),s=O(!1),n=O({});K(()=>{n.value=k(r)});const o=e.push(n.value,t);return B([n,s],([a,l])=>{l||o.patch(a)}),C()&&(N(()=>{o.dispose()}),q(()=>{s.value=!0}),V(()=>{s.value=!1})),o}function Ie(r,t={}){return A().push(r,t)}function De(r,t={}){var s;const e=A();if(e){const n=je||!!((s=e.resolvedOptions)!=null&&s.document);return t.mode==="server"&&n||t.mode==="client"&&!n?void 0:n?Ce(r,t):Ie(r,t)}}const Ue=r=>De({htmlAttrs:r});export{Re as V,Ue as a,We as c,De as u};
