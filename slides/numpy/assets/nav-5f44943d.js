function En(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function tt(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=qe(s)?up(s):tt(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(qe(e))return e;if(Ce(e))return e}}const ip=/;(?![^(]*\))/g,lp=/:([^]+)/,cp=/\/\*.*?\*\//gs;function up(e){const t={};return e.replace(cp,"").split(ip).forEach(n=>{if(n){const s=n.split(lp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function je(e){let t="";if(qe(e))t=e;else if(ue(e))for(let n=0;n<e.length;n++){const s=je(e[n]);s&&(t+=s+" ")}else if(Ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function j(e){if(!e)return null;let{class:t,style:n}=e;return t&&!qe(t)&&(e.class=je(t)),n&&(e.style=tt(n)),e}const pp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",mp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",dp=En(pp),fp=En(mp),hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=En(hp);function Hl(e){return!!e||e===""}const sn=e=>qe(e)?e:e==null?"":ue(e)||Ce(e)&&(e.toString===Kl||!fe(e.toString))?JSON.stringify(e,jl,2):String(e),jl=(e,t)=>t&&t.__v_isRef?jl(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:zl(t)?{[`Set(${t.size})`]:[...t.values()]}:Ce(t)&&!ue(t)&&!Wl(t)?String(t):t,Ae=Object.freeze({}),ms=Object.freeze([]),pt=()=>{},Vl=()=>!1,_p=/^on[^a-z]/,ar=e=>_p.test(e),Fr=e=>e.startsWith("onUpdate:"),De=Object.assign,ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yp=Object.prototype.hasOwnProperty,xe=(e,t)=>yp.call(e,t),ue=Array.isArray,Rn=e=>ir(e)==="[object Map]",zl=e=>ir(e)==="[object Set]",vp=e=>ir(e)==="[object RegExp]",fe=e=>typeof e=="function",qe=e=>typeof e=="string",pa=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",ma=e=>Ce(e)&&fe(e.then)&&fe(e.catch),Kl=Object.prototype.toString,ir=e=>Kl.call(e),da=e=>ir(e).slice(8,-1),Wl=e=>ir(e)==="[object Object]",fa=e=>qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$r=En(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xp=En("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wp=/-(\w)/g,jt=Gr(e=>e.replace(wp,(t,n)=>n?n.toUpperCase():"")),bp=/\B([A-Z])/g,rn=Gr(e=>e.replace(bp,"-$1").toLowerCase()),Wn=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tn=Gr(e=>e?`on${Wn(e)}`:""),Ks=(e,t)=>!Object.is(e,t),gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},No=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$p=e=>{const t=qe(e)?Number(e):NaN;return isNaN(t)?e:t};let ti;const Gl=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let ht;class Yl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!t&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ht;try{return ht=this,t()}finally{ht=n}}else Mr("cannot run an inactive effect scope.")}on(){ht=this}off(){ht=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function A6(e){return new Yl(e)}function Pp(e,t=ht){t&&t.active&&t.effects.push(e)}function Zl(){return ht}function Sp(e){ht?ht.cleanups.push(e):Mr("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Jl=e=>(e.w&Sn)>0,Ql=e=>(e.n&Sn)>0,kp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Sn},Bp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Jl(r)&&!Ql(r)?r.delete(e):t[n++]=r,r.w&=~Sn,r.n&=~Sn}t.length=n}},Or=new WeakMap;let Os=0,Sn=1;const Co=30;let it;const qn=Symbol("iterate"),Fo=Symbol("Map key iterate");class ga{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pp(this,s)}run(){if(!this.active)return this.fn();let t=it,n=vn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=it,it=this,vn=!0,Sn=1<<++Os,Os<=Co?kp(this):ni(this),this.fn()}finally{Os<=Co&&Bp(this),Sn=1<<--Os,it=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(ni(this),this.onStop&&this.onStop(),this.active=!1)}}function ni(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let vn=!0;const Xl=[];function Jn(){Xl.push(vn),vn=!1}function Qn(){const e=Xl.pop();vn=e===void 0?!0:e}function mt(e,t,n){if(vn&&it){let s=Or.get(e);s||Or.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=ha()),ec(r,{effect:it,target:e,type:t,key:n})}}function ec(e,t){let n=!1;Os<=Co?Ql(e)||(e.n|=Sn,n=!Jl(e)):n=!e.has(it),n&&(e.add(it),it.deps.push(e),it.onTrack&&it.onTrack(Object.assign({effect:it},t)))}function on(e,t,n,s,r,o){const i=Or.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&ue(e)){const u=Number(s);i.forEach((p,m)=>{(m==="length"||m>=u)&&l.push(p)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":ue(e)?fa(n)&&l.push(i.get("length")):(l.push(i.get(qn)),Rn(e)&&l.push(i.get(Fo)));break;case"delete":ue(e)||(l.push(i.get(qn)),Rn(e)&&l.push(i.get(Fo)));break;case"set":Rn(e)&&l.push(i.get(qn));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:o};if(l.length===1)l[0]&&To(l[0],c);else{const u=[];for(const p of l)p&&u.push(...p);To(ha(u),c)}}function To(e,t){const n=ue(e)?e:[...e];for(const s of n)s.computed&&si(s,t);for(const s of n)s.computed||si(s,t)}function si(e,t){(e!==it||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(De({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Ep(e,t){var n;return(n=Or.get(e))===null||n===void 0?void 0:n.get(t)}const Np=En("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pa)),Cp=Yr(),Fp=Yr(!1,!0),Tp=Yr(!0),Mp=Yr(!0,!0),ri=Op();function Op(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let o=0,i=this.length;o<i;o++)mt(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jn();const s=he(this)[t].apply(this,n);return Qn(),s}}),e}function Ap(e){const t=he(this);return mt(t,"has",e),t.hasOwnProperty(e)}function Yr(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?cc:lc:t?ic:ac).get(s))return s;const i=ue(s);if(!e){if(i&&xe(ri,r))return Reflect.get(ri,r,o);if(r==="hasOwnProperty")return Ap}const l=Reflect.get(s,r,o);return(pa(r)?tc.has(r):Np(r))||(e||mt(s,"get",r),t)?l:Se(l)?i&&fa(r)?l:l.value:Ce(l)?e?Ut(l):Qe(l):l}}const Lp=nc(),Ip=nc(!0);function nc(e=!1){return function(n,s,r,o){let i=n[s];if(kn(i)&&Se(i)&&!Se(r))return!1;if(!e&&(!Ar(r)&&!kn(r)&&(i=he(i),r=he(r)),!ue(n)&&Se(i)&&!Se(r)))return i.value=r,!0;const l=ue(n)&&fa(s)?Number(s)<n.length:xe(n,s),c=Reflect.set(n,s,r,o);return n===he(o)&&(l?Ks(r,i)&&on(n,"set",s,r,i):on(n,"add",s,r)),c}}function Rp(e,t){const n=xe(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&on(e,"delete",t,void 0,s),r}function qp(e,t){const n=Reflect.has(e,t);return(!pa(t)||!tc.has(t))&&mt(e,"has",t),n}function Up(e){return mt(e,"iterate",ue(e)?"length":qn),Reflect.ownKeys(e)}const sc={get:Cp,set:Lp,deleteProperty:Rp,has:qp,ownKeys:Up},rc={get:Tp,set(e,t){return Mr(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Mr(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Dp=De({},sc,{get:Fp,set:Ip}),Hp=De({},rc,{get:Mp}),_a=e=>e,Zr=e=>Reflect.getPrototypeOf(e);function fr(e,t,n=!1,s=!1){e=e.__v_raw;const r=he(e),o=he(t);n||(t!==o&&mt(r,"get",t),mt(r,"get",o));const{has:i}=Zr(r),l=s?_a:n?va:Ws;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function hr(e,t=!1){const n=this.__v_raw,s=he(n),r=he(e);return t||(e!==r&&mt(s,"has",e),mt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function gr(e,t=!1){return e=e.__v_raw,!t&&mt(he(e),"iterate",qn),Reflect.get(e,"size",e)}function oi(e){e=he(e);const t=he(this);return Zr(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function ai(e,t){t=he(t);const n=he(this),{has:s,get:r}=Zr(n);let o=s.call(n,e);o?oc(n,s,e):(e=he(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?Ks(t,i)&&on(n,"set",e,t,i):on(n,"add",e,t),this}function ii(e){const t=he(this),{has:n,get:s}=Zr(t);let r=n.call(t,e);r?oc(t,n,e):(e=he(e),r=n.call(t,e));const o=s?s.call(t,e):void 0,i=t.delete(e);return r&&on(t,"delete",e,void 0,o),i}function li(){const e=he(this),t=e.size!==0,n=Rn(e)?new Map(e):new Set(e),s=e.clear();return t&&on(e,"clear",void 0,void 0,n),s}function _r(e,t){return function(s,r){const o=this,i=o.__v_raw,l=he(i),c=t?_a:e?va:Ws;return!e&&mt(l,"iterate",qn),i.forEach((u,p)=>s.call(r,c(u),c(p),o))}}function yr(e,t,n){return function(...s){const r=this.__v_raw,o=he(r),i=Rn(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...s),p=n?_a:t?va:Ws;return!t&&mt(o,"iterate",c?Fo:qn),{next(){const{value:m,done:d}=u.next();return d?{value:m,done:d}:{value:l?[p(m[0]),p(m[1])]:p(m),done:d}},[Symbol.iterator](){return this}}}}function cn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Wn(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function jp(){const e={get(o){return fr(this,o)},get size(){return gr(this)},has:hr,add:oi,set:ai,delete:ii,clear:li,forEach:_r(!1,!1)},t={get(o){return fr(this,o,!1,!0)},get size(){return gr(this)},has:hr,add:oi,set:ai,delete:ii,clear:li,forEach:_r(!1,!0)},n={get(o){return fr(this,o,!0)},get size(){return gr(this,!0)},has(o){return hr.call(this,o,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:_r(!0,!1)},s={get(o){return fr(this,o,!0,!0)},get size(){return gr(this,!0)},has(o){return hr.call(this,o,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:_r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=yr(o,!1,!1),n[o]=yr(o,!0,!1),t[o]=yr(o,!1,!0),s[o]=yr(o,!0,!0)}),[e,n,t,s]}const[Vp,zp,Kp,Wp]=jp();function Jr(e,t){const n=t?e?Wp:Kp:e?zp:Vp;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,o)}const Gp={get:Jr(!1,!1)},Yp={get:Jr(!1,!0)},Zp={get:Jr(!0,!1)},Jp={get:Jr(!0,!0)};function oc(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const r=da(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ac=new WeakMap,ic=new WeakMap,lc=new WeakMap,cc=new WeakMap;function Qp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xp(e){return e.__v_skip||!Object.isExtensible(e)?0:Qp(da(e))}function Qe(e){return kn(e)?e:Qr(e,!1,sc,Gp,ac)}function em(e){return Qr(e,!1,Dp,Yp,ic)}function Ut(e){return Qr(e,!0,rc,Zp,lc)}function us(e){return Qr(e,!0,Hp,Jp,cc)}function Qr(e,t,n,s,r){if(!Ce(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Xp(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Un(e){return kn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function Lr(e){return Un(e)||kn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ya(e){return Tr(e,"__v_skip",!0),e}const Ws=e=>Ce(e)?Qe(e):e,va=e=>Ce(e)?Ut(e):e;function xa(e){vn&&it&&(e=he(e),ec(e.dep||(e.dep=ha()),{target:e,type:"get",key:"value"}))}function wa(e,t){e=he(e);const n=e.dep;n&&To(n,{target:e,type:"set",key:"value",newValue:t})}function Se(e){return!!(e&&e.__v_isRef===!0)}function le(e){return uc(e,!1)}function Vt(e){return uc(e,!0)}function uc(e,t){return Se(e)?e:new tm(e,t)}class tm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:Ws(t)}get value(){return xa(this),this._value}set value(t){const n=this.__v_isShallow||Ar(t)||kn(t);t=n?t:he(t),Ks(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ws(t),wa(this,t))}}function b(e){return Se(e)?e.value:e}const nm={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function pc(e){return Un(e)?e:new Proxy(e,nm)}class sm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>xa(this),()=>wa(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function mc(e){return new sm(e)}function rm(e){Lr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(e)?new Array(e.length):{};for(const n in e)t[n]=am(e,n);return t}class om{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ep(he(this._object),this._key)}}function am(e,t,n){const s=e[t];return Se(s)?s:new om(e,t,n)}var dc;class im{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dc]=!1,this._dirty=!0,this.effect=new ga(t,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=he(this);return xa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}dc="__v_isReadonly";function lm(e,t,n=!1){let s,r;const o=fe(e);o?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const i=new im(s,r,o||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const Dn=[];function Pr(e){Dn.push(e)}function Sr(){Dn.pop()}function I(e,...t){Jn();const n=Dn.length?Dn[Dn.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=cm();if(s)nn(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:o})=>`at <${io(n,o.type)}>`).join(`
`),r]);else{const o=[`[Vue warn]: ${e}`,...t];r.length&&o.push(`
`,...um(r)),console.warn(...o)}Qn()}function cm(){let e=Dn[Dn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function um(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...pm(n))}),t}function pm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${io(e.component,e.type,s)}`,o=">"+n;return e.props?[r,...mm(e.props),o]:[r+o]}function mm(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...fc(s,e[s]))}),n.length>3&&t.push(" ..."),t}function fc(e,t,n){return qe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Se(t)?(t=fc(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):fe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function dm(e,t){e!==void 0&&(typeof e!="number"?I(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&I(`${t} is NaN - the duration expression might be incorrect.`))}const ba={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function nn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){Xr(o,t,n)}return r}function $t(e,t,n,s){if(fe(e)){const o=nn(e,t,n,s);return o&&ma(o)&&o.catch(i=>{Xr(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push($t(e[o],t,n,s));return r}function Xr(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=ba[n];for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,l)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,i,l]);return}}fm(e,n,r,s)}function fm(e,t,n,s=!0){{const r=ba[t];if(n&&Pr(n),I(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Sr(),s)throw e;console.error(e)}}let Gs=!1,Mo=!1;const et=[];let Rt=0;const ds=[];let It=null,dn=0;const hc=Promise.resolve();let $a=null;const hm=100;function Ft(e){const t=$a||hc;return e?t.then(this?e.bind(this):e):t}function gm(e){let t=Rt+1,n=et.length;for(;t<n;){const s=t+n>>>1;Ys(et[s])<e?t=s+1:n=s}return t}function eo(e){(!et.length||!et.includes(e,Gs&&e.allowRecurse?Rt+1:Rt))&&(e.id==null?et.push(e):et.splice(gm(e.id),0,e),gc())}function gc(){!Gs&&!Mo&&(Mo=!0,$a=hc.then(vc))}function _m(e){const t=et.indexOf(e);t>Rt&&et.splice(t,1)}function _c(e){ue(e)?ds.push(...e):(!It||!It.includes(e,e.allowRecurse?dn+1:dn))&&ds.push(e),gc()}function ci(e,t=Gs?Rt+1:0){for(e=e||new Map;t<et.length;t++){const n=et[t];if(n&&n.pre){if(Pa(e,n))continue;et.splice(t,1),t--,n()}}}function yc(e){if(ds.length){const t=[...new Set(ds)];if(ds.length=0,It){It.push(...t);return}for(It=t,e=e||new Map,It.sort((n,s)=>Ys(n)-Ys(s)),dn=0;dn<It.length;dn++)Pa(e,It[dn])||It[dn]();It=null,dn=0}}const Ys=e=>e.id==null?1/0:e.id,ym=(e,t)=>{const n=Ys(e)-Ys(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function vc(e){Mo=!1,Gs=!0,e=e||new Map,et.sort(ym);const t=n=>Pa(e,n);try{for(Rt=0;Rt<et.length;Rt++){const n=et[Rt];if(n&&n.active!==!1){if(t(n))continue;nn(n,null,14)}}}finally{Rt=0,et.length=0,yc(e),Gs=!1,$a=null,(et.length||ds.length)&&vc(e)}}function Pa(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>hm){const s=t.ownerInstance,r=s&&Xs(s.type);return I(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let xn=!1;const is=new Set;Gl().__VUE_HMR_RUNTIME__={createRecord:uo(xc),rerender:uo(wm),reload:uo(bm)};const Gn=new Map;function vm(e){const t=e.type.__hmrId;let n=Gn.get(t);n||(xc(t,e.type),n=Gn.get(t)),n.instances.add(e)}function xm(e){Gn.get(e.type.__hmrId).instances.delete(e)}function xc(e,t){return Gn.has(e)?!1:(Gn.set(e,{initialDef:qs(t),instances:new Set}),!0)}function qs(e){return Jc(e)?e.__vccOpts:e}function wm(e,t){const n=Gn.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,qs(s.type).render=t),s.renderCache=[],xn=!0,s.update(),xn=!1}))}function bm(e,t){const n=Gn.get(e);if(!n)return;t=qs(t),ui(n.initialDef,t);const s=[...n.instances];for(const r of s){const o=qs(r.type);is.has(o)||(o!==n.initialDef&&ui(o,t),is.add(o)),r.appContext.optionsCache.delete(r.type),r.ceReload?(is.add(o),r.ceReload(t.styles),is.delete(o)):r.parent?eo(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}_c(()=>{for(const r of s)is.delete(qs(r.type))})}function ui(e,t){De(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function uo(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let qt,As=[],Oo=!1;function lr(e,...t){qt?qt.emit(e,...t):Oo||As.push({event:e,args:t})}function wc(e,t){var n,s;qt=e,qt?(qt.enabled=!0,As.forEach(({event:r,args:o})=>qt.emit(r,...o)),As=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{wc(o,t)}),setTimeout(()=>{qt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Oo=!0,As=[])},3e3)):(Oo=!0,As=[])}function $m(e,t){lr("app:init",e,t,{Fragment:Ne,Text:mr,Comment:Ye,Static:kr})}function Pm(e){lr("app:unmount",e)}const Ao=Sa("component:added"),bc=Sa("component:updated"),Sm=Sa("component:removed"),km=e=>{qt&&typeof qt.cleanupBuffer=="function"&&!qt.cleanupBuffer(e)&&Sm(e)};function Sa(e){return t=>{lr(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Bm=$c("perf:start"),Em=$c("perf:end");function $c(e){return(t,n,s)=>{lr(e,t.appContext.app,t.uid,t,n,s)}}function Nm(e,t,n){lr("component:emit",e.appContext.app,e,t,n)}function Cm(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ae;{const{emitsOptions:p,propsOptions:[m]}=e;if(p)if(!(t in p))(!m||!(Tn(t)in m))&&I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tn(t)}" prop.`);else{const d=p[t];fe(d)&&(d(...n)||I(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:d}=s[p]||Ae;d&&(r=n.map(h=>qe(h)?h.trim():h)),m&&(r=n.map(No))}Nm(e,t,r);{const p=t.toLowerCase();p!==t&&s[Tn(p)]&&I(`Event "${p}" is emitted in component ${io(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rn(t)}" instead of "${t}".`)}let l,c=s[l=Tn(t)]||s[l=Tn(jt(t))];!c&&o&&(c=s[l=Tn(rn(t))]),c&&$t(c,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(u,e,6,r)}}function Pc(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!fe(e)){const c=u=>{const p=Pc(u,t,!0);p&&(l=!0,De(i,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(Ce(e)&&s.set(e,null),null):(ue(o)?o.forEach(c=>i[c]=null):De(i,o),Ce(e)&&s.set(e,i),i)}function to(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),xe(e,t[0].toLowerCase()+t.slice(1))||xe(e,rn(t))||xe(e,t))}let We=null,no=null;function Ir(e){const t=We;return We=e,no=e&&e.type.__scopeId||null,t}function L6(e){no=e}function I6(){no=null}function L(e,t=We,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&$i(-1);const o=Ir(t);let i;try{i=e(...r)}finally{Ir(o),s._d&&$i(1)}return bc(t),i};return s._n=!0,s._c=!0,s._d=!0,s}let Lo=!1;function Rr(){Lo=!0}function po(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:c,emit:u,render:p,renderCache:m,data:d,setupState:h,ctx:g,inheritAttrs:v}=e;let w,E;const P=Ir(e);Lo=!1;try{if(n.shapeFlag&4){const W=r||s;w=Et(p.call(W,W,m,o,h,d,g)),E=c}else{const W=t;c===o&&Rr(),w=Et(W.length>1?W(o,{get attrs(){return Rr(),c},slots:l,emit:u}):W(o,null)),E=t.props?c:Tm(c)}}catch(W){Ds.length=0,Xr(W,e,1),w=ie(Ye)}let N=w,T;if(w.patchFlag>0&&w.patchFlag&2048&&([N,T]=Fm(w)),E&&v!==!1){const W=Object.keys(E),{shapeFlag:G}=N;if(W.length){if(G&7)i&&W.some(Fr)&&(E=Mm(E,i)),N=Tt(N,E);else if(!Lo&&N.type!==Ye){const V=Object.keys(c),U=[],ne=[];for(let ae=0,de=V.length;ae<de;ae++){const J=V[ae];ar(J)?Fr(J)||U.push(J[2].toLowerCase()+J.slice(3)):ne.push(J)}ne.length&&I(`Extraneous non-props attributes (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),U.length&&I(`Extraneous non-emits event listeners (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(pi(N)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),N=Tt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(pi(N)||I("Component inside <Transition> renders non-element root node that cannot be animated."),N.transition=n.transition),T?T(N):w=N,Ir(P),w}const Fm=e=>{const t=e.children,n=e.dynamicChildren,s=Sc(t);if(!s)return[e,void 0];const r=t.indexOf(s),o=n?n.indexOf(s):-1,i=l=>{t[r]=l,n&&(o>-1?n[o]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Et(s),i]};function Sc(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Yn(s)){if(s.type!==Ye||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Tm=e=>{let t;for(const n in e)(n==="class"||n==="style"||ar(n))&&((t||(t={}))[n]=e[n]);return t},Mm=(e,t)=>{const n={};for(const s in e)(!Fr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},pi=e=>e.shapeFlag&7||e.type===Ye;function Om(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,u=o.emitsOptions;if((r||l)&&xn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mi(s,i,u):!!i;if(c&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const d=p[m];if(i[d]!==s[d]&&!to(u,d))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?mi(s,i,u):!0:!!i;return!1}function mi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!to(n,o))return!0}return!1}function Am({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kc=e=>e.__isSuspense;function Lm(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):_c(e)}function gt(e,t){if(!He)I("provide() can only be used inside setup().");else{let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[e]=t}}function S(e,t,n=!1){const s=He||We;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&fe(t)?t.call(s.proxy):t;I(`injection "${String(e)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function bs(e,t){return ka(e,null,t)}const vr={};function Ue(e,t,n){return fe(t)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ka(e,t,n)}function ka(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=Ae){t||(n!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=T=>{I("Invalid watch source: ",T,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Zl()===(He==null?void 0:He.scope)?He:null;let u,p=!1,m=!1;if(Se(e)?(u=()=>e.value,p=Ar(e)):Un(e)?(u=()=>e,s=!0):ue(e)?(m=!0,p=e.some(T=>Un(T)||Ar(T)),u=()=>e.map(T=>{if(Se(T))return T.value;if(Un(T))return Ln(T);if(fe(T))return nn(T,c,2);l(T)})):fe(e)?t?u=()=>nn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),$t(e,c,3,[h])}:(u=pt,l(e)),t&&s){const T=u;u=()=>Ln(T())}let d,h=T=>{d=P.onStop=()=>{nn(T,c,4)}},g;if(Qs)if(h=pt,t?n&&$t(t,c,3,[u(),m?[]:void 0,h]):u(),r==="sync"){const T=Hd();g=T.__watcherHandles||(T.__watcherHandles=[])}else return pt;let v=m?new Array(e.length).fill(vr):vr;const w=()=>{if(P.active)if(t){const T=P.run();(s||p||(m?T.some((W,G)=>Ks(W,v[G])):Ks(T,v)))&&(d&&d(),$t(t,c,3,[T,v===vr?void 0:m&&v[0]===vr?[]:v,h]),v=T)}else P.run()};w.allowRecurse=!!t;let E;r==="sync"?E=w:r==="post"?E=()=>Je(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),E=()=>eo(w));const P=new ga(u,E);P.onTrack=o,P.onTrigger=i,t?n?w():v=P.run():r==="post"?Je(P.run.bind(P),c&&c.suspense):P.run();const N=()=>{P.stop(),c&&c.scope&&ua(c.scope.effects,P)};return g&&g.push(N),N}function Im(e,t,n){const s=this.proxy,r=qe(e)?e.includes(".")?Bc(s,e):()=>s[e]:e.bind(s,s);let o;fe(t)?o=t:(o=t.handler,n=t);const i=He;ys(this);const l=ka(r,o.bind(s),n);return i?ys(i):jn(),l}function Bc(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(e,t){if(!Ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Ln(e.value,t);else if(ue(e))for(let n=0;n<e.length;n++)Ln(e[n],t);else if(zl(e)||Rn(e))e.forEach(n=>{Ln(n,t)});else if(Wl(e))for(const n in e)Ln(e[n],t);return e}function Ec(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ur(()=>{e.isMounted=!0}),Na(()=>{e.isUnmounting=!0}),e}const vt=[Function,Array],Rm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(e,{slots:t}){const n=Wt(),s=Ec();let r;return()=>{const o=t.default&&Ba(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){let v=!1;for(const w of o)if(w.type!==Ye){if(v){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=w,v=!0}}const l=he(e),{mode:c}=l;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&I(`invalid <transition> mode: ${c}`),s.isLeaving)return mo(i);const u=di(i);if(!u)return mo(i);const p=Zs(u,l,s,n);_s(u,p);const m=n.subTree,d=m&&di(m);let h=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,h=!0)}if(d&&d.type!==Ye&&(!yn(u,d)||h)){const v=Zs(d,l,s,n);if(_s(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},mo(i);c==="in-out"&&u.type!==Ye&&(v.delayLeave=(w,E,P)=>{const N=Nc(s,d);N[String(d.key)]=d,w._leaveCb=()=>{E(),w._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=P})}return i}}},qm=Rm;function Nc(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Zs(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:m,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:v,onAppear:w,onAfterAppear:E,onAppearCancelled:P}=t,N=String(e.key),T=Nc(n,e),W=(U,ne)=>{U&&$t(U,s,9,ne)},G=(U,ne)=>{const ae=ne[1];W(U,ne),ue(U)?U.every(de=>de.length<=1)&&ae():U.length<=1&&ae()},V={mode:o,persisted:i,beforeEnter(U){let ne=l;if(!n.isMounted)if(r)ne=v||l;else return;U._leaveCb&&U._leaveCb(!0);const ae=T[N];ae&&yn(e,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),W(ne,[U])},enter(U){let ne=c,ae=u,de=p;if(!n.isMounted)if(r)ne=w||c,ae=E||u,de=P||p;else return;let J=!1;const we=U._enterCb=Le=>{J||(J=!0,Le?W(de,[U]):W(ae,[U]),V.delayedLeave&&V.delayedLeave(),U._enterCb=void 0)};ne?G(ne,[U,we]):we()},leave(U,ne){const ae=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ne();W(m,[U]);let de=!1;const J=U._leaveCb=we=>{de||(de=!0,ne(),we?W(g,[U]):W(h,[U]),U._leaveCb=void 0,T[ae]===e&&delete T[ae])};T[ae]=e,d?G(d,[U,J]):J()},clone(U){return Zs(U,t,n,s)}};return V}function mo(e){if(cr(e))return e=Tt(e),e.children=null,e}function di(e){return cr(e)?e.children?e.children[0]:void 0:e}function _s(e,t){e.shapeFlag&6&&e.component?_s(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ba(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Ne?(i.patchFlag&128&&r++,s=s.concat(Ba(i.children,t,l))):(t||i.type!==Ye)&&s.push(l!=null?Tt(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Be(e){return fe(e)?{setup:e,name:e.name}:e}const fs=e=>!!e.type.__asyncLoader,cr=e=>e.type.__isKeepAlive,Um={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Wt(),s=n.ctx;if(!s.renderer)return()=>{const P=t.default&&t.default();return P&&P.length===1?P[0]:P};const r=new Map,o=new Set;let i=null;n.__v_cache=r;const l=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:m}}}=s,d=m("div");s.activate=(P,N,T,W,G)=>{const V=P.component;u(P,N,T,0,l),c(V.vnode,P,N,T,V,l,W,P.slotScopeIds,G),Je(()=>{V.isDeactivated=!1,V.a&&gn(V.a);const U=P.props&&P.props.onVnodeMounted;U&&xt(U,V.parent,P)},l),Ao(V)},s.deactivate=P=>{const N=P.component;u(P,d,null,1,l),Je(()=>{N.da&&gn(N.da);const T=P.props&&P.props.onVnodeUnmounted;T&&xt(T,N.parent,P),N.isDeactivated=!0},l),Ao(N)};function h(P){fo(P),p(P,n,l,!0)}function g(P){r.forEach((N,T)=>{const W=Xs(N.type);W&&(!P||!P(W))&&v(T)})}function v(P){const N=r.get(P);!i||!yn(N,i)?h(N):i&&fo(i),r.delete(P),o.delete(P)}Ue(()=>[e.include,e.exclude],([P,N])=>{P&&g(T=>Ls(P,T)),N&&g(T=>!Ls(N,T))},{flush:"post",deep:!0});let w=null;const E=()=>{w!=null&&r.set(w,ho(n.subTree))};return ur(E),Ea(E),Na(()=>{r.forEach(P=>{const{subTree:N,suspense:T}=n,W=ho(N);if(P.type===W.type&&P.key===W.key){fo(W);const G=W.component.da;G&&Je(G,T);return}h(P)})}),()=>{if(w=null,!t.default)return null;const P=t.default(),N=P[0];if(P.length>1)return I("KeepAlive should contain exactly one component child."),i=null,P;if(!Yn(N)||!(N.shapeFlag&4)&&!(N.shapeFlag&128))return i=null,N;let T=ho(N);const W=T.type,G=Xs(fs(T)?T.type.__asyncResolved||{}:W),{include:V,exclude:U,max:ne}=e;if(V&&(!G||!Ls(V,G))||U&&G&&Ls(U,G))return i=T,N;const ae=T.key==null?W:T.key,de=r.get(ae);return T.el&&(T=Tt(T),N.shapeFlag&128&&(N.ssContent=T)),w=ae,de?(T.el=de.el,T.component=de.component,T.transition&&_s(T,T.transition),T.shapeFlag|=512,o.delete(ae),o.add(ae)):(o.add(ae),ne&&o.size>parseInt(ne,10)&&v(o.values().next().value)),T.shapeFlag|=256,i=T,kc(N.type)?N:T}}},Cc=Um;function Ls(e,t){return ue(e)?e.some(n=>Ls(n,t)):qe(e)?e.split(",").includes(t):vp(e)?e.test(t):!1}function Dm(e,t){Fc(e,"a",t)}function Hm(e,t){Fc(e,"da",t)}function Fc(e,t,n=He){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(so(t,s,n),n){let r=n.parent;for(;r&&r.parent;)cr(r.parent.vnode)&&jm(s,t,n,r),r=r.parent}}function jm(e,t,n,s){const r=so(t,e,s,!0);ro(()=>{ua(s[t],r)},n)}function fo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ho(e){return e.shapeFlag&128?e.ssContent:e}function so(e,t,n=He,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Jn(),ys(n);const l=$t(t,n,e,i);return jn(),Qn(),l});return s?r.unshift(o):r.push(o),o}else{const r=Tn(ba[e].replace(/ hook$/,""));I(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const an=e=>(t,n=He)=>(!Qs||e==="sp")&&so(e,(...s)=>t(...s),n),Vm=an("bm"),ur=an("m"),zm=an("bu"),Ea=an("u"),Na=an("bum"),ro=an("um"),Km=an("sp"),Wm=an("rtg"),Gm=an("rtc");function Ym(e,t=He){so("ec",e,t)}function Tc(e){xp(e)&&I("Do not use built-in directive ids as custom directive id: "+e)}function Ca(e,t){const n=We;if(n===null)return I("withDirectives can only be used inside render functions."),e;const s=ao(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,c,u=Ae]=t[o];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Nn(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(Jn(),$t(c,n,8,[e.el,l,e,t]),Qn())}}const Io="components";function Mc(e,t){return Jm(Io,e,!0,t)||e}const Zm=Symbol();function Jm(e,t,n=!0,s=!1){const r=We||He;if(r){const o=r.type;if(e===Io){const l=Xs(o,!1);if(l&&(l===t||l===jt(t)||l===Wn(jt(t))))return o}const i=fi(r[e]||o[e],t)||fi(r.appContext[e],t);if(!i&&s)return o;if(n&&!i){const l=e===Io?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return i}else I(`resolve${Wn(e.slice(0,-1))} can only be used in render() or setup().`)}function fi(e,t){return e&&(e[t]||e[jt(t)]||e[Wn(jt(t))])}function pr(e,t,n,s){let r;const o=n&&n[s];if(ue(e)||qe(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){Number.isInteger(e)||I(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(Ce(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];r[l]=t(e[u],u,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function zt(e,t,n={},s,r){if(We.isCE||We.parent&&fs(We.parent)&&We.parent.isCE)return t!=="default"&&(n.name=t),ie("slot",n,s&&s());let o=e[t];o&&o.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),o=()=>[]),o&&o._c&&(o._d=!1),y();const i=o&&Oc(o(n)),l=B(Ne,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Oc(e){return e.some(t=>Yn(t)?!(t.type===Ye||t.type===Ne&&!Oc(t.children)):!0)?e:null}const Ro=e=>e?Gc(e)?ao(e)||e.proxy:Ro(e.parent):null,Hn=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>us(e.props),$attrs:e=>us(e.attrs),$slots:e=>us(e.slots),$refs:e=>us(e.refs),$parent:e=>Ro(e.parent),$root:e=>Ro(e.root),$emit:e=>e.emit,$options:e=>Ta(e),$forceUpdate:e=>e.f||(e.f=()=>eo(e.update)),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>Im.bind(e)}),Fa=e=>e==="_"||e==="$",go=(e,t)=>e!==Ae&&!e.__isScriptSetup&&xe(e,t),Ac={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(go(s,t))return i[t]=1,s[t];if(r!==Ae&&xe(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&xe(u,t))return i[t]=3,o[t];if(n!==Ae&&xe(n,t))return i[t]=4,n[t];qo&&(i[t]=0)}}const p=Hn[t];let m,d;if(p)return t==="$attrs"&&(mt(e,"get",t),Rr()),p(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Ae&&xe(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,xe(d,t))return d[t];We&&(!qe(t)||t.indexOf("__v")!==0)&&(r!==Ae&&Fa(t[0])&&xe(r,t)?I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===We&&I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return go(r,t)?(r[t]=n,!0):r.__isScriptSetup&&xe(r,t)?(I(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Ae&&xe(s,t)?(s[t]=n,!0):xe(e.props,t)?(I(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==Ae&&xe(e,i)||go(t,i)||(l=o[0])&&xe(l,i)||xe(s,i)||xe(Hn,i)||xe(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:xe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Ac.ownKeys=e=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Qm(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Hn).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>Hn[n](e),set:pt})}),t}function Xm(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:pt})})}function ed(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(Fa(s[0])){I(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:pt})}})}function td(){const e=Object.create(null);return(t,n)=>{e[n]?I(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let qo=!0;function nd(e){const t=Ta(e),n=e.proxy,s=e.ctx;qo=!1,t.beforeCreate&&hi(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:u,created:p,beforeMount:m,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:w,beforeDestroy:E,beforeUnmount:P,destroyed:N,unmounted:T,render:W,renderTracked:G,renderTriggered:V,errorCaptured:U,serverPrefetch:ne,expose:ae,inheritAttrs:de,components:J,directives:we,filters:Le}=t,ke=td();{const[Q]=e.propsOptions;if(Q)for(const pe in Q)ke("Props",pe)}if(u&&sd(u,s,ke,e.appContext.config.unwrapInjectedRef),i)for(const Q in i){const pe=i[Q];fe(pe)?(Object.defineProperty(s,Q,{value:pe.bind(n),configurable:!0,enumerable:!0,writable:!0}),ke("Methods",Q)):I(`Method "${Q}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(r){fe(r)||I("The data option must be a function. Plain object usage is no longer supported.");const Q=r.call(n,n);if(ma(Q)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ce(Q))I("data() should return an object.");else{e.data=Qe(Q);for(const pe in Q)ke("Data",pe),Fa(pe[0])||Object.defineProperty(s,pe,{configurable:!0,enumerable:!0,get:()=>Q[pe],set:pt})}}if(qo=!0,o)for(const Q in o){const pe=o[Q],ye=fe(pe)?pe.bind(n,n):fe(pe.get)?pe.get.bind(n,n):pt;ye===pt&&I(`Computed property "${Q}" has no getter.`);const Me=!fe(pe)&&fe(pe.set)?pe.set.bind(n):()=>{I(`Write operation failed: computed property "${Q}" is readonly.`)},dt=O({get:ye,set:Me});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Xe=>dt.value=Xe}),ke("Computed",Q)}if(l)for(const Q in l)Lc(l[Q],s,n,Q);if(c){const Q=fe(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(pe=>{gt(pe,Q[pe])})}p&&hi(p,e,"c");function Ie(Q,pe){ue(pe)?pe.forEach(ye=>Q(ye.bind(n))):pe&&Q(pe.bind(n))}if(Ie(Vm,m),Ie(ur,d),Ie(zm,h),Ie(Ea,g),Ie(Dm,v),Ie(Hm,w),Ie(Ym,U),Ie(Gm,G),Ie(Wm,V),Ie(Na,P),Ie(ro,T),Ie(Km,ne),ue(ae))if(ae.length){const Q=e.exposed||(e.exposed={});ae.forEach(pe=>{Object.defineProperty(Q,pe,{get:()=>n[pe],set:ye=>n[pe]=ye})})}else e.exposed||(e.exposed={});W&&e.render===pt&&(e.render=W),de!=null&&(e.inheritAttrs=de),J&&(e.components=J),we&&(e.directives=we)}function sd(e,t,n=pt,s=!1){ue(e)&&(e=Uo(e));for(const r in e){const o=e[r];let i;Ce(o)?"default"in o?i=S(o.from||r,o.default,!0):i=S(o.from||r):i=S(o),Se(i)?s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):(I(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function hi(e,t,n){$t(ue(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lc(e,t,n,s){const r=s.includes(".")?Bc(n,s):()=>n[s];if(qe(e)){const o=t[e];fe(o)?Ue(r,o):I(`Invalid watch handler specified by key "${e}"`,o)}else if(fe(e))Ue(r,e.bind(n));else if(Ce(e))if(ue(e))e.forEach(o=>Lc(o,t,n,s));else{const o=fe(e.handler)?e.handler.bind(n):t[e.handler];fe(o)?Ue(r,o,e):I(`Invalid watch handler specified by key "${e.handler}"`,o)}else I(`Invalid watch option: "${s}"`,e)}function Ta(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>qr(c,u,i,!0)),qr(c,t,i)),Ce(t)&&o.set(t,c),c}function qr(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&qr(e,o,n,!0),r&&r.forEach(i=>qr(e,i,n,!0));for(const i in t)if(s&&i==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=rd[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const rd={data:gi,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Mn,directives:Mn,watch:ad,provide:gi,inject:od};function gi(e,t){return t?e?function(){return De(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function od(e,t){return Mn(Uo(e),Uo(t))}function Uo(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?De(De(Object.create(null),e),t):t}function ad(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const s in t)n[s]=rt(e[s],t[s]);return n}function id(e,t,n,s=!1){const r={},o={};Tr(o,oo,1),e.propsDefaults=Object.create(null),Ic(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);qc(t||{},r,e),n?e.props=s?r:em(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function ld(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function cd(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=he(r),[c]=e.propsOptions;let u=!1;if(!ld(e)&&(s||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let d=p[m];if(to(e.emitsOptions,d))continue;const h=t[d];if(c)if(xe(o,d))h!==o[d]&&(o[d]=h,u=!0);else{const g=jt(d);r[g]=Do(c,l,g,h,e,!1)}else h!==o[d]&&(o[d]=h,u=!0)}}}else{Ic(e,t,r,o)&&(u=!0);let p;for(const m in l)(!t||!xe(t,m)&&((p=rn(m))===m||!xe(t,p)))&&(c?n&&(n[m]!==void 0||n[p]!==void 0)&&(r[m]=Do(c,l,m,void 0,e,!0)):delete r[m]);if(o!==l)for(const m in o)(!t||!xe(t,m))&&(delete o[m],u=!0)}u&&on(e,"set","$attrs"),qc(t||{},r,e)}function Ic(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if($r(c))continue;const u=t[c];let p;r&&xe(r,p=jt(c))?!o||!o.includes(p)?n[p]=u:(l||(l={}))[p]=u:to(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(o){const c=he(n),u=l||Ae;for(let p=0;p<o.length;p++){const m=o[p];n[m]=Do(r,c,m,u[m],e,!xe(u,m))}}return i}function Do(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=xe(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&fe(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ys(r),s=u[n]=c.call(null,t),jn())}else s=c}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===rn(n))&&(s=!0))}return s}function Rc(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!fe(e)){const p=m=>{c=!0;const[d,h]=Rc(m,t,!0);De(i,d),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return Ce(e)&&s.set(e,ms),ms;if(ue(o))for(let p=0;p<o.length;p++){qe(o[p])||I("props must be strings when using array syntax.",o[p]);const m=jt(o[p]);_i(m)&&(i[m]=Ae)}else if(o){Ce(o)||I("invalid props options",o);for(const p in o){const m=jt(p);if(_i(m)){const d=o[p],h=i[m]=ue(d)||fe(d)?{type:d}:Object.assign({},d);if(h){const g=vi(Boolean,h.type),v=vi(String,h.type);h[0]=g>-1,h[1]=v<0||g<v,(g>-1||xe(h,"default"))&&l.push(m)}}}}const u=[i,l];return Ce(e)&&s.set(e,u),u}function _i(e){return e[0]!=="$"?!0:(I(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Ho(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function yi(e,t){return Ho(e)===Ho(t)}function vi(e,t){return ue(t)?t.findIndex(n=>yi(n,e)):fe(t)&&yi(t,e)?0:-1}function qc(e,t,n){const s=he(t),r=n.propsOptions[0];for(const o in r){let i=r[o];i!=null&&ud(o,s[o],i,!xe(e,o)&&!xe(e,rn(o)))}}function ud(e,t,n,s){const{type:r,required:o,validator:i}=n;if(o&&s){I('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let l=!1;const c=ue(r)?r:[r],u=[];for(let p=0;p<c.length&&!l;p++){const{valid:m,expectedType:d}=md(t,c[p]);u.push(d||""),l=m}if(!l){I(dd(e,t,u));return}}i&&!i(t)&&I('Invalid prop: custom validator check failed for prop "'+e+'".')}}const pd=En("String,Number,Boolean,Function,Symbol,BigInt");function md(e,t){let n;const s=Ho(t);if(pd(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Ce(e):s==="Array"?n=ue(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function dd(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;const r=n[0],o=da(t),i=xi(t,r),l=xi(t,o);return n.length===1&&wi(r)&&!fd(r,o)&&(s+=` with value ${i}`),s+=`, got ${o} `,wi(o)&&(s+=`with value ${l}.`),s}function xi(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function wi(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function fd(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Uc=e=>e[0]==="_"||e==="$stable",Ma=e=>ue(e)?e.map(Et):[Et(e)],hd=(e,t,n)=>{if(t._n)return t;const s=L((...r)=>(He&&I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ma(t(...r))),n);return s._c=!1,s},Dc=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Uc(r))continue;const o=e[r];if(fe(o))t[r]=hd(r,o,s);else if(o!=null){I(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=Ma(o);t[r]=()=>i}}},Hc=(e,t)=>{cr(e.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ma(t);e.slots.default=()=>n},gd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Tr(t,"_",n)):Dc(t,e.slots={})}else e.slots={},t&&Hc(e,t);Tr(e.slots,oo,1)},_d=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=Ae;if(s.shapeFlag&32){const l=t._;l?xn?De(r,t):n&&l===1?o=!1:(De(r,t),!n&&l===1&&delete r._):(o=!t.$stable,Dc(t,r)),i=t}else t&&(Hc(e,t),i={default:1});if(o)for(const l in r)!Uc(l)&&!(l in i)&&delete r[l]};function jc(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yd=0;function vd(e,t){return function(s,r=null){fe(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(I("root props passed to app.mount() must be an object."),r=null);const o=jc(),i=new Set;let l=!1;const c=o.app={_uid:yd++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Si,get config(){return o.config},set config(u){I("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return i.has(u)?I("Plugin has already been applied to target app."):u&&fe(u.install)?(i.add(u),u.install(c,...p)):fe(u)?(i.add(u),u(c,...p)):I('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return o.mixins.includes(u)?I("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):o.mixins.push(u),c},component(u,p){return zo(u,o.config),p?(o.components[u]&&I(`Component "${u}" has already been registered in target app.`),o.components[u]=p,c):o.components[u]},directive(u,p){return Tc(u),p?(o.directives[u]&&I(`Directive "${u}" has already been registered in target app.`),o.directives[u]=p,c):o.directives[u]},mount(u,p,m){if(l)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=ie(s,r);return d.appContext=o,o.reload=()=>{e(Tt(d),u,m)},p&&t?t(d,u):e(d,u,m),l=!0,c._container=u,u.__vue_app__=c,c._instance=d.component,$m(c,Si),ao(d.component)||d.component.proxy}},unmount(){l?(e(null,c._container),c._instance=null,Pm(c),delete c._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(u,p){return u in o.provides&&I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),o.provides[u]=p,c}};return c}}function jo(e,t,n,s,r=!1){if(ue(e)){e.forEach((d,h)=>jo(d,t&&(ue(t)?t[h]:t),n,s,r));return}if(fs(s)&&!r)return;const o=s.shapeFlag&4?ao(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:c}=e;if(!l){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=l.refs===Ae?l.refs={}:l.refs,m=l.setupState;if(u!=null&&u!==c&&(qe(u)?(p[u]=null,xe(m,u)&&(m[u]=null)):Se(u)&&(u.value=null)),fe(c))nn(c,l,12,[i,p]);else{const d=qe(c),h=Se(c);if(d||h){const g=()=>{if(e.f){const v=d?xe(m,c)?m[c]:p[c]:c.value;r?ue(v)&&ua(v,o):ue(v)?v.includes(o)||v.push(o):d?(p[c]=[o],xe(m,c)&&(m[c]=p[c])):(c.value=[o],e.k&&(p[e.k]=c.value))}else d?(p[c]=i,xe(m,c)&&(m[c]=i)):h?(c.value=i,e.k&&(p[e.k]=i)):I("Invalid template ref type:",c,`(${typeof c})`)};i?(g.id=-1,Je(g,n)):g()}else I("Invalid template ref type:",c,`(${typeof c})`)}}let Ss,_n;function Yt(e,t){e.appContext.config.performance&&Ur()&&_n.mark(`vue-${t}-${e.uid}`),Bm(e,t,Ur()?_n.now():Date.now())}function Zt(e,t){if(e.appContext.config.performance&&Ur()){const n=`vue-${t}-${e.uid}`,s=n+":end";_n.mark(s),_n.measure(`<${io(e,e.type)}> ${t}`,n,s),_n.clearMarks(n),_n.clearMarks(s)}Em(e,t,Ur()?_n.now():Date.now())}function Ur(){return Ss!==void 0||(typeof window<"u"&&window.performance?(Ss=!0,_n=window.performance):Ss=!1),Ss}function xd(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Lm;function wd(e){return bd(e)}function bd(e,t){xd();const n=Gl();n.__VUE__=!0,wc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:u,setElementText:p,parentNode:m,nextSibling:d,setScopeId:h=pt,insertStaticContent:g}=e,v=(f,_,$,A=null,M=null,H=null,Z=!1,q=null,z=xn?!1:!!_.dynamicChildren)=>{if(f===_)return;f&&!yn(f,_)&&(A=te(f),ut(f,M,H,!0),f=null),_.patchFlag===-2&&(z=!1,_.dynamicChildren=null);const{type:R,ref:oe,shapeFlag:se}=_;switch(R){case mr:w(f,_,$,A);break;case Ye:E(f,_,$,A);break;case kr:f==null?P(_,$,A,Z):N(f,_,$,Z);break;case Ne:we(f,_,$,A,M,H,Z,q,z);break;default:se&1?G(f,_,$,A,M,H,Z,q,z):se&6?Le(f,_,$,A,M,H,Z,q,z):se&64||se&128?R.process(f,_,$,A,M,H,Z,q,z,$e):I("Invalid VNode type:",R,`(${typeof R})`)}oe!=null&&M&&jo(oe,f&&f.ref,H,_||f,!_)},w=(f,_,$,A)=>{if(f==null)s(_.el=l(_.children),$,A);else{const M=_.el=f.el;_.children!==f.children&&u(M,_.children)}},E=(f,_,$,A)=>{f==null?s(_.el=c(_.children||""),$,A):_.el=f.el},P=(f,_,$,A)=>{[f.el,f.anchor]=g(f.children,_,$,A,f.el,f.anchor)},N=(f,_,$,A)=>{if(_.children!==f.children){const M=d(f.anchor);W(f),[_.el,_.anchor]=g(_.children,$,M,A)}else _.el=f.el,_.anchor=f.anchor},T=({el:f,anchor:_},$,A)=>{let M;for(;f&&f!==_;)M=d(f),s(f,$,A),f=M;s(_,$,A)},W=({el:f,anchor:_})=>{let $;for(;f&&f!==_;)$=d(f),r(f),f=$;r(_)},G=(f,_,$,A,M,H,Z,q,z)=>{Z=Z||_.type==="svg",f==null?V(_,$,A,M,H,Z,q,z):ae(f,_,M,H,Z,q,z)},V=(f,_,$,A,M,H,Z,q)=>{let z,R;const{type:oe,props:se,shapeFlag:ce,transition:_e,dirs:be}=f;if(z=f.el=i(f.type,H,se&&se.is,se),ce&8?p(z,f.children):ce&16&&ne(f.children,z,null,A,M,H&&oe!=="foreignObject",Z,q),be&&Nn(f,null,A,"created"),U(z,f,f.scopeId,Z,A),se){for(const Oe in se)Oe!=="value"&&!$r(Oe)&&o(z,Oe,null,se[Oe],H,f.children,A,M,Y);"value"in se&&o(z,"value",null,se.value),(R=se.onVnodeBeforeMount)&&xt(R,A,f)}Object.defineProperty(z,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(z,"__vueParentComponent",{value:A,enumerable:!1}),be&&Nn(f,null,A,"beforeMount");const Re=(!M||M&&!M.pendingBranch)&&_e&&!_e.persisted;Re&&_e.beforeEnter(z),s(z,_,$),((R=se&&se.onVnodeMounted)||Re||be)&&Je(()=>{R&&xt(R,A,f),Re&&_e.enter(z),be&&Nn(f,null,A,"mounted")},M)},U=(f,_,$,A,M)=>{if($&&h(f,$),A)for(let H=0;H<A.length;H++)h(f,A[H]);if(M){let H=M.subTree;if(H.patchFlag>0&&H.patchFlag&2048&&(H=Sc(H.children)||H),_===H){const Z=M.vnode;U(f,Z,Z.scopeId,Z.slotScopeIds,M.parent)}}},ne=(f,_,$,A,M,H,Z,q,z=0)=>{for(let R=z;R<f.length;R++){const oe=f[R]=q?fn(f[R]):Et(f[R]);v(null,oe,_,$,A,M,H,Z,q)}},ae=(f,_,$,A,M,H,Z)=>{const q=_.el=f.el;let{patchFlag:z,dynamicChildren:R,dirs:oe}=_;z|=f.patchFlag&16;const se=f.props||Ae,ce=_.props||Ae;let _e;$&&Cn($,!1),(_e=ce.onVnodeBeforeUpdate)&&xt(_e,$,_,f),oe&&Nn(_,f,$,"beforeUpdate"),$&&Cn($,!0),xn&&(z=0,Z=!1,R=null);const be=M&&_.type!=="foreignObject";if(R?(de(f.dynamicChildren,R,q,$,A,be,H),$&&$.type.__hmrId&&Us(f,_)):Z||ye(f,_,q,null,$,A,be,H,!1),z>0){if(z&16)J(q,_,se,ce,$,A,M);else if(z&2&&se.class!==ce.class&&o(q,"class",null,ce.class,M),z&4&&o(q,"style",se.style,ce.style,M),z&8){const Re=_.dynamicProps;for(let Oe=0;Oe<Re.length;Oe++){const Ve=Re[Oe],St=se[Ve],ns=ce[Ve];(ns!==St||Ve==="value")&&o(q,Ve,St,ns,M,f.children,$,A,Y)}}z&1&&f.children!==_.children&&p(q,_.children)}else!Z&&R==null&&J(q,_,se,ce,$,A,M);((_e=ce.onVnodeUpdated)||oe)&&Je(()=>{_e&&xt(_e,$,_,f),oe&&Nn(_,f,$,"updated")},A)},de=(f,_,$,A,M,H,Z)=>{for(let q=0;q<_.length;q++){const z=f[q],R=_[q],oe=z.el&&(z.type===Ne||!yn(z,R)||z.shapeFlag&70)?m(z.el):$;v(z,R,oe,null,A,M,H,Z,!0)}},J=(f,_,$,A,M,H,Z)=>{if($!==A){if($!==Ae)for(const q in $)!$r(q)&&!(q in A)&&o(f,q,$[q],null,Z,_.children,M,H,Y);for(const q in A){if($r(q))continue;const z=A[q],R=$[q];z!==R&&q!=="value"&&o(f,q,R,z,Z,_.children,M,H,Y)}"value"in A&&o(f,"value",$.value,A.value)}},we=(f,_,$,A,M,H,Z,q,z)=>{const R=_.el=f?f.el:l(""),oe=_.anchor=f?f.anchor:l("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:_e}=_;(xn||se&2048)&&(se=0,z=!1,ce=null),_e&&(q=q?q.concat(_e):_e),f==null?(s(R,$,A),s(oe,$,A),ne(_.children,$,oe,M,H,Z,q,z)):se>0&&se&64&&ce&&f.dynamicChildren?(de(f.dynamicChildren,ce,$,M,H,Z,q),M&&M.type.__hmrId?Us(f,_):(_.key!=null||M&&_===M.subTree)&&Us(f,_,!0)):ye(f,_,$,oe,M,H,Z,q,z)},Le=(f,_,$,A,M,H,Z,q,z)=>{_.slotScopeIds=q,f==null?_.shapeFlag&512?M.ctx.activate(_,$,A,Z,z):ke(_,$,A,M,H,Z,z):Ie(f,_,z)},ke=(f,_,$,A,M,H,Z)=>{const q=f.component=Td(f,A,M);if(q.type.__hmrId&&vm(q),Pr(f),Yt(q,"mount"),cr(f)&&(q.ctx.renderer=$e),Yt(q,"init"),Od(q),Zt(q,"init"),q.asyncDep){if(M&&M.registerDep(q,Q),!f.el){const z=q.subTree=ie(Ye);E(null,z,_,$)}return}Q(q,f,_,$,M,H,Z),Sr(),Zt(q,"mount")},Ie=(f,_,$)=>{const A=_.component=f.component;if(Om(f,_,$))if(A.asyncDep&&!A.asyncResolved){Pr(_),pe(A,_,$),Sr();return}else A.next=_,_m(A.update),A.update();else _.el=f.el,A.vnode=_},Q=(f,_,$,A,M,H,Z)=>{const q=()=>{if(f.isMounted){let{next:oe,bu:se,u:ce,parent:_e,vnode:be}=f,Re=oe,Oe;Pr(oe||f.vnode),Cn(f,!1),oe?(oe.el=be.el,pe(f,oe,Z)):oe=be,se&&gn(se),(Oe=oe.props&&oe.props.onVnodeBeforeUpdate)&&xt(Oe,_e,oe,be),Cn(f,!0),Yt(f,"render");const Ve=po(f);Zt(f,"render");const St=f.subTree;f.subTree=Ve,Yt(f,"patch"),v(St,Ve,m(St.el),te(St),f,M,H),Zt(f,"patch"),oe.el=Ve.el,Re===null&&Am(f,Ve.el),ce&&Je(ce,M),(Oe=oe.props&&oe.props.onVnodeUpdated)&&Je(()=>xt(Oe,_e,oe,be),M),bc(f),Sr()}else{let oe;const{el:se,props:ce}=_,{bm:_e,m:be,parent:Re}=f,Oe=fs(_);if(Cn(f,!1),_e&&gn(_e),!Oe&&(oe=ce&&ce.onVnodeBeforeMount)&&xt(oe,Re,_),Cn(f,!0),se&&me){const Ve=()=>{Yt(f,"render"),f.subTree=po(f),Zt(f,"render"),Yt(f,"hydrate"),me(se,f.subTree,f,M,null),Zt(f,"hydrate")};Oe?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Ve()):Ve()}else{Yt(f,"render");const Ve=f.subTree=po(f);Zt(f,"render"),Yt(f,"patch"),v(null,Ve,$,A,f,M,H),Zt(f,"patch"),_.el=Ve.el}if(be&&Je(be,M),!Oe&&(oe=ce&&ce.onVnodeMounted)){const Ve=_;Je(()=>xt(oe,Re,Ve),M)}(_.shapeFlag&256||Re&&fs(Re.vnode)&&Re.vnode.shapeFlag&256)&&f.a&&Je(f.a,M),f.isMounted=!0,Ao(f),_=$=A=null}},z=f.effect=new ga(q,()=>eo(R),f.scope),R=f.update=()=>z.run();R.id=f.uid,Cn(f,!0),z.onTrack=f.rtc?oe=>gn(f.rtc,oe):void 0,z.onTrigger=f.rtg?oe=>gn(f.rtg,oe):void 0,R.ownerInstance=f,R()},pe=(f,_,$)=>{_.component=f;const A=f.vnode.props;f.vnode=_,f.next=null,cd(f,_.props,A,$),_d(f,_.children,$),Jn(),ci(),Qn()},ye=(f,_,$,A,M,H,Z,q,z=!1)=>{const R=f&&f.children,oe=f?f.shapeFlag:0,se=_.children,{patchFlag:ce,shapeFlag:_e}=_;if(ce>0){if(ce&128){dt(R,se,$,A,M,H,Z,q,z);return}else if(ce&256){Me(R,se,$,A,M,H,Z,q,z);return}}_e&8?(oe&16&&Y(R,M,H),se!==R&&p($,se)):oe&16?_e&16?dt(R,se,$,A,M,H,Z,q,z):Y(R,M,H,!0):(oe&8&&p($,""),_e&16&&ne(se,$,A,M,H,Z,q,z))},Me=(f,_,$,A,M,H,Z,q,z)=>{f=f||ms,_=_||ms;const R=f.length,oe=_.length,se=Math.min(R,oe);let ce;for(ce=0;ce<se;ce++){const _e=_[ce]=z?fn(_[ce]):Et(_[ce]);v(f[ce],_e,$,null,M,H,Z,q,z)}R>oe?Y(f,M,H,!0,!1,se):ne(_,$,A,M,H,Z,q,z,se)},dt=(f,_,$,A,M,H,Z,q,z)=>{let R=0;const oe=_.length;let se=f.length-1,ce=oe-1;for(;R<=se&&R<=ce;){const _e=f[R],be=_[R]=z?fn(_[R]):Et(_[R]);if(yn(_e,be))v(_e,be,$,null,M,H,Z,q,z);else break;R++}for(;R<=se&&R<=ce;){const _e=f[se],be=_[ce]=z?fn(_[ce]):Et(_[ce]);if(yn(_e,be))v(_e,be,$,null,M,H,Z,q,z);else break;se--,ce--}if(R>se){if(R<=ce){const _e=ce+1,be=_e<oe?_[_e].el:A;for(;R<=ce;)v(null,_[R]=z?fn(_[R]):Et(_[R]),$,be,M,H,Z,q,z),R++}}else if(R>ce)for(;R<=se;)ut(f[R],M,H,!0),R++;else{const _e=R,be=R,Re=new Map;for(R=be;R<=ce;R++){const st=_[R]=z?fn(_[R]):Et(_[R]);st.key!=null&&(Re.has(st.key)&&I("Duplicate keys found during update:",JSON.stringify(st.key),"Make sure keys are unique."),Re.set(st.key,R))}let Oe,Ve=0;const St=ce-be+1;let ns=!1,Qa=0;const Ps=new Array(St);for(R=0;R<St;R++)Ps[R]=0;for(R=_e;R<=se;R++){const st=f[R];if(Ve>=St){ut(st,M,H,!0);continue}let Lt;if(st.key!=null)Lt=Re.get(st.key);else for(Oe=be;Oe<=ce;Oe++)if(Ps[Oe-be]===0&&yn(st,_[Oe])){Lt=Oe;break}Lt===void 0?ut(st,M,H,!0):(Ps[Lt-be]=R+1,Lt>=Qa?Qa=Lt:ns=!0,v(st,_[Lt],$,null,M,H,Z,q,z),Ve++)}const Xa=ns?$d(Ps):ms;for(Oe=Xa.length-1,R=St-1;R>=0;R--){const st=be+R,Lt=_[st],ei=st+1<oe?_[st+1].el:A;Ps[R]===0?v(null,Lt,$,ei,M,H,Z,q,z):ns&&(Oe<0||R!==Xa[Oe]?Xe(Lt,$,ei,2):Oe--)}}},Xe=(f,_,$,A,M=null)=>{const{el:H,type:Z,transition:q,children:z,shapeFlag:R}=f;if(R&6){Xe(f.component.subTree,_,$,A);return}if(R&128){f.suspense.move(_,$,A);return}if(R&64){Z.move(f,_,$,$e);return}if(Z===Ne){s(H,_,$);for(let se=0;se<z.length;se++)Xe(z[se],_,$,A);s(f.anchor,_,$);return}if(Z===kr){T(f,_,$);return}if(A!==2&&R&1&&q)if(A===0)q.beforeEnter(H),s(H,_,$),Je(()=>q.enter(H),M);else{const{leave:se,delayLeave:ce,afterLeave:_e}=q,be=()=>s(H,_,$),Re=()=>{se(H,()=>{be(),_e&&_e()})};ce?ce(H,be,Re):Re()}else s(H,_,$)},ut=(f,_,$,A=!1,M=!1)=>{const{type:H,props:Z,ref:q,children:z,dynamicChildren:R,shapeFlag:oe,patchFlag:se,dirs:ce}=f;if(q!=null&&jo(q,null,$,f,!0),oe&256){_.ctx.deactivate(f);return}const _e=oe&1&&ce,be=!fs(f);let Re;if(be&&(Re=Z&&Z.onVnodeBeforeUnmount)&&xt(Re,_,f),oe&6)ee(f.component,$,A);else{if(oe&128){f.suspense.unmount($,A);return}_e&&Nn(f,null,_,"beforeUnmount"),oe&64?f.type.remove(f,_,$,M,$e,A):R&&(H!==Ne||se>0&&se&64)?Y(R,_,$,!1,!0):(H===Ne&&se&384||!M&&oe&16)&&Y(z,_,$),A&&ln(f)}(be&&(Re=Z&&Z.onVnodeUnmounted)||_e)&&Je(()=>{Re&&xt(Re,_,f),_e&&Nn(f,null,_,"unmounted")},$)},ln=f=>{const{type:_,el:$,anchor:A,transition:M}=f;if(_===Ne){f.patchFlag>0&&f.patchFlag&2048&&M&&!M.persisted?f.children.forEach(Z=>{Z.type===Ye?r(Z.el):ln(Z)}):k($,A);return}if(_===kr){W(f);return}const H=()=>{r($),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(f.shapeFlag&1&&M&&!M.persisted){const{leave:Z,delayLeave:q}=M,z=()=>Z($,H);q?q(f.el,H,z):z()}else H()},k=(f,_)=>{let $;for(;f!==_;)$=d(f),r(f),f=$;r(_)},ee=(f,_,$)=>{f.type.__hmrId&&xm(f);const{bum:A,scope:M,update:H,subTree:Z,um:q}=f;A&&gn(A),M.stop(),H&&(H.active=!1,ut(Z,f,_,$)),q&&Je(q,_),Je(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),km(f)},Y=(f,_,$,A=!1,M=!1,H=0)=>{for(let Z=H;Z<f.length;Z++)ut(f[Z],_,$,A,M)},te=f=>f.shapeFlag&6?te(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ve=(f,_,$)=>{f==null?_._vnode&&ut(_._vnode,null,null,!0):v(_._vnode||null,f,_,null,null,null,$),ci(),yc(),_._vnode=f},$e={p:v,um:ut,m:Xe,r:ln,mt:ke,mc:ne,pc:ye,pbc:de,n:te,o:e};let ge,me;return t&&([ge,me]=t($e)),{render:ve,hydrate:ge,createApp:vd(ve,ge)}}function Cn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Us(e,t,n=!1){const s=e.children,r=t.children;if(ue(s)&&ue(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=fn(r[o]),l.el=i.el),n||Us(i,l)),l.type===mr&&(l.el=i.el),l.type===Ye&&!l.el&&(l.el=i.el)}}function $d(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<u?o=l+1:i=l;u<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Pd=e=>e.__isTeleport,hs=e=>e&&(e.disabled||e.disabled===""),bi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Vo=(e,t)=>{const n=e&&e.to;if(qe(n))if(t){const s=t(n);return s||I(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!hs(e)&&I(`Invalid Teleport target: ${n}`),n},Sd={__isTeleport:!0,process(e,t,n,s,r,o,i,l,c,u){const{mc:p,pc:m,pbc:d,o:{insert:h,querySelector:g,createText:v,createComment:w}}=u,E=hs(t.props);let{shapeFlag:P,children:N,dynamicChildren:T}=t;if(xn&&(c=!1,T=null),e==null){const W=t.el=w("teleport start"),G=t.anchor=w("teleport end");h(W,n,s),h(G,n,s);const V=t.target=Vo(t.props,g),U=t.targetAnchor=v("");V?(h(U,V),i=i||bi(V)):E||I("Invalid Teleport target on mount:",V,`(${typeof V})`);const ne=(ae,de)=>{P&16&&p(N,ae,de,r,o,i,l,c)};E?ne(n,G):V&&ne(V,U)}else{t.el=e.el;const W=t.anchor=e.anchor,G=t.target=e.target,V=t.targetAnchor=e.targetAnchor,U=hs(e.props),ne=U?n:G,ae=U?W:V;if(i=i||bi(G),T?(d(e.dynamicChildren,T,ne,r,o,i,l),Us(e,t,!0)):c||m(e,t,ne,ae,r,o,i,l,!1),E)U||xr(t,n,W,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=Vo(t.props,g);de?xr(t,de,null,u,0):I("Invalid Teleport target on update:",G,`(${typeof G})`)}else U&&xr(t,G,V,u,1)}Vc(t)},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:c,anchor:u,targetAnchor:p,target:m,props:d}=e;if(m&&o(p),(i||!hs(d))&&(o(u),l&16))for(let h=0;h<c.length;h++){const g=c[h];r(g,t,n,!0,!!g.dynamicChildren)}},move:xr,hydrate:kd};function xr(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:u,props:p}=e,m=o===2;if(m&&s(i,t,n),(!m||hs(p))&&c&16)for(let d=0;d<u.length;d++)r(u[d],t,n,2);m&&s(l,t,n)}function kd(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:c}},u){const p=t.target=Vo(t.props,c);if(p){const m=p._lpa||p.firstChild;if(t.shapeFlag&16)if(hs(t.props))t.anchor=u(i(e),t,l(e),n,s,r,o),t.targetAnchor=m;else{t.anchor=i(e);let d=m;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(m,t,p,n,s,r,o)}Vc(t)}return t.anchor&&i(t.anchor)}const R6=Sd;function Vc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ne=Symbol("Fragment"),mr=Symbol("Text"),Ye=Symbol("Comment"),kr=Symbol("Static"),Ds=[];let Ct=null;function y(e=!1){Ds.push(Ct=e?null:[])}function Bd(){Ds.pop(),Ct=Ds[Ds.length-1]||null}let Js=1;function $i(e){Js+=e}function zc(e){return e.dynamicChildren=Js>0?Ct||ms:null,Bd(),Js>0&&Ct&&Ct.push(e),e}function X(e,t,n,s,r,o){return zc(a(e,t,n,s,r,o,!0))}function B(e,t,n,s,r){return zc(ie(e,t,n,s,r,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function yn(e,t){return t.shapeFlag&6&&is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Ed=(...e)=>Nd(...e),oo="__vInternal",Kc=({key:e})=>e??null,Br=({ref:e,ref_key:t,ref_for:n})=>e!=null?qe(e)||Se(e)||fe(e)?{i:We,r:e,k:t,f:!!n}:e:null;function a(e,t=null,n=null,s=0,r=null,o=e===Ne?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kc(t),ref:t&&Br(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return l?(Oa(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),c.key!==c.key&&I("VNode created with invalid key (NaN). VNode type:",c.type),Js>0&&!i&&Ct&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ct.push(c),c}const ie=Ed;function Nd(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Zm)&&(e||I(`Invalid vnode type when creating vnode: ${e}.`),e=Ye),Yn(e)){const l=Tt(e,t,!0);return n&&Oa(l,n),Js>0&&!o&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(e)]=l:Ct.push(l)),l.patchFlag|=-2,l}if(Jc(e)&&(e=e.__vccOpts),t){t=D(t);let{class:l,style:c}=t;l&&!qe(l)&&(t.class=je(l)),Ce(c)&&(Lr(c)&&!ue(c)&&(c=De({},c)),t.style=tt(c))}const i=qe(e)?1:kc(e)?128:Pd(e)?64:Ce(e)?4:fe(e)?2:0;return i&4&&Lr(e)&&(e=he(e),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),a(e,t,n,s,r,i,o,!0)}function D(e){return e?Lr(e)||oo in e?De({},e):e:null}function Tt(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?Aa(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kc(l),ref:t&&t.ref?n&&r?ue(r)?r.concat(Br(t)):[r,Br(t)]:Br(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o===-1&&ue(i)?i.map(Wc):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wc(e){const t=Tt(e);return ue(e.children)&&(t.children=e.children.map(Wc)),t}function x(e=" ",t=0){return ie(mr,null,e,t)}function re(e="",t=!1){return t?(y(),B(Ye,null,e)):ie(Ye,null,e)}function Et(e){return e==null||typeof e=="boolean"?ie(Ye):ue(e)?ie(Ne,null,e.slice()):typeof e=="object"?fn(e):ie(mr,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function Oa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ue(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Oa(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(oo in t)?t._ctx=We:r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:We},n=32):(t=String(t),s&64?(n=16,t=[x(t)]):n=8);e.children=t,e.shapeFlag|=n}function Aa(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=je([t.class,s.class]));else if(r==="style")t.style=tt([t.style,s.style]);else if(ar(r)){const o=t[r],i=s[r];i&&o!==i&&!(ue(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function xt(e,t,n,s=null){$t(e,t,7,[n,s])}const Cd=jc();let Fd=0;function Td(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Cd,o={uid:Fd++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,r),emitsOptions:Pc(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx=Qm(o),o.root=t?t.root:o,o.emit=Cm.bind(null,o),e.ce&&e.ce(o),o}let He=null;const Wt=()=>He||We,ys=e=>{He=e,e.scope.on()},jn=()=>{He&&He.scope.off(),He=null},Md=En("slot,component");function zo(e,t){const n=t.isNativeTag||Vl;(Md(e)||n(e))&&I("Do not use built-in or reserved HTML elements as component id: "+e)}function Gc(e){return e.vnode.shapeFlag&4}let Qs=!1;function Od(e,t=!1){Qs=t;const{props:n,children:s}=e.vnode,r=Gc(e);id(e,n,r,t),gd(e,s);const o=r?Ad(e,t):void 0;return Qs=!1,o}function Ad(e,t){var n;const s=e.type;{if(s.name&&zo(s.name,e.appContext.config),s.components){const o=Object.keys(s.components);for(let i=0;i<o.length;i++)zo(o[i],e.appContext.config)}if(s.directives){const o=Object.keys(s.directives);for(let i=0;i<o.length;i++)Tc(o[i])}s.compilerOptions&&Ld()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ya(new Proxy(e.ctx,Ac)),Xm(e);const{setup:r}=s;if(r){const o=e.setupContext=r.length>1?Zc(e):null;ys(e),Jn();const i=nn(r,e,0,[us(e.props),o]);if(Qn(),jn(),ma(i)){if(i.then(jn,jn),t)return i.then(l=>{Pi(e,l,t)}).catch(l=>{Xr(l,e,0)});if(e.asyncDep=i,!e.suspense){const l=(n=s.name)!==null&&n!==void 0?n:"Anonymous";I(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Pi(e,i,t)}else Yc(e,t)}function Pi(e,t,n){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)?(Yn(t)&&I("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=pc(t),ed(e)):t!==void 0&&I(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Yc(e,n)}let Ko;const Ld=()=>!Ko;function Yc(e,t,n){const s=e.type;if(!e.render){if(!t&&Ko&&!s.render){const r=s.template||Ta(e).template;if(r){Yt(e,"compile");const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=De(De({isCustomElement:o,delimiters:l},i),c);s.render=Ko(r,u),Zt(e,"compile")}}e.render=s.render||pt}ys(e),Jn(),nd(e),Qn(),jn(),!s.render&&e.render===pt&&!t&&(s.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function Id(e){return new Proxy(e.attrs,{get(t,n){return Rr(),mt(e,"get","$attrs"),t[n]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function Zc(e){const t=s=>{if(e.exposed&&I("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(ue(s)?r="array":Se(s)&&(r="ref")),r!=="object"&&I(`expose() should be passed a plain object, received ${r}.`)}e.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Id(e))},get slots(){return us(e.slots)},get emit(){return(s,...r)=>e.emit(s,...r)},expose:t})}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pc(ya(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hn)return Hn[n](e)},has(t,n){return n in t||n in Hn}}))}const Rd=/(?:^|[-_])(\w)/g,qd=e=>e.replace(Rd,t=>t.toUpperCase()).replace(/[-_]/g,"");function Xs(e,t=!0){return fe(e)?e.displayName||e.name:e.name||t&&e.__name}function io(e,t,n=!1){let s=Xs(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=o=>{for(const i in o)if(o[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?qd(s):n?"App":"Anonymous"}function Jc(e){return fe(e)&&"__vccOpts"in e}const O=(e,t)=>lm(e,t,Qs);function q6(){return Ud().slots}function Ud(){const e=Wt();return e||I("useContext() called without active instance."),e.setupContext||(e.setupContext=Zc(e))}function lo(e,t,n){const s=arguments.length;return s===2?Ce(t)&&!ue(t)?Yn(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yn(n)&&(n=[n]),ie(e,t,n))}const Dd=Symbol("ssrContext"),Hd=()=>{{const e=S(Dd);return e||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function _o(e){return!!(e&&e.__v_isShallow)}function jd(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(m){return Ce(m)?m.__isVue?["div",e,"VueInstance"]:Se(m)?["div",{},["span",e,p(m)],"<",l(m.value),">"]:Un(m)?["div",{},["span",e,_o(m)?"ShallowReactive":"Reactive"],"<",l(m),`>${kn(m)?" (readonly)":""}`]:kn(m)?["div",{},["span",e,_o(m)?"ShallowReadonly":"Readonly"],"<",l(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...o(m.$)]}};function o(m){const d=[];m.type.props&&m.props&&d.push(i("props",he(m.props))),m.setupState!==Ae&&d.push(i("setup",m.setupState)),m.data!==Ae&&d.push(i("data",he(m.data)));const h=c(m,"computed");h&&d.push(i("computed",h));const g=c(m,"inject");return g&&d.push(i("injected",g)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),d}function i(m,d){return d=De({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(h=>["div",{},["span",s,h+": "],l(d[h],!1)])]]:["span",{}]}function l(m,d=!0){return typeof m=="number"?["span",t,m]:typeof m=="string"?["span",n,JSON.stringify(m)]:typeof m=="boolean"?["span",s,m]:Ce(m)?["object",{object:d?he(m):m}]:["span",n,String(m)]}function c(m,d){const h=m.type;if(fe(h))return;const g={};for(const v in m.ctx)u(h,v,d)&&(g[v]=m.ctx[v]);return g}function u(m,d,h){const g=m[h];if(ue(g)&&g.includes(d)||Ce(g)&&d in g||m.extends&&u(m.extends,d,h)||m.mixins&&m.mixins.some(v=>u(v,d,h)))return!0}function p(m){return _o(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Si="3.2.47",Vd="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,ki=On&&On.createElement("template"),zd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?On.createElementNS(Vd,e):On.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>On.createTextNode(e),createComment:e=>On.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>On.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ki.innerHTML=s?`<svg>${e}</svg>`:e;const l=ki.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kd(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wd(e,t,n){const s=e.style,r=qe(n);if(n&&!r){if(t&&!qe(t))for(const o in t)n[o]==null&&Wo(s,o,"");for(const o in n)Wo(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Gd=/[^\\];\s*$/,Bi=/\s*!important$/;function Wo(e,t,n){if(ue(n))n.forEach(s=>Wo(e,t,s));else if(n==null&&(n=""),Gd.test(n)&&I(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=Yd(e,t);Bi.test(n)?e.setProperty(rn(s),n.replace(Bi,""),"important"):e[s]=n}}const Ei=["Webkit","Moz","ms"],yo={};function Yd(e,t){const n=yo[t];if(n)return n;let s=jt(t);if(s!=="filter"&&s in e)return yo[t]=s;s=Wn(s);for(let r=0;r<Ei.length;r++){const o=Ei[r]+s;if(o in e)return yo[t]=o}return t}const Ni="http://www.w3.org/1999/xlink";function Zd(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ni,t.slice(6,t.length)):e.setAttributeNS(Ni,t,n);else{const o=gp(t);n==null||o&&!Hl(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Jd(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch(c){l||I(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}l&&e.removeAttribute(t)}function ls(e,t,n,s){e.addEventListener(t,n,s)}function Qd(e,t,n,s){e.removeEventListener(t,n,s)}function Xd(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=ef(t);if(s){const u=o[t]=sf(s,r);ls(e,l,u,c)}else i&&(Qd(e,l,i,c),o[t]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function ef(e){let t;if(Ci.test(e)){t={};let s;for(;s=e.match(Ci);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rn(e.slice(2)),t]}let vo=0;const tf=Promise.resolve(),nf=()=>vo||(tf.then(()=>vo=0),vo=Date.now());function sf(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(rf(s,n.value),t,5,[s])};return n.value=e,n.attached=nf(),n}function rf(e,t){if(ue(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Fi=/^on[a-z]/,of=(e,t,n,s,r=!1,o,i,l,c)=>{t==="class"?Kd(e,s,r):t==="style"?Wd(e,n,s):ar(t)?Fr(t)||Xd(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):af(e,t,s,r))?Jd(e,t,s,o,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zd(e,t,s,r))};function af(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Fi.test(t)&&fe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fi.test(t)&&qe(n)?!1:t in e}const un="transition",ks="animation",Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lf=De({},qm.props,Qc),Fn=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ti=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function cf(e){const t={};for(const J in e)J in Qc||(t[J]=e[J]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=i,appearToClass:p=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,g=uf(r),v=g&&g[0],w=g&&g[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:N,onLeave:T,onLeaveCancelled:W,onBeforeAppear:G=E,onAppear:V=P,onAppearCancelled:U=N}=t,ne=(J,we,Le)=>{mn(J,we?p:l),mn(J,we?u:i),Le&&Le()},ae=(J,we)=>{J._isLeaving=!1,mn(J,m),mn(J,h),mn(J,d),we&&we()},de=J=>(we,Le)=>{const ke=J?V:P,Ie=()=>ne(we,J,Le);Fn(ke,[we,Ie]),Mi(()=>{mn(we,J?c:o),Jt(we,J?p:l),Ti(ke)||Oi(we,s,v,Ie)})};return De(t,{onBeforeEnter(J){Fn(E,[J]),Jt(J,o),Jt(J,i)},onBeforeAppear(J){Fn(G,[J]),Jt(J,c),Jt(J,u)},onEnter:de(!1),onAppear:de(!0),onLeave(J,we){J._isLeaving=!0;const Le=()=>ae(J,we);Jt(J,m),eu(),Jt(J,d),Mi(()=>{J._isLeaving&&(mn(J,m),Jt(J,h),Ti(T)||Oi(J,s,w,Le))}),Fn(T,[J,Le])},onEnterCancelled(J){ne(J,!1),Fn(N,[J])},onAppearCancelled(J){ne(J,!0),Fn(U,[J])},onLeaveCancelled(J){ae(J),Fn(W,[J])}})}function uf(e){if(e==null)return null;if(Ce(e))return[xo(e.enter),xo(e.leave)];{const t=xo(e);return[t,t]}}function xo(e){const t=$p(e);return dm(t,"<transition> explicit duration"),t}function Jt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function mn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let pf=0;function Oi(e,t,n,s){const r=e._endId=++pf,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:c}=Xc(e,t);if(!i)return s();const u=i+"end";let p=0;const m=()=>{e.removeEventListener(u,d),o()},d=h=>{h.target===e&&++p>=c&&m()};setTimeout(()=>{p<c&&m()},l+1),e.addEventListener(u,d)}function Xc(e,t){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),r=s(`${un}Delay`),o=s(`${un}Duration`),i=Ai(r,o),l=s(`${ks}Delay`),c=s(`${ks}Duration`),u=Ai(l,c);let p=null,m=0,d=0;t===un?i>0&&(p=un,m=i,d=o.length):t===ks?u>0&&(p=ks,m=u,d=c.length):(m=Math.max(i,u),p=m>0?i>u?un:ks:null,d=p?p===un?o.length:c.length:0);const h=p===un&&/\b(transform|all)(,|$)/.test(s(`${un}Property`).toString());return{type:p,timeout:m,propCount:d,hasTransform:h}}function Ai(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Li(n)+Li(e[s])))}function Li(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function eu(){return document.body.offsetHeight}const tu=new WeakMap,nu=new WeakMap,su={name:"TransitionGroup",props:De({},lf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Wt(),s=Ec();let r,o;return Ea(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!_f(r[0].el,n.vnode.el,i))return;r.forEach(ff),r.forEach(hf);const l=r.filter(gf);eu(),l.forEach(c=>{const u=c.el,p=u.style;Jt(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const m=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",m),u._moveCb=null,mn(u,i))};u.addEventListener("transitionend",m)})}),()=>{const i=he(e),l=cf(i);let c=i.tag||Ne;r=o,o=t.default?Ba(t.default()):[];for(let u=0;u<o.length;u++){const p=o[u];p.key!=null?_s(p,Zs(p,l,s,n)):I("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];_s(p,Zs(p,l,s,n)),tu.set(p,p.el.getBoundingClientRect())}return ie(c,null,o)}}},mf=e=>delete e.mode;su.props;const df=su;function ff(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function hf(e){nu.set(e,e.el.getBoundingClientRect())}function gf(e){const t=tu.get(e),n=nu.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function _f(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=Xc(s);return r.removeChild(s),o}const Ii=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ue(t)?n=>gn(t,n):t};function yf(e){e.target.composing=!0}function Ri(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vf={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Ii(r);const o=s||r.props&&r.props.type==="number";ls(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),o&&(l=No(l)),e._assign(l)}),n&&ls(e,"change",()=>{e.value=e.value.trim()}),t||(ls(e,"compositionstart",yf),ls(e,"compositionend",Ri),ls(e,"change",Ri))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=Ii(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&No(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qi=(e,t)=>n=>{if(!("key"in n))return;const s=rn(n.key);if(t.some(r=>r===s||xf[r]===s))return e(n)},ru={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Bs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Bs(e,!0),s.enter(e)):s.leave(e,()=>{Bs(e,!1)}):Bs(e,t))},beforeUnmount(e,{value:t}){Bs(e,t)}};function Bs(e,t){e.style.display=t?e._vod:"none"}const wf=De({patchProp:of},zd);let Ui;function bf(){return Ui||(Ui=wd(wf))}const U6=(...e)=>{const t=bf().createApp(...e);$f(t),Pf(t);const{mount:n}=t;return t.mount=s=>{const r=Sf(s);if(!r)return;const o=t._component;!fe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function $f(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>dp(t)||fp(t),writable:!1})}function Pf(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return I(s),n},set(){I(s)}})}}function Sf(e){if(qe(e)){const t=document.querySelector(e);return t||I(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function kf(){jd()}kf();const ou=Symbol("v-click-clicks"),au=Symbol("v-click-clicks-elements"),Bf=Symbol("v-click-clicks-order-map"),iu=Symbol("v-click-clicks-disabled"),lu=Symbol("slidev-slide-scale"),C=Symbol("slidev-slidev-context"),Ef=Symbol("slidev-route"),Nf=Symbol("slidev-slide-context"),Cf="slidev-vclick-target",D6="slidev-vclick-hidden",H6="slidev-vclick-fade",j6="slidev-vclick-hidden-explicitly",V6="slidev-vclick-current",z6="slidev-vclick-prior",K6=["localhost","127.0.0.1"];function Ff(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Tf(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function Mf(e){return e!=null}function Of(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Mf))}const Is={theme:"unicorn",title:"NumPy 基础",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Fe=Is,wn=Fe.aspectRatio??16/9,bn=Fe.canvasWidth??980,La=Math.ceil(bn/wn),Ia=O(()=>Of(Fe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Pt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Xn=Qe({page:0,clicks:0});let Af=[],Lf=[];Pt(Xn,"$syncUp",!0);Pt(Xn,"$syncDown",!0);Pt(Xn,"$paused",!1);Pt(Xn,"$onSet",e=>Af.push(e));Pt(Xn,"$onPatch",e=>Lf.push(e));Pt(Xn,"$patch",async()=>!1);function cu(e,t,n=!1){const s=[];let r=!1,o=!1,i,l;const c=Qe(t);function u(h){s.push(h)}function p(h,g){c[h]!==g&&(clearTimeout(i),r=!0,c[h]=g,i=setTimeout(()=>r=!1,0))}function m(h){r||(clearTimeout(l),o=!0,Object.entries(h).forEach(([g,v])=>{c[g]=v}),l=setTimeout(()=>o=!1,0))}function d(h){let g;n?n&&window.addEventListener("storage",w=>{w&&w.key===h&&w.newValue&&m(JSON.parse(w.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",w=>m(w.data)));function v(){!n&&g&&!o?g.postMessage(he(c)):n&&!o&&window.localStorage.setItem(h,JSON.stringify(c)),r||s.forEach(w=>w(c))}if(Ue(c,v,{deep:!0}),n){const w=window.localStorage.getItem(h);w&&m(JSON.parse(w))}}return{init:d,onPatch:u,patch:p,state:c}}const{init:W6,onPatch:G6,patch:Y6,state:wo}=cu(Xn,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),es=Qe({});let If=[],Rf=[];Pt(es,"$syncUp",!0);Pt(es,"$syncDown",!0);Pt(es,"$paused",!1);Pt(es,"$onSet",e=>If.push(e));Pt(es,"$onPatch",e=>Rf.push(e));Pt(es,"$patch",async()=>!1);const{init:Z6,onPatch:qf,patch:uu,state:Dr}=cu(es,{},!0),Uf="modulepreload",Df=function(e){return"/math201/slides/numpy/"+e},Di={},$n=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Df(o),o in Di)return;Di[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===o&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Uf,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var Hi;const Mt=typeof window<"u",Hf=e=>typeof e<"u",jf=Object.prototype.toString,er=e=>typeof e=="function",J6=e=>typeof e=="number",pu=e=>typeof e=="string",Q6=e=>jf.call(e)==="[object Object]",Go=()=>+Date.now(),Hs=()=>{};Mt&&((Hi=window==null?void 0:window.navigator)!=null&&Hi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(e){return typeof e=="function"?e():b(e)}function Vf(e,t){function n(...s){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(o)})}return n}const mu=e=>e();function zf(e=mu){const t=le(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:Ut(t),pause:n,resume:s,eventFilter:r}}function Kf(e){return e}function Wf(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+r}function Gf(e,t){let n,s,r;const o=le(!0),i=()=>{o.value=!0,r()};Ue(e,i,{flush:"sync"});const l=er(t)?t:t.get,c=er(t)?void 0:t.set,u=mc((p,m)=>(s=p,r=m,{get(){return o.value&&(n=l(),o.value=!1),s(),n},set(d){c==null||c(d)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function Kt(e){return Zl()?(Sp(e),!0):!1}function Yf(e){if(!Se(e))return Qe(e);const t=new Proxy({},{get(n,s,r){return b(Reflect.get(e.value,s,r))},set(n,s,r){return Se(e.value[s])&&!Se(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Qe(t)}function du(e){return typeof e=="function"?O(e):le(e)}var Zf=Object.defineProperty,Jf=Object.defineProperties,Qf=Object.getOwnPropertyDescriptors,ji=Object.getOwnPropertySymbols,Xf=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable,Vi=(e,t,n)=>t in e?Zf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,th=(e,t)=>{for(var n in t||(t={}))Xf.call(t,n)&&Vi(e,n,t[n]);if(ji)for(var n of ji(t))eh.call(t,n)&&Vi(e,n,t[n]);return e},nh=(e,t)=>Jf(e,Qf(t));function sh(e){if(!Se(e))return rm(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=mc(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=nh(th({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function Ra(e,t=!0){Wt()?ur(e):t?e():Ft(e)}function X6(e){Wt()&&ro(e)}function rh(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let o=null;const i=le(!1);function l(){o&&(clearInterval(o),o=null)}function c(){i.value=!1,l()}function u(){const p=lt(t);p<=0||(i.value=!0,r&&e(),l(),o=setInterval(e,p))}if(s&&Mt&&u(),Se(t)||er(t)){const p=Ue(t,()=>{i.value&&Mt&&u()});Kt(p)}return Kt(c),{isActive:i,pause:c,resume:u}}function oh(e,t,n={}){const{immediate:s=!0}=n,r=le(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function l(){r.value=!1,i()}function c(...u){i(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...u)},lt(t))}return s&&(r.value=!0,Mt&&c()),Kt(l),{isPending:Ut(r),start:c,stop:l}}function fu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=Se(e),o=le(e);function i(l){if(arguments.length)return o.value=l,o.value;{const c=lt(n);return o.value=o.value===c?lt(s):c,o.value}}return r?i:[o,i]}var zi=Object.getOwnPropertySymbols,ah=Object.prototype.hasOwnProperty,ih=Object.prototype.propertyIsEnumerable,lh=(e,t)=>{var n={};for(var s in e)ah.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&zi)for(var s of zi(e))t.indexOf(s)<0&&ih.call(e,s)&&(n[s]=e[s]);return n};function ch(e,t,n={}){const s=n,{eventFilter:r=mu}=s,o=lh(s,["eventFilter"]);return Ue(e,Vf(r,t),o)}var uh=Object.defineProperty,ph=Object.defineProperties,mh=Object.getOwnPropertyDescriptors,Hr=Object.getOwnPropertySymbols,hu=Object.prototype.hasOwnProperty,gu=Object.prototype.propertyIsEnumerable,Ki=(e,t,n)=>t in e?uh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dh=(e,t)=>{for(var n in t||(t={}))hu.call(t,n)&&Ki(e,n,t[n]);if(Hr)for(var n of Hr(t))gu.call(t,n)&&Ki(e,n,t[n]);return e},fh=(e,t)=>ph(e,mh(t)),hh=(e,t)=>{var n={};for(var s in e)hu.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Hr)for(var s of Hr(e))t.indexOf(s)<0&&gu.call(e,s)&&(n[s]=e[s]);return n};function gh(e,t,n={}){const s=n,{eventFilter:r}=s,o=hh(s,["eventFilter"]),{eventFilter:i,pause:l,resume:c,isActive:u}=zf(r);return{stop:ch(e,t,fh(dh({},o),{eventFilter:i})),pause:l,resume:c,isActive:u}}function bt(e){var t;const n=lt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ze=Mt?window:void 0,_u=Mt?window.document:void 0,_h=Mt?window.navigator:void 0;function Te(...e){let t,n,s,r;if(pu(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=Ze):[t,n,s,r]=e,!t)return Hs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],i=()=>{o.forEach(p=>p()),o.length=0},l=(p,m,d)=>(p.addEventListener(m,d,r),()=>p.removeEventListener(m,d,r)),c=Ue(()=>bt(t),p=>{i(),p&&o.push(...n.flatMap(m=>s.map(d=>l(p,m,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return Kt(u),u}function yh(e,t,n={}){const{window:s=Ze,ignore:r=[],capture:o=!0,detectIframe:i=!1}=n;if(!s)return;let l=!0,c;const u=h=>r.some(g=>{if(typeof g=="string")return Array.from(s.document.querySelectorAll(g)).some(v=>v===h.target||h.composedPath().includes(v));{const v=bt(g);return v&&(h.target===v||h.composedPath().includes(v))}}),p=h=>{s.clearTimeout(c);const g=bt(e);if(!(!g||g===h.target||h.composedPath().includes(g))){if(h.detail===0&&(l=!u(h)),!l){l=!0;return}t(h)}},m=[Te(s,"click",p,{passive:!0,capture:o}),Te(s,"pointerdown",h=>{const g=bt(e);g&&(l=!h.composedPath().includes(g)&&!u(h))},{passive:!0}),Te(s,"pointerup",h=>{if(h.button===0){const g=h.composedPath();h.composedPath=()=>g,c=s.setTimeout(()=>p(h),50)}},{passive:!0}),i&&Te(s,"blur",h=>{var g;const v=bt(e);((g=s.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(v!=null&&v.contains(s.document.activeElement))&&t(h)})].filter(Boolean);return()=>m.forEach(h=>h())}const vh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function xh(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=Ze,eventName:o="keydown",passive:i=!1}=s,l=vh(t);return Te(r,o,u=>{l(u)&&n(u)},i)}function wh(e={}){var t;const{window:n=Ze}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=Gf(()=>null,()=>s==null?void 0:s.activeElement);return n&&(Te(n,"blur",o=>{o.relatedTarget===null&&r.trigger()},!0),Te(n,"focus",r.trigger,!0)),r}function dr(e,t=!1){const n=le(),s=()=>n.value=Boolean(e());return s(),Ra(s,t),n}function cs(e,t={}){const{window:n=Ze}=t,s=dr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=le(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},l=()=>{s.value&&(i(),r=n.matchMedia(du(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",l):r.addListener(l))};return bs(l),Kt(()=>i()),o}const bh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $h=Object.defineProperty,Wi=Object.getOwnPropertySymbols,Ph=Object.prototype.hasOwnProperty,Sh=Object.prototype.propertyIsEnumerable,Gi=(e,t,n)=>t in e?$h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kh=(e,t)=>{for(var n in t||(t={}))Ph.call(t,n)&&Gi(e,n,t[n]);if(Wi)for(var n of Wi(t))Sh.call(t,n)&&Gi(e,n,t[n]);return e};function Bh(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Wf(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=Ze}=t;function r(l){return s?s.matchMedia(l).matches:!1}const o=l=>cs(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>o(c),enumerable:!0,configurable:!0}),l),{});return kh({greater(l){return cs(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:o,smaller(l){return cs(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return cs(`(max-width: ${n(l)})`,t)},between(l,c){return cs(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${n(l)})`)},isInBetween(l,c){return r(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},i)}function Eh(e={}){const{navigator:t=_h,read:n=!1,source:s,copiedDuring:r=1500,legacy:o=!1}=e,i=["copy","cut"],l=dr(()=>t&&"clipboard"in t),c=O(()=>l.value||o),u=le(""),p=le(!1),m=oh(()=>p.value=!1,r);function d(){l.value?t.clipboard.readText().then(w=>{u.value=w}):u.value=v()}if(c.value&&n)for(const w of i)Te(w,d);async function h(w=lt(s)){c.value&&w!=null&&(l.value?await t.clipboard.writeText(w):g(w),u.value=w,p.value=!0,m.start())}function g(w){const E=document.createElement("textarea");E.value=w??"",E.style.position="absolute",E.style.opacity="0",document.body.appendChild(E),E.select(),document.execCommand("copy"),E.remove()}function v(){var w,E,P;return(P=(E=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:E.toString())!=null?P:""}return{isSupported:c,text:u,copied:p,copy:h}}function Nh(e){return JSON.parse(JSON.stringify(e))}const Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo="__vueuse_ssr_handlers__";Yo[Zo]=Yo[Zo]||{};const Ch=Yo[Zo];function Fh(e,t){return Ch[e]||t}function Th(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Mh=Object.defineProperty,Yi=Object.getOwnPropertySymbols,Oh=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable,Zi=(e,t,n)=>t in e?Mh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ji=(e,t)=>{for(var n in t||(t={}))Oh.call(t,n)&&Zi(e,n,t[n]);if(Yi)for(var n of Yi(t))Ah.call(t,n)&&Zi(e,n,t[n]);return e};const Lh={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ih(e,t,n,s={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:m=Ze,eventFilter:d,onError:h=V=>{console.error(V)}}=s,g=(p?Vt:le)(t);if(!n)try{n=Fh("getDefaultStorage",()=>{var V;return(V=Ze)==null?void 0:V.localStorage})()}catch(V){h(V)}if(!n)return g;const v=lt(t),w=Th(v),E=(r=s.serializer)!=null?r:Lh[w],{pause:P,resume:N}=gh(g,()=>T(g.value),{flush:o,deep:i,eventFilter:d});return m&&l&&Te(m,"storage",G),G(),g;function T(V){try{if(V==null)n.removeItem(e);else{const U=E.write(V),ne=n.getItem(e);ne!==U&&(n.setItem(e,U),m&&(m==null||m.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ne,newValue:U,storageArea:n}))))}}catch(U){h(U)}}function W(V){const U=V?V.newValue:n.getItem(e);if(U==null)return c&&v!==null&&n.setItem(e,E.write(v)),v;if(!V&&u){const ne=E.read(U);return er(u)?u(ne,v):w==="object"&&!Array.isArray(ne)?Ji(Ji({},v),ne):ne}else return typeof U!="string"?U:E.read(U)}function G(V){if(!(V&&V.storageArea!==n)){if(V&&V.key==null){g.value=v;return}if(!(V&&V.key!==e)){P();try{g.value=W(V)}catch(U){h(U)}finally{V?Ft(N):N()}}}}}function Rh(e){return cs("(prefers-color-scheme: dark)",e)}var qh=Object.defineProperty,Uh=Object.defineProperties,Dh=Object.getOwnPropertyDescriptors,Qi=Object.getOwnPropertySymbols,Hh=Object.prototype.hasOwnProperty,jh=Object.prototype.propertyIsEnumerable,Xi=(e,t,n)=>t in e?qh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vh=(e,t)=>{for(var n in t||(t={}))Hh.call(t,n)&&Xi(e,n,t[n]);if(Qi)for(var n of Qi(t))jh.call(t,n)&&Xi(e,n,t[n]);return e},zh=(e,t)=>Uh(e,Dh(t));function eS(e,t={}){var n,s,r;const o=(n=t.draggingElement)!=null?n:Ze,i=(s=t.handle)!=null?s:e,l=le((r=lt(t.initialValue))!=null?r:{x:0,y:0}),c=le(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,p=g=>{lt(t.preventDefault)&&g.preventDefault(),lt(t.stopPropagation)&&g.stopPropagation()},m=g=>{var v;if(!u(g)||lt(t.exact)&&g.target!==lt(e))return;const w=lt(e).getBoundingClientRect(),E={x:g.clientX-w.left,y:g.clientY-w.top};((v=t.onStart)==null?void 0:v.call(t,E,g))!==!1&&(c.value=E,p(g))},d=g=>{var v;u(g)&&c.value&&(l.value={x:g.clientX-c.value.x,y:g.clientY-c.value.y},(v=t.onMove)==null||v.call(t,l.value,g),p(g))},h=g=>{var v;u(g)&&c.value&&(c.value=void 0,(v=t.onEnd)==null||v.call(t,l.value,g),p(g))};return Mt&&(Te(i,"pointerdown",m,!0),Te(o,"pointermove",d,!0),Te(o,"pointerup",h,!0)),zh(Vh({},sh(l)),{position:l,isDragging:O(()=>!!c.value),style:O(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var el=Object.getOwnPropertySymbols,Kh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable,Gh=(e,t)=>{var n={};for(var s in e)Kh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&el)for(var s of el(e))t.indexOf(s)<0&&Wh.call(e,s)&&(n[s]=e[s]);return n};function Yh(e,t,n={}){const s=n,{window:r=Ze}=s,o=Gh(s,["window"]);let i;const l=dr(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=Ue(()=>bt(e),m=>{c(),l.value&&r&&m&&(i=new ResizeObserver(t),i.observe(m,o))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Kt(p),{isSupported:l,stop:p}}function Zh(e,t={}){const{immediate:n=!0,window:s=Ze}=t,r=le(!1);let o=0,i=null;function l(p){if(!r.value||!s)return;const m=p-o;e({delta:m,timestamp:p}),o=p,i=s.requestAnimationFrame(l)}function c(){!r.value&&s&&(r.value=!0,i=s.requestAnimationFrame(l))}function u(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&c(),Kt(u),{isActive:Ut(r),pause:u,resume:c}}function Jh(e,t={width:0,height:0},n={}){const{window:s=Ze,box:r="content-box"}=n,o=O(()=>{var c,u;return(u=(c=bt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=le(t.width),l=le(t.height);return Yh(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&o.value){const p=bt(e);if(p){const m=s.getComputedStyle(p);i.value=parseFloat(m.width),l.value=parseFloat(m.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((m,{inlineSize:d})=>m+d,0),l.value=p.reduce((m,{blockSize:d})=>m+d,0)}else i.value=c.contentRect.width,l.value=c.contentRect.height},n),Ue(()=>bt(e),c=>{i.value=c?t.width:0,l.value=c?t.height:0}),{width:i,height:l}}const tl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Qh(e,t={}){const{document:n=_u,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=le(!1);let i=tl[0];const l=dr(()=>{if(n){for(const v of tl)if(v[1]in n)return i=v,!0}else return!1;return!1}),[c,u,p,,m]=i;async function d(){l.value&&(n!=null&&n[p]&&await n[u](),o.value=!1)}async function h(){if(!l.value)return;await d();const v=bt(r);v&&(await v[c](),o.value=!0)}async function g(){o.value?await d():await h()}return n&&Te(n,m,()=>{o.value=!!(n!=null&&n[p])},!1),s&&Kt(d),{isSupported:l,isFullscreen:o,enter:h,exit:d,toggle:g}}function tS(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:o=.1,window:i=Ze}=n,l=dr(()=>i&&"IntersectionObserver"in i);let c=Hs;const u=l.value?Ue(()=>({el:bt(e),root:bt(s)}),({el:m,root:d})=>{if(c(),!m)return;const h=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:o});h.observe(m),c=()=>{h.disconnect(),c=Hs}},{immediate:!0,flush:"post"}):Hs,p=()=>{c(),u()};return Kt(p),{isSupported:l,stop:p}}function At(e,t,n={}){const{window:s=Ze}=n;return Ih(e,t,s==null?void 0:s.localStorage,n)}const Xh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function eg(e={}){const{reactive:t=!1,target:n=Ze,aliasMap:s=Xh,passive:r=!0,onEventFired:o=Hs}=e,i=Qe(new Set),l={toJSON(){return{}},current:i},c=t?Qe(l):l,u=new Set,p=new Set;function m(v,w){v in c&&(t?c[v]=w:c[v].value=w)}function d(){i.clear();for(const v of p)m(v,!1)}function h(v,w){var E,P;const N=(E=v.key)==null?void 0:E.toLowerCase(),W=[(P=v.code)==null?void 0:P.toLowerCase(),N].filter(Boolean);N&&(w?i.add(N):i.delete(N));for(const G of W)p.add(G),m(G,w);N==="meta"&&!w?(u.forEach(G=>{i.delete(G),m(G,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&w&&[...i,...W].forEach(G=>u.add(G))}Te(n,"keydown",v=>(h(v,!0),o(v)),{passive:r}),Te(n,"keyup",v=>(h(v,!1),o(v)),{passive:r}),Te("blur",d,{passive:!0}),Te("focus",d,{passive:!0});const g=new Proxy(c,{get(v,w,E){if(typeof w!="string")return Reflect.get(v,w,E);if(w=w.toLowerCase(),w in s&&(w=s[w]),!(w in c))if(/[+_-]/.test(w)){const N=w.split(/[+_-]/g).map(T=>T.trim());c[w]=O(()=>N.every(T=>b(g[T])))}else c[w]=le(!1);const P=Reflect.get(v,w,E);return t?b(P):P}});return g}function nS(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:o=Ze,eventFilter:i}=e,l=le(r.x),c=le(r.y),u=le(null),p=v=>{t==="page"?(l.value=v.pageX,c.value=v.pageY):t==="client"?(l.value=v.clientX,c.value=v.clientY):t==="movement"&&(l.value=v.movementX,c.value=v.movementY),u.value="mouse"},m=()=>{l.value=r.x,c.value=r.y},d=v=>{if(v.touches.length>0){const w=v.touches[0];t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="touch"}},h=v=>i===void 0?p(v):i(()=>p(v),{}),g=v=>i===void 0?d(v):i(()=>d(v),{});return o&&(Te(o,"mousemove",h,{passive:!0}),Te(o,"dragover",h,{passive:!0}),n&&t!=="movement"&&(Te(o,"touchstart",g,{passive:!0}),Te(o,"touchmove",g,{passive:!0}),s&&Te(o,"touchend",m,{passive:!0}))),{x:l,y:c,sourceType:u}}var tn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tn||(tn={}));function tg(e,t={}){const n=du(e),{threshold:s=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:i}=t,l=Qe({x:0,y:0}),c=(G,V)=>{l.x=G,l.y=V},u=Qe({x:0,y:0}),p=(G,V)=>{u.x=G,u.y=V},m=O(()=>l.x-u.x),d=O(()=>l.y-u.y),{max:h,abs:g}=Math,v=O(()=>h(g(m.value),g(d.value))>=s),w=le(!1),E=le(!1),P=O(()=>v.value?g(m.value)>g(d.value)?m.value>0?tn.LEFT:tn.RIGHT:d.value>0?tn.UP:tn.DOWN:tn.NONE),N=G=>{var V,U,ne;const ae=G.buttons===0,de=G.buttons===1;return(ne=(U=(V=t.pointerTypes)==null?void 0:V.includes(G.pointerType))!=null?U:ae||de)!=null?ne:!0},T=[Te(e,"pointerdown",G=>{var V,U;if(!N(G))return;E.value=!0,(U=(V=n.value)==null?void 0:V.style)==null||U.setProperty("touch-action","none");const ne=G.target;ne==null||ne.setPointerCapture(G.pointerId);const{clientX:ae,clientY:de}=G;c(ae,de),p(ae,de),i==null||i(G)}),Te(e,"pointermove",G=>{if(!N(G)||!E.value)return;const{clientX:V,clientY:U}=G;p(V,U),!w.value&&v.value&&(w.value=!0),w.value&&(r==null||r(G))}),Te(e,"pointerup",G=>{var V,U;N(G)&&(w.value&&(o==null||o(G,P.value)),E.value=!1,w.value=!1,(U=(V=n.value)==null?void 0:V.style)==null||U.setProperty("touch-action","initial"))})],W=()=>T.forEach(G=>G());return{isSwiping:Ut(w),direction:Ut(P),posStart:Ut(l),posEnd:Ut(u),distanceX:m,distanceY:d,stop:W}}let ng=0;function sS(e,t={}){const n=le(!1),{document:s=_u,immediate:r=!0,manual:o=!1,id:i=`vueuse_styletag_${++ng}`}=t,l=le(e);let c=()=>{};const u=()=>{if(!s)return;const m=s.getElementById(i)||s.createElement("style");m.isConnected||(m.type="text/css",m.id=i,t.media&&(m.media=t.media),s.head.appendChild(m)),!n.value&&(c=Ue(l,d=>{m.textContent=d},{immediate:!0}),n.value=!0)},p=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(i)),n.value=!1)};return r&&!o&&Ra(u),o||Kt(p),{id:i,css:l,unload:p,load:u,isLoaded:Ut(n)}}var sg=Object.defineProperty,nl=Object.getOwnPropertySymbols,rg=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,sl=(e,t,n)=>t in e?sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ag=(e,t)=>{for(var n in t||(t={}))rg.call(t,n)&&sl(e,n,t[n]);if(nl)for(var n of nl(t))og.call(t,n)&&sl(e,n,t[n]);return e};function rS(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:o}=e,i=le(Go()+n),l=()=>i.value=Go()+n,c=o?()=>{l(),o(i.value)}:l,u=r==="requestAnimationFrame"?Zh(c,{immediate:s}):rh(c,r,{immediate:s});return t?ag({timestamp:i},u):i}var ig=Object.defineProperty,rl=Object.getOwnPropertySymbols,lg=Object.prototype.hasOwnProperty,cg=Object.prototype.propertyIsEnumerable,ol=(e,t,n)=>t in e?ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ug=(e,t)=>{for(var n in t||(t={}))lg.call(t,n)&&ol(e,n,t[n]);if(rl)for(var n of rl(t))cg.call(t,n)&&ol(e,n,t[n]);return e};const pg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ug({linear:Kf},pg);function Dt(e,t,n,s={}){var r,o,i;const{clone:l=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:m}=s,d=Wt(),h=n||(d==null?void 0:d.emit)||((r=d==null?void 0:d.$emit)==null?void 0:r.bind(d))||((i=(o=d==null?void 0:d.proxy)==null?void 0:o.$emit)==null?void 0:i.bind(d==null?void 0:d.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const v=E=>l?er(l)?l(E):Nh(E):E,w=()=>Hf(e[t])?v(e[t]):m;if(c){const E=w(),P=le(E);return Ue(()=>e[t],N=>P.value=v(N)),Ue(P,N=>{(N!==e[t]||p)&&h(g,N)},{deep:p}),P}else return O({get(){return w()},set(E){h(g,E)}})}function oS({window:e=Ze}={}){if(!e)return le(!1);const t=le(e.document.hasFocus());return Te(e,"blur",()=>{t.value=!1}),Te(e,"focus",()=>{t.value=!0}),t}function mg(e={}){const{window:t=Ze,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:o=!0}=e,i=le(n),l=le(s),c=()=>{t&&(o?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),Ra(c),Te("resize",c,{passive:!0}),r&&Te("orientationchange",c,{passive:!0}),{width:i,height:l}}function dg(){return yu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function yu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const fg=typeof Proxy=="function",hg="devtools-plugin:setup",gg="plugin:settings:set";let ss,Jo;function _g(){var e;return ss!==void 0||(typeof window<"u"&&window.performance?(ss=!0,Jo=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ss=!0,Jo=global.perf_hooks.performance):ss=!1),ss}function yg(){return _g()?Jo.now():Date.now()}class vg{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const i in t.settings){const l=t.settings[i];s[i]=l.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},s);try{const i=localStorage.getItem(r),l=JSON.parse(i);Object.assign(o,l)}catch{}this.fallbacks={getSettings(){return o},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}o=i},now(){return yg()}},n&&n.on(gg,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function xg(e,t){const n=e,s=yu(),r=dg(),o=fg&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))r.emit(hg,e,t);else{const i=o?new vg(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function wg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function bo(e,t){const n={};for(const s in t){const r=t[s];n[s]=yt(r)?r.map(e):e(r)}return n}const js=()=>{},yt=Array.isArray;function Pe(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const bg=/\/$/,$g=e=>e.replace(bg,"");function $o(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,l>-1?l:t.length),r=e(o)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=kg(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function Pg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function al(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function il(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Bn(t.matched[s],n.matched[r])&&vu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Sg(e[n],t[n]))return!1;return!0}function Sg(e,t){return yt(e)?ll(e,t):yt(t)?ll(t,e):e===t}function ll(e,t){return yt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function kg(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var tr;(function(e){e.pop="pop",e.push="push"})(tr||(tr={}));var Vs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vs||(Vs={}));function Bg(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$g(e)}const Eg=/^[^#]+#/;function Ng(e,t){return e.replace(Eg,"#")+t}function Cg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const co=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const o=document.querySelector(e.el);if(s&&o){Pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=Cg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cl(e,t){return(history.state?history.state.position-t:-1)+e}const Qo=new Map;function Tg(e,t){Qo.set(e,t)}function Mg(e){const t=Qo.get(e);return Qo.delete(e),t}let Og=()=>location.protocol+"//"+location.host;function xu(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let l=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),al(c,"")}return al(n,e)+s+r}function Ag(e,t,n,s){let r=[],o=[],i=null;const l=({state:d})=>{const h=xu(e,location),g=n.value,v=t.value;let w=0;if(d){if(n.value=h,t.value=d,i&&i===g){i=null;return}w=v?d.position-v.position:0}else s(h);r.forEach(E=>{E(n.value,g,{delta:w,type:tr.pop,direction:w?w>0?Vs.forward:Vs.back:Vs.unknown})})};function c(){i=n.value}function u(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return o.push(h),h}function p(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:co()}),"")}function m(){for(const d of o)d();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:m}}function ul(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?co():null}}function Lg(e){const{history:t,location:n}=window,s={value:xu(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,p){const m=e.indexOf("#"),d=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:Og()+e+c;try{t[p?"replaceState":"pushState"](u,"",d),r.value=u}catch(h){Pe("Error with push/replace State",h),n[p?"replace":"assign"](d)}}function i(c,u){const p=Ee({},t.state,ul(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});o(c,p,!0),s.value=c}function l(c,u){const p=Ee({},r.value,t.state,{forward:c,scroll:co()});t.state||Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(p.current,p,!0);const m=Ee({},ul(s.value,c,null),{position:p.position+1},u);o(c,m,!1),s.value=c}return{location:s,state:r,push:l,replace:i}}function Ig(e){e=Bg(e);const t=Lg(e),n=Ag(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Ee({location:"",base:e,go:s,createHref:Ng.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Rg(e){return typeof e=="string"||e&&typeof e=="object"}function wu(e){return typeof e=="string"||typeof e=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bu=Symbol("navigation failure");var pl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pl||(pl={}));const qg={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Dg(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function vs(e,t){return Ee(new Error(qg[e](t)),{type:e,[bu]:!0},t)}function Gt(e,t){return e instanceof Error&&bu in e&&(t==null||!!(e.type&t))}const Ug=["params","query","hash"];function Dg(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of Ug)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const ml="[^/]+?",Hg={sensitive:!1,strict:!1,start:!0,end:!0},jg=/[.+*?^${}()[\]/\\]/g;function Vg(e,t){const n=Ee({},Hg,t),s=[];let r=n.start?"^":"";const o=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const d=u[m];let h=40+(n.sensitive?.25:0);if(d.type===0)m||(r+="/"),r+=d.value.replace(jg,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:w,regexp:E}=d;o.push({name:g,repeatable:v,optional:w});const P=E||ml;if(P!==ml){h+=10;try{new RegExp(`(${P})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+T.message)}}let N=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;m||(N=w&&u.length<2?`(?:/${N})`:"/"+N),w&&(N+="?"),r+=N,h+=20,w&&(h+=-8),v&&(h+=-20),P===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(u){const p=u.match(i),m={};if(!p)return null;for(let d=1;d<p.length;d++){const h=p[d]||"",g=o[d-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function c(u){let p="",m=!1;for(const d of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const h of d)if(h.type===0)p+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:w}=h,E=g in u?u[g]:"";if(yt(E)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=yt(E)?E.join("/"):E;if(!P)if(w)d.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);p+=P}}return p||"/"}return{re:i,score:s,keys:o,parse:l,stringify:c}}function zg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Kg(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=zg(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(dl(s))return 1;if(dl(r))return-1}return r.length-s.length}function dl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wg={type:0,value:""},Gg=/[a-zA-Z0-9_]/;function Yg(e){if(!e)return[[]];if(e==="/")return[[Wg]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,c,u="",p="";function m(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&m(),i()):c===":"?(m(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Gg.test(c)?d():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),m(),i(),r}function Zg(e,t,n){const s=Vg(Yg(e.path),n);{const o=new Set;for(const i of s.keys)o.has(i.name)&&Pe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),o.add(i.name)}const r=Ee(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Jg(e,t){const n=[],s=new Map;t=gl({strict:!1,end:!0,sensitive:!1},t);function r(p){return s.get(p)}function o(p,m,d){const h=!d,g=Qg(p);n_(g,m),g.aliasOf=d&&d.record;const v=gl(t,p),w=[g];if("alias"in p){const N=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of N)w.push(Ee({},g,{components:d?d.record.components:g.components,path:T,aliasOf:d?d.record:g}))}let E,P;for(const N of w){const{path:T}=N;if(m&&T[0]!=="/"){const W=m.record.path,G=W[W.length-1]==="/"?"":"/";N.path=m.record.path+(T&&G+T)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(E=Zg(N,m,v),m&&T[0]==="/"&&s_(E,m),d?(d.alias.push(E),t_(d,E)):(P=P||E,P!==E&&P.alias.push(E),h&&p.name&&!hl(E)&&i(p.name)),g.children){const W=g.children;for(let G=0;G<W.length;G++)o(W[G],E,d&&d.children[G])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return P?()=>{i(P)}:js}function i(p){if(wu(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function l(){return n}function c(p){let m=0;for(;m<n.length&&Kg(p,n[m])>=0&&(p.record.path!==n[m].record.path||!$u(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!hl(p)&&s.set(p.record.name,p)}function u(p,m){let d,h={},g,v;if("name"in p&&p.name){if(d=s.get(p.name),!d)throw vs(1,{location:p});{const P=Object.keys(p.params||{}).filter(N=>!d.keys.find(T=>T.name===N));P.length&&Pe(`Discarded invalid param(s) "${P.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=d.record.name,h=Ee(fl(m.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),p.params&&fl(p.params,d.keys.map(P=>P.name))),g=d.stringify(h)}else if("path"in p)g=p.path,g.startsWith("/")||Pe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(P=>P.re.test(g)),d&&(h=d.parse(g),v=d.record.name);else{if(d=m.name?s.get(m.name):n.find(P=>P.re.test(m.path)),!d)throw vs(1,{location:p,currentLocation:m});v=d.record.name,h=Ee({},m.params,p.params),g=d.stringify(h)}const w=[];let E=d;for(;E;)w.unshift(E.record),E=E.parent;return{name:v,path:g,params:h,matched:w,meta:e_(w)}}return e.forEach(p=>o(p)),{addRoute:o,resolve:u,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function fl(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Qg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function hl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function e_(e){return e.reduce((t,n)=>Ee(t,n.meta),{})}function gl(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Xo(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function t_(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Xo.bind(null,n)))return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Xo.bind(null,n)))return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function n_(e,t){t&&t.record.name&&!e.name&&!e.path&&Pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function s_(e,t){for(const n of t.keys)if(!e.keys.find(Xo.bind(null,n)))return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function $u(e,t){return t.children.some(n=>n===e||$u(e,n))}const Pu=/#/g,r_=/&/g,o_=/\//g,a_=/=/g,i_=/\?/g,Su=/\+/g,l_=/%5B/g,c_=/%5D/g,ku=/%5E/g,u_=/%60/g,Bu=/%7B/g,p_=/%7C/g,Eu=/%7D/g,m_=/%20/g;function qa(e){return encodeURI(""+e).replace(p_,"|").replace(l_,"[").replace(c_,"]")}function d_(e){return qa(e).replace(Bu,"{").replace(Eu,"}").replace(ku,"^")}function ea(e){return qa(e).replace(Su,"%2B").replace(m_,"+").replace(Pu,"%23").replace(r_,"%26").replace(u_,"`").replace(Bu,"{").replace(Eu,"}").replace(ku,"^")}function f_(e){return ea(e).replace(a_,"%3D")}function h_(e){return qa(e).replace(Pu,"%23").replace(i_,"%3F")}function g_(e){return e==null?"":h_(e).replace(o_,"%2F")}function nr(e){try{return decodeURIComponent(""+e)}catch{Pe(`Error decoding "${e}". Using original value`)}return""+e}function __(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Su," "),i=o.indexOf("="),l=nr(i<0?o:o.slice(0,i)),c=i<0?null:nr(o.slice(i+1));if(l in t){let u=t[l];yt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function _l(e){let t="";for(let n in e){const s=e[n];if(n=f_(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(yt(s)?s.map(o=>o&&ea(o)):[s&&ea(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function y_(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const v_=Symbol("router view location matched"),yl=Symbol("router view depth"),Ua=Symbol("router"),Nu=Symbol("route location"),ta=Symbol("router view location");function Es(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function hn(e,t,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=m=>{m===!1?l(vs(4,{from:n,to:t})):m instanceof Error?l(m):Rg(m)?l(vs(2,{from:t,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),i())},u=e.call(s&&s.instances[r],t,n,x_(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(d=>c._called?d:(Pe(m),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Pe(m),l(new Error("Invalid navigation guard"));return}}p.catch(m=>l(m))})}function x_(e,t,n){let s=0;return function(){s++===1&&Pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Po(e,t,n,s){const r=[];for(const o of e){!o.components&&!o.children.length&&Pe(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const i in o.components){let l=o.components[i];{if(!l||typeof l!="object"&&typeof l!="function")throw Pe(`Component "${i}" in record with path "${o.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Pe(`Component "${i}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=l;l=()=>c}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Pe(`Component "${i}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(w_(l)){const u=(l.__vccOpts||l)[t];u&&r.push(hn(u,n,s,o,i))}else{let c=l();"catch"in c||(Pe(`Component "${i}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const p=wg(u)?u.default:u;o.components[i]=p;const d=(p.__vccOpts||p)[t];return d&&hn(d,n,s,o,i)()}))}}}return r}function w_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vl(e){const t=S(Ua),n=S(Nu),s=O(()=>t.resolve(b(e.to))),r=O(()=>{const{matched:c}=s.value,{length:u}=c,p=c[u-1],m=n.matched;if(!p||!m.length)return-1;const d=m.findIndex(Bn.bind(null,p));if(d>-1)return d;const h=xl(c[u-2]);return u>1&&xl(p)===h&&m[m.length-1].path!==h?m.findIndex(Bn.bind(null,c[u-2])):d}),o=O(()=>r.value>-1&&S_(n.params,s.value.params)),i=O(()=>r.value>-1&&r.value===n.matched.length-1&&vu(n.params,s.value.params));function l(c={}){return P_(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(js):Promise.resolve()}if(Xt){const c=Wt();if(c){const u={route:s.value,isActive:o.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),bs(()=>{u.route=s.value,u.isActive=o.value,u.isExactActive=i.value},{flush:"post"})}}return{route:s,href:O(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}const b_=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vl,setup(e,{slots:t}){const n=Qe(vl(e)),{options:s}=S(Ua),r=O(()=>({[wl(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wl(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:lo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),$_=b_;function P_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function S_(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!yt(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function xl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wl=(e,t,n)=>e??t??n,k_=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){E_();const s=S(ta),r=O(()=>e.route||s.value),o=S(yl,0),i=O(()=>{let u=b(o);const{matched:p}=r.value;let m;for(;(m=p[u])&&!m.components;)u++;return u}),l=O(()=>r.value.matched[i.value]);gt(yl,O(()=>i.value+1)),gt(v_,l),gt(ta,r);const c=le();return Ue(()=>[c.value,l.value,e.name],([u,p,m],[d,h,g])=>{p&&(p.instances[m]=u,h&&h!==p&&u&&u===d&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!Bn(p,h)||!d)&&(p.enterCallbacks[m]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,m=l.value,d=m&&m.components[p];if(!d)return bl(n.default,{Component:d,route:u});const h=m.props[p],g=h?h===!0?u.params:typeof h=="function"?h(u):h:null,w=lo(d,Ee({},g,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(m.instances[p]=null)},ref:c}));if(Xt&&w.ref){const E={depth:i.value,name:m.name,path:m.path,meta:m.meta};(yt(w.ref)?w.ref.map(N=>N.i):[w.ref.i]).forEach(N=>{N.__vrv_devtools=E})}return bl(n.default,{Component:w,route:u})||w}}});function bl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const B_=k_;function E_(){const e=Wt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ns(e,t){const n=Ee({},e,{matched:e.matched.map(s=>I_(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function wr(e){return{_custom:{display:e}}}let N_=0;function C_(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=N_++;xg({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,m)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ns(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:m})=>{if(m.__vrv_devtools){const d=m.__vrv_devtools;p.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Cu})}yt(m.__vrl_devtools)&&(m.__devtoolsApi=r,m.__vrl_devtools.forEach(d=>{let h=Mu,g="";d.isExactActive?(h=Tu,g="This is exactly active"):d.isActive&&(h=Fu,g="This link is active"),p.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:h})}))}),Ue(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(l),r.sendInspectorState(l)});const o="router:navigations:"+s;r.addTimelineLayer({id:o,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((p,m)=>{r.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:m.meta.__navigationId}})});let i=0;t.beforeEach((p,m)=>{const d={guard:wr("beforeEach"),from:Ns(m,"Current Location during this navigation"),to:Ns(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:o,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:d,groupId:p.meta.__navigationId}})}),t.afterEach((p,m,d)=>{const h={guard:wr("afterEach")};d?(h.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},h.status=wr("❌")):h.status=wr("✅"),h.from=Ns(m,"Current Location during this navigation"),h.to=Ns(p,"Target location"),r.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:h,logType:d?"warning":"default",groupId:p.meta.__navigationId}})});const l="router-inspector:"+s;r.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let m=n.getRoutes().filter(d=>!d.parent);m.forEach(Lu),p.filter&&(m=m.filter(d=>na(d,p.filter.toLowerCase()))),m.forEach(d=>Au(d,t.currentRoute.value)),p.rootNodes=m.map(Ou)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===l&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===l){const d=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);d&&(p.state={options:T_(d)})}}),r.sendInspectorTree(l),r.sendInspectorState(l)})}function F_(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function T_(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${F_(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Cu=15485081,Fu=2450411,Tu=8702998,M_=2282478,Mu=16486972,O_=6710886;function Ou(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:M_}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Mu}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Cu}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Tu}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Fu}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:O_});let s=n.__vd_id;return s==null&&(s=String(A_++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Ou)}}let A_=0;const L_=/^\/(.*)\/([a-z]*)$/;function Au(e,t){const n=t.matched.length&&Bn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Bn(s,e.record))),e.children.forEach(s=>Au(s,t))}function Lu(e){e.__vd_match=!1,e.children.forEach(Lu)}function na(e,t){const n=String(e.re).match(L_);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>na(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),o=nr(r);return!t.startsWith("/")&&(o.includes(t)||r.includes(t))||o.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>na(i,t))}function I_(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function R_(e){const t=Jg(e.routes,e),n=e.parseQuery||__,s=e.stringifyQuery||_l,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=Es(),i=Es(),l=Es(),c=Vt(pn);let u=pn;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=bo.bind(null,k=>""+k),m=bo.bind(null,g_),d=bo.bind(null,nr);function h(k,ee){let Y,te;return wu(k)?(Y=t.getRecordMatcher(k),te=ee):te=k,t.addRoute(te,Y)}function g(k){const ee=t.getRecordMatcher(k);ee?t.removeRoute(ee):Pe(`Cannot remove non-existent route "${String(k)}"`)}function v(){return t.getRoutes().map(k=>k.record)}function w(k){return!!t.getRecordMatcher(k)}function E(k,ee){if(ee=Ee({},ee||c.value),typeof k=="string"){const me=$o(n,k,ee.path),f=t.resolve({path:me.path},ee),_=r.createHref(me.fullPath);return _.startsWith("//")?Pe(`Location "${k}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):f.matched.length||Pe(`No match found for location with path "${k}"`),Ee(me,f,{params:d(f.params),hash:nr(me.hash),redirectedFrom:void 0,href:_})}let Y;if("path"in k)"params"in k&&!("name"in k)&&Object.keys(k.params).length&&Pe(`Path "${k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Y=Ee({},k,{path:$o(n,k.path,ee.path).path});else{const me=Ee({},k.params);for(const f in me)me[f]==null&&delete me[f];Y=Ee({},k,{params:m(k.params)}),ee.params=m(ee.params)}const te=t.resolve(Y,ee),ve=k.hash||"";ve&&!ve.startsWith("#")&&Pe(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),te.params=p(d(te.params));const $e=Pg(s,Ee({},k,{hash:d_(ve),path:te.path})),ge=r.createHref($e);return ge.startsWith("//")?Pe(`Location "${k}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):te.matched.length||Pe(`No match found for location with path "${"path"in k?k.path:k}"`),Ee({fullPath:$e,hash:ve,query:s===_l?y_(k.query):k.query||{}},te,{redirectedFrom:void 0,href:ge})}function P(k){return typeof k=="string"?$o(n,k,c.value.path):Ee({},k)}function N(k,ee){if(u!==k)return vs(8,{from:ee,to:k})}function T(k){return V(k)}function W(k){return T(Ee(P(k),{replace:!0}))}function G(k){const ee=k.matched[k.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let te=typeof Y=="function"?Y(k):Y;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=P(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Pe(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:k.query,hash:k.hash,params:"path"in te?{}:k.params},te)}}function V(k,ee){const Y=u=E(k),te=c.value,ve=k.state,$e=k.force,ge=k.replace===!0,me=G(Y);if(me)return V(Ee(P(me),{state:typeof me=="object"?Ee({},ve,me.state):ve,force:$e,replace:ge}),ee||Y);const f=Y;f.redirectedFrom=ee;let _;return!$e&&il(s,te,Y)&&(_=vs(16,{to:f,from:te}),Me(te,te,!0,!1)),(_?Promise.resolve(_):ne(f,te)).catch($=>Gt($)?Gt($,2)?$:ye($):Q($,f,te)).then($=>{if($){if(Gt($,2))return il(s,E($.to),f)&&ee&&(ee._count=ee._count?ee._count+1:1)>10?(Pe(`Detected an infinite redirection in a navigation guard when going from "${te.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V(Ee({replace:ge},P($.to),{state:typeof $.to=="object"?Ee({},ve,$.to.state):ve,force:$e}),ee||f)}else $=de(f,te,!0,ge,ve);return ae(f,te,$),$})}function U(k,ee){const Y=N(k,ee);return Y?Promise.reject(Y):Promise.resolve()}function ne(k,ee){let Y;const[te,ve,$e]=q_(k,ee);Y=Po(te.reverse(),"beforeRouteLeave",k,ee);for(const me of te)me.leaveGuards.forEach(f=>{Y.push(hn(f,k,ee))});const ge=U.bind(null,k,ee);return Y.push(ge),rs(Y).then(()=>{Y=[];for(const me of o.list())Y.push(hn(me,k,ee));return Y.push(ge),rs(Y)}).then(()=>{Y=Po(ve,"beforeRouteUpdate",k,ee);for(const me of ve)me.updateGuards.forEach(f=>{Y.push(hn(f,k,ee))});return Y.push(ge),rs(Y)}).then(()=>{Y=[];for(const me of k.matched)if(me.beforeEnter&&!ee.matched.includes(me))if(yt(me.beforeEnter))for(const f of me.beforeEnter)Y.push(hn(f,k,ee));else Y.push(hn(me.beforeEnter,k,ee));return Y.push(ge),rs(Y)}).then(()=>(k.matched.forEach(me=>me.enterCallbacks={}),Y=Po($e,"beforeRouteEnter",k,ee),Y.push(ge),rs(Y))).then(()=>{Y=[];for(const me of i.list())Y.push(hn(me,k,ee));return Y.push(ge),rs(Y)}).catch(me=>Gt(me,8)?me:Promise.reject(me))}function ae(k,ee,Y){for(const te of l.list())te(k,ee,Y)}function de(k,ee,Y,te,ve){const $e=N(k,ee);if($e)return $e;const ge=ee===pn,me=Xt?history.state:{};Y&&(te||ge?r.replace(k.fullPath,Ee({scroll:ge&&me&&me.scroll},ve)):r.push(k.fullPath,ve)),c.value=k,Me(k,ee,Y,ge),ye()}let J;function we(){J||(J=r.listen((k,ee,Y)=>{if(!ln.listening)return;const te=E(k),ve=G(te);if(ve){V(Ee(ve,{replace:!0}),te).catch(js);return}u=te;const $e=c.value;Xt&&Tg(cl($e.fullPath,Y.delta),co()),ne(te,$e).catch(ge=>Gt(ge,12)?ge:Gt(ge,2)?(V(ge.to,te).then(me=>{Gt(me,20)&&!Y.delta&&Y.type===tr.pop&&r.go(-1,!1)}).catch(js),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),Q(ge,te,$e))).then(ge=>{ge=ge||de(te,$e,!1),ge&&(Y.delta&&!Gt(ge,8)?r.go(-Y.delta,!1):Y.type===tr.pop&&Gt(ge,20)&&r.go(-1,!1)),ae(te,$e,ge)}).catch(js)}))}let Le=Es(),ke=Es(),Ie;function Q(k,ee,Y){ye(k);const te=ke.list();return te.length?te.forEach(ve=>ve(k,ee,Y)):(Pe("uncaught error during route navigation:"),console.error(k)),Promise.reject(k)}function pe(){return Ie&&c.value!==pn?Promise.resolve():new Promise((k,ee)=>{Le.add([k,ee])})}function ye(k){return Ie||(Ie=!k,we(),Le.list().forEach(([ee,Y])=>k?Y(k):ee()),Le.reset()),k}function Me(k,ee,Y,te){const{scrollBehavior:ve}=e;if(!Xt||!ve)return Promise.resolve();const $e=!Y&&Mg(cl(k.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return Ft().then(()=>ve(k,ee,$e)).then(ge=>ge&&Fg(ge)).catch(ge=>Q(ge,k,ee))}const dt=k=>r.go(k);let Xe;const ut=new Set,ln={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,hasRoute:w,getRoutes:v,resolve:E,options:e,push:T,replace:W,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:ke.add,isReady:pe,install(k){const ee=this;k.component("RouterLink",$_),k.component("RouterView",B_),k.config.globalProperties.$router=ee,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),Xt&&!Xe&&c.value===pn&&(Xe=!0,T(r.location).catch(ve=>{Pe("Unexpected error when starting the router:",ve)}));const Y={};for(const ve in pn)Y[ve]=O(()=>c.value[ve]);k.provide(Ua,ee),k.provide(Nu,Qe(Y)),k.provide(ta,c);const te=k.unmount;ut.add(k),k.unmount=function(){ut.delete(k),ut.size<1&&(u=pn,J&&J(),J=null,c.value=pn,Xe=!1,Ie=!1),te()},Xt&&C_(k,ee,t)}};return ln}function rs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function q_(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(u=>Bn(u,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(u=>Bn(u,c))||r.push(c))}return[n,s,r]}const So=le(!1),zs=le(!1),ps=le(!1),U_=le(!0),sa=Bh({xs:460,...bh}),Vn=mg(),Iu=eg(),D_=O(()=>Vn.height.value-Vn.width.value/wn>180),Ru=Qh(Mt?document.body:null),gs=wh(),H_=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=gs.value)==null?void 0:e.tagName)||"")||((t=gs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),j_=O(()=>{var e;return["BUTTON","A"].includes(((e=gs.value)==null?void 0:e.tagName)||"")});At("slidev-camera","default");At("slidev-mic","default");const Er=At("slidev-scale",0),ot=At("slidev-show-overview",!1),ko=At("slidev-presenter-cursor",!0),$l=At("slidev-show-editor",!1);At("slidev-editor-width",Mt?window.innerWidth*.4:100);const qu=fu(ot);function Pl(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function V_(e){return[-e[0],-e[1]]}function Bt(e,t){return[e[0]+t[0],e[1]+t[1]]}function wt(e,t){return[e[0]-t[0],e[1]-t[1]]}function kt(e,t){return[e[0]*t,e[1]*t]}function z_(e,t){return[e[0]/t,e[1]/t]}function Cs(e){return[e[1],-e[0]]}function Sl(e,t){return e[0]*t[0]+e[1]*t[1]}function K_(e,t){return e[0]===t[0]&&e[1]===t[1]}function W_(e){return Math.hypot(e[0],e[1])}function G_(e){return e[0]*e[0]+e[1]*e[1]}function kl(e,t){return G_(wt(e,t))}function Uu(e){return z_(e,W_(e))}function Y_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Fs(e,t,n){let s=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],i=e[1]-t[1],l=o*r-i*s,c=o*s+i*r;return[l+t[0],c+t[1]]}function ra(e,t,n){return Bt(e,kt(wt(t,e),n))}function Bl(e,t,n){return Bt(e,kt(t,n))}var{min:os,PI:Z_}=Math,El=.275,Ts=Z_+1e-4;function J_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:o=!0,easing:i=Q=>Q,start:l={},end:c={},last:u=!1}=t,{cap:p=!0,easing:m=Q=>Q*(2-Q)}=l,{cap:d=!0,easing:h=Q=>--Q*Q*Q+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,v=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,w=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,E=Math.pow(n*s,2),P=[],N=[],T=e.slice(0,10).reduce((Q,pe)=>{let ye=pe.pressure;if(o){let Me=os(1,pe.distance/n),dt=os(1,1-Me);ye=os(1,Q+(dt-Q)*(Me*El))}return(Q+ye)/2},e[0].pressure),W=Pl(n,r,e[e.length-1].pressure,i),G,V=e[0].vector,U=e[0].point,ne=U,ae=U,de=ne,J=!1;for(let Q=0;Q<e.length;Q++){let{pressure:pe}=e[Q],{point:ye,vector:Me,distance:dt,runningLength:Xe}=e[Q];if(Q<e.length-1&&g-Xe<3)continue;if(r){if(o){let $e=os(1,dt/n),ge=os(1,1-$e);pe=os(1,T+(ge-T)*($e*El))}W=Pl(n,r,pe,i)}else W=n/2;G===void 0&&(G=W);let ut=Xe<v?m(Xe/v):1,ln=g-Xe<w?h((g-Xe)/w):1;W=Math.max(.01,W*Math.min(ut,ln));let k=(Q<e.length-1?e[Q+1]:e[Q]).vector,ee=Q<e.length-1?Sl(Me,k):1,Y=Sl(Me,V)<0&&!J,te=ee!==null&&ee<0;if(Y||te){let $e=kt(Cs(V),W);for(let ge=1/13,me=0;me<=1;me+=ge)ae=Fs(wt(ye,$e),ye,Ts*me),P.push(ae),de=Fs(Bt(ye,$e),ye,Ts*-me),N.push(de);U=ae,ne=de,te&&(J=!0);continue}if(J=!1,Q===e.length-1){let $e=kt(Cs(Me),W);P.push(wt(ye,$e)),N.push(Bt(ye,$e));continue}let ve=kt(Cs(ra(k,Me,ee)),W);ae=wt(ye,ve),(Q<=1||kl(U,ae)>E)&&(P.push(ae),U=ae),de=Bt(ye,ve),(Q<=1||kl(ne,de)>E)&&(N.push(de),ne=de),T=pe,V=Me}let we=e[0].point.slice(0,2),Le=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),ke=[],Ie=[];if(e.length===1){if(!(v||w)||u){let Q=Bl(we,Uu(Cs(wt(we,Le))),-(G||W)),pe=[];for(let ye=1/13,Me=ye;Me<=1;Me+=ye)pe.push(Fs(Q,we,Ts*2*Me));return pe}}else{if(!(v||w&&e.length===1))if(p)for(let pe=1/13,ye=pe;ye<=1;ye+=pe){let Me=Fs(N[0],we,Ts*ye);ke.push(Me)}else{let pe=wt(P[0],N[0]),ye=kt(pe,.5),Me=kt(pe,.51);ke.push(wt(we,ye),wt(we,Me),Bt(we,Me),Bt(we,ye))}let Q=Cs(V_(e[e.length-1].vector));if(w||v&&e.length===1)Ie.push(Le);else if(d){let pe=Bl(Le,Q,W);for(let ye=1/29,Me=ye;Me<1;Me+=ye)Ie.push(Fs(pe,Le,Ts*3*Me))}else Ie.push(Bt(Le,kt(Q,W)),Bt(Le,kt(Q,W*.99)),wt(Le,kt(Q,W*.99)),wt(Le,kt(Q,W)))}return P.concat(Ie,N.reverse(),ke)}function Q_(e,t={}){var n;let{streamline:s=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:g,pressure:v=.5})=>[h,g,v]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(ra(l[0],h,g/4))}l.length===1&&(l=[...l,[...Bt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,m=c[0],d=l.length-1;for(let h=1;h<l.length;h++){let g=o&&h===d?l[h].slice(0,2):ra(m.point,l[h],i);if(K_(m.point,g))continue;let v=Y_(g,m.point);if(p+=v,h<d&&!u){if(p<r)continue;u=!0}m={point:g,pressure:l[h][2]>=0?l[h][2]:.5,vector:Uu(wt(m.point,g)),distance:v,runningLength:p},c.push(m)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function X_(e,t={}){return J_(Q_(e,t),t)}var e1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function jr(e,t){return e-t}function t1(e){return e<0?-1:1}function Vr(e){return[Math.abs(e),t1(e)]}function Du(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var n1=2,en=n1,$s=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const o=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*s,y:o.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(en))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},s1=class extends $s{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=X_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,o],i,l)=>{const[c,u]=l[(i+1)%l.length];return s.push(r,o,(r+c)/2,(o+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},r1=class extends $s{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vr(e.x-this.start.x),[s,r]=Vr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,c]=[this.start.y,this.start.y+s*r].sort(jr);this.attr("cx",(o+i)/2),this.attr("cy",(l+c)/2),this.attr("rx",(i-o)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Hu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var o1=class extends $s{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Du(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Hu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=s/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},a1=class extends $s{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vr(e.x-this.start.x),[s,r]=Vr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,c]=[this.start.y,this.start.y+s*r].sort(jr);this.attr("x",o),this.attr("y",l),this.attr("width",i-o),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function i1(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function l1(e,t,n){let s=t.x,r=t.y,o=n.x-s,i=n.y-r;if(o!==0||i!==0){const l=((e.x-s)*o+(e.y-r)*i)/(o*o+i*i);l>1?(s=n.x,r=n.y):l>0&&(s+=o*l,r+=i*l)}return o=e.x-s,i=e.y-r,o*o+i*i}function c1(e,t){let n=e[0];const s=[n];let r;for(let o=1,i=e.length;o<i;o++)r=e[o],i1(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function oa(e,t,n,s,r){let o=s,i=0;for(let l=t+1;l<n;l++){const c=l1(e[l],e[t],e[n]);c>o&&(i=l,o=c)}o>s&&(i-t>1&&oa(e,t,i,s,r),r.push(e[i]),n-i>1&&oa(e,i,n,s,r))}function u1(e,t){const n=e.length-1,s=[e[0]];return oa(e,0,n,t,s),s.push(e[n]),s}function Nl(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:c1(e,s),e=u1(e,s),e}var p1=class extends $s{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Du();const t=Hu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Nl(this.points,1,!0),this.count=0),this.attr("d",Fl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fl(Nl(this.points,1,!0))),!e.getTotalLength()))}};function m1(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Cl(e,t,n,s){const r=t||e,o=n||e,i=.2,l=m1(r,o),c=l.angle+(s?Math.PI:0),u=l.length*i,p=e.x+Math.cos(c)*u,m=e.y+Math.sin(c)*u;return{x:p,y:m}}function d1(e,t,n){const s=Cl(n[t-1],n[t-2],e),r=Cl(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(en)},${s.y.toFixed(en)} ${r.x.toFixed(en)},${r.y.toFixed(en)} ${e.x.toFixed(en)},${e.y.toFixed(en)}`}function Fl(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(en)},${n.y.toFixed(en)}`:`${t} ${d1(n,s,r)}`,"")}var f1=class extends $s{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const i=o.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=o.getPointAtLength(i*l/this.pathSubFactor),u=o.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,o=t.x2,i=e.y1,l=e.y2,c=t.y1,u=t.y2,p=(n-s)*(c-u)-(i-l)*(r-o),m=(n*l-i*s)*(r-o)-(n-s)*(r*u-c*o),d=(n*l-i*s)*(c-u)-(i-l)*(r*u-c*o),h=(g,v,w)=>g>=v&&g<=w?!0:g>=w&&g<=v;if(p===0)return!1;{const g={x:m/p,y:d/p};return h(g.x,n,s)&&h(g.y,i,l)&&h(g.x,r,o)&&h(g.y,c,u)}}};function h1(e){return{draw:new p1(e),stylus:new s1(e),line:new o1(e),rectangle:new a1(e),ellipse:new r1(e),eraseLine:new f1(e)}}var g1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=e1(),this._models=h1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function _1(e){return new g1(e)}const aa=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ht=At("slidev-drawing-enabled",!1),aS=At("slidev-drawing-pinned",!1),y1=le(!1),v1=le(!1),x1=le(!1),sr=le(!1),In=Yf(At("slidev-drawing-brush",{color:aa[0],size:4,mode:"stylus"})),Tl=le("stylus"),ju=O(()=>Fe.drawings.syncAll||Nt.value);let rr=!1;const Ms=O({get(){return Tl.value},set(e){Tl.value=e,e==="arrow"?(In.mode="line",In.arrowEnd=!0):(In.mode=e,In.arrowEnd=!1)}}),w1=Qe({brush:In,acceptsInputTypes:O(()=>Ht.value&&(!Fe.drawings.presenterOnly||Nt.value)?void 0:["pen"]),coordinateTransform:!1}),ct=ya(_1(w1));function b1(){ct.clear(),ju.value&&uu(Ge.value,"")}function Da(){var e;v1.value=ct.canRedo(),y1.value=ct.canUndo(),x1.value=!!((e=ct.el)!=null&&e.children.length)}function $1(e){rr=!0;const t=Dr[e||Ge.value];t!=null?ct.load(t):ct.clear(),Da(),rr=!1}ct.on("changed",()=>{if(Da(),!rr){const e=ct.dump(),t=Ge.value;(Dr[t]||"")!==e&&ju.value&&uu(t,ct.dump())}});qf(e=>{rr=!0,e[Ge.value]!=null&&ct.load(e[Ge.value]||""),rr=!1,Da()});Ft(()=>{Ue(Ge,()=>{ct.mounted&&$1()},{immediate:!0})});ct.on("start",()=>sr.value=!0);ct.on("end",()=>sr.value=!1);window.addEventListener("keydown",e=>{if(!Ht.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ct.redo():ct.undo():e.code==="Escape"?Ht.value=!1:e.code==="KeyL"&&t?Ms.value="line":e.code==="KeyA"&&t?Ms.value="arrow":e.code==="KeyS"&&t?Ms.value="stylus":e.code==="KeyR"&&t?Ms.value="rectangle":e.code==="KeyE"&&t?Ms.value="ellipse":e.code==="KeyC"&&t?b1():e.code.startsWith("Digit")&&t&&+e.code[5]<=aa.length?In.color=aa[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ke(...e){return O(()=>e.every(t=>lt(t)))}function ft(e){return O(()=>!lt(e))}const Ml=Rh(),Bo=At("slidev-color-schema","auto"),ia=O(()=>Fe.colorSchema!=="auto"),Ha=O({get(){return ia.value?Fe.colorSchema==="dark":Bo.value==="auto"?Ml.value:Bo.value==="dark"},set(e){ia.value||(Bo.value=e===Ml.value?"auto":e?"dark":"light")}}),Vu=fu(Ha);Mt&&Ue(Ha,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Nr=le(1),Cr=O(()=>ze.length-1),_t=le(0),ja=le(0);function P1(){_t.value>Nr.value&&(_t.value-=1)}function S1(){_t.value<Cr.value&&(_t.value+=1)}function k1(){if(_t.value>Nr.value){let e=_t.value-ja.value;e<Nr.value&&(e=Nr.value),_t.value=e}}function B1(){if(_t.value<Cr.value){let e=_t.value+ja.value;e>Cr.value&&(e=Cr.value),_t.value=e}}function E1(){const{escape:e,space:t,shift:n,left:s,right:r,up:o,down:i,enter:l,d:c,g:u,o:p}=Iu;let m=[{name:"next_space",key:Ke(t,ft(n)),fn:zn,autoRepeat:!0},{name:"prev_space",key:Ke(t,n),fn:Kn,autoRepeat:!0},{name:"next_right",key:Ke(r,ft(n),ft(ot)),fn:zn,autoRepeat:!0},{name:"prev_left",key:Ke(s,ft(n),ft(ot)),fn:Kn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:zn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Kn,autoRepeat:!0},{name:"next_down",key:Ke(i,ft(ot)),fn:Kr,autoRepeat:!0},{name:"prev_up",key:Ke(o,ft(ot)),fn:()=>Wr(!1),autoRepeat:!0},{name:"next_shift",key:Ke(r,n),fn:Kr,autoRepeat:!0},{name:"prev_shift",key:Ke(s,n),fn:()=>Wr(!1),autoRepeat:!0},{name:"toggle_dark",key:Ke(c,ft(Ht)),fn:Vu},{name:"toggle_overview",key:Ke(p,ft(Ht)),fn:qu},{name:"hide_overview",key:Ke(e,ft(Ht)),fn:()=>ot.value=!1},{name:"goto",key:Ke(u,ft(Ht)),fn:()=>ps.value=!ps.value},{name:"next_overview",key:Ke(r,ot),fn:S1},{name:"prev_overview",key:Ke(s,ot),fn:P1},{name:"up_overview",key:Ke(o,ot),fn:k1},{name:"down_overview",key:Ke(i,ot),fn:B1},{name:"goto_from_overview",key:Ke(l,ot),fn:()=>{ws(_t.value),ot.value=!1}}];const d=new Set(m.map(g=>g.name));if(m.filter(g=>g.name&&d.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return m}const zu=Ke(ft(H_),ft(j_),U_);function N1(e,t,n=!1){typeof e=="string"&&(e=Iu[e]);const s=Ke(e,zu);let r=0,o;const i=()=>{if(clearTimeout(o),!s.value){r=0;return}n&&(o=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return Ue(s,i,{flush:"sync"})}function C1(e,t){return xh(e,n=>{zu.value&&(n.repeat||t())})}function F1(){const e=E1();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&N1(n.key,n.fn,n.autoRepeat)}),C1("f",()=>Ru.toggle())}const T1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M1=a("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),O1=[M1];function A1(e,t){return y(),X("svg",T1,O1)}const L1={name:"carbon-close",render:A1};function Va(e,t=""){var r,o;const n=["slidev-page",t],s=(o=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:o.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const I1=Be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;S(C);const n=le(),s=Jh(n),r=O(()=>t.width?t.width:s.width.value),o=O(()=>t.width?t.width/wn:s.height.value);t.width&&bs(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const i=O(()=>r.value/o.value),l=O(()=>t.scale&&!xs.value?t.scale:i.value<wn?r.value/bn:o.value*wn/bn),c=O(()=>({height:`${La}px`,width:`${bn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=O(()=>({"select-none":!Fe.selectable,"slidev-code-line-numbers":Fe.lineNumbers}));return gt(lu,l),(p,m)=>(y(),X("div",{id:"slide-container",ref_key:"root",ref:n,class:je(b(u))},[a("div",{id:"slide-content",style:tt(b(c))},[zt(p.$slots,"default")],4),zt(p.$slots,"controls")],2))}});const F=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Ku=F(I1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlideContainer.vue"]]),za=Be({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Dt(e,"clicks",t),s=Dt(e,"clicksElements",t),r=Dt(e,"clicksDisabled",t),o=Dt(e,"clicksOrderMap",t);s.value.length=0,gt(Ef,e.route),gt(Nf,e.context),gt(ou,n),gt(iu,r),gt(au,s),gt(Bf,o)},render(){var e,t;return this.$props.is?lo(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),R1=["innerHTML"],q1=Be({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return S(C),(t,n)=>b(Dr)[e.page]?(y(),X("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Dr)[e.page]},null,8,R1)):re("v-if",!0)}}),Wu=F(q1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),U1=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"})),D1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},H1=["onClick"],j1=Be({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t);function r(){s.value=!1}function o(h){ws(h),r()}function i(h){return h===_t.value}const l=sa.smaller("xs"),c=sa.smaller("sm"),u=4*16*2,p=2*16,m=O(()=>l.value?Vn.width.value-u:c.value?(Vn.width.value-u-p)/2:300),d=O(()=>Math.floor((Vn.width.value-u)/(m.value+p)));return bs(()=>{_t.value=Ge.value,ja.value=d.value}),(h,g)=>{const v=L1;return y(),X(Ne,null,[Ca(a("div",D1,[a("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${b(m)}px,1fr))`)},[(y(!0),X(Ne,null,pr(b(ze).slice(0,-1),(w,E)=>(y(),X("div",{key:w.path,class:"relative"},[a("div",{class:je(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(E+1),"border-gray-400":!i(E+1)}]),style:tt(b(Ia)),onClick:P=>o(+w.path)},[(y(),B(Ku,{key:w.path,width:b(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:L(()=>[ie(b(za),{is:w==null?void 0:w.component,"clicks-disabled":!0,class:je(b(Va)(w)),route:w,context:"overview"},null,8,["is","class","route"]),ie(Wu,{page:+w.path},null,8,["page"])]),_:2},1032,["width"]))],14,H1),a("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${b(m)+5}px`)},sn(E+1),5)]))),128))],4)],512),[[ru,b(s)]]),b(s)?(y(),X("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[ie(v)])):re("v-if",!0)],64)}}});const V1=F(j1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),z1="/math201/slides/numpy/assets/logo-b72bde5d.png",K1={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},W1=Be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t);function r(){s.value=!1}return(o,i)=>(y(),B(Cc,null,[b(s)?(y(),X("div",K1,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>r())}),a("div",{class:je(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[zt(o.$slots,"default")],2)])):re("v-if",!0)],1024))}}),G1=F(W1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Modal.vue"]]),Y1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Z1=["innerHTML"],J1=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:z1,alt:"Slidev"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),x("dev ")])])],-1),Q1=Be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t),r=O(()=>typeof Fe.info=="string");return(o,i)=>(y(),B(G1,{modelValue:b(s),"onUpdate:modelValue":i[0]||(i[0]=l=>Se(s)?s.value=l:null),class:"px-6 py-4"},{default:L(()=>[a("div",Y1,[b(r)?(y(),X("div",{key:0,class:"mb-4",innerHTML:b(Fe).info},null,8,Z1)):re("v-if",!0),J1])]),_:1},8,["modelValue"]))}});const X1=F(Q1,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ey=["disabled","onKeydown"],ty=Be({__name:"Goto",setup(e){S(C);const t=le(),n=le(""),s=O(()=>{if(n.value.startsWith("/"))return!!ze.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=ap.value}});function r(){s.value&&(n.value.startsWith("/")?ws(n.value.substring(1)):ws(+n.value)),o()}function o(){ps.value=!1}return Ue(ps,async i=>{var l,c;i?(await Ft(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),Ue(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,l)=>(y(),X("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(ps)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ca(a("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(ps),class:je(["outline-none bg-transparent",{"text-red-400":!b(s)&&n.value}]),placeholder:"Goto...",onKeydown:[qi(r,["enter"]),qi(o,["escape"])],onBlur:o},null,42,ey),[[vf,n.value]])],2))}}),ny=F(ty,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Goto.vue"]]),sy=Be({__name:"Controls",setup(e){S(C);const t=Vt(),n=Vt();return(s,r)=>(y(),X(Ne,null,[ie(V1,{modelValue:b(ot),"onUpdate:modelValue":r[0]||(r[0]=o=>Se(ot)?ot.value=o:null)},null,8,["modelValue"]),ie(ny),b(t)?(y(),B(b(t),{key:0})):re("v-if",!0),b(n)?(y(),B(b(n),{key:1,modelValue:b(So),"onUpdate:modelValue":r[1]||(r[1]=o=>Se(So)?So.value=o:null)},null,8,["modelValue"])):re("v-if",!0),b(Fe).info?(y(),B(X1,{key:2,modelValue:b(zs),"onUpdate:modelValue":r[2]||(r[2]=o=>Se(zs)?zs.value=o:null)},null,8,["modelValue"])):re("v-if",!0)],64))}}),ry=F(sy,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Controls.vue"]]),oy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ay=a("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),iy=[ay];function ly(e,t){return y(),X("svg",oy,iy)}const cy={name:"carbon-settings-adjust",render:ly},uy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},py=a("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),my=a("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),dy=[py,my];function fy(e,t){return y(),X("svg",uy,dy)}const hy={name:"carbon-information",render:fy},gy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_y=a("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),yy=[_y];function vy(e,t){return y(),X("svg",gy,yy)}const xy={name:"carbon-download",render:vy},wy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},by=a("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),$y=a("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Py=[by,$y];function Sy(e,t){return y(),X("svg",wy,Py)}const ky={name:"carbon-user-speaker",render:Sy},By={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ey=a("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ny=a("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Cy=[Ey,Ny];function Fy(e,t){return y(),X("svg",By,Cy)}const Ty={name:"carbon-presentation-file",render:Fy},My={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Oy=a("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ay=[Oy];function Ly(e,t){return y(),X("svg",My,Ay)}const Iy={name:"carbon-pen",render:Ly},Ry={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qy=a("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Uy=a("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Dy=[qy,Uy];function Hy(e,t){return y(),X("svg",Ry,Dy)}const jy={name:"ph-cursor-duotone",render:Hy},Vy={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},zy=a("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Ky=[zy];function Wy(e,t){return y(),X("svg",Vy,Ky)}const Gu={name:"ph-cursor-fill",render:Wy},Gy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yy=a("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Zy=[Yy];function Jy(e,t){return y(),X("svg",Gy,Zy)}const Qy={name:"carbon-sun",render:Jy},Xy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e0=a("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),t0=[e0];function n0(e,t){return y(),X("svg",Xy,t0)}const s0={name:"carbon-moon",render:n0},r0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o0=a("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),a0=[o0];function i0(e,t){return y(),X("svg",r0,a0)}const l0={name:"carbon-apps",render:i0},c0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u0=a("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),p0=[u0];function m0(e,t){return y(),X("svg",c0,p0)}const d0={name:"carbon-arrow-right",render:m0},f0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=a("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g0=[h0];function _0(e,t){return y(),X("svg",f0,g0)}const y0={name:"carbon-arrow-left",render:_0},v0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x0=a("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w0=[x0];function b0(e,t){return y(),X("svg",v0,w0)}const $0={name:"carbon-maximize",render:b0},P0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=a("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),k0=[S0];function B0(e,t){return y(),X("svg",P0,k0)}const E0={name:"carbon-minimize",render:B0},N0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C0=a("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),F0=[C0];function T0(e,t){return y(),X("svg",N0,F0)}const M0={name:"carbon-checkmark",render:T0},O0={class:"select-list"},A0={class:"title"},L0={class:"items"},I0=["onClick"],R0=Be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t,{passive:!0});return(r,o)=>{const i=M0;return y(),X("div",O0,[a("div",A0,sn(e.title),1),a("div",L0,[(y(!0),X(Ne,null,pr(e.items,l=>(y(),X("div",{key:l.value,class:je(["item",{active:b(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[ie(i,{class:je(["text-green-500",{"opacity-0":b(s)!==l.value}])},null,8,["class"]),x(" "+sn(l.display||l.value),1)],10,I0))),128))])])}}});const q0=F(R0,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SelectList.vue"]]),U0={class:"text-sm"},D0=Be({__name:"Settings",setup(e){S(C);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(y(),X("div",U0,[ie(q0,{modelValue:b(Er),"onUpdate:modelValue":s[0]||(s[0]=r=>Se(Er)?Er.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),H0=F(D0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Settings.vue"]]),j0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},V0=Be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;S(C);const s=Dt(n,"modelValue",t,{passive:!0}),r=le();return yh(r,()=>{s.value=!1}),(o,i)=>(y(),X("div",{ref_key:"el",ref:r,class:"flex relative"},[a("button",{class:je({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>s.value=!b(s))},[zt(o.$slots,"button",{class:je({disabled:e.disabled})})],2),(y(),B(Cc,null,[b(s)?(y(),X("div",j0,[zt(o.$slots,"menu")])):re("v-if",!0)],1024))],512))}}),z0=F(V0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/MenuButton.vue"]]),K0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},W0={__name:"VerticalDivider",setup(e){return S(C),(t,n)=>(y(),X("div",K0))}},br=F(W0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),G0={render(){return[]}},Y0={class:"slidev-icon-btn"},Z0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},J0={class:"my-auto"},Q0={class:"opacity-50"},X0=Be({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;S(C);const n=sa.smaller("md"),{isFullscreen:s,toggle:r}=Ru,o=O(()=>ca.value?`?password=${ca.value}`:""),i=O(()=>`/presenter/${Ge.value}${o.value}`),l=O(()=>`/${Ge.value}${o.value}`),c=le(),u=()=>{c.value&&gs.value&&c.value.contains(gs.value)&&gs.value.blur()},p=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=Vt(),d=Vt();return $n(()=>import("./DrawingControls-06efc921.js"),[]).then(h=>d.value=h.default),(h,g)=>{const v=E0,w=$0,E=y0,P=d0,N=l0,T=s0,W=Qy,G=Gu,V=jy,U=Iy,ne=Ty,ae=Mc("RouterLink"),de=ky,J=xy,we=hy,Le=cy;return y(),X("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[a("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(p)]),onMouseleave:u},[b(Qt)?re("v-if",!0):(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...ke)=>b(r)&&b(r)(...ke))},[b(s)?(y(),B(v,{key:0})):(y(),B(w,{key:1}))])),a("button",{class:je(["slidev-icon-btn",{disabled:!b(B6)}]),onClick:g[1]||(g[1]=(...ke)=>b(Kn)&&b(Kn)(...ke))},[ie(E)],2),a("button",{class:je(["slidev-icon-btn",{disabled:!b(k6)}]),title:"Next",onClick:g[2]||(g[2]=(...ke)=>b(zn)&&b(zn)(...ke))},[ie(P)],2),b(Qt)?re("v-if",!0):(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=ke=>b(qu)())},[ie(N)])),b(ia)?re("v-if",!0):(y(),X("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=ke=>b(Vu)())},[b(Ha)?(y(),B(T,{key:0})):(y(),B(W,{key:1}))])),ie(br),b(Qt)?re("v-if",!0):(y(),X(Ne,{key:3},[!b(Nt)&&!b(n)&&b(m)?(y(),X(Ne,{key:0},[ie(b(m)),ie(br)],64)):re("v-if",!0),b(Nt)?(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=ke=>ko.value=!b(ko))},[b(ko)?(y(),B(G,{key:0})):(y(),B(V,{key:1,class:"opacity-50"}))])):re("v-if",!0)],64)),(!b(Fe).drawings.presenterOnly||b(Nt))&&!b(Qt)?(y(),X(Ne,{key:4},[a("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=ke=>Ht.value=!b(Ht))},[ie(U),b(Ht)?(y(),X("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:b(In).color})},null,4)):re("v-if",!0)]),ie(br)],64)):re("v-if",!0),b(Qt)?re("v-if",!0):(y(),X(Ne,{key:5},[b(Nt)?(y(),B(ae,{key:0,to:b(l),class:"slidev-icon-btn",title:"Play Mode"},{default:L(()=>[ie(ne)]),_:1},8,["to"])):re("v-if",!0),b(b6)?(y(),B(ae,{key:1,to:b(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:L(()=>[ie(de)]),_:1},8,["to"])):re("v-if",!0),re("v-if",!0)],64)),(y(),X(Ne,{key:6},[b(Fe).download?(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...ke)=>b(Dl)&&b(Dl)(...ke))},[ie(J)])):re("v-if",!0)],64)),!b(Nt)&&b(Fe).info&&!b(Qt)?(y(),X("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=ke=>zs.value=!b(zs))},[ie(we)])):re("v-if",!0),!b(Nt)&&!b(Qt)?(y(),B(z0,{key:8},{button:L(()=>[a("button",Y0,[ie(Le)])]),menu:L(()=>[ie(H0)]),_:1})):re("v-if",!0),b(Qt)?re("v-if",!0):(y(),B(br,{key:9})),a("div",Z0,[a("div",J0,[x(sn(b(Ge))+" ",1),a("span",Q0,"/ "+sn(b(ap)),1)])]),ie(b(G0))],34)],512)}}}),ev=F(X0,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/NavControls.vue"]]),Yu={render(){return[]}},Zu={render(){return[]}},tv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},nv=Be({__name:"PresenterMouse",setup(e){return S(C),(t,n)=>{const s=Gu;return b(wo).cursor?(y(),X("div",tv,[ie(s,{class:"absolute",style:tt({left:`${b(wo).cursor.x}%`,top:`${b(wo).cursor.y}%`})},null,8,["style"])])):re("v-if",!0)}}}),sv=F(nv,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),rv=Be({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){S(C),Ue(at,()=>{var s,r;(s=at.value)!=null&&s.meta&&at.value.meta.preload!==!1&&(at.value.meta.__preloaded=!0),(r=Eo.value)!=null&&r.meta&&Eo.value.meta.preload!==!1&&(Eo.value.meta.__preloaded=!0)},{immediate:!0});const t=Vt();$n(()=>import("./DrawingLayer-5c7229af.js"),[]).then(s=>t.value=s.default);const n=O(()=>ze.filter(s=>{var r;return((r=s.meta)==null?void 0:r.__preloaded)||s===at.value}));return(s,r)=>(y(),X(Ne,null,[re(" Global Bottom "),ie(b(Zu)),re(" Slides "),ie(df,Aa(b(C6),{id:"slideshow",tag:"div"}),{default:L(()=>[(y(!0),X(Ne,null,pr(b(n),o=>{var i;return Ca((y(),B(b(za),{key:o.path,is:o==null?void 0:o.component,clicks:o===b(at)?b(Zn):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:je(b(Va)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ru,o===b(at)]])}),128))]),_:1},16),re(" Global Top "),ie(b(Yu)),b(t)?(y(),B(b(t),{key:0})):re("v-if",!0),b(Nt)?re("v-if",!0):(y(),B(sv,{key:1}))],64))}});const ov=F(rv,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/SlidesShow.vue"]]),av=Be({__name:"PrintStyle",setup(e){S(C);function t(n,{slots:s}){if(s.default)return lo("style",s.default())}return(n,s)=>(y(),B(t,null,{default:L(()=>[x(" @page { size: "+sn(b(bn))+"px "+sn(b(La))+"px; margin: 0px; } ",1)]),_:1}))}}),Ju=F(av,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintStyle.vue"]]),iv=Be({__name:"Play",setup(e){S(C),F1();const t=le();function n(o){var i;$l.value||((i=o.target)==null?void 0:i.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?zn():Kn())}F6(t);const s=O(()=>D_.value||$l.value);Vt();const r=Vt();return $n(()=>import("./DrawingControls-06efc921.js"),[]).then(o=>r.value=o.default),(o,i)=>(y(),X(Ne,null,[b(xs)?(y(),B(Ju,{key:0})):re("v-if",!0),a("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tt(b(Ia))},[ie(Ku,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:b(xs)?b(Vn).width.value:void 0,scale:b(Er),onPointerdown:n},{default:L(()=>[ie(ov,{context:"slide"})]),controls:L(()=>[a("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(s)?"opacity-100 right-0":"opacity-0 p-2",b(sr)?"pointer-events-none":""]])},[ie(ev,{class:"m-auto",persist:b(s)},null,8,["persist"])],2),!b(Fe).drawings.presenterOnly&&!b(Qt)&&b(r)?(y(),B(b(r),{key:0,class:"ml-0"})):re("v-if",!0)]),_:1},8,["style","width","scale"]),re("v-if",!0)],4),ie(ry)],64))}}),lv=F(iv,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Qu(e){return typeof e>"u"||e===null}function cv(e){return typeof e=="object"&&e!==null}function uv(e){return Array.isArray(e)?e:Qu(e)?[]:[e]}function pv(e,t){var n,s,r,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)r=o[n],e[r]=t[r];return e}function mv(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function dv(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var fv=Qu,hv=cv,gv=uv,_v=mv,yv=dv,vv=pv,Ka={isNothing:fv,isObject:hv,toArray:gv,repeat:_v,isNegativeZero:yv,extend:vv};function Xu(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function or(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}or.prototype=Object.create(Error.prototype);or.prototype.constructor=or;or.prototype.toString=function(t){return this.name+": "+Xu(this,t)};var An=or,xv=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],wv=["scalar","sequence","mapping"];function bv(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function $v(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(xv.indexOf(n)===-1)throw new An('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=bv(t.styleAliases||null),wv.indexOf(this.kind)===-1)throw new An('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var nt=$v;function Ol(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(o,i){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(r=i)}),n[r]=s}),n}function Pv(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function la(e){return this.extend(e)}la.prototype.extend=function(t){var n=[],s=[];if(t instanceof nt)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new An("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof nt))throw new An("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new An("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new An("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof nt))throw new An("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(la.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Ol(r,"implicit"),r.compiledExplicit=Ol(r,"explicit"),r.compiledTypeMap=Pv(r.compiledImplicit,r.compiledExplicit),r};var Sv=la,kv=new nt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Bv=new nt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Ev=new nt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Nv=new Sv({explicit:[kv,Bv,Ev]});function Cv(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Fv(){return null}function Tv(e){return e===null}var Mv=new nt("tag:yaml.org,2002:null",{kind:"scalar",resolve:Cv,construct:Fv,predicate:Tv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ov(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Av(e){return e==="true"||e==="True"||e==="TRUE"}function Lv(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Iv=new nt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ov,construct:Av,predicate:Lv,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Rv(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function qv(e){return 48<=e&&e<=55}function Uv(e){return 48<=e&&e<=57}function Dv(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Rv(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!qv(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!Uv(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function Hv(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function jv(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ka.isNegativeZero(e)}var Vv=new nt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Dv,construct:Hv,predicate:jv,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),zv=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Kv(e){return!(e===null||!zv.test(e)||e[e.length-1]==="_")}function Wv(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Gv=/^[-+]?[0-9]+e/;function Yv(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ka.isNegativeZero(e))return"-0.0";return n=e.toString(10),Gv.test(n)?n.replace("e",".e"):n}function Zv(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ka.isNegativeZero(e))}var Jv=new nt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Kv,construct:Wv,predicate:Zv,represent:Yv,defaultStyle:"lowercase"}),Qv=Nv.extend({implicit:[Mv,Iv,Vv,Jv]}),Xv=Qv,ep=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),tp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function e2(e){return e===null?!1:ep.exec(e)!==null||tp.exec(e)!==null}function t2(e){var t,n,s,r,o,i,l,c=0,u=null,p,m,d;if(t=ep.exec(e),t===null&&(t=tp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(o=+t[4],i=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],m=+(t[11]||0),u=(p*60+m)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,s,r,o,i,l,c)),u&&d.setTime(d.getTime()-u),d}function n2(e){return e.toISOString()}var s2=new nt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:e2,construct:t2,instanceOf:Date,represent:n2});function r2(e){return e==="<<"||e===null}var o2=new nt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:r2}),Wa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a2(e){if(e===null)return!1;var t,n,s=0,r=e.length,o=Wa;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function i2(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,o=Wa,i=0,l=[];for(t=0;t<r;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|o.indexOf(s.charAt(t));return n=r%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function l2(e){var t="",n=0,s,r,o=e.length,i=Wa;for(s=0;s<o;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=o%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function c2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var u2=new nt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a2,construct:i2,predicate:c2,represent:l2}),p2=Object.prototype.hasOwnProperty,m2=Object.prototype.toString;function d2(e){if(e===null)return!0;var t=[],n,s,r,o,i,l=e;for(n=0,s=l.length;n<s;n+=1){if(r=l[n],i=!1,m2.call(r)!=="[object Object]")return!1;for(o in r)if(p2.call(r,o))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function f2(e){return e!==null?e:[]}var h2=new nt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:d2,construct:f2}),g2=Object.prototype.toString;function _2(e){if(e===null)return!0;var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],g2.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;o[t]=[r[0],s[r[0]]]}return!0}function y2(e){if(e===null)return[];var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),o[t]=[r[0],s[r[0]]];return o}var v2=new nt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:_2,construct:y2}),x2=Object.prototype.hasOwnProperty;function w2(e){if(e===null)return!0;var t,n=e;for(t in n)if(x2.call(n,t)&&n[t]!==null)return!1;return!0}function b2(e){return e!==null?e:{}}var $2=new nt("tag:yaml.org,2002:set",{kind:"mapping",resolve:w2,construct:b2});Xv.extend({implicit:[s2,o2],explicit:[u2,h2,v2,$2]});function Al(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var P2=new Array(256),S2=new Array(256);for(var as=0;as<256;as++)P2[as]=Al(as)?1:0,S2[as]=Al(as);function k2(e){return Array.from(new Set(e))}function Ll(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function np(e,t){if(!t||t==="all"||t==="*")return Ll(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,o]=s.split("-",2);n.push(...Ll(+r,o?+o+1:e+1))}return k2(n).filter(s=>s<=e).sort((s,r)=>s-r)}function B2(e){const t=O(()=>e.value.path),n=O(()=>ze.length-1),s=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=O(()=>Ga(s.value)),o=O(()=>ze.find(d=>d.path===`${s.value}`)),i=O(()=>{var d,h,g;return(g=(h=(d=o.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:g.id}),l=O(()=>{var d,h;return((h=(d=o.value)==null?void 0:d.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=O(()=>ze.find(d=>d.path===`${Math.min(ze.length,s.value+1)}`)),u=O(()=>ze.filter(d=>{var h,g;return(g=(h=d.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((d,h)=>(Ya(d,h),d),[])),p=O(()=>Za(u.value,o.value)),m=O(()=>Ja(p.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:o,currentSlideId:i,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:m}}function E2(e,t,n){const s=le(0);Ft(()=>{Pn.afterEach(async()=>{await Ft(),s.value+=1})});const r=O(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),o=O(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=O(()=>n.value<ze.length-1||e.value<o.value),l=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:i,hasPrev:l}}const N2=["id"],C2=Be({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Dt(n,"clicksElements",t),r=O(()=>({height:`${La}px`,width:`${bn}px`})),o=Vt();$n(()=>Promise.resolve().then(()=>U1),void 0).then(u=>o.value=u.default);const i=O(()=>n.clicks),l=E2(i,n.nav.currentRoute,n.nav.currentPage),c=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return gt(C,Qe({nav:{...n.nav,...l},configs:Fe,themeConfigs:O(()=>Fe.themeConfig)})),(u,p)=>{var m;return y(),X("div",{id:b(c),class:"print-slide-container",style:tt(b(r))},[ie(b(Zu)),ie(b(za),{is:(m=e.route)==null?void 0:m.component,"clicks-elements":b(s),"onUpdate:clicksElements":p[0]||(p[0]=d=>Se(s)?s.value=d:null),clicks:b(i),"clicks-disabled":!1,class:je(b(Va)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(o)?(y(),B(b(o),{key:0,page:+e.route.path},null,8,["page"])):re("v-if",!0),ie(b(Yu))],12,N2)}}}),Il=F(C2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),F2=Be({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var o;const t=e;S(C);const n=Qe(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=O(()=>t.route),r=B2(s);return(i,l)=>(y(),X(Ne,null,[ie(Il,{"clicks-elements":n,"onUpdate:clicksElements":l[0]||(l[0]=c=>n=c),clicks:0,nav:b(r),route:b(s)},null,8,["clicks-elements","nav","route"]),b(op)?re("v-if",!0):(y(!0),X(Ne,{key:0},pr(n.length,c=>(y(),B(Il,{key:c,clicks:c,nav:b(r),route:b(s)},null,8,["clicks","nav","route"]))),128))],64))}}),T2=F(F2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintSlide.vue"]]),M2={id:"print-content"},O2=Be({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;S(C);const n=O(()=>t.width),s=O(()=>t.width/wn),r=O(()=>n.value/s.value),o=O(()=>r.value<wn?n.value/bn:s.value*wn/bn);let i=ze.slice(0,-1);Ot.value.query.range&&(i=np(i.length,Ot.value.query.range).map(u=>i[u-1]));const l=O(()=>({"select-none":!Fe.selectable,"slidev-code-line-numbers":Fe.lineNumbers}));return gt(lu,o),(c,u)=>(y(),X("div",{id:"print-container",class:je(b(l))},[a("div",M2,[(y(!0),X(Ne,null,pr(b(i),p=>(y(),B(T2,{key:p.path,route:p},null,8,["route"]))),128))]),zt(c.$slots,"controls")],2))}});const A2=F(O2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PrintContainer.vue"]]),L2=Be({__name:"Print",setup(e){return S(C),bs(()=>{xs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(y(),X(Ne,null,[b(xs)?(y(),B(Ju,{key:0})):re("v-if",!0),a("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tt(b(Ia))},[ie(A2,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:b(Vn).width.value},null,8,["style","width"])],4)],64))}});const I2=F(L2,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/Print.vue"]]);const R2={class:"slidev-layout end"},q2={__name:"end",setup(e){return S(C),(t,n)=>(y(),X("div",R2," END "))}},U2=F(q2,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/layouts/end.vue"]]),D2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H2=a("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),j2=[H2];function V2(e,t){return y(),X("svg",D2,j2)}const z2={name:"carbon-logo-github",render:V2},K2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W2=a("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),G2=a("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1),Y2=[W2,G2];function Z2(e,t){return y(),X("svg",K2,Y2)}const J2={name:"carbon-application-web",render:Z2};function Q2(e){return e.startsWith("/")?"/math201/slides/numpy"+e.slice(1):e}const X2={key:0},ex=["src"],tx=Be({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(e){const t=e;S(C);const n=O(()=>Q2(t.logoHeader));return(s,r)=>e.logoHeader?(y(),X("header",X2,[a("img",{src:b(n),width:"60",height:"60",class:"object-contain"},null,8,ex)])):re("v-if",!0)}}),Rl=F(tx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),nx={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},sx={key:0,class:"mb-0"},rx={key:1,class:"mb-0"},ox=Be({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(e){return S(C),(t,n)=>e.website||e.handle?(y(),X("footer",nx,[e.website?(y(),X("p",sx,sn(e.website),1)):re("v-if",!0),e.handle?(y(),X("p",rx,"@"+sn(e.handle),1)):re("v-if",!0)])):re("v-if",!0)}}),ql=F(ox,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),ax={class:"bg-main slidev-layout"},ix={class:"my-auto"},lx=Be({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(e){return S(C),Be({LayoutHeader:Rl,LayoutFooter:ql}),(t,n)=>(y(),X("div",ax,[ie(Rl,{logoHeader:e.logoHeader},null,8,["logoHeader"]),a("div",ix,[zt(t.$slots,"default")]),ie(ql,{website:e.website,handle:e.handle},null,8,["website","handle"])]))}}),K=F(lx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),cx=Be({__name:"cover",setup(e){return S(C),Be({Default:K}),(t,n)=>(y(),B(K,{class:"cover"},{default:L(()=>[zt(t.$slots,"default")]),_:3}))}}),ux=F(cx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),px=a("h1",null,"NumPy 基础",-1),mx=a("h2",null,"上海电力大学",-1),dx=a("p",null,"数理学院数学系",-1),fx=a("h4",null,"邓化宇",-1),hx={class:"abs-br m-6 flex gap-2"},gx={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},_x={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},yx={__name:"1",setup(e){const t={theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss"};return S(C),(n,s)=>{const r=J2,o=z2;return y(),B(ux,j(D(t)),{default:L(()=>[px,mx,dx,fx,a("div",hx,[a("a",gx,[ie(r)]),a("a",_x,[ie(o)])])]),_:1},16)}}},vx=F(yx,[["__file","/@slidev/slides/1.md"]]),xx={class:"flex flex-col items-center justify-center text-center"},wx=Be({__name:"center",setup(e){return S(C),Be({Default:K}),(t,n)=>(y(),B(K,{class:"center"},{default:L(()=>[a("div",xx,[zt(t.$slots,"default")])]),_:3}))}}),ts=F(wx,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),bx=a("h1",null,"1. 简介与安装",-1),$x=a("p",null,"NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。",-1),Px={__name:"2",setup(e){const t={layout:"center",srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[bx,$x]),_:1},16))}},Sx=F(Px,[["__file","/@slidev/slides/2.md"]]),kx=a("h1",null,"2. 安装",-1),Bx=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"pip "),a("span",{style:{color:"#9DB1C5"}},"install"),a("span",{style:{color:"#B392F0"}}," "),a("span",{style:{color:"#9DB1C5"}},"numpy")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"pip "),a("span",{style:{color:"#2B5581"}},"install"),a("span",{style:{color:"#24292EFF"}}," "),a("span",{style:{color:"#2B5581"}},"numpy")])])])],-1),Ex=a("h1",null,"3. 使用",-1),Nx=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F97583"}},"import"),a("span",{style:{color:"#B392F0"}}," numpy "),a("span",{style:{color:"#F97583"}},"as"),a("span",{style:{color:"#B392F0"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"a "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"array"),a("span",{style:{color:"#BBBBBB"}},"(["),a("span",{style:{color:"#F8F8F8"}},"1"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"2"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},"])")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(a)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#D32F2F"}},"import"),a("span",{style:{color:"#24292EFF"}}," numpy "),a("span",{style:{color:"#D32F2F"}},"as"),a("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"a "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"array"),a("span",{style:{color:"#212121"}},"(["),a("span",{style:{color:"#1976D2"}},"1"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"2"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},"])")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(a)")])])])],-1),Cx=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"[1 2 3]")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"[1 2 3]")])])])],-1),Fx={__name:"3",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[kx,Bx,Ex,Nx,Cx]),_:1},16))}},Tx=F(Fx,[["__file","/@slidev/slides/3.md"]]),Mx=a("h1",null,"4. NumPy数组 vs Python 列表",-1),Ox=a("p",null,"乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。",-1),Ax=a("p",null,"当然相比python列表，numpy数组可以直接进行算术运算：",-1),Lx={__name:"4",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Mx,Ox,Ax]),_:1},16))}},Ix=F(Lx,[["__file","/@slidev/slides/4.md"]]),Rx="/math201/slides/numpy/numpy-02.png",qx=a("img",{src:Rx,class:"h-90 mx-auto"},null,-1),Ux={__name:"5",setup(e){const t={srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[qx]),_:1},16))}},Dx=F(Ux,[["__file","/@slidev/slides/5.md"]]),Hx=a("p",null,"除此之外，numpy数组还具有以下特点：",-1),jx=a("ol",null,[a("li",null,"更紧凑，高维时尤为明显"),a("li",null,"向量化后运算速度比列表更快"),a("li",null,"在末尾添加元素时不如列表高效"),a("li",null,"元素类型一般比较固定")],-1),Vx={__name:"6",setup(e){const t={layout:"center",srcSequence:"./pages/what_is_numpy.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[Hx,jx]),_:1},16))}},zx=F(Vx,[["__file","/@slidev/slides/6.md"]]),Kx=a("h1",null,"2. 向量(Vector): 一维数组",-1),Wx={__name:"7",setup(e){const t={layout:"center",srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[Kx]),_:1},16))}},Gx=F(Wx,[["__file","/@slidev/slides/7.md"]]),Yx="/math201/slides/numpy/numpy-04.png",Zx="/math201/slides/numpy/numpy-05.png",Jx="/math201/slides/numpy/numpy-07.png",Qx=a("h1",null,"1. 向量初始化",-1),Xx=a("p",null,[x("通过Python列表可以创建NumPy数组，如下将列表元素转化为一维数组： "),a("img",{src:Yx,class:"h-90 mx-auto"})],-1),ew=a("p",null,"注意，确保列表元素类型相同，否则dtype=’object’，将影响运算甚至产生语法错误。",-1),tw=a("p",null,[x("由于在数组末尾没有预留空间以快速添加新元素，NumPy数组无法像Python列表那样增长，因此，通常的做法是在变长Python列表中准备好数据，然后将其转换为NumPy数组，或是使用np.zeros或np.empty预先分配必要的空间： "),a("img",{src:Zx,class:"h-90 mx-auto"})],-1),nw=a("p",null,[x("通过以下方法可以创建一个与某一变量形状一致的空数组： "),a("img",{src:Jx,class:"h-90 mx-auto"})],-1),sw={__name:"8",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Qx,Xx,ew,tw,nw]),_:1},16))}},rw=F(sw,[["__file","/@slidev/slides/8.md"]]),ow="/math201/slides/numpy/numpy-08.png",aw=a("h2",null,"初始化",-1),iw=a("p",null,[x("不止是空数组，通过上述方法还可以将数组填充为特定值： "),a("img",{src:ow,class:"h-90 mx-auto"})],-1),lw={__name:"9",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[aw,iw]),_:1},16))}},cw=F(lw,[["__file","/@slidev/slides/9.md"]]),uw="/math201/slides/numpy/numpy-09.png",pw=a("h2",null,"初始化",-1),mw=a("p",null,[x("在NumPy中，还可以通过单调序列初始化数组： "),a("img",{src:uw,class:"h-90 mx-auto"})],-1),dw={__name:"10",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[pw,mw]),_:1},16))}},fw=F(dw,[["__file","/@slidev/slides/10.md"]]),hw=a("h2",null,"初始化",-1),gw=a("p",null,"如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。",-1),_w={__name:"11",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[hw,gw]),_:1},16))}},yw=F(_w,[["__file","/@slidev/slides/11.md"]]),vw="/math201/slides/numpy/numpy-10.png",xw=a("h2",null,"初始化",-1),ww=a("p",null,[x("arange浮点类型数据不是非常友好： "),a("img",{src:vw,class:"h-90 mx-auto"})],-1),bw={__name:"12",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[xw,ww]),_:1},16))}},$w=F(bw,[["__file","/@slidev/slides/12.md"]]),Pw=a("h2",null,"初始化",-1),Sw=a("p",null,"上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。",-1),kw={__name:"13",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Pw,Sw]),_:1},16))}},Bw=F(kw,[["__file","/@slidev/slides/13.md"]]),Ew="/math201/slides/numpy/numpy-11.png",Nw=a("h2",null,"随机数",-1),Cw=a("p",null,[x("随机数组的生成如下： "),a("img",{src:Ew,class:"h-90 mx-auto"})],-1),Fw={__name:"14",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Nw,Cw]),_:1},16))}},Tw=F(Fw,[["__file","/@slidev/slides/14.md"]]),Mw=a("h2",null,"随机数",-1),Ow=a("p",null,"There’s also a new interface for random arrays generation. It is:",-1),Aw=a("ul",null,[a("li",null,"better suited for multi-threading,"),a("li",null,"somewhat faster,"),a("li",null,"more configurable (you can squeeze even more speed or even more quality by choosing a non-default so-called ‘bit generator’),"),a("li",null,"able to pass two tricky synthetic tests that the old version fails.")],-1),Lw={__name:"15",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Mw,Ow,Aw]),_:1},16))}},Iw=F(Lw,[["__file","/@slidev/slides/15.md"]]),Rw="/math201/slides/numpy/numpy-13.png",qw=a("h1",null,"2.向量索引",-1),Uw=a("p",null,[x("对于数组数据的访问，numpy提供了便捷的访问方式： "),a("img",{src:Rw,class:"h-90 mx-auto"})],-1),Dw={__name:"16",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[qw,Uw]),_:1},16))}},Hw=F(Dw,[["__file","/@slidev/slides/16.md"]]),jw="/math201/slides/numpy/numpy-14.png",Vw=a("h2",null,"切片操作",-1),zw=a("p",null,[x("上图中，除“fancy indexing”外，其他所有索引方法本质上都是"),a("code",null,"views"),x("：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。")],-1),Kw=a("p",null,[x("上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组： "),a("img",{src:jw,class:"h-90 mx-auto"})],-1),Ww={__name:"17",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Vw,zw,Kw]),_:1},16))}},Gw=F(Ww,[["__file","/@slidev/slides/17.md"]]),Yw="/math201/slides/numpy/numpy-15.png",Zw=a("h2",null,"切片操作",-1),Jw=a("p",null,[x("Also, such assignments must not change the size of the array, so tricks like "),a("img",{src:Yw,class:"h-90 mx-auto"})],-1),Qw=a("p",null,"won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).",-1),Xw={__name:"18",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Zw,Jw,re(" ![](./img/numpy-15.png) "),Qw]),_:1},16))}},eb=F(Xw,[["__file","/@slidev/slides/18.md"]]),tb="/math201/slides/numpy/numpy-16.png",nb=a("h2",null,"布尔索引",-1),sb=a("p",null,[x("此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符： "),a("img",{src:tb,class:"h-90 mx-auto"})],-1),rb=a("p",null,[x("注意，不可以使用"),a("code",null,"3 <= a <= 5"),x("这样的Python“三元”比较。")],-1),ob={__name:"19",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[nb,sb,re(" ![](./img/numpy-16.png) "),rb]),_:1},16))}},ab=F(ob,[["__file","/@slidev/slides/19.md"]]),ib="/math201/slides/numpy/numpy-17.png",lb=a("h2",null,"布尔索引",-1),cb=a("p",null,[x("如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。 "),a("img",{src:ib,class:"h-90 mx-auto"})],-1),ub={__name:"20",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[lb,cb]),_:1},16))}},pb=F(ub,[["__file","/@slidev/slides/20.md"]]),mb="/math201/slides/numpy/numpy-18.png",db=a("h1",null,"3.向量操作",-1),fb=a("p",null,[x("NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组： "),a("img",{src:mb,class:"h-90 mx-auto"})],-1),hb={__name:"21",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[db,fb]),_:1},16))}},gb=F(hb,[["__file","/@slidev/slides/21.md"]]),_b="/math201/slides/numpy/numpy-19.png",yb=a("h2",null,"浮点运算",-1),vb=a("p",null,[x("浮点数的计算也是如此，numpy能够将标量广播到数组： "),a("img",{src:_b,class:"h-90 mx-auto"})],-1),xb={__name:"22",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[yb,vb]),_:1},16))}},wb=F(xb,[["__file","/@slidev/slides/22.md"]]),bb="/math201/slides/numpy/numpy-20.png",$b=a("h2",null,"数学函数",-1),Pb=a("p",null,[x("numpy提供了许多数学函数来处理矢量： "),a("img",{src:bb,class:"h-90 mx-auto"})],-1),Sb={__name:"23",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[$b,Pb]),_:1},16))}},kb=F(Sb,[["__file","/@slidev/slides/23.md"]]),Bb="/math201/slides/numpy/numpy-21.png",Eb=a("h2",null,"向量运算",-1),Nb=a("p",null,[x("向量点乘（内积）和叉乘（外积、向量积）如下： "),a("img",{src:Bb,class:"h-90 mx-auto"})],-1),Cb={__name:"24",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Eb,Nb]),_:1},16))}},Fb=F(Cb,[["__file","/@slidev/slides/24.md"]]),Tb="/math201/slides/numpy/numpy-22.png",Mb=a("h2",null,"三角函数",-1),Ob=a("p",null,[x("numpy也提供了如下三角函数运算： "),a("img",{src:Tb,class:"h-90 mx-auto"})],-1),Ab={__name:"25",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Mb,Ob]),_:1},16))}},Lb=F(Ab,[["__file","/@slidev/slides/25.md"]]),Ib="/math201/slides/numpy/numpy-23.png",Rb=a("h2",null,"舍入",-1),qb=a("p",null,[x("数组整体进行四舍五入： "),a("img",{src:Ib,class:"h-90 mx-auto"})],-1),Ub=a("ol",null,[a("li",null,"floor向上取整"),a("li",null,"ceil向下取整"),a("li",null,"round四舍五入")],-1),Db=a("p",null,"np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。",-1),Hb={__name:"26",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Rb,qb,re(" ![](./img/numpy-23.png) "),Ub,Db]),_:1},16))}},jb=F(Hb,[["__file","/@slidev/slides/26.md"]]),Vb="/math201/slides/numpy/numpy-24.png",zb=a("h2",null,"最大最小值等",-1),Kb=a("p",null,[x("numpy还可以实现以下功能： "),a("img",{src:Vb,class:"h-90 mx-auto"})],-1),Wb={__name:"27",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[zb,Kb]),_:1},16))}},Gb=F(Wb,[["__file","/@slidev/slides/27.md"]]),Yb="/math201/slides/numpy/numpy-25.png",Zb=a("h2",null,"算数平均",-1),Jb=a("p",null,[x("As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’): "),a("img",{src:Yb,class:"h-90 mx-auto"})],-1),Qb={__name:"28",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[re(" TODO: 不确定 "),Zb,Jb]),_:1},16))}},Xb=F(Qb,[["__file","/@slidev/slides/28.md"]]),e3="/math201/slides/numpy/numpy-26.png",t3=a("p",null,[x("The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better: "),a("img",{src:e3,class:"h-90 mx-auto"})],-1),n3={__name:"29",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[re(" TODO: 不确定 "),t3]),_:1},16))}},s3=F(n3,[["__file","/@slidev/slides/29.md"]]),r3="/math201/slides/numpy/numpy-27.png",o3=a("h1",null,"排序",-1),a3=a("p",null,[x("在numpy中，排序函数功能有所阉割： "),a("img",{src:r3,class:"h-90 mx-auto"})],-1),i3=a("p",null,"对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。",-1),l3={__name:"30",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[o3,a3,re(" ![](./img/numpy-27.png) "),i3]),_:1},16))}},c3=F(l3,[["__file","/@slidev/slides/30.md"]]),u3="/math201/slides/numpy/numpy-28.png",p3=a("h1",null,"4.查找向量中的元素",-1),m3=a("p",null,[x("不同于Python列表，NumPy数组没有索引方法。 "),a("img",{src:u3,class:"h-90 mx-auto"})],-1),d3=a("ul",null,[a("li",null,[x("可以通过"),a("code",null,"np.where(a==x)[0][0]"),x("查找元素，但这种方法很不pythonic，哪怕需要查找的项在数组开头，该方法也需要遍历整个数组。")]),a("li",null,[x("使用Numba实现加速查找，"),a("code",null,"next((i[0] for i, v in np.ndenumerate(a) if v==x), -1)"),x("，在最坏的情况下，它的速度要比where慢。")]),a("li",null,[x("如果数组是排好序的，使用"),a("code",null,"v = np.searchsorted(a, x); return v if a[v]==x else -1"),x("时间复杂度为O(log N)，但在这之前，排序的时间复杂度为O(N log N)。")])],-1),f3=a("p",null,"实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。",-1),h3={__name:"31",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>{const r=Mc("font");return y(),B(K,j(D(t)),{default:L(()=>[p3,m3,re(" ![](./img/numpy-28.png) "),ie(r,{size:"2"},{default:L(()=>[d3]),_:1}),f3]),_:1},16)}}},g3=F(h3,[["__file","/@slidev/slides/31.md"]]),_3="/math201/slides/numpy/numpy-29.png",y3=a("h1",null,"5.浮点数比较",-1),v3=a("p",null,[x("np.allclose(a, b)用于容忍误差之内的浮点数比较。 "),a("img",{src:_3,class:"h-90 mx-auto"})],-1),x3=a("ul",null,[a("li",null,[x("np.allclose假定所有比较数字的尺度为1。如果在纳秒级别上，则需要将默认atol参数除以1e9："),a("code",null,"np.allclose(1e-9,2e-9, atol=1e-17)==False"),x("。")]),a("li",null,[x("math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即"),a("code",null,"math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True"),x("。")])],-1),w3={__name:"32",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[y3,v3,re(" ![](./img/numpy-29.png) "),x3]),_:1},16))}},b3=F(w3,[["__file","/@slidev/slides/32.md"]]),$3=a("p",null,[x("此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的"),a("a",{href:"https://floating-point-gui.de/errors/comparison/",target:"_blank",rel:"noopener"},"浮点数据指南"),x("和相应的"),a("a",{href:"https://github.com/numpy/numpy/issues/10161",target:"_blank",rel:"noopener"},"NumPy问题"),x("了解更多信息。")],-1),P3={__name:"33",setup(e){const t={srcSequence:"./pages/vector.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[$3]),_:1},16))}},S3=F(P3,[["__file","/@slidev/slides/33.md"]]),k3=a("h1",null,"3. 矩阵(Matrix): 二维数组",-1),B3={__name:"34",setup(e){const t={layout:"center",srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[k3]),_:1},16))}},E3=F(B3,[["__file","/@slidev/slides/34.md"]]),N3="/math201/slides/numpy/numpy-30.png",C3=a("h1",null,"1.矩阵初始化",-1),F3=a("p",null,[x("矩阵的初始化语法与向量类似： "),a("img",{src:N3,class:"h-90 mx-auto"})],-1),T3=a("p",null,"如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。",-1),M3={__name:"35",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[C3,F3,re(" ![](./img/numpy-30.png) "),T3]),_:1},16))}},O3=F(M3,[["__file","/@slidev/slides/35.md"]]),A3="/math201/slides/numpy/numpy-31.png",L3=a("h2",null,"随机矩阵",-1),I3=a("p",null,[x("随机矩阵的生成也与向量类似： "),a("img",{src:A3,class:"h-90 mx-auto"})],-1),R3={__name:"36",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[L3,I3]),_:1},16))}},q3=F(R3,[["__file","/@slidev/slides/36.md"]]),U3="/math201/slides/numpy/numpy-32.png",D3=a("h2",null,"随机矩阵",-1),H3=a("p",null,[x("The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is: "),a("img",{src:U3,class:"h-90 mx-auto"})],-1),j3={__name:"37",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[D3,H3]),_:1},16))}},V3=F(j3,[["__file","/@slidev/slides/37.md"]]),z3="/math201/slides/numpy/numpy-33.png",K3=a("h2",null,"索引",-1),W3=a("p",null,[x("二维数组的索引语法要比嵌套列表更方便： "),a("img",{src:z3,class:"h-90 mx-auto"})],-1),G3=a("p",null,"“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。",-1),Y3={__name:"38",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[K3,W3,re(" ![](./img/numpy-33.png) "),G3]),_:1},16))}},Z3=F(Y3,[["__file","/@slidev/slides/38.md"]]),J3="/math201/slides/numpy/numpy-34.png",Q3=a("h1",null,"2.轴参数",-1),X3=a("p",null,[x("在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0 ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。 "),a("img",{src:J3,class:"h-90 mx-auto"})],-1),e5={__name:"39",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Q3,X3]),_:1},16))}},t5=F(e5,[["__file","/@slidev/slides/39.md"]]),n5="/math201/slides/numpy/numpy-35.png",s5=a("h1",null,"3.矩阵运算",-1),r5=a("p",null,[x("除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积： "),a("img",{src:n5,class:"h-90 mx-auto"})],-1),o5={__name:"40",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[s5,r5]),_:1},16))}},a5=F(o5,[["__file","/@slidev/slides/40.md"]]),i5="/math201/slides/numpy/numpy-36.png",l5=a("h2",null,"混合运算",-1),c5=a("p",null,[x("numpy同样可以通过"),re("[广播机制](./broadcast.md) "),x("实现向量与矩阵，或两个向量之间的混合运算： "),a("img",{src:i5,class:"h-90 mx-auto"})],-1),u5={__name:"41",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[l5,c5]),_:1},16))}},p5=F(u5,[["__file","/@slidev/slides/41.md"]]),m5="/math201/slides/numpy/numpy-37.png",d5=a("h2",null,"乘法",-1),f5=a("p",null,[x("注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积： "),a("img",{src:m5,class:"h-90 mx-auto"})],-1),h5={__name:"42",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[d5,f5]),_:1},16))}},g5=F(h5,[["__file","/@slidev/slides/42.md"]]),_5="/math201/slides/numpy/numpy-38.png",y5=a("h1",null,"4.行向量与列向量",-1),v5=a("p",null,[x("根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose： "),a("img",{src:_5,class:"h-90 mx-auto"})],-1),x5={__name:"43",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[y5,v5]),_:1},16))}},w5=F(x5,[["__file","/@slidev/slides/43.md"]]),b5="/math201/slides/numpy/numpy-39.png",$5=a("h2",null,"数组形状改变",-1),P5=a("p",null,[x("使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量： "),a("img",{src:b5,class:"h-90 mx-auto"})],-1),S5=a("p",null,"其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。",-1),k5={__name:"44",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[$5,P5,re(" ![](./img/numpy-39.png) "),S5]),_:1},16))}},B5=F(k5,[["__file","/@slidev/slides/44.md"]]),E5="/math201/slides/numpy/numpy-40.png",N5=a("h2",null,"数组形状改变",-1),C5=a("p",null,[x("因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图： "),a("img",{src:E5,class:"h-90 mx-auto"})],-1),F5={__name:"45",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[N5,C5]),_:1},16))}},T5=F(F5,[["__file","/@slidev/slides/45.md"]]),M5=a("h2",null,"数组形状改变",-1),O5=a("p",null,"根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。",-1),A5=a("p",null,"严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。",-1),L5={__name:"46",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[M5,O5,A5]),_:1},16))}},I5=F(L5,[["__file","/@slidev/slides/46.md"]]),R5="/math201/slides/numpy/numpy-41.png",q5=a("h1",null,"5.矩阵的操作",-1),U5=a("p",null,[x("矩阵的拼接有以下两种方式： "),a("img",{src:R5,class:"h-90 mx-auto"})],-1),D5={__name:"47",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[q5,U5]),_:1},16))}},H5=F(D5,[["__file","/@slidev/slides/47.md"]]),j5="/math201/slides/numpy/numpy-42.png",V5=a("h2",null,"矩阵拼接",-1),z5=a("p",null,[x("图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作： "),a("img",{src:j5,class:"h-90 mx-auto"})],-1),K5={__name:"48",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[V5,z5]),_:1},16))}},W5=F(K5,[["__file","/@slidev/slides/48.md"]]),G5="/math201/slides/numpy/numpy-42-1.png",Y5=a("h2",null,"矩阵拼接",-1),Z5=a("p",null,[x("与stack对应的是split： "),a("img",{src:G5,class:"h-90 mx-auto"})],-1),J5={__name:"49",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Y5,Z5]),_:1},16))}},Q5=F(J5,[["__file","/@slidev/slides/49.md"]]),X5="/math201/slides/numpy/numpy-43.png",e$=a("p",null,[x("All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts: "),a("img",{src:X5,class:"h-90 mx-auto"})],-1),t$={__name:"50",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[e$]),_:1},16))}},n$=F(t$,[["__file","/@slidev/slides/50.md"]]),s$="/math201/slides/numpy/numpy-44.png",r$=a("h2",null,"矩阵复制",-1),o$=a("p",null,[x("矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。 "),a("img",{src:s$,class:"h-90 mx-auto"})],-1),a$={__name:"51",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[r$,o$]),_:1},16))}},i$=F(a$,[["__file","/@slidev/slides/51.md"]]),l$="/math201/slides/numpy/numpy-45.png",c$=a("h2",null,"矩阵删除",-1),u$=a("p",null,[x("delete可以删除特定的行或列 "),a("img",{src:l$,class:"h-90 mx-auto"})],-1),p$={__name:"52",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[c$,u$]),_:1},16))}},m$=F(p$,[["__file","/@slidev/slides/52.md"]]),d$="/math201/slides/numpy/numpy-46.png",f$=a("h2",null,"矩阵插入",-1),h$=a("p",null,[x("相应插入操作为insert： "),a("img",{src:d$,class:"h-90 mx-auto"})],-1),g$={__name:"53",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[f$,h$]),_:1},16))}},_$=F(g$,[["__file","/@slidev/slides/53.md"]]),y$="/math201/slides/numpy/numpy-47.png",v$=a("h2",null,"矩阵插入",-1),x$=a("p",null,[x("与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack： "),a("img",{src:y$,class:"h-90 mx-auto"})],-1),w$={__name:"54",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[v$,x$]),_:1},16))}},b$=F(w$,[["__file","/@slidev/slides/54.md"]]),$$="/math201/slides/numpy/numpy-48.png",P$=a("h2",null,"矩阵插入",-1),S$=a("p",null,[x("如果仅仅是向数组的边界添加常量值，pad函数是足够的： "),a("img",{src:$$,class:"h-90 mx-auto"})],-1),k$={__name:"55",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[P$,S$]),_:1},16))}},B$=F(k$,[["__file","/@slidev/slides/55.md"]]),E$="/math201/slides/numpy/numpy-49.png",N$="/math201/slides/numpy/numpy-50.png",C$=a("h1",null,"6.Meshgrids",-1),F$=a("p",null,[x("广播机制使得meshgrids变得容易。例如需要下图所示（但尺寸大得多）的矩阵： "),a("img",{src:E$,class:"h-90 mx-auto"})],-1),T$=a("p",null,[x("上述两种方法由于使用了循环，因此都比较慢。MATLAB通过构建meshgrid处理这种问题。 "),a("img",{src:N$,class:"h-90 mx-auto"})],-1),M$={__name:"56",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[C$,F$,re(" ![](./img/numpy-49.png) "),T$]),_:1},16))}},O$=F(M$,[["__file","/@slidev/slides/56.md"]]),A$="/math201/slides/numpy/numpy-51.png",L$=a("h2",null,"meshgrid",-1),I$=a("p",null,"meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。",-1),R$=a("p",null,[x("在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理： "),a("img",{src:A$,class:"h-90 mx-auto"})],-1),q$={__name:"57",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[L$,I$,R$]),_:1},16))}},U$=F(q$,[["__file","/@slidev/slides/57.md"]]),D$="/math201/slides/numpy/numpy-52.png",H$=a("h2",null,"meshgrid",-1),j$=a("p",null,"如果没有indexing ='ij’参数，那么meshgrid将更改参数的顺序，即J,I=np.meshgrid(j,i)——一种用于可视化3D绘图的“ xy”模式（祥见该文档）。",-1),V$=a("p",null,[x("除了在二维或三维网格上初始化函数外，网格还可以用于索引数组： "),a("img",{src:D$,class:"h-90 mx-auto"})],-1),z$=a("p",null,"以上方法在稀疏网格中同样适用。",-1),K$={__name:"58",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[H$,j$,V$,re(" ![](./img/numpy-52.png) "),z$]),_:1},16))}},W$=F(K$,[["__file","/@slidev/slides/58.md"]]),G$="/math201/slides/numpy/numpy-53.png",Y$=a("h1",null,"7.矩阵的统计",-1),Z$=a("p",null,[x("就像sum函数，numpy提供了矩阵不同轴上的"),a("code",null,"min/max, argmin/argmax, mean/median/percentile, std/var"),x("等函数。 "),a("img",{src:G$,class:"h-90 mx-auto"})],-1),J$={__name:"59",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[Y$,Z$]),_:1},16))}},Q$=F(J$,[["__file","/@slidev/slides/59.md"]]),X$="/math201/slides/numpy/numpy-55.png",e4=a("h2",null,"矩阵最大最小值",-1),t4=a("p",null,"np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。",-1),n4=a("p",null,[x("2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标： "),a("img",{src:X$,class:"h-90 mx-auto"})],-1),s4={__name:"60",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[e4,t4,n4]),_:1},16))}},r4=F(s4,[["__file","/@slidev/slides/60.md"]]),o4="/math201/slides/numpy/numpy-56.png",a4=a("p",null,[x("all和any同样也可作用于特定维度： "),a("img",{src:o4,class:"h-90 mx-auto"})],-1),i4={__name:"61",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[a4]),_:1},16))}},l4=F(i4,[["__file","/@slidev/slides/61.md"]]),c4="/math201/slides/numpy/numpy-57.png",u4=a("h1",null,"8.矩阵排序",-1),p4=a("p",null,[x("虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小： "),a("img",{src:c4,class:"h-90 mx-auto"})],-1),m4={__name:"62",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[u4,p4]),_:1},16))}},d4=F(m4,[["__file","/@slidev/slides/62.md"]]),f4="/math201/slides/numpy/numpy-59.png",h4=a("h2",null,"排序",-1),g4=a("p",null,"你通常不需要上述这样的排序矩阵，axis不是key参数的替代。但好在NumPy提供了其他功能，这些功能允许按一列或几列进行排序：",-1),_4=a("p",null,[x("1、"),a("code",null,"a[a[:,0].argsort()]"),x("表示按第一列对数组进行排序： "),a("img",{src:f4,class:"h-90 mx-auto"})],-1),y4=a("p",null,"其中，argsort返回排序后的原始数组的索引数组。",-1),v4={__name:"63",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[h4,g4,_4,re(" ![](./img/numpy-59.png) "),y4]),_:1},16))}},x4=F(v4,[["__file","/@slidev/slides/63.md"]]),w4="/math201/slides/numpy/numpy-60.png",b4=a("h2",null,"排序",-1),$4=a("p",null,"可以重复使用该方法，但千万不要搞混：",-1),P4=a("p",null,"a = a[a[:,2].argsort()]",-1),S4=a("p",null,"a = a[a[:,1].argsort(kind='stable')]",-1),k4=a("p",null,[x("a = a[a[:,0].argsort(kind='stable')] "),a("img",{src:w4,class:"h-90 mx-auto"})],-1),B4={__name:"64",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[b4,$4,P4,S4,k4]),_:1},16))}},E4=F(B4,[["__file","/@slidev/slides/64.md"]]),N4="/math201/slides/numpy/numpy-61.png",C4=a("h2",null,"排序",-1),F4=a("p",null,"2、函数lexsort可以像上述这样对所有列进行排序，但是它总是按行执行，并且排序的行是颠倒的（即从下到上），其用法如下：",-1),T4=a("p",null,[x("a[np.lexsort(np.flipud(a[2,5].T))]，首先按第2列排序，然后按第5列排序；a[np.lexsort(np.flipud(a.T))]，从左到右依次排序各列。 "),a("img",{src:N4,class:"h-90 mx-auto"})],-1),M4=a("p",null,"其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，…]等效，其中…表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。",-1),O4={__name:"65",setup(e){const t={srcSequence:"./pages/matrix.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[C4,F4,T4,re(" ![](./img/numpy-61.png) "),M4]),_:1},16))}},A4=F(O4,[["__file","/@slidev/slides/65.md"]]),L4=a("h1",null,"4. 张量(Tensor): 多维数组",-1),I4={__name:"66",setup(e){const t={layout:"center",srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[L4]),_:1},16))}},R4=F(I4,[["__file","/@slidev/slides/66.md"]]),q4="/math201/slides/numpy/numpy-63.png",U4=a("h1",null,"1.初始化",-1),D4=a("p",null,[x("通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动： "),a("img",{src:q4,class:"h-90 mx-auto"})],-1),H4={__name:"67",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[U4,D4]),_:1},16))}},j4=F(H4,[["__file","/@slidev/slides/67.md"]]),V4="/math201/slides/numpy/numpy-64.png",z4=a("h2",null,"索引顺序",-1),K4=a("p",null,"通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。",-1),W4=a("p",null,[x("但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）： "),a("img",{src:V4,class:"h-90 mx-auto"})],-1),G4={__name:"68",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[z4,K4,W4]),_:1},16))}},Y4=F(G4,[["__file","/@slidev/slides/68.md"]]),Z4="/math201/slides/numpy/numpy-65.png",J4=a("h2",null,"索引顺序",-1),Q4=a("p",null,"这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。",-1),X4=a("p",null,[x("因此，几何形状的创建实际取决于你对域的约定： "),a("img",{src:Z4,class:"h-90 mx-auto"})],-1),eP={__name:"69",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[J4,Q4,X4]),_:1},16))}},tP=F(eP,[["__file","/@slidev/slides/69.md"]]),nP="/math201/slides/numpy/numpy-66.png",sP=a("h2",null,"RGB",-1),rP=a("p",null,[x("显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下： "),a("img",{src:nP,class:"h-90 mx-auto"})],-1),oP={__name:"70",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[sP,rP]),_:1},16))}},aP=F(oP,[["__file","/@slidev/slides/70.md"]]),iP="/math201/slides/numpy/numpy-67.png",lP=a("h2",null,"concatenate",-1),cP=a("p",null,[x("如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号： "),a("img",{src:iP,class:"h-90 mx-auto"})],-1),uP={__name:"71",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[lP,cP]),_:1},16))}},pP=F(uP,[["__file","/@slidev/slides/71.md"]]),mP="/math201/slides/numpy/numpy-68.png",dP=a("h2",null,"数组转置",-1),fP=a("p",null,[x("如果不考虑轴数，可以将数组转换hstack和相应形式： "),a("img",{src:mP,class:"h-90 mx-auto"})],-1),hP=a("p",null,"这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。",-1),gP={__name:"72",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[dP,fP,hP]),_:1},16))}},_P=F(gP,[["__file","/@slidev/slides/72.md"]]),yP="/math201/slides/numpy/numpy-69.png",vP=a("h2",null,"数组转置",-1),xP=a("p",null,[x("通过混合索引顺序可实现数组转置，掌握该方法将加深你对3维数据的了解。根据确定的轴顺序，转置数组平面的命令有所不同：对于通用数组，交换索引1和2，对于RGB图像交换0和1： "),a("img",{src:yP,class:"h-90 mx-auto"})],-1),wP=a("p",null,"注意，transpose（a.T）的默认轴参数会颠倒索引顺序，这不同于上述述两种索引顺序。",-1),bP=a("p",null,"广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。",-1),$P={__name:"73",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[vP,xP,re(" ![](./img/numpy-69.png) "),wP,bP]),_:1},16))}},PP=F($P,[["__file","/@slidev/slides/73.md"]]),SP="/math201/slides/numpy/numpy-70.png",kP=a("h2",null,"einsum",-1),BP=a("p",null,[x("最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁： "),a("img",{src:SP,class:"h-90 mx-auto"})],-1),EP=a("p",null,"该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。",-1),NP={__name:"74",setup(e){const t={srcSequence:"./pages/tensor.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[kP,BP,re(" ![](./img/numpy-70.png) "),EP]),_:1},16))}},CP=F(NP,[["__file","/@slidev/slides/74.md"]]),FP=a("h1",null,"5. 广播(Broadcast)",-1),TP=a("p",null,"本文参考:",-1),MP=a("ol",null,[a("li",null,[a("a",{href:"https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73",target:"_blank",rel:"noopener"},"Broadcasting in NumPy")])],-1),OP={__name:"75",setup(e){const t={layout:"center",srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[FP,TP,MP]),_:1},16))}},AP=F(OP,[["__file","/@slidev/slides/75.md"]]),LP="/math201/slides/numpy/numpy-broadcast-01.png",IP=a("h1",null,"1. 什么是广播?",-1),RP=a("p",null,"广播可以简单理解为用于不同大小数组的二进制通用函数(加、减、乘等)的一组规则。这是一个非常强大的功能，但是通常较难理解。 当数组大小彼此不匹配的时候，我们通常会从错误消息中看到广播的存在。",-1),qP=a("p",null,"最简单的广播示例是n维数组乘以标量，这显然意味着该数组的所有元素乘以标量值：",-1),UP=a("img",{src:LP,class:"h-90 mx-auto"},null,-1),DP={__name:"76",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[IP,RP,qP,UP]),_:1},16))}},HP=F(DP,[["__file","/@slidev/slides/76.md"]]),jP="/math201/slides/numpy/numpy-broadcast-02.png",VP=a("h2",null,"二维数组的广播",-1),zP=a("p",null,[x("广播类似于众所周知的"),a("strong",null,"类型提升"),x("：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。")],-1),KP=a("p",null,[x("在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状： "),a("img",{src:jP,class:"h-90 mx-auto"})],-1),WP={__name:"77",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[VP,zP,KP]),_:1},16))}},GP=F(WP,[["__file","/@slidev/slides/77.md"]]),YP="/math201/slides/numpy/numpy-broadcast-03.png",ZP=a("h2",null,"三维数组的广播",-1),JP=a("p",null,[x("在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。 "),a("img",{src:YP,class:"h-90 mx-auto"})],-1),QP={__name:"78",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[ZP,JP]),_:1},16))}},XP=F(QP,[["__file","/@slidev/slides/78.md"]]),e9="/math201/slides/numpy/numpy-broadcast-04.png",t9=a("h1",null,"2. 广播的规则",-1),n9=a("p",null,"在NumPy三维以上中，广播机制很不直观，甚至很难直白的理解，因此使用它需要了解通用形式的广播规则，而NumPy的广播遵循证实遵循着一组严格的规则。",-1),s9=a("ul",null,[a("li",null,"规则一：如果两个数组的维度数不相同，那么小维度数组的形状将会在最左边补1。"),a("li",null,"规则二：如果两个数组的形状在任何一个维度上都不匹配，那么数组的形状会沿着维度为1的维度扩展以匹配另外一个数组的形状。"),a("li",null,[x("规则三：如果两个数组的形状在任何一个维度上都不匹配并且没有任何一个维度等于1，那么会引发异常。 来源于 – "),a("a",{href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/",target:"_blank",rel:"noopener"},"《Python Data Science Handbook》")])],-1),r9=a("p",null,[x("根据规则之前三维数组的案例可解释如下： "),a("img",{src:e9,class:"h-90 mx-auto"})],-1),o9=a("p",null,"为了更清楚地理解这些规则，来看几个具体的示例。",-1),a9={__name:"79",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[t9,n9,s9,r9,re(" ![](./img/numpy-broadcast-04.png) "),o9]),_:1},16))}},i9=F(a9,[["__file","/@slidev/slides/79.md"]]),l9=a("h2",null,"示例1",-1),c9=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F97583"}},"import"),a("span",{style:{color:"#B392F0"}}," numpy "),a("span",{style:{color:"#F97583"}},"as"),a("span",{style:{color:"#B392F0"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"M "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"ones"),a("span",{style:{color:"#BBBBBB"}},"(("),a("span",{style:{color:"#F8F8F8"}},"2"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"a "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"arange"),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(M "),a("span",{style:{color:"#F97583"}},"+"),a("span",{style:{color:"#BBBBBB"}}," a)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(M.shape)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(a.shape)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#D32F2F"}},"import"),a("span",{style:{color:"#24292EFF"}}," numpy "),a("span",{style:{color:"#D32F2F"}},"as"),a("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"M "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"ones"),a("span",{style:{color:"#212121"}},"(("),a("span",{style:{color:"#1976D2"}},"2"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"a "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"arange"),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(M "),a("span",{style:{color:"#D32F2F"}},"+"),a("span",{style:{color:"#212121"}}," a)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(M.shape)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(a.shape)")])])])],-1),u9=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"[[1. 2. 3.]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}}," [1. 2. 3.]]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"(2, 3)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"(3,)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"[[1. 2. 3.]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}}," [1. 2. 3.]]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"(2, 3)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"(3,)")])])])],-1),p9={__name:"80",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[l9,c9,u9]),_:1},16))}},m9=F(p9,[["__file","/@slidev/slides/80.md"]]),d9=a("p",null,"可以看到，根据规则1， 数组a的维度数更小，所以在其左边补1：",-1),f9=a("p",null,"M.shape -> (2, 3)",-1),h9=a("p",null,"a.shape -> (1, 3)",-1),g9=a("p",null,"根据规则2， 第一个维度不匹配，因此拓展这个维度以匹配数组：",-1),_9=a("p",null,"M.shape -> (2, 3)",-1),y9=a("p",null,"a.shape -> (2, 3)",-1),v9={__name:"81",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[d9,f9,h9,g9,_9,y9]),_:1},16))}},x9=F(v9,[["__file","/@slidev/slides/81.md"]]),w9=a("h2",null,"示例2",-1),b9=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F97583"}},"import"),a("span",{style:{color:"#B392F0"}}," numpy "),a("span",{style:{color:"#F97583"}},"as"),a("span",{style:{color:"#B392F0"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"a "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"arange"),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},")."),a("span",{style:{color:"#B392F0"}},"reshape"),a("span",{style:{color:"#BBBBBB"}},"(("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"1"),a("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"b "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"arange"),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(a "),a("span",{style:{color:"#F97583"}},"+"),a("span",{style:{color:"#BBBBBB"}}," b)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(a.shape)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(b.shape)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#D32F2F"}},"import"),a("span",{style:{color:"#24292EFF"}}," numpy "),a("span",{style:{color:"#D32F2F"}},"as"),a("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"a "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"arange"),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},")."),a("span",{style:{color:"#6F42C1"}},"reshape"),a("span",{style:{color:"#212121"}},"(("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"1"),a("span",{style:{color:"#212121"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"b "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"arange"),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(a "),a("span",{style:{color:"#D32F2F"}},"+"),a("span",{style:{color:"#212121"}}," b)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(a.shape)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(b.shape)")])])])],-1),$9=a("p",null,"规则1告诉我们，需要用1将b的形状补全:",-1),P9=a("p",null,"a.shape -> (3, 1)",-1),S9=a("p",null,"b.shape -> (1, 3)",-1),k9=a("p",null,"规则2告诉我们，需要更新这两个数组的维度来互相匹配:",-1),B9=a("p",null,"a.shape -> (3, 3)",-1),E9=a("p",null,"b.shape -> (3, 3)",-1),N9={__name:"82",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[w9,b9,$9,P9,S9,k9,B9,E9]),_:1},16))}},C9=F(N9,[["__file","/@slidev/slides/82.md"]]),F9=a("p",null,"因为结果匹配，所以这两个形状是兼容的，可以看到一下结果:",-1),T9=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"[[0 1 2]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}}," [1 2 3]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}}," [2 3 4]]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"(3, 1)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#b392f0"}},"(3,)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"[[0 1 2]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}}," [1 2 3]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}}," [2 3 4]]")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"(3, 1)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292eff"}},"(3,)")])])])],-1),M9={__name:"83",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[F9,T9]),_:1},16))}},O9=F(M9,[["__file","/@slidev/slides/83.md"]]),A9=a("h2",null,"示例3",-1),L9=a("p",null,"现在来看一个两组不兼容的示例:",-1),I9=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#F97583"}},"import"),a("span",{style:{color:"#B392F0"}}," numpy "),a("span",{style:{color:"#F97583"}},"as"),a("span",{style:{color:"#B392F0"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"M "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"ones"),a("span",{style:{color:"#BBBBBB"}},"(("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"2"),a("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"a "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"arange"),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"print"),a("span",{style:{color:"#BBBBBB"}},"(M "),a("span",{style:{color:"#F97583"}},"+"),a("span",{style:{color:"#BBBBBB"}}," a)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#D32F2F"}},"import"),a("span",{style:{color:"#24292EFF"}}," numpy "),a("span",{style:{color:"#D32F2F"}},"as"),a("span",{style:{color:"#24292EFF"}}," np")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"M "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"ones"),a("span",{style:{color:"#212121"}},"(("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"2"),a("span",{style:{color:"#212121"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"a "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"arange"),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},")")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(M "),a("span",{style:{color:"#D32F2F"}},"+"),a("span",{style:{color:"#212121"}}," a)")])])])],-1),R9=a("p",null,"和第一个示例相比，这里有个微小的不同之处： 矩阵M是转置的。那么这将如何影响计算呢？两个数组的形状如下:",-1),q9=a("p",null,"M.shape = (3, 2)",-1),U9=a("p",null,"a.shape = (3,)",-1),D9={__name:"84",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[A9,L9,I9,R9,q9,U9]),_:1},16))}},H9=F(D9,[["__file","/@slidev/slides/84.md"]]),j9=a("p",null,"规则1告诉我们，a数组的形状必须用1进行补全：",-1),V9=a("p",null,"M.shape -> (3, 2)",-1),z9=a("p",null,"a.shape -> (1, 3)",-1),K9=a("p",null,"根据规则2，a数组的第一个维度进行扩展以匹配M的维度：",-1),W9=a("p",null,"M.shape -> (3, 2)",-1),G9=a("p",null,"a.shape -> (3, 3)",-1),Y9={__name:"85",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>(y(),B(K,j(D(t)),{default:L(()=>[j9,V9,z9,K9,W9,G9]),_:1},16))}},Z9=F(Y9,[["__file","/@slidev/slides/85.md"]]),J9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Q9=a("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),X9=[Q9];function e6(e,t){return y(),X("svg",J9,X9)}const t6={name:"ph-clipboard",render:e6},n6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},s6=a("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),r6=[s6];function o6(e,t){return y(),X("svg",n6,r6)}const a6={name:"ph-check-circle",render:o6},i6=["title"],l6=Be({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;S(C);const n=S(ou),s=S(au),r=S(iu);function o(m=5){const d=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let v=0;v<m;v++)d.push(h.charAt(Math.floor(Math.random()*g)));return d.join("")}const i=le(),l=Wt();ur(()=>{const m=t.at==null?s==null?void 0:s.value.length:t.at,d=O(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(m||0)),t.ranges.length-1)),h=O(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const g=o(),v=Tf(t.ranges.length-1).map(w=>g+w);s!=null&&s.value&&(s.value.push(...v),ro(()=>v.forEach(w=>Ff(s.value,w)),l))}bs(()=>{if(!i.value)return;const v=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const w of v){const E=Array.from(w.querySelectorAll(".line")),P=np(E.length,h.value);if(E.forEach((N,T)=>{const W=P.includes(T+1);N.classList.toggle(Cf,!0),N.classList.toggle("highlighted",W),N.classList.toggle("dishonored",!W)}),t.maxHeight){const N=w.querySelector(".line.highlighted");N&&N.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Eh();function p(){var d,h;const m=(h=(d=i.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&u(m)}return(m,d)=>{const h=a6,g=t6;return y(),X("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:tt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[zt(m.$slots,"default"),b(Fe).codeCopy?(y(),X("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(c)?"Copied":"Copy",onClick:d[0]||(d[0]=v=>p())},[b(c)?(y(),B(h,{key:0,class:"p-2 w-8 h-8"})):(y(),B(g,{key:1,class:"p-2 w-8 h-8"}))],8,i6)):re("v-if",!0)],4)}}}),c6=F(l6,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),u6=a("p",null,"现在需要用到规则3——最终的形状还是不匹配，因此这两个数组是不兼容的。当我们执行运算时会看到以下结果：",-1),p6=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"--------------------------------------------------------------------------"),a("span",{style:{color:"#F97583"}},"-")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#79B8FF"}},"ValueError"),a("span",{style:{color:"#B392F0"}},"                                Traceback "),a("span",{style:{color:"#BBBBBB"}},"(most recent call last)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"Cell In"),a("span",{style:{color:"#BBBBBB"}},"["),a("span",{style:{color:"#F8F8F8"}},"5"),a("span",{style:{color:"#BBBBBB"}},"],"),a("span",{style:{color:"#B392F0"}}," line "),a("span",{style:{color:"#F8F8F8"}},"6")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"      "),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#B392F0"}}," M "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"ones"),a("span",{style:{color:"#BBBBBB"}},"(("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},", "),a("span",{style:{color:"#F8F8F8"}},"2"),a("span",{style:{color:"#BBBBBB"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"      "),a("span",{style:{color:"#F8F8F8"}},"4"),a("span",{style:{color:"#B392F0"}}," a "),a("span",{style:{color:"#F97583"}},"="),a("span",{style:{color:"#B392F0"}}," np"),a("span",{style:{color:"#BBBBBB"}},"."),a("span",{style:{color:"#B392F0"}},"arange"),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},")")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#B392F0"}},"----"),a("span",{style:{color:"#F97583"}},">"),a("span",{style:{color:"#B392F0"}}," "),a("span",{style:{color:"#F8F8F8"}},"6"),a("span",{style:{color:"#B392F0"}}," print"),a("span",{style:{color:"#BBBBBB"}},"(M "),a("span",{style:{color:"#F97583"}},"+"),a("span",{style:{color:"#BBBBBB"}}," a)")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#79B8FF"}},"ValueError"),a("span",{style:{color:"#BBBBBB"}},":"),a("span",{style:{color:"#B392F0"}}," operands could "),a("span",{style:{color:"#F97583"}},"not"),a("span",{style:{color:"#B392F0"}}," be broadcast together "),a("span",{style:{color:"#F97583"}},"with"),a("span",{style:{color:"#B392F0"}}," shapes "),a("span",{style:{color:"#BBBBBB"}},"("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},","),a("span",{style:{color:"#F8F8F8"}},"2"),a("span",{style:{color:"#BBBBBB"}},") ("),a("span",{style:{color:"#F8F8F8"}},"3"),a("span",{style:{color:"#BBBBBB"}},",)")])])]),a("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"--------------------------------------------------------------------------"),a("span",{style:{color:"#D32F2F"}},"-")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#1976D2"}},"ValueError"),a("span",{style:{color:"#24292EFF"}},"                                "),a("span",{style:{color:"#6F42C1"}},"Traceback "),a("span",{style:{color:"#212121"}},"(most recent call last)")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"Cell In"),a("span",{style:{color:"#212121"}},"["),a("span",{style:{color:"#1976D2"}},"5"),a("span",{style:{color:"#212121"}},"],"),a("span",{style:{color:"#24292EFF"}}," line "),a("span",{style:{color:"#1976D2"}},"6")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"      "),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#24292EFF"}}," M "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"ones"),a("span",{style:{color:"#212121"}},"(("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},", "),a("span",{style:{color:"#1976D2"}},"2"),a("span",{style:{color:"#212121"}},"))")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"      "),a("span",{style:{color:"#1976D2"}},"4"),a("span",{style:{color:"#24292EFF"}}," a "),a("span",{style:{color:"#D32F2F"}},"="),a("span",{style:{color:"#24292EFF"}}," np"),a("span",{style:{color:"#212121"}},"."),a("span",{style:{color:"#6F42C1"}},"arange"),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},")")]),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292EFF"}},"----"),a("span",{style:{color:"#D32F2F"}},">"),a("span",{style:{color:"#24292EFF"}}," "),a("span",{style:{color:"#1976D2"}},"6"),a("span",{style:{color:"#24292EFF"}}," "),a("span",{style:{color:"#6F42C1"}},"print"),a("span",{style:{color:"#212121"}},"(M "),a("span",{style:{color:"#D32F2F"}},"+"),a("span",{style:{color:"#212121"}}," a)")]),x(`
`),a("span",{class:"line"}),x(`
`),a("span",{class:"line"},[a("span",{style:{color:"#1976D2"}},"ValueError"),a("span",{style:{color:"#212121"}},":"),a("span",{style:{color:"#24292EFF"}}," operands could "),a("span",{style:{color:"#D32F2F"}},"not"),a("span",{style:{color:"#24292EFF"}}," be broadcast together "),a("span",{style:{color:"#D32F2F"}},"with"),a("span",{style:{color:"#24292EFF"}}," "),a("span",{style:{color:"#6F42C1"}},"shapes "),a("span",{style:{color:"#212121"}},"("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},","),a("span",{style:{color:"#1976D2"}},"2"),a("span",{style:{color:"#212121"}},") ("),a("span",{style:{color:"#1976D2"}},"3"),a("span",{style:{color:"#212121"}},",)")])])])],-1),m6=a("p",null,"请注意，这里可能发生的混淆在于：",-1),d6=a("p",null,[a("strong",null,"你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。")],-1),f6={__name:"86",setup(e){const t={srcSequence:"./pages/broadcast.md"};return S(C),(n,s)=>{const r=c6;return y(),B(K,j(D(t)),{default:L(()=>[u6,ie(r,Aa({},{ranges:[""]}),{default:L(()=>[p6]),_:1},16),m6,d6]),_:1},16)}}},h6=F(f6,[["__file","/@slidev/slides/86.md"]]),g6=a("h1",null,"Thanks",-1),_6={__name:"87",setup(e){const t={layout:"center"};return S(C),(n,s)=>(y(),B(ts,j(D(t)),{default:L(()=>[g6]),_:1},16))}},y6=F(_6,[["__file","/@slidev/slides/87.md"]]),v6=[{path:"1",name:"page-1",component:vx,meta:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"NumPy 基础",slide:{raw:`---
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


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。`,frontmatter:{layout:"center",title:"1. 简介与安装",srcSequence:"./pages/what_is_numpy.md"},index:1,start:0,end:9,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`---
layout: center
---

# 1. 简介与安装


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。
`,title:"1. 简介与安装",level:1,content:`# 1. 简介与安装


NumPy(Numerical Python 的简称)提供了高效存储和操作密集数据缓存的接口。在某些方面，NumPy数组与Python内置的列表类型非常相似。但是随着数组在维度上变大，NumPy数组提供了更加高效的存储和数据操作。NumPy数组几乎是整个Python数据科学工具生态系统的核心。因此，不管你对数据科学的哪个方面感兴趣，花点时间学习如何有效地使用NumPy都是非常值得的。`,frontmatter:{layout:"center",title:"1. 简介与安装"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/what_is_numpy.md
---
`,content:"",frontmatter:{},index:1,start:36,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Tx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:"\n# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```\n",title:"2. 安装",level:1,content:"# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```",frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:2,start:10,end:28,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:"\n# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```\n",title:"2. 安装",level:1,content:"# 2. 安装\n```bash showLineNumbers\npip install numpy\n```\n\n# 3. 使用\n\n```python showLineNumbers\nimport numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n```\n```\n[1 2 3]\n```",frontmatter:{},index:1,start:10,end:28},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Ix,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：
`,title:"4. NumPy数组 vs Python 列表",level:1,content:`# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：`,frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:3,start:29,end:36,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：
`,title:"4. NumPy数组 vs Python 列表",level:1,content:`# 4. NumPy数组 vs Python 列表

乍看上去，NumPy数组与Python列表极其相似。它们都用来装载数据，都能够快速添加或获取元素，插入和移除元素则比较慢。

当然相比python列表，numpy数组可以直接进行算术运算：`,frontmatter:{},index:2,start:29,end:36},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Dx,meta:{srcSequence:"./pages/what_is_numpy.md",slide:{raw:`
<img src = "/numpy-02.png" class = "h-90 mx-auto">
`,content:'<img src = "/numpy-02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/what_is_numpy.md"},index:4,start:37,end:40,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`
<img src = "/numpy-02.png" class = "h-90 mx-auto">
`,content:'<img src = "/numpy-02.png" class = "h-90 mx-auto">',frontmatter:{},index:3,start:37,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:zx,meta:{layout:"center",srcSequence:"./pages/what_is_numpy.md",slide:{raw:`---
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
4. 元素类型一般比较固定`,frontmatter:{layout:"center",srcSequence:"./pages/what_is_numpy.md"},index:5,start:40,end:53,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",raw:`---
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
4. 元素类型一般比较固定`,frontmatter:{layout:"center"},index:4,start:40,end:53},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/what_is_numpy.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Gx,meta:{layout:"center",title:"2. 向量(Vector): 一维数组",srcSequence:"./pages/vector.md",slide:{raw:null,title:"2. 向量(Vector): 一维数组",level:1,content:"# 2. 向量(Vector): 一维数组",frontmatter:{layout:"center",title:"2. 向量(Vector): 一维数组",srcSequence:"./pages/vector.md"},index:6,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`---
layout: center
---

# 2. 向量(Vector): 一维数组
`,title:"2. 向量(Vector): 一维数组",level:1,content:"# 2. 向量(Vector): 一维数组",frontmatter:{layout:"center",title:"2. 向量(Vector): 一维数组"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/vector.md
---
`,content:"",frontmatter:{},index:2,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:rw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
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
<img src = "/numpy-07.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:7,start:7,end:22,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
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
<img src = "/numpy-07.png" class = "h-90 mx-auto">`,frontmatter:{},index:1,start:7,end:22},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:cw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:8,start:23,end:29,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
不止是空数组，通过上述方法还可以将数组填充为特定值：
<img src = "/numpy-08.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:23,end:29},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:fw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:9,start:30,end:36,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">

`,title:"初始化",level:2,content:`## 初始化
在NumPy中，还可以通过单调序列初始化数组：
<img src = "/numpy-09.png" class = "h-90 mx-auto">`,frontmatter:{},index:3,start:30,end:36},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:yw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。
`,title:"初始化",level:2,content:`## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。`,frontmatter:{srcSequence:"./pages/vector.md"},index:10,start:37,end:41,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。
`,title:"初始化",level:2,content:`## 初始化
如果您需要[0., 1., 2.]这样的浮点数组，可以更改arange输出的类型，即arange(3).astype(float)，但有更好的方法：由于arange函数对类型敏感，因此参数为整数类型，它生成的也是整数类型，如果输入float类型arange(3.），则会生成浮点数。`,frontmatter:{},index:4,start:37,end:41},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:$w,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">
`,title:"初始化",level:2,content:`## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:11,start:42,end:47,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">
`,title:"初始化",level:2,content:`## 初始化
arange浮点类型数据不是非常友好：
<img src = "/numpy-10.png" class = "h-90 mx-auto">`,frontmatter:{},index:5,start:42,end:47},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Bw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。
`,title:"初始化",level:2,content:`## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。`,frontmatter:{srcSequence:"./pages/vector.md"},index:12,start:48,end:52,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。
`,title:"初始化",level:2,content:`## 初始化
上图中，0.1对我们来说是一个有限的十进制数，但对计算机而言，它是一个二进制无穷小数，必须四舍五入为一个近似值。因此，将小数作为arange的步长可能导致一些错误。可以通过以下两种方式避免如上错误：一是使间隔末尾落入非整数步数，但这会降低可读性和可维护性；二是使用linspace，这样可以避免四舍五入的错误影响，并始终生成要求数量的元素。但使用linspace时尤其需要注意最后一个的数量参数设置，由于它计算点数量，而不是间隔数量，因此上图中数量参数是11，而不是10。`,frontmatter:{},index:6,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Tw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-11.png) -->
`,title:"随机数",level:2,content:`## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-11.png)",index:13,start:53,end:60,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-11.png) -->
`,title:"随机数",level:2,content:`## 随机数
随机数组的生成如下：
<img src = "/numpy-11.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-11.png)",index:7,start:53,end:60},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-11.png" alt=""></p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Iw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
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
- able to pass two tricky synthetic tests that the old version fails.`,frontmatter:{srcSequence:"./pages/vector.md"},index:14,start:61,end:69,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
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
- able to pass two tricky synthetic tests that the old version fails.`,frontmatter:{},index:8,start:61,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Hw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`---
<img src = "/numpy-12.png" class = "h-90 mx-auto">
---

# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">

`,title:"2.向量索引",level:1,content:`# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:15,start:69,end:79,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`---
<img src = "/numpy-12.png" class = "h-90 mx-auto">
---

# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">

`,title:"2.向量索引",level:1,content:`# 2.向量索引

对于数组数据的访问，numpy提供了便捷的访问方式：
<img src = "/numpy-13.png" class = "h-90 mx-auto">`,frontmatter:{},index:9,start:69,end:79},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Gw,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">

`,title:"切片操作",level:2,content:`## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},index:16,start:80,end:88,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">

`,title:"切片操作",level:2,content:`## 切片操作
上图中，除“fancy indexing”外，其他所有索引方法本质上都是\`views\`：它们并不存储数据，如果原数组在被索引后发生更改，则会反映出原始数组中的更改。

上述所有这些方法都可以改变原始数组，即允许通过分配新值改变原数组的内容。这导致无法通过切片来复制数组：
<img src = "/numpy-14.png" class = "h-90 mx-auto">`,frontmatter:{},index:10,start:80,end:88},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:eb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).
`,title:"切片操作",level:2,content:`## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).`,frontmatter:{srcSequence:"./pages/vector.md"},index:17,start:89,end:97,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).
`,title:"切片操作",level:2,content:`## 切片操作
Also, such assignments must not change the size of the array, so tricks like
<img src = "/numpy-15.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-15.png) -->
won’t work in NumPy — use np.insert, np.append, etc. instead (described in the “2D” section below).`,frontmatter:{},index:11,start:89,end:97},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:ab,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。
`,title:"布尔索引",level:2,content:`## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。`,frontmatter:{srcSequence:"./pages/vector.md"},index:18,start:98,end:107,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。
`,title:"布尔索引",level:2,content:`## 布尔索引
此外，还可以通过布尔索引从NumPy数组中获取数据，这意味着可以使用各种逻辑运算符：
<img src = "/numpy-16.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-16.png) -->

注意，不可以使用\`3 <= a <= 5\`这样的Python“三元”比较。`,frontmatter:{},index:12,start:98,end:107},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:pb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-17.png) -->
`,title:"布尔索引",level:2,content:`## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-17.png)",index:19,start:108,end:115,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-17.png) -->
`,title:"布尔索引",level:2,content:`## 布尔索引
如上所述，布尔索引是可写的。如下图np.where和np.clip两个专有函数。
<img src = "/numpy-17.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-17.png)",index:13,start:108,end:115},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-17.png" alt=""></p>
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:gb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-18.png) -->
`,title:"3.向量操作",level:1,content:`# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-18.png)",index:20,start:116,end:124,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-18.png) -->
`,title:"3.向量操作",level:1,content:`# 3.向量操作

NumPy的计算速度是其亮点之一，其向量运算操作接近C++级别，避免了Python循环耗时较多的问题。NumPy允许像普通数字一样操作整个数组：
<img src = "/numpy-18.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-18.png)",index:14,start:116,end:124},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-18.png" alt=""></p>
`,id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:wb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-19.png) -->
`,title:"浮点运算",level:2,content:`## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-19.png)",index:21,start:125,end:132,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-19.png) -->
`,title:"浮点运算",level:2,content:`## 浮点运算
浮点数的计算也是如此，numpy能够将标量广播到数组：
<img src = "/numpy-19.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-19.png)",index:15,start:125,end:132},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-19.png" alt=""></p>
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:kb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-20.png) -->
`,title:"数学函数",level:2,content:`## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-20.png)",index:22,start:133,end:140,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-20.png) -->
`,title:"数学函数",level:2,content:`## 数学函数
numpy提供了许多数学函数来处理矢量：
<img src = "/numpy-20.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-20.png)",index:16,start:133,end:140},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-20.png" alt=""></p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Fb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-21.png) -->
`,title:"向量运算",level:2,content:`## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-21.png)",index:23,start:141,end:148,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-21.png) -->
`,title:"向量运算",level:2,content:`## 向量运算
向量点乘（内积）和叉乘（外积、向量积）如下：
<img src = "/numpy-21.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-21.png)",index:17,start:141,end:148},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-21.png" alt=""></p>
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Lb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-22.png) -->
`,title:"三角函数",level:2,content:`## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-22.png)",index:24,start:149,end:156,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-22.png) -->
`,title:"三角函数",level:2,content:`## 三角函数
numpy也提供了如下三角函数运算：
<img src = "/numpy-22.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-22.png)",index:18,start:149,end:156},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-22.png" alt=""></p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:jb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
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

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。`,frontmatter:{srcSequence:"./pages/vector.md"},index:25,start:157,end:170,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
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

np.around与np.round是等效的，这样做只是为了避免 from numpy import *时与Python  aroun的冲突（但一般的使用方式是import numpy as np）。当然，你也可以使用a.round()。`,frontmatter:{},index:19,start:157,end:170},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Gb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-24.png) -->
`,title:"最大最小值等",level:2,content:`## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-24.png)",index:26,start:171,end:178,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-24.png) -->
`,title:"最大最小值等",level:2,content:`## 最大最小值等
numpy还可以实现以下功能：
<img src = "/numpy-24.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-24.png)",index:20,start:171,end:178},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-24.png" alt=""></p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Xb,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-25.png) -->
`,title:"算数平均",level:2,content:`<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-25.png)",index:27,start:179,end:187,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-25.png) -->
`,title:"算数平均",level:2,content:`<!-- TODO: 不确定 -->
## 算数平均
As you can see from the formula above, both std and var ignore Bessel’s correction and give a biased result in the most typical use case of estimating std from a sample when the population mean is unknown. The standard approach to get a less biased estimation is to have n-1 in the denominator, which is done with ddof=1 (‘delta degrees of freedom’):
<img src = "/numpy-25.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-25.png)",index:21,start:179,end:187},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-25.png" alt=""></p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:s3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-26.png) -->
`,content:`<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/vector.md"},note:"![](./img/numpy-26.png)",index:28,start:188,end:195,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-26.png) -->
`,content:`<!-- TODO: 不确定 -->
The effect of the Bessel’s correction quickly diminishes with increasing sample size. Also, it is not a one-size-fits-all solution, e.g. for the normal distribution ddof=1.5 is better:
<img src = "/numpy-26.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-26.png)",index:22,start:188,end:195},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:`<p><img src="./img/numpy-26.png" alt=""></p>
`,id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:c3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。
`,title:"排序",level:1,content:`# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。`,frontmatter:{srcSequence:"./pages/vector.md"},index:29,start:196,end:205,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。
`,title:"排序",level:1,content:`# 排序
在numpy中，排序函数功能有所阉割：
<img src = "/numpy-27.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-27.png) -->

对于一维数组，可以通过反转结果来解决reversed函数缺失的不足，但在2维数组中该问题变得棘手。`,frontmatter:{},index:23,start:196,end:205},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:g3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
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

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。`,frontmatter:{srcSequence:"./pages/vector.md"},index:30,start:206,end:224,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
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

实际上，通过C实现加速搜索并不是困难，问题是浮点数据比较。`,frontmatter:{},index:24,start:206,end:224},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:b3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
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
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。`,frontmatter:{srcSequence:"./pages/vector.md"},index:31,start:225,end:236,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
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
- math.isclose不对要比较的数字做任何假设，而是需要用户提供一个合理的abs_tol值（np.allclose默认的atol值1e-8足以满足小数位数为1的浮点数比较，即\`math.isclose(0.1+0.2–0.3, abs_tol=1e-8)==True\`。`,frontmatter:{},index:25,start:225,end:236},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:S3,meta:{srcSequence:"./pages/vector.md",slide:{raw:`
此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。`,content:"此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。",frontmatter:{srcSequence:"./pages/vector.md"},index:32,start:237,end:239,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",raw:`
此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。`,content:"此外，对于绝队偏差和相对偏差，np.allclose依然存在一些问题。例如，对于某些值a、b， allclose(a,b)!=allclose(b,a)，而在math.isclose中则不存在这些问题。查看GitHub上的[浮点数据指南](https://floating-point-gui.de/errors/comparison/)和相应的[NumPy问题](https://github.com/numpy/numpy/issues/10161)了解更多信息。",frontmatter:{},index:26,start:237,end:239},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/vector.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E3,meta:{layout:"center",title:"3. 矩阵(Matrix): 二维数组",srcSequence:"./pages/matrix.md",slide:{raw:null,title:"3. 矩阵(Matrix): 二维数组",level:1,content:"# 3. 矩阵(Matrix): 二维数组",frontmatter:{layout:"center",title:"3. 矩阵(Matrix): 二维数组",srcSequence:"./pages/matrix.md"},index:33,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`---
layout: center
---

# 3. 矩阵(Matrix): 二维数组
`,title:"3. 矩阵(Matrix): 二维数组",level:1,content:"# 3. 矩阵(Matrix): 二维数组",frontmatter:{layout:"center",title:"3. 矩阵(Matrix): 二维数组"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/matrix.md
---
`,content:"",frontmatter:{},index:3,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:O3,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。
`,title:"1.矩阵初始化",level:1,content:`# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:34,start:7,end:16,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。
`,title:"1.矩阵初始化",level:1,content:`# 1.矩阵初始化

矩阵的初始化语法与向量类似：
<img src = "/numpy-30.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-30.png) -->

如上要使用双括号，因为第二个位置参数（可选）是为dtype（也接受整数）保留的。`,frontmatter:{},index:1,start:7,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:q3,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-31.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-31.png)",index:35,start:17,end:25,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-31.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

随机矩阵的生成也与向量类似：
<img src = "/numpy-31.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-31.png)",index:2,start:17,end:25},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-31.png" alt=""></p>
`,id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:V3,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-32.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-32.png)",index:36,start:26,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-32.png) -->
`,title:"随机矩阵",level:2,content:`## 随机矩阵

The ubiquitous double parentheses found their way to the interface of the new-style (see details in the 1D section above) numbers generation routines so that as of today only in np.eye has beauty taken prevelence over stringency and convenience of passing shapes as is:
<img src = "/numpy-32.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-32.png)",index:3,start:26,end:34},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-32.png" alt=""></p>
`,id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Z3,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。
`,title:"索引",level:2,content:`## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:37,start:35,end:45,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。
`,title:"索引",level:2,content:`## 索引

二维数组的索引语法要比嵌套列表更方便：
<img src = "/numpy-33.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-33.png) -->

“view”表示数组切片时并未进行任何复制，在修改数组后，相应更改也将反映在切片中。`,frontmatter:{},index:4,start:35,end:45},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:t5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">
`,title:"2.轴参数",level:1,content:`# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},index:38,start:46,end:52,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">
`,title:"2.轴参数",level:1,content:`# 2.轴参数

在求和等操作中，NumPy可以实现跨行或跨列的操作。为了适用任意维数的数组，NumPy引入了axis的概念。axis参数的值实际上就是维度数量，如第一个维是axis=0  ，第二维是axis=1，依此类推。因此，在2维数组中，axis=0指列方向，axis=1指行方向。
<img src = "/numpy-34.png" class = "h-90 mx-auto">`,frontmatter:{},index:5,start:46,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:a5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-35.png) -->
`,title:"3.矩阵运算",level:1,content:`# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-35.png)",index:39,start:53,end:61,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-35.png) -->
`,title:"3.矩阵运算",level:1,content:`# 3.矩阵运算

除了+，-，*，/，//和**等数组元素的运算符外，numpy提供了@运算符计算矩阵乘积：
<img src = "/numpy-35.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-35.png)",index:6,start:53,end:61},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-35.png" alt=""></p>
`,id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:p5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-36.png) -->
`,title:"混合运算",level:2,content:`## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-36.png)",index:40,start:62,end:70,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-36.png) -->
`,title:"混合运算",level:2,content:`## 混合运算

numpy同样可以通过<!--[广播机制](./broadcast.md) -->实现向量与矩阵，或两个向量之间的混合运算：
<img src = "/numpy-36.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-36.png)",index:7,start:62,end:70},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-36.png" alt=""></p>
`,id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:g5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-37.png) -->
`,title:"乘法",level:2,content:`## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-37.png)",index:41,start:71,end:79,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-37.png) -->
`,title:"乘法",level:2,content:`## 乘法

注意，上图最后一个示例是对称的逐元素乘法。使用矩阵乘法@可以计算非对称线性代数外积，两个矩阵互换位置后计算内积：
<img src = "/numpy-37.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-37.png)",index:8,start:71,end:79},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-37.png" alt=""></p>
`,id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:w5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-38.png) -->
`,title:"4.行向量与列向量",level:1,content:`# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-38.png)",index:42,start:80,end:88,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-38.png) -->
`,title:"4.行向量与列向量",level:1,content:`# 4.行向量与列向量

根据前文可知，在2维数组中，行向量和列向量被区别对待。通常NumPy会尽可能使用单一类型的1维数组（例如，2维数组a的第j列a[:, j]是1维数组）。默认情况下，一维数组在2维操作中被视为行向量，因此，将矩阵乘行向量时，使用形状(n,)或(1,n)的向量结果一致。有多种方法可以从一维数组中得到列向量，但并不包括transpose：
<img src = "/numpy-38.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-38.png)",index:9,start:80,end:88},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-38.png" alt=""></p>
`,id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:B5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:43,start:89,end:99,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

使用newaxis更新数组形状和索引可以将1维数组转化为2维列向量：
<img src = "/numpy-39.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-39.png) -->

其中，-1表示在reshape是该维度自动决定，方括号中的None等同于np.newaxis，表示在指定位置添加一个空轴。`,frontmatter:{},index:10,start:89,end:99},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:T5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-40.png) -->
`,title:"数组形状改变",level:2,content:`## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-40.png)",index:44,start:100,end:108,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-40.png) -->
`,title:"数组形状改变",level:2,content:`## 数组形状改变

因此，NumPy中共有三种类型的向量：1维数组，2维行向量和2维列向量。以下是两两类型转换图：
<img src = "/numpy-40.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-40.png)",index:11,start:100,end:108},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-40.png" alt=""></p>
`,id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:I5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:45,start:109,end:116,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。
`,title:"数组形状改变",level:2,content:`## 数组形状改变

根据广播规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，对应图中阴影化区域。

严格来说，除一维外的所有数组的大小都是一个向量（如a.shape == [1,1,1,5,1,1]），因此numpy的输入类型是任意的，但上述三种最为常用。可以使用np.reshape将一维矢量转换为这种形式，使用np.squeeze可将其恢复。这两个功能都通过view发挥作用。`,frontmatter:{},index:12,start:109,end:116},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:H5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-41.png) -->
`,title:"5.矩阵的操作",level:1,content:`# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-41.png)",index:46,start:117,end:124,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-41.png) -->
`,title:"5.矩阵的操作",level:1,content:`# 5.矩阵的操作

矩阵的拼接有以下两种方式：
<img src = "/numpy-41.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-41.png)",index:13,start:117,end:124},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-41.png" alt=""></p>
`,id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:W5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-42.png)",index:47,start:125,end:132,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

图示操作仅适用于矩阵堆叠或向量堆叠，而一维数组和矩阵的混合堆叠只有通过vstack才可实现，hstack会导致维度不匹配错误。因为前文提到将一维数组作为行向量，而不是列向量。为此，可以将其转换为行向量，或使用专门的column_stack函数执行此操作：
<img src = "/numpy-42.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-42.png)",index:14,start:125,end:132},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-42.png" alt=""></p>
`,id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Q5,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42-1.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-42-1.png)",index:48,start:133,end:140,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-42-1.png) -->
`,title:"矩阵拼接",level:2,content:`## 矩阵拼接

与stack对应的是split：
<img src = "/numpy-42-1.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-42-1.png)",index:15,start:133,end:140},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-42-1.png" alt=""></p>
`,id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:n$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-43.png) -->
`,content:`All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-43.png)",index:49,start:141,end:146,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-43.png) -->
`,content:`All split flavors accept either a list of indices to split at, or a single integer, the number of equal sized parts:
<img src = "/numpy-43.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-43.png)",index:16,start:141,end:146},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-43.png" alt=""></p>
`,id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:i$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-44.png) -->
`,title:"矩阵复制",level:2,content:`## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-44.png)",index:50,start:147,end:154,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-44.png) -->
`,title:"矩阵复制",level:2,content:`## 矩阵复制

矩阵复制有两种方式：tile类似粘贴复制；repeat相当于分页打印。
<img src = "/numpy-44.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-44.png)",index:17,start:147,end:154},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-44.png" alt=""></p>
`,id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:m$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-45.png) -->
`,title:"矩阵删除",level:2,content:`## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-45.png)",index:51,start:155,end:162,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-45.png) -->
`,title:"矩阵删除",level:2,content:`## 矩阵删除

delete可以删除特定的行或列
<img src = "/numpy-45.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-45.png)",index:18,start:155,end:162},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-45.png" alt=""></p>
`,id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:_$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-46.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-46.png)",index:52,start:163,end:170,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-46.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

相应插入操作为insert：
<img src = "/numpy-46.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-46.png)",index:19,start:163,end:170},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-46.png" alt=""></p>
`,id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:b$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-47.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-47.png)",index:53,start:171,end:178,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-47.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

与hstack一样，append函数无法自动转置1D数组，因此需要重新调整向量形状或添加维数，或者使用column_stack：
<img src = "/numpy-47.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-47.png)",index:20,start:171,end:178},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-47.png" alt=""></p>
`,id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:B$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-48.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-48.png)",index:54,start:179,end:186,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-48.png) -->
`,title:"矩阵插入",level:2,content:`## 矩阵插入

如果仅仅是向数组的边界添加常量值，pad函数是足够的：
<img src = "/numpy-48.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-48.png)",index:21,start:179,end:186},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-48.png" alt=""></p>
`,id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:O$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
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
<img src = "/numpy-50.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-50.png)",index:55,start:187,end:198,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
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
`,id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:U$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-51.png) -->
`,title:"meshgrid",level:2,content:`## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-51.png)",index:56,start:199,end:208,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-51.png) -->
`,title:"meshgrid",level:2,content:`## meshgrid

meshgrid函数接受任意一组索引，通过mgrid切片和indices索引生成完整的索引范围，然后，fromfunction函数根据I和J实现运算。

在NumPy中有一种更好的方法，无需在内存中存储整个I和J矩阵（虽然meshgrid已足够优秀，仅存储对原始向量的引用），仅存储形状矢量，然后通过广播规实现其余内容的处理：
<img src = "/numpy-51.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-51.png)",index:23,start:199,end:208},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-51.png" alt=""></p>
`,id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:W$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
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

以上方法在稀疏网格中同样适用。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:57,start:209,end:220,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
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

以上方法在稀疏网格中同样适用。`,frontmatter:{},index:24,start:209,end:220},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:Q$,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-53.png) -->
`,title:"7.矩阵的统计",level:1,content:`# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-53.png)",index:58,start:221,end:228,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-53.png) -->
`,title:"7.矩阵的统计",level:1,content:`# 7.矩阵的统计

就像sum函数，numpy提供了矩阵不同轴上的\`min/max, argmin/argmax, mean/median/percentile, std/var\`等函数。
<img src = "/numpy-53.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-53.png)",index:25,start:221,end:228},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-53.png" alt=""></p>
`,id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:r4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-55.png) -->
`,title:"矩阵最大最小值",level:2,content:`## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-55.png)",index:59,start:229,end:238,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-55.png) -->
`,title:"矩阵最大最小值",level:2,content:`## 矩阵最大最小值

np.amin等同于np.min，这样做同样是为了避免from numpy import *可能的歧义。

2维及更高维中的argmin和argmax函数分别返回最小和最大值的索引，通过unravel_index函数可以将其转换为二维坐标：
<img src = "/numpy-55.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-55.png)",index:26,start:229,end:238},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-55.png" alt=""></p>
`,id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:l4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-56.png) -->
`,content:`all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-56.png)",index:60,start:239,end:244,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-56.png) -->
`,content:`all和any同样也可作用于特定维度：
<img src = "/numpy-56.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-56.png)",index:27,start:239,end:244},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-56.png" alt=""></p>
`,id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:d4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-57.png) -->
`,title:"8.矩阵排序",level:1,content:`# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-57.png)",index:61,start:245,end:252,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-57.png) -->
`,title:"8.矩阵排序",level:1,content:`# 8.矩阵排序

虽然在一维数组中，axis参数适用于不同函数，但在二维数组排序中影响较小：
<img src = "/numpy-57.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-57.png)",index:28,start:245,end:252},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:`<p><img src="./img/numpy-57.png" alt=""></p>
`,id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:x4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
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

其中，argsort返回排序后的原始数组的索引数组。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:62,start:253,end:264,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
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

其中，argsort返回排序后的原始数组的索引数组。`,frontmatter:{},index:29,start:253,end:264},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:E4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
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
<img src = "/numpy-60.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/matrix.md"},note:"![](./img/numpy-60.png)",index:63,start:265,end:280,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
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
`,id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:A4,meta:{srcSequence:"./pages/matrix.md",slide:{raw:`
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

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。`,frontmatter:{srcSequence:"./pages/matrix.md"},index:64,start:281,end:293,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",raw:`
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

其中，flipud沿上下方向翻转矩阵（沿axis = 0方向，与a [::-1，...]等效，其中...表示“其他所有维度”），注意区分它与fliplr，fliplr用于1维数组。`,frontmatter:{},index:31,start:281,end:293},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/matrix.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:R4,meta:{layout:"center",title:"4. 张量(Tensor): 多维数组",srcSequence:"./pages/tensor.md",slide:{raw:null,title:"4. 张量(Tensor): 多维数组",level:1,content:"# 4. 张量(Tensor): 多维数组",frontmatter:{layout:"center",title:"4. 张量(Tensor): 多维数组",srcSequence:"./pages/tensor.md"},index:65,start:0,end:7,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`---
layout: center
---

# 4. 张量(Tensor): 多维数组

`,title:"4. 张量(Tensor): 多维数组",level:1,content:"# 4. 张量(Tensor): 多维数组",frontmatter:{layout:"center",title:"4. 张量(Tensor): 多维数组"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/tensor.md
---
`,content:"",frontmatter:{},index:4,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:j4,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-63.png) -->
`,title:"1.初始化",level:1,content:`# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-63.png)",index:66,start:8,end:16,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-63.png) -->
`,title:"1.初始化",level:1,content:`# 1.初始化

通过重塑1维向量或转换嵌套Python列表来创建3维数组时，索引分别对应(z,y,x)。索引z是平面编号，(y,x)坐标在该平面上移动：
<img src = "/numpy-63.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-63.png)",index:1,start:8,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-63.png" alt=""></p>
`,id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:Y4,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-64.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-64.png)",index:67,start:17,end:26,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-64.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序
通过上述索引顺序，可以方便的保留灰度图像，a[i]表示第i个图像。

但这样的索引顺序并不具有广泛性，例如在处理RGB图像时，通常使用(y,x,z)顺序：首先是两个像素坐标，然后才是颜色坐标（Matplotlib中的RGB，OpenCV中的BGR）：
<img src = "/numpy-64.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-64.png)",index:2,start:17,end:26},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-64.png" alt=""></p>
`,id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:tP,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-65.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-65.png)",index:68,start:27,end:37,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-65.png) -->
`,title:"索引顺序",level:2,content:`## 索引顺序

这样可以方便地定位特定像素，如a[i,j]给出像素(i,j)的RGB元组。

因此，几何形状的创建实际取决于你对域的约定：
<img src = "/numpy-65.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-65.png)",index:3,start:27,end:37},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-65.png" alt=""></p>
`,id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:aP,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-66.png) -->
`,title:"RGB",level:2,content:`## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-66.png)",index:69,start:38,end:46,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-66.png) -->
`,title:"RGB",level:2,content:`## RGB

显然，hstack，vstack或dstack之类的NumPy函数并不一定满足这些约定，其默认的索引顺序是(y,x,z)，RGB图像顺序如下：
<img src = "/numpy-66.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-66.png)",index:4,start:38,end:46},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-66.png" alt=""></p>
`,id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:pP,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-67.png) -->
`,title:"concatenate",level:2,content:`## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/tensor.md"},note:"![](./img/numpy-67.png)",index:70,start:47,end:55,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-67.png) -->
`,title:"concatenate",level:2,content:`## concatenate

如果数据不是这样的布局，使用concatenate命令可以方便的堆叠图像，并通过axis参数提供索引号：
<img src = "/numpy-67.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-67.png)",index:5,start:47,end:55},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:`<p><img src="./img/numpy-67.png" alt=""></p>
`,id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:_P,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。
`,title:"数组转置",level:2,content:`## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:71,start:56,end:64,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。
`,title:"数组转置",level:2,content:`## 数组转置

如果不考虑轴数，可以将数组转换hstack和相应形式：
<img src = "/numpy-68.png" class = "h-90 mx-auto">

这种转换非常方便，该过程只是混合索引的顺序重排，并没有实际的复制操作。`,frontmatter:{},index:6,start:56,end:64},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:PP,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
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

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:72,start:65,end:77,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
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

广播机制同样适用多维数组，更多详细信息可参阅笔记“ NumPy中的广播”。`,frontmatter:{},index:7,start:65,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:CP,meta:{srcSequence:"./pages/tensor.md",slide:{raw:`
## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,title:"einsum",level:2,content:`## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,frontmatter:{srcSequence:"./pages/tensor.md"},index:73,start:78,end:87,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",raw:`
## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,title:"einsum",level:2,content:`## einsum

最后介绍einsum(Einstein summation)函数，这将使你在处理多维数组时避免很多Python循环，代码更为简洁：
<img src = "/numpy-70.png" class = "h-90 mx-auto">

<!-- ![](./img/numpy-70.png) -->

该函数对重复索引的数组求和。在一般情况下，使用np.tensordot(a,b,axis=1)就可以，但在更复杂的情况下，einsum速度更快，读写更容易。`,frontmatter:{},index:8,start:78,end:87},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/tensor.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:AP,meta:{layout:"center",title:"5. 广播(Broadcast)",srcSequence:"./pages/broadcast.md",slide:{raw:null,title:"5. 广播(Broadcast)",level:1,content:`# 5. 广播(Broadcast)

本文参考: 

1. [Broadcasting in NumPy](https://towardsdatascience.com/broadcasting-in-numpy-58856f926d73)`,frontmatter:{layout:"center",title:"5. 广播(Broadcast)",srcSequence:"./pages/broadcast.md"},index:74,start:0,end:10,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`---
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
`,content:"",frontmatter:{},index:5,start:52,end:56},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:HP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

<img src = "/numpy-broadcast-01.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-01.png)",index:75,start:11,end:21,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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
`,id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:GP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-02.png) -->
`,title:"二维数组的广播",level:2,content:`## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-02.png)",index:76,start:22,end:31,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-02.png) -->
`,title:"二维数组的广播",level:2,content:`## 二维数组的广播

广播类似于众所周知的**类型提升**：在大多数编程语言中，一个整数和一个浮点数进行运算时，整数会首先自动转换为浮点数类型。

在二维数组中（例如，将矩阵除以向量），广播有点棘手，因为操作的结果取决于操作数的特定形状：
<img src = "/numpy-broadcast-02.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-broadcast-02.png)",index:2,start:22,end:31},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:`<p><img src="./img/numpy-broadcast-02.png" alt=""></p>
`,id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:XP,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-03.png) -->
`,title:"三维数组的广播",level:2,content:`## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/broadcast.md"},note:"![](./img/numpy-broadcast-03.png)",index:77,start:32,end:39,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">
<!-- ![](./img/numpy-broadcast-03.png) -->
`,title:"三维数组的广播",level:2,content:`## 三维数组的广播

在三维数组及更高维度的数组中，广播甚至更不直观，使用它需要了解通用形式的广播规则。
<img src = "/numpy-broadcast-03.png" class = "h-90 mx-auto">`,frontmatter:{},note:"![](./img/numpy-broadcast-03.png)",index:3,start:32,end:39},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:`<p><img src="./img/numpy-broadcast-03.png" alt=""></p>
`,id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:i9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

为了更清楚地理解这些规则，来看几个具体的示例。`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:78,start:40,end:54,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

为了更清楚地理解这些规则，来看几个具体的示例。`,frontmatter:{},index:4,start:40,end:54},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:m9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/broadcast.md"},index:79,start:55,end:77,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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
\`\`\``,frontmatter:{},index:5,start:55,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:x9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

a.shape -> (2, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:80,start:78,end:91,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

a.shape -> (2, 3)`,frontmatter:{},index:6,start:78,end:91},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:C9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

b.shape -> (3, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:81,start:92,end:119,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

b.shape -> (3, 3)`,frontmatter:{},index:7,start:92,end:119},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:O9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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
\`\`\``,frontmatter:{srcSequence:"./pages/broadcast.md"},index:82,start:120,end:131,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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
\`\`\``,frontmatter:{},index:8,start:120,end:131},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:H9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

a.shape = (3,)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:83,start:132,end:151,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

a.shape = (3,)`,frontmatter:{},index:9,start:132,end:151},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:Z9,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

a.shape -> (3, 3)`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:84,start:152,end:165,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

a.shape -> (3, 3)`,frontmatter:{},index:10,start:152,end:165},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:h6,meta:{srcSequence:"./pages/broadcast.md",slide:{raw:`
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

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**`,frontmatter:{srcSequence:"./pages/broadcast.md"},index:85,start:166,end:186,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",raw:`
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

**你可能想通过在a数组的右边补1，而不是左边补1，让a和M的维度变得兼容。但是这不被广播的规则所允许。**`,frontmatter:{},index:11,start:166,end:186},filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/pages/broadcast.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:y6,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Thanks`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center"},index:86,start:56,end:61,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",component:U2,meta:{layout:"end"}}],ze=v6,Rs=[{name:"play",path:"/",component:lv,children:[...ze]},{name:"print",path:"/print",component:I2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!Is.remote||Is.remote===t.query.password)return!0;if(Is.remote&&t.query.password===void 0){const n=prompt("Enter password");if(Is.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};Rs.push({path:"/presenter/print",component:()=>$n(()=>import("./PresenterPrint-4aca5b39.js"),["assets/PresenterPrint-4aca5b39.js","assets/NoteDisplay-0d1499ee.js","assets/index-7262fecf.js"])}),Rs.push({name:"notes",path:"/notes",component:()=>$n(()=>import("./NotesView-9a3fae26.js"),["assets/NotesView-9a3fae26.js","assets/NoteDisplay-0d1499ee.js","assets/index-7262fecf.js"]),beforeEnter:e}),Rs.push({name:"presenter",path:"/presenter/:no",component:()=>$n(()=>import("./Presenter-78b780de.js"),["assets/Presenter-78b780de.js","assets/NoteDisplay-0d1499ee.js","assets/DrawingControls-06efc921.js","assets/index-7262fecf.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:e}),Rs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Pn=R_({history:Ig("/math201/slides/numpy"),routes:Rs});function x6(e,t,{mode:n="replace"}={}){return O({get(){const s=Pn.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ft(()=>{Pn[b(n)]({query:{...Pn.currentRoute.value.query,[e]:s}})})}})}const sp=le(0);Ft(()=>{Pn.afterEach(async()=>{await Ft(),sp.value+=1})});const rp=le(0),Ot=O(()=>Pn.currentRoute.value),xs=O(()=>Ot.value.query.print!==void 0),w6=O(()=>Ot.value.query.print==="clicks"),Qt=O(()=>Ot.value.query.embedded!==void 0),Nt=O(()=>Ot.value.path.startsWith("/presenter")),iS=O(()=>Ot.value.path.startsWith("/notes")),op=O(()=>xs.value&&!w6.value),ca=O(()=>Ot.value.query.password),b6=O(()=>!Nt.value&&(!Fe.remote||ca.value===Fe.remote)),Ul=x6("clicks","0"),ap=O(()=>ze.length-1),$6=O(()=>Ot.value.path),Ge=O(()=>parseInt($6.value.split(/\//g).slice(-1)[0])||1);O(()=>Ga(Ge.value));const at=O(()=>ze.find(e=>e.path===`${Ge.value}`));O(()=>{var e,t,n;return(n=(t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});O(()=>{var e,t;return((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ge.value===1?"cover":"default")});const Eo=O(()=>ze.find(e=>e.path===`${Math.min(ze.length,Ge.value+1)}`)),P6=O(()=>ze.find(e=>e.path===`${Math.max(1,Ge.value-1)}`)),S6=O(()=>{var e,t;return sp.value,((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Zn=O({get(){if(op.value)return 99999;let e=+(Ul.value||0);return isNaN(e)&&(e=0),e},set(e){Ul.value=e.toString()}}),zr=O(()=>{var e,t;return+(((t=(e=at.value)==null?void 0:e.meta)==null?void 0:t.clicks)??S6.value.length)}),k6=O(()=>Ge.value<ze.length-1||Zn.value<zr.value),B6=O(()=>Ge.value>1||Zn.value>0),E6=O(()=>ze.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ya(e,t),e),[])),N6=O(()=>Za(E6.value,at.value));O(()=>Ja(N6.value));const C6=O(()=>O6(rp.value,at.value,P6.value));Ue(at,(e,t)=>{rp.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function zn(){zr.value<=Zn.value?Kr():Zn.value+=1}async function Kn(){Zn.value<=0?await Wr():Zn.value-=1}function Ga(e){return Nt.value?`/presenter/${e}`:`/${e}`}function Kr(){const e=Math.min(ze.length,Ge.value+1);return ws(e)}async function Wr(e=!0){const t=Math.max(1,Ge.value-1);await ws(t),e&&zr.value&&Pn.replace({query:{...Ot.value.query,clicks:zr.value}})}function ws(e,t){return Pn.push({path:Ga(e),query:{...Ot.value.query,clicks:t}})}function F6(e){const t=le(0),{direction:n,distanceX:s,distanceY:r}=tg(e,{onSwipeStart(o){o.pointerType==="touch"&&(sr.value||(t.value=Go()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||sr.value)return;const i=Math.abs(s.value),l=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===tn.LEFT?zn():Kn():(l/window.innerHeight>.4||l>200)&&(n.value===tn.DOWN?Wr():Kr())}})}async function Dl(){const{saveAs:e}=await $n(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(pu(Fe.download)?Fe.download:Fe.exportFilename?`${Fe.exportFilename}.pdf`:"/math201/slides/numpyslidev-exported.pdf",`${Fe.title}.pdf`)}async function lS(e){var t,n;if(e==null){const s=(n=(t=at.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ya(e,t,n=1){var r,o,i,l,c;const s=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;s&&s>n&&e.length>0?Ya(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Za(e,t,n=!1,s){return e.map(r=>{const o={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return o.children.length>0&&(o.children=Za(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function Ja(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Ja(n.children,t+1)}))}const T6={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function M6(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:T6[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(o=>o.trim());n=t?r:s}if(n)return{...e,name:n}}function O6(e,t,n){var r,o;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(o=t==null?void 0:t.meta)==null?void 0:o.transition;return s||(s=Fe.transition),M6(s,e<0)}export{ou as $,dp as A,le as B,Q6 as C,J6 as D,Te as E,Ne as F,tS as G,bt as H,X6 as I,Zl as J,Sp as K,ur as L,Ft as M,Na as N,Aa as O,Yn as P,ya as Q,R6 as R,Wt as S,K6 as T,A6 as U,op as V,Cf as W,Ff as X,iu as Y,au as Z,F as _,Z6 as a,In as a$,Bf as a0,j6 as a1,V6 as a2,z6 as a3,D6 as a4,H6 as a5,B2 as a6,E2 as a7,Dl as a8,zn as a9,E0 as aA,$0 as aB,rS as aC,at as aD,F1 as aE,F6 as aF,nS as aG,oS as aH,L as aI,Ku as aJ,ot as aK,V1 as aL,zr as aM,k6 as aN,Eo as aO,sr as aP,ko as aQ,ov as aR,Va as aS,za as aT,L6 as aU,I6 as aV,ev as aW,ny as aX,eS as aY,zt as aZ,Ms as a_,Kr as aa,lS as ab,Kn as ac,Wr as ad,Ot as ae,U6 as af,bs as ag,Hm as ah,Dm as ai,Se as aj,sS as ak,lm as al,a as am,sn as an,pr as ao,tt as ap,ze as aq,ap as ar,x as as,re as at,Ia as au,je as av,At as aw,B as ax,wo as ay,Ru as az,Ge as b,Ht as b0,aa as b1,y1 as b2,v1 as b3,x1 as b4,b1 as b5,Ca as b6,ru as b7,aS as b8,ct as b9,br as ba,Iy as bb,lu as bc,$1 as bd,Fe as c,Zn as d,iS as e,Nt as f,Ga as g,Be as h,W6 as i,S as j,C as k,Mc as l,X as m,ie as n,G6 as o,Y6 as p,y as q,Pn as r,Qe as s,lo as t,q6 as u,Si as v,Ue as w,O as x,Ea as y,b as z};
