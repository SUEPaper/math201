(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();function Lt(s,t){const l=Object.create(null),n=s.split(",");for(let o=0;o<n.length;o++)l[n[o]]=!0;return t?o=>!!l[o.toLowerCase()]:o=>!!l[o]}function as(s){if(pe(s)){const t={};for(let l=0;l<s.length;l++){const n=s[l],o=Ue(n)?gB(n):as(n);if(o)for(const a in o)t[a]=o[a]}return t}else{if(Ue(s))return s;if(Re(s))return s}}const mB=/;(?![^(]*\))/g,FB=/:([^]+)/,hB=/\/\*.*?\*\//gs;function gB(s){const t={};return s.replace(hB,"").split(mB).forEach(l=>{if(l){const n=l.split(FB);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Xe(s){let t="";if(Ue(s))t=s;else if(pe(s))for(let l=0;l<s.length;l++){const n=Xe(s[l]);n&&(t+=n+" ")}else if(Re(s))for(const l in s)s[l]&&(t+=l+" ");return t.trim()}function K(s){if(!s)return null;let{class:t,style:l}=s;return t&&!Ue(t)&&(s.class=Xe(t)),l&&(s.style=as(l)),s}const _B="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",bB="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Qi=Lt(_B),vB=Lt(bB),xB="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wB=Lt(xB);function e2(s){return!!s||s===""}const yt=s=>Ue(s)?s:s==null?"":pe(s)||Re(s)&&(s.toString===n2||!Be(s.toString))?JSON.stringify(s,s2,2):String(s),s2=(s,t)=>t&&t.__v_isRef?s2(s,t.value):el(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((l,[n,o])=>(l[`${n} =>`]=o,l),{})}:l2(t)?{[`Set(${t.size})`]:[...t.values()]}:Re(t)&&!pe(t)&&!o2(t)?String(t):t,He=Object.freeze({}),El=Object.freeze([]),Fs=()=>{},t2=()=>!1,EB=/^on[^a-z]/,In=s=>EB.test(s),ho=s=>s.startsWith("onUpdate:"),ze=Object.assign,Pr=(s,t)=>{const l=s.indexOf(t);l>-1&&s.splice(l,1)},kB=Object.prototype.hasOwnProperty,Ee=(s,t)=>kB.call(s,t),pe=Array.isArray,el=s=>Rn(s)==="[object Map]",l2=s=>Rn(s)==="[object Set]",DB=s=>Rn(s)==="[object RegExp]",Be=s=>typeof s=="function",Ue=s=>typeof s=="string",Tr=s=>typeof s=="symbol",Re=s=>s!==null&&typeof s=="object",Ir=s=>Re(s)&&Be(s.then)&&Be(s.catch),n2=Object.prototype.toString,Rn=s=>n2.call(s),Rr=s=>Rn(s).slice(8,-1),o2=s=>Rn(s)==="[object Object]",Lr=s=>Ue(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,ro=Lt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),SB=Lt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Lo=s=>{const t=Object.create(null);return l=>t[l]||(t[l]=s(l))},CB=/-(\w)/g,Js=Lo(s=>s.replace(CB,(t,l)=>l?l.toUpperCase():"")),$B=/\B([A-Z])/g,ut=Lo(s=>s.replace($B,"-$1").toLowerCase()),rl=Lo(s=>s.charAt(0).toUpperCase()+s.slice(1)),zt=Lo(s=>s?`on${rl(s)}`:""),Fn=(s,t)=>!Object.is(s,t),xt=(s,t)=>{for(let l=0;l<s.length;l++)s[l](t)},go=(s,t,l)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value:l})},Ia=s=>{const t=parseFloat(s);return isNaN(t)?s:t},AB=s=>{const t=Ue(s)?Number(s):NaN;return isNaN(t)?s:t};let Ic;const a2=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _o(s,...t){console.warn(`[Vue warn] ${s}`,...t)}let xs;class r2{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xs,!t&&xs&&(this.index=(xs.scopes||(xs.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const l=xs;try{return xs=this,t()}finally{xs=l}}else _o("cannot run an inactive effect scope.")}on(){xs=this}off(){xs=this.parent}stop(t){if(this._active){let l,n;for(l=0,n=this.effects.length;l<n;l++)this.effects[l].stop();for(l=0,n=this.cleanups.length;l<n;l++)this.cleanups[l]();if(this.scopes)for(l=0,n=this.scopes.length;l<n;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function MB(s){return new r2(s)}function OB(s,t=xs){t&&t.active&&t.effects.push(s)}function Nr(){return xs}function c2(s){xs?xs.cleanups.push(s):_o("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Hr=s=>{const t=new Set(s);return t.w=0,t.n=0,t},p2=s=>(s.w&Pt)>0,i2=s=>(s.n&Pt)>0,PB=({deps:s})=>{if(s.length)for(let t=0;t<s.length;t++)s[t].w|=Pt},TB=s=>{const{deps:t}=s;if(t.length){let l=0;for(let n=0;n<t.length;n++){const o=t[n];p2(o)&&!i2(o)?o.delete(s):t[l++]=o,o.w&=~Pt,o.n&=~Pt}t.length=l}},bo=new WeakMap;let Jl=0,Pt=1;const Ra=30;let us;const sl=Symbol("iterate"),La=Symbol("Map key iterate");class qr{constructor(t,l=null,n){this.fn=t,this.scheduler=l,this.active=!0,this.deps=[],this.parent=void 0,OB(this,n)}run(){if(!this.active)return this.fn();let t=us,l=Dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=us,us=this,Dt=!0,Pt=1<<++Jl,Jl<=Ra?PB(this):Rc(this),this.fn()}finally{Jl<=Ra&&TB(this),Pt=1<<--Jl,us=this.parent,Dt=l,this.parent=void 0,this.deferStop&&this.stop()}}stop(){us===this?this.deferStop=!0:this.active&&(Rc(this),this.onStop&&this.onStop(),this.active=!1)}}function Rc(s){const{deps:t}=s;if(t.length){for(let l=0;l<t.length;l++)t[l].delete(s);t.length=0}}let Dt=!0;const y2=[];function pl(){y2.push(Dt),Dt=!1}function il(){const s=y2.pop();Dt=s===void 0?!0:s}function gs(s,t,l){if(Dt&&us){let n=bo.get(s);n||bo.set(s,n=new Map);let o=n.get(l);o||n.set(l,o=Hr()),u2(o,{effect:us,target:s,type:t,key:l})}}function u2(s,t){let l=!1;Jl<=Ra?i2(s)||(s.n|=Pt,l=!p2(s)):l=!s.has(us),l&&(s.add(us),us.deps.push(s),us.onTrack&&us.onTrack(Object.assign({effect:us},t)))}function Bt(s,t,l,n,o,a){const r=bo.get(s);if(!r)return;let p=[];if(t==="clear")p=[...r.values()];else if(l==="length"&&pe(s)){const y=Number(n);r.forEach((u,B)=>{(B==="length"||B>=y)&&p.push(u)})}else switch(l!==void 0&&p.push(r.get(l)),t){case"add":pe(s)?Lr(l)&&p.push(r.get("length")):(p.push(r.get(sl)),el(s)&&p.push(r.get(La)));break;case"delete":pe(s)||(p.push(r.get(sl)),el(s)&&p.push(r.get(La)));break;case"set":el(s)&&p.push(r.get(sl));break}const i={target:s,type:t,key:l,newValue:n,oldValue:o,oldTarget:a};if(p.length===1)p[0]&&Na(p[0],i);else{const y=[];for(const u of p)u&&y.push(...u);Na(Hr(y),i)}}function Na(s,t){const l=pe(s)?s:[...s];for(const n of l)n.computed&&Lc(n,t);for(const n of l)n.computed||Lc(n,t)}function Lc(s,t){(s!==us||s.allowRecurse)&&(s.onTrigger&&s.onTrigger(ze({effect:s},t)),s.scheduler?s.scheduler():s.run())}function IB(s,t){var l;return(l=bo.get(s))===null||l===void 0?void 0:l.get(t)}const RB=Lt("__proto__,__v_isRef,__isVue"),B2=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Tr)),LB=No(),NB=No(!1,!0),HB=No(!0),qB=No(!0,!0),Nc=jB();function jB(){const s={};return["includes","indexOf","lastIndexOf"].forEach(t=>{s[t]=function(...l){const n=de(this);for(let a=0,r=this.length;a<r;a++)gs(n,"get",a+"");const o=n[t](...l);return o===-1||o===!1?n[t](...l.map(de)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{s[t]=function(...l){pl();const n=de(this)[t].apply(this,l);return il(),n}}),s}function UB(s){const t=de(this);return gs(t,"has",s),t.hasOwnProperty(s)}function No(s=!1,t=!1){return function(n,o,a){if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&a===(s?t?b2:_2:t?g2:h2).get(n))return n;const r=pe(n);if(!s){if(r&&Ee(Nc,o))return Reflect.get(Nc,o,a);if(o==="hasOwnProperty")return UB}const p=Reflect.get(n,o,a);return(Tr(o)?B2.has(o):RB(o))||(s||gs(n,"get",o),t)?p:Me(p)?r&&Lr(o)?p:p.value:Re(p)?s?Ks(p):Ve(p):p}}const VB=d2(),zB=d2(!0);function d2(s=!1){return function(l,n,o,a){let r=l[n];if(Tt(r)&&Me(r)&&!Me(o))return!1;if(!s&&(!vo(o)&&!Tt(o)&&(r=de(r),o=de(o)),!pe(l)&&Me(r)&&!Me(o)))return r.value=o,!0;const p=pe(l)&&Lr(n)?Number(n)<l.length:Ee(l,n),i=Reflect.set(l,n,o,a);return l===de(a)&&(p?Fn(o,r)&&Bt(l,"set",n,o,r):Bt(l,"add",n,o)),i}}function WB(s,t){const l=Ee(s,t),n=s[t],o=Reflect.deleteProperty(s,t);return o&&l&&Bt(s,"delete",t,void 0,n),o}function YB(s,t){const l=Reflect.has(s,t);return(!Tr(t)||!B2.has(t))&&gs(s,"has",t),l}function XB(s){return gs(s,"iterate",pe(s)?"length":sl),Reflect.ownKeys(s)}const f2={get:LB,set:VB,deleteProperty:WB,has:YB,ownKeys:XB},m2={get:HB,set(s,t){return _o(`Set operation on key "${String(t)}" failed: target is readonly.`,s),!0},deleteProperty(s,t){return _o(`Delete operation on key "${String(t)}" failed: target is readonly.`,s),!0}},KB=ze({},f2,{get:NB,set:zB}),ZB=ze({},m2,{get:qB}),jr=s=>s,Ho=s=>Reflect.getPrototypeOf(s);function Xn(s,t,l=!1,n=!1){s=s.__v_raw;const o=de(s),a=de(t);l||(t!==a&&gs(o,"get",t),gs(o,"get",a));const{has:r}=Ho(o),p=n?jr:l?Ur:hn;if(r.call(o,t))return p(s.get(t));if(r.call(o,a))return p(s.get(a));s!==o&&s.get(t)}function Kn(s,t=!1){const l=this.__v_raw,n=de(l),o=de(s);return t||(s!==o&&gs(n,"has",s),gs(n,"has",o)),s===o?l.has(s):l.has(s)||l.has(o)}function Zn(s,t=!1){return s=s.__v_raw,!t&&gs(de(s),"iterate",sl),Reflect.get(s,"size",s)}function Hc(s){s=de(s);const t=de(this);return Ho(t).has.call(t,s)||(t.add(s),Bt(t,"add",s,s)),this}function qc(s,t){t=de(t);const l=de(this),{has:n,get:o}=Ho(l);let a=n.call(l,s);a?F2(l,n,s):(s=de(s),a=n.call(l,s));const r=o.call(l,s);return l.set(s,t),a?Fn(t,r)&&Bt(l,"set",s,t,r):Bt(l,"add",s,t),this}function jc(s){const t=de(this),{has:l,get:n}=Ho(t);let o=l.call(t,s);o?F2(t,l,s):(s=de(s),o=l.call(t,s));const a=n?n.call(t,s):void 0,r=t.delete(s);return o&&Bt(t,"delete",s,void 0,a),r}function Uc(){const s=de(this),t=s.size!==0,l=el(s)?new Map(s):new Set(s),n=s.clear();return t&&Bt(s,"clear",void 0,void 0,l),n}function Gn(s,t){return function(n,o){const a=this,r=a.__v_raw,p=de(r),i=t?jr:s?Ur:hn;return!s&&gs(p,"iterate",sl),r.forEach((y,u)=>n.call(o,i(y),i(u),a))}}function Jn(s,t,l){return function(...n){const o=this.__v_raw,a=de(o),r=el(a),p=s==="entries"||s===Symbol.iterator&&r,i=s==="keys"&&r,y=o[s](...n),u=l?jr:t?Ur:hn;return!t&&gs(a,"iterate",i?La:sl),{next(){const{value:B,done:d}=y.next();return d?{value:B,done:d}:{value:p?[u(B[0]),u(B[1])]:u(B),done:d}},[Symbol.iterator](){return this}}}}function mt(s){return function(...t){{const l=t[0]?`on key "${t[0]}" `:"";console.warn(`${rl(s)} operation ${l}failed: target is readonly.`,de(this))}return s==="delete"?!1:this}}function GB(){const s={get(a){return Xn(this,a)},get size(){return Zn(this)},has:Kn,add:Hc,set:qc,delete:jc,clear:Uc,forEach:Gn(!1,!1)},t={get(a){return Xn(this,a,!1,!0)},get size(){return Zn(this)},has:Kn,add:Hc,set:qc,delete:jc,clear:Uc,forEach:Gn(!1,!0)},l={get(a){return Xn(this,a,!0)},get size(){return Zn(this,!0)},has(a){return Kn.call(this,a,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Gn(!0,!1)},n={get(a){return Xn(this,a,!0,!0)},get size(){return Zn(this,!0)},has(a){return Kn.call(this,a,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Jn(a,!1,!1),l[a]=Jn(a,!0,!1),t[a]=Jn(a,!1,!0),n[a]=Jn(a,!0,!0)}),[s,l,t,n]}const[JB,QB,ed,sd]=GB();function qo(s,t){const l=t?s?sd:ed:s?QB:JB;return(n,o,a)=>o==="__v_isReactive"?!s:o==="__v_isReadonly"?s:o==="__v_raw"?n:Reflect.get(Ee(l,o)&&o in n?l:n,o,a)}const td={get:qo(!1,!1)},ld={get:qo(!1,!0)},nd={get:qo(!0,!1)},od={get:qo(!0,!0)};function F2(s,t,l){const n=de(l);if(n!==l&&t.call(s,n)){const o=Rr(s);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const h2=new WeakMap,g2=new WeakMap,_2=new WeakMap,b2=new WeakMap;function ad(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rd(s){return s.__v_skip||!Object.isExtensible(s)?0:ad(Rr(s))}function Ve(s){return Tt(s)?s:jo(s,!1,f2,td,h2)}function cd(s){return jo(s,!1,KB,ld,g2)}function Ks(s){return jo(s,!0,m2,nd,_2)}function xl(s){return jo(s,!0,ZB,od,b2)}function jo(s,t,l,n,o){if(!Re(s))return console.warn(`value cannot be made reactive: ${String(s)}`),s;if(s.__v_raw&&!(t&&s.__v_isReactive))return s;const a=o.get(s);if(a)return a;const r=rd(s);if(r===0)return s;const p=new Proxy(s,r===2?n:l);return o.set(s,p),p}function tl(s){return Tt(s)?tl(s.__v_raw):!!(s&&s.__v_isReactive)}function Tt(s){return!!(s&&s.__v_isReadonly)}function vo(s){return!!(s&&s.__v_isShallow)}function xo(s){return tl(s)||Tt(s)}function de(s){const t=s&&s.__v_raw;return t?de(t):s}function Uo(s){return go(s,"__v_skip",!0),s}const hn=s=>Re(s)?Ve(s):s,Ur=s=>Re(s)?Ks(s):s;function Vr(s){Dt&&us&&(s=de(s),u2(s.dep||(s.dep=Hr()),{target:s,type:"get",key:"value"}))}function zr(s,t){s=de(s);const l=s.dep;l&&Na(l,{target:s,type:"set",key:"value",newValue:t})}function Me(s){return!!(s&&s.__v_isRef===!0)}function G(s){return v2(s,!1)}function Qs(s){return v2(s,!0)}function v2(s,t){return Me(s)?s:new pd(s,t)}class pd{constructor(t,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?t:de(t),this._value=l?t:hn(t)}get value(){return Vr(this),this._value}set value(t){const l=this.__v_isShallow||vo(t)||Tt(t);t=l?t:de(t),Fn(t,this._rawValue)&&(this._rawValue=t,this._value=l?t:hn(t),zr(this,t))}}function E(s){return Me(s)?s.value:s}const id={get:(s,t,l)=>E(Reflect.get(s,t,l)),set:(s,t,l,n)=>{const o=s[t];return Me(o)&&!Me(l)?(o.value=l,!0):Reflect.set(s,t,l,n)}};function x2(s){return tl(s)?s:new Proxy(s,id)}class yd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:n}=t(()=>Vr(this),()=>zr(this));this._get=l,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function w2(s){return new yd(s)}function ud(s){xo(s)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=pe(s)?new Array(s.length):{};for(const l in s)t[l]=dd(s,l);return t}class Bd{constructor(t,l,n){this._object=t,this._key=l,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return IB(de(this._object),this._key)}}function dd(s,t,l){const n=s[t];return Me(n)?n:new Bd(s,t,l)}var E2;class fd{constructor(t,l,n,o){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this[E2]=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,zr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=de(this);return Vr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}E2="__v_isReadonly";function md(s,t,l=!1){let n,o;const a=Be(s);a?(n=s,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(n=s.get,o=s.set);const r=new fd(n,o,a||!o,l);return t&&!l&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const ll=[];function co(s){ll.push(s)}function po(){ll.pop()}function H(s,...t){pl();const l=ll.length?ll[ll.length-1].component:null,n=l&&l.appContext.config.warnHandler,o=Fd();if(n)it(n,l,11,[s+t.join(""),l&&l.proxy,o.map(({vnode:a})=>`at <${Qo(l,a.type)}>`).join(`
`),o]);else{const a=[`[Vue warn]: ${s}`,...t];o.length&&a.push(`
`,...hd(o)),console.warn(...a)}il()}function Fd(){let s=ll[ll.length-1];if(!s)return[];const t=[];for(;s;){const l=t[0];l&&l.vnode===s?l.recurseCount++:t.push({vnode:s,recurseCount:0});const n=s.component&&s.component.parent;s=n&&n.vnode}return t}function hd(s){const t=[];return s.forEach((l,n)=>{t.push(...n===0?[]:[`
`],...gd(l))}),t}function gd({vnode:s,recurseCount:t}){const l=t>0?`... (${t} recursive calls)`:"",n=s.component?s.component.parent==null:!1,o=` at <${Qo(s.component,s.type,n)}`,a=">"+l;return s.props?[o,..._d(s.props),a]:[o+a]}function _d(s){const t=[],l=Object.keys(s);return l.slice(0,3).forEach(n=>{t.push(...k2(n,s[n]))}),l.length>3&&t.push(" ..."),t}function k2(s,t,l){return Ue(t)?(t=JSON.stringify(t),l?t:[`${s}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?l?t:[`${s}=${t}`]:Me(t)?(t=k2(s,de(t.value),!0),l?t:[`${s}=Ref<`,t,">"]):Be(t)?[`${s}=fn${t.name?`<${t.name}>`:""}`]:(t=de(t),l?t:[`${s}=`,t])}function bd(s,t){s!==void 0&&(typeof s!="number"?H(`${t} is not a valid number - got ${JSON.stringify(s)}.`):isNaN(s)&&H(`${t} is NaN - the duration expression might be incorrect.`))}const Wr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function it(s,t,l,n){let o;try{o=n?s(...n):s()}catch(a){Vo(a,t,l)}return o}function Ps(s,t,l,n){if(Be(s)){const a=it(s,t,l,n);return a&&Ir(a)&&a.catch(r=>{Vo(r,t,l)}),a}const o=[];for(let a=0;a<s.length;a++)o.push(Ps(s[a],t,l,n));return o}function Vo(s,t,l,n=!0){const o=t?t.vnode:null;if(t){let a=t.parent;const r=t.proxy,p=Wr[l];for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](s,r,p)===!1)return}a=a.parent}const i=t.appContext.config.errorHandler;if(i){it(i,null,10,[s,r,p]);return}}vd(s,l,o,n)}function vd(s,t,l,n=!0){{const o=Wr[t];if(l&&co(l),H(`Unhandled error${o?` during execution of ${o}`:""}`),l&&po(),n)throw s;console.error(s)}}let gn=!1,Ha=!1;const os=[];let Ys=0;const kl=[];let Ws=null,_t=0;const D2=Promise.resolve();let Yr=null;const xd=100;function ts(s){const t=Yr||D2;return s?t.then(this?s.bind(this):s):t}function wd(s){let t=Ys+1,l=os.length;for(;t<l;){const n=t+l>>>1;_n(os[n])<s?t=n+1:l=n}return t}function zo(s){(!os.length||!os.includes(s,gn&&s.allowRecurse?Ys+1:Ys))&&(s.id==null?os.push(s):os.splice(wd(s.id),0,s),S2())}function S2(){!gn&&!Ha&&(Ha=!0,Yr=D2.then(A2))}function Ed(s){const t=os.indexOf(s);t>Ys&&os.splice(t,1)}function C2(s){pe(s)?kl.push(...s):(!Ws||!Ws.includes(s,s.allowRecurse?_t+1:_t))&&kl.push(s),S2()}function Vc(s,t=gn?Ys+1:0){for(s=s||new Map;t<os.length;t++){const l=os[t];if(l&&l.pre){if(Xr(s,l))continue;os.splice(t,1),t--,l()}}}function $2(s){if(kl.length){const t=[...new Set(kl)];if(kl.length=0,Ws){Ws.push(...t);return}for(Ws=t,s=s||new Map,Ws.sort((l,n)=>_n(l)-_n(n)),_t=0;_t<Ws.length;_t++)Xr(s,Ws[_t])||Ws[_t]();Ws=null,_t=0}}const _n=s=>s.id==null?1/0:s.id,kd=(s,t)=>{const l=_n(s)-_n(t);if(l===0){if(s.pre&&!t.pre)return-1;if(t.pre&&!s.pre)return 1}return l};function A2(s){Ha=!1,gn=!0,s=s||new Map,os.sort(kd);const t=l=>Xr(s,l);try{for(Ys=0;Ys<os.length;Ys++){const l=os[Ys];if(l&&l.active!==!1){if(t(l))continue;it(l,null,14)}}}finally{Ys=0,os.length=0,$2(s),gn=!1,Yr=null,(os.length||kl.length)&&A2(s)}}function Xr(s,t){if(!s.has(t))s.set(t,1);else{const l=s.get(t);if(l>xd){const n=t.ownerInstance,o=n&&wn(n.type);return H(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else s.set(t,l+1)}}let St=!1;const _l=new Set;a2().__VUE_HMR_RUNTIME__={createRecord:oa(M2),rerender:oa(Cd),reload:oa($d)};const cl=new Map;function Dd(s){const t=s.type.__hmrId;let l=cl.get(t);l||(M2(t,s.type),l=cl.get(t)),l.instances.add(s)}function Sd(s){cl.get(s.type.__hmrId).instances.delete(s)}function M2(s,t){return cl.has(s)?!1:(cl.set(s,{initialDef:ln(t),instances:new Set}),!0)}function ln(s){return iy(s)?s.__vccOpts:s}function Cd(s,t){const l=cl.get(s);l&&(l.initialDef.render=t,[...l.instances].forEach(n=>{t&&(n.render=t,ln(n.type).render=t),n.renderCache=[],St=!0,n.update(),St=!1}))}function $d(s,t){const l=cl.get(s);if(!l)return;t=ln(t),zc(l.initialDef,t);const n=[...l.instances];for(const o of n){const a=ln(o.type);_l.has(a)||(a!==l.initialDef&&zc(a,t),_l.add(a)),o.appContext.optionsCache.delete(o.type),o.ceReload?(_l.add(a),o.ceReload(t.styles),_l.delete(a)):o.parent?zo(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}C2(()=>{for(const o of n)_l.delete(ln(o.type))})}function zc(s,t){ze(s,t);for(const l in s)l!=="__file"&&!(l in t)&&delete s[l]}function oa(s){return(t,l)=>{try{return s(t,l)}catch(n){console.error(n),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xs,Ql=[],qa=!1;function Ln(s,...t){Xs?Xs.emit(s,...t):qa||Ql.push({event:s,args:t})}function O2(s,t){var l,n;Xs=s,Xs?(Xs.enabled=!0,Ql.forEach(({event:o,args:a})=>Xs.emit(o,...a)),Ql=[]):typeof window<"u"&&window.HTMLElement&&!(!((n=(l=window.navigator)===null||l===void 0?void 0:l.userAgent)===null||n===void 0)&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{O2(a,t)}),setTimeout(()=>{Xs||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,qa=!0,Ql=[])},3e3)):(qa=!0,Ql=[])}function Ad(s,t){Ln("app:init",s,t,{Fragment:Te,Text:jn,Comment:Qe,Static:io})}function Md(s){Ln("app:unmount",s)}const ja=Kr("component:added"),P2=Kr("component:updated"),Od=Kr("component:removed"),Pd=s=>{Xs&&typeof Xs.cleanupBuffer=="function"&&!Xs.cleanupBuffer(s)&&Od(s)};function Kr(s){return t=>{Ln(s,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Td=T2("perf:start"),Id=T2("perf:end");function T2(s){return(t,l,n)=>{Ln(s,t.appContext.app,t.uid,t,l,n)}}function Rd(s,t,l){Ln("component:emit",s.appContext.app,s,t,l)}function Ld(s,t,...l){if(s.isUnmounted)return;const n=s.vnode.props||He;{const{emitsOptions:u,propsOptions:[B]}=s;if(u)if(!(t in u))(!B||!(zt(t)in B))&&H(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${zt(t)}" prop.`);else{const d=u[t];Be(d)&&(d(...l)||H(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=l;const a=t.startsWith("update:"),r=a&&t.slice(7);if(r&&r in n){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:B,trim:d}=n[u]||He;d&&(o=l.map(f=>Ue(f)?f.trim():f)),B&&(o=l.map(Ia))}Rd(s,t,o);{const u=t.toLowerCase();u!==t&&n[zt(u)]&&H(`Event "${u}" is emitted in component ${Qo(s,s.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ut(t)}" instead of "${t}".`)}let p,i=n[p=zt(t)]||n[p=zt(Js(t))];!i&&a&&(i=n[p=zt(ut(t))]),i&&Ps(i,s,6,o);const y=n[p+"Once"];if(y){if(!s.emitted)s.emitted={};else if(s.emitted[p])return;s.emitted[p]=!0,Ps(y,s,6,o)}}function I2(s,t,l=!1){const n=t.emitsCache,o=n.get(s);if(o!==void 0)return o;const a=s.emits;let r={},p=!1;if(!Be(s)){const i=y=>{const u=I2(y,t,!0);u&&(p=!0,ze(r,u))};!l&&t.mixins.length&&t.mixins.forEach(i),s.extends&&i(s.extends),s.mixins&&s.mixins.forEach(i)}return!a&&!p?(Re(s)&&n.set(s,null),null):(pe(a)?a.forEach(i=>r[i]=null):ze(r,a),Re(s)&&n.set(s,r),r)}function Wo(s,t){return!s||!In(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(s,t[0].toLowerCase()+t.slice(1))||Ee(s,ut(t))||Ee(s,t))}let Je=null,Yo=null;function wo(s){const t=Je;return Je=s,Yo=s&&s.type.__scopeId||null,t}function jD(s){Yo=s}function UD(){Yo=null}function S(s,t=Je,l){if(!t||s._n)return s;const n=(...o)=>{n._d&&np(-1);const a=wo(t);let r;try{r=s(...o)}finally{wo(a),n._d&&np(1)}return P2(t),r};return n._n=!0,n._c=!0,n._d=!0,n}let Ua=!1;function Eo(){Ua=!0}function aa(s){const{type:t,vnode:l,proxy:n,withProxy:o,props:a,propsOptions:[r],slots:p,attrs:i,emit:y,render:u,renderCache:B,data:d,setupState:f,ctx:m,inheritAttrs:h}=s;let _,x;const v=wo(s);Ua=!1;try{if(l.shapeFlag&4){const M=o||n;_=Hs(u.call(M,M,B,a,f,d,m)),x=i}else{const M=t;i===a&&Eo(),_=Hs(M.length>1?M(a,{get attrs(){return Eo(),i},slots:p,emit:y}):M(a,null)),x=t.props?i:Hd(i)}}catch(M){on.length=0,Vo(M,s,1),_=j(Qe)}let w=_,k;if(_.patchFlag>0&&_.patchFlag&2048&&([w,k]=Nd(_)),x&&h!==!1){const M=Object.keys(x),{shapeFlag:N}=w;if(M.length){if(N&7)r&&M.some(ho)&&(x=qd(x,r)),w=js(w,x);else if(!Ua&&w.type!==Qe){const J=Object.keys(i),R=[],X=[];for(let ne=0,ye=J.length;ne<ye;ne++){const Q=J[ne];In(Q)?ho(Q)||R.push(Q[2].toLowerCase()+Q.slice(3)):X.push(Q)}X.length&&H(`Extraneous non-props attributes (${X.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),R.length&&H(`Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return l.dirs&&(Wc(w)||H("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=js(w),w.dirs=w.dirs?w.dirs.concat(l.dirs):l.dirs),l.transition&&(Wc(w)||H("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=l.transition),k?k(w):_=w,wo(v),_}const Nd=s=>{const t=s.children,l=s.dynamicChildren,n=R2(t);if(!n)return[s,void 0];const o=t.indexOf(n),a=l?l.indexOf(n):-1,r=p=>{t[o]=p,l&&(a>-1?l[a]=p:p.patchFlag>0&&(s.dynamicChildren=[...l,p]))};return[Hs(n),r]};function R2(s){let t;for(let l=0;l<s.length;l++){const n=s[l];if(It(n)){if(n.type!==Qe||n.children==="v-if"){if(t)return;t=n}}else return}return t}const Hd=s=>{let t;for(const l in s)(l==="class"||l==="style"||In(l))&&((t||(t={}))[l]=s[l]);return t},qd=(s,t)=>{const l={};for(const n in s)(!ho(n)||!(n.slice(9)in t))&&(l[n]=s[n]);return l},Wc=s=>s.shapeFlag&7||s.type===Qe;function jd(s,t,l){const{props:n,children:o,component:a}=s,{props:r,children:p,patchFlag:i}=t,y=a.emitsOptions;if((o||p)&&St||t.dirs||t.transition)return!0;if(l&&i>=0){if(i&1024)return!0;if(i&16)return n?Yc(n,r,y):!!r;if(i&8){const u=t.dynamicProps;for(let B=0;B<u.length;B++){const d=u[B];if(r[d]!==n[d]&&!Wo(y,d))return!0}}}else return(o||p)&&(!p||!p.$stable)?!0:n===r?!1:n?r?Yc(n,r,y):!0:!!r;return!1}function Yc(s,t,l){const n=Object.keys(t);if(n.length!==Object.keys(s).length)return!0;for(let o=0;o<n.length;o++){const a=n[o];if(t[a]!==s[a]&&!Wo(l,a))return!0}return!1}function Ud({vnode:s,parent:t},l){for(;t&&t.subTree===s;)(s=t.vnode).el=l,t=t.parent}const L2=s=>s.__isSuspense;function Vd(s,t){t&&t.pendingBranch?pe(s)?t.effects.push(...s):t.effects.push(s):C2(s)}function ws(s,t){if(!We)H("provide() can only be used inside setup().");else{let l=We.provides;const n=We.parent&&We.parent.provides;n===l&&(l=We.provides=Object.create(n)),l[s]=t}}function C(s,t,l=!1){const n=We||Je;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&s in o)return o[s];if(arguments.length>1)return l&&Be(t)?t.call(n.proxy):t;H(`injection "${String(s)}" not found.`)}else H("inject() can only be used inside setup() or functional components.")}function yl(s,t){return Zr(s,null,t)}const Qn={};function ge(s,t,l){return Be(t)||H("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Zr(s,t,l)}function Zr(s,t,{immediate:l,deep:n,flush:o,onTrack:a,onTrigger:r}=He){t||(l!==void 0&&H('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),n!==void 0&&H('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=k=>{H("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Nr()===(We==null?void 0:We.scope)?We:null;let y,u=!1,B=!1;if(Me(s)?(y=()=>s.value,u=vo(s)):tl(s)?(y=()=>s,n=!0):pe(s)?(B=!0,u=s.some(k=>tl(k)||vo(k)),y=()=>s.map(k=>{if(Me(k))return k.value;if(tl(k))return Gt(k);if(Be(k))return it(k,i,2);p(k)})):Be(s)?t?y=()=>it(s,i,2):y=()=>{if(!(i&&i.isUnmounted))return d&&d(),Ps(s,i,3,[f])}:(y=Fs,p(s)),t&&n){const k=y;y=()=>Gt(k())}let d,f=k=>{d=v.onStop=()=>{it(k,i,4)}},m;if(xn)if(f=Fs,t?l&&Ps(t,i,3,[y(),B?[]:void 0,f]):y(),o==="sync"){const k=Z1();m=k.__watcherHandles||(k.__watcherHandles=[])}else return Fs;let h=B?new Array(s.length).fill(Qn):Qn;const _=()=>{if(v.active)if(t){const k=v.run();(n||u||(B?k.some((M,N)=>Fn(M,h[N])):Fn(k,h)))&&(d&&d(),Ps(t,i,3,[k,h===Qn?void 0:B&&h[0]===Qn?[]:h,f]),h=k)}else v.run()};_.allowRecurse=!!t;let x;o==="sync"?x=_:o==="post"?x=()=>ss(_,i&&i.suspense):(_.pre=!0,i&&(_.id=i.uid),x=()=>zo(_));const v=new qr(y,x);v.onTrack=a,v.onTrigger=r,t?l?_():h=v.run():o==="post"?ss(v.run.bind(v),i&&i.suspense):v.run();const w=()=>{v.stop(),i&&i.scope&&Pr(i.scope.effects,v)};return m&&m.push(w),w}function zd(s,t,l){const n=this.proxy,o=Ue(s)?s.includes(".")?N2(n,s):()=>n[s]:s.bind(n,n);let a;Be(t)?a=t:(a=t.handler,l=t);const r=We;Pl(this);const p=Zr(o,a.bind(n),l);return r?Pl(r):ol(),p}function N2(s,t){const l=t.split(".");return()=>{let n=s;for(let o=0;o<l.length&&n;o++)n=n[l[o]];return n}}function Gt(s,t){if(!Re(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),Me(s))Gt(s.value,t);else if(pe(s))for(let l=0;l<s.length;l++)Gt(s[l],t);else if(l2(s)||el(s))s.forEach(l=>{Gt(l,t)});else if(o2(s))for(const l in s)Gt(s[l],t);return s}function H2(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ul(()=>{s.isMounted=!0}),Hn(()=>{s.isUnmounting=!0}),s}const $s=[Function,Array],Wd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$s,onEnter:$s,onAfterEnter:$s,onEnterCancelled:$s,onBeforeLeave:$s,onLeave:$s,onAfterLeave:$s,onLeaveCancelled:$s,onBeforeAppear:$s,onAppear:$s,onAfterAppear:$s,onAppearCancelled:$s},setup(s,{slots:t}){const l=Cs(),n=H2();let o;return()=>{const a=t.default&&Gr(t.default(),!0);if(!a||!a.length)return;let r=a[0];if(a.length>1){let h=!1;for(const _ of a)if(_.type!==Qe){if(h){H("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}r=_,h=!0}}const p=de(s),{mode:i}=p;if(i&&i!=="in-out"&&i!=="out-in"&&i!=="default"&&H(`invalid <transition> mode: ${i}`),n.isLeaving)return ra(r);const y=Xc(r);if(!y)return ra(r);const u=bn(y,p,n,l);Ml(y,u);const B=l.subTree,d=B&&Xc(B);let f=!1;const{getTransitionKey:m}=y.type;if(m){const h=m();o===void 0?o=h:h!==o&&(o=h,f=!0)}if(d&&d.type!==Qe&&(!Et(y,d)||f)){const h=bn(d,p,n,l);if(Ml(d,h),i==="out-in")return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,l.update.active!==!1&&l.update()},ra(r);i==="in-out"&&y.type!==Qe&&(h.delayLeave=(_,x,v)=>{const w=q2(n,d);w[String(d.key)]=d,_._leaveCb=()=>{x(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return r}}},Yd=Wd;function q2(s,t){const{leavingVNodes:l}=s;let n=l.get(t.type);return n||(n=Object.create(null),l.set(t.type,n)),n}function bn(s,t,l,n){const{appear:o,mode:a,persisted:r=!1,onBeforeEnter:p,onEnter:i,onAfterEnter:y,onEnterCancelled:u,onBeforeLeave:B,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:h,onAppear:_,onAfterAppear:x,onAppearCancelled:v}=t,w=String(s.key),k=q2(l,s),M=(R,X)=>{R&&Ps(R,n,9,X)},N=(R,X)=>{const ne=X[1];M(R,X),pe(R)?R.every(ye=>ye.length<=1)&&ne():R.length<=1&&ne()},J={mode:a,persisted:r,beforeEnter(R){let X=p;if(!l.isMounted)if(o)X=h||p;else return;R._leaveCb&&R._leaveCb(!0);const ne=k[w];ne&&Et(s,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),M(X,[R])},enter(R){let X=i,ne=y,ye=u;if(!l.isMounted)if(o)X=_||i,ne=x||y,ye=v||u;else return;let Q=!1;const xe=R._enterCb=Pe=>{Q||(Q=!0,Pe?M(ye,[R]):M(ne,[R]),J.delayedLeave&&J.delayedLeave(),R._enterCb=void 0)};X?N(X,[R,xe]):xe()},leave(R,X){const ne=String(s.key);if(R._enterCb&&R._enterCb(!0),l.isUnmounting)return X();M(B,[R]);let ye=!1;const Q=R._leaveCb=xe=>{ye||(ye=!0,X(),xe?M(m,[R]):M(f,[R]),R._leaveCb=void 0,k[ne]===s&&delete k[ne])};k[ne]=s,d?N(d,[R,Q]):Q()},clone(R){return bn(R,t,l,n)}};return J}function ra(s){if(Nn(s))return s=js(s),s.children=null,s}function Xc(s){return Nn(s)?s.children?s.children[0]:void 0:s}function Ml(s,t){s.shapeFlag&6&&s.component?Ml(s.component.subTree,t):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}function Gr(s,t=!1,l){let n=[],o=0;for(let a=0;a<s.length;a++){let r=s[a];const p=l==null?r.key:String(l)+String(r.key!=null?r.key:a);r.type===Te?(r.patchFlag&128&&o++,n=n.concat(Gr(r.children,t,p))):(t||r.type!==Qe)&&n.push(p!=null?js(r,{key:p}):r)}if(o>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function ke(s){return Be(s)?{setup:s,name:s.name}:s}const Dl=s=>!!s.type.__asyncLoader,Nn=s=>s.type.__isKeepAlive,Xd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:t}){const l=Cs(),n=l.ctx;if(!n.renderer)return()=>{const v=t.default&&t.default();return v&&v.length===1?v[0]:v};const o=new Map,a=new Set;let r=null;l.__v_cache=o;const p=l.suspense,{renderer:{p:i,m:y,um:u,o:{createElement:B}}}=n,d=B("div");n.activate=(v,w,k,M,N)=>{const J=v.component;y(v,w,k,0,p),i(J.vnode,v,w,k,J,p,M,v.slotScopeIds,N),ss(()=>{J.isDeactivated=!1,J.a&&xt(J.a);const R=v.props&&v.props.onVnodeMounted;R&&As(R,J.parent,v)},p),ja(J)},n.deactivate=v=>{const w=v.component;y(v,d,null,1,p),ss(()=>{w.da&&xt(w.da);const k=v.props&&v.props.onVnodeUnmounted;k&&As(k,w.parent,v),w.isDeactivated=!0},p),ja(w)};function f(v){ca(v),u(v,l,p,!0)}function m(v){o.forEach((w,k)=>{const M=wn(w.type);M&&(!v||!v(M))&&h(k)})}function h(v){const w=o.get(v);!r||!Et(w,r)?f(w):r&&ca(r),o.delete(v),a.delete(v)}ge(()=>[s.include,s.exclude],([v,w])=>{v&&m(k=>en(v,k)),w&&m(k=>!en(w,k))},{flush:"post",deep:!0});let _=null;const x=()=>{_!=null&&o.set(_,pa(l.subTree))};return ul(x),Ko(x),Hn(()=>{o.forEach(v=>{const{subTree:w,suspense:k}=l,M=pa(w);if(v.type===M.type&&v.key===M.key){ca(M);const N=M.component.da;N&&ss(N,k);return}f(v)})}),()=>{if(_=null,!t.default)return null;const v=t.default(),w=v[0];if(v.length>1)return H("KeepAlive should contain exactly one component child."),r=null,v;if(!It(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return r=null,w;let k=pa(w);const M=k.type,N=wn(Dl(k)?k.type.__asyncResolved||{}:M),{include:J,exclude:R,max:X}=s;if(J&&(!N||!en(J,N))||R&&N&&en(R,N))return r=k,w;const ne=k.key==null?M:k.key,ye=o.get(ne);return k.el&&(k=js(k),w.shapeFlag&128&&(w.ssContent=k)),_=ne,ye?(k.el=ye.el,k.component=ye.component,k.transition&&Ml(k,k.transition),k.shapeFlag|=512,a.delete(ne),a.add(ne)):(a.add(ne),X&&a.size>parseInt(X,10)&&h(a.values().next().value)),k.shapeFlag|=256,r=k,L2(w.type)?w:k}}},j2=Xd;function en(s,t){return pe(s)?s.some(l=>en(l,t)):Ue(s)?s.split(",").includes(t):DB(s)?s.test(t):!1}function U2(s,t){z2(s,"a",t)}function V2(s,t){z2(s,"da",t)}function z2(s,t,l=We){const n=s.__wdc||(s.__wdc=()=>{let o=l;for(;o;){if(o.isDeactivated)return;o=o.parent}return s()});if(Xo(t,n,l),l){let o=l.parent;for(;o&&o.parent;)Nn(o.parent.vnode)&&Kd(n,t,l,o),o=o.parent}}function Kd(s,t,l,n){const o=Xo(t,s,n,!0);Zo(()=>{Pr(n[t],o)},l)}function ca(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function pa(s){return s.shapeFlag&128?s.ssContent:s}function Xo(s,t,l=We,n=!1){if(l){const o=l[s]||(l[s]=[]),a=t.__weh||(t.__weh=(...r)=>{if(l.isUnmounted)return;pl(),Pl(l);const p=Ps(t,l,s,r);return ol(),il(),p});return n?o.unshift(a):o.push(a),a}else{const o=zt(Wr[s].replace(/ hook$/,""));H(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dt=s=>(t,l=We)=>(!xn||s==="sp")&&Xo(s,(...n)=>t(...n),l),Zd=dt("bm"),ul=dt("m"),Gd=dt("bu"),Ko=dt("u"),Hn=dt("bum"),Zo=dt("um"),Jd=dt("sp"),Qd=dt("rtg"),e1=dt("rtc");function s1(s,t=We){Xo("ec",s,t)}function W2(s){SB(s)&&H("Do not use built-in directive ids as custom directive id: "+s)}function Jr(s,t){const l=Je;if(l===null)return H("withDirectives can only be used inside render functions."),s;const n=Jo(l)||l.proxy,o=s.dirs||(s.dirs=[]);for(let a=0;a<t.length;a++){let[r,p,i,y=He]=t[a];r&&(Be(r)&&(r={mounted:r,updated:r}),r.deep&&Gt(p),o.push({dir:r,instance:n,value:p,oldValue:void 0,arg:i,modifiers:y}))}return s}function Ht(s,t,l,n){const o=s.dirs,a=t&&t.dirs;for(let r=0;r<o.length;r++){const p=o[r];a&&(p.oldValue=a[r].value);let i=p.dir[n];i&&(pl(),Ps(i,l,8,[s.el,p,s,t]),il())}}const Va="components";function Ol(s,t){return l1(Va,s,!0,t)||s}const t1=Symbol();function l1(s,t,l=!0,n=!1){const o=Je||We;if(o){const a=o.type;if(s===Va){const p=wn(a,!1);if(p&&(p===t||p===Js(t)||p===rl(Js(t))))return a}const r=Kc(o[s]||a[s],t)||Kc(o.appContext[s],t);if(!r&&n)return a;if(l&&!r){const p=s===Va?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";H(`Failed to resolve ${s.slice(0,-1)}: ${t}${p}`)}return r}else H(`resolve${rl(s.slice(0,-1))} can only be used in render() or setup().`)}function Kc(s,t){return s&&(s[t]||s[Js(t)]||s[rl(Js(t))])}function qn(s,t,l,n){let o;const a=l&&l[n];if(pe(s)||Ue(s)){o=new Array(s.length);for(let r=0,p=s.length;r<p;r++)o[r]=t(s[r],r,void 0,a&&a[r])}else if(typeof s=="number"){Number.isInteger(s)||H(`The v-for range expect an integer value but got ${s}.`),o=new Array(s);for(let r=0;r<s;r++)o[r]=t(r+1,r,void 0,a&&a[r])}else if(Re(s))if(s[Symbol.iterator])o=Array.from(s,(r,p)=>t(r,p,void 0,a&&a[p]));else{const r=Object.keys(s);o=new Array(r.length);for(let p=0,i=r.length;p<i;p++){const y=r[p];o[p]=t(s[y],y,p,a&&a[p])}}else o=[];return l&&(l[n]=o),o}function et(s,t,l={},n,o){if(Je.isCE||Je.parent&&Dl(Je.parent)&&Je.parent.isCE)return t!=="default"&&(l.name=t),j("slot",l,n&&n());let a=s[t];a&&a.length>1&&(H("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),b();const r=a&&Y2(a(l)),p=O(Te,{key:l.key||r&&r.key||`_${t}`},r||(n?n():[]),r&&s._===1?64:-2);return!o&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),a&&a._c&&(a._d=!0),p}function Y2(s){return s.some(t=>It(t)?!(t.type===Qe||t.type===Te&&!Y2(t.children)):!0)?s:null}const za=s=>s?ry(s)?Jo(s)||s.proxy:za(s.parent):null,nl=ze(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>xl(s.props),$attrs:s=>xl(s.attrs),$slots:s=>xl(s.slots),$refs:s=>xl(s.refs),$parent:s=>za(s.parent),$root:s=>za(s.root),$emit:s=>s.emit,$options:s=>ec(s),$forceUpdate:s=>s.f||(s.f=()=>zo(s.update)),$nextTick:s=>s.n||(s.n=ts.bind(s.proxy)),$watch:s=>zd.bind(s)}),Qr=s=>s==="_"||s==="$",ia=(s,t)=>s!==He&&!s.__isScriptSetup&&Ee(s,t),X2={get({_:s},t){const{ctx:l,setupState:n,data:o,props:a,accessCache:r,type:p,appContext:i}=s;if(t==="__isVue")return!0;let y;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return o[t];case 4:return l[t];case 3:return a[t]}else{if(ia(n,t))return r[t]=1,n[t];if(o!==He&&Ee(o,t))return r[t]=2,o[t];if((y=s.propsOptions[0])&&Ee(y,t))return r[t]=3,a[t];if(l!==He&&Ee(l,t))return r[t]=4,l[t];Wa&&(r[t]=0)}}const u=nl[t];let B,d;if(u)return t==="$attrs"&&(gs(s,"get",t),Eo()),u(s);if((B=p.__cssModules)&&(B=B[t]))return B;if(l!==He&&Ee(l,t))return r[t]=4,l[t];if(d=i.config.globalProperties,Ee(d,t))return d[t];Je&&(!Ue(t)||t.indexOf("__v")!==0)&&(o!==He&&Qr(t[0])&&Ee(o,t)?H(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):s===Je&&H(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:s},t,l){const{data:n,setupState:o,ctx:a}=s;return ia(o,t)?(o[t]=l,!0):o.__isScriptSetup&&Ee(o,t)?(H(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):n!==He&&Ee(n,t)?(n[t]=l,!0):Ee(s.props,t)?(H(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in s?(H(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in s.appContext.config.globalProperties?Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:l}):a[t]=l,!0)},has({_:{data:s,setupState:t,accessCache:l,ctx:n,appContext:o,propsOptions:a}},r){let p;return!!l[r]||s!==He&&Ee(s,r)||ia(t,r)||(p=a[0])&&Ee(p,r)||Ee(n,r)||Ee(nl,r)||Ee(o.config.globalProperties,r)},defineProperty(s,t,l){return l.get!=null?s._.accessCache[t]=0:Ee(l,"value")&&this.set(s,t,l.value,null),Reflect.defineProperty(s,t,l)}};X2.ownKeys=s=>(H("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(s));function n1(s){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>s}),Object.keys(nl).forEach(l=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,get:()=>nl[l](s),set:Fs})}),t}function o1(s){const{ctx:t,propsOptions:[l]}=s;l&&Object.keys(l).forEach(n=>{Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.props[n],set:Fs})})}function a1(s){const{ctx:t,setupState:l}=s;Object.keys(de(l)).forEach(n=>{if(!l.__isScriptSetup){if(Qr(n[0])){H(`setup() return property ${JSON.stringify(n)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l[n],set:Fs})}})}function r1(){const s=Object.create(null);return(t,l)=>{s[l]?H(`${t} property "${l}" is already defined in ${s[l]}.`):s[l]=t}}let Wa=!0;function c1(s){const t=ec(s),l=s.proxy,n=s.ctx;Wa=!1,t.beforeCreate&&Zc(t.beforeCreate,s,"bc");const{data:o,computed:a,methods:r,watch:p,provide:i,inject:y,created:u,beforeMount:B,mounted:d,beforeUpdate:f,updated:m,activated:h,deactivated:_,beforeDestroy:x,beforeUnmount:v,destroyed:w,unmounted:k,render:M,renderTracked:N,renderTriggered:J,errorCaptured:R,serverPrefetch:X,expose:ne,inheritAttrs:ye,components:Q,directives:xe,filters:Pe}=t,Ce=r1();{const[se]=s.propsOptions;if(se)for(const ie in se)Ce("Props",ie)}if(y&&p1(y,n,Ce,s.appContext.config.unwrapInjectedRef),r)for(const se in r){const ie=r[se];Be(ie)?(Object.defineProperty(n,se,{value:ie.bind(l),configurable:!0,enumerable:!0,writable:!0}),Ce("Methods",se)):H(`Method "${se}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(o){Be(o)||H("The data option must be a function. Plain object usage is no longer supported.");const se=o.call(l,l);if(Ir(se)&&H("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(se))H("data() should return an object.");else{s.data=Ve(se);for(const ie in se)Ce("Data",ie),Qr(ie[0])||Object.defineProperty(n,ie,{configurable:!0,enumerable:!0,get:()=>se[ie],set:Fs})}}if(Wa=!0,a)for(const se in a){const ie=a[se],ve=Be(ie)?ie.bind(l,l):Be(ie.get)?ie.get.bind(l,l):Fs;ve===Fs&&H(`Computed property "${se}" has no getter.`);const Le=!Be(ie)&&Be(ie.set)?ie.set.bind(l):()=>{H(`Write operation failed: computed property "${se}" is readonly.`)},_s=A({get:ve,set:Le});Object.defineProperty(n,se,{enumerable:!0,configurable:!0,get:()=>_s.value,set:ls=>_s.value=ls}),Ce("Computed",se)}if(p)for(const se in p)K2(p[se],n,l,se);if(i){const se=Be(i)?i.call(l):i;Reflect.ownKeys(se).forEach(ie=>{ws(ie,se[ie])})}u&&Zc(u,s,"c");function qe(se,ie){pe(ie)?ie.forEach(ve=>se(ve.bind(l))):ie&&se(ie.bind(l))}if(qe(Zd,B),qe(ul,d),qe(Gd,f),qe(Ko,m),qe(U2,h),qe(V2,_),qe(s1,R),qe(e1,N),qe(Qd,J),qe(Hn,v),qe(Zo,k),qe(Jd,X),pe(ne))if(ne.length){const se=s.exposed||(s.exposed={});ne.forEach(ie=>{Object.defineProperty(se,ie,{get:()=>l[ie],set:ve=>l[ie]=ve})})}else s.exposed||(s.exposed={});M&&s.render===Fs&&(s.render=M),ye!=null&&(s.inheritAttrs=ye),Q&&(s.components=Q),xe&&(s.directives=xe)}function p1(s,t,l=Fs,n=!1){pe(s)&&(s=Ya(s));for(const o in s){const a=s[o];let r;Re(a)?"default"in a?r=C(a.from||o,a.default,!0):r=C(a.from||o):r=C(a),Me(r)?n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:p=>r.value=p}):(H(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[o]=r):t[o]=r,l("Inject",o)}}function Zc(s,t,l){Ps(pe(s)?s.map(n=>n.bind(t.proxy)):s.bind(t.proxy),t,l)}function K2(s,t,l,n){const o=n.includes(".")?N2(l,n):()=>l[n];if(Ue(s)){const a=t[s];Be(a)?ge(o,a):H(`Invalid watch handler specified by key "${s}"`,a)}else if(Be(s))ge(o,s.bind(l));else if(Re(s))if(pe(s))s.forEach(a=>K2(a,t,l,n));else{const a=Be(s.handler)?s.handler.bind(l):t[s.handler];Be(a)?ge(o,a,s):H(`Invalid watch handler specified by key "${s.handler}"`,a)}else H(`Invalid watch option: "${n}"`,s)}function ec(s){const t=s.type,{mixins:l,extends:n}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:r}}=s.appContext,p=a.get(t);let i;return p?i=p:!o.length&&!l&&!n?i=t:(i={},o.length&&o.forEach(y=>ko(i,y,r,!0)),ko(i,t,r)),Re(t)&&a.set(t,i),i}function ko(s,t,l,n=!1){const{mixins:o,extends:a}=t;a&&ko(s,a,l,!0),o&&o.forEach(r=>ko(s,r,l,!0));for(const r in t)if(n&&r==="expose")H('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=i1[r]||l&&l[r];s[r]=p?p(s[r],t[r]):t[r]}return s}const i1={data:Gc,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:ps,created:ps,beforeMount:ps,mounted:ps,beforeUpdate:ps,updated:ps,beforeDestroy:ps,beforeUnmount:ps,destroyed:ps,unmounted:ps,activated:ps,deactivated:ps,errorCaptured:ps,serverPrefetch:ps,components:Wt,directives:Wt,watch:u1,provide:Gc,inject:y1};function Gc(s,t){return t?s?function(){return ze(Be(s)?s.call(this,this):s,Be(t)?t.call(this,this):t)}:t:s}function y1(s,t){return Wt(Ya(s),Ya(t))}function Ya(s){if(pe(s)){const t={};for(let l=0;l<s.length;l++)t[s[l]]=s[l];return t}return s}function ps(s,t){return s?[...new Set([].concat(s,t))]:t}function Wt(s,t){return s?ze(ze(Object.create(null),s),t):t}function u1(s,t){if(!s)return t;if(!t)return s;const l=ze(Object.create(null),s);for(const n in t)l[n]=ps(s[n],t[n]);return l}function B1(s,t,l,n=!1){const o={},a={};go(a,Go,1),s.propsDefaults=Object.create(null),Z2(s,t,o,a);for(const r in s.propsOptions[0])r in o||(o[r]=void 0);J2(t||{},o,s),l?s.props=n?o:cd(o):s.type.props?s.props=o:s.props=a,s.attrs=a}function d1(s){for(;s;){if(s.type.__hmrId)return!0;s=s.parent}}function f1(s,t,l,n){const{props:o,attrs:a,vnode:{patchFlag:r}}=s,p=de(o),[i]=s.propsOptions;let y=!1;if(!d1(s)&&(n||r>0)&&!(r&16)){if(r&8){const u=s.vnode.dynamicProps;for(let B=0;B<u.length;B++){let d=u[B];if(Wo(s.emitsOptions,d))continue;const f=t[d];if(i)if(Ee(a,d))f!==a[d]&&(a[d]=f,y=!0);else{const m=Js(d);o[m]=Xa(i,p,m,f,s,!1)}else f!==a[d]&&(a[d]=f,y=!0)}}}else{Z2(s,t,o,a)&&(y=!0);let u;for(const B in p)(!t||!Ee(t,B)&&((u=ut(B))===B||!Ee(t,u)))&&(i?l&&(l[B]!==void 0||l[u]!==void 0)&&(o[B]=Xa(i,p,B,void 0,s,!0)):delete o[B]);if(a!==p)for(const B in a)(!t||!Ee(t,B))&&(delete a[B],y=!0)}y&&Bt(s,"set","$attrs"),J2(t||{},o,s)}function Z2(s,t,l,n){const[o,a]=s.propsOptions;let r=!1,p;if(t)for(let i in t){if(ro(i))continue;const y=t[i];let u;o&&Ee(o,u=Js(i))?!a||!a.includes(u)?l[u]=y:(p||(p={}))[u]=y:Wo(s.emitsOptions,i)||(!(i in n)||y!==n[i])&&(n[i]=y,r=!0)}if(a){const i=de(l),y=p||He;for(let u=0;u<a.length;u++){const B=a[u];l[B]=Xa(o,i,B,y[B],s,!Ee(y,B))}}return r}function Xa(s,t,l,n,o,a){const r=s[l];if(r!=null){const p=Ee(r,"default");if(p&&n===void 0){const i=r.default;if(r.type!==Function&&Be(i)){const{propsDefaults:y}=o;l in y?n=y[l]:(Pl(o),n=y[l]=i.call(null,t),ol())}else n=i}r[0]&&(a&&!p?n=!1:r[1]&&(n===""||n===ut(l))&&(n=!0))}return n}function G2(s,t,l=!1){const n=t.propsCache,o=n.get(s);if(o)return o;const a=s.props,r={},p=[];let i=!1;if(!Be(s)){const u=B=>{i=!0;const[d,f]=G2(B,t,!0);ze(r,d),f&&p.push(...f)};!l&&t.mixins.length&&t.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!a&&!i)return Re(s)&&n.set(s,El),El;if(pe(a))for(let u=0;u<a.length;u++){Ue(a[u])||H("props must be strings when using array syntax.",a[u]);const B=Js(a[u]);Jc(B)&&(r[B]=He)}else if(a){Re(a)||H("invalid props options",a);for(const u in a){const B=Js(u);if(Jc(B)){const d=a[u],f=r[B]=pe(d)||Be(d)?{type:d}:Object.assign({},d);if(f){const m=ep(Boolean,f.type),h=ep(String,f.type);f[0]=m>-1,f[1]=h<0||m<h,(m>-1||Ee(f,"default"))&&p.push(B)}}}}const y=[r,p];return Re(s)&&n.set(s,y),y}function Jc(s){return s[0]!=="$"?!0:(H(`Invalid prop name: "${s}" is a reserved property.`),!1)}function Ka(s){const t=s&&s.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:s===null?"null":""}function Qc(s,t){return Ka(s)===Ka(t)}function ep(s,t){return pe(t)?t.findIndex(l=>Qc(l,s)):Be(t)&&Qc(t,s)?0:-1}function J2(s,t,l){const n=de(t),o=l.propsOptions[0];for(const a in o){let r=o[a];r!=null&&m1(a,n[a],r,!Ee(s,a)&&!Ee(s,ut(a)))}}function m1(s,t,l,n){const{type:o,required:a,validator:r}=l;if(a&&n){H('Missing required prop: "'+s+'"');return}if(!(t==null&&!l.required)){if(o!=null&&o!==!0){let p=!1;const i=pe(o)?o:[o],y=[];for(let u=0;u<i.length&&!p;u++){const{valid:B,expectedType:d}=h1(t,i[u]);y.push(d||""),p=B}if(!p){H(g1(s,t,y));return}}r&&!r(t)&&H('Invalid prop: custom validator check failed for prop "'+s+'".')}}const F1=Lt("String,Number,Boolean,Function,Symbol,BigInt");function h1(s,t){let l;const n=Ka(t);if(F1(n)){const o=typeof s;l=o===n.toLowerCase(),!l&&o==="object"&&(l=s instanceof t)}else n==="Object"?l=Re(s):n==="Array"?l=pe(s):n==="null"?l=s===null:l=s instanceof t;return{valid:l,expectedType:n}}function g1(s,t,l){let n=`Invalid prop: type check failed for prop "${s}". Expected ${l.map(rl).join(" | ")}`;const o=l[0],a=Rr(t),r=sp(t,o),p=sp(t,a);return l.length===1&&tp(o)&&!_1(o,a)&&(n+=` with value ${r}`),n+=`, got ${a} `,tp(a)&&(n+=`with value ${p}.`),n}function sp(s,t){return t==="String"?`"${s}"`:t==="Number"?`${Number(s)}`:`${s}`}function tp(s){return["string","number","boolean"].some(l=>s.toLowerCase()===l)}function _1(...s){return s.some(t=>t.toLowerCase()==="boolean")}const Q2=s=>s[0]==="_"||s==="$stable",sc=s=>pe(s)?s.map(Hs):[Hs(s)],b1=(s,t,l)=>{if(t._n)return t;const n=S((...o)=>(We&&H(`Slot "${s}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),sc(t(...o))),l);return n._c=!1,n},ey=(s,t,l)=>{const n=s._ctx;for(const o in s){if(Q2(o))continue;const a=s[o];if(Be(a))t[o]=b1(o,a,n);else if(a!=null){H(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const r=sc(a);t[o]=()=>r}}},sy=(s,t)=>{Nn(s.vnode)||H("Non-function value encountered for default slot. Prefer function slots for better performance.");const l=sc(t);s.slots.default=()=>l},v1=(s,t)=>{if(s.vnode.shapeFlag&32){const l=t._;l?(s.slots=de(t),go(t,"_",l)):ey(t,s.slots={})}else s.slots={},t&&sy(s,t);go(s.slots,Go,1)},x1=(s,t,l)=>{const{vnode:n,slots:o}=s;let a=!0,r=He;if(n.shapeFlag&32){const p=t._;p?St?ze(o,t):l&&p===1?a=!1:(ze(o,t),!l&&p===1&&delete o._):(a=!t.$stable,ey(t,o)),r=t}else t&&(sy(s,t),r={default:1});if(a)for(const p in o)!Q2(p)&&!(p in r)&&delete o[p]};function ty(){return{app:null,config:{isNativeTag:t2,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w1=0;function E1(s,t){return function(n,o=null){Be(n)||(n=Object.assign({},n)),o!=null&&!Re(o)&&(H("root props passed to app.mount() must be an object."),o=null);const a=ty(),r=new Set;let p=!1;const i=a.app={_uid:w1++,_component:n,_props:o,_container:null,_context:a,_instance:null,version:So,get config(){return a.config},set config(y){H("app.config cannot be replaced. Modify individual options instead.")},use(y,...u){return r.has(y)?H("Plugin has already been applied to target app."):y&&Be(y.install)?(r.add(y),y.install(i,...u)):Be(y)?(r.add(y),y(i,...u)):H('A plugin must either be a function or an object with an "install" function.'),i},mixin(y){return a.mixins.includes(y)?H("Mixin has already been applied to target app"+(y.name?`: ${y.name}`:"")):a.mixins.push(y),i},component(y,u){return Ja(y,a.config),u?(a.components[y]&&H(`Component "${y}" has already been registered in target app.`),a.components[y]=u,i):a.components[y]},directive(y,u){return W2(y),u?(a.directives[y]&&H(`Directive "${y}" has already been registered in target app.`),a.directives[y]=u,i):a.directives[y]},mount(y,u,B){if(p)H("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{y.__vue_app__&&H("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=j(n,o);return d.appContext=a,a.reload=()=>{s(js(d),y,B)},u&&t?t(d,y):s(d,y,B),p=!0,i._container=y,y.__vue_app__=i,i._instance=d.component,Ad(i,So),Jo(d.component)||d.component.proxy}},unmount(){p?(s(null,i._container),i._instance=null,Md(i),delete i._container.__vue_app__):H("Cannot unmount an app that is not mounted.")},provide(y,u){return y in a.provides&&H(`App already provides property with key "${String(y)}". It will be overwritten with the new value.`),a.provides[y]=u,i}};return i}}function Za(s,t,l,n,o=!1){if(pe(s)){s.forEach((d,f)=>Za(d,t&&(pe(t)?t[f]:t),l,n,o));return}if(Dl(n)&&!o)return;const a=n.shapeFlag&4?Jo(n.component)||n.component.proxy:n.el,r=o?null:a,{i:p,r:i}=s;if(!p){H("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const y=t&&t.r,u=p.refs===He?p.refs={}:p.refs,B=p.setupState;if(y!=null&&y!==i&&(Ue(y)?(u[y]=null,Ee(B,y)&&(B[y]=null)):Me(y)&&(y.value=null)),Be(i))it(i,p,12,[r,u]);else{const d=Ue(i),f=Me(i);if(d||f){const m=()=>{if(s.f){const h=d?Ee(B,i)?B[i]:u[i]:i.value;o?pe(h)&&Pr(h,a):pe(h)?h.includes(a)||h.push(a):d?(u[i]=[a],Ee(B,i)&&(B[i]=u[i])):(i.value=[a],s.k&&(u[s.k]=i.value))}else d?(u[i]=r,Ee(B,i)&&(B[i]=r)):f?(i.value=r,s.k&&(u[s.k]=r)):H("Invalid template ref type:",i,`(${typeof i})`)};r?(m.id=-1,ss(m,l)):m()}else H("Invalid template ref type:",i,`(${typeof i})`)}}let ql,wt;function lt(s,t){s.appContext.config.performance&&Do()&&wt.mark(`vue-${t}-${s.uid}`),Td(s,t,Do()?wt.now():Date.now())}function nt(s,t){if(s.appContext.config.performance&&Do()){const l=`vue-${t}-${s.uid}`,n=l+":end";wt.mark(n),wt.measure(`<${Qo(s,s.type)}> ${t}`,l,n),wt.clearMarks(l),wt.clearMarks(n)}Id(s,t,Do()?wt.now():Date.now())}function Do(){return ql!==void 0||(typeof window<"u"&&window.performance?(ql=!0,wt=window.performance):ql=!1),ql}function k1(){const s=[];if(s.length){const t=s.length>1;console.warn(`Feature flag${t?"s":""} ${s.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ss=Vd;function D1(s){return S1(s)}function S1(s,t){k1();const l=a2();l.__VUE__=!0,O2(l.__VUE_DEVTOOLS_GLOBAL_HOOK__,l);const{insert:n,remove:o,patchProp:a,createElement:r,createText:p,createComment:i,setText:y,setElementText:u,parentNode:B,nextSibling:d,setScopeId:f=Fs,insertStaticContent:m}=s,h=(F,g,D,L=null,P=null,V=null,Z=!1,U=null,z=St?!1:!!g.dynamicChildren)=>{if(F===g)return;F&&!Et(F,g)&&(L=oe(F),ds(F,P,V,!0),F=null),g.patchFlag===-2&&(z=!1,g.dynamicChildren=null);const{type:q,ref:re,shapeFlag:ae}=g;switch(q){case jn:_(F,g,D,L);break;case Qe:x(F,g,D,L);break;case io:F==null?v(g,D,L,Z):w(F,g,D,Z);break;case Te:xe(F,g,D,L,P,V,Z,U,z);break;default:ae&1?N(F,g,D,L,P,V,Z,U,z):ae&6?Pe(F,g,D,L,P,V,Z,U,z):ae&64||ae&128?q.process(F,g,D,L,P,V,Z,U,z,Se):H("Invalid VNode type:",q,`(${typeof q})`)}re!=null&&P&&Za(re,F&&F.ref,V,g||F,!g)},_=(F,g,D,L)=>{if(F==null)n(g.el=p(g.children),D,L);else{const P=g.el=F.el;g.children!==F.children&&y(P,g.children)}},x=(F,g,D,L)=>{F==null?n(g.el=i(g.children||""),D,L):g.el=F.el},v=(F,g,D,L)=>{[F.el,F.anchor]=m(F.children,g,D,L,F.el,F.anchor)},w=(F,g,D,L)=>{if(g.children!==F.children){const P=d(F.anchor);M(F),[g.el,g.anchor]=m(g.children,D,P,L)}else g.el=F.el,g.anchor=F.anchor},k=({el:F,anchor:g},D,L)=>{let P;for(;F&&F!==g;)P=d(F),n(F,D,L),F=P;n(g,D,L)},M=({el:F,anchor:g})=>{let D;for(;F&&F!==g;)D=d(F),o(F),F=D;o(g)},N=(F,g,D,L,P,V,Z,U,z)=>{Z=Z||g.type==="svg",F==null?J(g,D,L,P,V,Z,U,z):ne(F,g,P,V,Z,U,z)},J=(F,g,D,L,P,V,Z,U)=>{let z,q;const{type:re,props:ae,shapeFlag:ce,transition:me,dirs:De}=F;if(z=F.el=r(F.type,V,ae&&ae.is,ae),ce&8?u(z,F.children):ce&16&&X(F.children,z,null,L,P,V&&re!=="foreignObject",Z,U),De&&Ht(F,null,L,"created"),R(z,F,F.scopeId,Z,L),ae){for(const Ne in ae)Ne!=="value"&&!ro(Ne)&&a(z,Ne,null,ae[Ne],V,F.children,L,P,W);"value"in ae&&a(z,"value",null,ae.value),(q=ae.onVnodeBeforeMount)&&As(q,L,F)}Object.defineProperty(z,"__vnode",{value:F,enumerable:!1}),Object.defineProperty(z,"__vueParentComponent",{value:L,enumerable:!1}),De&&Ht(F,null,L,"beforeMount");const je=(!P||P&&!P.pendingBranch)&&me&&!me.persisted;je&&me.beforeEnter(z),n(z,g,D),((q=ae&&ae.onVnodeMounted)||je||De)&&ss(()=>{q&&As(q,L,F),je&&me.enter(z),De&&Ht(F,null,L,"mounted")},P)},R=(F,g,D,L,P)=>{if(D&&f(F,D),L)for(let V=0;V<L.length;V++)f(F,L[V]);if(P){let V=P.subTree;if(V.patchFlag>0&&V.patchFlag&2048&&(V=R2(V.children)||V),g===V){const Z=P.vnode;R(F,Z,Z.scopeId,Z.slotScopeIds,P.parent)}}},X=(F,g,D,L,P,V,Z,U,z=0)=>{for(let q=z;q<F.length;q++){const re=F[q]=U?bt(F[q]):Hs(F[q]);h(null,re,g,D,L,P,V,Z,U)}},ne=(F,g,D,L,P,V,Z)=>{const U=g.el=F.el;let{patchFlag:z,dynamicChildren:q,dirs:re}=g;z|=F.patchFlag&16;const ae=F.props||He,ce=g.props||He;let me;D&&qt(D,!1),(me=ce.onVnodeBeforeUpdate)&&As(me,D,g,F),re&&Ht(g,F,D,"beforeUpdate"),D&&qt(D,!0),St&&(z=0,Z=!1,q=null);const De=P&&g.type!=="foreignObject";if(q?(ye(F.dynamicChildren,q,U,D,L,De,V),D&&D.type.__hmrId&&nn(F,g)):Z||ve(F,g,U,null,D,L,De,V,!1),z>0){if(z&16)Q(U,g,ae,ce,D,L,P);else if(z&2&&ae.class!==ce.class&&a(U,"class",null,ce.class,P),z&4&&a(U,"style",ae.style,ce.style,P),z&8){const je=g.dynamicProps;for(let Ne=0;Ne<je.length;Ne++){const Ke=je[Ne],Rs=ae[Ke],fl=ce[Ke];(fl!==Rs||Ke==="value")&&a(U,Ke,Rs,fl,P,F.children,D,L,W)}}z&1&&F.children!==g.children&&u(U,g.children)}else!Z&&q==null&&Q(U,g,ae,ce,D,L,P);((me=ce.onVnodeUpdated)||re)&&ss(()=>{me&&As(me,D,g,F),re&&Ht(g,F,D,"updated")},L)},ye=(F,g,D,L,P,V,Z)=>{for(let U=0;U<g.length;U++){const z=F[U],q=g[U],re=z.el&&(z.type===Te||!Et(z,q)||z.shapeFlag&70)?B(z.el):D;h(z,q,re,null,L,P,V,Z,!0)}},Q=(F,g,D,L,P,V,Z)=>{if(D!==L){if(D!==He)for(const U in D)!ro(U)&&!(U in L)&&a(F,U,D[U],null,Z,g.children,P,V,W);for(const U in L){if(ro(U))continue;const z=L[U],q=D[U];z!==q&&U!=="value"&&a(F,U,q,z,Z,g.children,P,V,W)}"value"in L&&a(F,"value",D.value,L.value)}},xe=(F,g,D,L,P,V,Z,U,z)=>{const q=g.el=F?F.el:p(""),re=g.anchor=F?F.anchor:p("");let{patchFlag:ae,dynamicChildren:ce,slotScopeIds:me}=g;(St||ae&2048)&&(ae=0,z=!1,ce=null),me&&(U=U?U.concat(me):me),F==null?(n(q,D,L),n(re,D,L),X(g.children,D,re,P,V,Z,U,z)):ae>0&&ae&64&&ce&&F.dynamicChildren?(ye(F.dynamicChildren,ce,D,P,V,Z,U),P&&P.type.__hmrId?nn(F,g):(g.key!=null||P&&g===P.subTree)&&nn(F,g,!0)):ve(F,g,D,re,P,V,Z,U,z)},Pe=(F,g,D,L,P,V,Z,U,z)=>{g.slotScopeIds=U,F==null?g.shapeFlag&512?P.ctx.activate(g,D,L,Z,z):Ce(g,D,L,P,V,Z,z):qe(F,g,z)},Ce=(F,g,D,L,P,V,Z)=>{const U=F.component=N1(F,L,P);if(U.type.__hmrId&&Dd(U),co(F),lt(U,"mount"),Nn(F)&&(U.ctx.renderer=Se),lt(U,"init"),q1(U),nt(U,"init"),U.asyncDep){if(P&&P.registerDep(U,se),!F.el){const z=U.subTree=j(Qe);x(null,z,g,D)}return}se(U,F,g,D,P,V,Z),po(),nt(U,"mount")},qe=(F,g,D)=>{const L=g.component=F.component;if(jd(F,g,D))if(L.asyncDep&&!L.asyncResolved){co(g),ie(L,g,D),po();return}else L.next=g,Ed(L.update),L.update();else g.el=F.el,L.vnode=g},se=(F,g,D,L,P,V,Z)=>{const U=()=>{if(F.isMounted){let{next:re,bu:ae,u:ce,parent:me,vnode:De}=F,je=re,Ne;co(re||F.vnode),qt(F,!1),re?(re.el=De.el,ie(F,re,Z)):re=De,ae&&xt(ae),(Ne=re.props&&re.props.onVnodeBeforeUpdate)&&As(Ne,me,re,De),qt(F,!0),lt(F,"render");const Ke=aa(F);nt(F,"render");const Rs=F.subTree;F.subTree=Ke,lt(F,"patch"),h(Rs,Ke,B(Rs.el),oe(Rs),F,P,V),nt(F,"patch"),re.el=Ke.el,je===null&&Ud(F,Ke.el),ce&&ss(ce,P),(Ne=re.props&&re.props.onVnodeUpdated)&&ss(()=>As(Ne,me,re,De),P),P2(F),po()}else{let re;const{el:ae,props:ce}=g,{bm:me,m:De,parent:je}=F,Ne=Dl(g);if(qt(F,!1),me&&xt(me),!Ne&&(re=ce&&ce.onVnodeBeforeMount)&&As(re,je,g),qt(F,!0),ae&&ue){const Ke=()=>{lt(F,"render"),F.subTree=aa(F),nt(F,"render"),lt(F,"hydrate"),ue(ae,F.subTree,F,P,null),nt(F,"hydrate")};Ne?g.type.__asyncLoader().then(()=>!F.isUnmounted&&Ke()):Ke()}else{lt(F,"render");const Ke=F.subTree=aa(F);nt(F,"render"),lt(F,"patch"),h(null,Ke,D,L,F,P,V),nt(F,"patch"),g.el=Ke.el}if(De&&ss(De,P),!Ne&&(re=ce&&ce.onVnodeMounted)){const Ke=g;ss(()=>As(re,je,Ke),P)}(g.shapeFlag&256||je&&Dl(je.vnode)&&je.vnode.shapeFlag&256)&&F.a&&ss(F.a,P),F.isMounted=!0,ja(F),g=D=L=null}},z=F.effect=new qr(U,()=>zo(q),F.scope),q=F.update=()=>z.run();q.id=F.uid,qt(F,!0),z.onTrack=F.rtc?re=>xt(F.rtc,re):void 0,z.onTrigger=F.rtg?re=>xt(F.rtg,re):void 0,q.ownerInstance=F,q()},ie=(F,g,D)=>{g.component=F;const L=F.vnode.props;F.vnode=g,F.next=null,f1(F,g.props,L,D),x1(F,g.children,D),pl(),Vc(),il()},ve=(F,g,D,L,P,V,Z,U,z=!1)=>{const q=F&&F.children,re=F?F.shapeFlag:0,ae=g.children,{patchFlag:ce,shapeFlag:me}=g;if(ce>0){if(ce&128){_s(q,ae,D,L,P,V,Z,U,z);return}else if(ce&256){Le(q,ae,D,L,P,V,Z,U,z);return}}me&8?(re&16&&W(q,P,V),ae!==q&&u(D,ae)):re&16?me&16?_s(q,ae,D,L,P,V,Z,U,z):W(q,P,V,!0):(re&8&&u(D,""),me&16&&X(ae,D,L,P,V,Z,U,z))},Le=(F,g,D,L,P,V,Z,U,z)=>{F=F||El,g=g||El;const q=F.length,re=g.length,ae=Math.min(q,re);let ce;for(ce=0;ce<ae;ce++){const me=g[ce]=z?bt(g[ce]):Hs(g[ce]);h(F[ce],me,D,null,P,V,Z,U,z)}q>re?W(F,P,V,!0,!1,ae):X(g,D,L,P,V,Z,U,z,ae)},_s=(F,g,D,L,P,V,Z,U,z)=>{let q=0;const re=g.length;let ae=F.length-1,ce=re-1;for(;q<=ae&&q<=ce;){const me=F[q],De=g[q]=z?bt(g[q]):Hs(g[q]);if(Et(me,De))h(me,De,D,null,P,V,Z,U,z);else break;q++}for(;q<=ae&&q<=ce;){const me=F[ae],De=g[ce]=z?bt(g[ce]):Hs(g[ce]);if(Et(me,De))h(me,De,D,null,P,V,Z,U,z);else break;ae--,ce--}if(q>ae){if(q<=ce){const me=ce+1,De=me<re?g[me].el:L;for(;q<=ce;)h(null,g[q]=z?bt(g[q]):Hs(g[q]),D,De,P,V,Z,U,z),q++}}else if(q>ce)for(;q<=ae;)ds(F[q],P,V,!0),q++;else{const me=q,De=q,je=new Map;for(q=De;q<=ce;q++){const cs=g[q]=z?bt(g[q]):Hs(g[q]);cs.key!=null&&(je.has(cs.key)&&H("Duplicate keys found during update:",JSON.stringify(cs.key),"Make sure keys are unique."),je.set(cs.key,q))}let Ne,Ke=0;const Rs=ce-De+1;let fl=!1,Oc=0;const Hl=new Array(Rs);for(q=0;q<Rs;q++)Hl[q]=0;for(q=me;q<=ae;q++){const cs=F[q];if(Ke>=Rs){ds(cs,P,V,!0);continue}let zs;if(cs.key!=null)zs=je.get(cs.key);else for(Ne=De;Ne<=ce;Ne++)if(Hl[Ne-De]===0&&Et(cs,g[Ne])){zs=Ne;break}zs===void 0?ds(cs,P,V,!0):(Hl[zs-De]=q+1,zs>=Oc?Oc=zs:fl=!0,h(cs,g[zs],D,null,P,V,Z,U,z),Ke++)}const Pc=fl?C1(Hl):El;for(Ne=Pc.length-1,q=Rs-1;q>=0;q--){const cs=De+q,zs=g[cs],Tc=cs+1<re?g[cs+1].el:L;Hl[q]===0?h(null,zs,D,Tc,P,V,Z,U,z):fl&&(Ne<0||q!==Pc[Ne]?ls(zs,D,Tc,2):Ne--)}}},ls=(F,g,D,L,P=null)=>{const{el:V,type:Z,transition:U,children:z,shapeFlag:q}=F;if(q&6){ls(F.component.subTree,g,D,L);return}if(q&128){F.suspense.move(g,D,L);return}if(q&64){Z.move(F,g,D,Se);return}if(Z===Te){n(V,g,D);for(let ae=0;ae<z.length;ae++)ls(z[ae],g,D,L);n(F.anchor,g,D);return}if(Z===io){k(F,g,D);return}if(L!==2&&q&1&&U)if(L===0)U.beforeEnter(V),n(V,g,D),ss(()=>U.enter(V),P);else{const{leave:ae,delayLeave:ce,afterLeave:me}=U,De=()=>n(V,g,D),je=()=>{ae(V,()=>{De(),me&&me()})};ce?ce(V,De,je):je()}else n(V,g,D)},ds=(F,g,D,L=!1,P=!1)=>{const{type:V,props:Z,ref:U,children:z,dynamicChildren:q,shapeFlag:re,patchFlag:ae,dirs:ce}=F;if(U!=null&&Za(U,null,D,F,!0),re&256){g.ctx.deactivate(F);return}const me=re&1&&ce,De=!Dl(F);let je;if(De&&(je=Z&&Z.onVnodeBeforeUnmount)&&As(je,g,F),re&6)le(F.component,D,L);else{if(re&128){F.suspense.unmount(D,L);return}me&&Ht(F,null,g,"beforeUnmount"),re&64?F.type.remove(F,g,D,P,Se,L):q&&(V!==Te||ae>0&&ae&64)?W(q,g,D,!1,!0):(V===Te&&ae&384||!P&&re&16)&&W(z,g,D),L&&ft(F)}(De&&(je=Z&&Z.onVnodeUnmounted)||me)&&ss(()=>{je&&As(je,g,F),me&&Ht(F,null,g,"unmounted")},D)},ft=F=>{const{type:g,el:D,anchor:L,transition:P}=F;if(g===Te){F.patchFlag>0&&F.patchFlag&2048&&P&&!P.persisted?F.children.forEach(Z=>{Z.type===Qe?o(Z.el):ft(Z)}):$(D,L);return}if(g===io){M(F);return}const V=()=>{o(D),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(F.shapeFlag&1&&P&&!P.persisted){const{leave:Z,delayLeave:U}=P,z=()=>Z(D,V);U?U(F.el,V,z):z()}else V()},$=(F,g)=>{let D;for(;F!==g;)D=d(F),o(F),F=D;o(g)},le=(F,g,D)=>{F.type.__hmrId&&Sd(F);const{bum:L,scope:P,update:V,subTree:Z,um:U}=F;L&&xt(L),P.stop(),V&&(V.active=!1,ds(Z,F,g,D)),U&&ss(U,g),ss(()=>{F.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&F.asyncDep&&!F.asyncResolved&&F.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),Pd(F)},W=(F,g,D,L=!1,P=!1,V=0)=>{for(let Z=V;Z<F.length;Z++)ds(F[Z],g,D,L,P)},oe=F=>F.shapeFlag&6?oe(F.component.subTree):F.shapeFlag&128?F.suspense.next():d(F.anchor||F.el),we=(F,g,D)=>{F==null?g._vnode&&ds(g._vnode,null,null,!0):h(g._vnode||null,F,g,null,null,null,D),Vc(),$2(),g._vnode=F},Se={p:h,um:ds,m:ls,r:ft,mt:Ce,mc:X,pc:ve,pbc:ye,n:oe,o:s};let fe,ue;return t&&([fe,ue]=t(Se)),{render:we,hydrate:fe,createApp:E1(we,fe)}}function qt({effect:s,update:t},l){s.allowRecurse=t.allowRecurse=l}function nn(s,t,l=!1){const n=s.children,o=t.children;if(pe(n)&&pe(o))for(let a=0;a<n.length;a++){const r=n[a];let p=o[a];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=o[a]=bt(o[a]),p.el=r.el),l||nn(r,p)),p.type===jn&&(p.el=r.el),p.type===Qe&&!p.el&&(p.el=r.el)}}function C1(s){const t=s.slice(),l=[0];let n,o,a,r,p;const i=s.length;for(n=0;n<i;n++){const y=s[n];if(y!==0){if(o=l[l.length-1],s[o]<y){t[n]=o,l.push(n);continue}for(a=0,r=l.length-1;a<r;)p=a+r>>1,s[l[p]]<y?a=p+1:r=p;y<s[l[a]]&&(a>0&&(t[n]=l[a-1]),l[a]=n)}}for(a=l.length,r=l[a-1];a-- >0;)l[a]=r,r=t[r];return l}const $1=s=>s.__isTeleport,Sl=s=>s&&(s.disabled||s.disabled===""),lp=s=>typeof SVGElement<"u"&&s instanceof SVGElement,Ga=(s,t)=>{const l=s&&s.to;if(Ue(l))if(t){const n=t(l);return n||H(`Failed to locate Teleport target with selector "${l}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),n}else return H("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!l&&!Sl(s)&&H(`Invalid Teleport target: ${l}`),l},A1={__isTeleport:!0,process(s,t,l,n,o,a,r,p,i,y){const{mc:u,pc:B,pbc:d,o:{insert:f,querySelector:m,createText:h,createComment:_}}=y,x=Sl(t.props);let{shapeFlag:v,children:w,dynamicChildren:k}=t;if(St&&(i=!1,k=null),s==null){const M=t.el=_("teleport start"),N=t.anchor=_("teleport end");f(M,l,n),f(N,l,n);const J=t.target=Ga(t.props,m),R=t.targetAnchor=h("");J?(f(R,J),r=r||lp(J)):x||H("Invalid Teleport target on mount:",J,`(${typeof J})`);const X=(ne,ye)=>{v&16&&u(w,ne,ye,o,a,r,p,i)};x?X(l,N):J&&X(J,R)}else{t.el=s.el;const M=t.anchor=s.anchor,N=t.target=s.target,J=t.targetAnchor=s.targetAnchor,R=Sl(s.props),X=R?l:N,ne=R?M:J;if(r=r||lp(N),k?(d(s.dynamicChildren,k,X,o,a,r,p),nn(s,t,!0)):i||B(s,t,X,ne,o,a,r,p,!1),x)R||eo(t,l,M,y,1);else if((t.props&&t.props.to)!==(s.props&&s.props.to)){const ye=t.target=Ga(t.props,m);ye?eo(t,ye,null,y,0):H("Invalid Teleport target on update:",N,`(${typeof N})`)}else R&&eo(t,N,J,y,1)}ly(t)},remove(s,t,l,n,{um:o,o:{remove:a}},r){const{shapeFlag:p,children:i,anchor:y,targetAnchor:u,target:B,props:d}=s;if(B&&a(u),(r||!Sl(d))&&(a(y),p&16))for(let f=0;f<i.length;f++){const m=i[f];o(m,t,l,!0,!!m.dynamicChildren)}},move:eo,hydrate:M1};function eo(s,t,l,{o:{insert:n},m:o},a=2){a===0&&n(s.targetAnchor,t,l);const{el:r,anchor:p,shapeFlag:i,children:y,props:u}=s,B=a===2;if(B&&n(r,t,l),(!B||Sl(u))&&i&16)for(let d=0;d<y.length;d++)o(y[d],t,l,2);B&&n(p,t,l)}function M1(s,t,l,n,o,a,{o:{nextSibling:r,parentNode:p,querySelector:i}},y){const u=t.target=Ga(t.props,i);if(u){const B=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Sl(t.props))t.anchor=y(r(s),t,p(s),l,n,o,a),t.targetAnchor=B;else{t.anchor=r(s);let d=B;for(;d;)if(d=r(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&r(t.targetAnchor);break}y(B,t,u,l,n,o,a)}ly(t)}return t.anchor&&r(t.anchor)}const O1=A1;function ly(s){const t=s.ctx;if(t&&t.ut){let l=s.children[0].el;for(;l!==s.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",t.uid),l=l.nextSibling;t.ut()}}const Te=Symbol("Fragment"),jn=Symbol("Text"),Qe=Symbol("Comment"),io=Symbol("Static"),on=[];let qs=null;function b(s=!1){on.push(qs=s?null:[])}function P1(){on.pop(),qs=on[on.length-1]||null}let vn=1;function np(s){vn+=s}function ny(s){return s.dynamicChildren=vn>0?qs||El:null,P1(),vn>0&&qs&&qs.push(s),s}function te(s,t,l,n,o,a){return ny(e(s,t,l,n,o,a,!0))}function O(s,t,l,n,o){return ny(j(s,t,l,n,o,!0))}function It(s){return s?s.__v_isVNode===!0:!1}function Et(s,t){return t.shapeFlag&6&&_l.has(t.type)?(s.shapeFlag&=-257,t.shapeFlag&=-513,!1):s.type===t.type&&s.key===t.key}const T1=(...s)=>I1(...s),Go="__vInternal",oy=({key:s})=>s??null,yo=({ref:s,ref_key:t,ref_for:l})=>s!=null?Ue(s)||Me(s)||Be(s)?{i:Je,r:s,k:t,f:!!l}:s:null;function e(s,t=null,l=null,n=0,o=null,a=s===Te?0:1,r=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&oy(t),ref:t&&yo(t),scopeId:Yo,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Je};return p?(tc(i,l),a&128&&s.normalize(i)):l&&(i.shapeFlag|=Ue(l)?8:16),i.key!==i.key&&H("VNode created with invalid key (NaN). VNode type:",i.type),vn>0&&!r&&qs&&(i.patchFlag>0||a&6)&&i.patchFlag!==32&&qs.push(i),i}const j=T1;function I1(s,t=null,l=null,n=0,o=null,a=!1){if((!s||s===t1)&&(s||H(`Invalid vnode type when creating vnode: ${s}.`),s=Qe),It(s)){const p=js(s,t,!0);return l&&tc(p,l),vn>0&&!a&&qs&&(p.shapeFlag&6?qs[qs.indexOf(s)]=p:qs.push(p)),p.patchFlag|=-2,p}if(iy(s)&&(s=s.__vccOpts),t){t=Y(t);let{class:p,style:i}=t;p&&!Ue(p)&&(t.class=Xe(p)),Re(i)&&(xo(i)&&!pe(i)&&(i=ze({},i)),t.style=as(i))}const r=Ue(s)?1:L2(s)?128:$1(s)?64:Re(s)?4:Be(s)?2:0;return r&4&&xo(s)&&(s=de(s),H("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,s)),e(s,t,l,n,o,r,a,!0)}function Y(s){return s?xo(s)||Go in s?ze({},s):s:null}function js(s,t,l=!1){const{props:n,ref:o,patchFlag:a,children:r}=s,p=t?be(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:p,key:p&&oy(p),ref:t&&t.ref?l&&o?pe(o)?o.concat(yo(t)):[o,yo(t)]:yo(t):o,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a===-1&&pe(r)?r.map(ay):r,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==Te?a===-1?16:a|16:a,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&js(s.ssContent),ssFallback:s.ssFallback&&js(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function ay(s){const t=js(s);return pe(s.children)&&(t.children=s.children.map(ay)),t}function c(s=" ",t=0){return j(jn,null,s,t)}function he(s="",t=!1){return t?(b(),O(Qe,null,s)):j(Qe,null,s)}function Hs(s){return s==null||typeof s=="boolean"?j(Qe):pe(s)?j(Te,null,s.slice()):typeof s=="object"?bt(s):j(jn,null,String(s))}function bt(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:js(s)}function tc(s,t){let l=0;const{shapeFlag:n}=s;if(t==null)t=null;else if(pe(t))l=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),tc(s,o()),o._c&&(o._d=!0));return}else{l=32;const o=t._;!o&&!(Go in t)?t._ctx=Je:o===3&&Je&&(Je.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else Be(t)?(t={default:t,_ctx:Je},l=32):(t=String(t),n&64?(l=16,t=[c(t)]):l=8);s.children=t,s.shapeFlag|=l}function be(...s){const t={};for(let l=0;l<s.length;l++){const n=s[l];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Xe([t.class,n.class]));else if(o==="style")t.style=as([t.style,n.style]);else if(In(o)){const a=t[o],r=n[o];r&&a!==r&&!(pe(a)&&a.includes(r))&&(t[o]=a?[].concat(a,r):r)}else o!==""&&(t[o]=n[o])}return t}function As(s,t,l,n=null){Ps(s,t,7,[l,n])}const R1=ty();let L1=0;function N1(s,t,l){const n=s.type,o=(t?t.appContext:s.appContext)||R1,a={uid:L1++,vnode:s,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G2(n,o),emitsOptions:I2(n,o),emit:null,emitted:null,propsDefaults:He,inheritAttrs:n.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=n1(a),a.root=t?t.root:a,a.emit=Ld.bind(null,a),s.ce&&s.ce(a),a}let We=null;const Cs=()=>We||Je,Pl=s=>{We=s,s.scope.on()},ol=()=>{We&&We.scope.off(),We=null},H1=Lt("slot,component");function Ja(s,t){const l=t.isNativeTag||t2;(H1(s)||l(s))&&H("Do not use built-in or reserved HTML elements as component id: "+s)}function ry(s){return s.vnode.shapeFlag&4}let xn=!1;function q1(s,t=!1){xn=t;const{props:l,children:n}=s.vnode,o=ry(s);B1(s,l,o,t),v1(s,n);const a=o?j1(s,t):void 0;return xn=!1,a}function j1(s,t){var l;const n=s.type;{if(n.name&&Ja(n.name,s.appContext.config),n.components){const a=Object.keys(n.components);for(let r=0;r<a.length;r++)Ja(a[r],s.appContext.config)}if(n.directives){const a=Object.keys(n.directives);for(let r=0;r<a.length;r++)W2(a[r])}n.compilerOptions&&U1()&&H('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}s.accessCache=Object.create(null),s.proxy=Uo(new Proxy(s.ctx,X2)),o1(s);const{setup:o}=n;if(o){const a=s.setupContext=o.length>1?py(s):null;Pl(s),pl();const r=it(o,s,0,[xl(s.props),a]);if(il(),ol(),Ir(r)){if(r.then(ol,ol),t)return r.then(p=>{op(s,p,t)}).catch(p=>{Vo(p,s,0)});if(s.asyncDep=r,!s.suspense){const p=(l=n.name)!==null&&l!==void 0?l:"Anonymous";H(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else op(s,r,t)}else cy(s,t)}function op(s,t,l){Be(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:Re(t)?(It(t)&&H("setup() should not return VNodes directly - return a render function instead."),s.devtoolsRawSetupState=t,s.setupState=x2(t),a1(s)):t!==void 0&&H(`setup() should return an object. Received: ${t===null?"null":typeof t}`),cy(s,l)}let Qa;const U1=()=>!Qa;function cy(s,t,l){const n=s.type;if(!s.render){if(!t&&Qa&&!n.render){const o=n.template||ec(s).template;if(o){lt(s,"compile");const{isCustomElement:a,compilerOptions:r}=s.appContext.config,{delimiters:p,compilerOptions:i}=n,y=ze(ze({isCustomElement:a,delimiters:p},r),i);n.render=Qa(o,y),nt(s,"compile")}}s.render=n.render||Fs}Pl(s),pl(),c1(s),il(),ol(),!n.render&&s.render===Fs&&!t&&(n.template?H('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):H("Component is missing template or render function."))}function V1(s){return new Proxy(s.attrs,{get(t,l){return Eo(),gs(s,"get","$attrs"),t[l]},set(){return H("setupContext.attrs is readonly."),!1},deleteProperty(){return H("setupContext.attrs is readonly."),!1}})}function py(s){const t=n=>{if(s.exposed&&H("expose() should be called only once per setup()."),n!=null){let o=typeof n;o==="object"&&(pe(n)?o="array":Me(n)&&(o="ref")),o!=="object"&&H(`expose() should be passed a plain object, received ${o}.`)}s.exposed=n||{}};let l;return Object.freeze({get attrs(){return l||(l=V1(s))},get slots(){return xl(s.slots)},get emit(){return(n,...o)=>s.emit(n,...o)},expose:t})}function Jo(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(x2(Uo(s.exposed)),{get(t,l){if(l in t)return t[l];if(l in nl)return nl[l](s)},has(t,l){return l in t||l in nl}}))}const z1=/(?:^|[-_])(\w)/g,W1=s=>s.replace(z1,t=>t.toUpperCase()).replace(/[-_]/g,"");function wn(s,t=!0){return Be(s)?s.displayName||s.name:s.name||t&&s.__name}function Qo(s,t,l=!1){let n=wn(t);if(!n&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(n=o[1])}if(!n&&s&&s.parent){const o=a=>{for(const r in a)if(a[r]===t)return r};n=o(s.components||s.parent.type.components)||o(s.appContext.components)}return n?W1(n):l?"App":"Anonymous"}function iy(s){return Be(s)&&"__vccOpts"in s}const A=(s,t)=>md(s,t,xn);function Y1(){return X1().slots}function X1(){const s=Cs();return s||H("useContext() called without active instance."),s.setupContext||(s.setupContext=py(s))}function ks(s,t,l){const n=arguments.length;return n===2?Re(t)&&!pe(t)?It(t)?j(s,null,[t]):j(s,t):j(s,null,t):(n>3?l=Array.prototype.slice.call(arguments,2):n===3&&It(l)&&(l=[l]),j(s,t,l))}const K1=Symbol("ssrContext"),Z1=()=>{{const s=C(K1);return s||H("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function ya(s){return!!(s&&s.__v_isShallow)}function G1(){if(typeof window>"u")return;const s={style:"color:#3ba776"},t={style:"color:#0b1bc9"},l={style:"color:#b62e24"},n={style:"color:#9d288c"},o={header(B){return Re(B)?B.__isVue?["div",s,"VueInstance"]:Me(B)?["div",{},["span",s,u(B)],"<",p(B.value),">"]:tl(B)?["div",{},["span",s,ya(B)?"ShallowReactive":"Reactive"],"<",p(B),`>${Tt(B)?" (readonly)":""}`]:Tt(B)?["div",{},["span",s,ya(B)?"ShallowReadonly":"Readonly"],"<",p(B),">"]:null:null},hasBody(B){return B&&B.__isVue},body(B){if(B&&B.__isVue)return["div",{},...a(B.$)]}};function a(B){const d=[];B.type.props&&B.props&&d.push(r("props",de(B.props))),B.setupState!==He&&d.push(r("setup",B.setupState)),B.data!==He&&d.push(r("data",de(B.data)));const f=i(B,"computed");f&&d.push(r("computed",f));const m=i(B,"inject");return m&&d.push(r("injected",m)),d.push(["div",{},["span",{style:n.style+";opacity:0.66"},"$ (internal): "],["object",{object:B}]]),d}function r(B,d){return d=ze({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},B],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(f=>["div",{},["span",n,f+": "],p(d[f],!1)])]]:["span",{}]}function p(B,d=!0){return typeof B=="number"?["span",t,B]:typeof B=="string"?["span",l,JSON.stringify(B)]:typeof B=="boolean"?["span",n,B]:Re(B)?["object",{object:d?de(B):B}]:["span",l,String(B)]}function i(B,d){const f=B.type;if(Be(f))return;const m={};for(const h in B.ctx)y(f,h,d)&&(m[h]=B.ctx[h]);return m}function y(B,d,f){const m=B[f];if(pe(m)&&m.includes(d)||Re(m)&&d in m||B.extends&&y(B.extends,d,f)||B.mixins&&B.mixins.some(h=>y(h,d,f)))return!0}function u(B){return ya(B)?"ShallowRef":B.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const So="3.2.47",J1="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,ap=Xt&&Xt.createElement("template"),Q1={insert:(s,t,l)=>{t.insertBefore(s,l||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,l,n)=>{const o=t?Xt.createElementNS(J1,s):Xt.createElement(s,l?{is:l}:void 0);return s==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:s=>Xt.createTextNode(s),createComment:s=>Xt.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Xt.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},insertStaticContent(s,t,l,n,o,a){const r=l?l.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),l),!(o===a||!(o=o.nextSibling)););else{ap.innerHTML=n?`<svg>${s}</svg>`:s;const p=ap.content;if(n){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}t.insertBefore(p,l)}return[r?r.nextSibling:t.firstChild,l?l.previousSibling:t.lastChild]}};function ef(s,t,l){const n=s._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?s.removeAttribute("class"):l?s.setAttribute("class",t):s.className=t}function sf(s,t,l){const n=s.style,o=Ue(l);if(l&&!o){if(t&&!Ue(t))for(const a in t)l[a]==null&&er(n,a,"");for(const a in l)er(n,a,l[a])}else{const a=n.display;o?t!==l&&(n.cssText=l):t&&s.removeAttribute("style"),"_vod"in s&&(n.display=a)}}const tf=/[^\\];\s*$/,rp=/\s*!important$/;function er(s,t,l){if(pe(l))l.forEach(n=>er(s,t,n));else if(l==null&&(l=""),tf.test(l)&&H(`Unexpected semicolon at the end of '${t}' style value: '${l}'`),t.startsWith("--"))s.setProperty(t,l);else{const n=lf(s,t);rp.test(l)?s.setProperty(ut(n),l.replace(rp,""),"important"):s[n]=l}}const cp=["Webkit","Moz","ms"],ua={};function lf(s,t){const l=ua[t];if(l)return l;let n=Js(t);if(n!=="filter"&&n in s)return ua[t]=n;n=rl(n);for(let o=0;o<cp.length;o++){const a=cp[o]+n;if(a in s)return ua[t]=a}return t}const pp="http://www.w3.org/1999/xlink";function nf(s,t,l,n,o){if(n&&t.startsWith("xlink:"))l==null?s.removeAttributeNS(pp,t.slice(6,t.length)):s.setAttributeNS(pp,t,l);else{const a=wB(t);l==null||a&&!e2(l)?s.removeAttribute(t):s.setAttribute(t,a?"":l)}}function of(s,t,l,n,o,a,r){if(t==="innerHTML"||t==="textContent"){n&&r(n,o,a),s[t]=l??"";return}if(t==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=l;const i=l??"";(s.value!==i||s.tagName==="OPTION")&&(s.value=i),l==null&&s.removeAttribute(t);return}let p=!1;if(l===""||l==null){const i=typeof s[t];i==="boolean"?l=e2(l):l==null&&i==="string"?(l="",p=!0):i==="number"&&(l=0,p=!0)}try{s[t]=l}catch(i){p||H(`Failed setting prop "${t}" on <${s.tagName.toLowerCase()}>: value ${l} is invalid.`,i)}p&&s.removeAttribute(t)}function bl(s,t,l,n){s.addEventListener(t,l,n)}function af(s,t,l,n){s.removeEventListener(t,l,n)}function rf(s,t,l,n,o=null){const a=s._vei||(s._vei={}),r=a[t];if(n&&r)r.value=n;else{const[p,i]=cf(t);if(n){const y=a[t]=uf(n,o);bl(s,p,y,i)}else r&&(af(s,p,r,i),a[t]=void 0)}}const ip=/(?:Once|Passive|Capture)$/;function cf(s){let t;if(ip.test(s)){t={};let n;for(;n=s.match(ip);)s=s.slice(0,s.length-n[0].length),t[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):ut(s.slice(2)),t]}let Ba=0;const pf=Promise.resolve(),yf=()=>Ba||(pf.then(()=>Ba=0),Ba=Date.now());function uf(s,t){const l=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=l.attached)return;Ps(Bf(n,l.value),t,5,[n])};return l.value=s,l.attached=yf(),l}function Bf(s,t){if(pe(t)){const l=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{l.call(s),s._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const yp=/^on[a-z]/,df=(s,t,l,n,o=!1,a,r,p,i)=>{t==="class"?ef(s,n,o):t==="style"?sf(s,l,n):In(t)?ho(t)||rf(s,t,l,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ff(s,t,n,o))?of(s,t,n,a,r,p,i):(t==="true-value"?s._trueValue=n:t==="false-value"&&(s._falseValue=n),nf(s,t,n,o))};function ff(s,t,l,n){return n?!!(t==="innerHTML"||t==="textContent"||t in s&&yp.test(t)&&Be(l)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA"||yp.test(t)&&Ue(l)?!1:t in s}const Ft="transition",jl="animation",yy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mf=ze({},Yd.props,yy),jt=(s,t=[])=>{pe(s)?s.forEach(l=>l(...t)):s&&s(...t)},up=s=>s?pe(s)?s.some(t=>t.length>1):s.length>1:!1;function Ff(s){const t={};for(const Q in s)Q in yy||(t[Q]=s[Q]);if(s.css===!1)return t;const{name:l="v",type:n,duration:o,enterFromClass:a=`${l}-enter-from`,enterActiveClass:r=`${l}-enter-active`,enterToClass:p=`${l}-enter-to`,appearFromClass:i=a,appearActiveClass:y=r,appearToClass:u=p,leaveFromClass:B=`${l}-leave-from`,leaveActiveClass:d=`${l}-leave-active`,leaveToClass:f=`${l}-leave-to`}=s,m=hf(o),h=m&&m[0],_=m&&m[1],{onBeforeEnter:x,onEnter:v,onEnterCancelled:w,onLeave:k,onLeaveCancelled:M,onBeforeAppear:N=x,onAppear:J=v,onAppearCancelled:R=w}=t,X=(Q,xe,Pe)=>{gt(Q,xe?u:p),gt(Q,xe?y:r),Pe&&Pe()},ne=(Q,xe)=>{Q._isLeaving=!1,gt(Q,B),gt(Q,f),gt(Q,d),xe&&xe()},ye=Q=>(xe,Pe)=>{const Ce=Q?J:v,qe=()=>X(xe,Q,Pe);jt(Ce,[xe,qe]),Bp(()=>{gt(xe,Q?i:a),ot(xe,Q?u:p),up(Ce)||dp(xe,n,h,qe)})};return ze(t,{onBeforeEnter(Q){jt(x,[Q]),ot(Q,a),ot(Q,r)},onBeforeAppear(Q){jt(N,[Q]),ot(Q,i),ot(Q,y)},onEnter:ye(!1),onAppear:ye(!0),onLeave(Q,xe){Q._isLeaving=!0;const Pe=()=>ne(Q,xe);ot(Q,B),By(),ot(Q,d),Bp(()=>{Q._isLeaving&&(gt(Q,B),ot(Q,f),up(k)||dp(Q,n,_,Pe))}),jt(k,[Q,Pe])},onEnterCancelled(Q){X(Q,!1),jt(w,[Q])},onAppearCancelled(Q){X(Q,!0),jt(R,[Q])},onLeaveCancelled(Q){ne(Q),jt(M,[Q])}})}function hf(s){if(s==null)return null;if(Re(s))return[da(s.enter),da(s.leave)];{const t=da(s);return[t,t]}}function da(s){const t=AB(s);return bd(t,"<transition> explicit duration"),t}function ot(s,t){t.split(/\s+/).forEach(l=>l&&s.classList.add(l)),(s._vtc||(s._vtc=new Set)).add(t)}function gt(s,t){t.split(/\s+/).forEach(n=>n&&s.classList.remove(n));const{_vtc:l}=s;l&&(l.delete(t),l.size||(s._vtc=void 0))}function Bp(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let gf=0;function dp(s,t,l,n){const o=s._endId=++gf,a=()=>{o===s._endId&&n()};if(l)return setTimeout(a,l);const{type:r,timeout:p,propCount:i}=uy(s,t);if(!r)return n();const y=r+"end";let u=0;const B=()=>{s.removeEventListener(y,d),a()},d=f=>{f.target===s&&++u>=i&&B()};setTimeout(()=>{u<i&&B()},p+1),s.addEventListener(y,d)}function uy(s,t){const l=window.getComputedStyle(s),n=m=>(l[m]||"").split(", "),o=n(`${Ft}Delay`),a=n(`${Ft}Duration`),r=fp(o,a),p=n(`${jl}Delay`),i=n(`${jl}Duration`),y=fp(p,i);let u=null,B=0,d=0;t===Ft?r>0&&(u=Ft,B=r,d=a.length):t===jl?y>0&&(u=jl,B=y,d=i.length):(B=Math.max(r,y),u=B>0?r>y?Ft:jl:null,d=u?u===Ft?a.length:i.length:0);const f=u===Ft&&/\b(transform|all)(,|$)/.test(n(`${Ft}Property`).toString());return{type:u,timeout:B,propCount:d,hasTransform:f}}function fp(s,t){for(;s.length<t.length;)s=s.concat(s);return Math.max(...t.map((l,n)=>mp(l)+mp(s[n])))}function mp(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function By(){return document.body.offsetHeight}const dy=new WeakMap,fy=new WeakMap,my={name:"TransitionGroup",props:ze({},mf,{tag:String,moveClass:String}),setup(s,{slots:t}){const l=Cs(),n=H2();let o,a;return Ko(()=>{if(!o.length)return;const r=s.moveClass||`${s.name||"v"}-move`;if(!Ef(o[0].el,l.vnode.el,r))return;o.forEach(vf),o.forEach(xf);const p=o.filter(wf);By(),p.forEach(i=>{const y=i.el,u=y.style;ot(y,r),u.transform=u.webkitTransform=u.transitionDuration="";const B=y._moveCb=d=>{d&&d.target!==y||(!d||/transform$/.test(d.propertyName))&&(y.removeEventListener("transitionend",B),y._moveCb=null,gt(y,r))};y.addEventListener("transitionend",B)})}),()=>{const r=de(s),p=Ff(r);let i=r.tag||Te;o=a,a=t.default?Gr(t.default()):[];for(let y=0;y<a.length;y++){const u=a[y];u.key!=null?Ml(u,bn(u,p,n,l)):H("<TransitionGroup> children must be keyed.")}if(o)for(let y=0;y<o.length;y++){const u=o[y];Ml(u,bn(u,p,n,l)),dy.set(u,u.el.getBoundingClientRect())}return j(i,null,a)}}},_f=s=>delete s.mode;my.props;const bf=my;function vf(s){const t=s.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function xf(s){fy.set(s,s.el.getBoundingClientRect())}function wf(s){const t=dy.get(s),l=fy.get(s),n=t.left-l.left,o=t.top-l.top;if(n||o){const a=s.el.style;return a.transform=a.webkitTransform=`translate(${n}px,${o}px)`,a.transitionDuration="0s",s}}function Ef(s,t,l){const n=s.cloneNode();s._vtc&&s._vtc.forEach(r=>{r.split(/\s+/).forEach(p=>p&&n.classList.remove(p))}),l.split(/\s+/).forEach(r=>r&&n.classList.add(r)),n.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(n);const{hasTransform:a}=uy(n);return o.removeChild(n),a}const Fp=s=>{const t=s.props["onUpdate:modelValue"]||!1;return pe(t)?l=>xt(t,l):t};function kf(s){s.target.composing=!0}function hp(s){const t=s.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Df={created(s,{modifiers:{lazy:t,trim:l,number:n}},o){s._assign=Fp(o);const a=n||o.props&&o.props.type==="number";bl(s,t?"change":"input",r=>{if(r.target.composing)return;let p=s.value;l&&(p=p.trim()),a&&(p=Ia(p)),s._assign(p)}),l&&bl(s,"change",()=>{s.value=s.value.trim()}),t||(bl(s,"compositionstart",kf),bl(s,"compositionend",hp),bl(s,"change",hp))},mounted(s,{value:t}){s.value=t??""},beforeUpdate(s,{value:t,modifiers:{lazy:l,trim:n,number:o}},a){if(s._assign=Fp(a),s.composing||document.activeElement===s&&s.type!=="range"&&(l||n&&s.value.trim()===t||(o||s.type==="number")&&Ia(s.value)===t))return;const r=t??"";s.value!==r&&(s.value=r)}},Sf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gp=(s,t)=>l=>{if(!("key"in l))return;const n=ut(l.key);if(t.some(o=>o===n||Sf[o]===n))return s(l)},Fy={beforeMount(s,{value:t},{transition:l}){s._vod=s.style.display==="none"?"":s.style.display,l&&t?l.beforeEnter(s):Ul(s,t)},mounted(s,{value:t},{transition:l}){l&&t&&l.enter(s)},updated(s,{value:t,oldValue:l},{transition:n}){!t!=!l&&(n?t?(n.beforeEnter(s),Ul(s,!0),n.enter(s)):n.leave(s,()=>{Ul(s,!1)}):Ul(s,t))},beforeUnmount(s,{value:t}){Ul(s,t)}};function Ul(s,t){s.style.display=t?s._vod:"none"}const Cf=ze({patchProp:df},Q1);let _p;function $f(){return _p||(_p=D1(Cf))}const Af=(...s)=>{const t=$f().createApp(...s);Mf(t),Of(t);const{mount:l}=t;return t.mount=n=>{const o=Pf(n);if(!o)return;const a=t._component;!Be(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const r=l(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Mf(s){Object.defineProperty(s.config,"isNativeTag",{value:t=>Qi(t)||vB(t),writable:!1})}function Of(s){{const t=s.config.isCustomElement;Object.defineProperty(s.config,"isCustomElement",{get(){return t},set(){H("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const l=s.config.compilerOptions,n='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(s.config,"compilerOptions",{get(){return H(n),l},set(){H(n)}})}}function Pf(s){if(Ue(s)){const t=document.querySelector(s);return t||H(`Failed to mount app: mount target selector "${s}" returned null.`),t}return window.ShadowRoot&&s instanceof window.ShadowRoot&&s.mode==="closed"&&H('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),s}function Tf(){G1()}Tf();function sr(s,t={},l){for(const n in s){const o=s[n],a=l?`${l}:${n}`:n;typeof o=="object"&&o!==null?sr(o,t,a):typeof o=="function"&&(t[a]=o)}return t}function If(s,t){return s.reduce((l,n)=>l.then(()=>n.apply(void 0,t)),Promise.resolve())}function Rf(s,t){return Promise.all(s.map(l=>l.apply(void 0,t)))}function fa(s,t){for(const l of s)l(t)}class Lf{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,l,n={}){if(!t||typeof l!="function")return()=>{};const o=t;let a;for(;this._deprecatedHooks[t];)a=this._deprecatedHooks[t],t=a.to;if(a&&!n.allowDeprecated){let r=a.message;r||(r=`${o} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(l),()=>{l&&(this.removeHook(t,l),l=void 0)}}hookOnce(t,l){let n,o=(...a)=>(typeof n=="function"&&n(),n=void 0,o=void 0,l(...a));return n=this.hook(t,o),n}removeHook(t,l){if(this._hooks[t]){const n=this._hooks[t].indexOf(l);n!==-1&&this._hooks[t].splice(n,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,l){this._deprecatedHooks[t]=typeof l=="string"?{to:l}:l;const n=this._hooks[t]||[];this._hooks[t]=void 0;for(const o of n)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const l in t)this.deprecateHook(l,t[l])}addHooks(t){const l=sr(t),n=Object.keys(l).map(o=>this.hook(o,l[o]));return()=>{for(const o of n.splice(0,n.length))o()}}removeHooks(t){const l=sr(t);for(const n in l)this.removeHook(n,l[n])}callHook(t,...l){return this.callHookWith(If,t,...l)}callHookParallel(t,...l){return this.callHookWith(Rf,t,...l)}callHookWith(t,l,...n){const o=this._before||this._after?{name:l,args:n,context:{}}:void 0;this._before&&fa(this._before,o);const a=t(this._hooks[l]||[],n);return a instanceof Promise?a.finally(()=>{this._after&&o&&fa(this._after,o)}):(this._after&&o&&fa(this._after,o),a)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const l=this._before.indexOf(t);l!==-1&&this._before.splice(l,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const l=this._after.indexOf(t);l!==-1&&this._after.splice(l,1)}}}function Nf(){return new Lf}function Hf(s){return Array.isArray(s)?s:[s]}const qf=["title","script","style","noscript"],lc=["base","meta","link","style","script","noscript"],jf=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Uf=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Vf=["tagPosition","tagPriority","tagDuplicateStrategy"];function hy(s,t){const{props:l,tag:n}=s;if(Uf.includes(n))return n;if(n==="link"&&l.rel==="canonical")return"canonical";if(l.charset)return"charset";const o=["id"];n==="meta"&&o.push("name","property","http-equiv");for(const a of o)if(typeof l[a]<"u"){const r=String(l[a]);return t&&!t(r)?!1:`${n}:${a}:${r}`}return!1}const zf=s=>{s=s||{};const t=s.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:l}){t.forEach(o=>{l.props[o]&&(l.key=l.props[o],delete l.props[o])});const n=l.key?`${l.tag}:${l.key}`:hy(l);n&&(l._d=n)},"tags:resolve":function(l){const n={};l.tags.forEach(o=>{let a=o._d||o._p;const r=n[a];if(r){let p=o==null?void 0:o.tagDuplicateStrategy;if(!p&&(o.tag==="htmlAttrs"||o.tag==="bodyAttrs")&&(p="merge"),p==="merge"){const y=r.props;["class","style"].forEach(u=>{o.props[u]&&y[u]&&(u==="style"&&!y[u].endsWith(";")&&(y[u]+=";"),o.props[u]=`${y[u]} ${o.props[u]}`)}),n[a].props={...y,...o.props};return}else o._e===r._e&&(a=o._d=`${a}:${o._p}`);const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.children){delete n[a];return}}n[a]=o}),l.tags=Object.values(n)}}}};function gy(s){let t=9;for(let l=0;l<s.length;)t=Math.imul(t^s.charCodeAt(l++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}const so=(s,t)=>{const{tag:l,$el:n}=s;n&&(Object.entries(l.props).forEach(([o,a])=>{a=String(a);const r=`attr:${o}`;if(o==="class"){if(!a)return;for(const p of a.split(" ")){const i=`${r}:${p}`;t&&t(s,i,()=>n.classList.remove(p)),n.classList.contains(p)||n.classList.add(p)}return}t&&!o.startsWith("data-h-")&&t(s,r,()=>n.removeAttribute(o)),n.getAttribute(o)!==a&&n.setAttribute(o,a)}),qf.includes(l.tag)&&n.innerHTML!==(l.children||"")&&(n.innerHTML=l.children||""))};async function _y(s,t={}){var B,d;const l={shouldRender:!0};if(await s.hooks.callHook("dom:beforeRender",l),!l.shouldRender)return;const n=t.document||window.document,o=s._popSideEffectQueue();s.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([m,h])=>{o[m]=h})});const a=async f=>{const m=s.headEntries().find(_=>_._i===f._e),h={renderId:f._d||gy(JSON.stringify({...f,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:f,entry:m,staleSideEffects:o};return await s.hooks.callHook("dom:beforeRenderTag",h),h},r=[],p={body:[],head:[]},i=(f,m,h)=>{m=`${f.renderId}:${m}`,f.entry&&(f.entry._sde[m]=h),delete o[m]},y=f=>{s._elMap[f.renderId]=f.$el,r.push(f),i(f,"el",()=>{var m;(m=f.$el)==null||m.remove(),delete s._elMap[f.renderId]})};for(const f of await s.resolveTags()){const m=await a(f);if(!m.shouldRender)continue;const{tag:h}=m;if(h.tag==="title"){n.title=h.children||"",r.push(m);continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){m.$el=n[h.tag==="htmlAttrs"?"documentElement":"body"],so(m,i),r.push(m);continue}if(m.$el=s._elMap[m.renderId],!m.$el&&h._hash&&(m.$el=n.querySelector(`${(B=h.tagPosition)!=null&&B.startsWith("body")?"body":"head"} > ${h.tag}[data-h-${h._hash}]`)),m.$el){m.tag._d&&so(m),y(m);continue}m.$el=n.createElement(h.tag),so(m),p[(d=h.tagPosition)!=null&&d.startsWith("body")?"body":"head"].push(m)}const u={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([f,m])=>{var _;if(!m.length)return;const h=(_=n==null?void 0:n[f])==null?void 0:_.children;if(h){for(const x of[...h].reverse()){const v=x.tagName.toLowerCase();if(!lc.includes(v))continue;const w=hy({tag:v,props:x.getAttributeNames().reduce((M,N)=>({...M,[N]:x.getAttribute(N)}),{})}),k=m.findIndex(M=>{var N;return M&&(M.tag._d===w||((N=x.isEqualNode)==null?void 0:N.call(x,M.$el)))});if(k!==-1){const M=m[k];M.$el=x,so(M),y(M),delete m[k]}}m.forEach(x=>{const v=x.tag.tagPosition||"head";u[v]=u[v]||n.createDocumentFragment(),u[v].appendChild(x.$el),y(x)})}}),u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f of r)await s.hooks.callHook("dom:renderTag",f);Object.values(o).forEach(f=>f())}let ma=null;async function by(s,t={}){function l(){return ma=null,_y(s,t)}const n=t.delayFn||(o=>setTimeout(o,10));return ma=ma||new Promise(o=>n(()=>o(l())))}const Wf=s=>({hooks:{"entries:updated":function(t){if(typeof(s==null?void 0:s.document)>"u"&&typeof window>"u")return;let l=s==null?void 0:s.delayFn;!l&&typeof requestAnimationFrame<"u"&&(l=requestAnimationFrame),by(t,{document:(s==null?void 0:s.document)||window.document,delayFn:l})}}}),bp={critical:2,high:9,low:12,base:-1,title:1,meta:10};function vp(s){if(typeof s.tagPriority=="number")return s.tagPriority;if(s.tag==="meta"){if(s.props.charset)return-2;if(s.props["http-equiv"]==="content-security-policy")return 0}const t=s.tagPriority||s.tag;return t in bp?bp[t]:10}const Yf=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Xf(){return{hooks:{"tags:resolve":s=>{const t=l=>{var n;return(n=s.tags.find(o=>o._d===l))==null?void 0:n._p};for(const{prefix:l,offset:n}of Yf)for(const o of s.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(l))){const a=t(o.tagPriority.replace(l,""));typeof a<"u"&&(o._p=a+n)}s.tags.sort((l,n)=>l._p-n._p).sort((l,n)=>vp(l)-vp(n))}}}}const xp=(s,t)=>s==null?t||null:typeof s=="function"?s(t):s.replace("%s",t??""),Kf=()=>({hooks:{"tags:resolve":s=>{const{tags:t}=s;let l=t.findIndex(o=>o.tag==="titleTemplate");const n=t.findIndex(o=>o.tag==="title");if(n!==-1&&l!==-1){const o=xp(t[l].children,t[n].children);o!==null?t[n].children=o||t[n].children:delete t[n]}else if(l!==-1){const o=xp(t[l].children);o!==null&&(t[l].children=o,t[l].tag="title",l=-1)}l!==-1&&delete t[l],s.tags=t.filter(Boolean)}}}),Zf=()=>({hooks:{"tag:normalise":function({tag:s}){typeof s.props.body<"u"&&(s.tagPosition="bodyClose",delete s.props.body)}}}),Gf=typeof window<"u",Jf=()=>({hooks:{"tag:normalise":s=>{var o,a;const{tag:t,entry:l}=s,n=typeof t.props._dynamic<"u";!lc.includes(t.tag)||!t.key||(t._hash=gy(JSON.stringify({tag:t.tag,key:t.key})),!(Gf||(a=(o=xy())==null?void 0:o.resolvedOptions)!=null&&a.document)&&(l._m==="server"||n)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":s=>{s.tags=s.tags.map(t=>(delete t.props._dynamic,t))}}}),wp=["script","link","bodyAttrs"],Qf=()=>{const s=(t,l)=>{const n={},o={};Object.entries(l.props).forEach(([r,p])=>{r.startsWith("on")&&typeof p=="function"?o[r]=p:n[r]=p});let a;return t==="dom"&&l.tag==="script"&&typeof n.src=="string"&&typeof o.onload<"u"&&(a=n.src,delete n.src),{props:n,eventHandlers:o,delayedSrc:a}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(l=>(!wp.includes(l.tag)||!Object.entries(l.props).find(([n,o])=>n.startsWith("on")&&typeof o=="function")||(l.props=s("ssr",l).props),l))},"dom:beforeRenderTag":function(t){if(!wp.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([a,r])=>a.startsWith("on")&&typeof r=="function"))return;const{props:l,eventHandlers:n,delayedSrc:o}=s("dom",t.tag);Object.keys(n).length&&(t.tag.props=l,t.tag._eventHandlers=n,t.tag._delayedSrc=o)},"dom:renderTag":function(t){const l=t.$el;if(!t.tag._eventHandlers||!l)return;const n=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:l;Object.entries(t.tag._eventHandlers).forEach(([o,a])=>{const r=`${t.tag._d||t.tag._p}:${o}`,p=o.slice(2).toLowerCase(),i=`data-h-${p}`;if(delete t.staleSideEffects[r],l.hasAttribute(i))return;const y=a;l.setAttribute(i,""),n.addEventListener(p,y),t.entry&&(t.entry._sde[r]=()=>{n.removeEventListener(p,y),l.removeAttribute(i)})}),t.tag._delayedSrc&&l.setAttribute("src",t.tag._delayedSrc)}}}};let vy;const em=s=>vy=s,xy=()=>vy;async function sm(s,t){const l={tag:s,props:{}};return s==="title"||s==="titleTemplate"?(l.children=t instanceof Promise?await t:t,l):(l.props=await tm({...t}),["children","innerHtml","innerHTML"].forEach(n=>{typeof l.props[n]<"u"&&(l.children=l.props[n],typeof l.children=="object"&&(l.children=JSON.stringify(l.children)),delete l.props[n])}),Object.keys(l.props).filter(n=>Vf.includes(n)).forEach(n=>{l[n]=l.props[n],delete l.props[n]}),typeof l.props.class=="object"&&!Array.isArray(l.props.class)&&(l.props.class=Object.keys(l.props.class).filter(n=>l.props.class[n])),Array.isArray(l.props.class)&&(l.props.class=l.props.class.join(" ")),l.props.content&&Array.isArray(l.props.content)?l.props.content.map((n,o)=>{const a={...l,props:{...l.props}};return a.props.content=n,a.key=`${l.props.name||l.props.property}:${o}`,a}):l)}async function tm(s){for(const t of Object.keys(s))s[t]instanceof Promise&&(s[t]=await s[t]),String(s[t])==="true"?s[t]="":String(s[t])==="false"&&delete s[t];return s}const lm=10;async function nm(s){const t=[];return Object.entries(s.resolvedInput||s.input).filter(([l,n])=>typeof n<"u"&&jf.includes(l)).forEach(([l,n])=>{const o=Hf(n);t.push(...o.map(a=>sm(l,a)).flat())}),(await Promise.all(t)).flat().map((l,n)=>(l._e=s._i,l._p=(s._i<<lm)+n,l))}const om=()=>[zf(),Xf(),Kf(),Jf(),Qf(),Zf()],am=(s={})=>[Wf({document:s==null?void 0:s.document,delayFn:s==null?void 0:s.domDelayFn})];function rm(s={}){const t=cm({...s,plugins:[...am(s),...(s==null?void 0:s.plugins)||[]]});return em(t),t}function cm(s={}){let t=[],l={},n=0;const o=Nf();s!=null&&s.hooks&&o.addHooks(s.hooks),s.plugins=[...om(),...(s==null?void 0:s.plugins)||[]],s.plugins.forEach(p=>p.hooks&&o.addHooks(p.hooks));const a=()=>o.callHook("entries:updated",r),r={resolvedOptions:s,headEntries(){return t},get hooks(){return o},use(p){p.hooks&&o.addHooks(p.hooks)},push(p,i){const y={_i:n++,input:p,_sde:{}};return i!=null&&i.mode&&(y._m=i==null?void 0:i.mode),t.push(y),a(),{dispose(){t=t.filter(u=>u._i!==y._i?!0:(l={...l,...u._sde||{}},u._sde={},a(),!1))},patch(u){t=t.map(B=>(B._i===y._i&&(y.input=B.input=u,a()),B))}}},async resolveTags(){const p={tags:[],entries:[...t]};await o.callHook("entries:resolve",p);for(const i of p.entries)for(const y of await nm(i)){const u={tag:y,entry:i};await o.callHook("tag:normalise",u),p.tags.push(u.tag)}return await o.callHook("tags:resolve",p),p.tags},_elMap:{},_popSideEffectQueue(){const p={...l};return l={},p}};return r.hooks.callHook("init",r),r}function pm(s){return typeof s=="function"?s():E(s)}function Co(s,t=""){if(s instanceof Promise)return s;const l=pm(s);if(!s||!l)return l;if(Array.isArray(l))return l.map(n=>Co(n,t));if(typeof l=="object"){let n=!1;const o=Object.fromEntries(Object.entries(l).map(([a,r])=>a==="titleTemplate"||a.startsWith("on")?[a,E(r)]:((typeof r=="function"||Me(r))&&(n=!0),[a,Co(r,a)])));return n&&lc.includes(String(t))&&(o._dynamic=!0),o}return l}const im=So.startsWith("3"),ym=typeof window<"u",wy="usehead";function nc(){return Cs()&&C(wy)||xy()}function um(s={}){const t=rm({...s,domDelayFn:n=>setTimeout(()=>ts(()=>n()),10),plugins:[Bm(),...(s==null?void 0:s.plugins)||[]]}),l={install(n){im&&(n.config.globalProperties.$unhead=t,n.provide(wy,t))}};return t.install=l.install,t}const Bm=()=>({hooks:{"entries:resolve":function(s){for(const t of s.entries)t.resolvedInput=Co(t.input)}}});function dm(s,t={}){const l=nc(),n=G(!1),o=G({});yl(()=>{o.value=n.value?{}:Co(s)});const a=l.push(o.value,t);return ge(o,p=>{a.patch(p)}),Cs()&&(Hn(()=>{a.dispose()}),V2(()=>{n.value=!0}),U2(()=>{n.value=!1})),a}function fm(s,t={}){return nc().push(s,t)}function oc(s,t={}){var n;const l=nc();if(l){const o=ym||!!((n=l.resolvedOptions)!=null&&n.document);return t.mode==="server"&&o||t.mode==="client"&&!o?void 0:o?dm(s,t):fm(s,t)}}const mm=s=>oc({htmlAttrs:s});function Fm(s){const t=um(),l={unhead:t,install(n){So.startsWith("3")&&(n.config.globalProperties.$head=t,n.provide("usehead",t))},use(n){t.use(n)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(n,o){return t.push(n,o)},addEntry(n,o){return t.push(n,o)},addHeadObjs(n,o){return t.push(n,o)},addReactiveEntry(n,o){const a=oc(n,o);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,o){o?_y(t,{document:n}):by(t,{delayFn:a=>setTimeout(()=>a(),50),document:n})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=l.addHeadObjs,t.updateDOM=l.updateDOM,t.hooks.hook("dom:beforeRender",n=>{for(const o of l.hooks["before:dom"])o()===!1&&(n.shouldRender=!1)}),s&&l.addHeadObjs(s),l}const an=Symbol("v-click-clicks"),Kt=Symbol("v-click-clicks-elements"),tr=Symbol("v-click-clicks-order-map"),rn=Symbol("v-click-clicks-disabled"),Ey=Symbol("slidev-slide-scale"),T=Symbol("slidev-slidev-context"),hm=Symbol("slidev-route"),gm=Symbol("slidev-slide-context"),Yt="slidev-vclick-target",Fa="slidev-vclick-hidden",_m="slidev-vclick-fade",ha="slidev-vclick-hidden-explicitly",Vl="slidev-vclick-current",to="slidev-vclick-prior",bm=["localhost","127.0.0.1"];let vm=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((t,l)=>(l&=63,l<36?t+=l.toString(36):l<62?t+=(l-26).toString(36).toUpperCase():l>62?t+="-":t+="_",t),"");function lr(s,t){if(!s)return!1;const l=s.indexOf(t);return l>=0?(s.splice(l,1),!0):!1}function xm(...s){let t,l,n;s.length===1?(t=0,n=1,[l]=s):[t,l,n=1]=s;const o=[];let a=t;for(;a<l;)o.push(a),a+=n||1;return o}function wm(s){return s!=null}function Em(s,t){return Object.fromEntries(Object.entries(s).map(([l,n])=>t(l,n)).filter(wm))}const sn={theme:"unicorn",title:"Matplotlib 基础",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Ae=sn,Ct=Ae.aspectRatio??16/9,$t=Ae.canvasWidth??980,ac=Math.ceil($t/Ct),rc=A(()=>Em(Ae.themeConfig||{},(s,t)=>[`--slidev-theme-${s}`,t]));function Is(s,t,l){Object.defineProperty(s,t,{value:l,writable:!0,enumerable:!1})}const Bl=Ve({page:0,clicks:0});let km=[],Dm=[];Is(Bl,"$syncUp",!0);Is(Bl,"$syncDown",!0);Is(Bl,"$paused",!1);Is(Bl,"$onSet",s=>km.push(s));Is(Bl,"$onPatch",s=>Dm.push(s));Is(Bl,"$patch",async()=>!1);function ky(s,t,l=!1){const n=[];let o=!1,a=!1,r,p;const i=Ve(t);function y(f){n.push(f)}function u(f,m){i[f]!==m&&(clearTimeout(r),o=!0,i[f]=m,r=setTimeout(()=>o=!1,0))}function B(f){o||(clearTimeout(p),a=!0,Object.entries(f).forEach(([m,h])=>{i[m]=h}),p=setTimeout(()=>a=!1,0))}function d(f){let m;l?l&&window.addEventListener("storage",_=>{_&&_.key===f&&_.newValue&&B(JSON.parse(_.newValue))}):(m=new BroadcastChannel(f),m.addEventListener("message",_=>B(_.data)));function h(){!l&&m&&!a?m.postMessage(de(i)):l&&!a&&window.localStorage.setItem(f,JSON.stringify(i)),o||n.forEach(_=>_(i))}if(ge(i,h,{deep:!0}),l){const _=window.localStorage.getItem(f);_&&B(JSON.parse(_))}}return{init:d,onPatch:y,patch:u,state:i}}const{init:Sm,onPatch:Cm,patch:zl,state:ga}=ky(Bl,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),dl=Ve({});let $m=[],Am=[];Is(dl,"$syncUp",!0);Is(dl,"$syncDown",!0);Is(dl,"$paused",!1);Is(dl,"$onSet",s=>$m.push(s));Is(dl,"$onPatch",s=>Am.push(s));Is(dl,"$patch",async()=>!1);const{init:Mm,onPatch:Om,patch:Dy,state:$o}=ky(dl,{},!0),Pm="modulepreload",Tm=function(s){return"/math201/slides/matplotlib/"+s},Ep={},At=function(t,l,n){if(!l||l.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(l.map(a=>{if(a=Tm(a),a in Ep)return;Ep[a]=!0;const r=a.endsWith(".css"),p=r?'[rel="stylesheet"]':"";if(!!n)for(let u=o.length-1;u>=0;u--){const B=o[u];if(B.href===a&&(!r||B.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const y=document.createElement("link");if(y.rel=r?"stylesheet":Pm,r||(y.as="script",y.crossOrigin=""),y.href=a,document.head.appendChild(y),r)return new Promise((u,B)=>{y.addEventListener("load",u),y.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var kp;const Us=typeof window<"u",Im=s=>typeof s<"u",Rm=Object.prototype.toString,En=s=>typeof s=="function",Lm=s=>typeof s=="number",Sy=s=>typeof s=="string",nr=s=>Rm.call(s)==="[object Object]",or=()=>+Date.now(),Cl=()=>{},Nm=Us&&((kp=window==null?void 0:window.navigator)==null?void 0:kp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ns(s){return typeof s=="function"?s():E(s)}function Hm(s,t){function l(...n){return new Promise((o,a)=>{Promise.resolve(s(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(a)})}return l}const Cy=s=>s();function qm(s=Cy){const t=G(!0);function l(){t.value=!1}function n(){t.value=!0}const o=(...a)=>{t.value&&s(...a)};return{isActive:Ks(t),pause:l,resume:n,eventFilter:o}}function jm(s){return s}function Um(s,t){var l;if(typeof s=="number")return s+t;const n=((l=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:l[0])||"",o=s.slice(n.length),a=parseFloat(n)+t;return Number.isNaN(a)?s:a+o}function Vm(s,t){let l,n,o;const a=G(!0),r=()=>{a.value=!0,o()};ge(s,r,{flush:"sync"});const p=En(t)?t:t.get,i=En(t)?void 0:t.set,y=w2((u,B)=>(n=u,o=B,{get(){return a.value&&(l=p(),a.value=!1),n(),l},set(d){i==null||i(d)}}));return Object.isExtensible(y)&&(y.trigger=r),y}function st(s){return Nr()?(c2(s),!0):!1}function zm(s){if(!Me(s))return Ve(s);const t=new Proxy({},{get(l,n,o){return E(Reflect.get(s.value,n,o))},set(l,n,o){return Me(s.value[n])&&!Me(o)?s.value[n].value=o:s.value[n]=o,!0},deleteProperty(l,n){return Reflect.deleteProperty(s.value,n)},has(l,n){return Reflect.has(s.value,n)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(t)}function $y(s){return typeof s=="function"?A(s):G(s)}var Wm=Object.defineProperty,Ym=Object.defineProperties,Xm=Object.getOwnPropertyDescriptors,Dp=Object.getOwnPropertySymbols,Km=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Sp=(s,t,l)=>t in s?Wm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,Gm=(s,t)=>{for(var l in t||(t={}))Km.call(t,l)&&Sp(s,l,t[l]);if(Dp)for(var l of Dp(t))Zm.call(t,l)&&Sp(s,l,t[l]);return s},Jm=(s,t)=>Ym(s,Xm(t));function Qm(s){if(!Me(s))return ud(s);const t=Array.isArray(s.value)?new Array(s.value.length):{};for(const l in s.value)t[l]=w2(()=>({get(){return s.value[l]},set(n){if(Array.isArray(s.value)){const o=[...s.value];o[l]=n,s.value=o}else{const o=Jm(Gm({},s.value),{[l]:n});Object.setPrototypeOf(o,s.value),s.value=o}}}));return t}function cc(s,t=!0){Cs()?ul(s):t?s():ts(s)}function eF(s){Cs()&&Zo(s)}function sF(s,t=1e3,l={}){const{immediate:n=!0,immediateCallback:o=!1}=l;let a=null;const r=G(!1);function p(){a&&(clearInterval(a),a=null)}function i(){r.value=!1,p()}function y(){const u=ns(t);u<=0||(r.value=!0,o&&s(),p(),a=setInterval(s,u))}if(n&&Us&&y(),Me(t)||En(t)){const u=ge(t,()=>{r.value&&Us&&y()});st(u)}return st(i),{isActive:r,pause:i,resume:y}}function tF(s,t,l={}){const{immediate:n=!0}=l,o=G(!1);let a=null;function r(){a&&(clearTimeout(a),a=null)}function p(){o.value=!1,r()}function i(...y){r(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,s(...y)},ns(t))}return n&&(o.value=!0,Us&&i()),st(p),{isPending:Ks(o),start:i,stop:p}}function Ay(s=!1,t={}){const{truthyValue:l=!0,falsyValue:n=!1}=t,o=Me(s),a=G(s);function r(p){if(arguments.length)return a.value=p,a.value;{const i=ns(l);return a.value=a.value===i?ns(n):i,a.value}}return o?r:[a,r]}var Cp=Object.getOwnPropertySymbols,lF=Object.prototype.hasOwnProperty,nF=Object.prototype.propertyIsEnumerable,oF=(s,t)=>{var l={};for(var n in s)lF.call(s,n)&&t.indexOf(n)<0&&(l[n]=s[n]);if(s!=null&&Cp)for(var n of Cp(s))t.indexOf(n)<0&&nF.call(s,n)&&(l[n]=s[n]);return l};function aF(s,t,l={}){const n=l,{eventFilter:o=Cy}=n,a=oF(n,["eventFilter"]);return ge(s,Hm(o,t),a)}var rF=Object.defineProperty,cF=Object.defineProperties,pF=Object.getOwnPropertyDescriptors,Ao=Object.getOwnPropertySymbols,My=Object.prototype.hasOwnProperty,Oy=Object.prototype.propertyIsEnumerable,$p=(s,t,l)=>t in s?rF(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,iF=(s,t)=>{for(var l in t||(t={}))My.call(t,l)&&$p(s,l,t[l]);if(Ao)for(var l of Ao(t))Oy.call(t,l)&&$p(s,l,t[l]);return s},yF=(s,t)=>cF(s,pF(t)),uF=(s,t)=>{var l={};for(var n in s)My.call(s,n)&&t.indexOf(n)<0&&(l[n]=s[n]);if(s!=null&&Ao)for(var n of Ao(s))t.indexOf(n)<0&&Oy.call(s,n)&&(l[n]=s[n]);return l};function BF(s,t,l={}){const n=l,{eventFilter:o}=n,a=uF(n,["eventFilter"]),{eventFilter:r,pause:p,resume:i,isActive:y}=qm(o);return{stop:aF(s,t,yF(iF({},a),{eventFilter:r})),pause:p,resume:i,isActive:y}}function Es(s){var t;const l=ns(s);return(t=l==null?void 0:l.$el)!=null?t:l}const es=Us?window:void 0,Py=Us?window.document:void 0,dF=Us?window.navigator:void 0;function _e(...s){let t,l,n,o;if(Sy(s[0])||Array.isArray(s[0])?([l,n,o]=s,t=es):[t,l,n,o]=s,!t)return Cl;Array.isArray(l)||(l=[l]),Array.isArray(n)||(n=[n]);const a=[],r=()=>{a.forEach(u=>u()),a.length=0},p=(u,B,d,f)=>(u.addEventListener(B,d,f),()=>u.removeEventListener(B,d,f)),i=ge(()=>[Es(t),ns(o)],([u,B])=>{r(),u&&a.push(...l.flatMap(d=>n.map(f=>p(u,d,f,B))))},{immediate:!0,flush:"post"}),y=()=>{i(),r()};return st(y),y}let Ap=!1;function fF(s,t,l={}){const{window:n=es,ignore:o=[],capture:a=!0,detectIframe:r=!1}=l;if(!n)return;Nm&&!Ap&&(Ap=!0,Array.from(n.document.body.children).forEach(d=>d.addEventListener("click",Cl)));let p=!0;const i=d=>o.some(f=>{if(typeof f=="string")return Array.from(n.document.querySelectorAll(f)).some(m=>m===d.target||d.composedPath().includes(m));{const m=Es(f);return m&&(d.target===m||d.composedPath().includes(m))}}),u=[_e(n,"click",d=>{const f=Es(s);if(!(!f||f===d.target||d.composedPath().includes(f))){if(d.detail===0&&(p=!i(d)),!p){p=!0;return}t(d)}},{passive:!0,capture:a}),_e(n,"pointerdown",d=>{const f=Es(s);f&&(p=!d.composedPath().includes(f)&&!i(d))},{passive:!0}),r&&_e(n,"blur",d=>{var f;const m=Es(s);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(d)})].filter(Boolean);return()=>u.forEach(d=>d())}const mF=s=>typeof s=="function"?s:typeof s=="string"?t=>t.key===s:Array.isArray(s)?t=>s.includes(t.key):()=>!0;function FF(...s){let t,l,n={};s.length===3?(t=s[0],l=s[1],n=s[2]):s.length===2?typeof s[1]=="object"?(t=!0,l=s[0],n=s[1]):(t=s[0],l=s[1]):(t=!0,l=s[0]);const{target:o=es,eventName:a="keydown",passive:r=!1}=n,p=mF(t);return _e(o,a,y=>{p(y)&&l(y)},r)}function hF(s={}){var t;const{window:l=es}=s,n=(t=s.document)!=null?t:l==null?void 0:l.document,o=Vm(()=>null,()=>n==null?void 0:n.activeElement);return l&&(_e(l,"blur",a=>{a.relatedTarget===null&&o.trigger()},!0),_e(l,"focus",o.trigger,!0)),o}function Un(s,t=!1){const l=G(),n=()=>l.value=Boolean(s());return n(),cc(n,t),l}function vl(s,t={}){const{window:l=es}=t,n=Un(()=>l&&"matchMedia"in l&&typeof l.matchMedia=="function");let o;const a=G(!1),r=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",p):o.removeListener(p))},p=()=>{n.value&&(r(),o=l.matchMedia($y(s).value),a.value=o.matches,"addEventListener"in o?o.addEventListener("change",p):o.addListener(p))};return yl(p),st(()=>r()),a}const gF={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var _F=Object.defineProperty,Mp=Object.getOwnPropertySymbols,bF=Object.prototype.hasOwnProperty,vF=Object.prototype.propertyIsEnumerable,Op=(s,t,l)=>t in s?_F(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,xF=(s,t)=>{for(var l in t||(t={}))bF.call(t,l)&&Op(s,l,t[l]);if(Mp)for(var l of Mp(t))vF.call(t,l)&&Op(s,l,t[l]);return s};function wF(s,t={}){function l(p,i){let y=s[p];return i!=null&&(y=Um(y,i)),typeof y=="number"&&(y=`${y}px`),y}const{window:n=es}=t;function o(p){return n?n.matchMedia(p).matches:!1}const a=p=>vl(`(min-width: ${l(p)})`,t),r=Object.keys(s).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>a(i),enumerable:!0,configurable:!0}),p),{});return xF({greater(p){return vl(`(min-width: ${l(p,.1)})`,t)},greaterOrEqual:a,smaller(p){return vl(`(max-width: ${l(p,-.1)})`,t)},smallerOrEqual(p){return vl(`(max-width: ${l(p)})`,t)},between(p,i){return vl(`(min-width: ${l(p)}) and (max-width: ${l(i,-.1)})`,t)},isGreater(p){return o(`(min-width: ${l(p,.1)})`)},isGreaterOrEqual(p){return o(`(min-width: ${l(p)})`)},isSmaller(p){return o(`(max-width: ${l(p,-.1)})`)},isSmallerOrEqual(p){return o(`(max-width: ${l(p)})`)},isInBetween(p,i){return o(`(min-width: ${l(p)}) and (max-width: ${l(i,-.1)})`)}},r)}function EF(s={}){const{navigator:t=dF,read:l=!1,source:n,copiedDuring:o=1500,legacy:a=!1}=s,r=["copy","cut"],p=Un(()=>t&&"clipboard"in t),i=A(()=>p.value||a),y=G(""),u=G(!1),B=tF(()=>u.value=!1,o);function d(){p.value?t.clipboard.readText().then(_=>{y.value=_}):y.value=h()}if(i.value&&l)for(const _ of r)_e(_,d);async function f(_=ns(n)){i.value&&_!=null&&(p.value?await t.clipboard.writeText(_):m(_),y.value=_,u.value=!0,B.start())}function m(_){const x=document.createElement("textarea");x.value=_??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function h(){var _,x,v;return(v=(x=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:x.toString())!=null?v:""}return{isSupported:i,text:y,copied:u,copy:f}}function kF(s){return JSON.parse(JSON.stringify(s))}const ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rr="__vueuse_ssr_handlers__";ar[rr]=ar[rr]||{};const DF=ar[rr];function SF(s,t){return DF[s]||t}function CF(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"?"object":Number.isNaN(s)?"any":"number"}var $F=Object.defineProperty,Pp=Object.getOwnPropertySymbols,AF=Object.prototype.hasOwnProperty,MF=Object.prototype.propertyIsEnumerable,Tp=(s,t,l)=>t in s?$F(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,Ip=(s,t)=>{for(var l in t||(t={}))AF.call(t,l)&&Tp(s,l,t[l]);if(Pp)for(var l of Pp(t))MF.call(t,l)&&Tp(s,l,t[l]);return s};const OF={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}},Rp="vueuse-storage";function PF(s,t,l,n={}){var o;const{flush:a="pre",deep:r=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:y=!1,shallow:u,window:B=es,eventFilter:d,onError:f=R=>{console.error(R)}}=n,m=(u?Qs:G)(t);if(!l)try{l=SF("getDefaultStorage",()=>{var R;return(R=es)==null?void 0:R.localStorage})()}catch(R){f(R)}if(!l)return m;const h=ns(t),_=CF(h),x=(o=n.serializer)!=null?o:OF[_],{pause:v,resume:w}=BF(m,()=>k(m.value),{flush:a,deep:r,eventFilter:d});return B&&p&&(_e(B,"storage",J),_e(B,Rp,N)),J(),m;function k(R){try{if(R==null)l.removeItem(s);else{const X=x.write(R),ne=l.getItem(s);ne!==X&&(l.setItem(s,X),B&&B.dispatchEvent(new CustomEvent(Rp,{detail:{key:s,oldValue:ne,newValue:X,storageArea:l}})))}}catch(X){f(X)}}function M(R){const X=R?R.newValue:l.getItem(s);if(X==null)return i&&h!==null&&l.setItem(s,x.write(h)),h;if(!R&&y){const ne=x.read(X);return En(y)?y(ne,h):_==="object"&&!Array.isArray(ne)?Ip(Ip({},h),ne):ne}else return typeof X!="string"?X:x.read(X)}function N(R){J(R.detail)}function J(R){if(!(R&&R.storageArea!==l)){if(R&&R.key==null){m.value=h;return}if(!(R&&R.key!==s)){v();try{m.value=M(R)}catch(X){f(X)}finally{R?ts(w):w()}}}}}function TF(s){return vl("(prefers-color-scheme: dark)",s)}var IF=Object.defineProperty,RF=Object.defineProperties,LF=Object.getOwnPropertyDescriptors,Lp=Object.getOwnPropertySymbols,NF=Object.prototype.hasOwnProperty,HF=Object.prototype.propertyIsEnumerable,Np=(s,t,l)=>t in s?IF(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,qF=(s,t)=>{for(var l in t||(t={}))NF.call(t,l)&&Np(s,l,t[l]);if(Lp)for(var l of Lp(t))HF.call(t,l)&&Np(s,l,t[l]);return s},jF=(s,t)=>RF(s,LF(t));function VD(s,t={}){var l,n,o;const a=(l=t.draggingElement)!=null?l:es,r=(n=t.handle)!=null?n:s,p=G((o=ns(t.initialValue))!=null?o:{x:0,y:0}),i=G(),y=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,u=m=>{ns(t.preventDefault)&&m.preventDefault(),ns(t.stopPropagation)&&m.stopPropagation()},B=m=>{var h;if(!y(m)||ns(t.exact)&&m.target!==ns(s))return;const _=ns(s).getBoundingClientRect(),x={x:m.clientX-_.left,y:m.clientY-_.top};((h=t.onStart)==null?void 0:h.call(t,x,m))!==!1&&(i.value=x,u(m))},d=m=>{var h;y(m)&&i.value&&(p.value={x:m.clientX-i.value.x,y:m.clientY-i.value.y},(h=t.onMove)==null||h.call(t,p.value,m),u(m))},f=m=>{var h;y(m)&&i.value&&(i.value=void 0,(h=t.onEnd)==null||h.call(t,p.value,m),u(m))};return Us&&(_e(r,"pointerdown",B,!0),_e(a,"pointermove",d,!0),_e(a,"pointerup",f,!0)),jF(qF({},Qm(p)),{position:p,isDragging:A(()=>!!i.value),style:A(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var Hp=Object.getOwnPropertySymbols,UF=Object.prototype.hasOwnProperty,VF=Object.prototype.propertyIsEnumerable,zF=(s,t)=>{var l={};for(var n in s)UF.call(s,n)&&t.indexOf(n)<0&&(l[n]=s[n]);if(s!=null&&Hp)for(var n of Hp(s))t.indexOf(n)<0&&VF.call(s,n)&&(l[n]=s[n]);return l};function WF(s,t,l={}){const n=l,{window:o=es}=n,a=zF(n,["window"]);let r;const p=Un(()=>o&&"ResizeObserver"in o),i=()=>{r&&(r.disconnect(),r=void 0)},y=ge(()=>Es(s),B=>{i(),p.value&&o&&B&&(r=new ResizeObserver(t),r.observe(B,a))},{immediate:!0,flush:"post"}),u=()=>{i(),y()};return st(u),{isSupported:p,stop:u}}function YF(s,t={}){const{immediate:l=!0,window:n=es}=t,o=G(!1);let a=0,r=null;function p(u){if(!o.value||!n)return;const B=u-a;s({delta:B,timestamp:u}),a=u,r=n.requestAnimationFrame(p)}function i(){!o.value&&n&&(o.value=!0,r=n.requestAnimationFrame(p))}function y(){o.value=!1,r!=null&&n&&(n.cancelAnimationFrame(r),r=null)}return l&&i(),st(y),{isActive:Ks(o),pause:y,resume:i}}function XF(s,t={width:0,height:0},l={}){const{window:n=es,box:o="content-box"}=l,a=A(()=>{var i,y;return(y=(i=Es(s))==null?void 0:i.namespaceURI)==null?void 0:y.includes("svg")}),r=G(t.width),p=G(t.height);return WF(s,([i])=>{const y=o==="border-box"?i.borderBoxSize:o==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(n&&a.value){const u=Es(s);if(u){const B=n.getComputedStyle(u);r.value=parseFloat(B.width),p.value=parseFloat(B.height)}}else if(y){const u=Array.isArray(y)?y:[y];r.value=u.reduce((B,{inlineSize:d})=>B+d,0),p.value=u.reduce((B,{blockSize:d})=>B+d,0)}else r.value=i.contentRect.width,p.value=i.contentRect.height},l),ge(()=>Es(s),i=>{r.value=i?t.width:0,p.value=i?t.height:0}),{width:r,height:p}}const qp=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function KF(s,t={}){const{document:l=Py,autoExit:n=!1}=t,o=s||(l==null?void 0:l.querySelector("html")),a=G(!1);let r=qp[0];const p=Un(()=>{if(l){for(const h of qp)if(h[1]in l)return r=h,!0}else return!1;return!1}),[i,y,u,,B]=r;async function d(){p.value&&(l!=null&&l[u]&&await l[y](),a.value=!1)}async function f(){if(!p.value)return;await d();const h=Es(o);h&&(await h[i](),a.value=!0)}async function m(){a.value?await d():await f()}return l&&_e(l,B,()=>{a.value=!!(l!=null&&l[u])},!1),n&&st(d),{isSupported:p,isFullscreen:a,enter:f,exit:d,toggle:m}}function ZF(s,t,l={}){const{root:n,rootMargin:o="0px",threshold:a=.1,window:r=es}=l,p=Un(()=>r&&"IntersectionObserver"in r);let i=Cl;const y=p.value?ge(()=>({el:Es(s),root:Es(n)}),({el:B,root:d})=>{if(i(),!B)return;const f=new IntersectionObserver(t,{root:d,rootMargin:o,threshold:a});f.observe(B),i=()=>{f.disconnect(),i=Cl}},{immediate:!0,flush:"post"}):Cl,u=()=>{i(),y()};return st(u),{isSupported:p,stop:u}}function Vs(s,t,l={}){const{window:n=es}=l;return PF(s,t,n==null?void 0:n.localStorage,l)}const GF={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function JF(s={}){const{reactive:t=!1,target:l=es,aliasMap:n=GF,passive:o=!0,onEventFired:a=Cl}=s,r=Ve(new Set),p={toJSON(){return{}},current:r},i=t?Ve(p):p,y=new Set,u=new Set;function B(h,_){h in i&&(t?i[h]=_:i[h].value=_)}function d(){r.clear();for(const h of u)B(h,!1)}function f(h,_){var x,v;const w=(x=h.key)==null?void 0:x.toLowerCase(),M=[(v=h.code)==null?void 0:v.toLowerCase(),w].filter(Boolean);w&&(_?r.add(w):r.delete(w));for(const N of M)u.add(N),B(N,_);w==="meta"&&!_?(y.forEach(N=>{r.delete(N),B(N,!1)}),y.clear()):typeof h.getModifierState=="function"&&h.getModifierState("Meta")&&_&&[...r,...M].forEach(N=>y.add(N))}_e(l,"keydown",h=>(f(h,!0),a(h)),{passive:o}),_e(l,"keyup",h=>(f(h,!1),a(h)),{passive:o}),_e("blur",d,{passive:!0}),_e("focus",d,{passive:!0});const m=new Proxy(i,{get(h,_,x){if(typeof _!="string")return Reflect.get(h,_,x);if(_=_.toLowerCase(),_ in n&&(_=n[_]),!(_ in i))if(/[+_-]/.test(_)){const w=_.split(/[+_-]/g).map(k=>k.trim());i[_]=A(()=>w.every(k=>E(m[k])))}else i[_]=G(!1);const v=Reflect.get(h,_,x);return t?E(v):v}});return m}function zD(s={}){const{type:t="page",touch:l=!0,resetOnTouchEnds:n=!1,initialValue:o={x:0,y:0},window:a=es,eventFilter:r}=s,p=G(o.x),i=G(o.y),y=G(null),u=h=>{t==="page"?(p.value=h.pageX,i.value=h.pageY):t==="client"?(p.value=h.clientX,i.value=h.clientY):t==="movement"&&(p.value=h.movementX,i.value=h.movementY),y.value="mouse"},B=()=>{p.value=o.x,i.value=o.y},d=h=>{if(h.touches.length>0){const _=h.touches[0];t==="page"?(p.value=_.pageX,i.value=_.pageY):t==="client"&&(p.value=_.clientX,i.value=_.clientY),y.value="touch"}},f=h=>r===void 0?u(h):r(()=>u(h),{}),m=h=>r===void 0?d(h):r(()=>d(h),{});return a&&(_e(a,"mousemove",f,{passive:!0}),_e(a,"dragover",f,{passive:!0}),l&&t!=="movement"&&(_e(a,"touchstart",m,{passive:!0}),_e(a,"touchmove",m,{passive:!0}),n&&_e(a,"touchend",B,{passive:!0}))),{x:p,y:i,sourceType:y}}var pt;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(pt||(pt={}));function QF(s,t={}){const l=$y(s),{threshold:n=50,onSwipe:o,onSwipeEnd:a,onSwipeStart:r}=t,p=Ve({x:0,y:0}),i=(N,J)=>{p.x=N,p.y=J},y=Ve({x:0,y:0}),u=(N,J)=>{y.x=N,y.y=J},B=A(()=>p.x-y.x),d=A(()=>p.y-y.y),{max:f,abs:m}=Math,h=A(()=>f(m(B.value),m(d.value))>=n),_=G(!1),x=G(!1),v=A(()=>h.value?m(B.value)>m(d.value)?B.value>0?pt.LEFT:pt.RIGHT:d.value>0?pt.UP:pt.DOWN:pt.NONE),w=N=>{var J,R,X;const ne=N.buttons===0,ye=N.buttons===1;return(X=(R=(J=t.pointerTypes)==null?void 0:J.includes(N.pointerType))!=null?R:ne||ye)!=null?X:!0},k=[_e(s,"pointerdown",N=>{var J,R;if(!w(N))return;x.value=!0,(R=(J=l.value)==null?void 0:J.style)==null||R.setProperty("touch-action","none");const X=N.target;X==null||X.setPointerCapture(N.pointerId);const{clientX:ne,clientY:ye}=N;i(ne,ye),u(ne,ye),r==null||r(N)}),_e(s,"pointermove",N=>{if(!w(N)||!x.value)return;const{clientX:J,clientY:R}=N;u(J,R),!_.value&&h.value&&(_.value=!0),_.value&&(o==null||o(N))}),_e(s,"pointerup",N=>{var J,R;w(N)&&(_.value&&(a==null||a(N,v.value)),x.value=!1,_.value=!1,(R=(J=l.value)==null?void 0:J.style)==null||R.setProperty("touch-action","initial"))})],M=()=>k.forEach(N=>N());return{isSwiping:Ks(_),direction:Ks(v),posStart:Ks(p),posEnd:Ks(y),distanceX:B,distanceY:d,stop:M}}let eh=0;function WD(s,t={}){const l=G(!1),{document:n=Py,immediate:o=!0,manual:a=!1,id:r=`vueuse_styletag_${++eh}`}=t,p=G(s);let i=()=>{};const y=()=>{if(!n)return;const B=n.getElementById(r)||n.createElement("style");B.isConnected||(B.type="text/css",B.id=r,t.media&&(B.media=t.media),n.head.appendChild(B)),!l.value&&(i=ge(p,d=>{B.textContent=d},{immediate:!0}),l.value=!0)},u=()=>{!n||!l.value||(i(),n.head.removeChild(n.getElementById(r)),l.value=!1)};return o&&!a&&cc(y),a||st(u),{id:r,css:p,unload:u,load:y,isLoaded:Ks(l)}}var sh=Object.defineProperty,jp=Object.getOwnPropertySymbols,th=Object.prototype.hasOwnProperty,lh=Object.prototype.propertyIsEnumerable,Up=(s,t,l)=>t in s?sh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,nh=(s,t)=>{for(var l in t||(t={}))th.call(t,l)&&Up(s,l,t[l]);if(jp)for(var l of jp(t))lh.call(t,l)&&Up(s,l,t[l]);return s};function YD(s={}){const{controls:t=!1,offset:l=0,immediate:n=!0,interval:o="requestAnimationFrame",callback:a}=s,r=G(or()+l),p=()=>r.value=or()+l,i=a?()=>{p(),a(r.value)}:p,y=o==="requestAnimationFrame"?YF(i,{immediate:n}):sF(i,o,{immediate:n});return t?nh({timestamp:r},y):r}var oh=Object.defineProperty,Vp=Object.getOwnPropertySymbols,ah=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,zp=(s,t,l)=>t in s?oh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,ch=(s,t)=>{for(var l in t||(t={}))ah.call(t,l)&&zp(s,l,t[l]);if(Vp)for(var l of Vp(t))rh.call(t,l)&&zp(s,l,t[l]);return s};const ph={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ch({linear:jm},ph);function Zs(s,t,l,n={}){var o,a,r;const{clone:p=!1,passive:i=!1,eventName:y,deep:u=!1,defaultValue:B}=n,d=Cs(),f=l||(d==null?void 0:d.emit)||((o=d==null?void 0:d.$emit)==null?void 0:o.bind(d))||((r=(a=d==null?void 0:d.proxy)==null?void 0:a.$emit)==null?void 0:r.bind(d==null?void 0:d.proxy));let m=y;t||(t="modelValue"),m=y||m||`update:${t.toString()}`;const h=x=>p?En(p)?p(x):kF(x):x,_=()=>Im(s[t])?h(s[t]):B;if(i){const x=_(),v=G(x);return ge(()=>s[t],w=>v.value=h(w)),ge(v,w=>{(w!==s[t]||u)&&f(m,w)},{deep:u}),v}else return A({get(){return _()},set(x){f(m,x)}})}function XD({window:s=es}={}){if(!s)return G(!1);const t=G(s.document.hasFocus());return _e(s,"blur",()=>{t.value=!1}),_e(s,"focus",()=>{t.value=!0}),t}function ih(s={}){const{window:t=es,initialWidth:l=1/0,initialHeight:n=1/0,listenOrientation:o=!0,includeScrollbar:a=!0}=s,r=G(l),p=G(n),i=()=>{t&&(a?(r.value=t.innerWidth,p.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,p.value=t.document.documentElement.clientHeight))};return i(),cc(i),_e("resize",i,{passive:!0}),o&&_e("orientationchange",i,{passive:!0}),{width:r,height:p}}function yh(){return Ty().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ty(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const uh=typeof Proxy=="function",Bh="devtools-plugin:setup",dh="plugin:settings:set";let ml,cr;function fh(){var s;return ml!==void 0||(typeof window<"u"&&window.performance?(ml=!0,cr=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?(ml=!0,cr=global.perf_hooks.performance):ml=!1),ml}function mh(){return fh()?cr.now():Date.now()}class Fh{constructor(t,l){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=l;const n={};if(t.settings)for(const r in t.settings){const p=t.settings[r];n[r]=p.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let a=Object.assign({},n);try{const r=localStorage.getItem(o),p=JSON.parse(r);Object.assign(a,p)}catch{}this.fallbacks={getSettings(){return a},setSettings(r){try{localStorage.setItem(o,JSON.stringify(r))}catch{}a=r},now(){return mh()}},l&&l.on(dh,(r,p)=>{r===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(r,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(r,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(y=>{this.targetQueue.push({method:p,args:i,resolve:y})})})}async setRealTarget(t){this.target=t;for(const l of this.onQueue)this.target.on[l.method](...l.args);for(const l of this.targetQueue)l.resolve(await this.target[l.method](...l.args))}}function hh(s,t){const l=s,n=Ty(),o=yh(),a=uh&&l.enableEarlyProxy;if(o&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))o.emit(Bh,s,t);else{const r=a?new Fh(l,o):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:l,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rt=typeof window<"u";function gh(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function _a(s,t){const l={};for(const n in t){const o=t[n];l[n]=Ss(o)?o.map(s):s(o)}return l}const cn=()=>{},Ss=Array.isArray;function $e(s){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+s].concat(t))}const _h=/\/$/,bh=s=>s.replace(_h,"");function ba(s,t,l="/"){let n,o={},a="",r="";const p=t.indexOf("#");let i=t.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(n=t.slice(0,i),a=t.slice(i+1,p>-1?p:t.length),o=s(a)),p>-1&&(n=n||t.slice(0,p),r=t.slice(p,t.length)),n=wh(n??t,l),{fullPath:n+(a&&"?")+a+r,path:n,query:o,hash:r}}function vh(s,t){const l=t.query?s(t.query):"";return t.path+(l&&"?")+l+(t.hash||"")}function Wp(s,t){return!t||!s.toLowerCase().startsWith(t.toLowerCase())?s:s.slice(t.length)||"/"}function Yp(s,t,l){const n=t.matched.length-1,o=l.matched.length-1;return n>-1&&n===o&&Rt(t.matched[n],l.matched[o])&&Iy(t.params,l.params)&&s(t.query)===s(l.query)&&t.hash===l.hash}function Rt(s,t){return(s.aliasOf||s)===(t.aliasOf||t)}function Iy(s,t){if(Object.keys(s).length!==Object.keys(t).length)return!1;for(const l in s)if(!xh(s[l],t[l]))return!1;return!0}function xh(s,t){return Ss(s)?Xp(s,t):Ss(t)?Xp(t,s):s===t}function Xp(s,t){return Ss(t)?s.length===t.length&&s.every((l,n)=>l===t[n]):s.length===1&&s[0]===t}function wh(s,t){if(s.startsWith("/"))return s;if(!t.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${s}" from "${t}". It should look like "/${t}".`),s;if(!s)return t;const l=t.split("/"),n=s.split("/");let o=l.length-1,a,r;for(a=0;a<n.length;a++)if(r=n[a],r!==".")if(r==="..")o>1&&o--;else break;return l.slice(0,o).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var kn;(function(s){s.pop="pop",s.push="push"})(kn||(kn={}));var pn;(function(s){s.back="back",s.forward="forward",s.unknown=""})(pn||(pn={}));function Eh(s){if(!s)if(rt){const t=document.querySelector("base");s=t&&t.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),bh(s)}const kh=/^[^#]+#/;function Dh(s,t){return s.replace(kh,"#")+t}function Sh(s,t){const l=document.documentElement.getBoundingClientRect(),n=s.getBoundingClientRect();return{behavior:t.behavior,left:n.left-l.left-(t.left||0),top:n.top-l.top-(t.top||0)}}const ea=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ch(s){let t;if("el"in s){const l=s.el,n=typeof l=="string"&&l.startsWith("#");if(typeof s.el=="string"&&(!n||!document.getElementById(s.el.slice(1))))try{const a=document.querySelector(s.el);if(n&&a){$e(`The selector "${s.el}" should be passed as "el: document.querySelector('${s.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${s.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof l=="string"?n?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!o){$e(`Couldn't find element using selector "${s.el}" returned by scrollBehavior.`);return}t=Sh(o,s)}else t=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Kp(s,t){return(history.state?history.state.position-t:-1)+s}const pr=new Map;function $h(s,t){pr.set(s,t)}function Ah(s){const t=pr.get(s);return pr.delete(s),t}let Mh=()=>location.protocol+"//"+location.host;function Ry(s,t){const{pathname:l,search:n,hash:o}=t,a=s.indexOf("#");if(a>-1){let p=o.includes(s.slice(a))?s.slice(a).length:1,i=o.slice(p);return i[0]!=="/"&&(i="/"+i),Wp(i,"")}return Wp(l,s)+n+o}function Oh(s,t,l,n){let o=[],a=[],r=null;const p=({state:d})=>{const f=Ry(s,location),m=l.value,h=t.value;let _=0;if(d){if(l.value=f,t.value=d,r&&r===m){r=null;return}_=h?d.position-h.position:0}else n(f);o.forEach(x=>{x(l.value,m,{delta:_,type:kn.pop,direction:_?_>0?pn.forward:pn.back:pn.unknown})})};function i(){r=l.value}function y(d){o.push(d);const f=()=>{const m=o.indexOf(d);m>-1&&o.splice(m,1)};return a.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ie({},d.state,{scroll:ea()}),"")}function B(){for(const d of a)d();a=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:y,destroy:B}}function Zp(s,t,l,n=!1,o=!1){return{back:s,current:t,forward:l,replaced:n,position:window.history.length,scroll:o?ea():null}}function Ph(s){const{history:t,location:l}=window,n={value:Ry(s,l)},o={value:t.state};o.value||a(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(i,y,u){const B=s.indexOf("#"),d=B>-1?(l.host&&document.querySelector("base")?s:s.slice(B))+i:Mh()+s+i;try{t[u?"replaceState":"pushState"](y,"",d),o.value=y}catch(f){$e("Error with push/replace State",f),l[u?"replace":"assign"](d)}}function r(i,y){const u=Ie({},t.state,Zp(o.value.back,i,o.value.forward,!0),y,{position:o.value.position});a(i,u,!0),n.value=i}function p(i,y){const u=Ie({},o.value,t.state,{forward:i,scroll:ea()});t.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(u.current,u,!0);const B=Ie({},Zp(n.value,i,null),{position:u.position+1},y);a(i,B,!1),n.value=i}return{location:n,state:o,push:p,replace:r}}function Th(s){s=Eh(s);const t=Ph(s),l=Oh(s,t.state,t.location,t.replace);function n(a,r=!0){r||l.pauseListeners(),history.go(a)}const o=Ie({location:"",base:s,go:n,createHref:Dh.bind(null,s)},t,l);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ih(s){return typeof s=="string"||s&&typeof s=="object"}function Ly(s){return typeof s=="string"||typeof s=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ny=Symbol("navigation failure");var Gp;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Gp||(Gp={}));const Rh={[1]({location:s,currentLocation:t}){return`No match for
 ${JSON.stringify(s)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:s,to:t}){return`Redirected from "${s.fullPath}" to "${Nh(t)}" via a navigation guard.`},[4]({from:s,to:t}){return`Navigation aborted from "${s.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:s,to:t}){return`Navigation cancelled from "${s.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:s,to:t}){return`Avoided redundant navigation to current location: "${s.fullPath}".`}};function Tl(s,t){return Ie(new Error(Rh[s](t)),{type:s,[Ny]:!0},t)}function tt(s,t){return s instanceof Error&&Ny in s&&(t==null||!!(s.type&t))}const Lh=["params","query","hash"];function Nh(s){if(typeof s=="string")return s;if("path"in s)return s.path;const t={};for(const l of Lh)l in s&&(t[l]=s[l]);return JSON.stringify(t,null,2)}const Jp="[^/]+?",Hh={sensitive:!1,strict:!1,start:!0,end:!0},qh=/[.+*?^${}()[\]/\\]/g;function jh(s,t){const l=Ie({},Hh,t),n=[];let o=l.start?"^":"";const a=[];for(const y of s){const u=y.length?[]:[90];l.strict&&!y.length&&(o+="/");for(let B=0;B<y.length;B++){const d=y[B];let f=40+(l.sensitive?.25:0);if(d.type===0)B||(o+="/"),o+=d.value.replace(qh,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:h,optional:_,regexp:x}=d;a.push({name:m,repeatable:h,optional:_});const v=x||Jp;if(v!==Jp){f+=10;try{new RegExp(`(${v})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+k.message)}}let w=h?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;B||(w=_&&y.length<2?`(?:/${w})`:"/"+w),_&&(w+="?"),o+=w,f+=20,_&&(f+=-8),h&&(f+=-20),v===".*"&&(f+=-50)}u.push(f)}n.push(u)}if(l.strict&&l.end){const y=n.length-1;n[y][n[y].length-1]+=.7000000000000001}l.strict||(o+="/?"),l.end?o+="$":l.strict&&(o+="(?:/|$)");const r=new RegExp(o,l.sensitive?"":"i");function p(y){const u=y.match(r),B={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=a[d-1];B[m.name]=f&&m.repeatable?f.split("/"):f}return B}function i(y){let u="",B=!1;for(const d of s){(!B||!u.endsWith("/"))&&(u+="/"),B=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:h,optional:_}=f,x=m in y?y[m]:"";if(Ss(x)&&!h)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=Ss(x)?x.join("/"):x;if(!v)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):B=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:r,score:n,keys:a,parse:p,stringify:i}}function Uh(s,t){let l=0;for(;l<s.length&&l<t.length;){const n=t[l]-s[l];if(n)return n;l++}return s.length<t.length?s.length===1&&s[0]===40+40?-1:1:s.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vh(s,t){let l=0;const n=s.score,o=t.score;for(;l<n.length&&l<o.length;){const a=Uh(n[l],o[l]);if(a)return a;l++}if(Math.abs(o.length-n.length)===1){if(Qp(n))return 1;if(Qp(o))return-1}return o.length-n.length}function Qp(s){const t=s[s.length-1];return s.length>0&&t[t.length-1]<0}const zh={type:0,value:""},Wh=/[a-zA-Z0-9_]/;function Yh(s){if(!s)return[[]];if(s==="/")return[[zh]];if(!s.startsWith("/"))throw new Error(`Route paths should start with a "/": "${s}" should be "/${s}".`);function t(f){throw new Error(`ERR (${l})/"${y}": ${f}`)}let l=0,n=l;const o=[];let a;function r(){a&&o.push(a),a=[]}let p=0,i,y="",u="";function B(){y&&(l===0?a.push({type:0,value:y}):l===1||l===2||l===3?(a.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),y="")}function d(){y+=i}for(;p<s.length;){if(i=s[p++],i==="\\"&&l!==2){n=l,l=4;continue}switch(l){case 0:i==="/"?(y&&B(),r()):i===":"?(B(),l=1):d();break;case 4:d(),l=n;break;case 1:i==="("?l=2:Wh.test(i)?d():(B(),l=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:l=3:u+=i;break;case 3:B(),l=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,u="";break;default:t("Unknown state");break}}return l===2&&t(`Unfinished custom RegExp for param "${y}"`),B(),r(),o}function Xh(s,t,l){const n=jh(Yh(s.path),l);{const a=new Set;for(const r of n.keys)a.has(r.name)&&$e(`Found duplicated params with name "${r.name}" for path "${s.path}". Only the last one will be available on "$route.params".`),a.add(r.name)}const o=Ie(n,{record:s,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Kh(s,t){const l=[],n=new Map;t=ti({strict:!1,end:!0,sensitive:!1},t);function o(u){return n.get(u)}function a(u,B,d){const f=!d,m=Zh(u);e0(m,B),m.aliasOf=d&&d.record;const h=ti(t,u),_=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of w)_.push(Ie({},m,{components:d?d.record.components:m.components,path:k,aliasOf:d?d.record:m}))}let x,v;for(const w of _){const{path:k}=w;if(B&&k[0]!=="/"){const M=B.record.path,N=M[M.length-1]==="/"?"":"/";w.path=B.record.path+(k&&N+k)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=Xh(w,B,h),B&&k[0]==="/"&&s0(x,B),d?(d.alias.push(x),Qh(d,x)):(v=v||x,v!==x&&v.alias.push(x),f&&u.name&&!si(x)&&r(u.name)),m.children){const M=m.children;for(let N=0;N<M.length;N++)a(M[N],x,d&&d.children[N])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&i(x)}return v?()=>{r(v)}:cn}function r(u){if(Ly(u)){const B=n.get(u);B&&(n.delete(u),l.splice(l.indexOf(B),1),B.children.forEach(r),B.alias.forEach(r))}else{const B=l.indexOf(u);B>-1&&(l.splice(B,1),u.record.name&&n.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function p(){return l}function i(u){let B=0;for(;B<l.length&&Vh(u,l[B])>=0&&(u.record.path!==l[B].record.path||!Hy(u,l[B]));)B++;l.splice(B,0,u),u.record.name&&!si(u)&&n.set(u.record.name,u)}function y(u,B){let d,f={},m,h;if("name"in u&&u.name){if(d=n.get(u.name),!d)throw Tl(1,{location:u});{const v=Object.keys(u.params||{}).filter(w=>!d.keys.find(k=>k.name===w));v.length&&$e(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}h=d.record.name,f=Ie(ei(B.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&ei(u.params,d.keys.map(v=>v.name))),m=d.stringify(f)}else if("path"in u)m=u.path,m.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=l.find(v=>v.re.test(m)),d&&(f=d.parse(m),h=d.record.name);else{if(d=B.name?n.get(B.name):l.find(v=>v.re.test(B.path)),!d)throw Tl(1,{location:u,currentLocation:B});h=d.record.name,f=Ie({},B.params,u.params),m=d.stringify(f)}const _=[];let x=d;for(;x;)_.unshift(x.record),x=x.parent;return{name:h,path:m,params:f,matched:_,meta:Jh(_)}}return s.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:r,getRoutes:p,getRecordMatcher:o}}function ei(s,t){const l={};for(const n of t)n in s&&(l[n]=s[n]);return l}function Zh(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:Gh(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function Gh(s){const t={},l=s.props||!1;if("component"in s)t.default=l;else for(const n in s.components)t[n]=typeof l=="boolean"?l:l[n];return t}function si(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function Jh(s){return s.reduce((t,l)=>Ie(t,l.meta),{})}function ti(s,t){const l={};for(const n in s)l[n]=n in t?t[n]:s[n];return l}function ir(s,t){return s.name===t.name&&s.optional===t.optional&&s.repeatable===t.repeatable}function Qh(s,t){for(const l of s.keys)if(!l.optional&&!t.keys.find(ir.bind(null,l)))return $e(`Alias "${t.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${l.name}"`);for(const l of t.keys)if(!l.optional&&!s.keys.find(ir.bind(null,l)))return $e(`Alias "${t.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${l.name}"`)}function e0(s,t){t&&t.record.name&&!s.name&&!s.path&&$e(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function s0(s,t){for(const l of t.keys)if(!s.keys.find(ir.bind(null,l)))return $e(`Absolute path "${s.record.path}" must have the exact same param named "${l.name}" as its parent "${t.record.path}".`)}function Hy(s,t){return t.children.some(l=>l===s||Hy(s,l))}const qy=/#/g,t0=/&/g,l0=/\//g,n0=/=/g,o0=/\?/g,jy=/\+/g,a0=/%5B/g,r0=/%5D/g,Uy=/%5E/g,c0=/%60/g,Vy=/%7B/g,p0=/%7C/g,zy=/%7D/g,i0=/%20/g;function pc(s){return encodeURI(""+s).replace(p0,"|").replace(a0,"[").replace(r0,"]")}function y0(s){return pc(s).replace(Vy,"{").replace(zy,"}").replace(Uy,"^")}function yr(s){return pc(s).replace(jy,"%2B").replace(i0,"+").replace(qy,"%23").replace(t0,"%26").replace(c0,"`").replace(Vy,"{").replace(zy,"}").replace(Uy,"^")}function u0(s){return yr(s).replace(n0,"%3D")}function B0(s){return pc(s).replace(qy,"%23").replace(o0,"%3F")}function d0(s){return s==null?"":B0(s).replace(l0,"%2F")}function Dn(s){try{return decodeURIComponent(""+s)}catch{$e(`Error decoding "${s}". Using original value`)}return""+s}function f0(s){const t={};if(s===""||s==="?")return t;const n=(s[0]==="?"?s.slice(1):s).split("&");for(let o=0;o<n.length;++o){const a=n[o].replace(jy," "),r=a.indexOf("="),p=Dn(r<0?a:a.slice(0,r)),i=r<0?null:Dn(a.slice(r+1));if(p in t){let y=t[p];Ss(y)||(y=t[p]=[y]),y.push(i)}else t[p]=i}return t}function li(s){let t="";for(let l in s){const n=s[l];if(l=u0(l),n==null){n!==void 0&&(t+=(t.length?"&":"")+l);continue}(Ss(n)?n.map(a=>a&&yr(a)):[n&&yr(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+l,a!=null&&(t+="="+a))})}return t}function m0(s){const t={};for(const l in s){const n=s[l];n!==void 0&&(t[l]=Ss(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const F0=Symbol("router view location matched"),ni=Symbol("router view depth"),ic=Symbol("router"),Wy=Symbol("route location"),ur=Symbol("router view location");function Wl(){let s=[];function t(n){return s.push(n),()=>{const o=s.indexOf(n);o>-1&&s.splice(o,1)}}function l(){s=[]}return{add:t,list:()=>s,reset:l}}function vt(s,t,l,n,o){const a=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((r,p)=>{const i=B=>{B===!1?p(Tl(4,{from:l,to:t})):B instanceof Error?p(B):Ih(B)?p(Tl(2,{from:t,to:B})):(a&&n.enterCallbacks[o]===a&&typeof B=="function"&&a.push(B),r())},y=s.call(n&&n.instances[o],t,l,h0(i,t,l));let u=Promise.resolve(y);if(s.length<3&&(u=u.then(i)),s.length>2){const B=`The "next" callback was never called inside of ${s.name?'"'+s.name+'"':""}:
${s.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof y=="object"&&"then"in y)u=u.then(d=>i._called?d:($e(B),Promise.reject(new Error("Invalid navigation guard"))));else if(y!==void 0&&!i._called){$e(B),p(new Error("Invalid navigation guard"));return}}u.catch(B=>p(B))})}function h0(s,t,l){let n=0;return function(){n++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${l.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),s._called=!0,n===1&&s.apply(null,arguments)}}function va(s,t,l,n){const o=[];for(const a of s){!a.components&&!a.children.length&&$e(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const r in a.components){let p=a.components[r];{if(!p||typeof p!="object"&&typeof p!="function")throw $e(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){$e(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,$e(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!a.instances[r]))if(g0(p)){const y=(p.__vccOpts||p)[t];y&&o.push(vt(y,l,n,a,r))}else{let i=p();"catch"in i||($e(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),o.push(()=>i.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));const u=gh(y)?y.default:y;a.components[r]=u;const d=(u.__vccOpts||u)[t];return d&&vt(d,l,n,a,r)()}))}}}return o}function g0(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function oi(s){const t=C(ic),l=C(Wy),n=A(()=>t.resolve(E(s.to))),o=A(()=>{const{matched:i}=n.value,{length:y}=i,u=i[y-1],B=l.matched;if(!u||!B.length)return-1;const d=B.findIndex(Rt.bind(null,u));if(d>-1)return d;const f=ai(i[y-2]);return y>1&&ai(u)===f&&B[B.length-1].path!==f?B.findIndex(Rt.bind(null,i[y-2])):d}),a=A(()=>o.value>-1&&x0(l.params,n.value.params)),r=A(()=>o.value>-1&&o.value===l.matched.length-1&&Iy(l.params,n.value.params));function p(i={}){return v0(i)?t[E(s.replace)?"replace":"push"](E(s.to)).catch(cn):Promise.resolve()}if(rt){const i=Cs();if(i){const y={route:n.value,isActive:a.value,isExactActive:r.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(y),yl(()=>{y.route=n.value,y.isActive=a.value,y.isExactActive=r.value},{flush:"post"})}}return{route:n,href:A(()=>n.value.href),isActive:a,isExactActive:r,navigate:p}}const _0=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oi,setup(s,{slots:t}){const l=Ve(oi(s)),{options:n}=C(ic),o=A(()=>({[ri(s.activeClass,n.linkActiveClass,"router-link-active")]:l.isActive,[ri(s.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const a=t.default&&t.default(l);return s.custom?a:ks("a",{"aria-current":l.isExactActive?s.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:o.value},a)}}}),b0=_0;function v0(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const t=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return s.preventDefault&&s.preventDefault(),!0}}function x0(s,t){for(const l in t){const n=t[l],o=s[l];if(typeof n=="string"){if(n!==o)return!1}else if(!Ss(o)||o.length!==n.length||n.some((a,r)=>a!==o[r]))return!1}return!0}function ai(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const ri=(s,t,l)=>s??t??l,w0=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:t,slots:l}){k0();const n=C(ur),o=A(()=>s.route||n.value),a=C(ni,0),r=A(()=>{let y=E(a);const{matched:u}=o.value;let B;for(;(B=u[y])&&!B.components;)y++;return y}),p=A(()=>o.value.matched[r.value]);ws(ni,A(()=>r.value+1)),ws(F0,p),ws(ur,o);const i=G();return ge(()=>[i.value,p.value,s.name],([y,u,B],[d,f,m])=>{u&&(u.instances[B]=y,f&&f!==u&&y&&y===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),y&&u&&(!f||!Rt(u,f)||!d)&&(u.enterCallbacks[B]||[]).forEach(h=>h(y))},{flush:"post"}),()=>{const y=o.value,u=s.name,B=p.value,d=B&&B.components[u];if(!d)return ci(l.default,{Component:d,route:y});const f=B.props[u],m=f?f===!0?y.params:typeof f=="function"?f(y):f:null,_=ks(d,Ie({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(B.instances[u]=null)},ref:i}));if(rt&&_.ref){const x={depth:r.value,name:B.name,path:B.path,meta:B.meta};(Ss(_.ref)?_.ref.map(w=>w.i):[_.ref.i]).forEach(w=>{w.__vrv_devtools=x})}return ci(l.default,{Component:_,route:y})||_}}});function ci(s,t){if(!s)return null;const l=s(t);return l.length===1?l[0]:l}const E0=w0;function k0(){const s=Cs(),t=s.parent&&s.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const l=t==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${l}>
    <component :is="Component" />
  </${l}>
</router-view>`)}}function Yl(s,t){const l=Ie({},s,{matched:s.matched.map(n=>T0(n,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:s.fullPath,tooltip:t,value:l}}}function lo(s){return{_custom:{display:s}}}let D0=0;function S0(s,t,l){if(t.__hasDevtools)return;t.__hasDevtools=!0;const n=D0++;hh({id:"org.vuejs.router"+(n?"."+n:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:s},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((u,B)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Yl(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:u,componentInstance:B})=>{if(B.__vrv_devtools){const d=B.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Yy})}Ss(B.__vrl_devtools)&&(B.__devtoolsApi=o,B.__vrl_devtools.forEach(d=>{let f=Zy,m="";d.isExactActive?(f=Ky,m="This is exactly active"):d.isActive&&(f=Xy,m="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:m,backgroundColor:f})}))}),ge(t.currentRoute,()=>{i(),o.notifyComponentUpdate(),o.sendInspectorTree(p),o.sendInspectorState(p)});const a="router:navigations:"+n;o.addTimelineLayer({id:a,label:`Router${n?" "+n:""} Navigations`,color:4237508}),t.onError((u,B)=>{o.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:B.fullPath,logType:"error",time:o.now(),data:{error:u},groupId:B.meta.__navigationId}})});let r=0;t.beforeEach((u,B)=>{const d={guard:lo("beforeEach"),from:Yl(B,"Current Location during this navigation"),to:Yl(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:r++}),o.addTimelineEvent({layerId:a,event:{time:o.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),t.afterEach((u,B,d)=>{const f={guard:lo("afterEach")};d?(f.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},f.status=lo("❌")):f.status=lo("✅"),f.from=Yl(B,"Current Location during this navigation"),f.to=Yl(u,"Target location"),o.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:u.fullPath,time:o.now(),data:f,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const p="router-inspector:"+n;o.addInspector({id:p,label:"Routes"+(n?" "+n:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!y)return;const u=y;let B=l.getRoutes().filter(d=>!d.parent);B.forEach(Qy),u.filter&&(B=B.filter(d=>Br(d,u.filter.toLowerCase()))),B.forEach(d=>Jy(d,t.currentRoute.value)),u.rootNodes=B.map(Gy)}let y;o.on.getInspectorTree(u=>{y=u,u.app===s&&u.inspectorId===p&&i()}),o.on.getInspectorState(u=>{if(u.app===s&&u.inspectorId===p){const d=l.getRoutes().find(f=>f.record.__vd_id===u.nodeId);d&&(u.state={options:$0(d)})}}),o.sendInspectorTree(p),o.sendInspectorState(p)})}function C0(s){return s.optional?s.repeatable?"*":"?":s.repeatable?"+":""}function $0(s){const{record:t}=s,l=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&l.push({editable:!1,key:"name",value:t.name}),l.push({editable:!1,key:"regexp",value:s.re}),s.keys.length&&l.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:s.keys.map(n=>`${n.name}${C0(n)}`).join(" "),tooltip:"Param keys",value:s.keys}}}),t.redirect!=null&&l.push({editable:!1,key:"redirect",value:t.redirect}),s.alias.length&&l.push({editable:!1,key:"aliases",value:s.alias.map(n=>n.record.path)}),Object.keys(s.record.meta).length&&l.push({editable:!1,key:"meta",value:s.record.meta}),l.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:s.score.map(n=>n.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:s.score}}}),l}const Yy=15485081,Xy=2450411,Ky=8702998,A0=2282478,Zy=16486972,M0=6710886;function Gy(s){const t=[],{record:l}=s;l.name!=null&&t.push({label:String(l.name),textColor:0,backgroundColor:A0}),l.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Zy}),s.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Yy}),s.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Ky}),s.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Xy}),l.redirect&&t.push({label:typeof l.redirect=="string"?`redirect: ${l.redirect}`:"redirects",textColor:16777215,backgroundColor:M0});let n=l.__vd_id;return n==null&&(n=String(O0++),l.__vd_id=n),{id:n,label:l.path,tags:t,children:s.children.map(Gy)}}let O0=0;const P0=/^\/(.*)\/([a-z]*)$/;function Jy(s,t){const l=t.matched.length&&Rt(t.matched[t.matched.length-1],s.record);s.__vd_exactActive=s.__vd_active=l,l||(s.__vd_active=t.matched.some(n=>Rt(n,s.record))),s.children.forEach(n=>Jy(n,t))}function Qy(s){s.__vd_match=!1,s.children.forEach(Qy)}function Br(s,t){const l=String(s.re).match(P0);if(s.__vd_match=!1,!l||l.length<3)return!1;if(new RegExp(l[1].replace(/\$$/,""),l[2]).test(t))return s.children.forEach(r=>Br(r,t)),s.record.path!=="/"||t==="/"?(s.__vd_match=s.re.test(t),!0):!1;const o=s.record.path.toLowerCase(),a=Dn(o);return!t.startsWith("/")&&(a.includes(t)||o.includes(t))||a.startsWith(t)||o.startsWith(t)||s.record.name&&String(s.record.name).includes(t)?!0:s.children.some(r=>Br(r,t))}function T0(s,t){const l={};for(const n in s)t.includes(n)||(l[n]=s[n]);return l}function I0(s){const t=Kh(s.routes,s),l=s.parseQuery||f0,n=s.stringifyQuery||li,o=s.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=Wl(),r=Wl(),p=Wl(),i=Qs(ht);let y=ht;rt&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_a.bind(null,$=>""+$),B=_a.bind(null,d0),d=_a.bind(null,Dn);function f($,le){let W,oe;return Ly($)?(W=t.getRecordMatcher($),oe=le):oe=$,t.addRoute(oe,W)}function m($){const le=t.getRecordMatcher($);le?t.removeRoute(le):$e(`Cannot remove non-existent route "${String($)}"`)}function h(){return t.getRoutes().map($=>$.record)}function _($){return!!t.getRecordMatcher($)}function x($,le){if(le=Ie({},le||i.value),typeof $=="string"){const ue=ba(l,$,le.path),F=t.resolve({path:ue.path},le),g=o.createHref(ue.fullPath);return g.startsWith("//")?$e(`Location "${$}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):F.matched.length||$e(`No match found for location with path "${$}"`),Ie(ue,F,{params:d(F.params),hash:Dn(ue.hash),redirectedFrom:void 0,href:g})}let W;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&$e(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),W=Ie({},$,{path:ba(l,$.path,le.path).path});else{const ue=Ie({},$.params);for(const F in ue)ue[F]==null&&delete ue[F];W=Ie({},$,{params:B($.params)}),le.params=B(le.params)}const oe=t.resolve(W,le),we=$.hash||"";we&&!we.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${we}" with "#${we}".`),oe.params=u(d(oe.params));const Se=vh(n,Ie({},$,{hash:y0(we),path:oe.path})),fe=o.createHref(Se);return fe.startsWith("//")?$e(`Location "${$}" resolved to "${fe}". A resolved location cannot start with multiple slashes.`):oe.matched.length||$e(`No match found for location with path "${"path"in $?$.path:$}"`),Ie({fullPath:Se,hash:we,query:n===li?m0($.query):$.query||{}},oe,{redirectedFrom:void 0,href:fe})}function v($){return typeof $=="string"?ba(l,$,i.value.path):Ie({},$)}function w($,le){if(y!==$)return Tl(8,{from:le,to:$})}function k($){return J($)}function M($){return k(Ie(v($),{replace:!0}))}function N($){const le=$.matched[$.matched.length-1];if(le&&le.redirect){const{redirect:W}=le;let oe=typeof W=="function"?W($):W;if(typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=v(oe):{path:oe},oe.params={}),!("path"in oe)&&!("name"in oe))throw $e(`Invalid redirect found:
${JSON.stringify(oe,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:$.query,hash:$.hash,params:"path"in oe?{}:$.params},oe)}}function J($,le){const W=y=x($),oe=i.value,we=$.state,Se=$.force,fe=$.replace===!0,ue=N(W);if(ue)return J(Ie(v(ue),{state:typeof ue=="object"?Ie({},we,ue.state):we,force:Se,replace:fe}),le||W);const F=W;F.redirectedFrom=le;let g;return!Se&&Yp(n,oe,W)&&(g=Tl(16,{to:F,from:oe}),Le(oe,oe,!0,!1)),(g?Promise.resolve(g):X(F,oe)).catch(D=>tt(D)?tt(D,2)?D:ve(D):se(D,F,oe)).then(D=>{if(D){if(tt(D,2))return Yp(n,x(D.to),F)&&le&&(le._count=le._count?le._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${oe.fullPath}" to "${F.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):J(Ie({replace:fe},v(D.to),{state:typeof D.to=="object"?Ie({},we,D.to.state):we,force:Se}),le||F)}else D=ye(F,oe,!0,fe,we);return ne(F,oe,D),D})}function R($,le){const W=w($,le);return W?Promise.reject(W):Promise.resolve()}function X($,le){let W;const[oe,we,Se]=R0($,le);W=va(oe.reverse(),"beforeRouteLeave",$,le);for(const ue of oe)ue.leaveGuards.forEach(F=>{W.push(vt(F,$,le))});const fe=R.bind(null,$,le);return W.push(fe),Fl(W).then(()=>{W=[];for(const ue of a.list())W.push(vt(ue,$,le));return W.push(fe),Fl(W)}).then(()=>{W=va(we,"beforeRouteUpdate",$,le);for(const ue of we)ue.updateGuards.forEach(F=>{W.push(vt(F,$,le))});return W.push(fe),Fl(W)}).then(()=>{W=[];for(const ue of $.matched)if(ue.beforeEnter&&!le.matched.includes(ue))if(Ss(ue.beforeEnter))for(const F of ue.beforeEnter)W.push(vt(F,$,le));else W.push(vt(ue.beforeEnter,$,le));return W.push(fe),Fl(W)}).then(()=>($.matched.forEach(ue=>ue.enterCallbacks={}),W=va(Se,"beforeRouteEnter",$,le),W.push(fe),Fl(W))).then(()=>{W=[];for(const ue of r.list())W.push(vt(ue,$,le));return W.push(fe),Fl(W)}).catch(ue=>tt(ue,8)?ue:Promise.reject(ue))}function ne($,le,W){for(const oe of p.list())oe($,le,W)}function ye($,le,W,oe,we){const Se=w($,le);if(Se)return Se;const fe=le===ht,ue=rt?history.state:{};W&&(oe||fe?o.replace($.fullPath,Ie({scroll:fe&&ue&&ue.scroll},we)):o.push($.fullPath,we)),i.value=$,Le($,le,W,fe),ve()}let Q;function xe(){Q||(Q=o.listen(($,le,W)=>{if(!ft.listening)return;const oe=x($),we=N(oe);if(we){J(Ie(we,{replace:!0}),oe).catch(cn);return}y=oe;const Se=i.value;rt&&$h(Kp(Se.fullPath,W.delta),ea()),X(oe,Se).catch(fe=>tt(fe,12)?fe:tt(fe,2)?(J(fe.to,oe).then(ue=>{tt(ue,20)&&!W.delta&&W.type===kn.pop&&o.go(-1,!1)}).catch(cn),Promise.reject()):(W.delta&&o.go(-W.delta,!1),se(fe,oe,Se))).then(fe=>{fe=fe||ye(oe,Se,!1),fe&&(W.delta&&!tt(fe,8)?o.go(-W.delta,!1):W.type===kn.pop&&tt(fe,20)&&o.go(-1,!1)),ne(oe,Se,fe)}).catch(cn)}))}let Pe=Wl(),Ce=Wl(),qe;function se($,le,W){ve($);const oe=Ce.list();return oe.length?oe.forEach(we=>we($,le,W)):($e("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ie(){return qe&&i.value!==ht?Promise.resolve():new Promise(($,le)=>{Pe.add([$,le])})}function ve($){return qe||(qe=!$,xe(),Pe.list().forEach(([le,W])=>$?W($):le()),Pe.reset()),$}function Le($,le,W,oe){const{scrollBehavior:we}=s;if(!rt||!we)return Promise.resolve();const Se=!W&&Ah(Kp($.fullPath,0))||(oe||!W)&&history.state&&history.state.scroll||null;return ts().then(()=>we($,le,Se)).then(fe=>fe&&Ch(fe)).catch(fe=>se(fe,$,le))}const _s=$=>o.go($);let ls;const ds=new Set,ft={currentRoute:i,listening:!0,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:h,resolve:x,options:s,push:k,replace:M,go:_s,back:()=>_s(-1),forward:()=>_s(1),beforeEach:a.add,beforeResolve:r.add,afterEach:p.add,onError:Ce.add,isReady:ie,install($){const le=this;$.component("RouterLink",b0),$.component("RouterView",E0),$.config.globalProperties.$router=le,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>E(i)}),rt&&!ls&&i.value===ht&&(ls=!0,k(o.location).catch(we=>{$e("Unexpected error when starting the router:",we)}));const W={};for(const we in ht)W[we]=A(()=>i.value[we]);$.provide(ic,le),$.provide(Wy,Ve(W)),$.provide(ur,i);const oe=$.unmount;ds.add($),$.unmount=function(){ds.delete($),ds.size<1&&(y=ht,Q&&Q(),Q=null,i.value=ht,ls=!1,qe=!1),oe()},rt&&S0($,le,t)}};return ft}function Fl(s){return s.reduce((t,l)=>t.then(()=>l()),Promise.resolve())}function R0(s,t){const l=[],n=[],o=[],a=Math.max(t.matched.length,s.matched.length);for(let r=0;r<a;r++){const p=t.matched[r];p&&(s.matched.find(y=>Rt(y,p))?n.push(p):l.push(p));const i=s.matched[r];i&&(t.matched.find(y=>Rt(y,i))||o.push(i))}return[l,n,o]}const xa=G(!1),yn=G(!1),wl=G(!1),L0=G(!0),dr=wF({xs:460,...gF}),al=ih(),eu=JF(),N0=A(()=>al.height.value-al.width.value/Ct>180),su=KF(Us?document.body:null),$l=hF(),H0=A(()=>{var s,t;return["INPUT","TEXTAREA"].includes(((s=$l.value)==null?void 0:s.tagName)||"")||((t=$l.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),q0=A(()=>{var s;return["BUTTON","A"].includes(((s=$l.value)==null?void 0:s.tagName)||"")});Vs("slidev-camera","default");Vs("slidev-mic","default");const uo=Vs("slidev-scale",0),is=Vs("slidev-show-overview",!1),wa=Vs("slidev-presenter-cursor",!0),pi=Vs("slidev-show-editor",!1);Vs("slidev-editor-width",Us?window.innerWidth*.4:100);const tu=Ay(is);function ii(s,t,l,n=o=>o){return s*n(.5-t*(.5-l))}function j0(s){return[-s[0],-s[1]]}function Ns(s,t){return[s[0]+t[0],s[1]+t[1]]}function Ms(s,t){return[s[0]-t[0],s[1]-t[1]]}function Ls(s,t){return[s[0]*t,s[1]*t]}function U0(s,t){return[s[0]/t,s[1]/t]}function Xl(s){return[s[1],-s[0]]}function yi(s,t){return s[0]*t[0]+s[1]*t[1]}function V0(s,t){return s[0]===t[0]&&s[1]===t[1]}function z0(s){return Math.hypot(s[0],s[1])}function W0(s){return s[0]*s[0]+s[1]*s[1]}function ui(s,t){return W0(Ms(s,t))}function lu(s){return U0(s,z0(s))}function Y0(s,t){return Math.hypot(s[1]-t[1],s[0]-t[0])}function Kl(s,t,l){let n=Math.sin(l),o=Math.cos(l),a=s[0]-t[0],r=s[1]-t[1],p=a*o-r*n,i=a*n+r*o;return[p+t[0],i+t[1]]}function fr(s,t,l){return Ns(s,Ls(Ms(t,s),l))}function Bi(s,t,l){return Ns(s,Ls(t,l))}var{min:hl,PI:X0}=Math,di=.275,Zl=X0+1e-4;function K0(s,t={}){let{size:l=16,smoothing:n=.5,thinning:o=.5,simulatePressure:a=!0,easing:r=se=>se,start:p={},end:i={},last:y=!1}=t,{cap:u=!0,easing:B=se=>se*(2-se)}=p,{cap:d=!0,easing:f=se=>--se*se*se+1}=i;if(s.length===0||l<=0)return[];let m=s[s.length-1].runningLength,h=p.taper===!1?0:p.taper===!0?Math.max(l,m):p.taper,_=i.taper===!1?0:i.taper===!0?Math.max(l,m):i.taper,x=Math.pow(l*n,2),v=[],w=[],k=s.slice(0,10).reduce((se,ie)=>{let ve=ie.pressure;if(a){let Le=hl(1,ie.distance/l),_s=hl(1,1-Le);ve=hl(1,se+(_s-se)*(Le*di))}return(se+ve)/2},s[0].pressure),M=ii(l,o,s[s.length-1].pressure,r),N,J=s[0].vector,R=s[0].point,X=R,ne=R,ye=X,Q=!1;for(let se=0;se<s.length;se++){let{pressure:ie}=s[se],{point:ve,vector:Le,distance:_s,runningLength:ls}=s[se];if(se<s.length-1&&m-ls<3)continue;if(o){if(a){let Se=hl(1,_s/l),fe=hl(1,1-Se);ie=hl(1,k+(fe-k)*(Se*di))}M=ii(l,o,ie,r)}else M=l/2;N===void 0&&(N=M);let ds=ls<h?B(ls/h):1,ft=m-ls<_?f((m-ls)/_):1;M=Math.max(.01,M*Math.min(ds,ft));let $=(se<s.length-1?s[se+1]:s[se]).vector,le=se<s.length-1?yi(Le,$):1,W=yi(Le,J)<0&&!Q,oe=le!==null&&le<0;if(W||oe){let Se=Ls(Xl(J),M);for(let fe=1/13,ue=0;ue<=1;ue+=fe)ne=Kl(Ms(ve,Se),ve,Zl*ue),v.push(ne),ye=Kl(Ns(ve,Se),ve,Zl*-ue),w.push(ye);R=ne,X=ye,oe&&(Q=!0);continue}if(Q=!1,se===s.length-1){let Se=Ls(Xl(Le),M);v.push(Ms(ve,Se)),w.push(Ns(ve,Se));continue}let we=Ls(Xl(fr($,Le,le)),M);ne=Ms(ve,we),(se<=1||ui(R,ne)>x)&&(v.push(ne),R=ne),ye=Ns(ve,we),(se<=1||ui(X,ye)>x)&&(w.push(ye),X=ye),k=ie,J=Le}let xe=s[0].point.slice(0,2),Pe=s.length>1?s[s.length-1].point.slice(0,2):Ns(s[0].point,[1,1]),Ce=[],qe=[];if(s.length===1){if(!(h||_)||y){let se=Bi(xe,lu(Xl(Ms(xe,Pe))),-(N||M)),ie=[];for(let ve=1/13,Le=ve;Le<=1;Le+=ve)ie.push(Kl(se,xe,Zl*2*Le));return ie}}else{if(!(h||_&&s.length===1))if(u)for(let ie=1/13,ve=ie;ve<=1;ve+=ie){let Le=Kl(w[0],xe,Zl*ve);Ce.push(Le)}else{let ie=Ms(v[0],w[0]),ve=Ls(ie,.5),Le=Ls(ie,.51);Ce.push(Ms(xe,ve),Ms(xe,Le),Ns(xe,Le),Ns(xe,ve))}let se=Xl(j0(s[s.length-1].vector));if(_||h&&s.length===1)qe.push(Pe);else if(d){let ie=Bi(Pe,se,M);for(let ve=1/29,Le=ve;Le<1;Le+=ve)qe.push(Kl(ie,Pe,Zl*3*Le))}else qe.push(Ns(Pe,Ls(se,M)),Ns(Pe,Ls(se,M*.99)),Ms(Pe,Ls(se,M*.99)),Ms(Pe,Ls(se,M)))}return v.concat(qe,w.reverse(),Ce)}function Z0(s,t={}){var l;let{streamline:n=.5,size:o=16,last:a=!1}=t;if(s.length===0)return[];let r=.15+(1-n)*.85,p=Array.isArray(s[0])?s:s.map(({x:f,y:m,pressure:h=.5})=>[f,m,h]);if(p.length===2){let f=p[1];p=p.slice(0,-1);for(let m=1;m<5;m++)p.push(fr(p[0],f,m/4))}p.length===1&&(p=[...p,[...Ns(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,B=i[0],d=p.length-1;for(let f=1;f<p.length;f++){let m=a&&f===d?p[f].slice(0,2):fr(B.point,p[f],r);if(V0(B.point,m))continue;let h=Y0(m,B.point);if(u+=h,f<d&&!y){if(u<o)continue;y=!0}B={point:m,pressure:p[f][2]>=0?p[f][2]:.5,vector:lu(Ms(B.point,m)),distance:h,runningLength:u},i.push(B)}return i[0].vector=((l=i[1])==null?void 0:l.vector)||[0,0],i}function G0(s,t={}){return K0(Z0(s,t),t)}var J0=()=>({events:{},emit(s,...t){let l=this.events[s]||[];for(let n=0,o=l.length;n<o;n++)l[n](...t)},on(s,t){var l;return(l=this.events[s])!=null&&l.push(t)||(this.events[s]=[t]),()=>{var n;this.events[s]=(n=this.events[s])==null?void 0:n.filter(o=>t!==o)}}});function Mo(s,t){return s-t}function Q0(s){return s<0?-1:1}function Oo(s){return[Math.abs(s),Q0(s)]}function nu(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var eg=2,ct=eg,Ll=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var t;const l=this.drauu.el,n=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-o.left)*n,y:(s.pageY-o.top)*n,pressure:s.pressure}}else{const o=this.drauu.svgPoint;o.x=s.clientX,o.y=s.clientY;const a=o.matrixTransform((t=l.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*n,y:a.y*n,pressure:s.pressure}}}createElement(s,t){const l=document.createElementNS("http://www.w3.org/2000/svg",s),n=t?{...this.brush,...t}:this.brush;return l.setAttribute("fill",n.fill??"transparent"),l.setAttribute("stroke",n.color),l.setAttribute("stroke-width",n.size.toString()),l.setAttribute("stroke-linecap","round"),n.dasharray&&l.setAttribute("stroke-dasharray",n.dasharray),l}attr(s,t){this.el.setAttribute(s,typeof t=="string"?t:t.toFixed(ct))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},sg=class extends Ll{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const t=G0(s,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const l=t.reduce((n,[o,a],r,p)=>{const[i,y]=p[(r+1)%p.length];return n.push(o,a,(o+i)/2,(a+y)/2),n},["M",...t[0],"Q"]);return l.push("Z"),l.map(n=>typeof n=="number"?n.toFixed(2):n).join(" ")}},tg=class extends Ll{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,l]=Oo(s.x-this.start.x),[n,o]=Oo(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,n);t=a,n=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",n);else{const[a,r]=[this.start.x,this.start.x+t*l].sort(Mo),[p,i]=[this.start.y,this.start.y+n*o].sort(Mo);this.attr("cx",(a+r)/2),this.attr("cy",(p+i)/2),this.attr("rx",(r-a)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function ou(s,t){const l=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),n.setAttribute("id",s),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(o),l.appendChild(n),l}var lg=class extends Ll{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const t=nu(),l=document.createElementNS("http://www.w3.org/2000/svg","g");return l.append(ou(t,this.brush.color)),l.append(this.el),this.attr("marker-end",`url(#${t})`),l}return this.el}onMove(s){if(!this.el)return!1;let{x:t,y:l}=s;if(this.shiftPressed){const n=s.x-this.start.x,o=s.y-this.start.y;if(o!==0){let a=n/o;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+o*a,l=this.start.y+o):(t=this.start.x+n,l=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-l),this.attr("x2",t),this.attr("y2",l)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",l)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},ng=class extends Ll{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,l]=Oo(s.x-this.start.x),[n,o]=Oo(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,n);t=a,n=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-n),this.attr("width",t*2),this.attr("height",n*2);else{const[a,r]=[this.start.x,this.start.x+t*l].sort(Mo),[p,i]=[this.start.y,this.start.y+n*o].sort(Mo);this.attr("x",a),this.attr("y",p),this.attr("width",r-a),this.attr("height",i-p)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function og(s,t){const l=s.x-t.x,n=s.y-t.y;return l*l+n*n}function ag(s,t,l){let n=t.x,o=t.y,a=l.x-n,r=l.y-o;if(a!==0||r!==0){const p=((s.x-n)*a+(s.y-o)*r)/(a*a+r*r);p>1?(n=l.x,o=l.y):p>0&&(n+=a*p,o+=r*p)}return a=s.x-n,r=s.y-o,a*a+r*r}function rg(s,t){let l=s[0];const n=[l];let o;for(let a=1,r=s.length;a<r;a++)o=s[a],og(o,l)>t&&(n.push(o),l=o);return l!==o&&o&&n.push(o),n}function mr(s,t,l,n,o){let a=n,r=0;for(let p=t+1;p<l;p++){const i=ag(s[p],s[t],s[l]);i>a&&(r=p,a=i)}a>n&&(r-t>1&&mr(s,t,r,n,o),o.push(s[r]),l-r>1&&mr(s,r,l,n,o))}function cg(s,t){const l=s.length-1,n=[s[0]];return mr(s,0,l,t,n),n.push(s[l]),n}function fi(s,t,l=!1){if(s.length<=2)return s;const n=t!==void 0?t*t:1;return s=l?s:rg(s,n),s=cg(s,n),s}var pg=class extends Ll{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=nu();const t=ou(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=fi(this.points,1,!0),this.count=0),this.attr("d",Fi(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",Fi(fi(this.points,1,!0))),!s.getTotalLength()))}};function ig(s,t){const l=t.x-s.x,n=t.y-s.y;return{length:Math.sqrt(l**2+n**2),angle:Math.atan2(n,l)}}function mi(s,t,l,n){const o=t||s,a=l||s,r=.2,p=ig(o,a),i=p.angle+(n?Math.PI:0),y=p.length*r,u=s.x+Math.cos(i)*y,B=s.y+Math.sin(i)*y;return{x:u,y:B}}function yg(s,t,l){const n=mi(l[t-1],l[t-2],s),o=mi(s,l[t-1],l[t+1],!0);return`C ${n.x.toFixed(ct)},${n.y.toFixed(ct)} ${o.x.toFixed(ct)},${o.y.toFixed(ct)} ${s.x.toFixed(ct)},${s.y.toFixed(ct)}`}function Fi(s){return s.reduce((t,l,n,o)=>n===0?`M ${l.x.toFixed(ct)},${l.y.toFixed(ct)}`:`${t} ${yg(l,n,o)}`,"")}var ug=class extends Ll{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const t=(l,n)=>{if(l&&l.length)for(let o=0;o<l.length;o++){const a=l[o];if(a.getTotalLength){const r=a.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=a.getPointAtLength(r*p/this.pathSubFactor),y=a.getPointAtLength(r*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:y.x,y1:i.y,y2:y.y,segment:p,element:n||a})}}else a.children&&t(a.children,a)}};s&&t(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const l=this.pathFragments[t],n={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(l,n)&&(l.element.remove(),s.push(t))}return s.length&&(this.pathFragments=this.pathFragments.filter((t,l)=>!s.includes(l))),s.length>0}lineLineIntersect(s,t){const l=s.x1,n=s.x2,o=t.x1,a=t.x2,r=s.y1,p=s.y2,i=t.y1,y=t.y2,u=(l-n)*(i-y)-(r-p)*(o-a),B=(l*p-r*n)*(o-a)-(l-n)*(o*y-i*a),d=(l*p-r*n)*(i-y)-(r-p)*(o*y-i*a),f=(m,h,_)=>m>=h&&m<=_?!0:m>=_&&m<=h;if(u===0)return!1;{const m={x:B/u,y:d/u};return f(m.x,l,n)&&f(m.y,r,p)&&f(m.x,o,a)&&f(m.y,i,y)}}};function Bg(s){return{draw:new pg(s),stylus:new sg(s),line:new lg(s),rectangle:new ng(s),ellipse:new tg(s),eraseLine:new ug(s)}}var dg=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=J0(),this._models=Bg(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const l=this.resolveSelector(t)||this.el,n=this.eventStart.bind(this),o=this.eventMove.bind(this),a=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);l.addEventListener("pointerdown",n,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{l.removeEventListener("pointerdown",n),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,t){return this._emitter.on(s,t)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){this.acceptsInput(s)&&(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const t=this.model._eventUp(s);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function fg(s){return new dg(s)}const Fr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Gs=Vs("slidev-drawing-enabled",!1),KD=Vs("slidev-drawing-pinned",!1),mg=G(!1),Fg=G(!1),hg=G(!1),Sn=G(!1),Jt=zm(Vs("slidev-drawing-brush",{color:Fr[0],size:4,mode:"stylus"})),hi=G("stylus"),au=A(()=>Ae.drawings.syncAll||ms.value);let Cn=!1;const Gl=A({get(){return hi.value},set(s){hi.value=s,s==="arrow"?(Jt.mode="line",Jt.arrowEnd=!0):(Jt.mode=s,Jt.arrowEnd=!1)}}),gg=Ve({brush:Jt,acceptsInputTypes:A(()=>Gs.value&&(!Ae.drawings.presenterOnly||ms.value)?void 0:["pen"]),coordinateTransform:!1}),Bs=Uo(fg(gg));function _g(){Bs.clear(),au.value&&Dy(Ye.value,"")}function yc(){var s;Fg.value=Bs.canRedo(),mg.value=Bs.canUndo(),hg.value=!!((s=Bs.el)!=null&&s.children.length)}function bg(s){Cn=!0;const t=$o[s||Ye.value];t!=null?Bs.load(t):Bs.clear(),yc(),Cn=!1}Bs.on("changed",()=>{if(yc(),!Cn){const s=Bs.dump(),t=Ye.value;($o[t]||"")!==s&&au.value&&Dy(t,Bs.dump())}});Om(s=>{Cn=!0,s[Ye.value]!=null&&Bs.load(s[Ye.value]||""),Cn=!1,yc()});ts(()=>{ge(Ye,()=>{Bs.mounted&&bg()},{immediate:!0})});Bs.on("start",()=>Sn.value=!0);Bs.on("end",()=>Sn.value=!1);window.addEventListener("keydown",s=>{if(!Gs.value)return;const t=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let l=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?Bs.redo():Bs.undo():s.code==="Escape"?Gs.value=!1:s.code==="KeyL"&&t?Gl.value="line":s.code==="KeyA"&&t?Gl.value="arrow":s.code==="KeyS"&&t?Gl.value="stylus":s.code==="KeyR"&&t?Gl.value="rectangle":s.code==="KeyE"&&t?Gl.value="ellipse":s.code==="KeyC"&&t?_g():s.code.startsWith("Digit")&&t&&+s.code[5]<=Fr.length?Jt.color=Fr[+s.code[5]-1]:l=!1,l&&(s.preventDefault(),s.stopPropagation())},!1);function Ge(...s){return A(()=>s.every(t=>ns(t)))}function vs(s){return A(()=>!ns(s))}const gi=TF(),Ea=Vs("slidev-color-schema","auto"),hr=A(()=>Ae.colorSchema!=="auto"),uc=A({get(){return hr.value?Ae.colorSchema==="dark":Ea.value==="auto"?gi.value:Ea.value==="dark"},set(s){hr.value||(Ea.value=s===gi.value?"auto":s?"dark":"light")}}),ru=Ay(uc);Us&&ge(uc,s=>{const t=document.querySelector("html");t.classList.toggle("dark",s),t.classList.toggle("light",!s)},{immediate:!0});const Bo=G(1),fo=A(()=>Ze.length-1),Ds=G(0),Bc=G(0);function vg(){Ds.value>Bo.value&&(Ds.value-=1)}function xg(){Ds.value<fo.value&&(Ds.value+=1)}function wg(){if(Ds.value>Bo.value){let s=Ds.value-Bc.value;s<Bo.value&&(s=Bo.value),Ds.value=s}}function Eg(){if(Ds.value<fo.value){let s=Ds.value+Bc.value;s>fo.value&&(s=fo.value),Ds.value=s}}function kg(){const{escape:s,space:t,shift:l,left:n,right:o,up:a,down:r,enter:p,d:i,g:y,o:u}=eu;let B=[{name:"next_space",key:Ge(t,vs(l)),fn:Mt,autoRepeat:!0},{name:"prev_space",key:Ge(t,l),fn:Ot,autoRepeat:!0},{name:"next_right",key:Ge(o,vs(l),vs(is)),fn:Mt,autoRepeat:!0},{name:"prev_left",key:Ge(n,vs(l),vs(is)),fn:Ot,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Mt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ot,autoRepeat:!0},{name:"next_down",key:Ge(r,vs(is)),fn:An,autoRepeat:!0},{name:"prev_up",key:Ge(a,vs(is)),fn:()=>Mn(!1),autoRepeat:!0},{name:"next_shift",key:Ge(o,l),fn:An,autoRepeat:!0},{name:"prev_shift",key:Ge(n,l),fn:()=>Mn(!1),autoRepeat:!0},{name:"toggle_dark",key:Ge(i,vs(Gs)),fn:ru},{name:"toggle_overview",key:Ge(u,vs(Gs)),fn:tu},{name:"hide_overview",key:Ge(s,vs(Gs)),fn:()=>is.value=!1},{name:"goto",key:Ge(y,vs(Gs)),fn:()=>wl.value=!wl.value},{name:"next_overview",key:Ge(o,is),fn:xg},{name:"prev_overview",key:Ge(n,is),fn:vg},{name:"up_overview",key:Ge(a,is),fn:wg},{name:"down_overview",key:Ge(r,is),fn:Eg},{name:"goto_from_overview",key:Ge(p,is),fn:()=>{Rl(Ds.value),is.value=!1}}];const d=new Set(B.map(m=>m.name));if(B.filter(m=>m.name&&d.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return B}const cu=Ge(vs(H0),vs(q0),L0);function Dg(s,t,l=!1){typeof s=="string"&&(s=eu[s]);const n=Ge(s,cu);let o=0,a;const r=()=>{if(clearTimeout(a),!n.value){o=0;return}l&&(a=setTimeout(r,Math.max(1e3-o*250,150)),o++),t()};return ge(n,r,{flush:"sync"})}function Sg(s,t){return FF(s,l=>{cu.value&&(l.repeat||t())})}function Cg(){const s=kg();new Map(s.map(l=>[l.key,l])).forEach(l=>{l.fn&&Dg(l.key,l.fn,l.autoRepeat)}),Sg("f",()=>su.toggle())}const $g={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ag=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Mg=[Ag];function Og(s,t){return b(),te("svg",$g,Mg)}const Pg={name:"carbon-close",render:Og};function dc(s,t=""){var o,a;const l=["slidev-page",t],n=(a=(o=s==null?void 0:s.meta)==null?void 0:o.slide)==null?void 0:a.no;return n!=null&&l.push(`slidev-page-${n}`),l.filter(Boolean).join(" ")}const Tg=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const t=s;C(T);const l=G(),n=XF(l),o=A(()=>t.width?t.width:n.width.value),a=A(()=>t.width?t.width/Ct:n.height.value);t.width&&yl(()=>{l.value&&(l.value.style.width=`${o.value}px`,l.value.style.height=`${a.value}px`)});const r=A(()=>o.value/a.value),p=A(()=>t.scale&&!Il.value?t.scale:r.value<Ct?o.value/$t:a.value*Ct/$t),i=A(()=>({height:`${ac}px`,width:`${$t}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),y=A(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return ws(Ey,p),(u,B)=>(b(),te("div",{id:"slide-container",ref_key:"root",ref:l,class:Xe(E(y))},[e("div",{id:"slide-content",style:as(E(i))},[et(u.$slots,"default")],4),et(u.$slots,"controls")],2))}});const I=(s,t)=>{const l=s.__vccOpts||s;for(const[n,o]of t)l[n]=o;return l},pu=I(Tg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlideContainer.vue"]]),fc=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:t}){const l=Zs(s,"clicks",t),n=Zs(s,"clicksElements",t),o=Zs(s,"clicksDisabled",t),a=Zs(s,"clicksOrderMap",t);n.value.length=0,ws(hm,s.route),ws(gm,s.context),ws(an,l),ws(rn,o),ws(Kt,n),ws(tr,a)},render(){var s,t;return this.$props.is?ks(this.$props.is):(t=(s=this.$slots)==null?void 0:s.default)==null?void 0:t.call(s)}}),Ig=["innerHTML"],Rg=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(s){return C(T),(t,l)=>E($o)[s.page]?(b(),te("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:E($o)[s.page]},null,8,Ig)):he("v-if",!0)}}),iu=I(Rg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Lg=Object.freeze(Object.defineProperty({__proto__:null,default:iu},Symbol.toStringTag,{value:"Module"})),Ng={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Hg=["onClick"],qg=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(s,{emit:t}){const l=s;C(T);const n=Zs(l,"modelValue",t);function o(){n.value=!1}function a(f){Rl(f),o()}function r(f){return f===Ds.value}const p=dr.smaller("xs"),i=dr.smaller("sm"),y=4*16*2,u=2*16,B=A(()=>p.value?al.width.value-y:i.value?(al.width.value-y-u)/2:300),d=A(()=>Math.floor((al.width.value-y)/(B.value+u)));return yl(()=>{Ds.value=Ye.value,Bc.value=d.value}),(f,m)=>{const h=Pg;return b(),te(Te,null,[Jr(e("div",Ng,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:as(`grid-template-columns: repeat(auto-fit,minmax(${E(B)}px,1fr))`)},[(b(!0),te(Te,null,qn(E(Ze).slice(0,-1),(_,x)=>(b(),te("div",{key:_.path,class:"relative"},[e("div",{class:Xe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(x+1),"border-gray-400":!r(x+1)}]),style:as(E(rc)),onClick:v=>a(+_.path)},[(b(),O(pu,{key:_.path,width:E(B),"clicks-disabled":!0,class:"pointer-events-none"},{default:S(()=>[j(E(fc),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Xe(E(dc)(_)),route:_,context:"overview"},null,8,["is","class","route"]),j(iu,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,Hg),e("div",{class:"absolute top-0 opacity-50",style:as(`left: ${E(B)+5}px`)},yt(x+1),5)]))),128))],4)],512),[[Fy,E(n)]]),E(n)?(b(),te("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[j(h)])):he("v-if",!0)],64)}}});const jg=I(qg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Ug="/math201/slides/matplotlib/assets/logo-b72bde5d.png",Vg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},zg=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:t}){const l=s;C(T);const n=Zs(l,"modelValue",t);function o(){n.value=!1}return(a,r)=>(b(),O(j2,null,[E(n)?(b(),te("div",Vg,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>o())}),e("div",{class:Xe(["m-auto rounded-md bg-main shadow",l.class]),"dark:border":"~ gray-400 opacity-10"},[et(a.$slots,"default")],2)])):he("v-if",!0)],1024))}}),Wg=I(zg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Modal.vue"]]),Yg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Xg=["innerHTML"],Kg=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Ug,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),c("dev ")])])],-1),Zg=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:t}){const l=s;C(T);const n=Zs(l,"modelValue",t),o=A(()=>typeof Ae.info=="string");return(a,r)=>(b(),O(Wg,{modelValue:E(n),"onUpdate:modelValue":r[0]||(r[0]=p=>Me(n)?n.value=p:null),class:"px-6 py-4"},{default:S(()=>[e("div",Yg,[E(o)?(b(),te("div",{key:0,class:"mb-4",innerHTML:E(Ae).info},null,8,Xg)):he("v-if",!0),Kg])]),_:1},8,["modelValue"]))}});const Gg=I(Zg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/InfoDialog.vue"]]),Jg=["disabled","onKeydown"],Qg=ke({__name:"Goto",setup(s){C(T);const t=G(),l=G(""),n=A(()=>{if(l.value.startsWith("/"))return!!Ze.find(r=>r.path===l.value.substring(1));{const r=+l.value;return!isNaN(r)&&r>0&&r<=wu.value}});function o(){n.value&&(l.value.startsWith("/")?Rl(l.value.substring(1)):Rl(+l.value)),a()}function a(){wl.value=!1}return ge(wl,async r=>{var p,i;r?(await ts(),l.value="",(p=t.value)==null||p.focus()):(i=t.value)==null||i.blur()}),ge(l,r=>{r.match(/^[^0-9/]/)&&(l.value=l.value.substring(1))}),(r,p)=>(b(),te("div",{id:"slidev-goto-dialog",class:Xe(["fixed right-5 bg-main transform transition-all",E(wl)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Jr(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":p[0]||(p[0]=i=>l.value=i),type:"text",disabled:!E(wl),class:Xe(["outline-none bg-transparent",{"text-red-400":!E(n)&&l.value}]),placeholder:"Goto...",onKeydown:[gp(o,["enter"]),gp(a,["escape"])],onBlur:a},null,42,Jg),[[Df,l.value]])],2))}}),e_=I(Qg,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Goto.vue"]]),s_=ke({__name:"Controls",setup(s){C(T);const t=Qs(),l=Qs();return(n,o)=>(b(),te(Te,null,[j(jg,{modelValue:E(is),"onUpdate:modelValue":o[0]||(o[0]=a=>Me(is)?is.value=a:null)},null,8,["modelValue"]),j(e_),E(t)?(b(),O(E(t),{key:0})):he("v-if",!0),E(l)?(b(),O(E(l),{key:1,modelValue:E(xa),"onUpdate:modelValue":o[1]||(o[1]=a=>Me(xa)?xa.value=a:null)},null,8,["modelValue"])):he("v-if",!0),E(Ae).info?(b(),O(Gg,{key:2,modelValue:E(yn),"onUpdate:modelValue":o[2]||(o[2]=a=>Me(yn)?yn.value=a:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),t_=I(s_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Controls.vue"]]),l_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n_=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),o_=[n_];function a_(s,t){return b(),te("svg",l_,o_)}const r_={name:"carbon-settings-adjust",render:a_},c_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p_=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),i_=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),y_=[p_,i_];function u_(s,t){return b(),te("svg",c_,y_)}const B_={name:"carbon-information",render:u_},d_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f_=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),m_=[f_];function F_(s,t){return b(),te("svg",d_,m_)}const h_={name:"carbon-download",render:F_},g_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},__=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),b_=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),v_=[__,b_];function x_(s,t){return b(),te("svg",g_,v_)}const w_={name:"carbon-user-speaker",render:x_},E_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k_=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),D_=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),S_=[k_,D_];function C_(s,t){return b(),te("svg",E_,S_)}const $_={name:"carbon-presentation-file",render:C_},A_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M_=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),O_=[M_];function P_(s,t){return b(),te("svg",A_,O_)}const T_={name:"carbon-pen",render:P_},I_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},R_=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),L_=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),N_=[R_,L_];function H_(s,t){return b(),te("svg",I_,N_)}const q_={name:"ph-cursor-duotone",render:H_},j_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},U_=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),V_=[U_];function z_(s,t){return b(),te("svg",j_,V_)}const yu={name:"ph-cursor-fill",render:z_},W_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y_=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),X_=[Y_];function K_(s,t){return b(),te("svg",W_,X_)}const Z_={name:"carbon-sun",render:K_},G_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J_=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Q_=[J_];function e9(s,t){return b(),te("svg",G_,Q_)}const s9={name:"carbon-moon",render:e9},t9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l9=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),n9=[l9];function o9(s,t){return b(),te("svg",t9,n9)}const a9={name:"carbon-apps",render:o9},r9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c9=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),p9=[c9];function i9(s,t){return b(),te("svg",r9,p9)}const y9={name:"carbon-arrow-right",render:i9},u9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B9=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),d9=[B9];function f9(s,t){return b(),te("svg",u9,d9)}const m9={name:"carbon-arrow-left",render:f9},F9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h9=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),g9=[h9];function _9(s,t){return b(),te("svg",F9,g9)}const b9={name:"carbon-maximize",render:_9},v9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x9=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),w9=[x9];function E9(s,t){return b(),te("svg",v9,w9)}const k9={name:"carbon-minimize",render:E9},D9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S9=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),C9=[S9];function $9(s,t){return b(),te("svg",D9,C9)}const A9={name:"carbon-checkmark",render:$9},M9={class:"select-list"},O9={class:"title"},P9={class:"items"},T9=["onClick"],I9=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:t}){const l=s;C(T);const n=Zs(l,"modelValue",t,{passive:!0});return(o,a)=>{const r=A9;return b(),te("div",M9,[e("div",O9,yt(s.title),1),e("div",P9,[(b(!0),te(Te,null,qn(s.items,p=>(b(),te("div",{key:p.value,class:Xe(["item",{active:E(n)===p.value}]),onClick:()=>{var i;n.value=p.value,(i=p.onClick)==null||i.call(p)}},[j(r,{class:Xe(["text-green-500",{"opacity-0":E(n)!==p.value}])},null,8,["class"]),c(" "+yt(p.display||p.value),1)],10,T9))),128))])])}}});const R9=I(I9,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SelectList.vue"]]),L9={class:"text-sm"},N9=ke({__name:"Settings",setup(s){C(T);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(l,n)=>(b(),te("div",L9,[j(R9,{modelValue:E(uo),"onUpdate:modelValue":n[0]||(n[0]=o=>Me(uo)?uo.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),H9=I(N9,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Settings.vue"]]),q9={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},j9=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:t}){const l=s;C(T);const n=Zs(l,"modelValue",t,{passive:!0}),o=G();return fF(o,()=>{n.value=!1}),(a,r)=>(b(),te("div",{ref_key:"el",ref:o,class:"flex relative"},[e("button",{class:Xe({disabled:s.disabled}),onClick:r[0]||(r[0]=p=>n.value=!E(n))},[et(a.$slots,"button",{class:Xe({disabled:s.disabled})})],2),(b(),O(j2,null,[E(n)?(b(),te("div",q9,[et(a.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),U9=I(j9,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/MenuButton.vue"]]),V9={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},z9={__name:"VerticalDivider",setup(s){return C(T),(t,l)=>(b(),te("div",V9))}},no=I(z9,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),W9={render(){return[]}},Y9={class:"slidev-icon-btn"},X9={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},K9={class:"my-auto"},Z9={class:"opacity-50"},G9=ke({__name:"NavControls",props:{persist:{default:!1}},setup(s){const t=s;C(T);const l=dr.smaller("md"),{isFullscreen:n,toggle:o}=su,a=A(()=>_r.value?`?password=${_r.value}`:""),r=A(()=>`/presenter/${Ye.value}${a.value}`),p=A(()=>`/${Ye.value}${a.value}`),i=G(),y=()=>{i.value&&$l.value&&i.value.contains($l.value)&&$l.value.blur()},u=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),B=Qs(),d=Qs();return At(()=>import("./DrawingControls-6a5c0c91.js"),[]).then(f=>d.value=f.default),(f,m)=>{const h=k9,_=b9,x=m9,v=y9,w=a9,k=s9,M=Z_,N=yu,J=q_,R=T_,X=$_,ne=Ol("RouterLink"),ye=w_,Q=h_,xe=B_,Pe=r_;return b(),te("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[e("div",{class:Xe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E(u)]),onMouseleave:y},[E(at)?he("v-if",!0):(b(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...Ce)=>E(o)&&E(o)(...Ce))},[E(n)?(b(),O(h,{key:0})):(b(),O(_,{key:1}))])),e("button",{class:Xe(["slidev-icon-btn",{disabled:!E(y7)}]),onClick:m[1]||(m[1]=(...Ce)=>E(Ot)&&E(Ot)(...Ce))},[j(x)],2),e("button",{class:Xe(["slidev-icon-btn",{disabled:!E(i7)}]),title:"Next",onClick:m[2]||(m[2]=(...Ce)=>E(Mt)&&E(Mt)(...Ce))},[j(v)],2),E(at)?he("v-if",!0):(b(),te("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Ce=>E(tu)())},[j(w)])),E(hr)?he("v-if",!0):(b(),te("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Ce=>E(ru)())},[E(uc)?(b(),O(k,{key:0})):(b(),O(M,{key:1}))])),j(no),E(at)?he("v-if",!0):(b(),te(Te,{key:3},[!E(ms)&&!E(l)&&E(B)?(b(),te(Te,{key:0},[j(E(B)),j(no)],64)):he("v-if",!0),E(ms)?(b(),te("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Ce=>wa.value=!E(wa))},[E(wa)?(b(),O(N,{key:0})):(b(),O(J,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),(!E(Ae).drawings.presenterOnly||E(ms))&&!E(at)?(b(),te(Te,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Ce=>Gs.value=!E(Gs))},[j(R),E(Gs)?(b(),te("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:as({background:E(Jt).color})},null,4)):he("v-if",!0)]),j(no)],64)):he("v-if",!0),E(at)?he("v-if",!0):(b(),te(Te,{key:5},[E(ms)?(b(),O(ne,{key:0,to:E(p),class:"slidev-icon-btn",title:"Play Mode"},{default:S(()=>[j(X)]),_:1},8,["to"])):he("v-if",!0),E(a7)?(b(),O(ne,{key:1,to:E(r),class:"slidev-icon-btn",title:"Presenter Mode"},{default:S(()=>[j(ye)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),(b(),te(Te,{key:6},[E(Ae).download?(b(),te("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...Ce)=>E(br)&&E(br)(...Ce))},[j(Q)])):he("v-if",!0)],64)),!E(ms)&&E(Ae).info&&!E(at)?(b(),te("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=Ce=>yn.value=!E(yn))},[j(xe)])):he("v-if",!0),!E(ms)&&!E(at)?(b(),O(U9,{key:8},{button:S(()=>[e("button",Y9,[j(Pe)])]),menu:S(()=>[j(H9)]),_:1})):he("v-if",!0),E(at)?he("v-if",!0):(b(),O(no,{key:9})),e("div",X9,[e("div",K9,[c(yt(E(Ye))+" ",1),e("span",Z9,"/ "+yt(E(wu)),1)])]),j(E(W9))],34)],512)}}}),J9=I(G9,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/NavControls.vue"]]),uu={render(){return[]}},Bu={render(){return[]}},Q9={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},e3=ke({__name:"PresenterMouse",setup(s){return C(T),(t,l)=>{const n=yu;return E(ga).cursor?(b(),te("div",Q9,[j(n,{class:"absolute",style:as({left:`${E(ga).cursor.x}%`,top:`${E(ga).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),s3=I(e3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),t3=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(s){C(T),ge(ys,()=>{var n,o;(n=ys.value)!=null&&n.meta&&ys.value.meta.preload!==!1&&(ys.value.meta.__preloaded=!0),(o=ka.value)!=null&&o.meta&&ka.value.meta.preload!==!1&&(ka.value.meta.__preloaded=!0)},{immediate:!0});const t=Qs();At(()=>import("./DrawingLayer-bc7e8f86.js"),[]).then(n=>t.value=n.default);const l=A(()=>Ze.filter(n=>{var o;return((o=n.meta)==null?void 0:o.__preloaded)||n===ys.value}));return(n,o)=>(b(),te(Te,null,[he(" Global Bottom "),j(E(Bu)),he(" Slides "),j(bf,be(E(d7),{id:"slideshow",tag:"div"}),{default:S(()=>[(b(!0),te(Te,null,qn(E(l),a=>{var r;return Jr((b(),O(E(fc),{key:a.path,is:a==null?void 0:a.component,clicks:a===E(ys)?E(Os):0,"clicks-elements":((r=a.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Xe(E(dc)(a)),route:a,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Fy,a===E(ys)]])}),128))]),_:1},16),he(" Global Top "),j(E(uu)),E(t)?(b(),O(E(t),{key:0})):he("v-if",!0),E(ms)?he("v-if",!0):(b(),O(s3,{key:1}))],64))}});const l3=I(t3,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlidesShow.vue"]]),n3=ke({__name:"PrintStyle",setup(s){C(T);function t(l,{slots:n}){if(n.default)return ks("style",n.default())}return(l,n)=>(b(),O(t,null,{default:S(()=>[c(" @page { size: "+yt(E($t))+"px "+yt(E(ac))+"px; margin: 0px; } ",1)]),_:1}))}}),du=I(n3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintStyle.vue"]]),o3=ke({__name:"Play",setup(s){C(T),Cg();const t=G();function l(a){var r;pi.value||((r=a.target)==null?void 0:r.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?Mt():Ot())}f7(t);const n=A(()=>N0.value||pi.value);Qs();const o=Qs();return At(()=>import("./DrawingControls-6a5c0c91.js"),[]).then(a=>o.value=a.default),(a,r)=>(b(),te(Te,null,[E(Il)?(b(),O(du,{key:0})):he("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:as(E(rc))},[j(pu,{class:"w-full h-full",style:as({background:"var(--slidev-slide-container-background, black)"}),width:E(Il)?E(al).width.value:void 0,scale:E(uo),onPointerdown:l},{default:S(()=>[j(l3,{context:"slide"})]),controls:S(()=>[e("div",{class:Xe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[E(n)?"opacity-100 right-0":"opacity-0 p-2",E(Sn)?"pointer-events-none":""]])},[j(J9,{class:"m-auto",persist:E(n)},null,8,["persist"])],2),!E(Ae).drawings.presenterOnly&&!E(at)&&E(o)?(b(),O(E(o),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),j(t_)],64))}}),a3=I(o3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function fu(s){return typeof s>"u"||s===null}function r3(s){return typeof s=="object"&&s!==null}function c3(s){return Array.isArray(s)?s:fu(s)?[]:[s]}function p3(s,t){var l,n,o,a;if(t)for(a=Object.keys(t),l=0,n=a.length;l<n;l+=1)o=a[l],s[o]=t[o];return s}function i3(s,t){var l="",n;for(n=0;n<t;n+=1)l+=s;return l}function y3(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}var u3=fu,B3=r3,d3=c3,f3=i3,m3=y3,F3=p3,mc={isNothing:u3,isObject:B3,toArray:d3,repeat:f3,isNegativeZero:m3,extend:F3};function mu(s,t){var l="",n=s.reason||"(unknown reason)";return s.mark?(s.mark.name&&(l+='in "'+s.mark.name+'" '),l+="("+(s.mark.line+1)+":"+(s.mark.column+1)+")",!t&&s.mark.snippet&&(l+=`

`+s.mark.snippet),n+" "+l):n}function $n(s,t){Error.call(this),this.name="YAMLException",this.reason=s,this.mark=t,this.message=mu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}$n.prototype=Object.create(Error.prototype);$n.prototype.constructor=$n;$n.prototype.toString=function(t){return this.name+": "+mu(this,t)};var Zt=$n,h3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],g3=["scalar","sequence","mapping"];function _3(s){var t={};return s!==null&&Object.keys(s).forEach(function(l){s[l].forEach(function(n){t[String(n)]=l})}),t}function b3(s,t){if(t=t||{},Object.keys(t).forEach(function(l){if(h3.indexOf(l)===-1)throw new Zt('Unknown option "'+l+'" is met in definition of "'+s+'" YAML type.')}),this.options=t,this.tag=s,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(l){return l},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=_3(t.styleAliases||null),g3.indexOf(this.kind)===-1)throw new Zt('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}var rs=b3;function _i(s,t){var l=[];return s[t].forEach(function(n){var o=l.length;l.forEach(function(a,r){a.tag===n.tag&&a.kind===n.kind&&a.multi===n.multi&&(o=r)}),l[o]=n}),l}function v3(){var s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,l;function n(o){o.multi?(s.multi[o.kind].push(o),s.multi.fallback.push(o)):s[o.kind][o.tag]=s.fallback[o.tag]=o}for(t=0,l=arguments.length;t<l;t+=1)arguments[t].forEach(n);return s}function gr(s){return this.extend(s)}gr.prototype.extend=function(t){var l=[],n=[];if(t instanceof rs)n.push(t);else if(Array.isArray(t))n=n.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(l=l.concat(t.implicit)),t.explicit&&(n=n.concat(t.explicit));else throw new Zt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(a){if(!(a instanceof rs))throw new Zt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Zt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Zt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(a){if(!(a instanceof rs))throw new Zt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(gr.prototype);return o.implicit=(this.implicit||[]).concat(l),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=_i(o,"implicit"),o.compiledExplicit=_i(o,"explicit"),o.compiledTypeMap=v3(o.compiledImplicit,o.compiledExplicit),o};var x3=gr,w3=new rs("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),E3=new rs("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),k3=new rs("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),D3=new x3({explicit:[w3,E3,k3]});function S3(s){if(s===null)return!0;var t=s.length;return t===1&&s==="~"||t===4&&(s==="null"||s==="Null"||s==="NULL")}function C3(){return null}function $3(s){return s===null}var A3=new rs("tag:yaml.org,2002:null",{kind:"scalar",resolve:S3,construct:C3,predicate:$3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function M3(s){if(s===null)return!1;var t=s.length;return t===4&&(s==="true"||s==="True"||s==="TRUE")||t===5&&(s==="false"||s==="False"||s==="FALSE")}function O3(s){return s==="true"||s==="True"||s==="TRUE"}function P3(s){return Object.prototype.toString.call(s)==="[object Boolean]"}var T3=new rs("tag:yaml.org,2002:bool",{kind:"scalar",resolve:M3,construct:O3,predicate:P3,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"});function I3(s){return 48<=s&&s<=57||65<=s&&s<=70||97<=s&&s<=102}function R3(s){return 48<=s&&s<=55}function L3(s){return 48<=s&&s<=57}function N3(s){if(s===null)return!1;var t=s.length,l=0,n=!1,o;if(!t)return!1;if(o=s[l],(o==="-"||o==="+")&&(o=s[++l]),o==="0"){if(l+1===t)return!0;if(o=s[++l],o==="b"){for(l++;l<t;l++)if(o=s[l],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(l++;l<t;l++)if(o=s[l],o!=="_"){if(!I3(s.charCodeAt(l)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(l++;l<t;l++)if(o=s[l],o!=="_"){if(!R3(s.charCodeAt(l)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;l<t;l++)if(o=s[l],o!=="_"){if(!L3(s.charCodeAt(l)))return!1;n=!0}return!(!n||o==="_")}function H3(s){var t=s,l=1,n;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),n=t[0],(n==="-"||n==="+")&&(n==="-"&&(l=-1),t=t.slice(1),n=t[0]),t==="0")return 0;if(n==="0"){if(t[1]==="b")return l*parseInt(t.slice(2),2);if(t[1]==="x")return l*parseInt(t.slice(2),16);if(t[1]==="o")return l*parseInt(t.slice(2),8)}return l*parseInt(t,10)}function q3(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!mc.isNegativeZero(s)}var j3=new rs("tag:yaml.org,2002:int",{kind:"scalar",resolve:N3,construct:H3,predicate:q3,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),U3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function V3(s){return!(s===null||!U3.test(s)||s[s.length-1]==="_")}function z3(s){var t,l;return t=s.replace(/_/g,"").toLowerCase(),l=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?l===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:l*parseFloat(t,10)}var W3=/^[-+]?[0-9]+e/;function Y3(s,t){var l;if(isNaN(s))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(mc.isNegativeZero(s))return"-0.0";return l=s.toString(10),W3.test(l)?l.replace("e",".e"):l}function X3(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||mc.isNegativeZero(s))}var K3=new rs("tag:yaml.org,2002:float",{kind:"scalar",resolve:V3,construct:z3,predicate:X3,represent:Y3,defaultStyle:"lowercase"}),Z3=D3.extend({implicit:[A3,T3,j3,K3]}),G3=Z3,Fu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),hu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function J3(s){return s===null?!1:Fu.exec(s)!==null||hu.exec(s)!==null}function Q3(s){var t,l,n,o,a,r,p,i=0,y=null,u,B,d;if(t=Fu.exec(s),t===null&&(t=hu.exec(s)),t===null)throw new Error("Date resolve error");if(l=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(l,n,o));if(a=+t[4],r=+t[5],p=+t[6],t[7]){for(i=t[7].slice(0,3);i.length<3;)i+="0";i=+i}return t[9]&&(u=+t[10],B=+(t[11]||0),y=(u*60+B)*6e4,t[9]==="-"&&(y=-y)),d=new Date(Date.UTC(l,n,o,a,r,p,i)),y&&d.setTime(d.getTime()-y),d}function eb(s){return s.toISOString()}var sb=new rs("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:J3,construct:Q3,instanceOf:Date,represent:eb});function tb(s){return s==="<<"||s===null}var lb=new rs("tag:yaml.org,2002:merge",{kind:"scalar",resolve:tb}),Fc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function nb(s){if(s===null)return!1;var t,l,n=0,o=s.length,a=Fc;for(l=0;l<o;l++)if(t=a.indexOf(s.charAt(l)),!(t>64)){if(t<0)return!1;n+=6}return n%8===0}function ob(s){var t,l,n=s.replace(/[\r\n=]/g,""),o=n.length,a=Fc,r=0,p=[];for(t=0;t<o;t++)t%4===0&&t&&(p.push(r>>16&255),p.push(r>>8&255),p.push(r&255)),r=r<<6|a.indexOf(n.charAt(t));return l=o%4*6,l===0?(p.push(r>>16&255),p.push(r>>8&255),p.push(r&255)):l===18?(p.push(r>>10&255),p.push(r>>2&255)):l===12&&p.push(r>>4&255),new Uint8Array(p)}function ab(s){var t="",l=0,n,o,a=s.length,r=Fc;for(n=0;n<a;n++)n%3===0&&n&&(t+=r[l>>18&63],t+=r[l>>12&63],t+=r[l>>6&63],t+=r[l&63]),l=(l<<8)+s[n];return o=a%3,o===0?(t+=r[l>>18&63],t+=r[l>>12&63],t+=r[l>>6&63],t+=r[l&63]):o===2?(t+=r[l>>10&63],t+=r[l>>4&63],t+=r[l<<2&63],t+=r[64]):o===1&&(t+=r[l>>2&63],t+=r[l<<4&63],t+=r[64],t+=r[64]),t}function rb(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}var cb=new rs("tag:yaml.org,2002:binary",{kind:"scalar",resolve:nb,construct:ob,predicate:rb,represent:ab}),pb=Object.prototype.hasOwnProperty,ib=Object.prototype.toString;function yb(s){if(s===null)return!0;var t=[],l,n,o,a,r,p=s;for(l=0,n=p.length;l<n;l+=1){if(o=p[l],r=!1,ib.call(o)!=="[object Object]")return!1;for(a in o)if(pb.call(o,a))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(a)===-1)t.push(a);else return!1}return!0}function ub(s){return s!==null?s:[]}var Bb=new rs("tag:yaml.org,2002:omap",{kind:"sequence",resolve:yb,construct:ub}),db=Object.prototype.toString;function fb(s){if(s===null)return!0;var t,l,n,o,a,r=s;for(a=new Array(r.length),t=0,l=r.length;t<l;t+=1){if(n=r[t],db.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;a[t]=[o[0],n[o[0]]]}return!0}function mb(s){if(s===null)return[];var t,l,n,o,a,r=s;for(a=new Array(r.length),t=0,l=r.length;t<l;t+=1)n=r[t],o=Object.keys(n),a[t]=[o[0],n[o[0]]];return a}var Fb=new rs("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:fb,construct:mb}),hb=Object.prototype.hasOwnProperty;function gb(s){if(s===null)return!0;var t,l=s;for(t in l)if(hb.call(l,t)&&l[t]!==null)return!1;return!0}function _b(s){return s!==null?s:{}}var bb=new rs("tag:yaml.org,2002:set",{kind:"mapping",resolve:gb,construct:_b});G3.extend({implicit:[sb,lb],explicit:[cb,Bb,Fb,bb]});function bi(s){return s===48?"\0":s===97?"\x07":s===98?"\b":s===116||s===9?"	":s===110?`
`:s===118?"\v":s===102?"\f":s===114?"\r":s===101?"\x1B":s===32?" ":s===34?'"':s===47?"/":s===92?"\\":s===78?"":s===95?" ":s===76?"\u2028":s===80?"\u2029":""}var vb=new Array(256),xb=new Array(256);for(var gl=0;gl<256;gl++)vb[gl]=bi(gl)?1:0,xb[gl]=bi(gl);function wb(s){return Array.from(new Set(s))}function vi(...s){let t,l,n;s.length===1?(t=0,n=1,[l]=s):[t,l,n=1]=s;const o=[];let a=t;for(;a<l;)o.push(a),a+=n||1;return o}function gu(s,t){if(!t||t==="all"||t==="*")return vi(1,s+1);const l=[];for(const n of t.split(/[,;]/g))if(!n.includes("-"))l.push(+n);else{const[o,a]=n.split("-",2);l.push(...vi(+o,a?+a+1:s+1))}return wb(l).filter(n=>n<=s).sort((n,o)=>n-o)}function _u(s){const t=A(()=>s.value.path),l=A(()=>Ze.length-1),n=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=A(()=>sa(n.value)),a=A(()=>Ze.find(d=>d.path===`${n.value}`)),r=A(()=>{var d,f,m;return(m=(f=(d=a.value)==null?void 0:d.meta)==null?void 0:f.slide)==null?void 0:m.id}),p=A(()=>{var d,f;return((f=(d=a.value)==null?void 0:d.meta)==null?void 0:f.layout)||(n.value===1?"cover":"default")}),i=A(()=>Ze.find(d=>d.path===`${Math.min(Ze.length,n.value+1)}`)),y=A(()=>Ze.filter(d=>{var f,m;return(m=(f=d.meta)==null?void 0:f.slide)==null?void 0:m.title}).reduce((d,f)=>(hc(d,f),d),[])),u=A(()=>gc(y.value,a.value)),B=A(()=>_c(u.value));return{route:s,path:t,total:l,currentPage:n,currentPath:o,currentRoute:a,currentSlideId:r,currentLayout:p,nextRoute:i,rawTree:y,treeWithActiveStatuses:u,tree:B}}function bu(s,t,l){const n=G(0);ts(()=>{hs.afterEach(async()=>{await ts(),n.value+=1})});const o=A(()=>{var i,y;return n.value,((y=(i=t.value)==null?void 0:i.meta)==null?void 0:y.__clicksElements)||[]}),a=A(()=>{var i,y;return+(((y=(i=t.value)==null?void 0:i.meta)==null?void 0:y.clicks)??o.value.length)}),r=A(()=>l.value<Ze.length-1||s.value<a.value),p=A(()=>l.value>1||s.value>0);return{clicks:s,clicksElements:o,clicksTotal:a,hasNext:r,hasPrev:p}}const Eb=["id"],kb=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(s,{emit:t}){const l=s,n=Zs(l,"clicksElements",t),o=A(()=>({height:`${ac}px`,width:`${$t}px`})),a=Qs();At(()=>Promise.resolve().then(()=>Lg),void 0).then(y=>a.value=y.default);const r=A(()=>l.clicks),p=bu(r,l.nav.currentRoute,l.nav.currentPage),i=A(()=>`${l.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return ws(T,Ve({nav:{...l.nav,...p},configs:Ae,themeConfigs:A(()=>Ae.themeConfig)})),(y,u)=>{var B;return b(),te("div",{id:E(i),class:"print-slide-container",style:as(E(o))},[j(E(Bu)),j(E(fc),{is:(B=s.route)==null?void 0:B.component,"clicks-elements":E(n),"onUpdate:clicksElements":u[0]||(u[0]=d=>Me(n)?n.value=d:null),clicks:E(r),"clicks-disabled":!1,class:Xe(E(dc)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),E(a)?(b(),O(E(a),{key:0,page:+s.route.path},null,8,["page"])):he("v-if",!0),j(E(uu))],12,Eb)}}}),xi=I(kb,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Db=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(s){var a;const t=s;C(T);const l=Ve(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),n=A(()=>t.route),o=_u(n);return(r,p)=>(b(),te(Te,null,[j(xi,{"clicks-elements":l,"onUpdate:clicksElements":p[0]||(p[0]=i=>l=i),clicks:0,nav:E(o),route:E(n)},null,8,["clicks-elements","nav","route"]),E(un)?he("v-if",!0):(b(!0),te(Te,{key:0},qn(l.length,i=>(b(),O(xi,{key:i,clicks:i,nav:E(o),route:E(n)},null,8,["clicks","nav","route"]))),128))],64))}}),Sb=I(Db,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Cb={id:"print-content"},$b=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(s){const t=s;C(T);const l=A(()=>t.width),n=A(()=>t.width/Ct),o=A(()=>l.value/n.value),a=A(()=>o.value<Ct?l.value/$t:n.value*Ct/$t);let r=Ze.slice(0,-1);Ts.value.query.range&&(r=gu(r.length,Ts.value.query.range).map(y=>r[y-1]));const p=A(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return ws(Ey,a),(i,y)=>(b(),te("div",{id:"print-container",class:Xe(E(p))},[e("div",Cb,[(b(!0),te(Te,null,qn(E(r),u=>(b(),O(Sb,{key:u.path,route:u},null,8,["route"]))),128))]),et(i.$slots,"controls")],2))}});const Ab=I($b,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Mb=ke({__name:"Print",setup(s){return C(T),yl(()=>{Il?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,l)=>(b(),te(Te,null,[E(Il)?(b(),O(du,{key:0})):he("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:as(E(rc))},[j(Ab,{class:"w-full h-full",style:as({background:"var(--slidev-slide-container-background, black)"}),width:E(al).width.value},null,8,["style","width"])],4)],64))}});const Ob=I(Mb,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Print.vue"]]);const Pb={class:"slidev-layout end"},Tb={__name:"end",setup(s){return C(T),(t,l)=>(b(),te("div",Pb," END "))}},Ib=I(Tb,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/layouts/end.vue"]]),Rb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lb=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),Nb=[Lb];function Hb(s,t){return b(),te("svg",Rb,Nb)}const qb={name:"carbon-logo-github",render:Hb},jb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ub=e("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),Vb=e("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1),zb=[Ub,Vb];function Wb(s,t){return b(),te("svg",jb,zb)}const Yb={name:"carbon-application-web",render:Wb};function Xb(s){return s.startsWith("/")?"/math201/slides/matplotlib"+s.slice(1):s}const Kb={key:0},Zb=["src"],Gb=ke({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(s){const t=s;C(T);const l=A(()=>Xb(t.logoHeader));return(n,o)=>s.logoHeader?(b(),te("header",Kb,[e("img",{src:E(l),width:"60",height:"60",class:"object-contain"},null,8,Zb)])):he("v-if",!0)}}),wi=I(Gb,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),Jb={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},Qb={key:0,class:"mb-0"},ev={key:1,class:"mb-0"},sv=ke({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(s){return C(T),(t,l)=>s.website||s.handle?(b(),te("footer",Jb,[s.website?(b(),te("p",Qb,yt(s.website),1)):he("v-if",!0),s.handle?(b(),te("p",ev,"@"+yt(s.handle),1)):he("v-if",!0)])):he("v-if",!0)}}),Ei=I(sv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),tv={class:"bg-main slidev-layout"},lv={class:"my-auto"},nv=ke({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(s){return C(T),ke({LayoutHeader:wi,LayoutFooter:Ei}),(t,l)=>(b(),te("div",tv,[j(wi,{logoHeader:s.logoHeader},null,8,["logoHeader"]),e("div",lv,[et(t.$slots,"default")]),j(Ei,{website:s.website,handle:s.handle},null,8,["website","handle"])]))}}),ee=I(nv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),ov=ke({__name:"cover",setup(s){return C(T),ke({Default:ee}),(t,l)=>(b(),O(ee,{class:"cover"},{default:S(()=>[et(t.$slots,"default")]),_:3}))}}),av=I(ov,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),rv=e("h1",null,"Matplotlib 基础",-1),cv=e("h2",null,"上海电力大学",-1),pv=e("p",null,"数理学院数学系",-1),iv=e("h4",null,"纸上得来终觉浅",-1),yv={class:"abs-br m-6 flex gap-2"},uv={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Bv={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},dv={__name:"1",setup(s){const t={theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss"};return C(T),(l,n)=>{const o=Yb,a=qb;return b(),O(av,K(Y(t)),{default:S(()=>[rv,cv,pv,iv,e("div",yv,[e("a",uv,[j(o)]),e("a",Bv,[j(a)])])]),_:1},16)}}},fv=I(dv,[["__file","/@slidev/slides/1.md"]]),mv={class:"flex flex-col items-center justify-center text-center"},Fv=ke({__name:"center",setup(s){return C(T),ke({Default:ee}),(t,l)=>(b(),O(ee,{class:"center"},{default:S(()=>[e("div",mv,[et(t.$slots,"default")])]),_:3}))}}),Nt=I(Fv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),hv=e("h1",null,"什么是Matplotlib?",-1),gv={__name:"2",setup(s){const t={layout:"center",srcSequence:"./pages/what.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[hv]),_:1},16))}},_v=I(gv,[["__file","/@slidev/slides/2.md"]]),bv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vv=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),xv=[vv];function wv(s,t){return b(),te("svg",bv,xv)}const Ev={name:"ph-clipboard",render:wv},kv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dv=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Sv=[Dv];function Cv(s,t){return b(),te("svg",kv,Sv)}const $v={name:"ph-check-circle",render:Cv},Av=["title"],Mv=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(s){const t=s;C(T);const l=C(an),n=C(Kt),o=C(rn);function a(B=5){const d=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=f.length;for(let h=0;h<B;h++)d.push(f.charAt(Math.floor(Math.random()*m)));return d.join("")}const r=G(),p=Cs();ul(()=>{const B=t.at==null?n==null?void 0:n.value.length:t.at,d=A(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((l==null?void 0:l.value)||0)-(B||0)),t.ranges.length-1)),f=A(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const m=a(),h=xm(t.ranges.length-1).map(_=>m+_);n!=null&&n.value&&(n.value.push(...h),Zo(()=>h.forEach(_=>lr(n.value,_)),p))}yl(()=>{if(!r.value)return;const h=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const _ of h){const x=Array.from(_.querySelectorAll(".line")),v=gu(x.length,f.value);if(x.forEach((w,k)=>{const M=v.includes(k+1);w.classList.toggle(Yt,!0),w.classList.toggle("highlighted",M),w.classList.toggle("dishonored",!M)}),t.maxHeight){const w=_.querySelector(".line.highlighted");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:y}=EF();function u(){var d,f;const B=(f=(d=r.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:f.textContent;B&&y(B)}return(B,d)=>{const f=$v,m=Ev;return b(),te("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:as({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[et(B.$slots,"default"),E(Ae).codeCopy?(b(),te("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:E(i)?"Copied":"Copy",onClick:d[0]||(d[0]=h=>u())},[E(i)?(b(),O(f,{key:0,class:"p-2 w-8 h-8"})):(b(),O(m,{key:1,class:"p-2 w-8 h-8"}))],8,Av)):he("v-if",!0)],4)}}}),Oe=I(Mv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Ov=e("h1",null,"什么是Matplotlib?",-1),Pv=e("p",null,"Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。",-1),Tv=e("h2",null,"安装",-1),Iv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"pip "),e("span",{style:{color:"#9DB1C5"}},"install"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#9DB1C5"}},"matplotlib")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"pip "),e("span",{style:{color:"#2B5581"}},"install"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#2B5581"}},"matplotlib")])])])],-1),Rv={__name:"3",setup(s){const t={transition:"fade-out",srcSequence:"./pages/what.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Ov,Pv,Tv,j(o,be({},{ranges:[""]}),{default:S(()=>[Iv]),_:1},16)]),_:1},16)}}},Lv=I(Rv,[["__file","/@slidev/slides/3.md"]]),Nv=e("h1",null,"语法",-1),Hv=e("p",null,"基本语法",-1),qv=e("p",null,"画x和y, 默认是线图",-1),jv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x,y)")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x,y)")])])])],-1),Uv=e("p",null,"用于设置图像的名字",-1),Vv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"()")])])])],-1),zv=e("p",null,"用于设置X,Y轴的标签",-1),Wv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Yv={__name:"4",setup(s){const t={srcSequence:"./pages/what.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Nv,Hv,qv,j(o,be({},{ranges:[""]}),{default:S(()=>[jv]),_:1},16),Uv,j(o,be({},{ranges:[""]}),{default:S(()=>[Vv]),_:1},16),zv,j(o,be({},{ranges:[""]}),{default:S(()=>[Wv]),_:1},16)]),_:1},16)}}},Xv=I(Yv,[["__file","/@slidev/slides/4.md"]]),Kv=e("h1",null,"具体案例",-1),Zv=e("p",null,"在同一窗口绘制如下2条曲线，并加标注。",-1),Gv=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"y"),e("mn",null,"1")]),e("mo",null,"="),e("mn",null,"2"),e("mi",null,"s"),e("mi",null,"i"),e("mi",null,"n"),e("mi",null,"x"),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"y"),e("mn",null,"2")]),e("mo",null,"="),e("mn",null,"2"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("msup",null,[e("mi",null,"x"),e("mn",null,"2")]),e("mo",{stretchy:"false"},")"),e("mo",{separator:"true"},","),e("mi",null,"x"),e("mo",null,"∈"),e("mo",{stretchy:"false"},"["),e("mn",null,"0"),e("mo",{separator:"true"},","),e("mn",null,"3"),e("mi",null,"π"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"1")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mord mathnormal"},"in"),e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∈"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),e("span",{class:"mclose"},"]")])])])],-1),Jv={class:"overflow-auto h-xs"},Qv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"font.sans-serif"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#FFAB70"}},'"SimHei"'),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"axes.unicode_minus"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}},"False"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"b "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pi")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"N "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"500")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"X "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"(a,b,N)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"Y1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(X)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"Y2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(X"),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(X, Y1, linestyle "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"-"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(X, Y2, linestyle "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"--"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"blue"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"time"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"振幅"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#FFAB70"}},"'y=2sin(x)'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#FFAB70"}},"'y=2cos(x^2)'"),e("span",{style:{color:"#BBBBBB"}},"],loc "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"upper right"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"savefig"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"matplotlib_01.png"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"font.sans-serif"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#22863A"}},'"SimHei"'),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"axes.unicode_minus"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"False"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"b "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pi")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"N "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"500")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"X "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"(a,b,N)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"Y1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(X)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"Y2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(X"),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(X, Y1, linestyle "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"-"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(X, Y2, linestyle "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"--"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"blue"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"time"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"振幅"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#22863A"}},"'y=2sin(x)'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#22863A"}},"'y=2cos(x^2)'"),e("span",{style:{color:"#212121"}},"],loc "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"upper right"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"savefig"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"matplotlib_01.png"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),e8={__name:"5",setup(s){const t={srcSequence:"./pages/what.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Kv,Zv,Gv,e("div",Jv,[j(o,be({},{ranges:[""]}),{default:S(()=>[Qv]),_:1},16)])]),_:1},16)}}},s8=I(e8,[["__file","/@slidev/slides/5.md"]]),t8="/math201/slides/matplotlib/matplotlib_01.png",l8=e("h1",null,"图",-1),n8=e("img",{src:t8,class:"h-90 mx-auto"},null,-1),o8={__name:"6",setup(s){const t={srcSequence:"./pages/what.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[l8,n8]),_:1},16))}},a8=I(o8,[["__file","/@slidev/slides/6.md"]]),r8=e("h1",null,"参数方程绘图",-1),c8={__name:"7",setup(s){const t={layout:"center",srcSequence:"./pages/canshu_plot.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[r8]),_:1},16))}},p8=I(c8,[["__file","/@slidev/slides/7.md"]]),i8=e("h1",null,"参数方程绘图：红心",-1),y8=e("p",null,"参数方程",-1),u8=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mo",{fence:"true"},"{"),e("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[e("mtr",null,[e("mtd",null,[e("mstyle",{scriptlevel:"0",displaystyle:"false"},[e("mrow",null,[e("mi",null,"x"),e("mo",null,"="),e("mn",null,"16"),e("mi",null,"s"),e("mi",null,"i"),e("msup",null,[e("mi",null,"n"),e("mn",null,"3")]),e("mo",{stretchy:"false"},"("),e("mi",null,"t"),e("mo",{stretchy:"false"},")")])])])]),e("mtr",null,[e("mtd",null,[e("mstyle",{scriptlevel:"0",displaystyle:"false"},[e("mrow",null,[e("mi",null,"y"),e("mo",null,"="),e("mn",null,"13"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mn",null,"5"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"2"),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mn",null,"2"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"3"),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"4"),e("mi",null,"t"),e("mo",{stretchy:"false"},")")])])])])])]),e("annotation",{encoding:"application/x-tex"}," \\begin{cases} x = 16sin^3(t)\\\\ y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t) \\end{cases} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3em","vertical-align":"-1.25em"}}),e("span",{class:"minner"},[e("span",{class:"mopen delimcenter",style:{top:"0em"}},[e("span",{class:"delimsizing size4"},"{")]),e("span",{class:"mord"},[e("span",{class:"mtable"},[e("span",{class:"col-align-l"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.69em"}},[e("span",{style:{top:"-3.69em"}},[e("span",{class:"pstrut",style:{height:"3.008em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mord"},"16"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"n"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"3")])])])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")")])]),e("span",{style:{top:"-2.25em"}},[e("span",{class:"pstrut",style:{height:"3.008em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mord"},"13"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord"},"5"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"3"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"4"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.19em"}},[e("span")])])])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),B8={class:"overflow-auto h-xs"},d8=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"t "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," np.pi, "),e("span",{style:{color:"#F8F8F8"}},"200"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"16"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"13"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x,y,color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"t "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," np.pi, "),e("span",{style:{color:"#1976D2"}},"200"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"16"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"13"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x,y,color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),f8={__name:"8",setup(s){const t={srcSequence:"./pages/canshu_plot.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[i8,y8,u8,e("div",B8,[j(o,be({},{ranges:[""]}),{default:S(()=>[d8]),_:1},16)])]),_:1},16)}}},m8=I(f8,[["__file","/@slidev/slides/8.md"]]),F8="/math201/slides/matplotlib/matplotlib_02.png",h8=e("h1",null,"红心图",-1),g8=e("img",{src:F8,class:"h-90 mx-auto"},null,-1),_8={__name:"9",setup(s){const t={srcSequence:"./pages/canshu_plot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[h8,g8]),_:1},16))}},b8=I(_8,[["__file","/@slidev/slides/9.md"]]),v8=e("h1",null,"作业:绘制创意心",-1),x8=e("p",null,"例：",-1),w8={class:"overflow-auto h-xs"},E8=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"t "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," np.pi, "),e("span",{style:{color:"#F8F8F8"}},"200"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"16"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"13"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," scale "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"0.8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"0.2"),e("span",{style:{color:"#BBBBBB"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(scale "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," x, scale "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," y, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移')]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#BBBBBB"}},"y, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},", linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"savefig"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"matplotlib_03.png"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"t "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," np.pi, "),e("span",{style:{color:"#1976D2"}},"200"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"16"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"13"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," scale "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"0.8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"0.2"),e("span",{style:{color:"#212121"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(scale "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," x, scale "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," y, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移')]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#212121"}},"y, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},", linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"savefig"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"matplotlib_03.png"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),k8={__name:"10",setup(s){const t={srcSequence:"./pages/canshu_plot.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[v8,x8,e("div",w8,[j(o,be({},{ranges:[""]}),{default:S(()=>[E8]),_:1},16)])]),_:1},16)}}},D8=I(k8,[["__file","/@slidev/slides/10.md"]]),S8="/math201/slides/matplotlib/matplotlib_03.png",C8=e("h1",null,"创意红心图",-1),$8=e("img",{src:S8,class:"h-90 mx-auto"},null,-1),A8={__name:"11",setup(s){const t={srcSequence:"./pages/canshu_plot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[C8,$8]),_:1},16))}},M8=I(A8,[["__file","/@slidev/slides/11.md"]]),O8=e("h1",null,"散点图",-1),P8={__name:"12",setup(s){const t={layout:"center",srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[O8]),_:1},16))}},T8=I(P8,[["__file","/@slidev/slides/12.md"]]),I8=e("h1",null,"散点图",-1),R8=e("h2",null,[c("使用"),e("code",null,"plt.plot"),c("画散点图")],-1),L8=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, "),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'black'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, "),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'black'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),N8={__name:"13",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[I8,R8,j(o,be({},{ranges:[""]}),{default:S(()=>[L8]),_:1},16)]),_:1},16)}}},H8=I(N8,[["__file","/@slidev/slides/13.md"]]),q8="/math201/slides/matplotlib/scatter_01.png",j8=e("img",{src:q8,class:"h-90 mx-auto"},null,-1),U8={__name:"14",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[j8]),_:1},16))}},V8=I(U8,[["__file","/@slidev/slides/14.md"]]),z8="/math201/slides/matplotlib/marks.png",W8=e("p",null,[e("code",null,"plot"),c("支持不同散点的类型，如下案例所示。详细说明请看"),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html",target:"_blank",rel:"noopener"},"MarkrStyle"),c("说明文档。")],-1),Y8=e("img",{src:z8,class:"h-40 mx-auto"},null,-1),X8=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"rng "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"RandomState"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," marker "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},"'.'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"','"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'v'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'^'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'<'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'>'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'1'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'2'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'3'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'4'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'8'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'s'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'p'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'*'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'h'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'H'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'+'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'x'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#FFAB70"}},"'D'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'d'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'|'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'_'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'P'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'X'"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},":")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(rng."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"), rng."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"), marker,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"             label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},`"marker='`),e("span",{style:{color:"#F8F8F8"}},"{0}"),e("span",{style:{color:"#FFAB70"}},`'"`),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"format"),e("span",{style:{color:"#BBBBBB"}},"(marker))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"(numpoints"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlim"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1.8"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"rng "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"RandomState"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," marker "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},"'.'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"','"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'v'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'^'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'<'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'>'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'1'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'2'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'3'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'4'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'8'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'s'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'p'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'*'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'h'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'H'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'+'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'x'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#22863A"}},"'D'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'d'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'|'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'_'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'P'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'X'"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},":")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(rng."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"), rng."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"), marker,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"             label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},`"marker='`),e("span",{style:{color:"#1976D2"}},"{0}"),e("span",{style:{color:"#22863A"}},`'"`),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"format"),e("span",{style:{color:"#212121"}},"(marker))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"(numpoints"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlim"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1.8"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),K8={__name:"15",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[W8,Y8,j(o,be({},{ranges:[""]}),{default:S(()=>[X8]),_:1},16)]),_:1},16)}}},Z8=I(K8,[["__file","/@slidev/slides/15.md"]]),G8="/math201/slides/matplotlib/scatter_02.png",J8=e("img",{src:G8,class:"h-90 mx-auto"},null,-1),Q8={__name:"16",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[J8]),_:1},16))}},ex=I(Q8,[["__file","/@slidev/slides/16.md"]]),sx=e("h1",null,[c("使用"),e("code",null,"plt.scatter"),c("画散点图")],-1),tx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"scatter"),e("span",{style:{color:"#BBBBBB"}},"(x, y, marker"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"scatter"),e("span",{style:{color:"#212121"}},"(x, y, marker"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),lx={__name:"17",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[sx,j(o,be({},{ranges:[""]}),{default:S(()=>[tx]),_:1},16)]),_:1},16)}}},nx=I(lx,[["__file","/@slidev/slides/17.md"]]),ox="/math201/slides/matplotlib/scatter_03.png",ax=e("img",{src:ox,class:"h-90 mx-auto"},null,-1),rx={__name:"18",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[ax]),_:1},16))}},cx=I(rx,[["__file","/@slidev/slides/18.md"]]),px=e("h2",null,"不同散点类型",-1),ix=e("p",null,[e("code",null,"plt.scatter"),c("支持不同散点的类型，如下案例所示。详细说明请看"),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html",target:"_blank",rel:"noopener"},"MarkrStyle"),c("说明文档。")],-1),yx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"rng "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"RandomState"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," marker "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},"'.'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"','"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'v'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'^'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'<'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'>'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'1'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'2'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'3'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'4'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'8'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'s'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'p'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'*'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'h'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'H'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'+'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'x'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#FFAB70"}},"'D'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'d'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'|'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'_'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'P'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'X'"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},":")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(rng."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"), rng."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"), marker,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"             label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},`"marker='`),e("span",{style:{color:"#F8F8F8"}},"{0}"),e("span",{style:{color:"#FFAB70"}},`'"`),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"format"),e("span",{style:{color:"#BBBBBB"}},"(marker))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"(numpoints"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlim"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1.8"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"rng "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"RandomState"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," marker "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},"'.'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"','"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'v'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'^'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'<'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'>'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'1'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'2'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'3'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'4'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'8'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'s'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'p'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'*'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'h'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'H'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'+'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'x'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#22863A"}},"'D'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'d'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'|'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'_'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'P'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'X'"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},":")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(rng."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"), rng."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"), marker,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"             label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},`"marker='`),e("span",{style:{color:"#1976D2"}},"{0}"),e("span",{style:{color:"#22863A"}},`'"`),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"format"),e("span",{style:{color:"#212121"}},"(marker))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"(numpoints"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlim"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1.8"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),ux={__name:"19",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[px,ix,j(o,be({},{ranges:[""]}),{default:S(()=>[yx]),_:1},16)]),_:1},16)}}},Bx=I(ux,[["__file","/@slidev/slides/19.md"]]),dx="/math201/slides/matplotlib/scatter_04.png",fx=e("img",{src:dx,class:"h-90 mx-auto"},null,-1),mx={__name:"20",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[fx]),_:1},16))}},Fx=I(mx,[["__file","/@slidev/slides/20.md"]]),hx=e("h2",null,"点的透明度",-1),gx=e("p",null,[e("code",null,"plt.scatter"),c("和"),e("code",null,"plt.plot"),c("的主要区别在于，"),e("code",null,"plt.scatter"),c("可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。")],-1),_x=e("p",null,"让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：",-1),bx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"rng "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"RandomState"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," rng"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," rng"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"colors "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," rng"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"sizes "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1000"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," rng"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rand"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"scatter"),e("span",{style:{color:"#BBBBBB"}},"(x, y, c"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"colors, s"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"sizes, alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.3"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"            cmap"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'viridis'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"colorbar"),e("span",{style:{color:"#BBBBBB"}},"()"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 显示颜色对比条")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np ")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"rng "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"RandomState"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," rng"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," rng"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"colors "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," rng"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"sizes "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1000"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," rng"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"rand"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"scatter"),e("span",{style:{color:"#212121"}},"(x, y, c"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"colors, s"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"sizes, alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.3"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"            cmap"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'viridis'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"colorbar"),e("span",{style:{color:"#212121"}},"()"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 显示颜色对比条")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),vx={__name:"21",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[hx,gx,_x,j(o,be({},{ranges:[""]}),{default:S(()=>[bx]),_:1},16)]),_:1},16)}}},xx=I(vx,[["__file","/@slidev/slides/21.md"]]),wx="/math201/slides/matplotlib/scatter_05.png",Ex=e("img",{src:wx,class:"h-90 mx-auto"},null,-1),kx={__name:"22",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Ex]),_:1},16))}},Dx=I(kx,[["__file","/@slidev/slides/22.md"]]),Sx=e("h2",null,"点的大小",-1),Cx=e("p",null,[e("code",null,"plt.scatter"),c("函数中可选参数“s”用于增加 matplotlib 中散点的大小。")],-1),$x=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"11"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"11"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"points_size "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"200"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"300"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"400"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"500"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"600"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"700"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"800"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"900"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"1000"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"1100"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"1200"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xticks"),e("span",{style:{color:"#BBBBBB"}},"(np."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"13"),e("span",{style:{color:"#BBBBBB"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"yticks"),e("span",{style:{color:"#BBBBBB"}},"(np."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"13"),e("span",{style:{color:"#BBBBBB"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"scatter"),e("span",{style:{color:"#BBBBBB"}},"(x, y, s"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"points_size, c"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'g'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Scatter Plot with increase in size of scatter points "'),e("span",{style:{color:"#BBBBBB"}},", fontsize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"22"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'x-axis'"),e("span",{style:{color:"#BBBBBB"}},", fontsize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'y-axis'"),e("span",{style:{color:"#BBBBBB"}},", fontsize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"11"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"11"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"points_size "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"200"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"300"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"400"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"500"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"600"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"700"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"800"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"900"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"1000"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"1100"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"1200"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xticks"),e("span",{style:{color:"#212121"}},"(np."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"13"),e("span",{style:{color:"#212121"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"yticks"),e("span",{style:{color:"#212121"}},"(np."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"13"),e("span",{style:{color:"#212121"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"scatter"),e("span",{style:{color:"#212121"}},"(x, y, s"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"points_size, c"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'g'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Scatter Plot with increase in size of scatter points "'),e("span",{style:{color:"#212121"}},", fontsize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"22"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'x-axis'"),e("span",{style:{color:"#212121"}},", fontsize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'y-axis'"),e("span",{style:{color:"#212121"}},", fontsize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Ax={__name:"23",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Sx,Cx,j(o,be({},{ranges:[""]}),{default:S(()=>[$x]),_:1},16)]),_:1},16)}}},Mx=I(Ax,[["__file","/@slidev/slides/23.md"]]),Ox="/math201/slides/matplotlib/scatter_06.png",Px=e("img",{src:Ox,class:"h-90 mx-auto"},null,-1),Tx={__name:"24",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Px]),_:1},16))}},Ix=I(Tx,[["__file","/@slidev/slides/24.md"]]),Rx=e("h1",null,[e("code",null,"plot"),c(" 和 "),e("code",null,"scatter"),c(" 对比")],-1),Lx=e("p",null,[c("性能提醒除了上面说的"),e("code",null,"plt.plot"),c("和"),e("code",null,"plt.scatter"),c("对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，"),e("code",null,"plt.plot"),c("会明显比"),e("code",null,"plt.scatter"),c("的性能要高。造成这个差异的原因是"),e("code",null,"plt.scatter"),c("支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而"),e("code",null,"plt.plot"),c("来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用"),e("code",null,"plt.plot"),c("函数。")],-1),Nx={__name:"25",setup(s){const t={srcSequence:"./pages/scatter.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Rx,Lx]),_:1},16))}},Hx=I(Nx,[["__file","/@slidev/slides/25.md"]]),qx=e("h1",null,"折线图",-1),jx={__name:"26",setup(s){const t={layout:"center",srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[qx]),_:1},16))}},Ux=I(jx,[["__file","/@slidev/slides/26.md"]]),Vx=e("h1",null,"折线图",-1),zx=e("p",null,"折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：",-1),Wx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# Define X and Y variable data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"X-axis"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# add X-axis label")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Y-axis"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# add Y-axis label")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# Define X and Y variable data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"X-axis"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# add X-axis label")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Y-axis"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# add Y-axis label")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Yx={__name:"27",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Vx,zx,j(o,be({},{ranges:[""]}),{default:S(()=>[Wx]),_:1},16)]),_:1},16)}}},Xx=I(Yx,[["__file","/@slidev/slides/27.md"]]),Kx="/math201/slides/matplotlib/matplotlib_11.png",Zx=e("img",{src:Kx,class:"h-90 mx-auto"},null,-1),Gx={__name:"28",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Zx]),_:1},16))}},Jx=I(Gx,[["__file","/@slidev/slides/28.md"]]),Qx="/math201/slides/matplotlib/linestyles.png",ew=e("h2",null,"折线图风格",-1),sw=e("p",null,"matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。",-1),tw=e("h3",null,"风格",-1),lw=e("img",{src:Qx,class:"h-20 mx-auto"},null,-1),nw=e("p",null,"风格有如下几种：",-1),ow=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"code"),e("th",{style:{"text-align":"left"}},"风格")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"-")]),e("td",{style:{"text-align":"left"}},"实线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"--")]),e("td",{style:{"text-align":"left"}},"虚线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"-.")]),e("td",{style:{"text-align":"left"}},"长短点虚线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,":")]),e("td",{style:{"text-align":"left"}},"点线")])])],-1),aw={__name:"29",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Ol("font");return b(),O(ee,K(Y(t)),{default:S(()=>[ew,sw,tw,lw,j(o,{size:"2"},{default:S(()=>[nw,ow]),_:1})]),_:1},16)}}},rw=I(aw,[["__file","/@slidev/slides/29.md"]]),cw=e("h2",null,"案例:",-1),pw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'-'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'--'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'-.'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"':'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},",("),e("span",{style:{color:"#F8F8F8"}},"0.01"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'-'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'--'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'-.'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"':'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},",("),e("span",{style:{color:"#1976D2"}},"0.01"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),iw={__name:"30",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[cw,j(o,be({},{ranges:[""]}),{default:S(()=>[pw]),_:1},16)]),_:1},16)}}},yw=I(iw,[["__file","/@slidev/slides/30.md"]]),uw="/math201/slides/matplotlib/matplotlib_12.png",Bw=e("img",{src:uw,class:"h-90 mx-auto"},null,-1),dw={__name:"31",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Bw]),_:1},16))}},fw=I(dw,[["__file","/@slidev/slides/31.md"]]),mw=e("h2",null,"颜色",-1),Fw=e("p",null,"一些基本颜色的单字符速记符号。",-1),hw=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"code"),e("th",{style:{"text-align":"left"}},"颜色")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"b"),e("td",{style:{"text-align":"left"}},"蓝色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"g"),e("td",{style:{"text-align":"left"}},"绿色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"r"),e("td",{style:{"text-align":"left"}},"红色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"c"),e("td",{style:{"text-align":"left"}},"青色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"m"),e("td",{style:{"text-align":"left"}},"品红")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"y"),e("td",{style:{"text-align":"left"}},"黄色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"k"),e("td",{style:{"text-align":"left"}},"黑色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"w"),e("td",{style:{"text-align":"left"}},"白色")])])],-1),gw={__name:"32",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Ol("font");return b(),O(ee,K(Y(t)),{default:S(()=>[mw,Fw,j(o,{size:"2"},{default:S(()=>[hw]),_:1})]),_:1},16)}}},_w=I(gw,[["__file","/@slidev/slides/32.md"]]),bw=e("p",null,[c("除此之外你还可以用RGB的值来表示颜色。（"),e("a",{href:"https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener"},"什么是RGB？"),c(", "),e("a",{href:"https://www.rapidtables.com/web/color/RGB_Color.html",target:"_blank",rel:"noopener"},"如何获得各种颜色的RGB值?"),c("）")],-1),vw=e("h1",null,"案例1:",-1),xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"b"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"b"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),ww={__name:"33",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[bw,vw,j(o,be({},{ranges:[""]}),{default:S(()=>[xw]),_:1},16)]),_:1},16)}}},Ew=I(ww,[["__file","/@slidev/slides/33.md"]]),kw="/math201/slides/matplotlib/matplotlib_13.png",Dw=e("img",{src:kw,class:"h-90 mx-auto"},null,-1),Sw={__name:"34",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Dw]),_:1},16))}},Cw=I(Sw,[["__file","/@slidev/slides/34.md"]]),$w=e("h2",null,"案例2:",-1),Aw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"#5a1216"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"#5a1216"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Mw={__name:"35",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[$w,j(o,be({},{ranges:[""]}),{default:S(()=>[Aw]),_:1},16)]),_:1},16)}}},Ow=I(Mw,[["__file","/@slidev/slides/35.md"]]),Pw="/math201/slides/matplotlib/matplotlib_14.png",Tw=e("img",{src:Pw,class:"h-90 mx-auto"},null,-1),Iw={__name:"36",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Tw]),_:1},16))}},Rw=I(Iw,[["__file","/@slidev/slides/36.md"]]),Lw=e("h2",null,"如何在一张图上画多根线",-1),Nw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# create data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# plot lines")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"line 1"'),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"-"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(y, x, label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"line 2"'),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"--"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, np."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(x), label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"curve 1"'),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"-."'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, np."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(x), label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"curve 2"'),e("span",{style:{color:"#BBBBBB"}},", linestyle"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'":"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# create data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# plot lines")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"line 1"'),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"-"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(y, x, label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"line 2"'),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"--"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, np."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(x), label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"curve 1"'),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"-."'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, np."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(x), label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"curve 2"'),e("span",{style:{color:"#212121"}},", linestyle"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'":"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Hw={__name:"37",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Lw,j(o,be({},{ranges:[""]}),{default:S(()=>[Nw]),_:1},16)]),_:1},16)}}},qw=I(Hw,[["__file","/@slidev/slides/37.md"]]),jw="/math201/slides/matplotlib/matplotlib_15.png",Uw=e("img",{src:jw,class:"h-90 mx-auto"},null,-1),Vw={__name:"38",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Uw]),_:1},16))}},zw=I(Vw,[["__file","/@slidev/slides/38.md"]]),Ww=e("h2",null,"设置线的透明度",-1),Yw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# create data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# plot")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," i "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2.8"),e("span",{style:{color:"#BBBBBB"}},"], [i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'red'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"3.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4.8"),e("span",{style:{color:"#BBBBBB"}},"], [i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'green'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"5.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6.8"),e("span",{style:{color:"#BBBBBB"}},"], [i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'yellow'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"7.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#BBBBBB"}},"], [i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'blue'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," i "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2.8"),e("span",{style:{color:"#BBBBBB"}},"], ["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#BBBBBB"}},"i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'red'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"3.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"4.8"),e("span",{style:{color:"#BBBBBB"}},"], ["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#BBBBBB"}},"i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'green'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"5.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6.8"),e("span",{style:{color:"#BBBBBB"}},"], ["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#BBBBBB"}},"i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'yellow'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"7.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#BBBBBB"}},"], ["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#BBBBBB"}},"i]"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},", color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'blue'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# create data")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# plot")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," i "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2.8"),e("span",{style:{color:"#212121"}},"], [i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'red'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"3.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4.8"),e("span",{style:{color:"#212121"}},"], [i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'green'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"5.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6.8"),e("span",{style:{color:"#212121"}},"], [i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'yellow'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"7.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#212121"}},"], [i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'blue'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"      ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," i "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2.8"),e("span",{style:{color:"#212121"}},"], ["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#212121"}},"i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'red'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"3.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"4.8"),e("span",{style:{color:"#212121"}},"], ["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#212121"}},"i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'green'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"5.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6.8"),e("span",{style:{color:"#212121"}},"], ["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#212121"}},"i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'yellow'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"7.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#212121"}},"], ["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#212121"}},"i]"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},", color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'blue'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"i)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"      ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),Xw={__name:"39",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Ww,j(o,be({},{ranges:[""]}),{default:S(()=>[Yw]),_:1},16)]),_:1},16)}}},Kw=I(Xw,[["__file","/@slidev/slides/39.md"]]),Zw="/math201/slides/matplotlib/matplotlib_16.png",Gw=e("img",{src:Zw,class:"h-90 mx-auto"},null,-1),Jw={__name:"40",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Gw]),_:1},16))}},Qw=I(Jw,[["__file","/@slidev/slides/40.md"]]),e4=e("h2",null,"改变线的线宽",-1),s4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"places "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},'"A"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"B"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"C"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"D"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"E"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"F"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"G"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"H"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"I"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"J"'),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"literacy_rate "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"98"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"85"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"75"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"45"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"65"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"female_literacy "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"95"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"60"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"85"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"80"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"75"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Places"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Percentage"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(places, literacy_rate, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'b'"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"         linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Literacy rate"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(places, female_literacy, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'r'"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"         linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Female Literacy rate"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"(loc"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'lower left'"),e("span",{style:{color:"#BBBBBB"}},", ncol"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"places "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},'"A"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"B"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"C"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"D"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"E"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"F"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"G"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"H"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"I"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"J"'),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"literacy_rate "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"98"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"85"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"75"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"45"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"65"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"female_literacy "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"95"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"60"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"85"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"80"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"75"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Places"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Percentage"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(places, literacy_rate, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'b'"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"         linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Literacy rate"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(places, female_literacy, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'r'"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"         linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Female Literacy rate"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"(loc"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'lower left'"),e("span",{style:{color:"#212121"}},", ncol"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),t4={__name:"41",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[e4,j(o,be({},{ranges:[""]}),{default:S(()=>[s4]),_:1},16)]),_:1},16)}}},l4=I(t4,[["__file","/@slidev/slides/41.md"]]),n4="/math201/slides/matplotlib/matplotlib_17.png",o4=e("img",{src:n4,class:"h-90 mx-auto"},null,-1),a4={__name:"42",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[o4]),_:1},16))}},r4=I(a4,[["__file","/@slidev/slides/42.md"]]),c4=e("h2",null,"增加Mark",-1),p4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"age "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"40"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"60"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"80"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cardiac_cases "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"15"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"40"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"55"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"55"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"80"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"95"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"survival_chances "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"80"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"75"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"60"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"25"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Age"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Percentage"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(age, cardiac_cases, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'b'"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"         label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Cardiac Cases"'),e("span",{style:{color:"#BBBBBB"}},", marker"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},", markerfacecolor"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'r'"),e("span",{style:{color:"#BBBBBB"}},", markersize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(age, survival_chances, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'y'"),e("span",{style:{color:"#BBBBBB"}},", linewidth"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"         label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Survival Chances"'),e("span",{style:{color:"#BBBBBB"}},", marker"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},", markerfacecolor"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'g'"),e("span",{style:{color:"#BBBBBB"}},", markersize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"(loc"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'lower right'"),e("span",{style:{color:"#BBBBBB"}},", ncol"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"age "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"40"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"60"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"80"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cardiac_cases "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"15"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"40"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"55"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"55"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"80"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"95"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"survival_chances "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"80"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"75"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"60"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"25"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Age"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Percentage"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(age, cardiac_cases, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'b'"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"         label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Cardiac Cases"'),e("span",{style:{color:"#212121"}},", marker"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},", markerfacecolor"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'r'"),e("span",{style:{color:"#212121"}},", markersize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(age, survival_chances, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'y'"),e("span",{style:{color:"#212121"}},", linewidth"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"         label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Survival Chances"'),e("span",{style:{color:"#212121"}},", marker"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},", markerfacecolor"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'g'"),e("span",{style:{color:"#212121"}},", markersize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"(loc"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'lower right'"),e("span",{style:{color:"#212121"}},", ncol"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),i4={__name:"43",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[c4,j(o,be({},{ranges:[""]}),{default:S(()=>[p4]),_:1},16)]),_:1},16)}}},y4=I(i4,[["__file","/@slidev/slides/43.md"]]),u4="/math201/slides/matplotlib/matplotlib_18.png",B4=e("img",{src:u4,class:"h-90 mx-auto"},null,-1),d4={__name:"44",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[B4]),_:1},16))}},f4=I(d4,[["__file","/@slidev/slides/44.md"]]),m4=e("h2",null,"调整坐标范围",-1),F4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1000"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, np."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(x))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlim"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"21"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylim"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1.5"),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1000"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, np."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(x))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlim"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"21"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylim"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1.5"),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}},";")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),h4={__name:"45",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[m4,j(o,be({},{ranges:[""]}),{default:S(()=>[F4]),_:1},16)]),_:1},16)}}},g4=I(h4,[["__file","/@slidev/slides/45.md"]]),_4="/math201/slides/matplotlib/matplotlib_19.png",b4=e("img",{src:_4,class:"h-90 mx-auto"},null,-1),v4={__name:"46",setup(s){const t={srcSequence:"./pages/line.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[b4]),_:1},16))}},x4=I(v4,[["__file","/@slidev/slides/46.md"]]),w4=e("h1",null,"直方图",-1),E4={__name:"47",setup(s){const t={layout:"center",srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[w4]),_:1},16))}},k4=I(E4,[["__file","/@slidev/slides/47.md"]]),D4=e("h1",null,"直方图",-1),S4=e("p",null,"直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率",-1),C4=e("p",null,[c("要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。"),e("code",null,"matplotlib.pyplot.hist()"),c(" 函数用于计算和创建 x 的直方图。")],-1),$4=e("p",null,[c("matplotlib.pyplot.hist(): "),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist",target:"_blank",rel:"noopener"},"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist")],-1),A4={__name:"48",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[D4,S4,C4,$4]),_:1},16))}},M4=I(A4,[["__file","/@slidev/slides/48.md"]]),O4=e("h2",null,"基本案例",-1),P4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hist"),e("span",{style:{color:"#BBBBBB"}},"(y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hist"),e("span",{style:{color:"#212121"}},"(y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),T4={__name:"49",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[O4,j(o,be({},{ranges:[""]}),{default:S(()=>[P4]),_:1},16)]),_:1},16)}}},I4=I(T4,[["__file","/@slidev/slides/49.md"]]),R4="/math201/slides/matplotlib/hist_01.png",L4=e("img",{src:R4,class:"h-90 mx-auto"},null,-1),N4={__name:"50",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[L4]),_:1},16))}},H4=I(N4,[["__file","/@slidev/slides/50.md"]]),q4=e("h1",null,"一维直方图",-1),j4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"seed"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"23685752"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"N_points "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"10000")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"n_bins "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"20")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"(N_points)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},".8"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10000"),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"25")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"fig"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," axs "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplots"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"                        figsize "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},"),")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"                        tight_layout "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#79B8FF"}},"True"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"axs"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hist"),e("span",{style:{color:"#BBBBBB"}},"(x, bins "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," n_bins)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"seed"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"23685752"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"N_points "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"10000")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"n_bins "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"20")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"(N_points)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},".8"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10000"),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"25")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"fig"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," axs "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplots"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},",")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"                        figsize "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},"),")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"                        tight_layout "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"True"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"axs"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hist"),e("span",{style:{color:"#212121"}},"(x, bins "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," n_bins)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),U4={__name:"51",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[q4,j(o,be({},{ranges:[""]}),{default:S(()=>[j4]),_:1},16)]),_:1},16)}}},V4=I(U4,[["__file","/@slidev/slides/51.md"]]),z4="/math201/slides/matplotlib/hist_02.png",W4=e("img",{src:z4,class:"h-90 mx-auto"},null,-1),Y4={__name:"52",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[W4]),_:1},16))}},X4=I(Y4,[["__file","/@slidev/slides/52.md"]]),K4=e("h2",null,"设置透明度和边框颜色",-1),Z4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"series1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"500"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"series2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"randn"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"400"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hist"),e("span",{style:{color:"#BBBBBB"}},"(series1, label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'series1'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},".8"),e("span",{style:{color:"#BBBBBB"}},", edgecolor"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'red'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hist"),e("span",{style:{color:"#BBBBBB"}},"(series2, label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'series2'"),e("span",{style:{color:"#BBBBBB"}},", alpha"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"0.7"),e("span",{style:{color:"#BBBBBB"}},", edgecolor"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'yellow'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"series1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"500"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"series2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"randn"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"400"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hist"),e("span",{style:{color:"#212121"}},"(series1, label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'series1'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},".8"),e("span",{style:{color:"#212121"}},", edgecolor"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'red'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hist"),e("span",{style:{color:"#212121"}},"(series2, label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'series2'"),e("span",{style:{color:"#212121"}},", alpha"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"0.7"),e("span",{style:{color:"#212121"}},", edgecolor"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'yellow'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),G4={__name:"53",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[K4,j(o,be({},{ranges:[""]}),{default:S(()=>[Z4]),_:1},16)]),_:1},16)}}},J4=I(G4,[["__file","/@slidev/slides/53.md"]]),Q4="/math201/slides/matplotlib/hist_03.png",e6=e("img",{src:Q4,class:"h-90 mx-auto"},null,-1),s6={__name:"54",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[e6]),_:1},16))}},t6=I(s6,[["__file","/@slidev/slides/54.md"]]),l6=e("h1",null,"二维直方图",-1),n6=e("p",null,[c("正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的"),e("code",null,"plt.hist2d"),c("函数")],-1),o6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"mean "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cov "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"multivariate_normal"),e("span",{style:{color:"#BBBBBB"}},"(mean, cov, "),e("span",{style:{color:"#F8F8F8"}},"10000"),e("span",{style:{color:"#BBBBBB"}},")."),e("span",{style:{color:"#B392F0"}},"T")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hist2d"),e("span",{style:{color:"#BBBBBB"}},"(x, y, bins"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},", cmap"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'Blues'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cb "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"colorbar"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cb"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_label"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'counts in bin'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"mean "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cov "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"multivariate_normal"),e("span",{style:{color:"#212121"}},"(mean, cov, "),e("span",{style:{color:"#1976D2"}},"10000"),e("span",{style:{color:"#212121"}},")."),e("span",{style:{color:"#24292EFF"}},"T")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hist2d"),e("span",{style:{color:"#212121"}},"(x, y, bins"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},", cmap"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'Blues'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cb "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"colorbar"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cb"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_label"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'counts in bin'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),a6={__name:"55",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[l6,n6,j(o,be({},{ranges:[""]}),{default:S(()=>[o6]),_:1},16)]),_:1},16)}}},r6=I(a6,[["__file","/@slidev/slides/55.md"]]),c6="/math201/slides/matplotlib/hist_04.png",p6=e("img",{src:c6,class:"h-90 mx-auto"},null,-1),i6={__name:"56",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[p6]),_:1},16))}},y6=I(i6,[["__file","/@slidev/slides/56.md"]]),u6=e("h2",null,"plt.hexbin：六角形分桶",-1),B6=e("p",null,[c("刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了"),e("code",null,"plt.hexbin"),c("函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：")],-1),d6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"mean "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cov "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"random"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"multivariate_normal"),e("span",{style:{color:"#BBBBBB"}},"(mean, cov, "),e("span",{style:{color:"#F8F8F8"}},"10000"),e("span",{style:{color:"#BBBBBB"}},")."),e("span",{style:{color:"#B392F0"}},"T")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"hexbin"),e("span",{style:{color:"#BBBBBB"}},"(x, y, gridsize"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},", cmap"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'Blues'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"cb "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"colorbar"),e("span",{style:{color:"#BBBBBB"}},"(label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'count in bin'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"mean "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cov "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"random"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"multivariate_normal"),e("span",{style:{color:"#212121"}},"(mean, cov, "),e("span",{style:{color:"#1976D2"}},"10000"),e("span",{style:{color:"#212121"}},")."),e("span",{style:{color:"#24292EFF"}},"T")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"hexbin"),e("span",{style:{color:"#212121"}},"(x, y, gridsize"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},", cmap"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'Blues'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"cb "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"colorbar"),e("span",{style:{color:"#212121"}},"(label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'count in bin'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),f6={__name:"57",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[u6,B6,j(o,be({},{ranges:[""]}),{default:S(()=>[d6]),_:1},16)]),_:1},16)}}},m6=I(f6,[["__file","/@slidev/slides/57.md"]]),F6="/math201/slides/matplotlib/hist_05.png",h6=e("img",{src:F6,class:"h-90 mx-auto"},null,-1),g6={__name:"58",setup(s){const t={srcSequence:"./pages/histogram.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[h6]),_:1},16))}},_6=I(g6,[["__file","/@slidev/slides/58.md"]]),b6=e("h1",null,"条形图",-1),v6={__name:"59",setup(s){const t={layout:"center",srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[b6]),_:1},16))}},x6=I(v6,[["__file","/@slidev/slides/59.md"]]),w6=e("h1",null,"条形图",-1),E6=e("p",null,"条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值",-1),k6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," matplotlib "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),D6={__name:"60",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[w6,E6,j(o,be({},{ranges:[""]}),{default:S(()=>[k6]),_:1},16)]),_:1},16)}}},S6=I(D6,[["__file","/@slidev/slides/60.md"]]),C6="/math201/slides/matplotlib/bar_01.png",$6=e("img",{src:C6,class:"h-90 mx-auto"},null,-1),A6={__name:"61",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[$6]),_:1},16))}},M6=I(A6,[["__file","/@slidev/slides/61.md"]]),O6=e("h1",null,"水平和竖直画条形图",-1),P6=e("p",null,[e("code",null,"plt.bar"),c("用于竖直的条形图。")],-1),T6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#FFAB70"}},"'one'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'two'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'three'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'four'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'five'"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"24"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"35"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"67"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"pen sold"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"price"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'" Vertical bar graph"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#22863A"}},"'one'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'two'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'three'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'four'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'five'"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"24"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"35"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"67"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"pen sold"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"price"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'" Vertical bar graph"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),I6={__name:"62",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[O6,P6,j(o,be({},{ranges:[""]}),{default:S(()=>[T6]),_:1},16)]),_:1},16)}}},R6=I(I6,[["__file","/@slidev/slides/62.md"]]),L6="/math201/slides/matplotlib/bar_02.png",N6=e("img",{src:L6,class:"h-90 mx-auto"},null,-1),H6={__name:"63",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[N6]),_:1},16))}},q6=I(H6,[["__file","/@slidev/slides/63.md"]]),j6=e("h2",null,[e("code",null,"plt.barh"),c("用于水平的条形图。")],-1),U6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#FFAB70"}},"'one'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'two'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'three'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'four'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'five'"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"24"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"35"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"67"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"barh"),e("span",{style:{color:"#BBBBBB"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"pen sold"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"price"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'" Vertical bar graph"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#22863A"}},"'one'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'two'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'three'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'four'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'five'"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"24"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"35"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"67"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"barh"),e("span",{style:{color:"#212121"}},"(x, y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"pen sold"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"price"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}},"  ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'" Vertical bar graph"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),V6={__name:"64",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[j6,j(o,be({},{ranges:[""]}),{default:S(()=>[U6]),_:1},16)]),_:1},16)}}},z6=I(V6,[["__file","/@slidev/slides/64.md"]]),W6="/math201/slides/matplotlib/bar_03.png",Y6=e("img",{src:W6,class:"h-90 mx-auto"},null,-1),X6={__name:"65",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[Y6]),_:1},16))}},K6=I(X6,[["__file","/@slidev/slides/65.md"]]),Z6=e("h1",null,"条形堆积图",-1),G6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},"'A'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'B'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'C'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'D'"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"20"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"25"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"15"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"25"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y3 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"15"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"19"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y4 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"array"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"29"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"13"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"19"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y1, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'r'"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Round 1"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y2, bottom"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"y1, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'b'"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Round 2"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y3, bottom"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"y1"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}},"y2, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'y'"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Round 2"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(x, y4, bottom"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"y1"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}},"y2"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}},"y3, color"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'g'"),e("span",{style:{color:"#BBBBBB"}},", label"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"Round 2"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Teams"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Score"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"Scores by Teams in 4 Rounds"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},"'A'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'B'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'C'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'D'"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"20"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"25"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"15"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"25"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y3 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"15"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"19"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y4 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"array"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"29"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"13"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"19"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y1, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'r'"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Round 1"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y2, bottom"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"y1, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'b'"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Round 2"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y3, bottom"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"y1"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}},"y2, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'y'"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Round 2"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(x, y4, bottom"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"y1"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}},"y2"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}},"y3, color"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'g'"),e("span",{style:{color:"#212121"}},", label"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"Round 2"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Teams"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Score"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"Scores by Teams in 4 Rounds"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),J6={__name:"66",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[Z6,j(o,be({},{ranges:[""]}),{default:S(()=>[G6]),_:1},16)]),_:1},16)}}},Q6=I(J6,[["__file","/@slidev/slides/66.md"]]),eE="/math201/slides/matplotlib/bar_04.png",sE=e("img",{src:eE,class:"h-90 mx-auto"},null,-1),tE={__name:"67",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[sE]),_:1},16))}},lE=I(tE,[["__file","/@slidev/slides/67.md"]]),nE=e("h1",null,"多个条形图",-1),oE={class:"overflow-auto h-xs"},aE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# set width of bar")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"barWidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0.25")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"fig "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplots"),e("span",{style:{color:"#BBBBBB"}},"(figsize "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# set height of bar")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"IT "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"12"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"22"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ECE "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"28"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"16"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"CSE "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"29"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"24"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"25"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"17"),e("span",{style:{color:"#B392F0"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# Set position of bar on X axis")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"br1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#B392F0"}},"len"),e("span",{style:{color:"#BBBBBB"}},"(IT))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"br2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," barWidth "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," br1]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"br3 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [x "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," barWidth "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," br2]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# Make the plot")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(br1, IT, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'r'"),e("span",{style:{color:"#BBBBBB"}},", width "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"        edgecolor "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'grey'"),e("span",{style:{color:"#BBBBBB"}},", label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'IT'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(br2, ECE, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'g'"),e("span",{style:{color:"#BBBBBB"}},", width "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"        edgecolor "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'grey'"),e("span",{style:{color:"#BBBBBB"}},", label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'ECE'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"bar"),e("span",{style:{color:"#BBBBBB"}},"(br3, CSE, color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'b'"),e("span",{style:{color:"#BBBBBB"}},", width "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"        edgecolor "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'grey'"),e("span",{style:{color:"#BBBBBB"}},", label "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'CSE'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# Adding Xticks")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'Branch'"),e("span",{style:{color:"#BBBBBB"}},", fontweight "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'bold'"),e("span",{style:{color:"#BBBBBB"}},", fontsize "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"15"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'Students passed'"),e("span",{style:{color:"#BBBBBB"}},", fontweight "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'bold'"),e("span",{style:{color:"#BBBBBB"}},", fontsize "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"15"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xticks"),e("span",{style:{color:"#BBBBBB"}},"([r "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," barWidth "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#BBBBBB"}}," r "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#B392F0"}},"range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#B392F0"}},"len"),e("span",{style:{color:"#BBBBBB"}},"(IT))],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"        ["),e("span",{style:{color:"#FFAB70"}},"'2015'"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#FFAB70"}},"'2016'"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#FFAB70"}},"'2017'"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#FFAB70"}},"'2018'"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#FFAB70"}},"'2019'"),e("span",{style:{color:"#BBBBBB"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"legend"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# set width of bar")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"barWidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0.25")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"fig "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplots"),e("span",{style:{color:"#212121"}},"(figsize "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},"))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# set height of bar")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"IT "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"12"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"22"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ECE "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"28"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"16"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"CSE "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"29"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"24"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"25"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"17"),e("span",{style:{color:"#24292EFF"}},"]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# Set position of bar on X axis")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"br1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#6F42C1"}},"len"),e("span",{style:{color:"#212121"}},"(IT))")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"br2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," barWidth "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," br1]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"br3 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [x "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," barWidth "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," br2]")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# Make the plot")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(br1, IT, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'r'"),e("span",{style:{color:"#212121"}},", width "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"        edgecolor "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'grey'"),e("span",{style:{color:"#212121"}},", label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'IT'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(br2, ECE, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'g'"),e("span",{style:{color:"#212121"}},", width "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"        edgecolor "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'grey'"),e("span",{style:{color:"#212121"}},", label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'ECE'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"bar"),e("span",{style:{color:"#212121"}},"(br3, CSE, color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'b'"),e("span",{style:{color:"#212121"}},", width "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," barWidth,")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"        edgecolor "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'grey'"),e("span",{style:{color:"#212121"}},", label "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'CSE'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# Adding Xticks")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'Branch'"),e("span",{style:{color:"#212121"}},", fontweight "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'bold'"),e("span",{style:{color:"#212121"}},", fontsize "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"15"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'Students passed'"),e("span",{style:{color:"#212121"}},", fontweight "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'bold'"),e("span",{style:{color:"#212121"}},", fontsize "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"15"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xticks"),e("span",{style:{color:"#212121"}},"([r "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," barWidth "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#212121"}}," r "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#6F42C1"}},"len"),e("span",{style:{color:"#212121"}},"(IT))],")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"        ["),e("span",{style:{color:"#22863A"}},"'2015'"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#22863A"}},"'2016'"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#22863A"}},"'2017'"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#22863A"}},"'2018'"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#22863A"}},"'2019'"),e("span",{style:{color:"#212121"}},"])")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}}," ")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"legend"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),rE={__name:"68",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[nE,e("div",oE,[j(o,be({},{ranges:[""]}),{default:S(()=>[aE]),_:1},16)])]),_:1},16)}}},cE=I(rE,[["__file","/@slidev/slides/68.md"]]),pE="/math201/slides/matplotlib/bar_05.png",iE=e("img",{src:pE,class:"h-90 mx-auto"},null,-1),yE={__name:"69",setup(s){const t={srcSequence:"./pages/bar.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[iE]),_:1},16))}},uE=I(yE,[["__file","/@slidev/slides/69.md"]]),BE=e("h1",null,"多子图",-1),dE={__name:"70",setup(s){const t={layout:"center",srcSequence:"./pages/subplot.md"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[BE]),_:1},16))}},fE=I(dE,[["__file","/@slidev/slides/70.md"]]),mE=e("h1",null,"图形窗口的分割",-1),FE=e("p",null,"matplotlib.pyplot.subplot 方法",-1),hE=e("p",null,"该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引",-1),gE={class:"overflow-auto h-xs"},_E=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"font.sans-serif"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#FFAB70"}},'"SimHei"'),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"axes.unicode_minus"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}},"False"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"t "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," np.pi, "),e("span",{style:{color:"#F8F8F8"}},"0.01"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(t "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplot"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(t, y, linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"blue"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"sin"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"theta "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}},"np.pi, "),e("span",{style:{color:"#F8F8F8"}},"200"),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#6B737C"}},"# 参数离散取点")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x0 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y0 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"# 椭圆中心")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"b "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"# 椭圆长短轴半径")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," x0 "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," a "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(theta)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," y0 "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," b "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(theta)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplot"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", color "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#FFAB70"}},'"red"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"椭圆"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"# 子图标题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"0.01"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"exp"),e("span",{style:{color:"#BBBBBB"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplot"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"exp"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"10"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sqrt"),e("span",{style:{color:"#BBBBBB"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"subplot"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x, y, linewidth "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"sqrt"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"suptitle"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"分窗口绘制子图"'),e("span",{style:{color:"#BBBBBB"}},")"),e("span",{style:{color:"#6B737C"}},"#图的总标题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"font.sans-serif"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#22863A"}},'"SimHei"'),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"axes.unicode_minus"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"False"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"t "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," np.pi, "),e("span",{style:{color:"#1976D2"}},"0.01"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(t "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplot"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(t, y, linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"blue"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"sin"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"theta "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}},"np.pi, "),e("span",{style:{color:"#1976D2"}},"200"),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#C2C3C5"}},"# 参数离散取点")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x0 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y0 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"# 椭圆中心")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"b "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"# 椭圆长短轴半径")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," x0 "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," a "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(theta)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," y0 "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," b "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(theta)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplot"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", color "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#22863A"}},'"red"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"椭圆"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"# 子图标题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"0.01"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"exp"),e("span",{style:{color:"#212121"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplot"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"exp"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"10"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sqrt"),e("span",{style:{color:"#212121"}},"(x)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"subplot"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x, y, linewidth "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"sqrt"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"suptitle"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"分窗口绘制子图"'),e("span",{style:{color:"#212121"}},")"),e("span",{style:{color:"#C2C3C5"}},"#图的总标题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),bE={__name:"71",setup(s){const t={srcSequence:"./pages/subplot.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[mE,FE,hE,e("div",gE,[j(o,be({},{ranges:[""]}),{default:S(()=>[_E]),_:1},16)])]),_:1},16)}}},vE=I(bE,[["__file","/@slidev/slides/71.md"]]),xE="/math201/slides/matplotlib/matplotlib_04.png",wE=e("h1",null,"多子图",-1),EE=e("p",null,"例：",-1),kE=e("img",{src:xE,class:"h-90 mx-auto"},null,-1),DE={__name:"72",setup(s){const t={srcSequence:"./pages/subplot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[wE,EE,kE]),_:1},16))}},SE=I(DE,[["__file","/@slidev/slides/72.md"]]),CE=e("h1",null,"3D图像",-1),$E=e("p",null,"Matplotlib 可以支持绘制3D的图形，通过关键字参数projection='3d’来创建3D视图, 三维 axes 激活后，我们可以在上面绘制不同的三维图表类型。",-1),AE={class:"overflow-auto h-xs"},ME=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," mpl_toolkits"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"mplot3d "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," Axes3D")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"font.sans-serif"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#FFAB70"}},'"SimHei"'),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"rcParams"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"axes.unicode_minus"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#79B8FF"}},"False"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"fig "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"figure"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," fig"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"add_subplot"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"111"),e("span",{style:{color:"#BBBBBB"}},", projection"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'3d'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"t "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"arange"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#BBBBBB"}}," np.pi, "),e("span",{style:{color:"#F8F8F8"}},"0.1"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"X "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"Y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"cos"),e("span",{style:{color:"#BBBBBB"}},"(t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"Z "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," t")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(X, Y, Z)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_title"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'绘制螺旋线'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'sin(t)'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'cos(t)'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"savefig"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"matplotlib_05.png"'),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," mpl_toolkits"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"mplot3d "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," Axes3D")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"font.sans-serif"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#22863A"}},'"SimHei"'),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"#设置字体")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"rcParams"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"axes.unicode_minus"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#1976D2"}},"False"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"#该语句解决图像中的“-”负号的乱码问题")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"fig "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"figure"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," fig"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"add_subplot"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"111"),e("span",{style:{color:"#212121"}},", projection"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'3d'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"t "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"arange"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#212121"}}," np.pi, "),e("span",{style:{color:"#1976D2"}},"0.1"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"X "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"Y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"cos"),e("span",{style:{color:"#212121"}},"(t)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"Z "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," t")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(X, Y, Z)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_title"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'绘制螺旋线'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'sin(t)'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'cos(t)'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"savefig"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"matplotlib_05.png"'),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),OE={__name:"73",setup(s){const t={srcSequence:"./pages/3D_plot.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[CE,$E,e("div",AE,[j(o,be({},{ranges:[""]}),{default:S(()=>[ME]),_:1},16)])]),_:1},16)}}},PE=I(OE,[["__file","/@slidev/slides/73.md"]]),TE="/math201/slides/matplotlib/matplotlib_05.png",IE=e("h1",null,"3D螺旋线",-1),RE=e("img",{src:TE,class:"h-90 mx-auto"},null,-1),LE={__name:"74",setup(s){const t={srcSequence:"./pages/3D_plot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[IE,RE]),_:1},16))}},NE=I(LE,[["__file","/@slidev/slides/74.md"]]),HE=e("h1",null,"三维曲面绘图",-1),qE=e("p",null,"meshgrid() 首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式 为：X, Y = np.meshgrid(x, y)",-1),jE={class:"overflow-auto h-xs"},UE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," numpy "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"fig "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"figure"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," fig"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"add_subplot"),e("span",{style:{color:"#BBBBBB"}},"(projection"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'3d'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," f("),e("span",{style:{color:"#FF9800"}},"x"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"y"),e("span",{style:{color:"#B392F0"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"sin"),e("span",{style:{color:"#BBBBBB"}},"(np."),e("span",{style:{color:"#B392F0"}},"sqrt"),e("span",{style:{color:"#BBBBBB"}},"(x "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#BBBBBB"}}," y "),e("span",{style:{color:"#F97583"}},"**"),e("span",{style:{color:"#BBBBBB"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},"))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"linspace"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"30"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"X"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," Y "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," np"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"meshgrid"),e("span",{style:{color:"#BBBBBB"}},"(x, y)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"Z "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," f"),e("span",{style:{color:"#BBBBBB"}},"(X, Y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"contour3D"),e("span",{style:{color:"#BBBBBB"}},"(X, Y, Z, "),e("span",{style:{color:"#F8F8F8"}},"50"),e("span",{style:{color:"#BBBBBB"}},", cmap"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},"'binary'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_xlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'x'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_ylabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'y'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ax"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"set_zlabel"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},"'z'"),e("span",{style:{color:"#BBBBBB"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"show"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," matplotlib"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#24292EFF"}},"pyplot "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," plt")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," numpy "),e("span",{style:{color:"#D32F2F"}},"as"),e("span",{style:{color:"#24292EFF"}}," np")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"fig "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"figure"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," fig"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"add_subplot"),e("span",{style:{color:"#212121"}},"(projection"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'3d'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"f"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"x"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"y"),e("span",{style:{color:"#24292EFF"}},"):")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"sin"),e("span",{style:{color:"#212121"}},"(np."),e("span",{style:{color:"#6F42C1"}},"sqrt"),e("span",{style:{color:"#212121"}},"(x "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#212121"}}," y "),e("span",{style:{color:"#D32F2F"}},"**"),e("span",{style:{color:"#212121"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},"))")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"linspace"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"30"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"X"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," Y "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," np"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"meshgrid"),e("span",{style:{color:"#212121"}},"(x, y)")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"Z "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"f"),e("span",{style:{color:"#212121"}},"(X, Y)")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"contour3D"),e("span",{style:{color:"#212121"}},"(X, Y, Z, "),e("span",{style:{color:"#1976D2"}},"50"),e("span",{style:{color:"#212121"}},", cmap"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},"'binary'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_xlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'x'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_ylabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'y'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ax"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"set_zlabel"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},"'z'"),e("span",{style:{color:"#212121"}},")")]),c(`
`),e("span",{class:"line"}),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1),VE={__name:"75",setup(s){const t={srcSequence:"./pages/3D_plot.md"};return C(T),(l,n)=>{const o=Oe;return b(),O(ee,K(Y(t)),{default:S(()=>[HE,qE,e("div",jE,[j(o,be({},{ranges:[""]}),{default:S(()=>[UE]),_:1},16)])]),_:1},16)}}},zE=I(VE,[["__file","/@slidev/slides/75.md"]]),WE="/math201/slides/matplotlib/matplotlib_06.png",YE=e("h1",null,"三维曲面图",-1),XE=e("img",{src:WE,class:"h-90 mx-auto"},null,-1),KE={__name:"76",setup(s){const t={srcSequence:"./pages/3D_plot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),{default:S(()=>[YE,XE]),_:1},16))}},ZE=I(KE,[["__file","/@slidev/slides/76.md"]]),GE={__name:"77",setup(s){const t={srcSequence:"./pages/3D_plot.md"};return C(T),(l,n)=>(b(),O(ee,K(Y(t)),null,16))}},JE=I(GE,[["__file","/@slidev/slides/77.md"]]),QE=e("h1",null,"Thanks",-1),e7={__name:"78",setup(s){const t={layout:"center"};return C(T),(l,n)=>(b(),O(Nt,K(Y(t)),{default:S(()=>[QE]),_:1},16))}},s7=I(e7,[["__file","/@slidev/slides/78.md"]]),t7=[{path:"1",name:"page-1",component:fv,meta:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Matplotlib 基础",slide:{raw:`---
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

# Matplotlib 基础

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

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"Matplotlib 基础",level:1,content:`# Matplotlib 基础

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
</div>`,frontmatter:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Matplotlib 基础"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:40,noteHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:_v,meta:{layout:"center",title:"什么是Matplotlib?",srcSequence:"./pages/what.md",slide:{raw:null,title:"什么是Matplotlib?",level:1,content:"# 什么是Matplotlib?",frontmatter:{layout:"center",title:"什么是Matplotlib?",srcSequence:"./pages/what.md"},index:1,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`---
layout: center
---

# 什么是Matplotlib?
`,title:"什么是Matplotlib?",level:1,content:"# 什么是Matplotlib?",frontmatter:{layout:"center",title:"什么是Matplotlib?"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/what.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Lv,meta:{transition:"fade-out",srcSequence:"./pages/what.md",slide:{raw:`---
transition: fade-out
---

# 什么是Matplotlib?

Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。

## 安装

\`\`\`bash
pip install matplotlib
\`\`\`
`,title:"什么是Matplotlib?",level:1,content:`# 什么是Matplotlib?

Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。

## 安装

\`\`\`bash
pip install matplotlib
\`\`\``,frontmatter:{transition:"fade-out",srcSequence:"./pages/what.md"},index:2,start:6,end:20,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`---
transition: fade-out
---

# 什么是Matplotlib?

Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。

## 安装

\`\`\`bash
pip install matplotlib
\`\`\`
`,title:"什么是Matplotlib?",level:1,content:`# 什么是Matplotlib?

Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。

## 安装

\`\`\`bash
pip install matplotlib
\`\`\``,frontmatter:{transition:"fade-out"},index:1,start:6,end:20},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Xv,meta:{srcSequence:"./pages/what.md",slide:{raw:`
# 语法

基本语法

画x和y, 默认是线图

\`\`\`py
plot(x,y)
\`\`\`

用于设置图像的名字

\`\`\`python
plt.title()
\`\`\`

用于设置X,Y轴的标签

\`\`\`python
plt.xlabel()
plt.ylabel()
\`\`\`
`,title:"语法",level:1,content:`# 语法

基本语法

画x和y, 默认是线图

\`\`\`py
plot(x,y)
\`\`\`

用于设置图像的名字

\`\`\`python
plt.title()
\`\`\`

用于设置X,Y轴的标签

\`\`\`python
plt.xlabel()
plt.ylabel()
\`\`\``,frontmatter:{srcSequence:"./pages/what.md"},index:3,start:21,end:45,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`
# 语法

基本语法

画x和y, 默认是线图

\`\`\`py
plot(x,y)
\`\`\`

用于设置图像的名字

\`\`\`python
plt.title()
\`\`\`

用于设置X,Y轴的标签

\`\`\`python
plt.xlabel()
plt.ylabel()
\`\`\`
`,title:"语法",level:1,content:`# 语法

基本语法

画x和y, 默认是线图

\`\`\`py
plot(x,y)
\`\`\`

用于设置图像的名字

\`\`\`python
plt.title()
\`\`\`

用于设置X,Y轴的标签

\`\`\`python
plt.xlabel()
plt.ylabel()
\`\`\``,frontmatter:{},index:2,start:21,end:45},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:s8,meta:{srcSequence:"./pages/what.md",slide:{raw:`
# 具体案例

在同一窗口绘制如下2条曲线，并加标注。

$y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]$


<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

a = 0
b = 3 * np.pi
N = 500
X = np.linspace(a,b,N)

Y1 = 2 * np.sin(X)
Y2 = np.cos(X**2)
plt.plot(X, Y1, linestyle = "-", linewidth = 2, color = "red")
plt.plot(X, Y2, linestyle = "--", linewidth = 2, color = "blue")
plt.xlabel("time")
plt.ylabel("振幅")
plt.legend(['y=2sin(x)','y=2cos(x^2)'],loc = "upper right")
plt.savefig("matplotlib_01.png")
plt.show()

\`\`\`

</div>`,title:"具体案例",level:1,content:`# 具体案例

在同一窗口绘制如下2条曲线，并加标注。

$y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]$


<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

a = 0
b = 3 * np.pi
N = 500
X = np.linspace(a,b,N)

Y1 = 2 * np.sin(X)
Y2 = np.cos(X**2)
plt.plot(X, Y1, linestyle = "-", linewidth = 2, color = "red")
plt.plot(X, Y2, linestyle = "--", linewidth = 2, color = "blue")
plt.xlabel("time")
plt.ylabel("振幅")
plt.legend(['y=2sin(x)','y=2cos(x^2)'],loc = "upper right")
plt.savefig("matplotlib_01.png")
plt.show()

\`\`\`

</div>`,frontmatter:{srcSequence:"./pages/what.md"},index:4,start:46,end:83,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`
# 具体案例

在同一窗口绘制如下2条曲线，并加标注。

$y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]$


<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

a = 0
b = 3 * np.pi
N = 500
X = np.linspace(a,b,N)

Y1 = 2 * np.sin(X)
Y2 = np.cos(X**2)
plt.plot(X, Y1, linestyle = "-", linewidth = 2, color = "red")
plt.plot(X, Y2, linestyle = "--", linewidth = 2, color = "blue")
plt.xlabel("time")
plt.ylabel("振幅")
plt.legend(['y=2sin(x)','y=2cos(x^2)'],loc = "upper right")
plt.savefig("matplotlib_01.png")
plt.show()

\`\`\`

</div>`,title:"具体案例",level:1,content:`# 具体案例

在同一窗口绘制如下2条曲线，并加标注。

$y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]$


<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

a = 0
b = 3 * np.pi
N = 500
X = np.linspace(a,b,N)

Y1 = 2 * np.sin(X)
Y2 = np.cos(X**2)
plt.plot(X, Y1, linestyle = "-", linewidth = 2, color = "red")
plt.plot(X, Y2, linestyle = "--", linewidth = 2, color = "blue")
plt.xlabel("time")
plt.ylabel("振幅")
plt.legend(['y=2sin(x)','y=2cos(x^2)'],loc = "upper right")
plt.savefig("matplotlib_01.png")
plt.show()

\`\`\`

</div>`,frontmatter:{},index:3,start:46,end:83},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:a8,meta:{srcSequence:"./pages/what.md",slide:{raw:`
# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">
`,title:"图",level:1,content:`# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/what.md"},index:5,start:84,end:89,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`
# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">
`,title:"图",level:1,content:`# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">`,frontmatter:{},index:4,start:84,end:89},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:p8,meta:{layout:"center",title:"参数方程绘图",srcSequence:"./pages/canshu_plot.md",slide:{raw:null,title:"参数方程绘图",level:1,content:"# 参数方程绘图",frontmatter:{layout:"center",title:"参数方程绘图",srcSequence:"./pages/canshu_plot.md"},index:6,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`---
layout: center
---

# 参数方程绘图
`,title:"参数方程绘图",level:1,content:"# 参数方程绘图",frontmatter:{layout:"center",title:"参数方程绘图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/canshu_plot.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:m8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
# 参数方程绘图：红心

参数方程

$$
    \\begin{cases}
        x = 16sin^3(t)\\\\
        y = 13cos(t) - 5cos(2t) - 2cos(3t) -  cos(4t)
    \\end{cases}
$$

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x,y,color = "red", linewidth = 1.5)

plt.show()

\`\`\`

</div>
`,title:"参数方程绘图：红心",level:1,content:`# 参数方程绘图：红心

参数方程

$$
    \\begin{cases}
        x = 16sin^3(t)\\\\
        y = 13cos(t) - 5cos(2t) - 2cos(3t) -  cos(4t)
    \\end{cases}
$$

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x,y,color = "red", linewidth = 1.5)

plt.show()

\`\`\`

</div>`,frontmatter:{srcSequence:"./pages/canshu_plot.md"},index:7,start:7,end:37,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`
# 参数方程绘图：红心

参数方程

$$
    \\begin{cases}
        x = 16sin^3(t)\\\\
        y = 13cos(t) - 5cos(2t) - 2cos(3t) -  cos(4t)
    \\end{cases}
$$

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x,y,color = "red", linewidth = 1.5)

plt.show()

\`\`\`

</div>
`,title:"参数方程绘图：红心",level:1,content:`# 参数方程绘图：红心

参数方程

$$
    \\begin{cases}
        x = 16sin^3(t)\\\\
        y = 13cos(t) - 5cos(2t) - 2cos(3t) -  cos(4t)
    \\end{cases}
$$

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x,y,color = "red", linewidth = 1.5)

plt.show()

\`\`\`

</div>`,frontmatter:{},index:1,start:7,end:37},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:b8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`

# 红心图

<img src = "/matplotlib_02.png" class = "h-90 mx-auto">
`,title:"红心图",level:1,content:`# 红心图

<img src = "/matplotlib_02.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/canshu_plot.md"},index:8,start:38,end:44,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`

# 红心图

<img src = "/matplotlib_02.png" class = "h-90 mx-auto">
`,title:"红心图",level:1,content:`# 红心图

<img src = "/matplotlib_02.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:38,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:D8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
# 作业:绘制创意心

例：

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x, y, color = "red", linewidth = 1.5)
for scale in np.arange(0.2,0.8,0.2):
    plt.plot(scale * x, scale * y, color = "red", linewidth = 1.5)
# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移
plt.plot(x, -y, color = "red", linewidth = 1.5)

plt.savefig("matplotlib_03.png")
plt.show()

\`\`\`
</div>
`,title:"作业:绘制创意心",level:1,content:`# 作业:绘制创意心

例：

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x, y, color = "red", linewidth = 1.5)
for scale in np.arange(0.2,0.8,0.2):
    plt.plot(scale * x, scale * y, color = "red", linewidth = 1.5)
# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移
plt.plot(x, -y, color = "red", linewidth = 1.5)

plt.savefig("matplotlib_03.png")
plt.show()

\`\`\`
</div>`,frontmatter:{srcSequence:"./pages/canshu_plot.md"},index:9,start:45,end:72,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`
# 作业:绘制创意心

例：

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x, y, color = "red", linewidth = 1.5)
for scale in np.arange(0.2,0.8,0.2):
    plt.plot(scale * x, scale * y, color = "red", linewidth = 1.5)
# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移
plt.plot(x, -y, color = "red", linewidth = 1.5)

plt.savefig("matplotlib_03.png")
plt.show()

\`\`\`
</div>
`,title:"作业:绘制创意心",level:1,content:`# 作业:绘制创意心

例：

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 2 * np.pi, 200)
x = 16 * np.sin(t) ** 3
y = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
plt.plot(x, y, color = "red", linewidth = 1.5)
for scale in np.arange(0.2,0.8,0.2):
    plt.plot(scale * x, scale * y, color = "red", linewidth = 1.5)
# plt.plot(x + 8 , y, color = "red", linewidth = 1.5) # 向右平移
plt.plot(x, -y, color = "red", linewidth = 1.5)

plt.savefig("matplotlib_03.png")
plt.show()

\`\`\`
</div>`,frontmatter:{},index:3,start:45,end:72},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:M8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">
`,title:"创意红心图",level:1,content:`# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/canshu_plot.md"},index:10,start:73,end:78,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`
# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">
`,title:"创意红心图",level:1,content:`# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">`,frontmatter:{},index:4,start:73,end:78},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:T8,meta:{layout:"center",title:"散点图",srcSequence:"./pages/scatter.md",slide:{raw:null,title:"散点图",level:1,content:"# 散点图",frontmatter:{layout:"center",title:"散点图",srcSequence:"./pages/scatter.md"},index:11,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`---
layout: center
---

# 散点图
`,title:"散点图",level:1,content:"# 散点图",frontmatter:{layout:"center",title:"散点图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/scatter.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:H8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`

# 散点图

## 使用\`plt.plot\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.plot(x, y, 'o', color='black')

plt.show()
\`\`\`
`,title:"散点图",level:1,content:`# 散点图

## 使用\`plt.plot\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.plot(x, y, 'o', color='black')

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:12,start:7,end:25,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`

# 散点图

## 使用\`plt.plot\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.plot(x, y, 'o', color='black')

plt.show()
\`\`\`
`,title:"散点图",level:1,content:`# 散点图

## 使用\`plt.plot\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.plot(x, y, 'o', color='black')

plt.show()
\`\`\``,frontmatter:{},index:1,start:7,end:25},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:V8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:13,start:26,end:29,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_01.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:26,end:29},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Z8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
\`plot\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

<img src = "/marks.png" class = "h-40 mx-auto">

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\`
`,content:`\`plot\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

<img src = "/marks.png" class = "h-40 mx-auto">

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:14,start:30,end:49,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
\`plot\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

<img src = "/marks.png" class = "h-40 mx-auto">

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\`
`,content:`\`plot\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

<img src = "/marks.png" class = "h-40 mx-auto">

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\``,frontmatter:{},index:3,start:30,end:49},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:ex,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:15,start:50,end:53,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_02.png" class = "h-90 mx-auto">',frontmatter:{},index:4,start:50,end:53},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:nx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
# 使用\`plt.scatter\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.scatter(x, y, marker='o')

plt.show()
\`\`\`
`,title:"使用`plt.scatter`画散点图",level:1,content:`# 使用\`plt.scatter\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.scatter(x, y, marker='o')

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:16,start:54,end:69,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
# 使用\`plt.scatter\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.scatter(x, y, marker='o')

plt.show()
\`\`\`
`,title:"使用`plt.scatter`画散点图",level:1,content:`# 使用\`plt.scatter\`画散点图

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

x = np.linspace(0, 10, 30)
y = np.sin(x)

plt.scatter(x, y, marker='o')

plt.show()
\`\`\``,frontmatter:{},index:5,start:54,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:cx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`

<img src = "/scatter_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:17,start:70,end:74,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`

<img src = "/scatter_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_03.png" class = "h-90 mx-auto">',frontmatter:{},index:6,start:70,end:74},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Bx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
## 不同散点类型

\`plt.scatter\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\`
`,title:"不同散点类型",level:2,content:`## 不同散点类型

\`plt.scatter\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:18,start:75,end:94,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
## 不同散点类型

\`plt.scatter\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\`
`,title:"不同散点类型",level:2,content:`## 不同散点类型

\`plt.scatter\`支持不同散点的类型，如下案例所示。详细说明请看[MarkrStyle](https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html)说明文档。

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
for marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:
    plt.plot(rng.rand(10), rng.rand(10), marker,
             label="marker='{0}'".format(marker))
plt.legend(numpoints=1)
plt.xlim(0, 1.8)

plt.show()
\`\`\``,frontmatter:{},index:7,start:75,end:94},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Fx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:19,start:95,end:98,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_04.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:95,end:98},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:xx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
## 点的透明度

\`plt.scatter\`和\`plt.plot\`的主要区别在于，\`plt.scatter\`可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。

让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
x = rng.randn(100)
y = rng.randn(100)
colors = rng.rand(100)
sizes = 1000 * rng.rand(100)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.3,
            cmap='viridis')
plt.colorbar()  # 显示颜色对比条

plt.show()
\`\`\`
`,title:"点的透明度",level:2,content:`## 点的透明度

\`plt.scatter\`和\`plt.plot\`的主要区别在于，\`plt.scatter\`可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。

让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
x = rng.randn(100)
y = rng.randn(100)
colors = rng.rand(100)
sizes = 1000 * rng.rand(100)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.3,
            cmap='viridis')
plt.colorbar()  # 显示颜色对比条

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:20,start:99,end:123,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
## 点的透明度

\`plt.scatter\`和\`plt.plot\`的主要区别在于，\`plt.scatter\`可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。

让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
x = rng.randn(100)
y = rng.randn(100)
colors = rng.rand(100)
sizes = 1000 * rng.rand(100)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.3,
            cmap='viridis')
plt.colorbar()  # 显示颜色对比条

plt.show()
\`\`\`
`,title:"点的透明度",level:2,content:`## 点的透明度

\`plt.scatter\`和\`plt.plot\`的主要区别在于，\`plt.scatter\`可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。

让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：

\`\`\`python
from matplotlib import pyplot as plt
import numpy as np 

rng = np.random.RandomState(0)
x = rng.randn(100)
y = rng.randn(100)
colors = rng.rand(100)
sizes = 1000 * rng.rand(100)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.3,
            cmap='viridis')
plt.colorbar()  # 显示颜色对比条

plt.show()
\`\`\``,frontmatter:{},index:9,start:99,end:123},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Dx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_05.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:21,start:124,end:127,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_05.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_05.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:124,end:127},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Mx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
## 点的大小
\`plt.scatter\`函数中可选参数“s”用于增加 matplotlib 中散点的大小。

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
x = [1,2,3,4,5,6,7,8,9,10,11,12]
y = [1,2,3,4,5,6,7,8,9,10,11,12]
points_size = [100,200,300,400,500,600,700,800,900,1000,1100,1200]
  
plt.xticks(np.arange(13))
plt.yticks(np.arange(13))
  
plt.scatter(x, y, s=points_size, c='g')
  
plt.title("Scatter Plot with increase in size of scatter points ", fontsize=22)
  
plt.xlabel('x-axis', fontsize=20)
plt.ylabel('y-axis', fontsize=20)
  
plt.show()
\`\`\`
`,title:"点的大小",level:2,content:`## 点的大小
\`plt.scatter\`函数中可选参数“s”用于增加 matplotlib 中散点的大小。

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
x = [1,2,3,4,5,6,7,8,9,10,11,12]
y = [1,2,3,4,5,6,7,8,9,10,11,12]
points_size = [100,200,300,400,500,600,700,800,900,1000,1100,1200]
  
plt.xticks(np.arange(13))
plt.yticks(np.arange(13))
  
plt.scatter(x, y, s=points_size, c='g')
  
plt.title("Scatter Plot with increase in size of scatter points ", fontsize=22)
  
plt.xlabel('x-axis', fontsize=20)
plt.ylabel('y-axis', fontsize=20)
  
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/scatter.md"},index:22,start:128,end:153,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
## 点的大小
\`plt.scatter\`函数中可选参数“s”用于增加 matplotlib 中散点的大小。

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
x = [1,2,3,4,5,6,7,8,9,10,11,12]
y = [1,2,3,4,5,6,7,8,9,10,11,12]
points_size = [100,200,300,400,500,600,700,800,900,1000,1100,1200]
  
plt.xticks(np.arange(13))
plt.yticks(np.arange(13))
  
plt.scatter(x, y, s=points_size, c='g')
  
plt.title("Scatter Plot with increase in size of scatter points ", fontsize=22)
  
plt.xlabel('x-axis', fontsize=20)
plt.ylabel('y-axis', fontsize=20)
  
plt.show()
\`\`\`
`,title:"点的大小",level:2,content:`## 点的大小
\`plt.scatter\`函数中可选参数“s”用于增加 matplotlib 中散点的大小。

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
x = [1,2,3,4,5,6,7,8,9,10,11,12]
y = [1,2,3,4,5,6,7,8,9,10,11,12]
points_size = [100,200,300,400,500,600,700,800,900,1000,1100,1200]
  
plt.xticks(np.arange(13))
plt.yticks(np.arange(13))
  
plt.scatter(x, y, s=points_size, c='g')
  
plt.title("Scatter Plot with increase in size of scatter points ", fontsize=22)
  
plt.xlabel('x-axis', fontsize=20)
plt.ylabel('y-axis', fontsize=20)
  
plt.show()
\`\`\``,frontmatter:{},index:11,start:128,end:153},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Ix,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_06.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_06.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:23,start:154,end:157,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_06.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_06.png" class = "h-90 mx-auto">',frontmatter:{},index:12,start:154,end:157},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Hx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:"\n# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",title:"`plot` 和 `scatter` 对比",level:1,content:"# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",frontmatter:{srcSequence:"./pages/scatter.md"},index:24,start:158,end:162,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:"\n# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",title:"`plot` 和 `scatter` 对比",level:1,content:"# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",frontmatter:{},index:13,start:158,end:162},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Ux,meta:{layout:"center",title:"折线图",srcSequence:"./pages/line.md",slide:{raw:null,title:"折线图",level:1,content:"# 折线图",frontmatter:{layout:"center",title:"折线图",srcSequence:"./pages/line.md"},index:25,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`---
layout: center
---

# 折线图
`,title:"折线图",level:1,content:"# 折线图",frontmatter:{layout:"center",title:"折线图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/line.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Xx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
# 折线图

折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
  
# Define X and Y variable data
x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y)
plt.xlabel("X-axis")  # add X-axis label
plt.ylabel("Y-axis")  # add Y-axis label

plt.show()
\`\`\`
`,title:"折线图",level:1,content:`# 折线图

折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
  
# Define X and Y variable data
x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y)
plt.xlabel("X-axis")  # add X-axis label
plt.ylabel("Y-axis")  # add Y-axis label

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:26,start:7,end:28,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
# 折线图

折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
  
# Define X and Y variable data
x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y)
plt.xlabel("X-axis")  # add X-axis label
plt.ylabel("Y-axis")  # add Y-axis label

plt.show()
\`\`\`
`,title:"折线图",level:1,content:`# 折线图

折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
  
# Define X and Y variable data
x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y)
plt.xlabel("X-axis")  # add X-axis label
plt.ylabel("Y-axis")  # add Y-axis label

plt.show()
\`\`\``,frontmatter:{},index:1,start:7,end:28},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Jx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_11.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_11.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:27,start:29,end:32,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_11.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_11.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:29,end:32},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:rw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 折线图风格
matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。

### 风格

<img src = "/linestyles.png" class = "h-20 mx-auto">

<font size = 2>

风格有如下几种：

| code | 风格 |
|:--------------------|:--------------------|
| \`-\` | 实线 |
| \`--\` | 虚线 |
| \`-.\` | 长短点虚线 |
| \`:\` | 点线 |

</font>




`,title:"折线图风格",level:2,content:`## 折线图风格
matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。

### 风格

<img src = "/linestyles.png" class = "h-20 mx-auto">

<font size = 2>

风格有如下几种：

| code | 风格 |
|:--------------------|:--------------------|
| \`-\` | 实线 |
| \`--\` | 虚线 |
| \`-.\` | 长短点虚线 |
| \`:\` | 点线 |

</font>`,frontmatter:{srcSequence:"./pages/line.md"},index:28,start:33,end:58,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 折线图风格
matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。

### 风格

<img src = "/linestyles.png" class = "h-20 mx-auto">

<font size = 2>

风格有如下几种：

| code | 风格 |
|:--------------------|:--------------------|
| \`-\` | 实线 |
| \`--\` | 虚线 |
| \`-.\` | 长短点虚线 |
| \`:\` | 点线 |

</font>




`,title:"折线图风格",level:2,content:`## 折线图风格
matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。

### 风格

<img src = "/linestyles.png" class = "h-20 mx-auto">

<font size = 2>

风格有如下几种：

| code | 风格 |
|:--------------------|:--------------------|
| \`-\` | 实线 |
| \`--\` | 虚线 |
| \`-.\` | 长短点虚线 |
| \`:\` | 点线 |

</font>`,frontmatter:{},index:3,start:33,end:58},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:yw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 案例:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2
  
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2

plt.plot(x, x + 4, linestyle='-')
plt.plot(x, x + 5, linestyle='--')
plt.plot(x, x + 6, linestyle='-.')
plt.plot(x, x + 7, linestyle=':')
plt.plot(x, x + 8, linestyle=(0,(0.01,2)))

plt.show()

plt.show()
\`\`\`
`,title:"案例:",level:2,content:`## 案例:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2
  
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2

plt.plot(x, x + 4, linestyle='-')
plt.plot(x, x + 5, linestyle='--')
plt.plot(x, x + 6, linestyle='-.')
plt.plot(x, x + 7, linestyle=':')
plt.plot(x, x + 8, linestyle=(0,(0.01,2)))

plt.show()

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:29,start:59,end:86,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 案例:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2
  
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2

plt.plot(x, x + 4, linestyle='-')
plt.plot(x, x + 5, linestyle='--')
plt.plot(x, x + 6, linestyle='-.')
plt.plot(x, x + 7, linestyle=':')
plt.plot(x, x + 8, linestyle=(0,(0.01,2)))

plt.show()

plt.show()
\`\`\`
`,title:"案例:",level:2,content:`## 案例:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2
  
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = x*2

plt.plot(x, x + 4, linestyle='-')
plt.plot(x, x + 5, linestyle='--')
plt.plot(x, x + 6, linestyle='-.')
plt.plot(x, x + 7, linestyle=':')
plt.plot(x, x + 8, linestyle=(0,(0.01,2)))

plt.show()

plt.show()
\`\`\``,frontmatter:{},index:4,start:59,end:86},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:fw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_12.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_12.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:30,start:87,end:90,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_12.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_12.png" class = "h-90 mx-auto">',frontmatter:{},index:5,start:87,end:90},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:_w,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 颜色
一些基本颜色的单字符速记符号。
<font size = 2  >

| code | 颜色 |
|:--------------------|:--------------------|
| b | 蓝色 |
| g | 绿色 |
| r | 红色 |
| c | 青色 |
| m | 品红 |
| y | 黄色 |
| k | 黑色 |
| w | 白色 |

</font>
`,title:"颜色",level:2,content:`## 颜色
一些基本颜色的单字符速记符号。
<font size = 2  >

| code | 颜色 |
|:--------------------|:--------------------|
| b | 蓝色 |
| g | 绿色 |
| r | 红色 |
| c | 青色 |
| m | 品红 |
| y | 黄色 |
| k | 黑色 |
| w | 白色 |

</font>`,frontmatter:{srcSequence:"./pages/line.md"},index:31,start:91,end:109,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 颜色
一些基本颜色的单字符速记符号。
<font size = 2  >

| code | 颜色 |
|:--------------------|:--------------------|
| b | 蓝色 |
| g | 绿色 |
| r | 红色 |
| c | 青色 |
| m | 品红 |
| y | 黄色 |
| k | 黑色 |
| w | 白色 |

</font>
`,title:"颜色",level:2,content:`## 颜色
一些基本颜色的单字符速记符号。
<font size = 2  >

| code | 颜色 |
|:--------------------|:--------------------|
| b | 蓝色 |
| g | 绿色 |
| r | 红色 |
| c | 青色 |
| m | 品红 |
| y | 黄色 |
| k | 黑色 |
| w | 白色 |

</font>`,frontmatter:{},index:6,start:91,end:109},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Ew,meta:{srcSequence:"./pages/line.md",slide:{raw:`
除此之外你还可以用RGB的值来表示颜色。（[什么是RGB？](https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F), [如何获得各种颜色的RGB值?](https://www.rapidtables.com/web/color/RGB_Color.html)）

# 案例1:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="b")

plt.show()
\`\`\`
`,title:"案例1:",level:1,content:`除此之外你还可以用RGB的值来表示颜色。（[什么是RGB？](https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F), [如何获得各种颜色的RGB值?](https://www.rapidtables.com/web/color/RGB_Color.html)）

# 案例1:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="b")

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:32,start:110,end:127,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
除此之外你还可以用RGB的值来表示颜色。（[什么是RGB？](https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F), [如何获得各种颜色的RGB值?](https://www.rapidtables.com/web/color/RGB_Color.html)）

# 案例1:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="b")

plt.show()
\`\`\`
`,title:"案例1:",level:1,content:`除此之外你还可以用RGB的值来表示颜色。（[什么是RGB？](https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F), [如何获得各种颜色的RGB值?](https://www.rapidtables.com/web/color/RGB_Color.html)）

# 案例1:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="b")

plt.show()
\`\`\``,frontmatter:{},index:7,start:110,end:127},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Cw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_13.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_13.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:33,start:128,end:131,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_13.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_13.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:128,end:131},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Ow,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 案例2:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="#5a1216")

plt.show()
\`\`\`
`,title:"案例2:",level:2,content:`## 案例2:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="#5a1216")

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:34,start:132,end:147,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 案例2:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="#5a1216")

plt.show()
\`\`\`
`,title:"案例2:",level:2,content:`## 案例2:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4])
y = x*2
  
plt.plot(x, y, color="#5a1216")

plt.show()
\`\`\``,frontmatter:{},index:9,start:132,end:147},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Rw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_14.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_14.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:35,start:148,end:151,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_14.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_14.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:148,end:151},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:qw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 如何在一张图上画多根线

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1,2,3,4,5]
y = [3,3,3,3,3]
  
# plot lines
plt.plot(x, y, label = "line 1", linestyle="-")
plt.plot(y, x, label = "line 2", linestyle="--")
plt.plot(x, np.sin(x), label = "curve 1", linestyle="-.")
plt.plot(x, np.cos(x), label = "curve 2", linestyle=":")
plt.legend()
plt.show()
\`\`\`
`,title:"如何在一张图上画多根线",level:2,content:`## 如何在一张图上画多根线

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1,2,3,4,5]
y = [3,3,3,3,3]
  
# plot lines
plt.plot(x, y, label = "line 1", linestyle="-")
plt.plot(y, x, label = "line 2", linestyle="--")
plt.plot(x, np.sin(x), label = "curve 1", linestyle="-.")
plt.plot(x, np.cos(x), label = "curve 2", linestyle=":")
plt.legend()
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:36,start:152,end:172,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 如何在一张图上画多根线

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1,2,3,4,5]
y = [3,3,3,3,3]
  
# plot lines
plt.plot(x, y, label = "line 1", linestyle="-")
plt.plot(y, x, label = "line 2", linestyle="--")
plt.plot(x, np.sin(x), label = "curve 1", linestyle="-.")
plt.plot(x, np.cos(x), label = "curve 2", linestyle=":")
plt.legend()
plt.show()
\`\`\`
`,title:"如何在一张图上画多根线",level:2,content:`## 如何在一张图上画多根线

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1,2,3,4,5]
y = [3,3,3,3,3]
  
# plot lines
plt.plot(x, y, label = "line 1", linestyle="-")
plt.plot(y, x, label = "line 2", linestyle="--")
plt.plot(x, np.sin(x), label = "curve 1", linestyle="-.")
plt.plot(x, np.cos(x), label = "curve 2", linestyle=":")
plt.legend()
plt.show()
\`\`\``,frontmatter:{},index:11,start:152,end:172},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:zw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_15.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_15.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:37,start:173,end:176,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_15.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_15.png" class = "h-90 mx-auto">',frontmatter:{},index:12,start:173,end:176},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Kw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 设置线的透明度

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1, 2, 3, 4, 5]
  
# plot
for i in range(10):
    plt.plot([1, 2.8], [i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
for i in range(10):
    plt.plot([1, 2.8], [-i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [-i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [-i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [-i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
plt.show()
\`\`\`
`,title:"设置线的透明度",level:2,content:`## 设置线的透明度

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1, 2, 3, 4, 5]
  
# plot
for i in range(10):
    plt.plot([1, 2.8], [i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
for i in range(10):
    plt.plot([1, 2.8], [-i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [-i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [-i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [-i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:38,start:177,end:203,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 设置线的透明度

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1, 2, 3, 4, 5]
  
# plot
for i in range(10):
    plt.plot([1, 2.8], [i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
for i in range(10):
    plt.plot([1, 2.8], [-i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [-i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [-i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [-i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
plt.show()
\`\`\`
`,title:"设置线的透明度",level:2,content:`## 设置线的透明度

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
  
# create data
x = [1, 2, 3, 4, 5]
  
# plot
for i in range(10):
    plt.plot([1, 2.8], [i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
for i in range(10):
    plt.plot([1, 2.8], [-i]*2, linewidth=5, color='red', alpha=0.1*i)
    plt.plot([3.1, 4.8], [-i]*2, linewidth=5, color='green', alpha=0.1*i)
    plt.plot([5.1, 6.8], [-i]*2, linewidth=5, color='yellow', alpha=0.1*i)
    plt.plot([7.1, 8.8], [-i]*2, linewidth=5, color='blue', alpha=0.1*i)
      
plt.show()
\`\`\``,frontmatter:{},index:13,start:177,end:203},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:Qw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_16.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_16.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:39,start:204,end:207,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_16.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_16.png" class = "h-90 mx-auto">',frontmatter:{},index:14,start:204,end:207},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:l4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 改变线的线宽

\`\`\`python

import matplotlib.pyplot as plt
  
places = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
literacy_rate = [100, 98, 90, 85, 75, 50, 30, 45, 65, 70]
female_literacy = [95, 100, 50, 60, 85, 80, 75, 99, 70, 30]
  
plt.xlabel("Places")
plt.ylabel("Percentage")
  
plt.plot(places, literacy_rate, color='b',
         linewidth=6, label="Literacy rate")
  
plt.plot(places, female_literacy, color='r',
         linewidth=4, label="Female Literacy rate")
  
plt.legend(loc='lower left', ncol=1)

plt.show()
\`\`\`
`,title:"改变线的线宽",level:2,content:`## 改变线的线宽

\`\`\`python

import matplotlib.pyplot as plt
  
places = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
literacy_rate = [100, 98, 90, 85, 75, 50, 30, 45, 65, 70]
female_literacy = [95, 100, 50, 60, 85, 80, 75, 99, 70, 30]
  
plt.xlabel("Places")
plt.ylabel("Percentage")
  
plt.plot(places, literacy_rate, color='b',
         linewidth=6, label="Literacy rate")
  
plt.plot(places, female_literacy, color='r',
         linewidth=4, label="Female Literacy rate")
  
plt.legend(loc='lower left', ncol=1)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:40,start:208,end:233,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 改变线的线宽

\`\`\`python

import matplotlib.pyplot as plt
  
places = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
literacy_rate = [100, 98, 90, 85, 75, 50, 30, 45, 65, 70]
female_literacy = [95, 100, 50, 60, 85, 80, 75, 99, 70, 30]
  
plt.xlabel("Places")
plt.ylabel("Percentage")
  
plt.plot(places, literacy_rate, color='b',
         linewidth=6, label="Literacy rate")
  
plt.plot(places, female_literacy, color='r',
         linewidth=4, label="Female Literacy rate")
  
plt.legend(loc='lower left', ncol=1)

plt.show()
\`\`\`
`,title:"改变线的线宽",level:2,content:`## 改变线的线宽

\`\`\`python

import matplotlib.pyplot as plt
  
places = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
literacy_rate = [100, 98, 90, 85, 75, 50, 30, 45, 65, 70]
female_literacy = [95, 100, 50, 60, 85, 80, 75, 99, 70, 30]
  
plt.xlabel("Places")
plt.ylabel("Percentage")
  
plt.plot(places, literacy_rate, color='b',
         linewidth=6, label="Literacy rate")
  
plt.plot(places, female_literacy, color='r',
         linewidth=4, label="Female Literacy rate")
  
plt.legend(loc='lower left', ncol=1)

plt.show()
\`\`\``,frontmatter:{},index:15,start:208,end:233},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:r4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_17.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_17.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:41,start:234,end:237,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_17.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_17.png" class = "h-90 mx-auto">',frontmatter:{},index:16,start:234,end:237},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:y4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 增加Mark

\`\`\`python
import matplotlib.pyplot as plt
  
age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
cardiac_cases = [5, 15, 20, 40, 55, 55, 70, 80, 90, 95]
survival_chances = [99, 99, 90, 90, 80, 75, 60, 50, 30, 25]
  
plt.xlabel("Age")
plt.ylabel("Percentage")
  
plt.plot(age, cardiac_cases, color='b', linewidth=2,
         label="Cardiac Cases", marker='o', markerfacecolor='r', markersize=12)
  
plt.plot(age, survival_chances, color='y', linewidth=3,
         label="Survival Chances", marker='o', markerfacecolor='g', markersize=12)
  
plt.legend(loc='lower right', ncol=1)

plt.show()
\`\`\`
`,title:"增加Mark",level:2,content:`## 增加Mark

\`\`\`python
import matplotlib.pyplot as plt
  
age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
cardiac_cases = [5, 15, 20, 40, 55, 55, 70, 80, 90, 95]
survival_chances = [99, 99, 90, 90, 80, 75, 60, 50, 30, 25]
  
plt.xlabel("Age")
plt.ylabel("Percentage")
  
plt.plot(age, cardiac_cases, color='b', linewidth=2,
         label="Cardiac Cases", marker='o', markerfacecolor='r', markersize=12)
  
plt.plot(age, survival_chances, color='y', linewidth=3,
         label="Survival Chances", marker='o', markerfacecolor='g', markersize=12)
  
plt.legend(loc='lower right', ncol=1)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:42,start:238,end:262,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 增加Mark

\`\`\`python
import matplotlib.pyplot as plt
  
age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
cardiac_cases = [5, 15, 20, 40, 55, 55, 70, 80, 90, 95]
survival_chances = [99, 99, 90, 90, 80, 75, 60, 50, 30, 25]
  
plt.xlabel("Age")
plt.ylabel("Percentage")
  
plt.plot(age, cardiac_cases, color='b', linewidth=2,
         label="Cardiac Cases", marker='o', markerfacecolor='r', markersize=12)
  
plt.plot(age, survival_chances, color='y', linewidth=3,
         label="Survival Chances", marker='o', markerfacecolor='g', markersize=12)
  
plt.legend(loc='lower right', ncol=1)

plt.show()
\`\`\`
`,title:"增加Mark",level:2,content:`## 增加Mark

\`\`\`python
import matplotlib.pyplot as plt
  
age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
cardiac_cases = [5, 15, 20, 40, 55, 55, 70, 80, 90, 95]
survival_chances = [99, 99, 90, 90, 80, 75, 60, 50, 30, 25]
  
plt.xlabel("Age")
plt.ylabel("Percentage")
  
plt.plot(age, cardiac_cases, color='b', linewidth=2,
         label="Cardiac Cases", marker='o', markerfacecolor='r', markersize=12)
  
plt.plot(age, survival_chances, color='y', linewidth=3,
         label="Survival Chances", marker='o', markerfacecolor='g', markersize=12)
  
plt.legend(loc='lower right', ncol=1)

plt.show()
\`\`\``,frontmatter:{},index:17,start:238,end:262},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:f4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_18.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_18.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:43,start:263,end:266,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_18.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_18.png" class = "h-90 mx-auto">',frontmatter:{},index:18,start:263,end:266},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:g4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
## 调整坐标范围

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 20, 1000)

plt.plot(x, np.sin(x))

plt.xlim(-1, 21)
plt.ylim(-1.5, 1.5);

plt.show()
\`\`\`
`,title:"调整坐标范围",level:2,content:`## 调整坐标范围

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 20, 1000)

plt.plot(x, np.sin(x))

plt.xlim(-1, 21)
plt.ylim(-1.5, 1.5);

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/line.md"},index:44,start:267,end:284,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
## 调整坐标范围

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 20, 1000)

plt.plot(x, np.sin(x))

plt.xlim(-1, 21)
plt.ylim(-1.5, 1.5);

plt.show()
\`\`\`
`,title:"调整坐标范围",level:2,content:`## 调整坐标范围

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 20, 1000)

plt.plot(x, np.sin(x))

plt.xlim(-1, 21)
plt.ylim(-1.5, 1.5);

plt.show()
\`\`\``,frontmatter:{},index:19,start:267,end:284},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:x4,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_19.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_19.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:45,start:285,end:288,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_19.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_19.png" class = "h-90 mx-auto">',frontmatter:{},index:20,start:285,end:288},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:k4,meta:{layout:"center",title:"直方图",srcSequence:"./pages/histogram.md",slide:{raw:null,title:"直方图",level:1,content:"# 直方图",frontmatter:{layout:"center",title:"直方图",srcSequence:"./pages/histogram.md"},index:46,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`---
layout: center
---

# 直方图
`,title:"直方图",level:1,content:"# 直方图",frontmatter:{layout:"center",title:"直方图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/histogram.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:M4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
# 直方图

直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率

要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。\`matplotlib.pyplot.hist()\` 函数用于计算和创建 x 的直方图。

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist
`,title:"直方图",level:1,content:`# 直方图

直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率

要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。\`matplotlib.pyplot.hist()\` 函数用于计算和创建 x 的直方图。

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist`,frontmatter:{srcSequence:"./pages/histogram.md"},index:47,start:7,end:16,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
# 直方图

直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率

要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。\`matplotlib.pyplot.hist()\` 函数用于计算和创建 x 的直方图。

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist
`,title:"直方图",level:1,content:`# 直方图

直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率

要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。\`matplotlib.pyplot.hist()\` 函数用于计算和创建 x 的直方图。

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist`,frontmatter:{},index:1,start:7,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:I4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
## 基本案例

\`\`\`python
from matplotlib import pyplot as plt
 
y = [10, 5, 8, 4, 2]
 
plt.hist(y)

plt.show()
\`\`\`
`,title:"基本案例",level:2,content:`## 基本案例

\`\`\`python
from matplotlib import pyplot as plt
 
y = [10, 5, 8, 4, 2]
 
plt.hist(y)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/histogram.md"},index:48,start:17,end:30,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
## 基本案例

\`\`\`python
from matplotlib import pyplot as plt
 
y = [10, 5, 8, 4, 2]
 
plt.hist(y)

plt.show()
\`\`\`
`,title:"基本案例",level:2,content:`## 基本案例

\`\`\`python
from matplotlib import pyplot as plt
 
y = [10, 5, 8, 4, 2]
 
plt.hist(y)

plt.show()
\`\`\``,frontmatter:{},index:2,start:17,end:30},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:H4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:49,start:31,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_01.png" class = "h-90 mx-auto">',frontmatter:{},index:3,start:31,end:34},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:V4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
# 一维直方图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
 
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
axs.hist(x, bins = n_bins)

plt.show()
\`\`\`
`,title:"一维直方图",level:1,content:`# 一维直方图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
 
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
axs.hist(x, bins = n_bins)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/histogram.md"},index:50,start:35,end:58,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
# 一维直方图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
 
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
axs.hist(x, bins = n_bins)

plt.show()
\`\`\`
`,title:"一维直方图",level:1,content:`# 一维直方图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(23685752)
N_points = 10000
n_bins = 20
 
x = np.random.randn(N_points)
y = .8 ** x + np.random.randn(10000) + 25
 
fig, axs = plt.subplots(1, 1,
                        figsize =(10, 7),
                        tight_layout = True)
 
axs.hist(x, bins = n_bins)

plt.show()
\`\`\``,frontmatter:{},index:4,start:35,end:58},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:X4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:51,start:59,end:62,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_02.png" class = "h-90 mx-auto">',frontmatter:{},index:5,start:59,end:62},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:J4,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
## 设置透明度和边框颜色

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
series1 = np.random.randn(500, 1)
series2 = np.random.randn(400, 1)
 
plt.hist(series1, label='series1', alpha=.8, edgecolor='red')
 
plt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')
plt.legend()
 
plt.show()
\`\`\`
`,title:"设置透明度和边框颜色",level:2,content:`## 设置透明度和边框颜色

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
series1 = np.random.randn(500, 1)
series2 = np.random.randn(400, 1)
 
plt.hist(series1, label='series1', alpha=.8, edgecolor='red')
 
plt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')
plt.legend()
 
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/histogram.md"},index:52,start:63,end:81,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
## 设置透明度和边框颜色

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
series1 = np.random.randn(500, 1)
series2 = np.random.randn(400, 1)
 
plt.hist(series1, label='series1', alpha=.8, edgecolor='red')
 
plt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')
plt.legend()
 
plt.show()
\`\`\`
`,title:"设置透明度和边框颜色",level:2,content:`## 设置透明度和边框颜色

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
series1 = np.random.randn(500, 1)
series2 = np.random.randn(400, 1)
 
plt.hist(series1, label='series1', alpha=.8, edgecolor='red')
 
plt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')
plt.legend()
 
plt.show()
\`\`\``,frontmatter:{},index:6,start:63,end:81},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:t6,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:53,start:82,end:85,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_03.png" class = "h-90 mx-auto">',frontmatter:{},index:7,start:82,end:85},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:r6,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
# 二维直方图

正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的\`plt.hist2d\`函数

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hist2d(x, y, bins=30, cmap='Blues')
cb = plt.colorbar()
cb.set_label('counts in bin')
 
plt.show()
\`\`\`
`,title:"二维直方图",level:1,content:`# 二维直方图

正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的\`plt.hist2d\`函数

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hist2d(x, y, bins=30, cmap='Blues')
cb = plt.colorbar()
cb.set_label('counts in bin')
 
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/histogram.md"},index:54,start:86,end:106,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
# 二维直方图

正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的\`plt.hist2d\`函数

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hist2d(x, y, bins=30, cmap='Blues')
cb = plt.colorbar()
cb.set_label('counts in bin')
 
plt.show()
\`\`\`
`,title:"二维直方图",level:1,content:`# 二维直方图

正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的\`plt.hist2d\`函数

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hist2d(x, y, bins=30, cmap='Blues')
cb = plt.colorbar()
cb.set_label('counts in bin')
 
plt.show()
\`\`\``,frontmatter:{},index:8,start:86,end:106},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:y6,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:55,start:107,end:110,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_04.png" class = "h-90 mx-auto">',frontmatter:{},index:9,start:107,end:110},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:m6,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
## plt.hexbin：六角形分桶

刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了\`plt.hexbin\`函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hexbin(x, y, gridsize=30, cmap='Blues')
cb = plt.colorbar(label='count in bin')
 
plt.show()
\`\`\`
`,title:"plt.hexbin：六角形分桶",level:2,content:`## plt.hexbin：六角形分桶

刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了\`plt.hexbin\`函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hexbin(x, y, gridsize=30, cmap='Blues')
cb = plt.colorbar(label='count in bin')
 
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/histogram.md"},index:56,start:111,end:130,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
## plt.hexbin：六角形分桶

刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了\`plt.hexbin\`函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hexbin(x, y, gridsize=30, cmap='Blues')
cb = plt.colorbar(label='count in bin')
 
plt.show()
\`\`\`
`,title:"plt.hexbin：六角形分桶",level:2,content:`## plt.hexbin：六角形分桶

刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了\`plt.hexbin\`函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
mean = [0, 0]
cov = [[1, 1], [1, 2]]
x, y = np.random.multivariate_normal(mean, cov, 10000).T
 
plt.hexbin(x, y, gridsize=30, cmap='Blues')
cb = plt.colorbar(label='count in bin')
 
plt.show()
\`\`\``,frontmatter:{},index:10,start:111,end:130},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:_6,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_05.png" class = "h-90 mx-auto">`,content:'<img src = "/hist_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:57,start:131,end:133,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_05.png" class = "h-90 mx-auto">`,content:'<img src = "/hist_05.png" class = "h-90 mx-auto">',frontmatter:{},index:11,start:131,end:133},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:x6,meta:{layout:"center",title:"条形图",srcSequence:"./pages/bar.md",slide:{raw:null,title:"条形图",level:1,content:"# 条形图",frontmatter:{layout:"center",title:"条形图",srcSequence:"./pages/bar.md"},index:58,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`---
layout: center
---

# 条形图
`,title:"条形图",level:1,content:"# 条形图",frontmatter:{layout:"center",title:"条形图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/bar.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:S6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
# 条形图

条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值

\`\`\`python
from matplotlib import pyplot as plt
 
x = [5, 2, 9, 4, 7]
y = [10, 5, 8, 4, 2]
 
plt.bar(x, y)

plt.show()
\`\`\`
`,title:"条形图",level:1,content:`# 条形图

条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值

\`\`\`python
from matplotlib import pyplot as plt
 
x = [5, 2, 9, 4, 7]
y = [10, 5, 8, 4, 2]
 
plt.bar(x, y)

plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/bar.md"},index:59,start:7,end:23,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
# 条形图

条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值

\`\`\`python
from matplotlib import pyplot as plt
 
x = [5, 2, 9, 4, 7]
y = [10, 5, 8, 4, 2]
 
plt.bar(x, y)

plt.show()
\`\`\`
`,title:"条形图",level:1,content:`# 条形图

条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值

\`\`\`python
from matplotlib import pyplot as plt
 
x = [5, 2, 9, 4, 7]
y = [10, 5, 8, 4, 2]
 
plt.bar(x, y)

plt.show()
\`\`\``,frontmatter:{},index:1,start:7,end:23},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:M6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:60,start:24,end:27,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_01.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:24,end:27},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:R6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
# 水平和竖直画条形图

\`plt.bar\`用于竖直的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.bar(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\`
`,title:"水平和竖直画条形图",level:1,content:`# 水平和竖直画条形图

\`plt.bar\`用于竖直的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.bar(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/bar.md"},index:61,start:28,end:47,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
# 水平和竖直画条形图

\`plt.bar\`用于竖直的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.bar(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\`
`,title:"水平和竖直画条形图",level:1,content:`# 水平和竖直画条形图

\`plt.bar\`用于竖直的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.bar(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\``,frontmatter:{},index:3,start:28,end:47},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:q6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:62,start:48,end:51,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_02.png" class = "h-90 mx-auto">',frontmatter:{},index:4,start:48,end:51},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:z6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
##  \`plt.barh\`用于水平的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.barh(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\`
`,title:"`plt.barh`用于水平的条形图。",level:2,content:`##  \`plt.barh\`用于水平的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.barh(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/bar.md"},index:63,start:52,end:69,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
##  \`plt.barh\`用于水平的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.barh(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\`
`,title:"`plt.barh`用于水平的条形图。",level:2,content:`##  \`plt.barh\`用于水平的条形图。

\`\`\`python
import matplotlib.pyplot as plt
 
x=['one', 'two', 'three', 'four', 'five']
y=[5, 24, 35, 67, 12]

plt.barh(x, y)

plt.xlabel("pen sold")
plt.ylabel("price")  
plt.title(" Vertical bar graph")
plt.show()
\`\`\``,frontmatter:{},index:5,start:52,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:K6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:64,start:70,end:73,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_03.png" class = "h-90 mx-auto">',frontmatter:{},index:6,start:70,end:73},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:Q6,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
# 条形堆积图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
x = ['A', 'B', 'C', 'D']
y1 = np.array([10, 20, 10, 30])
y2 = np.array([20, 25, 15, 25])
y3 = np.array([12, 15, 19, 6])
y4 = np.array([10, 29, 13, 19])
 
plt.bar(x, y1, color='r', label="Round 1")
plt.bar(x, y2, bottom=y1, color='b', label="Round 2")
plt.bar(x, y3, bottom=y1+y2, color='y', label="Round 2")
plt.bar(x, y4, bottom=y1+y2+y3, color='g', label="Round 2")

plt.xlabel("Teams")
plt.ylabel("Score")
plt.legend()
plt.title("Scores by Teams in 4 Rounds")
plt.show()
\`\`\`
`,title:"条形堆积图",level:1,content:`# 条形堆积图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
x = ['A', 'B', 'C', 'D']
y1 = np.array([10, 20, 10, 30])
y2 = np.array([20, 25, 15, 25])
y3 = np.array([12, 15, 19, 6])
y4 = np.array([10, 29, 13, 19])
 
plt.bar(x, y1, color='r', label="Round 1")
plt.bar(x, y2, bottom=y1, color='b', label="Round 2")
plt.bar(x, y3, bottom=y1+y2, color='y', label="Round 2")
plt.bar(x, y4, bottom=y1+y2+y3, color='g', label="Round 2")

plt.xlabel("Teams")
plt.ylabel("Score")
plt.legend()
plt.title("Scores by Teams in 4 Rounds")
plt.show()
\`\`\``,frontmatter:{srcSequence:"./pages/bar.md"},index:65,start:74,end:99,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
# 条形堆积图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
x = ['A', 'B', 'C', 'D']
y1 = np.array([10, 20, 10, 30])
y2 = np.array([20, 25, 15, 25])
y3 = np.array([12, 15, 19, 6])
y4 = np.array([10, 29, 13, 19])
 
plt.bar(x, y1, color='r', label="Round 1")
plt.bar(x, y2, bottom=y1, color='b', label="Round 2")
plt.bar(x, y3, bottom=y1+y2, color='y', label="Round 2")
plt.bar(x, y4, bottom=y1+y2+y3, color='g', label="Round 2")

plt.xlabel("Teams")
plt.ylabel("Score")
plt.legend()
plt.title("Scores by Teams in 4 Rounds")
plt.show()
\`\`\`
`,title:"条形堆积图",level:1,content:`# 条形堆积图

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
 
x = ['A', 'B', 'C', 'D']
y1 = np.array([10, 20, 10, 30])
y2 = np.array([20, 25, 15, 25])
y3 = np.array([12, 15, 19, 6])
y4 = np.array([10, 29, 13, 19])
 
plt.bar(x, y1, color='r', label="Round 1")
plt.bar(x, y2, bottom=y1, color='b', label="Round 2")
plt.bar(x, y3, bottom=y1+y2, color='y', label="Round 2")
plt.bar(x, y4, bottom=y1+y2+y3, color='g', label="Round 2")

plt.xlabel("Teams")
plt.ylabel("Score")
plt.legend()
plt.title("Scores by Teams in 4 Rounds")
plt.show()
\`\`\``,frontmatter:{},index:7,start:74,end:99},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:lE,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:66,start:100,end:103,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_04.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:100,end:103},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:cE,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
# 多个条形图

<div class="overflow-auto h-xs">   
 
\`\`\`python

import matplotlib.pyplot as plt
import numpy as np
 
# set width of bar
barWidth = 0.25
fig = plt.subplots(figsize =(12, 8))
 
# set height of bar
IT = [12, 30, 1, 8, 22]
ECE = [28, 6, 16, 5, 10]
CSE = [29, 3, 24, 25, 17]
 
# Set position of bar on X axis
br1 = np.arange(len(IT))
br2 = [x + barWidth for x in br1]
br3 = [x + barWidth for x in br2]
 
# Make the plot
plt.bar(br1, IT, color ='r', width = barWidth,
        edgecolor ='grey', label ='IT')
plt.bar(br2, ECE, color ='g', width = barWidth,
        edgecolor ='grey', label ='ECE')
plt.bar(br3, CSE, color ='b', width = barWidth,
        edgecolor ='grey', label ='CSE')
 
# Adding Xticks
plt.xlabel('Branch', fontweight ='bold', fontsize = 15)
plt.ylabel('Students passed', fontweight ='bold', fontsize = 15)
plt.xticks([r + barWidth for r in range(len(IT))],
        ['2015', '2016', '2017', '2018', '2019'])
 
plt.legend()
plt.show()

\`\`\`

</div>
`,title:"多个条形图",level:1,content:`# 多个条形图

<div class="overflow-auto h-xs">   
 
\`\`\`python

import matplotlib.pyplot as plt
import numpy as np
 
# set width of bar
barWidth = 0.25
fig = plt.subplots(figsize =(12, 8))
 
# set height of bar
IT = [12, 30, 1, 8, 22]
ECE = [28, 6, 16, 5, 10]
CSE = [29, 3, 24, 25, 17]
 
# Set position of bar on X axis
br1 = np.arange(len(IT))
br2 = [x + barWidth for x in br1]
br3 = [x + barWidth for x in br2]
 
# Make the plot
plt.bar(br1, IT, color ='r', width = barWidth,
        edgecolor ='grey', label ='IT')
plt.bar(br2, ECE, color ='g', width = barWidth,
        edgecolor ='grey', label ='ECE')
plt.bar(br3, CSE, color ='b', width = barWidth,
        edgecolor ='grey', label ='CSE')
 
# Adding Xticks
plt.xlabel('Branch', fontweight ='bold', fontsize = 15)
plt.ylabel('Students passed', fontweight ='bold', fontsize = 15)
plt.xticks([r + barWidth for r in range(len(IT))],
        ['2015', '2016', '2017', '2018', '2019'])
 
plt.legend()
plt.show()

\`\`\`

</div>`,frontmatter:{srcSequence:"./pages/bar.md"},index:67,start:104,end:149,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
# 多个条形图

<div class="overflow-auto h-xs">   
 
\`\`\`python

import matplotlib.pyplot as plt
import numpy as np
 
# set width of bar
barWidth = 0.25
fig = plt.subplots(figsize =(12, 8))
 
# set height of bar
IT = [12, 30, 1, 8, 22]
ECE = [28, 6, 16, 5, 10]
CSE = [29, 3, 24, 25, 17]
 
# Set position of bar on X axis
br1 = np.arange(len(IT))
br2 = [x + barWidth for x in br1]
br3 = [x + barWidth for x in br2]
 
# Make the plot
plt.bar(br1, IT, color ='r', width = barWidth,
        edgecolor ='grey', label ='IT')
plt.bar(br2, ECE, color ='g', width = barWidth,
        edgecolor ='grey', label ='ECE')
plt.bar(br3, CSE, color ='b', width = barWidth,
        edgecolor ='grey', label ='CSE')
 
# Adding Xticks
plt.xlabel('Branch', fontweight ='bold', fontsize = 15)
plt.ylabel('Students passed', fontweight ='bold', fontsize = 15)
plt.xticks([r + barWidth for r in range(len(IT))],
        ['2015', '2016', '2017', '2018', '2019'])
 
plt.legend()
plt.show()

\`\`\`

</div>
`,title:"多个条形图",level:1,content:`# 多个条形图

<div class="overflow-auto h-xs">   
 
\`\`\`python

import matplotlib.pyplot as plt
import numpy as np
 
# set width of bar
barWidth = 0.25
fig = plt.subplots(figsize =(12, 8))
 
# set height of bar
IT = [12, 30, 1, 8, 22]
ECE = [28, 6, 16, 5, 10]
CSE = [29, 3, 24, 25, 17]
 
# Set position of bar on X axis
br1 = np.arange(len(IT))
br2 = [x + barWidth for x in br1]
br3 = [x + barWidth for x in br2]
 
# Make the plot
plt.bar(br1, IT, color ='r', width = barWidth,
        edgecolor ='grey', label ='IT')
plt.bar(br2, ECE, color ='g', width = barWidth,
        edgecolor ='grey', label ='ECE')
plt.bar(br3, CSE, color ='b', width = barWidth,
        edgecolor ='grey', label ='CSE')
 
# Adding Xticks
plt.xlabel('Branch', fontweight ='bold', fontsize = 15)
plt.ylabel('Students passed', fontweight ='bold', fontsize = 15)
plt.xticks([r + barWidth for r in range(len(IT))],
        ['2015', '2016', '2017', '2018', '2019'])
 
plt.legend()
plt.show()

\`\`\`

</div>`,frontmatter:{},index:9,start:104,end:149},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:uE,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_05.png" class = "h-90 mx-auto">`,content:'<img src = "/bar_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:68,start:150,end:152,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_05.png" class = "h-90 mx-auto">`,content:'<img src = "/bar_05.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:150,end:152},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:fE,meta:{layout:"center",title:"多子图",srcSequence:"./pages/subplot.md",slide:{raw:null,title:"多子图",level:1,content:"# 多子图",frontmatter:{layout:"center",title:"多子图",srcSequence:"./pages/subplot.md"},index:69,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",raw:`---
layout: center
---

# 多子图
`,title:"多子图",level:1,content:"# 多子图",frontmatter:{layout:"center",title:"多子图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/subplot.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:vE,meta:{srcSequence:"./pages/subplot.md",slide:{raw:`
# 图形窗口的分割

matplotlib.pyplot.subplot 方法

该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题


t = np.arange(0.1, 2 * np.pi, 0.01)
y = np.sin(t ** 2)

plt.subplot(2,2,1)
plt.plot(t, y, linewidth = 2, color = "blue")
plt.title("sin")

theta = np.linspace(0, 2*np.pi, 200)# 参数离散取点
x0 = 2
y0 = 1 # 椭圆中心
a = 2
b = 1 # 椭圆长短轴半径
x = x0 + a * np.cos(theta)
y = y0 + b * np.sin(theta)

plt.subplot(2,2,2)
plt.plot(x, y, linewidth = 2, color = "red")
plt.title("椭圆") # 子图标题

x = np.linspace(1, 0.01, 5)
y = np.exp(x)

plt.subplot(2,2,3)
plt.plot(x, y, linewidth = 2)
plt.title("exp")

x = np.linspace(1, 0.1, 10)
y = np.sqrt(x)

plt.subplot(2,2,4)
plt.plot(x, y, linewidth = 2)
plt.title("sqrt")

plt.suptitle("分窗口绘制子图")#图的总标题

plt.show()

\`\`\`
</div>
`,title:"图形窗口的分割",level:1,content:`# 图形窗口的分割

matplotlib.pyplot.subplot 方法

该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题


t = np.arange(0.1, 2 * np.pi, 0.01)
y = np.sin(t ** 2)

plt.subplot(2,2,1)
plt.plot(t, y, linewidth = 2, color = "blue")
plt.title("sin")

theta = np.linspace(0, 2*np.pi, 200)# 参数离散取点
x0 = 2
y0 = 1 # 椭圆中心
a = 2
b = 1 # 椭圆长短轴半径
x = x0 + a * np.cos(theta)
y = y0 + b * np.sin(theta)

plt.subplot(2,2,2)
plt.plot(x, y, linewidth = 2, color = "red")
plt.title("椭圆") # 子图标题

x = np.linspace(1, 0.01, 5)
y = np.exp(x)

plt.subplot(2,2,3)
plt.plot(x, y, linewidth = 2)
plt.title("exp")

x = np.linspace(1, 0.1, 10)
y = np.sqrt(x)

plt.subplot(2,2,4)
plt.plot(x, y, linewidth = 2)
plt.title("sqrt")

plt.suptitle("分窗口绘制子图")#图的总标题

plt.show()

\`\`\`
</div>`,frontmatter:{srcSequence:"./pages/subplot.md"},index:70,start:7,end:65,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",raw:`
# 图形窗口的分割

matplotlib.pyplot.subplot 方法

该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题


t = np.arange(0.1, 2 * np.pi, 0.01)
y = np.sin(t ** 2)

plt.subplot(2,2,1)
plt.plot(t, y, linewidth = 2, color = "blue")
plt.title("sin")

theta = np.linspace(0, 2*np.pi, 200)# 参数离散取点
x0 = 2
y0 = 1 # 椭圆中心
a = 2
b = 1 # 椭圆长短轴半径
x = x0 + a * np.cos(theta)
y = y0 + b * np.sin(theta)

plt.subplot(2,2,2)
plt.plot(x, y, linewidth = 2, color = "red")
plt.title("椭圆") # 子图标题

x = np.linspace(1, 0.01, 5)
y = np.exp(x)

plt.subplot(2,2,3)
plt.plot(x, y, linewidth = 2)
plt.title("exp")

x = np.linspace(1, 0.1, 10)
y = np.sqrt(x)

plt.subplot(2,2,4)
plt.plot(x, y, linewidth = 2)
plt.title("sqrt")

plt.suptitle("分窗口绘制子图")#图的总标题

plt.show()

\`\`\`
</div>
`,title:"图形窗口的分割",level:1,content:`# 图形窗口的分割

matplotlib.pyplot.subplot 方法

该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题


t = np.arange(0.1, 2 * np.pi, 0.01)
y = np.sin(t ** 2)

plt.subplot(2,2,1)
plt.plot(t, y, linewidth = 2, color = "blue")
plt.title("sin")

theta = np.linspace(0, 2*np.pi, 200)# 参数离散取点
x0 = 2
y0 = 1 # 椭圆中心
a = 2
b = 1 # 椭圆长短轴半径
x = x0 + a * np.cos(theta)
y = y0 + b * np.sin(theta)

plt.subplot(2,2,2)
plt.plot(x, y, linewidth = 2, color = "red")
plt.title("椭圆") # 子图标题

x = np.linspace(1, 0.01, 5)
y = np.exp(x)

plt.subplot(2,2,3)
plt.plot(x, y, linewidth = 2)
plt.title("exp")

x = np.linspace(1, 0.1, 10)
y = np.sqrt(x)

plt.subplot(2,2,4)
plt.plot(x, y, linewidth = 2)
plt.title("sqrt")

plt.suptitle("分窗口绘制子图")#图的总标题

plt.show()

\`\`\`
</div>`,frontmatter:{},index:1,start:7,end:65},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:SE,meta:{srcSequence:"./pages/subplot.md",slide:{raw:`
# 多子图
例：

<img src = "/matplotlib_04.png" class = "h-90 mx-auto">
`,title:"多子图",level:1,content:`# 多子图
例：

<img src = "/matplotlib_04.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/subplot.md"},index:71,start:66,end:72,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",raw:`
# 多子图
例：

<img src = "/matplotlib_04.png" class = "h-90 mx-auto">
`,title:"多子图",level:1,content:`# 多子图
例：

<img src = "/matplotlib_04.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:66,end:72},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:PE,meta:{title:"3D图像",srcSequence:"./pages/3D_plot.md",slide:{raw:null,title:"3D图像",level:1,content:`# 3D图像
Matplotlib 可以支持绘制3D的图形，通过关键字参数projection='3d'来创建3D视图, 三维 axes 激活后，我们可以在上面绘制不同的三维图表类型。

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

t = np.arange(0, 8 * np.pi, 0.1)
X = np.sin(t)
Y = np.cos(t)
Z = t

ax.plot(X, Y, Z)
ax.set_title('绘制螺旋线')

ax.set_xlabel('sin(t)')
ax.set_ylabel('cos(t)')

plt.savefig("matplotlib_05.png")
plt.show()

\`\`\`
</div>`,frontmatter:{title:"3D图像",srcSequence:"./pages/3D_plot.md"},index:72,start:0,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`# 3D图像
Matplotlib 可以支持绘制3D的图形，通过关键字参数projection='3d'来创建3D视图, 三维 axes 激活后，我们可以在上面绘制不同的三维图表类型。

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

t = np.arange(0, 8 * np.pi, 0.1)
X = np.sin(t)
Y = np.cos(t)
Z = t

ax.plot(X, Y, Z)
ax.set_title('绘制螺旋线')

ax.set_xlabel('sin(t)')
ax.set_ylabel('cos(t)')

plt.savefig("matplotlib_05.png")
plt.show()

\`\`\`
</div>
`,title:"3D图像",level:1,content:`# 3D图像
Matplotlib 可以支持绘制3D的图形，通过关键字参数projection='3d'来创建3D视图, 三维 axes 激活后，我们可以在上面绘制不同的三维图表类型。

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

plt.rcParams["font.sans-serif"]=["SimHei"] #设置字体
plt.rcParams["axes.unicode_minus"]=False #该语句解决图像中的“-”负号的乱码问题

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

t = np.arange(0, 8 * np.pi, 0.1)
X = np.sin(t)
Y = np.cos(t)
Z = t

ax.plot(X, Y, Z)
ax.set_title('绘制螺旋线')

ax.set_xlabel('sin(t)')
ax.set_ylabel('cos(t)')

plt.savefig("matplotlib_05.png")
plt.show()

\`\`\`
</div>`,frontmatter:{title:"3D图像"},index:0,start:0,end:34},inline:{raw:`---
src: ./pages/3D_plot.md
---

# 其他种类绘图

详见：
[课程网站](https://suepaper.github.io/math201/docs/category/matplotlib%E6%95%99%E7%A8%8B)
[matplotlib官网](https://matplotlib.org/stable/index.html)
`,title:"其他种类绘图",level:1,content:`# 其他种类绘图

详见：
[课程网站](https://suepaper.github.io/math201/docs/category/matplotlib%E6%95%99%E7%A8%8B)
[matplotlib官网](https://matplotlib.org/stable/index.html)`,frontmatter:{},index:8,start:68,end:78},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:NE,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">
`,title:"3D螺旋线",level:1,content:`# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/3D_plot.md"},index:73,start:35,end:40,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`
# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">
`,title:"3D螺旋线",level:1,content:`# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">`,frontmatter:{},index:1,start:35,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:zE,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
# 三维曲面绘图

meshgrid()
首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式
为：X, Y = np.meshgrid(x, y)

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

def f(x, y):
    return np.sin(np.sqrt(x ** 2 + y ** 2))

x = np.linspace(-6, 6, 30)
y = np.linspace(-6, 6, 30)

X, Y = np.meshgrid(x, y)
Z = f(X, Y)

ax.contour3D(X, Y, Z, 50, cmap='binary')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

plt.show()

\`\`\`
</div>
`,title:"三维曲面绘图",level:1,content:`# 三维曲面绘图

meshgrid()
首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式
为：X, Y = np.meshgrid(x, y)

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

def f(x, y):
    return np.sin(np.sqrt(x ** 2 + y ** 2))

x = np.linspace(-6, 6, 30)
y = np.linspace(-6, 6, 30)

X, Y = np.meshgrid(x, y)
Z = f(X, Y)

ax.contour3D(X, Y, Z, 50, cmap='binary')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

plt.show()

\`\`\`
</div>`,frontmatter:{srcSequence:"./pages/3D_plot.md"},index:74,start:41,end:77,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`
# 三维曲面绘图

meshgrid()
首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式
为：X, Y = np.meshgrid(x, y)

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

def f(x, y):
    return np.sin(np.sqrt(x ** 2 + y ** 2))

x = np.linspace(-6, 6, 30)
y = np.linspace(-6, 6, 30)

X, Y = np.meshgrid(x, y)
Z = f(X, Y)

ax.contour3D(X, Y, Z, 50, cmap='binary')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

plt.show()

\`\`\`
</div>
`,title:"三维曲面绘图",level:1,content:`# 三维曲面绘图

meshgrid()
首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式
为：X, Y = np.meshgrid(x, y)

<div class="overflow-auto h-xs">

\`\`\`py

import matplotlib.pyplot as plt
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

def f(x, y):
    return np.sin(np.sqrt(x ** 2 + y ** 2))

x = np.linspace(-6, 6, 30)
y = np.linspace(-6, 6, 30)

X, Y = np.meshgrid(x, y)
Z = f(X, Y)

ax.contour3D(X, Y, Z, 50, cmap='binary')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

plt.show()

\`\`\`
</div>`,frontmatter:{},index:2,start:41,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:ZE,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">
`,title:"三维曲面图",level:1,content:`# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/3D_plot.md"},index:75,start:78,end:83,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`
# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">
`,title:"三维曲面图",level:1,content:`# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">`,frontmatter:{},index:3,start:78,end:83},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:JE,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/3D_plot.md"},index:76,start:84,end:85,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:"",content:"",frontmatter:{},index:4,start:84,end:85},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:s7,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Thanks`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center"},index:77,start:78,end:83,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",component:Ib,meta:{layout:"end"}}],Ze=t7,tn=[{name:"play",path:"/",component:a3,children:[...Ze]},{name:"print",path:"/print",component:Ob},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let s=function(t){if(!sn.remote||sn.remote===t.query.password)return!0;if(sn.remote&&t.query.password===void 0){const l=prompt("Enter password");if(sn.remote===l)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};tn.push({path:"/presenter/print",component:()=>At(()=>import("./PresenterPrint-b0bdc952.js"),["assets/PresenterPrint-b0bdc952.js","assets/NoteDisplay-b7c14160.js"])}),tn.push({name:"notes",path:"/notes",component:()=>At(()=>import("./NotesView-2093e115.js"),["assets/NotesView-2093e115.js","assets/NoteDisplay-b7c14160.js"]),beforeEnter:s}),tn.push({name:"presenter",path:"/presenter/:no",component:()=>At(()=>import("./Presenter-c415e750.js"),["assets/Presenter-c415e750.js","assets/NoteDisplay-b7c14160.js","assets/DrawingControls-6a5c0c91.js","assets/Presenter-aa6741a8.css"]),beforeEnter:s}),tn.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const hs=I0({history:Th("/math201/slides/matplotlib"),routes:tn});function l7(s,t,{mode:l="replace"}={}){return A({get(){const n=hs.currentRoute.value.query[s];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(n){ts(()=>{hs[E(l)]({query:{...hs.currentRoute.value.query,[s]:n}})})}})}const vu=G(0);ts(()=>{hs.afterEach(async()=>{await ts(),vu.value+=1})});const xu=G(0),Ts=A(()=>hs.currentRoute.value),Il=A(()=>Ts.value.query.print!==void 0),n7=A(()=>Ts.value.query.print==="clicks"),at=A(()=>Ts.value.query.embedded!==void 0),ms=A(()=>Ts.value.path.startsWith("/presenter")),o7=A(()=>Ts.value.path.startsWith("/notes")),un=A(()=>Il.value&&!n7.value),_r=A(()=>Ts.value.query.password),a7=A(()=>!ms.value&&(!Ae.remote||_r.value===Ae.remote)),ki=l7("clicks","0"),wu=A(()=>Ze.length-1),r7=A(()=>Ts.value.path),Ye=A(()=>parseInt(r7.value.split(/\//g).slice(-1)[0])||1);A(()=>sa(Ye.value));const ys=A(()=>Ze.find(s=>s.path===`${Ye.value}`));A(()=>{var s,t,l;return(l=(t=(s=ys.value)==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:l.id});A(()=>{var s,t;return((t=(s=ys.value)==null?void 0:s.meta)==null?void 0:t.layout)||(Ye.value===1?"cover":"default")});const ka=A(()=>Ze.find(s=>s.path===`${Math.min(Ze.length,Ye.value+1)}`)),c7=A(()=>Ze.find(s=>s.path===`${Math.max(1,Ye.value-1)}`)),p7=A(()=>{var s,t;return vu.value,((t=(s=ys.value)==null?void 0:s.meta)==null?void 0:t.__clicksElements)||[]}),Os=A({get(){if(un.value)return 99999;let s=+(ki.value||0);return isNaN(s)&&(s=0),s},set(s){ki.value=s.toString()}}),Po=A(()=>{var s,t;return+(((t=(s=ys.value)==null?void 0:s.meta)==null?void 0:t.clicks)??p7.value.length)}),i7=A(()=>Ye.value<Ze.length-1||Os.value<Po.value),y7=A(()=>Ye.value>1||Os.value>0),u7=A(()=>Ze.filter(s=>{var t,l;return(l=(t=s.meta)==null?void 0:t.slide)==null?void 0:l.title}).reduce((s,t)=>(hc(s,t),s),[])),B7=A(()=>gc(u7.value,ys.value));A(()=>_c(B7.value));const d7=A(()=>g7(xu.value,ys.value,c7.value));ge(ys,(s,t)=>{xu.value=Number(s==null?void 0:s.path)-Number(t==null?void 0:t.path)});function Mt(){Po.value<=Os.value?An():Os.value+=1}async function Ot(){Os.value<=0?await Mn():Os.value-=1}function sa(s){return ms.value?`/presenter/${s}`:`/${s}`}function An(){const s=Math.min(Ze.length,Ye.value+1);return Rl(s)}async function Mn(s=!0){const t=Math.max(1,Ye.value-1);await Rl(t),s&&Po.value&&hs.replace({query:{...Ts.value.query,clicks:Po.value}})}function Rl(s,t){return hs.push({path:sa(s),query:{...Ts.value.query,clicks:t}})}function f7(s){const t=G(0),{direction:l,distanceX:n,distanceY:o}=QF(s,{onSwipeStart(a){a.pointerType==="touch"&&(Sn.value||(t.value=or()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||Sn.value)return;const r=Math.abs(n.value),p=Math.abs(o.value);r/window.innerWidth>.3||r>100?l.value===pt.LEFT?Mt():Ot():(p/window.innerHeight>.4||p>200)&&(l.value===pt.DOWN?Mn():An())}})}async function br(){const{saveAs:s}=await At(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);s(Sy(Ae.download)?Ae.download:Ae.exportFilename?`${Ae.exportFilename}.pdf`:"/math201/slides/matplotlibslidev-exported.pdf",`${Ae.title}.pdf`)}async function m7(s){var t,l;if(s==null){const n=(l=(t=ys.value)==null?void 0:t.meta)==null?void 0:l.slide;if(!(n!=null&&n.filepath))return!1;s=`${n.filepath}:${n.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function hc(s,t,l=1){var o,a,r,p,i;const n=(a=(o=t.meta)==null?void 0:o.slide)==null?void 0:a.level;n&&n>l&&s.length>0?hc(s[s.length-1].children,t,l+1):s.push({children:[],level:l,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(i=(p=t.meta)==null?void 0:p.slide)==null?void 0:i.title})}function gc(s,t,l=!1,n){return s.map(o=>{const a={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:l};return a.children.length>0&&(a.children=gc(a.children,t,a.active||a.hasActiveParent,a)),n&&(a.active||a.activeParent)&&(n.activeParent=!0),a})}function _c(s,t=1){return s.filter(l=>!l.hideInToc).map(l=>({...l,children:_c(l.children,t+1)}))}const F7={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function h7(s,t=!1){if(!s||(typeof s=="string"&&(s={name:s}),!s.name))return;let l=s.name.includes("|")?s.name:F7[s.name]||s.name;if(l.includes("|")){const[n,o]=l.split("|").map(a=>a.trim());l=t?o:n}if(l)return{...s,name:l}}function g7(s,t,l){var o,a;let n=s>0?(o=l==null?void 0:l.meta)==null?void 0:o.transition:(a=t==null?void 0:t.meta)==null?void 0:a.transition;return n||(n=Ae.transition),h7(n,s<0)}function _7(){const s=Ae.titleTemplate.replace("%s",Ae.title||"Slidev");oc({title:s}),mm(Ae.htmlAttrs),Sm(`${s} - shared`),Mm(`${s} - drawings`);const t=`${location.origin}_${vm()}`;function l(){o7.value||!ms.value&&!bm.includes(location.host.split(":")[0])||(ms.value?(zl("page",+Ye.value),zl("clicks",Os.value)):(zl("viewerPage",+Ye.value),zl("viewerClicks",Os.value)),zl("lastUpdate",{id:t,type:ms.value?"presenter":"viewer",time:new Date().getTime()}))}hs.afterEach(l),ge(Os,l),Cm(n=>{var a;hs.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((a=n.lastUpdate)==null?void 0:a.type)==="presenter"&&(+n.page!=+Ye.value||+Os.value!=+n.clicks)&&hs.replace({path:sa(n.page),query:{...hs.currentRoute.value.query,clicks:n.clicks||0}})})}const b7=ke({__name:"App",setup(s){return C(T),_7(),(t,l)=>{const n=Ol("RouterView"),o=Ol("StarportCarrier");return b(),te(Te,null,[j(n),j(o)],64)}}}),v7=I(b7,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/App.vue"]]);function Da(s){return s!==null&&typeof s=="object"}function vr(s,t,l=".",n){if(!Da(t))return vr(s,{},l,n);const o=Object.assign({},t);for(const a in s){if(a==="__proto__"||a==="constructor")continue;const r=s[a];r!=null&&(n&&n(o,a,r,l)||(Array.isArray(r)&&Array.isArray(o[a])?o[a]=[...r,...o[a]]:Da(r)&&Da(o[a])?o[a]=vr(r,o[a],(l?`${l}.`:"")+a.toString(),n):o[a]=r))}return o}function x7(s){return(...t)=>t.reduce((l,n)=>vr(l,n,"",s),{})}const w7=x7(),Eu=1/60*1e3,E7=typeof performance<"u"?()=>performance.now():()=>Date.now(),ku=typeof window<"u"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(E7()),Eu);function k7(s){let t=[],l=[],n=0,o=!1,a=!1;const r=new WeakSet,p={schedule:(i,y=!1,u=!1)=>{const B=u&&o,d=B?t:l;return y&&r.add(i),d.indexOf(i)===-1&&(d.push(i),B&&o&&(n=t.length)),i},cancel:i=>{const y=l.indexOf(i);y!==-1&&l.splice(y,1),r.delete(i)},process:i=>{if(o){a=!0;return}if(o=!0,[t,l]=[l,t],l.length=0,n=t.length,n)for(let y=0;y<n;y++){const u=t[y];u(i),r.has(u)&&(p.schedule(u),s())}o=!1,a&&(a=!1,p.process(i))}};return p}const D7=40;let xr=!0,On=!1,wr=!1;const Al={delta:0,timestamp:0},Vn=["read","update","preRender","render","postRender"],ta=Vn.reduce((s,t)=>(s[t]=k7(()=>On=!0),s),{}),Er=Vn.reduce((s,t)=>{const l=ta[t];return s[t]=(n,o=!1,a=!1)=>(On||$7(),l.schedule(n,o,a)),s},{}),S7=Vn.reduce((s,t)=>(s[t]=ta[t].cancel,s),{});Vn.reduce((s,t)=>(s[t]=()=>ta[t].process(Al),s),{});const C7=s=>ta[s].process(Al),Du=s=>{On=!1,Al.delta=xr?Eu:Math.max(Math.min(s-Al.timestamp,D7),1),Al.timestamp=s,wr=!0,Vn.forEach(C7),wr=!1,On&&(xr=!1,ku(Du))},$7=()=>{On=!0,xr=!0,wr||ku(Du)},Su=()=>Al;function Cu(s,t){var l={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.indexOf(n)<0&&(l[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(s);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(s,n[o])&&(l[n[o]]=s[n[o]]);return l}var bc=function(){},Pn=function(){};bc=function(s,t){!s&&typeof console<"u"&&console.warn(t)},Pn=function(s,t){if(!s)throw new Error(t)};const kr=(s,t,l)=>Math.min(Math.max(l,s),t),Sa=.001,A7=.01,Di=10,M7=.05,O7=1;function P7({duration:s=800,bounce:t=.25,velocity:l=0,mass:n=1}){let o,a;bc(s<=Di*1e3,"Spring duration must be 10 seconds or less");let r=1-t;r=kr(M7,O7,r),s=kr(A7,Di,s/1e3),r<1?(o=y=>{const u=y*r,B=u*s,d=u-l,f=Dr(y,r),m=Math.exp(-B);return Sa-d/f*m},a=y=>{const B=y*r*s,d=B*l+l,f=Math.pow(r,2)*Math.pow(y,2)*s,m=Math.exp(-B),h=Dr(Math.pow(y,2),r);return(-o(y)+Sa>0?-1:1)*((d-f)*m)/h}):(o=y=>{const u=Math.exp(-y*s),B=(y-l)*s+1;return-Sa+u*B},a=y=>{const u=Math.exp(-y*s),B=(l-y)*(s*s);return u*B});const p=5/s,i=I7(o,a,p);if(s=s*1e3,isNaN(i))return{stiffness:100,damping:10,duration:s};{const y=Math.pow(i,2)*n;return{stiffness:y,damping:r*2*Math.sqrt(n*y),duration:s}}}const T7=12;function I7(s,t,l){let n=l;for(let o=1;o<T7;o++)n=n-s(n)/t(n);return n}function Dr(s,t){return s*Math.sqrt(1-t*t)}const R7=["duration","bounce"],L7=["stiffness","damping","mass"];function Si(s,t){return t.some(l=>s[l]!==void 0)}function N7(s){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!Si(s,L7)&&Si(s,R7)){const l=P7(s);t=Object.assign(Object.assign(Object.assign({},t),l),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function vc(s){var{from:t=0,to:l=1,restSpeed:n=2,restDelta:o}=s,a=Cu(s,["from","to","restSpeed","restDelta"]);const r={done:!1,value:t};let{stiffness:p,damping:i,mass:y,velocity:u,duration:B,isResolvedFromDuration:d}=N7(a),f=Ci,m=Ci;function h(){const _=u?-(u/1e3):0,x=l-t,v=i/(2*Math.sqrt(p*y)),w=Math.sqrt(p/y)/1e3;if(o===void 0&&(o=Math.min(Math.abs(l-t)/100,.4)),v<1){const k=Dr(w,v);f=M=>{const N=Math.exp(-v*w*M);return l-N*((_+v*w*x)/k*Math.sin(k*M)+x*Math.cos(k*M))},m=M=>{const N=Math.exp(-v*w*M);return v*w*N*(Math.sin(k*M)*(_+v*w*x)/k+x*Math.cos(k*M))-N*(Math.cos(k*M)*(_+v*w*x)-k*x*Math.sin(k*M))}}else if(v===1)f=k=>l-Math.exp(-w*k)*(x+(_+w*x)*k);else{const k=w*Math.sqrt(v*v-1);f=M=>{const N=Math.exp(-v*w*M),J=Math.min(k*M,300);return l-N*((_+v*w*x)*Math.sinh(J)+k*x*Math.cosh(J))/k}}}return h(),{next:_=>{const x=f(_);if(d)r.done=_>=B;else{const v=m(_)*1e3,w=Math.abs(v)<=n,k=Math.abs(l-x)<=o;r.done=w&&k}return r.value=r.done?l:x,r},flipTarget:()=>{u=-u,[t,l]=[l,t],h()}}}vc.needsInterpolation=(s,t)=>typeof s=="string"||typeof t=="string";const Ci=s=>0,$u=(s,t,l)=>{const n=t-s;return n===0?1:(l-s)/n},xc=(s,t,l)=>-l*s+l*t+s,Au=(s,t)=>l=>Math.max(Math.min(l,t),s),Bn=s=>s%1?Number(s.toFixed(5)):s,Tn=/(-)?([\d]*\.?[\d])+/g,Sr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,H7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function zn(s){return typeof s=="string"}const Wn={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},dn=Object.assign(Object.assign({},Wn),{transform:Au(0,1)}),oo=Object.assign(Object.assign({},Wn),{default:1}),wc=s=>({test:t=>zn(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),Ut=wc("deg"),fn=wc("%"),Fe=wc("px"),$i=Object.assign(Object.assign({},fn),{parse:s=>fn.parse(s)/100,transform:s=>fn.transform(s*100)}),Ec=(s,t)=>l=>Boolean(zn(l)&&H7.test(l)&&l.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(l,t)),Mu=(s,t,l)=>n=>{if(!zn(n))return n;const[o,a,r,p]=n.match(Tn);return{[s]:parseFloat(o),[t]:parseFloat(a),[l]:parseFloat(r),alpha:p!==void 0?parseFloat(p):1}},Qt={test:Ec("hsl","hue"),parse:Mu("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:l,alpha:n=1})=>"hsla("+Math.round(s)+", "+fn.transform(Bn(t))+", "+fn.transform(Bn(l))+", "+Bn(dn.transform(n))+")"},q7=Au(0,255),Ca=Object.assign(Object.assign({},Wn),{transform:s=>Math.round(q7(s))}),kt={test:Ec("rgb","red"),parse:Mu("red","green","blue"),transform:({red:s,green:t,blue:l,alpha:n=1})=>"rgba("+Ca.transform(s)+", "+Ca.transform(t)+", "+Ca.transform(l)+", "+Bn(dn.transform(n))+")"};function j7(s){let t="",l="",n="",o="";return s.length>5?(t=s.substr(1,2),l=s.substr(3,2),n=s.substr(5,2),o=s.substr(7,2)):(t=s.substr(1,1),l=s.substr(2,1),n=s.substr(3,1),o=s.substr(4,1),t+=t,l+=l,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(l,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}}const Cr={test:Ec("#"),parse:j7,transform:kt.transform},fs={test:s=>kt.test(s)||Cr.test(s)||Qt.test(s),parse:s=>kt.test(s)?kt.parse(s):Qt.test(s)?Qt.parse(s):Cr.parse(s),transform:s=>zn(s)?s:s.hasOwnProperty("red")?kt.transform(s):Qt.transform(s)},Ou="${c}",Pu="${n}";function U7(s){var t,l,n,o;return isNaN(s)&&zn(s)&&((l=(t=s.match(Tn))===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0)+((o=(n=s.match(Sr))===null||n===void 0?void 0:n.length)!==null&&o!==void 0?o:0)>0}function Tu(s){typeof s=="number"&&(s=`${s}`);const t=[];let l=0;const n=s.match(Sr);n&&(l=n.length,s=s.replace(Sr,Ou),t.push(...n.map(fs.parse)));const o=s.match(Tn);return o&&(s=s.replace(Tn,Pu),t.push(...o.map(Wn.parse))),{values:t,numColors:l,tokenised:s}}function Iu(s){return Tu(s).values}function Ru(s){const{values:t,numColors:l,tokenised:n}=Tu(s),o=t.length;return a=>{let r=n;for(let p=0;p<o;p++)r=r.replace(p<l?Ou:Pu,p<l?fs.transform(a[p]):Bn(a[p]));return r}}const V7=s=>typeof s=="number"?0:s;function z7(s){const t=Iu(s);return Ru(s)(t.map(V7))}const Yn={test:U7,parse:Iu,createTransformer:Ru,getAnimatableNone:z7},W7=new Set(["brightness","contrast","saturate","opacity"]);function Y7(s){let[t,l]=s.slice(0,-1).split("(");if(t==="drop-shadow")return s;const[n]=l.match(Tn)||[];if(!n)return s;const o=l.replace(n,"");let a=W7.has(t)?1:0;return n!==l&&(a*=100),t+"("+a+o+")"}const X7=/([a-z-]*)\(.*?\)/g,$r=Object.assign(Object.assign({},Yn),{getAnimatableNone:s=>{const t=s.match(X7);return t?t.map(Y7).join(" "):s}});function $a(s,t,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?s+(t-s)*6*l:l<1/2?t:l<2/3?s+(t-s)*(2/3-l)*6:s}function Ai({hue:s,saturation:t,lightness:l,alpha:n}){s/=360,t/=100,l/=100;let o=0,a=0,r=0;if(!t)o=a=r=l;else{const p=l<.5?l*(1+t):l+t-l*t,i=2*l-p;o=$a(i,p,s+1/3),a=$a(i,p,s),r=$a(i,p,s-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(r*255),alpha:n}}const K7=(s,t,l)=>{const n=s*s,o=t*t;return Math.sqrt(Math.max(0,l*(o-n)+n))},Z7=[Cr,kt,Qt],Mi=s=>Z7.find(t=>t.test(s)),Oi=s=>`'${s}' is not an animatable color. Use the equivalent color code instead.`,Lu=(s,t)=>{let l=Mi(s),n=Mi(t);Pn(!!l,Oi(s)),Pn(!!n,Oi(t));let o=l.parse(s),a=n.parse(t);l===Qt&&(o=Ai(o),l=kt),n===Qt&&(a=Ai(a),n=kt);const r=Object.assign({},o);return p=>{for(const i in r)i!=="alpha"&&(r[i]=K7(o[i],a[i],p));return r.alpha=xc(o.alpha,a.alpha,p),l.transform(r)}},G7=s=>typeof s=="number",J7=(s,t)=>l=>t(s(l)),Nu=(...s)=>s.reduce(J7);function Hu(s,t){return G7(s)?l=>xc(s,t,l):fs.test(s)?Lu(s,t):ju(s,t)}const qu=(s,t)=>{const l=[...s],n=l.length,o=s.map((a,r)=>Hu(a,t[r]));return a=>{for(let r=0;r<n;r++)l[r]=o[r](a);return l}},Q7=(s,t)=>{const l=Object.assign(Object.assign({},s),t),n={};for(const o in l)s[o]!==void 0&&t[o]!==void 0&&(n[o]=Hu(s[o],t[o]));return o=>{for(const a in n)l[a]=n[a](o);return l}};function Pi(s){const t=Yn.parse(s),l=t.length;let n=0,o=0,a=0;for(let r=0;r<l;r++)n||typeof t[r]=="number"?n++:t[r].hue!==void 0?a++:o++;return{parsed:t,numNumbers:n,numRGB:o,numHSL:a}}const ju=(s,t)=>{const l=Yn.createTransformer(t),n=Pi(s),o=Pi(t);return n.numHSL===o.numHSL&&n.numRGB===o.numRGB&&n.numNumbers>=o.numNumbers?Nu(qu(n.parsed,o.parsed),l):(bc(!0,`Complex values '${s}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?t:s}`)},e5=(s,t)=>l=>xc(s,t,l);function s5(s){if(typeof s=="number")return e5;if(typeof s=="string")return fs.test(s)?Lu:ju;if(Array.isArray(s))return qu;if(typeof s=="object")return Q7}function t5(s,t,l){const n=[],o=l||s5(s[0]),a=s.length-1;for(let r=0;r<a;r++){let p=o(s[r],s[r+1]);if(t){const i=Array.isArray(t)?t[r]:t;p=Nu(i,p)}n.push(p)}return n}function l5([s,t],[l]){return n=>l($u(s,t,n))}function n5(s,t){const l=s.length,n=l-1;return o=>{let a=0,r=!1;if(o<=s[0]?r=!0:o>=s[n]&&(a=n-1,r=!0),!r){let i=1;for(;i<l&&!(s[i]>o||i===n);i++);a=i-1}const p=$u(s[a],s[a+1],o);return t[a](p)}}function Uu(s,t,{clamp:l=!0,ease:n,mixer:o}={}){const a=s.length;Pn(a===t.length,"Both input and output ranges must be the same length"),Pn(!n||!Array.isArray(n)||n.length===a-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),s[0]>s[a-1]&&(s=[].concat(s),t=[].concat(t),s.reverse(),t.reverse());const r=t5(t,n,o),p=a===2?l5(s,r):n5(s,r);return l?i=>p(kr(s[0],s[a-1],i)):p}const la=s=>t=>1-s(1-t),kc=s=>t=>t<=.5?s(2*t)/2:(2-s(2*(1-t)))/2,o5=s=>t=>Math.pow(t,s),Vu=s=>t=>t*t*((s+1)*t-s),a5=s=>{const t=Vu(s);return l=>(l*=2)<1?.5*t(l):.5*(2-Math.pow(2,-10*(l-1)))},zu=1.525,r5=4/11,c5=8/11,p5=9/10,Wu=s=>s,Dc=o5(2),i5=la(Dc),Yu=kc(Dc),Xu=s=>1-Math.sin(Math.acos(s)),Ku=la(Xu),y5=kc(Ku),Sc=Vu(zu),u5=la(Sc),B5=kc(Sc),d5=a5(zu),f5=4356/361,m5=35442/1805,F5=16061/1805,To=s=>{if(s===1||s===0)return s;const t=s*s;return s<r5?7.5625*t:s<c5?9.075*t-9.9*s+3.4:s<p5?f5*t-m5*s+F5:10.8*s*s-20.52*s+10.72},h5=la(To),g5=s=>s<.5?.5*(1-To(1-s*2)):.5*To(s*2-1)+.5;function _5(s,t){return s.map(()=>t||Yu).splice(0,s.length-1)}function b5(s){const t=s.length;return s.map((l,n)=>n!==0?n/(t-1):0)}function v5(s,t){return s.map(l=>l*t)}function mo({from:s=0,to:t=1,ease:l,offset:n,duration:o=300}){const a={done:!1,value:s},r=Array.isArray(t)?t:[s,t],p=v5(n&&n.length===r.length?n:b5(r),o);function i(){return Uu(p,r,{ease:Array.isArray(l)?l:_5(r,l)})}let y=i();return{next:u=>(a.value=y(u),a.done=u>=o,a),flipTarget:()=>{r.reverse(),y=i()}}}function x5({velocity:s=0,from:t=0,power:l=.8,timeConstant:n=350,restDelta:o=.5,modifyTarget:a}){const r={done:!1,value:t};let p=l*s;const i=t+p,y=a===void 0?i:a(i);return y!==i&&(p=y-t),{next:u=>{const B=-p*Math.exp(-u/n);return r.done=!(B>o||B<-o),r.value=r.done?y:y+B,r},flipTarget:()=>{}}}const Ti={keyframes:mo,spring:vc,decay:x5};function w5(s){if(Array.isArray(s.to))return mo;if(Ti[s.type])return Ti[s.type];const t=new Set(Object.keys(s));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?mo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?vc:mo}function Zu(s,t,l=0){return s-t-l}function E5(s,t,l=0,n=!0){return n?Zu(t+-s,t,l):t-(s-t)+l}function k5(s,t,l,n){return n?s>=t+l:s<=-l}const D5=s=>{const t=({delta:l})=>s(l);return{start:()=>Er.update(t,!0),stop:()=>S7.update(t)}};function Gu(s){var t,l,{from:n,autoplay:o=!0,driver:a=D5,elapsed:r=0,repeat:p=0,repeatType:i="loop",repeatDelay:y=0,onPlay:u,onStop:B,onComplete:d,onRepeat:f,onUpdate:m}=s,h=Cu(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=h,x,v=0,w=h.duration,k,M=!1,N=!0,J;const R=w5(h);!((l=(t=R).needsInterpolation)===null||l===void 0)&&l.call(t,n,_)&&(J=Uu([0,100],[n,_],{clamp:!1}),n=0,_=100);const X=R(Object.assign(Object.assign({},h),{from:n,to:_}));function ne(){v++,i==="reverse"?(N=v%2===0,r=E5(r,w,y,N)):(r=Zu(r,w,y),i==="mirror"&&X.flipTarget()),M=!1,f&&f()}function ye(){x.stop(),d&&d()}function Q(Pe){if(N||(Pe=-Pe),r+=Pe,!M){const Ce=X.next(Math.max(0,r));k=Ce.value,J&&(k=J(k)),M=N?Ce.done:r<=0}m==null||m(k),M&&(v===0&&(w??(w=r)),v<p?k5(r,w,y,N)&&ne():ye())}function xe(){u==null||u(),x=a(Q),x.start()}return o&&xe(),{stop:()=>{B==null||B(),x.stop()}}}function Ju(s,t){return t?s*(1e3/t):0}function S5({from:s=0,velocity:t=0,min:l,max:n,power:o=.8,timeConstant:a=750,bounceStiffness:r=500,bounceDamping:p=10,restDelta:i=1,modifyTarget:y,driver:u,onUpdate:B,onComplete:d,onStop:f}){let m;function h(w){return l!==void 0&&w<l||n!==void 0&&w>n}function _(w){return l===void 0?n:n===void 0||Math.abs(l-w)<Math.abs(n-w)?l:n}function x(w){m==null||m.stop(),m=Gu(Object.assign(Object.assign({},w),{driver:u,onUpdate:k=>{var M;B==null||B(k),(M=w.onUpdate)===null||M===void 0||M.call(w,k)},onComplete:d,onStop:f}))}function v(w){x(Object.assign({type:"spring",stiffness:r,damping:p,restDelta:i},w))}if(h(s))v({from:s,velocity:t,to:_(s)});else{let w=o*t+s;typeof y<"u"&&(w=y(w));const k=_(w),M=k===l?-1:1;let N,J;const R=X=>{N=J,J=X,t=Ju(X-N,Su().delta),(M===1&&X>k||M===-1&&X<k)&&v({from:X,to:k,velocity:t})};x({type:"decay",from:s,velocity:t,timeConstant:a,power:o,restDelta:i,modifyTarget:y,onUpdate:h(w)?R:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Qu=(s,t)=>1-3*t+3*s,eB=(s,t)=>3*t-6*s,sB=s=>3*s,Io=(s,t,l)=>((Qu(t,l)*s+eB(t,l))*s+sB(t))*s,tB=(s,t,l)=>3*Qu(t,l)*s*s+2*eB(t,l)*s+sB(t),C5=1e-7,$5=10;function A5(s,t,l,n,o){let a,r,p=0;do r=t+(l-t)/2,a=Io(r,n,o)-s,a>0?l=r:t=r;while(Math.abs(a)>C5&&++p<$5);return r}const M5=8,O5=.001;function P5(s,t,l,n){for(let o=0;o<M5;++o){const a=tB(t,l,n);if(a===0)return t;const r=Io(t,l,n)-s;t-=r/a}return t}const Fo=11,ao=1/(Fo-1);function T5(s,t,l,n){if(s===t&&l===n)return Wu;const o=new Float32Array(Fo);for(let r=0;r<Fo;++r)o[r]=Io(r*ao,s,l);function a(r){let p=0,i=1;const y=Fo-1;for(;i!==y&&o[i]<=r;++i)p+=ao;--i;const u=(r-o[i])/(o[i+1]-o[i]),B=p+u*ao,d=tB(B,s,l);return d>=O5?P5(r,B,s,l):d===0?B:A5(r,p,p+ao,s,l)}return r=>r===0||r===1?r:Io(a(r),t,n)}const Aa={};class I5{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,l,n){if(this.subscriptions.size)for(const o of this.subscriptions)o(t,l,n)}clear(){this.subscriptions.clear()}}const Ii=s=>!isNaN(parseFloat(s));class R5{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new I5,this.canTrackVelocity=!1,this.updateAndNotify=l=>{this.prev=this.current,this.current=l;const{delta:n,timestamp:o}=Su();this.lastUpdated!==o&&(this.timeDelta=n,this.lastUpdated=o),Er.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Er.postRender(this.velocityCheck),this.velocityCheck=({timestamp:l})=>{this.canTrackVelocity||(this.canTrackVelocity=Ii(this.current)),l!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ii(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ju(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(l=>{const{stop:n}=t(l);this.stopAnimation=n}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function L5(s){return new R5(s)}const{isArray:N5}=Array;function H5(){const s=G({}),t=n=>{const o=a=>{s.value[a]&&(s.value[a].stop(),s.value[a].destroy(),delete s.value[a])};n?N5(n)?n.forEach(o):o(n):Object.keys(s.value).forEach(o)},l=(n,o,a)=>{if(s.value[n])return s.value[n];const r=L5(o);return r.onChange(p=>a[n]=p),s.value[n]=r,r};return eF(t),{motionValues:s,get:l,stop:t}}const q5=s=>Array.isArray(s),Vt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ma=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),j5=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),Oa=()=>({type:"keyframes",ease:"linear",duration:300}),U5=s=>({type:"keyframes",duration:800,values:s}),Ri={default:j5,x:Vt,y:Vt,z:Vt,rotate:Vt,rotateX:Vt,rotateY:Vt,rotateZ:Vt,scaleX:Ma,scaleY:Ma,scale:Ma,backgroundColor:Oa,color:Oa,opacity:Oa},lB=(s,t)=>{let l;return q5(t)?l=U5:l=Ri[s]||Ri.default,{to:t,...l(t)}},Li={...Wn,transform:Math.round},nB={color:fs,backgroundColor:fs,outlineColor:fs,fill:fs,stroke:fs,borderColor:fs,borderTopColor:fs,borderRightColor:fs,borderBottomColor:fs,borderLeftColor:fs,borderWidth:Fe,borderTopWidth:Fe,borderRightWidth:Fe,borderBottomWidth:Fe,borderLeftWidth:Fe,borderRadius:Fe,radius:Fe,borderTopLeftRadius:Fe,borderTopRightRadius:Fe,borderBottomRightRadius:Fe,borderBottomLeftRadius:Fe,width:Fe,maxWidth:Fe,height:Fe,maxHeight:Fe,size:Fe,top:Fe,right:Fe,bottom:Fe,left:Fe,padding:Fe,paddingTop:Fe,paddingRight:Fe,paddingBottom:Fe,paddingLeft:Fe,margin:Fe,marginTop:Fe,marginRight:Fe,marginBottom:Fe,marginLeft:Fe,rotate:Ut,rotateX:Ut,rotateY:Ut,rotateZ:Ut,scale:oo,scaleX:oo,scaleY:oo,scaleZ:oo,skew:Ut,skewX:Ut,skewY:Ut,distance:Fe,translateX:Fe,translateY:Fe,translateZ:Fe,x:Fe,y:Fe,z:Fe,perspective:Fe,transformPerspective:Fe,opacity:dn,originX:$i,originY:$i,originZ:Fe,zIndex:Li,filter:$r,WebkitFilter:$r,fillOpacity:dn,strokeOpacity:dn,numOctaves:Li},Cc=s=>nB[s],oB=(s,t)=>t&&typeof s=="number"&&t.transform?t.transform(s):s;function V5(s,t){let l=Cc(s);return l!==$r&&(l=Yn),l.getAnimatableNone?l.getAnimatableNone(t):void 0}const z5={linear:Wu,easeIn:Dc,easeInOut:Yu,easeOut:i5,circIn:Xu,circInOut:y5,circOut:Ku,backIn:Sc,backInOut:B5,backOut:u5,anticipate:d5,bounceIn:h5,bounceInOut:g5,bounceOut:To},Ni=s=>{if(Array.isArray(s)){const[t,l,n,o]=s;return T5(t,l,n,o)}else if(typeof s=="string")return z5[s];return s},W5=s=>Array.isArray(s)&&typeof s[0]!="number",Hi=(s,t)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yn.test(t)&&!t.startsWith("url("));function Y5(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function X5({ease:s,times:t,delay:l,...n}){const o={...n};return t&&(o.offset=t),s&&(o.ease=W5(s)?s.map(Ni):Ni(s)),l&&(o.elapsed=-l),o}function K5(s,t,l){return Array.isArray(t.to)&&(s.duration||(s.duration=800)),Y5(t),Z5(s)||(s={...s,...lB(l,t.to)}),{...t,...X5(s)}}function Z5({delay:s,repeat:t,repeatType:l,repeatDelay:n,from:o,...a}){return!!Object.keys(a).length}function G5(s,t){return s[t]||s.default||s}function J5(s,t,l,n,o){const a=G5(n,s);let r=a.from===null||a.from===void 0?t.get():a.from;const p=Hi(s,l);r==="none"&&p&&typeof l=="string"&&(r=V5(s,l));const i=Hi(s,r);function y(B){const d={from:r,to:l,velocity:n.velocity?n.velocity:t.getVelocity(),onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?S5({...d,...a}):Gu({...K5(a,d,s),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{n.onComplete&&n.onComplete(),o&&o(),B&&B()}})}function u(B){return t.set(l),n.onComplete&&n.onComplete(),o&&o(),B&&B(),{stop:()=>{}}}return!i||!p||a.type===!1?u:y}function Q5(){const{motionValues:s,stop:t,get:l}=H5();return{motionValues:s,stop:t,push:(o,a,r,p={},i)=>{const y=r[o],u=l(o,y,r);if(p&&p.immediate){u.set(a);return}const B=J5(o,u,a,p,i);u.start(B)}}}function ek(s,t={},{motionValues:l,push:n,stop:o}=Q5()){const a=E(t),r=G(!1);ge(l,B=>{r.value=Object.values(B).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const p=B=>{if(!a||!a[B])throw new Error(`The variant ${B} does not exist.`);return a[B]},i=B=>(typeof B=="string"&&(B=p(B)),Promise.all(Object.entries(B).map(([d,f])=>{if(d!=="transition")return new Promise(m=>n(d,f,s,B.transition||lB(d,B[d]),m))}).filter(Boolean)));return{isAnimating:r,apply:i,set:B=>{const d=nr(B)?B:p(B);Object.entries(d).forEach(([f,m])=>{f!=="transition"&&n(f,m,s,{immediate:!0})})},leave:async B=>{let d;if(a&&(a.leave&&(d=a.leave),!a.leave&&a.initial&&(d=a.initial)),!d){B();return}await i(d),B()},stop:o}}const $c=typeof window<"u",sk=()=>$c&&window.onpointerdown===null,tk=()=>$c&&window.ontouchstart===null,lk=()=>$c&&window.onmousedown===null;function nk({target:s,state:t,variants:l,apply:n}){const o=E(l),a=G(!1),r=G(!1),p=G(!1),i=A(()=>{let u=[];return o&&(o.hovered&&(u=[...u,...Object.keys(o.hovered)]),o.tapped&&(u=[...u,...Object.keys(o.tapped)]),o.focused&&(u=[...u,...Object.keys(o.focused)])),u}),y=A(()=>{const u={};Object.assign(u,t.value),a.value&&o.hovered&&Object.assign(u,o.hovered),r.value&&o.tapped&&Object.assign(u,o.tapped),p.value&&o.focused&&Object.assign(u,o.focused);for(const B in u)i.value.includes(B)||delete u[B];return u});o.hovered&&(_e(s,"mouseenter",()=>a.value=!0),_e(s,"mouseleave",()=>{a.value=!1,r.value=!1}),_e(s,"mouseout",()=>{a.value=!1,r.value=!1})),o.tapped&&(lk()&&(_e(s,"mousedown",()=>r.value=!0),_e(s,"mouseup",()=>r.value=!1)),sk()&&(_e(s,"pointerdown",()=>r.value=!0),_e(s,"pointerup",()=>r.value=!1)),tk()&&(_e(s,"touchstart",()=>r.value=!0),_e(s,"touchend",()=>r.value=!1))),o.focused&&(_e(s,"focus",()=>p.value=!0),_e(s,"blur",()=>p.value=!1)),ge(y,n)}function ok({set:s,target:t,apply:l,variants:n,variant:o}){const a=E(n);ge(()=>t,()=>{a&&(a.initial&&s("initial"),a.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function ak({state:s,apply:t}){ge(s,l=>{l&&t(l)},{immediate:!0})}function rk({target:s,variants:t,variant:l}){const n=E(t);n&&(n.visible||n.visibleOnce)&&ZF(s,([{isIntersecting:o}])=>{n.visible?o?l.value="visible":l.value="initial":n.visibleOnce&&(o&&l.value!=="visibleOnce"?l.value="visibleOnce":l.value||(l.value="initial"))})}function ck(s,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&ok(s),t.syncVariants&&ak(s),t.visibilityHooks&&rk(s),t.eventListeners&&nk(s)}function aB(s={}){const t=Ve({...s}),l=G({});return ge(t,()=>{const n={};for(const[o,a]of Object.entries(t)){const r=Cc(o),p=oB(a,r);n[o]=p}l.value=n},{immediate:!0,deep:!0}),{state:t,style:l}}function Ac(s,t){ge(()=>Es(s),l=>{l&&t(l)},{immediate:!0})}const pk={x:"translateX",y:"translateY",z:"translateZ"};function rB(s={},t=!0){const l=Ve({...s}),n=G("");return ge(l,o=>{let a="",r=!1;if(t&&(o.x||o.y||o.z)){const p=[o.x||0,o.y||0,o.z||0].map(Fe.transform).join(",");a+=`translate3d(${p}) `,r=!0}for(const[p,i]of Object.entries(o)){if(t&&(p==="x"||p==="y"||p==="z"))continue;const y=Cc(p),u=oB(i,y);a+=`${pk[p]||p}(${u}) `}t&&!r&&(a+="translateZ(0px) "),n.value=a.trim()},{immediate:!0,deep:!0}),{state:l,transform:n}}const ik=["","X","Y","Z"],yk=["perspective","translate","scale","rotate","skew"],cB=["transformPerspective","x","y","z"];yk.forEach(s=>{ik.forEach(t=>{const l=s+t;cB.push(l)})});const uk=new Set(cB);function Mc(s){return uk.has(s)}const Bk=new Set(["originX","originY","originZ"]);function pB(s){return Bk.has(s)}function dk(s){const t={},l={};return Object.entries(s).forEach(([n,o])=>{Mc(n)||pB(n)?t[n]=o:l[n]=o}),{transform:t,style:l}}function iB(s){const{transform:t,style:l}=dk(s),{transform:n}=rB(t),{style:o}=aB(l);return n.value&&(o.value.transform=n.value),o.value}function fk(s,t){let l,n;const{state:o,style:a}=aB();return Ac(s,r=>{n=r;for(const p of Object.keys(nB))r.style[p]===null||r.style[p]===""||Mc(p)||pB(p)||(o[p]=r.style[p]);l&&Object.entries(l).forEach(([p,i])=>r.style[p]=i),t&&t(o)}),ge(a,r=>{if(!n){l=r;return}for(const p in r)n.style[p]=r[p]},{immediate:!0}),{style:o}}function mk(s){const t=s.trim().split(/\) |\)/);if(t.length===1)return{};const l=n=>n.endsWith("px")||n.endsWith("deg")?parseFloat(n):isNaN(Number(n))?Number(n):n;return t.reduce((n,o)=>{if(!o)return n;const[a,r]=o.split("("),i=r.split(",").map(u=>l(u.endsWith(")")?u.replace(")",""):u.trim())),y=i.length===1?i[0]:i;return{...n,[a]:y}},{})}function Fk(s,t){Object.entries(mk(t)).forEach(([l,n])=>{const o=["x","y","z"];if(l==="translate3d"){if(n===0){o.forEach(a=>s[a]=0);return}n.forEach((a,r)=>s[o[r]]=a);return}if(n=parseFloat(n),l==="translateX"){s.x=n;return}if(l==="translateY"){s.y=n;return}if(l==="translateZ"){s.z=n;return}s[l]=n})}function hk(s,t){let l,n;const{state:o,transform:a}=rB();return Ac(s,r=>{n=r,r.style.transform&&Fk(o,r.style.transform),l&&(r.style.transform=l),t&&t(o)}),ge(a,r=>{if(!n){l=r;return}n.style.transform=r},{immediate:!0}),{transform:o}}function gk(s,t){const l=Ve({}),n=r=>Object.entries(r).forEach(([p,i])=>l[p]=i),{style:o}=fk(s,n),{transform:a}=hk(s,n);return ge(l,r=>{Object.entries(r).forEach(([p,i])=>{const y=Mc(p)?a:o;y[p]&&y[p]===i||(y[p]=i)})},{immediate:!0,deep:!0}),Ac(s,()=>t&&n(t)),{motionProperties:l,style:o,transform:a}}function _k(s={}){const t=E(s),l=G();return{state:A(()=>{if(l.value)return t[l.value]}),variant:l}}function yB(s,t={},l){const{motionProperties:n}=gk(s),{variant:o,state:a}=_k(t),r=ek(n,t),p={target:s,variant:o,variants:t,state:a,motionProperties:n,...r};return ck(p,l),p}const bk=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],vk=(s,t)=>{const l=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};l&&(l.variants&&nr(l.variants)&&(t.value={...t.value,...l.variants}),bk.forEach(n=>{if(n==="delay"){if(l&&l[n]&&Lm(l[n])){const o=l[n];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}n==="visible-once"&&(n="visibleOnce"),l&&l[n]&&nr(l[n])&&(t.value[n]=l[n])}))},Pa=s=>({created:(l,n,o)=>{const a=n.value&&typeof n.value=="string"?n.value:o.key;a&&Aa[a]&&Aa[a].stop();const r=G(s||{});typeof n.value=="object"&&(r.value=n.value),vk(o,r);const p=yB(l,r);l.motionInstance=p,a&&(Aa[a]=p)},getSSRProps(l,n){let{initial:o}=l.value||n&&(n==null?void 0:n.props)||{};o=E(o);const a=w7((s==null?void 0:s.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:iB(a)}}}),xk={initial:{opacity:0},enter:{opacity:1}},wk={initial:{opacity:0},visible:{opacity:1}},Ek={initial:{opacity:0},visibleOnce:{opacity:1}},kk={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Dk={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Sk={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Ck={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},$k={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Ak={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Mk={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ok={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Pk={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Tk={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ik={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Rk={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Lk={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Nk={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Hk={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},qk={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},jk={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Uk={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Vk={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},zk={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Wk={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Yk={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Xk={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Kk={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Zk={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Gk={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Jk={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ar={__proto__:null,fade:xk,fadeVisible:wk,fadeVisibleOnce:Ek,pop:kk,popVisible:Dk,popVisibleOnce:Sk,rollBottom:Lk,rollLeft:Ck,rollRight:Mk,rollTop:Tk,rollVisibleBottom:Nk,rollVisibleLeft:$k,rollVisibleOnceBottom:Hk,rollVisibleOnceLeft:Ak,rollVisibleOnceRight:Pk,rollVisibleOnceTop:Rk,rollVisibleRight:Ok,rollVisibleTop:Ik,slideBottom:Zk,slideLeft:qk,slideRight:Vk,slideTop:Yk,slideVisibleBottom:Gk,slideVisibleLeft:jk,slideVisibleOnceBottom:Jk,slideVisibleOnceLeft:Uk,slideVisibleOnceRight:Wk,slideVisibleOnceTop:Kk,slideVisibleRight:zk,slideVisibleTop:Xk},Qk=ke({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(s){var p;const t=Y1(),l=Ve({});if(!s.is&&!t.default)return()=>ks("div",{});const n=A(()=>{let i;return s.preset&&(i=Ar[s.preset]),i}),o=A(()=>({initial:s.initial,enter:s.enter,leave:s.leave,visible:s.visible,visibleOnce:s.visibleOnce,hovered:s.hovered,tapped:s.tapped,focused:s.focused})),a=A(()=>{const i={...o.value,...n.value||{},...s.variants||{}};return s.delay&&(i.enter.transition={...i.enter.transition},i.enter.transition.delay=parseInt(s.delay)),i}),r=A(()=>{if(!s.is)return;let i=s.is;return typeof r.value=="string"&&!Qi(i)&&(i=Ol(i)),i});if(((p=process==null?void 0:process.env)==null?void 0:p.NODE_ENV)==="development"||process!=null&&process.dev){const i=y=>{var u;(u=y.variants)!=null&&u.initial&&y.set("initial"),setTimeout(()=>{var B,d,f;(B=y.variants)!=null&&B.enter&&y.apply("enter"),(d=y.variants)!=null&&d.visible&&y.apply("visible"),(f=y.variants)!=null&&f.visibleOnce&&y.apply("visibleOnce")},10)};Ko(()=>Object.entries(l).forEach(([y,u])=>i(u)))}return{slots:t,component:r,motionConfig:a,instances:l}},render({slots:s,motionConfig:t,instances:l,component:n}){var p;const o=iB(t.initial||{}),a=(i,y)=>(i.props||(i.props={}),i.props.style=o,i.props.onVnodeMounted=({el:u})=>{const B=yB(u,t);l[y]=B},i);if(n){const i=ks(n,void 0,s);return a(i,0),i}return(((p=s.default)==null?void 0:p.call(s))||[]).map((i,y)=>a(i,y))}});function eD(s){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",l="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",n=new RegExp(t.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(n,o=>l.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const sD={install(s,t){if(s.directive("motion",Pa()),s.component("Motion",Qk),!t||t&&!t.excludePresets)for(const l in Ar){const n=Ar[l];s.directive(`motion-${eD(l)}`,Pa(n))}if(t&&t.directives)for(const l in t.directives){const n=t.directives[l];n.initial,s.directive(`motion-${l}`,Pa(n))}}};var qi;const mn=typeof window<"u",tD=Object.prototype.toString,lD=s=>tD.call(s)==="[object Object]";mn&&((qi=window==null?void 0:window.navigator)!=null&&qi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function nD(s){return Nr()?(c2(s),!0):!1}function oD(s){var t;const l=E(s);return(t=l==null?void 0:l.$el)!=null?t:l}const aD=mn?window:void 0,Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Or="__vueuse_ssr_handlers__";Mr[Or]=Mr[Or]||{};Mr[Or];function rD(s,t={}){const{immediate:l=!0,window:n=aD}=t,o=G(!1);let a=null;function r(){!o.value||!n||(s(),a=n.requestAnimationFrame(r))}function p(){!o.value&&n&&(o.value=!0,r())}function i(){o.value=!1,a!=null&&n&&(n.cancelAnimationFrame(a),a=null)}return l&&p(),nD(i),{isActive:o,pause:i,resume:p}}var ji;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(ji||(ji={}));const na="vue-starport-injection",uB="vue-starport-options",cD={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},BB={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var pD=Object.defineProperty,Ro=Object.getOwnPropertySymbols,dB=Object.prototype.hasOwnProperty,fB=Object.prototype.propertyIsEnumerable,Ui=(s,t,l)=>t in s?pD(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,iD=(s,t)=>{for(var l in t||(t={}))dB.call(t,l)&&Ui(s,l,t[l]);if(Ro)for(var l of Ro(t))fB.call(t,l)&&Ui(s,l,t[l]);return s},Vi=(s,t)=>{var l={};for(var n in s)dB.call(s,n)&&t.indexOf(n)<0&&(l[n]=s[n]);if(s!=null&&Ro)for(var n of Ro(s))t.indexOf(n)<0&&fB.call(s,n)&&(l[n]=s[n]);return l};const yD=ke({name:"StarportProxy",props:iD({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},BB),setup(s,t){const l=C(na),n=A(()=>l.getInstance(s.port,s.component)),o=G(),a=n.value.generateId(),r=G(!1);return n.value.isVisible||(n.value.land(),r.value=!0),ul(async()=>{if(n.value.el){console.error(`[Vue Starport] Multiple proxies of "${n.value.componentName}" with port "${s.port}" detected. The later one will be ignored.`);return}if(n.value.el=o.value,await ts(),r.value=!0,n.value.rect.update(),n.value.rect.width===0||n.value.rect.height===0){const p=n.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${n.value.componentName}" (port "${s.port}") has no ${p} on initial render, have you set the size for it?`),console.warn("element:",n.value.el),console.warn("rect:",n.value.rect)}}),Hn(async()=>{n.value.rect.update(),n.value.liftOff(),n.value.el=void 0,r.value=!1,!n.value.options.keepAlive&&(await ts(),await ts(),!n.value.el&&l.dispose(n.value.port))}),ge(()=>s,async()=>{n.value.props&&await ts();const p=s,{props:i}=p,y=Vi(p,["props"]);n.value.props=i||{},n.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const p=s,{initialProps:i,mountedProps:y}=p,u=Vi(p,["initialProps","mountedProps"]),B=be(u,(r.value?y:i)||{});return ks("div",be(B,{id:a,ref:o,"data-starport-proxy":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true"}),t.slots.default?ks(t.slots.default):void 0)}}});var uD=Object.defineProperty,BD=Object.defineProperties,dD=Object.getOwnPropertyDescriptors,zi=Object.getOwnPropertySymbols,fD=Object.prototype.hasOwnProperty,mD=Object.prototype.propertyIsEnumerable,Wi=(s,t,l)=>t in s?uD(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,FD=(s,t)=>{for(var l in t||(t={}))fD.call(t,l)&&Wi(s,l,t[l]);if(zi)for(var l of zi(t))mD.call(t,l)&&Wi(s,l,t[l]);return s},hD=(s,t)=>BD(s,dD(t));const gD=ke({name:"Starport",inheritAttrs:!0,props:BB,setup(s,t){const l=G(!1);return ul(()=>{if(l.value=!0,!C(na))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,p;const n=(p=(r=t.slots).default)==null?void 0:p.call(r);if(!n)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(n.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${n.length}`);const o=n[0];let a=o.type;return(!lD(a)||It(a))&&(a={render(){return n}}),ks(yD,hD(FD({},s),{key:s.port,component:Uo(a),props:o.props}))}}});function _D(s){const t=Ve({height:0,width:0,left:0,top:0,update:n,listen:a,pause:r,margin:"0px",padding:"0px"}),l=mn?document.documentElement||document.body:void 0;function n(){if(!mn)return;const p=oD(s);if(!p)return;const{height:i,width:y,left:u,top:B}=p.getBoundingClientRect(),d=window.getComputedStyle(p),f=d.margin,m=d.padding;Object.assign(t,{height:i,width:y,left:u,top:l.scrollTop+B,margin:f,padding:m})}const o=rD(n,{immediate:!1});function a(){mn&&(n(),o.resume())}function r(){o.pause()}return t}let bD=(s,t=21)=>(l=t)=>{let n="",o=l;for(;o--;)n+=s[Math.random()*s.length|0];return n};const Yi=bD("abcdefghijklmnopqrstuvwxyz",5);function Xi(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function vD(s){var t;return s.name||((t=s.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var xD=Object.defineProperty,Ki=Object.getOwnPropertySymbols,wD=Object.prototype.hasOwnProperty,ED=Object.prototype.propertyIsEnumerable,Zi=(s,t,l)=>t in s?xD(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,Ta=(s,t)=>{for(var l in t||(t={}))wD.call(t,l)&&Zi(s,l,t[l]);if(Ki)for(var l of Ki(t))ED.call(t,l)&&Zi(s,l,t[l]);return s};function kD(s,t,l={}){const n=vD(t),o=Xi(n)||Yi(),a=G(),r=G(null),p=G(!1),i=G(!1),y=MB(!0),u=G({}),B=A(()=>Ta(Ta(Ta({},cD),l),u.value)),d=G(0);let f;y.run(()=>{f=_D(a),ge(a,async x=>{x&&(i.value=!0),await ts(),a.value||(i.value=!1)})});const m=Xi(s);function h(){return`starport-${o}-${m}-${Yi()}`}const _=h();return Ve({el:a,id:_,port:s,props:r,rect:f,scope:y,isLanded:p,isVisible:i,options:B,liftOffTime:d,component:t,componentName:n,componentId:o,generateId:h,setLocalOptions(x={}){u.value=JSON.parse(JSON.stringify(x))},elRef(){return a},liftOff(){p.value&&(p.value=!1,d.value=Date.now(),f.listen())},land(){p.value||(p.value=!0,f.pause())}})}function DD(s){const t=Ve(new Map);function l(o,a){let r=t.get(o);return r||(r=kD(o,a,s),t.set(o,r)),r.component=a,r}function n(o){var a;(a=t.get(o))==null||a.scope.stop(),t.delete(o)}return{portMap:t,dispose:n,getInstance:l}}var SD=Object.defineProperty,CD=Object.defineProperties,$D=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,AD=Object.prototype.hasOwnProperty,MD=Object.prototype.propertyIsEnumerable,Ji=(s,t,l)=>t in s?SD(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,OD=(s,t)=>{for(var l in t||(t={}))AD.call(t,l)&&Ji(s,l,t[l]);if(Gi)for(var l of Gi(t))MD.call(t,l)&&Ji(s,l,t[l]);return s},PD=(s,t)=>CD(s,$D(t));const TD=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const t=C(na);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const l=A(()=>t.getInstance(s.port,s.component)),n=A(()=>{var r;return((r=l.value.el)==null?void 0:r.id)||l.value.id}),o=A(()=>{const r=Date.now()-l.value.liftOffTime,p=Math.max(0,l.value.options.duration-r),i=l.value.rect,y={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,margin:i.margin,padding:i.padding,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!l.value.isVisible||!l.value.el?PD(OD({},y),{zIndex:-1,display:"none"}):(l.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${p}ms`,transitionTimingFunction:l.value.options.easing}),y)}),a={onTransitionend(r){l.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${l.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${l.value.options.duration/1e3}s).`)}};return()=>{const r=!!(l.value.isLanded&&l.value.el);return ks("div",{style:o.value,"data-starport-craft":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true",onTransitionend:l.value.land},ks(O1,{to:r?`#${n.value}`:"body",disabled:!r},ks(l.value.component,be(a,l.value.props))))}}}),ID=ke({name:"StarportCarrier",setup(s,{slots:t}){const l=DD(C(uB,{}));return Cs().appContext.app.provide(na,l),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(l.portMap.entries()).map(([a,{component:r}])=>ks(TD,{key:a,port:a,component:r}))]}}});function RD(s={}){return{install(t){t.provide(uB,s),t.component("Starport",gD),t.component("StarportCarrier",ID)}}}function LD(s){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),s.app.use(sD),s.app.use(RD({keepAlive:!0}))}function bs(s,t,l){var n;return((n=s.instance)==null?void 0:n.$).provides[t]??l}function ND(){return{install(s){s.directive("click",{name:"v-click",mounted(t,l){var u,B,d,f;if(un.value||(u=bs(l,rn))!=null&&u.value)return;const n=bs(l,Kt),o=bs(l,an),a=bs(l,tr),r=l.modifiers.hide!==!1&&l.modifiers.hide!=null,p=l.modifiers.fade!==!1&&l.modifiers.fade!=null,i=((B=n==null?void 0:n.value)==null?void 0:B.length)||0,y=p?_m:Fa;if(n&&!((d=n==null?void 0:n.value)!=null&&d.includes(t))&&n.value.push(t),l.value==null&&(l.value=n==null?void 0:n.value.length),!(a!=null&&a.value.has(l.value)))a==null||a.value.set(l.value,[t]);else if(!((f=a==null?void 0:a.value.get(l.value))!=null&&f.includes(t))){const m=(a==null?void 0:a.value.get(l.value))||[];a==null||a.value.set(l.value,[t].concat(m))}t==null||t.classList.toggle(Yt,!0),o&&ge(o,()=>{const m=(o==null?void 0:o.value)??0,h=l.value!=null?m>=l.value:m>i;t.classList.contains(ha)||t.classList.toggle(y,!h),r!==!1&&r!==void 0&&t.classList.toggle(y,h),t.classList.toggle(Vl,!1);const _=a==null?void 0:a.value.get(m);_==null||_.forEach((x,v)=>{x.classList.toggle(to,!1),v===_.length-1?x.classList.toggle(Vl,!0):x.classList.toggle(to,!0)}),t.classList.contains(Vl)||t.classList.toggle(to,h)},{immediate:!0})},unmounted(t,l){t==null||t.classList.toggle(Yt,!1);const n=bs(l,Kt);n!=null&&n.value&&lr(n.value,t)}}),s.directive("after",{name:"v-after",mounted(t,l){var p,i;if(un.value||(p=bs(l,rn))!=null&&p.value)return;const n=bs(l,Kt),o=bs(l,an),a=bs(l,tr),r=n==null?void 0:n.value.length;l.value==null&&(l.value=n==null?void 0:n.value.length),a!=null&&a.value.has(l.value)?(i=a==null?void 0:a.value.get(l.value))==null||i.push(t):a==null||a.value.set(l.value,[t]),t==null||t.classList.toggle(Yt,!0),o&&ge(o,()=>{const y=(o.value??0)>=(l.value??r??0);t.classList.contains(ha)||t.classList.toggle(Fa,!y),t.classList.toggle(Vl,!1),t.classList.contains(Vl)||t.classList.toggle(to,y)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Yt,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(t,l){var r,p,i;if(un.value||(r=bs(l,rn))!=null&&r.value)return;const n=bs(l,Kt),o=bs(l,an),a=((p=n==null?void 0:n.value)==null?void 0:p.length)||0;n&&!((i=n==null?void 0:n.value)!=null&&i.includes(t))&&n.value.push(t),t==null||t.classList.toggle(Yt,!0),o&&ge(o,()=>{const y=(o==null?void 0:o.value)??0,u=l.value!=null?y>=l.value:y>a;t.classList.toggle(Fa,u),t.classList.toggle(ha,u)},{immediate:!0})},unmounted(t,l){t==null||t.classList.toggle(Yt,!1);const n=bs(l,Kt);n!=null&&n.value&&lr(n.value,t)}})}}}function HD(s,t){const l=_u(s),n=bu(t,l.currentRoute,l.currentPage);return{nav:{...l,...n,downloadPDF:br,next:Mt,nextSlide:An,openInEditor:m7,prev:Ot,prevSlide:Mn},configs:Ae,themeConfigs:A(()=>Ae.themeConfig)}}function qD(){return{install(s){const t=HD(Ts,Os);s.provide(T,Ve(t))}}}const Nl=Af(v7);Nl.use(hs);Nl.use(Fm());Nl.use(ND());Nl.use(qD());LD({app:Nl,router:hs});Nl.mount("#app");export{fc as $,b9 as A,G as B,YD as C,ys as D,Xe as E,Te as F,Cg as G,f7 as H,Os as I,Po as J,i7 as K,ka as L,ul as M,Ve as N,zD as O,XD as P,ge as Q,S as R,pu as S,Me as T,is as U,jg as V,Sn as W,wa as X,l3 as Y,dc as Z,I as _,T as a,Ye as a0,jD as a1,UD as a2,J9 as a3,e_ as a4,VD as a5,et as a6,Gl as a7,Jt as a8,Gs as a9,Fr as aa,mg as ab,Fg as ac,hg as ad,_g as ae,Jr as af,Fy as ag,KD as ah,Bs as ai,no as aj,T_ as ak,Ey as al,bg as am,Hn as an,oc as b,Ae as c,ke as d,md as e,te as f,e as g,E as h,C as i,Ze as j,wu as k,c as l,j as m,as as n,b as o,he as p,rc as q,qn as r,Vs as s,yt as t,WD as u,A as v,ga as w,O as x,su as y,k9 as z};
