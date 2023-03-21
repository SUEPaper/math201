(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function jn(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ct(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Ve(s)?Sh(s):ct(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Ve(e))return e;if(Le(e))return e}}const wh=/;(?![^(]*\))/g,xh=/:([^]+)/,$h=/\/\*.*?\*\//gs;function Sh(e){const t={};return e.replace($h,"").split(wh).forEach(n=>{if(n){const s=n.split(xh);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function We(e){let t="";if(Ve(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const s=We(e[n]);s&&(t+=s+" ")}else if(Le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Se(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ve(t)&&(e.class=We(t)),n&&(e.style=ct(n)),e}const kh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Eh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",nf=jn(kh),Ph=jn(Eh),Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Th=jn(Oh);function sf(e){return!!e||e===""}const cn=e=>Ve(e)?e:e==null?"":ie(e)||Le(e)&&(e.toString===af||!ue(e.toString))?JSON.stringify(e,rf,2):String(e),rf=(e,t)=>t&&t.__v_isRef?rf(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:lf(t)?{[`Set(${t.size})`]:[...t.values()]}:Le(t)&&!ie(t)&&!cf(t)?String(t):t,Fe=Object.freeze({}),$s=Object.freeze([]),gt=()=>{},of=()=>!1,Ch=/^on[^a-z]/,Lr=e=>Ch.test(e),_o=e=>e.startsWith("onUpdate:"),qe=Object.assign,Rl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ah=Object.prototype.hasOwnProperty,$e=(e,t)=>Ah.call(e,t),ie=Array.isArray,Qn=e=>Rr(e)==="[object Map]",lf=e=>Rr(e)==="[object Set]",Ih=e=>Rr(e)==="[object RegExp]",ue=e=>typeof e=="function",Ve=e=>typeof e=="string",Nl=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Fl=e=>Le(e)&&ue(e.then)&&ue(e.catch),af=Object.prototype.toString,Rr=e=>af.call(e),jl=e=>Rr(e).slice(8,-1),cf=e=>Rr(e)==="[object Object]",Hl=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ro=jn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mh=jn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),jo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Lh=/-(\w)/g,Yt=jo(e=>e.replace(Lh,(t,n)=>n?n.toUpperCase():"")),Rh=/\B([A-Z])/g,un=jo(e=>e.replace(Rh,"-$1").toLowerCase()),os=jo(e=>e.charAt(0).toUpperCase()+e.slice(1)),zn=jo(e=>e?`on${os(e)}`:""),pr=(e,t)=>!Object.is(e,t),Sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},vo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Nh=e=>{const t=Ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Fa;const uf=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yo(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let xt;class ff{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xt;try{return xt=this,t()}finally{xt=n}}else yo("cannot run an inactive effect scope.")}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Fh(e){return new ff(e)}function jh(e,t=xt){t&&t.active&&t.effects.push(e)}function Dl(){return xt}function df(e){xt?xt.cleanups.push(e):yo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Vl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pf=e=>(e.w&Rn)>0,hf=e=>(e.n&Rn)>0,Hh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Rn},Dh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];pf(r)&&!hf(r)?r.delete(e):t[n++]=r,r.w&=~Rn,r.n&=~Rn}t.length=n}},bo=new WeakMap;let Zs=0,Rn=1;const Hi=30;let at;const Jn=Symbol("iterate"),Di=Symbol("Map key iterate");class Ul{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jh(this,s)}run(){if(!this.active)return this.fn();let t=at,n=On;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=at,at=this,On=!0,Rn=1<<++Zs,Zs<=Hi?Hh(this):ja(this),this.fn()}finally{Zs<=Hi&&Dh(this),Rn=1<<--Zs,at=this.parent,On=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){at===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let On=!0;const mf=[];function ls(){mf.push(On),On=!1}function as(){const e=mf.pop();On=e===void 0?!0:e}function vt(e,t,n){if(On&&at){let s=bo.get(e);s||bo.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Vl()),gf(r,{effect:at,target:e,type:t,key:n})}}function gf(e,t){let n=!1;Zs<=Hi?hf(e)||(e.n|=Rn,n=!pf(e)):n=!e.has(at),n&&(e.add(at),at.deps.push(e),at.onTrack&&at.onTrack(Object.assign({effect:at},t)))}function fn(e,t,n,s,r,o){const i=bo.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&ie(e)){const u=Number(s);i.forEach((f,d)=>{(d==="length"||d>=u)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":ie(e)?Hl(n)&&a.push(i.get("length")):(a.push(i.get(Jn)),Qn(e)&&a.push(i.get(Di)));break;case"delete":ie(e)||(a.push(i.get(Jn)),Qn(e)&&a.push(i.get(Di)));break;case"set":Qn(e)&&a.push(i.get(Jn));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:o};if(a.length===1)a[0]&&Vi(a[0],c);else{const u=[];for(const f of a)f&&u.push(...f);Vi(Vl(u),c)}}function Vi(e,t){const n=ie(e)?e:[...e];for(const s of n)s.computed&&Ha(s,t);for(const s of n)s.computed||Ha(s,t)}function Ha(e,t){(e!==at||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(qe({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Vh(e,t){var n;return(n=bo.get(e))===null||n===void 0?void 0:n.get(t)}const Uh=jn("__proto__,__v_isRef,__isVue"),_f=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nl)),qh=Ho(),Bh=Ho(!1,!0),zh=Ho(!0),Wh=Ho(!0,!0),Da=Kh();function Kh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=fe(this);for(let o=0,i=this.length;o<i;o++)vt(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ls();const s=fe(this)[t].apply(this,n);return as(),s}}),e}function Yh(e){const t=fe(this);return vt(t,"has",e),t.hasOwnProperty(e)}function Ho(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?kf:Sf:t?$f:xf).get(s))return s;const i=ie(s);if(!e){if(i&&$e(Da,r))return Reflect.get(Da,r,o);if(r==="hasOwnProperty")return Yh}const a=Reflect.get(s,r,o);return(Nl(r)?_f.has(r):Uh(r))||(e||vt(s,"get",r),t)?a:Ce(a)?i&&Hl(r)?a:a.value:Le(a)?e?ln(a):Ue(a):a}}const Gh=vf(),Xh=vf(!0);function vf(e=!1){return function(n,s,r,o){let i=n[s];if(Nn(i)&&Ce(i)&&!Ce(r))return!1;if(!e&&(!wo(r)&&!Nn(r)&&(i=fe(i),r=fe(r)),!ie(n)&&Ce(i)&&!Ce(r)))return i.value=r,!0;const a=ie(n)&&Hl(s)?Number(s)<n.length:$e(n,s),c=Reflect.set(n,s,r,o);return n===fe(o)&&(a?pr(r,i)&&fn(n,"set",s,r,i):fn(n,"add",s,r)),c}}function Zh(e,t){const n=$e(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&fn(e,"delete",t,void 0,s),r}function Qh(e,t){const n=Reflect.has(e,t);return(!Nl(t)||!_f.has(t))&&vt(e,"has",t),n}function Jh(e){return vt(e,"iterate",ie(e)?"length":Jn),Reflect.ownKeys(e)}const yf={get:qh,set:Gh,deleteProperty:Zh,has:Qh,ownKeys:Jh},bf={get:zh,set(e,t){return yo(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return yo(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},em=qe({},yf,{get:Bh,set:Xh}),tm=qe({},bf,{get:Wh}),ql=e=>e,Do=e=>Reflect.getPrototypeOf(e);function zr(e,t,n=!1,s=!1){e=e.__v_raw;const r=fe(e),o=fe(t);n||(t!==o&&vt(r,"get",t),vt(r,"get",o));const{has:i}=Do(r),a=s?ql:n?Bl:hr;if(i.call(r,t))return a(e.get(t));if(i.call(r,o))return a(e.get(o));e!==r&&e.get(t)}function Wr(e,t=!1){const n=this.__v_raw,s=fe(n),r=fe(e);return t||(e!==r&&vt(s,"has",e),vt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Kr(e,t=!1){return e=e.__v_raw,!t&&vt(fe(e),"iterate",Jn),Reflect.get(e,"size",e)}function Va(e){e=fe(e);const t=fe(this);return Do(t).has.call(t,e)||(t.add(e),fn(t,"add",e,e)),this}function Ua(e,t){t=fe(t);const n=fe(this),{has:s,get:r}=Do(n);let o=s.call(n,e);o?wf(n,s,e):(e=fe(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?pr(t,i)&&fn(n,"set",e,t,i):fn(n,"add",e,t),this}function qa(e){const t=fe(this),{has:n,get:s}=Do(t);let r=n.call(t,e);r?wf(t,n,e):(e=fe(e),r=n.call(t,e));const o=s?s.call(t,e):void 0,i=t.delete(e);return r&&fn(t,"delete",e,void 0,o),i}function Ba(){const e=fe(this),t=e.size!==0,n=Qn(e)?new Map(e):new Set(e),s=e.clear();return t&&fn(e,"clear",void 0,void 0,n),s}function Yr(e,t){return function(s,r){const o=this,i=o.__v_raw,a=fe(i),c=t?ql:e?Bl:hr;return!e&&vt(a,"iterate",Jn),i.forEach((u,f)=>s.call(r,c(u),c(f),o))}}function Gr(e,t,n){return function(...s){const r=this.__v_raw,o=fe(r),i=Qn(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...s),f=n?ql:t?Bl:hr;return!t&&vt(o,"iterate",c?Di:Jn),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function _n(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${os(e)} operation ${n}failed: target is readonly.`,fe(this))}return e==="delete"?!1:this}}function nm(){const e={get(o){return zr(this,o)},get size(){return Kr(this)},has:Wr,add:Va,set:Ua,delete:qa,clear:Ba,forEach:Yr(!1,!1)},t={get(o){return zr(this,o,!1,!0)},get size(){return Kr(this)},has:Wr,add:Va,set:Ua,delete:qa,clear:Ba,forEach:Yr(!1,!0)},n={get(o){return zr(this,o,!0)},get size(){return Kr(this,!0)},has(o){return Wr.call(this,o,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Yr(!0,!1)},s={get(o){return zr(this,o,!0,!0)},get size(){return Kr(this,!0)},has(o){return Wr.call(this,o,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Gr(o,!1,!1),n[o]=Gr(o,!0,!1),t[o]=Gr(o,!1,!0),s[o]=Gr(o,!0,!0)}),[e,n,t,s]}const[sm,rm,om,im]=nm();function Vo(e,t){const n=t?e?im:om:e?rm:sm;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get($e(n,r)&&r in s?n:s,r,o)}const lm={get:Vo(!1,!1)},am={get:Vo(!1,!0)},cm={get:Vo(!0,!1)},um={get:Vo(!0,!0)};function wf(e,t,n){const s=fe(n);if(s!==n&&t.call(e,s)){const r=jl(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const xf=new WeakMap,$f=new WeakMap,Sf=new WeakMap,kf=new WeakMap;function fm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dm(e){return e.__v_skip||!Object.isExtensible(e)?0:fm(jl(e))}function Ue(e){return Nn(e)?e:Uo(e,!1,yf,lm,xf)}function pm(e){return Uo(e,!1,em,am,$f)}function ln(e){return Uo(e,!0,bf,cm,Sf)}function ws(e){return Uo(e,!0,tm,um,kf)}function Uo(e,t,n,s,r){if(!Le(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=dm(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function es(e){return Nn(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function Nn(e){return!!(e&&e.__v_isReadonly)}function wo(e){return!!(e&&e.__v_isShallow)}function xo(e){return es(e)||Nn(e)}function fe(e){const t=e&&e.__v_raw;return t?fe(t):e}function qo(e){return vo(e,"__v_skip",!0),e}const hr=e=>Le(e)?Ue(e):e,Bl=e=>Le(e)?ln(e):e;function zl(e){On&&at&&(e=fe(e),gf(e.dep||(e.dep=Vl()),{target:e,type:"get",key:"value"}))}function Wl(e,t){e=fe(e);const n=e.dep;n&&Vi(n,{target:e,type:"set",key:"value",newValue:t})}function Ce(e){return!!(e&&e.__v_isRef===!0)}function W(e){return Ef(e,!1)}function Gt(e){return Ef(e,!0)}function Ef(e,t){return Ce(e)?e:new hm(e,t)}class hm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:fe(t),this._value=n?t:hr(t)}get value(){return zl(this),this._value}set value(t){const n=this.__v_isShallow||wo(t)||Nn(t);t=n?t:fe(t),pr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:hr(t),Wl(this,t))}}function x(e){return Ce(e)?e.value:e}const mm={get:(e,t,n)=>x(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Pf(e){return es(e)?e:new Proxy(e,mm)}class gm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>zl(this),()=>Wl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Of(e){return new gm(e)}function _m(e){xo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=ym(e,n);return t}class vm{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Vh(fe(this._object),this._key)}}function ym(e,t,n){const s=e[t];return Ce(s)?s:new vm(e,t,n)}var Tf;class bm{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tf]=!1,this._dirty=!0,this.effect=new Ul(t,()=>{this._dirty||(this._dirty=!0,Wl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=fe(this);return zl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Tf="__v_isReadonly";function wm(e,t,n=!1){let s,r;const o=ue(e);o?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const i=new bm(s,r,o||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const ts=[];function oo(e){ts.push(e)}function io(){ts.pop()}function L(e,...t){ls();const n=ts.length?ts[ts.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=xm();if(s)an(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:o})=>`at <${Jo(n,o.type)}>`).join(`
`),r]);else{const o=[`[Vue warn]: ${e}`,...t];r.length&&o.push(`
`,...$m(r)),console.warn(...o)}as()}function xm(){let e=ts[ts.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function $m(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Sm(n))}),t}function Sm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${Jo(e.component,e.type,s)}`,o=">"+n;return e.props?[r,...km(e.props),o]:[r+o]}function km(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Cf(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Cf(e,t,n){return Ve(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ce(t)?(t=Cf(e,fe(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ue(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=fe(t),n?t:[`${e}=`,t])}function Em(e,t){e!==void 0&&(typeof e!="number"?L(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&L(`${t} is NaN - the duration expression might be incorrect.`))}const Kl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function an(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){Bo(o,t,n)}return r}function At(e,t,n,s){if(ue(e)){const o=an(e,t,n,s);return o&&Fl(o)&&o.catch(i=>{Bo(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(At(e[o],t,n,s));return r}function Bo(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=Kl[n];for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,i,a]);return}}Pm(e,n,r,s)}function Pm(e,t,n,s=!0){{const r=Kl[t];if(n&&oo(n),L(`Unhandled error${r?` during execution of ${r}`:""}`),n&&io(),s)throw e;console.error(e)}}let mr=!1,Ui=!1;const nt=[];let Bt=0;const Ss=[];let qt=null,wn=0;const Af=Promise.resolve();let Yl=null;const Om=100;function et(e){const t=Yl||Af;return e?t.then(this?e.bind(this):e):t}function Tm(e){let t=Bt+1,n=nt.length;for(;t<n;){const s=t+n>>>1;gr(nt[s])<e?t=s+1:n=s}return t}function zo(e){(!nt.length||!nt.includes(e,mr&&e.allowRecurse?Bt+1:Bt))&&(e.id==null?nt.push(e):nt.splice(Tm(e.id),0,e),If())}function If(){!mr&&!Ui&&(Ui=!0,Yl=Af.then(Rf))}function Cm(e){const t=nt.indexOf(e);t>Bt&&nt.splice(t,1)}function Mf(e){ie(e)?Ss.push(...e):(!qt||!qt.includes(e,e.allowRecurse?wn+1:wn))&&Ss.push(e),If()}function za(e,t=mr?Bt+1:0){for(e=e||new Map;t<nt.length;t++){const n=nt[t];if(n&&n.pre){if(Gl(e,n))continue;nt.splice(t,1),t--,n()}}}function Lf(e){if(Ss.length){const t=[...new Set(Ss)];if(Ss.length=0,qt){qt.push(...t);return}for(qt=t,e=e||new Map,qt.sort((n,s)=>gr(n)-gr(s)),wn=0;wn<qt.length;wn++)Gl(e,qt[wn])||qt[wn]();qt=null,wn=0}}const gr=e=>e.id==null?1/0:e.id,Am=(e,t)=>{const n=gr(e)-gr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Rf(e){Ui=!1,mr=!0,e=e||new Map,nt.sort(Am);const t=n=>Gl(e,n);try{for(Bt=0;Bt<nt.length;Bt++){const n=nt[Bt];if(n&&n.active!==!1){if(t(n))continue;an(n,null,14)}}}finally{Bt=0,nt.length=0,Lf(e),mr=!1,Yl=null,(nt.length||Ss.length)&&Rf(e)}}function Gl(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Om){const s=t.ownerInstance,r=s&&wr(s.type);return L(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Tn=!1;const _s=new Set;uf().__VUE_HMR_RUNTIME__={createRecord:li(Nf),rerender:li(Lm),reload:li(Rm)};const is=new Map;function Im(e){const t=e.type.__hmrId;let n=is.get(t);n||(Nf(t,e.type),n=is.get(t)),n.instances.add(e)}function Mm(e){is.get(e.type.__hmrId).instances.delete(e)}function Nf(e,t){return is.has(e)?!1:(is.set(e,{initialDef:nr(t),instances:new Set}),!0)}function nr(e){return md(e)?e.__vccOpts:e}function Lm(e,t){const n=is.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,nr(s.type).render=t),s.renderCache=[],Tn=!0,s.update(),Tn=!1}))}function Rm(e,t){const n=is.get(e);if(!n)return;t=nr(t),Wa(n.initialDef,t);const s=[...n.instances];for(const r of s){const o=nr(r.type);_s.has(o)||(o!==n.initialDef&&Wa(o,t),_s.add(o)),r.appContext.optionsCache.delete(r.type),r.ceReload?(_s.add(o),r.ceReload(t.styles),_s.delete(o)):r.parent?zo(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Mf(()=>{for(const r of s)_s.delete(nr(r.type))})}function Wa(e,t){qe(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function li(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let zt,Qs=[],qi=!1;function Nr(e,...t){zt?zt.emit(e,...t):qi||Qs.push({event:e,args:t})}function Ff(e,t){var n,s;zt=e,zt?(zt.enabled=!0,Qs.forEach(({event:r,args:o})=>zt.emit(r,...o)),Qs=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{Ff(o,t)}),setTimeout(()=>{zt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,qi=!0,Qs=[])},3e3)):(qi=!0,Qs=[])}function Nm(e,t){Nr("app:init",e,t,{Fragment:Ie,Text:Dr,Comment:Ze,Static:lo})}function Fm(e){Nr("app:unmount",e)}const Bi=Xl("component:added"),jf=Xl("component:updated"),jm=Xl("component:removed"),Hm=e=>{zt&&typeof zt.cleanupBuffer=="function"&&!zt.cleanupBuffer(e)&&jm(e)};function Xl(e){return t=>{Nr(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Dm=Hf("perf:start"),Vm=Hf("perf:end");function Hf(e){return(t,n,s)=>{Nr(e,t.appContext.app,t.uid,t,n,s)}}function Um(e,t,n){Nr("component:emit",e.appContext.app,e,t,n)}function qm(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Fe;{const{emitsOptions:f,propsOptions:[d]}=e;if(f)if(!(t in f))(!d||!(zn(t)in d))&&L(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${zn(t)}" prop.`);else{const p=f[t];ue(p)&&(p(...n)||L(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:p}=s[f]||Fe;p&&(r=n.map(h=>Ve(h)?h.trim():h)),d&&(r=n.map(ji))}Um(e,t,r);{const f=t.toLowerCase();f!==t&&s[zn(f)]&&L(`Event "${f}" is emitted in component ${Jo(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(t)}" instead of "${t}".`)}let a,c=s[a=zn(t)]||s[a=zn(Yt(t))];!c&&o&&(c=s[a=zn(un(t))]),c&&At(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,At(u,e,6,r)}}function Df(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},a=!1;if(!ue(e)){const c=u=>{const f=Df(u,t,!0);f&&(a=!0,qe(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(Le(e)&&s.set(e,null),null):(ie(o)?o.forEach(c=>i[c]=null):qe(i,o),Le(e)&&s.set(e,i),i)}function Wo(e,t){return!e||!Lr(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,un(t))||$e(e,t))}let Xe=null,Ko=null;function $o(e){const t=Xe;return Xe=e,Ko=e&&e.type.__scopeId||null,t}function SA(e){Ko=e}function kA(){Ko=null}function te(e,t=Xe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ic(-1);const o=$o(t);let i;try{i=e(...r)}finally{$o(o),s._d&&ic(1)}return jf(t),i};return s._n=!0,s._c=!0,s._d=!0,s}let zi=!1;function So(){zi=!0}function ai(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:d,data:p,setupState:h,ctx:m,inheritAttrs:_}=e;let y,$;const b=$o(e);zi=!1;try{if(n.shapeFlag&4){const T=r||s;y=jt(f.call(T,T,d,o,h,p,m)),$=c}else{const T=t;c===o&&So(),y=jt(T.length>1?T(o,{get attrs(){return So(),c},slots:a,emit:u}):T(o,null)),$=t.props?c:zm(c)}}catch(T){rr.length=0,Bo(T,e,1),y=z(Ze)}let w=y,S;if(y.patchFlag>0&&y.patchFlag&2048&&([w,S]=Bm(y)),$&&_!==!1){const T=Object.keys($),{shapeFlag:M}=w;if(T.length){if(M&7)i&&T.some(_o)&&($=Wm($,i)),w=Dt(w,$);else if(!zi&&w.type!==Ze){const q=Object.keys(c),A=[],V=[];for(let Q=0,ae=q.length;Q<ae;Q++){const B=q[Q];Lr(B)?_o(B)||A.push(B[2].toLowerCase()+B.slice(3)):V.push(B)}V.length&&L(`Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),A.length&&L(`Extraneous non-emits event listeners (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Ka(w)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=Dt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(Ka(w)||L("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=n.transition),S?S(w):y=w,$o(b),y}const Bm=e=>{const t=e.children,n=e.dynamicChildren,s=Vf(t);if(!s)return[e,void 0];const r=t.indexOf(s),o=n?n.indexOf(s):-1,i=a=>{t[r]=a,n&&(o>-1?n[o]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[jt(s),i]};function Vf(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(dn(s)){if(s.type!==Ze||s.children==="v-if"){if(t)return;t=s}}else return}return t}const zm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Lr(n))&&((t||(t={}))[n]=e[n]);return t},Wm=(e,t)=>{const n={};for(const s in e)(!_o(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},Ka=e=>e.shapeFlag&7||e.type===Ze;function Km(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:a,patchFlag:c}=t,u=o.emitsOptions;if((r||a)&&Tn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ya(s,i,u):!!i;if(c&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(i[p]!==s[p]&&!Wo(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Ya(s,i,u):!0:!!i;return!1}function Ya(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!Wo(n,o))return!0}return!1}function Ym({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Uf=e=>e.__isSuspense;function Gm(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):Mf(e)}function $t(e,t){if(!Be)L("provide() can only be used inside setup().");else{let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[e]=t}}function D(e,t,n=!1){const s=Be||Xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ue(t)?t.call(s.proxy):t;L(`injection "${String(e)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function Rs(e,t){return Zl(e,null,t)}const Xr={};function me(e,t,n){return ue(t)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Zl(e,t,n)}function Zl(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=Fe){t||(n!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=S=>{L("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Dl()===(Be==null?void 0:Be.scope)?Be:null;let u,f=!1,d=!1;if(Ce(e)?(u=()=>e.value,f=wo(e)):es(e)?(u=()=>e,s=!0):ie(e)?(d=!0,f=e.some(S=>es(S)||wo(S)),u=()=>e.map(S=>{if(Ce(S))return S.value;if(es(S))return Gn(S);if(ue(S))return an(S,c,2);a(S)})):ue(e)?t?u=()=>an(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),At(e,c,3,[h])}:(u=gt,a(e)),t&&s){const S=u;u=()=>Gn(S())}let p,h=S=>{p=b.onStop=()=>{an(S,c,4)}},m;if(br)if(h=gt,t?n&&At(t,c,3,[u(),d?[]:void 0,h]):u(),r==="sync"){const S=t_();m=S.__watcherHandles||(S.__watcherHandles=[])}else return gt;let _=d?new Array(e.length).fill(Xr):Xr;const y=()=>{if(b.active)if(t){const S=b.run();(s||f||(d?S.some((T,M)=>pr(T,_[M])):pr(S,_)))&&(p&&p(),At(t,c,3,[S,_===Xr?void 0:d&&_[0]===Xr?[]:_,h]),_=S)}else b.run()};y.allowRecurse=!!t;let $;r==="sync"?$=y:r==="post"?$=()=>Je(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),$=()=>zo(y));const b=new Ul(u,$);b.onTrack=o,b.onTrigger=i,t?n?y():_=b.run():r==="post"?Je(b.run.bind(b),c&&c.suspense):b.run();const w=()=>{b.stop(),c&&c.scope&&Rl(c.scope.effects,b)};return m&&m.push(w),w}function Xm(e,t,n){const s=this.proxy,r=Ve(e)?e.includes(".")?qf(s,e):()=>s[e]:e.bind(s,s);let o;ue(t)?o=t:(o=t.handler,n=t);const i=Be;As(this);const a=Zl(r,o.bind(s),n);return i?As(i):ss(),a}function qf(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Gn(e,t){if(!Le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))Gn(e.value,t);else if(ie(e))for(let n=0;n<e.length;n++)Gn(e[n],t);else if(lf(e)||Qn(e))e.forEach(n=>{Gn(n,t)});else if(cf(e))for(const n in e)Gn(e[n],t);return e}function Bf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ns(()=>{e.isMounted=!0}),jr(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],Zm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},setup(e,{slots:t}){const n=Mt(),s=Bf();let r;return()=>{const o=t.default&&Ql(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){let _=!1;for(const y of o)if(y.type!==Ze){if(_){L("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=y,_=!0}}const a=fe(e),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&L(`invalid <transition> mode: ${c}`),s.isLeaving)return ci(i);const u=Ga(i);if(!u)return ci(i);const f=_r(u,a,s,n);Cs(u,f);const d=n.subTree,p=d&&Ga(d);let h=!1;const{getTransitionKey:m}=u.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,h=!0)}if(p&&p.type!==Ze&&(!En(u,p)||h)){const _=_r(p,a,s,n);if(Cs(p,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ci(i);c==="in-out"&&u.type!==Ze&&(_.delayLeave=(y,$,b)=>{const w=zf(s,p);w[String(p.key)]=p,y._leaveCb=()=>{$(),y._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=b})}return i}}},Qm=Zm;function zf(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function _r(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:y,onAfterAppear:$,onAppearCancelled:b}=t,w=String(e.key),S=zf(n,e),T=(A,V)=>{A&&At(A,s,9,V)},M=(A,V)=>{const Q=V[1];T(A,V),ie(A)?A.every(ae=>ae.length<=1)&&Q():A.length<=1&&Q()},q={mode:o,persisted:i,beforeEnter(A){let V=a;if(!n.isMounted)if(r)V=_||a;else return;A._leaveCb&&A._leaveCb(!0);const Q=S[w];Q&&En(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),T(V,[A])},enter(A){let V=c,Q=u,ae=f;if(!n.isMounted)if(r)V=y||c,Q=$||u,ae=b||f;else return;let B=!1;const be=A._enterCb=Ae=>{B||(B=!0,Ae?T(ae,[A]):T(Q,[A]),q.delayedLeave&&q.delayedLeave(),A._enterCb=void 0)};V?M(V,[A,be]):be()},leave(A,V){const Q=String(e.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return V();T(d,[A]);let ae=!1;const B=A._leaveCb=be=>{ae||(ae=!0,V(),be?T(m,[A]):T(h,[A]),A._leaveCb=void 0,S[Q]===e&&delete S[Q])};S[Q]=e,p?M(p,[A,B]):B()},clone(A){return _r(A,t,n,s)}};return q}function ci(e){if(Fr(e))return e=Dt(e),e.children=null,e}function Ga(e){return Fr(e)?e.children?e.children[0]:void 0:e}function Cs(e,t){e.shapeFlag&6&&e.component?Cs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ql(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Ie?(i.patchFlag&128&&r++,s=s.concat(Ql(i.children,t,a))):(t||i.type!==Ze)&&s.push(a!=null?Dt(i,{key:a}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function ye(e){return ue(e)?{setup:e,name:e.name}:e}const ks=e=>!!e.type.__asyncLoader,Fr=e=>e.type.__isKeepAlive,Jm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Mt(),s=n.ctx;if(!s.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,o=new Set;let i=null;n.__v_cache=r;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:d}}}=s,p=d("div");s.activate=(b,w,S,T,M)=>{const q=b.component;u(b,w,S,0,a),c(q.vnode,b,w,S,q,a,T,b.slotScopeIds,M),Je(()=>{q.isDeactivated=!1,q.a&&Sn(q.a);const A=b.props&&b.props.onVnodeMounted;A&&Ot(A,q.parent,b)},a),Bi(q)},s.deactivate=b=>{const w=b.component;u(b,p,null,1,a),Je(()=>{w.da&&Sn(w.da);const S=b.props&&b.props.onVnodeUnmounted;S&&Ot(S,w.parent,b),w.isDeactivated=!0},a),Bi(w)};function h(b){ui(b),f(b,n,a,!0)}function m(b){r.forEach((w,S)=>{const T=wr(w.type);T&&(!b||!b(T))&&_(S)})}function _(b){const w=r.get(b);!i||!En(w,i)?h(w):i&&ui(i),r.delete(b),o.delete(b)}me(()=>[e.include,e.exclude],([b,w])=>{b&&m(S=>Js(b,S)),w&&m(S=>!Js(w,S))},{flush:"post",deep:!0});let y=null;const $=()=>{y!=null&&r.set(y,fi(n.subTree))};return Ns($),Go($),jr(()=>{r.forEach(b=>{const{subTree:w,suspense:S}=n,T=fi(w);if(b.type===T.type&&b.key===T.key){ui(T);const M=T.component.da;M&&Je(M,S);return}h(b)})}),()=>{if(y=null,!t.default)return null;const b=t.default(),w=b[0];if(b.length>1)return L("KeepAlive should contain exactly one component child."),i=null,b;if(!dn(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return i=null,w;let S=fi(w);const T=S.type,M=wr(ks(S)?S.type.__asyncResolved||{}:T),{include:q,exclude:A,max:V}=e;if(q&&(!M||!Js(q,M))||A&&M&&Js(A,M))return i=S,w;const Q=S.key==null?T:S.key,ae=r.get(Q);return S.el&&(S=Dt(S),w.shapeFlag&128&&(w.ssContent=S)),y=Q,ae?(S.el=ae.el,S.component=ae.component,S.transition&&Cs(S,S.transition),S.shapeFlag|=512,o.delete(Q),o.add(Q)):(o.add(Q),V&&o.size>parseInt(V,10)&&_(o.values().next().value)),S.shapeFlag|=256,i=S,Uf(w.type)?w:S}}},Wf=Jm;function Js(e,t){return ie(e)?e.some(n=>Js(n,t)):Ve(e)?e.split(",").includes(t):Ih(e)?e.test(t):!1}function Kf(e,t){Gf(e,"a",t)}function Yf(e,t){Gf(e,"da",t)}function Gf(e,t,n=Be){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Yo(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Fr(r.parent.vnode)&&eg(s,t,n,r),r=r.parent}}function eg(e,t,n,s){const r=Yo(t,e,s,!0);Jl(()=>{Rl(s[t],r)},n)}function ui(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function fi(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,t,n=Be,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;ls(),As(n);const a=At(t,n,e,i);return ss(),as(),a});return s?r.unshift(o):r.push(o),o}else{const r=zn(Kl[e].replace(/ hook$/,""));L(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const mn=e=>(t,n=Be)=>(!br||e==="sp")&&Yo(e,(...s)=>t(...s),n),tg=mn("bm"),Ns=mn("m"),ng=mn("bu"),Go=mn("u"),jr=mn("bum"),Jl=mn("um"),sg=mn("sp"),rg=mn("rtg"),og=mn("rtc");function ig(e,t=Be){Yo("ec",e,t)}function Xf(e){Mh(e)&&L("Do not use built-in directive ids as custom directive id: "+e)}function Xo(e,t){const n=Xe;if(n===null)return L("withDirectives can only be used inside render functions."),e;const s=Qo(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,c,u=Fe]=t[o];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(a),r.push({dir:i,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Dn(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let c=a.dir[s];c&&(ls(),At(c,n,8,[e.el,a,e,t]),as())}}const Wi="components",lg="directives";function ko(e,t){return Zf(Wi,e,!0,t)||e}const ag=Symbol();function Xa(e){return Zf(lg,e)}function Zf(e,t,n=!0,s=!1){const r=Xe||Be;if(r){const o=r.type;if(e===Wi){const a=wr(o,!1);if(a&&(a===t||a===Yt(t)||a===os(Yt(t))))return o}const i=Za(r[e]||o[e],t)||Za(r.appContext[e],t);if(!i&&s)return o;if(n&&!i){const a=e===Wi?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return i}else L(`resolve${os(e.slice(0,-1))} can only be used in render() or setup().`)}function Za(e,t){return e&&(e[t]||e[Yt(t)]||e[os(Yt(t))])}function Hr(e,t,n,s){let r;const o=n&&n[s];if(ie(e)||Ve(e)){r=new Array(e.length);for(let i=0,a=e.length;i<a;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){Number.isInteger(e)||L(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];r[a]=t(e[u],u,a,o&&o[a])}}else r=[];return n&&(n[s]=r),r}function Xt(e,t,n={},s,r){if(Xe.isCE||Xe.parent&&ks(Xe.parent)&&Xe.parent.isCE)return t!=="default"&&(n.name=t),z("slot",n,s&&s());let o=e[t];o&&o.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),o=()=>[]),o&&o._c&&(o._d=!1),E();const i=o&&Qf(o(n)),a=X(Ie,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Qf(e){return e.some(t=>dn(t)?!(t.type===Ze||t.type===Ie&&!Qf(t.children)):!0)?e:null}const Ki=e=>e?dd(e)?Qo(e)||e.proxy:Ki(e.parent):null,ns=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ws(e.props),$attrs:e=>ws(e.attrs),$slots:e=>ws(e.slots),$refs:e=>ws(e.refs),$parent:e=>Ki(e.parent),$root:e=>Ki(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>zo(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>Xm.bind(e)}),ea=e=>e==="_"||e==="$",di=(e,t)=>e!==Fe&&!e.__isScriptSetup&&$e(e,t),Jf={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(di(s,t))return i[t]=1,s[t];if(r!==Fe&&$e(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&$e(u,t))return i[t]=3,o[t];if(n!==Fe&&$e(n,t))return i[t]=4,n[t];Yi&&(i[t]=0)}}const f=ns[t];let d,p;if(f)return t==="$attrs"&&(vt(e,"get",t),So()),f(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Fe&&$e(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,$e(p,t))return p[t];Xe&&(!Ve(t)||t.indexOf("__v")!==0)&&(r!==Fe&&ea(t[0])&&$e(r,t)?L(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Xe&&L(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return di(r,t)?(r[t]=n,!0):r.__isScriptSetup&&$e(r,t)?(L(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Fe&&$e(s,t)?(s[t]=n,!0):$e(e.props,t)?(L(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(L(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let a;return!!n[i]||e!==Fe&&$e(e,i)||di(t,i)||(a=o[0])&&$e(a,i)||$e(s,i)||$e(ns,i)||$e(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Jf.ownKeys=e=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function cg(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ns).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ns[n](e),set:gt})}),t}function ug(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:gt})})}function fg(e){const{ctx:t,setupState:n}=e;Object.keys(fe(n)).forEach(s=>{if(!n.__isScriptSetup){if(ea(s[0])){L(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:gt})}})}function dg(){const e=Object.create(null);return(t,n)=>{e[n]?L(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Yi=!0;function pg(e){const t=ta(e),n=e.proxy,s=e.ctx;Yi=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:a,provide:c,inject:u,created:f,beforeMount:d,mounted:p,beforeUpdate:h,updated:m,activated:_,deactivated:y,beforeDestroy:$,beforeUnmount:b,destroyed:w,unmounted:S,render:T,renderTracked:M,renderTriggered:q,errorCaptured:A,serverPrefetch:V,expose:Q,inheritAttrs:ae,components:B,directives:be,filters:Ae}=t,Pe=dg();{const[K]=e.propsOptions;if(K)for(const le in K)Pe("Props",le)}if(u&&hg(u,s,Pe,e.appContext.config.unwrapInjectedRef),i)for(const K in i){const le=i[K];ue(le)?(Object.defineProperty(s,K,{value:le.bind(n),configurable:!0,enumerable:!0,writable:!0}),Pe("Methods",K)):L(`Method "${K}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`)}if(r){ue(r)||L("The data option must be a function. Plain object usage is no longer supported.");const K=r.call(n,n);if(Fl(K)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(K))L("data() should return an object.");else{e.data=Ue(K);for(const le in K)Pe("Data",le),ea(le[0])||Object.defineProperty(s,le,{configurable:!0,enumerable:!0,get:()=>K[le],set:gt})}}if(Yi=!0,o)for(const K in o){const le=o[K],_e=ue(le)?le.bind(n,n):ue(le.get)?le.get.bind(n,n):gt;_e===gt&&L(`Computed property "${K}" has no getter.`);const Re=!ue(le)&&ue(le.set)?le.set.bind(n):()=>{L(`Write operation failed: computed property "${K}" is readonly.`)},yt=O({get:_e,set:Re});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>yt.value,set:tt=>yt.value=tt}),Pe("Computed",K)}if(a)for(const K in a)ed(a[K],s,n,K);if(c){const K=ue(c)?c.call(n):c;Reflect.ownKeys(K).forEach(le=>{$t(le,K[le])})}f&&Qa(f,e,"c");function je(K,le){ie(le)?le.forEach(_e=>K(_e.bind(n))):le&&K(le.bind(n))}if(je(tg,d),je(Ns,p),je(ng,h),je(Go,m),je(Kf,_),je(Yf,y),je(ig,A),je(og,M),je(rg,q),je(jr,b),je(Jl,S),je(sg,V),ie(Q))if(Q.length){const K=e.exposed||(e.exposed={});Q.forEach(le=>{Object.defineProperty(K,le,{get:()=>n[le],set:_e=>n[le]=_e})})}else e.exposed||(e.exposed={});T&&e.render===gt&&(e.render=T),ae!=null&&(e.inheritAttrs=ae),B&&(e.components=B),be&&(e.directives=be)}function hg(e,t,n=gt,s=!1){ie(e)&&(e=Gi(e));for(const r in e){const o=e[r];let i;Le(o)?"default"in o?i=D(o.from||r,o.default,!0):i=D(o.from||r):i=D(o),Ce(i)?s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):(L(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function Qa(e,t,n){At(ie(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ed(e,t,n,s){const r=s.includes(".")?qf(n,s):()=>n[s];if(Ve(e)){const o=t[e];ue(o)?me(r,o):L(`Invalid watch handler specified by key "${e}"`,o)}else if(ue(e))me(r,e.bind(n));else if(Le(e))if(ie(e))e.forEach(o=>ed(o,t,n,s));else{const o=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(o)?me(r,o,e):L(`Invalid watch handler specified by key "${e.handler}"`,o)}else L(`Invalid watch option: "${s}"`,e)}function ta(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Eo(c,u,i,!0)),Eo(c,t,i)),Le(t)&&o.set(t,c),c}function Eo(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Eo(e,o,n,!0),r&&r.forEach(i=>Eo(e,i,n,!0));for(const i in t)if(s&&i==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=mg[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const mg={data:Ja,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Wn,directives:Wn,watch:_g,provide:Ja,inject:gg};function Ja(e,t){return t?e?function(){return qe(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function gg(e,t){return Wn(Gi(e),Gi(t))}function Gi(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function Wn(e,t){return e?qe(qe(Object.create(null),e),t):t}function _g(e,t){if(!e)return t;if(!t)return e;const n=qe(Object.create(null),e);for(const s in t)n[s]=ot(e[s],t[s]);return n}function vg(e,t,n,s=!1){const r={},o={};vo(o,Zo,1),e.propsDefaults=Object.create(null),td(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);sd(t||{},r,e),n?e.props=s?r:pm(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function yg(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function bg(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,a=fe(r),[c]=e.propsOptions;let u=!1;if(!yg(e)&&(s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Wo(e.emitsOptions,p))continue;const h=t[p];if(c)if($e(o,p))h!==o[p]&&(o[p]=h,u=!0);else{const m=Yt(p);r[m]=Xi(c,a,m,h,e,!1)}else h!==o[p]&&(o[p]=h,u=!0)}}}else{td(e,t,r,o)&&(u=!0);let f;for(const d in a)(!t||!$e(t,d)&&((f=un(d))===d||!$e(t,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=Xi(c,a,d,void 0,e,!0)):delete r[d]);if(o!==a)for(const d in o)(!t||!$e(t,d))&&(delete o[d],u=!0)}u&&fn(e,"set","$attrs"),sd(t||{},r,e)}function td(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(ro(c))continue;const u=t[c];let f;r&&$e(r,f=Yt(c))?!o||!o.includes(f)?n[f]=u:(a||(a={}))[f]=u:Wo(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(o){const c=fe(n),u=a||Fe;for(let f=0;f<o.length;f++){const d=o[f];n[d]=Xi(r,c,d,u[d],e,!$e(u,d))}}return i}function Xi(e,t,n,s,r,o){const i=e[n];if(i!=null){const a=$e(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&ue(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(As(r),s=u[n]=c.call(null,t),ss())}else s=c}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===un(n))&&(s=!0))}return s}function nd(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},a=[];let c=!1;if(!ue(e)){const f=d=>{c=!0;const[p,h]=nd(d,t,!0);qe(i,p),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return Le(e)&&s.set(e,$s),$s;if(ie(o))for(let f=0;f<o.length;f++){Ve(o[f])||L("props must be strings when using array syntax.",o[f]);const d=Yt(o[f]);ec(d)&&(i[d]=Fe)}else if(o){Le(o)||L("invalid props options",o);for(const f in o){const d=Yt(f);if(ec(d)){const p=o[f],h=i[d]=ie(p)||ue(p)?{type:p}:Object.assign({},p);if(h){const m=nc(Boolean,h.type),_=nc(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||$e(h,"default"))&&a.push(d)}}}}const u=[i,a];return Le(e)&&s.set(e,u),u}function ec(e){return e[0]!=="$"?!0:(L(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Zi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function tc(e,t){return Zi(e)===Zi(t)}function nc(e,t){return ie(t)?t.findIndex(n=>tc(n,e)):ue(t)&&tc(t,e)?0:-1}function sd(e,t,n){const s=fe(t),r=n.propsOptions[0];for(const o in r){let i=r[o];i!=null&&wg(o,s[o],i,!$e(e,o)&&!$e(e,un(o)))}}function wg(e,t,n,s){const{type:r,required:o,validator:i}=n;if(o&&s){L('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=ie(r)?r:[r],u=[];for(let f=0;f<c.length&&!a;f++){const{valid:d,expectedType:p}=$g(t,c[f]);u.push(p||""),a=d}if(!a){L(Sg(e,t,u));return}}i&&!i(t)&&L('Invalid prop: custom validator check failed for prop "'+e+'".')}}const xg=jn("String,Number,Boolean,Function,Symbol,BigInt");function $g(e,t){let n;const s=Zi(t);if(xg(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Le(e):s==="Array"?n=ie(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function Sg(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(os).join(" | ")}`;const r=n[0],o=jl(t),i=sc(t,r),a=sc(t,o);return n.length===1&&rc(r)&&!kg(r,o)&&(s+=` with value ${i}`),s+=`, got ${o} `,rc(o)&&(s+=`with value ${a}.`),s}function sc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function rc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function kg(...e){return e.some(t=>t.toLowerCase()==="boolean")}const rd=e=>e[0]==="_"||e==="$stable",na=e=>ie(e)?e.map(jt):[jt(e)],Eg=(e,t,n)=>{if(t._n)return t;const s=te((...r)=>(Be&&L(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),na(t(...r))),n);return s._c=!1,s},od=(e,t,n)=>{const s=e._ctx;for(const r in e){if(rd(r))continue;const o=e[r];if(ue(o))t[r]=Eg(r,o,s);else if(o!=null){L(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=na(o);t[r]=()=>i}}},id=(e,t)=>{Fr(e.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=na(t);e.slots.default=()=>n},Pg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=fe(t),vo(t,"_",n)):od(t,e.slots={})}else e.slots={},t&&id(e,t);vo(e.slots,Zo,1)},Og=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=Fe;if(s.shapeFlag&32){const a=t._;a?Tn?qe(r,t):n&&a===1?o=!1:(qe(r,t),!n&&a===1&&delete r._):(o=!t.$stable,od(t,r)),i=t}else t&&(id(e,t),i={default:1});if(o)for(const a in r)!rd(a)&&!(a in i)&&delete r[a]};function ld(){return{app:null,config:{isNativeTag:of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tg=0;function Cg(e,t){return function(s,r=null){ue(s)||(s=Object.assign({},s)),r!=null&&!Le(r)&&(L("root props passed to app.mount() must be an object."),r=null);const o=ld(),i=new Set;let a=!1;const c=o.app={_uid:Tg++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Oo,get config(){return o.config},set config(u){L("app.config cannot be replaced. Modify individual options instead.")},use(u,...f){return i.has(u)?L("Plugin has already been applied to target app."):u&&ue(u.install)?(i.add(u),u.install(c,...f)):ue(u)?(i.add(u),u(c,...f)):L('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return o.mixins.includes(u)?L("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):o.mixins.push(u),c},component(u,f){return el(u,o.config),f?(o.components[u]&&L(`Component "${u}" has already been registered in target app.`),o.components[u]=f,c):o.components[u]},directive(u,f){return Xf(u),f?(o.directives[u]&&L(`Directive "${u}" has already been registered in target app.`),o.directives[u]=f,c):o.directives[u]},mount(u,f,d){if(a)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const p=z(s,r);return p.appContext=o,o.reload=()=>{e(Dt(p),u,d)},f&&t?t(p,u):e(p,u,d),a=!0,c._container=u,u.__vue_app__=c,c._instance=p.component,Nm(c,Oo),Qo(p.component)||p.component.proxy}},unmount(){a?(e(null,c._container),c._instance=null,Fm(c),delete c._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(u,f){return u in o.provides&&L(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),o.provides[u]=f,c}};return c}}function Qi(e,t,n,s,r=!1){if(ie(e)){e.forEach((p,h)=>Qi(p,t&&(ie(t)?t[h]:t),n,s,r));return}if(ks(s)&&!r)return;const o=s.shapeFlag&4?Qo(s.component)||s.component.proxy:s.el,i=r?null:o,{i:a,r:c}=e;if(!a){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,f=a.refs===Fe?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(Ve(u)?(f[u]=null,$e(d,u)&&(d[u]=null)):Ce(u)&&(u.value=null)),ue(c))an(c,a,12,[i,f]);else{const p=Ve(c),h=Ce(c);if(p||h){const m=()=>{if(e.f){const _=p?$e(d,c)?d[c]:f[c]:c.value;r?ie(_)&&Rl(_,o):ie(_)?_.includes(o)||_.push(o):p?(f[c]=[o],$e(d,c)&&(d[c]=f[c])):(c.value=[o],e.k&&(f[e.k]=c.value))}else p?(f[c]=i,$e(d,c)&&(d[c]=i)):h?(c.value=i,e.k&&(f[e.k]=i)):L("Invalid template ref type:",c,`(${typeof c})`)};i?(m.id=-1,Je(m,n)):m()}else L("Invalid template ref type:",c,`(${typeof c})`)}}let Ds,kn;function Jt(e,t){e.appContext.config.performance&&Po()&&kn.mark(`vue-${t}-${e.uid}`),Dm(e,t,Po()?kn.now():Date.now())}function en(e,t){if(e.appContext.config.performance&&Po()){const n=`vue-${t}-${e.uid}`,s=n+":end";kn.mark(s),kn.measure(`<${Jo(e,e.type)}> ${t}`,n,s),kn.clearMarks(n),kn.clearMarks(s)}Vm(e,t,Po()?kn.now():Date.now())}function Po(){return Ds!==void 0||(typeof window<"u"&&window.performance?(Ds=!0,kn=window.performance):Ds=!1),Ds}function Ag(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Gm;function Ig(e){return Mg(e)}function Mg(e,t){Ag();const n=uf();n.__VUE__=!0,Ff(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:p,setScopeId:h=gt,insertStaticContent:m}=e,_=(g,v,k,I=null,C=null,F=null,U=!1,N=null,j=Tn?!1:!!v.dynamicChildren)=>{if(g===v)return;g&&!En(g,v)&&(I=ee(g),dt(g,C,F,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:R,ref:re,shapeFlag:se}=v;switch(R){case Dr:y(g,v,k,I);break;case Ze:$(g,v,k,I);break;case lo:g==null?b(v,k,I,U):w(g,v,k,U);break;case Ie:be(g,v,k,I,C,F,U,N,j);break;default:se&1?M(g,v,k,I,C,F,U,N,j):se&6?Ae(g,v,k,I,C,F,U,N,j):se&64||se&128?R.process(g,v,k,I,C,F,U,N,j,Ee):L("Invalid VNode type:",R,`(${typeof R})`)}re!=null&&C&&Qi(re,g&&g.ref,F,v||g,!v)},y=(g,v,k,I)=>{if(g==null)s(v.el=a(v.children),k,I);else{const C=v.el=g.el;v.children!==g.children&&u(C,v.children)}},$=(g,v,k,I)=>{g==null?s(v.el=c(v.children||""),k,I):v.el=g.el},b=(g,v,k,I)=>{[g.el,g.anchor]=m(g.children,v,k,I,g.el,g.anchor)},w=(g,v,k,I)=>{if(v.children!==g.children){const C=p(g.anchor);T(g),[v.el,v.anchor]=m(v.children,k,C,I)}else v.el=g.el,v.anchor=g.anchor},S=({el:g,anchor:v},k,I)=>{let C;for(;g&&g!==v;)C=p(g),s(g,k,I),g=C;s(v,k,I)},T=({el:g,anchor:v})=>{let k;for(;g&&g!==v;)k=p(g),r(g),g=k;r(v)},M=(g,v,k,I,C,F,U,N,j)=>{U=U||v.type==="svg",g==null?q(v,k,I,C,F,U,N,j):Q(g,v,C,F,U,N,j)},q=(g,v,k,I,C,F,U,N)=>{let j,R;const{type:re,props:se,shapeFlag:oe,transition:pe,dirs:ke}=g;if(j=g.el=i(g.type,F,se&&se.is,se),oe&8?f(j,g.children):oe&16&&V(g.children,j,null,I,C,F&&re!=="foreignObject",U,N),ke&&Dn(g,null,I,"created"),A(j,g,g.scopeId,U,I),se){for(const Ne in se)Ne!=="value"&&!ro(Ne)&&o(j,Ne,null,se[Ne],F,g.children,I,C,H);"value"in se&&o(j,"value",null,se.value),(R=se.onVnodeBeforeMount)&&Ot(R,I,g)}Object.defineProperty(j,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(j,"__vueParentComponent",{value:I,enumerable:!1}),ke&&Dn(g,null,I,"beforeMount");const He=(!C||C&&!C.pendingBranch)&&pe&&!pe.persisted;He&&pe.beforeEnter(j),s(j,v,k),((R=se&&se.onVnodeMounted)||He||ke)&&Je(()=>{R&&Ot(R,I,g),He&&pe.enter(j),ke&&Dn(g,null,I,"mounted")},C)},A=(g,v,k,I,C)=>{if(k&&h(g,k),I)for(let F=0;F<I.length;F++)h(g,I[F]);if(C){let F=C.subTree;if(F.patchFlag>0&&F.patchFlag&2048&&(F=Vf(F.children)||F),v===F){const U=C.vnode;A(g,U,U.scopeId,U.slotScopeIds,C.parent)}}},V=(g,v,k,I,C,F,U,N,j=0)=>{for(let R=j;R<g.length;R++){const re=g[R]=N?xn(g[R]):jt(g[R]);_(null,re,v,k,I,C,F,U,N)}},Q=(g,v,k,I,C,F,U)=>{const N=v.el=g.el;let{patchFlag:j,dynamicChildren:R,dirs:re}=v;j|=g.patchFlag&16;const se=g.props||Fe,oe=v.props||Fe;let pe;k&&Vn(k,!1),(pe=oe.onVnodeBeforeUpdate)&&Ot(pe,k,v,g),re&&Dn(v,g,k,"beforeUpdate"),k&&Vn(k,!0),Tn&&(j=0,U=!1,R=null);const ke=C&&v.type!=="foreignObject";if(R?(ae(g.dynamicChildren,R,N,k,I,ke,F),k&&k.type.__hmrId&&sr(g,v)):U||_e(g,v,N,null,k,I,ke,F,!1),j>0){if(j&16)B(N,v,se,oe,k,I,C);else if(j&2&&se.class!==oe.class&&o(N,"class",null,oe.class,C),j&4&&o(N,"style",se.style,oe.style,C),j&8){const He=v.dynamicProps;for(let Ne=0;Ne<He.length;Ne++){const Ke=He[Ne],Rt=se[Ke],fs=oe[Ke];(fs!==Rt||Ke==="value")&&o(N,Ke,Rt,fs,C,g.children,k,I,H)}}j&1&&g.children!==v.children&&f(N,v.children)}else!U&&R==null&&B(N,v,se,oe,k,I,C);((pe=oe.onVnodeUpdated)||re)&&Je(()=>{pe&&Ot(pe,k,v,g),re&&Dn(v,g,k,"updated")},I)},ae=(g,v,k,I,C,F,U)=>{for(let N=0;N<v.length;N++){const j=g[N],R=v[N],re=j.el&&(j.type===Ie||!En(j,R)||j.shapeFlag&70)?d(j.el):k;_(j,R,re,null,I,C,F,U,!0)}},B=(g,v,k,I,C,F,U)=>{if(k!==I){if(k!==Fe)for(const N in k)!ro(N)&&!(N in I)&&o(g,N,k[N],null,U,v.children,C,F,H);for(const N in I){if(ro(N))continue;const j=I[N],R=k[N];j!==R&&N!=="value"&&o(g,N,R,j,U,v.children,C,F,H)}"value"in I&&o(g,"value",k.value,I.value)}},be=(g,v,k,I,C,F,U,N,j)=>{const R=v.el=g?g.el:a(""),re=v.anchor=g?g.anchor:a("");let{patchFlag:se,dynamicChildren:oe,slotScopeIds:pe}=v;(Tn||se&2048)&&(se=0,j=!1,oe=null),pe&&(N=N?N.concat(pe):pe),g==null?(s(R,k,I),s(re,k,I),V(v.children,k,re,C,F,U,N,j)):se>0&&se&64&&oe&&g.dynamicChildren?(ae(g.dynamicChildren,oe,k,C,F,U,N),C&&C.type.__hmrId?sr(g,v):(v.key!=null||C&&v===C.subTree)&&sr(g,v,!0)):_e(g,v,k,re,C,F,U,N,j)},Ae=(g,v,k,I,C,F,U,N,j)=>{v.slotScopeIds=N,g==null?v.shapeFlag&512?C.ctx.activate(v,k,I,U,j):Pe(v,k,I,C,F,U,j):je(g,v,j)},Pe=(g,v,k,I,C,F,U)=>{const N=g.component=Bg(g,I,C);if(N.type.__hmrId&&Im(N),oo(g),Jt(N,"mount"),Fr(g)&&(N.ctx.renderer=Ee),Jt(N,"init"),Wg(N),en(N,"init"),N.asyncDep){if(C&&C.registerDep(N,K),!g.el){const j=N.subTree=z(Ze);$(null,j,v,k)}return}K(N,g,v,k,C,F,U),io(),en(N,"mount")},je=(g,v,k)=>{const I=v.component=g.component;if(Km(g,v,k))if(I.asyncDep&&!I.asyncResolved){oo(v),le(I,v,k),io();return}else I.next=v,Cm(I.update),I.update();else v.el=g.el,I.vnode=v},K=(g,v,k,I,C,F,U)=>{const N=()=>{if(g.isMounted){let{next:re,bu:se,u:oe,parent:pe,vnode:ke}=g,He=re,Ne;oo(re||g.vnode),Vn(g,!1),re?(re.el=ke.el,le(g,re,U)):re=ke,se&&Sn(se),(Ne=re.props&&re.props.onVnodeBeforeUpdate)&&Ot(Ne,pe,re,ke),Vn(g,!0),Jt(g,"render");const Ke=ai(g);en(g,"render");const Rt=g.subTree;g.subTree=Ke,Jt(g,"patch"),_(Rt,Ke,d(Rt.el),ee(Rt),g,C,F),en(g,"patch"),re.el=Ke.el,He===null&&Ym(g,Ke.el),oe&&Je(oe,C),(Ne=re.props&&re.props.onVnodeUpdated)&&Je(()=>Ot(Ne,pe,re,ke),C),jf(g),io()}else{let re;const{el:se,props:oe}=v,{bm:pe,m:ke,parent:He}=g,Ne=ks(v);if(Vn(g,!1),pe&&Sn(pe),!Ne&&(re=oe&&oe.onVnodeBeforeMount)&&Ot(re,He,v),Vn(g,!0),se&&ce){const Ke=()=>{Jt(g,"render"),g.subTree=ai(g),en(g,"render"),Jt(g,"hydrate"),ce(se,g.subTree,g,C,null),en(g,"hydrate")};Ne?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{Jt(g,"render");const Ke=g.subTree=ai(g);en(g,"render"),Jt(g,"patch"),_(null,Ke,k,I,g,C,F),en(g,"patch"),v.el=Ke.el}if(ke&&Je(ke,C),!Ne&&(re=oe&&oe.onVnodeMounted)){const Ke=v;Je(()=>Ot(re,He,Ke),C)}(v.shapeFlag&256||He&&ks(He.vnode)&&He.vnode.shapeFlag&256)&&g.a&&Je(g.a,C),g.isMounted=!0,Bi(g),v=k=I=null}},j=g.effect=new Ul(N,()=>zo(R),g.scope),R=g.update=()=>j.run();R.id=g.uid,Vn(g,!0),j.onTrack=g.rtc?re=>Sn(g.rtc,re):void 0,j.onTrigger=g.rtg?re=>Sn(g.rtg,re):void 0,R.ownerInstance=g,R()},le=(g,v,k)=>{v.component=g;const I=g.vnode.props;g.vnode=v,g.next=null,bg(g,v.props,I,k),Og(g,v.children,k),ls(),za(),as()},_e=(g,v,k,I,C,F,U,N,j=!1)=>{const R=g&&g.children,re=g?g.shapeFlag:0,se=v.children,{patchFlag:oe,shapeFlag:pe}=v;if(oe>0){if(oe&128){yt(R,se,k,I,C,F,U,N,j);return}else if(oe&256){Re(R,se,k,I,C,F,U,N,j);return}}pe&8?(re&16&&H(R,C,F),se!==R&&f(k,se)):re&16?pe&16?yt(R,se,k,I,C,F,U,N,j):H(R,C,F,!0):(re&8&&f(k,""),pe&16&&V(se,k,I,C,F,U,N,j))},Re=(g,v,k,I,C,F,U,N,j)=>{g=g||$s,v=v||$s;const R=g.length,re=v.length,se=Math.min(R,re);let oe;for(oe=0;oe<se;oe++){const pe=v[oe]=j?xn(v[oe]):jt(v[oe]);_(g[oe],pe,k,null,C,F,U,N,j)}R>re?H(g,C,F,!0,!1,se):V(v,k,I,C,F,U,N,j,se)},yt=(g,v,k,I,C,F,U,N,j)=>{let R=0;const re=v.length;let se=g.length-1,oe=re-1;for(;R<=se&&R<=oe;){const pe=g[R],ke=v[R]=j?xn(v[R]):jt(v[R]);if(En(pe,ke))_(pe,ke,k,null,C,F,U,N,j);else break;R++}for(;R<=se&&R<=oe;){const pe=g[se],ke=v[oe]=j?xn(v[oe]):jt(v[oe]);if(En(pe,ke))_(pe,ke,k,null,C,F,U,N,j);else break;se--,oe--}if(R>se){if(R<=oe){const pe=oe+1,ke=pe<re?v[pe].el:I;for(;R<=oe;)_(null,v[R]=j?xn(v[R]):jt(v[R]),k,ke,C,F,U,N,j),R++}}else if(R>oe)for(;R<=se;)dt(g[R],C,F,!0),R++;else{const pe=R,ke=R,He=new Map;for(R=ke;R<=oe;R++){const rt=v[R]=j?xn(v[R]):jt(v[R]);rt.key!=null&&(He.has(rt.key)&&L("Duplicate keys found during update:",JSON.stringify(rt.key),"Make sure keys are unique."),He.set(rt.key,R))}let Ne,Ke=0;const Rt=oe-ke+1;let fs=!1,La=0;const Hs=new Array(Rt);for(R=0;R<Rt;R++)Hs[R]=0;for(R=pe;R<=se;R++){const rt=g[R];if(Ke>=Rt){dt(rt,C,F,!0);continue}let Ut;if(rt.key!=null)Ut=He.get(rt.key);else for(Ne=ke;Ne<=oe;Ne++)if(Hs[Ne-ke]===0&&En(rt,v[Ne])){Ut=Ne;break}Ut===void 0?dt(rt,C,F,!0):(Hs[Ut-ke]=R+1,Ut>=La?La=Ut:fs=!0,_(rt,v[Ut],k,null,C,F,U,N,j),Ke++)}const Ra=fs?Lg(Hs):$s;for(Ne=Ra.length-1,R=Rt-1;R>=0;R--){const rt=ke+R,Ut=v[rt],Na=rt+1<re?v[rt+1].el:I;Hs[R]===0?_(null,Ut,k,Na,C,F,U,N,j):fs&&(Ne<0||R!==Ra[Ne]?tt(Ut,k,Na,2):Ne--)}}},tt=(g,v,k,I,C=null)=>{const{el:F,type:U,transition:N,children:j,shapeFlag:R}=g;if(R&6){tt(g.component.subTree,v,k,I);return}if(R&128){g.suspense.move(v,k,I);return}if(R&64){U.move(g,v,k,Ee);return}if(U===Ie){s(F,v,k);for(let se=0;se<j.length;se++)tt(j[se],v,k,I);s(g.anchor,v,k);return}if(U===lo){S(g,v,k);return}if(I!==2&&R&1&&N)if(I===0)N.beforeEnter(F),s(F,v,k),Je(()=>N.enter(F),C);else{const{leave:se,delayLeave:oe,afterLeave:pe}=N,ke=()=>s(F,v,k),He=()=>{se(F,()=>{ke(),pe&&pe()})};oe?oe(F,ke,He):He()}else s(F,v,k)},dt=(g,v,k,I=!1,C=!1)=>{const{type:F,props:U,ref:N,children:j,dynamicChildren:R,shapeFlag:re,patchFlag:se,dirs:oe}=g;if(N!=null&&Qi(N,null,k,g,!0),re&256){v.ctx.deactivate(g);return}const pe=re&1&&oe,ke=!ks(g);let He;if(ke&&(He=U&&U.onVnodeBeforeUnmount)&&Ot(He,v,g),re&6)Y(g.component,k,I);else{if(re&128){g.suspense.unmount(k,I);return}pe&&Dn(g,null,v,"beforeUnmount"),re&64?g.type.remove(g,v,k,C,Ee,I):R&&(F!==Ie||se>0&&se&64)?H(R,v,k,!1,!0):(F===Ie&&se&384||!C&&re&16)&&H(j,v,k),I&&gn(g)}(ke&&(He=U&&U.onVnodeUnmounted)||pe)&&Je(()=>{He&&Ot(He,v,g),pe&&Dn(g,null,v,"unmounted")},k)},gn=g=>{const{type:v,el:k,anchor:I,transition:C}=g;if(v===Ie){g.patchFlag>0&&g.patchFlag&2048&&C&&!C.persisted?g.children.forEach(U=>{U.type===Ze?r(U.el):gn(U)}):P(k,I);return}if(v===lo){T(g);return}const F=()=>{r(k),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:N}=C,j=()=>U(k,F);N?N(g.el,F,j):j()}else F()},P=(g,v)=>{let k;for(;g!==v;)k=p(g),r(g),g=k;r(v)},Y=(g,v,k)=>{g.type.__hmrId&&Mm(g);const{bum:I,scope:C,update:F,subTree:U,um:N}=g;I&&Sn(I),C.stop(),F&&(F.active=!1,dt(U,g,v,k)),N&&Je(N,v),Je(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),Hm(g)},H=(g,v,k,I=!1,C=!1,F=0)=>{for(let U=F;U<g.length;U++)dt(g[U],v,k,I,C)},ee=g=>g.shapeFlag&6?ee(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),xe=(g,v,k)=>{g==null?v._vnode&&dt(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,k),za(),Lf(),v._vnode=g},Ee={p:_,um:dt,m:tt,r:gn,mt:Pe,mc:V,pc:_e,pbc:ae,n:ee,o:e};let de,ce;return t&&([de,ce]=t(Ee)),{render:xe,hydrate:de,createApp:Cg(xe,de)}}function Vn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sr(e,t,n=!1){const s=e.children,r=t.children;if(ie(s)&&ie(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=xn(r[o]),a.el=i.el),n||sr(i,a)),a.type===Dr&&(a.el=i.el),a.type===Ze&&!a.el&&(a.el=i.el)}}function Lg(e){const t=e.slice(),n=[0];let s,r,o,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Rg=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),oc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ji=(e,t)=>{const n=e&&e.to;if(Ve(n))if(t){const s=t(n);return s||L(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Es(e)&&L(`Invalid Teleport target: ${n}`),n},Ng={__isTeleport:!0,process(e,t,n,s,r,o,i,a,c,u){const{mc:f,pc:d,pbc:p,o:{insert:h,querySelector:m,createText:_,createComment:y}}=u,$=Es(t.props);let{shapeFlag:b,children:w,dynamicChildren:S}=t;if(Tn&&(c=!1,S=null),e==null){const T=t.el=y("teleport start"),M=t.anchor=y("teleport end");h(T,n,s),h(M,n,s);const q=t.target=Ji(t.props,m),A=t.targetAnchor=_("");q?(h(A,q),i=i||oc(q)):$||L("Invalid Teleport target on mount:",q,`(${typeof q})`);const V=(Q,ae)=>{b&16&&f(w,Q,ae,r,o,i,a,c)};$?V(n,M):q&&V(q,A)}else{t.el=e.el;const T=t.anchor=e.anchor,M=t.target=e.target,q=t.targetAnchor=e.targetAnchor,A=Es(e.props),V=A?n:M,Q=A?T:q;if(i=i||oc(M),S?(p(e.dynamicChildren,S,V,r,o,i,a),sr(e,t,!0)):c||d(e,t,V,Q,r,o,i,a,!1),$)A||Zr(t,n,T,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ae=t.target=Ji(t.props,m);ae?Zr(t,ae,null,u,0):L("Invalid Teleport target on update:",M,`(${typeof M})`)}else A&&Zr(t,M,q,u,1)}ad(t)},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:f,target:d,props:p}=e;if(d&&o(f),(i||!Es(p))&&(o(u),a&16))for(let h=0;h<c.length;h++){const m=c[h];r(m,t,n,!0,!!m.dynamicChildren)}},move:Zr,hydrate:Fg};function Zr(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:f}=e,d=o===2;if(d&&s(i,t,n),(!d||Es(f))&&c&16)for(let p=0;p<u.length;p++)r(u[p],t,n,2);d&&s(a,t,n)}function Fg(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const f=t.target=Ji(t.props,c);if(f){const d=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Es(t.props))t.anchor=u(i(e),t,a(e),n,s,r,o),t.targetAnchor=d;else{t.anchor=i(e);let p=d;for(;p;)if(p=i(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,f._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(d,t,f,n,s,r,o)}ad(t)}return t.anchor&&i(t.anchor)}const jg=Ng;function ad(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ie=Symbol("Fragment"),Dr=Symbol("Text"),Ze=Symbol("Comment"),lo=Symbol("Static"),rr=[];let Ht=null;function E(e=!1){rr.push(Ht=e?null:[])}function Hg(){rr.pop(),Ht=rr[rr.length-1]||null}let vr=1;function ic(e){vr+=e}function cd(e){return e.dynamicChildren=vr>0?Ht||$s:null,Hg(),vr>0&&Ht&&Ht.push(e),e}function G(e,t,n,s,r,o){return cd(l(e,t,n,s,r,o,!0))}function X(e,t,n,s,r){return cd(z(e,t,n,s,r,!0))}function dn(e){return e?e.__v_isVNode===!0:!1}function En(e,t){return t.shapeFlag&6&&_s.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Dg=(...e)=>Vg(...e),Zo="__vInternal",ud=({key:e})=>e??null,ao=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ve(e)||Ce(e)||ue(e)?{i:Xe,r:e,k:t,f:!!n}:e:null;function l(e,t=null,n=null,s=0,r=null,o=e===Ie?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ud(t),ref:t&&ao(t),scopeId:Ko,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return a?(sa(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),c.key!==c.key&&L("VNode created with invalid key (NaN). VNode type:",c.type),vr>0&&!i&&Ht&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ht.push(c),c}const z=Dg;function Vg(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===ag)&&(e||L(`Invalid vnode type when creating vnode: ${e}.`),e=Ze),dn(e)){const a=Dt(e,t,!0);return n&&sa(a,n),vr>0&&!o&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(e)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(md(e)&&(e=e.__vccOpts),t){t=we(t);let{class:a,style:c}=t;a&&!Ve(a)&&(t.class=We(a)),Le(c)&&(xo(c)&&!ie(c)&&(c=qe({},c)),t.style=ct(c))}const i=Ve(e)?1:Uf(e)?128:Rg(e)?64:Le(e)?4:ue(e)?2:0;return i&4&&xo(e)&&(e=fe(e),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),l(e,t,n,s,r,i,o,!0)}function we(e){return e?xo(e)||Zo in e?qe({},e):e:null}function Dt(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,a=t?yr(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ud(a),ref:t&&t.ref?n&&r?ie(r)?r.concat(ao(t)):[r,ao(t)]:ao(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o===-1&&ie(i)?i.map(fd):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function fd(e){const t=Dt(e);return ie(e.children)&&(t.children=e.children.map(fd)),t}function ne(e=" ",t=0){return z(Dr,null,e,t)}function ge(e="",t=!1){return t?(E(),X(Ze,null,e)):z(Ze,null,e)}function jt(e){return e==null||typeof e=="boolean"?z(Ze):ie(e)?z(Ie,null,e.slice()):typeof e=="object"?xn(e):z(Dr,null,String(e))}function xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function sa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),sa(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Zo in t)?t._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),s&64?(n=16,t=[ne(t)]):n=8);e.children=t,e.shapeFlag|=n}function yr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=We([t.class,s.class]));else if(r==="style")t.style=ct([t.style,s.style]);else if(Lr(r)){const o=t[r],i=s[r];i&&o!==i&&!(ie(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ot(e,t,n,s=null){At(e,t,7,[n,s])}const Ug=ld();let qg=0;function Bg(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ug,o={uid:qg++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nd(s,r),emitsOptions:Df(s,r),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx=cg(o),o.root=t?t.root:o,o.emit=qm.bind(null,o),e.ce&&e.ce(o),o}let Be=null;const Mt=()=>Be||Xe,As=e=>{Be=e,e.scope.on()},ss=()=>{Be&&Be.scope.off(),Be=null},zg=jn("slot,component");function el(e,t){const n=t.isNativeTag||of;(zg(e)||n(e))&&L("Do not use built-in or reserved HTML elements as component id: "+e)}function dd(e){return e.vnode.shapeFlag&4}let br=!1;function Wg(e,t=!1){br=t;const{props:n,children:s}=e.vnode,r=dd(e);vg(e,n,r,t),Pg(e,s);const o=r?Kg(e,t):void 0;return br=!1,o}function Kg(e,t){var n;const s=e.type;{if(s.name&&el(s.name,e.appContext.config),s.components){const o=Object.keys(s.components);for(let i=0;i<o.length;i++)el(o[i],e.appContext.config)}if(s.directives){const o=Object.keys(s.directives);for(let i=0;i<o.length;i++)Xf(o[i])}s.compilerOptions&&Yg()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=qo(new Proxy(e.ctx,Jf)),ug(e);const{setup:r}=s;if(r){const o=e.setupContext=r.length>1?hd(e):null;As(e),ls();const i=an(r,e,0,[ws(e.props),o]);if(as(),ss(),Fl(i)){if(i.then(ss,ss),t)return i.then(a=>{lc(e,a,t)}).catch(a=>{Bo(a,e,0)});if(e.asyncDep=i,!e.suspense){const a=(n=s.name)!==null&&n!==void 0?n:"Anonymous";L(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else lc(e,i,t)}else pd(e,t)}function lc(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)?(dn(t)&&L("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Pf(t),fg(e)):t!==void 0&&L(`setup() should return an object. Received: ${t===null?"null":typeof t}`),pd(e,n)}let tl;const Yg=()=>!tl;function pd(e,t,n){const s=e.type;if(!e.render){if(!t&&tl&&!s.render){const r=s.template||ta(e).template;if(r){Jt(e,"compile");const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=qe(qe({isCustomElement:o,delimiters:a},i),c);s.render=tl(r,u),en(e,"compile")}}e.render=s.render||gt}As(e),ls(),pg(e),as(),ss(),!s.render&&e.render===gt&&!t&&(s.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Gg(e){return new Proxy(e.attrs,{get(t,n){return So(),vt(e,"get","$attrs"),t[n]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function hd(e){const t=s=>{if(e.exposed&&L("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(ie(s)?r="array":Ce(s)&&(r="ref")),r!=="object"&&L(`expose() should be passed a plain object, received ${r}.`)}e.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Gg(e))},get slots(){return ws(e.slots)},get emit(){return(s,...r)=>e.emit(s,...r)},expose:t})}function Qo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pf(qo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ns)return ns[n](e)},has(t,n){return n in t||n in ns}}))}const Xg=/(?:^|[-_])(\w)/g,Zg=e=>e.replace(Xg,t=>t.toUpperCase()).replace(/[-_]/g,"");function wr(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function Jo(e,t,n=!1){let s=wr(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=o=>{for(const i in o)if(o[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?Zg(s):n?"App":"Anonymous"}function md(e){return ue(e)&&"__vccOpts"in e}const O=(e,t)=>wm(e,t,br);function Qg(){return Jg().slots}function Jg(){const e=Mt();return e||L("useContext() called without active instance."),e.setupContext||(e.setupContext=hd(e))}function ut(e,t,n){const s=arguments.length;return s===2?Le(t)&&!ie(t)?dn(t)?z(e,null,[t]):z(e,t):z(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dn(n)&&(n=[n]),z(e,t,n))}const e_=Symbol("ssrContext"),t_=()=>{{const e=D(e_);return e||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function pi(e){return!!(e&&e.__v_isShallow)}function n_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(d){return Le(d)?d.__isVue?["div",e,"VueInstance"]:Ce(d)?["div",{},["span",e,f(d)],"<",a(d.value),">"]:es(d)?["div",{},["span",e,pi(d)?"ShallowReactive":"Reactive"],"<",a(d),`>${Nn(d)?" (readonly)":""}`]:Nn(d)?["div",{},["span",e,pi(d)?"ShallowReadonly":"Readonly"],"<",a(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...o(d.$)]}};function o(d){const p=[];d.type.props&&d.props&&p.push(i("props",fe(d.props))),d.setupState!==Fe&&p.push(i("setup",d.setupState)),d.data!==Fe&&p.push(i("data",fe(d.data)));const h=c(d,"computed");h&&p.push(i("computed",h));const m=c(d,"inject");return m&&p.push(i("injected",m)),p.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),p}function i(d,p){return p=qe({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(h=>["div",{},["span",s,h+": "],a(p[h],!1)])]]:["span",{}]}function a(d,p=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",s,d]:Le(d)?["object",{object:p?fe(d):d}]:["span",n,String(d)]}function c(d,p){const h=d.type;if(ue(h))return;const m={};for(const _ in d.ctx)u(h,_,p)&&(m[_]=d.ctx[_]);return m}function u(d,p,h){const m=d[h];if(ie(m)&&m.includes(p)||Le(m)&&p in m||d.extends&&u(d.extends,p,h)||d.mixins&&d.mixins.some(_=>u(_,p,h)))return!0}function f(d){return pi(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Oo="3.2.47",s_="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,ac=Kn&&Kn.createElement("template"),r_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Kn.createElementNS(s_,e):Kn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Kn.createTextNode(e),createComment:e=>Kn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ac.innerHTML=s?`<svg>${e}</svg>`:e;const a=ac.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function o_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function i_(e,t,n){const s=e.style,r=Ve(n);if(n&&!r){if(t&&!Ve(t))for(const o in t)n[o]==null&&nl(s,o,"");for(const o in n)nl(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const l_=/[^\\];\s*$/,cc=/\s*!important$/;function nl(e,t,n){if(ie(n))n.forEach(s=>nl(e,t,s));else if(n==null&&(n=""),l_.test(n)&&L(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=a_(e,t);cc.test(n)?e.setProperty(un(s),n.replace(cc,""),"important"):e[s]=n}}const uc=["Webkit","Moz","ms"],hi={};function a_(e,t){const n=hi[t];if(n)return n;let s=Yt(t);if(s!=="filter"&&s in e)return hi[t]=s;s=os(s);for(let r=0;r<uc.length;r++){const o=uc[r]+s;if(o in e)return hi[t]=o}return t}const fc="http://www.w3.org/1999/xlink";function c_(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fc,t.slice(6,t.length)):e.setAttributeNS(fc,t,n);else{const o=Th(t);n==null||o&&!sf(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function u_(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=sf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch(c){a||L(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&e.removeAttribute(t)}function vs(e,t,n,s){e.addEventListener(t,n,s)}function f_(e,t,n,s){e.removeEventListener(t,n,s)}function d_(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[a,c]=p_(t);if(s){const u=o[t]=g_(s,r);vs(e,a,u,c)}else i&&(f_(e,a,i,c),o[t]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function p_(e){let t;if(dc.test(e)){t={};let s;for(;s=e.match(dc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):un(e.slice(2)),t]}let mi=0;const h_=Promise.resolve(),m_=()=>mi||(h_.then(()=>mi=0),mi=Date.now());function g_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(__(s,n.value),t,5,[s])};return n.value=e,n.attached=m_(),n}function __(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const pc=/^on[a-z]/,v_=(e,t,n,s,r=!1,o,i,a,c)=>{t==="class"?o_(e,s,r):t==="style"?i_(e,n,s):Lr(t)?_o(t)||d_(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):y_(e,t,s,r))?u_(e,t,s,o,i,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),c_(e,t,s,r))};function y_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&pc.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pc.test(t)&&Ve(n)?!1:t in e}const vn="transition",Vs="animation",gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b_=qe({},Qm.props,gd),Un=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},hc=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function w_(e){const t={};for(const B in e)B in gd||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=i,appearToClass:f=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=x_(r),_=m&&m[0],y=m&&m[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:w,onLeave:S,onLeaveCancelled:T,onBeforeAppear:M=$,onAppear:q=b,onAppearCancelled:A=w}=t,V=(B,be,Ae)=>{bn(B,be?f:a),bn(B,be?u:i),Ae&&Ae()},Q=(B,be)=>{B._isLeaving=!1,bn(B,d),bn(B,h),bn(B,p),be&&be()},ae=B=>(be,Ae)=>{const Pe=B?q:b,je=()=>V(be,B,Ae);Un(Pe,[be,je]),mc(()=>{bn(be,B?c:o),tn(be,B?f:a),hc(Pe)||gc(be,s,_,je)})};return qe(t,{onBeforeEnter(B){Un($,[B]),tn(B,o),tn(B,i)},onBeforeAppear(B){Un(M,[B]),tn(B,c),tn(B,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(B,be){B._isLeaving=!0;const Ae=()=>Q(B,be);tn(B,d),vd(),tn(B,p),mc(()=>{B._isLeaving&&(bn(B,d),tn(B,h),hc(S)||gc(B,s,y,Ae))}),Un(S,[B,Ae])},onEnterCancelled(B){V(B,!1),Un(w,[B])},onAppearCancelled(B){V(B,!0),Un(A,[B])},onLeaveCancelled(B){Q(B),Un(T,[B])}})}function x_(e){if(e==null)return null;if(Le(e))return[gi(e.enter),gi(e.leave)];{const t=gi(e);return[t,t]}}function gi(e){const t=Nh(e);return Em(t,"<transition> explicit duration"),t}function tn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function bn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function mc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $_=0;function gc(e,t,n,s){const r=e._endId=++$_,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:a,propCount:c}=_d(e,t);if(!i)return s();const u=i+"end";let f=0;const d=()=>{e.removeEventListener(u,p),o()},p=h=>{h.target===e&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},a+1),e.addEventListener(u,p)}function _d(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),r=s(`${vn}Delay`),o=s(`${vn}Duration`),i=_c(r,o),a=s(`${Vs}Delay`),c=s(`${Vs}Duration`),u=_c(a,c);let f=null,d=0,p=0;t===vn?i>0&&(f=vn,d=i,p=o.length):t===Vs?u>0&&(f=Vs,d=u,p=c.length):(d=Math.max(i,u),f=d>0?i>u?vn:Vs:null,p=f?f===vn?o.length:c.length:0);const h=f===vn&&/\b(transform|all)(,|$)/.test(s(`${vn}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:h}}function _c(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>vc(n)+vc(e[s])))}function vc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function vd(){return document.body.offsetHeight}const yd=new WeakMap,bd=new WeakMap,wd={name:"TransitionGroup",props:qe({},b_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Mt(),s=Bf();let r,o;return Go(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!T_(r[0].el,n.vnode.el,i))return;r.forEach(E_),r.forEach(P_);const a=r.filter(O_);vd(),a.forEach(c=>{const u=c.el,f=u.style;tn(u,i),f.transform=f.webkitTransform=f.transitionDuration="";const d=u._moveCb=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,bn(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=fe(e),a=w_(i);let c=i.tag||Ie;r=o,o=t.default?Ql(t.default()):[];for(let u=0;u<o.length;u++){const f=o[u];f.key!=null?Cs(f,_r(f,a,s,n)):L("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const f=r[u];Cs(f,_r(f,a,s,n)),yd.set(f,f.el.getBoundingClientRect())}return z(c,null,o)}}},S_=e=>delete e.mode;wd.props;const k_=wd;function E_(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function P_(e){bd.set(e,e.el.getBoundingClientRect())}function O_(e){const t=yd.get(e),n=bd.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function T_(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=_d(s);return r.removeChild(s),o}const yc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?n=>Sn(t,n):t};function C_(e){e.target.composing=!0}function bc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const A_={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=yc(r);const o=s||r.props&&r.props.type==="number";vs(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=ji(a)),e._assign(a)}),n&&vs(e,"change",()=>{e.value=e.value.trim()}),t||(vs(e,"compositionstart",C_),vs(e,"compositionend",bc),vs(e,"change",bc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=yc(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&ji(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},I_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wc=(e,t)=>n=>{if(!("key"in n))return;const s=un(n.key);if(t.some(r=>r===s||I_[r]===s))return e(n)},xd={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Us(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Us(e,!0),s.enter(e)):s.leave(e,()=>{Us(e,!1)}):Us(e,t))},beforeUnmount(e,{value:t}){Us(e,t)}};function Us(e,t){e.style.display=t?e._vod:"none"}const M_=qe({patchProp:v_},r_);let xc;function L_(){return xc||(xc=Ig(M_))}const R_=(...e)=>{const t=L_().createApp(...e);N_(t),F_(t);const{mount:n}=t;return t.mount=s=>{const r=j_(s);if(!r)return;const o=t._component;!ue(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function N_(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>nf(t)||Ph(t),writable:!1})}function F_(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return L(s),n},set(){L(s)}})}}function j_(e){if(Ve(e)){const t=document.querySelector(e);return t||L(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function H_(){n_()}H_();function sl(e,t={},n){for(const s in e){const r=e[s],o=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?sl(r,t,o):typeof r=="function"&&(t[o]=r)}return t}function D_(e,t){return e.reduce((n,s)=>n.then(()=>s.apply(void 0,t)),Promise.resolve())}function V_(e,t){return Promise.all(e.map(n=>n.apply(void 0,t)))}function _i(e,t){for(const n of e)n(t)}class U_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const r=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${r} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,r=(...o)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...o));return s=this.hook(t,r),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];this._hooks[t]=void 0;for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=sl(t),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const n=sl(t);for(const s in n)this.removeHook(s,n[s])}callHook(t,...n){return this.callHookWith(D_,t,...n)}callHookParallel(t,...n){return this.callHookWith(V_,t,...n)}callHookWith(t,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&_i(this._before,r);const o=t(this._hooks[n]||[],s);return o instanceof Promise?o.finally(()=>{this._after&&r&&_i(this._after,r)}):(this._after&&r&&_i(this._after,r),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}function q_(){return new U_}function B_(e){return Array.isArray(e)?e:[e]}const z_=["title","script","style","noscript"],ra=["base","meta","link","style","script","noscript"],W_=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],K_=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Y_=["tagPosition","tagPriority","tagDuplicateStrategy"];function $d(e,t){const{props:n,tag:s}=e;if(K_.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const o of r)if(typeof n[o]<"u"){const i=String(n[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const G_=e=>{e=e||{};const t=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){t.forEach(r=>{n.props[r]&&(n.key=n.props[r],delete n.props[r])});const s=n.key?`${n.tag}:${n.key}`:$d(n);s&&(n._d=s)},"tags:resolve":function(n){const s={};n.tags.forEach(r=>{let o=r._d||r._p;const i=s[o];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&(r.tag==="htmlAttrs"||r.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const u=i.props;["class","style"].forEach(f=>{r.props[f]&&u[f]&&(f==="style"&&!u[f].endsWith(";")&&(u[f]+=";"),r.props[f]=`${u[f]} ${r.props[f]}`)}),s[o].props={...u,...r.props};return}else r._e===i._e&&(o=r._d=`${o}:${r._p}`);const c=Object.keys(r.props).length;if((c===0||c===1&&typeof r.props["data-h-key"]<"u")&&!r.children){delete s[o];return}}s[o]=r}),n.tags=Object.values(s)}}}};function Sd(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}const Qr=(e,t)=>{const{tag:n,$el:s}=e;s&&(Object.entries(n.props).forEach(([r,o])=>{o=String(o);const i=`attr:${r}`;if(r==="class"){if(!o)return;for(const a of o.split(" ")){const c=`${i}:${a}`;t&&t(e,c,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}t&&!r.startsWith("data-h-")&&t(e,i,()=>s.removeAttribute(r)),s.getAttribute(r)!==o&&s.setAttribute(r,o)}),z_.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};async function kd(e,t={}){var d,p;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||window.document,r=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([m,_])=>{r[m]=_})});const o=async h=>{const m=e.headEntries().find(y=>y._i===h._e),_={renderId:h._d||Sd(JSON.stringify({...h,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:h,entry:m,staleSideEffects:r};return await e.hooks.callHook("dom:beforeRenderTag",_),_},i=[],a={body:[],head:[]},c=(h,m,_)=>{m=`${h.renderId}:${m}`,h.entry&&(h.entry._sde[m]=_),delete r[m]},u=h=>{e._elMap[h.renderId]=h.$el,i.push(h),c(h,"el",()=>{var m;(m=h.$el)==null||m.remove(),delete e._elMap[h.renderId]})};for(const h of await e.resolveTags()){const m=await o(h);if(!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){s.title=_.children||"",i.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=s[_.tag==="htmlAttrs"?"documentElement":"body"],Qr(m,c),i.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&_._hash&&(m.$el=s.querySelector(`${(d=_.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._hash}]`)),m.$el){m.tag._d&&Qr(m),u(m);continue}m.$el=s.createElement(_.tag),Qr(m),a[(p=_.tagPosition)!=null&&p.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(a).forEach(([h,m])=>{var y;if(!m.length)return;const _=(y=s==null?void 0:s[h])==null?void 0:y.children;if(_){for(const $ of[..._].reverse()){const b=$.tagName.toLowerCase();if(!ra.includes(b))continue;const w=$d({tag:b,props:$.getAttributeNames().reduce((T,M)=>({...T,[M]:$.getAttribute(M)}),{})}),S=m.findIndex(T=>{var M;return T&&(T.tag._d===w||((M=$.isEqualNode)==null?void 0:M.call($,T.$el)))});if(S!==-1){const T=m[S];T.$el=$,Qr(T),u(T),delete m[S]}}m.forEach($=>{const b=$.tag.tagPosition||"head";f[b]=f[b]||s.createDocumentFragment(),f[b].appendChild($.$el),u($)})}}),f.head&&s.head.appendChild(f.head),f.bodyOpen&&s.body.insertBefore(f.bodyOpen,s.body.firstChild),f.bodyClose&&s.body.appendChild(f.bodyClose);for(const h of i)await e.hooks.callHook("dom:renderTag",h);Object.values(r).forEach(h=>h())}let vi=null;async function Ed(e,t={}){function n(){return vi=null,kd(e,t)}const s=t.delayFn||(r=>setTimeout(r,10));return vi=vi||new Promise(r=>s(()=>r(n())))}const X_=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Ed(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}),$c={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Sc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in $c?$c[t]:10}const Z_=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Q_(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Z_)for(const r of e.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=t(r.tagPriority.replace(n,""));typeof o<"u"&&(r._p=o+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Sc(n)-Sc(s))}}}}const kc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e.replace("%s",t??""),J_=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const s=t.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=kc(t[n].children,t[s].children);r!==null?t[s].children=r||t[s].children:delete t[s]}else if(n!==-1){const r=kc(t[n].children);r!==null&&(t[n].children=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}),ev=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),tv=typeof window<"u",nv=()=>({hooks:{"tag:normalise":e=>{var r,o;const{tag:t,entry:n}=e,s=typeof t.props._dynamic<"u";!ra.includes(t.tag)||!t.key||(t._hash=Sd(JSON.stringify({tag:t.tag,key:t.key})),!(tv||(o=(r=Od())==null?void 0:r.resolvedOptions)!=null&&o.document)&&(n._m==="server"||s)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(t=>(delete t.props._dynamic,t))}}}),Ec=["script","link","bodyAttrs"],sv=()=>{const e=(t,n)=>{const s={},r={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?r[i]=a:s[i]=a});let o;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Ec.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Ec.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,o])=>{const i=`${t.tag._d||t.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(delete t.staleSideEffects[i],n.hasAttribute(c))return;const u=o;n.setAttribute(c,""),s.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(a,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}};let Pd;const rv=e=>Pd=e,Od=()=>Pd;async function ov(e,t){const n={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(n.children=t instanceof Promise?await t:t,n):(n.props=await iv({...t}),["children","innerHtml","innerHTML"].forEach(s=>{typeof n.props[s]<"u"&&(n.children=n.props[s],typeof n.children=="object"&&(n.children=JSON.stringify(n.children)),delete n.props[s])}),Object.keys(n.props).filter(s=>Y_.includes(s)).forEach(s=>{n[s]=n.props[s],delete n.props[s]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(s=>n.props.class[s])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((s,r)=>{const o={...n,props:{...n.props}};return o.props.content=s,o.key=`${n.props.name||n.props.property}:${r}`,o}):n)}async function iv(e){for(const t of Object.keys(e))e[t]instanceof Promise&&(e[t]=await e[t]),String(e[t])==="true"?e[t]="":String(e[t])==="false"&&delete e[t];return e}const lv=10;async function av(e){const t=[];return Object.entries(e.resolvedInput||e.input).filter(([n,s])=>typeof s<"u"&&W_.includes(n)).forEach(([n,s])=>{const r=B_(s);t.push(...r.map(o=>ov(n,o)).flat())}),(await Promise.all(t)).flat().map((n,s)=>(n._e=e._i,n._p=(e._i<<lv)+s,n))}const cv=()=>[G_(),Q_(),J_(),nv(),sv(),ev()],uv=(e={})=>[X_({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function fv(e={}){const t=dv({...e,plugins:[...uv(e),...(e==null?void 0:e.plugins)||[]]});return rv(t),t}function dv(e={}){let t=[],n={},s=0;const r=q_();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...cv(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks));const o=()=>r.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const u={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),t.push(u),o(),{dispose(){t=t.filter(f=>f._i!==u._i?!0:(n={...n,...f._sde||{}},f._sde={},o(),!1))},patch(f){t=t.map(d=>(d._i===u._i&&(u.input=d.input=f,o()),d))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const c of a.entries)for(const u of await av(c)){const f={tag:u,entry:c};await r.callHook("tag:normalise",f),a.tags.push(f.tag)}return await r.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return i.hooks.callHook("init",i),i}function pv(e){return typeof e=="function"?e():x(e)}function To(e,t=""){if(e instanceof Promise)return e;const n=pv(e);if(!e||!n)return n;if(Array.isArray(n))return n.map(s=>To(s,t));if(typeof n=="object"){let s=!1;const r=Object.fromEntries(Object.entries(n).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,x(i)]:((typeof i=="function"||Ce(i))&&(s=!0),[o,To(i,o)])));return s&&ra.includes(String(t))&&(r._dynamic=!0),r}return n}const hv=Oo.startsWith("3"),mv=typeof window<"u",Td="usehead";function oa(){return Mt()&&D(Td)||Od()}function gv(e={}){const t=fv({...e,domDelayFn:s=>setTimeout(()=>et(()=>s()),10),plugins:[_v(),...(e==null?void 0:e.plugins)||[]]}),n={install(s){hv&&(s.config.globalProperties.$unhead=t,s.provide(Td,t))}};return t.install=n.install,t}const _v=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=To(t.input)}}});function vv(e,t={}){const n=oa(),s=W(!1),r=W({});Rs(()=>{r.value=s.value?{}:To(e)});const o=n.push(r.value,t);return me(r,a=>{o.patch(a)}),Mt()&&(jr(()=>{o.dispose()}),Yf(()=>{s.value=!0}),Kf(()=>{s.value=!1})),o}function yv(e,t={}){return oa().push(e,t)}function ia(e,t={}){var s;const n=oa();if(n){const r=mv||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?vv(e,t):yv(e,t)}}const bv=e=>ia({htmlAttrs:e});function wv(e){const t=gv(),n={unhead:t,install(s){Oo.startsWith("3")&&(s.config.globalProperties.$head=t,s.provide("usehead",t))},use(s){t.use(s)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(s,r){return t.push(s,r)},addEntry(s,r){return t.push(s,r)},addHeadObjs(s,r){return t.push(s,r)},addReactiveEntry(s,r){const o=ia(s,r);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,r){r?kd(t,{document:s}):Ed(t,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=n.addHeadObjs,t.updateDOM=n.updateDOM,t.hooks.hook("dom:beforeRender",s=>{for(const r of n.hooks["before:dom"])r()===!1&&(s.shouldRender=!1)}),e&&n.addHeadObjs(e),n}const co=Symbol("v-click-clicks"),ys=Symbol("v-click-clicks-elements"),rl=Symbol("v-click-clicks-order-map"),uo=Symbol("v-click-clicks-disabled"),Cd=Symbol("slidev-slide-scale"),Z=Symbol("slidev-slidev-context"),xv=Symbol("slidev-route"),$v=Symbol("slidev-slide-context"),ds="slidev-vclick-target",yi="slidev-vclick-hidden",Sv="slidev-vclick-fade",bi="slidev-vclick-hidden-explicitly",qs="slidev-vclick-current",Jr="slidev-vclick-prior",kv=["localhost","127.0.0.1"];let Ev=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function Pv(e){return e=e??[],Array.isArray(e)?e:[e]}function Pc(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ov(e){return e!=null}function Tv(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Ov))}const er={theme:"unicorn",title:"数值计算方法实训",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Te=er,Cn=Te.aspectRatio??16/9,An=Te.canvasWidth??980,la=Math.ceil(An/Cn),aa=O(()=>Tv(Te.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Lt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const cs=Ue({page:0,clicks:0});let Cv=[],Av=[];Lt(cs,"$syncUp",!0);Lt(cs,"$syncDown",!0);Lt(cs,"$paused",!1);Lt(cs,"$onSet",e=>Cv.push(e));Lt(cs,"$onPatch",e=>Av.push(e));Lt(cs,"$patch",async()=>!1);function Ad(e,t,n=!1){const s=[];let r=!1,o=!1,i,a;const c=Ue(t);function u(h){s.push(h)}function f(h,m){c[h]!==m&&(clearTimeout(i),r=!0,c[h]=m,i=setTimeout(()=>r=!1,0))}function d(h){r||(clearTimeout(a),o=!0,Object.entries(h).forEach(([m,_])=>{c[m]=_}),a=setTimeout(()=>o=!1,0))}function p(h){let m;n?n&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&d(JSON.parse(y.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",y=>d(y.data)));function _(){!n&&m&&!o?m.postMessage(fe(c)):n&&!o&&window.localStorage.setItem(h,JSON.stringify(c)),r||s.forEach(y=>y(c))}if(me(c,_,{deep:!0}),n){const y=window.localStorage.getItem(h);y&&d(JSON.parse(y))}}return{init:p,onPatch:u,patch:f,state:c}}const{init:Iv,onPatch:Mv,patch:Bs,state:wi}=Ad(cs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),us=Ue({});let Lv=[],Rv=[];Lt(us,"$syncUp",!0);Lt(us,"$syncDown",!0);Lt(us,"$paused",!1);Lt(us,"$onSet",e=>Lv.push(e));Lt(us,"$onPatch",e=>Rv.push(e));Lt(us,"$patch",async()=>!1);const{init:Nv,onPatch:Fv,patch:Id,state:Co}=Ad(us,{},!0),jv="modulepreload",Hv=function(e){return"/math201/slides/python01/"+e},Oc={},In=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Hv(o),o in Oc)return;Oc[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const d=r[f];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":jv,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var Tc;const pn=typeof window<"u",Dv=e=>typeof e<"u",Vv=Object.prototype.toString,xr=e=>typeof e=="function",Uv=e=>typeof e=="number",Md=e=>typeof e=="string",ol=e=>Vv.call(e)==="[object Object]",il=()=>+Date.now(),Ps=()=>{},qv=pn&&((Tc=window==null?void 0:window.navigator)==null?void 0:Tc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ht(e){return typeof e=="function"?e():x(e)}function Bv(e,t){function n(...s){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(o)})}return n}const Ld=e=>e();function zv(e=Ld){const t=W(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:ln(t),pause:n,resume:s,eventFilter:r}}function Wv(e){return e}function Kv(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+r}function Yv(e,t){let n,s,r;const o=W(!0),i=()=>{o.value=!0,r()};me(e,i,{flush:"sync"});const a=xr(t)?t:t.get,c=xr(t)?void 0:t.set,u=Of((f,d)=>(s=f,r=d,{get(){return o.value&&(n=a(),o.value=!1),s(),n},set(p){c==null||c(p)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function hn(e){return Dl()?(df(e),!0):!1}function Gv(e){if(!Ce(e))return Ue(e);const t=new Proxy({},{get(n,s,r){return x(Reflect.get(e.value,s,r))},set(n,s,r){return Ce(e.value[s])&&!Ce(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ue(t)}function Rd(e){return typeof e=="function"?O(e):W(e)}var Xv=Object.defineProperty,Zv=Object.defineProperties,Qv=Object.getOwnPropertyDescriptors,Cc=Object.getOwnPropertySymbols,Jv=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,Ac=(e,t,n)=>t in e?Xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ty=(e,t)=>{for(var n in t||(t={}))Jv.call(t,n)&&Ac(e,n,t[n]);if(Cc)for(var n of Cc(t))ey.call(t,n)&&Ac(e,n,t[n]);return e},ny=(e,t)=>Zv(e,Qv(t));function sy(e){if(!Ce(e))return _m(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Of(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=ny(ty({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function ca(e,t=!0){Mt()?Ns(e):t?e():et(e)}function ry(e){Mt()&&Jl(e)}function oy(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let o=null;const i=W(!1);function a(){o&&(clearInterval(o),o=null)}function c(){i.value=!1,a()}function u(){const f=ht(t);f<=0||(i.value=!0,r&&e(),a(),o=setInterval(e,f))}if(s&&pn&&u(),Ce(t)||xr(t)){const f=me(t,()=>{i.value&&pn&&u()});hn(f)}return hn(c),{isActive:i,pause:c,resume:u}}function Nd(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=Ce(e),o=W(e);function i(a){if(arguments.length)return o.value=a,o.value;{const c=ht(n);return o.value=o.value===c?ht(s):c,o.value}}return r?i:[o,i]}var Ic=Object.getOwnPropertySymbols,iy=Object.prototype.hasOwnProperty,ly=Object.prototype.propertyIsEnumerable,ay=(e,t)=>{var n={};for(var s in e)iy.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Ic)for(var s of Ic(e))t.indexOf(s)<0&&ly.call(e,s)&&(n[s]=e[s]);return n};function cy(e,t,n={}){const s=n,{eventFilter:r=Ld}=s,o=ay(s,["eventFilter"]);return me(e,Bv(r,t),o)}var uy=Object.defineProperty,fy=Object.defineProperties,dy=Object.getOwnPropertyDescriptors,Ao=Object.getOwnPropertySymbols,Fd=Object.prototype.hasOwnProperty,jd=Object.prototype.propertyIsEnumerable,Mc=(e,t,n)=>t in e?uy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,py=(e,t)=>{for(var n in t||(t={}))Fd.call(t,n)&&Mc(e,n,t[n]);if(Ao)for(var n of Ao(t))jd.call(t,n)&&Mc(e,n,t[n]);return e},hy=(e,t)=>fy(e,dy(t)),my=(e,t)=>{var n={};for(var s in e)Fd.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Ao)for(var s of Ao(e))t.indexOf(s)<0&&jd.call(e,s)&&(n[s]=e[s]);return n};function gy(e,t,n={}){const s=n,{eventFilter:r}=s,o=my(s,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=zv(r);return{stop:cy(e,t,hy(py({},o),{eventFilter:i})),pause:a,resume:c,isActive:u}}function St(e){var t;const n=ht(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=pn?window:void 0,Hd=pn?window.document:void 0;function ve(...e){let t,n,s,r;if(Md(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=Qe):[t,n,s,r]=e,!t)return Ps;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],i=()=>{o.forEach(f=>f()),o.length=0},a=(f,d,p,h)=>(f.addEventListener(d,p,h),()=>f.removeEventListener(d,p,h)),c=me(()=>[St(t),ht(r)],([f,d])=>{i(),f&&o.push(...n.flatMap(p=>s.map(h=>a(f,p,h,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return hn(u),u}let Lc=!1;function _y(e,t,n={}){const{window:s=Qe,ignore:r=[],capture:o=!0,detectIframe:i=!1}=n;if(!s)return;qv&&!Lc&&(Lc=!0,Array.from(s.document.body.children).forEach(p=>p.addEventListener("click",Ps)));let a=!0;const c=p=>r.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(m=>m===p.target||p.composedPath().includes(m));{const m=St(h);return m&&(p.target===m||p.composedPath().includes(m))}}),f=[ve(s,"click",p=>{const h=St(e);if(!(!h||h===p.target||p.composedPath().includes(h))){if(p.detail===0&&(a=!c(p)),!a){a=!0;return}t(p)}},{passive:!0,capture:o}),ve(s,"pointerdown",p=>{const h=St(e);h&&(a=!p.composedPath().includes(h)&&!c(p))},{passive:!0}),i&&ve(s,"blur",p=>{var h;const m=St(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(s.document.activeElement))&&t(p)})].filter(Boolean);return()=>f.forEach(p=>p())}const vy=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function yy(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=Qe,eventName:o="keydown",passive:i=!1}=s,a=vy(t);return ve(r,o,u=>{a(u)&&n(u)},i)}function by(e={}){var t;const{window:n=Qe}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=Yv(()=>null,()=>s==null?void 0:s.activeElement);return n&&(ve(n,"blur",o=>{o.relatedTarget===null&&r.trigger()},!0),ve(n,"focus",r.trigger,!0)),r}function ei(e,t=!1){const n=W(),s=()=>n.value=Boolean(e());return s(),ca(s,t),n}function bs(e,t={}){const{window:n=Qe}=t,s=ei(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=W(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},a=()=>{s.value&&(i(),r=n.matchMedia(Rd(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",a):r.addListener(a))};return Rs(a),hn(()=>i()),o}const wy={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xy=Object.defineProperty,Rc=Object.getOwnPropertySymbols,$y=Object.prototype.hasOwnProperty,Sy=Object.prototype.propertyIsEnumerable,Nc=(e,t,n)=>t in e?xy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ky=(e,t)=>{for(var n in t||(t={}))$y.call(t,n)&&Nc(e,n,t[n]);if(Rc)for(var n of Rc(t))Sy.call(t,n)&&Nc(e,n,t[n]);return e};function Ey(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=Kv(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=Qe}=t;function r(a){return s?s.matchMedia(a).matches:!1}const o=a=>bs(`(min-width: ${n(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>o(c),enumerable:!0,configurable:!0}),a),{});return ky({greater(a){return bs(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:o,smaller(a){return bs(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return bs(`(max-width: ${n(a)})`,t)},between(a,c){return bs(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${n(a)})`)},isSmaller(a){return r(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${n(a)})`)},isInBetween(a,c){return r(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},i)}function Py(e){return JSON.parse(JSON.stringify(e))}const ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},al="__vueuse_ssr_handlers__";ll[al]=ll[al]||{};const Oy=ll[al];function Ty(e,t){return Oy[e]||t}function Cy(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ay=Object.defineProperty,Fc=Object.getOwnPropertySymbols,Iy=Object.prototype.hasOwnProperty,My=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?Ay(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hc=(e,t)=>{for(var n in t||(t={}))Iy.call(t,n)&&jc(e,n,t[n]);if(Fc)for(var n of Fc(t))My.call(t,n)&&jc(e,n,t[n]);return e};const Ly={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Dc="vueuse-storage";function Ry(e,t,n,s={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:f,window:d=Qe,eventFilter:p,onError:h=A=>{console.error(A)}}=s,m=(f?Gt:W)(t);if(!n)try{n=Ty("getDefaultStorage",()=>{var A;return(A=Qe)==null?void 0:A.localStorage})()}catch(A){h(A)}if(!n)return m;const _=ht(t),y=Cy(_),$=(r=s.serializer)!=null?r:Ly[y],{pause:b,resume:w}=gy(m,()=>S(m.value),{flush:o,deep:i,eventFilter:p});return d&&a&&(ve(d,"storage",q),ve(d,Dc,M)),q(),m;function S(A){try{if(A==null)n.removeItem(e);else{const V=$.write(A),Q=n.getItem(e);Q!==V&&(n.setItem(e,V),d&&d.dispatchEvent(new CustomEvent(Dc,{detail:{key:e,oldValue:Q,newValue:V,storageArea:n}})))}}catch(V){h(V)}}function T(A){const V=A?A.newValue:n.getItem(e);if(V==null)return c&&_!==null&&n.setItem(e,$.write(_)),_;if(!A&&u){const Q=$.read(V);return xr(u)?u(Q,_):y==="object"&&!Array.isArray(Q)?Hc(Hc({},_),Q):Q}else return typeof V!="string"?V:$.read(V)}function M(A){q(A.detail)}function q(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){m.value=_;return}if(!(A&&A.key!==e)){b();try{m.value=T(A)}catch(V){h(V)}finally{A?et(w):w()}}}}}function Ny(e){return bs("(prefers-color-scheme: dark)",e)}var Fy=Object.defineProperty,jy=Object.defineProperties,Hy=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,Dy=Object.prototype.hasOwnProperty,Vy=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?Fy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uy=(e,t)=>{for(var n in t||(t={}))Dy.call(t,n)&&Uc(e,n,t[n]);if(Vc)for(var n of Vc(t))Vy.call(t,n)&&Uc(e,n,t[n]);return e},qy=(e,t)=>jy(e,Hy(t));function EA(e,t={}){var n,s,r;const o=(n=t.draggingElement)!=null?n:Qe,i=(s=t.handle)!=null?s:e,a=W((r=ht(t.initialValue))!=null?r:{x:0,y:0}),c=W(),u=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,f=m=>{ht(t.preventDefault)&&m.preventDefault(),ht(t.stopPropagation)&&m.stopPropagation()},d=m=>{var _;if(!u(m)||ht(t.exact)&&m.target!==ht(e))return;const y=ht(e).getBoundingClientRect(),$={x:m.clientX-y.left,y:m.clientY-y.top};((_=t.onStart)==null?void 0:_.call(t,$,m))!==!1&&(c.value=$,f(m))},p=m=>{var _;u(m)&&c.value&&(a.value={x:m.clientX-c.value.x,y:m.clientY-c.value.y},(_=t.onMove)==null||_.call(t,a.value,m),f(m))},h=m=>{var _;u(m)&&c.value&&(c.value=void 0,(_=t.onEnd)==null||_.call(t,a.value,m),f(m))};return pn&&(ve(i,"pointerdown",d,!0),ve(o,"pointermove",p,!0),ve(o,"pointerup",h,!0)),qy(Uy({},sy(a)),{position:a,isDragging:O(()=>!!c.value),style:O(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var qc=Object.getOwnPropertySymbols,By=Object.prototype.hasOwnProperty,zy=Object.prototype.propertyIsEnumerable,Wy=(e,t)=>{var n={};for(var s in e)By.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&qc)for(var s of qc(e))t.indexOf(s)<0&&zy.call(e,s)&&(n[s]=e[s]);return n};function Ky(e,t,n={}){const s=n,{window:r=Qe}=s,o=Wy(s,["window"]);let i;const a=ei(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=me(()=>St(e),d=>{c(),a.value&&r&&d&&(i=new ResizeObserver(t),i.observe(d,o))},{immediate:!0,flush:"post"}),f=()=>{c(),u()};return hn(f),{isSupported:a,stop:f}}function Yy(e,t={}){const{immediate:n=!0,window:s=Qe}=t,r=W(!1);let o=0,i=null;function a(f){if(!r.value||!s)return;const d=f-o;e({delta:d,timestamp:f}),o=f,i=s.requestAnimationFrame(a)}function c(){!r.value&&s&&(r.value=!0,i=s.requestAnimationFrame(a))}function u(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&c(),hn(u),{isActive:ln(r),pause:u,resume:c}}function Gy(e,t={width:0,height:0},n={}){const{window:s=Qe,box:r="content-box"}=n,o=O(()=>{var c,u;return(u=(c=St(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=W(t.width),a=W(t.height);return Ky(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&o.value){const f=St(e);if(f){const d=s.getComputedStyle(f);i.value=parseFloat(d.width),a.value=parseFloat(d.height)}}else if(u){const f=Array.isArray(u)?u:[u];i.value=f.reduce((d,{inlineSize:p})=>d+p,0),a.value=f.reduce((d,{blockSize:p})=>d+p,0)}else i.value=c.contentRect.width,a.value=c.contentRect.height},n),me(()=>St(e),c=>{i.value=c?t.width:0,a.value=c?t.height:0}),{width:i,height:a}}const Bc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Xy(e,t={}){const{document:n=Hd,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=W(!1);let i=Bc[0];const a=ei(()=>{if(n){for(const _ of Bc)if(_[1]in n)return i=_,!0}else return!1;return!1}),[c,u,f,,d]=i;async function p(){a.value&&(n!=null&&n[f]&&await n[u](),o.value=!1)}async function h(){if(!a.value)return;await p();const _=St(r);_&&(await _[c](),o.value=!0)}async function m(){o.value?await p():await h()}return n&&ve(n,d,()=>{o.value=!!(n!=null&&n[f])},!1),s&&hn(p),{isSupported:a,isFullscreen:o,enter:h,exit:p,toggle:m}}function Zy(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:o=.1,window:i=Qe}=n,a=ei(()=>i&&"IntersectionObserver"in i);let c=Ps;const u=a.value?me(()=>({el:St(e),root:St(s)}),({el:d,root:p})=>{if(c(),!d)return;const h=new IntersectionObserver(t,{root:p,rootMargin:r,threshold:o});h.observe(d),c=()=>{h.disconnect(),c=Ps}},{immediate:!0,flush:"post"}):Ps,f=()=>{c(),u()};return hn(f),{isSupported:a,stop:f}}function Vt(e,t,n={}){const{window:s=Qe}=n;return Ry(e,t,s==null?void 0:s.localStorage,n)}const Qy={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Jy(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:s=Qy,passive:r=!0,onEventFired:o=Ps}=e,i=Ue(new Set),a={toJSON(){return{}},current:i},c=t?Ue(a):a,u=new Set,f=new Set;function d(_,y){_ in c&&(t?c[_]=y:c[_].value=y)}function p(){i.clear();for(const _ of f)d(_,!1)}function h(_,y){var $,b;const w=($=_.key)==null?void 0:$.toLowerCase(),T=[(b=_.code)==null?void 0:b.toLowerCase(),w].filter(Boolean);w&&(y?i.add(w):i.delete(w));for(const M of T)f.add(M),d(M,y);w==="meta"&&!y?(u.forEach(M=>{i.delete(M),d(M,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&y&&[...i,...T].forEach(M=>u.add(M))}ve(n,"keydown",_=>(h(_,!0),o(_)),{passive:r}),ve(n,"keyup",_=>(h(_,!1),o(_)),{passive:r}),ve("blur",p,{passive:!0}),ve("focus",p,{passive:!0});const m=new Proxy(c,{get(_,y,$){if(typeof y!="string")return Reflect.get(_,y,$);if(y=y.toLowerCase(),y in s&&(y=s[y]),!(y in c))if(/[+_-]/.test(y)){const w=y.split(/[+_-]/g).map(S=>S.trim());c[y]=O(()=>w.every(S=>x(m[S])))}else c[y]=W(!1);const b=Reflect.get(_,y,$);return t?x(b):b}});return m}function PA(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:o=Qe,eventFilter:i}=e,a=W(r.x),c=W(r.y),u=W(null),f=_=>{t==="page"?(a.value=_.pageX,c.value=_.pageY):t==="client"?(a.value=_.clientX,c.value=_.clientY):t==="movement"&&(a.value=_.movementX,c.value=_.movementY),u.value="mouse"},d=()=>{a.value=r.x,c.value=r.y},p=_=>{if(_.touches.length>0){const y=_.touches[0];t==="page"?(a.value=y.pageX,c.value=y.pageY):t==="client"&&(a.value=y.clientX,c.value=y.clientY),u.value="touch"}},h=_=>i===void 0?f(_):i(()=>f(_),{}),m=_=>i===void 0?p(_):i(()=>p(_),{});return o&&(ve(o,"mousemove",h,{passive:!0}),ve(o,"dragover",h,{passive:!0}),n&&t!=="movement"&&(ve(o,"touchstart",m,{passive:!0}),ve(o,"touchmove",m,{passive:!0}),s&&ve(o,"touchend",d,{passive:!0}))),{x:a,y:c,sourceType:u}}var on;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(on||(on={}));function e0(e,t={}){const n=Rd(e),{threshold:s=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:i}=t,a=Ue({x:0,y:0}),c=(M,q)=>{a.x=M,a.y=q},u=Ue({x:0,y:0}),f=(M,q)=>{u.x=M,u.y=q},d=O(()=>a.x-u.x),p=O(()=>a.y-u.y),{max:h,abs:m}=Math,_=O(()=>h(m(d.value),m(p.value))>=s),y=W(!1),$=W(!1),b=O(()=>_.value?m(d.value)>m(p.value)?d.value>0?on.LEFT:on.RIGHT:p.value>0?on.UP:on.DOWN:on.NONE),w=M=>{var q,A,V;const Q=M.buttons===0,ae=M.buttons===1;return(V=(A=(q=t.pointerTypes)==null?void 0:q.includes(M.pointerType))!=null?A:Q||ae)!=null?V:!0},S=[ve(e,"pointerdown",M=>{var q,A;if(!w(M))return;$.value=!0,(A=(q=n.value)==null?void 0:q.style)==null||A.setProperty("touch-action","none");const V=M.target;V==null||V.setPointerCapture(M.pointerId);const{clientX:Q,clientY:ae}=M;c(Q,ae),f(Q,ae),i==null||i(M)}),ve(e,"pointermove",M=>{if(!w(M)||!$.value)return;const{clientX:q,clientY:A}=M;f(q,A),!y.value&&_.value&&(y.value=!0),y.value&&(r==null||r(M))}),ve(e,"pointerup",M=>{var q,A;w(M)&&(y.value&&(o==null||o(M,b.value)),$.value=!1,y.value=!1,(A=(q=n.value)==null?void 0:q.style)==null||A.setProperty("touch-action","initial"))})],T=()=>S.forEach(M=>M());return{isSwiping:ln(y),direction:ln(b),posStart:ln(a),posEnd:ln(u),distanceX:d,distanceY:p,stop:T}}let t0=0;function OA(e,t={}){const n=W(!1),{document:s=Hd,immediate:r=!0,manual:o=!1,id:i=`vueuse_styletag_${++t0}`}=t,a=W(e);let c=()=>{};const u=()=>{if(!s)return;const d=s.getElementById(i)||s.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),s.head.appendChild(d)),!n.value&&(c=me(a,p=>{d.textContent=p},{immediate:!0}),n.value=!0)},f=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(i)),n.value=!1)};return r&&!o&&ca(u),o||hn(f),{id:i,css:a,unload:f,load:u,isLoaded:ln(n)}}var n0=Object.defineProperty,zc=Object.getOwnPropertySymbols,s0=Object.prototype.hasOwnProperty,r0=Object.prototype.propertyIsEnumerable,Wc=(e,t,n)=>t in e?n0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o0=(e,t)=>{for(var n in t||(t={}))s0.call(t,n)&&Wc(e,n,t[n]);if(zc)for(var n of zc(t))r0.call(t,n)&&Wc(e,n,t[n]);return e};function TA(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:o}=e,i=W(il()+n),a=()=>i.value=il()+n,c=o?()=>{a(),o(i.value)}:a,u=r==="requestAnimationFrame"?Yy(c,{immediate:s}):oy(c,r,{immediate:s});return t?o0({timestamp:i},u):i}var i0=Object.defineProperty,Kc=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,a0=Object.prototype.propertyIsEnumerable,Yc=(e,t,n)=>t in e?i0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c0=(e,t)=>{for(var n in t||(t={}))l0.call(t,n)&&Yc(e,n,t[n]);if(Kc)for(var n of Kc(t))a0.call(t,n)&&Yc(e,n,t[n]);return e};const u0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};c0({linear:Wv},u0);function Wt(e,t,n,s={}){var r,o,i;const{clone:a=!1,passive:c=!1,eventName:u,deep:f=!1,defaultValue:d}=s,p=Mt(),h=n||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((i=(o=p==null?void 0:p.proxy)==null?void 0:o.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let m=u;t||(t="modelValue"),m=u||m||`update:${t.toString()}`;const _=$=>a?xr(a)?a($):Py($):$,y=()=>Dv(e[t])?_(e[t]):d;if(c){const $=y(),b=W($);return me(()=>e[t],w=>b.value=_(w)),me(b,w=>{(w!==e[t]||f)&&h(m,w)},{deep:f}),b}else return O({get(){return y()},set($){h(m,$)}})}function CA({window:e=Qe}={}){if(!e)return W(!1);const t=W(e.document.hasFocus());return ve(e,"blur",()=>{t.value=!1}),ve(e,"focus",()=>{t.value=!0}),t}function f0(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:o=!0}=e,i=W(n),a=W(s),c=()=>{t&&(o?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return c(),ca(c),ve("resize",c,{passive:!0}),r&&ve("orientationchange",c,{passive:!0}),{width:i,height:a}}function d0(){return Dd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Dd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const p0=typeof Proxy=="function",h0="devtools-plugin:setup",m0="plugin:settings:set";let ps,cl;function g0(){var e;return ps!==void 0||(typeof window<"u"&&window.performance?(ps=!0,cl=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ps=!0,cl=global.perf_hooks.performance):ps=!1),ps}function _0(){return g0()?cl.now():Date.now()}class v0{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const i in t.settings){const a=t.settings[i];s[i]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},s);try{const i=localStorage.getItem(r),a=JSON.parse(i);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}o=i},now(){return _0()}},n&&n.on(m0,(i,a)=>{i===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(i,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function y0(e,t){const n=e,s=Dd(),r=d0(),o=p0&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))r.emit(h0,e,t);else{const i=o?new v0(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const sn=typeof window<"u";function b0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Me=Object.assign;function xi(e,t){const n={};for(const s in t){const r=t[s];n[s]=Et(r)?r.map(e):e(r)}return n}const or=()=>{},Et=Array.isArray;function Oe(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const w0=/\/$/,x0=e=>e.replace(w0,"");function $i(e,t,n="/"){let s,r={},o="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),r=e(o)),a>-1&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=k0(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function $0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Gc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Xc(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Fn(t.matched[s],n.matched[r])&&Vd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S0(e[n],t[n]))return!1;return!0}function S0(e,t){return Et(e)?Zc(e,t):Et(t)?Zc(t,e):e===t}function Zc(e,t){return Et(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function k0(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Oe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var $r;(function(e){e.pop="pop",e.push="push"})($r||($r={}));var ir;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ir||(ir={}));function E0(e){if(!e)if(sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),x0(e)}const P0=/^[^#]+#/;function O0(e,t){return e.replace(P0,"#")+t}function T0(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ti=()=>({left:window.pageXOffset,top:window.pageYOffset});function C0(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const o=document.querySelector(e.el);if(s&&o){Oe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Oe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Oe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=T0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Qc(e,t){return(history.state?history.state.position-t:-1)+e}const ul=new Map;function A0(e,t){ul.set(e,t)}function I0(e){const t=ul.get(e);return ul.delete(e),t}let M0=()=>location.protocol+"//"+location.host;function Ud(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let a=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Gc(c,"")}return Gc(n,e)+s+r}function L0(e,t,n,s){let r=[],o=[],i=null;const a=({state:p})=>{const h=Ud(e,location),m=n.value,_=t.value;let y=0;if(p){if(n.value=h,t.value=p,i&&i===m){i=null;return}y=_?p.position-_.position:0}else s(h);r.forEach($=>{$(n.value,m,{delta:y,type:$r.pop,direction:y?y>0?ir.forward:ir.back:ir.unknown})})};function c(){i=n.value}function u(p){r.push(p);const h=()=>{const m=r.indexOf(p);m>-1&&r.splice(m,1)};return o.push(h),h}function f(){const{history:p}=window;p.state&&p.replaceState(Me({},p.state,{scroll:ti()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:u,destroy:d}}function Jc(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?ti():null}}function R0(e){const{history:t,location:n}=window,s={value:Ud(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:M0()+e+c;try{t[f?"replaceState":"pushState"](u,"",p),r.value=u}catch(h){Oe("Error with push/replace State",h),n[f?"replace":"assign"](p)}}function i(c,u){const f=Me({},t.state,Jc(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});o(c,f,!0),s.value=c}function a(c,u){const f=Me({},r.value,t.state,{forward:c,scroll:ti()});t.state||Oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(f.current,f,!0);const d=Me({},Jc(s.value,c,null),{position:f.position+1},u);o(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:i}}function N0(e){e=E0(e);const t=R0(e),n=L0(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Me({location:"",base:e,go:s,createHref:O0.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function F0(e){return typeof e=="string"||e&&typeof e=="object"}function qd(e){return typeof e=="string"||typeof e=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bd=Symbol("navigation failure");var eu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(eu||(eu={}));const j0={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${D0(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Is(e,t){return Me(new Error(j0[e](t)),{type:e,[Bd]:!0},t)}function Qt(e,t){return e instanceof Error&&Bd in e&&(t==null||!!(e.type&t))}const H0=["params","query","hash"];function D0(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of H0)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const tu="[^/]+?",V0={sensitive:!1,strict:!1,start:!0,end:!0},U0=/[.+*?^${}()[\]/\\]/g;function q0(e,t){const n=Me({},V0,t),s=[];let r=n.start?"^":"";const o=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let h=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(U0,"\\$&"),h+=40;else if(p.type===1){const{value:m,repeatable:_,optional:y,regexp:$}=p;o.push({name:m,repeatable:_,optional:y});const b=$||tu;if(b!==tu){h+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+S.message)}}let w=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=y&&u.length<2?`(?:/${w})`:"/"+w),y&&(w+="?"),r+=w,h+=20,y&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}f.push(h)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(u){const f=u.match(i),d={};if(!f)return null;for(let p=1;p<f.length;p++){const h=f[p]||"",m=o[p-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function c(u){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const h of p)if(h.type===0)f+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:y}=h,$=m in u?u[m]:"";if(Et($)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=Et($)?$.join("/"):$;if(!b)if(y)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);f+=b}}return f||"/"}return{re:i,score:s,keys:o,parse:a,stringify:c}}function B0(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function z0(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=B0(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(nu(s))return 1;if(nu(r))return-1}return r.length-s.length}function nu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const W0={type:0,value:""},K0=/[a-zA-Z0-9_]/;function Y0(e){if(!e)return[[]];if(e==="/")return[[W0]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let a=0,c,u="",f="";function d(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),i()):c===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:K0.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),r}function G0(e,t,n){const s=q0(Y0(e.path),n);{const o=new Set;for(const i of s.keys)o.has(i.name)&&Oe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),o.add(i.name)}const r=Me(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function X0(e,t){const n=[],s=new Map;t=ou({strict:!1,end:!0,sensitive:!1},t);function r(f){return s.get(f)}function o(f,d,p){const h=!p,m=Z0(f);t1(m,d),m.aliasOf=p&&p.record;const _=ou(t,f),y=[m];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of w)y.push(Me({},m,{components:p?p.record.components:m.components,path:S,aliasOf:p?p.record:m}))}let $,b;for(const w of y){const{path:S}=w;if(d&&S[0]!=="/"){const T=d.record.path,M=T[T.length-1]==="/"?"":"/";w.path=d.record.path+(S&&M+S)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if($=G0(w,d,_),d&&S[0]==="/"&&n1($,d),p?(p.alias.push($),e1(p,$)):(b=b||$,b!==$&&b.alias.push($),h&&f.name&&!ru($)&&i(f.name)),m.children){const T=m.children;for(let M=0;M<T.length;M++)o(T[M],$,p&&p.children[M])}p=p||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&c($)}return b?()=>{i(b)}:or}function i(f){if(qd(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function c(f){let d=0;for(;d<n.length&&z0(f,n[d])>=0&&(f.record.path!==n[d].record.path||!zd(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!ru(f)&&s.set(f.record.name,f)}function u(f,d){let p,h={},m,_;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw Is(1,{location:f});{const b=Object.keys(f.params||{}).filter(w=>!p.keys.find(S=>S.name===w));b.length&&Oe(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=p.record.name,h=Me(su(d.params,p.keys.filter(b=>!b.optional).map(b=>b.name)),f.params&&su(f.params,p.keys.map(b=>b.name))),m=p.stringify(h)}else if("path"in f)m=f.path,m.startsWith("/")||Oe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),p=n.find(b=>b.re.test(m)),p&&(h=p.parse(m),_=p.record.name);else{if(p=d.name?s.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw Is(1,{location:f,currentLocation:d});_=p.record.name,h=Me({},d.params,f.params),m=p.stringify(h)}const y=[];let $=p;for(;$;)y.unshift($.record),$=$.parent;return{name:_,path:m,params:h,matched:y,meta:J0(y)}}return e.forEach(f=>o(f)),{addRoute:o,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function su(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Z0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Q0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Q0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function ru(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function J0(e){return e.reduce((t,n)=>Me(t,n.meta),{})}function ou(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function fl(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function e1(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(fl.bind(null,n)))return Oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(fl.bind(null,n)))return Oe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function t1(e,t){t&&t.record.name&&!e.name&&!e.path&&Oe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function n1(e,t){for(const n of t.keys)if(!e.keys.find(fl.bind(null,n)))return Oe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function zd(e,t){return t.children.some(n=>n===e||zd(e,n))}const Wd=/#/g,s1=/&/g,r1=/\//g,o1=/=/g,i1=/\?/g,Kd=/\+/g,l1=/%5B/g,a1=/%5D/g,Yd=/%5E/g,c1=/%60/g,Gd=/%7B/g,u1=/%7C/g,Xd=/%7D/g,f1=/%20/g;function ua(e){return encodeURI(""+e).replace(u1,"|").replace(l1,"[").replace(a1,"]")}function d1(e){return ua(e).replace(Gd,"{").replace(Xd,"}").replace(Yd,"^")}function dl(e){return ua(e).replace(Kd,"%2B").replace(f1,"+").replace(Wd,"%23").replace(s1,"%26").replace(c1,"`").replace(Gd,"{").replace(Xd,"}").replace(Yd,"^")}function p1(e){return dl(e).replace(o1,"%3D")}function h1(e){return ua(e).replace(Wd,"%23").replace(i1,"%3F")}function m1(e){return e==null?"":h1(e).replace(r1,"%2F")}function Sr(e){try{return decodeURIComponent(""+e)}catch{Oe(`Error decoding "${e}". Using original value`)}return""+e}function g1(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Kd," "),i=o.indexOf("="),a=Sr(i<0?o:o.slice(0,i)),c=i<0?null:Sr(o.slice(i+1));if(a in t){let u=t[a];Et(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function iu(e){let t="";for(let n in e){const s=e[n];if(n=p1(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(s)?s.map(o=>o&&dl(o)):[s&&dl(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function _1(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Et(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const v1=Symbol("router view location matched"),lu=Symbol("router view depth"),fa=Symbol("router"),Zd=Symbol("route location"),pl=Symbol("router view location");function zs(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $n(e,t,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=d=>{d===!1?a(Is(4,{from:n,to:t})):d instanceof Error?a(d):F0(d)?a(Is(2,{from:t,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),i())},u=e.call(s&&s.instances[r],t,n,y1(c,t,n));let f=Promise.resolve(u);if(e.length<3&&(f=f.then(c)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)f=f.then(p=>c._called?p:(Oe(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Oe(d),a(new Error("Invalid navigation guard"));return}}f.catch(d=>a(d))})}function y1(e,t,n){let s=0;return function(){s++===1&&Oe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Si(e,t,n,s){const r=[];for(const o of e){!o.components&&!o.children.length&&Oe(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const i in o.components){let a=o.components[i];{if(!a||typeof a!="object"&&typeof a!="function")throw Oe(`Component "${i}" in record with path "${o.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Oe(`Component "${i}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Oe(`Component "${i}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(b1(a)){const u=(a.__vccOpts||a)[t];u&&r.push($n(u,n,s,o,i))}else{let c=a();"catch"in c||(Oe(`Component "${i}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const f=b0(u)?u.default:u;o.components[i]=f;const p=(f.__vccOpts||f)[t];return p&&$n(p,n,s,o,i)()}))}}}return r}function b1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function au(e){const t=D(fa),n=D(Zd),s=O(()=>t.resolve(x(e.to))),r=O(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Fn.bind(null,f));if(p>-1)return p;const h=cu(c[u-2]);return u>1&&cu(f)===h&&d[d.length-1].path!==h?d.findIndex(Fn.bind(null,c[u-2])):p}),o=O(()=>r.value>-1&&S1(n.params,s.value.params)),i=O(()=>r.value>-1&&r.value===n.matched.length-1&&Vd(n.params,s.value.params));function a(c={}){return $1(c)?t[x(e.replace)?"replace":"push"](x(e.to)).catch(or):Promise.resolve()}if(sn){const c=Mt();if(c){const u={route:s.value,isActive:o.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Rs(()=>{u.route=s.value,u.isActive=o.value,u.isExactActive=i.value},{flush:"post"})}}return{route:s,href:O(()=>s.value.href),isActive:o,isExactActive:i,navigate:a}}const w1=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:au,setup(e,{slots:t}){const n=Ue(au(e)),{options:s}=D(fa),r=O(()=>({[uu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[uu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:ut("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),x1=w1;function $1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function S1(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Et(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function cu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uu=(e,t,n)=>e??t??n,k1=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){P1();const s=D(pl),r=O(()=>e.route||s.value),o=D(lu,0),i=O(()=>{let u=x(o);const{matched:f}=r.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),a=O(()=>r.value.matched[i.value]);$t(lu,O(()=>i.value+1)),$t(v1,a),$t(pl,r);const c=W();return me(()=>[c.value,a.value,e.name],([u,f,d],[p,h,m])=>{f&&(f.instances[d]=u,h&&h!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),u&&f&&(!h||!Fn(f,h)||!p)&&(f.enterCallbacks[d]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,f=e.name,d=a.value,p=d&&d.components[f];if(!p)return fu(n.default,{Component:p,route:u});const h=d.props[f],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,y=ut(p,Me({},m,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[f]=null)},ref:c}));if(sn&&y.ref){const $={depth:i.value,name:d.name,path:d.path,meta:d.meta};(Et(y.ref)?y.ref.map(w=>w.i):[y.ref.i]).forEach(w=>{w.__vrv_devtools=$})}return fu(n.default,{Component:y,route:u})||y}}});function fu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const E1=k1;function P1(){const e=Mt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ws(e,t){const n=Me({},e,{matched:e.matched.map(s=>N1(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function eo(e){return{_custom:{display:e}}}let O1=0;function T1(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=O1++;y0({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((f,d)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ws(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:f,componentInstance:d})=>{if(d.__vrv_devtools){const p=d.__vrv_devtools;f.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Qd})}Et(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(p=>{let h=tp,m="";p.isExactActive?(h=ep,m="This is exactly active"):p.isActive&&(h=Jd,m="This link is active"),f.tags.push({label:p.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),me(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const o="router:navigations:"+s;r.addTimelineLayer({id:o,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((f,d)=>{r.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:f},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((f,d)=>{const p={guard:eo("beforeEach"),from:Ws(d,"Current Location during this navigation"),to:Ws(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:o,event:{time:r.now(),title:"Start of navigation",subtitle:f.fullPath,data:p,groupId:f.meta.__navigationId}})}),t.afterEach((f,d,p)=>{const h={guard:eo("afterEach")};p?(h.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},h.status=eo("❌")):h.status=eo("✅"),h.from=Ws(d,"Current Location during this navigation"),h.to=Ws(f,"Target location"),r.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:f.fullPath,time:r.now(),data:h,logType:p?"warning":"default",groupId:f.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const f=u;let d=n.getRoutes().filter(p=>!p.parent);d.forEach(rp),f.filter&&(d=d.filter(p=>hl(p,f.filter.toLowerCase()))),d.forEach(p=>sp(p,t.currentRoute.value)),f.rootNodes=d.map(np)}let u;r.on.getInspectorTree(f=>{u=f,f.app===e&&f.inspectorId===a&&c()}),r.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===a){const p=n.getRoutes().find(h=>h.record.__vd_id===f.nodeId);p&&(f.state={options:A1(p)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function C1(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function A1(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${C1(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Qd=15485081,Jd=2450411,ep=8702998,I1=2282478,tp=16486972,M1=6710886;function np(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:I1}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:tp}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Qd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:ep}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Jd}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:M1});let s=n.__vd_id;return s==null&&(s=String(L1++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(np)}}let L1=0;const R1=/^\/(.*)\/([a-z]*)$/;function sp(e,t){const n=t.matched.length&&Fn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Fn(s,e.record))),e.children.forEach(s=>sp(s,t))}function rp(e){e.__vd_match=!1,e.children.forEach(rp)}function hl(e,t){const n=String(e.re).match(R1);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>hl(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),o=Sr(r);return!t.startsWith("/")&&(o.includes(t)||r.includes(t))||o.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>hl(i,t))}function N1(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function F1(e){const t=X0(e.routes,e),n=e.parseQuery||g1,s=e.stringifyQuery||iu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=zs(),i=zs(),a=zs(),c=Gt(yn);let u=yn;sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=xi.bind(null,P=>""+P),d=xi.bind(null,m1),p=xi.bind(null,Sr);function h(P,Y){let H,ee;return qd(P)?(H=t.getRecordMatcher(P),ee=Y):ee=P,t.addRoute(ee,H)}function m(P){const Y=t.getRecordMatcher(P);Y?t.removeRoute(Y):Oe(`Cannot remove non-existent route "${String(P)}"`)}function _(){return t.getRoutes().map(P=>P.record)}function y(P){return!!t.getRecordMatcher(P)}function $(P,Y){if(Y=Me({},Y||c.value),typeof P=="string"){const ce=$i(n,P,Y.path),g=t.resolve({path:ce.path},Y),v=r.createHref(ce.fullPath);return v.startsWith("//")?Oe(`Location "${P}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):g.matched.length||Oe(`No match found for location with path "${P}"`),Me(ce,g,{params:p(g.params),hash:Sr(ce.hash),redirectedFrom:void 0,href:v})}let H;if("path"in P)"params"in P&&!("name"in P)&&Object.keys(P.params).length&&Oe(`Path "${P.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),H=Me({},P,{path:$i(n,P.path,Y.path).path});else{const ce=Me({},P.params);for(const g in ce)ce[g]==null&&delete ce[g];H=Me({},P,{params:d(P.params)}),Y.params=d(Y.params)}const ee=t.resolve(H,Y),xe=P.hash||"";xe&&!xe.startsWith("#")&&Oe(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),ee.params=f(p(ee.params));const Ee=$0(s,Me({},P,{hash:d1(xe),path:ee.path})),de=r.createHref(Ee);return de.startsWith("//")?Oe(`Location "${P}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):ee.matched.length||Oe(`No match found for location with path "${"path"in P?P.path:P}"`),Me({fullPath:Ee,hash:xe,query:s===iu?_1(P.query):P.query||{}},ee,{redirectedFrom:void 0,href:de})}function b(P){return typeof P=="string"?$i(n,P,c.value.path):Me({},P)}function w(P,Y){if(u!==P)return Is(8,{from:Y,to:P})}function S(P){return q(P)}function T(P){return S(Me(b(P),{replace:!0}))}function M(P){const Y=P.matched[P.matched.length-1];if(Y&&Y.redirect){const{redirect:H}=Y;let ee=typeof H=="function"?H(P):H;if(typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=b(ee):{path:ee},ee.params={}),!("path"in ee)&&!("name"in ee))throw Oe(`Invalid redirect found:
${JSON.stringify(ee,null,2)}
 when navigating to "${P.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Me({query:P.query,hash:P.hash,params:"path"in ee?{}:P.params},ee)}}function q(P,Y){const H=u=$(P),ee=c.value,xe=P.state,Ee=P.force,de=P.replace===!0,ce=M(H);if(ce)return q(Me(b(ce),{state:typeof ce=="object"?Me({},xe,ce.state):xe,force:Ee,replace:de}),Y||H);const g=H;g.redirectedFrom=Y;let v;return!Ee&&Xc(s,ee,H)&&(v=Is(16,{to:g,from:ee}),Re(ee,ee,!0,!1)),(v?Promise.resolve(v):V(g,ee)).catch(k=>Qt(k)?Qt(k,2)?k:_e(k):K(k,g,ee)).then(k=>{if(k){if(Qt(k,2))return Xc(s,$(k.to),g)&&Y&&(Y._count=Y._count?Y._count+1:1)>10?(Oe(`Detected an infinite redirection in a navigation guard when going from "${ee.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):q(Me({replace:de},b(k.to),{state:typeof k.to=="object"?Me({},xe,k.to.state):xe,force:Ee}),Y||g)}else k=ae(g,ee,!0,de,xe);return Q(g,ee,k),k})}function A(P,Y){const H=w(P,Y);return H?Promise.reject(H):Promise.resolve()}function V(P,Y){let H;const[ee,xe,Ee]=j1(P,Y);H=Si(ee.reverse(),"beforeRouteLeave",P,Y);for(const ce of ee)ce.leaveGuards.forEach(g=>{H.push($n(g,P,Y))});const de=A.bind(null,P,Y);return H.push(de),hs(H).then(()=>{H=[];for(const ce of o.list())H.push($n(ce,P,Y));return H.push(de),hs(H)}).then(()=>{H=Si(xe,"beforeRouteUpdate",P,Y);for(const ce of xe)ce.updateGuards.forEach(g=>{H.push($n(g,P,Y))});return H.push(de),hs(H)}).then(()=>{H=[];for(const ce of P.matched)if(ce.beforeEnter&&!Y.matched.includes(ce))if(Et(ce.beforeEnter))for(const g of ce.beforeEnter)H.push($n(g,P,Y));else H.push($n(ce.beforeEnter,P,Y));return H.push(de),hs(H)}).then(()=>(P.matched.forEach(ce=>ce.enterCallbacks={}),H=Si(Ee,"beforeRouteEnter",P,Y),H.push(de),hs(H))).then(()=>{H=[];for(const ce of i.list())H.push($n(ce,P,Y));return H.push(de),hs(H)}).catch(ce=>Qt(ce,8)?ce:Promise.reject(ce))}function Q(P,Y,H){for(const ee of a.list())ee(P,Y,H)}function ae(P,Y,H,ee,xe){const Ee=w(P,Y);if(Ee)return Ee;const de=Y===yn,ce=sn?history.state:{};H&&(ee||de?r.replace(P.fullPath,Me({scroll:de&&ce&&ce.scroll},xe)):r.push(P.fullPath,xe)),c.value=P,Re(P,Y,H,de),_e()}let B;function be(){B||(B=r.listen((P,Y,H)=>{if(!gn.listening)return;const ee=$(P),xe=M(ee);if(xe){q(Me(xe,{replace:!0}),ee).catch(or);return}u=ee;const Ee=c.value;sn&&A0(Qc(Ee.fullPath,H.delta),ti()),V(ee,Ee).catch(de=>Qt(de,12)?de:Qt(de,2)?(q(de.to,ee).then(ce=>{Qt(ce,20)&&!H.delta&&H.type===$r.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(H.delta&&r.go(-H.delta,!1),K(de,ee,Ee))).then(de=>{de=de||ae(ee,Ee,!1),de&&(H.delta&&!Qt(de,8)?r.go(-H.delta,!1):H.type===$r.pop&&Qt(de,20)&&r.go(-1,!1)),Q(ee,Ee,de)}).catch(or)}))}let Ae=zs(),Pe=zs(),je;function K(P,Y,H){_e(P);const ee=Pe.list();return ee.length?ee.forEach(xe=>xe(P,Y,H)):(Oe("uncaught error during route navigation:"),console.error(P)),Promise.reject(P)}function le(){return je&&c.value!==yn?Promise.resolve():new Promise((P,Y)=>{Ae.add([P,Y])})}function _e(P){return je||(je=!P,be(),Ae.list().forEach(([Y,H])=>P?H(P):Y()),Ae.reset()),P}function Re(P,Y,H,ee){const{scrollBehavior:xe}=e;if(!sn||!xe)return Promise.resolve();const Ee=!H&&I0(Qc(P.fullPath,0))||(ee||!H)&&history.state&&history.state.scroll||null;return et().then(()=>xe(P,Y,Ee)).then(de=>de&&C0(de)).catch(de=>K(de,P,Y))}const yt=P=>r.go(P);let tt;const dt=new Set,gn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:y,getRoutes:_,resolve:$,options:e,push:S,replace:T,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:Pe.add,isReady:le,install(P){const Y=this;P.component("RouterLink",x1),P.component("RouterView",E1),P.config.globalProperties.$router=Y,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>x(c)}),sn&&!tt&&c.value===yn&&(tt=!0,S(r.location).catch(xe=>{Oe("Unexpected error when starting the router:",xe)}));const H={};for(const xe in yn)H[xe]=O(()=>c.value[xe]);P.provide(fa,Y),P.provide(Zd,Ue(H)),P.provide(pl,c);const ee=P.unmount;dt.add(P),P.unmount=function(){dt.delete(P),dt.size<1&&(u=yn,B&&B(),B=null,c.value=yn,tt=!1,je=!1),ee()},sn&&T1(P,Y,t)}};return gn}function hs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function j1(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(u=>Fn(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>Fn(u,c))||r.push(c))}return[n,s,r]}const ki=W(!1),lr=W(!1),xs=W(!1),H1=W(!0),ml=Ey({xs:460,...wy}),rs=f0(),op=Jy(),D1=O(()=>rs.height.value-rs.width.value/Cn>180),ip=Xy(pn?document.body:null),Os=by(),V1=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Os.value)==null?void 0:e.tagName)||"")||((t=Os.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),U1=O(()=>{var e;return["BUTTON","A"].includes(((e=Os.value)==null?void 0:e.tagName)||"")});Vt("slidev-camera","default");Vt("slidev-mic","default");const fo=Vt("slidev-scale",0),it=Vt("slidev-show-overview",!1),Ei=Vt("slidev-presenter-cursor",!0),du=Vt("slidev-show-editor",!1);Vt("slidev-editor-width",pn?window.innerWidth*.4:100);const lp=Nd(it);function pu(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function q1(e){return[-e[0],-e[1]]}function Ft(e,t){return[e[0]+t[0],e[1]+t[1]]}function Tt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Nt(e,t){return[e[0]*t,e[1]*t]}function B1(e,t){return[e[0]/t,e[1]/t]}function Ks(e){return[e[1],-e[0]]}function hu(e,t){return e[0]*t[0]+e[1]*t[1]}function z1(e,t){return e[0]===t[0]&&e[1]===t[1]}function W1(e){return Math.hypot(e[0],e[1])}function K1(e){return e[0]*e[0]+e[1]*e[1]}function mu(e,t){return K1(Tt(e,t))}function ap(e){return B1(e,W1(e))}function Y1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ys(e,t,n){let s=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],i=e[1]-t[1],a=o*r-i*s,c=o*s+i*r;return[a+t[0],c+t[1]]}function gl(e,t,n){return Ft(e,Nt(Tt(t,e),n))}function gu(e,t,n){return Ft(e,Nt(t,n))}var{min:ms,PI:G1}=Math,_u=.275,Gs=G1+1e-4;function X1(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:o=!0,easing:i=K=>K,start:a={},end:c={},last:u=!1}=t,{cap:f=!0,easing:d=K=>K*(2-K)}=a,{cap:p=!0,easing:h=K=>--K*K*K+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,_=a.taper===!1?0:a.taper===!0?Math.max(n,m):a.taper,y=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,$=Math.pow(n*s,2),b=[],w=[],S=e.slice(0,10).reduce((K,le)=>{let _e=le.pressure;if(o){let Re=ms(1,le.distance/n),yt=ms(1,1-Re);_e=ms(1,K+(yt-K)*(Re*_u))}return(K+_e)/2},e[0].pressure),T=pu(n,r,e[e.length-1].pressure,i),M,q=e[0].vector,A=e[0].point,V=A,Q=A,ae=V,B=!1;for(let K=0;K<e.length;K++){let{pressure:le}=e[K],{point:_e,vector:Re,distance:yt,runningLength:tt}=e[K];if(K<e.length-1&&m-tt<3)continue;if(r){if(o){let Ee=ms(1,yt/n),de=ms(1,1-Ee);le=ms(1,S+(de-S)*(Ee*_u))}T=pu(n,r,le,i)}else T=n/2;M===void 0&&(M=T);let dt=tt<_?d(tt/_):1,gn=m-tt<y?h((m-tt)/y):1;T=Math.max(.01,T*Math.min(dt,gn));let P=(K<e.length-1?e[K+1]:e[K]).vector,Y=K<e.length-1?hu(Re,P):1,H=hu(Re,q)<0&&!B,ee=Y!==null&&Y<0;if(H||ee){let Ee=Nt(Ks(q),T);for(let de=1/13,ce=0;ce<=1;ce+=de)Q=Ys(Tt(_e,Ee),_e,Gs*ce),b.push(Q),ae=Ys(Ft(_e,Ee),_e,Gs*-ce),w.push(ae);A=Q,V=ae,ee&&(B=!0);continue}if(B=!1,K===e.length-1){let Ee=Nt(Ks(Re),T);b.push(Tt(_e,Ee)),w.push(Ft(_e,Ee));continue}let xe=Nt(Ks(gl(P,Re,Y)),T);Q=Tt(_e,xe),(K<=1||mu(A,Q)>$)&&(b.push(Q),A=Q),ae=Ft(_e,xe),(K<=1||mu(V,ae)>$)&&(w.push(ae),V=ae),S=le,q=Re}let be=e[0].point.slice(0,2),Ae=e.length>1?e[e.length-1].point.slice(0,2):Ft(e[0].point,[1,1]),Pe=[],je=[];if(e.length===1){if(!(_||y)||u){let K=gu(be,ap(Ks(Tt(be,Ae))),-(M||T)),le=[];for(let _e=1/13,Re=_e;Re<=1;Re+=_e)le.push(Ys(K,be,Gs*2*Re));return le}}else{if(!(_||y&&e.length===1))if(f)for(let le=1/13,_e=le;_e<=1;_e+=le){let Re=Ys(w[0],be,Gs*_e);Pe.push(Re)}else{let le=Tt(b[0],w[0]),_e=Nt(le,.5),Re=Nt(le,.51);Pe.push(Tt(be,_e),Tt(be,Re),Ft(be,Re),Ft(be,_e))}let K=Ks(q1(e[e.length-1].vector));if(y||_&&e.length===1)je.push(Ae);else if(p){let le=gu(Ae,K,T);for(let _e=1/29,Re=_e;Re<1;Re+=_e)je.push(Ys(le,Ae,Gs*3*Re))}else je.push(Ft(Ae,Nt(K,T)),Ft(Ae,Nt(K,T*.99)),Tt(Ae,Nt(K,T*.99)),Tt(Ae,Nt(K,T)))}return b.concat(je,w.reverse(),Pe)}function Z1(e,t={}){var n;let{streamline:s=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(gl(a[0],h,m/4))}a.length===1&&(a=[...a,[...Ft(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,f=0,d=c[0],p=a.length-1;for(let h=1;h<a.length;h++){let m=o&&h===p?a[h].slice(0,2):gl(d.point,a[h],i);if(z1(d.point,m))continue;let _=Y1(m,d.point);if(f+=_,h<p&&!u){if(f<r)continue;u=!0}d={point:m,pressure:a[h][2]>=0?a[h][2]:.5,vector:ap(Tt(d.point,m)),distance:_,runningLength:f},c.push(d)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Q1(e,t={}){return X1(Z1(e,t),t)}var J1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function Io(e,t){return e-t}function eb(e){return e<0?-1:1}function Mo(e){return[Math.abs(e),eb(e)]}function cp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var tb=2,rn=tb,Fs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const o=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*s,y:o.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(rn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},nb=class extends Fs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Q1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,o],i,a)=>{const[c,u]=a[(i+1)%a.length];return s.push(r,o,(r+c)/2,(o+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},sb=class extends Fs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mo(e.x-this.start.x),[s,r]=Mo(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(Io),[a,c]=[this.start.y,this.start.y+s*r].sort(Io);this.attr("cx",(o+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-o)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function up(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var rb=class extends Fs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=cp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(up(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=s/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},ob=class extends Fs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mo(e.x-this.start.x),[s,r]=Mo(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(Io),[a,c]=[this.start.y,this.start.y+s*r].sort(Io);this.attr("x",o),this.attr("y",a),this.attr("width",i-o),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function ib(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function lb(e,t,n){let s=t.x,r=t.y,o=n.x-s,i=n.y-r;if(o!==0||i!==0){const a=((e.x-s)*o+(e.y-r)*i)/(o*o+i*i);a>1?(s=n.x,r=n.y):a>0&&(s+=o*a,r+=i*a)}return o=e.x-s,i=e.y-r,o*o+i*i}function ab(e,t){let n=e[0];const s=[n];let r;for(let o=1,i=e.length;o<i;o++)r=e[o],ib(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function _l(e,t,n,s,r){let o=s,i=0;for(let a=t+1;a<n;a++){const c=lb(e[a],e[t],e[n]);c>o&&(i=a,o=c)}o>s&&(i-t>1&&_l(e,t,i,s,r),r.push(e[i]),n-i>1&&_l(e,i,n,s,r))}function cb(e,t){const n=e.length-1,s=[e[0]];return _l(e,0,n,t,s),s.push(e[n]),s}function vu(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:ab(e,s),e=cb(e,s),e}var ub=class extends Fs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=cp();const t=up(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=vu(this.points,1,!0),this.count=0),this.attr("d",bu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",bu(vu(this.points,1,!0))),!e.getTotalLength()))}};function fb(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function yu(e,t,n,s){const r=t||e,o=n||e,i=.2,a=fb(r,o),c=a.angle+(s?Math.PI:0),u=a.length*i,f=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:f,y:d}}function db(e,t,n){const s=yu(n[t-1],n[t-2],e),r=yu(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(rn)},${s.y.toFixed(rn)} ${r.x.toFixed(rn)},${r.y.toFixed(rn)} ${e.x.toFixed(rn)},${e.y.toFixed(rn)}`}function bu(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(rn)},${n.y.toFixed(rn)}`:`${t} ${db(n,s,r)}`,"")}var pb=class extends Fs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const i=o.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=o.getPointAtLength(i*a/this.pathSubFactor),u=o.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,o=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,f=(n-s)*(c-u)-(i-a)*(r-o),d=(n*a-i*s)*(r-o)-(n-s)*(r*u-c*o),p=(n*a-i*s)*(c-u)-(i-a)*(r*u-c*o),h=(m,_,y)=>m>=_&&m<=y?!0:m>=y&&m<=_;if(f===0)return!1;{const m={x:d/f,y:p/f};return h(m.x,n,s)&&h(m.y,i,a)&&h(m.x,r,o)&&h(m.y,c,u)}}};function hb(e){return{draw:new ub(e),stylus:new nb(e),line:new rb(e),rectangle:new ob(e),ellipse:new sb(e),eraseLine:new pb(e)}}var mb=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=J1(),this._models=hb(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function gb(e){return new mb(e)}const vl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Kt=Vt("slidev-drawing-enabled",!1),AA=Vt("slidev-drawing-pinned",!1),_b=W(!1),vb=W(!1),yb=W(!1),kr=W(!1),Xn=Gv(Vt("slidev-drawing-brush",{color:vl[0],size:4,mode:"stylus"})),wu=W("stylus"),fp=O(()=>Te.drawings.syncAll||mt.value);let Er=!1;const Xs=O({get(){return wu.value},set(e){wu.value=e,e==="arrow"?(Xn.mode="line",Xn.arrowEnd=!0):(Xn.mode=e,Xn.arrowEnd=!1)}}),bb=Ue({brush:Xn,acceptsInputTypes:O(()=>Kt.value&&(!Te.drawings.presenterOnly||mt.value)?void 0:["pen"]),coordinateTransform:!1}),ft=qo(gb(bb));function wb(){ft.clear(),fp.value&&Id(ze.value,"")}function da(){var e;vb.value=ft.canRedo(),_b.value=ft.canUndo(),yb.value=!!((e=ft.el)!=null&&e.children.length)}function xb(e){Er=!0;const t=Co[e||ze.value];t!=null?ft.load(t):ft.clear(),da(),Er=!1}ft.on("changed",()=>{if(da(),!Er){const e=ft.dump(),t=ze.value;(Co[t]||"")!==e&&fp.value&&Id(t,ft.dump())}});Fv(e=>{Er=!0,e[ze.value]!=null&&ft.load(e[ze.value]||""),Er=!1,da()});et(()=>{me(ze,()=>{ft.mounted&&xb()},{immediate:!0})});ft.on("start",()=>kr.value=!0);ft.on("end",()=>kr.value=!1);window.addEventListener("keydown",e=>{if(!Kt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ft.redo():ft.undo():e.code==="Escape"?Kt.value=!1:e.code==="KeyL"&&t?Xs.value="line":e.code==="KeyA"&&t?Xs.value="arrow":e.code==="KeyS"&&t?Xs.value="stylus":e.code==="KeyR"&&t?Xs.value="rectangle":e.code==="KeyE"&&t?Xs.value="ellipse":e.code==="KeyC"&&t?wb():e.code.startsWith("Digit")&&t&&+e.code[5]<=vl.length?Xn.color=vl[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ge(...e){return O(()=>e.every(t=>ht(t)))}function wt(e){return O(()=>!ht(e))}const xu=Ny(),Pi=Vt("slidev-color-schema","auto"),yl=O(()=>Te.colorSchema!=="auto"),pa=O({get(){return yl.value?Te.colorSchema==="dark":Pi.value==="auto"?xu.value:Pi.value==="dark"},set(e){yl.value||(Pi.value=e===xu.value?"auto":e?"dark":"light")}}),dp=Nd(pa);pn&&me(pa,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const po=W(1),ho=O(()=>Ye.length-1),kt=W(0),ha=W(0);function $b(){kt.value>po.value&&(kt.value-=1)}function Sb(){kt.value<ho.value&&(kt.value+=1)}function kb(){if(kt.value>po.value){let e=kt.value-ha.value;e<po.value&&(e=po.value),kt.value=e}}function Eb(){if(kt.value<ho.value){let e=kt.value+ha.value;e>ho.value&&(e=ho.value),kt.value=e}}function Pb(){const{escape:e,space:t,shift:n,left:s,right:r,up:o,down:i,enter:a,d:c,g:u,o:f}=op;let d=[{name:"next_space",key:Ge(t,wt(n)),fn:Mn,autoRepeat:!0},{name:"prev_space",key:Ge(t,n),fn:Ln,autoRepeat:!0},{name:"next_right",key:Ge(r,wt(n),wt(it)),fn:Mn,autoRepeat:!0},{name:"prev_left",key:Ge(s,wt(n),wt(it)),fn:Ln,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Mn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ln,autoRepeat:!0},{name:"next_down",key:Ge(i,wt(it)),fn:Tr,autoRepeat:!0},{name:"prev_up",key:Ge(o,wt(it)),fn:()=>Cr(!1),autoRepeat:!0},{name:"next_shift",key:Ge(r,n),fn:Tr,autoRepeat:!0},{name:"prev_shift",key:Ge(s,n),fn:()=>Cr(!1),autoRepeat:!0},{name:"toggle_dark",key:Ge(c,wt(Kt)),fn:dp},{name:"toggle_overview",key:Ge(f,wt(Kt)),fn:lp},{name:"hide_overview",key:Ge(e,wt(Kt)),fn:()=>it.value=!1},{name:"goto",key:Ge(u,wt(Kt)),fn:()=>xs.value=!xs.value},{name:"next_overview",key:Ge(r,it),fn:Sb},{name:"prev_overview",key:Ge(s,it),fn:$b},{name:"up_overview",key:Ge(o,it),fn:kb},{name:"down_overview",key:Ge(i,it),fn:Eb},{name:"goto_from_overview",key:Ge(a,it),fn:()=>{Ls(kt.value),it.value=!1}}];const p=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&p.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const pp=Ge(wt(V1),wt(U1),H1);function Ob(e,t,n=!1){typeof e=="string"&&(e=op[e]);const s=Ge(e,pp);let r=0,o;const i=()=>{if(clearTimeout(o),!s.value){r=0;return}n&&(o=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return me(s,i,{flush:"sync"})}function Tb(e,t){return yy(e,n=>{pp.value&&(n.repeat||t())})}function Cb(){const e=Pb();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&Ob(n.key,n.fn,n.autoRepeat)}),Tb("f",()=>ip.toggle())}const Ab={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ib=l("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Mb=[Ib];function Lb(e,t){return E(),G("svg",Ab,Mb)}const Rb={name:"carbon-close",render:Lb};function ma(e,t=""){var r,o;const n=["slidev-page",t],s=(o=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:o.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const Nb=ye({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;D(Z);const n=W(),s=Gy(n),r=O(()=>t.width?t.width:s.width.value),o=O(()=>t.width?t.width/Cn:s.height.value);t.width&&Rs(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const i=O(()=>r.value/o.value),a=O(()=>t.scale&&!Ms.value?t.scale:i.value<Cn?r.value/An:o.value*Cn/An),c=O(()=>({height:`${la}px`,width:`${An}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=O(()=>({"select-none":!Te.selectable,"slidev-code-line-numbers":Te.lineNumbers}));return $t(Cd,a),(f,d)=>(E(),G("div",{id:"slide-container",ref_key:"root",ref:n,class:We(x(u))},[l("div",{id:"slide-content",style:ct(x(c))},[Xt(f.$slots,"default")],4),Xt(f.$slots,"controls")],2))}});const J=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},hp=J(Nb,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/SlideContainer.vue"]]),ga=ye({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Wt(e,"clicks",t),s=Wt(e,"clicksElements",t),r=Wt(e,"clicksDisabled",t),o=Wt(e,"clicksOrderMap",t);s.value.length=0,$t(xv,e.route),$t($v,e.context),$t(co,n),$t(uo,r),$t(ys,s),$t(rl,o)},render(){var e,t;return this.$props.is?ut(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Fb=["innerHTML"],jb=ye({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return D(Z),(t,n)=>x(Co)[e.page]?(E(),G("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Co)[e.page]},null,8,Fb)):ge("v-if",!0)}}),mp=J(jb,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Hb=Object.freeze(Object.defineProperty({__proto__:null,default:mp},Symbol.toStringTag,{value:"Module"})),Db={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Vb=["onClick"],Ub=ye({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;D(Z);const s=Wt(n,"modelValue",t);function r(){s.value=!1}function o(h){Ls(h),r()}function i(h){return h===kt.value}const a=ml.smaller("xs"),c=ml.smaller("sm"),u=4*16*2,f=2*16,d=O(()=>a.value?rs.width.value-u:c.value?(rs.width.value-u-f)/2:300),p=O(()=>Math.floor((rs.width.value-u)/(d.value+f)));return Rs(()=>{kt.value=ze.value,ha.value=p.value}),(h,m)=>{const _=Rb;return E(),G(Ie,null,[Xo(l("div",Db,[l("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ct(`grid-template-columns: repeat(auto-fit,minmax(${x(d)}px,1fr))`)},[(E(!0),G(Ie,null,Hr(x(Ye).slice(0,-1),(y,$)=>(E(),G("div",{key:y.path,class:"relative"},[l("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i($+1),"border-gray-400":!i($+1)}]),style:ct(x(aa)),onClick:b=>o(+y.path)},[(E(),X(hp,{key:y.path,width:x(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:te(()=>[z(x(ga),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:We(x(ma)(y)),route:y,context:"overview"},null,8,["is","class","route"]),z(mp,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,Vb),l("div",{class:"absolute top-0 opacity-50",style:ct(`left: ${x(d)+5}px`)},cn($+1),5)]))),128))],4)],512),[[xd,x(s)]]),x(s)?(E(),G("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[z(_)])):ge("v-if",!0)],64)}}});const qb=J(Ub,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Bb="/math201/slides/python01/assets/logo-b72bde5d.png",zb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Wb=ye({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;D(Z);const s=Wt(n,"modelValue",t);function r(){s.value=!1}return(o,i)=>(E(),X(Wf,null,[x(s)?(E(),G("div",zb,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>r())}),l("div",{class:We(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Xt(o.$slots,"default")],2)])):ge("v-if",!0)],1024))}}),Kb=J(Wb,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Modal.vue"]]),Yb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Gb=["innerHTML"],Xb=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:Bb,alt:"Slidev"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),ne("dev ")])])],-1),Zb=ye({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;D(Z);const s=Wt(n,"modelValue",t),r=O(()=>typeof Te.info=="string");return(o,i)=>(E(),X(Kb,{modelValue:x(s),"onUpdate:modelValue":i[0]||(i[0]=a=>Ce(s)?s.value=a:null),class:"px-6 py-4"},{default:te(()=>[l("div",Yb,[x(r)?(E(),G("div",{key:0,class:"mb-4",innerHTML:x(Te).info},null,8,Gb)):ge("v-if",!0),Xb])]),_:1},8,["modelValue"]))}});const Qb=J(Zb,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/InfoDialog.vue"]]),Jb=["disabled","onKeydown"],ew=ye({__name:"Goto",setup(e){D(Z);const t=W(),n=W(""),s=O(()=>{if(n.value.startsWith("/"))return!!Ye.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Tp.value}});function r(){s.value&&(n.value.startsWith("/")?Ls(n.value.substring(1)):Ls(+n.value)),o()}function o(){xs.value=!1}return me(xs,async i=>{var a,c;i?(await et(),n.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),me(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,a)=>(E(),G("div",{id:"slidev-goto-dialog",class:We(["fixed right-5 bg-main transform transition-all",x(xs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Xo(l("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"text",disabled:!x(xs),class:We(["outline-none bg-transparent",{"text-red-400":!x(s)&&n.value}]),placeholder:"Goto...",onKeydown:[wc(r,["enter"]),wc(o,["escape"])],onBlur:o},null,42,Jb),[[A_,n.value]])],2))}}),tw=J(ew,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Goto.vue"]]),nw=ye({__name:"Controls",setup(e){D(Z);const t=Gt(),n=Gt();return(s,r)=>(E(),G(Ie,null,[z(qb,{modelValue:x(it),"onUpdate:modelValue":r[0]||(r[0]=o=>Ce(it)?it.value=o:null)},null,8,["modelValue"]),z(tw),x(t)?(E(),X(x(t),{key:0})):ge("v-if",!0),x(n)?(E(),X(x(n),{key:1,modelValue:x(ki),"onUpdate:modelValue":r[1]||(r[1]=o=>Ce(ki)?ki.value=o:null)},null,8,["modelValue"])):ge("v-if",!0),x(Te).info?(E(),X(Qb,{key:2,modelValue:x(lr),"onUpdate:modelValue":r[2]||(r[2]=o=>Ce(lr)?lr.value=o:null)},null,8,["modelValue"])):ge("v-if",!0)],64))}}),sw=J(nw,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Controls.vue"]]),rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ow=l("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),iw=[ow];function lw(e,t){return E(),G("svg",rw,iw)}const aw={name:"carbon-settings-adjust",render:lw},cw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uw=l("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),fw=l("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),dw=[uw,fw];function pw(e,t){return E(),G("svg",cw,dw)}const hw={name:"carbon-information",render:pw},mw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gw=l("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),_w=[gw];function vw(e,t){return E(),G("svg",mw,_w)}const yw={name:"carbon-download",render:vw},bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ww=l("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),xw=l("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),$w=[ww,xw];function Sw(e,t){return E(),G("svg",bw,$w)}const kw={name:"carbon-user-speaker",render:Sw},Ew={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pw=l("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ow=l("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Tw=[Pw,Ow];function Cw(e,t){return E(),G("svg",Ew,Tw)}const Aw={name:"carbon-presentation-file",render:Cw},Iw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mw=l("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Lw=[Mw];function Rw(e,t){return E(),G("svg",Iw,Lw)}const Nw={name:"carbon-pen",render:Rw},Fw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jw=l("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Hw=l("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Dw=[jw,Hw];function Vw(e,t){return E(),G("svg",Fw,Dw)}const Uw={name:"ph-cursor-duotone",render:Vw},qw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Bw=l("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),zw=[Bw];function Ww(e,t){return E(),G("svg",qw,zw)}const gp={name:"ph-cursor-fill",render:Ww},Kw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yw=l("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Gw=[Yw];function Xw(e,t){return E(),G("svg",Kw,Gw)}const Zw={name:"carbon-sun",render:Xw},Qw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jw=l("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),ex=[Jw];function tx(e,t){return E(),G("svg",Qw,ex)}const nx={name:"carbon-moon",render:tx},sx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rx=l("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),ox=[rx];function ix(e,t){return E(),G("svg",sx,ox)}const lx={name:"carbon-apps",render:ix},ax={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cx=l("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),ux=[cx];function fx(e,t){return E(),G("svg",ax,ux)}const dx={name:"carbon-arrow-right",render:fx},px={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hx=l("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),mx=[hx];function gx(e,t){return E(),G("svg",px,mx)}const _x={name:"carbon-arrow-left",render:gx},vx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yx=l("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),bx=[yx];function wx(e,t){return E(),G("svg",vx,bx)}const xx={name:"carbon-maximize",render:wx},$x={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sx=l("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),kx=[Sx];function Ex(e,t){return E(),G("svg",$x,kx)}const Px={name:"carbon-minimize",render:Ex},Ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tx=l("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Cx=[Tx];function Ax(e,t){return E(),G("svg",Ox,Cx)}const Ix={name:"carbon-checkmark",render:Ax},Mx={class:"select-list"},Lx={class:"title"},Rx={class:"items"},Nx=["onClick"],Fx=ye({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;D(Z);const s=Wt(n,"modelValue",t,{passive:!0});return(r,o)=>{const i=Ix;return E(),G("div",Mx,[l("div",Lx,cn(e.title),1),l("div",Rx,[(E(!0),G(Ie,null,Hr(e.items,a=>(E(),G("div",{key:a.value,class:We(["item",{active:x(s)===a.value}]),onClick:()=>{var c;s.value=a.value,(c=a.onClick)==null||c.call(a)}},[z(i,{class:We(["text-green-500",{"opacity-0":x(s)!==a.value}])},null,8,["class"]),ne(" "+cn(a.display||a.value),1)],10,Nx))),128))])])}}});const jx=J(Fx,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/SelectList.vue"]]),Hx={class:"text-sm"},Dx=ye({__name:"Settings",setup(e){D(Z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(E(),G("div",Hx,[z(jx,{modelValue:x(fo),"onUpdate:modelValue":s[0]||(s[0]=r=>Ce(fo)?fo.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Vx=J(Dx,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Settings.vue"]]),Ux={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},qx=ye({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;D(Z);const s=Wt(n,"modelValue",t,{passive:!0}),r=W();return _y(r,()=>{s.value=!1}),(o,i)=>(E(),G("div",{ref_key:"el",ref:r,class:"flex relative"},[l("button",{class:We({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>s.value=!x(s))},[Xt(o.$slots,"button",{class:We({disabled:e.disabled})})],2),(E(),X(Wf,null,[x(s)?(E(),G("div",Ux,[Xt(o.$slots,"menu")])):ge("v-if",!0)],1024))],512))}}),Bx=J(qx,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/MenuButton.vue"]]),zx={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Wx={__name:"VerticalDivider",setup(e){return D(Z),(t,n)=>(E(),G("div",zx))}},to=J(Wx,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Kx={render(){return[]}},Yx={class:"slidev-icon-btn"},Gx={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Xx={class:"my-auto"},Zx={class:"opacity-50"},Qx=ye({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;D(Z);const n=ml.smaller("md"),{isFullscreen:s,toggle:r}=ip,o=O(()=>wl.value?`?password=${wl.value}`:""),i=O(()=>`/presenter/${ze.value}${o.value}`),a=O(()=>`/${ze.value}${o.value}`),c=W(),u=()=>{c.value&&Os.value&&c.value.contains(Os.value)&&Os.value.blur()},f=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Gt(),p=Gt();return In(()=>import("./DrawingControls-42c34434.js"),[]).then(h=>p.value=h.default),(h,m)=>{const _=Px,y=xx,$=_x,b=dx,w=lx,S=nx,T=Zw,M=gp,q=Uw,A=Nw,V=Aw,Q=ko("RouterLink"),ae=kw,B=yw,be=hw,Ae=aw;return E(),G("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[l("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(f)]),onMouseleave:u},[x(nn)?ge("v-if",!0):(E(),G("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...Pe)=>x(r)&&x(r)(...Pe))},[x(s)?(E(),X(_,{key:0})):(E(),X(y,{key:1}))])),l("button",{class:We(["slidev-icon-btn",{disabled:!x(KO)}]),onClick:m[1]||(m[1]=(...Pe)=>x(Ln)&&x(Ln)(...Pe))},[z($)],2),l("button",{class:We(["slidev-icon-btn",{disabled:!x(WO)}]),title:"Next",onClick:m[2]||(m[2]=(...Pe)=>x(Mn)&&x(Mn)(...Pe))},[z(b)],2),x(nn)?ge("v-if",!0):(E(),G("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Pe=>x(lp)())},[z(w)])),x(yl)?ge("v-if",!0):(E(),G("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Pe=>x(dp)())},[x(pa)?(E(),X(S,{key:0})):(E(),X(T,{key:1}))])),z(to),x(nn)?ge("v-if",!0):(E(),G(Ie,{key:3},[!x(mt)&&!x(n)&&x(d)?(E(),G(Ie,{key:0},[z(x(d)),z(to)],64)):ge("v-if",!0),x(mt)?(E(),G("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Pe=>Ei.value=!x(Ei))},[x(Ei)?(E(),X(M,{key:0})):(E(),X(q,{key:1,class:"opacity-50"}))])):ge("v-if",!0)],64)),(!x(Te).drawings.presenterOnly||x(mt))&&!x(nn)?(E(),G(Ie,{key:4},[l("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Pe=>Kt.value=!x(Kt))},[z(A),x(Kt)?(E(),G("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ct({background:x(Xn).color})},null,4)):ge("v-if",!0)]),z(to)],64)):ge("v-if",!0),x(nn)?ge("v-if",!0):(E(),G(Ie,{key:5},[x(mt)?(E(),X(Q,{key:0,to:x(a),class:"slidev-icon-btn",title:"Play Mode"},{default:te(()=>[z(V)]),_:1},8,["to"])):ge("v-if",!0),x(UO)?(E(),X(Q,{key:1,to:x(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:te(()=>[z(ae)]),_:1},8,["to"])):ge("v-if",!0),ge("v-if",!0)],64)),(E(),G(Ie,{key:6},[x(Te).download?(E(),G("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...Pe)=>x(xl)&&x(xl)(...Pe))},[z(B)])):ge("v-if",!0)],64)),!x(mt)&&x(Te).info&&!x(nn)?(E(),G("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=Pe=>lr.value=!x(lr))},[z(be)])):ge("v-if",!0),!x(mt)&&!x(nn)?(E(),X(Bx,{key:8},{button:te(()=>[l("button",Yx,[z(Ae)])]),menu:te(()=>[z(Vx)]),_:1})):ge("v-if",!0),x(nn)?ge("v-if",!0):(E(),X(to,{key:9})),l("div",Gx,[l("div",Xx,[ne(cn(x(ze))+" ",1),l("span",Zx,"/ "+cn(x(Tp)),1)])]),z(x(Kx))],34)],512)}}}),Jx=J(Qx,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/NavControls.vue"]]),_p={render(){return[]}},vp={render(){return[]}},e2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},t2=ye({__name:"PresenterMouse",setup(e){return D(Z),(t,n)=>{const s=gp;return x(wi).cursor?(E(),G("div",e2,[z(s,{class:"absolute",style:ct({left:`${x(wi).cursor.x}%`,top:`${x(wi).cursor.y}%`})},null,8,["style"])])):ge("v-if",!0)}}}),n2=J(t2,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),s2=ye({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){D(Z),me(lt,()=>{var s,r;(s=lt.value)!=null&&s.meta&&lt.value.meta.preload!==!1&&(lt.value.meta.__preloaded=!0),(r=Oi.value)!=null&&r.meta&&Oi.value.meta.preload!==!1&&(Oi.value.meta.__preloaded=!0)},{immediate:!0});const t=Gt();In(()=>import("./DrawingLayer-3206ef81.js"),[]).then(s=>t.value=s.default);const n=O(()=>Ye.filter(s=>{var r;return((r=s.meta)==null?void 0:r.__preloaded)||s===lt.value}));return(s,r)=>(E(),G(Ie,null,[ge(" Global Bottom "),z(x(vp)),ge(" Slides "),z(k_,yr(x(XO),{id:"slideshow",tag:"div"}),{default:te(()=>[(E(!0),G(Ie,null,Hr(x(n),o=>{var i;return Xo((E(),X(x(ga),{key:o.path,is:o==null?void 0:o.component,clicks:o===x(lt)?x(Ct):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:We(x(ma)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[xd,o===x(lt)]])}),128))]),_:1},16),ge(" Global Top "),z(x(_p)),x(t)?(E(),X(x(t),{key:0})):ge("v-if",!0),x(mt)?ge("v-if",!0):(E(),X(n2,{key:1}))],64))}});const r2=J(s2,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/SlidesShow.vue"]]),o2=ye({__name:"PrintStyle",setup(e){D(Z);function t(n,{slots:s}){if(s.default)return ut("style",s.default())}return(n,s)=>(E(),X(t,null,{default:te(()=>[ne(" @page { size: "+cn(x(An))+"px "+cn(x(la))+"px; margin: 0px; } ",1)]),_:1}))}}),yp=J(o2,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/PrintStyle.vue"]]),i2=ye({__name:"Play",setup(e){D(Z),Cb();const t=W();function n(o){var i;du.value||((i=o.target)==null?void 0:i.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?Mn():Ln())}ZO(t);const s=O(()=>D1.value||du.value);Gt();const r=Gt();return In(()=>import("./DrawingControls-42c34434.js"),[]).then(o=>r.value=o.default),(o,i)=>(E(),G(Ie,null,[x(Ms)?(E(),X(yp,{key:0})):ge("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ct(x(aa))},[z(hp,{class:"w-full h-full",style:ct({background:"var(--slidev-slide-container-background, black)"}),width:x(Ms)?x(rs).width.value:void 0,scale:x(fo),onPointerdown:n},{default:te(()=>[z(r2,{context:"slide"})]),controls:te(()=>[l("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(s)?"opacity-100 right-0":"opacity-0 p-2",x(kr)?"pointer-events-none":""]])},[z(Jx,{class:"m-auto",persist:x(s)},null,8,["persist"])],2),!x(Te).drawings.presenterOnly&&!x(nn)&&x(r)?(E(),X(x(r),{key:0,class:"ml-0"})):ge("v-if",!0)]),_:1},8,["style","width","scale"]),ge("v-if",!0)],4),z(sw)],64))}}),l2=J(i2,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function bp(e){return typeof e>"u"||e===null}function a2(e){return typeof e=="object"&&e!==null}function c2(e){return Array.isArray(e)?e:bp(e)?[]:[e]}function u2(e,t){var n,s,r,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)r=o[n],e[r]=t[r];return e}function f2(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function d2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var p2=bp,h2=a2,m2=c2,g2=f2,_2=d2,v2=u2,_a={isNothing:p2,isObject:h2,toArray:m2,repeat:g2,isNegativeZero:_2,extend:v2};function wp(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Pr(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=wp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Pr.prototype=Object.create(Error.prototype);Pr.prototype.constructor=Pr;Pr.prototype.toString=function(t){return this.name+": "+wp(this,t)};var Yn=Pr,y2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],b2=["scalar","sequence","mapping"];function w2(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function x2(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(y2.indexOf(n)===-1)throw new Yn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=w2(t.styleAliases||null),b2.indexOf(this.kind)===-1)throw new Yn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var st=x2;function $u(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(o,i){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(r=i)}),n[r]=s}),n}function $2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function bl(e){return this.extend(e)}bl.prototype.extend=function(t){var n=[],s=[];if(t instanceof st)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new Yn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof st))throw new Yn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Yn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Yn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof st))throw new Yn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(bl.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=$u(r,"implicit"),r.compiledExplicit=$u(r,"explicit"),r.compiledTypeMap=$2(r.compiledImplicit,r.compiledExplicit),r};var S2=bl,k2=new st("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),E2=new st("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),P2=new st("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),O2=new S2({explicit:[k2,E2,P2]});function T2(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function C2(){return null}function A2(e){return e===null}var I2=new st("tag:yaml.org,2002:null",{kind:"scalar",resolve:T2,construct:C2,predicate:A2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function M2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function L2(e){return e==="true"||e==="True"||e==="TRUE"}function R2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var N2=new st("tag:yaml.org,2002:bool",{kind:"scalar",resolve:M2,construct:L2,predicate:R2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function F2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function j2(e){return 48<=e&&e<=55}function H2(e){return 48<=e&&e<=57}function D2(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!F2(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!j2(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!H2(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function V2(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function U2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!_a.isNegativeZero(e)}var q2=new st("tag:yaml.org,2002:int",{kind:"scalar",resolve:D2,construct:V2,predicate:U2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),B2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function z2(e){return!(e===null||!B2.test(e)||e[e.length-1]==="_")}function W2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var K2=/^[-+]?[0-9]+e/;function Y2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(_a.isNegativeZero(e))return"-0.0";return n=e.toString(10),K2.test(n)?n.replace("e",".e"):n}function G2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||_a.isNegativeZero(e))}var X2=new st("tag:yaml.org,2002:float",{kind:"scalar",resolve:z2,construct:W2,predicate:G2,represent:Y2,defaultStyle:"lowercase"}),Z2=O2.extend({implicit:[I2,N2,q2,X2]}),Q2=Z2,xp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),$p=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function J2(e){return e===null?!1:xp.exec(e)!==null||$p.exec(e)!==null}function e$(e){var t,n,s,r,o,i,a,c=0,u=null,f,d,p;if(t=xp.exec(e),t===null&&(t=$p.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(o=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(f=+t[10],d=+(t[11]||0),u=(f*60+d)*6e4,t[9]==="-"&&(u=-u)),p=new Date(Date.UTC(n,s,r,o,i,a,c)),u&&p.setTime(p.getTime()-u),p}function t$(e){return e.toISOString()}var n$=new st("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:J2,construct:e$,instanceOf:Date,represent:t$});function s$(e){return e==="<<"||e===null}var r$=new st("tag:yaml.org,2002:merge",{kind:"scalar",resolve:s$}),va=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function o$(e){if(e===null)return!1;var t,n,s=0,r=e.length,o=va;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function i$(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,o=va,i=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|o.indexOf(s.charAt(t));return n=r%4*6,n===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):n===18?(a.push(i>>10&255),a.push(i>>2&255)):n===12&&a.push(i>>4&255),new Uint8Array(a)}function l$(e){var t="",n=0,s,r,o=e.length,i=va;for(s=0;s<o;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=o%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function a$(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var c$=new st("tag:yaml.org,2002:binary",{kind:"scalar",resolve:o$,construct:i$,predicate:a$,represent:l$}),u$=Object.prototype.hasOwnProperty,f$=Object.prototype.toString;function d$(e){if(e===null)return!0;var t=[],n,s,r,o,i,a=e;for(n=0,s=a.length;n<s;n+=1){if(r=a[n],i=!1,f$.call(r)!=="[object Object]")return!1;for(o in r)if(u$.call(r,o))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function p$(e){return e!==null?e:[]}var h$=new st("tag:yaml.org,2002:omap",{kind:"sequence",resolve:d$,construct:p$}),m$=Object.prototype.toString;function g$(e){if(e===null)return!0;var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],m$.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;o[t]=[r[0],s[r[0]]]}return!0}function _$(e){if(e===null)return[];var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),o[t]=[r[0],s[r[0]]];return o}var v$=new st("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:g$,construct:_$}),y$=Object.prototype.hasOwnProperty;function b$(e){if(e===null)return!0;var t,n=e;for(t in n)if(y$.call(n,t)&&n[t]!==null)return!1;return!0}function w$(e){return e!==null?e:{}}var x$=new st("tag:yaml.org,2002:set",{kind:"mapping",resolve:b$,construct:w$});Q2.extend({implicit:[n$,r$],explicit:[c$,h$,v$,x$]});function Su(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var $$=new Array(256),S$=new Array(256);for(var gs=0;gs<256;gs++)$$[gs]=Su(gs)?1:0,S$[gs]=Su(gs);function k$(e){return Array.from(new Set(e))}function ku(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function E$(e,t){if(!t||t==="all"||t==="*")return ku(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,o]=s.split("-",2);n.push(...ku(+r,o?+o+1:e+1))}return k$(n).filter(s=>s<=e).sort((s,r)=>s-r)}function Sp(e){const t=O(()=>e.value.path),n=O(()=>Ye.length-1),s=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=O(()=>si(s.value)),o=O(()=>Ye.find(p=>p.path===`${s.value}`)),i=O(()=>{var p,h,m;return(m=(h=(p=o.value)==null?void 0:p.meta)==null?void 0:h.slide)==null?void 0:m.id}),a=O(()=>{var p,h;return((h=(p=o.value)==null?void 0:p.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=O(()=>Ye.find(p=>p.path===`${Math.min(Ye.length,s.value+1)}`)),u=O(()=>Ye.filter(p=>{var h,m;return(m=(h=p.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((p,h)=>(ya(p,h),p),[])),f=O(()=>ba(u.value,o.value)),d=O(()=>wa(f.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:o,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:f,tree:d}}function kp(e,t,n){const s=W(0);et(()=>{_t.afterEach(async()=>{await et(),s.value+=1})});const r=O(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),o=O(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=O(()=>n.value<Ye.length-1||e.value<o.value),a=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:i,hasPrev:a}}const P$=["id"],O$=ye({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Wt(n,"clicksElements",t),r=O(()=>({height:`${la}px`,width:`${An}px`})),o=Gt();In(()=>Promise.resolve().then(()=>Hb),void 0).then(u=>o.value=u.default);const i=O(()=>n.clicks),a=kp(i,n.nav.currentRoute,n.nav.currentPage),c=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return $t(Z,Ue({nav:{...n.nav,...a},configs:Te,themeConfigs:O(()=>Te.themeConfig)})),(u,f)=>{var d;return E(),G("div",{id:x(c),class:"print-slide-container",style:ct(x(r))},[z(x(vp)),z(x(ga),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":x(s),"onUpdate:clicksElements":f[0]||(f[0]=p=>Ce(s)?s.value=p:null),clicks:x(i),"clicks-disabled":!1,class:We(x(ma)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),x(o)?(E(),X(x(o),{key:0,page:+e.route.path},null,8,["page"])):ge("v-if",!0),z(x(_p))],12,P$)}}}),Eu=J(O$,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),T$=ye({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var o;const t=e;D(Z);const n=Ue(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=O(()=>t.route),r=Sp(s);return(i,a)=>(E(),G(Ie,null,[z(Eu,{"clicks-elements":n,"onUpdate:clicksElements":a[0]||(a[0]=c=>n=c),clicks:0,nav:x(r),route:x(s)},null,8,["clicks-elements","nav","route"]),x(ar)?ge("v-if",!0):(E(!0),G(Ie,{key:0},Hr(n.length,c=>(E(),X(Eu,{key:c,clicks:c,nav:x(r),route:x(s)},null,8,["clicks","nav","route"]))),128))],64))}}),C$=J(T$,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/PrintSlide.vue"]]),A$={id:"print-content"},I$=ye({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;D(Z);const n=O(()=>t.width),s=O(()=>t.width/Cn),r=O(()=>n.value/s.value),o=O(()=>r.value<Cn?n.value/An:s.value*Cn/An);let i=Ye.slice(0,-1);It.value.query.range&&(i=E$(i.length,It.value.query.range).map(u=>i[u-1]));const a=O(()=>({"select-none":!Te.selectable,"slidev-code-line-numbers":Te.lineNumbers}));return $t(Cd,o),(c,u)=>(E(),G("div",{id:"print-container",class:We(x(a))},[l("div",A$,[(E(!0),G(Ie,null,Hr(x(i),f=>(E(),X(C$,{key:f.path,route:f},null,8,["route"]))),128))]),Xt(c.$slots,"controls")],2))}});const M$=J(I$,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/PrintContainer.vue"]]),L$=ye({__name:"Print",setup(e){return D(Z),Rs(()=>{Ms?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(E(),G(Ie,null,[x(Ms)?(E(),X(yp,{key:0})):ge("v-if",!0),l("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ct(x(aa))},[z(M$,{class:"w-full h-full",style:ct({background:"var(--slidev-slide-container-background, black)"}),width:x(rs).width.value},null,8,["style","width"])],4)],64))}});const R$=J(L$,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/internals/Print.vue"]]);const N$={class:"slidev-layout end"},F$={__name:"end",setup(e){return D(Z),(t,n)=>(E(),G("div",N$," END "))}},j$=J(F$,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/layouts/end.vue"]]),H$={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D$=l("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),V$=[D$];function U$(e,t){return E(),G("svg",H$,V$)}const q$={name:"carbon-logo-github",render:U$},B$={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z$=l("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),W$=l("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1),K$=[z$,W$];function Y$(e,t){return E(),G("svg",B$,K$)}const G$={name:"carbon-application-web",render:Y$};function X$(e){return e.startsWith("/")?"/math201/slides/python01"+e.slice(1):e}const Z$={key:0},Q$=["src"],J$=ye({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(e){const t=e;D(Z);const n=O(()=>X$(t.logoHeader));return(s,r)=>e.logoHeader?(E(),G("header",Z$,[l("img",{src:x(n),width:"60",height:"60",class:"object-contain"},null,8,Q$)])):ge("v-if",!0)}}),Pu=J(J$,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),eS={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},tS={key:0,class:"mb-0"},nS={key:1,class:"mb-0"},sS=ye({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(e){return D(Z),(t,n)=>e.website||e.handle?(E(),G("footer",eS,[e.website?(E(),G("p",tS,cn(e.website),1)):ge("v-if",!0),e.handle?(E(),G("p",nS,"@"+cn(e.handle),1)):ge("v-if",!0)])):ge("v-if",!0)}}),Ou=J(sS,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),rS={class:"bg-main slidev-layout"},oS={class:"my-auto"},iS=ye({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(e){return D(Z),ye({LayoutHeader:Pu,LayoutFooter:Ou}),(t,n)=>(E(),G("div",rS,[z(Pu,{logoHeader:e.logoHeader},null,8,["logoHeader"]),l("div",oS,[Xt(t.$slots,"default")]),z(Ou,{website:e.website,handle:e.handle},null,8,["website","handle"])]))}}),Or=J(iS,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),lS=ye({__name:"cover",setup(e){return D(Z),ye({Default:Or}),(t,n)=>(E(),X(Or,{class:"cover"},{default:te(()=>[Xt(t.$slots,"default")]),_:3}))}}),aS=J(lS,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),cS=l("h1",null,"数值计算方法实训",-1),uS=l("h2",null,"上海电力大学",-1),fS=l("p",null,"数理学院数学系",-1),dS=l("h4",null,"纸上得来终觉浅",-1),pS={class:"abs-br m-6 flex gap-2"},hS={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},mS={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},gS={__name:"1",setup(e){const t={theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss"};return D(Z),(n,s)=>{const r=G$,o=q$;return E(),X(aS,Se(we(t)),{default:te(()=>[cS,uS,fS,dS,l("div",pS,[l("a",hS,[z(r)]),l("a",mS,[z(o)])])]),_:1},16)}}},_S=J(gS,[["__file","/@slidev/slides/1.md"]]),vS={class:"flex flex-col items-center justify-center text-center"},yS=ye({__name:"center",setup(e){return D(Z),ye({Default:Or}),(t,n)=>(E(),X(Or,{class:"center"},{default:te(()=>[l("div",vS,[Xt(t.$slots,"default")])]),_:3}))}}),Hn=J(yS,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),bS=l("h1",null,"什么是数值计算？",-1),wS={__name:"2",setup(e){const t={transition:"slide-up",layout:"center",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[bS]),_:1},16))}},xS=J(wS,[["__file","/@slidev/slides/2.md"]]),$S={class:"slidev-layout full w-full h-full"},SS={__name:"full",setup(e){return D(Z),(t,n)=>(E(),G("div",$S,[Xt(t.$slots,"default",{class:"w-full h-full"})]))}},De=J(SS,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/layouts/full.vue"]]),kS=l("h1",null,"解析解 与 数值解",-1),ES=l("h4",null,"解析解： 如果一个方程或者方程组存在的某些解，是由有限次常见运算的组合给出的形式，则称该方程存在解析解。",-1),PS=l("p",null,"典型案例：",-1),OS=l("p",null,[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("msup",null,[l("mi",null,"x"),l("mn",null,"2")]),l("mo",null,"+"),l("mi",null,"p"),l("mi",null,"x"),l("mo",null,"−"),l("mi",null,"q"),l("mo",null,"="),l("mn",null,"0")]),l("annotation",{encoding:"application/x-tex"},"x^2 + px - q = 0 ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"x"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8641em"}},[l("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.1944em"}}),l("span",{class:"mord mathnormal"},"p"),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0")])])])])],-1),TS=l("p",null,[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("msqrt",null,[l("mrow",null,[l("msup",null,[l("mi",null,"p"),l("mn",null,"2")]),l("mo",null,"+"),l("mn",null,"4"),l("mi",null,"q")])]),l("mo",null,"−"),l("mi",null,"p")]),l("mn",null,"2")])]),l("annotation",{encoding:"application/x-tex"},"x = \\frac{\\sqrt{p^2 + 4q} -p}{2} ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"2.3208em","vertical-align":"-0.686em"}}),l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.6348em"}},[l("span",{style:{top:"-2.314em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"2")])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.677em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord sqrt"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.9578em"}},[l("span",{class:"svg-align",style:{top:"-3.2em"}},[l("span",{class:"pstrut",style:{height:"3.2em"}}),l("span",{class:"mord",style:{"padding-left":"1em"}},[l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"p"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.7401em"}},[l("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord"},"4"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q")])]),l("span",{style:{top:"-2.9178em"}},[l("span",{class:"pstrut",style:{height:"3.2em"}}),l("span",{class:"hide-tail",style:{"min-width":"1.02em",height:"1.28em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},[l("path",{d:`M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.2822em"}},[l("span")])])])]),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord mathnormal"},"p")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.686em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])])])],-1),CS=l("br",null,null,-1),AS=l("h4",null,"数值解：是指给出一系列对应的自变量，采用数值方法求出的解。采用的方法有限元法、数值逼近、插值法。",-1),IS={__name:"3",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[kS,ES,PS,OS,TS,CS,AS]),_:1},16))}},MS=J(IS,[["__file","/@slidev/slides/3.md"]]),LS=l("h1",null,"简单理解的方式",-1),RS=l("ul",null,[l("li",null,"Analytical solutions can be obtained exactly with pencil and paper;")],-1),NS=l("br",null,null,-1),FS=l("ul",null,[l("li",null,"Numerical solutions cannot be obtained exactly in finite time and typically cannot be solved using pencil and paper.")],-1),jS=l("h2",null,"案例",-1),HS=l("p",null,[ne("Find the root of "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"f"),l("mo",{stretchy:"false"},"("),l("mi",null,"x"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("mi",null,"x"),l("mo",null,"−"),l("mn",null,"5")]),l("annotation",{encoding:"application/x-tex"},"f(x)=x-5")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"5")])])])],-1),DS=l("p",null,"Analytical soluation:",-1),VS=l("p",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"f"),l("mo",{stretchy:"false"},"("),l("mi",null,"x"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("mi",null,"x"),l("mo",null,"−"),l("mn",null,"5"),l("mo",null,"="),l("mn",null,"0")]),l("annotation",{encoding:"application/x-tex"},"f(x)=x-5=0")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"5"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0")])])]),ne(", add "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mo",null,"+"),l("mn",null,"5")]),l("annotation",{encoding:"application/x-tex"},"+5")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"+"),l("span",{class:"mord"},"5")])])]),ne(" to both sides to get the answer "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mn",null,"5")]),l("annotation",{encoding:"application/x-tex"},"x = 5")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"5")])])])],-1),US=l("p",null,"Numerical solution:",-1),qS=l("ol",null,[l("li",null,[ne("Let’s guess "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mn",null,"1"),l("mo",null,":"),l("mi",null,"f"),l("mo",{stretchy:"false"},"("),l("mn",null,"1"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("mn",null,"1"),l("mo",null,"−"),l("mn",null,"5"),l("mo",null,"="),l("mo",null,"−"),l("mn",null,"4")]),l("annotation",{encoding:"application/x-tex"},"x=1: f(1)=1-5=-4")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"1"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},":"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},"1"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"1"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"5"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"−"),l("span",{class:"mord"},"4")])])]),ne(". A negative number.")]),l("li",null,[ne("Let’s guess "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mn",null,"6"),l("mo",null,":"),l("mi",null,"f"),l("mo",{stretchy:"false"},"("),l("mn",null,"6"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("mn",null,"6"),l("mo",null,"−"),l("mn",null,"5"),l("mo",null,"="),l("mn",null,"1")]),l("annotation",{encoding:"application/x-tex"},"x=6: f(6)=6-5=1")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"6"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},":"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},"6"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},"6"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"5"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"1")])])]),ne(". A positive number.")]),l("li",null,[ne("The answer must be between them. Let’s try "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mn",null,"6"),l("mo",null,"+"),l("mn",null,"1")]),l("mn",null,"2")]),l("mo",null,":"),l("mi",null,"f"),l("mo",{stretchy:"false"},"("),l("mfrac",null,[l("mn",null,"7"),l("mn",null,"2")]),l("mo",{stretchy:"false"},")"),l("mo",null,"<"),l("mn",null,"0")]),l("annotation",{encoding:"application/x-tex"},"x=\\frac{6+1}{2}: f(\\frac{7}{2})<0")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8451em"}},[l("span",{style:{top:"-2.655em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"2")])])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.394em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"6"),l("span",{class:"mbin mtight"},"+"),l("span",{class:"mord mtight"},"1")])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.345em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})]),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},":"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),l("span",{class:"mopen"},"("),l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8451em"}},[l("span",{style:{top:"-2.655em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"2")])])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.394em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"7")])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.345em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})]),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"<"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0")])])]),ne(".")]),l("li",null,[ne("So it must be between "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mfrac",null,[l("mn",null,"7"),l("mn",null,"2")])]),l("annotation",{encoding:"application/x-tex"},"\\frac{7}{2}")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8451em"}},[l("span",{style:{top:"-2.655em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"2")])])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.394em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"7")])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.345em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])]),ne(" and 6 …etc.")])],-1),BS=l("p",null,"This is called bisection method.",-1),zS={__name:"4",setup(e){const t={layout:"full",transition:"slide-left",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[LS,RS,NS,FS,jS,HS,DS,VS,US,qS,BS]),_:1},16))}},WS=J(zS,[["__file","/@slidev/slides/4.md"]]),KS=l("h1",null,"为什么要用数值分析？",-1),YS={__name:"5",setup(e){const t={transition:"slide-left",layout:"center",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[KS]),_:1},16))}},GS=J(YS,[["__file","/@slidev/slides/5.md"]]),Zt=ye({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var o,i;const e=Xa("click"),t=Xa("after"),n=(a,c,u)=>Xo(a,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let s=(i=(o=this.$slots).default)==null?void 0:i.call(o);if(!s)return;s=Pv(s);const r=a=>a.map((c,u)=>dn(c)?n(ut(c),u%this.every===0?e:t,Math.floor(u/this.every)):c);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?ut(s[0],{},[r(s[0].children)]):r(s)}}),ni=ye({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return z(Zt,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),XS="/math201/slides/python01/Eniac.jpg",ZS=l("h1",null,"原因",-1),QS=l("ol",null,[l("li",null,"大多数方程无法得到解析解，尤其是偏微分方程。")],-1),JS=l("br",null,null,-1),ek=l("ol",{start:"2"},[l("li",null,"人类历史上最伟大的发明诞生了。")],-1),tk=l("img",{src:XS,class:"h-90 mx-auto"},null,-1),nk={__name:"6",setup(e){const t={transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>{const r=ni;return E(),X(Or,Se(we(t)),{default:te(()=>[ZS,QS,JS,ek,z(r,null,{default:te(()=>[tk]),_:1})]),_:1},16)}}},sk=J(nk,[["__file","/@slidev/slides/6.md"]]),rk="/math201/slides/python01/python-code.webp",ok=l("h1",null,"Coding",-1),ik=l("p",null,"因此你们不仅要学数值计算方法，更重要的是要让计算机去帮你们求解方程的数值解。",-1),lk=l("p",null,"所以需要解锁你们潜藏在内心的编程的洪荒之力，让计算机来帮你们去干重复性工作，而且它还不会出错（除非你代码写错了）。",-1),ak=l("img",{src:rk,class:"h-90 mx-auto"},null,-1),ck={__name:"7",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[ok,ik,lk,ak]),_:1},16))}},uk=J(ck,[["__file","/@slidev/slides/7.md"]]),fk=l("h1",null,"解个方程的解而已，有啥用呢？",-1),dk={__name:"8",setup(e){const t={layout:"center",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[fk]),_:1},16))}},pk=J(dk,[["__file","/@slidev/slides/8.md"]]),hk="/math201/slides/python01/ChatGPT.png",mk=l("h1",null,"人工智能",-1),gk=l("img",{src:hk,class:"h-90 mx-auto"},null,-1),_k=l("p",null,[ne("ChatGPT镜像站点列表："),l("a",{href:"https://github.com/xx025/carrot",target:"_blank",rel:"noopener"},"https://github.com/xx025/carrot")],-1),vk={__name:"9",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[mk,gk,_k]),_:1},16))}},yk=J(vk,[["__file","/@slidev/slides/9.md"]]),bk=["width","height","src"],wk=ye({__name:"Youtube",props:{id:{type:String,required:!0},width:{type:Number,required:!1},height:{type:Number,required:!1}},setup(e){return D(Z),(t,n)=>(E(),G("iframe",{class:"youtube",width:e.width,height:e.height,src:`https://www.youtube.com/embed/${e.id}`,title:"YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,bk))}}),Ep=J(wk,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/builtin/Youtube.vue"]]),xk=l("h1",null,"动画",-1),$k={__name:"10",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>{const r=Ep;return E(),X(De,Se(we(t)),{default:te(()=>[xk,z(r,{id:"mvRTLP0aQNw",width:"720",height:"1080"})]),_:1},16)}}},Sk=J($k,[["__file","/@slidev/slides/10.md"]]),kk=l("h1",null,"游戏",-1),Ek={__name:"11",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>{const r=Ep;return E(),X(De,Se(we(t)),{default:te(()=>[kk,z(r,{id:"LamMQ47ccdc",width:"720",height:"1080"})]),_:1},16)}}},Pk=J(Ek,[["__file","/@slidev/slides/11.md"]]),Ok="/math201/slides/python01/cae.jpg",Tk=l("h1",null,"CAE",-1),Ck=l("img",{src:Ok,class:"h-90 mx-auto"},null,-1),Ak={__name:"12",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[Tk,Ck]),_:1},16))}},Ik=J(Ak,[["__file","/@slidev/slides/12.md"]]),Mk="/math201/slides/python01/chip.webp",Lk=l("h1",null,"卡脖子技术",-1),Rk=l("img",{src:Mk,class:"h-90 mx-auto"},null,-1),Nk={__name:"13",setup(e){const t={layout:"full",transition:"slide-left",srcSequence:"./pages/what.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[Lk,Rk]),_:1},16))}},Fk=J(Nk,[["__file","/@slidev/slides/13.md"]]),jk=l("h1",null,"(Why)为什么要学“任何东西”？",-1),Hk={__name:"14",setup(e){const t={layout:"center",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[jk]),_:1},16))}},Dk=J(Hk,[["__file","/@slidev/slides/14.md"]]),Vk=l("h1",null,"为什么要学“任何东西”？",-1),Uk=l("p",null,"为什么要学Python/数值计算实训？",-1),qk=l("ul",null,[l("li",null,"为什么要学微积分/高等代数/XXXX/…？"),l("li",null,[ne("长辈/学长："),l("s",null,"擦干泪不要问为什么")])],-1),Bk={__name:"15",setup(e){const t={transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[Vk,Uk,z(r,null,{default:te(()=>[qk]),_:1})]),_:1},16)}}},zk=J(Bk,[["__file","/@slidev/slides/15.md"]]),Wk=l("h1",null,"学过微积分以后，再看为什么要学微积分",-1),Kk=l("p",null,"微积分的几个重要主题",-1),Yk=l("ul",null,[l("li",null,[l("p",null,"启蒙、应用与挑战（Newton时代）"),l("ul",null,[l("li",null,"机械论世界观（模型驱动的系统分析）"),l("li",null,"数学是理解世界的“基本工具”： 导数、微积分基本定理、…")])]),l("li",null,[l("p",null,"严格化与公理化（Cauchy时代）"),l("ul",null,[l("li",null,"各种卡出的bug（Weierstrass函数、Peano曲线…）")])]),l("li",null,[l("p",null,"大规模问题的数值计算（Von Neumann时代）"),l("ul",null,[l("li",null,"优化、有限元、PID…"),l("li",null,"AI是未来人类社会的“基本工具”")])]),l("li",null,[l("p",null,"三个主题应该根据学科特点各有侧重"),l("ul",null,[l("li",null,"感受：学了很多，但好像都没学懂")])])],-1),Gk={__name:"16",setup(e){const t={transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[Wk,Kk,z(r,null,{default:te(()=>[Yk]),_:1})]),_:1},16)}}},Xk=J(Gk,[["__file","/@slidev/slides/16.md"]]),Zk=l("h1",null,"为什么要学“任何东西”？",-1),Qk=l("p",null,[ne("重走"),l("strong",null,"从无到有"),ne("的发现历程")],-1),Jk=l("ul",null,[l("li",null,"基本思想、基本方法、里程碑、走过的弯路"),l("li",null,[ne("最终的目的： 应用/创新（做题得分不是目的而是手段） "),l("ul",null,[l("li",null,"如果只是记得几个结论，那ChatGPT已经做得很好了")])])],-1),eE=l("br",null,null,-1),tE=l("p",null,"学习“任何东西”的现代方法",-1),nE=l("ul",null,[l("li",null,[ne("使用辅助工具加速探索 "),l("ul",null,[l("li",null,"数值/符号计算： numpy,sympy,sage,Mathematica,…"),l("li",null,[ne("可视化： matplotlib "),l("ul",null,[l("li",null,[ne("All-in-one: "),l("a",{href:"https://jupyter.org/",target:"_blank",rel:"noopener"},"Jupyter"),ne("(2017 ACM Software System Award)")])])]),l("li",null,[ne("宇宙第一的代码编辑器： "),l("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"Visual Studio Code(简称 VS Code)")]),l("li",null,[l("strong",null,"人生苦短，Python是岸")])])])],-1),sE={__name:"17",setup(e){const t={transition:"slide-left",layout:"full",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>{const r=Zt,o=ni;return E(),X(De,Se(we(t)),{default:te(()=>[Zk,Qk,z(r,null,{default:te(()=>[Jk]),_:1}),eE,z(o,null,{default:te(()=>[tE,nE]),_:1})]),_:1},16)}}},rE=J(sE,[["__file","/@slidev/slides/17.md"]]),oE=l("h1",null,"为什么要学数值计算实训课？",-1),iE={__name:"18",setup(e){const t={layout:"center",transition:"slide-left",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[oE]),_:1},16))}},lE=J(iE,[["__file","/@slidev/slides/18.md"]]),aE=l("h1",null,"熟练工 VS. 专业人士",-1),cE=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"老板分配任务"),l("th",null,"熟练工"),l("th",null,"专业人士")])]),l("tbody",null,[l("tr",null,[l("td",null,"跑Matlab"),l("td",null,"软件跟我没关系"),l("td",null,"出了bug我能调对")]),l("tr",null,[l("td",null,"尝试新工具"),l("td",null,"我没接触过"),l("td",null,"我来看手册")]),l("tr",null,[l("td",null,"改进工具"),l("td",null,"工具会用不就行吗"),l("td",null,"我来分析瓶颈")]),l("tr",null,[l("td",null,"实现新需求"),l("td",null,"我需要详细设计文档"),l("td",null,"我规划一下")])])],-1),uE=l("br",null,null,-1),fE=l("p",null,"熟练工: 可以很好地完成指定任务, 保证项目流程往前推进",-1),dE=l("p",null,"专业人士: 具备独立解决未知问题的专业素质",-1),pE=l("ul",null,[l("li",null,"专业技能: 正确理解专业知识点, 并具备全局系统观"),l("li",null,"专业方法: 知道如何找到相关的代码/资料/工具"),l("li",null,"专业世界观: 明白做什么事情是正确/高效/科学的, 如何分解复杂任务")],-1),hE={__name:"19",setup(e){const t={transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[aE,cE,uE,fE,dE,pE]),_:1},16))}},mE=J(hE,[["__file","/@slidev/slides/19.md"]]),gE=l("h1",null,"专业训练",-1),_E=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"基本原理"),l("th",null,"做事方案"),l("th",null,"正确性风险"),l("th",null,"代表例子")])]),l("tbody",null,[l("tr",null,[l("td",null,"阐述"),l("td",null,"明确"),l("td",null,"基本正确"),l("td",null,"高中物理实验")]),l("tr",null,[l("td",null,"阐述"),l("td",null,"明确"),l("td",null,[l("strong",null,"可能出错")]),l("td",null,"程序设计作业, 培训班")]),l("tr",null,[l("td",null,"阐述"),l("td",null,[l("strong",null,"需要思考")]),l("td",null,"基本正确"),l("td",null,"数学/算法题")]),l("tr",null,[l("td",null,"阐述"),l("td",null,[l("strong",null,"需要思考")]),l("td",null,[l("strong",null,"可能出错")]),l("td",null,"未来的数值分析实训课, “一生一芯”")]),l("tr",null,[l("td",null,[l("strong",null,"需要探索")]),l("td",null,[l("strong",null,"需要思考")]),l("td",null,[l("strong",null,"可能出错")]),l("td",null,"业界和科研的真实问题")])])],-1),vE=l("p",null,"把知识包装成 “新问题”呈现给大家",-1),yE=l("ul",null,[l("li",null,[ne("通过试错深入理解问题: "),l("ul",null,[l("li",null,"我想要x, 那么就需要做y, 这是因为z"),l("li",null,"而做u是不行的, 它会因为v而导致w")])]),l("li",null,"解决上百个 “新问题”, 锻炼出专业世界观")],-1),bE={__name:"20",setup(e){const t={transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[gE,_E,vE,yE]),_:1},16))}},wE=J(bE,[["__file","/@slidev/slides/20.md"]]),xE=l("h1",null,"(How)怎么学“任何东西”？",-1),$E={__name:"21",setup(e){const t={layout:"center",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[xE]),_:1},16))}},SE=J($E,[["__file","/@slidev/slides/21.md"]]),kE=l("h1",null,"数值计算实训课绝大部分同学来说并不轻松",-1),EE=l("p",null,"不仅需要学习很多新知识, 在新环境中使用新工具",-1),PE=l("p",null,[ne("还需要锻炼出"),l("strong",null,"独立解决问题的意识和能力")],-1),OE=l("p",null,[ne("更重要的是, "),l("strong",null,"完成观念和心态上的转变")],-1),TE=l("ul",null,[l("li",null,[ne("我们与传统的课程大作业不同 "),l("ul",null,[l("li",null,"需要自学很多东西"),l("li",null,[ne("需要自学LaTeX，提交LaTeX报告（"),l("strong",null,"一个数学系的学生不会LaTeX应该感到羞耻"),ne("）")])])])],-1),CE=l("br",null,null,-1),AE=l("ul",null,[l("li",null,[ne("你遇到的所有问题(除了框架代码自身错误), 都是在锻炼你的能力 "),l("ul",null,[l("li",null,"老师助教不会手把手帮你解决所有问题"),l("li",null,"独立解决这些问题, 是对你最大的训练")])])],-1),IE={__name:"22",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[kE,EE,PE,OE,z(r,null,{default:te(()=>[TE,CE,AE]),_:1})]),_:1},16)}}},ME=J(IE,[["__file","/@slidev/slides/22.md"]]),LE=l("h1",null,"专业世界观1 - 学术诚信",-1),RE=l("p",null,[l("b",{"text-sky":"","font-900":""},[l("a",{href:"https://integrity.mit.edu/",target:"_blank",rel:"noopener"},"MIT对学术诚信的诠释")]),ne(", 尤其是"),l("b",{"text-sky":"","font-900":""},[l("a",{href:"http://integrity.mit.edu/handbook/writing-code",target:"_blank",rel:"noopener"},"关于写代码的学术诚信")])],-1),NE=l("ul",null,[l("li",null,[l("b",{"text-orange":""},"独立完成学习任务")]),l("li",null,[l("b",{"text-orange":""},"在允许的范围内参考相关资料")]),l("li",null,[l("b",{"text-orange":""},"不参考别人的代码, 不分享自己的代码")])],-1),FE=l("p",null,"意义: 让你接受预期的训练, 锻炼出预期的能力",-1),jE=l("p",null,[l("strong",null,"这是需要大家发自内心去认可和执行的"),ne(": 我们很难约束大家")],-1),HE=l("p",null,"“凭什么不能参考别人的代码? 我都看懂了啊!”/“能抄对也是本事”",-1),DE=l("ul",null,[l("li",null,[l("b",{"text-red":""},"“看懂”和 “自己独立完成”的效果是天差地别的"),l("ul",null,[l("li",null,"你表面上看到了做y能得到x, 但不知道原因z, 更不知道试错的uvw"),l("li",null,"你收获了肤浅的理解, 让你重做一遍, 很可能还是搞不定")])])],-1),VE={__name:"23",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt,o=ni;return E(),X(De,Se(we(t)),{default:te(()=>[LE,RE,z(r,null,{default:te(()=>[NE]),_:1}),z(o,null,{default:te(()=>[FE,jE]),_:1}),z(o,null,{default:te(()=>[HE,DE]),_:1})]),_:1},16)}}},UE=J(VE,[["__file","/@slidev/slides/23.md"]]),qE=l("h1",null,"专业世界观2 - 大佬三连",-1),BE=l("p",null,[l("b",{"text-orange":"","font-900":""}," STFW - Search The Friendly Web ")],-1),zE=l("ul",null,[l("li",null,"只要我用的工具是大众的, 我几乎不可能是世界上第一个遇到问题的人"),l("li",null,"网上一定有人遇到过相同/类似问题, 我应该搜一下看看他们怎么解决")],-1),WE=l("br",null,null,-1),KE=l("p",null,[l("b",{"text-orange":"","font-900":""}," RTFM - Read The Friendly Manual ")],-1),YE=l("ul",null,[l("li",null,"只要我用的工具是大众的, 应该有手册记录这个工具的所有细节"),l("li",null,"如果我想了解它的某个问题, 我应该去搜索手册的描述")],-1),GE=l("br",null,null,-1),XE=l("p",null,[l("b",{"text-orange":"","font-900":""}," RTFSC - Read The Friendly Source Code ")],-1),ZE=l("ul",null,[l("li",null,"只要我获得了项目代码, 理论上我就可以知晓它的一切行为"),l("li",null,"如果我想了解它具体是如何工作的, 我应该去读一下(关键)代码")],-1),QE=l("br",null,null,-1),JE=l("p",null,"如果你在提问时收到了这些回复, 其背后的含义是:",-1),eP=l("ul",null,[l("li",null,[l("strong",null,"你想要的答案很容易找到, 你很应该自己去获取")]),l("li",null,[l("strong",null,"相比于我直接告诉你答案, 你自己获取答案能学到更多")])],-1),tP={__name:"24",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[qE,z(r,null,{default:te(()=>[BE,zE,WE,KE,YE,GE,XE,ZE,QE,JE,eP]),_:1})]),_:1},16)}}},nP=J(tP,[["__file","/@slidev/slides/24.md"]]),sP=l("h1",null,"专业世界观3 - 科学提问",-1),rP=l("p",null,[ne("《"),l("a",{href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md",target:"_blank",rel:"noopener"},"提问的智慧"),ne("》/《"),l("a",{href:"https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md",target:"_blank",rel:"noopener"},"别像弱智一样提问"),ne("》")],-1),oP=l("ul",null,[l("li",null,"提问能反映出你的学习态度: 主动尝试 vs. 被动依赖")],-1),iP=l("p",null,[l("strong",null,"不是所有问题都值得问")],-1),lP=l("ul",null,[l("li",null,"你以为自己热爱学习? 不, 别人只觉得你是伸手党")],-1),aP=l("p",null,"开源社区中的一个真实案例:",-1),cP=l("ul",null,[l("li",null,[ne("新手的提问: 两个不同的安装包有什么区别? "),l("b",{"text-sky":"","font-900":""},"我是新手"),ne(".")]),l("li",null,[ne("开发者的回答: "),l("strong",null,"自己上网找答案"),ne(". 在开源社区中"),l("strong",null,"不应该随便问这种配置问题"),ne(", 除非你有明确的证据证明代码或者文档有缺陷.")])],-1),uP={__name:"25",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[sP,rP,oP,iP,lP,aP,cP]),_:1},16))}},fP=J(uP,[["__file","/@slidev/slides/25.md"]]),dP=l("h1",null,"鼓励的提问 vs. 不应该的提问",-1),pP=l("ul",null,[l("li",null,[ne("鼓励的提问 "),l("ul",null,[l("li",null,[ne("心理辅导, 学习困惑等非具体技术问题 "),l("ul",null,[l("li",null,"可以私戳老师助教, 时间充裕的话还可以线上聊聊")])]),l("li",null,"bug report: 要有证据, 当一名专业的社区contributor"),l("li",null,"经过思考的高质量问题"),l("li",null,[ne("属于训练环节, 但经历过合理尝试还无法解决的问题: "),l("a",{href:"https://ysyx.oscc.cc/docs/misc/ask.html",target:"_blank",rel:"noopener"},"提问模板")])])])],-1),hP=l("br",null,null,-1),mP=l("ul",null,[l("li",null,[ne("不应该的提问 (背后含义: "),l("strong",null,"你应该接受训练"),ne(") "),l("ul",null,[l("li",null,[ne("没有看出合理尝试和思考的提问 "),l("ul",null,[l("li",null,"可以不知道怎么尝试和思考, 但不代表可以跳过训练获得答案"),l("li",null,"接受训练: 方法 -> 看讲义总结归纳, 细节 -> RTFM/RTFSC")])]),l("li",null,"自己动手试试就能得到答案的提问")])])],-1),gP={__name:"26",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[dP,pP,hP,mP]),_:1},16))}},_P=J(gP,[["__file","/@slidev/slides/26.md"]]),vP=l("h1",null,"虚假的帮助 vs. 真实的帮助",-1),yP=l("p",null,"虚假的帮助: 面向结果, 解决当下问题优先",-1),bP=l("p",null,"真实的帮助: 面向能力, 领悟学习方法优先",-1),wP=l("p",null,[l("strong",null,"本质区别: 如果将来不再提供帮助, 学生能否独立解决类似的问题?")],-1),xP=l("p",null,"真实案例: 学生A询问某报错信息",-1),$P=l("ul",null,[l("li",null,"分析: 根据提问内容, 学生A只进行了很少的尝试, 没有其他想法"),l("li",null,[ne("虚假的帮助: 学生B指出可能是代码里面有些模块有bug, 提示学生A去看看 "),l("ul",null,[l("li",null,"学生A的收获是 “报错信息->something error”的表面因果关系, 难以深入理解和记忆, 并未学会真正思路和方法, 同时也错过一次锻炼机会")])]),l("li",null,[ne("真实的帮助: 引导学生A学会对bug进行深入的分析和定位 "),l("ul",null,[l("li",null,[l("strong",null,"这比虚假的帮助困难得多, 大部分学生并不知道如何引导")])])])],-1),SP={__name:"27",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[vP,yP,bP,wP,xP,$P]),_:1},16))}},kP=J(SP,[["__file","/@slidev/slides/27.md"]]),EP=l("h1",null,"任何直接获得答案的做法都是在放弃训练的机会",-1),PP=l("ul",null,[l("li",null,[l("p",null,"遇到一个总线的bug, 希望同学提供点思路"),l("ul",null,[l("li",null,"正确做法: RTFM, 确认自己正确理解细节; RTFSC, 梳理这个bug是如何出现的")])]),l("li",null,[l("p",null,"不知道算法应该放在哪里, 希望助教告知一个好的设计方案"),l("ul",null,[l("li",null,"正确做法: 自己尝试不同的方案, 然后总结它们的优劣")])]),l("li",null,[l("p",null,"希望助教/大佬能整理一本攻略手册"),l("ul",null,[l("li",null,[ne("正确做法: 自己整理(作为学习成果), 但不要分享出去 "),l("ul",null,[l("li",null,[l("strong",null,"这些攻略并不能真正帮助你学习, 而是在剥夺你接受训练的机会")])])])])]),l("li",null,[l("p",null,"阅读开源项目或者别人的案例"),l("ul",null,[l("li",null,[ne("正确做法: 先尽力完成一个满意的设计, 再对比开源项目 "),l("ul",null,[l("li",null,[l("strong",null,"缺少试错, 你无法理解 “为什么好, 为什么不好”")])])])])])],-1),OP=l("p",null,[l("b",{"text-orange":"","font-900":""}," 躺平容易坚持难, 但如果你能坚持下来, 你就可以得到脱胎换骨的提升")],-1),TP={__name:"28",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[EP,PP,OP]),_:1},16))}},CP=J(TP,[["__file","/@slidev/slides/28.md"]]),AP=l("h1",null,"Prerequisistes",-1),IP=l("p",null,"信息与计算科学专业学生必须具备的核心素质。",-1),MP=l("ol",null,[l("li",null,[l("p",null,"是一个合格的计算机用户"),l("ul",null,[l("li",null,"会STFW/RTFM自己动手解决问题"),l("li",null,[ne("不怕学习和使用任何可以提高效率的工具 "),l("ul",null,[l("li",null,"Linux,VS Code,Python,git,…")])])])]),l("li",null,[l("p",null,"不怕写代码"),l("ul",null,[l("li",null,"能管理一定规模(数千行)的代码"),l("li",null,[ne("能在出bug时默念“机器永远是对的、我肯定能调试出来的” "),l("ul",null,[l("li",null,"然后开始用正确的工具/方法调试")])])])])],-1),LP={__name:"29",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[AP,IP,z(r,null,{default:te(()=>[MP]),_:1})]),_:1},16)}}},RP=J(LP,[["__file","/@slidev/slides/29.md"]]),NP=l("h1",null,"成为一名计算机的Power User",-1),FP=l("br",null,null,-1),jP=l("p",null,"感到 Linux/PowerShell/Python/git/…很难？",-1),HP=l("ol",null,[l("li",null,[ne("没有建立信心、没有理解基本逻辑 "),l("ul",null,[l("li",null,[l("a",{href:"https://suepaper.github.io/math201/docs/notes/cs%E2%80%94roadmap",target:"_blank",rel:"noopener"},"计算机科学自学指南")])])])],-1),DP=l("br",null,null,-1),VP=l("ol",{start:"2"},[l("li",null,[ne("没有找对材料/没有多问“"),l("strong",null,"能不能再多做点什么"),ne("” "),l("ul",null,[l("li",null,"Baidu v.s. Google/Github/Stackoverflow v.s. ChatGPT")])])],-1),UP=l("br",null,null,-1),qP=l("ol",{start:"3"},[l("li",null,[ne("没有用对工具(该用VS Code就别用Vim/Emacs) "),l("ul",null,[l("li",null,"过了入门阶段，都会好起来")])])],-1),BP={__name:"30",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[NP,FP,jP,z(r,null,{default:te(()=>[HP,DP,VP,UP,qP]),_:1})]),_:1},16)}}},zP=J(BP,[["__file","/@slidev/slides/30.md"]]),WP=l("h1",null,"成为一名计算机的Power User",-1),KP=l("br",null,null,-1),YP=l("ul",null,[l("li",null,"如果一件事很困难，通常是因为没有找到正确的方法。")],-1),GP=l("br",null,null,-1),XP=l("ul",null,[l("li",null,"这门课程中绝大部分的内容都可以在互联网上找到适当的学习资料。")],-1),ZP=l("br",null,null,-1),QP=l("ul",null,[l("li",null,"在互联网/搜索引擎普及的时代，只要掌握 “提出问题” 的能力，就能极快地提升自己。")],-1),JP=l("br",null,null,-1),eO=l("ul",null,[l("li",null,"同时，这可能将在 AI 时代被颠覆——AI 可能会猜测你的目的，并且告诉你 “应该去做什么”。")],-1),tO={__name:"31",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=Zt;return E(),X(De,Se(we(t)),{default:te(()=>[WP,KP,z(r,null,{default:te(()=>[YP,GP,XP,ZP,QP,JP,eO]),_:1})]),_:1},16)}}},nO=J(tO,[["__file","/@slidev/slides/31.md"]]),sO=l("h1",null,"学会写代码",-1),rO=l("p",null,"写代码 == 创造有趣的东西",-1),oO=l("ul",null,[l("li",null,[ne("命令行 + 编程语言就是全世界 "),l("ul",null,[l("li",null,"我们还有sympy, sage, z3, rich,…呢")])])],-1),iO=l("br",null,null,-1),lO=l("br",null,null,-1),aO=l("ul",null,[l("li",null,[ne("不要讲语言特性、设计模式、… "),l("ul",null,[l("li",null,"写代码就对了；你自然而然就会需要它们的，也就自然而然学会了。")])])],-1),cO={__name:"32",setup(e){const t={layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"};return D(Z),(n,s)=>{const r=ni;return E(),X(De,Se(we(t)),{default:te(()=>[sO,rO,oO,iO,lO,z(r,null,{default:te(()=>[aO]),_:1})]),_:1},16)}}},uO=J(cO,[["__file","/@slidev/slides/32.md"]]),fO=l("h1",null,"课程如何得分？？？",-1),dO={__name:"33",setup(e){const t={transition:"fade",layout:"center",srcSequence:"./pages/other.md"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[fO]),_:1},16))}},pO=J(dO,[["__file","/@slidev/slides/33.md"]]),hO=l("h1",null,"用心写作业",-1),mO=l("p",null,[l("strong",null,"保证用心写作业的人都能拿到付出心血应得的分数")],-1),gO=l("p",null,"作业和考试是两个性质的",-1),_O=l("ul",null,[l("li",null,"作业的主要任务不是考核，而是做为一种训练。"),l("li",null,"期末考试是有时间限制的，需要在有限时间内检测出一个人的水平。")],-1),vO=l("p",null,"数值分析课的目的是培养大家的问题求解能力，而“问题求解”能力的提升，势必需要对思维有一定程度的考验和挑战，尽量做出一些思维上的创新，克服一定的非平凡性 (nontriviality) 才可以。",-1),yO=l("ul",null,[l("li",null,[l("p",null,"大家还是不要老是觉得，所有的任务都应该是可以routinely完成的。"),l("ul",null,[l("li",null,[l("strong",null,"这尤其在AI已经大行其道的今天，是一种不可取的态度了。")])])]),l("li",null,[l("p",null,"大家应该至少习惯于面对一些非平凡性和思维挑战。"),l("ul",null,[l("li",null,"大家可以去关注一下那些世界一流大学的课程，平时的作业大概是什么水平。")])])],-1),bO={__name:"34",setup(e){const t={layout:"full",srcSequence:"./pages/other.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[hO,mO,gO,_O,vO,yO]),_:1},16))}},wO=J(bO,[["__file","/@slidev/slides/34.md"]]),xO=l("h1",null,"关于课改",-1),$O=l("p",null,"Matlab 版本已经过时，不符合现代的需求。另外 Matlab 可能面临卡脖子，以后大家可能用不了 Matlab。（关于盗版软件，我们不提倡盗版软件，尊重开发者的劳动。",-1),SO=l("p",null,"我们能保证的：",-1),kO=l("ul",null,[l("li",null,[ne("这门课程是助教和老师精心设计的。 "),l("ul",null,[l("li",null,"大家可以看看我们课程网站的git提交的历史，大家就可以看到我们整个新课改团队认真工作到多晚。"),l("li",null,"课程资料选取和设计是课程非常重要的环节，也是非常考验我们整个团队的积累和认真程度。")])])],-1),EO=l("p",null,"我们不希望的：",-1),PO=l("ul",null,[l("li",null,[ne("这门课是师生之间博弈的结果，你好我好大家好，最后反而让教育质量打了折扣。 "),l("ul",null,[l("li",null,"违背开设这门课以及大家来读大学的初衷。")])])],-1),OO={__name:"35",setup(e){const t={layout:"full",srcSequence:"./pages/other.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[xO,$O,SO,kO,EO,PO]),_:1},16))}},TO=J(OO,[["__file","/@slidev/slides/35.md"]]),CO=l("h1",null,"关于Office Hour",-1),AO=l("p",null,"正如著名的数学家和名师Polya在他的《how to solveit》一书中所说，对于学生的帮助与提示，最理想的状态，应是在其能“刚好”“独立”解决问题的前提下，提供“as little aspossible”的帮助一这样学生的收获与成长才是最大的。",-1),IO=l("ul",null,[l("li",null,"每个人的具体情况是不同的，尤其在一门课刚开始的时候，能够接受的“阈值”也不一样的。"),l("li",null,"如果有同学感觉遇到了障碍，在变得焦虑和消极之前，不妨先尝试更加积极地来office hours寻求帮助。"),l("li",null,"如何正确寻求帮助也是能力的一部分。")],-1),MO={__name:"36",setup(e){const t={layout:"full",srcSequence:"./pages/other.md"};return D(Z),(n,s)=>(E(),X(De,Se(we(t)),{default:te(()=>[CO,AO,IO]),_:1},16))}},LO=J(MO,[["__file","/@slidev/slides/36.md"]]),RO=l("h1",null,"Thanks",-1),NO={__name:"37",setup(e){const t={layout:"center",class:"text-center"};return D(Z),(n,s)=>(E(),X(Hn,Se(we(t)),{default:te(()=>[RO]),_:1},16))}},FO=J(NO,[["__file","/@slidev/slides/37.md"]]),jO=[{path:"1",name:"page-1",component:_S,meta:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"数值计算方法实训",slide:{raw:`---
theme: unicorn
# theme: seriph
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
layout: cover
drawings:
  persist: True
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# 数值计算方法实训

## 上海电力大学

数理学院数学系

#### 纸上得来终觉浅

<div class="abs-br m-6 flex gap-2">
  <a href="https://suepaper.github.io/math201/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:application-web />
  </a>
  <a href="https://github.com/SUEPaper/math201-lecture/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
`,title:"数值计算方法实训",level:1,content:`# 数值计算方法实训

## 上海电力大学

数理学院数学系

#### 纸上得来终觉浅

<div class="abs-br m-6 flex gap-2">
  <a href="https://suepaper.github.io/math201/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:application-web />
  </a>
  <a href="https://github.com/SUEPaper/math201-lecture/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"数值计算方法实训"},index:0,start:0,end:36,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:xS,meta:{transition:"slide-up",layout:"center",title:"什么是数值计算？",srcSequence:"./pages/what.md",slide:{raw:null,title:"什么是数值计算？",level:1,content:"# 什么是数值计算？",frontmatter:{transition:"slide-up",layout:"center",title:"什么是数值计算？",srcSequence:"./pages/what.md"},index:1,start:0,end:7,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
transition: slide-up
layout: center
---

# 什么是数值计算？
`,title:"什么是数值计算？",level:1,content:"# 什么是数值计算？",frontmatter:{transition:"slide-up",layout:"center",title:"什么是数值计算？"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/what.md
---
`,content:"",frontmatter:{},index:1,start:36,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:MS,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 解析解 与 数值解

#### 解析解： 如果一个方程或者方程组存在的某些解，是由有限次常见运算的组合给出的形式，则称该方程存在解析解。

典型案例：

$$
x^2 + px - q = 0
$$

$$
x = \\frac{\\sqrt{p^2 + 4q} -p}{2}
$$

<br/>

#### 数值解：是指给出一系列对应的自变量，采用数值方法求出的解。采用的方法有限元法、数值逼近、插值法。
`,title:"解析解 与 数值解",level:1,content:`# 解析解 与 数值解

#### 解析解： 如果一个方程或者方程组存在的某些解，是由有限次常见运算的组合给出的形式，则称该方程存在解析解。

典型案例：

$$
x^2 + px - q = 0
$$

$$
x = \\frac{\\sqrt{p^2 + 4q} -p}{2}
$$

<br/>

#### 数值解：是指给出一系列对应的自变量，采用数值方法求出的解。采用的方法有限元法、数值逼近、插值法。`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:2,start:7,end:30,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---

# 解析解 与 数值解

#### 解析解： 如果一个方程或者方程组存在的某些解，是由有限次常见运算的组合给出的形式，则称该方程存在解析解。

典型案例：

$$
x^2 + px - q = 0
$$

$$
x = \\frac{\\sqrt{p^2 + 4q} -p}{2}
$$

<br/>

#### 数值解：是指给出一系列对应的自变量，采用数值方法求出的解。采用的方法有限元法、数值逼近、插值法。
`,title:"解析解 与 数值解",level:1,content:`# 解析解 与 数值解

#### 解析解： 如果一个方程或者方程组存在的某些解，是由有限次常见运算的组合给出的形式，则称该方程存在解析解。

典型案例：

$$
x^2 + px - q = 0
$$

$$
x = \\frac{\\sqrt{p^2 + 4q} -p}{2}
$$

<br/>

#### 数值解：是指给出一系列对应的自变量，采用数值方法求出的解。采用的方法有限元法、数值逼近、插值法。`,frontmatter:{layout:"full",transition:"slide-up"},index:1,start:7,end:30},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:WS,meta:{layout:"full",transition:"slide-left",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-left
---
# 简单理解的方式

- Analytical solutions can be obtained exactly with pencil and paper;

<br/>

- Numerical solutions cannot be obtained exactly in finite time and typically cannot be solved using pencil and paper.

## 案例

Find the root of  $f(x)=x-5$

Analytical soluation:

$f(x)=x-5=0$, add $+5$ to both sides to get the answer $x = 5$

Numerical solution:

1. Let's guess $x=1: f(1)=1-5=-4$. A negative number. 
2. Let's guess $x=6: f(6)=6-5=1$. A positive number.
3. The answer must be between them. Let's try $x=\\frac{6+1}{2}: f(\\frac{7}{2})<0$.
4. So it must be between $\\frac{7}{2}$ and 6 ..etc.

This is called bisection method.
`,title:"简单理解的方式",level:1,content:`# 简单理解的方式

- Analytical solutions can be obtained exactly with pencil and paper;

<br/>

- Numerical solutions cannot be obtained exactly in finite time and typically cannot be solved using pencil and paper.

## 案例

Find the root of  $f(x)=x-5$

Analytical soluation:

$f(x)=x-5=0$, add $+5$ to both sides to get the answer $x = 5$

Numerical solution:

1. Let's guess $x=1: f(1)=1-5=-4$. A negative number. 
2. Let's guess $x=6: f(6)=6-5=1$. A positive number.
3. The answer must be between them. Let's try $x=\\frac{6+1}{2}: f(\\frac{7}{2})<0$.
4. So it must be between $\\frac{7}{2}$ and 6 ..etc.

This is called bisection method.`,frontmatter:{layout:"full",transition:"slide-left",srcSequence:"./pages/what.md"},index:3,start:30,end:59,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-left
---
# 简单理解的方式

- Analytical solutions can be obtained exactly with pencil and paper;

<br/>

- Numerical solutions cannot be obtained exactly in finite time and typically cannot be solved using pencil and paper.

## 案例

Find the root of  $f(x)=x-5$

Analytical soluation:

$f(x)=x-5=0$, add $+5$ to both sides to get the answer $x = 5$

Numerical solution:

1. Let's guess $x=1: f(1)=1-5=-4$. A negative number. 
2. Let's guess $x=6: f(6)=6-5=1$. A positive number.
3. The answer must be between them. Let's try $x=\\frac{6+1}{2}: f(\\frac{7}{2})<0$.
4. So it must be between $\\frac{7}{2}$ and 6 ..etc.

This is called bisection method.
`,title:"简单理解的方式",level:1,content:`# 简单理解的方式

- Analytical solutions can be obtained exactly with pencil and paper;

<br/>

- Numerical solutions cannot be obtained exactly in finite time and typically cannot be solved using pencil and paper.

## 案例

Find the root of  $f(x)=x-5$

Analytical soluation:

$f(x)=x-5=0$, add $+5$ to both sides to get the answer $x = 5$

Numerical solution:

1. Let's guess $x=1: f(1)=1-5=-4$. A negative number. 
2. Let's guess $x=6: f(6)=6-5=1$. A positive number.
3. The answer must be between them. Let's try $x=\\frac{6+1}{2}: f(\\frac{7}{2})<0$.
4. So it must be between $\\frac{7}{2}$ and 6 ..etc.

This is called bisection method.`,frontmatter:{layout:"full",transition:"slide-left"},index:2,start:30,end:59},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:GS,meta:{transition:"slide-left",layout:"center",srcSequence:"./pages/what.md",slide:{raw:`---
transition: slide-left
layout: center
---

# 为什么要用数值分析？

`,title:"为什么要用数值分析？",level:1,content:"# 为什么要用数值分析？",frontmatter:{transition:"slide-left",layout:"center",srcSequence:"./pages/what.md"},index:4,start:59,end:67,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
transition: slide-left
layout: center
---

# 为什么要用数值分析？

`,title:"为什么要用数值分析？",level:1,content:"# 为什么要用数值分析？",frontmatter:{transition:"slide-left",layout:"center"},index:3,start:59,end:67},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:sk,meta:{transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
transition: slide-up
---
# 原因

1. 大多数方程无法得到解析解，尤其是偏微分方程。

<br/>

2. 人类历史上最伟大的发明诞生了。

<v-click>

<img src = "/Eniac.jpg" class = "h-90 mx-auto">

</v-click>
`,title:"原因",level:1,content:`# 原因

1. 大多数方程无法得到解析解，尤其是偏微分方程。

<br/>

2. 人类历史上最伟大的发明诞生了。

<v-click>

<img src = "/Eniac.jpg" class = "h-90 mx-auto">

</v-click>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/what.md"},index:5,start:67,end:84,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
transition: slide-up
---
# 原因

1. 大多数方程无法得到解析解，尤其是偏微分方程。

<br/>

2. 人类历史上最伟大的发明诞生了。

<v-click>

<img src = "/Eniac.jpg" class = "h-90 mx-auto">

</v-click>
`,title:"原因",level:1,content:`# 原因

1. 大多数方程无法得到解析解，尤其是偏微分方程。

<br/>

2. 人类历史上最伟大的发明诞生了。

<v-click>

<img src = "/Eniac.jpg" class = "h-90 mx-auto">

</v-click>`,frontmatter:{transition:"slide-up"},index:4,start:67,end:84},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:uk,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---
# Coding

因此你们不仅要学数值计算方法，更重要的是要让计算机去帮你们求解方程的数值解。

所以需要解锁你们潜藏在内心的编程的洪荒之力，让计算机来帮你们去干重复性工作，而且它还不会出错（除非你代码写错了）。

<img src = "/python-code.webp" class = "h-90 mx-auto">
`,title:"Coding",level:1,content:`# Coding

因此你们不仅要学数值计算方法，更重要的是要让计算机去帮你们求解方程的数值解。

所以需要解锁你们潜藏在内心的编程的洪荒之力，让计算机来帮你们去干重复性工作，而且它还不会出错（除非你代码写错了）。

<img src = "/python-code.webp" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:6,start:84,end:96,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---
# Coding

因此你们不仅要学数值计算方法，更重要的是要让计算机去帮你们求解方程的数值解。

所以需要解锁你们潜藏在内心的编程的洪荒之力，让计算机来帮你们去干重复性工作，而且它还不会出错（除非你代码写错了）。

<img src = "/python-code.webp" class = "h-90 mx-auto">
`,title:"Coding",level:1,content:`# Coding

因此你们不仅要学数值计算方法，更重要的是要让计算机去帮你们求解方程的数值解。

所以需要解锁你们潜藏在内心的编程的洪荒之力，让计算机来帮你们去干重复性工作，而且它还不会出错（除非你代码写错了）。

<img src = "/python-code.webp" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-up"},index:5,start:84,end:96},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:pk,meta:{layout:"center",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: center
transition: slide-up
---

# 解个方程的解而已，有啥用呢？
`,title:"解个方程的解而已，有啥用呢？",level:1,content:"# 解个方程的解而已，有啥用呢？",frontmatter:{layout:"center",transition:"slide-up",srcSequence:"./pages/what.md"},index:7,start:96,end:103,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: center
transition: slide-up
---

# 解个方程的解而已，有啥用呢？
`,title:"解个方程的解而已，有啥用呢？",level:1,content:"# 解个方程的解而已，有啥用呢？",frontmatter:{layout:"center",transition:"slide-up"},index:6,start:96,end:103},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:yk,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 人工智能

<img src = "/ChatGPT.png" class = "h-90 mx-auto">

ChatGPT镜像站点列表：https://github.com/xx025/carrot
`,title:"人工智能",level:1,content:`# 人工智能

<img src = "/ChatGPT.png" class = "h-90 mx-auto">

ChatGPT镜像站点列表：https://github.com/xx025/carrot`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:8,start:103,end:114,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---

# 人工智能

<img src = "/ChatGPT.png" class = "h-90 mx-auto">

ChatGPT镜像站点列表：https://github.com/xx025/carrot
`,title:"人工智能",level:1,content:`# 人工智能

<img src = "/ChatGPT.png" class = "h-90 mx-auto">

ChatGPT镜像站点列表：https://github.com/xx025/carrot`,frontmatter:{layout:"full",transition:"slide-up"},index:7,start:103,end:114},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Sk,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 动画

<Youtube id="mvRTLP0aQNw" width="720" height="1080"/>
`,title:"动画",level:1,content:`# 动画

<Youtube id="mvRTLP0aQNw" width="720" height="1080"/>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:9,start:114,end:123,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---

# 动画

<Youtube id="mvRTLP0aQNw" width="720" height="1080"/>
`,title:"动画",level:1,content:`# 动画

<Youtube id="mvRTLP0aQNw" width="720" height="1080"/>`,frontmatter:{layout:"full",transition:"slide-up"},index:8,start:114,end:123},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Pk,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 游戏

<Youtube id="LamMQ47ccdc" width="720" height="1080"/>
`,title:"游戏",level:1,content:`# 游戏

<Youtube id="LamMQ47ccdc" width="720" height="1080"/>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:10,start:123,end:132,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---

# 游戏

<Youtube id="LamMQ47ccdc" width="720" height="1080"/>
`,title:"游戏",level:1,content:`# 游戏

<Youtube id="LamMQ47ccdc" width="720" height="1080"/>`,frontmatter:{layout:"full",transition:"slide-up"},index:9,start:123,end:132},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Ik,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-up
---

# CAE

<img src = "/cae.jpg" class = "h-90 mx-auto">
`,title:"CAE",level:1,content:`# CAE

<img src = "/cae.jpg" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/what.md"},index:11,start:132,end:141,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-up
---

# CAE

<img src = "/cae.jpg" class = "h-90 mx-auto">
`,title:"CAE",level:1,content:`# CAE

<img src = "/cae.jpg" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-up"},index:10,start:132,end:141},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Fk,meta:{layout:"full",transition:"slide-left",srcSequence:"./pages/what.md",slide:{raw:`---
layout: full
transition: slide-left
---

# 卡脖子技术

<img src = "/chip.webp" class = "h-90 mx-auto">
`,title:"卡脖子技术",level:1,content:`# 卡脖子技术

<img src = "/chip.webp" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-left",srcSequence:"./pages/what.md"},index:12,start:141,end:150,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",raw:`---
layout: full
transition: slide-left
---

# 卡脖子技术

<img src = "/chip.webp" class = "h-90 mx-auto">
`,title:"卡脖子技术",level:1,content:`# 卡脖子技术

<img src = "/chip.webp" class = "h-90 mx-auto">`,frontmatter:{layout:"full",transition:"slide-left"},index:11,start:141,end:150},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/what.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Dk,meta:{layout:"center",title:"(Why)为什么要学“任何东西”？",srcSequence:"./pages/why.md",slide:{raw:null,title:"(Why)为什么要学“任何东西”？",level:1,content:"# (Why)为什么要学“任何东西”？",frontmatter:{layout:"center",title:"(Why)为什么要学“任何东西”？",srcSequence:"./pages/why.md"},index:13,start:0,end:5,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
layout: center
---
# (Why)为什么要学“任何东西”？
`,title:"(Why)为什么要学“任何东西”？",level:1,content:"# (Why)为什么要学“任何东西”？",frontmatter:{layout:"center",title:"(Why)为什么要学“任何东西”？"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/why.md
---
`,content:"",frontmatter:{},index:2,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:zk,meta:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md",slide:{raw:`---
transition: slide-up
layout: full
---

# 为什么要学“任何东西”？

为什么要学Python/数值计算实训？

<v-clicks>

* 为什么要学微积分/高等代数/XXXX/......？
* 长辈/学长：~~擦干泪不要问为什么~~

</v-clicks>
`,title:"为什么要学“任何东西”？",level:1,content:`# 为什么要学“任何东西”？

为什么要学Python/数值计算实训？

<v-clicks>

* 为什么要学微积分/高等代数/XXXX/......？
* 长辈/学长：~~擦干泪不要问为什么~~

</v-clicks>`,frontmatter:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"},index:14,start:5,end:21,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
transition: slide-up
layout: full
---

# 为什么要学“任何东西”？

为什么要学Python/数值计算实训？

<v-clicks>

* 为什么要学微积分/高等代数/XXXX/......？
* 长辈/学长：~~擦干泪不要问为什么~~

</v-clicks>
`,title:"为什么要学“任何东西”？",level:1,content:`# 为什么要学“任何东西”？

为什么要学Python/数值计算实训？

<v-clicks>

* 为什么要学微积分/高等代数/XXXX/......？
* 长辈/学长：~~擦干泪不要问为什么~~

</v-clicks>`,frontmatter:{transition:"slide-up",layout:"full"},index:1,start:5,end:21},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Xk,meta:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md",slide:{raw:`---
transition: slide-up
layout: full
---

# 学过微积分以后，再看为什么要学微积分

微积分的几个重要主题

<v-clicks>

- 启蒙、应用与挑战（Newton时代）
    * 机械论世界观（模型驱动的系统分析）
    * 数学是理解世界的“基本工具”： 导数、微积分基本定理、......

- 严格化与公理化（Cauchy时代）
    * 各种卡出的bug（Weierstrass函数、Peano曲线......）

- 大规模问题的数值计算（Von Neumann时代）
    * 优化、有限元、PID......
    * AI是未来人类社会的“基本工具”

- 三个主题应该根据学科特点各有侧重
    * 感受：学了很多，但好像都没学懂 

</v-clicks>

`,title:"学过微积分以后，再看为什么要学微积分",level:1,content:`# 学过微积分以后，再看为什么要学微积分

微积分的几个重要主题

<v-clicks>

- 启蒙、应用与挑战（Newton时代）
    * 机械论世界观（模型驱动的系统分析）
    * 数学是理解世界的“基本工具”： 导数、微积分基本定理、......

- 严格化与公理化（Cauchy时代）
    * 各种卡出的bug（Weierstrass函数、Peano曲线......）

- 大规模问题的数值计算（Von Neumann时代）
    * 优化、有限元、PID......
    * AI是未来人类社会的“基本工具”

- 三个主题应该根据学科特点各有侧重
    * 感受：学了很多，但好像都没学懂 

</v-clicks>`,frontmatter:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"},index:15,start:21,end:49,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
transition: slide-up
layout: full
---

# 学过微积分以后，再看为什么要学微积分

微积分的几个重要主题

<v-clicks>

- 启蒙、应用与挑战（Newton时代）
    * 机械论世界观（模型驱动的系统分析）
    * 数学是理解世界的“基本工具”： 导数、微积分基本定理、......

- 严格化与公理化（Cauchy时代）
    * 各种卡出的bug（Weierstrass函数、Peano曲线......）

- 大规模问题的数值计算（Von Neumann时代）
    * 优化、有限元、PID......
    * AI是未来人类社会的“基本工具”

- 三个主题应该根据学科特点各有侧重
    * 感受：学了很多，但好像都没学懂 

</v-clicks>

`,title:"学过微积分以后，再看为什么要学微积分",level:1,content:`# 学过微积分以后，再看为什么要学微积分

微积分的几个重要主题

<v-clicks>

- 启蒙、应用与挑战（Newton时代）
    * 机械论世界观（模型驱动的系统分析）
    * 数学是理解世界的“基本工具”： 导数、微积分基本定理、......

- 严格化与公理化（Cauchy时代）
    * 各种卡出的bug（Weierstrass函数、Peano曲线......）

- 大规模问题的数值计算（Von Neumann时代）
    * 优化、有限元、PID......
    * AI是未来人类社会的“基本工具”

- 三个主题应该根据学科特点各有侧重
    * 感受：学了很多，但好像都没学懂 

</v-clicks>`,frontmatter:{transition:"slide-up",layout:"full"},index:2,start:21,end:49},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:rE,meta:{transition:"slide-left",layout:"full",srcSequence:"./pages/why.md",slide:{raw:`---
transition: slide-left
layout: full
---

# 为什么要学“任何东西”？

重走**从无到有**的发现历程

<v-clicks>

* 基本思想、基本方法、里程碑、走过的弯路
* 最终的目的： 应用/创新（做题得分不是目的而是手段）
    * 如果只是记得几个结论，那ChatGPT已经做得很好了

</v-clicks>

<br/>

<v-click>

学习“任何东西”的现代方法

* 使用辅助工具加速探索
    * 数值/符号计算： numpy,sympy,sage,Mathematica,...
    * 可视化： matplotlib
        * All-in-one: [Jupyter](https://jupyter.org/)(2017 ACM Software System Award)
    * 宇宙第一的代码编辑器： [Visual Studio Code(简称 VS Code)](https://code.visualstudio.com/)
    * **人生苦短，Python是岸**

</v-click>

`,title:"为什么要学“任何东西”？",level:1,content:`# 为什么要学“任何东西”？

重走**从无到有**的发现历程

<v-clicks>

* 基本思想、基本方法、里程碑、走过的弯路
* 最终的目的： 应用/创新（做题得分不是目的而是手段）
    * 如果只是记得几个结论，那ChatGPT已经做得很好了

</v-clicks>

<br/>

<v-click>

学习“任何东西”的现代方法

* 使用辅助工具加速探索
    * 数值/符号计算： numpy,sympy,sage,Mathematica,...
    * 可视化： matplotlib
        * All-in-one: [Jupyter](https://jupyter.org/)(2017 ACM Software System Award)
    * 宇宙第一的代码编辑器： [Visual Studio Code(简称 VS Code)](https://code.visualstudio.com/)
    * **人生苦短，Python是岸**

</v-click>`,frontmatter:{transition:"slide-left",layout:"full",srcSequence:"./pages/why.md"},index:16,start:49,end:82,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
transition: slide-left
layout: full
---

# 为什么要学“任何东西”？

重走**从无到有**的发现历程

<v-clicks>

* 基本思想、基本方法、里程碑、走过的弯路
* 最终的目的： 应用/创新（做题得分不是目的而是手段）
    * 如果只是记得几个结论，那ChatGPT已经做得很好了

</v-clicks>

<br/>

<v-click>

学习“任何东西”的现代方法

* 使用辅助工具加速探索
    * 数值/符号计算： numpy,sympy,sage,Mathematica,...
    * 可视化： matplotlib
        * All-in-one: [Jupyter](https://jupyter.org/)(2017 ACM Software System Award)
    * 宇宙第一的代码编辑器： [Visual Studio Code(简称 VS Code)](https://code.visualstudio.com/)
    * **人生苦短，Python是岸**

</v-click>

`,title:"为什么要学“任何东西”？",level:1,content:`# 为什么要学“任何东西”？

重走**从无到有**的发现历程

<v-clicks>

* 基本思想、基本方法、里程碑、走过的弯路
* 最终的目的： 应用/创新（做题得分不是目的而是手段）
    * 如果只是记得几个结论，那ChatGPT已经做得很好了

</v-clicks>

<br/>

<v-click>

学习“任何东西”的现代方法

* 使用辅助工具加速探索
    * 数值/符号计算： numpy,sympy,sage,Mathematica,...
    * 可视化： matplotlib
        * All-in-one: [Jupyter](https://jupyter.org/)(2017 ACM Software System Award)
    * 宇宙第一的代码编辑器： [Visual Studio Code(简称 VS Code)](https://code.visualstudio.com/)
    * **人生苦短，Python是岸**

</v-click>`,frontmatter:{transition:"slide-left",layout:"full"},index:3,start:49,end:82},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:lE,meta:{layout:"center",transition:"slide-left",srcSequence:"./pages/why.md",slide:{raw:`---
layout: center
transition: slide-left
---

# 为什么要学数值计算实训课？

`,title:"为什么要学数值计算实训课？",level:1,content:"# 为什么要学数值计算实训课？",frontmatter:{layout:"center",transition:"slide-left",srcSequence:"./pages/why.md"},index:17,start:82,end:90,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
layout: center
transition: slide-left
---

# 为什么要学数值计算实训课？

`,title:"为什么要学数值计算实训课？",level:1,content:"# 为什么要学数值计算实训课？",frontmatter:{layout:"center",transition:"slide-left"},index:4,start:82,end:90},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:mE,meta:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md",slide:{raw:`---
transition: slide-up
layout: full
---

# 熟练工 VS. 专业人士

| 老板分配任务 | 熟练工	| 专业人士 |
| ---- | ---- | ---- |
| 跑Matlab	| 软件跟我没关系	| 出了bug我能调对 |
| 尝试新工具 | 	我没接触过	| 我来看手册 |
| 改进工具	| 工具会用不就行吗	| 我来分析瓶颈 |
| 实现新需求 |	我需要详细设计文档	| 我规划一下 |

<br/>

熟练工: 可以很好地完成指定任务, 保证项目流程往前推进

专业人士: 具备独立解决未知问题的专业素质

* 专业技能: 正确理解专业知识点, 并具备全局系统观
* 专业方法: 知道如何找到相关的代码/资料/工具
* 专业世界观: 明白做什么事情是正确/高效/科学的, 如何分解复杂任务
`,title:"熟练工 VS. 专业人士",level:1,content:`# 熟练工 VS. 专业人士

| 老板分配任务 | 熟练工	| 专业人士 |
| ---- | ---- | ---- |
| 跑Matlab	| 软件跟我没关系	| 出了bug我能调对 |
| 尝试新工具 | 	我没接触过	| 我来看手册 |
| 改进工具	| 工具会用不就行吗	| 我来分析瓶颈 |
| 实现新需求 |	我需要详细设计文档	| 我规划一下 |

<br/>

熟练工: 可以很好地完成指定任务, 保证项目流程往前推进

专业人士: 具备独立解决未知问题的专业素质

* 专业技能: 正确理解专业知识点, 并具备全局系统观
* 专业方法: 知道如何找到相关的代码/资料/工具
* 专业世界观: 明白做什么事情是正确/高效/科学的, 如何分解复杂任务`,frontmatter:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"},index:18,start:90,end:114,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
transition: slide-up
layout: full
---

# 熟练工 VS. 专业人士

| 老板分配任务 | 熟练工	| 专业人士 |
| ---- | ---- | ---- |
| 跑Matlab	| 软件跟我没关系	| 出了bug我能调对 |
| 尝试新工具 | 	我没接触过	| 我来看手册 |
| 改进工具	| 工具会用不就行吗	| 我来分析瓶颈 |
| 实现新需求 |	我需要详细设计文档	| 我规划一下 |

<br/>

熟练工: 可以很好地完成指定任务, 保证项目流程往前推进

专业人士: 具备独立解决未知问题的专业素质

* 专业技能: 正确理解专业知识点, 并具备全局系统观
* 专业方法: 知道如何找到相关的代码/资料/工具
* 专业世界观: 明白做什么事情是正确/高效/科学的, 如何分解复杂任务
`,title:"熟练工 VS. 专业人士",level:1,content:`# 熟练工 VS. 专业人士

| 老板分配任务 | 熟练工	| 专业人士 |
| ---- | ---- | ---- |
| 跑Matlab	| 软件跟我没关系	| 出了bug我能调对 |
| 尝试新工具 | 	我没接触过	| 我来看手册 |
| 改进工具	| 工具会用不就行吗	| 我来分析瓶颈 |
| 实现新需求 |	我需要详细设计文档	| 我规划一下 |

<br/>

熟练工: 可以很好地完成指定任务, 保证项目流程往前推进

专业人士: 具备独立解决未知问题的专业素质

* 专业技能: 正确理解专业知识点, 并具备全局系统观
* 专业方法: 知道如何找到相关的代码/资料/工具
* 专业世界观: 明白做什么事情是正确/高效/科学的, 如何分解复杂任务`,frontmatter:{transition:"slide-up",layout:"full"},index:5,start:90,end:114},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:wE,meta:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md",slide:{raw:`---
transition: slide-up
layout: full
---

# 专业训练


|基本原理|做事方案|	正确性风险|代表例子|
| ---- | ---- | ---- | ---- |
|阐述|	明确	|基本正确|	高中物理实验|
|阐述|	明确	|**可能出错**|	程序设计作业, 培训班|
|阐述|	**需要思考**|	基本正确|	数学/算法题|
|阐述	|**需要思考**|	**可能出错**|	未来的数值分析实训课, “一生一芯”|
|**需要探索**|	**需要思考**|	**可能出错**|	业界和科研的真实问题|

把知识包装成 “新问题”呈现给大家

* 通过试错深入理解问题:
    - 我想要x, 那么就需要做y, 这是因为z
    - 而做u是不行的, 它会因为v而导致w
* 解决上百个 “新问题”, 锻炼出专业世界观



`,title:"专业训练",level:1,content:`# 专业训练


|基本原理|做事方案|	正确性风险|代表例子|
| ---- | ---- | ---- | ---- |
|阐述|	明确	|基本正确|	高中物理实验|
|阐述|	明确	|**可能出错**|	程序设计作业, 培训班|
|阐述|	**需要思考**|	基本正确|	数学/算法题|
|阐述	|**需要思考**|	**可能出错**|	未来的数值分析实训课, “一生一芯”|
|**需要探索**|	**需要思考**|	**可能出错**|	业界和科研的真实问题|

把知识包装成 “新问题”呈现给大家

* 通过试错深入理解问题:
    - 我想要x, 那么就需要做y, 这是因为z
    - 而做u是不行的, 它会因为v而导致w
* 解决上百个 “新问题”, 锻炼出专业世界观`,frontmatter:{transition:"slide-up",layout:"full",srcSequence:"./pages/why.md"},index:19,start:114,end:140,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",raw:`---
transition: slide-up
layout: full
---

# 专业训练


|基本原理|做事方案|	正确性风险|代表例子|
| ---- | ---- | ---- | ---- |
|阐述|	明确	|基本正确|	高中物理实验|
|阐述|	明确	|**可能出错**|	程序设计作业, 培训班|
|阐述|	**需要思考**|	基本正确|	数学/算法题|
|阐述	|**需要思考**|	**可能出错**|	未来的数值分析实训课, “一生一芯”|
|**需要探索**|	**需要思考**|	**可能出错**|	业界和科研的真实问题|

把知识包装成 “新问题”呈现给大家

* 通过试错深入理解问题:
    - 我想要x, 那么就需要做y, 这是因为z
    - 而做u是不行的, 它会因为v而导致w
* 解决上百个 “新问题”, 锻炼出专业世界观



`,title:"专业训练",level:1,content:`# 专业训练


|基本原理|做事方案|	正确性风险|代表例子|
| ---- | ---- | ---- | ---- |
|阐述|	明确	|基本正确|	高中物理实验|
|阐述|	明确	|**可能出错**|	程序设计作业, 培训班|
|阐述|	**需要思考**|	基本正确|	数学/算法题|
|阐述	|**需要思考**|	**可能出错**|	未来的数值分析实训课, “一生一芯”|
|**需要探索**|	**需要思考**|	**可能出错**|	业界和科研的真实问题|

把知识包装成 “新问题”呈现给大家

* 通过试错深入理解问题:
    - 我想要x, 那么就需要做y, 这是因为z
    - 而做u是不行的, 它会因为v而导致w
* 解决上百个 “新问题”, 锻炼出专业世界观`,frontmatter:{transition:"slide-up",layout:"full"},index:6,start:114,end:140},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/why.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:SE,meta:{layout:"center",title:"(How)怎么学“任何东西”？",srcSequence:"./pages/how.md",slide:{raw:null,title:"(How)怎么学“任何东西”？",level:1,content:"# (How)怎么学“任何东西”？",frontmatter:{layout:"center",title:"(How)怎么学“任何东西”？",srcSequence:"./pages/how.md"},index:20,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: center
---

# (How)怎么学“任何东西”？
`,title:"(How)怎么学“任何东西”？",level:1,content:"# (How)怎么学“任何东西”？",frontmatter:{layout:"center",title:"(How)怎么学“任何东西”？"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/how.md
---
`,content:"",frontmatter:{},index:3,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:ME,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 数值计算实训课绝大部分同学来说并不轻松

不仅需要学习很多新知识, 在新环境中使用新工具

还需要锻炼出**独立解决问题的意识和能力**

更重要的是, **完成观念和心态上的转变**

<v-clicks>

* 我们与传统的课程大作业不同
   * 需要自学很多东西
   * 需要自学LaTeX，提交LaTeX报告（**一个数学系的学生不会LaTeX应该感到羞耻**）

<br/>

* 你遇到的所有问题(除了框架代码自身错误), 都是在锻炼你的能力
    * 老师助教不会手把手帮你解决所有问题
    * 独立解决这些问题, 是对你最大的训练

</v-clicks>
`,title:"数值计算实训课绝大部分同学来说并不轻松",level:1,content:`# 数值计算实训课绝大部分同学来说并不轻松

不仅需要学习很多新知识, 在新环境中使用新工具

还需要锻炼出**独立解决问题的意识和能力**

更重要的是, **完成观念和心态上的转变**

<v-clicks>

* 我们与传统的课程大作业不同
   * 需要自学很多东西
   * 需要自学LaTeX，提交LaTeX报告（**一个数学系的学生不会LaTeX应该感到羞耻**）

<br/>

* 你遇到的所有问题(除了框架代码自身错误), 都是在锻炼你的能力
    * 老师助教不会手把手帮你解决所有问题
    * 独立解决这些问题, 是对你最大的训练

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:21,start:6,end:33,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 数值计算实训课绝大部分同学来说并不轻松

不仅需要学习很多新知识, 在新环境中使用新工具

还需要锻炼出**独立解决问题的意识和能力**

更重要的是, **完成观念和心态上的转变**

<v-clicks>

* 我们与传统的课程大作业不同
   * 需要自学很多东西
   * 需要自学LaTeX，提交LaTeX报告（**一个数学系的学生不会LaTeX应该感到羞耻**）

<br/>

* 你遇到的所有问题(除了框架代码自身错误), 都是在锻炼你的能力
    * 老师助教不会手把手帮你解决所有问题
    * 独立解决这些问题, 是对你最大的训练

</v-clicks>
`,title:"数值计算实训课绝大部分同学来说并不轻松",level:1,content:`# 数值计算实训课绝大部分同学来说并不轻松

不仅需要学习很多新知识, 在新环境中使用新工具

还需要锻炼出**独立解决问题的意识和能力**

更重要的是, **完成观念和心态上的转变**

<v-clicks>

* 我们与传统的课程大作业不同
   * 需要自学很多东西
   * 需要自学LaTeX，提交LaTeX报告（**一个数学系的学生不会LaTeX应该感到羞耻**）

<br/>

* 你遇到的所有问题(除了框架代码自身错误), 都是在锻炼你的能力
    * 老师助教不会手把手帮你解决所有问题
    * 独立解决这些问题, 是对你最大的训练

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up"},index:1,start:6,end:33},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:UE,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 专业世界观1 - 学术诚信

<b text-sky font-900> [MIT对学术诚信的诠释](https://integrity.mit.edu/) </b>,   尤其是<b text-sky font-900>[关于写代码的学术诚信](http://integrity.mit.edu/handbook/writing-code) </b>

<v-clicks>

* <b text-orange>独立完成学习任务</b>
* <b text-orange>在允许的范围内参考相关资料</b>
* <b text-orange>不参考别人的代码, 不分享自己的代码</b>

</v-clicks>

<v-click>

意义: 让你接受预期的训练, 锻炼出预期的能力

**这是需要大家发自内心去认可和执行的**: 我们很难约束大家

</v-click>

<v-click>

“凭什么不能参考别人的代码? 我都看懂了啊!”/“能抄对也是本事”

* <b text-red>“看懂”和 “自己独立完成”的效果是天差地别的</b>
    * 你表面上看到了做y能得到x, 但不知道原因z, 更不知道试错的uvw
    * 你收获了肤浅的理解, 让你重做一遍, 很可能还是搞不定

</v-click>
`,title:"专业世界观1 - 学术诚信",level:1,content:`# 专业世界观1 - 学术诚信

<b text-sky font-900> [MIT对学术诚信的诠释](https://integrity.mit.edu/) </b>,   尤其是<b text-sky font-900>[关于写代码的学术诚信](http://integrity.mit.edu/handbook/writing-code) </b>

<v-clicks>

* <b text-orange>独立完成学习任务</b>
* <b text-orange>在允许的范围内参考相关资料</b>
* <b text-orange>不参考别人的代码, 不分享自己的代码</b>

</v-clicks>

<v-click>

意义: 让你接受预期的训练, 锻炼出预期的能力

**这是需要大家发自内心去认可和执行的**: 我们很难约束大家

</v-click>

<v-click>

“凭什么不能参考别人的代码? 我都看懂了啊!”/“能抄对也是本事”

* <b text-red>“看懂”和 “自己独立完成”的效果是天差地别的</b>
    * 你表面上看到了做y能得到x, 但不知道原因z, 更不知道试错的uvw
    * 你收获了肤浅的理解, 让你重做一遍, 很可能还是搞不定

</v-click>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:22,start:33,end:68,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 专业世界观1 - 学术诚信

<b text-sky font-900> [MIT对学术诚信的诠释](https://integrity.mit.edu/) </b>,   尤其是<b text-sky font-900>[关于写代码的学术诚信](http://integrity.mit.edu/handbook/writing-code) </b>

<v-clicks>

* <b text-orange>独立完成学习任务</b>
* <b text-orange>在允许的范围内参考相关资料</b>
* <b text-orange>不参考别人的代码, 不分享自己的代码</b>

</v-clicks>

<v-click>

意义: 让你接受预期的训练, 锻炼出预期的能力

**这是需要大家发自内心去认可和执行的**: 我们很难约束大家

</v-click>

<v-click>

“凭什么不能参考别人的代码? 我都看懂了啊!”/“能抄对也是本事”

* <b text-red>“看懂”和 “自己独立完成”的效果是天差地别的</b>
    * 你表面上看到了做y能得到x, 但不知道原因z, 更不知道试错的uvw
    * 你收获了肤浅的理解, 让你重做一遍, 很可能还是搞不定

</v-click>
`,title:"专业世界观1 - 学术诚信",level:1,content:`# 专业世界观1 - 学术诚信

<b text-sky font-900> [MIT对学术诚信的诠释](https://integrity.mit.edu/) </b>,   尤其是<b text-sky font-900>[关于写代码的学术诚信](http://integrity.mit.edu/handbook/writing-code) </b>

<v-clicks>

* <b text-orange>独立完成学习任务</b>
* <b text-orange>在允许的范围内参考相关资料</b>
* <b text-orange>不参考别人的代码, 不分享自己的代码</b>

</v-clicks>

<v-click>

意义: 让你接受预期的训练, 锻炼出预期的能力

**这是需要大家发自内心去认可和执行的**: 我们很难约束大家

</v-click>

<v-click>

“凭什么不能参考别人的代码? 我都看懂了啊!”/“能抄对也是本事”

* <b text-red>“看懂”和 “自己独立完成”的效果是天差地别的</b>
    * 你表面上看到了做y能得到x, 但不知道原因z, 更不知道试错的uvw
    * 你收获了肤浅的理解, 让你重做一遍, 很可能还是搞不定

</v-click>`,frontmatter:{layout:"full",transition:"slide-up"},index:2,start:33,end:68},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:nP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 专业世界观2 - 大佬三连

<v-clicks>

<b text-orange font-900> STFW - Search The Friendly Web </b>

* 只要我用的工具是大众的, 我几乎不可能是世界上第一个遇到问题的人
* 网上一定有人遇到过相同/类似问题, 我应该搜一下看看他们怎么解决

<br/>

<b text-orange font-900> RTFM - Read The Friendly Manual </b>

* 只要我用的工具是大众的, 应该有手册记录这个工具的所有细节
* 如果我想了解它的某个问题, 我应该去搜索手册的描述

<br/>

<b text-orange font-900> RTFSC - Read The Friendly Source Code </b>

* 只要我获得了项目代码, 理论上我就可以知晓它的一切行为
* 如果我想了解它具体是如何工作的, 我应该去读一下(关键)代码

<br/>

如果你在提问时收到了这些回复, 其背后的含义是:

* **你想要的答案很容易找到, 你很应该自己去获取**
* **相比于我直接告诉你答案, 你自己获取答案能学到更多**

</v-clicks>
`,title:"专业世界观2 - 大佬三连",level:1,content:`# 专业世界观2 - 大佬三连

<v-clicks>

<b text-orange font-900> STFW - Search The Friendly Web </b>

* 只要我用的工具是大众的, 我几乎不可能是世界上第一个遇到问题的人
* 网上一定有人遇到过相同/类似问题, 我应该搜一下看看他们怎么解决

<br/>

<b text-orange font-900> RTFM - Read The Friendly Manual </b>

* 只要我用的工具是大众的, 应该有手册记录这个工具的所有细节
* 如果我想了解它的某个问题, 我应该去搜索手册的描述

<br/>

<b text-orange font-900> RTFSC - Read The Friendly Source Code </b>

* 只要我获得了项目代码, 理论上我就可以知晓它的一切行为
* 如果我想了解它具体是如何工作的, 我应该去读一下(关键)代码

<br/>

如果你在提问时收到了这些回复, 其背后的含义是:

* **你想要的答案很容易找到, 你很应该自己去获取**
* **相比于我直接告诉你答案, 你自己获取答案能学到更多**

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:23,start:68,end:105,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 专业世界观2 - 大佬三连

<v-clicks>

<b text-orange font-900> STFW - Search The Friendly Web </b>

* 只要我用的工具是大众的, 我几乎不可能是世界上第一个遇到问题的人
* 网上一定有人遇到过相同/类似问题, 我应该搜一下看看他们怎么解决

<br/>

<b text-orange font-900> RTFM - Read The Friendly Manual </b>

* 只要我用的工具是大众的, 应该有手册记录这个工具的所有细节
* 如果我想了解它的某个问题, 我应该去搜索手册的描述

<br/>

<b text-orange font-900> RTFSC - Read The Friendly Source Code </b>

* 只要我获得了项目代码, 理论上我就可以知晓它的一切行为
* 如果我想了解它具体是如何工作的, 我应该去读一下(关键)代码

<br/>

如果你在提问时收到了这些回复, 其背后的含义是:

* **你想要的答案很容易找到, 你很应该自己去获取**
* **相比于我直接告诉你答案, 你自己获取答案能学到更多**

</v-clicks>
`,title:"专业世界观2 - 大佬三连",level:1,content:`# 专业世界观2 - 大佬三连

<v-clicks>

<b text-orange font-900> STFW - Search The Friendly Web </b>

* 只要我用的工具是大众的, 我几乎不可能是世界上第一个遇到问题的人
* 网上一定有人遇到过相同/类似问题, 我应该搜一下看看他们怎么解决

<br/>

<b text-orange font-900> RTFM - Read The Friendly Manual </b>

* 只要我用的工具是大众的, 应该有手册记录这个工具的所有细节
* 如果我想了解它的某个问题, 我应该去搜索手册的描述

<br/>

<b text-orange font-900> RTFSC - Read The Friendly Source Code </b>

* 只要我获得了项目代码, 理论上我就可以知晓它的一切行为
* 如果我想了解它具体是如何工作的, 我应该去读一下(关键)代码

<br/>

如果你在提问时收到了这些回复, 其背后的含义是:

* **你想要的答案很容易找到, 你很应该自己去获取**
* **相比于我直接告诉你答案, 你自己获取答案能学到更多**

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up"},index:3,start:68,end:105},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:fP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 专业世界观3 - 科学提问
《[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)》/《[别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)》

* 提问能反映出你的学习态度: 主动尝试 vs. 被动依赖

**不是所有问题都值得问**

* 你以为自己热爱学习? 不, 别人只觉得你是伸手党

开源社区中的一个真实案例:

* 新手的提问: 两个不同的安装包有什么区别? <b text-sky font-900>我是新手</b>.
* 开发者的回答: **自己上网找答案**. 在开源社区中**不应该随便问这种配置问题**, 除非你有明确的证据证明代码或者文档有缺陷.
`,title:"专业世界观3 - 科学提问",level:1,content:`# 专业世界观3 - 科学提问
《[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)》/《[别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)》

* 提问能反映出你的学习态度: 主动尝试 vs. 被动依赖

**不是所有问题都值得问**

* 你以为自己热爱学习? 不, 别人只觉得你是伸手党

开源社区中的一个真实案例:

* 新手的提问: 两个不同的安装包有什么区别? <b text-sky font-900>我是新手</b>.
* 开发者的回答: **自己上网找答案**. 在开源社区中**不应该随便问这种配置问题**, 除非你有明确的证据证明代码或者文档有缺陷.`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:24,start:105,end:124,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 专业世界观3 - 科学提问
《[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)》/《[别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)》

* 提问能反映出你的学习态度: 主动尝试 vs. 被动依赖

**不是所有问题都值得问**

* 你以为自己热爱学习? 不, 别人只觉得你是伸手党

开源社区中的一个真实案例:

* 新手的提问: 两个不同的安装包有什么区别? <b text-sky font-900>我是新手</b>.
* 开发者的回答: **自己上网找答案**. 在开源社区中**不应该随便问这种配置问题**, 除非你有明确的证据证明代码或者文档有缺陷.
`,title:"专业世界观3 - 科学提问",level:1,content:`# 专业世界观3 - 科学提问
《[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)》/《[别像弱智一样提问](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)》

* 提问能反映出你的学习态度: 主动尝试 vs. 被动依赖

**不是所有问题都值得问**

* 你以为自己热爱学习? 不, 别人只觉得你是伸手党

开源社区中的一个真实案例:

* 新手的提问: 两个不同的安装包有什么区别? <b text-sky font-900>我是新手</b>.
* 开发者的回答: **自己上网找答案**. 在开源社区中**不应该随便问这种配置问题**, 除非你有明确的证据证明代码或者文档有缺陷.`,frontmatter:{layout:"full",transition:"slide-up"},index:4,start:105,end:124},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:_P,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 鼓励的提问 vs. 不应该的提问

* 鼓励的提问
    * 心理辅导, 学习困惑等非具体技术问题
        * 可以私戳老师助教, 时间充裕的话还可以线上聊聊
    * bug report: 要有证据, 当一名专业的社区contributor
    * 经过思考的高质量问题
    * 属于训练环节, 但经历过合理尝试还无法解决的问题: [提问模板](https://ysyx.oscc.cc/docs/misc/ask.html)

<br>

* 不应该的提问 (背后含义: **你应该接受训练**)
    * 没有看出合理尝试和思考的提问
        * 可以不知道怎么尝试和思考, 但不代表可以跳过训练获得答案
        * 接受训练: 方法 -> 看讲义总结归纳, 细节 -> RTFM/RTFSC
    * 自己动手试试就能得到答案的提问

`,title:"鼓励的提问 vs. 不应该的提问",level:1,content:`# 鼓励的提问 vs. 不应该的提问

* 鼓励的提问
    * 心理辅导, 学习困惑等非具体技术问题
        * 可以私戳老师助教, 时间充裕的话还可以线上聊聊
    * bug report: 要有证据, 当一名专业的社区contributor
    * 经过思考的高质量问题
    * 属于训练环节, 但经历过合理尝试还无法解决的问题: [提问模板](https://ysyx.oscc.cc/docs/misc/ask.html)

<br>

* 不应该的提问 (背后含义: **你应该接受训练**)
    * 没有看出合理尝试和思考的提问
        * 可以不知道怎么尝试和思考, 但不代表可以跳过训练获得答案
        * 接受训练: 方法 -> 看讲义总结归纳, 细节 -> RTFM/RTFSC
    * 自己动手试试就能得到答案的提问`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:25,start:124,end:147,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 鼓励的提问 vs. 不应该的提问

* 鼓励的提问
    * 心理辅导, 学习困惑等非具体技术问题
        * 可以私戳老师助教, 时间充裕的话还可以线上聊聊
    * bug report: 要有证据, 当一名专业的社区contributor
    * 经过思考的高质量问题
    * 属于训练环节, 但经历过合理尝试还无法解决的问题: [提问模板](https://ysyx.oscc.cc/docs/misc/ask.html)

<br>

* 不应该的提问 (背后含义: **你应该接受训练**)
    * 没有看出合理尝试和思考的提问
        * 可以不知道怎么尝试和思考, 但不代表可以跳过训练获得答案
        * 接受训练: 方法 -> 看讲义总结归纳, 细节 -> RTFM/RTFSC
    * 自己动手试试就能得到答案的提问

`,title:"鼓励的提问 vs. 不应该的提问",level:1,content:`# 鼓励的提问 vs. 不应该的提问

* 鼓励的提问
    * 心理辅导, 学习困惑等非具体技术问题
        * 可以私戳老师助教, 时间充裕的话还可以线上聊聊
    * bug report: 要有证据, 当一名专业的社区contributor
    * 经过思考的高质量问题
    * 属于训练环节, 但经历过合理尝试还无法解决的问题: [提问模板](https://ysyx.oscc.cc/docs/misc/ask.html)

<br>

* 不应该的提问 (背后含义: **你应该接受训练**)
    * 没有看出合理尝试和思考的提问
        * 可以不知道怎么尝试和思考, 但不代表可以跳过训练获得答案
        * 接受训练: 方法 -> 看讲义总结归纳, 细节 -> RTFM/RTFSC
    * 自己动手试试就能得到答案的提问`,frontmatter:{layout:"full",transition:"slide-up"},index:5,start:124,end:147},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:kP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 虚假的帮助 vs. 真实的帮助

虚假的帮助: 面向结果, 解决当下问题优先

真实的帮助: 面向能力, 领悟学习方法优先

**本质区别: 如果将来不再提供帮助, 学生能否独立解决类似的问题?**

真实案例: 学生A询问某报错信息

* 分析: 根据提问内容, 学生A只进行了很少的尝试, 没有其他想法
* 虚假的帮助: 学生B指出可能是代码里面有些模块有bug, 提示学生A去看看
    * 学生A的收获是 “报错信息->something error”的表面因果关系, 难以深入理解和记忆, 并未学会真正思路和方法, 同时也错过一次锻炼机会
* 真实的帮助: 引导学生A学会对bug进行深入的分析和定位
    * **这比虚假的帮助困难得多, 大部分学生并不知道如何引导**
`,title:"虚假的帮助 vs. 真实的帮助",level:1,content:`# 虚假的帮助 vs. 真实的帮助

虚假的帮助: 面向结果, 解决当下问题优先

真实的帮助: 面向能力, 领悟学习方法优先

**本质区别: 如果将来不再提供帮助, 学生能否独立解决类似的问题?**

真实案例: 学生A询问某报错信息

* 分析: 根据提问内容, 学生A只进行了很少的尝试, 没有其他想法
* 虚假的帮助: 学生B指出可能是代码里面有些模块有bug, 提示学生A去看看
    * 学生A的收获是 “报错信息->something error”的表面因果关系, 难以深入理解和记忆, 并未学会真正思路和方法, 同时也错过一次锻炼机会
* 真实的帮助: 引导学生A学会对bug进行深入的分析和定位
    * **这比虚假的帮助困难得多, 大部分学生并不知道如何引导**`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:26,start:147,end:168,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 虚假的帮助 vs. 真实的帮助

虚假的帮助: 面向结果, 解决当下问题优先

真实的帮助: 面向能力, 领悟学习方法优先

**本质区别: 如果将来不再提供帮助, 学生能否独立解决类似的问题?**

真实案例: 学生A询问某报错信息

* 分析: 根据提问内容, 学生A只进行了很少的尝试, 没有其他想法
* 虚假的帮助: 学生B指出可能是代码里面有些模块有bug, 提示学生A去看看
    * 学生A的收获是 “报错信息->something error”的表面因果关系, 难以深入理解和记忆, 并未学会真正思路和方法, 同时也错过一次锻炼机会
* 真实的帮助: 引导学生A学会对bug进行深入的分析和定位
    * **这比虚假的帮助困难得多, 大部分学生并不知道如何引导**
`,title:"虚假的帮助 vs. 真实的帮助",level:1,content:`# 虚假的帮助 vs. 真实的帮助

虚假的帮助: 面向结果, 解决当下问题优先

真实的帮助: 面向能力, 领悟学习方法优先

**本质区别: 如果将来不再提供帮助, 学生能否独立解决类似的问题?**

真实案例: 学生A询问某报错信息

* 分析: 根据提问内容, 学生A只进行了很少的尝试, 没有其他想法
* 虚假的帮助: 学生B指出可能是代码里面有些模块有bug, 提示学生A去看看
    * 学生A的收获是 “报错信息->something error”的表面因果关系, 难以深入理解和记忆, 并未学会真正思路和方法, 同时也错过一次锻炼机会
* 真实的帮助: 引导学生A学会对bug进行深入的分析和定位
    * **这比虚假的帮助困难得多, 大部分学生并不知道如何引导**`,frontmatter:{layout:"full",transition:"slide-up"},index:6,start:147,end:168},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:CP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 任何直接获得答案的做法都是在放弃训练的机会

* 遇到一个总线的bug, 希望同学提供点思路
    * 正确做法: RTFM, 确认自己正确理解细节; RTFSC, 梳理这个bug是如何出现的

* 不知道算法应该放在哪里, 希望助教告知一个好的设计方案
    * 正确做法: 自己尝试不同的方案, 然后总结它们的优劣

* 希望助教/大佬能整理一本攻略手册
    * 正确做法: 自己整理(作为学习成果), 但不要分享出去
        * **这些攻略并不能真正帮助你学习, 而是在剥夺你接受训练的机会**

* 阅读开源项目或者别人的案例
    * 正确做法: 先尽力完成一个满意的设计, 再对比开源项目
        * **缺少试错, 你无法理解 “为什么好, 为什么不好”**

<b text-orange font-900> 躺平容易坚持难, 但如果你能坚持下来, 你就可以得到脱胎换骨的提升</b>
`,title:"任何直接获得答案的做法都是在放弃训练的机会",level:1,content:`# 任何直接获得答案的做法都是在放弃训练的机会

* 遇到一个总线的bug, 希望同学提供点思路
    * 正确做法: RTFM, 确认自己正确理解细节; RTFSC, 梳理这个bug是如何出现的

* 不知道算法应该放在哪里, 希望助教告知一个好的设计方案
    * 正确做法: 自己尝试不同的方案, 然后总结它们的优劣

* 希望助教/大佬能整理一本攻略手册
    * 正确做法: 自己整理(作为学习成果), 但不要分享出去
        * **这些攻略并不能真正帮助你学习, 而是在剥夺你接受训练的机会**

* 阅读开源项目或者别人的案例
    * 正确做法: 先尽力完成一个满意的设计, 再对比开源项目
        * **缺少试错, 你无法理解 “为什么好, 为什么不好”**

<b text-orange font-900> 躺平容易坚持难, 但如果你能坚持下来, 你就可以得到脱胎换骨的提升</b>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:27,start:168,end:191,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 任何直接获得答案的做法都是在放弃训练的机会

* 遇到一个总线的bug, 希望同学提供点思路
    * 正确做法: RTFM, 确认自己正确理解细节; RTFSC, 梳理这个bug是如何出现的

* 不知道算法应该放在哪里, 希望助教告知一个好的设计方案
    * 正确做法: 自己尝试不同的方案, 然后总结它们的优劣

* 希望助教/大佬能整理一本攻略手册
    * 正确做法: 自己整理(作为学习成果), 但不要分享出去
        * **这些攻略并不能真正帮助你学习, 而是在剥夺你接受训练的机会**

* 阅读开源项目或者别人的案例
    * 正确做法: 先尽力完成一个满意的设计, 再对比开源项目
        * **缺少试错, 你无法理解 “为什么好, 为什么不好”**

<b text-orange font-900> 躺平容易坚持难, 但如果你能坚持下来, 你就可以得到脱胎换骨的提升</b>
`,title:"任何直接获得答案的做法都是在放弃训练的机会",level:1,content:`# 任何直接获得答案的做法都是在放弃训练的机会

* 遇到一个总线的bug, 希望同学提供点思路
    * 正确做法: RTFM, 确认自己正确理解细节; RTFSC, 梳理这个bug是如何出现的

* 不知道算法应该放在哪里, 希望助教告知一个好的设计方案
    * 正确做法: 自己尝试不同的方案, 然后总结它们的优劣

* 希望助教/大佬能整理一本攻略手册
    * 正确做法: 自己整理(作为学习成果), 但不要分享出去
        * **这些攻略并不能真正帮助你学习, 而是在剥夺你接受训练的机会**

* 阅读开源项目或者别人的案例
    * 正确做法: 先尽力完成一个满意的设计, 再对比开源项目
        * **缺少试错, 你无法理解 “为什么好, 为什么不好”**

<b text-orange font-900> 躺平容易坚持难, 但如果你能坚持下来, 你就可以得到脱胎换骨的提升</b>`,frontmatter:{layout:"full",transition:"slide-up"},index:7,start:168,end:191},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:RP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# Prerequisistes

信息与计算科学专业学生必须具备的核心素质。

<v-clicks>

1. 是一个合格的计算机用户
    * 会STFW/RTFM自己动手解决问题
    * 不怕学习和使用任何可以提高效率的工具
        * Linux,VS Code,Python,git,...

2. 不怕写代码
    * 能管理一定规模(数千行)的代码
    * 能在出bug时默念“机器永远是对的、我肯定能调试出来的”
        * 然后开始用正确的工具/方法调试

</v-clicks>

`,title:"Prerequisistes",level:1,content:`# Prerequisistes

信息与计算科学专业学生必须具备的核心素质。

<v-clicks>

1. 是一个合格的计算机用户
    * 会STFW/RTFM自己动手解决问题
    * 不怕学习和使用任何可以提高效率的工具
        * Linux,VS Code,Python,git,...

2. 不怕写代码
    * 能管理一定规模(数千行)的代码
    * 能在出bug时默念“机器永远是对的、我肯定能调试出来的”
        * 然后开始用正确的工具/方法调试

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:28,start:191,end:215,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# Prerequisistes

信息与计算科学专业学生必须具备的核心素质。

<v-clicks>

1. 是一个合格的计算机用户
    * 会STFW/RTFM自己动手解决问题
    * 不怕学习和使用任何可以提高效率的工具
        * Linux,VS Code,Python,git,...

2. 不怕写代码
    * 能管理一定规模(数千行)的代码
    * 能在出bug时默念“机器永远是对的、我肯定能调试出来的”
        * 然后开始用正确的工具/方法调试

</v-clicks>

`,title:"Prerequisistes",level:1,content:`# Prerequisistes

信息与计算科学专业学生必须具备的核心素质。

<v-clicks>

1. 是一个合格的计算机用户
    * 会STFW/RTFM自己动手解决问题
    * 不怕学习和使用任何可以提高效率的工具
        * Linux,VS Code,Python,git,...

2. 不怕写代码
    * 能管理一定规模(数千行)的代码
    * 能在出bug时默念“机器永远是对的、我肯定能调试出来的”
        * 然后开始用正确的工具/方法调试

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up"},index:8,start:191,end:215},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:zP,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 成为一名计算机的Power User

<br/>

感到 Linux/PowerShell/Python/git/...很难？

<v-clicks>

1. 没有建立信心、没有理解基本逻辑
    * [计算机科学自学指南](https://suepaper.github.io/math201/docs/notes/cs%E2%80%94roadmap)

<br/>

2. 没有找对材料/没有多问“**能不能再多做点什么**”
    * Baidu v.s. Google/Github/Stackoverflow v.s. ChatGPT

<br/>

3. 没有用对工具(该用VS Code就别用Vim/Emacs)
    * 过了入门阶段，都会好起来

</v-clicks>
`,title:"成为一名计算机的Power User",level:1,content:`# 成为一名计算机的Power User

<br/>

感到 Linux/PowerShell/Python/git/...很难？

<v-clicks>

1. 没有建立信心、没有理解基本逻辑
    * [计算机科学自学指南](https://suepaper.github.io/math201/docs/notes/cs%E2%80%94roadmap)

<br/>

2. 没有找对材料/没有多问“**能不能再多做点什么**”
    * Baidu v.s. Google/Github/Stackoverflow v.s. ChatGPT

<br/>

3. 没有用对工具(该用VS Code就别用Vim/Emacs)
    * 过了入门阶段，都会好起来

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:29,start:215,end:243,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 成为一名计算机的Power User

<br/>

感到 Linux/PowerShell/Python/git/...很难？

<v-clicks>

1. 没有建立信心、没有理解基本逻辑
    * [计算机科学自学指南](https://suepaper.github.io/math201/docs/notes/cs%E2%80%94roadmap)

<br/>

2. 没有找对材料/没有多问“**能不能再多做点什么**”
    * Baidu v.s. Google/Github/Stackoverflow v.s. ChatGPT

<br/>

3. 没有用对工具(该用VS Code就别用Vim/Emacs)
    * 过了入门阶段，都会好起来

</v-clicks>
`,title:"成为一名计算机的Power User",level:1,content:`# 成为一名计算机的Power User

<br/>

感到 Linux/PowerShell/Python/git/...很难？

<v-clicks>

1. 没有建立信心、没有理解基本逻辑
    * [计算机科学自学指南](https://suepaper.github.io/math201/docs/notes/cs%E2%80%94roadmap)

<br/>

2. 没有找对材料/没有多问“**能不能再多做点什么**”
    * Baidu v.s. Google/Github/Stackoverflow v.s. ChatGPT

<br/>

3. 没有用对工具(该用VS Code就别用Vim/Emacs)
    * 过了入门阶段，都会好起来

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up"},index:9,start:215,end:243},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:nO,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 成为一名计算机的Power User

<br/>

<v-clicks>

* 如果一件事很困难，通常是因为没有找到正确的方法。

<br/>

* 这门课程中绝大部分的内容都可以在互联网上找到适当的学习资料。

<br/>

* 在互联网/搜索引擎普及的时代，只要掌握 “提出问题” 的能力，就能极快地提升自己。

<br/>

* 同时，这可能将在 AI 时代被颠覆——AI 可能会猜测你的目的，并且告诉你 “应该去做什么”。

</v-clicks>
`,title:"成为一名计算机的Power User",level:1,content:`# 成为一名计算机的Power User

<br/>

<v-clicks>

* 如果一件事很困难，通常是因为没有找到正确的方法。

<br/>

* 这门课程中绝大部分的内容都可以在互联网上找到适当的学习资料。

<br/>

* 在互联网/搜索引擎普及的时代，只要掌握 “提出问题” 的能力，就能极快地提升自己。

<br/>

* 同时，这可能将在 AI 时代被颠覆——AI 可能会猜测你的目的，并且告诉你 “应该去做什么”。

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:30,start:243,end:270,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 成为一名计算机的Power User

<br/>

<v-clicks>

* 如果一件事很困难，通常是因为没有找到正确的方法。

<br/>

* 这门课程中绝大部分的内容都可以在互联网上找到适当的学习资料。

<br/>

* 在互联网/搜索引擎普及的时代，只要掌握 “提出问题” 的能力，就能极快地提升自己。

<br/>

* 同时，这可能将在 AI 时代被颠覆——AI 可能会猜测你的目的，并且告诉你 “应该去做什么”。

</v-clicks>
`,title:"成为一名计算机的Power User",level:1,content:`# 成为一名计算机的Power User

<br/>

<v-clicks>

* 如果一件事很困难，通常是因为没有找到正确的方法。

<br/>

* 这门课程中绝大部分的内容都可以在互联网上找到适当的学习资料。

<br/>

* 在互联网/搜索引擎普及的时代，只要掌握 “提出问题” 的能力，就能极快地提升自己。

<br/>

* 同时，这可能将在 AI 时代被颠覆——AI 可能会猜测你的目的，并且告诉你 “应该去做什么”。

</v-clicks>`,frontmatter:{layout:"full",transition:"slide-up"},index:10,start:243,end:270},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:uO,meta:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md",slide:{raw:`---
layout: full
transition: slide-up
---

# 学会写代码

写代码 == 创造有趣的东西

* 命令行 + 编程语言就是全世界
    * 我们还有sympy, sage, z3, rich,...呢

<br/>
<br/>

<v-click>

* 不要讲语言特性、设计模式、......
    * 写代码就对了；你自然而然就会需要它们的，也就自然而然学会了。

</v-click>`,title:"学会写代码",level:1,content:`# 学会写代码

写代码 == 创造有趣的东西

* 命令行 + 编程语言就是全世界
    * 我们还有sympy, sage, z3, rich,...呢

<br/>
<br/>

<v-click>

* 不要讲语言特性、设计模式、......
    * 写代码就对了；你自然而然就会需要它们的，也就自然而然学会了。

</v-click>`,frontmatter:{layout:"full",transition:"slide-up",srcSequence:"./pages/how.md"},index:31,start:270,end:291,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",raw:`---
layout: full
transition: slide-up
---

# 学会写代码

写代码 == 创造有趣的东西

* 命令行 + 编程语言就是全世界
    * 我们还有sympy, sage, z3, rich,...呢

<br/>
<br/>

<v-click>

* 不要讲语言特性、设计模式、......
    * 写代码就对了；你自然而然就会需要它们的，也就自然而然学会了。

</v-click>`,title:"学会写代码",level:1,content:`# 学会写代码

写代码 == 创造有趣的东西

* 命令行 + 编程语言就是全世界
    * 我们还有sympy, sage, z3, rich,...呢

<br/>
<br/>

<v-click>

* 不要讲语言特性、设计模式、......
    * 写代码就对了；你自然而然就会需要它们的，也就自然而然学会了。

</v-click>`,frontmatter:{layout:"full",transition:"slide-up"},index:11,start:270,end:291},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/how.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:pO,meta:{transition:"fade",layout:"center",title:"课程如何得分？？？",srcSequence:"./pages/other.md",slide:{raw:null,title:"课程如何得分？？？",level:1,content:"# 课程如何得分？？？",frontmatter:{transition:"fade",layout:"center",title:"课程如何得分？？？",srcSequence:"./pages/other.md"},index:32,start:0,end:8,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",raw:`---
transition: fade
layout: center
---

# 课程如何得分？？？

`,title:"课程如何得分？？？",level:1,content:"# 课程如何得分？？？",frontmatter:{transition:"fade",layout:"center",title:"课程如何得分？？？"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/other.md
---
`,content:"",frontmatter:{},index:4,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:wO,meta:{layout:"full",srcSequence:"./pages/other.md",slide:{raw:`---
layout: full
---

# 用心写作业

**保证用心写作业的人都能拿到付出心血应得的分数**

作业和考试是两个性质的
* 作业的主要任务不是考核，而是做为一种训练。
* 期末考试是有时间限制的，需要在有限时间内检测出一个人的水平。

数值分析课的目的是培养大家的问题求解能力，而“问题求解”能力的提升，势必需要对思维有一定程度的考验和挑战，尽量做出一些思维上的创新，克服一定的非平凡性 (nontriviality) 才可以。

* 大家还是不要老是觉得，所有的任务都应该是可以routinely完成的。
    * **这尤其在AI已经大行其道的今天，是一种不可取的态度了。**

* 大家应该至少习惯于面对一些非平凡性和思维挑战。
    * 大家可以去关注一下那些世界一流大学的课程，平时的作业大概是什么水平。
`,title:"用心写作业",level:1,content:`# 用心写作业

**保证用心写作业的人都能拿到付出心血应得的分数**

作业和考试是两个性质的
* 作业的主要任务不是考核，而是做为一种训练。
* 期末考试是有时间限制的，需要在有限时间内检测出一个人的水平。

数值分析课的目的是培养大家的问题求解能力，而“问题求解”能力的提升，势必需要对思维有一定程度的考验和挑战，尽量做出一些思维上的创新，克服一定的非平凡性 (nontriviality) 才可以。

* 大家还是不要老是觉得，所有的任务都应该是可以routinely完成的。
    * **这尤其在AI已经大行其道的今天，是一种不可取的态度了。**

* 大家应该至少习惯于面对一些非平凡性和思维挑战。
    * 大家可以去关注一下那些世界一流大学的课程，平时的作业大概是什么水平。`,frontmatter:{layout:"full",srcSequence:"./pages/other.md"},index:33,start:8,end:28,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",raw:`---
layout: full
---

# 用心写作业

**保证用心写作业的人都能拿到付出心血应得的分数**

作业和考试是两个性质的
* 作业的主要任务不是考核，而是做为一种训练。
* 期末考试是有时间限制的，需要在有限时间内检测出一个人的水平。

数值分析课的目的是培养大家的问题求解能力，而“问题求解”能力的提升，势必需要对思维有一定程度的考验和挑战，尽量做出一些思维上的创新，克服一定的非平凡性 (nontriviality) 才可以。

* 大家还是不要老是觉得，所有的任务都应该是可以routinely完成的。
    * **这尤其在AI已经大行其道的今天，是一种不可取的态度了。**

* 大家应该至少习惯于面对一些非平凡性和思维挑战。
    * 大家可以去关注一下那些世界一流大学的课程，平时的作业大概是什么水平。
`,title:"用心写作业",level:1,content:`# 用心写作业

**保证用心写作业的人都能拿到付出心血应得的分数**

作业和考试是两个性质的
* 作业的主要任务不是考核，而是做为一种训练。
* 期末考试是有时间限制的，需要在有限时间内检测出一个人的水平。

数值分析课的目的是培养大家的问题求解能力，而“问题求解”能力的提升，势必需要对思维有一定程度的考验和挑战，尽量做出一些思维上的创新，克服一定的非平凡性 (nontriviality) 才可以。

* 大家还是不要老是觉得，所有的任务都应该是可以routinely完成的。
    * **这尤其在AI已经大行其道的今天，是一种不可取的态度了。**

* 大家应该至少习惯于面对一些非平凡性和思维挑战。
    * 大家可以去关注一下那些世界一流大学的课程，平时的作业大概是什么水平。`,frontmatter:{layout:"full"},index:1,start:8,end:28},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:TO,meta:{layout:"full",srcSequence:"./pages/other.md",slide:{raw:`---
layout: full
---

# 关于课改

Matlab 版本已经过时，不符合现代的需求。另外 Matlab 可能面临卡脖子，以后大家可能用不了 Matlab。（关于盗版软件，我们不提倡盗版软件，尊重开发者的劳动。

我们能保证的：

* 这门课程是助教和老师精心设计的。
    * 大家可以看看我们课程网站的git提交的历史，大家就可以看到我们整个新课改团队认真工作到多晚。
    * 课程资料选取和设计是课程非常重要的环节，也是非常考验我们整个团队的积累和认真程度。

我们不希望的：

* 这门课是师生之间博弈的结果，你好我好大家好，最后反而让教育质量打了折扣。
    * 违背开设这门课以及大家来读大学的初衷。
`,title:"关于课改",level:1,content:`# 关于课改

Matlab 版本已经过时，不符合现代的需求。另外 Matlab 可能面临卡脖子，以后大家可能用不了 Matlab。（关于盗版软件，我们不提倡盗版软件，尊重开发者的劳动。

我们能保证的：

* 这门课程是助教和老师精心设计的。
    * 大家可以看看我们课程网站的git提交的历史，大家就可以看到我们整个新课改团队认真工作到多晚。
    * 课程资料选取和设计是课程非常重要的环节，也是非常考验我们整个团队的积累和认真程度。

我们不希望的：

* 这门课是师生之间博弈的结果，你好我好大家好，最后反而让教育质量打了折扣。
    * 违背开设这门课以及大家来读大学的初衷。`,frontmatter:{layout:"full",srcSequence:"./pages/other.md"},index:34,start:28,end:47,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",raw:`---
layout: full
---

# 关于课改

Matlab 版本已经过时，不符合现代的需求。另外 Matlab 可能面临卡脖子，以后大家可能用不了 Matlab。（关于盗版软件，我们不提倡盗版软件，尊重开发者的劳动。

我们能保证的：

* 这门课程是助教和老师精心设计的。
    * 大家可以看看我们课程网站的git提交的历史，大家就可以看到我们整个新课改团队认真工作到多晚。
    * 课程资料选取和设计是课程非常重要的环节，也是非常考验我们整个团队的积累和认真程度。

我们不希望的：

* 这门课是师生之间博弈的结果，你好我好大家好，最后反而让教育质量打了折扣。
    * 违背开设这门课以及大家来读大学的初衷。
`,title:"关于课改",level:1,content:`# 关于课改

Matlab 版本已经过时，不符合现代的需求。另外 Matlab 可能面临卡脖子，以后大家可能用不了 Matlab。（关于盗版软件，我们不提倡盗版软件，尊重开发者的劳动。

我们能保证的：

* 这门课程是助教和老师精心设计的。
    * 大家可以看看我们课程网站的git提交的历史，大家就可以看到我们整个新课改团队认真工作到多晚。
    * 课程资料选取和设计是课程非常重要的环节，也是非常考验我们整个团队的积累和认真程度。

我们不希望的：

* 这门课是师生之间博弈的结果，你好我好大家好，最后反而让教育质量打了折扣。
    * 违背开设这门课以及大家来读大学的初衷。`,frontmatter:{layout:"full"},index:2,start:28,end:47},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:LO,meta:{layout:"full",srcSequence:"./pages/other.md",slide:{raw:`---
layout: full
---

# 关于Office Hour

正如著名的数学家和名师Polya在他的《how to solveit》一书中所说，对于学生的帮助与提示，最理想的状态，应是在其能“刚好”“独立”解决问题的前提下，提供“as little aspossible”的帮助一这样学生的收获与成长才是最大的。

* 每个人的具体情况是不同的，尤其在一门课刚开始的时候，能够接受的“阈值”也不一样的。
* 如果有同学感觉遇到了障碍，在变得焦虑和消极之前，不妨先尝试更加积极地来office hours寻求帮助。
* 如何正确寻求帮助也是能力的一部分。
`,title:"关于Office Hour",level:1,content:`# 关于Office Hour

正如著名的数学家和名师Polya在他的《how to solveit》一书中所说，对于学生的帮助与提示，最理想的状态，应是在其能“刚好”“独立”解决问题的前提下，提供“as little aspossible”的帮助一这样学生的收获与成长才是最大的。

* 每个人的具体情况是不同的，尤其在一门课刚开始的时候，能够接受的“阈值”也不一样的。
* 如果有同学感觉遇到了障碍，在变得焦虑和消极之前，不妨先尝试更加积极地来office hours寻求帮助。
* 如何正确寻求帮助也是能力的一部分。`,frontmatter:{layout:"full",srcSequence:"./pages/other.md"},index:35,start:47,end:59,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",raw:`---
layout: full
---

# 关于Office Hour

正如著名的数学家和名师Polya在他的《how to solveit》一书中所说，对于学生的帮助与提示，最理想的状态，应是在其能“刚好”“独立”解决问题的前提下，提供“as little aspossible”的帮助一这样学生的收获与成长才是最大的。

* 每个人的具体情况是不同的，尤其在一门课刚开始的时候，能够接受的“阈值”也不一样的。
* 如果有同学感觉遇到了障碍，在变得焦虑和消极之前，不妨先尝试更加积极地来office hours寻求帮助。
* 如何正确寻求帮助也是能力的一部分。
`,title:"关于Office Hour",level:1,content:`# 关于Office Hour

正如著名的数学家和名师Polya在他的《how to solveit》一书中所说，对于学生的帮助与提示，最理想的状态，应是在其能“刚好”“独立”解决问题的前提下，提供“as little aspossible”的帮助一这样学生的收获与成长才是最大的。

* 每个人的具体情况是不同的，尤其在一门课刚开始的时候，能够接受的“阈值”也不一样的。
* 如果有同学感觉遇到了障碍，在变得焦虑和消极之前，不妨先尝试更加积极地来office hours寻求帮助。
* 如何正确寻求帮助也是能力的一部分。`,frontmatter:{layout:"full"},index:3,start:47,end:59},filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/pages/other.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:FO,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Thanks
`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center",class:"text-center"},index:36,start:52,end:59,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",component:j$,meta:{layout:"end"}}],Ye=jO,tr=[{name:"play",path:"/",component:l2,children:[...Ye]},{name:"print",path:"/print",component:R$},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!er.remote||er.remote===t.query.password)return!0;if(er.remote&&t.query.password===void 0){const n=prompt("Enter password");if(er.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};tr.push({path:"/presenter/print",component:()=>In(()=>import("./PresenterPrint-9fb80d3f.js"),["assets/PresenterPrint-9fb80d3f.js","assets/NoteDisplay-e63ad850.js"])}),tr.push({name:"notes",path:"/notes",component:()=>In(()=>import("./NotesView-d6c8f451.js"),["assets/NotesView-d6c8f451.js","assets/NoteDisplay-e63ad850.js"]),beforeEnter:e}),tr.push({name:"presenter",path:"/presenter/:no",component:()=>In(()=>import("./Presenter-84afd8cf.js"),["assets/Presenter-84afd8cf.js","assets/NoteDisplay-e63ad850.js","assets/DrawingControls-42c34434.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),tr.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const _t=F1({history:N0("/math201/slides/python01"),routes:tr});function HO(e,t,{mode:n="replace"}={}){return O({get(){const s=_t.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){et(()=>{_t[x(n)]({query:{..._t.currentRoute.value.query,[e]:s}})})}})}const Pp=W(0);et(()=>{_t.afterEach(async()=>{await et(),Pp.value+=1})});const Op=W(0),It=O(()=>_t.currentRoute.value),Ms=O(()=>It.value.query.print!==void 0),DO=O(()=>It.value.query.print==="clicks"),nn=O(()=>It.value.query.embedded!==void 0),mt=O(()=>It.value.path.startsWith("/presenter")),VO=O(()=>It.value.path.startsWith("/notes")),ar=O(()=>Ms.value&&!DO.value),wl=O(()=>It.value.query.password),UO=O(()=>!mt.value&&(!Te.remote||wl.value===Te.remote)),Tu=HO("clicks","0"),Tp=O(()=>Ye.length-1),qO=O(()=>It.value.path),ze=O(()=>parseInt(qO.value.split(/\//g).slice(-1)[0])||1);O(()=>si(ze.value));const lt=O(()=>Ye.find(e=>e.path===`${ze.value}`));O(()=>{var e,t,n;return(n=(t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});O(()=>{var e,t;return((t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(ze.value===1?"cover":"default")});const Oi=O(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,ze.value+1)}`)),BO=O(()=>Ye.find(e=>e.path===`${Math.max(1,ze.value-1)}`)),zO=O(()=>{var e,t;return Pp.value,((t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ct=O({get(){if(ar.value)return 99999;let e=+(Tu.value||0);return isNaN(e)&&(e=0),e},set(e){Tu.value=e.toString()}}),Lo=O(()=>{var e,t;return+(((t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??zO.value.length)}),WO=O(()=>ze.value<Ye.length-1||Ct.value<Lo.value),KO=O(()=>ze.value>1||Ct.value>0),YO=O(()=>Ye.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ya(e,t),e),[])),GO=O(()=>ba(YO.value,lt.value));O(()=>wa(GO.value));const XO=O(()=>tT(Op.value,lt.value,BO.value));me(lt,(e,t)=>{Op.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Mn(){Lo.value<=Ct.value?Tr():Ct.value+=1}async function Ln(){Ct.value<=0?await Cr():Ct.value-=1}function si(e){return mt.value?`/presenter/${e}`:`/${e}`}function Tr(){const e=Math.min(Ye.length,ze.value+1);return Ls(e)}async function Cr(e=!0){const t=Math.max(1,ze.value-1);await Ls(t),e&&Lo.value&&_t.replace({query:{...It.value.query,clicks:Lo.value}})}function Ls(e,t){return _t.push({path:si(e),query:{...It.value.query,clicks:t}})}function ZO(e){const t=W(0),{direction:n,distanceX:s,distanceY:r}=e0(e,{onSwipeStart(o){o.pointerType==="touch"&&(kr.value||(t.value=il()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||kr.value)return;const i=Math.abs(s.value),a=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===on.LEFT?Mn():Ln():(a/window.innerHeight>.4||a>200)&&(n.value===on.DOWN?Cr():Tr())}})}async function xl(){const{saveAs:e}=await In(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(Md(Te.download)?Te.download:Te.exportFilename?`${Te.exportFilename}.pdf`:"/math201/slides/python01slidev-exported.pdf",`${Te.title}.pdf`)}async function QO(e){var t,n;if(e==null){const s=(n=(t=lt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ya(e,t,n=1){var r,o,i,a,c;const s=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;s&&s>n&&e.length>0?ya(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function ba(e,t,n=!1,s){return e.map(r=>{const o={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return o.children.length>0&&(o.children=ba(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function wa(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:wa(n.children,t+1)}))}const JO={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function eT(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:JO[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(o=>o.trim());n=t?r:s}if(n)return{...e,name:n}}function tT(e,t,n){var r,o;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(o=t==null?void 0:t.meta)==null?void 0:o.transition;return s||(s=Te.transition),eT(s,e<0)}function nT(){const e=Te.titleTemplate.replace("%s",Te.title||"Slidev");ia({title:e}),bv(Te.htmlAttrs),Iv(`${e} - shared`),Nv(`${e} - drawings`);const t=`${location.origin}_${Ev()}`;function n(){VO.value||!mt.value&&!kv.includes(location.host.split(":")[0])||(mt.value?(Bs("page",+ze.value),Bs("clicks",Ct.value)):(Bs("viewerPage",+ze.value),Bs("viewerClicks",Ct.value)),Bs("lastUpdate",{id:t,type:mt.value?"presenter":"viewer",time:new Date().getTime()}))}_t.afterEach(n),me(Ct,n),Mv(s=>{var o;_t.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((o=s.lastUpdate)==null?void 0:o.type)==="presenter"&&(+s.page!=+ze.value||+Ct.value!=+s.clicks)&&_t.replace({path:si(s.page),query:{..._t.currentRoute.value.query,clicks:s.clicks||0}})})}const sT=ye({__name:"App",setup(e){return D(Z),nT(),(t,n)=>{const s=ko("RouterView"),r=ko("StarportCarrier");return E(),G(Ie,null,[z(s),z(r)],64)}}}),rT=J(sT,[["__file","/Users/haiwen/gitrepo/math201-lecture/01_Python_Introduction/node_modules/@slidev/client/App.vue"]]);function Ti(e){return e!==null&&typeof e=="object"}function $l(e,t,n=".",s){if(!Ti(t))return $l(e,{},n,s);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const i=e[o];i!=null&&(s&&s(r,o,i,n)||(Array.isArray(i)&&Array.isArray(r[o])?r[o]=[...i,...r[o]]:Ti(i)&&Ti(r[o])?r[o]=$l(i,r[o],(n?`${n}.`:"")+o.toString(),s):r[o]=i))}return r}function oT(e){return(...t)=>t.reduce((n,s)=>$l(n,s,"",e),{})}const iT=oT(),Cp=1/60*1e3,lT=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ap=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(lT()),Cp);function aT(e){let t=[],n=[],s=0,r=!1,o=!1;const i=new WeakSet,a={schedule:(c,u=!1,f=!1)=>{const d=f&&r,p=d?t:n;return u&&i.add(c),p.indexOf(c)===-1&&(p.push(c),d&&r&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const f=t[u];f(c),i.has(f)&&(a.schedule(f),e())}r=!1,o&&(o=!1,a.process(c))}};return a}const cT=40;let Sl=!0,Ar=!1,kl=!1;const Ts={delta:0,timestamp:0},Vr=["read","update","preRender","render","postRender"],ri=Vr.reduce((e,t)=>(e[t]=aT(()=>Ar=!0),e),{}),El=Vr.reduce((e,t)=>{const n=ri[t];return e[t]=(s,r=!1,o=!1)=>(Ar||dT(),n.schedule(s,r,o)),e},{}),uT=Vr.reduce((e,t)=>(e[t]=ri[t].cancel,e),{});Vr.reduce((e,t)=>(e[t]=()=>ri[t].process(Ts),e),{});const fT=e=>ri[e].process(Ts),Ip=e=>{Ar=!1,Ts.delta=Sl?Cp:Math.max(Math.min(e-Ts.timestamp,cT),1),Ts.timestamp=e,kl=!0,Vr.forEach(fT),kl=!1,Ar&&(Sl=!1,Ap(Ip))},dT=()=>{Ar=!0,Sl=!0,kl||Ap(Ip)},Mp=()=>Ts;function Lp(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var xa=function(){},Ir=function(){};xa=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Ir=function(e,t){if(!e)throw new Error(t)};const Pl=(e,t,n)=>Math.min(Math.max(n,e),t),Ci=.001,pT=.01,Cu=10,hT=.05,mT=1;function gT({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,o;xa(e<=Cu*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Pl(hT,mT,i),e=Pl(pT,Cu,e/1e3),i<1?(r=u=>{const f=u*i,d=f*e,p=f-n,h=Ol(u,i),m=Math.exp(-d);return Ci-p/h*m},o=u=>{const d=u*i*e,p=d*n+n,h=Math.pow(i,2)*Math.pow(u,2)*e,m=Math.exp(-d),_=Ol(Math.pow(u,2),i);return(-r(u)+Ci>0?-1:1)*((p-h)*m)/_}):(r=u=>{const f=Math.exp(-u*e),d=(u-n)*e+1;return-Ci+f*d},o=u=>{const f=Math.exp(-u*e),d=(n-u)*(e*e);return f*d});const a=5/e,c=vT(r,o,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:i*2*Math.sqrt(s*u),duration:e}}}const _T=12;function vT(e,t,n){let s=n;for(let r=1;r<_T;r++)s=s-e(s)/t(s);return s}function Ol(e,t){return e*Math.sqrt(1-t*t)}const yT=["duration","bounce"],bT=["stiffness","damping","mass"];function Au(e,t){return t.some(n=>e[n]!==void 0)}function wT(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Au(e,bT)&&Au(e,yT)){const n=gT(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function $a(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,o=Lp(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:f,duration:d,isResolvedFromDuration:p}=wT(o),h=Iu,m=Iu;function _(){const y=f?-(f/1e3):0,$=n-t,b=c/(2*Math.sqrt(a*u)),w=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),b<1){const S=Ol(w,b);h=T=>{const M=Math.exp(-b*w*T);return n-M*((y+b*w*$)/S*Math.sin(S*T)+$*Math.cos(S*T))},m=T=>{const M=Math.exp(-b*w*T);return b*w*M*(Math.sin(S*T)*(y+b*w*$)/S+$*Math.cos(S*T))-M*(Math.cos(S*T)*(y+b*w*$)-S*$*Math.sin(S*T))}}else if(b===1)h=S=>n-Math.exp(-w*S)*($+(y+w*$)*S);else{const S=w*Math.sqrt(b*b-1);h=T=>{const M=Math.exp(-b*w*T),q=Math.min(S*T,300);return n-M*((y+b*w*$)*Math.sinh(q)+S*$*Math.cosh(q))/S}}}return _(),{next:y=>{const $=h(y);if(p)i.done=y>=d;else{const b=m(y)*1e3,w=Math.abs(b)<=s,S=Math.abs(n-$)<=r;i.done=w&&S}return i.value=i.done?n:$,i},flipTarget:()=>{f=-f,[t,n]=[n,t],_()}}}$a.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Iu=e=>0,Rp=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},Sa=(e,t,n)=>-n*e+n*t+e,Np=(e,t)=>n=>Math.max(Math.min(n,t),e),cr=e=>e%1?Number(e.toFixed(5)):e,Mr=/(-)?([\d]*\.?[\d])+/g,Tl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,xT=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ur(e){return typeof e=="string"}const qr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ur=Object.assign(Object.assign({},qr),{transform:Np(0,1)}),no=Object.assign(Object.assign({},qr),{default:1}),ka=e=>({test:t=>Ur(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qn=ka("deg"),fr=ka("%"),he=ka("px"),Mu=Object.assign(Object.assign({},fr),{parse:e=>fr.parse(e)/100,transform:e=>fr.transform(e*100)}),Ea=(e,t)=>n=>Boolean(Ur(n)&&xT.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Fp=(e,t,n)=>s=>{if(!Ur(s))return s;const[r,o,i,a]=s.match(Mr);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Zn={test:Ea("hsl","hue"),parse:Fp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+fr.transform(cr(t))+", "+fr.transform(cr(n))+", "+cr(ur.transform(s))+")"},$T=Np(0,255),Ai=Object.assign(Object.assign({},qr),{transform:e=>Math.round($T(e))}),Pn={test:Ea("rgb","red"),parse:Fp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ai.transform(e)+", "+Ai.transform(t)+", "+Ai.transform(n)+", "+cr(ur.transform(s))+")"};function ST(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Cl={test:Ea("#"),parse:ST,transform:Pn.transform},pt={test:e=>Pn.test(e)||Cl.test(e)||Zn.test(e),parse:e=>Pn.test(e)?Pn.parse(e):Zn.test(e)?Zn.parse(e):Cl.parse(e),transform:e=>Ur(e)?e:e.hasOwnProperty("red")?Pn.transform(e):Zn.transform(e)},jp="${c}",Hp="${n}";function kT(e){var t,n,s,r;return isNaN(e)&&Ur(e)&&((n=(t=e.match(Mr))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(Tl))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function Dp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Tl);s&&(n=s.length,e=e.replace(Tl,jp),t.push(...s.map(pt.parse)));const r=e.match(Mr);return r&&(e=e.replace(Mr,Hp),t.push(...r.map(qr.parse))),{values:t,numColors:n,tokenised:e}}function Vp(e){return Dp(e).values}function Up(e){const{values:t,numColors:n,tokenised:s}=Dp(e),r=t.length;return o=>{let i=s;for(let a=0;a<r;a++)i=i.replace(a<n?jp:Hp,a<n?pt.transform(o[a]):cr(o[a]));return i}}const ET=e=>typeof e=="number"?0:e;function PT(e){const t=Vp(e);return Up(e)(t.map(ET))}const Br={test:kT,parse:Vp,createTransformer:Up,getAnimatableNone:PT},OT=new Set(["brightness","contrast","saturate","opacity"]);function TT(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Mr)||[];if(!s)return e;const r=n.replace(s,"");let o=OT.has(t)?1:0;return s!==n&&(o*=100),t+"("+o+r+")"}const CT=/([a-z-]*)\(.*?\)/g,Al=Object.assign(Object.assign({},Br),{getAnimatableNone:e=>{const t=e.match(CT);return t?t.map(TT).join(" "):e}});function Ii(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Lu({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,o=0,i=0;if(!t)r=o=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Ii(c,a,e+1/3),o=Ii(c,a,e),i=Ii(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(i*255),alpha:s}}const AT=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},IT=[Cl,Pn,Zn],Ru=e=>IT.find(t=>t.test(e)),Nu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,qp=(e,t)=>{let n=Ru(e),s=Ru(t);Ir(!!n,Nu(e)),Ir(!!s,Nu(t));let r=n.parse(e),o=s.parse(t);n===Zn&&(r=Lu(r),n=Pn),s===Zn&&(o=Lu(o),s=Pn);const i=Object.assign({},r);return a=>{for(const c in i)c!=="alpha"&&(i[c]=AT(r[c],o[c],a));return i.alpha=Sa(r.alpha,o.alpha,a),n.transform(i)}},MT=e=>typeof e=="number",LT=(e,t)=>n=>t(e(n)),Bp=(...e)=>e.reduce(LT);function zp(e,t){return MT(e)?n=>Sa(e,t,n):pt.test(e)?qp(e,t):Kp(e,t)}const Wp=(e,t)=>{const n=[...e],s=n.length,r=e.map((o,i)=>zp(o,t[i]));return o=>{for(let i=0;i<s;i++)n[i]=r[i](o);return n}},RT=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=zp(e[r],t[r]));return r=>{for(const o in s)n[o]=s[o](r);return n}};function Fu(e){const t=Br.parse(e),n=t.length;let s=0,r=0,o=0;for(let i=0;i<n;i++)s||typeof t[i]=="number"?s++:t[i].hue!==void 0?o++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:o}}const Kp=(e,t)=>{const n=Br.createTransformer(t),s=Fu(e),r=Fu(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Bp(Wp(s.parsed,r.parsed),n):(xa(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},NT=(e,t)=>n=>Sa(e,t,n);function FT(e){if(typeof e=="number")return NT;if(typeof e=="string")return pt.test(e)?qp:Kp;if(Array.isArray(e))return Wp;if(typeof e=="object")return RT}function jT(e,t,n){const s=[],r=n||FT(e[0]),o=e.length-1;for(let i=0;i<o;i++){let a=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Bp(c,a)}s.push(a)}return s}function HT([e,t],[n]){return s=>n(Rp(e,t,s))}function DT(e,t){const n=e.length,s=n-1;return r=>{let o=0,i=!1;if(r<=e[0]?i=!0:r>=e[s]&&(o=s-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>r||c===s);c++);o=c-1}const a=Rp(e[o],e[o+1],r);return t[o](a)}}function Yp(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const o=e.length;Ir(o===t.length,"Both input and output ranges must be the same length"),Ir(!s||!Array.isArray(s)||s.length===o-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=jT(t,s,r),a=o===2?HT(e,i):DT(e,i);return n?c=>a(Pl(e[0],e[o-1],c)):a}const oi=e=>t=>1-e(1-t),Pa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,VT=e=>t=>Math.pow(t,e),Gp=e=>t=>t*t*((e+1)*t-e),UT=e=>{const t=Gp(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Xp=1.525,qT=4/11,BT=8/11,zT=9/10,Zp=e=>e,Oa=VT(2),WT=oi(Oa),Qp=Pa(Oa),Jp=e=>1-Math.sin(Math.acos(e)),eh=oi(Jp),KT=Pa(eh),Ta=Gp(Xp),YT=oi(Ta),GT=Pa(Ta),XT=UT(Xp),ZT=4356/361,QT=35442/1805,JT=16061/1805,Ro=e=>{if(e===1||e===0)return e;const t=e*e;return e<qT?7.5625*t:e<BT?9.075*t-9.9*e+3.4:e<zT?ZT*t-QT*e+JT:10.8*e*e-20.52*e+10.72},eC=oi(Ro),tC=e=>e<.5?.5*(1-Ro(1-e*2)):.5*Ro(e*2-1)+.5;function nC(e,t){return e.map(()=>t||Qp).splice(0,e.length-1)}function sC(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function rC(e,t){return e.map(n=>n*t)}function mo({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const o={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=rC(s&&s.length===i.length?s:sC(i),r);function c(){return Yp(a,i,{ease:Array.isArray(n)?n:nC(i,n)})}let u=c();return{next:f=>(o.value=u(f),o.done=f>=r,o),flipTarget:()=>{i.reverse(),u=c()}}}function oC({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:o}){const i={done:!1,value:t};let a=n*e;const c=t+a,u=o===void 0?c:o(c);return u!==c&&(a=u-t),{next:f=>{const d=-a*Math.exp(-f/s);return i.done=!(d>r||d<-r),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const ju={keyframes:mo,spring:$a,decay:oC};function iC(e){if(Array.isArray(e.to))return mo;if(ju[e.type])return ju[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?mo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?$a:mo}function th(e,t,n=0){return e-t-n}function lC(e,t,n=0,s=!0){return s?th(t+-e,t,n):t-(e-t)+n}function aC(e,t,n,s){return s?e>=t+n:e<=-n}const cC=e=>{const t=({delta:n})=>e(n);return{start:()=>El.update(t,!0),stop:()=>uT.update(t)}};function nh(e){var t,n,{from:s,autoplay:r=!0,driver:o=cC,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:f,onStop:d,onComplete:p,onRepeat:h,onUpdate:m}=e,_=Lp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=_,$,b=0,w=_.duration,S,T=!1,M=!0,q;const A=iC(_);!((n=(t=A).needsInterpolation)===null||n===void 0)&&n.call(t,s,y)&&(q=Yp([0,100],[s,y],{clamp:!1}),s=0,y=100);const V=A(Object.assign(Object.assign({},_),{from:s,to:y}));function Q(){b++,c==="reverse"?(M=b%2===0,i=lC(i,w,u,M)):(i=th(i,w,u),c==="mirror"&&V.flipTarget()),T=!1,h&&h()}function ae(){$.stop(),p&&p()}function B(Ae){if(M||(Ae=-Ae),i+=Ae,!T){const Pe=V.next(Math.max(0,i));S=Pe.value,q&&(S=q(S)),T=M?Pe.done:i<=0}m==null||m(S),T&&(b===0&&(w??(w=i)),b<a?aC(i,w,u,M)&&Q():ae())}function be(){f==null||f(),$=o(B),$.start()}return r&&be(),{stop:()=>{d==null||d(),$.stop()}}}function sh(e,t){return t?e*(1e3/t):0}function uC({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:o=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:f,onUpdate:d,onComplete:p,onStop:h}){let m;function _(w){return n!==void 0&&w<n||s!==void 0&&w>s}function y(w){return n===void 0?s:s===void 0||Math.abs(n-w)<Math.abs(s-w)?n:s}function $(w){m==null||m.stop(),m=nh(Object.assign(Object.assign({},w),{driver:f,onUpdate:S=>{var T;d==null||d(S),(T=w.onUpdate)===null||T===void 0||T.call(w,S)},onComplete:p,onStop:h}))}function b(w){$(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},w))}if(_(e))b({from:e,velocity:t,to:y(e)});else{let w=r*t+e;typeof u<"u"&&(w=u(w));const S=y(w),T=S===n?-1:1;let M,q;const A=V=>{M=q,q=V,t=sh(V-M,Mp().delta),(T===1&&V>S||T===-1&&V<S)&&b({from:V,to:S,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:u,onUpdate:_(w)?A:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const rh=(e,t)=>1-3*t+3*e,oh=(e,t)=>3*t-6*e,ih=e=>3*e,No=(e,t,n)=>((rh(t,n)*e+oh(t,n))*e+ih(t))*e,lh=(e,t,n)=>3*rh(t,n)*e*e+2*oh(t,n)*e+ih(t),fC=1e-7,dC=10;function pC(e,t,n,s,r){let o,i,a=0;do i=t+(n-t)/2,o=No(i,s,r)-e,o>0?n=i:t=i;while(Math.abs(o)>fC&&++a<dC);return i}const hC=8,mC=.001;function gC(e,t,n,s){for(let r=0;r<hC;++r){const o=lh(t,n,s);if(o===0)return t;const i=No(t,n,s)-e;t-=i/o}return t}const go=11,so=1/(go-1);function _C(e,t,n,s){if(e===t&&n===s)return Zp;const r=new Float32Array(go);for(let i=0;i<go;++i)r[i]=No(i*so,e,n);function o(i){let a=0,c=1;const u=go-1;for(;c!==u&&r[c]<=i;++c)a+=so;--c;const f=(i-r[c])/(r[c+1]-r[c]),d=a+f*so,p=lh(d,e,n);return p>=mC?gC(i,d,e,n):p===0?d:pC(i,a,a+so,e,n)}return i=>i===0||i===1?i:No(o(i),t,s)}const Mi={};class vC{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}const Hu=e=>!isNaN(parseFloat(e));class yC{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new vC,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=Mp();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),El.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>El.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Hu(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Hu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?sh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function bC(e){return new yC(e)}const{isArray:wC}=Array;function xC(){const e=W({}),t=s=>{const r=o=>{e.value[o]&&(e.value[o].stop(),e.value[o].destroy(),delete e.value[o])};s?wC(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,o)=>{if(e.value[s])return e.value[s];const i=bC(r);return i.onChange(a=>o[s]=a),e.value[s]=i,i};return ry(t),{motionValues:e,get:n,stop:t}}const $C=e=>Array.isArray(e),Bn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Li=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),SC=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ri=()=>({type:"keyframes",ease:"linear",duration:300}),kC=e=>({type:"keyframes",duration:800,values:e}),Du={default:SC,x:Bn,y:Bn,z:Bn,rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scaleX:Li,scaleY:Li,scale:Li,backgroundColor:Ri,color:Ri,opacity:Ri},ah=(e,t)=>{let n;return $C(t)?n=kC:n=Du[e]||Du.default,{to:t,...n(t)}},Vu={...qr,transform:Math.round},ch={color:pt,backgroundColor:pt,outlineColor:pt,fill:pt,stroke:pt,borderColor:pt,borderTopColor:pt,borderRightColor:pt,borderBottomColor:pt,borderLeftColor:pt,borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,size:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:no,scaleX:no,scaleY:no,scaleZ:no,skew:qn,skewX:qn,skewY:qn,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:ur,originX:Mu,originY:Mu,originZ:he,zIndex:Vu,filter:Al,WebkitFilter:Al,fillOpacity:ur,strokeOpacity:ur,numOctaves:Vu},Ca=e=>ch[e],uh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function EC(e,t){let n=Ca(e);return n!==Al&&(n=Br),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const PC={linear:Zp,easeIn:Oa,easeInOut:Qp,easeOut:WT,circIn:Jp,circInOut:KT,circOut:eh,backIn:Ta,backInOut:GT,backOut:YT,anticipate:XT,bounceIn:eC,bounceInOut:tC,bounceOut:Ro},Uu=e=>{if(Array.isArray(e)){const[t,n,s,r]=e;return _C(t,n,s,r)}else if(typeof e=="string")return PC[e];return e},OC=e=>Array.isArray(e)&&typeof e[0]!="number",qu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Br.test(t)&&!t.startsWith("url("));function TC(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function CC({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=OC(e)?e.map(Uu):Uu(e)),n&&(r.elapsed=-n),r}function AC(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),TC(t),IC(e)||(e={...e,...ah(n,t.to)}),{...t,...CC(e)}}function IC({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...o}){return!!Object.keys(o).length}function MC(e,t){return e[t]||e.default||e}function LC(e,t,n,s,r){const o=MC(s,e);let i=o.from===null||o.from===void 0?t.get():o.from;const a=qu(e,n);i==="none"&&a&&typeof n=="string"&&(i=EC(e,n));const c=qu(e,i);function u(d){const p={from:i,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return o.type==="inertia"||o.type==="decay"?uC({...p,...o}):nh({...AC(o,p,e),onUpdate:h=>{p.onUpdate(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),d&&d()}})}function f(d){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!a||o.type===!1?f:u}function RC(){const{motionValues:e,stop:t,get:n}=xC();return{motionValues:e,stop:t,push:(r,o,i,a={},c)=>{const u=i[r],f=n(r,u,i);if(a&&a.immediate){f.set(o);return}const d=LC(r,f,o,a,c);f.start(d)}}}function NC(e,t={},{motionValues:n,push:s,stop:r}=RC()){const o=x(t),i=W(!1);me(n,d=>{i.value=Object.values(d).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const a=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},c=d=>(typeof d=="string"&&(d=a(d)),Promise.all(Object.entries(d).map(([p,h])=>{if(p!=="transition")return new Promise(m=>s(p,h,e,d.transition||ah(p,d[p]),m))}).filter(Boolean)));return{isAnimating:i,apply:c,set:d=>{const p=ol(d)?d:a(d);Object.entries(p).forEach(([h,m])=>{h!=="transition"&&s(h,m,e,{immediate:!0})})},leave:async d=>{let p;if(o&&(o.leave&&(p=o.leave),!o.leave&&o.initial&&(p=o.initial)),!p){d();return}await c(p),d()},stop:r}}const Aa=typeof window<"u",FC=()=>Aa&&window.onpointerdown===null,jC=()=>Aa&&window.ontouchstart===null,HC=()=>Aa&&window.onmousedown===null;function DC({target:e,state:t,variants:n,apply:s}){const r=x(n),o=W(!1),i=W(!1),a=W(!1),c=O(()=>{let f=[];return r&&(r.hovered&&(f=[...f,...Object.keys(r.hovered)]),r.tapped&&(f=[...f,...Object.keys(r.tapped)]),r.focused&&(f=[...f,...Object.keys(r.focused)])),f}),u=O(()=>{const f={};Object.assign(f,t.value),o.value&&r.hovered&&Object.assign(f,r.hovered),i.value&&r.tapped&&Object.assign(f,r.tapped),a.value&&r.focused&&Object.assign(f,r.focused);for(const d in f)c.value.includes(d)||delete f[d];return f});r.hovered&&(ve(e,"mouseenter",()=>o.value=!0),ve(e,"mouseleave",()=>{o.value=!1,i.value=!1}),ve(e,"mouseout",()=>{o.value=!1,i.value=!1})),r.tapped&&(HC()&&(ve(e,"mousedown",()=>i.value=!0),ve(e,"mouseup",()=>i.value=!1)),FC()&&(ve(e,"pointerdown",()=>i.value=!0),ve(e,"pointerup",()=>i.value=!1)),jC()&&(ve(e,"touchstart",()=>i.value=!0),ve(e,"touchend",()=>i.value=!1))),r.focused&&(ve(e,"focus",()=>a.value=!0),ve(e,"blur",()=>a.value=!1)),me(u,s)}function VC({set:e,target:t,apply:n,variants:s,variant:r}){const o=x(s);me(()=>t,()=>{o&&(o.initial&&e("initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function UC({state:e,apply:t}){me(e,n=>{n&&t(n)},{immediate:!0})}function qC({target:e,variants:t,variant:n}){const s=x(t);s&&(s.visible||s.visibleOnce)&&Zy(e,([{isIntersecting:r}])=>{s.visible?r?n.value="visible":n.value="initial":s.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function BC(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&VC(e),t.syncVariants&&UC(e),t.visibilityHooks&&qC(e),t.eventListeners&&DC(e)}function fh(e={}){const t=Ue({...e}),n=W({});return me(t,()=>{const s={};for(const[r,o]of Object.entries(t)){const i=Ca(r),a=uh(o,i);s[r]=a}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Ia(e,t){me(()=>St(e),n=>{n&&t(n)},{immediate:!0})}const zC={x:"translateX",y:"translateY",z:"translateZ"};function dh(e={},t=!0){const n=Ue({...e}),s=W("");return me(n,r=>{let o="",i=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(he.transform).join(",");o+=`translate3d(${a}) `,i=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=Ca(a),f=uh(c,u);o+=`${zC[a]||a}(${f}) `}t&&!i&&(o+="translateZ(0px) "),s.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const WC=["","X","Y","Z"],KC=["perspective","translate","scale","rotate","skew"],ph=["transformPerspective","x","y","z"];KC.forEach(e=>{WC.forEach(t=>{const n=e+t;ph.push(n)})});const YC=new Set(ph);function Ma(e){return YC.has(e)}const GC=new Set(["originX","originY","originZ"]);function hh(e){return GC.has(e)}function XC(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{Ma(s)||hh(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function mh(e){const{transform:t,style:n}=XC(e),{transform:s}=dh(t),{style:r}=fh(n);return s.value&&(r.value.transform=s.value),r.value}function ZC(e,t){let n,s;const{state:r,style:o}=fh();return Ia(e,i=>{s=i;for(const a of Object.keys(ch))i.style[a]===null||i.style[a]===""||Ma(a)||hh(a)||(r[a]=i.style[a]);n&&Object.entries(n).forEach(([a,c])=>i.style[a]=c),t&&t(r)}),me(o,i=>{if(!s){n=i;return}for(const a in i)s.style[a]=i[a]},{immediate:!0}),{style:r}}function QC(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[o,i]=r.split("("),c=i.split(",").map(f=>n(f.endsWith(")")?f.replace(")",""):f.trim())),u=c.length===1?c[0]:c;return{...s,[o]:u}},{})}function JC(e,t){Object.entries(QC(t)).forEach(([n,s])=>{const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(o=>e[o]=0);return}s.forEach((o,i)=>e[r[i]]=o);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function e3(e,t){let n,s;const{state:r,transform:o}=dh();return Ia(e,i=>{s=i,i.style.transform&&JC(r,i.style.transform),n&&(i.style.transform=n),t&&t(r)}),me(o,i=>{if(!s){n=i;return}s.style.transform=i},{immediate:!0}),{transform:r}}function t3(e,t){const n=Ue({}),s=i=>Object.entries(i).forEach(([a,c])=>n[a]=c),{style:r}=ZC(e,s),{transform:o}=e3(e,s);return me(n,i=>{Object.entries(i).forEach(([a,c])=>{const u=Ma(a)?o:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Ia(e,()=>t&&s(t)),{motionProperties:n,style:r,transform:o}}function n3(e={}){const t=x(e),n=W();return{state:O(()=>{if(n.value)return t[n.value]}),variant:n}}function gh(e,t={},n){const{motionProperties:s}=t3(e),{variant:r,state:o}=n3(t),i=NC(s,t),a={target:e,variant:r,variants:t,state:o,motionProperties:s,...i};return BC(a,n),a}const s3=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],r3=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ol(n.variants)&&(t.value={...t.value,...n.variants}),s3.forEach(s=>{if(s==="delay"){if(n&&n[s]&&Uv(n[s])){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&ol(n[s])&&(t.value[s]=n[s])}))},Ni=e=>({created:(n,s,r)=>{const o=s.value&&typeof s.value=="string"?s.value:r.key;o&&Mi[o]&&Mi[o].stop();const i=W(e||{});typeof s.value=="object"&&(i.value=s.value),r3(r,i);const a=gh(n,i);n.motionInstance=a,o&&(Mi[o]=a)},getSSRProps(n,s){let{initial:r}=n.value||s&&(s==null?void 0:s.props)||{};r=x(r);const o=iT((e==null?void 0:e.initial)||{},r||{});return!o||Object.keys(o).length===0?void 0:{style:mh(o)}}}),o3={initial:{opacity:0},enter:{opacity:1}},i3={initial:{opacity:0},visible:{opacity:1}},l3={initial:{opacity:0},visibleOnce:{opacity:1}},a3={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},c3={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},u3={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},f3={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},d3={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},p3={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},h3={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},m3={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},g3={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},_3={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},v3={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},y3={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},b3={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},w3={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},x3={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$3={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},S3={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},k3={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},E3={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},P3={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},O3={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},T3={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},C3={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},A3={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},I3={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},M3={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},L3={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Il={__proto__:null,fade:o3,fadeVisible:i3,fadeVisibleOnce:l3,pop:a3,popVisible:c3,popVisibleOnce:u3,rollBottom:b3,rollLeft:f3,rollRight:h3,rollTop:_3,rollVisibleBottom:w3,rollVisibleLeft:d3,rollVisibleOnceBottom:x3,rollVisibleOnceLeft:p3,rollVisibleOnceRight:g3,rollVisibleOnceTop:y3,rollVisibleRight:m3,rollVisibleTop:v3,slideBottom:I3,slideLeft:$3,slideRight:E3,slideTop:T3,slideVisibleBottom:M3,slideVisibleLeft:S3,slideVisibleOnceBottom:L3,slideVisibleOnceLeft:k3,slideVisibleOnceRight:O3,slideVisibleOnceTop:A3,slideVisibleRight:P3,slideVisibleTop:C3},R3=ye({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=Qg(),n=Ue({});if(!e.is&&!t.default)return()=>ut("div",{});const s=O(()=>{let c;return e.preset&&(c=Il[e.preset]),c}),r=O(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),o=O(()=>{const c={...r.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=O(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!nf(c)&&(c=ko(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var f;(f=u.variants)!=null&&f.initial&&u.set("initial"),setTimeout(()=>{var d,p,h;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Go(()=>Object.entries(n).forEach(([u,f])=>c(f)))}return{slots:t,component:i,motionConfig:o,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var a;const r=mh(t.initial||{}),o=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:f})=>{const d=gh(f,t);n[u]=d},c);if(s){const c=ut(s,void 0,e);return o(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>o(c,u))}});function N3(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const F3={install(e,t){if(e.directive("motion",Ni()),e.component("Motion",R3),!t||t&&!t.excludePresets)for(const n in Il){const s=Il[n];e.directive(`motion-${N3(n)}`,Ni(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ni(s))}}};var Bu;const dr=typeof window<"u",j3=Object.prototype.toString,H3=e=>j3.call(e)==="[object Object]";dr&&((Bu=window==null?void 0:window.navigator)!=null&&Bu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D3(e){return Dl()?(df(e),!0):!1}function V3(e){var t;const n=x(e);return(t=n==null?void 0:n.$el)!=null?t:n}const U3=dr?window:void 0,Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ll="__vueuse_ssr_handlers__";Ml[Ll]=Ml[Ll]||{};Ml[Ll];function q3(e,t={}){const{immediate:n=!0,window:s=U3}=t,r=W(!1);let o=null;function i(){!r.value||!s||(e(),o=s.requestAnimationFrame(i))}function a(){!r.value&&s&&(r.value=!0,i())}function c(){r.value=!1,o!=null&&s&&(s.cancelAnimationFrame(o),o=null)}return n&&a(),D3(c),{isActive:r,pause:c,resume:a}}var zu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(zu||(zu={}));const ii="vue-starport-injection",_h="vue-starport-options",B3={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},vh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var z3=Object.defineProperty,Fo=Object.getOwnPropertySymbols,yh=Object.prototype.hasOwnProperty,bh=Object.prototype.propertyIsEnumerable,Wu=(e,t,n)=>t in e?z3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W3=(e,t)=>{for(var n in t||(t={}))yh.call(t,n)&&Wu(e,n,t[n]);if(Fo)for(var n of Fo(t))bh.call(t,n)&&Wu(e,n,t[n]);return e},Ku=(e,t)=>{var n={};for(var s in e)yh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Fo)for(var s of Fo(e))t.indexOf(s)<0&&bh.call(e,s)&&(n[s]=e[s]);return n};const K3=ye({name:"StarportProxy",props:W3({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},vh),setup(e,t){const n=D(ii),s=O(()=>n.getInstance(e.port,e.component)),r=W(),o=s.value.generateId(),i=W(!1);return s.value.isVisible||(s.value.land(),i.value=!0),Ns(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=r.value,await et(),i.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const a=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),jr(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,i.value=!1,!s.value.options.keepAlive&&(await et(),await et(),!s.value.el&&n.dispose(s.value.port))}),me(()=>e,async()=>{s.value.props&&await et();const a=e,{props:c}=a,u=Ku(a,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,f=Ku(a,["initialProps","mountedProps"]),d=yr(f,(i.value?u:c)||{});return ut("div",yr(d,{id:o,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?ut(t.slots.default):void 0)}}});var Y3=Object.defineProperty,G3=Object.defineProperties,X3=Object.getOwnPropertyDescriptors,Yu=Object.getOwnPropertySymbols,Z3=Object.prototype.hasOwnProperty,Q3=Object.prototype.propertyIsEnumerable,Gu=(e,t,n)=>t in e?Y3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J3=(e,t)=>{for(var n in t||(t={}))Z3.call(t,n)&&Gu(e,n,t[n]);if(Yu)for(var n of Yu(t))Q3.call(t,n)&&Gu(e,n,t[n]);return e},eA=(e,t)=>G3(e,X3(t));const tA=ye({name:"Starport",inheritAttrs:!0,props:vh,setup(e,t){const n=W(!1);return Ns(()=>{if(n.value=!0,!D(ii))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,a;const s=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let o=r.type;return(!H3(o)||dn(o))&&(o={render(){return s}}),ut(K3,eA(J3({},e),{key:e.port,component:qo(o),props:r.props}))}}});function nA(e){const t=Ue({height:0,width:0,left:0,top:0,update:s,listen:o,pause:i,margin:"0px",padding:"0px"}),n=dr?document.documentElement||document.body:void 0;function s(){if(!dr)return;const a=V3(e);if(!a)return;const{height:c,width:u,left:f,top:d}=a.getBoundingClientRect(),p=window.getComputedStyle(a),h=p.margin,m=p.padding;Object.assign(t,{height:c,width:u,left:f,top:n.scrollTop+d,margin:h,padding:m})}const r=q3(s,{immediate:!1});function o(){dr&&(s(),r.resume())}function i(){r.pause()}return t}let sA=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const Xu=sA("abcdefghijklmnopqrstuvwxyz",5);function Zu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function rA(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var oA=Object.defineProperty,Qu=Object.getOwnPropertySymbols,iA=Object.prototype.hasOwnProperty,lA=Object.prototype.propertyIsEnumerable,Ju=(e,t,n)=>t in e?oA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fi=(e,t)=>{for(var n in t||(t={}))iA.call(t,n)&&Ju(e,n,t[n]);if(Qu)for(var n of Qu(t))lA.call(t,n)&&Ju(e,n,t[n]);return e};function aA(e,t,n={}){const s=rA(t),r=Zu(s)||Xu(),o=W(),i=W(null),a=W(!1),c=W(!1),u=Fh(!0),f=W({}),d=O(()=>Fi(Fi(Fi({},B3),n),f.value)),p=W(0);let h;u.run(()=>{h=nA(o),me(o,async $=>{$&&(c.value=!0),await et(),o.value||(c.value=!1)})});const m=Zu(e);function _(){return`starport-${r}-${m}-${Xu()}`}const y=_();return Ue({el:o,id:y,port:e,props:i,rect:h,scope:u,isLanded:a,isVisible:c,options:d,liftOffTime:p,component:t,componentName:s,componentId:r,generateId:_,setLocalOptions($={}){f.value=JSON.parse(JSON.stringify($))},elRef(){return o},liftOff(){a.value&&(a.value=!1,p.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function cA(e){const t=Ue(new Map);function n(r,o){let i=t.get(r);return i||(i=aA(r,o,e),t.set(r,i)),i.component=o,i}function s(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var uA=Object.defineProperty,fA=Object.defineProperties,dA=Object.getOwnPropertyDescriptors,ef=Object.getOwnPropertySymbols,pA=Object.prototype.hasOwnProperty,hA=Object.prototype.propertyIsEnumerable,tf=(e,t,n)=>t in e?uA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mA=(e,t)=>{for(var n in t||(t={}))pA.call(t,n)&&tf(e,n,t[n]);if(ef)for(var n of ef(t))hA.call(t,n)&&tf(e,n,t[n]);return e},gA=(e,t)=>fA(e,dA(t));const _A=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=D(ii);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=O(()=>t.getInstance(e.port,e.component)),s=O(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=O(()=>{const i=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?gA(mA({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),o={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return ut("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ut(jg,{to:i?`#${s.value}`:"body",disabled:!i},ut(n.value.component,yr(o,n.value.props))))}}}),vA=ye({name:"StarportCarrier",setup(e,{slots:t}){const n=cA(D(_h,{}));return Mt().appContext.app.provide(ii,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:i}])=>ut(_A,{key:o,port:o,component:i}))]}}});function yA(e={}){return{install(t){t.provide(_h,e),t.component("Starport",tA),t.component("StarportCarrier",vA)}}}function bA(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(F3),e.app.use(yA({keepAlive:!0}))}function bt(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function wA(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var f,d,p,h;if(ar.value||(f=bt(n,uo))!=null&&f.value)return;const s=bt(n,ys),r=bt(n,co),o=bt(n,rl),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((d=s==null?void 0:s.value)==null?void 0:d.length)||0,u=a?Sv:yi;if(s&&!((p=s==null?void 0:s.value)!=null&&p.includes(t))&&s.value.push(t),n.value==null&&(n.value=s==null?void 0:s.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((h=o==null?void 0:o.value.get(n.value))!=null&&h.includes(t))){const m=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(ds,!0),r&&me(r,()=>{const m=(r==null?void 0:r.value)??0,_=n.value!=null?m>=n.value:m>c;t.classList.contains(bi)||t.classList.toggle(u,!_),i!==!1&&i!==void 0&&t.classList.toggle(u,_),t.classList.toggle(qs,!1);const y=o==null?void 0:o.value.get(m);y==null||y.forEach(($,b)=>{$.classList.toggle(Jr,!1),b===y.length-1?$.classList.toggle(qs,!0):$.classList.toggle(Jr,!0)}),t.classList.contains(qs)||t.classList.toggle(Jr,_)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ds,!1);const s=bt(n,ys);s!=null&&s.value&&Pc(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c;if(ar.value||(a=bt(n,uo))!=null&&a.value)return;const s=bt(n,ys),r=bt(n,co),o=bt(n,rl),i=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),o!=null&&o.value.has(n.value)?(c=o==null?void 0:o.value.get(n.value))==null||c.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(ds,!0),r&&me(r,()=>{const u=(r.value??0)>=(n.value??i??0);t.classList.contains(bi)||t.classList.toggle(yi,!u),t.classList.toggle(qs,!1),t.classList.contains(qs)||t.classList.toggle(Jr,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(ds,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,a,c;if(ar.value||(i=bt(n,uo))!=null&&i.value)return;const s=bt(n,ys),r=bt(n,co),o=((a=s==null?void 0:s.value)==null?void 0:a.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(ds,!0),r&&me(r,()=>{const u=(r==null?void 0:r.value)??0,f=n.value!=null?u>=n.value:u>o;t.classList.toggle(yi,f),t.classList.toggle(bi,f)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ds,!1);const s=bt(n,ys);s!=null&&s.value&&Pc(s.value,t)}})}}}function xA(e,t){const n=Sp(e),s=kp(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:xl,next:Mn,nextSlide:Tr,openInEditor:QO,prev:Ln,prevSlide:Cr},configs:Te,themeConfigs:O(()=>Te.themeConfig)}}function $A(){return{install(e){const t=xA(It,Ct);e.provide(Z,Ue(t))}}}const js=R_(rT);js.use(_t);js.use(wv());js.use(wA());js.use($A());bA({app:js,router:_t});js.mount("#app");export{ga as $,xx as A,W as B,TA as C,lt as D,We as E,Ie as F,Cb as G,ZO as H,Ct as I,Lo as J,WO as K,Oi as L,Ns as M,Ue as N,PA as O,CA as P,me as Q,te as R,hp as S,Ce as T,it as U,qb as V,kr as W,Ei as X,r2 as Y,ma as Z,J as _,Z as a,Jx as a0,ze as a1,tw as a2,SA as a3,kA as a4,EA as a5,Xt as a6,Xs as a7,to as a8,Xn as a9,Kt as aa,vl as ab,_b as ac,vb as ad,yb as ae,wb as af,Xo as ag,xd as ah,AA as ai,ft as aj,Nw as ak,Cd as al,xb as am,jr as an,ia as b,Te as c,ye as d,wm as e,G as f,l as g,x as h,D as i,Ye as j,Tp as k,ne as l,z as m,ct as n,E as o,ge as p,aa as q,Hr as r,Vt as s,cn as t,OA as u,O as v,wi as w,X as x,ip as y,Px as z};
