function En(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function tt(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=qe(s)?up(s):tt(s);if(r)for(const a in r)t[a]=r[a]}return t}else{if(qe(e))return e;if(Ce(e))return e}}const ip=/;(?![^(]*\))/g,lp=/:([^]+)/,cp=/\/\*.*?\*\//gs;function up(e){const t={};return e.replace(cp,"").split(ip).forEach(n=>{if(n){const s=n.split(lp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function je(e){let t="";if(qe(e))t=e;else if(ue(e))for(let n=0;n<e.length;n++){const s=je(e[n]);s&&(t+=s+" ")}else if(Ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function U(e){if(!e)return null;let{class:t,style:n}=e;return t&&!qe(t)&&(e.class=je(t)),n&&(e.style=tt(n)),e}const pp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",mp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",dp=En(pp),fp=En(mp),hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=En(hp);function jl(e){return!!e||e===""}const sn=e=>qe(e)?e:e==null?"":ue(e)||Ce(e)&&(e.toString===Wl||!fe(e.toString))?JSON.stringify(e,Vl,2):String(e),Vl=(e,t)=>t&&t.__v_isRef?Vl(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Kl(t)?{[`Set(${t.size})`]:[...t.values()]}:Ce(t)&&!ue(t)&&!Gl(t)?String(t):t,Ae=Object.freeze({}),ms=Object.freeze([]),pt=()=>{},zl=()=>!1,_p=/^on[^a-z]/,ar=e=>_p.test(e),Tr=e=>e.startsWith("onUpdate:"),De=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yp=Object.prototype.hasOwnProperty,xe=(e,t)=>yp.call(e,t),ue=Array.isArray,Rn=e=>ir(e)==="[object Map]",Kl=e=>ir(e)==="[object Set]",vp=e=>ir(e)==="[object RegExp]",fe=e=>typeof e=="function",qe=e=>typeof e=="string",ma=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",da=e=>Ce(e)&&fe(e.then)&&fe(e.catch),Wl=Object.prototype.toString,ir=e=>Wl.call(e),fa=e=>ir(e).slice(8,-1),Gl=e=>ir(e)==="[object Object]",ha=e=>qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$r=En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xp=En("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wp=/-(\w)/g,jt=Gr(e=>e.replace(wp,(t,n)=>n?n.toUpperCase():"")),bp=/\B([A-Z])/g,rn=Gr(e=>e.replace(bp,"-$1").toLowerCase()),Wn=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fn=Gr(e=>e?`on${Wn(e)}`:""),Ks=(e,t)=>!Object.is(e,t),gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Co=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$p=e=>{const t=qe(e)?Number(e):NaN;return isNaN(t)?e:t};let ni;const Yl=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let ht;class Zl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!t&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ht;try{return ht=this,t()}finally{ht=n}}else Mr("cannot run an inactive effect scope.")}on(){ht=this}off(){ht=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function JP(e){return new Zl(e)}function Pp(e,t=ht){t&&t.active&&t.effects.push(e)}function Jl(){return ht}function Sp(e){ht?ht.cleanups.push(e):Mr("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ga=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ql=e=>(e.w&Sn)>0,Xl=e=>(e.n&Sn)>0,Bp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Sn},kp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Ql(r)&&!Xl(r)?r.delete(e):t[n++]=r,r.w&=~Sn,r.n&=~Sn}t.length=n}},Or=new WeakMap;let Os=0,Sn=1;const To=30;let it;const qn=Symbol("iterate"),Fo=Symbol("Map key iterate");class _a{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pp(this,s)}run(){if(!this.active)return this.fn();let t=it,n=vn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=it,it=this,vn=!0,Sn=1<<++Os,Os<=To?Bp(this):si(this),this.fn()}finally{Os<=To&&kp(this),Sn=1<<--Os,it=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(si(this),this.onStop&&this.onStop(),this.active=!1)}}function si(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let vn=!0;const ec=[];function Jn(){ec.push(vn),vn=!1}function Qn(){const e=ec.pop();vn=e===void 0?!0:e}function mt(e,t,n){if(vn&&it){let s=Or.get(e);s||Or.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=ga()),tc(r,{effect:it,target:e,type:t,key:n})}}function tc(e,t){let n=!1;Os<=To?Xl(e)||(e.n|=Sn,n=!Ql(e)):n=!e.has(it),n&&(e.add(it),it.deps.push(e),it.onTrack&&it.onTrack(Object.assign({effect:it},t)))}function on(e,t,n,s,r,a){const i=Or.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&ue(e)){const u=Number(s);i.forEach((p,m)=>{(m==="length"||m>=u)&&l.push(p)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":ue(e)?ha(n)&&l.push(i.get("length")):(l.push(i.get(qn)),Rn(e)&&l.push(i.get(Fo)));break;case"delete":ue(e)||(l.push(i.get(qn)),Rn(e)&&l.push(i.get(Fo)));break;case"set":Rn(e)&&l.push(i.get(qn));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:a};if(l.length===1)l[0]&&Mo(l[0],c);else{const u=[];for(const p of l)p&&u.push(...p);Mo(ga(u),c)}}function Mo(e,t){const n=ue(e)?e:[...e];for(const s of n)s.computed&&ri(s,t);for(const s of n)s.computed||ri(s,t)}function ri(e,t){(e!==it||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(De({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Ep(e,t){var n;return(n=Or.get(e))===null||n===void 0?void 0:n.get(t)}const Np=En("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ma)),Cp=Yr(),Tp=Yr(!1,!0),Fp=Yr(!0),Mp=Yr(!0,!0),oi=Op();function Op(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let a=0,i=this.length;a<i;a++)mt(s,"get",a+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jn();const s=he(this)[t].apply(this,n);return Qn(),s}}),e}function Ap(e){const t=he(this);return mt(t,"has",e),t.hasOwnProperty(e)}function Yr(e=!1,t=!1){return function(s,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(e?t?uc:cc:t?lc:ic).get(s))return s;const i=ue(s);if(!e){if(i&&xe(oi,r))return Reflect.get(oi,r,a);if(r==="hasOwnProperty")return Ap}const l=Reflect.get(s,r,a);return(ma(r)?nc.has(r):Np(r))||(e||mt(s,"get",r),t)?l:Se(l)?i&&ha(r)?l:l.value:Ce(l)?e?Ut(l):Qe(l):l}}const Ip=sc(),Lp=sc(!0);function sc(e=!1){return function(n,s,r,a){let i=n[s];if(Bn(i)&&Se(i)&&!Se(r))return!1;if(!e&&(!Ar(r)&&!Bn(r)&&(i=he(i),r=he(r)),!ue(n)&&Se(i)&&!Se(r)))return i.value=r,!0;const l=ue(n)&&ha(s)?Number(s)<n.length:xe(n,s),c=Reflect.set(n,s,r,a);return n===he(a)&&(l?Ks(r,i)&&on(n,"set",s,r,i):on(n,"add",s,r)),c}}function Rp(e,t){const n=xe(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&on(e,"delete",t,void 0,s),r}function qp(e,t){const n=Reflect.has(e,t);return(!ma(t)||!nc.has(t))&&mt(e,"has",t),n}function Up(e){return mt(e,"iterate",ue(e)?"length":qn),Reflect.ownKeys(e)}const rc={get:Cp,set:Ip,deleteProperty:Rp,has:qp,ownKeys:Up},oc={get:Fp,set(e,t){return Mr(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Mr(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Dp=De({},rc,{get:Tp,set:Lp}),Hp=De({},oc,{get:Mp}),ya=e=>e,Zr=e=>Reflect.getPrototypeOf(e);function fr(e,t,n=!1,s=!1){e=e.__v_raw;const r=he(e),a=he(t);n||(t!==a&&mt(r,"get",t),mt(r,"get",a));const{has:i}=Zr(r),l=s?ya:n?xa:Ws;if(i.call(r,t))return l(e.get(t));if(i.call(r,a))return l(e.get(a));e!==r&&e.get(t)}function hr(e,t=!1){const n=this.__v_raw,s=he(n),r=he(e);return t||(e!==r&&mt(s,"has",e),mt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function gr(e,t=!1){return e=e.__v_raw,!t&&mt(he(e),"iterate",qn),Reflect.get(e,"size",e)}function ai(e){e=he(e);const t=he(this);return Zr(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function ii(e,t){t=he(t);const n=he(this),{has:s,get:r}=Zr(n);let a=s.call(n,e);a?ac(n,s,e):(e=he(e),a=s.call(n,e));const i=r.call(n,e);return n.set(e,t),a?Ks(t,i)&&on(n,"set",e,t,i):on(n,"add",e,t),this}function li(e){const t=he(this),{has:n,get:s}=Zr(t);let r=n.call(t,e);r?ac(t,n,e):(e=he(e),r=n.call(t,e));const a=s?s.call(t,e):void 0,i=t.delete(e);return r&&on(t,"delete",e,void 0,a),i}function ci(){const e=he(this),t=e.size!==0,n=Rn(e)?new Map(e):new Set(e),s=e.clear();return t&&on(e,"clear",void 0,void 0,n),s}function _r(e,t){return function(s,r){const a=this,i=a.__v_raw,l=he(i),c=t?ya:e?xa:Ws;return!e&&mt(l,"iterate",qn),i.forEach((u,p)=>s.call(r,c(u),c(p),a))}}function yr(e,t,n){return function(...s){const r=this.__v_raw,a=he(r),i=Rn(a),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...s),p=n?ya:t?xa:Ws;return!t&&mt(a,"iterate",c?Fo:qn),{next(){const{value:m,done:d}=u.next();return d?{value:m,done:d}:{value:l?[p(m[0]),p(m[1])]:p(m),done:d}},[Symbol.iterator](){return this}}}}function cn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Wn(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function jp(){const e={get(a){return fr(this,a)},get size(){return gr(this)},has:hr,add:ai,set:ii,delete:li,clear:ci,forEach:_r(!1,!1)},t={get(a){return fr(this,a,!1,!0)},get size(){return gr(this)},has:hr,add:ai,set:ii,delete:li,clear:ci,forEach:_r(!1,!0)},n={get(a){return fr(this,a,!0)},get size(){return gr(this,!0)},has(a){return hr.call(this,a,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:_r(!0,!1)},s={get(a){return fr(this,a,!0,!0)},get size(){return gr(this,!0)},has(a){return hr.call(this,a,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:_r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=yr(a,!1,!1),n[a]=yr(a,!0,!1),t[a]=yr(a,!1,!0),s[a]=yr(a,!0,!0)}),[e,n,t,s]}const[Vp,zp,Kp,Wp]=jp();function Jr(e,t){const n=t?e?Wp:Kp:e?zp:Vp;return(s,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,a)}const Gp={get:Jr(!1,!1)},Yp={get:Jr(!1,!0)},Zp={get:Jr(!0,!1)},Jp={get:Jr(!0,!0)};function ac(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const r=fa(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ic=new WeakMap,lc=new WeakMap,cc=new WeakMap,uc=new WeakMap;function Qp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xp(e){return e.__v_skip||!Object.isExtensible(e)?0:Qp(fa(e))}function Qe(e){return Bn(e)?e:Qr(e,!1,rc,Gp,ic)}function em(e){return Qr(e,!1,Dp,Yp,lc)}function Ut(e){return Qr(e,!0,oc,Zp,cc)}function us(e){return Qr(e,!0,Hp,Jp,uc)}function Qr(e,t,n,s,r){if(!Ce(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const i=Xp(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Un(e){return Bn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Bn(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function Ir(e){return Un(e)||Bn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function va(e){return Fr(e,"__v_skip",!0),e}const Ws=e=>Ce(e)?Qe(e):e,xa=e=>Ce(e)?Ut(e):e;function wa(e){vn&&it&&(e=he(e),tc(e.dep||(e.dep=ga()),{target:e,type:"get",key:"value"}))}function ba(e,t){e=he(e);const n=e.dep;n&&Mo(n,{target:e,type:"set",key:"value",newValue:t})}function Se(e){return!!(e&&e.__v_isRef===!0)}function le(e){return pc(e,!1)}function Vt(e){return pc(e,!0)}function pc(e,t){return Se(e)?e:new tm(e,t)}class tm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:Ws(t)}get value(){return wa(this),this._value}set value(t){const n=this.__v_isShallow||Ar(t)||Bn(t);t=n?t:he(t),Ks(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ws(t),ba(this,t))}}function b(e){return Se(e)?e.value:e}const nm={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function mc(e){return Un(e)?e:new Proxy(e,nm)}class sm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>wa(this),()=>ba(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function dc(e){return new sm(e)}function rm(e){Ir(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(e)?new Array(e.length):{};for(const n in e)t[n]=am(e,n);return t}class om{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ep(he(this._object),this._key)}}function am(e,t,n){const s=e[t];return Se(s)?s:new om(e,t,n)}var fc;class im{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fc]=!1,this._dirty=!0,this.effect=new _a(t,()=>{this._dirty||(this._dirty=!0,ba(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=he(this);return wa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}fc="__v_isReadonly";function lm(e,t,n=!1){let s,r;const a=fe(e);a?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const i=new im(s,r,a||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const Dn=[];function Pr(e){Dn.push(e)}function Sr(){Dn.pop()}function L(e,...t){Jn();const n=Dn.length?Dn[Dn.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=cm();if(s)nn(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:a})=>`at <${lo(n,a.type)}>`).join(`
`),r]);else{const a=[`[Vue warn]: ${e}`,...t];r.length&&a.push(`
`,...um(r)),console.warn(...a)}Qn()}function cm(){let e=Dn[Dn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function um(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...pm(n))}),t}function pm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${lo(e.component,e.type,s)}`,a=">"+n;return e.props?[r,...mm(e.props),a]:[r+a]}function mm(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...hc(s,e[s]))}),n.length>3&&t.push(" ..."),t}function hc(e,t,n){return qe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Se(t)?(t=hc(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):fe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function dm(e,t){e!==void 0&&(typeof e!="number"?L(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&L(`${t} is NaN - the duration expression might be incorrect.`))}const $a={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function nn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(a){Xr(a,t,n)}return r}function $t(e,t,n,s){if(fe(e)){const a=nn(e,t,n,s);return a&&da(a)&&a.catch(i=>{Xr(i,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push($t(e[a],t,n,s));return r}function Xr(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const i=t.proxy,l=$a[n];for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,l)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,i,l]);return}}fm(e,n,r,s)}function fm(e,t,n,s=!0){{const r=$a[t];if(n&&Pr(n),L(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Sr(),s)throw e;console.error(e)}}let Gs=!1,Oo=!1;const et=[];let Rt=0;const ds=[];let Lt=null,dn=0;const gc=Promise.resolve();let Pa=null;const hm=100;function Tt(e){const t=Pa||gc;return e?t.then(this?e.bind(this):e):t}function gm(e){let t=Rt+1,n=et.length;for(;t<n;){const s=t+n>>>1;Ys(et[s])<e?t=s+1:n=s}return t}function eo(e){(!et.length||!et.includes(e,Gs&&e.allowRecurse?Rt+1:Rt))&&(e.id==null?et.push(e):et.splice(gm(e.id),0,e),_c())}function _c(){!Gs&&!Oo&&(Oo=!0,Pa=gc.then(xc))}function _m(e){const t=et.indexOf(e);t>Rt&&et.splice(t,1)}function yc(e){ue(e)?ds.push(...e):(!Lt||!Lt.includes(e,e.allowRecurse?dn+1:dn))&&ds.push(e),_c()}function ui(e,t=Gs?Rt+1:0){for(e=e||new Map;t<et.length;t++){const n=et[t];if(n&&n.pre){if(Sa(e,n))continue;et.splice(t,1),t--,n()}}}function vc(e){if(ds.length){const t=[...new Set(ds)];if(ds.length=0,Lt){Lt.push(...t);return}for(Lt=t,e=e||new Map,Lt.sort((n,s)=>Ys(n)-Ys(s)),dn=0;dn<Lt.length;dn++)Sa(e,Lt[dn])||Lt[dn]();Lt=null,dn=0}}const Ys=e=>e.id==null?1/0:e.id,ym=(e,t)=>{const n=Ys(e)-Ys(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xc(e){Oo=!1,Gs=!0,e=e||new Map,et.sort(ym);const t=n=>Sa(e,n);try{for(Rt=0;Rt<et.length;Rt++){const n=et[Rt];if(n&&n.active!==!1){if(t(n))continue;nn(n,null,14)}}}finally{Rt=0,et.length=0,vc(e),Gs=!1,Pa=null,(et.length||ds.length)&&xc(e)}}function Sa(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>hm){const s=t.ownerInstance,r=s&&Xs(s.type);return L(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let xn=!1;const is=new Set;Yl().__VUE_HMR_RUNTIME__={createRecord:po(wc),rerender:po(wm),reload:po(bm)};const Gn=new Map;function vm(e){const t=e.type.__hmrId;let n=Gn.get(t);n||(wc(t,e.type),n=Gn.get(t)),n.instances.add(e)}function xm(e){Gn.get(e.type.__hmrId).instances.delete(e)}function wc(e,t){return Gn.has(e)?!1:(Gn.set(e,{initialDef:qs(t),instances:new Set}),!0)}function qs(e){return Jc(e)?e.__vccOpts:e}function wm(e,t){const n=Gn.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,qs(s.type).render=t),s.renderCache=[],xn=!0,s.update(),xn=!1}))}function bm(e,t){const n=Gn.get(e);if(!n)return;t=qs(t),pi(n.initialDef,t);const s=[...n.instances];for(const r of s){const a=qs(r.type);is.has(a)||(a!==n.initialDef&&pi(a,t),is.add(a)),r.appContext.optionsCache.delete(r.type),r.ceReload?(is.add(a),r.ceReload(t.styles),is.delete(a)):r.parent?eo(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}yc(()=>{for(const r of s)is.delete(qs(r.type))})}function pi(e,t){De(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function po(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let qt,As=[],Ao=!1;function lr(e,...t){qt?qt.emit(e,...t):Ao||As.push({event:e,args:t})}function bc(e,t){var n,s;qt=e,qt?(qt.enabled=!0,As.forEach(({event:r,args:a})=>qt.emit(r,...a)),As=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{bc(a,t)}),setTimeout(()=>{qt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ao=!0,As=[])},3e3)):(Ao=!0,As=[])}function $m(e,t){lr("app:init",e,t,{Fragment:Ne,Text:mr,Comment:Ye,Static:Br})}function Pm(e){lr("app:unmount",e)}const Io=Ba("component:added"),$c=Ba("component:updated"),Sm=Ba("component:removed"),Bm=e=>{qt&&typeof qt.cleanupBuffer=="function"&&!qt.cleanupBuffer(e)&&Sm(e)};function Ba(e){return t=>{lr(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const km=Pc("perf:start"),Em=Pc("perf:end");function Pc(e){return(t,n,s)=>{lr(e,t.appContext.app,t.uid,t,n,s)}}function Nm(e,t,n){lr("component:emit",e.appContext.app,e,t,n)}function Cm(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ae;{const{emitsOptions:p,propsOptions:[m]}=e;if(p)if(!(t in p))(!m||!(Fn(t)in m))&&L(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Fn(t)}" prop.`);else{const d=p[t];fe(d)&&(d(...n)||L(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in s){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:d}=s[p]||Ae;d&&(r=n.map(h=>qe(h)?h.trim():h)),m&&(r=n.map(Co))}Nm(e,t,r);{const p=t.toLowerCase();p!==t&&s[Fn(p)]&&L(`Event "${p}" is emitted in component ${lo(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rn(t)}" instead of "${t}".`)}let l,c=s[l=Fn(t)]||s[l=Fn(jt(t))];!c&&a&&(c=s[l=Fn(rn(t))]),c&&$t(c,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(u,e,6,r)}}function Sc(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const a=e.emits;let i={},l=!1;if(!fe(e)){const c=u=>{const p=Sc(u,t,!0);p&&(l=!0,De(i,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(Ce(e)&&s.set(e,null),null):(ue(a)?a.forEach(c=>i[c]=null):De(i,a),Ce(e)&&s.set(e,i),i)}function to(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),xe(e,t[0].toLowerCase()+t.slice(1))||xe(e,rn(t))||xe(e,t))}let We=null,no=null;function Lr(e){const t=We;return We=e,no=e&&e.type.__scopeId||null,t}function QP(e){no=e}function XP(){no=null}function M(e,t=We,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Pi(-1);const a=Lr(t);let i;try{i=e(...r)}finally{Lr(a),s._d&&Pi(1)}return $c(t),i};return s._n=!0,s._c=!0,s._d=!0,s}let Lo=!1;function Rr(){Lo=!0}function mo(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:a,propsOptions:[i],slots:l,attrs:c,emit:u,render:p,renderCache:m,data:d,setupState:h,ctx:g,inheritAttrs:v}=e;let w,E;const P=Lr(e);Lo=!1;try{if(n.shapeFlag&4){const W=r||s;w=Et(p.call(W,W,m,a,h,d,g)),E=c}else{const W=t;c===a&&Rr(),w=Et(W.length>1?W(a,{get attrs(){return Rr(),c},slots:l,emit:u}):W(a,null)),E=t.props?c:Fm(c)}}catch(W){Ds.length=0,Xr(W,e,1),w=ae(Ye)}let N=w,F;if(w.patchFlag>0&&w.patchFlag&2048&&([N,F]=Tm(w)),E&&v!==!1){const W=Object.keys(E),{shapeFlag:G}=N;if(W.length){if(G&7)i&&W.some(Tr)&&(E=Mm(E,i)),N=Ft(N,E);else if(!Lo&&N.type!==Ye){const z=Object.keys(c),H=[],ne=[];for(let ie=0,de=z.length;ie<de;ie++){const J=z[ie];ar(J)?Tr(J)||H.push(J[2].toLowerCase()+J.slice(3)):ne.push(J)}ne.length&&L(`Extraneous non-props attributes (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),H.length&&L(`Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(mi(N)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),N=Ft(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(mi(N)||L("Component inside <Transition> renders non-element root node that cannot be animated."),N.transition=n.transition),F?F(N):w=N,Lr(P),w}const Tm=e=>{const t=e.children,n=e.dynamicChildren,s=Bc(t);if(!s)return[e,void 0];const r=t.indexOf(s),a=n?n.indexOf(s):-1,i=l=>{t[r]=l,n&&(a>-1?n[a]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Et(s),i]};function Bc(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Yn(s)){if(s.type!==Ye||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Fm=e=>{let t;for(const n in e)(n==="class"||n==="style"||ar(n))&&((t||(t={}))[n]=e[n]);return t},Mm=(e,t)=>{const n={};for(const s in e)(!Tr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},mi=e=>e.shapeFlag&7||e.type===Ye;function Om(e,t,n){const{props:s,children:r,component:a}=e,{props:i,children:l,patchFlag:c}=t,u=a.emitsOptions;if((r||l)&&xn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?di(s,i,u):!!i;if(c&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const d=p[m];if(i[d]!==s[d]&&!to(u,d))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?di(s,i,u):!0:!!i;return!1}function di(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(t[a]!==e[a]&&!to(n,a))return!0}return!1}function Am({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kc=e=>e.__isSuspense;function Im(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):yc(e)}function gt(e,t){if(!He)L("provide() can only be used inside setup().");else{let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[e]=t}}function S(e,t,n=!1){const s=He||We;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&fe(t)?t.call(s.proxy):t;L(`injection "${String(e)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function bs(e,t){return ka(e,null,t)}const vr={};function Ue(e,t,n){return fe(t)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ka(e,t,n)}function ka(e,t,{immediate:n,deep:s,flush:r,onTrack:a,onTrigger:i}=Ae){t||(n!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=F=>{L("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Jl()===(He==null?void 0:He.scope)?He:null;let u,p=!1,m=!1;if(Se(e)?(u=()=>e.value,p=Ar(e)):Un(e)?(u=()=>e,s=!0):ue(e)?(m=!0,p=e.some(F=>Un(F)||Ar(F)),u=()=>e.map(F=>{if(Se(F))return F.value;if(Un(F))return In(F);if(fe(F))return nn(F,c,2);l(F)})):fe(e)?t?u=()=>nn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),$t(e,c,3,[h])}:(u=pt,l(e)),t&&s){const F=u;u=()=>In(F())}let d,h=F=>{d=P.onStop=()=>{nn(F,c,4)}},g;if(Qs)if(h=pt,t?n&&$t(t,c,3,[u(),m?[]:void 0,h]):u(),r==="sync"){const F=Hd();g=F.__watcherHandles||(F.__watcherHandles=[])}else return pt;let v=m?new Array(e.length).fill(vr):vr;const w=()=>{if(P.active)if(t){const F=P.run();(s||p||(m?F.some((W,G)=>Ks(W,v[G])):Ks(F,v)))&&(d&&d(),$t(t,c,3,[F,v===vr?void 0:m&&v[0]===vr?[]:v,h]),v=F)}else P.run()};w.allowRecurse=!!t;let E;r==="sync"?E=w:r==="post"?E=()=>Je(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),E=()=>eo(w));const P=new _a(u,E);P.onTrack=a,P.onTrigger=i,t?n?w():v=P.run():r==="post"?Je(P.run.bind(P),c&&c.suspense):P.run();const N=()=>{P.stop(),c&&c.scope&&pa(c.scope.effects,P)};return g&&g.push(N),N}function Lm(e,t,n){const s=this.proxy,r=qe(e)?e.includes(".")?Ec(s,e):()=>s[e]:e.bind(s,s);let a;fe(t)?a=t:(a=t.handler,n=t);const i=He;ys(this);const l=ka(r,a.bind(s),n);return i?ys(i):jn(),l}function Ec(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function In(e,t){if(!Ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))In(e.value,t);else if(ue(e))for(let n=0;n<e.length;n++)In(e[n],t);else if(Kl(e)||Rn(e))e.forEach(n=>{In(n,t)});else if(Gl(e))for(const n in e)In(e[n],t);return e}function Nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ur(()=>{e.isMounted=!0}),Ca(()=>{e.isUnmounting=!0}),e}const vt=[Function,Array],Rm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(e,{slots:t}){const n=Wt(),s=Nc();let r;return()=>{const a=t.default&&Ea(t.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){let v=!1;for(const w of a)if(w.type!==Ye){if(v){L("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=w,v=!0}}const l=he(e),{mode:c}=l;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&L(`invalid <transition> mode: ${c}`),s.isLeaving)return fo(i);const u=fi(i);if(!u)return fo(i);const p=Zs(u,l,s,n);_s(u,p);const m=n.subTree,d=m&&fi(m);let h=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,h=!0)}if(d&&d.type!==Ye&&(!yn(u,d)||h)){const v=Zs(d,l,s,n);if(_s(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},fo(i);c==="in-out"&&u.type!==Ye&&(v.delayLeave=(w,E,P)=>{const N=Cc(s,d);N[String(d.key)]=d,w._leaveCb=()=>{E(),w._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=P})}return i}}},qm=Rm;function Cc(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Zs(e,t,n,s){const{appear:r,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:m,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:v,onAppear:w,onAfterAppear:E,onAppearCancelled:P}=t,N=String(e.key),F=Cc(n,e),W=(H,ne)=>{H&&$t(H,s,9,ne)},G=(H,ne)=>{const ie=ne[1];W(H,ne),ue(H)?H.every(de=>de.length<=1)&&ie():H.length<=1&&ie()},z={mode:a,persisted:i,beforeEnter(H){let ne=l;if(!n.isMounted)if(r)ne=v||l;else return;H._leaveCb&&H._leaveCb(!0);const ie=F[N];ie&&yn(e,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),W(ne,[H])},enter(H){let ne=c,ie=u,de=p;if(!n.isMounted)if(r)ne=w||c,ie=E||u,de=P||p;else return;let J=!1;const we=H._enterCb=Ie=>{J||(J=!0,Ie?W(de,[H]):W(ie,[H]),z.delayedLeave&&z.delayedLeave(),H._enterCb=void 0)};ne?G(ne,[H,we]):we()},leave(H,ne){const ie=String(e.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ne();W(m,[H]);let de=!1;const J=H._leaveCb=we=>{de||(de=!0,ne(),we?W(g,[H]):W(h,[H]),H._leaveCb=void 0,F[ie]===e&&delete F[ie])};F[ie]=e,d?G(d,[H,J]):J()},clone(H){return Zs(H,t,n,s)}};return z}function fo(e){if(cr(e))return e=Ft(e),e.children=null,e}function fi(e){return cr(e)?e.children?e.children[0]:void 0:e}function _s(e,t){e.shapeFlag&6&&e.component?_s(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ea(e,t=!1,n){let s=[],r=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===Ne?(i.patchFlag&128&&r++,s=s.concat(Ea(i.children,t,l))):(t||i.type!==Ye)&&s.push(l!=null?Ft(i,{key:l}):i)}if(r>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}function ke(e){return fe(e)?{setup:e,name:e.name}:e}const fs=e=>!!e.type.__asyncLoader,cr=e=>e.type.__isKeepAlive,Um={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Wt(),s=n.ctx;if(!s.renderer)return()=>{const P=t.default&&t.default();return P&&P.length===1?P[0]:P};const r=new Map,a=new Set;let i=null;n.__v_cache=r;const l=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:m}}}=s,d=m("div");s.activate=(P,N,F,W,G)=>{const z=P.component;u(P,N,F,0,l),c(z.vnode,P,N,F,z,l,W,P.slotScopeIds,G),Je(()=>{z.isDeactivated=!1,z.a&&gn(z.a);const H=P.props&&P.props.onVnodeMounted;H&&xt(H,z.parent,P)},l),Io(z)},s.deactivate=P=>{const N=P.component;u(P,d,null,1,l),Je(()=>{N.da&&gn(N.da);const F=P.props&&P.props.onVnodeUnmounted;F&&xt(F,N.parent,P),N.isDeactivated=!0},l),Io(N)};function h(P){ho(P),p(P,n,l,!0)}function g(P){r.forEach((N,F)=>{const W=Xs(N.type);W&&(!P||!P(W))&&v(F)})}function v(P){const N=r.get(P);!i||!yn(N,i)?h(N):i&&ho(i),r.delete(P),a.delete(P)}Ue(()=>[e.include,e.exclude],([P,N])=>{P&&g(F=>Is(P,F)),N&&g(F=>!Is(N,F))},{flush:"post",deep:!0});let w=null;const E=()=>{w!=null&&r.set(w,go(n.subTree))};return ur(E),Na(E),Ca(()=>{r.forEach(P=>{const{subTree:N,suspense:F}=n,W=go(N);if(P.type===W.type&&P.key===W.key){ho(W);const G=W.component.da;G&&Je(G,F);return}h(P)})}),()=>{if(w=null,!t.default)return null;const P=t.default(),N=P[0];if(P.length>1)return L("KeepAlive should contain exactly one component child."),i=null,P;if(!Yn(N)||!(N.shapeFlag&4)&&!(N.shapeFlag&128))return i=null,N;let F=go(N);const W=F.type,G=Xs(fs(F)?F.type.__asyncResolved||{}:W),{include:z,exclude:H,max:ne}=e;if(z&&(!G||!Is(z,G))||H&&G&&Is(H,G))return i=F,N;const ie=F.key==null?W:F.key,de=r.get(ie);return F.el&&(F=Ft(F),N.shapeFlag&128&&(N.ssContent=F)),w=ie,de?(F.el=de.el,F.component=de.component,F.transition&&_s(F,F.transition),F.shapeFlag|=512,a.delete(ie),a.add(ie)):(a.add(ie),ne&&a.size>parseInt(ne,10)&&v(a.values().next().value)),F.shapeFlag|=256,i=F,kc(N.type)?N:F}}},Tc=Um;function Is(e,t){return ue(e)?e.some(n=>Is(n,t)):qe(e)?e.split(",").includes(t):vp(e)?e.test(t):!1}function Dm(e,t){Fc(e,"a",t)}function Hm(e,t){Fc(e,"da",t)}function Fc(e,t,n=He){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(so(t,s,n),n){let r=n.parent;for(;r&&r.parent;)cr(r.parent.vnode)&&jm(s,t,n,r),r=r.parent}}function jm(e,t,n,s){const r=so(t,e,s,!0);ro(()=>{pa(s[t],r)},n)}function ho(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function go(e){return e.shapeFlag&128?e.ssContent:e}function so(e,t,n=He,s=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Jn(),ys(n);const l=$t(t,n,e,i);return jn(),Qn(),l});return s?r.unshift(a):r.push(a),a}else{const r=Fn($a[e].replace(/ hook$/,""));L(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const an=e=>(t,n=He)=>(!Qs||e==="sp")&&so(e,(...s)=>t(...s),n),Vm=an("bm"),ur=an("m"),zm=an("bu"),Na=an("u"),Ca=an("bum"),ro=an("um"),Km=an("sp"),Wm=an("rtg"),Gm=an("rtc");function Ym(e,t=He){so("ec",e,t)}function Mc(e){xp(e)&&L("Do not use built-in directive ids as custom directive id: "+e)}function Ta(e,t){const n=We;if(n===null)return L("withDirectives can only be used inside render functions."),e;const s=io(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,l,c,u=Ae]=t[a];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&In(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Nn(e,t,n,s){const r=e.dirs,a=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];a&&(l.oldValue=a[i].value);let c=l.dir[s];c&&(Jn(),$t(c,n,8,[e.el,l,e,t]),Qn())}}const Ro="components";function oo(e,t){return Jm(Ro,e,!0,t)||e}const Zm=Symbol();function Jm(e,t,n=!0,s=!1){const r=We||He;if(r){const a=r.type;if(e===Ro){const l=Xs(a,!1);if(l&&(l===t||l===jt(t)||l===Wn(jt(t))))return a}const i=hi(r[e]||a[e],t)||hi(r.appContext[e],t);if(!i&&s)return a;if(n&&!i){const l=e===Ro?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return i}else L(`resolve${Wn(e.slice(0,-1))} can only be used in render() or setup().`)}function hi(e,t){return e&&(e[t]||e[jt(t)]||e[Wn(jt(t))])}function pr(e,t,n,s){let r;const a=n&&n[s];if(ue(e)||qe(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){Number.isInteger(e)||L(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,a&&a[i])}else if(Ce(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];r[l]=t(e[u],u,l,a&&a[l])}}else r=[];return n&&(n[s]=r),r}function zt(e,t,n={},s,r){if(We.isCE||We.parent&&fs(We.parent)&&We.parent.isCE)return t!=="default"&&(n.name=t),ae("slot",n,s&&s());let a=e[t];a&&a.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),a=()=>[]),a&&a._c&&(a._d=!1),y();const i=a&&Oc(a(n)),l=B(Ne,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),a&&a._c&&(a._d=!0),l}function Oc(e){return e.some(t=>Yn(t)?!(t.type===Ye||t.type===Ne&&!Oc(t.children)):!0)?e:null}const qo=e=>e?Gc(e)?io(e)||e.proxy:qo(e.parent):null,Hn=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>us(e.props),$attrs:e=>us(e.attrs),$slots:e=>us(e.slots),$refs:e=>us(e.refs),$parent:e=>qo(e.parent),$root:e=>qo(e.root),$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>eo(e.update)),$nextTick:e=>e.n||(e.n=Tt.bind(e.proxy)),$watch:e=>Lm.bind(e)}),Fa=e=>e==="_"||e==="$",_o=(e,t)=>e!==Ae&&!e.__isScriptSetup&&xe(e,t),Ac={get({_:e},t){const{ctx:n,setupState:s,data:r,props:a,accessCache:i,type:l,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(_o(s,t))return i[t]=1,s[t];if(r!==Ae&&xe(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&xe(u,t))return i[t]=3,a[t];if(n!==Ae&&xe(n,t))return i[t]=4,n[t];Uo&&(i[t]=0)}}const p=Hn[t];let m,d;if(p)return t==="$attrs"&&(mt(e,"get",t),Rr()),p(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Ae&&xe(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,xe(d,t))return d[t];We&&(!qe(t)||t.indexOf("__v")!==0)&&(r!==Ae&&Fa(t[0])&&xe(r,t)?L(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===We&&L(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:a}=e;return _o(r,t)?(r[t]=n,!0):r.__isScriptSetup&&xe(r,t)?(L(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Ae&&xe(s,t)?(s[t]=n,!0):xe(e.props,t)?(L(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(L(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(a,t,{enumerable:!0,configurable:!0,value:n}):a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:a}},i){let l;return!!n[i]||e!==Ae&&xe(e,i)||_o(t,i)||(l=a[0])&&xe(l,i)||xe(s,i)||xe(Hn,i)||xe(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:xe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Ac.ownKeys=e=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Qm(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Hn).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>Hn[n](e),set:pt})}),t}function Xm(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:pt})})}function ed(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(Fa(s[0])){L(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:pt})}})}function td(){const e=Object.create(null);return(t,n)=>{e[n]?L(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Uo=!0;function nd(e){const t=Ma(e),n=e.proxy,s=e.ctx;Uo=!1,t.beforeCreate&&gi(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:i,watch:l,provide:c,inject:u,created:p,beforeMount:m,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:w,beforeDestroy:E,beforeUnmount:P,destroyed:N,unmounted:F,render:W,renderTracked:G,renderTriggered:z,errorCaptured:H,serverPrefetch:ne,expose:ie,inheritAttrs:de,components:J,directives:we,filters:Ie}=t,Be=td();{const[Q]=e.propsOptions;if(Q)for(const pe in Q)Be("Props",pe)}if(u&&sd(u,s,Be,e.appContext.config.unwrapInjectedRef),i)for(const Q in i){const pe=i[Q];fe(pe)?(Object.defineProperty(s,Q,{value:pe.bind(n),configurable:!0,enumerable:!0,writable:!0}),Be("Methods",Q)):L(`Method "${Q}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(r){fe(r)||L("The data option must be a function. Plain object usage is no longer supported.");const Q=r.call(n,n);if(da(Q)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ce(Q))L("data() should return an object.");else{e.data=Qe(Q);for(const pe in Q)Be("Data",pe),Fa(pe[0])||Object.defineProperty(s,pe,{configurable:!0,enumerable:!0,get:()=>Q[pe],set:pt})}}if(Uo=!0,a)for(const Q in a){const pe=a[Q],ye=fe(pe)?pe.bind(n,n):fe(pe.get)?pe.get.bind(n,n):pt;ye===pt&&L(`Computed property "${Q}" has no getter.`);const Me=!fe(pe)&&fe(pe.set)?pe.set.bind(n):()=>{L(`Write operation failed: computed property "${Q}" is readonly.`)},dt=A({get:ye,set:Me});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Xe=>dt.value=Xe}),Be("Computed",Q)}if(l)for(const Q in l)Ic(l[Q],s,n,Q);if(c){const Q=fe(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(pe=>{gt(pe,Q[pe])})}p&&gi(p,e,"c");function Le(Q,pe){ue(pe)?pe.forEach(ye=>Q(ye.bind(n))):pe&&Q(pe.bind(n))}if(Le(Vm,m),Le(ur,d),Le(zm,h),Le(Na,g),Le(Dm,v),Le(Hm,w),Le(Ym,H),Le(Gm,G),Le(Wm,z),Le(Ca,P),Le(ro,F),Le(Km,ne),ue(ie))if(ie.length){const Q=e.exposed||(e.exposed={});ie.forEach(pe=>{Object.defineProperty(Q,pe,{get:()=>n[pe],set:ye=>n[pe]=ye})})}else e.exposed||(e.exposed={});W&&e.render===pt&&(e.render=W),de!=null&&(e.inheritAttrs=de),J&&(e.components=J),we&&(e.directives=we)}function sd(e,t,n=pt,s=!1){ue(e)&&(e=Do(e));for(const r in e){const a=e[r];let i;Ce(a)?"default"in a?i=S(a.from||r,a.default,!0):i=S(a.from||r):i=S(a),Se(i)?s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):(L(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function gi(e,t,n){$t(ue(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ic(e,t,n,s){const r=s.includes(".")?Ec(n,s):()=>n[s];if(qe(e)){const a=t[e];fe(a)?Ue(r,a):L(`Invalid watch handler specified by key "${e}"`,a)}else if(fe(e))Ue(r,e.bind(n));else if(Ce(e))if(ue(e))e.forEach(a=>Ic(a,t,n,s));else{const a=fe(e.handler)?e.handler.bind(n):t[e.handler];fe(a)?Ue(r,a,e):L(`Invalid watch handler specified by key "${e.handler}"`,a)}else L(`Invalid watch option: "${s}"`,e)}function Ma(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>qr(c,u,i,!0)),qr(c,t,i)),Ce(t)&&a.set(t,c),c}function qr(e,t,n,s=!1){const{mixins:r,extends:a}=t;a&&qr(e,a,n,!0),r&&r.forEach(i=>qr(e,i,n,!0));for(const i in t)if(s&&i==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=rd[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const rd={data:_i,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Mn,directives:Mn,watch:ad,provide:_i,inject:od};function _i(e,t){return t?e?function(){return De(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function od(e,t){return Mn(Do(e),Do(t))}function Do(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?De(De(Object.create(null),e),t):t}function ad(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const s in t)n[s]=rt(e[s],t[s]);return n}function id(e,t,n,s=!1){const r={},a={};Fr(a,ao,1),e.propsDefaults=Object.create(null),Lc(e,t,r,a);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);qc(t||{},r,e),n?e.props=s?r:em(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function ld(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function cd(e,t,n,s){const{props:r,attrs:a,vnode:{patchFlag:i}}=e,l=he(r),[c]=e.propsOptions;let u=!1;if(!ld(e)&&(s||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let d=p[m];if(to(e.emitsOptions,d))continue;const h=t[d];if(c)if(xe(a,d))h!==a[d]&&(a[d]=h,u=!0);else{const g=jt(d);r[g]=Ho(c,l,g,h,e,!1)}else h!==a[d]&&(a[d]=h,u=!0)}}}else{Lc(e,t,r,a)&&(u=!0);let p;for(const m in l)(!t||!xe(t,m)&&((p=rn(m))===m||!xe(t,p)))&&(c?n&&(n[m]!==void 0||n[p]!==void 0)&&(r[m]=Ho(c,l,m,void 0,e,!0)):delete r[m]);if(a!==l)for(const m in a)(!t||!xe(t,m))&&(delete a[m],u=!0)}u&&on(e,"set","$attrs"),qc(t||{},r,e)}function Lc(e,t,n,s){const[r,a]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if($r(c))continue;const u=t[c];let p;r&&xe(r,p=jt(c))?!a||!a.includes(p)?n[p]=u:(l||(l={}))[p]=u:to(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(a){const c=he(n),u=l||Ae;for(let p=0;p<a.length;p++){const m=a[p];n[m]=Ho(r,c,m,u[m],e,!xe(u,m))}}return i}function Ho(e,t,n,s,r,a){const i=e[n];if(i!=null){const l=xe(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&fe(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ys(r),s=u[n]=c.call(null,t),jn())}else s=c}i[0]&&(a&&!l?s=!1:i[1]&&(s===""||s===rn(n))&&(s=!0))}return s}function Rc(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const a=e.props,i={},l=[];let c=!1;if(!fe(e)){const p=m=>{c=!0;const[d,h]=Rc(m,t,!0);De(i,d),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!c)return Ce(e)&&s.set(e,ms),ms;if(ue(a))for(let p=0;p<a.length;p++){qe(a[p])||L("props must be strings when using array syntax.",a[p]);const m=jt(a[p]);yi(m)&&(i[m]=Ae)}else if(a){Ce(a)||L("invalid props options",a);for(const p in a){const m=jt(p);if(yi(m)){const d=a[p],h=i[m]=ue(d)||fe(d)?{type:d}:Object.assign({},d);if(h){const g=xi(Boolean,h.type),v=xi(String,h.type);h[0]=g>-1,h[1]=v<0||g<v,(g>-1||xe(h,"default"))&&l.push(m)}}}}const u=[i,l];return Ce(e)&&s.set(e,u),u}function yi(e){return e[0]!=="$"?!0:(L(`Invalid prop name: "${e}" is a reserved property.`),!1)}function jo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function vi(e,t){return jo(e)===jo(t)}function xi(e,t){return ue(t)?t.findIndex(n=>vi(n,e)):fe(t)&&vi(t,e)?0:-1}function qc(e,t,n){const s=he(t),r=n.propsOptions[0];for(const a in r){let i=r[a];i!=null&&ud(a,s[a],i,!xe(e,a)&&!xe(e,rn(a)))}}function ud(e,t,n,s){const{type:r,required:a,validator:i}=n;if(a&&s){L('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let l=!1;const c=ue(r)?r:[r],u=[];for(let p=0;p<c.length&&!l;p++){const{valid:m,expectedType:d}=md(t,c[p]);u.push(d||""),l=m}if(!l){L(dd(e,t,u));return}}i&&!i(t)&&L('Invalid prop: custom validator check failed for prop "'+e+'".')}}const pd=En("String,Number,Boolean,Function,Symbol,BigInt");function md(e,t){let n;const s=jo(t);if(pd(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Ce(e):s==="Array"?n=ue(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function dd(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;const r=n[0],a=fa(t),i=wi(t,r),l=wi(t,a);return n.length===1&&bi(r)&&!fd(r,a)&&(s+=` with value ${i}`),s+=`, got ${a} `,bi(a)&&(s+=`with value ${l}.`),s}function wi(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function bi(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function fd(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Uc=e=>e[0]==="_"||e==="$stable",Oa=e=>ue(e)?e.map(Et):[Et(e)],hd=(e,t,n)=>{if(t._n)return t;const s=M((...r)=>(He&&L(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Oa(t(...r))),n);return s._c=!1,s},Dc=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Uc(r))continue;const a=e[r];if(fe(a))t[r]=hd(r,a,s);else if(a!=null){L(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=Oa(a);t[r]=()=>i}}},Hc=(e,t)=>{cr(e.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Oa(t);e.slots.default=()=>n},gd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Fr(t,"_",n)):Dc(t,e.slots={})}else e.slots={},t&&Hc(e,t);Fr(e.slots,ao,1)},_d=(e,t,n)=>{const{vnode:s,slots:r}=e;let a=!0,i=Ae;if(s.shapeFlag&32){const l=t._;l?xn?De(r,t):n&&l===1?a=!1:(De(r,t),!n&&l===1&&delete r._):(a=!t.$stable,Dc(t,r)),i=t}else t&&(Hc(e,t),i={default:1});if(a)for(const l in r)!Uc(l)&&!(l in i)&&delete r[l]};function jc(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yd=0;function vd(e,t){return function(s,r=null){fe(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(L("root props passed to app.mount() must be an object."),r=null);const a=jc(),i=new Set;let l=!1;const c=a.app={_uid:yd++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:Bi,get config(){return a.config},set config(u){L("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return i.has(u)?L("Plugin has already been applied to target app."):u&&fe(u.install)?(i.add(u),u.install(c,...p)):fe(u)?(i.add(u),u(c,...p)):L('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return a.mixins.includes(u)?L("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):a.mixins.push(u),c},component(u,p){return Ko(u,a.config),p?(a.components[u]&&L(`Component "${u}" has already been registered in target app.`),a.components[u]=p,c):a.components[u]},directive(u,p){return Mc(u),p?(a.directives[u]&&L(`Directive "${u}" has already been registered in target app.`),a.directives[u]=p,c):a.directives[u]},mount(u,p,m){if(l)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=ae(s,r);return d.appContext=a,a.reload=()=>{e(Ft(d),u,m)},p&&t?t(d,u):e(d,u,m),l=!0,c._container=u,u.__vue_app__=c,c._instance=d.component,$m(c,Bi),io(d.component)||d.component.proxy}},unmount(){l?(e(null,c._container),c._instance=null,Pm(c),delete c._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(u,p){return u in a.provides&&L(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),a.provides[u]=p,c}};return c}}function Vo(e,t,n,s,r=!1){if(ue(e)){e.forEach((d,h)=>Vo(d,t&&(ue(t)?t[h]:t),n,s,r));return}if(fs(s)&&!r)return;const a=s.shapeFlag&4?io(s.component)||s.component.proxy:s.el,i=r?null:a,{i:l,r:c}=e;if(!l){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=l.refs===Ae?l.refs={}:l.refs,m=l.setupState;if(u!=null&&u!==c&&(qe(u)?(p[u]=null,xe(m,u)&&(m[u]=null)):Se(u)&&(u.value=null)),fe(c))nn(c,l,12,[i,p]);else{const d=qe(c),h=Se(c);if(d||h){const g=()=>{if(e.f){const v=d?xe(m,c)?m[c]:p[c]:c.value;r?ue(v)&&pa(v,a):ue(v)?v.includes(a)||v.push(a):d?(p[c]=[a],xe(m,c)&&(m[c]=p[c])):(c.value=[a],e.k&&(p[e.k]=c.value))}else d?(p[c]=i,xe(m,c)&&(m[c]=i)):h?(c.value=i,e.k&&(p[e.k]=i)):L("Invalid template ref type:",c,`(${typeof c})`)};i?(g.id=-1,Je(g,n)):g()}else L("Invalid template ref type:",c,`(${typeof c})`)}}let Ss,_n;function Yt(e,t){e.appContext.config.performance&&Ur()&&_n.mark(`vue-${t}-${e.uid}`),km(e,t,Ur()?_n.now():Date.now())}function Zt(e,t){if(e.appContext.config.performance&&Ur()){const n=`vue-${t}-${e.uid}`,s=n+":end";_n.mark(s),_n.measure(`<${lo(e,e.type)}> ${t}`,n,s),_n.clearMarks(n),_n.clearMarks(s)}Em(e,t,Ur()?_n.now():Date.now())}function Ur(){return Ss!==void 0||(typeof window<"u"&&window.performance?(Ss=!0,_n=window.performance):Ss=!1),Ss}function xd(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Im;function wd(e){return bd(e)}function bd(e,t){xd();const n=Yl();n.__VUE__=!0,bc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:a,createElement:i,createText:l,createComment:c,setText:u,setElementText:p,parentNode:m,nextSibling:d,setScopeId:h=pt,insertStaticContent:g}=e,v=(f,_,$,I=null,O=null,j=null,Z=!1,D=null,K=xn?!1:!!_.dynamicChildren)=>{if(f===_)return;f&&!yn(f,_)&&(I=te(f),ut(f,O,j,!0),f=null),_.patchFlag===-2&&(K=!1,_.dynamicChildren=null);const{type:R,ref:oe,shapeFlag:se}=_;switch(R){case mr:w(f,_,$,I);break;case Ye:E(f,_,$,I);break;case Br:f==null?P(_,$,I,Z):N(f,_,$,Z);break;case Ne:we(f,_,$,I,O,j,Z,D,K);break;default:se&1?G(f,_,$,I,O,j,Z,D,K):se&6?Ie(f,_,$,I,O,j,Z,D,K):se&64||se&128?R.process(f,_,$,I,O,j,Z,D,K,$e):L("Invalid VNode type:",R,`(${typeof R})`)}oe!=null&&O&&Vo(oe,f&&f.ref,j,_||f,!_)},w=(f,_,$,I)=>{if(f==null)s(_.el=l(_.children),$,I);else{const O=_.el=f.el;_.children!==f.children&&u(O,_.children)}},E=(f,_,$,I)=>{f==null?s(_.el=c(_.children||""),$,I):_.el=f.el},P=(f,_,$,I)=>{[f.el,f.anchor]=g(f.children,_,$,I,f.el,f.anchor)},N=(f,_,$,I)=>{if(_.children!==f.children){const O=d(f.anchor);W(f),[_.el,_.anchor]=g(_.children,$,O,I)}else _.el=f.el,_.anchor=f.anchor},F=({el:f,anchor:_},$,I)=>{let O;for(;f&&f!==_;)O=d(f),s(f,$,I),f=O;s(_,$,I)},W=({el:f,anchor:_})=>{let $;for(;f&&f!==_;)$=d(f),r(f),f=$;r(_)},G=(f,_,$,I,O,j,Z,D,K)=>{Z=Z||_.type==="svg",f==null?z(_,$,I,O,j,Z,D,K):ie(f,_,O,j,Z,D,K)},z=(f,_,$,I,O,j,Z,D)=>{let K,R;const{type:oe,props:se,shapeFlag:ce,transition:_e,dirs:be}=f;if(K=f.el=i(f.type,j,se&&se.is,se),ce&8?p(K,f.children):ce&16&&ne(f.children,K,null,I,O,j&&oe!=="foreignObject",Z,D),be&&Nn(f,null,I,"created"),H(K,f,f.scopeId,Z,I),se){for(const Oe in se)Oe!=="value"&&!$r(Oe)&&a(K,Oe,null,se[Oe],j,f.children,I,O,Y);"value"in se&&a(K,"value",null,se.value),(R=se.onVnodeBeforeMount)&&xt(R,I,f)}Object.defineProperty(K,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(K,"__vueParentComponent",{value:I,enumerable:!1}),be&&Nn(f,null,I,"beforeMount");const Re=(!O||O&&!O.pendingBranch)&&_e&&!_e.persisted;Re&&_e.beforeEnter(K),s(K,_,$),((R=se&&se.onVnodeMounted)||Re||be)&&Je(()=>{R&&xt(R,I,f),Re&&_e.enter(K),be&&Nn(f,null,I,"mounted")},O)},H=(f,_,$,I,O)=>{if($&&h(f,$),I)for(let j=0;j<I.length;j++)h(f,I[j]);if(O){let j=O.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Bc(j.children)||j),_===j){const Z=O.vnode;H(f,Z,Z.scopeId,Z.slotScopeIds,O.parent)}}},ne=(f,_,$,I,O,j,Z,D,K=0)=>{for(let R=K;R<f.length;R++){const oe=f[R]=D?fn(f[R]):Et(f[R]);v(null,oe,_,$,I,O,j,Z,D)}},ie=(f,_,$,I,O,j,Z)=>{const D=_.el=f.el;let{patchFlag:K,dynamicChildren:R,dirs:oe}=_;K|=f.patchFlag&16;const se=f.props||Ae,ce=_.props||Ae;let _e;$&&Cn($,!1),(_e=ce.onVnodeBeforeUpdate)&&xt(_e,$,_,f),oe&&Nn(_,f,$,"beforeUpdate"),$&&Cn($,!0),xn&&(K=0,Z=!1,R=null);const be=O&&_.type!=="foreignObject";if(R?(de(f.dynamicChildren,R,D,$,I,be,j),$&&$.type.__hmrId&&Us(f,_)):Z||ye(f,_,D,null,$,I,be,j,!1),K>0){if(K&16)J(D,_,se,ce,$,I,O);else if(K&2&&se.class!==ce.class&&a(D,"class",null,ce.class,O),K&4&&a(D,"style",se.style,ce.style,O),K&8){const Re=_.dynamicProps;for(let Oe=0;Oe<Re.length;Oe++){const Ve=Re[Oe],St=se[Ve],ns=ce[Ve];(ns!==St||Ve==="value")&&a(D,Ve,St,ns,O,f.children,$,I,Y)}}K&1&&f.children!==_.children&&p(D,_.children)}else!Z&&R==null&&J(D,_,se,ce,$,I,O);((_e=ce.onVnodeUpdated)||oe)&&Je(()=>{_e&&xt(_e,$,_,f),oe&&Nn(_,f,$,"updated")},I)},de=(f,_,$,I,O,j,Z)=>{for(let D=0;D<_.length;D++){const K=f[D],R=_[D],oe=K.el&&(K.type===Ne||!yn(K,R)||K.shapeFlag&70)?m(K.el):$;v(K,R,oe,null,I,O,j,Z,!0)}},J=(f,_,$,I,O,j,Z)=>{if($!==I){if($!==Ae)for(const D in $)!$r(D)&&!(D in I)&&a(f,D,$[D],null,Z,_.children,O,j,Y);for(const D in I){if($r(D))continue;const K=I[D],R=$[D];K!==R&&D!=="value"&&a(f,D,R,K,Z,_.children,O,j,Y)}"value"in I&&a(f,"value",$.value,I.value)}},we=(f,_,$,I,O,j,Z,D,K)=>{const R=_.el=f?f.el:l(""),oe=_.anchor=f?f.anchor:l("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:_e}=_;(xn||se&2048)&&(se=0,K=!1,ce=null),_e&&(D=D?D.concat(_e):_e),f==null?(s(R,$,I),s(oe,$,I),ne(_.children,$,oe,O,j,Z,D,K)):se>0&&se&64&&ce&&f.dynamicChildren?(de(f.dynamicChildren,ce,$,O,j,Z,D),O&&O.type.__hmrId?Us(f,_):(_.key!=null||O&&_===O.subTree)&&Us(f,_,!0)):ye(f,_,$,oe,O,j,Z,D,K)},Ie=(f,_,$,I,O,j,Z,D,K)=>{_.slotScopeIds=D,f==null?_.shapeFlag&512?O.ctx.activate(_,$,I,Z,K):Be(_,$,I,O,j,Z,K):Le(f,_,K)},Be=(f,_,$,I,O,j,Z)=>{const D=f.component=Fd(f,I,O);if(D.type.__hmrId&&vm(D),Pr(f),Yt(D,"mount"),cr(f)&&(D.ctx.renderer=$e),Yt(D,"init"),Od(D),Zt(D,"init"),D.asyncDep){if(O&&O.registerDep(D,Q),!f.el){const K=D.subTree=ae(Ye);E(null,K,_,$)}return}Q(D,f,_,$,O,j,Z),Sr(),Zt(D,"mount")},Le=(f,_,$)=>{const I=_.component=f.component;if(Om(f,_,$))if(I.asyncDep&&!I.asyncResolved){Pr(_),pe(I,_,$),Sr();return}else I.next=_,_m(I.update),I.update();else _.el=f.el,I.vnode=_},Q=(f,_,$,I,O,j,Z)=>{const D=()=>{if(f.isMounted){let{next:oe,bu:se,u:ce,parent:_e,vnode:be}=f,Re=oe,Oe;Pr(oe||f.vnode),Cn(f,!1),oe?(oe.el=be.el,pe(f,oe,Z)):oe=be,se&&gn(se),(Oe=oe.props&&oe.props.onVnodeBeforeUpdate)&&xt(Oe,_e,oe,be),Cn(f,!0),Yt(f,"render");const Ve=mo(f);Zt(f,"render");const St=f.subTree;f.subTree=Ve,Yt(f,"patch"),v(St,Ve,m(St.el),te(St),f,O,j),Zt(f,"patch"),oe.el=Ve.el,Re===null&&Am(f,Ve.el),ce&&Je(ce,O),(Oe=oe.props&&oe.props.onVnodeUpdated)&&Je(()=>xt(Oe,_e,oe,be),O),$c(f),Sr()}else{let oe;const{el:se,props:ce}=_,{bm:_e,m:be,parent:Re}=f,Oe=fs(_);if(Cn(f,!1),_e&&gn(_e),!Oe&&(oe=ce&&ce.onVnodeBeforeMount)&&xt(oe,Re,_),Cn(f,!0),se&&me){const Ve=()=>{Yt(f,"render"),f.subTree=mo(f),Zt(f,"render"),Yt(f,"hydrate"),me(se,f.subTree,f,O,null),Zt(f,"hydrate")};Oe?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Ve()):Ve()}else{Yt(f,"render");const Ve=f.subTree=mo(f);Zt(f,"render"),Yt(f,"patch"),v(null,Ve,$,I,f,O,j),Zt(f,"patch"),_.el=Ve.el}if(be&&Je(be,O),!Oe&&(oe=ce&&ce.onVnodeMounted)){const Ve=_;Je(()=>xt(oe,Re,Ve),O)}(_.shapeFlag&256||Re&&fs(Re.vnode)&&Re.vnode.shapeFlag&256)&&f.a&&Je(f.a,O),f.isMounted=!0,Io(f),_=$=I=null}},K=f.effect=new _a(D,()=>eo(R),f.scope),R=f.update=()=>K.run();R.id=f.uid,Cn(f,!0),K.onTrack=f.rtc?oe=>gn(f.rtc,oe):void 0,K.onTrigger=f.rtg?oe=>gn(f.rtg,oe):void 0,R.ownerInstance=f,R()},pe=(f,_,$)=>{_.component=f;const I=f.vnode.props;f.vnode=_,f.next=null,cd(f,_.props,I,$),_d(f,_.children,$),Jn(),ui(),Qn()},ye=(f,_,$,I,O,j,Z,D,K=!1)=>{const R=f&&f.children,oe=f?f.shapeFlag:0,se=_.children,{patchFlag:ce,shapeFlag:_e}=_;if(ce>0){if(ce&128){dt(R,se,$,I,O,j,Z,D,K);return}else if(ce&256){Me(R,se,$,I,O,j,Z,D,K);return}}_e&8?(oe&16&&Y(R,O,j),se!==R&&p($,se)):oe&16?_e&16?dt(R,se,$,I,O,j,Z,D,K):Y(R,O,j,!0):(oe&8&&p($,""),_e&16&&ne(se,$,I,O,j,Z,D,K))},Me=(f,_,$,I,O,j,Z,D,K)=>{f=f||ms,_=_||ms;const R=f.length,oe=_.length,se=Math.min(R,oe);let ce;for(ce=0;ce<se;ce++){const _e=_[ce]=K?fn(_[ce]):Et(_[ce]);v(f[ce],_e,$,null,O,j,Z,D,K)}R>oe?Y(f,O,j,!0,!1,se):ne(_,$,I,O,j,Z,D,K,se)},dt=(f,_,$,I,O,j,Z,D,K)=>{let R=0;const oe=_.length;let se=f.length-1,ce=oe-1;for(;R<=se&&R<=ce;){const _e=f[R],be=_[R]=K?fn(_[R]):Et(_[R]);if(yn(_e,be))v(_e,be,$,null,O,j,Z,D,K);else break;R++}for(;R<=se&&R<=ce;){const _e=f[se],be=_[ce]=K?fn(_[ce]):Et(_[ce]);if(yn(_e,be))v(_e,be,$,null,O,j,Z,D,K);else break;se--,ce--}if(R>se){if(R<=ce){const _e=ce+1,be=_e<oe?_[_e].el:I;for(;R<=ce;)v(null,_[R]=K?fn(_[R]):Et(_[R]),$,be,O,j,Z,D,K),R++}}else if(R>ce)for(;R<=se;)ut(f[R],O,j,!0),R++;else{const _e=R,be=R,Re=new Map;for(R=be;R<=ce;R++){const st=_[R]=K?fn(_[R]):Et(_[R]);st.key!=null&&(Re.has(st.key)&&L("Duplicate keys found during update:",JSON.stringify(st.key),"Make sure keys are unique."),Re.set(st.key,R))}let Oe,Ve=0;const St=ce-be+1;let ns=!1,Xa=0;const Ps=new Array(St);for(R=0;R<St;R++)Ps[R]=0;for(R=_e;R<=se;R++){const st=f[R];if(Ve>=St){ut(st,O,j,!0);continue}let It;if(st.key!=null)It=Re.get(st.key);else for(Oe=be;Oe<=ce;Oe++)if(Ps[Oe-be]===0&&yn(st,_[Oe])){It=Oe;break}It===void 0?ut(st,O,j,!0):(Ps[It-be]=R+1,It>=Xa?Xa=It:ns=!0,v(st,_[It],$,null,O,j,Z,D,K),Ve++)}const ei=ns?$d(Ps):ms;for(Oe=ei.length-1,R=St-1;R>=0;R--){const st=be+R,It=_[st],ti=st+1<oe?_[st+1].el:I;Ps[R]===0?v(null,It,$,ti,O,j,Z,D,K):ns&&(Oe<0||R!==ei[Oe]?Xe(It,$,ti,2):Oe--)}}},Xe=(f,_,$,I,O=null)=>{const{el:j,type:Z,transition:D,children:K,shapeFlag:R}=f;if(R&6){Xe(f.component.subTree,_,$,I);return}if(R&128){f.suspense.move(_,$,I);return}if(R&64){Z.move(f,_,$,$e);return}if(Z===Ne){s(j,_,$);for(let se=0;se<K.length;se++)Xe(K[se],_,$,I);s(f.anchor,_,$);return}if(Z===Br){F(f,_,$);return}if(I!==2&&R&1&&D)if(I===0)D.beforeEnter(j),s(j,_,$),Je(()=>D.enter(j),O);else{const{leave:se,delayLeave:ce,afterLeave:_e}=D,be=()=>s(j,_,$),Re=()=>{se(j,()=>{be(),_e&&_e()})};ce?ce(j,be,Re):Re()}else s(j,_,$)},ut=(f,_,$,I=!1,O=!1)=>{const{type:j,props:Z,ref:D,children:K,dynamicChildren:R,shapeFlag:oe,patchFlag:se,dirs:ce}=f;if(D!=null&&Vo(D,null,$,f,!0),oe&256){_.ctx.deactivate(f);return}const _e=oe&1&&ce,be=!fs(f);let Re;if(be&&(Re=Z&&Z.onVnodeBeforeUnmount)&&xt(Re,_,f),oe&6)ee(f.component,$,I);else{if(oe&128){f.suspense.unmount($,I);return}_e&&Nn(f,null,_,"beforeUnmount"),oe&64?f.type.remove(f,_,$,O,$e,I):R&&(j!==Ne||se>0&&se&64)?Y(R,_,$,!1,!0):(j===Ne&&se&384||!O&&oe&16)&&Y(K,_,$),I&&ln(f)}(be&&(Re=Z&&Z.onVnodeUnmounted)||_e)&&Je(()=>{Re&&xt(Re,_,f),_e&&Nn(f,null,_,"unmounted")},$)},ln=f=>{const{type:_,el:$,anchor:I,transition:O}=f;if(_===Ne){f.patchFlag>0&&f.patchFlag&2048&&O&&!O.persisted?f.children.forEach(Z=>{Z.type===Ye?r(Z.el):ln(Z)}):k($,I);return}if(_===Br){W(f);return}const j=()=>{r($),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(f.shapeFlag&1&&O&&!O.persisted){const{leave:Z,delayLeave:D}=O,K=()=>Z($,j);D?D(f.el,j,K):K()}else j()},k=(f,_)=>{let $;for(;f!==_;)$=d(f),r(f),f=$;r(_)},ee=(f,_,$)=>{f.type.__hmrId&&xm(f);const{bum:I,scope:O,update:j,subTree:Z,um:D}=f;I&&gn(I),O.stop(),j&&(j.active=!1,ut(Z,f,_,$)),D&&Je(D,_),Je(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Bm(f)},Y=(f,_,$,I=!1,O=!1,j=0)=>{for(let Z=j;Z<f.length;Z++)ut(f[Z],_,$,I,O)},te=f=>f.shapeFlag&6?te(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ve=(f,_,$)=>{f==null?_._vnode&&ut(_._vnode,null,null,!0):v(_._vnode||null,f,_,null,null,null,$),ui(),vc(),_._vnode=f},$e={p:v,um:ut,m:Xe,r:ln,mt:Be,mc:ne,pc:ye,pbc:de,n:te,o:e};let ge,me;return t&&([ge,me]=t($e)),{render:ve,hydrate:ge,createApp:vd(ve,ge)}}function Cn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Us(e,t,n=!1){const s=e.children,r=t.children;if(ue(s)&&ue(r))for(let a=0;a<s.length;a++){const i=s[a];let l=r[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[a]=fn(r[a]),l.el=i.el),n||Us(i,l)),l.type===mr&&(l.el=i.el),l.type===Ye&&!l.el&&(l.el=i.el)}}function $d(e){const t=e.slice(),n=[0];let s,r,a,i,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<u?a=l+1:i=l;u<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}const Pd=e=>e.__isTeleport,hs=e=>e&&(e.disabled||e.disabled===""),$i=e=>typeof SVGElement<"u"&&e instanceof SVGElement,zo=(e,t)=>{const n=e&&e.to;if(qe(n))if(t){const s=t(n);return s||L(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!hs(e)&&L(`Invalid Teleport target: ${n}`),n},Sd={__isTeleport:!0,process(e,t,n,s,r,a,i,l,c,u){const{mc:p,pc:m,pbc:d,o:{insert:h,querySelector:g,createText:v,createComment:w}}=u,E=hs(t.props);let{shapeFlag:P,children:N,dynamicChildren:F}=t;if(xn&&(c=!1,F=null),e==null){const W=t.el=w("teleport start"),G=t.anchor=w("teleport end");h(W,n,s),h(G,n,s);const z=t.target=zo(t.props,g),H=t.targetAnchor=v("");z?(h(H,z),i=i||$i(z)):E||L("Invalid Teleport target on mount:",z,`(${typeof z})`);const ne=(ie,de)=>{P&16&&p(N,ie,de,r,a,i,l,c)};E?ne(n,G):z&&ne(z,H)}else{t.el=e.el;const W=t.anchor=e.anchor,G=t.target=e.target,z=t.targetAnchor=e.targetAnchor,H=hs(e.props),ne=H?n:G,ie=H?W:z;if(i=i||$i(G),F?(d(e.dynamicChildren,F,ne,r,a,i,l),Us(e,t,!0)):c||m(e,t,ne,ie,r,a,i,l,!1),E)H||xr(t,n,W,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=zo(t.props,g);de?xr(t,de,null,u,0):L("Invalid Teleport target on update:",G,`(${typeof G})`)}else H&&xr(t,G,z,u,1)}Vc(t)},remove(e,t,n,s,{um:r,o:{remove:a}},i){const{shapeFlag:l,children:c,anchor:u,targetAnchor:p,target:m,props:d}=e;if(m&&a(p),(i||!hs(d))&&(a(u),l&16))for(let h=0;h<c.length;h++){const g=c[h];r(g,t,n,!0,!!g.dynamicChildren)}},move:xr,hydrate:Bd};function xr(e,t,n,{o:{insert:s},m:r},a=2){a===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:u,props:p}=e,m=a===2;if(m&&s(i,t,n),(!m||hs(p))&&c&16)for(let d=0;d<u.length;d++)r(u[d],t,n,2);m&&s(l,t,n)}function Bd(e,t,n,s,r,a,{o:{nextSibling:i,parentNode:l,querySelector:c}},u){const p=t.target=zo(t.props,c);if(p){const m=p._lpa||p.firstChild;if(t.shapeFlag&16)if(hs(t.props))t.anchor=u(i(e),t,l(e),n,s,r,a),t.targetAnchor=m;else{t.anchor=i(e);let d=m;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(m,t,p,n,s,r,a)}Vc(t)}return t.anchor&&i(t.anchor)}const eS=Sd;function Vc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ne=Symbol("Fragment"),mr=Symbol("Text"),Ye=Symbol("Comment"),Br=Symbol("Static"),Ds=[];let Ct=null;function y(e=!1){Ds.push(Ct=e?null:[])}function kd(){Ds.pop(),Ct=Ds[Ds.length-1]||null}let Js=1;function Pi(e){Js+=e}function zc(e){return e.dynamicChildren=Js>0?Ct||ms:null,kd(),Js>0&&Ct&&Ct.push(e),e}function X(e,t,n,s,r,a){return zc(o(e,t,n,s,r,a,!0))}function B(e,t,n,s,r){return zc(ae(e,t,n,s,r,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function yn(e,t){return t.shapeFlag&6&&is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Ed=(...e)=>Nd(...e),ao="__vInternal",Kc=({key:e})=>e??null,kr=({ref:e,ref_key:t,ref_for:n})=>e!=null?qe(e)||Se(e)||fe(e)?{i:We,r:e,k:t,f:!!n}:e:null;function o(e,t=null,n=null,s=0,r=null,a=e===Ne?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kc(t),ref:t&&kr(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return l?(Aa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),c.key!==c.key&&L("VNode created with invalid key (NaN). VNode type:",c.type),Js>0&&!i&&Ct&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ct.push(c),c}const ae=Ed;function Nd(e,t=null,n=null,s=0,r=null,a=!1){if((!e||e===Zm)&&(e||L(`Invalid vnode type when creating vnode: ${e}.`),e=Ye),Yn(e)){const l=Ft(e,t,!0);return n&&Aa(l,n),Js>0&&!a&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(e)]=l:Ct.push(l)),l.patchFlag|=-2,l}if(Jc(e)&&(e=e.__vccOpts),t){t=q(t);let{class:l,style:c}=t;l&&!qe(l)&&(t.class=je(l)),Ce(c)&&(Ir(c)&&!ue(c)&&(c=De({},c)),t.style=tt(c))}const i=qe(e)?1:kc(e)?128:Pd(e)?64:Ce(e)?4:fe(e)?2:0;return i&4&&Ir(e)&&(e=he(e),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),o(e,t,n,s,r,i,a,!0)}function q(e){return e?Ir(e)||ao in e?De({},e):e:null}function Ft(e,t,n=!1){const{props:s,ref:r,patchFlag:a,children:i}=e,l=t?Ia(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kc(l),ref:t&&t.ref?n&&r?ue(r)?r.concat(kr(t)):[r,kr(t)]:kr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a===-1&&ue(i)?i.map(Wc):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wc(e){const t=Ft(e);return ue(e.children)&&(t.children=e.children.map(Wc)),t}function x(e=" ",t=0){return ae(mr,null,e,t)}function re(e="",t=!1){return t?(y(),B(Ye,null,e)):ae(Ye,null,e)}function Et(e){return e==null||typeof e=="boolean"?ae(Ye):ue(e)?ae(Ne,null,e.slice()):typeof e=="object"?fn(e):ae(mr,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Aa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ue(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Aa(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ao in t)?t._ctx=We:r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:We},n=32):(t=String(t),s&64?(n=16,t=[x(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ia(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=je([t.class,s.class]));else if(r==="style")t.style=tt([t.style,s.style]);else if(ar(r)){const a=t[r],i=s[r];i&&a!==i&&!(ue(a)&&a.includes(i))&&(t[r]=a?[].concat(a,i):i)}else r!==""&&(t[r]=s[r])}return t}function xt(e,t,n,s=null){$t(e,t,7,[n,s])}const Cd=jc();let Td=0;function Fd(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Cd,a={uid:Td++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,r),emitsOptions:Sc(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx=Qm(a),a.root=t?t.root:a,a.emit=Cm.bind(null,a),e.ce&&e.ce(a),a}let He=null;const Wt=()=>He||We,ys=e=>{He=e,e.scope.on()},jn=()=>{He&&He.scope.off(),He=null},Md=En("slot,component");function Ko(e,t){const n=t.isNativeTag||zl;(Md(e)||n(e))&&L("Do not use built-in or reserved HTML elements as component id: "+e)}function Gc(e){return e.vnode.shapeFlag&4}let Qs=!1;function Od(e,t=!1){Qs=t;const{props:n,children:s}=e.vnode,r=Gc(e);id(e,n,r,t),gd(e,s);const a=r?Ad(e,t):void 0;return Qs=!1,a}function Ad(e,t){var n;const s=e.type;{if(s.name&&Ko(s.name,e.appContext.config),s.components){const a=Object.keys(s.components);for(let i=0;i<a.length;i++)Ko(a[i],e.appContext.config)}if(s.directives){const a=Object.keys(s.directives);for(let i=0;i<a.length;i++)Mc(a[i])}s.compilerOptions&&Id()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=va(new Proxy(e.ctx,Ac)),Xm(e);const{setup:r}=s;if(r){const a=e.setupContext=r.length>1?Zc(e):null;ys(e),Jn();const i=nn(r,e,0,[us(e.props),a]);if(Qn(),jn(),da(i)){if(i.then(jn,jn),t)return i.then(l=>{Si(e,l,t)}).catch(l=>{Xr(l,e,0)});if(e.asyncDep=i,!e.suspense){const l=(n=s.name)!==null&&n!==void 0?n:"Anonymous";L(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Si(e,i,t)}else Yc(e,t)}function Si(e,t,n){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)?(Yn(t)&&L("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=mc(t),ed(e)):t!==void 0&&L(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Yc(e,n)}let Wo;const Id=()=>!Wo;function Yc(e,t,n){const s=e.type;if(!e.render){if(!t&&Wo&&!s.render){const r=s.template||Ma(e).template;if(r){Yt(e,"compile");const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=De(De({isCustomElement:a,delimiters:l},i),c);s.render=Wo(r,u),Zt(e,"compile")}}e.render=s.render||pt}ys(e),Jn(),nd(e),Qn(),jn(),!s.render&&e.render===pt&&!t&&(s.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Ld(e){return new Proxy(e.attrs,{get(t,n){return Rr(),mt(e,"get","$attrs"),t[n]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function Zc(e){const t=s=>{if(e.exposed&&L("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(ue(s)?r="array":Se(s)&&(r="ref")),r!=="object"&&L(`expose() should be passed a plain object, received ${r}.`)}e.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Ld(e))},get slots(){return us(e.slots)},get emit(){return(s,...r)=>e.emit(s,...r)},expose:t})}function io(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mc(va(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hn)return Hn[n](e)},has(t,n){return n in t||n in Hn}}))}const Rd=/(?:^|[-_])(\w)/g,qd=e=>e.replace(Rd,t=>t.toUpperCase()).replace(/[-_]/g,"");function Xs(e,t=!0){return fe(e)?e.displayName||e.name:e.name||t&&e.__name}function lo(e,t,n=!1){let s=Xs(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=a=>{for(const i in a)if(a[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?qd(s):n?"App":"Anonymous"}function Jc(e){return fe(e)&&"__vccOpts"in e}const A=(e,t)=>lm(e,t,Qs);function tS(){return Ud().slots}function Ud(){const e=Wt();return e||L("useContext() called without active instance."),e.setupContext||(e.setupContext=Zc(e))}function co(e,t,n){const s=arguments.length;return s===2?Ce(t)&&!ue(t)?Yn(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yn(n)&&(n=[n]),ae(e,t,n))}const Dd=Symbol("ssrContext"),Hd=()=>{{const e=S(Dd);return e||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function yo(e){return!!(e&&e.__v_isShallow)}function jd(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(m){return Ce(m)?m.__isVue?["div",e,"VueInstance"]:Se(m)?["div",{},["span",e,p(m)],"<",l(m.value),">"]:Un(m)?["div",{},["span",e,yo(m)?"ShallowReactive":"Reactive"],"<",l(m),`>${Bn(m)?" (readonly)":""}`]:Bn(m)?["div",{},["span",e,yo(m)?"ShallowReadonly":"Readonly"],"<",l(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...a(m.$)]}};function a(m){const d=[];m.type.props&&m.props&&d.push(i("props",he(m.props))),m.setupState!==Ae&&d.push(i("setup",m.setupState)),m.data!==Ae&&d.push(i("data",he(m.data)));const h=c(m,"computed");h&&d.push(i("computed",h));const g=c(m,"inject");return g&&d.push(i("injected",g)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),d}function i(m,d){return d=De({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(h=>["div",{},["span",s,h+": "],l(d[h],!1)])]]:["span",{}]}function l(m,d=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",n,JSON.stringify(m)]:typeof m=="boolean"?["span",s,m]:Ce(m)?["object",{object:d?he(m):m}]:["span",n,String(m)]}function c(m,d){const h=m.type;if(fe(h))return;const g={};for(const v in m.ctx)u(h,v,d)&&(g[v]=m.ctx[v]);return g}function u(m,d,h){const g=m[h];if(ue(g)&&g.includes(d)||Ce(g)&&d in g||m.extends&&u(m.extends,d,h)||m.mixins&&m.mixins.some(v=>u(v,d,h)))return!0}function p(m){return yo(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Bi="3.2.47",Vd="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,ki=On&&On.createElement("template"),zd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?On.createElementNS(Vd,e):On.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>On.createTextNode(e),createComment:e=>On.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>On.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,a){const i=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{ki.innerHTML=s?`<svg>${e}</svg>`:e;const l=ki.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kd(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wd(e,t,n){const s=e.style,r=qe(n);if(n&&!r){if(t&&!qe(t))for(const a in t)n[a]==null&&Go(s,a,"");for(const a in n)Go(s,a,n[a])}else{const a=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const Gd=/[^\\];\s*$/,Ei=/\s*!important$/;function Go(e,t,n){if(ue(n))n.forEach(s=>Go(e,t,s));else if(n==null&&(n=""),Gd.test(n)&&L(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=Yd(e,t);Ei.test(n)?e.setProperty(rn(s),n.replace(Ei,""),"important"):e[s]=n}}const Ni=["Webkit","Moz","ms"],vo={};function Yd(e,t){const n=vo[t];if(n)return n;let s=jt(t);if(s!=="filter"&&s in e)return vo[t]=s;s=Wn(s);for(let r=0;r<Ni.length;r++){const a=Ni[r]+s;if(a in e)return vo[t]=a}return t}const Ci="http://www.w3.org/1999/xlink";function Zd(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ci,t.slice(6,t.length)):e.setAttributeNS(Ci,t,n);else{const a=gp(t);n==null||a&&!jl(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Jd(e,t,n,s,r,a,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,a),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=jl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch(c){l||L(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}l&&e.removeAttribute(t)}function ls(e,t,n,s){e.addEventListener(t,n,s)}function Qd(e,t,n,s){e.removeEventListener(t,n,s)}function Xd(e,t,n,s,r=null){const a=e._vei||(e._vei={}),i=a[t];if(s&&i)i.value=s;else{const[l,c]=ef(t);if(s){const u=a[t]=sf(s,r);ls(e,l,u,c)}else i&&(Qd(e,l,i,c),a[t]=void 0)}}const Ti=/(?:Once|Passive|Capture)$/;function ef(e){let t;if(Ti.test(e)){t={};let s;for(;s=e.match(Ti);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rn(e.slice(2)),t]}let xo=0;const tf=Promise.resolve(),nf=()=>xo||(tf.then(()=>xo=0),xo=Date.now());function sf(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(rf(s,n.value),t,5,[s])};return n.value=e,n.attached=nf(),n}function rf(e,t){if(ue(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Fi=/^on[a-z]/,of=(e,t,n,s,r=!1,a,i,l,c)=>{t==="class"?Kd(e,s,r):t==="style"?Wd(e,n,s):ar(t)?Tr(t)||Xd(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):af(e,t,s,r))?Jd(e,t,s,a,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zd(e,t,s,r))};function af(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&fe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&qe(n)?!1:t in e}const un="transition",Bs="animation",Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lf=De({},qm.props,Qc),Tn=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},Mi=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function cf(e){const t={};for(const J in e)J in Qc||(t[J]=e[J]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:p=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,g=uf(r),v=g&&g[0],w=g&&g[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:N,onLeave:F,onLeaveCancelled:W,onBeforeAppear:G=E,onAppear:z=P,onAppearCancelled:H=N}=t,ne=(J,we,Ie)=>{mn(J,we?p:l),mn(J,we?u:i),Ie&&Ie()},ie=(J,we)=>{J._isLeaving=!1,mn(J,m),mn(J,h),mn(J,d),we&&we()},de=J=>(we,Ie)=>{const Be=J?z:P,Le=()=>ne(we,J,Ie);Tn(Be,[we,Le]),Oi(()=>{mn(we,J?c:a),Jt(we,J?p:l),Mi(Be)||Ai(we,s,v,Le)})};return De(t,{onBeforeEnter(J){Tn(E,[J]),Jt(J,a),Jt(J,i)},onBeforeAppear(J){Tn(G,[J]),Jt(J,c),Jt(J,u)},onEnter:de(!1),onAppear:de(!0),onLeave(J,we){J._isLeaving=!0;const Ie=()=>ie(J,we);Jt(J,m),eu(),Jt(J,d),Oi(()=>{J._isLeaving&&(mn(J,m),Jt(J,h),Mi(F)||Ai(J,s,w,Ie))}),Tn(F,[J,Ie])},onEnterCancelled(J){ne(J,!1),Tn(N,[J])},onAppearCancelled(J){ne(J,!0),Tn(H,[J])},onLeaveCancelled(J){ie(J),Tn(W,[J])}})}function uf(e){if(e==null)return null;if(Ce(e))return[wo(e.enter),wo(e.leave)];{const t=wo(e);return[t,t]}}function wo(e){const t=$p(e);return dm(t,"<transition> explicit duration"),t}function Jt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function mn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Oi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let pf=0;function Ai(e,t,n,s){const r=e._endId=++pf,a=()=>{r===e._endId&&s()};if(n)return setTimeout(a,n);const{type:i,timeout:l,propCount:c}=Xc(e,t);if(!i)return s();const u=i+"end";let p=0;const m=()=>{e.removeEventListener(u,d),a()},d=h=>{h.target===e&&++p>=c&&m()};setTimeout(()=>{p<c&&m()},l+1),e.addEventListener(u,d)}function Xc(e,t){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),r=s(`${un}Delay`),a=s(`${un}Duration`),i=Ii(r,a),l=s(`${Bs}Delay`),c=s(`${Bs}Duration`),u=Ii(l,c);let p=null,m=0,d=0;t===un?i>0&&(p=un,m=i,d=a.length):t===Bs?u>0&&(p=Bs,m=u,d=c.length):(m=Math.max(i,u),p=m>0?i>u?un:Bs:null,d=p?p===un?a.length:c.length:0);const h=p===un&&/\b(transform|all)(,|$)/.test(s(`${un}Property`).toString());return{type:p,timeout:m,propCount:d,hasTransform:h}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Li(n)+Li(e[s])))}function Li(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function eu(){return document.body.offsetHeight}const tu=new WeakMap,nu=new WeakMap,su={name:"TransitionGroup",props:De({},lf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Wt(),s=Nc();let r,a;return Na(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!_f(r[0].el,n.vnode.el,i))return;r.forEach(ff),r.forEach(hf);const l=r.filter(gf);eu(),l.forEach(c=>{const u=c.el,p=u.style;Jt(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const m=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",m),u._moveCb=null,mn(u,i))};u.addEventListener("transitionend",m)})}),()=>{const i=he(e),l=cf(i);let c=i.tag||Ne;r=a,a=t.default?Ea(t.default()):[];for(let u=0;u<a.length;u++){const p=a[u];p.key!=null?_s(p,Zs(p,l,s,n)):L("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];_s(p,Zs(p,l,s,n)),tu.set(p,p.el.getBoundingClientRect())}return ae(c,null,a)}}},mf=e=>delete e.mode;su.props;const df=su;function ff(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function hf(e){nu.set(e,e.el.getBoundingClientRect())}function gf(e){const t=tu.get(e),n=nu.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${r}px)`,a.transitionDuration="0s",e}}function _f(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=Xc(s);return r.removeChild(s),a}const Ri=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ue(t)?n=>gn(t,n):t};function yf(e){e.target.composing=!0}function qi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vf={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Ri(r);const a=s||r.props&&r.props.type==="number";ls(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),a&&(l=Co(l)),e._assign(l)}),n&&ls(e,"change",()=>{e.value=e.value.trim()}),t||(ls(e,"compositionstart",yf),ls(e,"compositionend",qi),ls(e,"change",qi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},a){if(e._assign=Ri(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Co(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ui=(e,t)=>n=>{if(!("key"in n))return;const s=rn(n.key);if(t.some(r=>r===s||xf[r]===s))return e(n)},ru={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ks(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),ks(e,!0),s.enter(e)):s.leave(e,()=>{ks(e,!1)}):ks(e,t))},beforeUnmount(e,{value:t}){ks(e,t)}};function ks(e,t){e.style.display=t?e._vod:"none"}const wf=De({patchProp:of},zd);let Di;function bf(){return Di||(Di=wd(wf))}const nS=(...e)=>{const t=bf().createApp(...e);$f(t),Pf(t);const{mount:n}=t;return t.mount=s=>{const r=Sf(s);if(!r)return;const a=t._component;!fe(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function $f(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>dp(t)||fp(t),writable:!1})}function Pf(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return L(s),n},set(){L(s)}})}}function Sf(e){if(qe(e)){const t=document.querySelector(e);return t||L(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Bf(){jd()}Bf();const ou=Symbol("v-click-clicks"),au=Symbol("v-click-clicks-elements"),kf=Symbol("v-click-clicks-order-map"),iu=Symbol("v-click-clicks-disabled"),lu=Symbol("slidev-slide-scale"),C=Symbol("slidev-slidev-context"),Ef=Symbol("slidev-route"),Nf=Symbol("slidev-slide-context"),Cf="slidev-vclick-target",sS="slidev-vclick-hidden",rS="slidev-vclick-fade",oS="slidev-vclick-hidden-explicitly",aS="slidev-vclick-current",iS="slidev-vclick-prior",lS=["localhost","127.0.0.1"];function Tf(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ff(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let a=t;for(;a<n;)r.push(a),a+=s||1;return r}function Mf(e){return e!=null}function Of(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Mf))}const Ls={theme:"unicorn",title:"NumPy 基础",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Te=Ls,wn=Te.aspectRatio??16/9,bn=Te.canvasWidth??980,La=Math.ceil(bn/wn),Ra=A(()=>Of(Te.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Pt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Xn=Qe({page:0,clicks:0});let Af=[],If=[];Pt(Xn,"$syncUp",!0);Pt(Xn,"$syncDown",!0);Pt(Xn,"$paused",!1);Pt(Xn,"$onSet",e=>Af.push(e));Pt(Xn,"$onPatch",e=>If.push(e));Pt(Xn,"$patch",async()=>!1);function cu(e,t,n=!1){const s=[];let r=!1,a=!1,i,l;const c=Qe(t);function u(h){s.push(h)}function p(h,g){c[h]!==g&&(clearTimeout(i),r=!0,c[h]=g,i=setTimeout(()=>r=!1,0))}function m(h){r||(clearTimeout(l),a=!0,Object.entries(h).forEach(([g,v])=>{c[g]=v}),l=setTimeout(()=>a=!1,0))}function d(h){let g;n?n&&window.addEventListener("storage",w=>{w&&w.key===h&&w.newValue&&m(JSON.parse(w.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",w=>m(w.data)));function v(){!n&&g&&!a?g.postMessage(he(c)):n&&!a&&window.localStorage.setItem(h,JSON.stringify(c)),r||s.forEach(w=>w(c))}if(Ue(c,v,{deep:!0}),n){const w=window.localStorage.getItem(h);w&&m(JSON.parse(w))}}return{init:d,onPatch:u,patch:p,state:c}}const{init:cS,onPatch:uS,patch:pS,state:bo}=cu(Xn,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),es=Qe({});let Lf=[],Rf=[];Pt(es,"$syncUp",!0);Pt(es,"$syncDown",!0);Pt(es,"$paused",!1);Pt(es,"$onSet",e=>Lf.push(e));Pt(es,"$onPatch",e=>Rf.push(e));Pt(es,"$patch",async()=>!1);const{init:mS,onPatch:qf,patch:uu,state:Dr}=cu(es,{},!0),Uf="modulepreload",Df=function(e){return"/math201/slides/numpy/"+e},Hi={},$n=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Df(a),a in Hi)return;Hi[a]=!0;const i=a.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===a&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Uf,i||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),i)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var ji;const Mt=typeof window<"u",Hf=e=>typeof e<"u",jf=Object.prototype.toString,er=e=>typeof e=="function",dS=e=>typeof e=="number",pu=e=>typeof e=="string",fS=e=>jf.call(e)==="[object Object]",Yo=()=>+Date.now(),Hs=()=>{};Mt&&((ji=window==null?void 0:window.navigator)!=null&&ji.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(e){return typeof e=="function"?e():b(e)}function Vf(e,t){function n(...s){return new Promise((r,a)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(a)})}return n}const mu=e=>e();function zf(e=mu){const t=le(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...a)=>{t.value&&e(...a)};return{isActive:Ut(t),pause:n,resume:s,eventFilter:r}}function Kf(e){return e}function Wf(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),a=parseFloat(s)+t;return Number.isNaN(a)?e:a+r}function Gf(e,t){let n,s,r;const a=le(!0),i=()=>{a.value=!0,r()};Ue(e,i,{flush:"sync"});const l=er(t)?t:t.get,c=er(t)?void 0:t.set,u=dc((p,m)=>(s=p,r=m,{get(){return a.value&&(n=l(),a.value=!1),s(),n},set(d){c==null||c(d)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function Kt(e){return Jl()?(Sp(e),!0):!1}function Yf(e){if(!Se(e))return Qe(e);const t=new Proxy({},{get(n,s,r){return b(Reflect.get(e.value,s,r))},set(n,s,r){return Se(e.value[s])&&!Se(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Qe(t)}function du(e){return typeof e=="function"?A(e):le(e)}var Zf=Object.defineProperty,Jf=Object.defineProperties,Qf=Object.getOwnPropertyDescriptors,Vi=Object.getOwnPropertySymbols,Xf=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable,zi=(e,t,n)=>t in e?Zf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,th=(e,t)=>{for(var n in t||(t={}))Xf.call(t,n)&&zi(e,n,t[n]);if(Vi)for(var n of Vi(t))eh.call(t,n)&&zi(e,n,t[n]);return e},nh=(e,t)=>Jf(e,Qf(t));function sh(e){if(!Se(e))return rm(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=dc(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=nh(th({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function qa(e,t=!0){Wt()?ur(e):t?e():Tt(e)}function hS(e){Wt()&&ro(e)}function rh(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let a=null;const i=le(!1);function l(){a&&(clearInterval(a),a=null)}function c(){i.value=!1,l()}function u(){const p=lt(t);p<=0||(i.value=!0,r&&e(),l(),a=setInterval(e,p))}if(s&&Mt&&u(),Se(t)||er(t)){const p=Ue(t,()=>{i.value&&Mt&&u()});Kt(p)}return Kt(c),{isActive:i,pause:c,resume:u}}function oh(e,t,n={}){const{immediate:s=!0}=n,r=le(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function l(){r.value=!1,i()}function c(...u){i(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,e(...u)},lt(t))}return s&&(r.value=!0,Mt&&c()),Kt(l),{isPending:Ut(r),start:c,stop:l}}function fu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=Se(e),a=le(e);function i(l){if(arguments.length)return a.value=l,a.value;{const c=lt(n);return a.value=a.value===c?lt(s):c,a.value}}return r?i:[a,i]}var Ki=Object.getOwnPropertySymbols,ah=Object.prototype.hasOwnProperty,ih=Object.prototype.propertyIsEnumerable,lh=(e,t)=>{var n={};for(var s in e)ah.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Ki)for(var s of Ki(e))t.indexOf(s)<0&&ih.call(e,s)&&(n[s]=e[s]);return n};function ch(e,t,n={}){const s=n,{eventFilter:r=mu}=s,a=lh(s,["eventFilter"]);return Ue(e,Vf(r,t),a)}var uh=Object.defineProperty,ph=Object.defineProperties,mh=Object.getOwnPropertyDescriptors,Hr=Object.getOwnPropertySymbols,hu=Object.prototype.hasOwnProperty,gu=Object.prototype.propertyIsEnumerable,Wi=(e,t,n)=>t in e?uh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dh=(e,t)=>{for(var n in t||(t={}))hu.call(t,n)&&Wi(e,n,t[n]);if(Hr)for(var n of Hr(t))gu.call(t,n)&&Wi(e,n,t[n]);return e},fh=(e,t)=>ph(e,mh(t)),hh=(e,t)=>{var n={};for(var s in e)hu.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Hr)for(var s of Hr(e))t.indexOf(s)<0&&gu.call(e,s)&&(n[s]=e[s]);return n};function gh(e,t,n={}){const s=n,{eventFilter:r}=s,a=hh(s,["eventFilter"]),{eventFilter:i,pause:l,resume:c,isActive:u}=zf(r);return{stop:ch(e,t,fh(dh({},a),{eventFilter:i})),pause:l,resume:c,isActive:u}}function bt(e){var t;const n=lt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ze=Mt?window:void 0,_u=Mt?window.document:void 0,_h=Mt?window.navigator:void 0;function Fe(...e){let t,n,s,r;if(pu(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=Ze):[t,n,s,r]=e,!t)return Hs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const a=[],i=()=>{a.forEach(p=>p()),a.length=0},l=(p,m,d)=>(p.addEventListener(m,d,r),()=>p.removeEventListener(m,d,r)),c=Ue(()=>bt(t),p=>{i(),p&&a.push(...n.flatMap(m=>s.map(d=>l(p,m,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return Kt(u),u}function yh(e,t,n={}){const{window:s=Ze,ignore:r=[],capture:a=!0,detectIframe:i=!1}=n;if(!s)return;let l=!0,c;const u=h=>r.some(g=>{if(typeof g=="string")return Array.from(s.document.querySelectorAll(g)).some(v=>v===h.target||h.composedPath().includes(v));{const v=bt(g);return v&&(h.target===v||h.composedPath().includes(v))}}),p=h=>{s.clearTimeout(c);const g=bt(e);if(!(!g||g===h.target||h.composedPath().includes(g))){if(h.detail===0&&(l=!u(h)),!l){l=!0;return}t(h)}},m=[Fe(s,"click",p,{passive:!0,capture:a}),Fe(s,"pointerdown",h=>{const g=bt(e);g&&(l=!h.composedPath().includes(g)&&!u(h))},{passive:!0}),Fe(s,"pointerup",h=>{if(h.button===0){const g=h.composedPath();h.composedPath=()=>g,c=s.setTimeout(()=>p(h),50)}},{passive:!0}),i&&Fe(s,"blur",h=>{var g;const v=bt(e);((g=s.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(v!=null&&v.contains(s.document.activeElement))&&t(h)})].filter(Boolean);return()=>m.forEach(h=>h())}const vh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function xh(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=Ze,eventName:a="keydown",passive:i=!1}=s,l=vh(t);return Fe(r,a,u=>{l(u)&&n(u)},i)}function wh(e={}){var t;const{window:n=Ze}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=Gf(()=>null,()=>s==null?void 0:s.activeElement);return n&&(Fe(n,"blur",a=>{a.relatedTarget===null&&r.trigger()},!0),Fe(n,"focus",r.trigger,!0)),r}function dr(e,t=!1){const n=le(),s=()=>n.value=Boolean(e());return s(),qa(s,t),n}function cs(e,t={}){const{window:n=Ze}=t,s=dr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const a=le(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},l=()=>{s.value&&(i(),r=n.matchMedia(du(e).value),a.value=r.matches,"addEventListener"in r?r.addEventListener("change",l):r.addListener(l))};return bs(l),Kt(()=>i()),a}const bh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $h=Object.defineProperty,Gi=Object.getOwnPropertySymbols,Ph=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,Yi=(e,t,n)=>t in e?$h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bh=(e,t)=>{for(var n in t||(t={}))Ph.call(t,n)&&Yi(e,n,t[n]);if(Gi)for(var n of Gi(t))Sh.call(t,n)&&Yi(e,n,t[n]);return e};function kh(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Wf(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=Ze}=t;function r(l){return s?s.matchMedia(l).matches:!1}const a=l=>cs(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>a(c),enumerable:!0,configurable:!0}),l),{});return Bh({greater(l){return cs(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:a,smaller(l){return cs(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return cs(`(max-width: ${n(l)})`,t)},between(l,c){return cs(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${n(l)})`)},isInBetween(l,c){return r(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},i)}function Eh(e={}){const{navigator:t=_h,read:n=!1,source:s,copiedDuring:r=1500,legacy:a=!1}=e,i=["copy","cut"],l=dr(()=>t&&"clipboard"in t),c=A(()=>l.value||a),u=le(""),p=le(!1),m=oh(()=>p.value=!1,r);function d(){l.value?t.clipboard.readText().then(w=>{u.value=w}):u.value=v()}if(c.value&&n)for(const w of i)Fe(w,d);async function h(w=lt(s)){c.value&&w!=null&&(l.value?await t.clipboard.writeText(w):g(w),u.value=w,p.value=!0,m.start())}function g(w){const E=document.createElement("textarea");E.value=w??"",E.style.position="absolute",E.style.opacity="0",document.body.appendChild(E),E.select(),document.execCommand("copy"),E.remove()}function v(){var w,E,P;return(P=(E=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:E.toString())!=null?P:""}return{isSupported:c,text:u,copied:p,copy:h}}function Nh(e){return JSON.parse(JSON.stringify(e))}const Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jo="__vueuse_ssr_handlers__";Zo[Jo]=Zo[Jo]||{};const Ch=Zo[Jo];function Th(e,t){return Ch[e]||t}function Fh(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Mh=Object.defineProperty,Zi=Object.getOwnPropertySymbols,Oh=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable,Ji=(e,t,n)=>t in e?Mh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qi=(e,t)=>{for(var n in t||(t={}))Oh.call(t,n)&&Ji(e,n,t[n]);if(Zi)for(var n of Zi(t))Ah.call(t,n)&&Ji(e,n,t[n]);return e};const Ih={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Lh(e,t,n,s={}){var r;const{flush:a="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:m=Ze,eventFilter:d,onError:h=z=>{console.error(z)}}=s,g=(p?Vt:le)(t);if(!n)try{n=Th("getDefaultStorage",()=>{var z;return(z=Ze)==null?void 0:z.localStorage})()}catch(z){h(z)}if(!n)return g;const v=lt(t),w=Fh(v),E=(r=s.serializer)!=null?r:Ih[w],{pause:P,resume:N}=gh(g,()=>F(g.value),{flush:a,deep:i,eventFilter:d});return m&&l&&Fe(m,"storage",G),G(),g;function F(z){try{if(z==null)n.removeItem(e);else{const H=E.write(z),ne=n.getItem(e);ne!==H&&(n.setItem(e,H),m&&(m==null||m.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ne,newValue:H,storageArea:n}))))}}catch(H){h(H)}}function W(z){const H=z?z.newValue:n.getItem(e);if(H==null)return c&&v!==null&&n.setItem(e,E.write(v)),v;if(!z&&u){const ne=E.read(H);return er(u)?u(ne,v):w==="object"&&!Array.isArray(ne)?Qi(Qi({},v),ne):ne}else return typeof H!="string"?H:E.read(H)}function G(z){if(!(z&&z.storageArea!==n)){if(z&&z.key==null){g.value=v;return}if(!(z&&z.key!==e)){P();try{g.value=W(z)}catch(H){h(H)}finally{z?Tt(N):N()}}}}}function Rh(e){return cs("(prefers-color-scheme: dark)",e)}var qh=Object.defineProperty,Uh=Object.defineProperties,Dh=Object.getOwnPropertyDescriptors,Xi=Object.getOwnPropertySymbols,Hh=Object.prototype.hasOwnProperty,jh=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?qh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vh=(e,t)=>{for(var n in t||(t={}))Hh.call(t,n)&&el(e,n,t[n]);if(Xi)for(var n of Xi(t))jh.call(t,n)&&el(e,n,t[n]);return e},zh=(e,t)=>Uh(e,Dh(t));function gS(e,t={}){var n,s,r;const a=(n=t.draggingElement)!=null?n:Ze,i=(s=t.handle)!=null?s:e,l=le((r=lt(t.initialValue))!=null?r:{x:0,y:0}),c=le(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,p=g=>{lt(t.preventDefault)&&g.preventDefault(),lt(t.stopPropagation)&&g.stopPropagation()},m=g=>{var v;if(!u(g)||lt(t.exact)&&g.target!==lt(e))return;const w=lt(e).getBoundingClientRect(),E={x:g.clientX-w.left,y:g.clientY-w.top};((v=t.onStart)==null?void 0:v.call(t,E,g))!==!1&&(c.value=E,p(g))},d=g=>{var v;u(g)&&c.value&&(l.value={x:g.clientX-c.value.x,y:g.clientY-c.value.y},(v=t.onMove)==null||v.call(t,l.value,g),p(g))},h=g=>{var v;u(g)&&c.value&&(c.value=void 0,(v=t.onEnd)==null||v.call(t,l.value,g),p(g))};return Mt&&(Fe(i,"pointerdown",m,!0),Fe(a,"pointermove",d,!0),Fe(a,"pointerup",h,!0)),zh(Vh({},sh(l)),{position:l,isDragging:A(()=>!!c.value),style:A(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var tl=Object.getOwnPropertySymbols,Kh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable,Gh=(e,t)=>{var n={};for(var s in e)Kh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&tl)for(var s of tl(e))t.indexOf(s)<0&&Wh.call(e,s)&&(n[s]=e[s]);return n};function Yh(e,t,n={}){const s=n,{window:r=Ze}=s,a=Gh(s,["window"]);let i;const l=dr(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=Ue(()=>bt(e),m=>{c(),l.value&&r&&m&&(i=new ResizeObserver(t),i.observe(m,a))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Kt(p),{isSupported:l,stop:p}}function Zh(e,t={}){const{immediate:n=!0,window:s=Ze}=t,r=le(!1);let a=0,i=null;function l(p){if(!r.value||!s)return;const m=p-a;e({delta:m,timestamp:p}),a=p,i=s.requestAnimationFrame(l)}function c(){!r.value&&s&&(r.value=!0,i=s.requestAnimationFrame(l))}function u(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&c(),Kt(u),{isActive:Ut(r),pause:u,resume:c}}function Jh(e,t={width:0,height:0},n={}){const{window:s=Ze,box:r="content-box"}=n,a=A(()=>{var c,u;return(u=(c=bt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=le(t.width),l=le(t.height);return Yh(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&a.value){const p=bt(e);if(p){const m=s.getComputedStyle(p);i.value=parseFloat(m.width),l.value=parseFloat(m.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((m,{inlineSize:d})=>m+d,0),l.value=p.reduce((m,{blockSize:d})=>m+d,0)}else i.value=c.contentRect.width,l.value=c.contentRect.height},n),Ue(()=>bt(e),c=>{i.value=c?t.width:0,l.value=c?t.height:0}),{width:i,height:l}}const nl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Qh(e,t={}){const{document:n=_u,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),a=le(!1);let i=nl[0];const l=dr(()=>{if(n){for(const v of nl)if(v[1]in n)return i=v,!0}else return!1;return!1}),[c,u,p,,m]=i;async function d(){l.value&&(n!=null&&n[p]&&await n[u](),a.value=!1)}async function h(){if(!l.value)return;await d();const v=bt(r);v&&(await v[c](),a.value=!0)}async function g(){a.value?await d():await h()}return n&&Fe(n,m,()=>{a.value=!!(n!=null&&n[p])},!1),s&&Kt(d),{isSupported:l,isFullscreen:a,enter:h,exit:d,toggle:g}}function _S(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:a=.1,window:i=Ze}=n,l=dr(()=>i&&"IntersectionObserver"in i);let c=Hs;const u=l.value?Ue(()=>({el:bt(e),root:bt(s)}),({el:m,root:d})=>{if(c(),!m)return;const h=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:a});h.observe(m),c=()=>{h.disconnect(),c=Hs}},{immediate:!0,flush:"post"}):Hs,p=()=>{c(),u()};return Kt(p),{isSupported:l,stop:p}}function At(e,t,n={}){const{window:s=Ze}=n;return Lh(e,t,s==null?void 0:s.localStorage,n)}const Xh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function eg(e={}){const{reactive:t=!1,target:n=Ze,aliasMap:s=Xh,passive:r=!0,onEventFired:a=Hs}=e,i=Qe(new Set),l={toJSON(){return{}},current:i},c=t?Qe(l):l,u=new Set,p=new Set;function m(v,w){v in c&&(t?c[v]=w:c[v].value=w)}function d(){i.clear();for(const v of p)m(v,!1)}function h(v,w){var E,P;const N=(E=v.key)==null?void 0:E.toLowerCase(),W=[(P=v.code)==null?void 0:P.toLowerCase(),N].filter(Boolean);N&&(w?i.add(N):i.delete(N));for(const G of W)p.add(G),m(G,w);N==="meta"&&!w?(u.forEach(G=>{i.delete(G),m(G,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&w&&[...i,...W].forEach(G=>u.add(G))}Fe(n,"keydown",v=>(h(v,!0),a(v)),{passive:r}),Fe(n,"keyup",v=>(h(v,!1),a(v)),{passive:r}),Fe("blur",d,{passive:!0}),Fe("focus",d,{passive:!0});const g=new Proxy(c,{get(v,w,E){if(typeof w!="string")return Reflect.get(v,w,E);if(w=w.toLowerCase(),w in s&&(w=s[w]),!(w in c))if(/[+_-]/.test(w)){const N=w.split(/[+_-]/g).map(F=>F.trim());c[w]=A(()=>N.every(F=>b(g[F])))}else c[w]=le(!1);const P=Reflect.get(v,w,E);return t?b(P):P}});return g}function yS(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:a=Ze,eventFilter:i}=e,l=le(r.x),c=le(r.y),u=le(null),p=v=>{t==="page"?(l.value=v.pageX,c.value=v.pageY):t==="client"?(l.value=v.clientX,c.value=v.clientY):t==="movement"&&(l.value=v.movementX,c.value=v.movementY),u.value="mouse"},m=()=>{l.value=r.x,c.value=r.y},d=v=>{if(v.touches.length>0){const w=v.touches[0];t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="touch"}},h=v=>i===void 0?p(v):i(()=>p(v),{}),g=v=>i===void 0?d(v):i(()=>d(v),{});return a&&(Fe(a,"mousemove",h,{passive:!0}),Fe(a,"dragover",h,{passive:!0}),n&&t!=="movement"&&(Fe(a,"touchstart",g,{passive:!0}),Fe(a,"touchmove",g,{passive:!0}),s&&Fe(a,"touchend",m,{passive:!0}))),{x:l,y:c,sourceType:u}}var tn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tn||(tn={}));function tg(e,t={}){const n=du(e),{threshold:s=50,onSwipe:r,onSwipeEnd:a,onSwipeStart:i}=t,l=Qe({x:0,y:0}),c=(G,z)=>{l.x=G,l.y=z},u=Qe({x:0,y:0}),p=(G,z)=>{u.x=G,u.y=z},m=A(()=>l.x-u.x),d=A(()=>l.y-u.y),{max:h,abs:g}=Math,v=A(()=>h(g(m.value),g(d.value))>=s),w=le(!1),E=le(!1),P=A(()=>v.value?g(m.value)>g(d.value)?m.value>0?tn.LEFT:tn.RIGHT:d.value>0?tn.UP:tn.DOWN:tn.NONE),N=G=>{var z,H,ne;const ie=G.buttons===0,de=G.buttons===1;return(ne=(H=(z=t.pointerTypes)==null?void 0:z.includes(G.pointerType))!=null?H:ie||de)!=null?ne:!0},F=[Fe(e,"pointerdown",G=>{var z,H;if(!N(G))return;E.value=!0,(H=(z=n.value)==null?void 0:z.style)==null||H.setProperty("touch-action","none");const ne=G.target;ne==null||ne.setPointerCapture(G.pointerId);const{clientX:ie,clientY:de}=G;c(ie,de),p(ie,de),i==null||i(G)}),Fe(e,"pointermove",G=>{if(!N(G)||!E.value)return;const{clientX:z,clientY:H}=G;p(z,H),!w.value&&v.value&&(w.value=!0),w.value&&(r==null||r(G))}),Fe(e,"pointerup",G=>{var z,H;N(G)&&(w.value&&(a==null||a(G,P.value)),E.value=!1,w.value=!1,(H=(z=n.value)==null?void 0:z.style)==null||H.setProperty("touch-action","initial"))})],W=()=>F.forEach(G=>G());return{isSwiping:Ut(w),direction:Ut(P),posStart:Ut(l),posEnd:Ut(u),distanceX:m,distanceY:d,stop:W}}let ng=0;function vS(e,t={}){const n=le(!1),{document:s=_u,immediate:r=!0,manual:a=!1,id:i=`vueuse_styletag_${++ng}`}=t,l=le(e);let c=()=>{};const u=()=>{if(!s)return;const m=s.getElementById(i)||s.createElement("style");m.isConnected||(m.type="text/css",m.id=i,t.media&&(m.media=t.media),s.head.appendChild(m)),!n.value&&(c=Ue(l,d=>{m.textContent=d},{immediate:!0}),n.value=!0)},p=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(i)),n.value=!1)};return r&&!a&&qa(u),a||Kt(p),{id:i,css:l,unload:p,load:u,isLoaded:Ut(n)}}var sg=Object.defineProperty,sl=Object.getOwnPropertySymbols,rg=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,rl=(e,t,n)=>t in e?sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ag=(e,t)=>{for(var n in t||(t={}))rg.call(t,n)&&rl(e,n,t[n]);if(sl)for(var n of sl(t))og.call(t,n)&&rl(e,n,t[n]);return e};function xS(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:a}=e,i=le(Yo()+n),l=()=>i.value=Yo()+n,c=a?()=>{l(),a(i.value)}:l,u=r==="requestAnimationFrame"?Zh(c,{immediate:s}):rh(c,r,{immediate:s});return t?ag({timestamp:i},u):i}var ig=Object.defineProperty,ol=Object.getOwnPropertySymbols,lg=Object.prototype.hasOwnProperty,cg=Object.prototype.propertyIsEnumerable,al=(e,t,n)=>t in e?ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ug=(e,t)=>{for(var n in t||(t={}))lg.call(t,n)&&al(e,n,t[n]);if(ol)for(var n of ol(t))cg.call(t,n)&&al(e,n,t[n]);return e};const pg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ug({linear:Kf},pg);function Dt(e,t,n,s={}){var r,a,i;const{clone:l=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:m}=s,d=Wt(),h=n||(d==null?void 0:d.emit)||((r=d==null?void 0:d.$emit)==null?void 0:r.bind(d))||((i=(a=d==null?void 0:d.proxy)==null?void 0:a.$emit)==null?void 0:i.bind(d==null?void 0:d.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const v=E=>l?er(l)?l(E):Nh(E):E,w=()=>Hf(e[t])?v(e[t]):m;if(c){const E=w(),P=le(E);return Ue(()=>e[t],N=>P.value=v(N)),Ue(P,N=>{(N!==e[t]||p)&&h(g,N)},{deep:p}),P}else return A({get(){return w()},set(E){h(g,E)}})}function wS({window:e=Ze}={}){if(!e)return le(!1);const t=le(e.document.hasFocus());return Fe(e,"blur",()=>{t.value=!1}),Fe(e,"focus",()=>{t.value=!0}),t}function mg(e={}){const{window:t=Ze,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:a=!0}=e,i=le(n),l=le(s),c=()=>{t&&(a?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),qa(c),Fe("resize",c,{passive:!0}),r&&Fe("orientationchange",c,{passive:!0}),{width:i,height:l}}function dg(){return yu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function yu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const fg=typeof Proxy=="function",hg="devtools-plugin:setup",gg="plugin:settings:set";let ss,Qo;function _g(){var e;return ss!==void 0||(typeof window<"u"&&window.performance?(ss=!0,Qo=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ss=!0,Qo=global.perf_hooks.performance):ss=!1),ss}function yg(){return _g()?Qo.now():Date.now()}class vg{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const i in t.settings){const l=t.settings[i];s[i]=l.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let a=Object.assign({},s);try{const i=localStorage.getItem(r),l=JSON.parse(i);Object.assign(a,l)}catch{}this.fallbacks={getSettings(){return a},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}a=i},now(){return yg()}},n&&n.on(gg,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function xg(e,t){const n=e,s=yu(),r=dg(),a=fg&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!a))r.emit(hg,e,t);else{const i=a?new vg(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function wg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function $o(e,t){const n={};for(const s in t){const r=t[s];n[s]=yt(r)?r.map(e):e(r)}return n}const js=()=>{},yt=Array.isArray;function Pe(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const bg=/\/$/,$g=e=>e.replace(bg,"");function Po(e,t,n="/"){let s,r={},a="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),a=t.slice(c+1,l>-1?l:t.length),r=e(a)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Bg(s??t,n),{fullPath:s+(a&&"?")+a+i,path:s,query:r,hash:i}}function Pg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function il(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ll(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&kn(t.matched[s],n.matched[r])&&vu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Sg(e[n],t[n]))return!1;return!0}function Sg(e,t){return yt(e)?cl(e,t):yt(t)?cl(t,e):e===t}function cl(e,t){return yt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Bg(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,a,i;for(a=0;a<s.length;a++)if(i=s[a],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var tr;(function(e){e.pop="pop",e.push="push"})(tr||(tr={}));var Vs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vs||(Vs={}));function kg(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$g(e)}const Eg=/^[^#]+#/;function Ng(e,t){return e.replace(Eg,"#")+t}function Cg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const a=document.querySelector(e.el);if(s&&a){Pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=Cg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ul(e,t){return(history.state?history.state.position-t:-1)+e}const Xo=new Map;function Fg(e,t){Xo.set(e,t)}function Mg(e){const t=Xo.get(e);return Xo.delete(e),t}let Og=()=>location.protocol+"//"+location.host;function xu(e,t){const{pathname:n,search:s,hash:r}=t,a=e.indexOf("#");if(a>-1){let l=r.includes(e.slice(a))?e.slice(a).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),il(c,"")}return il(n,e)+s+r}function Ag(e,t,n,s){let r=[],a=[],i=null;const l=({state:d})=>{const h=xu(e,location),g=n.value,v=t.value;let w=0;if(d){if(n.value=h,t.value=d,i&&i===g){i=null;return}w=v?d.position-v.position:0}else s(h);r.forEach(E=>{E(n.value,g,{delta:w,type:tr.pop,direction:w?w>0?Vs.forward:Vs.back:Vs.unknown})})};function c(){i=n.value}function u(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return a.push(h),h}function p(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:uo()}),"")}function m(){for(const d of a)d();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:m}}function pl(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?uo():null}}function Ig(e){const{history:t,location:n}=window,s={value:xu(e,n)},r={value:t.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,u,p){const m=e.indexOf("#"),d=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:Og()+e+c;try{t[p?"replaceState":"pushState"](u,"",d),r.value=u}catch(h){Pe("Error with push/replace State",h),n[p?"replace":"assign"](d)}}function i(c,u){const p=Ee({},t.state,pl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});a(c,p,!0),s.value=c}function l(c,u){const p=Ee({},r.value,t.state,{forward:c,scroll:uo()});t.state||Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),a(p.current,p,!0);const m=Ee({},pl(s.value,c,null),{position:p.position+1},u);a(c,m,!1),s.value=c}return{location:s,state:r,push:l,replace:i}}function Lg(e){e=kg(e);const t=Ig(e),n=Ag(e,t.state,t.location,t.replace);function s(a,i=!0){i||n.pauseListeners(),history.go(a)}const r=Ee({location:"",base:e,go:s,createHref:Ng.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Rg(e){return typeof e=="string"||e&&typeof e=="object"}function wu(e){return typeof e=="string"||typeof e=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bu=Symbol("navigation failure");var ml;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ml||(ml={}));const qg={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Dg(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function vs(e,t){return Ee(new Error(qg[e](t)),{type:e,[bu]:!0},t)}function Gt(e,t){return e instanceof Error&&bu in e&&(t==null||!!(e.type&t))}const Ug=["params","query","hash"];function Dg(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of Ug)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const dl="[^/]+?",Hg={sensitive:!1,strict:!1,start:!0,end:!0},jg=/[.+*?^${}()[\]/\\]/g;function Vg(e,t){const n=Ee({},Hg,t),s=[];let r=n.start?"^":"";const a=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const d=u[m];let h=40+(n.sensitive?.25:0);if(d.type===0)m||(r+="/"),r+=d.value.replace(jg,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:w,regexp:E}=d;a.push({name:g,repeatable:v,optional:w});const P=E||dl;if(P!==dl){h+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+F.message)}}let N=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;m||(N=w&&u.length<2?`(?:/${N})`:"/"+N),w&&(N+="?"),r+=N,h+=20,w&&(h+=-8),v&&(h+=-20),P===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(u){const p=u.match(i),m={};if(!p)return null;for(let d=1;d<p.length;d++){const h=p[d]||"",g=a[d-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function c(u){let p="",m=!1;for(const d of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const h of d)if(h.type===0)p+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:w}=h,E=g in u?u[g]:"";if(yt(E)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=yt(E)?E.join("/"):E;if(!P)if(w)d.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);p+=P}}return p||"/"}return{re:i,score:s,keys:a,parse:l,stringify:c}}function zg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Kg(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const a=zg(s[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-s.length)===1){if(fl(s))return 1;if(fl(r))return-1}return r.length-s.length}function fl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wg={type:0,value:""},Gg=/[a-zA-Z0-9_]/;function Yg(e){if(!e)return[[]];if(e==="/")return[[Wg]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const r=[];let a;function i(){a&&r.push(a),a=[]}let l=0,c,u="",p="";function m(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&m(),i()):c===":"?(m(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Gg.test(c)?d():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),m(),i(),r}function Zg(e,t,n){const s=Vg(Yg(e.path),n);{const a=new Set;for(const i of s.keys)a.has(i.name)&&Pe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),a.add(i.name)}const r=Ee(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Jg(e,t){const n=[],s=new Map;t=_l({strict:!1,end:!0,sensitive:!1},t);function r(p){return s.get(p)}function a(p,m,d){const h=!d,g=Qg(p);n_(g,m),g.aliasOf=d&&d.record;const v=_l(t,p),w=[g];if("alias"in p){const N=typeof p.alias=="string"?[p.alias]:p.alias;for(const F of N)w.push(Ee({},g,{components:d?d.record.components:g.components,path:F,aliasOf:d?d.record:g}))}let E,P;for(const N of w){const{path:F}=N;if(m&&F[0]!=="/"){const W=m.record.path,G=W[W.length-1]==="/"?"":"/";N.path=m.record.path+(F&&G+F)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(E=Zg(N,m,v),m&&F[0]==="/"&&s_(E,m),d?(d.alias.push(E),t_(d,E)):(P=P||E,P!==E&&P.alias.push(E),h&&p.name&&!gl(E)&&i(p.name)),g.children){const W=g.children;for(let G=0;G<W.length;G++)a(W[G],E,d&&d.children[G])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return P?()=>{i(P)}:js}function i(p){if(wu(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function l(){return n}function c(p){let m=0;for(;m<n.length&&Kg(p,n[m])>=0&&(p.record.path!==n[m].record.path||!$u(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!gl(p)&&s.set(p.record.name,p)}function u(p,m){let d,h={},g,v;if("name"in p&&p.name){if(d=s.get(p.name),!d)throw vs(1,{location:p});{const P=Object.keys(p.params||{}).filter(N=>!d.keys.find(F=>F.name===N));P.length&&Pe(`Discarded invalid param(s) "${P.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=d.record.name,h=Ee(hl(m.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),p.params&&hl(p.params,d.keys.map(P=>P.name))),g=d.stringify(h)}else if("path"in p)g=p.path,g.startsWith("/")||Pe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(P=>P.re.test(g)),d&&(h=d.parse(g),v=d.record.name);else{if(d=m.name?s.get(m.name):n.find(P=>P.re.test(m.path)),!d)throw vs(1,{location:p,currentLocation:m});v=d.record.name,h=Ee({},m.params,p.params),g=d.stringify(h)}const w=[];let E=d;for(;E;)w.unshift(E.record),E=E.parent;return{name:v,path:g,params:h,matched:w,meta:e_(w)}}return e.forEach(p=>a(p)),{addRoute:a,resolve:u,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function hl(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Qg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function gl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function e_(e){return e.reduce((t,n)=>Ee(t,n.meta),{})}function _l(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ea(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function t_(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ea.bind(null,n)))return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ea.bind(null,n)))return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function n_(e,t){t&&t.record.name&&!e.name&&!e.path&&Pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function s_(e,t){for(const n of t.keys)if(!e.keys.find(ea.bind(null,n)))return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function $u(e,t){return t.children.some(n=>n===e||$u(e,n))}const Pu=/#/g,r_=/&/g,o_=/\//g,a_=/=/g,i_=/\?/g,Su=/\+/g,l_=/%5B/g,c_=/%5D/g,Bu=/%5E/g,u_=/%60/g,ku=/%7B/g,p_=/%7C/g,Eu=/%7D/g,m_=/%20/g;function Ua(e){return encodeURI(""+e).replace(p_,"|").replace(l_,"[").replace(c_,"]")}function d_(e){return Ua(e).replace(ku,"{").replace(Eu,"}").replace(Bu,"^")}function ta(e){return Ua(e).replace(Su,"%2B").replace(m_,"+").replace(Pu,"%23").replace(r_,"%26").replace(u_,"`").replace(ku,"{").replace(Eu,"}").replace(Bu,"^")}function f_(e){return ta(e).replace(a_,"%3D")}function h_(e){return Ua(e).replace(Pu,"%23").replace(i_,"%3F")}function g_(e){return e==null?"":h_(e).replace(o_,"%2F")}function nr(e){try{return decodeURIComponent(""+e)}catch{Pe(`Error decoding "${e}". Using original value`)}return""+e}function __(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(Su," "),i=a.indexOf("="),l=nr(i<0?a:a.slice(0,i)),c=i<0?null:nr(a.slice(i+1));if(l in t){let u=t[l];yt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function yl(e){let t="";for(let n in e){const s=e[n];if(n=f_(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(yt(s)?s.map(a=>a&&ta(a)):[s&&ta(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function y_(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const v_=Symbol("router view location matched"),vl=Symbol("router view depth"),Da=Symbol("router"),Nu=Symbol("route location"),na=Symbol("router view location");function Es(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function hn(e,t,n,s,r){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=m=>{m===!1?l(vs(4,{from:n,to:t})):m instanceof Error?l(m):Rg(m)?l(vs(2,{from:t,to:m})):(a&&s.enterCallbacks[r]===a&&typeof m=="function"&&a.push(m),i())},u=e.call(s&&s.instances[r],t,n,x_(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(d=>c._called?d:(Pe(m),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Pe(m),l(new Error("Invalid navigation guard"));return}}p.catch(m=>l(m))})}function x_(e,t,n){let s=0;return function(){s++===1&&Pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function So(e,t,n,s){const r=[];for(const a of e){!a.components&&!a.children.length&&Pe(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const i in a.components){let l=a.components[i];{if(!l||typeof l!="object"&&typeof l!="function")throw Pe(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Pe(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=l;l=()=>c}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Pe(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(w_(l)){const u=(l.__vccOpts||l)[t];u&&r.push(hn(u,n,s,a,i))}else{let c=l();"catch"in c||(Pe(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const p=wg(u)?u.default:u;a.components[i]=p;const d=(p.__vccOpts||p)[t];return d&&hn(d,n,s,a,i)()}))}}}return r}function w_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xl(e){const t=S(Da),n=S(Nu),s=A(()=>t.resolve(b(e.to))),r=A(()=>{const{matched:c}=s.value,{length:u}=c,p=c[u-1],m=n.matched;if(!p||!m.length)return-1;const d=m.findIndex(kn.bind(null,p));if(d>-1)return d;const h=wl(c[u-2]);return u>1&&wl(p)===h&&m[m.length-1].path!==h?m.findIndex(kn.bind(null,c[u-2])):d}),a=A(()=>r.value>-1&&S_(n.params,s.value.params)),i=A(()=>r.value>-1&&r.value===n.matched.length-1&&vu(n.params,s.value.params));function l(c={}){return P_(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(js):Promise.resolve()}if(Xt){const c=Wt();if(c){const u={route:s.value,isActive:a.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),bs(()=>{u.route=s.value,u.isActive=a.value,u.isExactActive=i.value},{flush:"post"})}}return{route:s,href:A(()=>s.value.href),isActive:a,isExactActive:i,navigate:l}}const b_=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xl,setup(e,{slots:t}){const n=Qe(xl(e)),{options:s}=S(Da),r=A(()=>({[bl(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bl(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:co("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),$_=b_;function P_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function S_(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!yt(r)||r.length!==s.length||s.some((a,i)=>a!==r[i]))return!1}return!0}function wl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bl=(e,t,n)=>e??t??n,B_=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){E_();const s=S(na),r=A(()=>e.route||s.value),a=S(vl,0),i=A(()=>{let u=b(a);const{matched:p}=r.value;let m;for(;(m=p[u])&&!m.components;)u++;return u}),l=A(()=>r.value.matched[i.value]);gt(vl,A(()=>i.value+1)),gt(v_,l),gt(na,r);const c=le();return Ue(()=>[c.value,l.value,e.name],([u,p,m],[d,h,g])=>{p&&(p.instances[m]=u,h&&h!==p&&u&&u===d&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!kn(p,h)||!d)&&(p.enterCallbacks[m]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,m=l.value,d=m&&m.components[p];if(!d)return $l(n.default,{Component:d,route:u});const h=m.props[p],g=h?h===!0?u.params:typeof h=="function"?h(u):h:null,w=co(d,Ee({},g,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(m.instances[p]=null)},ref:c}));if(Xt&&w.ref){const E={depth:i.value,name:m.name,path:m.path,meta:m.meta};(yt(w.ref)?w.ref.map(N=>N.i):[w.ref.i]).forEach(N=>{N.__vrv_devtools=E})}return $l(n.default,{Component:w,route:u})||w}}});function $l(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const k_=B_;function E_(){const e=Wt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ns(e,t){const n=Ee({},e,{matched:e.matched.map(s=>L_(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function wr(e){return{_custom:{display:e}}}let N_=0;function C_(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=N_++;xg({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,m)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ns(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:m})=>{if(m.__vrv_devtools){const d=m.__vrv_devtools;p.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Cu})}yt(m.__vrl_devtools)&&(m.__devtoolsApi=r,m.__vrl_devtools.forEach(d=>{let h=Mu,g="";d.isExactActive?(h=Fu,g="This is exactly active"):d.isActive&&(h=Tu,g="This link is active"),p.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:h})}))}),Ue(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(l),r.sendInspectorState(l)});const a="router:navigations:"+s;r.addTimelineLayer({id:a,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((p,m)=>{r.addTimelineEvent({layerId:a,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:m.meta.__navigationId}})});let i=0;t.beforeEach((p,m)=>{const d={guard:wr("beforeEach"),from:Ns(m,"Current Location during this navigation"),to:Ns(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:a,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:d,groupId:p.meta.__navigationId}})}),t.afterEach((p,m,d)=>{const h={guard:wr("afterEach")};d?(h.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},h.status=wr("❌")):h.status=wr("✅"),h.from=Ns(m,"Current Location during this navigation"),h.to=Ns(p,"Target location"),r.addTimelineEvent({layerId:a,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:h,logType:d?"warning":"default",groupId:p.meta.__navigationId}})});const l="router-inspector:"+s;r.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let m=n.getRoutes().filter(d=>!d.parent);m.forEach(Iu),p.filter&&(m=m.filter(d=>sa(d,p.filter.toLowerCase()))),m.forEach(d=>Au(d,t.currentRoute.value)),p.rootNodes=m.map(Ou)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===l&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===l){const d=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);d&&(p.state={options:F_(d)})}}),r.sendInspectorTree(l),r.sendInspectorState(l)})}function T_(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function F_(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${T_(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Cu=15485081,Tu=2450411,Fu=8702998,M_=2282478,Mu=16486972,O_=6710886;function Ou(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:M_}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Mu}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Cu}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Fu}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Tu}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:O_});let s=n.__vd_id;return s==null&&(s=String(A_++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Ou)}}let A_=0;const I_=/^\/(.*)\/([a-z]*)$/;function Au(e,t){const n=t.matched.length&&kn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>kn(s,e.record))),e.children.forEach(s=>Au(s,t))}function Iu(e){e.__vd_match=!1,e.children.forEach(Iu)}function sa(e,t){const n=String(e.re).match(I_);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>sa(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),a=nr(r);return!t.startsWith("/")&&(a.includes(t)||r.includes(t))||a.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>sa(i,t))}function L_(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function R_(e){const t=Jg(e.routes,e),n=e.parseQuery||__,s=e.stringifyQuery||yl,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const a=Es(),i=Es(),l=Es(),c=Vt(pn);let u=pn;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=$o.bind(null,k=>""+k),m=$o.bind(null,g_),d=$o.bind(null,nr);function h(k,ee){let Y,te;return wu(k)?(Y=t.getRecordMatcher(k),te=ee):te=k,t.addRoute(te,Y)}function g(k){const ee=t.getRecordMatcher(k);ee?t.removeRoute(ee):Pe(`Cannot remove non-existent route "${String(k)}"`)}function v(){return t.getRoutes().map(k=>k.record)}function w(k){return!!t.getRecordMatcher(k)}function E(k,ee){if(ee=Ee({},ee||c.value),typeof k=="string"){const me=Po(n,k,ee.path),f=t.resolve({path:me.path},ee),_=r.createHref(me.fullPath);return _.startsWith("//")?Pe(`Location "${k}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):f.matched.length||Pe(`No match found for location with path "${k}"`),Ee(me,f,{params:d(f.params),hash:nr(me.hash),redirectedFrom:void 0,href:_})}let Y;if("path"in k)"params"in k&&!("name"in k)&&Object.keys(k.params).length&&Pe(`Path "${k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Y=Ee({},k,{path:Po(n,k.path,ee.path).path});else{const me=Ee({},k.params);for(const f in me)me[f]==null&&delete me[f];Y=Ee({},k,{params:m(k.params)}),ee.params=m(ee.params)}const te=t.resolve(Y,ee),ve=k.hash||"";ve&&!ve.startsWith("#")&&Pe(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),te.params=p(d(te.params));const $e=Pg(s,Ee({},k,{hash:d_(ve),path:te.path})),ge=r.createHref($e);return ge.startsWith("//")?Pe(`Location "${k}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):te.matched.length||Pe(`No match found for location with path "${"path"in k?k.path:k}"`),Ee({fullPath:$e,hash:ve,query:s===yl?y_(k.query):k.query||{}},te,{redirectedFrom:void 0,href:ge})}function P(k){return typeof k=="string"?Po(n,k,c.value.path):Ee({},k)}function N(k,ee){if(u!==k)return vs(8,{from:ee,to:k})}function F(k){return z(k)}function W(k){return F(Ee(P(k),{replace:!0}))}function G(k){const ee=k.matched[k.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let te=typeof Y=="function"?Y(k):Y;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=P(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Pe(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:k.query,hash:k.hash,params:"path"in te?{}:k.params},te)}}function z(k,ee){const Y=u=E(k),te=c.value,ve=k.state,$e=k.force,ge=k.replace===!0,me=G(Y);if(me)return z(Ee(P(me),{state:typeof me=="object"?Ee({},ve,me.state):ve,force:$e,replace:ge}),ee||Y);const f=Y;f.redirectedFrom=ee;let _;return!$e&&ll(s,te,Y)&&(_=vs(16,{to:f,from:te}),Me(te,te,!0,!1)),(_?Promise.resolve(_):ne(f,te)).catch($=>Gt($)?Gt($,2)?$:ye($):Q($,f,te)).then($=>{if($){if(Gt($,2))return ll(s,E($.to),f)&&ee&&(ee._count=ee._count?ee._count+1:1)>10?(Pe(`Detected an infinite redirection in a navigation guard when going from "${te.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(Ee({replace:ge},P($.to),{state:typeof $.to=="object"?Ee({},ve,$.to.state):ve,force:$e}),ee||f)}else $=de(f,te,!0,ge,ve);return ie(f,te,$),$})}function H(k,ee){const Y=N(k,ee);return Y?Promise.reject(Y):Promise.resolve()}function ne(k,ee){let Y;const[te,ve,$e]=q_(k,ee);Y=So(te.reverse(),"beforeRouteLeave",k,ee);for(const me of te)me.leaveGuards.forEach(f=>{Y.push(hn(f,k,ee))});const ge=H.bind(null,k,ee);return Y.push(ge),rs(Y).then(()=>{Y=[];for(const me of a.list())Y.push(hn(me,k,ee));return Y.push(ge),rs(Y)}).then(()=>{Y=So(ve,"beforeRouteUpdate",k,ee);for(const me of ve)me.updateGuards.forEach(f=>{Y.push(hn(f,k,ee))});return Y.push(ge),rs(Y)}).then(()=>{Y=[];for(const me of k.matched)if(me.beforeEnter&&!ee.matched.includes(me))if(yt(me.beforeEnter))for(const f of me.beforeEnter)Y.push(hn(f,k,ee));else Y.push(hn(me.beforeEnter,k,ee));return Y.push(ge),rs(Y)}).then(()=>(k.matched.forEach(me=>me.enterCallbacks={}),Y=So($e,"beforeRouteEnter",k,ee),Y.push(ge),rs(Y))).then(()=>{Y=[];for(const me of i.list())Y.push(hn(me,k,ee));return Y.push(ge),rs(Y)}).catch(me=>Gt(me,8)?me:Promise.reject(me))}function ie(k,ee,Y){for(const te of l.list())te(k,ee,Y)}function de(k,ee,Y,te,ve){const $e=N(k,ee);if($e)return $e;const ge=ee===pn,me=Xt?history.state:{};Y&&(te||ge?r.replace(k.fullPath,Ee({scroll:ge&&me&&me.scroll},ve)):r.push(k.fullPath,ve)),c.value=k,Me(k,ee,Y,ge),ye()}let J;function we(){J||(J=r.listen((k,ee,Y)=>{if(!ln.listening)return;const te=E(k),ve=G(te);if(ve){z(Ee(ve,{replace:!0}),te).catch(js);return}u=te;const $e=c.value;Xt&&Fg(ul($e.fullPath,Y.delta),uo()),ne(te,$e).catch(ge=>Gt(ge,12)?ge:Gt(ge,2)?(z(ge.to,te).then(me=>{Gt(me,20)&&!Y.delta&&Y.type===tr.pop&&r.go(-1,!1)}).catch(js),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),Q(ge,te,$e))).then(ge=>{ge=ge||de(te,$e,!1),ge&&(Y.delta&&!Gt(ge,8)?r.go(-Y.delta,!1):Y.type===tr.pop&&Gt(ge,20)&&r.go(-1,!1)),ie(te,$e,ge)}).catch(js)}))}let Ie=Es(),Be=Es(),Le;function Q(k,ee,Y){ye(k);const te=Be.list();return te.length?te.forEach(ve=>ve(k,ee,Y)):(Pe("uncaught error during route navigation:"),console.error(k)),Promise.reject(k)}function pe(){return Le&&c.value!==pn?Promise.resolve():new Promise((k,ee)=>{Ie.add([k,ee])})}function ye(k){return Le||(Le=!k,we(),Ie.list().forEach(([ee,Y])=>k?Y(k):ee()),Ie.reset()),k}function Me(k,ee,Y,te){const{scrollBehavior:ve}=e;if(!Xt||!ve)return Promise.resolve();const $e=!Y&&Mg(ul(k.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return Tt().then(()=>ve(k,ee,$e)).then(ge=>ge&&Tg(ge)).catch(ge=>Q(ge,k,ee))}const dt=k=>r.go(k);let Xe;const ut=new Set,ln={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,hasRoute:w,getRoutes:v,resolve:E,options:e,push:F,replace:W,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:Be.add,isReady:pe,install(k){const ee=this;k.component("RouterLink",$_),k.component("RouterView",k_),k.config.globalProperties.$router=ee,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),Xt&&!Xe&&c.value===pn&&(Xe=!0,F(r.location).catch(ve=>{Pe("Unexpected error when starting the router:",ve)}));const Y={};for(const ve in pn)Y[ve]=A(()=>c.value[ve]);k.provide(Da,ee),k.provide(Nu,Qe(Y)),k.provide(na,c);const te=k.unmount;ut.add(k),k.unmount=function(){ut.delete(k),ut.size<1&&(u=pn,J&&J(),J=null,c.value=pn,Xe=!1,Le=!1),te()},Xt&&C_(k,ee,t)}};return ln}function rs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function q_(e,t){const n=[],s=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const l=t.matched[i];l&&(e.matched.find(u=>kn(u,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(u=>kn(u,c))||r.push(c))}return[n,s,r]}const Bo=le(!1),zs=le(!1),ps=le(!1),U_=le(!0),ra=kh({xs:460,...bh}),Vn=mg(),Lu=eg(),D_=A(()=>Vn.height.value-Vn.width.value/wn>180),Ru=Qh(Mt?document.body:null),gs=wh(),H_=A(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=gs.value)==null?void 0:e.tagName)||"")||((t=gs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),j_=A(()=>{var e;return["BUTTON","A"].includes(((e=gs.value)==null?void 0:e.tagName)||"")});At("slidev-camera","default");At("slidev-mic","default");const Er=At("slidev-scale",0),ot=At("slidev-show-overview",!1),ko=At("slidev-presenter-cursor",!0),Pl=At("slidev-show-editor",!1);At("slidev-editor-width",Mt?window.innerWidth*.4:100);const qu=fu(ot);function Sl(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function V_(e){return[-e[0],-e[1]]}function kt(e,t){return[e[0]+t[0],e[1]+t[1]]}function wt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Bt(e,t){return[e[0]*t,e[1]*t]}function z_(e,t){return[e[0]/t,e[1]/t]}function Cs(e){return[e[1],-e[0]]}function Bl(e,t){return e[0]*t[0]+e[1]*t[1]}function K_(e,t){return e[0]===t[0]&&e[1]===t[1]}function W_(e){return Math.hypot(e[0],e[1])}function G_(e){return e[0]*e[0]+e[1]*e[1]}function kl(e,t){return G_(wt(e,t))}function Uu(e){return z_(e,W_(e))}function Y_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ts(e,t,n){let s=Math.sin(n),r=Math.cos(n),a=e[0]-t[0],i=e[1]-t[1],l=a*r-i*s,c=a*s+i*r;return[l+t[0],c+t[1]]}function oa(e,t,n){return kt(e,Bt(wt(t,e),n))}function El(e,t,n){return kt(e,Bt(t,n))}var{min:os,PI:Z_}=Math,Nl=.275,Fs=Z_+1e-4;function J_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:a=!0,easing:i=Q=>Q,start:l={},end:c={},last:u=!1}=t,{cap:p=!0,easing:m=Q=>Q*(2-Q)}=l,{cap:d=!0,easing:h=Q=>--Q*Q*Q+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,v=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,w=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,E=Math.pow(n*s,2),P=[],N=[],F=e.slice(0,10).reduce((Q,pe)=>{let ye=pe.pressure;if(a){let Me=os(1,pe.distance/n),dt=os(1,1-Me);ye=os(1,Q+(dt-Q)*(Me*Nl))}return(Q+ye)/2},e[0].pressure),W=Sl(n,r,e[e.length-1].pressure,i),G,z=e[0].vector,H=e[0].point,ne=H,ie=H,de=ne,J=!1;for(let Q=0;Q<e.length;Q++){let{pressure:pe}=e[Q],{point:ye,vector:Me,distance:dt,runningLength:Xe}=e[Q];if(Q<e.length-1&&g-Xe<3)continue;if(r){if(a){let $e=os(1,dt/n),ge=os(1,1-$e);pe=os(1,F+(ge-F)*($e*Nl))}W=Sl(n,r,pe,i)}else W=n/2;G===void 0&&(G=W);let ut=Xe<v?m(Xe/v):1,ln=g-Xe<w?h((g-Xe)/w):1;W=Math.max(.01,W*Math.min(ut,ln));let k=(Q<e.length-1?e[Q+1]:e[Q]).vector,ee=Q<e.length-1?Bl(Me,k):1,Y=Bl(Me,z)<0&&!J,te=ee!==null&&ee<0;if(Y||te){let $e=Bt(Cs(z),W);for(let ge=1/13,me=0;me<=1;me+=ge)ie=Ts(wt(ye,$e),ye,Fs*me),P.push(ie),de=Ts(kt(ye,$e),ye,Fs*-me),N.push(de);H=ie,ne=de,te&&(J=!0);continue}if(J=!1,Q===e.length-1){let $e=Bt(Cs(Me),W);P.push(wt(ye,$e)),N.push(kt(ye,$e));continue}let ve=Bt(Cs(oa(k,Me,ee)),W);ie=wt(ye,ve),(Q<=1||kl(H,ie)>E)&&(P.push(ie),H=ie),de=kt(ye,ve),(Q<=1||kl(ne,de)>E)&&(N.push(de),ne=de),F=pe,z=Me}let we=e[0].point.slice(0,2),Ie=e.length>1?e[e.length-1].point.slice(0,2):kt(e[0].point,[1,1]),Be=[],Le=[];if(e.length===1){if(!(v||w)||u){let Q=El(we,Uu(Cs(wt(we,Ie))),-(G||W)),pe=[];for(let ye=1/13,Me=ye;Me<=1;Me+=ye)pe.push(Ts(Q,we,Fs*2*Me));return pe}}else{if(!(v||w&&e.length===1))if(p)for(let pe=1/13,ye=pe;ye<=1;ye+=pe){let Me=Ts(N[0],we,Fs*ye);Be.push(Me)}else{let pe=wt(P[0],N[0]),ye=Bt(pe,.5),Me=Bt(pe,.51);Be.push(wt(we,ye),wt(we,Me),kt(we,Me),kt(we,ye))}let Q=Cs(V_(e[e.length-1].vector));if(w||v&&e.length===1)Le.push(Ie);else if(d){let pe=El(Ie,Q,W);for(let ye=1/29,Me=ye;Me<1;Me+=ye)Le.push(Ts(pe,Ie,Fs*3*Me))}else Le.push(kt(Ie,Bt(Q,W)),kt(Ie,Bt(Q,W*.99)),wt(Ie,Bt(Q,W*.99)),wt(Ie,Bt(Q,W)))}return P.concat(Le,N.reverse(),Be)}function Q_(e,t={}){var n;let{streamline:s=.5,size:r=16,last:a=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:g,pressure:v=.5})=>[h,g,v]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(oa(l[0],h,g/4))}l.length===1&&(l=[...l,[...kt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,m=c[0],d=l.length-1;for(let h=1;h<l.length;h++){let g=a&&h===d?l[h].slice(0,2):oa(m.point,l[h],i);if(K_(m.point,g))continue;let v=Y_(g,m.point);if(p+=v,h<d&&!u){if(p<r)continue;u=!0}m={point:g,pressure:l[h][2]>=0?l[h][2]:.5,vector:Uu(wt(m.point,g)),distance:v,runningLength:p},c.push(m)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function X_(e,t={}){return J_(Q_(e,t),t)}var e1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function jr(e,t){return e-t}function t1(e){return e<0?-1:1}function Vr(e){return[Math.abs(e),t1(e)]}function Du(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var n1=2,en=n1,$s=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const a=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*s,y:a.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(en))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},s1=class extends $s{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=X_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,a],i,l)=>{const[c,u]=l[(i+1)%l.length];return s.push(r,a,(r+c)/2,(a+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},r1=class extends $s{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vr(e.x-this.start.x),[s,r]=Vr(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,s);t=a,s=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,c]=[this.start.y,this.start.y+s*r].sort(jr);this.attr("cx",(a+i)/2),this.attr("cy",(l+c)/2),this.attr("rx",(i-a)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Hu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var o1=class extends $s{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Du(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Hu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let a=s/r;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+r*a,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},a1=class extends $s{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vr(e.x-this.start.x),[s,r]=Vr(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,s);t=a,s=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,c]=[this.start.y,this.start.y+s*r].sort(jr);this.attr("x",a),this.attr("y",l),this.attr("width",i-a),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function i1(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function l1(e,t,n){let s=t.x,r=t.y,a=n.x-s,i=n.y-r;if(a!==0||i!==0){const l=((e.x-s)*a+(e.y-r)*i)/(a*a+i*i);l>1?(s=n.x,r=n.y):l>0&&(s+=a*l,r+=i*l)}return a=e.x-s,i=e.y-r,a*a+i*i}function c1(e,t){let n=e[0];const s=[n];let r;for(let a=1,i=e.length;a<i;a++)r=e[a],i1(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function aa(e,t,n,s,r){let a=s,i=0;for(let l=t+1;l<n;l++){const c=l1(e[l],e[t],e[n]);c>a&&(i=l,a=c)}a>s&&(i-t>1&&aa(e,t,i,s,r),r.push(e[i]),n-i>1&&aa(e,i,n,s,r))}function u1(e,t){const n=e.length-1,s=[e[0]];return aa(e,0,n,t,s),s.push(e[n]),s}function Cl(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:c1(e,s),e=u1(e,s),e}var p1=class extends $s{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Du();const t=Hu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Cl(this.points,1,!0),this.count=0),this.attr("d",Fl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fl(Cl(this.points,1,!0))),!e.getTotalLength()))}};function m1(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Tl(e,t,n,s){const r=t||e,a=n||e,i=.2,l=m1(r,a),c=l.angle+(s?Math.PI:0),u=l.length*i,p=e.x+Math.cos(c)*u,m=e.y+Math.sin(c)*u;return{x:p,y:m}}function d1(e,t,n){const s=Tl(n[t-1],n[t-2],e),r=Tl(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(en)},${s.y.toFixed(en)} ${r.x.toFixed(en)},${r.y.toFixed(en)} ${e.x.toFixed(en)},${e.y.toFixed(en)}`}function Fl(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(en)},${n.y.toFixed(en)}`:`${t} ${d1(n,s,r)}`,"")}var f1=class extends $s{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const a=n[r];if(a.getTotalLength){const i=a.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=a.getPointAtLength(i*l/this.pathSubFactor),u=a.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:s||a})}}else a.children&&t(a.children,a)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,a=t.x2,i=e.y1,l=e.y2,c=t.y1,u=t.y2,p=(n-s)*(c-u)-(i-l)*(r-a),m=(n*l-i*s)*(r-a)-(n-s)*(r*u-c*a),d=(n*l-i*s)*(c-u)-(i-l)*(r*u-c*a),h=(g,v,w)=>g>=v&&g<=w?!0:g>=w&&g<=v;if(p===0)return!1;{const g={x:m/p,y:d/p};return h(g.x,n,s)&&h(g.y,i,l)&&h(g.x,r,a)&&h(g.y,c,u)}}};function h1(e){return{draw:new p1(e),stylus:new s1(e),line:new o1(e),rectangle:new a1(e),ellipse:new r1(e),eraseLine:new f1(e)}}var g1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=e1(),this._models=h1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function _1(e){return new g1(e)}const ia=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ht=At("slidev-drawing-enabled",!1),bS=At("slidev-drawing-pinned",!1),y1=le(!1),v1=le(!1),x1=le(!1),sr=le(!1),Ln=Yf(At("slidev-drawing-brush",{color:ia[0],size:4,mode:"stylus"})),Ml=le("stylus"),ju=A(()=>Te.drawings.syncAll||Nt.value);let rr=!1;const Ms=A({get(){return Ml.value},set(e){Ml.value=e,e==="arrow"?(Ln.mode="line",Ln.arrowEnd=!0):(Ln.mode=e,Ln.arrowEnd=!1)}}),w1=Qe({brush:Ln,acceptsInputTypes:A(()=>Ht.value&&(!Te.drawings.presenterOnly||Nt.value)?void 0:["pen"]),coordinateTransform:!1}),ct=va(_1(w1));function b1(){ct.clear(),ju.value&&uu(Ge.value,"")}function Ha(){var e;v1.value=ct.canRedo(),y1.value=ct.canUndo(),x1.value=!!((e=ct.el)!=null&&e.children.length)}function $1(e){rr=!0;const t=Dr[e||Ge.value];t!=null?ct.load(t):ct.clear(),Ha(),rr=!1}ct.on("changed",()=>{if(Ha(),!rr){const e=ct.dump(),t=Ge.value;(Dr[t]||"")!==e&&ju.value&&uu(t,ct.dump())}});qf(e=>{rr=!0,e[Ge.value]!=null&&ct.load(e[Ge.value]||""),rr=!1,Ha()});Tt(()=>{Ue(Ge,()=>{ct.mounted&&$1()},{immediate:!0})});ct.on("start",()=>sr.value=!0);ct.on("end",()=>sr.value=!1);window.addEventListener("keydown",e=>{if(!Ht.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ct.redo():ct.undo():e.code==="Escape"?Ht.value=!1:e.code==="KeyL"&&t?Ms.value="line":e.code==="KeyA"&&t?Ms.value="arrow":e.code==="KeyS"&&t?Ms.value="stylus":e.code==="KeyR"&&t?Ms.value="rectangle":e.code==="KeyE"&&t?Ms.value="ellipse":e.code==="KeyC"&&t?b1():e.code.startsWith("Digit")&&t&&+e.code[5]<=ia.length?Ln.color=ia[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ke(...e){return A(()=>e.every(t=>lt(t)))}function ft(e){return A(()=>!lt(e))}const Ol=Rh(),Eo=At("slidev-color-schema","auto"),la=A(()=>Te.colorSchema!=="auto"),ja=A({get(){return la.value?Te.colorSchema==="dark":Eo.value==="auto"?Ol.value:Eo.value==="dark"},set(e){la.value||(Eo.value=e===Ol.value?"auto":e?"dark":"light")}}),Vu=fu(ja);Mt&&Ue(ja,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Nr=le(1),Cr=A(()=>ze.length-1),_t=le(0),Va=le(0);function P1(){_t.value>Nr.value&&(_t.value-=1)}function S1(){_t.value<Cr.value&&(_t.value+=1)}function B1(){if(_t.value>Nr.value){let e=_t.value-Va.value;e<Nr.value&&(e=Nr.value),_t.value=e}}function k1(){if(_t.value<Cr.value){let e=_t.value+Va.value;e>Cr.value&&(e=Cr.value),_t.value=e}}function E1(){const{escape:e,space:t,shift:n,left:s,right:r,up:a,down:i,enter:l,d:c,g:u,o:p}=Lu;let m=[{name:"next_space",key:Ke(t,ft(n)),fn:zn,autoRepeat:!0},{name:"prev_space",key:Ke(t,n),fn:Kn,autoRepeat:!0},{name:"next_right",key:Ke(r,ft(n),ft(ot)),fn:zn,autoRepeat:!0},{name:"prev_left",key:Ke(s,ft(n),ft(ot)),fn:Kn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:zn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Kn,autoRepeat:!0},{name:"next_down",key:Ke(i,ft(ot)),fn:Kr,autoRepeat:!0},{name:"prev_up",key:Ke(a,ft(ot)),fn:()=>Wr(!1),autoRepeat:!0},{name:"next_shift",key:Ke(r,n),fn:Kr,autoRepeat:!0},{name:"prev_shift",key:Ke(s,n),fn:()=>Wr(!1),autoRepeat:!0},{name:"toggle_dark",key:Ke(c,ft(Ht)),fn:Vu},{name:"toggle_overview",key:Ke(p,ft(Ht)),fn:qu},{name:"hide_overview",key:Ke(e,ft(Ht)),fn:()=>ot.value=!1},{name:"goto",key:Ke(u,ft(Ht)),fn:()=>ps.value=!ps.value},{name:"next_overview",key:Ke(r,ot),fn:S1},{name:"prev_overview",key:Ke(s,ot),fn:P1},{name:"up_overview",key:Ke(a,ot),fn:B1},{name:"down_overview",key:Ke(i,ot),fn:k1},{name:"goto_from_overview",key:Ke(l,ot),fn:()=>{ws(_t.value),ot.value=!1}}];const d=new Set(m.map(g=>g.name));if(m.filter(g=>g.name&&d.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return m}const zu=Ke(ft(H_),ft(j_),U_);function N1(e,t,n=!1){typeof e=="string"&&(e=Lu[e]);const s=Ke(e,zu);let r=0,a;const i=()=>{if(clearTimeout(a),!s.value){r=0;return}n&&(a=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return Ue(s,i,{flush:"sync"})}function C1(e,t){return xh(e,n=>{zu.value&&(n.repeat||t())})}function T1(){const e=E1();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&N1(n.key,n.fn,n.autoRepeat)}),C1("f",()=>Ru.toggle())}const F1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M1=o("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),O1=[M1];function A1(e,t){return y(),X("svg",F1,O1)}const I1={name:"carbon-close",render:A1};function za(e,t=""){var r,a;const n=["slidev-page",t],s=(a=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:a.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const L1=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;S(C);const n=le(),s=Jh(n),r=A(()=>t.width?t.width:s.width.value),a=A(()=>t.width?t.width/wn:s.height.value);t.width&&bs(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${a.value}px`)});const i=A(()=>r.value/a.value),l=A(()=>t.scale&&!xs.value?t.scale:i.value<wn?r.value/bn:a.value*wn/bn),c=A(()=>({height:`${La}px`,width:`${bn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=A(()=>({"select-none":!Te.selectable,"slidev-code-line-numbers":Te.lineNumbers}));return gt(lu,l),(p,m)=>(y(),X("div",{id:"slide-container",ref_key:"root",ref:n,class:je(b(u))},[o("div",{id:"slide-content",style:tt(b(c))},[zt(p.$slots,"default")],4),zt(p.$slots,"controls")],2))}});const T=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Ku=T(L1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ka=ke({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Dt(e,"clicks",t),s=Dt(e,"clicksElements",t),r=Dt(e,"clicksDisabled",t),a=Dt(e,"clicksOrderMap",t);s.value.length=0,gt(Ef,e.route),gt(Nf,e.context),gt(ou,n),gt(iu,r),gt(au,s),gt(kf,a)},render(){var e,t;return this.$props.is?co(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),R1=["innerHTML"],q1=ke({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return S(C),(t,n)=>b(Dr)[e.page]?(y(),X("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Dr)[e.page]},null,8,R1)):re("v-if",!0)}}),Wu=T(q1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),U1=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"})),D1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},H1=["onClick"],j1=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t);function r(){s.value=!1}function a(h){ws(h),r()}function i(h){return h===_t.value}const l=ra.smaller("xs"),c=ra.smaller("sm"),u=4*16*2,p=2*16,m=A(()=>l.value?Vn.width.value-u:c.value?(Vn.width.value-u-p)/2:300),d=A(()=>Math.floor((Vn.width.value-u)/(m.value+p)));return bs(()=>{_t.value=Ge.value,Va.value=d.value}),(h,g)=>{const v=I1;return y(),X(Ne,null,[Ta(o("div",D1,[o("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${b(m)}px,1fr))`)},[(y(!0),X(Ne,null,pr(b(ze).slice(0,-1),(w,E)=>(y(),X("div",{key:w.path,class:"relative"},[o("div",{class:je(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(E+1),"border-gray-400":!i(E+1)}]),style:tt(b(Ra)),onClick:P=>a(+w.path)},[(y(),B(Ku,{key:w.path,width:b(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[ae(b(Ka),{is:w==null?void 0:w.component,"clicks-disabled":!0,class:je(b(za)(w)),route:w,context:"overview"},null,8,["is","class","route"]),ae(Wu,{page:+w.path},null,8,["page"])]),_:2},1032,["width"]))],14,H1),o("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${b(m)+5}px`)},sn(E+1),5)]))),128))],4)],512),[[ru,b(s)]]),b(s)?(y(),X("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[ae(v)])):re("v-if",!0)],64)}}});const V1=T(j1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),z1="/math201/slides/numpy/assets/logo-b72bde5d.png",K1={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},W1=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t);function r(){s.value=!1}return(a,i)=>(y(),B(Tc,null,[b(s)?(y(),X("div",K1,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>r())}),o("div",{class:je(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[zt(a.$slots,"default")],2)])):re("v-if",!0)],1024))}}),G1=T(W1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Modal.vue"]]),Y1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Z1=["innerHTML"],J1=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:z1,alt:"Slidev"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),x("dev ")])])],-1),Q1=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t),r=A(()=>typeof Te.info=="string");return(a,i)=>(y(),B(G1,{modelValue:b(s),"onUpdate:modelValue":i[0]||(i[0]=l=>Se(s)?s.value=l:null),class:"px-6 py-4"},{default:M(()=>[o("div",Y1,[b(r)?(y(),X("div",{key:0,class:"mb-4",innerHTML:b(Te).info},null,8,Z1)):re("v-if",!0),J1])]),_:1},8,["modelValue"]))}});const X1=T(Q1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ey=["disabled","onKeydown"],ty=ke({__name:"Goto",setup(e){S(C);const t=le(),n=le(""),s=A(()=>{if(n.value.startsWith("/"))return!!ze.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=ap.value}});function r(){s.value&&(n.value.startsWith("/")?ws(n.value.substring(1)):ws(+n.value)),a()}function a(){ps.value=!1}return Ue(ps,async i=>{var l,c;i?(await Tt(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),Ue(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,l)=>(y(),X("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(ps)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ta(o("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(ps),class:je(["outline-none bg-transparent",{"text-red-400":!b(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Ui(r,["enter"]),Ui(a,["escape"])],onBlur:a},null,42,ey),[[vf,n.value]])],2))}}),ny=T(ty,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Goto.vue"]]),sy=ke({__name:"Controls",setup(e){S(C);const t=Vt(),n=Vt();return(s,r)=>(y(),X(Ne,null,[ae(V1,{modelValue:b(ot),"onUpdate:modelValue":r[0]||(r[0]=a=>Se(ot)?ot.value=a:null)},null,8,["modelValue"]),ae(ny),b(t)?(y(),B(b(t),{key:0})):re("v-if",!0),b(n)?(y(),B(b(n),{key:1,modelValue:b(Bo),"onUpdate:modelValue":r[1]||(r[1]=a=>Se(Bo)?Bo.value=a:null)},null,8,["modelValue"])):re("v-if",!0),b(Te).info?(y(),B(X1,{key:2,modelValue:b(zs),"onUpdate:modelValue":r[2]||(r[2]=a=>Se(zs)?zs.value=a:null)},null,8,["modelValue"])):re("v-if",!0)],64))}}),ry=T(sy,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Controls.vue"]]),oy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ay=o("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),iy=[ay];function ly(e,t){return y(),X("svg",oy,iy)}const cy={name:"carbon-settings-adjust",render:ly},uy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},py=o("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),my=o("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),dy=[py,my];function fy(e,t){return y(),X("svg",uy,dy)}const hy={name:"carbon-information",render:fy},gy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_y=o("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yy=[_y];function vy(e,t){return y(),X("svg",gy,yy)}const xy={name:"carbon-download",render:vy},wy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},by=o("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),$y=o("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Py=[by,$y];function Sy(e,t){return y(),X("svg",wy,Py)}const By={name:"carbon-user-speaker",render:Sy},ky={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ey=o("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ny=o("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Cy=[Ey,Ny];function Ty(e,t){return y(),X("svg",ky,Cy)}const Fy={name:"carbon-presentation-file",render:Ty},My={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Oy=o("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ay=[Oy];function Iy(e,t){return y(),X("svg",My,Ay)}const Ly={name:"carbon-pen",render:Iy},Ry={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qy=o("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Uy=o("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Dy=[qy,Uy];function Hy(e,t){return y(),X("svg",Ry,Dy)}const jy={name:"ph-cursor-duotone",render:Hy},Vy={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},zy=o("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Ky=[zy];function Wy(e,t){return y(),X("svg",Vy,Ky)}const Gu={name:"ph-cursor-fill",render:Wy},Gy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yy=o("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Zy=[Yy];function Jy(e,t){return y(),X("svg",Gy,Zy)}const Qy={name:"carbon-sun",render:Jy},Xy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e0=o("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),t0=[e0];function n0(e,t){return y(),X("svg",Xy,t0)}const s0={name:"carbon-moon",render:n0},r0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o0=o("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),a0=[o0];function i0(e,t){return y(),X("svg",r0,a0)}const l0={name:"carbon-apps",render:i0},c0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=o("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),p0=[u0];function m0(e,t){return y(),X("svg",c0,p0)}const d0={name:"carbon-arrow-right",render:m0},f0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=o("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g0=[h0];function _0(e,t){return y(),X("svg",f0,g0)}const y0={name:"carbon-arrow-left",render:_0},v0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x0=o("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w0=[x0];function b0(e,t){return y(),X("svg",v0,w0)}const $0={name:"carbon-maximize",render:b0},P0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=o("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),B0=[S0];function k0(e,t){return y(),X("svg",P0,B0)}const E0={name:"carbon-minimize",render:k0},N0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C0=o("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),T0=[C0];function F0(e,t){return y(),X("svg",N0,T0)}const M0={name:"carbon-checkmark",render:F0},O0={class:"select-list"},A0={class:"title"},I0={class:"items"},L0=["onClick"],R0=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t,{passive:!0});return(r,a)=>{const i=M0;return y(),X("div",O0,[o("div",A0,sn(e.title),1),o("div",I0,[(y(!0),X(Ne,null,pr(e.items,l=>(y(),X("div",{key:l.value,class:je(["item",{active:b(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[ae(i,{class:je(["text-green-500",{"opacity-0":b(s)!==l.value}])},null,8,["class"]),x(" "+sn(l.display||l.value),1)],10,L0))),128))])])}}});const q0=T(R0,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SelectList.vue"]]),U0={class:"text-sm"},D0=ke({__name:"Settings",setup(e){S(C);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(y(),X("div",U0,[ae(q0,{modelValue:b(Er),"onUpdate:modelValue":s[0]||(s[0]=r=>Se(Er)?Er.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),H0=T(D0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Settings.vue"]]),j0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},V0=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t,{passive:!0}),r=le();return yh(r,()=>{s.value=!1}),(a,i)=>(y(),X("div",{ref_key:"el",ref:r,class:"flex relative"},[o("button",{class:je({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>s.value=!b(s))},[zt(a.$slots,"button",{class:je({disabled:e.disabled})})],2),(y(),B(Tc,null,[b(s)?(y(),X("div",j0,[zt(a.$slots,"menu")])):re("v-if",!0)],1024))],512))}}),z0=T(V0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/MenuButton.vue"]]),K0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},W0={__name:"VerticalDivider",setup(e){return S(C),(t,n)=>(y(),X("div",K0))}},br=T(W0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),G0={render(){return[]}},Y0={class:"slidev-icon-btn"},Z0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},J0={class:"my-auto"},Q0={class:"opacity-50"},X0=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;S(C);const n=ra.smaller("md"),{isFullscreen:s,toggle:r}=Ru,a=A(()=>ua.value?`?password=${ua.value}`:""),i=A(()=>`/presenter/${Ge.value}${a.value}`),l=A(()=>`/${Ge.value}${a.value}`),c=le(),u=()=>{c.value&&gs.value&&c.value.contains(gs.value)&&gs.value.blur()},p=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=Vt(),d=Vt();return $n(()=>import("./DrawingControls-073b4955.js"),[]).then(h=>d.value=h.default),(h,g)=>{const v=E0,w=$0,E=y0,P=d0,N=l0,F=s0,W=Qy,G=Gu,z=jy,H=Ly,ne=Fy,ie=oo("RouterLink"),de=By,J=xy,we=hy,Ie=cy;return y(),X("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[o("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(p)]),onMouseleave:u},[b(Qt)?re("v-if",!0):(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...Be)=>b(r)&&b(r)(...Be))},[b(s)?(y(),B(v,{key:0})):(y(),B(w,{key:1}))])),o("button",{class:je(["slidev-icon-btn",{disabled:!b(jP)}]),onClick:g[1]||(g[1]=(...Be)=>b(Kn)&&b(Kn)(...Be))},[ae(E)],2),o("button",{class:je(["slidev-icon-btn",{disabled:!b(HP)}]),title:"Next",onClick:g[2]||(g[2]=(...Be)=>b(zn)&&b(zn)(...Be))},[ae(P)],2),b(Qt)?re("v-if",!0):(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Be=>b(qu)())},[ae(N)])),b(la)?re("v-if",!0):(y(),X("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Be=>b(Vu)())},[b(ja)?(y(),B(F,{key:0})):(y(),B(W,{key:1}))])),ae(br),b(Qt)?re("v-if",!0):(y(),X(Ne,{key:3},[!b(Nt)&&!b(n)&&b(m)?(y(),X(Ne,{key:0},[ae(b(m)),ae(br)],64)):re("v-if",!0),b(Nt)?(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Be=>ko.value=!b(ko))},[b(ko)?(y(),B(G,{key:0})):(y(),B(z,{key:1,class:"opacity-50"}))])):re("v-if",!0)],64)),(!b(Te).drawings.presenterOnly||b(Nt))&&!b(Qt)?(y(),X(Ne,{key:4},[o("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Be=>Ht.value=!b(Ht))},[ae(H),b(Ht)?(y(),X("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:b(Ln).color})},null,4)):re("v-if",!0)]),ae(br)],64)):re("v-if",!0),b(Qt)?re("v-if",!0):(y(),X(Ne,{key:5},[b(Nt)?(y(),B(ie,{key:0,to:b(l),class:"slidev-icon-btn",title:"Play Mode"},{default:M(()=>[ae(ne)]),_:1},8,["to"])):re("v-if",!0),b(RP)?(y(),B(ie,{key:1,to:b(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:M(()=>[ae(de)]),_:1},8,["to"])):re("v-if",!0),re("v-if",!0)],64)),(y(),X(Ne,{key:6},[b(Te).download?(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...Be)=>b(Hl)&&b(Hl)(...Be))},[ae(J)])):re("v-if",!0)],64)),!b(Nt)&&b(Te).info&&!b(Qt)?(y(),X("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=Be=>zs.value=!b(zs))},[ae(we)])):re("v-if",!0),!b(Nt)&&!b(Qt)?(y(),B(z0,{key:8},{button:M(()=>[o("button",Y0,[ae(Ie)])]),menu:M(()=>[ae(H0)]),_:1})):re("v-if",!0),b(Qt)?re("v-if",!0):(y(),B(br,{key:9})),o("div",Z0,[o("div",J0,[x(sn(b(Ge))+" ",1),o("span",Q0,"/ "+sn(b(ap)),1)])]),ae(b(G0))],34)],512)}}}),ev=T(X0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/NavControls.vue"]]),Yu={render(){return[]}},Zu={render(){return[]}},tv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},nv=ke({__name:"PresenterMouse",setup(e){return S(C),(t,n)=>{const s=Gu;return b(bo).cursor?(y(),X("div",tv,[ae(s,{class:"absolute",style:tt({left:`${b(bo).cursor.x}%`,top:`${b(bo).cursor.y}%`})},null,8,["style"])])):re("v-if",!0)}}}),sv=T(nv,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),rv=ke({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){S(C),Ue(at,()=>{var s,r;(s=at.value)!=null&&s.meta&&at.value.meta.preload!==!1&&(at.value.meta.__preloaded=!0),(r=No.value)!=null&&r.meta&&No.value.meta.preload!==!1&&(No.value.meta.__preloaded=!0)},{immediate:!0});const t=Vt();$n(()=>import("./DrawingLayer-c0e76e5b.js"),[]).then(s=>t.value=s.default);const n=A(()=>ze.filter(s=>{var r;return((r=s.meta)==null?void 0:r.__preloaded)||s===at.value}));return(s,r)=>(y(),X(Ne,null,[re(" Global Bottom "),ae(b(Zu)),re(" Slides "),ae(df,Ia(b(KP),{id:"slideshow",tag:"div"}),{default:M(()=>[(y(!0),X(Ne,null,pr(b(n),a=>{var i;return Ta((y(),B(b(Ka),{key:a.path,is:a==null?void 0:a.component,clicks:a===b(at)?b(Zn):0,"clicks-elements":((i=a.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:je(b(za)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ru,a===b(at)]])}),128))]),_:1},16),re(" Global Top "),ae(b(Yu)),b(t)?(y(),B(b(t),{key:0})):re("v-if",!0),b(Nt)?re("v-if",!0):(y(),B(sv,{key:1}))],64))}});const ov=T(rv,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlidesShow.vue"]]),av=ke({__name:"PrintStyle",setup(e){S(C);function t(n,{slots:s}){if(s.default)return co("style",s.default())}return(n,s)=>(y(),B(t,null,{default:M(()=>[x(" @page { size: "+sn(b(bn))+"px "+sn(b(La))+"px; margin: 0px; } ",1)]),_:1}))}}),Ju=T(av,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintStyle.vue"]]),iv=ke({__name:"Play",setup(e){S(C),T1();const t=le();function n(a){var i;Pl.value||((i=a.target)==null?void 0:i.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?zn():Kn())}WP(t);const s=A(()=>D_.value||Pl.value);Vt();const r=Vt();return $n(()=>import("./DrawingControls-073b4955.js"),[]).then(a=>r.value=a.default),(a,i)=>(y(),X(Ne,null,[b(xs)?(y(),B(Ju,{key:0})):re("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tt(b(Ra))},[ae(Ku,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:b(xs)?b(Vn).width.value:void 0,scale:b(Er),onPointerdown:n},{default:M(()=>[ae(ov,{context:"slide"})]),controls:M(()=>[o("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(s)?"opacity-100 right-0":"opacity-0 p-2",b(sr)?"pointer-events-none":""]])},[ae(ev,{class:"m-auto",persist:b(s)},null,8,["persist"])],2),!b(Te).drawings.presenterOnly&&!b(Qt)&&b(r)?(y(),B(b(r),{key:0,class:"ml-0"})):re("v-if",!0)]),_:1},8,["style","width","scale"]),re("v-if",!0)],4),ae(ry)],64))}}),lv=T(iv,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Qu(e){return typeof e>"u"||e===null}function cv(e){return typeof e=="object"&&e!==null}function uv(e){return Array.isArray(e)?e:Qu(e)?[]:[e]}function pv(e,t){var n,s,r,a;if(t)for(a=Object.keys(t),n=0,s=a.length;n<s;n+=1)r=a[n],e[r]=t[r];return e}function mv(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function dv(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var fv=Qu,hv=cv,gv=uv,_v=mv,yv=dv,vv=pv,Wa={isNothing:fv,isObject:hv,toArray:gv,repeat:_v,isNegativeZero:yv,extend:vv};function Xu(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function or(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}or.prototype=Object.create(Error.prototype);or.prototype.constructor=or;or.prototype.toString=function(t){return this.name+": "+Xu(this,t)};var An=or,xv=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],wv=["scalar","sequence","mapping"];function bv(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function $v(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(xv.indexOf(n)===-1)throw new An('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=bv(t.styleAliases||null),wv.indexOf(this.kind)===-1)throw new An('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var nt=$v;function Al(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(a,i){a.tag===s.tag&&a.kind===s.kind&&a.multi===s.multi&&(r=i)}),n[r]=s}),n}function Pv(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function ca(e){return this.extend(e)}ca.prototype.extend=function(t){var n=[],s=[];if(t instanceof nt)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new An("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(a){if(!(a instanceof nt))throw new An("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new An("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new An("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(a){if(!(a instanceof nt))throw new An("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(ca.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Al(r,"implicit"),r.compiledExplicit=Al(r,"explicit"),r.compiledTypeMap=Pv(r.compiledImplicit,r.compiledExplicit),r};var Sv=ca,Bv=new nt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),kv=new nt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Ev=new nt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Nv=new Sv({explicit:[Bv,kv,Ev]});function Cv(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Tv(){return null}function Fv(e){return e===null}var Mv=new nt("tag:yaml.org,2002:null",{kind:"scalar",resolve:Cv,construct:Tv,predicate:Fv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ov(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Av(e){return e==="true"||e==="True"||e==="TRUE"}function Iv(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Lv=new nt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ov,construct:Av,predicate:Iv,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Rv(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function qv(e){return 48<=e&&e<=55}function Uv(e){return 48<=e&&e<=57}function Dv(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Rv(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!qv(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!Uv(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function Hv(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function jv(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Wa.isNegativeZero(e)}var Vv=new nt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Dv,construct:Hv,predicate:jv,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),zv=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Kv(e){return!(e===null||!zv.test(e)||e[e.length-1]==="_")}function Wv(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Gv=/^[-+]?[0-9]+e/;function Yv(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Wa.isNegativeZero(e))return"-0.0";return n=e.toString(10),Gv.test(n)?n.replace("e",".e"):n}function Zv(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Wa.isNegativeZero(e))}var Jv=new nt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Kv,construct:Wv,predicate:Zv,represent:Yv,defaultStyle:"lowercase"}),Qv=Nv.extend({implicit:[Mv,Lv,Vv,Jv]}),Xv=Qv,ep=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),tp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function e2(e){return e===null?!1:ep.exec(e)!==null||tp.exec(e)!==null}function t2(e){var t,n,s,r,a,i,l,c=0,u=null,p,m,d;if(t=ep.exec(e),t===null&&(t=tp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(a=+t[4],i=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],m=+(t[11]||0),u=(p*60+m)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,s,r,a,i,l,c)),u&&d.setTime(d.getTime()-u),d}function n2(e){return e.toISOString()}var s2=new nt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:e2,construct:t2,instanceOf:Date,represent:n2});function r2(e){return e==="<<"||e===null}var o2=new nt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:r2}),Ga=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a2(e){if(e===null)return!1;var t,n,s=0,r=e.length,a=Ga;for(n=0;n<r;n++)if(t=a.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function i2(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,a=Ga,i=0,l=[];for(t=0;t<r;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|a.indexOf(s.charAt(t));return n=r%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function l2(e){var t="",n=0,s,r,a=e.length,i=Ga;for(s=0;s<a;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=a%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function c2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var u2=new nt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a2,construct:i2,predicate:c2,represent:l2}),p2=Object.prototype.hasOwnProperty,m2=Object.prototype.toString;function d2(e){if(e===null)return!0;var t=[],n,s,r,a,i,l=e;for(n=0,s=l.length;n<s;n+=1){if(r=l[n],i=!1,m2.call(r)!=="[object Object]")return!1;for(a in r)if(p2.call(r,a))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(a)===-1)t.push(a);else return!1}return!0}function f2(e){return e!==null?e:[]}var h2=new nt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:d2,construct:f2}),g2=Object.prototype.toString;function _2(e){if(e===null)return!0;var t,n,s,r,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],g2.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;a[t]=[r[0],s[r[0]]]}return!0}function y2(e){if(e===null)return[];var t,n,s,r,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),a[t]=[r[0],s[r[0]]];return a}var v2=new nt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:_2,construct:y2}),x2=Object.prototype.hasOwnProperty;function w2(e){if(e===null)return!0;var t,n=e;for(t in n)if(x2.call(n,t)&&n[t]!==null)return!1;return!0}function b2(e){return e!==null?e:{}}var $2=new nt("tag:yaml.org,2002:set",{kind:"mapping",resolve:w2,construct:b2});Xv.extend({implicit:[s2,o2],explicit:[u2,h2,v2,$2]});function Il(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var P2=new Array(256),S2=new Array(256);for(var as=0;as<256;as++)P2[as]=Il(as)?1:0,S2[as]=Il(as);function B2(e){return Array.from(new Set(e))}function Ll(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let a=t;for(;a<n;)r.push(a),a+=s||1;return r}function np(e,t){if(!t||t==="all"||t==="*")return Ll(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,a]=s.split("-",2);n.push(...Ll(+r,a?+a+1:e+1))}return B2(n).filter(s=>s<=e).sort((s,r)=>s-r)}function k2(e){const t=A(()=>e.value.path),n=A(()=>ze.length-1),s=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=A(()=>Ya(s.value)),a=A(()=>ze.find(d=>d.path===`${s.value}`)),i=A(()=>{var d,h,g;return(g=(h=(d=a.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:g.id}),l=A(()=>{var d,h;return((h=(d=a.value)==null?void 0:d.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=A(()=>ze.find(d=>d.path===`${Math.min(ze.length,s.value+1)}`)),u=A(()=>ze.filter(d=>{var h,g;return(g=(h=d.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((d,h)=>(Za(d,h),d),[])),p=A(()=>Ja(u.value,a.value)),m=A(()=>Qa(p.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:a,currentSlideId:i,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:m}}function E2(e,t,n){const s=le(0);Tt(()=>{Pn.afterEach(async()=>{await Tt(),s.value+=1})});const r=A(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),a=A(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=A(()=>n.value<ze.length-1||e.value<a.value),l=A(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:a,hasNext:i,hasPrev:l}}const N2=["id"],C2=ke({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Dt(n,"clicksElements",t),r=A(()=>({height:`${La}px`,width:`${bn}px`})),a=Vt();$n(()=>Promise.resolve().then(()=>U1),void 0).then(u=>a.value=u.default);const i=A(()=>n.clicks),l=E2(i,n.nav.currentRoute,n.nav.currentPage),c=A(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return gt(C,Qe({nav:{...n.nav,...l},configs:Te,themeConfigs:A(()=>Te.themeConfig)})),(u,p)=>{var m;return y(),X("div",{id:b(c),class:"print-slide-container",style:tt(b(r))},[ae(b(Zu)),ae(b(Ka),{is:(m=e.route)==null?void 0:m.component,"clicks-elements":b(s),"onUpdate:clicksElements":p[0]||(p[0]=d=>Se(s)?s.value=d:null),clicks:b(i),"clicks-disabled":!1,class:je(b(za)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(a)?(y(),B(b(a),{key:0,page:+e.route.path},null,8,["page"])):re("v-if",!0),ae(b(Yu))],12,N2)}}}),Rl=T(C2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),T2=ke({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var a;const t=e;S(C);const n=Qe(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),s=A(()=>t.route),r=k2(s);return(i,l)=>(y(),X(Ne,null,[ae(Rl,{"clicks-elements":n,"onUpdate:clicksElements":l[0]||(l[0]=c=>n=c),clicks:0,nav:b(r),route:b(s)},null,8,["clicks-elements","nav","route"]),b(op)?re("v-if",!0):(y(!0),X(Ne,{key:0},pr(n.length,c=>(y(),B(Rl,{key:c,clicks:c,nav:b(r),route:b(s)},null,8,["clicks","nav","route"]))),128))],64))}}),F2=T(T2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintSlide.vue"]]),M2={id:"print-content"},O2=ke({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;S(C);const n=A(()=>t.width),s=A(()=>t.width/wn),r=A(()=>n.value/s.value),a=A(()=>r.value<wn?n.value/bn:s.value*wn/bn);let i=ze.slice(0,-1);Ot.value.query.range&&(i=np(i.length,Ot.value.query.range).map(u=>i[u-1]));const l=A(()=>({"select-none":!Te.selectable,"slidev-code-line-numbers":Te.lineNumbers}));return gt(lu,a),(c,u)=>(y(),X("div",{id:"print-container",class:je(b(l))},[o("div",M2,[(y(!0),X(Ne,null,pr(b(i),p=>(y(),B(F2,{key:p.path,route:p},null,8,["route"]))),128))]),zt(c.$slots,"controls")],2))}});const A2=T(O2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintContainer.vue"]]),I2=ke({__name:"Print",setup(e){return S(C),bs(()=>{xs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(y(),X(Ne,null,[b(xs)?(y(),B(Ju,{key:0})):re("v-if",!0),o("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(b(Ra))},[ae(A2,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:b(Vn).width.value},null,8,["style","width"])],4)],64))}});const L2=T(I2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Print.vue"]]);const R2={class:"slidev-layout end"},q2={__name:"end",setup(e){return S(C),(t,n)=>(y(),X("div",R2," END "))}},U2=T(q2,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/layouts/end.vue"]]),D2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H2=o("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),j2=[H2];function V2(e,t){return y(),X("svg",D2,j2)}const z2={name:"carbon-logo-github",render:V2},K2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W2=o("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),G2=o("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1),Y2=[W2,G2];function Z2(e,t){return y(),X("svg",K2,Y2)}const J2={name:"carbon-application-web",render:Z2};function Q2(e){return e.startsWith("/")?"/math201/slides/numpy"+e.slice(1):e}const X2={key:0},ex=["src"],tx=ke({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(e){const t=e;S(C);const n=A(()=>Q2(t.logoHeader));return(s,r)=>e.logoHeader?(y(),X("header",X2,[o("img",{src:b(n),width:"60",height:"60",class:"object-contain"},null,8,ex)])):re("v-if",!0)}}),ql=T(tx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),nx={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},sx={key:0,class:"mb-0"},rx={key:1,class:"mb-0"},ox=ke({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(e){return S(C),(t,n)=>e.website||e.handle?(y(),X("footer",nx,[e.website?(y(),X("p",sx,sn(e.website),1)):re("v-if",!0),e.handle?(y(),X("p",rx,"@"+sn(e.handle),1)):re("v-if",!0)])):re("v-if",!0)}}),Ul=T(ox,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),ax={class:"bg-main slidev-layout"},ix={class:"my-auto"},lx=ke({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(e){return S(C),ke({LayoutHeader:ql,LayoutFooter:Ul}),(t,n)=>(y(),X("div",ax,[ae(ql,{logoHeader:e.logoHeader},null,8,["logoHeader"]),o("div",ix,[zt(t.$slots,"default")]),ae(Ul,{website:e.website,handle:e.handle},null,8,["website","handle"])]))}}),V=T(lx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),cx=ke({__name:"cover",setup(e){return S(C),ke({Default:V}),(t,n)=>(y(),B(V,{class:"cover"},{default:M(()=>[zt(t.$slots,"default")]),_:3}))}}),ux=T(cx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),px=o("h1",null,"NumPy 基础",-1),mx=o("h2",null,"上海电力大学",-1),dx=o("p",null,"数理学院数学系",-1),fx=o("h4",null,"邓化宇",-1),hx={class:"abs-br m-6 flex gap-2"},gx={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},_x={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},yx={__name:"1",setup(e){const t={theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss"};return S(C),(n,s)=>{const r=J2,a=z2;return y(),B(ux,U(q(t)),{default:M(()=>[px,mx,dx,fx,o("div",hx,[o("a",gx,[ae(r)]),o("a",_x,[ae(a)])])]),_:1},16)}}},vx=T(yx,[["__file","/@slidev/slides/1.md"]]),xx={class:"flex flex-col items-center justify-center text-center"},wx=ke({__name:"center",setup(e){return S(C),ke({Default:V}),(t,n)=>(y(),B(V,{class:"center"},{default:M(()=>[o("div",xx,[zt(t.$slots,"default")])]),_:3}))}}),ts=T(wx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),bx=o("h1",null,"1. 简介与安装",-1),$x=o("p",null,"NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。",-1),Px={__name:"2",setup(e){const t={layout:"center",srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[bx,$x]),_:1},16))}},Sx=T(Px,[["__file","/@slidev/slides/2.md"]]),Bx="/math201/slides/numpy/numpy-cheat-sheet.png",kx=o("h1",null,"1. NumPy 速查手册",-1),Ex=o("img",{src:Bx,class:"h-90 mx-auto"},null,-1),Nx={__name:"3",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[kx,Ex]),_:1},16))}},Cx=T(Nx,[["__file","/@slidev/slides/3.md"]]),Tx=o("h1",null,"2. 安装",-1),Fx=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"pip "),o("span",{style:{color:"#9DB1C5"}},"install"),o("span",{style:{color:"#B392F0"}}," "),o("span",{style:{color:"#9DB1C5"}},"numpy")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"pip "),o("span",{style:{color:"#2B5581"}},"install"),o("span",{style:{color:"#24292EFF"}}," "),o("span",{style:{color:"#2B5581"}},"numpy")])])])],-1),Mx=o("h1",null,"3. 使用",-1),Ox=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"import"),o("span",{style:{color:"#B392F0"}}," numpy "),o("span",{style:{color:"#F97583"}},"as"),o("span",{style:{color:"#B392F0"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"a "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"array"),o("span",{style:{color:"#BBBBBB"}},"(["),o("span",{style:{color:"#F8F8F8"}},"1"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"2"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},"])")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(a)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#D32F2F"}},"import"),o("span",{style:{color:"#24292EFF"}}," numpy "),o("span",{style:{color:"#D32F2F"}},"as"),o("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"a "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"array"),o("span",{style:{color:"#212121"}},"(["),o("span",{style:{color:"#1976D2"}},"1"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"2"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},"])")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(a)")])])])],-1),Ax=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"[1 2 3]")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"[1 2 3]")])])])],-1),Ix={__name:"4",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Tx,Fx,Mx,Ox,Ax]),_:1},16))}},Lx=T(Ix,[["__file","/@slidev/slides/4.md"]]),Rx=o("h1",null,"4. NumPy数组 vs Python 列表",-1),qx=o("p",null,"乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。",-1),Ux=o("p",null,"当然相比python列表，numpy数组可以直接进行算术运算：",-1),Dx={__name:"5",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Rx,qx,Ux]),_:1},16))}},Hx=T(Dx,[["__file","/@slidev/slides/5.md"]]),jx="/math201/slides/numpy/numpy-02.png",Vx=o("img",{src:jx,class:"h-90 mx-auto"},null,-1),zx={__name:"6",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Vx]),_:1},16))}},Kx=T(zx,[["__file","/@slidev/slides/6.md"]]),Wx=o("p",null,"除此之外，numpy数组还具有以下特点：",-1),Gx=o("ol",null,[o("li",null,"更紧凑，高维时尤为明显"),o("li",null,"向量化后运算速度比列表更快"),o("li",null,"在末尾添加元素时不如列表高效"),o("li",null,"元素类型一般比较固定")],-1),Yx={__name:"7",setup(e){const t={layout:"center",srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[Wx,Gx]),_:1},16))}},Zx=T(Yx,[["__file","/@slidev/slides/7.md"]]),Jx="/math201/slides/numpy/numpy-03.png",Qx=o("img",{src:Jx,class:"h-90 mx-auto"},null,-1),Xx={__name:"8",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Qx]),_:1},16))}},ew=T(Xx,[["__file","/@slidev/slides/8.md"]]),tw=o("h1",null,"5. NumPy的数据类型",-1),nw=o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"Data type"),o("th",null,"Description")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"bool_")]),o("td",null,"Boolean (True or False) stored as a byte")]),o("tr",null,[o("td",null,[o("code",null,"int_")]),o("td",null,[x("Default integer type (same as C "),o("code",null,"long"),x("; normally either "),o("code",null,"int64"),x(" or "),o("code",null,"int32"),x(")")])]),o("tr",null,[o("td",null,[o("code",null,"intc")]),o("td",null,[x("Identical to C "),o("code",null,"int"),x(" (normally "),o("code",null,"int32"),x(" or "),o("code",null,"int64"),x(")")])]),o("tr",null,[o("td",null,[o("code",null,"intp")]),o("td",null,[x("Integer used for indexing (same as C "),o("code",null,"ssize_t"),x("; normally either "),o("code",null,"int32"),x(" or "),o("code",null,"int64"),x(")")])]),o("tr",null,[o("td",null,[o("code",null,"int8")]),o("td",null,"Byte (-128 to 127)")]),o("tr",null,[o("td",null,[o("code",null,"int16")]),o("td",null,"Integer (-32768 to 32767)")]),o("tr",null,[o("td",null,[o("code",null,"int32")]),o("td",null,"Integer (-2147483648 to 2147483647)")]),o("tr",null,[o("td",null,[o("code",null,"int64")]),o("td",null,"Integer (-9223372036854775808 to 9223372036854775807)")]),o("tr",null,[o("td",null,[o("code",null,"uint8")]),o("td",null,"Unsigned integer (0 to 255)")])])],-1),sw={__name:"9",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>{const r=oo("font");return y(),B(V,U(q(t)),{default:M(()=>[tw,ae(r,{size:"2"},{default:M(()=>[nw]),_:1})]),_:1},16)}}},rw=T(sw,[["__file","/@slidev/slides/9.md"]]),ow=o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"Data type"),o("th",null,"Description")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"uint16")]),o("td",null,"Unsigned integer (0 to 65535)")]),o("tr",null,[o("td",null,[o("code",null,"uint32")]),o("td",null,"Unsigned integer (0 to 4294967295)")]),o("tr",null,[o("td",null,[o("code",null,"uint64")]),o("td",null,"Unsigned integer (0 to 18446744073709551615)")]),o("tr",null,[o("td",null,[o("code",null,"float_")]),o("td",null,[x("Shorthand for "),o("code",null,"float64"),x(".")])]),o("tr",null,[o("td",null,[o("code",null,"float16")]),o("td",null,"Half precision float: sign bit, 5 bits exponent, 10 bits mantissa")]),o("tr",null,[o("td",null,[o("code",null,"float32")]),o("td",null,"Single precision float: sign bit, 8 bits exponent, 23 bits mantissa")]),o("tr",null,[o("td",null,[o("code",null,"float64")]),o("td",null,"Double precision float: sign bit, 11 bits exponent, 52 bits mantissa")]),o("tr",null,[o("td",null,[o("code",null,"complex_")]),o("td",null,[x("Shorthand for "),o("code",null,"complex128"),x(".")])]),o("tr",null,[o("td",null,[o("code",null,"complex64")]),o("td",null,"Complex number, represented by two 32-bit floats")]),o("tr",null,[o("td",null,[o("code",null,"complex128")]),o("td",null,"Complex number, represented by two 64-bit floats")])])],-1),aw={__name:"10",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>{const r=oo("font");return y(),B(V,U(q(t)),{default:M(()=>[ae(r,{size:"2"},{default:M(()=>[ow]),_:1})]),_:1},16)}}},iw=T(aw,[["__file","/@slidev/slides/10.md"]]),lw=o("h1",null,"2. 向量(Vector): 一维数组",-1),cw={__name:"11",setup(e){const t={layout:"center",srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[lw]),_:1},16))}},uw=T(cw,[["__file","/@slidev/slides/11.md"]]),pw="/math201/slides/numpy/numpy-04.png",mw="/math201/slides/numpy/numpy-05.png",dw="/math201/slides/numpy/numpy-07.png",fw=o("h1",null,"1. 向量初始化",-1),hw=o("p",null,[x("通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组： "),o("img",{src:pw,class:"h-90 mx-auto"})],-1),gw=o("p",null,"注意，确保列表元素类型相同，否则dtype=’object’，将影响运算甚至产生语法错误。",-1),_w=o("p",null,[x("由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间： "),o("img",{src:mw,class:"h-90 mx-auto"})],-1),yw=o("p",null,[x("通过以下方法可以创建一个与某一变量形状一致的空数组： "),o("img",{src:dw,class:"h-90 mx-auto"})],-1),vw={__name:"12",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[fw,hw,gw,_w,yw]),_:1},16))}},xw=T(vw,[["__file","/@slidev/slides/12.md"]]),ww="/math201/slides/numpy/numpy-08.png",bw=o("h2",null,"初始化",-1),$w=o("p",null,[x("不止是空数组，通过上述方法还可以将数组填充为特定值： "),o("img",{src:ww,class:"h-90 mx-auto"})],-1),Pw={__name:"13",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[bw,$w]),_:1},16))}},Sw=T(Pw,[["__file","/@slidev/slides/13.md"]]),Bw="/math201/slides/numpy/numpy-09.png",kw=o("h2",null,"初始化",-1),Ew=o("p",null,[x("在NumPy中，还可以通过单调序列初始化数组： "),o("img",{src:Bw,class:"h-90 mx-auto"})],-1),Nw={__name:"14",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[kw,Ew]),_:1},16))}},Cw=T(Nw,[["__file","/@slidev/slides/14.md"]]),Tw=o("h2",null,"初始化",-1),Fw=o("p",null,"如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。",-1),Mw={__name:"15",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Tw,Fw]),_:1},16))}},Ow=T(Mw,[["__file","/@slidev/slides/15.md"]]),Aw="/math201/slides/numpy/numpy-10.png",Iw=o("h2",null,"初始化",-1),Lw=o("p",null,[x("arange浮点类型数据不是非常友好： "),o("img",{src:Aw,class:"h-90 mx-auto"})],-1),Rw={__name:"16",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Iw,Lw]),_:1},16))}},qw=T(Rw,[["__file","/@slidev/slides/16.md"]]),Uw=o("h2",null,"初始化",-1),Dw=o("p",null,"上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。",-1),Hw={__name:"17",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Uw,Dw]),_:1},16))}},jw=T(Hw,[["__file","/@slidev/slides/17.md"]]),Vw="/math201/slides/numpy/numpy-11.png",zw=o("h2",null,"随机数",-1),Kw=o("p",null,[x("随机数组的生成如下： "),o("img",{src:Vw,class:"h-90 mx-auto"})],-1),Ww={__name:"18",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[zw,Kw]),_:1},16))}},Gw=T(Ww,[["__file","/@slidev/slides/18.md"]]),Yw=o("h2",null,"随机数",-1),Zw=o("p",null,"There’s also a new interface for random arrays generation. It is:",-1),Jw=o("ul",null,[o("li",null,"better suited for multi-threading,"),o("li",null,"somewhat faster,"),o("li",null,"more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),"),o("li",null,"able to pass two tricky synthetic tests that the old version fails.")],-1),Qw={__name:"19",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Yw,Zw,Jw]),_:1},16))}},Xw=T(Qw,[["__file","/@slidev/slides/19.md"]]),eb="/math201/slides/numpy/numpy-13.png",tb=o("h1",null,"2.向量索引",-1),nb=o("p",null,[x("对于数组数据的访问，numpy提供了便捷的访问方式： "),o("img",{src:eb,class:"h-90 mx-auto"})],-1),sb={__name:"20",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[tb,nb]),_:1},16))}},rb=T(sb,[["__file","/@slidev/slides/20.md"]]),ob="/math201/slides/numpy/numpy-14.png",ab=o("h2",null,"切片操作",-1),ib=o("p",null,[x("上图中，除“fancy indexing”外，其他所有索引方法本质上都是"),o("code",null,"views"),x("：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。")],-1),lb=o("p",null,[x("上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组： "),o("img",{src:ob,class:"h-90 mx-auto"})],-1),cb={__name:"21",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[ab,ib,lb]),_:1},16))}},ub=T(cb,[["__file","/@slidev/slides/21.md"]]),pb="/math201/slides/numpy/numpy-15.png",mb=o("h2",null,"切片操作",-1),db=o("p",null,[x("Also, such assignments must not change the size of the array, so tricks like "),o("img",{src:pb,class:"h-90 mx-auto"})],-1),fb=o("p",null,"won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).",-1),hb={__name:"22",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[mb,db,re(" ![](./img/numpy-15.png) "),fb]),_:1},16))}},gb=T(hb,[["__file","/@slidev/slides/22.md"]]),_b="/math201/slides/numpy/numpy-16.png",yb=o("h2",null,"布尔索引",-1),vb=o("p",null,[x("此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符： "),o("img",{src:_b,class:"h-90 mx-auto"})],-1),xb=o("p",null,[x("注意，不可以使用"),o("code",null,"3 <= a <= 5"),x("这样的Python“三元”比较。")],-1),wb={__name:"23",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[yb,vb,re(" ![](./img/numpy-16.png) "),xb]),_:1},16))}},bb=T(wb,[["__file","/@slidev/slides/23.md"]]),$b="/math201/slides/numpy/numpy-17.png",Pb=o("h2",null,"布尔索引",-1),Sb=o("p",null,[x("如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。 "),o("img",{src:$b,class:"h-90 mx-auto"})],-1),Bb={__name:"24",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Pb,Sb]),_:1},16))}},kb=T(Bb,[["__file","/@slidev/slides/24.md"]]),Eb="/math201/slides/numpy/numpy-18.png",Nb=o("h1",null,"3.向量操作",-1),Cb=o("p",null,[x("NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组： "),o("img",{src:Eb,class:"h-90 mx-auto"})],-1),Tb={__name:"25",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Nb,Cb]),_:1},16))}},Fb=T(Tb,[["__file","/@slidev/slides/25.md"]]),Mb="/math201/slides/numpy/numpy-19.png",Ob=o("h2",null,"浮点运算",-1),Ab=o("p",null,[x("浮点数的计算也是如此，numpy能够将标量广播到数组： "),o("img",{src:Mb,class:"h-90 mx-auto"})],-1),Ib={__name:"26",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Ob,Ab]),_:1},16))}},Lb=T(Ib,[["__file","/@slidev/slides/26.md"]]),Rb="/math201/slides/numpy/numpy-20.png",qb=o("h2",null,"数学函数",-1),Ub=o("p",null,[x("numpy提供了许多数学函数来处理矢量： "),o("img",{src:Rb,class:"h-90 mx-auto"})],-1),Db={__name:"27",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[qb,Ub]),_:1},16))}},Hb=T(Db,[["__file","/@slidev/slides/27.md"]]),jb="/math201/slides/numpy/numpy-21.png",Vb=o("h2",null,"向量运算",-1),zb=o("p",null,[x("向量点乘（内积）和叉乘（外积、向量积）如下： "),o("img",{src:jb,class:"h-90 mx-auto"})],-1),Kb={__name:"28",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Vb,zb]),_:1},16))}},Wb=T(Kb,[["__file","/@slidev/slides/28.md"]]),Gb="/math201/slides/numpy/numpy-22.png",Yb=o("h2",null,"三角函数",-1),Zb=o("p",null,[x("numpy也提供了如下三角函数运算： "),o("img",{src:Gb,class:"h-90 mx-auto"})],-1),Jb={__name:"29",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Yb,Zb]),_:1},16))}},Qb=T(Jb,[["__file","/@slidev/slides/29.md"]]),Xb="/math201/slides/numpy/numpy-23.png",e3=o("h2",null,"舍入",-1),t3=o("p",null,[x("数组整体进行四舍五入： "),o("img",{src:Xb,class:"h-90 mx-auto"})],-1),n3=o("ol",null,[o("li",null,"floor向上取整"),o("li",null,"ceil向下取整"),o("li",null,"round四舍五入")],-1),s3=o("p",null,"np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。",-1),r3={__name:"30",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[e3,t3,re(" ![](./img/numpy-23.png) "),n3,s3]),_:1},16))}},o3=T(r3,[["__file","/@slidev/slides/30.md"]]),a3="/math201/slides/numpy/numpy-24.png",i3=o("h2",null,"最大最小值等",-1),l3=o("p",null,[x("numpy还可以实现以下功能： "),o("img",{src:a3,class:"h-90 mx-auto"})],-1),c3={__name:"31",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[i3,l3]),_:1},16))}},u3=T(c3,[["__file","/@slidev/slides/31.md"]]),p3="/math201/slides/numpy/numpy-25.png",m3=o("h2",null,"算数平均",-1),d3=o("p",null,[x("As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’): "),o("img",{src:p3,class:"h-90 mx-auto"})],-1),f3={__name:"32",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[re(" TODO: 不确定 "),m3,d3]),_:1},16))}},h3=T(f3,[["__file","/@slidev/slides/32.md"]]),g3="/math201/slides/numpy/numpy-26.png",_3=o("p",null,[x("The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better: "),o("img",{src:g3,class:"h-90 mx-auto"})],-1),y3={__name:"33",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[re(" TODO: 不确定 "),_3]),_:1},16))}},v3=T(y3,[["__file","/@slidev/slides/33.md"]]),x3="/math201/slides/numpy/numpy-27.png",w3=o("h1",null,"排序",-1),b3=o("p",null,[x("在numpy中，排序函数功能有所阉割： "),o("img",{src:x3,class:"h-90 mx-auto"})],-1),$3=o("p",null,"对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。",-1),P3={__name:"34",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[w3,b3,re(" ![](./img/numpy-27.png) "),$3]),_:1},16))}},S3=T(P3,[["__file","/@slidev/slides/34.md"]]),B3="/math201/slides/numpy/numpy-28.png",k3=o("h1",null,"4.查找向量中的元素",-1),E3=o("p",null,[x("不同于Python列表，NumPy数组没有索引方法。 "),o("img",{src:B3,class:"h-90 mx-auto"})],-1),N3=o("ul",null,[o("li",null,[x("可以通过"),o("code",null,"np.where(a==x)[0][0]"),x("查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。")]),o("li",null,[x("使用Numba实现加速查找，"),o("code",null,"next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)"),x("，在最坏的情况下，它的速度要比where慢。")]),o("li",null,[x("如果数组是排好序的，使用"),o("code",null,"v = np.searchsorted(a, x); return v if a[v]==x else -1"),x("时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。")])],-1),C3=o("p",null,"实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。",-1),T3={__name:"35",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>{const r=oo("font");return y(),B(V,U(q(t)),{default:M(()=>[k3,E3,re(" ![](./img/numpy-28.png) "),ae(r,{size:"2"},{default:M(()=>[N3]),_:1}),C3]),_:1},16)}}},F3=T(T3,[["__file","/@slidev/slides/35.md"]]),M3="/math201/slides/numpy/numpy-29.png",O3=o("h1",null,"5.浮点数比较",-1),A3=o("p",null,[x("np.allclose(a, b)用于容忍误差之内的浮点数比较。 "),o("img",{src:M3,class:"h-90 mx-auto"})],-1),I3=o("ul",null,[o("li",null,[x("np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9："),o("code",null,"np.allclose(1e-9,2e-9, atol=1e-17)==False"),x("。")]),o("li",null,[x("math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即"),o("code",null,"math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True"),x("。")])],-1),L3={__name:"36",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[O3,A3,re(" ![](./img/numpy-29.png) "),I3]),_:1},16))}},R3=T(L3,[["__file","/@slidev/slides/36.md"]]),q3=o("p",null,[x("此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的"),o("a",{href:"https://floating-point-gui.de/errors/comparison/",target:"_blank",rel:"noopener"},"浮点数据指南"),x("和相应的"),o("a",{href:"https://github.com/numpy/numpy/issues/10161",target:"_blank",rel:"noopener"},"NumPy问题"),x("了解更多信息。")],-1),U3={__name:"37",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[q3]),_:1},16))}},D3=T(U3,[["__file","/@slidev/slides/37.md"]]),H3=o("h1",null,"3. 矩阵(Matrix): 二维数组",-1),j3={__name:"38",setup(e){const t={layout:"center",srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[H3]),_:1},16))}},V3=T(j3,[["__file","/@slidev/slides/38.md"]]),z3="/math201/slides/numpy/numpy-30.png",K3=o("h1",null,"1.矩阵初始化",-1),W3=o("p",null,[x("矩阵的初始化语法与向量类似： "),o("img",{src:z3,class:"h-90 mx-auto"})],-1),G3=o("p",null,"如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。",-1),Y3={__name:"39",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[K3,W3,re(" ![](./img/numpy-30.png) "),G3]),_:1},16))}},Z3=T(Y3,[["__file","/@slidev/slides/39.md"]]),J3="/math201/slides/numpy/numpy-31.png",Q3=o("h2",null,"随机矩阵",-1),X3=o("p",null,[x("随机矩阵的生成也与向量类似： "),o("img",{src:J3,class:"h-90 mx-auto"})],-1),e5={__name:"40",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Q3,X3]),_:1},16))}},t5=T(e5,[["__file","/@slidev/slides/40.md"]]),n5="/math201/slides/numpy/numpy-32.png",s5=o("h2",null,"随机矩阵",-1),r5=o("p",null,[x("The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is: "),o("img",{src:n5,class:"h-90 mx-auto"})],-1),o5={__name:"41",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[s5,r5]),_:1},16))}},a5=T(o5,[["__file","/@slidev/slides/41.md"]]),i5="/math201/slides/numpy/numpy-33.png",l5=o("h2",null,"索引",-1),c5=o("p",null,[x("二维数组的索引语法要比嵌套列表更方便： "),o("img",{src:i5,class:"h-90 mx-auto"})],-1),u5=o("p",null,"“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。",-1),p5={__name:"42",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[l5,c5,re(" ![](./img/numpy-33.png) "),u5]),_:1},16))}},m5=T(p5,[["__file","/@slidev/slides/42.md"]]),d5="/math201/slides/numpy/numpy-34.png",f5=o("h1",null,"2.轴参数",-1),h5=o("p",null,[x("在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0 ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。 "),o("img",{src:d5,class:"h-90 mx-auto"})],-1),g5={__name:"43",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[f5,h5]),_:1},16))}},_5=T(g5,[["__file","/@slidev/slides/43.md"]]),y5="/math201/slides/numpy/numpy-35.png",v5=o("h1",null,"3.矩阵运算",-1),x5=o("p",null,[x("除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积： "),o("img",{src:y5,class:"h-90 mx-auto"})],-1),w5={__name:"44",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[v5,x5]),_:1},16))}},b5=T(w5,[["__file","/@slidev/slides/44.md"]]),$5="/math201/slides/numpy/numpy-36.png",P5=o("h2",null,"混合运算",-1),S5=o("p",null,[x("numpy同样可以通过"),re("[广播机制](./broadcast.md) "),x("实现向量与矩阵，或两个向量之间的混合运算： "),o("img",{src:$5,class:"h-90 mx-auto"})],-1),B5={__name:"45",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[P5,S5]),_:1},16))}},k5=T(B5,[["__file","/@slidev/slides/45.md"]]),E5="/math201/slides/numpy/numpy-37.png",N5=o("h2",null,"乘法",-1),C5=o("p",null,[x("注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积： "),o("img",{src:E5,class:"h-90 mx-auto"})],-1),T5={__name:"46",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[N5,C5]),_:1},16))}},F5=T(T5,[["__file","/@slidev/slides/46.md"]]),M5="/math201/slides/numpy/numpy-38.png",O5=o("h1",null,"4.行向量与列向量",-1),A5=o("p",null,[x("根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose： "),o("img",{src:M5,class:"h-90 mx-auto"})],-1),I5={__name:"47",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[O5,A5]),_:1},16))}},L5=T(I5,[["__file","/@slidev/slides/47.md"]]),R5="/math201/slides/numpy/numpy-39.png",q5=o("h2",null,"数组形状改变",-1),U5=o("p",null,[x("使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量： "),o("img",{src:R5,class:"h-90 mx-auto"})],-1),D5=o("p",null,"其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。",-1),H5={__name:"48",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[q5,U5,re(" ![](./img/numpy-39.png) "),D5]),_:1},16))}},j5=T(H5,[["__file","/@slidev/slides/48.md"]]),V5="/math201/slides/numpy/numpy-40.png",z5=o("h2",null,"数组形状改变",-1),K5=o("p",null,[x("因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图： "),o("img",{src:V5,class:"h-90 mx-auto"})],-1),W5={__name:"49",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[z5,K5]),_:1},16))}},G5=T(W5,[["__file","/@slidev/slides/49.md"]]),Y5=o("h2",null,"数组形状改变",-1),Z5=o("p",null,"根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。",-1),J5=o("p",null,"严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。",-1),Q5={__name:"50",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Y5,Z5,J5]),_:1},16))}},X5=T(Q5,[["__file","/@slidev/slides/50.md"]]),e4="/math201/slides/numpy/numpy-41.png",t4=o("h1",null,"5.矩阵的操作",-1),n4=o("p",null,[x("矩阵的拼接有以下两种方式： "),o("img",{src:e4,class:"h-90 mx-auto"})],-1),s4={__name:"51",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[t4,n4]),_:1},16))}},r4=T(s4,[["__file","/@slidev/slides/51.md"]]),o4="/math201/slides/numpy/numpy-42.png",a4=o("h2",null,"矩阵拼接",-1),i4=o("p",null,[x("图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作： "),o("img",{src:o4,class:"h-90 mx-auto"})],-1),l4={__name:"52",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[a4,i4]),_:1},16))}},c4=T(l4,[["__file","/@slidev/slides/52.md"]]),u4="/math201/slides/numpy/numpy-42-1.png",p4=o("h2",null,"矩阵拼接",-1),m4=o("p",null,[x("与stack对应的是split： "),o("img",{src:u4,class:"h-90 mx-auto"})],-1),d4={__name:"53",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[p4,m4]),_:1},16))}},f4=T(d4,[["__file","/@slidev/slides/53.md"]]),h4="/math201/slides/numpy/numpy-43.png",g4=o("p",null,[x("All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts: "),o("img",{src:h4,class:"h-90 mx-auto"})],-1),_4={__name:"54",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[g4]),_:1},16))}},y4=T(_4,[["__file","/@slidev/slides/54.md"]]),v4="/math201/slides/numpy/numpy-44.png",x4=o("h2",null,"矩阵复制",-1),w4=o("p",null,[x("矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。 "),o("img",{src:v4,class:"h-90 mx-auto"})],-1),b4={__name:"55",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[x4,w4]),_:1},16))}},$4=T(b4,[["__file","/@slidev/slides/55.md"]]),P4="/math201/slides/numpy/numpy-45.png",S4=o("h2",null,"矩阵删除",-1),B4=o("p",null,[x("delete可以删除特定的行或列 "),o("img",{src:P4,class:"h-90 mx-auto"})],-1),k4={__name:"56",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[S4,B4]),_:1},16))}},E4=T(k4,[["__file","/@slidev/slides/56.md"]]),N4="/math201/slides/numpy/numpy-46.png",C4=o("h2",null,"矩阵插入",-1),T4=o("p",null,[x("相应插入操作为insert： "),o("img",{src:N4,class:"h-90 mx-auto"})],-1),F4={__name:"57",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[C4,T4]),_:1},16))}},M4=T(F4,[["__file","/@slidev/slides/57.md"]]),O4="/math201/slides/numpy/numpy-47.png",A4=o("h2",null,"矩阵插入",-1),I4=o("p",null,[x("与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack： "),o("img",{src:O4,class:"h-90 mx-auto"})],-1),L4={__name:"58",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[A4,I4]),_:1},16))}},R4=T(L4,[["__file","/@slidev/slides/58.md"]]),q4="/math201/slides/numpy/numpy-48.png",U4=o("h2",null,"矩阵插入",-1),D4=o("p",null,[x("如果仅仅是向数组的边界添加常量值，pad函数是足够的： "),o("img",{src:q4,class:"h-90 mx-auto"})],-1),H4={__name:"59",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[U4,D4]),_:1},16))}},j4=T(H4,[["__file","/@slidev/slides/59.md"]]),V4="/math201/slides/numpy/numpy-49.png",z4="/math201/slides/numpy/numpy-50.png",K4=o("h1",null,"6.Meshgrids",-1),W4=o("p",null,[x("广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵： "),o("img",{src:V4,class:"h-90 mx-auto"})],-1),G4=o("p",null,[x("上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。 "),o("img",{src:z4,class:"h-90 mx-auto"})],-1),Y4={__name:"60",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[K4,W4,re(" ![](./img/numpy-49.png) "),G4]),_:1},16))}},Z4=T(Y4,[["__file","/@slidev/slides/60.md"]]),J4="/math201/slides/numpy/numpy-51.png",Q4=o("h2",null,"meshgrid",-1),X4=o("p",null,"meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。",-1),e6=o("p",null,[x("在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理： "),o("img",{src:J4,class:"h-90 mx-auto"})],-1),t6={__name:"61",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[Q4,X4,e6]),_:1},16))}},n6=T(t6,[["__file","/@slidev/slides/61.md"]]),s6="/math201/slides/numpy/numpy-52.png",r6=o("h2",null,"meshgrid",-1),o6=o("p",null,"如果没有indexing ='ij’参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。",-1),a6=o("p",null,[x("除了在二维或三维网格上初始化函数外，网格还可以用于索引数组： "),o("img",{src:s6,class:"h-90 mx-auto"})],-1),i6=o("p",null,"以上方法在稀疏网格中同样适用。",-1),l6={__name:"62",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[r6,o6,a6,re(" ![](./img/numpy-52.png) "),i6]),_:1},16))}},c6=T(l6,[["__file","/@slidev/slides/62.md"]]),u6="/math201/slides/numpy/numpy-53.png",p6=o("h1",null,"7.矩阵的统计",-1),m6=o("p",null,[x("就像sum函数，numpy提供了矩阵不同轴上的"),o("code",null,"min/max, argmin/argmax, mean/median/percentile, std/var"),x("等函数。 "),o("img",{src:u6,class:"h-90 mx-auto"})],-1),d6={__name:"63",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[p6,m6]),_:1},16))}},f6=T(d6,[["__file","/@slidev/slides/63.md"]]),h6="/math201/slides/numpy/numpy-55.png",g6=o("h2",null,"矩阵最大最小值",-1),_6=o("p",null,"np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。",-1),y6=o("p",null,[x("2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标： "),o("img",{src:h6,class:"h-90 mx-auto"})],-1),v6={__name:"64",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[g6,_6,y6]),_:1},16))}},x6=T(v6,[["__file","/@slidev/slides/64.md"]]),w6="/math201/slides/numpy/numpy-56.png",b6=o("p",null,[x("all和any同样也可作用于特定维度： "),o("img",{src:w6,class:"h-90 mx-auto"})],-1),$6={__name:"65",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[b6]),_:1},16))}},P6=T($6,[["__file","/@slidev/slides/65.md"]]),S6="/math201/slides/numpy/numpy-57.png",B6=o("h1",null,"8.矩阵排序",-1),k6=o("p",null,[x("虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小： "),o("img",{src:S6,class:"h-90 mx-auto"})],-1),E6={__name:"66",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[B6,k6]),_:1},16))}},N6=T(E6,[["__file","/@slidev/slides/66.md"]]),C6="/math201/slides/numpy/numpy-59.png",T6=o("h2",null,"排序",-1),F6=o("p",null,"你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：",-1),M6=o("p",null,[x("1、"),o("code",null,"a[a[:,0].argsort()]"),x("表示按第一列对数组进行排序： "),o("img",{src:C6,class:"h-90 mx-auto"})],-1),O6=o("p",null,"其中，argsort返回排序后的原始数组的索引数组。",-1),A6={__name:"67",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[T6,F6,M6,re(" ![](./img/numpy-59.png) "),O6]),_:1},16))}},I6=T(A6,[["__file","/@slidev/slides/67.md"]]),L6="/math201/slides/numpy/numpy-60.png",R6=o("h2",null,"排序",-1),q6=o("p",null,"可以重复使用该方法，但千万不要搞混：",-1),U6=o("p",null,"a = a[a[:,2].argsort()]",-1),D6=o("p",null,"a = a[a[:,1].argsort(kind='stable')]",-1),H6=o("p",null,[x("a = a[a[:,0].argsort(kind='stable')] "),o("img",{src:L6,class:"h-90 mx-auto"})],-1),j6={__name:"68",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[R6,q6,U6,D6,H6]),_:1},16))}},V6=T(j6,[["__file","/@slidev/slides/68.md"]]),z6="/math201/slides/numpy/numpy-61.png",K6=o("h2",null,"排序",-1),W6=o("p",null,"2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：",-1),G6=o("p",null,[x("a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。 "),o("img",{src:z6,class:"h-90 mx-auto"})],-1),Y6=o("p",null,"其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，…]等效，其中…表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。",-1),Z6={__name:"69",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[K6,W6,G6,re(" ![](./img/numpy-61.png) "),Y6]),_:1},16))}},J6=T(Z6,[["__file","/@slidev/slides/69.md"]]),Q6=o("h1",null,"4. 张量(Tensor): 多维数组",-1),X6={__name:"70",setup(e){const t={layout:"center",srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[Q6]),_:1},16))}},e$=T(X6,[["__file","/@slidev/slides/70.md"]]),t$="/math201/slides/numpy/numpy-63.png",n$=o("h1",null,"1.初始化",-1),s$=o("p",null,[x("通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动： "),o("img",{src:t$,class:"h-90 mx-auto"})],-1),r$={__name:"71",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[n$,s$]),_:1},16))}},o$=T(r$,[["__file","/@slidev/slides/71.md"]]),a$="/math201/slides/numpy/numpy-64.png",i$=o("h2",null,"索引顺序",-1),l$=o("p",null,"通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。",-1),c$=o("p",null,[x("但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）： "),o("img",{src:a$,class:"h-90 mx-auto"})],-1),u$={__name:"72",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[i$,l$,c$]),_:1},16))}},p$=T(u$,[["__file","/@slidev/slides/72.md"]]),m$="/math201/slides/numpy/numpy-65.png",d$=o("h2",null,"索引顺序",-1),f$=o("p",null,"这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。",-1),h$=o("p",null,[x("因此，几何形状的创建实际取决于你对域的约定： "),o("img",{src:m$,class:"h-90 mx-auto"})],-1),g$={__name:"73",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[d$,f$,h$]),_:1},16))}},_$=T(g$,[["__file","/@slidev/slides/73.md"]]),y$="/math201/slides/numpy/numpy-66.png",v$=o("h2",null,"RGB",-1),x$=o("p",null,[x("显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下： "),o("img",{src:y$,class:"h-90 mx-auto"})],-1),w$={__name:"74",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[v$,x$]),_:1},16))}},b$=T(w$,[["__file","/@slidev/slides/74.md"]]),$$="/math201/slides/numpy/numpy-67.png",P$=o("h2",null,"concatenate",-1),S$=o("p",null,[x("如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号： "),o("img",{src:$$,class:"h-90 mx-auto"})],-1),B$={__name:"75",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[P$,S$]),_:1},16))}},k$=T(B$,[["__file","/@slidev/slides/75.md"]]),E$="/math201/slides/numpy/numpy-68.png",N$=o("h2",null,"数组转置",-1),C$=o("p",null,[x("如果不考虑轴数，可以将数组转换hstack和相应形式： "),o("img",{src:E$,class:"h-90 mx-auto"})],-1),T$=o("p",null,"这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。",-1),F$={__name:"76",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[N$,C$,T$]),_:1},16))}},M$=T(F$,[["__file","/@slidev/slides/76.md"]]),O$="/math201/slides/numpy/numpy-69.png",A$=o("h2",null,"数组转置",-1),I$=o("p",null,[x("通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1： "),o("img",{src:O$,class:"h-90 mx-auto"})],-1),L$=o("p",null,"注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。",-1),R$=o("p",null,"广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。",-1),q$={__name:"77",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[A$,I$,re(" ![](./img/numpy-69.png) "),L$,R$]),_:1},16))}},U$=T(q$,[["__file","/@slidev/slides/77.md"]]),D$="/math201/slides/numpy/numpy-70.png",H$=o("h2",null,"einsum",-1),j$=o("p",null,[x("最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁： "),o("img",{src:D$,class:"h-90 mx-auto"})],-1),V$=o("p",null,"该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。",-1),z$={__name:"78",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[H$,j$,re(" ![](./img/numpy-70.png) "),V$]),_:1},16))}},K$=T(z$,[["__file","/@slidev/slides/78.md"]]),W$=o("h1",null,"5. 广播(Broadcast)",-1),G$=o("p",null,"本文参考:",-1),Y$=o("ol",null,[o("li",null,[o("a",{href:"https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73",target:"_blank",rel:"noopener"},"Broadcasting in NumPy")])],-1),Z$={__name:"79",setup(e){const t={layout:"center",srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[W$,G$,Y$]),_:1},16))}},J$=T(Z$,[["__file","/@slidev/slides/79.md"]]),Q$="/math201/slides/numpy/numpy-broadcast-01.png",X$=o("h1",null,"1. 什么是广播?",-1),e9=o("p",null,"广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。 当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。",-1),t9=o("p",null,"最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：",-1),n9=o("img",{src:Q$,class:"h-90 mx-auto"},null,-1),s9={__name:"80",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[X$,e9,t9,n9]),_:1},16))}},r9=T(s9,[["__file","/@slidev/slides/80.md"]]),o9="/math201/slides/numpy/numpy-broadcast-02.png",a9=o("h2",null,"二维数组的广播",-1),i9=o("p",null,[x("广播类似于众所周知的"),o("strong",null,"类型提升"),x("：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。")],-1),l9=o("p",null,[x("在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状： "),o("img",{src:o9,class:"h-90 mx-auto"})],-1),c9={__name:"81",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[a9,i9,l9]),_:1},16))}},u9=T(c9,[["__file","/@slidev/slides/81.md"]]),p9="/math201/slides/numpy/numpy-broadcast-03.png",m9=o("h2",null,"三维数组的广播",-1),d9=o("p",null,[x("在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。 "),o("img",{src:p9,class:"h-90 mx-auto"})],-1),f9={__name:"82",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[m9,d9]),_:1},16))}},h9=T(f9,[["__file","/@slidev/slides/82.md"]]),g9="/math201/slides/numpy/numpy-broadcast-04.png",_9=o("h1",null,"2. 广播的规则",-1),y9=o("p",null,"在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。",-1),v9=o("ul",null,[o("li",null,"规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。"),o("li",null,"规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。"),o("li",null,[x("规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。 来源于 – "),o("a",{href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/",target:"_blank",rel:"noopener"},"《Python Data Science Handbook》")])],-1),x9=o("p",null,[x("根据规则之前三维数组的案例可解释如下： "),o("img",{src:g9,class:"h-90 mx-auto"})],-1),w9=o("p",null,"为了更清楚地理解这些规则，来看几个具体的示例。",-1),b9={__name:"83",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[_9,y9,v9,x9,re(" ![](./img/numpy-broadcast-04.png) "),w9]),_:1},16))}},$9=T(b9,[["__file","/@slidev/slides/83.md"]]),P9=o("h2",null,"示例1",-1),S9=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"import"),o("span",{style:{color:"#B392F0"}}," numpy "),o("span",{style:{color:"#F97583"}},"as"),o("span",{style:{color:"#B392F0"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"M "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"ones"),o("span",{style:{color:"#BBBBBB"}},"(("),o("span",{style:{color:"#F8F8F8"}},"2"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"a "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"arange"),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(M "),o("span",{style:{color:"#F97583"}},"+"),o("span",{style:{color:"#BBBBBB"}}," a)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(M.shape)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(a.shape)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#D32F2F"}},"import"),o("span",{style:{color:"#24292EFF"}}," numpy "),o("span",{style:{color:"#D32F2F"}},"as"),o("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"M "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"ones"),o("span",{style:{color:"#212121"}},"(("),o("span",{style:{color:"#1976D2"}},"2"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"a "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"arange"),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(M "),o("span",{style:{color:"#D32F2F"}},"+"),o("span",{style:{color:"#212121"}}," a)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(M.shape)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(a.shape)")])])])],-1),B9=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"[[1. 2. 3.]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}}," [1. 2. 3.]]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"(2, 3)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"(3,)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"[[1. 2. 3.]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}}," [1. 2. 3.]]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"(2, 3)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"(3,)")])])])],-1),k9={__name:"84",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[P9,S9,B9]),_:1},16))}},E9=T(k9,[["__file","/@slidev/slides/84.md"]]),N9=o("p",null,"可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：",-1),C9=o("p",null,"M.shape -> (2, 3)",-1),T9=o("p",null,"a.shape -> (1, 3)",-1),F9=o("p",null,"根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：",-1),M9=o("p",null,"M.shape -> (2, 3)",-1),O9=o("p",null,"a.shape -> (2, 3)",-1),A9={__name:"85",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[N9,C9,T9,F9,M9,O9]),_:1},16))}},I9=T(A9,[["__file","/@slidev/slides/85.md"]]),L9=o("h2",null,"示例2",-1),R9=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"import"),o("span",{style:{color:"#B392F0"}}," numpy "),o("span",{style:{color:"#F97583"}},"as"),o("span",{style:{color:"#B392F0"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"a "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"arange"),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},")."),o("span",{style:{color:"#B392F0"}},"reshape"),o("span",{style:{color:"#BBBBBB"}},"(("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"1"),o("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"b "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"arange"),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(a "),o("span",{style:{color:"#F97583"}},"+"),o("span",{style:{color:"#BBBBBB"}}," b)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(a.shape)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(b.shape)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#D32F2F"}},"import"),o("span",{style:{color:"#24292EFF"}}," numpy "),o("span",{style:{color:"#D32F2F"}},"as"),o("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"a "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"arange"),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},")."),o("span",{style:{color:"#6F42C1"}},"reshape"),o("span",{style:{color:"#212121"}},"(("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"1"),o("span",{style:{color:"#212121"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"b "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"arange"),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(a "),o("span",{style:{color:"#D32F2F"}},"+"),o("span",{style:{color:"#212121"}}," b)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(a.shape)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(b.shape)")])])])],-1),q9=o("p",null,"规则1告诉我们，需要用1将b的形状补全:",-1),U9=o("p",null,"a.shape -> (3, 1)",-1),D9=o("p",null,"b.shape -> (1, 3)",-1),H9=o("p",null,"规则2告诉我们，需要更新这两个数组的维度来互相匹配:",-1),j9=o("p",null,"a.shape -> (3, 3)",-1),V9=o("p",null,"b.shape -> (3, 3)",-1),z9={__name:"86",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[L9,R9,q9,U9,D9,H9,j9,V9]),_:1},16))}},K9=T(z9,[["__file","/@slidev/slides/86.md"]]),W9=o("p",null,"因为结果匹配，所以这两个形状是兼容的，可以看到一下结果:",-1),G9=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"[[0 1 2]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}}," [1 2 3]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}}," [2 3 4]]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"(3, 1)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#b392f0"}},"(3,)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"[[0 1 2]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}}," [1 2 3]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}}," [2 3 4]]")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"(3, 1)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292eff"}},"(3,)")])])])],-1),Y9={__name:"87",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[W9,G9]),_:1},16))}},Z9=T(Y9,[["__file","/@slidev/slides/87.md"]]),J9=o("h2",null,"示例3",-1),Q9=o("p",null,"现在来看一个两组不兼容的示例:",-1),X9=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F97583"}},"import"),o("span",{style:{color:"#B392F0"}}," numpy "),o("span",{style:{color:"#F97583"}},"as"),o("span",{style:{color:"#B392F0"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"M "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"ones"),o("span",{style:{color:"#BBBBBB"}},"(("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"2"),o("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"a "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"arange"),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"print"),o("span",{style:{color:"#BBBBBB"}},"(M "),o("span",{style:{color:"#F97583"}},"+"),o("span",{style:{color:"#BBBBBB"}}," a)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#D32F2F"}},"import"),o("span",{style:{color:"#24292EFF"}}," numpy "),o("span",{style:{color:"#D32F2F"}},"as"),o("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"M "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"ones"),o("span",{style:{color:"#212121"}},"(("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"2"),o("span",{style:{color:"#212121"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"a "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"arange"),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},")")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(M "),o("span",{style:{color:"#D32F2F"}},"+"),o("span",{style:{color:"#212121"}}," a)")])])])],-1),eP=o("p",null,"和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:",-1),tP=o("p",null,"M.shape = (3, 2)",-1),nP=o("p",null,"a.shape = (3,)",-1),sP={__name:"88",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[J9,Q9,X9,eP,tP,nP]),_:1},16))}},rP=T(sP,[["__file","/@slidev/slides/88.md"]]),oP=o("p",null,"规则1告诉我们，a数组的形状必须用1进行补全：",-1),aP=o("p",null,"M.shape -> (3, 2)",-1),iP=o("p",null,"a.shape -> (1, 3)",-1),lP=o("p",null,"根据规则2，a数组的第一个维度进行扩展以匹配M的维度：",-1),cP=o("p",null,"M.shape -> (3, 2)",-1),uP=o("p",null,"a.shape -> (3, 3)",-1),pP={__name:"89",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(V,U(q(t)),{default:M(()=>[oP,aP,iP,lP,cP,uP]),_:1},16))}},mP=T(pP,[["__file","/@slidev/slides/89.md"]]),dP={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},fP=o("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),hP=[fP];function gP(e,t){return y(),X("svg",dP,hP)}const _P={name:"ph-clipboard",render:gP},yP={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vP=o("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),xP=[vP];function wP(e,t){return y(),X("svg",yP,xP)}const bP={name:"ph-check-circle",render:wP},$P=["title"],PP=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;S(C);const n=S(ou),s=S(au),r=S(iu);function a(m=5){const d=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let v=0;v<m;v++)d.push(h.charAt(Math.floor(Math.random()*g)));return d.join("")}const i=le(),l=Wt();ur(()=>{const m=t.at==null?s==null?void 0:s.value.length:t.at,d=A(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(m||0)),t.ranges.length-1)),h=A(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const g=a(),v=Ff(t.ranges.length-1).map(w=>g+w);s!=null&&s.value&&(s.value.push(...v),ro(()=>v.forEach(w=>Tf(s.value,w)),l))}bs(()=>{if(!i.value)return;const v=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const w of v){const E=Array.from(w.querySelectorAll(".line")),P=np(E.length,h.value);if(E.forEach((N,F)=>{const W=P.includes(F+1);N.classList.toggle(Cf,!0),N.classList.toggle("highlighted",W),N.classList.toggle("dishonored",!W)}),t.maxHeight){const N=w.querySelector(".line.highlighted");N&&N.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Eh();function p(){var d,h;const m=(h=(d=i.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&u(m)}return(m,d)=>{const h=bP,g=_P;return y(),X("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:tt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[zt(m.$slots,"default"),b(Te).codeCopy?(y(),X("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(c)?"Copied":"Copy",onClick:d[0]||(d[0]=v=>p())},[b(c)?(y(),B(h,{key:0,class:"p-2 w-8 h-8"})):(y(),B(g,{key:1,class:"p-2 w-8 h-8"}))],8,$P)):re("v-if",!0)],4)}}}),SP=T(PP,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),BP=o("p",null,"现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：",-1),kP=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"--------------------------------------------------------------------------"),o("span",{style:{color:"#F97583"}},"-")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#79B8FF"}},"ValueError"),o("span",{style:{color:"#B392F0"}},"                                Traceback "),o("span",{style:{color:"#BBBBBB"}},"(most recent call last)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"Cell In"),o("span",{style:{color:"#BBBBBB"}},"["),o("span",{style:{color:"#F8F8F8"}},"5"),o("span",{style:{color:"#BBBBBB"}},"],"),o("span",{style:{color:"#B392F0"}}," line "),o("span",{style:{color:"#F8F8F8"}},"6")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"      "),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#B392F0"}}," M "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"ones"),o("span",{style:{color:"#BBBBBB"}},"(("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},", "),o("span",{style:{color:"#F8F8F8"}},"2"),o("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"      "),o("span",{style:{color:"#F8F8F8"}},"4"),o("span",{style:{color:"#B392F0"}}," a "),o("span",{style:{color:"#F97583"}},"="),o("span",{style:{color:"#B392F0"}}," np"),o("span",{style:{color:"#BBBBBB"}},"."),o("span",{style:{color:"#B392F0"}},"arange"),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#B392F0"}},"----"),o("span",{style:{color:"#F97583"}},">"),o("span",{style:{color:"#B392F0"}}," "),o("span",{style:{color:"#F8F8F8"}},"6"),o("span",{style:{color:"#B392F0"}}," print"),o("span",{style:{color:"#BBBBBB"}},"(M "),o("span",{style:{color:"#F97583"}},"+"),o("span",{style:{color:"#BBBBBB"}}," a)")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#79B8FF"}},"ValueError"),o("span",{style:{color:"#BBBBBB"}},":"),o("span",{style:{color:"#B392F0"}}," operands could "),o("span",{style:{color:"#F97583"}},"not"),o("span",{style:{color:"#B392F0"}}," be broadcast together "),o("span",{style:{color:"#F97583"}},"with"),o("span",{style:{color:"#B392F0"}}," shapes "),o("span",{style:{color:"#BBBBBB"}},"("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},","),o("span",{style:{color:"#F8F8F8"}},"2"),o("span",{style:{color:"#BBBBBB"}},") ("),o("span",{style:{color:"#F8F8F8"}},"3"),o("span",{style:{color:"#BBBBBB"}},",)")])])]),o("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"--------------------------------------------------------------------------"),o("span",{style:{color:"#D32F2F"}},"-")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#1976D2"}},"ValueError"),o("span",{style:{color:"#24292EFF"}},"                                "),o("span",{style:{color:"#6F42C1"}},"Traceback "),o("span",{style:{color:"#212121"}},"(most recent call last)")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"Cell In"),o("span",{style:{color:"#212121"}},"["),o("span",{style:{color:"#1976D2"}},"5"),o("span",{style:{color:"#212121"}},"],"),o("span",{style:{color:"#24292EFF"}}," line "),o("span",{style:{color:"#1976D2"}},"6")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"      "),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#24292EFF"}}," M "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"ones"),o("span",{style:{color:"#212121"}},"(("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},", "),o("span",{style:{color:"#1976D2"}},"2"),o("span",{style:{color:"#212121"}},"))")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"      "),o("span",{style:{color:"#1976D2"}},"4"),o("span",{style:{color:"#24292EFF"}}," a "),o("span",{style:{color:"#D32F2F"}},"="),o("span",{style:{color:"#24292EFF"}}," np"),o("span",{style:{color:"#212121"}},"."),o("span",{style:{color:"#6F42C1"}},"arange"),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},")")]),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#24292EFF"}},"----"),o("span",{style:{color:"#D32F2F"}},">"),o("span",{style:{color:"#24292EFF"}}," "),o("span",{style:{color:"#1976D2"}},"6"),o("span",{style:{color:"#24292EFF"}}," "),o("span",{style:{color:"#6F42C1"}},"print"),o("span",{style:{color:"#212121"}},"(M "),o("span",{style:{color:"#D32F2F"}},"+"),o("span",{style:{color:"#212121"}}," a)")]),x(`
`),o("span",{class:"line"}),x(`
`),o("span",{class:"line"},[o("span",{style:{color:"#1976D2"}},"ValueError"),o("span",{style:{color:"#212121"}},":"),o("span",{style:{color:"#24292EFF"}}," operands could "),o("span",{style:{color:"#D32F2F"}},"not"),o("span",{style:{color:"#24292EFF"}}," be broadcast together "),o("span",{style:{color:"#D32F2F"}},"with"),o("span",{style:{color:"#24292EFF"}}," "),o("span",{style:{color:"#6F42C1"}},"shapes "),o("span",{style:{color:"#212121"}},"("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},","),o("span",{style:{color:"#1976D2"}},"2"),o("span",{style:{color:"#212121"}},") ("),o("span",{style:{color:"#1976D2"}},"3"),o("span",{style:{color:"#212121"}},",)")])])])],-1),EP=o("p",null,"请注意，这里可能发生的混淆在于：",-1),NP=o("p",null,[o("strong",null,"你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。")],-1),CP={__name:"90",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>{const r=SP;return y(),B(V,U(q(t)),{default:M(()=>[BP,ae(r,Ia({},{ranges:[""]}),{default:M(()=>[kP]),_:1},16),EP,NP]),_:1},16)}}},TP=T(CP,[["__file","/@slidev/slides/90.md"]]),FP=o("h1",null,"Thanks",-1),MP={__name:"91",setup(e){const t={layout:"center"};return S(C),(n,s)=>(y(),B(ts,U(q(t)),{default:M(()=>[FP]),_:1},16))}},OP=T(MP,[["__file","/@slidev/slides/91.md"]]),AP=[{path:"1",name:"page-1",component:vx,meta:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"NumPy 基础",slide:{raw:`---
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

# NumPy 基础

## 上海电力大学

数理学院数学系

#### 邓化宇

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
`,title:"NumPy 基础",level:1,content:`# NumPy 基础

## 上海电力大学

数理学院数学系

#### 邓化宇

<div class="abs-br m-6 flex gap-2">
  <a href="https://suepaper.github.io/math201/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:application-web />
  </a>
  <a href="https://github.com/SUEPaper/math201-lecture/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"NumPy 基础"},index:0,start:0,end:36,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Sx,meta:{layout:"center",title:"1. 简介与安装",srcSequence:"./pages/what_is_numpy.md",slide:{raw:null,title:"1. 简介与安装",level:1,content:`# 1. 简介与安装


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。`,frontmatter:{layout:"center",title:"1. 简介与安装",srcSequence:"./pages/what_is_numpy.md"},note:`---
layout: center`,index:1,start:0,end:11,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`---
layout: center
---

# 1. 简介与安装


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。

<!-- ---
layout: center -->`,title:"1. 简介与安装",level:1,content:`# 1. 简介与安装


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。`,frontmatter:{layout:"center",title:"1. 简介与安装"},note:`---
layout: center`,index:0,start:0,end:11},inline:{raw:`---
src: ./pages/what_is_numpy.md
---
`,content:"",frontmatter:{},index:1,start:36,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:`<hr>
<p>layout: center</p>
`,id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Cx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
# 1. NumPy 速查手册
<img src = "/numpy-cheat-sheet.png" class = "h-90 mx-auto">

<!-- ---
layout: center -->`,title:"1. NumPy 速查手册",level:1,content:`# 1. NumPy 速查手册
<img src = "/numpy-cheat-sheet.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/what_is_numpy.md"},note:`---
layout: center`,index:2,start:12,end:18,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
# 1. NumPy 速查手册
<img src = "/numpy-cheat-sheet.png" class = "h-90 mx-auto">

<!-- ---
layout: center -->`,title:"1. NumPy 速查手册",level:1,content:`# 1. NumPy 速查手册
<img src = "/numpy-cheat-sheet.png" class = "h-90 mx-auto">`,frontmatter:{},note:`---
layout: center`,index:1,start:12,end:18},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:`<hr>
<p>layout: center</p>
`,id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Lx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:"\n# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```\n",title:"2. 安装",level:1,content:"# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```",frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:3,start:19,end:37,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:"\n# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```\n",title:"2. 安装",level:1,content:"# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```",frontmatter:{},index:2,start:19,end:37},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Hx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：
`,title:"4. NumPy数组 vs Python 列表",level:1,content:`# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：`,frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:4,start:38,end:45,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：
`,title:"4. NumPy数组 vs Python 列表",level:1,content:`# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：`,frontmatter:{},index:3,start:38,end:45},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Kx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
<img src = "/numpy-02.png" class = "h-90 mx-auto">
`,content:'<img src = "/numpy-02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:5,start:46,end:49,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
<img src = "/numpy-02.png" class = "h-90 mx-auto">
`,content:'<img src = "/numpy-02.png" class = "h-90 mx-auto">',frontmatter:{},index:4,start:46,end:49},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Zx,meta:{layout:"center",srcSequence:"./pages/what_is_numpy.md",slide:{raw:`---
layout: center
---

除此之外，numpy数组还具有以下特点：

1. 更紧凑，高维时尤为明显
2. 向量化后运算速度比列表更快
3. 在末尾添加元素时不如列表高效
4. 元素类型一般比较固定
   `,content:`除此之外，numpy数组还具有以下特点：

1. 更紧凑，高维时尤为明显
2. 向量化后运算速度比列表更快
3. 在末尾添加元素时不如列表高效
4. 元素类型一般比较固定`,frontmatter:{layout:"center",srcSequence:"./pages/what_is_numpy.md"},index:6,start:49,end:60,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`---
layout: center
---

除此之外，numpy数组还具有以下特点：

1. 更紧凑，高维时尤为明显
2. 向量化后运算速度比列表更快
3. 在末尾添加元素时不如列表高效
4. 元素类型一般比较固定
   `,content:`除此之外，numpy数组还具有以下特点：

1. 更紧凑，高维时尤为明显
2. 向量化后运算速度比列表更快
3. 在末尾添加元素时不如列表高效
4. 元素类型一般比较固定`,frontmatter:{layout:"center"},index:5,start:49,end:60},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:ew,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
<img src = "/numpy-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-03.png) -->
`,content:'<img src = "/numpy-03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/what_is_numpy.md"},note:"![](./img/numpy-03.png)",index:7,start:61,end:65,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
<img src = "/numpy-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-03.png) -->
`,content:'<img src = "/numpy-03.png" class = "h-90 mx-auto">',frontmatter:{},note:"![](./img/numpy-03.png)",index:6,start:61,end:65},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:`<p><img src="./img/numpy-03.png" alt=""></p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:rw,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:"\n# 5. NumPy的数据类型\n\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``bool_``     | Boolean (True or False) stored as a byte |\n| ``int_``      | Default integer type (same as C ``long``; normally either ``int64`` or ``int32``)|\n| ``intc``      | Identical to C ``int`` (normally ``int32`` or ``int64``)|\n| ``intp``      | Integer used for indexing (same as C ``ssize_t``; normally either ``int32`` or ``int64``)|\n| ``int8``      | Byte (-128 to 127)|\n| ``int16``     | Integer (-32768 to 32767)|\n| ``int32``     | Integer (-2147483648 to 2147483647)|\n| ``int64``     | Integer (-9223372036854775808 to 9223372036854775807)|\n| ``uint8``     | Unsigned integer (0 to 255)|\n\n</font>\n",title:"5. NumPy的数据类型",level:1,content:"# 5. NumPy的数据类型\n\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``bool_``     | Boolean (True or False) stored as a byte |\n| ``int_``      | Default integer type (same as C ``long``; normally either ``int64`` or ``int32``)|\n| ``intc``      | Identical to C ``int`` (normally ``int32`` or ``int64``)|\n| ``intp``      | Integer used for indexing (same as C ``ssize_t``; normally either ``int32`` or ``int64``)|\n| ``int8``      | Byte (-128 to 127)|\n| ``int16``     | Integer (-32768 to 32767)|\n| ``int32``     | Integer (-2147483648 to 2147483647)|\n| ``int64``     | Integer (-9223372036854775808 to 9223372036854775807)|\n| ``uint8``     | Unsigned integer (0 to 255)|\n\n</font>",frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:8,start:66,end:85,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:"\n# 5. NumPy的数据类型\n\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``bool_``     | Boolean (True or False) stored as a byte |\n| ``int_``      | Default integer type (same as C ``long``; normally either ``int64`` or ``int32``)|\n| ``intc``      | Identical to C ``int`` (normally ``int32`` or ``int64``)|\n| ``intp``      | Integer used for indexing (same as C ``ssize_t``; normally either ``int32`` or ``int64``)|\n| ``int8``      | Byte (-128 to 127)|\n| ``int16``     | Integer (-32768 to 32767)|\n| ``int32``     | Integer (-2147483648 to 2147483647)|\n| ``int64``     | Integer (-9223372036854775808 to 9223372036854775807)|\n| ``uint8``     | Unsigned integer (0 to 255)|\n\n</font>\n",title:"5. NumPy的数据类型",level:1,content:"# 5. NumPy的数据类型\n\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``bool_``     | Boolean (True or False) stored as a byte |\n| ``int_``      | Default integer type (same as C ``long``; normally either ``int64`` or ``int32``)|\n| ``intc``      | Identical to C ``int`` (normally ``int32`` or ``int64``)|\n| ``intp``      | Integer used for indexing (same as C ``ssize_t``; normally either ``int32`` or ``int64``)|\n| ``int8``      | Byte (-128 to 127)|\n| ``int16``     | Integer (-32768 to 32767)|\n| ``int32``     | Integer (-2147483648 to 2147483647)|\n| ``int64``     | Integer (-9223372036854775808 to 9223372036854775807)|\n| ``uint8``     | Unsigned integer (0 to 255)|\n\n</font>",frontmatter:{},index:7,start:66,end:85},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:iw,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:"\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``uint16``    | Unsigned integer (0 to 65535)|\n| ``uint32``    | Unsigned integer (0 to 4294967295)|\n| ``uint64``    | Unsigned integer (0 to 18446744073709551615)|\n| ``float_``    | Shorthand for ``float64``.|\n| ``float16``   | Half precision float: sign bit, 5 bits exponent, 10 bits mantissa|\n| ``float32``   | Single precision float: sign bit, 8 bits exponent, 23 bits mantissa|\n| ``float64``   | Double precision float: sign bit, 11 bits exponent, 52 bits mantissa|\n| ``complex_``  | Shorthand for ``complex128``.|\n| ``complex64`` | Complex number, represented by two 32-bit floats|\n| ``complex128``| Complex number, represented by two 64-bit floats|\n\n</font>\n",content:"<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``uint16``    | Unsigned integer (0 to 65535)|\n| ``uint32``    | Unsigned integer (0 to 4294967295)|\n| ``uint64``    | Unsigned integer (0 to 18446744073709551615)|\n| ``float_``    | Shorthand for ``float64``.|\n| ``float16``   | Half precision float: sign bit, 5 bits exponent, 10 bits mantissa|\n| ``float32``   | Single precision float: sign bit, 8 bits exponent, 23 bits mantissa|\n| ``float64``   | Double precision float: sign bit, 11 bits exponent, 52 bits mantissa|\n| ``complex_``  | Shorthand for ``complex128``.|\n| ``complex64`` | Complex number, represented by two 32-bit floats|\n| ``complex128``| Complex number, represented by two 64-bit floats|\n\n</font>",frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:9,start:86,end:104,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:"\n<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``uint16``    | Unsigned integer (0 to 65535)|\n| ``uint32``    | Unsigned integer (0 to 4294967295)|\n| ``uint64``    | Unsigned integer (0 to 18446744073709551615)|\n| ``float_``    | Shorthand for ``float64``.|\n| ``float16``   | Half precision float: sign bit, 5 bits exponent, 10 bits mantissa|\n| ``float32``   | Single precision float: sign bit, 8 bits exponent, 23 bits mantissa|\n| ``float64``   | Double precision float: sign bit, 11 bits exponent, 52 bits mantissa|\n| ``complex_``  | Shorthand for ``complex128``.|\n| ``complex64`` | Complex number, represented by two 32-bit floats|\n| ``complex128``| Complex number, represented by two 64-bit floats|\n\n</font>\n",content:"<font size = 2>\n\n| Data type | Description |\n|---------------|-------------|\n| ``uint16``    | Unsigned integer (0 to 65535)|\n| ``uint32``    | Unsigned integer (0 to 4294967295)|\n| ``uint64``    | Unsigned integer (0 to 18446744073709551615)|\n| ``float_``    | Shorthand for ``float64``.|\n| ``float16``   | Half precision float: sign bit, 5 bits exponent, 10 bits mantissa|\n| ``float32``   | Single precision float: sign bit, 8 bits exponent, 23 bits mantissa|\n| ``float64``   | Double precision float: sign bit, 11 bits exponent, 52 bits mantissa|\n| ``complex_``  | Shorthand for ``complex128``.|\n| ``complex64`` | Complex number, represented by two 32-bit floats|\n| ``complex128``| Complex number, represented by two 64-bit floats|\n\n</font>",frontmatter:{},index:8,start:86,end:104},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:uw,meta:{layout:"center",title:"2. 向量(Vector): 一维数组",srcSequence:"./pages/vector.md",slide:{raw:null,title:"2. 向量(Vector): 一维数组",level:1,content:"# 2. 向量(Vector): 一维数组",frontmatter:{layout:"center",title:"2. 向量(Vector): 一维数组",srcSequence:"./pages/vector.md"},index:10,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`---
layout: center
---

# 2. 向量(Vector): 一维数组
`,title:"2. 向量(Vector): 一维数组",level:1,content:"# 2. 向量(Vector): 一维数组",frontmatter:{layout:"center",title:"2. 向量(Vector): 一维数组"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/vector.md
---
`,content:"",frontmatter:{},index:2,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:xw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 1. 向量初始化

通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组：
<img src = "/numpy-04.png" class = "h-90 mx-auto">

注意，确保列表元素类型相同，否则dtype=’object'，将影响运算甚至产生语法错误。

由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间：
<img src = "/numpy-05.png" class = "h-90 mx-auto">

通过以下方法可以创建一个与某一变量形状一致的空数组：
<img src = "/numpy-07.png" class = "h-90 mx-auto">

`,title:"1. 向量初始化",level:1,content:`# 1. 向量初始化

通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组：
<img src = "/numpy-04.png" class = "h-90 mx-auto">

注意，确保列表元素类型相同，否则dtype=’object'，将影响运算甚至产生语法错误。

由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间：
<img src = "/numpy-05.png" class = "h-90 mx-auto">

通过以下方法可以创建一个与某一变量形状一致的空数组：
<img src = "/numpy-07.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:11,start:7,end:22,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 1. 向量初始化

通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组：
<img src = "/numpy-04.png" class = "h-90 mx-auto">

注意，确保列表元素类型相同，否则dtype=’object'，将影响运算甚至产生语法错误。

由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间：
<img src = "/numpy-05.png" class = "h-90 mx-auto">

通过以下方法可以创建一个与某一变量形状一致的空数组：
<img src = "/numpy-07.png" class = "h-90 mx-auto">

`,title:"1. 向量初始化",level:1,content:`# 1. 向量初始化

通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组：
<img src = "/numpy-04.png" class = "h-90 mx-auto">

注意，确保列表元素类型相同，否则dtype=’object'，将影响运算甚至产生语法错误。

由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间：
<img src = "/numpy-05.png" class = "h-90 mx-auto">

通过以下方法可以创建一个与某一变量形状一致的空数组：
<img src = "/numpy-07.png" class = "h-90 mx-auto">`,frontmatter:{},index:1,start:7,end:22},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Sw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:12,start:23,end:29,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:23,end:29},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Cw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:13,start:30,end:36,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">`,frontmatter:{},index:3,start:30,end:36},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Ow,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。
`,title:"初始化",level:2,content:`## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。`,frontmatter:{srcSequence:"./pages/vector.md"},index:14,start:37,end:41,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。
`,title:"初始化",level:2,content:`## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。`,frontmatter:{},index:4,start:37,end:41},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:qw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">
`,title:"初始化",level:2,content:`## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:15,start:42,end:47,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">
`,title:"初始化",level:2,content:`## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">`,frontmatter:{},index:5,start:42,end:47},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:jw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。
`,title:"初始化",level:2,content:`## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。`,frontmatter:{srcSequence:"./pages/vector.md"},index:16,start:48,end:52,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。
`,title:"初始化",level:2,content:`## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。`,frontmatter:{},index:6,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Gw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-11.png) -->
`,title:"随机数",level:2,content:`## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-11.png)",index:17,start:53,end:60,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-11.png) -->
`,title:"随机数",level:2,content:`## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-11.png)",index:7,start:53,end:60},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-11.png" alt=""></p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Xw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 随机数
There’s also a new interface for random arrays generation. It is:
- better suited for multi-threading,
- somewhat faster,
- more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),
- able to pass two tricky synthetic tests that the old version fails.
`,title:"随机数",level:2,content:`## 随机数
There’s also a new interface for random arrays generation. It is:
- better suited for multi-threading,
- somewhat faster,
- more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),
- able to pass two tricky synthetic tests that the old version fails.`,frontmatter:{srcSequence:"./pages/vector.md"},index:18,start:61,end:69,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 随机数
There’s also a new interface for random arrays generation. It is:
- better suited for multi-threading,
- somewhat faster,
- more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),
- able to pass two tricky synthetic tests that the old version fails.
`,title:"随机数",level:2,content:`## 随机数
There’s also a new interface for random arrays generation. It is:
- better suited for multi-threading,
- somewhat faster,
- more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),
- able to pass two tricky synthetic tests that the old version fails.`,frontmatter:{},index:8,start:61,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:rb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`---
<img src = "/numpy-12.png" class = "h-90 mx-auto">
---

# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">

`,title:"2.向量索引",level:1,content:`# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:19,start:69,end:79,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`---
<img src = "/numpy-12.png" class = "h-90 mx-auto">
---

# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">

`,title:"2.向量索引",level:1,content:`# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">`,frontmatter:{},index:9,start:69,end:79},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:ub,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">

`,title:"切片操作",level:2,content:`## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:20,start:80,end:88,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">

`,title:"切片操作",level:2,content:`## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">`,frontmatter:{},index:10,start:80,end:88},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:gb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).
`,title:"切片操作",level:2,content:`## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).`,frontmatter:{srcSequence:"./pages/vector.md"},index:21,start:89,end:97,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).
`,title:"切片操作",level:2,content:`## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).`,frontmatter:{},index:11,start:89,end:97},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:bb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。
`,title:"布尔索引",level:2,content:`## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。`,frontmatter:{srcSequence:"./pages/vector.md"},index:22,start:98,end:107,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。
`,title:"布尔索引",level:2,content:`## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。`,frontmatter:{},index:12,start:98,end:107},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:kb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-17.png) -->
`,title:"布尔索引",level:2,content:`## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-17.png)",index:23,start:108,end:115,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-17.png) -->
`,title:"布尔索引",level:2,content:`## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-17.png)",index:13,start:108,end:115},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-17.png" alt=""></p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Fb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-18.png) -->
`,title:"3.向量操作",level:1,content:`# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-18.png)",index:24,start:116,end:124,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-18.png) -->
`,title:"3.向量操作",level:1,content:`# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-18.png)",index:14,start:116,end:124},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-18.png" alt=""></p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Lb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-19.png) -->
`,title:"浮点运算",level:2,content:`## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-19.png)",index:25,start:125,end:132,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-19.png) -->
`,title:"浮点运算",level:2,content:`## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-19.png)",index:15,start:125,end:132},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-19.png" alt=""></p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Hb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-20.png) -->
`,title:"数学函数",level:2,content:`## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-20.png)",index:26,start:133,end:140,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-20.png) -->
`,title:"数学函数",level:2,content:`## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-20.png)",index:16,start:133,end:140},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-20.png" alt=""></p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Wb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-21.png) -->
`,title:"向量运算",level:2,content:`## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-21.png)",index:27,start:141,end:148,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-21.png) -->
`,title:"向量运算",level:2,content:`## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-21.png)",index:17,start:141,end:148},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-21.png" alt=""></p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Qb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-22.png) -->
`,title:"三角函数",level:2,content:`## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-22.png)",index:28,start:149,end:156,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-22.png) -->
`,title:"三角函数",level:2,content:`## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-22.png)",index:18,start:149,end:156},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-22.png" alt=""></p>
`,id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:o3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 舍入
数组整体进行四舍五入：
<img src = "/numpy-23.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-23.png) -->

1. floor向上取整 
2. ceil向下取整
3. round四舍五入

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。
`,title:"舍入",level:2,content:`## 舍入
数组整体进行四舍五入：
<img src = "/numpy-23.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-23.png) -->

1. floor向上取整 
2. ceil向下取整
3. round四舍五入

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。`,frontmatter:{srcSequence:"./pages/vector.md"},index:29,start:157,end:170,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 舍入
数组整体进行四舍五入：
<img src = "/numpy-23.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-23.png) -->

1. floor向上取整 
2. ceil向下取整
3. round四舍五入

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。
`,title:"舍入",level:2,content:`## 舍入
数组整体进行四舍五入：
<img src = "/numpy-23.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-23.png) -->

1. floor向上取整 
2. ceil向下取整
3. round四舍五入

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。`,frontmatter:{},index:19,start:157,end:170},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:u3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-24.png) -->
`,title:"最大最小值等",level:2,content:`## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-24.png)",index:30,start:171,end:178,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-24.png) -->
`,title:"最大最小值等",level:2,content:`## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-24.png)",index:20,start:171,end:178},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-24.png" alt=""></p>
`,id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:h3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-25.png) -->
`,title:"算数平均",level:2,content:`<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-25.png)",index:31,start:179,end:187,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-25.png) -->
`,title:"算数平均",level:2,content:`<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-25.png)",index:21,start:179,end:187},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-25.png" alt=""></p>
`,id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:v3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-26.png) -->
`,content:`<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-26.png)",index:32,start:188,end:195,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-26.png) -->
`,content:`<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-26.png)",index:22,start:188,end:195},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-26.png" alt=""></p>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:S3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。
`,title:"排序",level:1,content:`# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。`,frontmatter:{srcSequence:"./pages/vector.md"},index:33,start:196,end:205,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。
`,title:"排序",level:1,content:`# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。`,frontmatter:{},index:23,start:196,end:205},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:F3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 4.查找向量中的元素

不同于Python列表，NumPy数组没有索引方法。
<img src = "/numpy-28.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-28.png) -->

<font size = 2>

- 可以通过\`np.where(a==x)[0][0]\`查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。
- 使用Numba实现加速查找，\`next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)\`，在最坏的情况下，它的速度要比where慢。
- 如果数组是排好序的，使用\`v = np.searchsorted(a, x); return v if a[v]==x else -1\`时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。

</font>

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。
`,title:"4.查找向量中的元素",level:1,content:`# 4.查找向量中的元素

不同于Python列表，NumPy数组没有索引方法。
<img src = "/numpy-28.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-28.png) -->

<font size = 2>

- 可以通过\`np.where(a==x)[0][0]\`查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。
- 使用Numba实现加速查找，\`next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)\`，在最坏的情况下，它的速度要比where慢。
- 如果数组是排好序的，使用\`v = np.searchsorted(a, x); return v if a[v]==x else -1\`时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。

</font>

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。`,frontmatter:{srcSequence:"./pages/vector.md"},index:34,start:206,end:224,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 4.查找向量中的元素

不同于Python列表，NumPy数组没有索引方法。
<img src = "/numpy-28.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-28.png) -->

<font size = 2>

- 可以通过\`np.where(a==x)[0][0]\`查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。
- 使用Numba实现加速查找，\`next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)\`，在最坏的情况下，它的速度要比where慢。
- 如果数组是排好序的，使用\`v = np.searchsorted(a, x); return v if a[v]==x else -1\`时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。

</font>

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。
`,title:"4.查找向量中的元素",level:1,content:`# 4.查找向量中的元素

不同于Python列表，NumPy数组没有索引方法。
<img src = "/numpy-28.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-28.png) -->

<font size = 2>

- 可以通过\`np.where(a==x)[0][0]\`查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。
- 使用Numba实现加速查找，\`next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)\`，在最坏的情况下，它的速度要比where慢。
- 如果数组是排好序的，使用\`v = np.searchsorted(a, x); return v if a[v]==x else -1\`时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。

</font>

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。`,frontmatter:{},index:24,start:206,end:224},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:R3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 5.浮点数比较

np.allclose(a, b)用于容忍误差之内的浮点数比较。
<img src = "/numpy-29.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-29.png) -->

- np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9：\`np.allclose(1e-9,2e-9, atol=1e-17)==False\`。
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。
`,title:"5.浮点数比较",level:1,content:`# 5.浮点数比较

np.allclose(a, b)用于容忍误差之内的浮点数比较。
<img src = "/numpy-29.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-29.png) -->

- np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9：\`np.allclose(1e-9,2e-9, atol=1e-17)==False\`。
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。`,frontmatter:{srcSequence:"./pages/vector.md"},index:35,start:225,end:236,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 5.浮点数比较

np.allclose(a, b)用于容忍误差之内的浮点数比较。
<img src = "/numpy-29.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-29.png) -->

- np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9：\`np.allclose(1e-9,2e-9, atol=1e-17)==False\`。
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。
`,title:"5.浮点数比较",level:1,content:`# 5.浮点数比较

np.allclose(a, b)用于容忍误差之内的浮点数比较。
<img src = "/numpy-29.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-29.png) -->

- np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9：\`np.allclose(1e-9,2e-9, atol=1e-17)==False\`。
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。`,frontmatter:{},index:25,start:225,end:236},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:D3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。`,content:"此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。",frontmatter:{srcSequence:"./pages/vector.md"},index:36,start:237,end:239,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。`,content:"此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。",frontmatter:{},index:26,start:237,end:239},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:V3,meta:{layout:"center",title:"3. 矩阵(Matrix): 二维数组",srcSequence:"./pages/matrix.md",slide:{raw:null,title:"3. 矩阵(Matrix): 二维数组",level:1,content:"# 3. 矩阵(Matrix): 二维数组",frontmatter:{layout:"center",title:"3. 矩阵(Matrix): 二维数组",srcSequence:"./pages/matrix.md"},index:37,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`---
layout: center
---

# 3. 矩阵(Matrix): 二维数组
`,title:"3. 矩阵(Matrix): 二维数组",level:1,content:"# 3. 矩阵(Matrix): 二维数组",frontmatter:{layout:"center",title:"3. 矩阵(Matrix): 二维数组"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/matrix.md
---
`,content:"",frontmatter:{},index:3,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Z3,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。
`,title:"1.矩阵初始化",level:1,content:`# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:38,start:7,end:16,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。
`,title:"1.矩阵初始化",level:1,content:`# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。`,frontmatter:{},index:1,start:7,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:t5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-31.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-31.png)",index:39,start:17,end:25,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-31.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-31.png)",index:2,start:17,end:25},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-31.png" alt=""></p>
`,id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:a5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-32.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-32.png)",index:40,start:26,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-32.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-32.png)",index:3,start:26,end:34},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-32.png" alt=""></p>
`,id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:m5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。
`,title:"索引",level:2,content:`## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:41,start:35,end:45,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。
`,title:"索引",level:2,content:`## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。`,frontmatter:{},index:4,start:35,end:45},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:_5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">
`,title:"2.轴参数",level:1,content:`# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},index:42,start:46,end:52,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">
`,title:"2.轴参数",level:1,content:`# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">`,frontmatter:{},index:5,start:46,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:b5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-35.png) -->
`,title:"3.矩阵运算",level:1,content:`# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-35.png)",index:43,start:53,end:61,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-35.png) -->
`,title:"3.矩阵运算",level:1,content:`# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-35.png)",index:6,start:53,end:61},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-35.png" alt=""></p>
`,id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:k5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-36.png) -->
`,title:"混合运算",level:2,content:`## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-36.png)",index:44,start:62,end:70,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-36.png) -->
`,title:"混合运算",level:2,content:`## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-36.png)",index:7,start:62,end:70},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-36.png" alt=""></p>
`,id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:F5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-37.png) -->
`,title:"乘法",level:2,content:`## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-37.png)",index:45,start:71,end:79,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-37.png) -->
`,title:"乘法",level:2,content:`## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-37.png)",index:8,start:71,end:79},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-37.png" alt=""></p>
`,id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:L5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-38.png) -->
`,title:"4.行向量与列向量",level:1,content:`# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-38.png)",index:46,start:80,end:88,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-38.png) -->
`,title:"4.行向量与列向量",level:1,content:`# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-38.png)",index:9,start:80,end:88},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-38.png" alt=""></p>
`,id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:j5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:47,start:89,end:99,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。`,frontmatter:{},index:10,start:89,end:99},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:G5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-40.png) -->
`,title:"数组形状改变",level:2,content:`## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-40.png)",index:48,start:100,end:108,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-40.png) -->
`,title:"数组形状改变",level:2,content:`## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-40.png)",index:11,start:100,end:108},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-40.png" alt=""></p>
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:X5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:49,start:109,end:116,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。`,frontmatter:{},index:12,start:109,end:116},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:r4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-41.png) -->
`,title:"5.矩阵的操作",level:1,content:`# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-41.png)",index:50,start:117,end:124,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-41.png) -->
`,title:"5.矩阵的操作",level:1,content:`# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-41.png)",index:13,start:117,end:124},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-41.png" alt=""></p>
`,id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:c4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-42.png)",index:51,start:125,end:132,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-42.png)",index:14,start:125,end:132},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-42.png" alt=""></p>
`,id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:f4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42-1.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-42-1.png)",index:52,start:133,end:140,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42-1.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-42-1.png)",index:15,start:133,end:140},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-42-1.png" alt=""></p>
`,id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:y4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-43.png) -->
`,content:`All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-43.png)",index:53,start:141,end:146,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-43.png) -->
`,content:`All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-43.png)",index:16,start:141,end:146},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-43.png" alt=""></p>
`,id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:$4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-44.png) -->
`,title:"矩阵复制",level:2,content:`## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-44.png)",index:54,start:147,end:154,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-44.png) -->
`,title:"矩阵复制",level:2,content:`## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-44.png)",index:17,start:147,end:154},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-44.png" alt=""></p>
`,id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:E4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-45.png) -->
`,title:"矩阵删除",level:2,content:`## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-45.png)",index:55,start:155,end:162,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-45.png) -->
`,title:"矩阵删除",level:2,content:`## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-45.png)",index:18,start:155,end:162},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-45.png" alt=""></p>
`,id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:M4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-46.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-46.png)",index:56,start:163,end:170,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-46.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-46.png)",index:19,start:163,end:170},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-46.png" alt=""></p>
`,id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:R4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-47.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-47.png)",index:57,start:171,end:178,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-47.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-47.png)",index:20,start:171,end:178},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-47.png" alt=""></p>
`,id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:j4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-48.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-48.png)",index:58,start:179,end:186,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-48.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-48.png)",index:21,start:179,end:186},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-48.png" alt=""></p>
`,id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Z4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 6.Meshgrids

广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵：
<img src = "/numpy-49.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-49.png) -->

上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。
<img src = "/numpy-50.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-50.png) -->
`,title:"6.Meshgrids",level:1,content:`# 6.Meshgrids

广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵：
<img src = "/numpy-49.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-49.png) -->

上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。
<img src = "/numpy-50.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-50.png)",index:59,start:187,end:198,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 6.Meshgrids

广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵：
<img src = "/numpy-49.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-49.png) -->

上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。
<img src = "/numpy-50.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-50.png) -->
`,title:"6.Meshgrids",level:1,content:`# 6.Meshgrids

广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵：
<img src = "/numpy-49.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-49.png) -->

上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。
<img src = "/numpy-50.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-50.png)",index:22,start:187,end:198},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-50.png" alt=""></p>
`,id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:n6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-51.png) -->
`,title:"meshgrid",level:2,content:`## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-51.png)",index:60,start:199,end:208,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-51.png) -->
`,title:"meshgrid",level:2,content:`## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-51.png)",index:23,start:199,end:208},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-51.png" alt=""></p>
`,id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:c6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## meshgrid

如果没有indexing ='ij'参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。

除了在二维或三维网格上初始化函数外，网格还可以用于索引数组：
<img src = "/numpy-52.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-52.png) -->

以上方法在稀疏网格中同样适用。
`,title:"meshgrid",level:2,content:`## meshgrid

如果没有indexing ='ij'参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。

除了在二维或三维网格上初始化函数外，网格还可以用于索引数组：
<img src = "/numpy-52.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-52.png) -->

以上方法在稀疏网格中同样适用。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:61,start:209,end:220,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## meshgrid

如果没有indexing ='ij'参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。

除了在二维或三维网格上初始化函数外，网格还可以用于索引数组：
<img src = "/numpy-52.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-52.png) -->

以上方法在稀疏网格中同样适用。
`,title:"meshgrid",level:2,content:`## meshgrid

如果没有indexing ='ij'参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。

除了在二维或三维网格上初始化函数外，网格还可以用于索引数组：
<img src = "/numpy-52.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-52.png) -->

以上方法在稀疏网格中同样适用。`,frontmatter:{},index:24,start:209,end:220},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:f6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-53.png) -->
`,title:"7.矩阵的统计",level:1,content:`# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-53.png)",index:62,start:221,end:228,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-53.png) -->
`,title:"7.矩阵的统计",level:1,content:`# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-53.png)",index:25,start:221,end:228},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-53.png" alt=""></p>
`,id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:x6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-55.png) -->
`,title:"矩阵最大最小值",level:2,content:`## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-55.png)",index:63,start:229,end:238,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-55.png) -->
`,title:"矩阵最大最小值",level:2,content:`## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-55.png)",index:26,start:229,end:238},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-55.png" alt=""></p>
`,id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:P6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-56.png) -->
`,content:`all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-56.png)",index:64,start:239,end:244,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-56.png) -->
`,content:`all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-56.png)",index:27,start:239,end:244},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-56.png" alt=""></p>
`,id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:N6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-57.png) -->
`,title:"8.矩阵排序",level:1,content:`# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-57.png)",index:65,start:245,end:252,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-57.png) -->
`,title:"8.矩阵排序",level:1,content:`# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-57.png)",index:28,start:245,end:252},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-57.png" alt=""></p>
`,id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:I6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 排序

你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：

1、\`a[a[:,0].argsort()]\`表示按第一列对数组进行排序：
<img src = "/numpy-59.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-59.png) -->

其中，argsort返回排序后的原始数组的索引数组。
`,title:"排序",level:2,content:`## 排序

你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：

1、\`a[a[:,0].argsort()]\`表示按第一列对数组进行排序：
<img src = "/numpy-59.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-59.png) -->

其中，argsort返回排序后的原始数组的索引数组。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:66,start:253,end:264,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 排序

你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：

1、\`a[a[:,0].argsort()]\`表示按第一列对数组进行排序：
<img src = "/numpy-59.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-59.png) -->

其中，argsort返回排序后的原始数组的索引数组。
`,title:"排序",level:2,content:`## 排序

你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：

1、\`a[a[:,0].argsort()]\`表示按第一列对数组进行排序：
<img src = "/numpy-59.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-59.png) -->

其中，argsort返回排序后的原始数组的索引数组。`,frontmatter:{},index:29,start:253,end:264},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:V6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 排序


可以重复使用该方法，但千万不要搞混：


a = a[a[:,2].argsort()]

a = a[a[:,1].argsort(kind='stable')]

a = a[a[:,0].argsort(kind='stable')]
<img src = "/numpy-60.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-60.png) -->
`,title:"排序",level:2,content:`## 排序


可以重复使用该方法，但千万不要搞混：


a = a[a[:,2].argsort()]

a = a[a[:,1].argsort(kind='stable')]

a = a[a[:,0].argsort(kind='stable')]
<img src = "/numpy-60.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-60.png)",index:67,start:265,end:280,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 排序


可以重复使用该方法，但千万不要搞混：


a = a[a[:,2].argsort()]

a = a[a[:,1].argsort(kind='stable')]

a = a[a[:,0].argsort(kind='stable')]
<img src = "/numpy-60.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-60.png) -->
`,title:"排序",level:2,content:`## 排序


可以重复使用该方法，但千万不要搞混：


a = a[a[:,2].argsort()]

a = a[a[:,1].argsort(kind='stable')]

a = a[a[:,0].argsort(kind='stable')]
<img src = "/numpy-60.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-60.png)",index:30,start:265,end:280},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-60.png" alt=""></p>
`,id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:J6,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 排序

2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：

a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。
<img src = "/numpy-61.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-61.png) -->

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。
`,title:"排序",level:2,content:`## 排序

2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：

a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。
<img src = "/numpy-61.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-61.png) -->

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:68,start:281,end:293,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 排序

2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：

a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。
<img src = "/numpy-61.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-61.png) -->

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。
`,title:"排序",level:2,content:`## 排序

2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：

a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。
<img src = "/numpy-61.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-61.png) -->

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。`,frontmatter:{},index:31,start:281,end:293},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:e$,meta:{layout:"center",title:"4. 张量(Tensor): 多维数组",srcSequence:"./pages/tensor.md",slide:{raw:null,title:"4. 张量(Tensor): 多维数组",level:1,content:"# 4. 张量(Tensor): 多维数组",frontmatter:{layout:"center",title:"4. 张量(Tensor): 多维数组",srcSequence:"./pages/tensor.md"},index:69,start:0,end:7,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`---
layout: center
---

# 4. 张量(Tensor): 多维数组

`,title:"4. 张量(Tensor): 多维数组",level:1,content:"# 4. 张量(Tensor): 多维数组",frontmatter:{layout:"center",title:"4. 张量(Tensor): 多维数组"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/tensor.md
---
`,content:"",frontmatter:{},index:4,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:o$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-63.png) -->
`,title:"1.初始化",level:1,content:`# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-63.png)",index:70,start:8,end:16,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-63.png) -->
`,title:"1.初始化",level:1,content:`# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-63.png)",index:1,start:8,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-63.png" alt=""></p>
`,id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:p$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-64.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-64.png)",index:71,start:17,end:26,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-64.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-64.png)",index:2,start:17,end:26},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-64.png" alt=""></p>
`,id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:_$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-65.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-65.png)",index:72,start:27,end:37,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-65.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-65.png)",index:3,start:27,end:37},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-65.png" alt=""></p>
`,id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:b$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-66.png) -->
`,title:"RGB",level:2,content:`## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-66.png)",index:73,start:38,end:46,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-66.png) -->
`,title:"RGB",level:2,content:`## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-66.png)",index:4,start:38,end:46},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-66.png" alt=""></p>
`,id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:k$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-67.png) -->
`,title:"concatenate",level:2,content:`## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-67.png)",index:74,start:47,end:55,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-67.png) -->
`,title:"concatenate",level:2,content:`## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-67.png)",index:5,start:47,end:55},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-67.png" alt=""></p>
`,id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:M$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。
`,title:"数组转置",level:2,content:`## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:75,start:56,end:64,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。
`,title:"数组转置",level:2,content:`## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。`,frontmatter:{},index:6,start:56,end:64},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:U$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 数组转置

通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1：
<img src = "/numpy-69.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-69.png) -->

注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。
`,title:"数组转置",level:2,content:`## 数组转置

通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1：
<img src = "/numpy-69.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-69.png) -->

注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:76,start:65,end:77,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 数组转置

通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1：
<img src = "/numpy-69.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-69.png) -->

注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。
`,title:"数组转置",level:2,content:`## 数组转置

通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1：
<img src = "/numpy-69.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-69.png) -->

注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。`,frontmatter:{},index:7,start:65,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:K$,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,title:"einsum",level:2,content:`## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:77,start:78,end:87,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,title:"einsum",level:2,content:`## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,frontmatter:{},index:8,start:78,end:87},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:J$,meta:{layout:"center",title:"5. 广播(Broadcast)",srcSequence:"./pages/broadcast.md",slide:{raw:null,title:"5. 广播(Broadcast)",level:1,content:`# 5. 广播(Broadcast)

本文参考: 

1. [Broadcasting in NumPy](https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73)`,frontmatter:{layout:"center",title:"5. 广播(Broadcast)",srcSequence:"./pages/broadcast.md"},index:78,start:0,end:10,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`---
layout: center
---

# 5. 广播(Broadcast)

本文参考: 

1. [Broadcasting in NumPy](https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73)
`,title:"5. 广播(Broadcast)",level:1,content:`# 5. 广播(Broadcast)

本文参考: 

1. [Broadcasting in NumPy](https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73)`,frontmatter:{layout:"center",title:"5. 广播(Broadcast)"},index:0,start:0,end:10},inline:{raw:`---
src: ./pages/broadcast.md
---
`,content:"",frontmatter:{},index:5,start:52,end:56},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:r9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
# 1. 什么是广播?
广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。
当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。

最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：

<img src = "/numpy-broadcast-01.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-01.png) -->
`,title:"1. 什么是广播?",level:1,content:`# 1. 什么是广播?
广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。
当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。

最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：

<img src = "/numpy-broadcast-01.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-01.png)",index:79,start:11,end:21,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
# 1. 什么是广播?
广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。
当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。

最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：

<img src = "/numpy-broadcast-01.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-01.png) -->
`,title:"1. 什么是广播?",level:1,content:`# 1. 什么是广播?
广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。
当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。

最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：

<img src = "/numpy-broadcast-01.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-broadcast-01.png)",index:1,start:11,end:21},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:`<p><img src="./img/numpy-broadcast-01.png" alt=""></p>
`,id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:u9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-02.png) -->
`,title:"二维数组的广播",level:2,content:`## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-02.png)",index:80,start:22,end:31,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-02.png) -->
`,title:"二维数组的广播",level:2,content:`## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-broadcast-02.png)",index:2,start:22,end:31},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:`<p><img src="./img/numpy-broadcast-02.png" alt=""></p>
`,id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:h9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-03.png) -->
`,title:"三维数组的广播",level:2,content:`## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-03.png)",index:81,start:32,end:39,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-03.png) -->
`,title:"三维数组的广播",level:2,content:`## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-broadcast-03.png)",index:3,start:32,end:39},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:`<p><img src="./img/numpy-broadcast-03.png" alt=""></p>
`,id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:$9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
# 2. 广播的规则
在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。
- 规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。
- 规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。
- 规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。
来源于 -- [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)

根据规则之前三维数组的案例可解释如下：
<img src = "/numpy-broadcast-04.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-04.png) -->

为了更清楚地理解这些规则，来看几个具体的示例。
`,title:"2. 广播的规则",level:1,content:`# 2. 广播的规则
在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。
- 规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。
- 规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。
- 规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。
来源于 -- [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)

根据规则之前三维数组的案例可解释如下：
<img src = "/numpy-broadcast-04.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-04.png) -->

为了更清楚地理解这些规则，来看几个具体的示例。`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:82,start:40,end:54,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
# 2. 广播的规则
在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。
- 规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。
- 规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。
- 规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。
来源于 -- [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)

根据规则之前三维数组的案例可解释如下：
<img src = "/numpy-broadcast-04.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-04.png) -->

为了更清楚地理解这些规则，来看几个具体的示例。
`,title:"2. 广播的规则",level:1,content:`# 2. 广播的规则
在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。
- 规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。
- 规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。
- 规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。
来源于 -- [《Python Data Science Handbook》](https://www.oreilly.com/library/view/python-data-science/9781491912126/)

根据规则之前三维数组的案例可解释如下：
<img src = "/numpy-broadcast-04.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-04.png) -->

为了更清楚地理解这些规则，来看几个具体的示例。`,frontmatter:{},index:4,start:40,end:54},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:E9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 示例1

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((2, 3))
a = np.arange(3)

print(M + a)
print(M.shape)
print(a.shape)
\`\`\`


\`\`\`
[[1. 2. 3.]
 [1. 2. 3.]]
(2, 3)
(3,)
\`\`\`
`,title:"示例1",level:2,content:`## 示例1

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((2, 3))
a = np.arange(3)

print(M + a)
print(M.shape)
print(a.shape)
\`\`\`


\`\`\`
[[1. 2. 3.]
 [1. 2. 3.]]
(2, 3)
(3,)
\`\`\``,frontmatter:{srcSequence:"./pages/broadcast.md"},index:83,start:55,end:77,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 示例1

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((2, 3))
a = np.arange(3)

print(M + a)
print(M.shape)
print(a.shape)
\`\`\`


\`\`\`
[[1. 2. 3.]
 [1. 2. 3.]]
(2, 3)
(3,)
\`\`\`
`,title:"示例1",level:2,content:`## 示例1

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((2, 3))
a = np.arange(3)

print(M + a)
print(M.shape)
print(a.shape)
\`\`\`


\`\`\`
[[1. 2. 3.]
 [1. 2. 3.]]
(2, 3)
(3,)
\`\`\``,frontmatter:{},index:5,start:55,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:I9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：

M.shape -> (2, 3)

a.shape -> (1, 3)

根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：

M.shape -> (2, 3)

a.shape -> (2, 3)
`,content:`可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：

M.shape -> (2, 3)

a.shape -> (1, 3)

根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：

M.shape -> (2, 3)

a.shape -> (2, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:84,start:78,end:91,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：

M.shape -> (2, 3)

a.shape -> (1, 3)

根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：

M.shape -> (2, 3)

a.shape -> (2, 3)
`,content:`可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：

M.shape -> (2, 3)

a.shape -> (1, 3)

根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：

M.shape -> (2, 3)

a.shape -> (2, 3)`,frontmatter:{},index:6,start:78,end:91},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:K9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 示例2


\`\`\`python showLineNumbers
import numpy as np

a = np.arange(3).reshape((3, 1))
b = np.arange(3)

print(a + b)
print(a.shape)
print(b.shape)
\`\`\`
规则1告诉我们，需要用1将b的形状补全:

a.shape -> (3, 1)

b.shape -> (1, 3)

规则2告诉我们，需要更新这两个数组的维度来互相匹配:


a.shape -> (3, 3)

b.shape -> (3, 3)
`,title:"示例2",level:2,content:`## 示例2


\`\`\`python showLineNumbers
import numpy as np

a = np.arange(3).reshape((3, 1))
b = np.arange(3)

print(a + b)
print(a.shape)
print(b.shape)
\`\`\`
规则1告诉我们，需要用1将b的形状补全:

a.shape -> (3, 1)

b.shape -> (1, 3)

规则2告诉我们，需要更新这两个数组的维度来互相匹配:


a.shape -> (3, 3)

b.shape -> (3, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:85,start:92,end:119,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 示例2


\`\`\`python showLineNumbers
import numpy as np

a = np.arange(3).reshape((3, 1))
b = np.arange(3)

print(a + b)
print(a.shape)
print(b.shape)
\`\`\`
规则1告诉我们，需要用1将b的形状补全:

a.shape -> (3, 1)

b.shape -> (1, 3)

规则2告诉我们，需要更新这两个数组的维度来互相匹配:


a.shape -> (3, 3)

b.shape -> (3, 3)
`,title:"示例2",level:2,content:`## 示例2


\`\`\`python showLineNumbers
import numpy as np

a = np.arange(3).reshape((3, 1))
b = np.arange(3)

print(a + b)
print(a.shape)
print(b.shape)
\`\`\`
规则1告诉我们，需要用1将b的形状补全:

a.shape -> (3, 1)

b.shape -> (1, 3)

规则2告诉我们，需要更新这两个数组的维度来互相匹配:


a.shape -> (3, 3)

b.shape -> (3, 3)`,frontmatter:{},index:7,start:92,end:119},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:Z9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
因为结果匹配，所以这两个形状是兼容的，可以看到一下结果: 

\`\`\`
[[0 1 2]
 [1 2 3]
 [2 3 4]]
(3, 1)
(3,)
\`\`\`
`,content:`因为结果匹配，所以这两个形状是兼容的，可以看到一下结果: 

\`\`\`
[[0 1 2]
 [1 2 3]
 [2 3 4]]
(3, 1)
(3,)
\`\`\``,frontmatter:{srcSequence:"./pages/broadcast.md"},index:86,start:120,end:131,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
因为结果匹配，所以这两个形状是兼容的，可以看到一下结果: 

\`\`\`
[[0 1 2]
 [1 2 3]
 [2 3 4]]
(3, 1)
(3,)
\`\`\`
`,content:`因为结果匹配，所以这两个形状是兼容的，可以看到一下结果: 

\`\`\`
[[0 1 2]
 [1 2 3]
 [2 3 4]]
(3, 1)
(3,)
\`\`\``,frontmatter:{},index:8,start:120,end:131},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:rP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 示例3

现在来看一个两组不兼容的示例:

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((3, 2))
a = np.arange(3)

print(M + a)
\`\`\`
和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:

M.shape = (3, 2)

a.shape = (3,)
`,title:"示例3",level:2,content:`## 示例3

现在来看一个两组不兼容的示例:

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((3, 2))
a = np.arange(3)

print(M + a)
\`\`\`
和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:

M.shape = (3, 2)

a.shape = (3,)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:87,start:132,end:151,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 示例3

现在来看一个两组不兼容的示例:

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((3, 2))
a = np.arange(3)

print(M + a)
\`\`\`
和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:

M.shape = (3, 2)

a.shape = (3,)
`,title:"示例3",level:2,content:`## 示例3

现在来看一个两组不兼容的示例:

\`\`\`python showLineNumbers
import numpy as np

M = np.ones((3, 2))
a = np.arange(3)

print(M + a)
\`\`\`
和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:

M.shape = (3, 2)

a.shape = (3,)`,frontmatter:{},index:9,start:132,end:151},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:mP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
规则1告诉我们，a数组的形状必须用1进行补全：

M.shape -> (3, 2)

a.shape -> (1, 3)

根据规则2，a数组的第一个维度进行扩展以匹配M的维度：

M.shape -> (3, 2)

a.shape -> (3, 3)
`,content:`规则1告诉我们，a数组的形状必须用1进行补全：

M.shape -> (3, 2)

a.shape -> (1, 3)

根据规则2，a数组的第一个维度进行扩展以匹配M的维度：

M.shape -> (3, 2)

a.shape -> (3, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:88,start:152,end:165,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
规则1告诉我们，a数组的形状必须用1进行补全：

M.shape -> (3, 2)

a.shape -> (1, 3)

根据规则2，a数组的第一个维度进行扩展以匹配M的维度：

M.shape -> (3, 2)

a.shape -> (3, 3)
`,content:`规则1告诉我们，a数组的形状必须用1进行补全：

M.shape -> (3, 2)

a.shape -> (1, 3)

根据规则2，a数组的第一个维度进行扩展以匹配M的维度：

M.shape -> (3, 2)

a.shape -> (3, 3)`,frontmatter:{},index:10,start:152,end:165},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:TP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：

\`\`\`python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
Cell In[5], line 6
      3 M = np.ones((3, 2))
      4 a = np.arange(3)
----> 6 print(M + a)

ValueError: operands could not be broadcast together with shapes (3,2) (3,) 
\`\`\`

请注意，这里可能发生的混淆在于：

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**


`,content:`现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：

\`\`\`python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
Cell In[5], line 6
      3 M = np.ones((3, 2))
      4 a = np.arange(3)
----> 6 print(M + a)

ValueError: operands could not be broadcast together with shapes (3,2) (3,) 
\`\`\`

请注意，这里可能发生的混淆在于：

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:89,start:166,end:186,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：

\`\`\`python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
Cell In[5], line 6
      3 M = np.ones((3, 2))
      4 a = np.arange(3)
----> 6 print(M + a)

ValueError: operands could not be broadcast together with shapes (3,2) (3,) 
\`\`\`

请注意，这里可能发生的混淆在于：

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**


`,content:`现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：

\`\`\`python
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
Cell In[5], line 6
      3 M = np.ones((3, 2))
      4 a = np.arange(3)
----> 6 print(M + a)

ValueError: operands could not be broadcast together with shapes (3,2) (3,) 
\`\`\`

请注意，这里可能发生的混淆在于：

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**`,frontmatter:{},index:11,start:166,end:186},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:OP,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Thanks`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center"},index:90,start:56,end:61,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",component:U2,meta:{layout:"end"}}],ze=AP,Rs=[{name:"play",path:"/",component:lv,children:[...ze]},{name:"print",path:"/print",component:L2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!Ls.remote||Ls.remote===t.query.password)return!0;if(Ls.remote&&t.query.password===void 0){const n=prompt("Enter password");if(Ls.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};Rs.push({path:"/presenter/print",component:()=>$n(()=>import("./PresenterPrint-514eece7.js"),["assets/PresenterPrint-514eece7.js","assets/NoteDisplay-19f7bd39.js","assets/index-6e6bf4f5.js"])}),Rs.push({name:"notes",path:"/notes",component:()=>$n(()=>import("./NotesView-92000e17.js"),["assets/NotesView-92000e17.js","assets/NoteDisplay-19f7bd39.js","assets/index-6e6bf4f5.js"]),beforeEnter:e}),Rs.push({name:"presenter",path:"/presenter/:no",component:()=>$n(()=>import("./Presenter-342ebc1e.js"),["assets/Presenter-342ebc1e.js","assets/NoteDisplay-19f7bd39.js","assets/DrawingControls-073b4955.js","assets/index-6e6bf4f5.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:e}),Rs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Pn=R_({history:Lg("/math201/slides/numpy"),routes:Rs});function IP(e,t,{mode:n="replace"}={}){return A({get(){const s=Pn.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){Tt(()=>{Pn[b(n)]({query:{...Pn.currentRoute.value.query,[e]:s}})})}})}const sp=le(0);Tt(()=>{Pn.afterEach(async()=>{await Tt(),sp.value+=1})});const rp=le(0),Ot=A(()=>Pn.currentRoute.value),xs=A(()=>Ot.value.query.print!==void 0),LP=A(()=>Ot.value.query.print==="clicks"),Qt=A(()=>Ot.value.query.embedded!==void 0),Nt=A(()=>Ot.value.path.startsWith("/presenter")),$S=A(()=>Ot.value.path.startsWith("/notes")),op=A(()=>xs.value&&!LP.value),ua=A(()=>Ot.value.query.password),RP=A(()=>!Nt.value&&(!Te.remote||ua.value===Te.remote)),Dl=IP("clicks","0"),ap=A(()=>ze.length-1),qP=A(()=>Ot.value.path),Ge=A(()=>parseInt(qP.value.split(/\//g).slice(-1)[0])||1);A(()=>Ya(Ge.value));const at=A(()=>ze.find(e=>e.path===`${Ge.value}`));A(()=>{var e,t,n;return(n=(t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});A(()=>{var e,t;return((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ge.value===1?"cover":"default")});const No=A(()=>ze.find(e=>e.path===`${Math.min(ze.length,Ge.value+1)}`)),UP=A(()=>ze.find(e=>e.path===`${Math.max(1,Ge.value-1)}`)),DP=A(()=>{var e,t;return sp.value,((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Zn=A({get(){if(op.value)return 99999;let e=+(Dl.value||0);return isNaN(e)&&(e=0),e},set(e){Dl.value=e.toString()}}),zr=A(()=>{var e,t;return+(((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.clicks)??DP.value.length)}),HP=A(()=>Ge.value<ze.length-1||Zn.value<zr.value),jP=A(()=>Ge.value>1||Zn.value>0),VP=A(()=>ze.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Za(e,t),e),[])),zP=A(()=>Ja(VP.value,at.value));A(()=>Qa(zP.value));const KP=A(()=>ZP(rp.value,at.value,UP.value));Ue(at,(e,t)=>{rp.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function zn(){zr.value<=Zn.value?Kr():Zn.value+=1}async function Kn(){Zn.value<=0?await Wr():Zn.value-=1}function Ya(e){return Nt.value?`/presenter/${e}`:`/${e}`}function Kr(){const e=Math.min(ze.length,Ge.value+1);return ws(e)}async function Wr(e=!0){const t=Math.max(1,Ge.value-1);await ws(t),e&&zr.value&&Pn.replace({query:{...Ot.value.query,clicks:zr.value}})}function ws(e,t){return Pn.push({path:Ya(e),query:{...Ot.value.query,clicks:t}})}function WP(e){const t=le(0),{direction:n,distanceX:s,distanceY:r}=tg(e,{onSwipeStart(a){a.pointerType==="touch"&&(sr.value||(t.value=Yo()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||sr.value)return;const i=Math.abs(s.value),l=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===tn.LEFT?zn():Kn():(l/window.innerHeight>.4||l>200)&&(n.value===tn.DOWN?Wr():Kr())}})}async function Hl(){const{saveAs:e}=await $n(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(pu(Te.download)?Te.download:Te.exportFilename?`${Te.exportFilename}.pdf`:"/math201/slides/numpyslidev-exported.pdf",`${Te.title}.pdf`)}async function PS(e){var t,n;if(e==null){const s=(n=(t=at.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Za(e,t,n=1){var r,a,i,l,c;const s=(a=(r=t.meta)==null?void 0:r.slide)==null?void 0:a.level;s&&s>n&&e.length>0?Za(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Ja(e,t,n=!1,s){return e.map(r=>{const a={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return a.children.length>0&&(a.children=Ja(a.children,t,a.active||a.hasActiveParent,a)),s&&(a.active||a.activeParent)&&(s.activeParent=!0),a})}function Qa(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Qa(n.children,t+1)}))}const GP={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function YP(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:GP[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(a=>a.trim());n=t?r:s}if(n)return{...e,name:n}}function ZP(e,t,n){var r,a;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(a=t==null?void 0:t.meta)==null?void 0:a.transition;return s||(s=Te.transition),YP(s,e<0)}export{ou as $,dp as A,le as B,fS as C,dS as D,Fe as E,Ne as F,_S as G,bt as H,hS as I,Jl as J,Sp as K,ur as L,Tt as M,Ca as N,Ia as O,Yn as P,va as Q,eS as R,Wt as S,lS as T,JP as U,op as V,Cf as W,Tf as X,iu as Y,au as Z,T as _,mS as a,Ln as a$,kf as a0,oS as a1,aS as a2,iS as a3,sS as a4,rS as a5,k2 as a6,E2 as a7,Hl as a8,zn as a9,E0 as aA,$0 as aB,xS as aC,at as aD,T1 as aE,WP as aF,yS as aG,wS as aH,M as aI,Ku as aJ,ot as aK,V1 as aL,zr as aM,HP as aN,No as aO,sr as aP,ko as aQ,ov as aR,za as aS,Ka as aT,QP as aU,XP as aV,ev as aW,ny as aX,gS as aY,zt as aZ,Ms as a_,Kr as aa,PS as ab,Kn as ac,Wr as ad,Ot as ae,nS as af,bs as ag,Hm as ah,Dm as ai,Se as aj,vS as ak,lm as al,o as am,sn as an,pr as ao,tt as ap,ze as aq,ap as ar,x as as,re as at,Ra as au,je as av,At as aw,B as ax,bo as ay,Ru as az,Ge as b,Ht as b0,ia as b1,y1 as b2,v1 as b3,x1 as b4,b1 as b5,Ta as b6,ru as b7,bS as b8,ct as b9,br as ba,Ly as bb,lu as bc,$1 as bd,Te as c,Zn as d,$S as e,Nt as f,Ya as g,ke as h,cS as i,S as j,C as k,oo as l,X as m,ae as n,uS as o,pS as p,y as q,Pn as r,Qe as s,co as t,tS as u,Bi as v,Ue as w,A as x,Na as y,b as z};
