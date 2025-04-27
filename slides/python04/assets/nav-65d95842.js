function Pn(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function st(t){if(ae(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=qe(o)?yu(o):st(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(qe(t))return t;if($e(t))return t}}const uu=/;(?![^(]*\))/g,du=/:([^]+)/,fu=/\/\*.*?\*\//gs;function yu(t){const n={};return t.replace(fu,"").split(uu).forEach(s=>{if(s){const o=s.split(du);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function We(t){let n="";if(qe(t))n=t;else if(ae(t))for(let s=0;s<t.length;s++){const o=We(t[s]);o&&(n+=o+" ")}else if($e(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function me(t){if(!t)return null;let{class:n,style:s}=t;return n&&!qe(n)&&(t.class=We(n)),s&&(t.style=st(s)),t}const hu="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",mu="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Fu=Pn(hu),gu=Pn(mu),_u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bu=Pn(_u);function Ki(t){return!!t||t===""}const ln=t=>qe(t)?t:t==null?"":ae(t)||$e(t)&&(t.toString===Gi||!ue(t.toString))?JSON.stringify(t,zi,2):String(t),zi=(t,n)=>n&&n.__v_isRef?zi(t,n.value):jn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Zi(n)?{[`Set(${n.size})`]:[...n.values()]}:$e(n)&&!ae(n)&&!Ji(n)?String(n):n,Me=Object.freeze({}),ys=Object.freeze([]),ft=()=>{},Yi=()=>!1,vu=/^on[^a-z]/,co=t=>vu.test(t),Io=t=>t.startsWith("onUpdate:"),He=Object.assign,hr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},bu=Object.prototype.hasOwnProperty,Be=(t,n)=>bu.call(t,n),ae=Array.isArray,jn=t=>po(t)==="[object Map]",Zi=t=>po(t)==="[object Set]",wu=t=>po(t)==="[object RegExp]",ue=t=>typeof t=="function",qe=t=>typeof t=="string",mr=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Fr=t=>$e(t)&&ue(t.then)&&ue(t.catch),Gi=Object.prototype.toString,po=t=>Gi.call(t),gr=t=>po(t).slice(8,-1),Ji=t=>po(t)==="[object Object]",_r=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ao=Pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ku=Pn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),el=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},Eu=/-(\w)/g,Kt=el(t=>t.replace(Eu,(n,s)=>s?s.toUpperCase():"")),xu=/\B([A-Z])/g,rn=el(t=>t.replace(xu,"-$1").toLowerCase()),Jn=el(t=>t.charAt(0).toUpperCase()+t.slice(1)),In=el(t=>t?`on${Jn(t)}`:""),Zs=(t,n)=>!Object.is(t,n),_n=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},Mo=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},Ol=t=>{const n=parseFloat(t);return isNaN(n)?t:n},Cu=t=>{const n=qe(t)?Number(t):NaN;return isNaN(n)?t:n};let oa;const Qi=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let Ft;class Xi{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!n&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Ft;try{return Ft=this,n()}finally{Ft=s}}else Ro("cannot run an inactive effect scope.")}on(){Ft=this}off(){Ft=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function jw(t){return new Xi(t)}function Au(t,n=Ft){n&&n.active&&n.effects.push(t)}function ec(){return Ft}function Du(t){Ft?Ft.cleanups.push(t):Ro("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Br=t=>{const n=new Set(t);return n.w=0,n.n=0,n},tc=t=>(t.w&An)>0,nc=t=>(t.n&An)>0,Su=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=An},$u=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];tc(l)&&!nc(l)?l.delete(t):n[s++]=l,l.w&=~An,l.n&=~An}n.length=s}},No=new WeakMap;let Ms=0,An=1;const Ll=30;let ct;const Hn=Symbol("iterate"),Il=Symbol("Map key iterate");class vr{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Au(this,o)}run(){if(!this.active)return this.fn();let n=ct,s=bn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ct,ct=this,bn=!0,An=1<<++Ms,Ms<=Ll?Su(this):la(this),this.fn()}finally{Ms<=Ll&&$u(this),An=1<<--Ms,ct=this.parent,bn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let bn=!0;const sc=[];function es(){sc.push(bn),bn=!1}function ts(){const t=sc.pop();bn=t===void 0?!0:t}function yt(t,n,s){if(bn&&ct){let o=No.get(t);o||No.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=Br()),oc(l,{effect:ct,target:t,type:n,key:s})}}function oc(t,n){let s=!1;Ms<=Ll?nc(t)||(t.n|=An,s=!tc(t)):s=!t.has(ct),s&&(t.add(ct),ct.deps.push(t),ct.onTrack&&ct.onTrack(Object.assign({effect:ct},n)))}function an(t,n,s,o,l,r){const a=No.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(t)){const p=Number(o);a.forEach((u,f)=>{(f==="length"||f>=p)&&i.push(u)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(t)?_r(s)&&i.push(a.get("length")):(i.push(a.get(Hn)),jn(t)&&i.push(a.get(Il)));break;case"delete":ae(t)||(i.push(a.get(Hn)),jn(t)&&i.push(a.get(Il)));break;case"set":jn(t)&&i.push(a.get(Hn));break}const c={target:t,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Ml(i[0],c);else{const p=[];for(const u of i)u&&p.push(...u);Ml(Br(p),c)}}function Ml(t,n){const s=ae(t)?t:[...t];for(const o of s)o.computed&&ra(o,n);for(const o of s)o.computed||ra(o,n)}function ra(t,n){(t!==ct||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(He({effect:t},n)),t.scheduler?t.scheduler():t.run())}function Pu(t,n){var s;return(s=No.get(t))===null||s===void 0?void 0:s.get(n)}const Tu=Pn("__proto__,__v_isRef,__isVue"),lc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mr)),Ou=tl(),Lu=tl(!1,!0),Iu=tl(!0),Mu=tl(!0,!0),aa=Ru();function Ru(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=de(this);for(let r=0,a=this.length;r<a;r++)yt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(de)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){es();const o=de(this)[n].apply(this,s);return ts(),o}}),t}function Nu(t){const n=de(this);return yt(n,"has",t),n.hasOwnProperty(t)}function tl(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?fc:dc:n?uc:pc).get(o))return o;const a=ae(o);if(!t){if(a&&Be(aa,l))return Reflect.get(aa,l,r);if(l==="hasOwnProperty")return Nu}const i=Reflect.get(o,l,r);return(mr(l)?lc.has(l):Tu(l))||(t||yt(o,"get",l),n)?i:xe(i)?a&&_r(l)?i:i.value:$e(i)?t?Ht(i):et(i):i}}const Uu=rc(),qu=rc(!0);function rc(t=!1){return function(s,o,l,r){let a=s[o];if(Dn(a)&&xe(a)&&!xe(l))return!1;if(!t&&(!Uo(l)&&!Dn(l)&&(a=de(a),l=de(l)),!ae(s)&&xe(a)&&!xe(l)))return a.value=l,!0;const i=ae(s)&&_r(o)?Number(o)<s.length:Be(s,o),c=Reflect.set(s,o,l,r);return s===de(r)&&(i?Zs(l,a)&&an(s,"set",o,l,a):an(s,"add",o,l)),c}}function ju(t,n){const s=Be(t,n),o=t[n],l=Reflect.deleteProperty(t,n);return l&&s&&an(t,"delete",n,void 0,o),l}function Hu(t,n){const s=Reflect.has(t,n);return(!mr(n)||!lc.has(n))&&yt(t,"has",n),s}function Vu(t){return yt(t,"iterate",ae(t)?"length":Hn),Reflect.ownKeys(t)}const ac={get:Ou,set:Uu,deleteProperty:ju,has:Hu,ownKeys:Vu},ic={get:Iu,set(t,n){return Ro(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return Ro(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},Wu=He({},ac,{get:Lu,set:qu}),Ku=He({},ic,{get:Mu}),br=t=>t,nl=t=>Reflect.getPrototypeOf(t);function _o(t,n,s=!1,o=!1){t=t.__v_raw;const l=de(t),r=de(n);s||(n!==r&&yt(l,"get",n),yt(l,"get",r));const{has:a}=nl(l),i=o?br:s?kr:Gs;if(a.call(l,n))return i(t.get(n));if(a.call(l,r))return i(t.get(r));t!==l&&t.get(n)}function Bo(t,n=!1){const s=this.__v_raw,o=de(s),l=de(t);return n||(t!==l&&yt(o,"has",t),yt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function vo(t,n=!1){return t=t.__v_raw,!n&&yt(de(t),"iterate",Hn),Reflect.get(t,"size",t)}function ia(t){t=de(t);const n=de(this);return nl(n).has.call(n,t)||(n.add(t),an(n,"add",t,t)),this}function ca(t,n){n=de(n);const s=de(this),{has:o,get:l}=nl(s);let r=o.call(s,t);r?cc(s,o,t):(t=de(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?Zs(n,a)&&an(s,"set",t,n,a):an(s,"add",t,n),this}function pa(t){const n=de(this),{has:s,get:o}=nl(n);let l=s.call(n,t);l?cc(n,s,t):(t=de(t),l=s.call(n,t));const r=o?o.call(n,t):void 0,a=n.delete(t);return l&&an(n,"delete",t,void 0,r),a}function ua(){const t=de(this),n=t.size!==0,s=jn(t)?new Map(t):new Set(t),o=t.clear();return n&&an(t,"clear",void 0,void 0,s),o}function bo(t,n){return function(o,l){const r=this,a=r.__v_raw,i=de(a),c=n?br:t?kr:Gs;return!t&&yt(i,"iterate",Hn),a.forEach((p,u)=>o.call(l,c(p),c(u),r))}}function wo(t,n,s){return function(...o){const l=this.__v_raw,r=de(l),a=jn(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,p=l[t](...o),u=s?br:n?kr:Gs;return!n&&yt(r,"iterate",c?Il:Hn),{next(){const{value:f,done:y}=p.next();return y?{value:f,done:y}:{value:i?[u(f[0]),u(f[1])]:u(f),done:y}},[Symbol.iterator](){return this}}}}function dn(t){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${Jn(t)} operation ${s}failed: target is readonly.`,de(this))}return t==="delete"?!1:this}}function zu(){const t={get(r){return _o(this,r)},get size(){return vo(this)},has:Bo,add:ia,set:ca,delete:pa,clear:ua,forEach:bo(!1,!1)},n={get(r){return _o(this,r,!1,!0)},get size(){return vo(this)},has:Bo,add:ia,set:ca,delete:pa,clear:ua,forEach:bo(!1,!0)},s={get(r){return _o(this,r,!0)},get size(){return vo(this,!0)},has(r){return Bo.call(this,r,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:bo(!0,!1)},o={get(r){return _o(this,r,!0,!0)},get size(){return vo(this,!0)},has(r){return Bo.call(this,r,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wo(r,!1,!1),s[r]=wo(r,!0,!1),n[r]=wo(r,!1,!0),o[r]=wo(r,!0,!0)}),[t,s,n,o]}const[Yu,Zu,Gu,Ju]=zu();function sl(t,n){const s=n?t?Ju:Gu:t?Zu:Yu;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(Be(s,l)&&l in o?s:o,l,r)}const Qu={get:sl(!1,!1)},Xu={get:sl(!1,!0)},ed={get:sl(!0,!1)},td={get:sl(!0,!0)};function cc(t,n,s){const o=de(s);if(o!==s&&n.call(t,o)){const l=gr(t);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const pc=new WeakMap,uc=new WeakMap,dc=new WeakMap,fc=new WeakMap;function nd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sd(t){return t.__v_skip||!Object.isExtensible(t)?0:nd(gr(t))}function et(t){return Dn(t)?t:ol(t,!1,ac,Qu,pc)}function od(t){return ol(t,!1,Wu,Xu,uc)}function Ht(t){return ol(t,!0,ic,ed,dc)}function ds(t){return ol(t,!0,Ku,td,fc)}function ol(t,n,s,o,l){if(!$e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=sd(t);if(a===0)return t;const i=new Proxy(t,a===2?o:s);return l.set(t,i),i}function Vn(t){return Dn(t)?Vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function qo(t){return Vn(t)||Dn(t)}function de(t){const n=t&&t.__v_raw;return n?de(n):t}function wr(t){return Mo(t,"__v_skip",!0),t}const Gs=t=>$e(t)?et(t):t,kr=t=>$e(t)?Ht(t):t;function Er(t){bn&&ct&&(t=de(t),oc(t.dep||(t.dep=Br()),{target:t,type:"get",key:"value"}))}function xr(t,n){t=de(t);const s=t.dep;s&&Ml(s,{target:t,type:"set",key:"value",newValue:n})}function xe(t){return!!(t&&t.__v_isRef===!0)}function le(t){return yc(t,!1)}function zt(t){return yc(t,!0)}function yc(t,n){return xe(t)?t:new ld(t,n)}class ld{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:de(n),this._value=s?n:Gs(n)}get value(){return Er(this),this._value}set value(n){const s=this.__v_isShallow||Uo(n)||Dn(n);n=s?n:de(n),Zs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Gs(n),xr(this,n))}}function v(t){return xe(t)?t.value:t}const rd={get:(t,n,s)=>v(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return xe(l)&&!xe(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function hc(t){return Vn(t)?t:new Proxy(t,rd)}class ad{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Er(this),()=>xr(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function mc(t){return new ad(t)}function id(t){qo(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ae(t)?new Array(t.length):{};for(const s in t)n[s]=pd(t,s);return n}class cd{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Pu(de(this._object),this._key)}}function pd(t,n,s){const o=t[n];return xe(o)?o:new cd(t,n,s)}var Fc;class ud{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Fc]=!1,this._dirty=!0,this.effect=new vr(n,()=>{this._dirty||(this._dirty=!0,xr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=de(this);return Er(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Fc="__v_isReadonly";function dd(t,n,s=!1){let o,l;const r=ue(t);r?(o=t,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,l=t.set);const a=new ud(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const Wn=[];function Do(t){Wn.push(t)}function So(){Wn.pop()}function O(t,...n){es();const s=Wn.length?Wn[Wn.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=fd();if(o)on(o,s,11,[t+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${yl(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${t}`,...n];l.length&&r.push(`
`,...yd(l)),console.warn(...r)}ts()}function fd(){let t=Wn[Wn.length-1];if(!t)return[];const n=[];for(;t;){const s=n[0];s&&s.vnode===t?s.recurseCount++:n.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return n}function yd(t){const n=[];return t.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...hd(s))}),n}function hd({vnode:t,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=t.component?t.component.parent==null:!1,l=` at <${yl(t.component,t.type,o)}`,r=">"+s;return t.props?[l,...md(t.props),r]:[l+r]}function md(t){const n=[],s=Object.keys(t);return s.slice(0,3).forEach(o=>{n.push(...gc(o,t[o]))}),s.length>3&&n.push(" ..."),n}function gc(t,n,s){return qe(n)?(n=JSON.stringify(n),s?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${t}=${n}`]:xe(n)?(n=gc(t,de(n.value),!0),s?n:[`${t}=Ref<`,n,">"]):ue(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=de(n),s?n:[`${t}=`,n])}function Fd(t,n){t!==void 0&&(typeof t!="number"?O(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&O(`${n} is NaN - the duration expression might be incorrect.`))}const Cr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function on(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){ll(r,n,s)}return l}function Et(t,n,s,o){if(ue(t)){const r=on(t,n,s,o);return r&&Fr(r)&&r.catch(a=>{ll(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Et(t[r],n,s,o));return l}function ll(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=Cr[s];for(;r;){const p=r.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){on(c,null,10,[t,a,i]);return}}gd(t,s,l,o)}function gd(t,n,s,o=!0){{const l=Cr[n];if(s&&Do(s),O(`Unhandled error${l?` during execution of ${l}`:""}`),s&&So(),o)throw t;console.error(t)}}let Js=!1,Rl=!1;const nt=[];let qt=0;const hs=[];let Ut=null,mn=0;const _c=Promise.resolve();let Ar=null;const _d=100;function Tt(t){const n=Ar||_c;return t?n.then(this?t.bind(this):t):n}function Bd(t){let n=qt+1,s=nt.length;for(;n<s;){const o=n+s>>>1;Qs(nt[o])<t?n=o+1:s=o}return n}function rl(t){(!nt.length||!nt.includes(t,Js&&t.allowRecurse?qt+1:qt))&&(t.id==null?nt.push(t):nt.splice(Bd(t.id),0,t),Bc())}function Bc(){!Js&&!Rl&&(Rl=!0,Ar=_c.then(wc))}function vd(t){const n=nt.indexOf(t);n>qt&&nt.splice(n,1)}function vc(t){ae(t)?hs.push(...t):(!Ut||!Ut.includes(t,t.allowRecurse?mn+1:mn))&&hs.push(t),Bc()}function da(t,n=Js?qt+1:0){for(t=t||new Map;n<nt.length;n++){const s=nt[n];if(s&&s.pre){if(Dr(t,s))continue;nt.splice(n,1),n--,s()}}}function bc(t){if(hs.length){const n=[...new Set(hs)];if(hs.length=0,Ut){Ut.push(...n);return}for(Ut=n,t=t||new Map,Ut.sort((s,o)=>Qs(s)-Qs(o)),mn=0;mn<Ut.length;mn++)Dr(t,Ut[mn])||Ut[mn]();Ut=null,mn=0}}const Qs=t=>t.id==null?1/0:t.id,bd=(t,n)=>{const s=Qs(t)-Qs(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function wc(t){Rl=!1,Js=!0,t=t||new Map,nt.sort(bd);const n=s=>Dr(t,s);try{for(qt=0;qt<nt.length;qt++){const s=nt[qt];if(s&&s.active!==!1){if(n(s))continue;on(s,null,14)}}}finally{qt=0,nt.length=0,bc(t),Js=!1,Ar=null,(nt.length||hs.length)&&wc(t)}}function Dr(t,n){if(!t.has(n))t.set(n,1);else{const s=t.get(n);if(s>_d){const o=n.ownerInstance,l=o&&no(o.type);return O(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,s+1)}}let wn=!1;const cs=new Set;Qi().__VUE_HMR_RUNTIME__={createRecord:ml(kc),rerender:ml(Ed),reload:ml(xd)};const Qn=new Map;function wd(t){const n=t.type.__hmrId;let s=Qn.get(n);s||(kc(n,t.type),s=Qn.get(n)),s.instances.add(t)}function kd(t){Qn.get(t.type.__hmrId).instances.delete(t)}function kc(t,n){return Qn.has(t)?!1:(Qn.set(t,{initialDef:js(n),instances:new Set}),!0)}function js(t){return tp(t)?t.__vccOpts:t}function Ed(t,n){const s=Qn.get(t);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,js(o.type).render=n),o.renderCache=[],wn=!0,o.update(),wn=!1}))}function xd(t,n){const s=Qn.get(t);if(!s)return;n=js(n),fa(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=js(l.type);cs.has(r)||(r!==s.initialDef&&fa(r,n),cs.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(cs.add(r),l.ceReload(n.styles),cs.delete(r)):l.parent?rl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}vc(()=>{for(const l of o)cs.delete(js(l.type))})}function fa(t,n){He(t,n);for(const s in t)s!=="__file"&&!(s in n)&&delete t[s]}function ml(t){return(n,s)=>{try{return t(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let jt,Rs=[],Nl=!1;function uo(t,...n){jt?jt.emit(t,...n):Nl||Rs.push({event:t,args:n})}function Ec(t,n){var s,o;jt=t,jt?(jt.enabled=!0,Rs.forEach(({event:l,args:r})=>jt.emit(l,...r)),Rs=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Ec(r,n)}),setTimeout(()=>{jt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Nl=!0,Rs=[])},3e3)):(Nl=!0,Rs=[])}function Cd(t,n){uo("app:init",t,n,{Fragment:Se,Text:mo,Comment:Je,Static:$o})}function Ad(t){uo("app:unmount",t)}const Ul=Sr("component:added"),xc=Sr("component:updated"),Dd=Sr("component:removed"),Sd=t=>{jt&&typeof jt.cleanupBuffer=="function"&&!jt.cleanupBuffer(t)&&Dd(t)};function Sr(t){return n=>{uo(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const $d=Cc("perf:start"),Pd=Cc("perf:end");function Cc(t){return(n,s,o)=>{uo(t,n.appContext.app,n.uid,n,s,o)}}function Td(t,n,s){uo("component:emit",t.appContext.app,t,n,s)}function Od(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Me;{const{emitsOptions:u,propsOptions:[f]}=t;if(u)if(!(n in u))(!f||!(In(n)in f))&&O(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${In(n)}" prop.`);else{const y=u[n];ue(y)&&(y(...s)||O(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:y}=o[u]||Me;y&&(l=s.map(m=>qe(m)?m.trim():m)),f&&(l=s.map(Ol))}Td(t,n,l);{const u=n.toLowerCase();u!==n&&o[In(u)]&&O(`Event "${u}" is emitted in component ${yl(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rn(n)}" instead of "${n}".`)}let i,c=o[i=In(n)]||o[i=In(Kt(n))];!c&&r&&(c=o[i=In(rn(n))]),c&&Et(c,t,6,l);const p=o[i+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Et(p,t,6,l)}}function Ac(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},i=!1;if(!ue(t)){const c=p=>{const u=Ac(p,n,!0);u&&(i=!0,He(a,u))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?($e(t)&&o.set(t,null),null):(ae(r)?r.forEach(c=>a[c]=null):He(a,r),$e(t)&&o.set(t,a),a)}function al(t,n){return!t||!co(n)?!1:(n=n.slice(2).replace(/Once$/,""),Be(t,n[0].toLowerCase()+n.slice(1))||Be(t,rn(n))||Be(t,n))}let Ze=null,il=null;function jo(t){const n=Ze;return Ze=t,il=t&&t.type.__scopeId||null,n}function Hw(t){il=t}function Vw(){il=null}function x(t,n=Ze,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&Ca(-1);const r=jo(n);let a;try{a=t(...l)}finally{jo(r),o._d&&Ca(1)}return xc(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let ql=!1;function Ho(){ql=!0}function Fl(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:p,render:u,renderCache:f,data:y,setupState:m,ctx:F,inheritAttrs:_}=t;let B,A;const k=jo(t);ql=!1;try{if(s.shapeFlag&4){const q=l||o;B=St(u.call(q,q,f,r,m,y,F)),A=c}else{const q=n;c===r&&Ho(),B=St(q.length>1?q(r,{get attrs(){return Ho(),c},slots:i,emit:p}):q(r,null)),A=n.props?c:Id(c)}}catch(q){Vs.length=0,ll(q,t,1),B=E(Je)}let D=B,S;if(B.patchFlag>0&&B.patchFlag&2048&&([D,S]=Ld(B)),A&&_!==!1){const q=Object.keys(A),{shapeFlag:j}=D;if(q.length){if(j&7)a&&q.some(Io)&&(A=Md(A,a)),D=Lt(D,A);else if(!ql&&D.type!==Je){const N=Object.keys(c),M=[],te=[];for(let oe=0,pe=N.length;oe<pe;oe++){const z=N[oe];co(z)?Io(z)||M.push(z[2].toLowerCase()+z.slice(3)):te.push(z)}te.length&&O(`Extraneous non-props attributes (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),M.length&&O(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(ya(D)||O("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Lt(D),D.dirs=D.dirs?D.dirs.concat(s.dirs):s.dirs),s.transition&&(ya(D)||O("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=s.transition),S?S(D):B=D,jo(k),B}const Ld=t=>{const n=t.children,s=t.dynamicChildren,o=Dc(n);if(!o)return[t,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{n[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(t.dynamicChildren=[...s,i]))};return[St(o),a]};function Dc(t){let n;for(let s=0;s<t.length;s++){const o=t[s];if(Sn(o)){if(o.type!==Je||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Id=t=>{let n;for(const s in t)(s==="class"||s==="style"||co(s))&&((n||(n={}))[s]=t[s]);return n},Md=(t,n)=>{const s={};for(const o in t)(!Io(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s},ya=t=>t.shapeFlag&7||t.type===Je;function Rd(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:i,patchFlag:c}=n,p=r.emitsOptions;if((l||i)&&wn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?ha(o,a,p):!!a;if(c&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const y=u[f];if(a[y]!==o[y]&&!al(p,y))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?ha(o,a,p):!0:!!a;return!1}function ha(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!al(s,r))return!0}return!1}function Nd({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const Sc=t=>t.__isSuspense;function Ud(t,n){n&&n.pendingBranch?ae(t)?n.effects.push(...t):n.effects.push(t):vc(t)}function gt(t,n){if(!Ve)O("provide() can only be used inside setup().");else{let s=Ve.provides;const o=Ve.parent&&Ve.parent.provides;o===s&&(s=Ve.provides=Object.create(o)),s[t]=n}}function H(t,n,s=!1){const o=Ve||Ze;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&ue(n)?n.call(o.proxy):n;O(`injection "${String(t)}" not found.`)}else O("inject() can only be used inside setup() or functional components.")}function Es(t,n){return $r(t,null,n)}const ko={};function je(t,n,s){return ue(n)||O("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),$r(t,n,s)}function $r(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Me){n||(s!==void 0&&O('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&O('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=S=>{O("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=ec()===(Ve==null?void 0:Ve.scope)?Ve:null;let p,u=!1,f=!1;if(xe(t)?(p=()=>t.value,u=Uo(t)):Vn(t)?(p=()=>t,o=!0):ae(t)?(f=!0,u=t.some(S=>Vn(S)||Uo(S)),p=()=>t.map(S=>{if(xe(S))return S.value;if(Vn(S))return Un(S);if(ue(S))return on(S,c,2);i(S)})):ue(t)?n?p=()=>on(t,c,2):p=()=>{if(!(c&&c.isUnmounted))return y&&y(),Et(t,c,3,[m])}:(p=ft,i(t)),n&&o){const S=p;p=()=>Un(S())}let y,m=S=>{y=k.onStop=()=>{on(S,c,4)}},F;if(to)if(m=ft,n?s&&Et(n,c,3,[p(),f?[]:void 0,m]):p(),l==="sync"){const S=Yf();F=S.__watcherHandles||(S.__watcherHandles=[])}else return ft;let _=f?new Array(t.length).fill(ko):ko;const B=()=>{if(k.active)if(n){const S=k.run();(o||u||(f?S.some((q,j)=>Zs(q,_[j])):Zs(S,_)))&&(y&&y(),Et(n,c,3,[S,_===ko?void 0:f&&_[0]===ko?[]:_,m]),_=S)}else k.run()};B.allowRecurse=!!n;let A;l==="sync"?A=B:l==="post"?A=()=>Xe(B,c&&c.suspense):(B.pre=!0,c&&(B.id=c.uid),A=()=>rl(B));const k=new vr(p,A);k.onTrack=r,k.onTrigger=a,n?s?B():_=k.run():l==="post"?Xe(k.run.bind(k),c&&c.suspense):k.run();const D=()=>{k.stop(),c&&c.scope&&hr(c.scope.effects,k)};return F&&F.push(D),D}function qd(t,n,s){const o=this.proxy,l=qe(t)?t.includes(".")?$c(o,t):()=>o[t]:t.bind(o,o);let r;ue(n)?r=n:(r=n.handler,s=n);const a=Ve;Bs(this);const i=$r(l,r.bind(o),s);return a?Bs(a):zn(),i}function $c(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function Un(t,n){if(!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),xe(t))Un(t.value,n);else if(ae(t))for(let s=0;s<t.length;s++)Un(t[s],n);else if(Zi(t)||jn(t))t.forEach(s=>{Un(s,n)});else if(Ji(t))for(const s in t)Un(t[s],n);return t}function Pc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yo(()=>{t.isMounted=!0}),Or(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],jd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(t,{slots:n}){const s=Zt(),o=Pc();let l;return()=>{const r=n.default&&Pr(n.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let _=!1;for(const B of r)if(B.type!==Je){if(_){O("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=B,_=!0}}const i=de(t),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&O(`invalid <transition> mode: ${c}`),o.isLeaving)return gl(a);const p=ma(a);if(!p)return gl(a);const u=Xs(p,i,o,s);_s(p,u);const f=s.subTree,y=f&&ma(f);let m=!1;const{getTransitionKey:F}=p.type;if(F){const _=F();l===void 0?l=_:_!==l&&(l=_,m=!0)}if(y&&y.type!==Je&&(!vn(p,y)||m)){const _=Xs(y,i,o,s);if(_s(y,_),c==="out-in")return o.isLeaving=!0,_.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},gl(a);c==="in-out"&&p.type!==Je&&(_.delayLeave=(B,A,k)=>{const D=Tc(o,y);D[String(y.key)]=y,B._leaveCb=()=>{A(),B._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=k})}return a}}},Hd=jd;function Tc(t,n){const{leavingVNodes:s}=t;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function Xs(t,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:f,onLeave:y,onAfterLeave:m,onLeaveCancelled:F,onBeforeAppear:_,onAppear:B,onAfterAppear:A,onAppearCancelled:k}=n,D=String(t.key),S=Tc(s,t),q=(M,te)=>{M&&Et(M,o,9,te)},j=(M,te)=>{const oe=te[1];q(M,te),ae(M)?M.every(pe=>pe.length<=1)&&oe():M.length<=1&&oe()},N={mode:r,persisted:a,beforeEnter(M){let te=i;if(!s.isMounted)if(l)te=_||i;else return;M._leaveCb&&M._leaveCb(!0);const oe=S[D];oe&&vn(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),q(te,[M])},enter(M){let te=c,oe=p,pe=u;if(!s.isMounted)if(l)te=B||c,oe=A||p,pe=k||u;else return;let z=!1;const ve=M._enterCb=Re=>{z||(z=!0,Re?q(pe,[M]):q(oe,[M]),N.delayedLeave&&N.delayedLeave(),M._enterCb=void 0)};te?j(te,[M,ve]):ve()},leave(M,te){const oe=String(t.key);if(M._enterCb&&M._enterCb(!0),s.isUnmounting)return te();q(f,[M]);let pe=!1;const z=M._leaveCb=ve=>{pe||(pe=!0,te(),ve?q(F,[M]):q(m,[M]),M._leaveCb=void 0,S[oe]===t&&delete S[oe])};S[oe]=t,y?j(y,[M,z]):z()},clone(M){return Xs(M,n,s,o)}};return N}function gl(t){if(fo(t))return t=Lt(t),t.children=null,t}function ma(t){return fo(t)?t.children?t.children[0]:void 0:t}function _s(t,n){t.shapeFlag&6&&t.component?_s(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Pr(t,n=!1,s){let o=[],l=0;for(let r=0;r<t.length;r++){let a=t[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Se?(a.patchFlag&128&&l++,o=o.concat(Pr(a.children,n,i))):(n||a.type!==Je)&&o.push(i!=null?Lt(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Ee(t){return ue(t)?{setup:t,name:t.name}:t}const ms=t=>!!t.type.__asyncLoader,fo=t=>t.type.__isKeepAlive,Vd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=Zt(),o=s.ctx;if(!o.renderer)return()=>{const k=n.default&&n.default();return k&&k.length===1?k[0]:k};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:p,um:u,o:{createElement:f}}}=o,y=f("div");o.activate=(k,D,S,q,j)=>{const N=k.component;p(k,D,S,0,i),c(N.vnode,k,D,S,N,i,q,k.slotScopeIds,j),Xe(()=>{N.isDeactivated=!1,N.a&&_n(N.a);const M=k.props&&k.props.onVnodeMounted;M&&bt(M,N.parent,k)},i),Ul(N)},o.deactivate=k=>{const D=k.component;p(k,y,null,1,i),Xe(()=>{D.da&&_n(D.da);const S=k.props&&k.props.onVnodeUnmounted;S&&bt(S,D.parent,k),D.isDeactivated=!0},i),Ul(D)};function m(k){_l(k),u(k,s,i,!0)}function F(k){l.forEach((D,S)=>{const q=no(D.type);q&&(!k||!k(q))&&_(S)})}function _(k){const D=l.get(k);!a||!vn(D,a)?m(D):a&&_l(a),l.delete(k),r.delete(k)}je(()=>[t.include,t.exclude],([k,D])=>{k&&F(S=>Ns(k,S)),D&&F(S=>!Ns(D,S))},{flush:"post",deep:!0});let B=null;const A=()=>{B!=null&&l.set(B,Bl(s.subTree))};return yo(A),Tr(A),Or(()=>{l.forEach(k=>{const{subTree:D,suspense:S}=s,q=Bl(D);if(k.type===q.type&&k.key===q.key){_l(q);const j=q.component.da;j&&Xe(j,S);return}m(k)})}),()=>{if(B=null,!n.default)return null;const k=n.default(),D=k[0];if(k.length>1)return O("KeepAlive should contain exactly one component child."),a=null,k;if(!Sn(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let S=Bl(D);const q=S.type,j=no(ms(S)?S.type.__asyncResolved||{}:q),{include:N,exclude:M,max:te}=t;if(N&&(!j||!Ns(N,j))||M&&j&&Ns(M,j))return a=S,D;const oe=S.key==null?q:S.key,pe=l.get(oe);return S.el&&(S=Lt(S),D.shapeFlag&128&&(D.ssContent=S)),B=oe,pe?(S.el=pe.el,S.component=pe.component,S.transition&&_s(S,S.transition),S.shapeFlag|=512,r.delete(oe),r.add(oe)):(r.add(oe),te&&r.size>parseInt(te,10)&&_(r.values().next().value)),S.shapeFlag|=256,a=S,Sc(D.type)?D:S}}},Oc=Vd;function Ns(t,n){return ae(t)?t.some(s=>Ns(s,n)):qe(t)?t.split(",").includes(n):wu(t)?t.test(n):!1}function Wd(t,n){Lc(t,"a",n)}function Kd(t,n){Lc(t,"da",n)}function Lc(t,n,s=Ve){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(cl(n,o,s),s){let l=s.parent;for(;l&&l.parent;)fo(l.parent.vnode)&&zd(o,n,s,l),l=l.parent}}function zd(t,n,s,o){const l=cl(n,t,o,!0);pl(()=>{hr(o[n],l)},s)}function _l(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Bl(t){return t.shapeFlag&128?t.ssContent:t}function cl(t,n,s=Ve,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;es(),Bs(s);const i=Et(n,s,t,a);return zn(),ts(),i});return o?l.unshift(r):l.push(r),r}else{const l=In(Cr[t].replace(/ hook$/,""));O(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const cn=t=>(n,s=Ve)=>(!to||t==="sp")&&cl(t,(...o)=>n(...o),s),Yd=cn("bm"),yo=cn("m"),Zd=cn("bu"),Tr=cn("u"),Or=cn("bum"),pl=cn("um"),Gd=cn("sp"),Jd=cn("rtg"),Qd=cn("rtc");function Xd(t,n=Ve){cl("ec",t,n)}function Ic(t){ku(t)&&O("Do not use built-in directive ids as custom directive id: "+t)}function ul(t,n){const s=Ze;if(s===null)return O("withDirectives can only be used inside render functions."),t;const o=fl(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,p=Me]=n[r];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&Un(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:p}))}return t}function Tn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(es(),Et(c,s,8,[t.el,i,t,n]),ts())}}const jl="components",ef="directives";function tf(t,n){return Mc(jl,t,!0,n)||t}const nf=Symbol();function Fa(t){return Mc(ef,t)}function Mc(t,n,s=!0,o=!1){const l=Ze||Ve;if(l){const r=l.type;if(t===jl){const i=no(r,!1);if(i&&(i===n||i===Kt(n)||i===Jn(Kt(n))))return r}const a=ga(l[t]||r[t],n)||ga(l.appContext[t],n);if(!a&&o)return r;if(s&&!a){const i=t===jl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";O(`Failed to resolve ${t.slice(0,-1)}: ${n}${i}`)}return a}else O(`resolve${Jn(t.slice(0,-1))} can only be used in render() or setup().`)}function ga(t,n){return t&&(t[n]||t[Kt(n)]||t[Jn(Kt(n))])}function ho(t,n,s,o){let l;const r=s&&s[o];if(ae(t)||qe(t)){l=new Array(t.length);for(let a=0,i=t.length;a<i;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){Number.isInteger(t)||O(`The v-for range expect an integer value but got ${t}.`),l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if($e(t))if(t[Symbol.iterator])l=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];l[i]=n(t[p],p,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function Ot(t,n,s={},o,l){if(Ze.isCE||Ze.parent&&ms(Ze.parent)&&Ze.parent.isCE)return n!=="default"&&(s.name=n),E("slot",s,o&&o());let r=t[n];r&&r.length>1&&(O("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),b();const a=r&&Rc(r(s)),i=K(Se,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Rc(t){return t.some(n=>Sn(n)?!(n.type===Je||n.type===Se&&!Rc(n.children)):!0)?t:null}const Hl=t=>t?Qc(t)?fl(t)||t.proxy:Hl(t.parent):null,Kn=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ds(t.props),$attrs:t=>ds(t.attrs),$slots:t=>ds(t.slots),$refs:t=>ds(t.refs),$parent:t=>Hl(t.parent),$root:t=>Hl(t.root),$emit:t=>t.emit,$options:t=>Ir(t),$forceUpdate:t=>t.f||(t.f=()=>rl(t.update)),$nextTick:t=>t.n||(t.n=Tt.bind(t.proxy)),$watch:t=>qd.bind(t)}),Lr=t=>t==="_"||t==="$",vl=(t,n)=>t!==Me&&!t.__isScriptSetup&&Be(t,n),Nc={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=t;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(vl(o,n))return a[n]=1,o[n];if(l!==Me&&Be(l,n))return a[n]=2,l[n];if((p=t.propsOptions[0])&&Be(p,n))return a[n]=3,r[n];if(s!==Me&&Be(s,n))return a[n]=4,s[n];Vl&&(a[n]=0)}}const u=Kn[n];let f,y;if(u)return n==="$attrs"&&(yt(t,"get",n),Ho()),u(t);if((f=i.__cssModules)&&(f=f[n]))return f;if(s!==Me&&Be(s,n))return a[n]=4,s[n];if(y=c.config.globalProperties,Be(y,n))return y[n];Ze&&(!qe(n)||n.indexOf("__v")!==0)&&(l!==Me&&Lr(n[0])&&Be(l,n)?O(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Ze&&O(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return vl(l,n)?(l[n]=s,!0):l.__isScriptSetup&&Be(l,n)?(O(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Me&&Be(o,n)?(o[n]=s,!0):Be(t.props,n)?(O(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(O(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||t!==Me&&Be(t,a)||vl(n,a)||(i=r[0])&&Be(i,a)||Be(o,a)||Be(Kn,a)||Be(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:Be(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};Nc.ownKeys=t=>(O("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function sf(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Kn).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>Kn[s](t),set:ft})}),n}function of(t){const{ctx:n,propsOptions:[s]}=t;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:ft})})}function lf(t){const{ctx:n,setupState:s}=t;Object.keys(de(s)).forEach(o=>{if(!s.__isScriptSetup){if(Lr(o[0])){O(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:ft})}})}function rf(){const t=Object.create(null);return(n,s)=>{t[s]?O(`${n} property "${s}" is already defined in ${t[s]}.`):t[s]=n}}let Vl=!0;function af(t){const n=Ir(t),s=t.proxy,o=t.ctx;Vl=!1,n.beforeCreate&&_a(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:p,created:u,beforeMount:f,mounted:y,beforeUpdate:m,updated:F,activated:_,deactivated:B,beforeDestroy:A,beforeUnmount:k,destroyed:D,unmounted:S,render:q,renderTracked:j,renderTriggered:N,errorCaptured:M,serverPrefetch:te,expose:oe,inheritAttrs:pe,components:z,directives:ve,filters:Re}=n,Ae=rf();{const[Y]=t.propsOptions;if(Y)for(const ie in Y)Ae("Props",ie)}if(p&&cf(p,o,Ae,t.appContext.config.unwrapInjectedRef),a)for(const Y in a){const ie=a[Y];ue(ie)?(Object.defineProperty(o,Y,{value:ie.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ae("Methods",Y)):O(`Method "${Y}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(l){ue(l)||O("The data option must be a function. Plain object usage is no longer supported.");const Y=l.call(s,s);if(Fr(Y)&&O("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!$e(Y))O("data() should return an object.");else{t.data=et(Y);for(const ie in Y)Ae("Data",ie),Lr(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>Y[ie],set:ft})}}if(Vl=!0,r)for(const Y in r){const ie=r[Y],ge=ue(ie)?ie.bind(s,s):ue(ie.get)?ie.get.bind(s,s):ft;ge===ft&&O(`Computed property "${Y}" has no getter.`);const Le=!ue(ie)&&ue(ie.set)?ie.set.bind(s):()=>{O(`Write operation failed: computed property "${Y}" is readonly.`)},ht=P({get:ge,set:Le});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>ht.value,set:tt=>ht.value=tt}),Ae("Computed",Y)}if(i)for(const Y in i)Uc(i[Y],o,s,Y);if(c){const Y=ue(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(ie=>{gt(ie,Y[ie])})}u&&_a(u,t,"c");function Ne(Y,ie){ae(ie)?ie.forEach(ge=>Y(ge.bind(s))):ie&&Y(ie.bind(s))}if(Ne(Yd,f),Ne(yo,y),Ne(Zd,m),Ne(Tr,F),Ne(Wd,_),Ne(Kd,B),Ne(Xd,M),Ne(Qd,j),Ne(Jd,N),Ne(Or,k),Ne(pl,S),Ne(Gd,te),ae(oe))if(oe.length){const Y=t.exposed||(t.exposed={});oe.forEach(ie=>{Object.defineProperty(Y,ie,{get:()=>s[ie],set:ge=>s[ie]=ge})})}else t.exposed||(t.exposed={});q&&t.render===ft&&(t.render=q),pe!=null&&(t.inheritAttrs=pe),z&&(t.components=z),ve&&(t.directives=ve)}function cf(t,n,s=ft,o=!1){ae(t)&&(t=Wl(t));for(const l in t){const r=t[l];let a;$e(r)?"default"in r?a=H(r.from||l,r.default,!0):a=H(r.from||l):a=H(r),xe(a)?o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(O(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[l]=a):n[l]=a,s("Inject",l)}}function _a(t,n,s){Et(ae(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function Uc(t,n,s,o){const l=o.includes(".")?$c(s,o):()=>s[o];if(qe(t)){const r=n[t];ue(r)?je(l,r):O(`Invalid watch handler specified by key "${t}"`,r)}else if(ue(t))je(l,t.bind(s));else if($e(t))if(ae(t))t.forEach(r=>Uc(r,n,s,o));else{const r=ue(t.handler)?t.handler.bind(s):n[t.handler];ue(r)?je(l,r,t):O(`Invalid watch handler specified by key "${t.handler}"`,r)}else O(`Invalid watch option: "${o}"`,t)}function Ir(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(p=>Vo(c,p,a,!0)),Vo(c,n,a)),$e(n)&&r.set(n,c),c}function Vo(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Vo(t,r,s,!0),l&&l.forEach(a=>Vo(t,a,s,!0));for(const a in n)if(o&&a==="expose")O('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=pf[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const pf={data:Ba,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Mn,directives:Mn,watch:df,provide:Ba,inject:uf};function Ba(t,n){return n?t?function(){return He(ue(t)?t.call(this,this):t,ue(n)?n.call(this,this):n)}:n:t}function uf(t,n){return Mn(Wl(t),Wl(n))}function Wl(t){if(ae(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function rt(t,n){return t?[...new Set([].concat(t,n))]:n}function Mn(t,n){return t?He(He(Object.create(null),t),n):n}function df(t,n){if(!t)return n;if(!n)return t;const s=He(Object.create(null),t);for(const o in n)s[o]=rt(t[o],n[o]);return s}function ff(t,n,s,o=!1){const l={},r={};Mo(r,dl,1),t.propsDefaults=Object.create(null),qc(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);Hc(n||{},l,t),s?t.props=o?l:od(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function yf(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function hf(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,i=de(l),[c]=t.propsOptions;let p=!1;if(!yf(t)&&(o||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let y=u[f];if(al(t.emitsOptions,y))continue;const m=n[y];if(c)if(Be(r,y))m!==r[y]&&(r[y]=m,p=!0);else{const F=Kt(y);l[F]=Kl(c,i,F,m,t,!1)}else m!==r[y]&&(r[y]=m,p=!0)}}}else{qc(t,n,l,r)&&(p=!0);let u;for(const f in i)(!n||!Be(n,f)&&((u=rn(f))===f||!Be(n,u)))&&(c?s&&(s[f]!==void 0||s[u]!==void 0)&&(l[f]=Kl(c,i,f,void 0,t,!0)):delete l[f]);if(r!==i)for(const f in r)(!n||!Be(n,f))&&(delete r[f],p=!0)}p&&an(t,"set","$attrs"),Hc(n||{},l,t)}function qc(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,i;if(n)for(let c in n){if(Ao(c))continue;const p=n[c];let u;l&&Be(l,u=Kt(c))?!r||!r.includes(u)?s[u]=p:(i||(i={}))[u]=p:al(t.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,a=!0)}if(r){const c=de(s),p=i||Me;for(let u=0;u<r.length;u++){const f=r[u];s[f]=Kl(l,c,f,p[f],t,!Be(p,f))}}return a}function Kl(t,n,s,o,l,r){const a=t[s];if(a!=null){const i=Be(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:p}=l;s in p?o=p[s]:(Bs(l),o=p[s]=c.call(null,n),zn())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===rn(s))&&(o=!0))}return o}function jc(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},i=[];let c=!1;if(!ue(t)){const u=f=>{c=!0;const[y,m]=jc(f,n,!0);He(a,y),m&&i.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return $e(t)&&o.set(t,ys),ys;if(ae(r))for(let u=0;u<r.length;u++){qe(r[u])||O("props must be strings when using array syntax.",r[u]);const f=Kt(r[u]);va(f)&&(a[f]=Me)}else if(r){$e(r)||O("invalid props options",r);for(const u in r){const f=Kt(u);if(va(f)){const y=r[u],m=a[f]=ae(y)||ue(y)?{type:y}:Object.assign({},y);if(m){const F=wa(Boolean,m.type),_=wa(String,m.type);m[0]=F>-1,m[1]=_<0||F<_,(F>-1||Be(m,"default"))&&i.push(f)}}}}const p=[a,i];return $e(t)&&o.set(t,p),p}function va(t){return t[0]!=="$"?!0:(O(`Invalid prop name: "${t}" is a reserved property.`),!1)}function zl(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function ba(t,n){return zl(t)===zl(n)}function wa(t,n){return ae(n)?n.findIndex(s=>ba(s,t)):ue(n)&&ba(n,t)?0:-1}function Hc(t,n,s){const o=de(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&mf(r,o[r],a,!Be(t,r)&&!Be(t,rn(r)))}}function mf(t,n,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){O('Missing required prop: "'+t+'"');return}if(!(n==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=ae(l)?l:[l],p=[];for(let u=0;u<c.length&&!i;u++){const{valid:f,expectedType:y}=gf(n,c[u]);p.push(y||""),i=f}if(!i){O(_f(t,n,p));return}}a&&!a(n)&&O('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Ff=Pn("String,Number,Boolean,Function,Symbol,BigInt");function gf(t,n){let s;const o=zl(n);if(Ff(o)){const l=typeof t;s=l===o.toLowerCase(),!s&&l==="object"&&(s=t instanceof n)}else o==="Object"?s=$e(t):o==="Array"?s=ae(t):o==="null"?s=t===null:s=t instanceof n;return{valid:s,expectedType:o}}function _f(t,n,s){let o=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(Jn).join(" | ")}`;const l=s[0],r=gr(n),a=ka(n,l),i=ka(n,r);return s.length===1&&Ea(l)&&!Bf(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Ea(r)&&(o+=`with value ${i}.`),o}function ka(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function Ea(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function Bf(...t){return t.some(n=>n.toLowerCase()==="boolean")}const Vc=t=>t[0]==="_"||t==="$stable",Mr=t=>ae(t)?t.map(St):[St(t)],vf=(t,n,s)=>{if(n._n)return n;const o=x((...l)=>(Ve&&O(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Mr(n(...l))),s);return o._c=!1,o},Wc=(t,n,s)=>{const o=t._ctx;for(const l in t){if(Vc(l))continue;const r=t[l];if(ue(r))n[l]=vf(l,r,o);else if(r!=null){O(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Mr(r);n[l]=()=>a}}},Kc=(t,n)=>{fo(t.vnode)||O("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Mr(n);t.slots.default=()=>s},bf=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=de(n),Mo(n,"_",s)):Wc(n,t.slots={})}else t.slots={},n&&Kc(t,n);Mo(t.slots,dl,1)},wf=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Me;if(o.shapeFlag&32){const i=n._;i?wn?He(l,n):s&&i===1?r=!1:(He(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Wc(n,l)),a=n}else n&&(Kc(t,n),a={default:1});if(r)for(const i in l)!Vc(i)&&!(i in a)&&delete l[i]};function zc(){return{app:null,config:{isNativeTag:Yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kf=0;function Ef(t,n){return function(o,l=null){ue(o)||(o=Object.assign({},o)),l!=null&&!$e(l)&&(O("root props passed to app.mount() must be an object."),l=null);const r=zc(),a=new Set;let i=!1;const c=r.app={_uid:kf++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Da,get config(){return r.config},set config(p){O("app.config cannot be replaced. Modify individual options instead.")},use(p,...u){return a.has(p)?O("Plugin has already been applied to target app."):p&&ue(p.install)?(a.add(p),p.install(c,...u)):ue(p)?(a.add(p),p(c,...u)):O('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?O("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,u){return Gl(p,r.config),u?(r.components[p]&&O(`Component "${p}" has already been registered in target app.`),r.components[p]=u,c):r.components[p]},directive(p,u){return Ic(p),u?(r.directives[p]&&O(`Directive "${p}" has already been registered in target app.`),r.directives[p]=u,c):r.directives[p]},mount(p,u,f){if(i)O("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&O("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const y=E(o,l);return y.appContext=r,r.reload=()=>{t(Lt(y),p,f)},u&&n?n(y,p):t(y,p,f),i=!0,c._container=p,p.__vue_app__=c,c._instance=y.component,Cd(c,Da),fl(y.component)||y.component.proxy}},unmount(){i?(t(null,c._container),c._instance=null,Ad(c),delete c._container.__vue_app__):O("Cannot unmount an app that is not mounted.")},provide(p,u){return p in r.provides&&O(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=u,c}};return c}}function Yl(t,n,s,o,l=!1){if(ae(t)){t.forEach((y,m)=>Yl(y,n&&(ae(n)?n[m]:n),s,o,l));return}if(ms(o)&&!l)return;const r=o.shapeFlag&4?fl(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=t;if(!i){O("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,u=i.refs===Me?i.refs={}:i.refs,f=i.setupState;if(p!=null&&p!==c&&(qe(p)?(u[p]=null,Be(f,p)&&(f[p]=null)):xe(p)&&(p.value=null)),ue(c))on(c,i,12,[a,u]);else{const y=qe(c),m=xe(c);if(y||m){const F=()=>{if(t.f){const _=y?Be(f,c)?f[c]:u[c]:c.value;l?ae(_)&&hr(_,r):ae(_)?_.includes(r)||_.push(r):y?(u[c]=[r],Be(f,c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else y?(u[c]=a,Be(f,c)&&(f[c]=a)):m?(c.value=a,t.k&&(u[t.k]=a)):O("Invalid template ref type:",c,`(${typeof c})`)};a?(F.id=-1,Xe(F,s)):F()}else O("Invalid template ref type:",c,`(${typeof c})`)}}let As,Bn;function Jt(t,n){t.appContext.config.performance&&Wo()&&Bn.mark(`vue-${n}-${t.uid}`),$d(t,n,Wo()?Bn.now():Date.now())}function Qt(t,n){if(t.appContext.config.performance&&Wo()){const s=`vue-${n}-${t.uid}`,o=s+":end";Bn.mark(o),Bn.measure(`<${yl(t,t.type)}> ${n}`,s,o),Bn.clearMarks(s),Bn.clearMarks(o)}Pd(t,n,Wo()?Bn.now():Date.now())}function Wo(){return As!==void 0||(typeof window<"u"&&window.performance?(As=!0,Bn=window.performance):As=!1),As}function xf(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xe=Ud;function Cf(t){return Af(t)}function Af(t,n){xf();const s=Qi();s.__VUE__=!0,Ec(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:p,setElementText:u,parentNode:f,nextSibling:y,setScopeId:m=ft,insertStaticContent:F}=t,_=(h,g,w,T=null,$=null,R=null,W=!1,I=null,U=wn?!1:!!g.dynamicChildren)=>{if(h===g)return;h&&!vn(h,g)&&(T=ee(h),dt(h,$,R,!0),h=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:L,ref:se,shapeFlag:ne}=g;switch(L){case mo:B(h,g,w,T);break;case Je:A(h,g,w,T);break;case $o:h==null?k(g,w,T,W):D(h,g,w,W);break;case Se:ve(h,g,w,T,$,R,W,I,U);break;default:ne&1?j(h,g,w,T,$,R,W,I,U):ne&6?Re(h,g,w,T,$,R,W,I,U):ne&64||ne&128?L.process(h,g,w,T,$,R,W,I,U,we):O("Invalid VNode type:",L,`(${typeof L})`)}se!=null&&$&&Yl(se,h&&h.ref,R,g||h,!g)},B=(h,g,w,T)=>{if(h==null)o(g.el=i(g.children),w,T);else{const $=g.el=h.el;g.children!==h.children&&p($,g.children)}},A=(h,g,w,T)=>{h==null?o(g.el=c(g.children||""),w,T):g.el=h.el},k=(h,g,w,T)=>{[h.el,h.anchor]=F(h.children,g,w,T,h.el,h.anchor)},D=(h,g,w,T)=>{if(g.children!==h.children){const $=y(h.anchor);q(h),[g.el,g.anchor]=F(g.children,w,$,T)}else g.el=h.el,g.anchor=h.anchor},S=({el:h,anchor:g},w,T)=>{let $;for(;h&&h!==g;)$=y(h),o(h,w,T),h=$;o(g,w,T)},q=({el:h,anchor:g})=>{let w;for(;h&&h!==g;)w=y(h),l(h),h=w;l(g)},j=(h,g,w,T,$,R,W,I,U)=>{W=W||g.type==="svg",h==null?N(g,w,T,$,R,W,I,U):oe(h,g,$,R,W,I,U)},N=(h,g,w,T,$,R,W,I)=>{let U,L;const{type:se,props:ne,shapeFlag:re,transition:ye,dirs:be}=h;if(U=h.el=a(h.type,R,ne&&ne.is,ne),re&8?u(U,h.children):re&16&&te(h.children,U,null,T,$,R&&se!=="foreignObject",W,I),be&&Tn(h,null,T,"created"),M(U,h,h.scopeId,W,T),ne){for(const Ie in ne)Ie!=="value"&&!Ao(Ie)&&r(U,Ie,null,ne[Ie],R,h.children,T,$,V);"value"in ne&&r(U,"value",null,ne.value),(L=ne.onVnodeBeforeMount)&&bt(L,T,h)}Object.defineProperty(U,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(U,"__vueParentComponent",{value:T,enumerable:!1}),be&&Tn(h,null,T,"beforeMount");const Ue=(!$||$&&!$.pendingBranch)&&ye&&!ye.persisted;Ue&&ye.beforeEnter(U),o(U,g,w),((L=ne&&ne.onVnodeMounted)||Ue||be)&&Xe(()=>{L&&bt(L,T,h),Ue&&ye.enter(U),be&&Tn(h,null,T,"mounted")},$)},M=(h,g,w,T,$)=>{if(w&&m(h,w),T)for(let R=0;R<T.length;R++)m(h,T[R]);if($){let R=$.subTree;if(R.patchFlag>0&&R.patchFlag&2048&&(R=Dc(R.children)||R),g===R){const W=$.vnode;M(h,W,W.scopeId,W.slotScopeIds,$.parent)}}},te=(h,g,w,T,$,R,W,I,U=0)=>{for(let L=U;L<h.length;L++){const se=h[L]=I?Fn(h[L]):St(h[L]);_(null,se,g,w,T,$,R,W,I)}},oe=(h,g,w,T,$,R,W)=>{const I=g.el=h.el;let{patchFlag:U,dynamicChildren:L,dirs:se}=g;U|=h.patchFlag&16;const ne=h.props||Me,re=g.props||Me;let ye;w&&On(w,!1),(ye=re.onVnodeBeforeUpdate)&&bt(ye,w,g,h),se&&Tn(g,h,w,"beforeUpdate"),w&&On(w,!0),wn&&(U=0,W=!1,L=null);const be=$&&g.type!=="foreignObject";if(L?(pe(h.dynamicChildren,L,I,w,T,be,R),w&&w.type.__hmrId&&Hs(h,g)):W||ge(h,g,I,null,w,T,be,R,!1),U>0){if(U&16)z(I,g,ne,re,w,T,$);else if(U&2&&ne.class!==re.class&&r(I,"class",null,re.class,$),U&4&&r(I,"style",ne.style,re.style,$),U&8){const Ue=g.dynamicProps;for(let Ie=0;Ie<Ue.length;Ie++){const Ke=Ue[Ie],Ct=ne[Ke],os=re[Ke];(os!==Ct||Ke==="value")&&r(I,Ke,Ct,os,$,h.children,w,T,V)}}U&1&&h.children!==g.children&&u(I,g.children)}else!W&&L==null&&z(I,g,ne,re,w,T,$);((ye=re.onVnodeUpdated)||se)&&Xe(()=>{ye&&bt(ye,w,g,h),se&&Tn(g,h,w,"updated")},T)},pe=(h,g,w,T,$,R,W)=>{for(let I=0;I<g.length;I++){const U=h[I],L=g[I],se=U.el&&(U.type===Se||!vn(U,L)||U.shapeFlag&70)?f(U.el):w;_(U,L,se,null,T,$,R,W,!0)}},z=(h,g,w,T,$,R,W)=>{if(w!==T){if(w!==Me)for(const I in w)!Ao(I)&&!(I in T)&&r(h,I,w[I],null,W,g.children,$,R,V);for(const I in T){if(Ao(I))continue;const U=T[I],L=w[I];U!==L&&I!=="value"&&r(h,I,L,U,W,g.children,$,R,V)}"value"in T&&r(h,"value",w.value,T.value)}},ve=(h,g,w,T,$,R,W,I,U)=>{const L=g.el=h?h.el:i(""),se=g.anchor=h?h.anchor:i("");let{patchFlag:ne,dynamicChildren:re,slotScopeIds:ye}=g;(wn||ne&2048)&&(ne=0,U=!1,re=null),ye&&(I=I?I.concat(ye):ye),h==null?(o(L,w,T),o(se,w,T),te(g.children,w,se,$,R,W,I,U)):ne>0&&ne&64&&re&&h.dynamicChildren?(pe(h.dynamicChildren,re,w,$,R,W,I),$&&$.type.__hmrId?Hs(h,g):(g.key!=null||$&&g===$.subTree)&&Hs(h,g,!0)):ge(h,g,w,se,$,R,W,I,U)},Re=(h,g,w,T,$,R,W,I,U)=>{g.slotScopeIds=I,h==null?g.shapeFlag&512?$.ctx.activate(g,w,T,W,U):Ae(g,w,T,$,R,W,U):Ne(h,g,U)},Ae=(h,g,w,T,$,R,W)=>{const I=h.component=Rf(h,T,$);if(I.type.__hmrId&&wd(I),Do(h),Jt(I,"mount"),fo(h)&&(I.ctx.renderer=we),Jt(I,"init"),Uf(I),Qt(I,"init"),I.asyncDep){if($&&$.registerDep(I,Y),!h.el){const U=I.subTree=E(Je);A(null,U,g,w)}return}Y(I,h,g,w,$,R,W),So(),Qt(I,"mount")},Ne=(h,g,w)=>{const T=g.component=h.component;if(Rd(h,g,w))if(T.asyncDep&&!T.asyncResolved){Do(g),ie(T,g,w),So();return}else T.next=g,vd(T.update),T.update();else g.el=h.el,T.vnode=g},Y=(h,g,w,T,$,R,W)=>{const I=()=>{if(h.isMounted){let{next:se,bu:ne,u:re,parent:ye,vnode:be}=h,Ue=se,Ie;Do(se||h.vnode),On(h,!1),se?(se.el=be.el,ie(h,se,W)):se=be,ne&&_n(ne),(Ie=se.props&&se.props.onVnodeBeforeUpdate)&&bt(Ie,ye,se,be),On(h,!0),Jt(h,"render");const Ke=Fl(h);Qt(h,"render");const Ct=h.subTree;h.subTree=Ke,Jt(h,"patch"),_(Ct,Ke,f(Ct.el),ee(Ct),h,$,R),Qt(h,"patch"),se.el=Ke.el,Ue===null&&Nd(h,Ke.el),re&&Xe(re,$),(Ie=se.props&&se.props.onVnodeUpdated)&&Xe(()=>bt(Ie,ye,se,be),$),xc(h),So()}else{let se;const{el:ne,props:re}=g,{bm:ye,m:be,parent:Ue}=h,Ie=ms(g);if(On(h,!1),ye&&_n(ye),!Ie&&(se=re&&re.onVnodeBeforeMount)&&bt(se,Ue,g),On(h,!0),ne&&ce){const Ke=()=>{Jt(h,"render"),h.subTree=Fl(h),Qt(h,"render"),Jt(h,"hydrate"),ce(ne,h.subTree,h,$,null),Qt(h,"hydrate")};Ie?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Ke()):Ke()}else{Jt(h,"render");const Ke=h.subTree=Fl(h);Qt(h,"render"),Jt(h,"patch"),_(null,Ke,w,T,h,$,R),Qt(h,"patch"),g.el=Ke.el}if(be&&Xe(be,$),!Ie&&(se=re&&re.onVnodeMounted)){const Ke=g;Xe(()=>bt(se,Ue,Ke),$)}(g.shapeFlag&256||Ue&&ms(Ue.vnode)&&Ue.vnode.shapeFlag&256)&&h.a&&Xe(h.a,$),h.isMounted=!0,Ul(h),g=w=T=null}},U=h.effect=new vr(I,()=>rl(L),h.scope),L=h.update=()=>U.run();L.id=h.uid,On(h,!0),U.onTrack=h.rtc?se=>_n(h.rtc,se):void 0,U.onTrigger=h.rtg?se=>_n(h.rtg,se):void 0,L.ownerInstance=h,L()},ie=(h,g,w)=>{g.component=h;const T=h.vnode.props;h.vnode=g,h.next=null,hf(h,g.props,T,w),wf(h,g.children,w),es(),da(),ts()},ge=(h,g,w,T,$,R,W,I,U=!1)=>{const L=h&&h.children,se=h?h.shapeFlag:0,ne=g.children,{patchFlag:re,shapeFlag:ye}=g;if(re>0){if(re&128){ht(L,ne,w,T,$,R,W,I,U);return}else if(re&256){Le(L,ne,w,T,$,R,W,I,U);return}}ye&8?(se&16&&V(L,$,R),ne!==L&&u(w,ne)):se&16?ye&16?ht(L,ne,w,T,$,R,W,I,U):V(L,$,R,!0):(se&8&&u(w,""),ye&16&&te(ne,w,T,$,R,W,I,U))},Le=(h,g,w,T,$,R,W,I,U)=>{h=h||ys,g=g||ys;const L=h.length,se=g.length,ne=Math.min(L,se);let re;for(re=0;re<ne;re++){const ye=g[re]=U?Fn(g[re]):St(g[re]);_(h[re],ye,w,null,$,R,W,I,U)}L>se?V(h,$,R,!0,!1,ne):te(g,w,T,$,R,W,I,U,ne)},ht=(h,g,w,T,$,R,W,I,U)=>{let L=0;const se=g.length;let ne=h.length-1,re=se-1;for(;L<=ne&&L<=re;){const ye=h[L],be=g[L]=U?Fn(g[L]):St(g[L]);if(vn(ye,be))_(ye,be,w,null,$,R,W,I,U);else break;L++}for(;L<=ne&&L<=re;){const ye=h[ne],be=g[re]=U?Fn(g[re]):St(g[re]);if(vn(ye,be))_(ye,be,w,null,$,R,W,I,U);else break;ne--,re--}if(L>ne){if(L<=re){const ye=re+1,be=ye<se?g[ye].el:T;for(;L<=re;)_(null,g[L]=U?Fn(g[L]):St(g[L]),w,be,$,R,W,I,U),L++}}else if(L>re)for(;L<=ne;)dt(h[L],$,R,!0),L++;else{const ye=L,be=L,Ue=new Map;for(L=be;L<=re;L++){const lt=g[L]=U?Fn(g[L]):St(g[L]);lt.key!=null&&(Ue.has(lt.key)&&O("Duplicate keys found during update:",JSON.stringify(lt.key),"Make sure keys are unique."),Ue.set(lt.key,L))}let Ie,Ke=0;const Ct=re-be+1;let os=!1,ta=0;const Cs=new Array(Ct);for(L=0;L<Ct;L++)Cs[L]=0;for(L=ye;L<=ne;L++){const lt=h[L];if(Ke>=Ct){dt(lt,$,R,!0);continue}let Nt;if(lt.key!=null)Nt=Ue.get(lt.key);else for(Ie=be;Ie<=re;Ie++)if(Cs[Ie-be]===0&&vn(lt,g[Ie])){Nt=Ie;break}Nt===void 0?dt(lt,$,R,!0):(Cs[Nt-be]=L+1,Nt>=ta?ta=Nt:os=!0,_(lt,g[Nt],w,null,$,R,W,I,U),Ke++)}const na=os?Df(Cs):ys;for(Ie=na.length-1,L=Ct-1;L>=0;L--){const lt=be+L,Nt=g[lt],sa=lt+1<se?g[lt+1].el:T;Cs[L]===0?_(null,Nt,w,sa,$,R,W,I,U):os&&(Ie<0||L!==na[Ie]?tt(Nt,w,sa,2):Ie--)}}},tt=(h,g,w,T,$=null)=>{const{el:R,type:W,transition:I,children:U,shapeFlag:L}=h;if(L&6){tt(h.component.subTree,g,w,T);return}if(L&128){h.suspense.move(g,w,T);return}if(L&64){W.move(h,g,w,we);return}if(W===Se){o(R,g,w);for(let ne=0;ne<U.length;ne++)tt(U[ne],g,w,T);o(h.anchor,g,w);return}if(W===$o){S(h,g,w);return}if(T!==2&&L&1&&I)if(T===0)I.beforeEnter(R),o(R,g,w),Xe(()=>I.enter(R),$);else{const{leave:ne,delayLeave:re,afterLeave:ye}=I,be=()=>o(R,g,w),Ue=()=>{ne(R,()=>{be(),ye&&ye()})};re?re(R,be,Ue):Ue()}else o(R,g,w)},dt=(h,g,w,T=!1,$=!1)=>{const{type:R,props:W,ref:I,children:U,dynamicChildren:L,shapeFlag:se,patchFlag:ne,dirs:re}=h;if(I!=null&&Yl(I,null,w,h,!0),se&256){g.ctx.deactivate(h);return}const ye=se&1&&re,be=!ms(h);let Ue;if(be&&(Ue=W&&W.onVnodeBeforeUnmount)&&bt(Ue,g,h),se&6)Q(h.component,w,T);else{if(se&128){h.suspense.unmount(w,T);return}ye&&Tn(h,null,g,"beforeUnmount"),se&64?h.type.remove(h,g,w,$,we,T):L&&(R!==Se||ne>0&&ne&64)?V(L,g,w,!1,!0):(R===Se&&ne&384||!$&&se&16)&&V(U,g,w),T&&un(h)}(be&&(Ue=W&&W.onVnodeUnmounted)||ye)&&Xe(()=>{Ue&&bt(Ue,g,h),ye&&Tn(h,null,g,"unmounted")},w)},un=h=>{const{type:g,el:w,anchor:T,transition:$}=h;if(g===Se){h.patchFlag>0&&h.patchFlag&2048&&$&&!$.persisted?h.children.forEach(W=>{W.type===Je?l(W.el):un(W)}):C(w,T);return}if(g===$o){q(h);return}const R=()=>{l(w),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(h.shapeFlag&1&&$&&!$.persisted){const{leave:W,delayLeave:I}=$,U=()=>W(w,R);I?I(h.el,R,U):U()}else R()},C=(h,g)=>{let w;for(;h!==g;)w=y(h),l(h),h=w;l(g)},Q=(h,g,w)=>{h.type.__hmrId&&kd(h);const{bum:T,scope:$,update:R,subTree:W,um:I}=h;T&&_n(T),$.stop(),R&&(R.active=!1,dt(W,h,g,w)),I&&Xe(I,g),Xe(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),Sd(h)},V=(h,g,w,T=!1,$=!1,R=0)=>{for(let W=R;W<h.length;W++)dt(h[W],g,w,T,$)},ee=h=>h.shapeFlag&6?ee(h.component.subTree):h.shapeFlag&128?h.suspense.next():y(h.anchor||h.el),_e=(h,g,w)=>{h==null?g._vnode&&dt(g._vnode,null,null,!0):_(g._vnode||null,h,g,null,null,null,w),da(),bc(),g._vnode=h},we={p:_,um:dt,m:tt,r:un,mt:Ae,mc:te,pc:ge,pbc:pe,n:ee,o:t};let fe,ce;return n&&([fe,ce]=n(we)),{render:_e,hydrate:fe,createApp:Ef(_e,fe)}}function On({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function Hs(t,n,s=!1){const o=t.children,l=n.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=Fn(l[r]),i.el=a.el),s||Hs(a,i)),i.type===mo&&(i.el=a.el),i.type===Je&&!i.el&&(i.el=a.el)}}function Df(t){const n=t.slice(),s=[0];let o,l,r,a,i;const c=t.length;for(o=0;o<c;o++){const p=t[o];if(p!==0){if(l=s[s.length-1],t[l]<p){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<p?r=i+1:a=i;p<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const Sf=t=>t.__isTeleport,Fs=t=>t&&(t.disabled||t.disabled===""),xa=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Zl=(t,n)=>{const s=t&&t.to;if(qe(s))if(n){const o=n(s);return o||O(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return O("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Fs(t)&&O(`Invalid Teleport target: ${s}`),s},$f={__isTeleport:!0,process(t,n,s,o,l,r,a,i,c,p){const{mc:u,pc:f,pbc:y,o:{insert:m,querySelector:F,createText:_,createComment:B}}=p,A=Fs(n.props);let{shapeFlag:k,children:D,dynamicChildren:S}=n;if(wn&&(c=!1,S=null),t==null){const q=n.el=B("teleport start"),j=n.anchor=B("teleport end");m(q,s,o),m(j,s,o);const N=n.target=Zl(n.props,F),M=n.targetAnchor=_("");N?(m(M,N),a=a||xa(N)):A||O("Invalid Teleport target on mount:",N,`(${typeof N})`);const te=(oe,pe)=>{k&16&&u(D,oe,pe,l,r,a,i,c)};A?te(s,j):N&&te(N,M)}else{n.el=t.el;const q=n.anchor=t.anchor,j=n.target=t.target,N=n.targetAnchor=t.targetAnchor,M=Fs(t.props),te=M?s:j,oe=M?q:N;if(a=a||xa(j),S?(y(t.dynamicChildren,S,te,l,r,a,i),Hs(t,n,!0)):c||f(t,n,te,oe,l,r,a,i,!1),A)M||Eo(n,s,q,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const pe=n.target=Zl(n.props,F);pe?Eo(n,pe,null,p,0):O("Invalid Teleport target on update:",j,`(${typeof j})`)}else M&&Eo(n,j,N,p,1)}Yc(n)},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:u,target:f,props:y}=t;if(f&&r(u),(a||!Fs(y))&&(r(p),i&16))for(let m=0;m<c.length;m++){const F=c[m];l(F,n,s,!0,!!F.dynamicChildren)}},move:Eo,hydrate:Pf};function Eo(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:p,props:u}=t,f=r===2;if(f&&o(a,n,s),(!f||Fs(u))&&c&16)for(let y=0;y<p.length;y++)l(p[y],n,s,2);f&&o(i,n,s)}function Pf(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const u=n.target=Zl(n.props,c);if(u){const f=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Fs(n.props))n.anchor=p(a(t),n,i(t),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(t);let y=f;for(;y;)if(y=a(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}p(f,n,u,s,o,l,r)}Yc(n)}return n.anchor&&a(n.anchor)}const Ww=$f;function Yc(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Se=Symbol("Fragment"),mo=Symbol("Text"),Je=Symbol("Comment"),$o=Symbol("Static"),Vs=[];let Pt=null;function b(t=!1){Vs.push(Pt=t?null:[])}function Tf(){Vs.pop(),Pt=Vs[Vs.length-1]||null}let eo=1;function Ca(t){eo+=t}function Zc(t){return t.dynamicChildren=eo>0?Pt||ys:null,Tf(),eo>0&&Pt&&Pt.push(t),t}function Z(t,n,s,o,l,r){return Zc(e(t,n,s,o,l,r,!0))}function K(t,n,s,o,l){return Zc(E(t,n,s,o,l,!0))}function Sn(t){return t?t.__v_isVNode===!0:!1}function vn(t,n){return n.shapeFlag&6&&cs.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const Of=(...t)=>Lf(...t),dl="__vInternal",Gc=({key:t})=>t??null,Po=({ref:t,ref_key:n,ref_for:s})=>t!=null?qe(t)||xe(t)||ue(t)?{i:Ze,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,o=0,l=null,r=t===Se?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Gc(n),ref:n&&Po(n),scopeId:il,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ze};return i?(Rr(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=qe(s)?8:16),c.key!==c.key&&O("VNode created with invalid key (NaN). VNode type:",c.type),eo>0&&!a&&Pt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Pt.push(c),c}const E=Of;function Lf(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===nf)&&(t||O(`Invalid vnode type when creating vnode: ${t}.`),t=Je),Sn(t)){const i=Lt(t,n,!0);return s&&Rr(i,s),eo>0&&!r&&Pt&&(i.shapeFlag&6?Pt[Pt.indexOf(t)]=i:Pt.push(i)),i.patchFlag|=-2,i}if(tp(t)&&(t=t.__vccOpts),n){n=he(n);let{class:i,style:c}=n;i&&!qe(i)&&(n.class=We(i)),$e(c)&&(qo(c)&&!ae(c)&&(c=He({},c)),n.style=st(c))}const a=qe(t)?1:Sc(t)?128:Sf(t)?64:$e(t)?4:ue(t)?2:0;return a&4&&qo(t)&&(t=de(t),O("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,s,o,l,a,r,!0)}function he(t){return t?qo(t)||dl in t?He({},t):t:null}function Lt(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,i=n?X(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Gc(i),ref:n&&n.ref?s&&l?ae(l)?l.concat(Po(n)):[l,Po(n)]:Po(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&ae(a)?a.map(Jc):a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lt(t.ssContent),ssFallback:t.ssFallback&&Lt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jc(t){const n=Lt(t);return ae(t.children)&&(n.children=t.children.map(Jc)),n}function d(t=" ",n=0){return E(mo,null,t,n)}function Fe(t="",n=!1){return n?(b(),K(Je,null,t)):E(Je,null,t)}function St(t){return t==null||typeof t=="boolean"?E(Je):ae(t)?E(Se,null,t.slice()):typeof t=="object"?Fn(t):E(mo,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lt(t)}function Rr(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Rr(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(dl in n)?n._ctx=Ze:l===3&&Ze&&(Ze.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else ue(n)?(n={default:n,_ctx:Ze},s=32):(n=String(n),o&64?(s=16,n=[d(n)]):s=8);t.children=n,t.shapeFlag|=s}function X(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=We([n.class,o.class]));else if(l==="style")n.style=st([n.style,o.style]);else if(co(l)){const r=n[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function bt(t,n,s,o=null){Et(t,n,7,[s,o])}const If=zc();let Mf=0;function Rf(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||If,r={uid:Mf++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(o,l),emitsOptions:Ac(o,l),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=sf(r),r.root=n?n.root:r,r.emit=Od.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const Zt=()=>Ve||Ze,Bs=t=>{Ve=t,t.scope.on()},zn=()=>{Ve&&Ve.scope.off(),Ve=null},Nf=Pn("slot,component");function Gl(t,n){const s=n.isNativeTag||Yi;(Nf(t)||s(t))&&O("Do not use built-in or reserved HTML elements as component id: "+t)}function Qc(t){return t.vnode.shapeFlag&4}let to=!1;function Uf(t,n=!1){to=n;const{props:s,children:o}=t.vnode,l=Qc(t);ff(t,s,l,n),bf(t,o);const r=l?qf(t,n):void 0;return to=!1,r}function qf(t,n){var s;const o=t.type;{if(o.name&&Gl(o.name,t.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)Gl(r[a],t.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Ic(r[a])}o.compilerOptions&&jf()&&O('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=wr(new Proxy(t.ctx,Nc)),of(t);const{setup:l}=o;if(l){const r=t.setupContext=l.length>1?ep(t):null;Bs(t),es();const a=on(l,t,0,[ds(t.props),r]);if(ts(),zn(),Fr(a)){if(a.then(zn,zn),n)return a.then(i=>{Aa(t,i,n)}).catch(i=>{ll(i,t,0)});if(t.asyncDep=a,!t.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";O(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Aa(t,a,n)}else Xc(t,n)}function Aa(t,n,s){ue(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:$e(n)?(Sn(n)&&O("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=hc(n),lf(t)):n!==void 0&&O(`setup() should return an object. Received: ${n===null?"null":typeof n}`),Xc(t,s)}let Jl;const jf=()=>!Jl;function Xc(t,n,s){const o=t.type;if(!t.render){if(!n&&Jl&&!o.render){const l=o.template||Ir(t).template;if(l){Jt(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=o,p=He(He({isCustomElement:r,delimiters:i},a),c);o.render=Jl(l,p),Qt(t,"compile")}}t.render=o.render||ft}Bs(t),es(),af(t),ts(),zn(),!o.render&&t.render===ft&&!n&&(o.template?O('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):O("Component is missing template or render function."))}function Hf(t){return new Proxy(t.attrs,{get(n,s){return Ho(),yt(t,"get","$attrs"),n[s]},set(){return O("setupContext.attrs is readonly."),!1},deleteProperty(){return O("setupContext.attrs is readonly."),!1}})}function ep(t){const n=o=>{if(t.exposed&&O("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ae(o)?l="array":xe(o)&&(l="ref")),l!=="object"&&O(`expose() should be passed a plain object, received ${l}.`)}t.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Hf(t))},get slots(){return ds(t.slots)},get emit(){return(o,...l)=>t.emit(o,...l)},expose:n})}function fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hc(wr(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in Kn)return Kn[s](t)},has(n,s){return s in n||s in Kn}}))}const Vf=/(?:^|[-_])(\w)/g,Wf=t=>t.replace(Vf,n=>n.toUpperCase()).replace(/[-_]/g,"");function no(t,n=!0){return ue(t)?t.displayName||t.name:t.name||n&&t.__name}function yl(t,n,s=!1){let o=no(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&t&&t.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(t.components||t.parent.type.components)||l(t.appContext.components)}return o?Wf(o):s?"App":"Anonymous"}function tp(t){return ue(t)&&"__vccOpts"in t}const P=(t,n)=>dd(t,n,to);function Kw(){return Kf().slots}function Kf(){const t=Zt();return t||O("useContext() called without active instance."),t.setupContext||(t.setupContext=ep(t))}function vs(t,n,s){const o=arguments.length;return o===2?$e(n)&&!ae(n)?Sn(n)?E(t,null,[n]):E(t,n):E(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Sn(s)&&(s=[s]),E(t,n,s))}const zf=Symbol("ssrContext"),Yf=()=>{{const t=H(zf);return t||O("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function bl(t){return!!(t&&t.__v_isShallow)}function Zf(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return $e(f)?f.__isVue?["div",t,"VueInstance"]:xe(f)?["div",{},["span",t,u(f)],"<",i(f.value),">"]:Vn(f)?["div",{},["span",t,bl(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Dn(f)?" (readonly)":""}`]:Dn(f)?["div",{},["span",t,bl(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const y=[];f.type.props&&f.props&&y.push(a("props",de(f.props))),f.setupState!==Me&&y.push(a("setup",f.setupState)),f.data!==Me&&y.push(a("data",de(f.data)));const m=c(f,"computed");m&&y.push(a("computed",m));const F=c(f,"inject");return F&&y.push(a("injected",F)),y.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),y}function a(f,y){return y=He({},y),Object.keys(y).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(y).map(m=>["div",{},["span",o,m+": "],i(y[m],!1)])]]:["span",{}]}function i(f,y=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:$e(f)?["object",{object:y?de(f):f}]:["span",s,String(f)]}function c(f,y){const m=f.type;if(ue(m))return;const F={};for(const _ in f.ctx)p(m,_,y)&&(F[_]=f.ctx[_]);return F}function p(f,y,m){const F=f[m];if(ae(F)&&F.includes(y)||$e(F)&&y in F||f.extends&&p(f.extends,y,m)||f.mixins&&f.mixins.some(_=>p(_,y,m)))return!0}function u(f){return bl(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Da="3.2.47",Gf="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,Sa=Rn&&Rn.createElement("template"),Jf={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?Rn.createElementNS(Gf,t):Rn.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Sa.innerHTML=o?`<svg>${t}</svg>`:t;const i=Sa.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Qf(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function Xf(t,n,s){const o=t.style,l=qe(s);if(s&&!l){if(n&&!qe(n))for(const r in n)s[r]==null&&Ql(o,r,"");for(const r in s)Ql(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const ey=/[^\\];\s*$/,$a=/\s*!important$/;function Ql(t,n,s){if(ae(s))s.forEach(o=>Ql(t,n,o));else if(s==null&&(s=""),ey.test(s)&&O(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))t.setProperty(n,s);else{const o=ty(t,n);$a.test(s)?t.setProperty(rn(o),s.replace($a,""),"important"):t[o]=s}}const Pa=["Webkit","Moz","ms"],wl={};function ty(t,n){const s=wl[n];if(s)return s;let o=Kt(n);if(o!=="filter"&&o in t)return wl[n]=o;o=Jn(o);for(let l=0;l<Pa.length;l++){const r=Pa[l]+o;if(r in t)return wl[n]=r}return n}const Ta="http://www.w3.org/1999/xlink";function ny(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Ta,n.slice(6,n.length)):t.setAttributeNS(Ta,n,s);else{const r=Bu(n);s==null||r&&!Ki(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function sy(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s??"";return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const c=s??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),s==null&&t.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof t[n];c==="boolean"?s=Ki(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{t[n]=s}catch(c){i||O(`Failed setting prop "${n}" on <${t.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&t.removeAttribute(n)}function ps(t,n,s,o){t.addEventListener(n,s,o)}function oy(t,n,s,o){t.removeEventListener(n,s,o)}function ly(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=ry(n);if(o){const p=r[n]=cy(o,l);ps(t,i,p,c)}else a&&(oy(t,i,a,c),r[n]=void 0)}}const Oa=/(?:Once|Passive|Capture)$/;function ry(t){let n;if(Oa.test(t)){n={};let o;for(;o=t.match(Oa);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),n]}let kl=0;const ay=Promise.resolve(),iy=()=>kl||(ay.then(()=>kl=0),kl=Date.now());function cy(t,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Et(py(o,s.value),n,5,[o])};return s.value=t,s.attached=iy(),s}function py(t,n){if(ae(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const La=/^on[a-z]/,uy=(t,n,s,o,l=!1,r,a,i,c)=>{n==="class"?Qf(t,o,l):n==="style"?Xf(t,s,o):co(n)?Io(n)||ly(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):dy(t,n,o,l))?sy(t,n,o,r,a,i,c):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),ny(t,n,o,l))};function dy(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&La.test(n)&&ue(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||La.test(n)&&qe(s)?!1:n in t}const fn="transition",Ds="animation",np={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fy=He({},Hd.props,np),Ln=(t,n=[])=>{ae(t)?t.forEach(s=>s(...n)):t&&t(...n)},Ia=t=>t?ae(t)?t.some(n=>n.length>1):t.length>1:!1;function yy(t){const n={};for(const z in t)z in np||(n[z]=t[z]);if(t.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:u=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:y=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=t,F=hy(l),_=F&&F[0],B=F&&F[1],{onBeforeEnter:A,onEnter:k,onEnterCancelled:D,onLeave:S,onLeaveCancelled:q,onBeforeAppear:j=A,onAppear:N=k,onAppearCancelled:M=D}=n,te=(z,ve,Re)=>{hn(z,ve?u:i),hn(z,ve?p:a),Re&&Re()},oe=(z,ve)=>{z._isLeaving=!1,hn(z,f),hn(z,m),hn(z,y),ve&&ve()},pe=z=>(ve,Re)=>{const Ae=z?N:k,Ne=()=>te(ve,z,Re);Ln(Ae,[ve,Ne]),Ma(()=>{hn(ve,z?c:r),Xt(ve,z?u:i),Ia(Ae)||Ra(ve,o,_,Ne)})};return He(n,{onBeforeEnter(z){Ln(A,[z]),Xt(z,r),Xt(z,a)},onBeforeAppear(z){Ln(j,[z]),Xt(z,c),Xt(z,p)},onEnter:pe(!1),onAppear:pe(!0),onLeave(z,ve){z._isLeaving=!0;const Re=()=>oe(z,ve);Xt(z,f),op(),Xt(z,y),Ma(()=>{z._isLeaving&&(hn(z,f),Xt(z,m),Ia(S)||Ra(z,o,B,Re))}),Ln(S,[z,Re])},onEnterCancelled(z){te(z,!1),Ln(D,[z])},onAppearCancelled(z){te(z,!0),Ln(M,[z])},onLeaveCancelled(z){oe(z),Ln(q,[z])}})}function hy(t){if(t==null)return null;if($e(t))return[El(t.enter),El(t.leave)];{const n=El(t);return[n,n]}}function El(t){const n=Cu(t);return Fd(n,"<transition> explicit duration"),n}function Xt(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(n)}function hn(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:s}=t;s&&(s.delete(n),s.size||(t._vtc=void 0))}function Ma(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let my=0;function Ra(t,n,s,o){const l=t._endId=++my,r=()=>{l===t._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=sp(t,n);if(!a)return o();const p=a+"end";let u=0;const f=()=>{t.removeEventListener(p,y),r()},y=m=>{m.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},i+1),t.addEventListener(p,y)}function sp(t,n){const s=window.getComputedStyle(t),o=F=>(s[F]||"").split(", "),l=o(`${fn}Delay`),r=o(`${fn}Duration`),a=Na(l,r),i=o(`${Ds}Delay`),c=o(`${Ds}Duration`),p=Na(i,c);let u=null,f=0,y=0;n===fn?a>0&&(u=fn,f=a,y=r.length):n===Ds?p>0&&(u=Ds,f=p,y=c.length):(f=Math.max(a,p),u=f>0?a>p?fn:Ds:null,y=u?u===fn?r.length:c.length:0);const m=u===fn&&/\b(transform|all)(,|$)/.test(o(`${fn}Property`).toString());return{type:u,timeout:f,propCount:y,hasTransform:m}}function Na(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((s,o)=>Ua(s)+Ua(t[o])))}function Ua(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function op(){return document.body.offsetHeight}const lp=new WeakMap,rp=new WeakMap,ap={name:"TransitionGroup",props:He({},fy,{tag:String,moveClass:String}),setup(t,{slots:n}){const s=Zt(),o=Pc();let l,r;return Tr(()=>{if(!l.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!by(l[0].el,s.vnode.el,a))return;l.forEach(_y),l.forEach(By);const i=l.filter(vy);op(),i.forEach(c=>{const p=c.el,u=p.style;Xt(p,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=p._moveCb=y=>{y&&y.target!==p||(!y||/transform$/.test(y.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,hn(p,a))};p.addEventListener("transitionend",f)})}),()=>{const a=de(t),i=yy(a);let c=a.tag||Se;l=r,r=n.default?Pr(n.default()):[];for(let p=0;p<r.length;p++){const u=r[p];u.key!=null?_s(u,Xs(u,i,o,s)):O("<TransitionGroup> children must be keyed.")}if(l)for(let p=0;p<l.length;p++){const u=l[p];_s(u,Xs(u,i,o,s)),lp.set(u,u.el.getBoundingClientRect())}return E(c,null,r)}}},Fy=t=>delete t.mode;ap.props;const gy=ap;function _y(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function By(t){rp.set(t,t.el.getBoundingClientRect())}function vy(t){const n=lp.get(t),s=rp.get(t),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function by(t,n,s){const o=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=sp(o);return l.removeChild(o),r}const qa=t=>{const n=t.props["onUpdate:modelValue"]||!1;return ae(n)?s=>_n(n,s):n};function wy(t){t.target.composing=!0}function ja(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ky={created(t,{modifiers:{lazy:n,trim:s,number:o}},l){t._assign=qa(l);const r=o||l.props&&l.props.type==="number";ps(t,n?"change":"input",a=>{if(a.target.composing)return;let i=t.value;s&&(i=i.trim()),r&&(i=Ol(i)),t._assign(i)}),s&&ps(t,"change",()=>{t.value=t.value.trim()}),n||(ps(t,"compositionstart",wy),ps(t,"compositionend",ja),ps(t,"change",ja))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(t._assign=qa(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||o&&t.value.trim()===n||(l||t.type==="number")&&Ol(t.value)===n))return;const a=n??"";t.value!==a&&(t.value=a)}},Ey={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ha=(t,n)=>s=>{if(!("key"in s))return;const o=rn(s.key);if(n.some(l=>l===o||Ey[l]===o))return t(s)},ip={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Ss(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),Ss(t,!0),o.enter(t)):o.leave(t,()=>{Ss(t,!1)}):Ss(t,n))},beforeUnmount(t,{value:n}){Ss(t,n)}};function Ss(t,n){t.style.display=n?t._vod:"none"}const xy=He({patchProp:uy},Jf);let Va;function Cy(){return Va||(Va=Cf(xy))}const zw=(...t)=>{const n=Cy().createApp(...t);Ay(n),Dy(n);const{mount:s}=n;return n.mount=o=>{const l=Sy(o);if(!l)return;const r=n._component;!ue(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function Ay(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>Fu(n)||gu(n),writable:!1})}function Dy(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){O("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return O(o),s},set(){O(o)}})}}function Sy(t){if(qe(t)){const n=document.querySelector(t);return n||O(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&O('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function $y(){Zf()}$y();const cp=Symbol("v-click-clicks"),pp=Symbol("v-click-clicks-elements"),Py=Symbol("v-click-clicks-order-map"),up=Symbol("v-click-clicks-disabled"),dp=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),Ty=Symbol("slidev-route"),Oy=Symbol("slidev-slide-context"),Ly="slidev-vclick-target",Yw="slidev-vclick-hidden",Zw="slidev-vclick-fade",Gw="slidev-vclick-hidden-explicitly",Jw="slidev-vclick-current",Qw="slidev-vclick-prior",Xw=["localhost","127.0.0.1"];function Iy(t){return t=t??[],Array.isArray(t)?t:[t]}function My(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function Ry(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Ny(t){return t!=null}function Uy(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(Ny))}const Us={theme:"unicorn",title:"Python 数据结构",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Pe=Us,kn=Pe.aspectRatio??16/9,En=Pe.canvasWidth??980,Nr=Math.ceil(En/kn),Ur=P(()=>Uy(Pe.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function xt(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const ns=et({page:0,clicks:0});let qy=[],jy=[];xt(ns,"$syncUp",!0);xt(ns,"$syncDown",!0);xt(ns,"$paused",!1);xt(ns,"$onSet",t=>qy.push(t));xt(ns,"$onPatch",t=>jy.push(t));xt(ns,"$patch",async()=>!1);function fp(t,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=et(n);function p(m){o.push(m)}function u(m,F){c[m]!==F&&(clearTimeout(a),l=!0,c[m]=F,a=setTimeout(()=>l=!1,0))}function f(m){l||(clearTimeout(i),r=!0,Object.entries(m).forEach(([F,_])=>{c[F]=_}),i=setTimeout(()=>r=!1,0))}function y(m){let F;s?s&&window.addEventListener("storage",B=>{B&&B.key===m&&B.newValue&&f(JSON.parse(B.newValue))}):(F=new BroadcastChannel(m),F.addEventListener("message",B=>f(B.data)));function _(){!s&&F&&!r?F.postMessage(de(c)):s&&!r&&window.localStorage.setItem(m,JSON.stringify(c)),l||o.forEach(B=>B(c))}if(je(c,_,{deep:!0}),s){const B=window.localStorage.getItem(m);B&&f(JSON.parse(B))}}return{init:y,onPatch:p,patch:u,state:c}}const{init:e4,onPatch:t4,patch:n4,state:xl}=fp(ns,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ss=et({});let Hy=[],Vy=[];xt(ss,"$syncUp",!0);xt(ss,"$syncDown",!0);xt(ss,"$paused",!1);xt(ss,"$onSet",t=>Hy.push(t));xt(ss,"$onPatch",t=>Vy.push(t));xt(ss,"$patch",async()=>!1);const{init:s4,onPatch:Wy,patch:yp,state:Ko}=fp(ss,{},!0),Ky="modulepreload",zy=function(t){return"/math201/slides/python04/"+t},Wa={},xn=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=zy(r),r in Wa)return;Wa[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let u=l.length-1;u>=0;u--){const f=l[u];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":Ky,a||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),a)return new Promise((u,f)=>{p.addEventListener("load",u),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Ka;const It=typeof window<"u",Yy=t=>typeof t<"u",Zy=Object.prototype.toString,so=t=>typeof t=="function",o4=t=>typeof t=="number",hp=t=>typeof t=="string",l4=t=>Zy.call(t)==="[object Object]",Xl=()=>+Date.now(),Ws=()=>{};It&&((Ka=window==null?void 0:window.navigator)!=null&&Ka.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pt(t){return typeof t=="function"?t():v(t)}function Gy(t,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const mp=t=>t();function Jy(t=mp){const n=le(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&t(...r)};return{isActive:Ht(n),pause:s,resume:o,eventFilter:l}}function Qy(t){return t}function Xy(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function e2(t,n){let s,o,l;const r=le(!0),a=()=>{r.value=!0,l()};je(t,a,{flush:"sync"});const i=so(n)?n:n.get,c=so(n)?void 0:n.set,p=mc((u,f)=>(o=u,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(y){c==null||c(y)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function Yt(t){return ec()?(Du(t),!0):!1}function t2(t){if(!xe(t))return et(t);const n=new Proxy({},{get(s,o,l){return v(Reflect.get(t.value,o,l))},set(s,o,l){return xe(t.value[o])&&!xe(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return et(n)}function Fp(t){return typeof t=="function"?P(t):le(t)}var n2=Object.defineProperty,s2=Object.defineProperties,o2=Object.getOwnPropertyDescriptors,za=Object.getOwnPropertySymbols,l2=Object.prototype.hasOwnProperty,r2=Object.prototype.propertyIsEnumerable,Ya=(t,n,s)=>n in t?n2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,a2=(t,n)=>{for(var s in n||(n={}))l2.call(n,s)&&Ya(t,s,n[s]);if(za)for(var s of za(n))r2.call(n,s)&&Ya(t,s,n[s]);return t},i2=(t,n)=>s2(t,o2(n));function c2(t){if(!xe(t))return id(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=mc(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=i2(a2({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function qr(t,n=!0){Zt()?yo(t):n?t():Tt(t)}function r4(t){Zt()&&pl(t)}function p2(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=le(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function p(){const u=pt(n);u<=0||(a.value=!0,l&&t(),i(),r=setInterval(t,u))}if(o&&It&&p(),xe(n)||so(n)){const u=je(n,()=>{a.value&&It&&p()});Yt(u)}return Yt(c),{isActive:a,pause:c,resume:p}}function u2(t,n,s={}){const{immediate:o=!0}=s,l=le(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...p){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...p)},pt(n))}return o&&(l.value=!0,It&&c()),Yt(i),{isPending:Ht(l),start:c,stop:i}}function gp(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=xe(t),r=le(t);function a(i){if(arguments.length)return r.value=i,r.value;{const c=pt(s);return r.value=r.value===c?pt(o):c,r.value}}return l?a:[r,a]}var Za=Object.getOwnPropertySymbols,d2=Object.prototype.hasOwnProperty,f2=Object.prototype.propertyIsEnumerable,y2=(t,n)=>{var s={};for(var o in t)d2.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Za)for(var o of Za(t))n.indexOf(o)<0&&f2.call(t,o)&&(s[o]=t[o]);return s};function h2(t,n,s={}){const o=s,{eventFilter:l=mp}=o,r=y2(o,["eventFilter"]);return je(t,Gy(l,n),r)}var m2=Object.defineProperty,F2=Object.defineProperties,g2=Object.getOwnPropertyDescriptors,zo=Object.getOwnPropertySymbols,_p=Object.prototype.hasOwnProperty,Bp=Object.prototype.propertyIsEnumerable,Ga=(t,n,s)=>n in t?m2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,_2=(t,n)=>{for(var s in n||(n={}))_p.call(n,s)&&Ga(t,s,n[s]);if(zo)for(var s of zo(n))Bp.call(n,s)&&Ga(t,s,n[s]);return t},B2=(t,n)=>F2(t,g2(n)),v2=(t,n)=>{var s={};for(var o in t)_p.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&zo)for(var o of zo(t))n.indexOf(o)<0&&Bp.call(t,o)&&(s[o]=t[o]);return s};function b2(t,n,s={}){const o=s,{eventFilter:l}=o,r=v2(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=Jy(l);return{stop:h2(t,n,B2(_2({},r),{eventFilter:a})),pause:i,resume:c,isActive:p}}function kt(t){var n;const s=pt(t);return(n=s==null?void 0:s.$el)!=null?n:s}const Qe=It?window:void 0,vp=It?window.document:void 0,w2=It?window.navigator:void 0;function Te(...t){let n,s,o,l;if(hp(t[0])||Array.isArray(t[0])?([s,o,l]=t,n=Qe):[n,s,o,l]=t,!n)return Ws;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},i=(u,f,y)=>(u.addEventListener(f,y,l),()=>u.removeEventListener(f,y,l)),c=je(()=>kt(n),u=>{a(),u&&r.push(...s.flatMap(f=>o.map(y=>i(u,f,y))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return Yt(p),p}function k2(t,n,s={}){const{window:o=Qe,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;let i=!0,c;const p=m=>l.some(F=>{if(typeof F=="string")return Array.from(o.document.querySelectorAll(F)).some(_=>_===m.target||m.composedPath().includes(_));{const _=kt(F);return _&&(m.target===_||m.composedPath().includes(_))}}),u=m=>{o.clearTimeout(c);const F=kt(t);if(!(!F||F===m.target||m.composedPath().includes(F))){if(m.detail===0&&(i=!p(m)),!i){i=!0;return}n(m)}},f=[Te(o,"click",u,{passive:!0,capture:r}),Te(o,"pointerdown",m=>{const F=kt(t);F&&(i=!m.composedPath().includes(F)&&!p(m))},{passive:!0}),Te(o,"pointerup",m=>{if(m.button===0){const F=m.composedPath();m.composedPath=()=>F,c=o.setTimeout(()=>u(m),50)}},{passive:!0}),a&&Te(o,"blur",m=>{var F;const _=kt(t);((F=o.document.activeElement)==null?void 0:F.tagName)==="IFRAME"&&!(_!=null&&_.contains(o.document.activeElement))&&n(m)})].filter(Boolean);return()=>f.forEach(m=>m())}const E2=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0;function x2(...t){let n,s,o={};t.length===3?(n=t[0],s=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],o=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:l=Qe,eventName:r="keydown",passive:a=!1}=o,i=E2(n);return Te(l,r,p=>{i(p)&&s(p)},a)}function C2(t={}){var n;const{window:s=Qe}=t,o=(n=t.document)!=null?n:s==null?void 0:s.document,l=e2(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Te(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Te(s,"focus",l.trigger,!0)),l}function Fo(t,n=!1){const s=le(),o=()=>s.value=Boolean(t());return o(),qr(o,n),s}function us(t,n={}){const{window:s=Qe}=n,o=Fo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=le(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(Fp(t).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return Es(i),Yt(()=>a()),r}const A2={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var D2=Object.defineProperty,Ja=Object.getOwnPropertySymbols,S2=Object.prototype.hasOwnProperty,$2=Object.prototype.propertyIsEnumerable,Qa=(t,n,s)=>n in t?D2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,P2=(t,n)=>{for(var s in n||(n={}))S2.call(n,s)&&Qa(t,s,n[s]);if(Ja)for(var s of Ja(n))$2.call(n,s)&&Qa(t,s,n[s]);return t};function T2(t,n={}){function s(i,c){let p=t[i];return c!=null&&(p=Xy(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Qe}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>us(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return P2({greater(i){return us(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return us(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return us(`(max-width: ${s(i)})`,n)},between(i,c){return us(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function O2(t={}){const{navigator:n=w2,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=t,a=["copy","cut"],i=Fo(()=>n&&"clipboard"in n),c=P(()=>i.value||r),p=le(""),u=le(!1),f=u2(()=>u.value=!1,l);function y(){i.value?n.clipboard.readText().then(B=>{p.value=B}):p.value=_()}if(c.value&&s)for(const B of a)Te(B,y);async function m(B=pt(o)){c.value&&B!=null&&(i.value?await n.clipboard.writeText(B):F(B),p.value=B,u.value=!0,f.start())}function F(B){const A=document.createElement("textarea");A.value=B??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function _(){var B,A,k;return(k=(A=(B=document==null?void 0:document.getSelection)==null?void 0:B.call(document))==null?void 0:A.toString())!=null?k:""}return{isSupported:c,text:p,copied:u,copy:m}}function L2(t){return JSON.parse(JSON.stringify(t))}const er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tr="__vueuse_ssr_handlers__";er[tr]=er[tr]||{};const I2=er[tr];function M2(t,n){return I2[t]||n}function R2(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var N2=Object.defineProperty,Xa=Object.getOwnPropertySymbols,U2=Object.prototype.hasOwnProperty,q2=Object.prototype.propertyIsEnumerable,ei=(t,n,s)=>n in t?N2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ti=(t,n)=>{for(var s in n||(n={}))U2.call(n,s)&&ei(t,s,n[s]);if(Xa)for(var s of Xa(n))q2.call(n,s)&&ei(t,s,n[s]);return t};const j2={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function H2(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:u,window:f=Qe,eventFilter:y,onError:m=N=>{console.error(N)}}=o,F=(u?zt:le)(n);if(!s)try{s=M2("getDefaultStorage",()=>{var N;return(N=Qe)==null?void 0:N.localStorage})()}catch(N){m(N)}if(!s)return F;const _=pt(n),B=R2(_),A=(l=o.serializer)!=null?l:j2[B],{pause:k,resume:D}=b2(F,()=>S(F.value),{flush:r,deep:a,eventFilter:y});return f&&i&&Te(f,"storage",j),j(),F;function S(N){try{if(N==null)s.removeItem(t);else{const M=A.write(N),te=s.getItem(t);te!==M&&(s.setItem(t,M),f&&(f==null||f.dispatchEvent(new StorageEvent("storage",{key:t,oldValue:te,newValue:M,storageArea:s}))))}}catch(M){m(M)}}function q(N){const M=N?N.newValue:s.getItem(t);if(M==null)return c&&_!==null&&s.setItem(t,A.write(_)),_;if(!N&&p){const te=A.read(M);return so(p)?p(te,_):B==="object"&&!Array.isArray(te)?ti(ti({},_),te):te}else return typeof M!="string"?M:A.read(M)}function j(N){if(!(N&&N.storageArea!==s)){if(N&&N.key==null){F.value=_;return}if(!(N&&N.key!==t)){k();try{F.value=q(N)}catch(M){m(M)}finally{N?Tt(D):D()}}}}}function V2(t){return us("(prefers-color-scheme: dark)",t)}var W2=Object.defineProperty,K2=Object.defineProperties,z2=Object.getOwnPropertyDescriptors,ni=Object.getOwnPropertySymbols,Y2=Object.prototype.hasOwnProperty,Z2=Object.prototype.propertyIsEnumerable,si=(t,n,s)=>n in t?W2(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,G2=(t,n)=>{for(var s in n||(n={}))Y2.call(n,s)&&si(t,s,n[s]);if(ni)for(var s of ni(n))Z2.call(n,s)&&si(t,s,n[s]);return t},J2=(t,n)=>K2(t,z2(n));function a4(t,n={}){var s,o,l;const r=(s=n.draggingElement)!=null?s:Qe,a=(o=n.handle)!=null?o:t,i=le((l=pt(n.initialValue))!=null?l:{x:0,y:0}),c=le(),p=F=>n.pointerTypes?n.pointerTypes.includes(F.pointerType):!0,u=F=>{pt(n.preventDefault)&&F.preventDefault(),pt(n.stopPropagation)&&F.stopPropagation()},f=F=>{var _;if(!p(F)||pt(n.exact)&&F.target!==pt(t))return;const B=pt(t).getBoundingClientRect(),A={x:F.clientX-B.left,y:F.clientY-B.top};((_=n.onStart)==null?void 0:_.call(n,A,F))!==!1&&(c.value=A,u(F))},y=F=>{var _;p(F)&&c.value&&(i.value={x:F.clientX-c.value.x,y:F.clientY-c.value.y},(_=n.onMove)==null||_.call(n,i.value,F),u(F))},m=F=>{var _;p(F)&&c.value&&(c.value=void 0,(_=n.onEnd)==null||_.call(n,i.value,F),u(F))};return It&&(Te(a,"pointerdown",f,!0),Te(r,"pointermove",y,!0),Te(r,"pointerup",m,!0)),J2(G2({},c2(i)),{position:i,isDragging:P(()=>!!c.value),style:P(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var oi=Object.getOwnPropertySymbols,Q2=Object.prototype.hasOwnProperty,X2=Object.prototype.propertyIsEnumerable,eh=(t,n)=>{var s={};for(var o in t)Q2.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&oi)for(var o of oi(t))n.indexOf(o)<0&&X2.call(t,o)&&(s[o]=t[o]);return s};function th(t,n,s={}){const o=s,{window:l=Qe}=o,r=eh(o,["window"]);let a;const i=Fo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},p=je(()=>kt(t),f=>{c(),i.value&&l&&f&&(a=new ResizeObserver(n),a.observe(f,r))},{immediate:!0,flush:"post"}),u=()=>{c(),p()};return Yt(u),{isSupported:i,stop:u}}function nh(t,n={}){const{immediate:s=!0,window:o=Qe}=n,l=le(!1);let r=0,a=null;function i(u){if(!l.value||!o)return;const f=u-r;t({delta:f,timestamp:u}),r=u,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),Yt(p),{isActive:Ht(l),pause:p,resume:c}}function sh(t,n={width:0,height:0},s={}){const{window:o=Qe,box:l="content-box"}=s,r=P(()=>{var c,p;return(p=(c=kt(t))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),a=le(n.width),i=le(n.height);return th(t,([c])=>{const p=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const u=kt(t);if(u){const f=o.getComputedStyle(u);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(p){const u=Array.isArray(p)?p:[p];a.value=u.reduce((f,{inlineSize:y})=>f+y,0),i.value=u.reduce((f,{blockSize:y})=>f+y,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),je(()=>kt(t),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}const li=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function oh(t,n={}){const{document:s=vp,autoExit:o=!1}=n,l=t||(s==null?void 0:s.querySelector("html")),r=le(!1);let a=li[0];const i=Fo(()=>{if(s){for(const _ of li)if(_[1]in s)return a=_,!0}else return!1;return!1}),[c,p,u,,f]=a;async function y(){i.value&&(s!=null&&s[u]&&await s[p](),r.value=!1)}async function m(){if(!i.value)return;await y();const _=kt(l);_&&(await _[c](),r.value=!0)}async function F(){r.value?await y():await m()}return s&&Te(s,f,()=>{r.value=!!(s!=null&&s[u])},!1),o&&Yt(y),{isSupported:i,isFullscreen:r,enter:m,exit:y,toggle:F}}function i4(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=Qe}=s,i=Fo(()=>a&&"IntersectionObserver"in a);let c=Ws;const p=i.value?je(()=>({el:kt(t),root:kt(o)}),({el:f,root:y})=>{if(c(),!f)return;const m=new IntersectionObserver(n,{root:y,rootMargin:l,threshold:r});m.observe(f),c=()=>{m.disconnect(),c=Ws}},{immediate:!0,flush:"post"}):Ws,u=()=>{c(),p()};return Yt(u),{isSupported:i,stop:u}}function Rt(t,n,s={}){const{window:o=Qe}=s;return H2(t,n,o==null?void 0:o.localStorage,s)}const lh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function rh(t={}){const{reactive:n=!1,target:s=Qe,aliasMap:o=lh,passive:l=!0,onEventFired:r=Ws}=t,a=et(new Set),i={toJSON(){return{}},current:a},c=n?et(i):i,p=new Set,u=new Set;function f(_,B){_ in c&&(n?c[_]=B:c[_].value=B)}function y(){a.clear();for(const _ of u)f(_,!1)}function m(_,B){var A,k;const D=(A=_.key)==null?void 0:A.toLowerCase(),q=[(k=_.code)==null?void 0:k.toLowerCase(),D].filter(Boolean);D&&(B?a.add(D):a.delete(D));for(const j of q)u.add(j),f(j,B);D==="meta"&&!B?(p.forEach(j=>{a.delete(j),f(j,!1)}),p.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&B&&[...a,...q].forEach(j=>p.add(j))}Te(s,"keydown",_=>(m(_,!0),r(_)),{passive:l}),Te(s,"keyup",_=>(m(_,!1),r(_)),{passive:l}),Te("blur",y,{passive:!0}),Te("focus",y,{passive:!0});const F=new Proxy(c,{get(_,B,A){if(typeof B!="string")return Reflect.get(_,B,A);if(B=B.toLowerCase(),B in o&&(B=o[B]),!(B in c))if(/[+_-]/.test(B)){const D=B.split(/[+_-]/g).map(S=>S.trim());c[B]=P(()=>D.every(S=>v(F[S])))}else c[B]=le(!1);const k=Reflect.get(_,B,A);return n?v(k):k}});return F}function c4(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Qe,eventFilter:a}=t,i=le(l.x),c=le(l.y),p=le(null),u=_=>{n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"?(i.value=_.clientX,c.value=_.clientY):n==="movement"&&(i.value=_.movementX,c.value=_.movementY),p.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},y=_=>{if(_.touches.length>0){const B=_.touches[0];n==="page"?(i.value=B.pageX,c.value=B.pageY):n==="client"&&(i.value=B.clientX,c.value=B.clientY),p.value="touch"}},m=_=>a===void 0?u(_):a(()=>u(_),{}),F=_=>a===void 0?y(_):a(()=>y(_),{});return r&&(Te(r,"mousemove",m,{passive:!0}),Te(r,"dragover",m,{passive:!0}),s&&n!=="movement"&&(Te(r,"touchstart",F,{passive:!0}),Te(r,"touchmove",F,{passive:!0}),o&&Te(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:p}}var sn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(sn||(sn={}));function ah(t,n={}){const s=Fp(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=et({x:0,y:0}),c=(j,N)=>{i.x=j,i.y=N},p=et({x:0,y:0}),u=(j,N)=>{p.x=j,p.y=N},f=P(()=>i.x-p.x),y=P(()=>i.y-p.y),{max:m,abs:F}=Math,_=P(()=>m(F(f.value),F(y.value))>=o),B=le(!1),A=le(!1),k=P(()=>_.value?F(f.value)>F(y.value)?f.value>0?sn.LEFT:sn.RIGHT:y.value>0?sn.UP:sn.DOWN:sn.NONE),D=j=>{var N,M,te;const oe=j.buttons===0,pe=j.buttons===1;return(te=(M=(N=n.pointerTypes)==null?void 0:N.includes(j.pointerType))!=null?M:oe||pe)!=null?te:!0},S=[Te(t,"pointerdown",j=>{var N,M;if(!D(j))return;A.value=!0,(M=(N=s.value)==null?void 0:N.style)==null||M.setProperty("touch-action","none");const te=j.target;te==null||te.setPointerCapture(j.pointerId);const{clientX:oe,clientY:pe}=j;c(oe,pe),u(oe,pe),a==null||a(j)}),Te(t,"pointermove",j=>{if(!D(j)||!A.value)return;const{clientX:N,clientY:M}=j;u(N,M),!B.value&&_.value&&(B.value=!0),B.value&&(l==null||l(j))}),Te(t,"pointerup",j=>{var N,M;D(j)&&(B.value&&(r==null||r(j,k.value)),A.value=!1,B.value=!1,(M=(N=s.value)==null?void 0:N.style)==null||M.setProperty("touch-action","initial"))})],q=()=>S.forEach(j=>j());return{isSwiping:Ht(B),direction:Ht(k),posStart:Ht(i),posEnd:Ht(p),distanceX:f,distanceY:y,stop:q}}let ih=0;function p4(t,n={}){const s=le(!1),{document:o=vp,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++ih}`}=n,i=le(t);let c=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(c=je(i,y=>{f.textContent=y},{immediate:!0}),s.value=!0)},u=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&qr(p),r||Yt(u),{id:a,css:i,unload:u,load:p,isLoaded:Ht(s)}}var ch=Object.defineProperty,ri=Object.getOwnPropertySymbols,ph=Object.prototype.hasOwnProperty,uh=Object.prototype.propertyIsEnumerable,ai=(t,n,s)=>n in t?ch(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,dh=(t,n)=>{for(var s in n||(n={}))ph.call(n,s)&&ai(t,s,n[s]);if(ri)for(var s of ri(n))uh.call(n,s)&&ai(t,s,n[s]);return t};function u4(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,a=le(Xl()+s),i=()=>a.value=Xl()+s,c=r?()=>{i(),r(a.value)}:i,p=l==="requestAnimationFrame"?nh(c,{immediate:o}):p2(c,l,{immediate:o});return n?dh({timestamp:a},p):a}var fh=Object.defineProperty,ii=Object.getOwnPropertySymbols,yh=Object.prototype.hasOwnProperty,hh=Object.prototype.propertyIsEnumerable,ci=(t,n,s)=>n in t?fh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,mh=(t,n)=>{for(var s in n||(n={}))yh.call(n,s)&&ci(t,s,n[s]);if(ii)for(var s of ii(n))hh.call(n,s)&&ci(t,s,n[s]);return t};const Fh={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};mh({linear:Qy},Fh);function Vt(t,n,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:p,deep:u=!1,defaultValue:f}=o,y=Zt(),m=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let F=p;n||(n="modelValue"),F=p||F||`update:${n.toString()}`;const _=A=>i?so(i)?i(A):L2(A):A,B=()=>Yy(t[n])?_(t[n]):f;if(c){const A=B(),k=le(A);return je(()=>t[n],D=>k.value=_(D)),je(k,D=>{(D!==t[n]||u)&&m(F,D)},{deep:u}),k}else return P({get(){return B()},set(A){m(F,A)}})}function d4({window:t=Qe}={}){if(!t)return le(!1);const n=le(t.document.hasFocus());return Te(t,"blur",()=>{n.value=!1}),Te(t,"focus",()=>{n.value=!0}),n}function gh(t={}){const{window:n=Qe,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,a=le(s),i=le(o),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),qr(c),Te("resize",c,{passive:!0}),l&&Te("orientationchange",c,{passive:!0}),{width:a,height:i}}function _h(){return bp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function bp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Bh=typeof Proxy=="function",vh="devtools-plugin:setup",bh="plugin:settings:set";let ls,nr;function wh(){var t;return ls!==void 0||(typeof window<"u"&&window.performance?(ls=!0,nr=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ls=!0,nr=global.perf_hooks.performance):ls=!1),ls}function kh(){return wh()?nr.now():Date.now()}class Eh{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return kh()}},s&&s.on(bh,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:i,args:c,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function xh(t,n){const s=t,o=bp(),l=_h(),r=Bh&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(vh,t,n);else{const a=r?new Eh(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function Ch(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const De=Object.assign;function Cl(t,n){const s={};for(const o in n){const l=n[o];s[o]=Bt(l)?l.map(t):t(l)}return s}const Ks=()=>{},Bt=Array.isArray;function ke(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const Ah=/\/$/,Dh=t=>t.replace(Ah,"");function Al(t,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),l=t(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=Ph(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function Sh(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function pi(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function ui(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&$n(n.matched[o],s.matched[l])&&wp(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function $n(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function wp(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!$h(t[s],n[s]))return!1;return!0}function $h(t,n){return Bt(t)?di(t,n):Bt(n)?di(n,t):t===n}function di(t,n){return Bt(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function Ph(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return ke(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const s=n.split("/"),o=t.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var oo;(function(t){t.pop="pop",t.push="push"})(oo||(oo={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function Th(t){if(!t)if(tn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dh(t)}const Oh=/^[^#]+#/;function Lh(t,n){return t.replace(Oh,"#")+n}function Ih(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mh(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(o&&r){ke(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{ke(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){ke(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=Ih(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function fi(t,n){return(history.state?history.state.position-n:-1)+t}const sr=new Map;function Rh(t,n){sr.set(t,n)}function Nh(t){const n=sr.get(t);return sr.delete(t),n}let Uh=()=>location.protocol+"//"+location.host;function kp(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),pi(c,"")}return pi(s,t)+o+l}function qh(t,n,s,o){let l=[],r=[],a=null;const i=({state:y})=>{const m=kp(t,location),F=s.value,_=n.value;let B=0;if(y){if(s.value=m,n.value=y,a&&a===F){a=null;return}B=_?y.position-_.position:0}else o(m);l.forEach(A=>{A(s.value,F,{delta:B,type:oo.pop,direction:B?B>0?zs.forward:zs.back:zs.unknown})})};function c(){a=s.value}function p(y){l.push(y);const m=()=>{const F=l.indexOf(y);F>-1&&l.splice(F,1)};return r.push(m),m}function u(){const{history:y}=window;y.state&&y.replaceState(De({},y.state,{scroll:hl()}),"")}function f(){for(const y of r)y();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:p,destroy:f}}function yi(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?hl():null}}function jh(t){const{history:n,location:s}=window,o={value:kp(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,p,u){const f=t.indexOf("#"),y=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+c:Uh()+t+c;try{n[u?"replaceState":"pushState"](p,"",y),l.value=p}catch(m){ke("Error with push/replace State",m),s[u?"replace":"assign"](y)}}function a(c,p){const u=De({},n.state,yi(l.value.back,c,l.value.forward,!0),p,{position:l.value.position});r(c,u,!0),o.value=c}function i(c,p){const u=De({},l.value,n.state,{forward:c,scroll:hl()});n.state||ke(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const f=De({},yi(o.value,c,null),{position:u.position+1},p);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function Hh(t){t=Th(t);const n=jh(t),s=qh(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=De({location:"",base:t,go:o,createHref:Lh.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function Vh(t){return typeof t=="string"||t&&typeof t=="object"}function Ep(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xp=Symbol("navigation failure");var hi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hi||(hi={}));const Wh={[1]({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${zh(n)}" via a navigation guard.`},[4]({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function bs(t,n){return De(new Error(Wh[t](n)),{type:t,[xp]:!0},n)}function Gt(t,n){return t instanceof Error&&xp in t&&(n==null||!!(t.type&n))}const Kh=["params","query","hash"];function zh(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const s of Kh)s in t&&(n[s]=t[s]);return JSON.stringify(n,null,2)}const mi="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Zh=/[.+*?^${}()[\]/\\]/g;function Gh(t,n){const s=De({},Yh,n),o=[];let l=s.start?"^":"";const r=[];for(const p of t){const u=p.length?[]:[90];s.strict&&!p.length&&(l+="/");for(let f=0;f<p.length;f++){const y=p[f];let m=40+(s.sensitive?.25:0);if(y.type===0)f||(l+="/"),l+=y.value.replace(Zh,"\\$&"),m+=40;else if(y.type===1){const{value:F,repeatable:_,optional:B,regexp:A}=y;r.push({name:F,repeatable:_,optional:B});const k=A||mi;if(k!==mi){m+=10;try{new RegExp(`(${k})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${F}" (${k}): `+S.message)}}let D=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(D=B&&p.length<2?`(?:/${D})`:"/"+D),B&&(D+="?"),l+=D,m+=20,B&&(m+=-8),_&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}o.push(u)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(p){const u=p.match(a),f={};if(!u)return null;for(let y=1;y<u.length;y++){const m=u[y]||"",F=r[y-1];f[F.name]=m&&F.repeatable?m.split("/"):m}return f}function c(p){let u="",f=!1;for(const y of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of y)if(m.type===0)u+=m.value;else if(m.type===1){const{value:F,repeatable:_,optional:B}=m,A=F in p?p[F]:"";if(Bt(A)&&!_)throw new Error(`Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`);const k=Bt(A)?A.join("/"):A;if(!k)if(B)y.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${F}"`);u+=k}}return u||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function Jh(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Qh(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=Jh(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Fi(o))return 1;if(Fi(l))return-1}return l.length-o.length}function Fi(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const Xh={type:0,value:""},em=/[a-zA-Z0-9_]/;function tm(t){if(!t)return[[]];if(t==="/")return[[Xh]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,p="",u="";function f(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),p="")}function y(){p+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&f(),a()):c===":"?(f(),s=1):y();break;case 4:y(),s=o;break;case 1:c==="("?s=2:em.test(c)?y():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:s=3:u+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),a(),l}function nm(t,n,s){const o=Gh(tm(t.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&ke(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=De(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function sm(t,n){const s=[],o=new Map;n=Bi({strict:!1,end:!0,sensitive:!1},n);function l(u){return o.get(u)}function r(u,f,y){const m=!y,F=om(u);im(F,f),F.aliasOf=y&&y.record;const _=Bi(n,u),B=[F];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of D)B.push(De({},F,{components:y?y.record.components:F.components,path:S,aliasOf:y?y.record:F}))}let A,k;for(const D of B){const{path:S}=D;if(f&&S[0]!=="/"){const q=f.record.path,j=q[q.length-1]==="/"?"":"/";D.path=f.record.path+(S&&j+S)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=nm(D,f,_),f&&S[0]==="/"&&cm(A,f),y?(y.alias.push(A),am(y,A)):(k=k||A,k!==A&&k.alias.push(A),m&&u.name&&!_i(A)&&a(u.name)),F.children){const q=F.children;for(let j=0;j<q.length;j++)r(q[j],A,y&&y.children[j])}y=y||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return k?()=>{a(k)}:Ks}function a(u){if(Ep(u)){const f=o.get(u);f&&(o.delete(u),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(u);f>-1&&(s.splice(f,1),u.record.name&&o.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function i(){return s}function c(u){let f=0;for(;f<s.length&&Qh(u,s[f])>=0&&(u.record.path!==s[f].record.path||!Cp(u,s[f]));)f++;s.splice(f,0,u),u.record.name&&!_i(u)&&o.set(u.record.name,u)}function p(u,f){let y,m={},F,_;if("name"in u&&u.name){if(y=o.get(u.name),!y)throw bs(1,{location:u});{const k=Object.keys(u.params||{}).filter(D=>!y.keys.find(S=>S.name===D));k.length&&ke(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=y.record.name,m=De(gi(f.params,y.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&gi(u.params,y.keys.map(k=>k.name))),F=y.stringify(m)}else if("path"in u)F=u.path,F.startsWith("/")||ke(`The Matcher cannot resolve relative paths but received "${F}". Unless you directly called \`matcher.resolve("${F}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),y=s.find(k=>k.re.test(F)),y&&(m=y.parse(F),_=y.record.name);else{if(y=f.name?o.get(f.name):s.find(k=>k.re.test(f.path)),!y)throw bs(1,{location:u,currentLocation:f});_=y.record.name,m=De({},f.params,u.params),F=y.stringify(m)}const B=[];let A=y;for(;A;)B.unshift(A.record),A=A.parent;return{name:_,path:F,params:m,matched:B,meta:rm(B)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function gi(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function om(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lm(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function _i(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rm(t){return t.reduce((n,s)=>De(n,s.meta),{})}function Bi(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function or(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function am(t,n){for(const s of t.keys)if(!s.optional&&!n.keys.find(or.bind(null,s)))return ke(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!t.keys.find(or.bind(null,s)))return ke(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function im(t,n){n&&n.record.name&&!t.name&&!t.path&&ke(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function cm(t,n){for(const s of n.keys)if(!t.keys.find(or.bind(null,s)))return ke(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function Cp(t,n){return n.children.some(s=>s===t||Cp(t,s))}const Ap=/#/g,pm=/&/g,um=/\//g,dm=/=/g,fm=/\?/g,Dp=/\+/g,ym=/%5B/g,hm=/%5D/g,Sp=/%5E/g,mm=/%60/g,$p=/%7B/g,Fm=/%7C/g,Pp=/%7D/g,gm=/%20/g;function jr(t){return encodeURI(""+t).replace(Fm,"|").replace(ym,"[").replace(hm,"]")}function _m(t){return jr(t).replace($p,"{").replace(Pp,"}").replace(Sp,"^")}function lr(t){return jr(t).replace(Dp,"%2B").replace(gm,"+").replace(Ap,"%23").replace(pm,"%26").replace(mm,"`").replace($p,"{").replace(Pp,"}").replace(Sp,"^")}function Bm(t){return lr(t).replace(dm,"%3D")}function vm(t){return jr(t).replace(Ap,"%23").replace(fm,"%3F")}function bm(t){return t==null?"":vm(t).replace(um,"%2F")}function lo(t){try{return decodeURIComponent(""+t)}catch{ke(`Error decoding "${t}". Using original value`)}return""+t}function wm(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Dp," "),a=r.indexOf("="),i=lo(a<0?r:r.slice(0,a)),c=a<0?null:lo(r.slice(a+1));if(i in n){let p=n[i];Bt(p)||(p=n[i]=[p]),p.push(c)}else n[i]=c}return n}function vi(t){let n="";for(let s in t){const o=t[s];if(s=Bm(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Bt(o)?o.map(r=>r&&lr(r)):[o&&lr(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function km(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Bt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const Em=Symbol("router view location matched"),bi=Symbol("router view depth"),Hr=Symbol("router"),Tp=Symbol("route location"),rr=Symbol("router view location");function $s(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function gn(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(bs(4,{from:s,to:n})):f instanceof Error?i(f):Vh(f)?i(bs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},p=t.call(o&&o.instances[l],n,s,xm(c,n,s));let u=Promise.resolve(p);if(t.length<3&&(u=u.then(c)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)u=u.then(y=>c._called?y:(ke(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){ke(f),i(new Error("Invalid navigation guard"));return}}u.catch(f=>i(f))})}function xm(t,n,s){let o=0;return function(){o++===1&&ke(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function Dl(t,n,s,o){const l=[];for(const r of t){!r.components&&!r.children.length&&ke(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw ke(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){ke(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,ke(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(Cm(i)){const p=(i.__vccOpts||i)[n];p&&l.push(gn(p,s,o,r,a))}else{let c=i();"catch"in c||(ke(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=Ch(p)?p.default:p;r.components[a]=u;const y=(u.__vccOpts||u)[n];return y&&gn(y,s,o,r,a)()}))}}}return l}function Cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wi(t){const n=H(Hr),s=H(Tp),o=P(()=>n.resolve(v(t.to))),l=P(()=>{const{matched:c}=o.value,{length:p}=c,u=c[p-1],f=s.matched;if(!u||!f.length)return-1;const y=f.findIndex($n.bind(null,u));if(y>-1)return y;const m=ki(c[p-2]);return p>1&&ki(u)===m&&f[f.length-1].path!==m?f.findIndex($n.bind(null,c[p-2])):y}),r=P(()=>l.value>-1&&$m(s.params,o.value.params)),a=P(()=>l.value>-1&&l.value===s.matched.length-1&&wp(s.params,o.value.params));function i(c={}){return Sm(c)?n[v(t.replace)?"replace":"push"](v(t.to)).catch(Ks):Promise.resolve()}if(tn){const c=Zt();if(c){const p={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),Es(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=a.value},{flush:"post"})}}return{route:o,href:P(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const Am=Ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wi,setup(t,{slots:n}){const s=et(wi(t)),{options:o}=H(Hr),l=P(()=>({[Ei(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Ei(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:vs("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),Dm=Am;function Sm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function $m(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Bt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function ki(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ei=(t,n,s)=>t??n??s,Pm=Ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){Om();const o=H(rr),l=P(()=>t.route||o.value),r=H(bi,0),a=P(()=>{let p=v(r);const{matched:u}=l.value;let f;for(;(f=u[p])&&!f.components;)p++;return p}),i=P(()=>l.value.matched[a.value]);gt(bi,P(()=>a.value+1)),gt(Em,i),gt(rr,l);const c=le();return je(()=>[c.value,i.value,t.name],([p,u,f],[y,m,F])=>{u&&(u.instances[f]=p,m&&m!==u&&p&&p===y&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!$n(u,m)||!y)&&(u.enterCallbacks[f]||[]).forEach(_=>_(p))},{flush:"post"}),()=>{const p=l.value,u=t.name,f=i.value,y=f&&f.components[u];if(!y)return xi(s.default,{Component:y,route:p});const m=f.props[u],F=m?m===!0?p.params:typeof m=="function"?m(p):m:null,B=vs(y,De({},F,n,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));if(tn&&B.ref){const A={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Bt(B.ref)?B.ref.map(D=>D.i):[B.ref.i]).forEach(D=>{D.__vrv_devtools=A})}return xi(s.default,{Component:B,route:p})||B}}});function xi(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const Tm=Pm;function Om(){const t=Zt(),n=t.parent&&t.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";ke(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ps(t,n){const s=De({},t,{matched:t.matched.map(o=>Hm(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:s}}}function xo(t){return{_custom:{display:t}}}let Lm=0;function Im(t,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=Lm++;xh({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((u,f)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ps(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:u,componentInstance:f})=>{if(f.__vrv_devtools){const y=f.__vrv_devtools;u.tags.push({label:(y.name?`${y.name.toString()}: `:"")+y.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Op})}Bt(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(y=>{let m=Mp,F="";y.isExactActive?(m=Ip,F="This is exactly active"):y.isActive&&(m=Lp,F="This link is active"),u.tags.push({label:y.route.path,textColor:0,tooltip:F,backgroundColor:m})}))}),je(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((u,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:u},groupId:f.meta.__navigationId}})});let a=0;n.beforeEach((u,f)=>{const y={guard:xo("beforeEach"),from:Ps(f,"Current Location during this navigation"),to:Ps(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:u.fullPath,data:y,groupId:u.meta.__navigationId}})}),n.afterEach((u,f,y)=>{const m={guard:xo("afterEach")};y?(m.failure={_custom:{type:Error,readOnly:!0,display:y?y.message:"",tooltip:"Navigation Failure",value:y}},m.status=xo("❌")):m.status=xo("✅"),m.from=Ps(f,"Current Location during this navigation"),m.to=Ps(u,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:l.now(),data:m,logType:y?"warning":"default",groupId:u.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const u=p;let f=s.getRoutes().filter(y=>!y.parent);f.forEach(Up),u.filter&&(f=f.filter(y=>ar(y,u.filter.toLowerCase()))),f.forEach(y=>Np(y,n.currentRoute.value)),u.rootNodes=f.map(Rp)}let p;l.on.getInspectorTree(u=>{p=u,u.app===t&&u.inspectorId===i&&c()}),l.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===i){const y=s.getRoutes().find(m=>m.record.__vd_id===u.nodeId);y&&(u.state={options:Rm(y)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function Mm(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Rm(t){const{record:n}=t,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${Mm(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const Op=15485081,Lp=2450411,Ip=8702998,Nm=2282478,Mp=16486972,Um=6710886;function Rp(t){const n=[],{record:s}=t;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:Nm}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Mp}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Op}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Ip}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Lp}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Um});let o=s.__vd_id;return o==null&&(o=String(qm++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:t.children.map(Rp)}}let qm=0;const jm=/^\/(.*)\/([a-z]*)$/;function Np(t,n){const s=n.matched.length&&$n(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=n.matched.some(o=>$n(o,t.record))),t.children.forEach(o=>Np(o,n))}function Up(t){t.__vd_match=!1,t.children.forEach(Up)}function ar(t,n){const s=String(t.re).match(jm);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return t.children.forEach(a=>ar(a,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const l=t.record.path.toLowerCase(),r=lo(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(a=>ar(a,n))}function Hm(t,n){const s={};for(const o in t)n.includes(o)||(s[o]=t[o]);return s}function Vm(t){const n=sm(t.routes,t),s=t.parseQuery||wm,o=t.stringifyQuery||vi,l=t.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=$s(),a=$s(),i=$s(),c=zt(yn);let p=yn;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cl.bind(null,C=>""+C),f=Cl.bind(null,bm),y=Cl.bind(null,lo);function m(C,Q){let V,ee;return Ep(C)?(V=n.getRecordMatcher(C),ee=Q):ee=C,n.addRoute(ee,V)}function F(C){const Q=n.getRecordMatcher(C);Q?n.removeRoute(Q):ke(`Cannot remove non-existent route "${String(C)}"`)}function _(){return n.getRoutes().map(C=>C.record)}function B(C){return!!n.getRecordMatcher(C)}function A(C,Q){if(Q=De({},Q||c.value),typeof C=="string"){const ce=Al(s,C,Q.path),h=n.resolve({path:ce.path},Q),g=l.createHref(ce.fullPath);return g.startsWith("//")?ke(`Location "${C}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):h.matched.length||ke(`No match found for location with path "${C}"`),De(ce,h,{params:y(h.params),hash:lo(ce.hash),redirectedFrom:void 0,href:g})}let V;if("path"in C)"params"in C&&!("name"in C)&&Object.keys(C.params).length&&ke(`Path "${C.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),V=De({},C,{path:Al(s,C.path,Q.path).path});else{const ce=De({},C.params);for(const h in ce)ce[h]==null&&delete ce[h];V=De({},C,{params:f(C.params)}),Q.params=f(Q.params)}const ee=n.resolve(V,Q),_e=C.hash||"";_e&&!_e.startsWith("#")&&ke(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`),ee.params=u(y(ee.params));const we=Sh(o,De({},C,{hash:_m(_e),path:ee.path})),fe=l.createHref(we);return fe.startsWith("//")?ke(`Location "${C}" resolved to "${fe}". A resolved location cannot start with multiple slashes.`):ee.matched.length||ke(`No match found for location with path "${"path"in C?C.path:C}"`),De({fullPath:we,hash:_e,query:o===vi?km(C.query):C.query||{}},ee,{redirectedFrom:void 0,href:fe})}function k(C){return typeof C=="string"?Al(s,C,c.value.path):De({},C)}function D(C,Q){if(p!==C)return bs(8,{from:Q,to:C})}function S(C){return N(C)}function q(C){return S(De(k(C),{replace:!0}))}function j(C){const Q=C.matched[C.matched.length-1];if(Q&&Q.redirect){const{redirect:V}=Q;let ee=typeof V=="function"?V(C):V;if(typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=k(ee):{path:ee},ee.params={}),!("path"in ee)&&!("name"in ee))throw ke(`Invalid redirect found:
${JSON.stringify(ee,null,2)}
 when navigating to "${C.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return De({query:C.query,hash:C.hash,params:"path"in ee?{}:C.params},ee)}}function N(C,Q){const V=p=A(C),ee=c.value,_e=C.state,we=C.force,fe=C.replace===!0,ce=j(V);if(ce)return N(De(k(ce),{state:typeof ce=="object"?De({},_e,ce.state):_e,force:we,replace:fe}),Q||V);const h=V;h.redirectedFrom=Q;let g;return!we&&ui(o,ee,V)&&(g=bs(16,{to:h,from:ee}),Le(ee,ee,!0,!1)),(g?Promise.resolve(g):te(h,ee)).catch(w=>Gt(w)?Gt(w,2)?w:ge(w):Y(w,h,ee)).then(w=>{if(w){if(Gt(w,2))return ui(o,A(w.to),h)&&Q&&(Q._count=Q._count?Q._count+1:1)>10?(ke(`Detected an infinite redirection in a navigation guard when going from "${ee.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(De({replace:fe},k(w.to),{state:typeof w.to=="object"?De({},_e,w.to.state):_e,force:we}),Q||h)}else w=pe(h,ee,!0,fe,_e);return oe(h,ee,w),w})}function M(C,Q){const V=D(C,Q);return V?Promise.reject(V):Promise.resolve()}function te(C,Q){let V;const[ee,_e,we]=Wm(C,Q);V=Dl(ee.reverse(),"beforeRouteLeave",C,Q);for(const ce of ee)ce.leaveGuards.forEach(h=>{V.push(gn(h,C,Q))});const fe=M.bind(null,C,Q);return V.push(fe),rs(V).then(()=>{V=[];for(const ce of r.list())V.push(gn(ce,C,Q));return V.push(fe),rs(V)}).then(()=>{V=Dl(_e,"beforeRouteUpdate",C,Q);for(const ce of _e)ce.updateGuards.forEach(h=>{V.push(gn(h,C,Q))});return V.push(fe),rs(V)}).then(()=>{V=[];for(const ce of C.matched)if(ce.beforeEnter&&!Q.matched.includes(ce))if(Bt(ce.beforeEnter))for(const h of ce.beforeEnter)V.push(gn(h,C,Q));else V.push(gn(ce.beforeEnter,C,Q));return V.push(fe),rs(V)}).then(()=>(C.matched.forEach(ce=>ce.enterCallbacks={}),V=Dl(we,"beforeRouteEnter",C,Q),V.push(fe),rs(V))).then(()=>{V=[];for(const ce of a.list())V.push(gn(ce,C,Q));return V.push(fe),rs(V)}).catch(ce=>Gt(ce,8)?ce:Promise.reject(ce))}function oe(C,Q,V){for(const ee of i.list())ee(C,Q,V)}function pe(C,Q,V,ee,_e){const we=D(C,Q);if(we)return we;const fe=Q===yn,ce=tn?history.state:{};V&&(ee||fe?l.replace(C.fullPath,De({scroll:fe&&ce&&ce.scroll},_e)):l.push(C.fullPath,_e)),c.value=C,Le(C,Q,V,fe),ge()}let z;function ve(){z||(z=l.listen((C,Q,V)=>{if(!un.listening)return;const ee=A(C),_e=j(ee);if(_e){N(De(_e,{replace:!0}),ee).catch(Ks);return}p=ee;const we=c.value;tn&&Rh(fi(we.fullPath,V.delta),hl()),te(ee,we).catch(fe=>Gt(fe,12)?fe:Gt(fe,2)?(N(fe.to,ee).then(ce=>{Gt(ce,20)&&!V.delta&&V.type===oo.pop&&l.go(-1,!1)}).catch(Ks),Promise.reject()):(V.delta&&l.go(-V.delta,!1),Y(fe,ee,we))).then(fe=>{fe=fe||pe(ee,we,!1),fe&&(V.delta&&!Gt(fe,8)?l.go(-V.delta,!1):V.type===oo.pop&&Gt(fe,20)&&l.go(-1,!1)),oe(ee,we,fe)}).catch(Ks)}))}let Re=$s(),Ae=$s(),Ne;function Y(C,Q,V){ge(C);const ee=Ae.list();return ee.length?ee.forEach(_e=>_e(C,Q,V)):(ke("uncaught error during route navigation:"),console.error(C)),Promise.reject(C)}function ie(){return Ne&&c.value!==yn?Promise.resolve():new Promise((C,Q)=>{Re.add([C,Q])})}function ge(C){return Ne||(Ne=!C,ve(),Re.list().forEach(([Q,V])=>C?V(C):Q()),Re.reset()),C}function Le(C,Q,V,ee){const{scrollBehavior:_e}=t;if(!tn||!_e)return Promise.resolve();const we=!V&&Nh(fi(C.fullPath,0))||(ee||!V)&&history.state&&history.state.scroll||null;return Tt().then(()=>_e(C,Q,we)).then(fe=>fe&&Mh(fe)).catch(fe=>Y(fe,C,Q))}const ht=C=>l.go(C);let tt;const dt=new Set,un={currentRoute:c,listening:!0,addRoute:m,removeRoute:F,hasRoute:B,getRoutes:_,resolve:A,options:t,push:S,replace:q,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Ae.add,isReady:ie,install(C){const Q=this;C.component("RouterLink",Dm),C.component("RouterView",Tm),C.config.globalProperties.$router=Q,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),tn&&!tt&&c.value===yn&&(tt=!0,S(l.location).catch(_e=>{ke("Unexpected error when starting the router:",_e)}));const V={};for(const _e in yn)V[_e]=P(()=>c.value[_e]);C.provide(Hr,Q),C.provide(Tp,et(V)),C.provide(rr,c);const ee=C.unmount;dt.add(C),C.unmount=function(){dt.delete(C),dt.size<1&&(p=yn,z&&z(),z=null,c.value=yn,tt=!1,Ne=!1),ee()},tn&&Im(C,Q,n)}};return un}function rs(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Wm(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(p=>$n(p,i))?o.push(i):s.push(i));const c=t.matched[a];c&&(n.matched.find(p=>$n(p,c))||l.push(c))}return[s,o,l]}const Sl=le(!1),Ys=le(!1),fs=le(!1),Km=le(!0),ir=T2({xs:460,...A2}),Yn=gh(),qp=rh(),zm=P(()=>Yn.height.value-Yn.width.value/kn>180),jp=oh(It?document.body:null),gs=C2(),Ym=P(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=gs.value)==null?void 0:t.tagName)||"")||((n=gs.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Zm=P(()=>{var t;return["BUTTON","A"].includes(((t=gs.value)==null?void 0:t.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const To=Rt("slidev-scale",0),at=Rt("slidev-show-overview",!1),$l=Rt("slidev-presenter-cursor",!0),Ci=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",It?window.innerWidth*.4:100);const Hp=gp(at);function Ai(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function Gm(t){return[-t[0],-t[1]]}function Dt(t,n){return[t[0]+n[0],t[1]+n[1]]}function wt(t,n){return[t[0]-n[0],t[1]-n[1]]}function At(t,n){return[t[0]*n,t[1]*n]}function Jm(t,n){return[t[0]/n,t[1]/n]}function Ts(t){return[t[1],-t[0]]}function Di(t,n){return t[0]*n[0]+t[1]*n[1]}function Qm(t,n){return t[0]===n[0]&&t[1]===n[1]}function Xm(t){return Math.hypot(t[0],t[1])}function eF(t){return t[0]*t[0]+t[1]*t[1]}function Si(t,n){return eF(wt(t,n))}function Vp(t){return Jm(t,Xm(t))}function tF(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function Os(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function cr(t,n,s){return Dt(t,At(wt(n,t),s))}function $i(t,n,s){return Dt(t,At(n,s))}var{min:as,PI:nF}=Math,Pi=.275,Ls=nF+1e-4;function sF(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=Y=>Y,start:i={},end:c={},last:p=!1}=n,{cap:u=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:y=!0,easing:m=Y=>--Y*Y*Y+1}=c;if(t.length===0||s<=0)return[];let F=t[t.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(s,F):i.taper,B=c.taper===!1?0:c.taper===!0?Math.max(s,F):c.taper,A=Math.pow(s*o,2),k=[],D=[],S=t.slice(0,10).reduce((Y,ie)=>{let ge=ie.pressure;if(r){let Le=as(1,ie.distance/s),ht=as(1,1-Le);ge=as(1,Y+(ht-Y)*(Le*Pi))}return(Y+ge)/2},t[0].pressure),q=Ai(s,l,t[t.length-1].pressure,a),j,N=t[0].vector,M=t[0].point,te=M,oe=M,pe=te,z=!1;for(let Y=0;Y<t.length;Y++){let{pressure:ie}=t[Y],{point:ge,vector:Le,distance:ht,runningLength:tt}=t[Y];if(Y<t.length-1&&F-tt<3)continue;if(l){if(r){let we=as(1,ht/s),fe=as(1,1-we);ie=as(1,S+(fe-S)*(we*Pi))}q=Ai(s,l,ie,a)}else q=s/2;j===void 0&&(j=q);let dt=tt<_?f(tt/_):1,un=F-tt<B?m((F-tt)/B):1;q=Math.max(.01,q*Math.min(dt,un));let C=(Y<t.length-1?t[Y+1]:t[Y]).vector,Q=Y<t.length-1?Di(Le,C):1,V=Di(Le,N)<0&&!z,ee=Q!==null&&Q<0;if(V||ee){let we=At(Ts(N),q);for(let fe=1/13,ce=0;ce<=1;ce+=fe)oe=Os(wt(ge,we),ge,Ls*ce),k.push(oe),pe=Os(Dt(ge,we),ge,Ls*-ce),D.push(pe);M=oe,te=pe,ee&&(z=!0);continue}if(z=!1,Y===t.length-1){let we=At(Ts(Le),q);k.push(wt(ge,we)),D.push(Dt(ge,we));continue}let _e=At(Ts(cr(C,Le,Q)),q);oe=wt(ge,_e),(Y<=1||Si(M,oe)>A)&&(k.push(oe),M=oe),pe=Dt(ge,_e),(Y<=1||Si(te,pe)>A)&&(D.push(pe),te=pe),S=ie,N=Le}let ve=t[0].point.slice(0,2),Re=t.length>1?t[t.length-1].point.slice(0,2):Dt(t[0].point,[1,1]),Ae=[],Ne=[];if(t.length===1){if(!(_||B)||p){let Y=$i(ve,Vp(Ts(wt(ve,Re))),-(j||q)),ie=[];for(let ge=1/13,Le=ge;Le<=1;Le+=ge)ie.push(Os(Y,ve,Ls*2*Le));return ie}}else{if(!(_||B&&t.length===1))if(u)for(let ie=1/13,ge=ie;ge<=1;ge+=ie){let Le=Os(D[0],ve,Ls*ge);Ae.push(Le)}else{let ie=wt(k[0],D[0]),ge=At(ie,.5),Le=At(ie,.51);Ae.push(wt(ve,ge),wt(ve,Le),Dt(ve,Le),Dt(ve,ge))}let Y=Ts(Gm(t[t.length-1].vector));if(B||_&&t.length===1)Ne.push(Re);else if(y){let ie=$i(Re,Y,q);for(let ge=1/29,Le=ge;Le<1;Le+=ge)Ne.push(Os(ie,Re,Ls*3*Le))}else Ne.push(Dt(Re,At(Y,q)),Dt(Re,At(Y,q*.99)),wt(Re,At(Y,q*.99)),wt(Re,At(Y,q)))}return k.concat(Ne,D.reverse(),Ae)}function oF(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(t[0])?t:t.map(({x:m,y:F,pressure:_=.5})=>[m,F,_]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let F=1;F<5;F++)i.push(cr(i[0],m,F/4))}i.length===1&&(i=[...i,[...Dt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,u=0,f=c[0],y=i.length-1;for(let m=1;m<i.length;m++){let F=r&&m===y?i[m].slice(0,2):cr(f.point,i[m],a);if(Qm(f.point,F))continue;let _=tF(F,f.point);if(u+=_,m<y&&!p){if(u<l)continue;p=!0}f={point:F,pressure:i[m][2]>=0?i[m][2]:.5,vector:Vp(wt(f.point,F)),distance:_,runningLength:u},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function lF(t,n={}){return sF(oF(t,n),n)}var rF=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>n!==l)}}});function Yo(t,n){return t-n}function aF(t){return t<0?-1:1}function Zo(t){return[Math.abs(t),aF(t)]}function Wp(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var iF=2,nn=iF,xs=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*o,y:(t.pageY-l.top)*o,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:t.pressure}}}createElement(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(nn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},cF=class extends xs{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=lF(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,p]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+p)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},pF=class extends xs{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Zo(t.x-this.start.x),[o,l]=Zo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Yo),[i,c]=[this.start.y,this.start.y+o*l].sort(Yo);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Kp(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var uF=class extends xs{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=Wp(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Kp(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},dF=class extends xs{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Zo(t.x-this.start.x),[o,l]=Zo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Yo),[i,c]=[this.start.y,this.start.y+o*l].sort(Yo);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function fF(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function yF(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=t.x-o,a=t.y-l,r*r+a*a}function hF(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],fF(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function pr(t,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=yF(t[i],t[n],t[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&pr(t,n,a,o,l),l.push(t[a]),s-a>1&&pr(t,a,s,o,l))}function mF(t,n){const s=t.length-1,o=[t[0]];return pr(t,0,s,n,o),o.push(t[s]),o}function Ti(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:hF(t,o),t=mF(t,o),t}var FF=class extends xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Wp();const n=Kp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Ti(this.points,1,!0),this.count=0),this.attr("d",Li(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Li(Ti(this.points,1,!0))),!t.getTotalLength()))}};function gF(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Oi(t,n,s,o){const l=n||t,r=s||t,a=.2,i=gF(l,r),c=i.angle+(o?Math.PI:0),p=i.length*a,u=t.x+Math.cos(c)*p,f=t.y+Math.sin(c)*p;return{x:u,y:f}}function _F(t,n,s){const o=Oi(s[n-1],s[n-2],t),l=Oi(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(nn)},${o.y.toFixed(nn)} ${l.x.toFixed(nn)},${l.y.toFixed(nn)} ${t.x.toFixed(nn)},${t.y.toFixed(nn)}`}function Li(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(nn)},${s.y.toFixed(nn)}`:`${n} ${_F(s,o,l)}`,"")}var BF=class extends xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),p=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,i=t.y2,c=n.y1,p=n.y2,u=(s-o)*(c-p)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*p-c*r),y=(s*i-a*o)*(c-p)-(a-i)*(l*p-c*r),m=(F,_,B)=>F>=_&&F<=B?!0:F>=B&&F<=_;if(u===0)return!1;{const F={x:f/u,y:y/u};return m(F.x,s,o)&&m(F.y,a,i)&&m(F.x,l,r)&&m(F.y,c,p)}}};function vF(t){return{draw:new FF(t),stylus:new cF(t),line:new uF(t),rectangle:new dF(t),ellipse:new pF(t),eraseLine:new BF(t)}}var bF=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=rF(),this._models=vF(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function wF(t){return new bF(t)}const ur=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Wt=Rt("slidev-drawing-enabled",!1),f4=Rt("slidev-drawing-pinned",!1),kF=le(!1),EF=le(!1),xF=le(!1),ro=le(!1),qn=t2(Rt("slidev-drawing-brush",{color:ur[0],size:4,mode:"stylus"})),Ii=le("stylus"),zp=P(()=>Pe.drawings.syncAll||$t.value);let ao=!1;const Is=P({get(){return Ii.value},set(t){Ii.value=t,t==="arrow"?(qn.mode="line",qn.arrowEnd=!0):(qn.mode=t,qn.arrowEnd=!1)}}),CF=et({brush:qn,acceptsInputTypes:P(()=>Wt.value&&(!Pe.drawings.presenterOnly||$t.value)?void 0:["pen"]),coordinateTransform:!1}),ut=wr(wF(CF));function AF(){ut.clear(),zp.value&&yp(Ge.value,"")}function Vr(){var t;EF.value=ut.canRedo(),kF.value=ut.canUndo(),xF.value=!!((t=ut.el)!=null&&t.children.length)}function DF(t){ao=!0;const n=Ko[t||Ge.value];n!=null?ut.load(n):ut.clear(),Vr(),ao=!1}ut.on("changed",()=>{if(Vr(),!ao){const t=ut.dump(),n=Ge.value;(Ko[n]||"")!==t&&zp.value&&yp(n,ut.dump())}});Wy(t=>{ao=!0,t[Ge.value]!=null&&ut.load(t[Ge.value]||""),ao=!1,Vr()});Tt(()=>{je(Ge,()=>{ut.mounted&&DF()},{immediate:!0})});ut.on("start",()=>ro.value=!0);ut.on("end",()=>ro.value=!1);window.addEventListener("keydown",t=>{if(!Wt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?ut.redo():ut.undo():t.code==="Escape"?Wt.value=!1:t.code==="KeyL"&&n?Is.value="line":t.code==="KeyA"&&n?Is.value="arrow":t.code==="KeyS"&&n?Is.value="stylus":t.code==="KeyR"&&n?Is.value="rectangle":t.code==="KeyE"&&n?Is.value="ellipse":t.code==="KeyC"&&n?AF():t.code.startsWith("Digit")&&n&&+t.code[5]<=ur.length?qn.color=ur[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function Ye(...t){return P(()=>t.every(n=>pt(n)))}function mt(t){return P(()=>!pt(t))}const Mi=V2(),Pl=Rt("slidev-color-schema","auto"),dr=P(()=>Pe.colorSchema!=="auto"),Wr=P({get(){return dr.value?Pe.colorSchema==="dark":Pl.value==="auto"?Mi.value:Pl.value==="dark"},set(t){dr.value||(Pl.value=t===Mi.value?"auto":t?"dark":"light")}}),Yp=gp(Wr);It&&je(Wr,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const Oo=le(1),Lo=P(()=>ze.length-1),_t=le(0),Kr=le(0);function SF(){_t.value>Oo.value&&(_t.value-=1)}function $F(){_t.value<Lo.value&&(_t.value+=1)}function PF(){if(_t.value>Oo.value){let t=_t.value-Kr.value;t<Oo.value&&(t=Oo.value),_t.value=t}}function TF(){if(_t.value<Lo.value){let t=_t.value+Kr.value;t>Lo.value&&(t=Lo.value),_t.value=t}}function OF(){const{escape:t,space:n,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:p,o:u}=qp;let f=[{name:"next_space",key:Ye(n,mt(s)),fn:Zn,autoRepeat:!0},{name:"prev_space",key:Ye(n,s),fn:Gn,autoRepeat:!0},{name:"next_right",key:Ye(l,mt(s),mt(at)),fn:Zn,autoRepeat:!0},{name:"prev_left",key:Ye(o,mt(s),mt(at)),fn:Gn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Zn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Gn,autoRepeat:!0},{name:"next_down",key:Ye(a,mt(at)),fn:Qo,autoRepeat:!0},{name:"prev_up",key:Ye(r,mt(at)),fn:()=>Xo(!1),autoRepeat:!0},{name:"next_shift",key:Ye(l,s),fn:Qo,autoRepeat:!0},{name:"prev_shift",key:Ye(o,s),fn:()=>Xo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,mt(Wt)),fn:Yp},{name:"toggle_overview",key:Ye(u,mt(Wt)),fn:Hp},{name:"hide_overview",key:Ye(t,mt(Wt)),fn:()=>at.value=!1},{name:"goto",key:Ye(p,mt(Wt)),fn:()=>fs.value=!fs.value},{name:"next_overview",key:Ye(l,at),fn:$F},{name:"prev_overview",key:Ye(o,at),fn:SF},{name:"up_overview",key:Ye(r,at),fn:PF},{name:"down_overview",key:Ye(a,at),fn:TF},{name:"goto_from_overview",key:Ye(i,at),fn:()=>{ks(_t.value),at.value=!1}}];const y=new Set(f.map(F=>F.name));if(f.filter(F=>F.name&&y.has(F.name)).length===0){const F=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(F),console.warn(F)}return f}const Zp=Ye(mt(Ym),mt(Zm),Km);function LF(t,n,s=!1){typeof t=="string"&&(t=qp[t]);const o=Ye(t,Zp);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return je(o,a,{flush:"sync"})}function IF(t,n){return x2(t,s=>{Zp.value&&(s.repeat||n())})}function MF(){const t=OF();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&LF(s.key,s.fn,s.autoRepeat)}),IF("f",()=>jp.toggle())}const RF={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NF=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),UF=[NF];function qF(t,n){return b(),Z("svg",RF,UF)}const jF={name:"carbon-close",render:qF};function zr(t,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=t==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const HF=Ee({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;H(G);const s=le(),o=sh(s),l=P(()=>n.width?n.width:o.width.value),r=P(()=>n.width?n.width/kn:o.height.value);n.width&&Es(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=P(()=>l.value/r.value),i=P(()=>n.scale&&!ws.value?n.scale:a.value<kn?l.value/En:r.value*kn/En),c=P(()=>({height:`${Nr}px`,width:`${En}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=P(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return gt(dp,i),(u,f)=>(b(),Z("div",{id:"slide-container",ref_key:"root",ref:s,class:We(v(p))},[e("div",{id:"slide-content",style:st(v(c))},[Ot(u.$slots,"default")],4),Ot(u.$slots,"controls")],2))}});const J=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s},Gp=J(HF,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Yr=Ee({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=Vt(t,"clicks",n),o=Vt(t,"clicksElements",n),l=Vt(t,"clicksDisabled",n),r=Vt(t,"clicksOrderMap",n);o.value.length=0,gt(Ty,t.route),gt(Oy,t.context),gt(cp,s),gt(up,l),gt(pp,o),gt(Py,r)},render(){var t,n;return this.$props.is?vs(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),VF=["innerHTML"],WF=Ee({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return H(G),(n,s)=>v(Ko)[t.page]?(b(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Ko)[t.page]},null,8,VF)):Fe("v-if",!0)}}),Jp=J(WF,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),KF=Object.freeze(Object.defineProperty({__proto__:null,default:Jp},Symbol.toStringTag,{value:"Module"})),zF={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},YF=["onClick"],ZF=Ee({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const s=t;H(G);const o=Vt(s,"modelValue",n);function l(){o.value=!1}function r(m){ks(m),l()}function a(m){return m===_t.value}const i=ir.smaller("xs"),c=ir.smaller("sm"),p=4*16*2,u=2*16,f=P(()=>i.value?Yn.width.value-p:c.value?(Yn.width.value-p-u)/2:300),y=P(()=>Math.floor((Yn.width.value-p)/(f.value+u)));return Es(()=>{_t.value=Ge.value,Kr.value=y.value}),(m,F)=>{const _=jF;return b(),Z(Se,null,[ul(e("div",zF,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${v(f)}px,1fr))`)},[(b(!0),Z(Se,null,ho(v(ze).slice(0,-1),(B,A)=>(b(),Z("div",{key:B.path,class:"relative"},[e("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(A+1),"border-gray-400":!a(A+1)}]),style:st(v(Ur)),onClick:k=>r(+B.path)},[(b(),K(Gp,{key:B.path,width:v(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:x(()=>[E(v(Yr),{is:B==null?void 0:B.component,"clicks-disabled":!0,class:We(v(zr)(B)),route:B,context:"overview"},null,8,["is","class","route"]),E(Jp,{page:+B.path},null,8,["page"])]),_:2},1032,["width"]))],14,YF),e("div",{class:"absolute top-0 opacity-50",style:st(`left: ${v(f)+5}px`)},ln(A+1),5)]))),128))],4)],512),[[ip,v(o)]]),v(o)?(b(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[E(_)])):Fe("v-if",!0)],64)}}});const GF=J(ZF,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),JF="/math201/slides/python04/assets/logo-b72bde5d.png",QF={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},XF=Ee({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;H(G);const o=Vt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(b(),K(Oc,null,[v(o)?(b(),Z("div",QF,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Ot(r.$slots,"default")],2)])):Fe("v-if",!0)],1024))}}),e1=J(XF,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Modal.vue"]]),t1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},n1=["innerHTML"],s1=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:JF,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),d("dev ")])])],-1),o1=Ee({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;H(G);const o=Vt(s,"modelValue",n),l=P(()=>typeof Pe.info=="string");return(r,a)=>(b(),K(e1,{modelValue:v(o),"onUpdate:modelValue":a[0]||(a[0]=i=>xe(o)?o.value=i:null),class:"px-6 py-4"},{default:x(()=>[e("div",t1,[v(l)?(b(),Z("div",{key:0,class:"mb-4",innerHTML:v(Pe).info},null,8,n1)):Fe("v-if",!0),s1])]),_:1},8,["modelValue"]))}});const l1=J(o1,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/InfoDialog.vue"]]),r1=["disabled","onKeydown"],a1=Ee({__name:"Goto",setup(t){H(G);const n=le(),s=le(""),o=P(()=>{if(s.value.startsWith("/"))return!!ze.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=pu.value}});function l(){o.value&&(s.value.startsWith("/")?ks(s.value.substring(1)):ks(+s.value)),r()}function r(){fs.value=!1}return je(fs,async a=>{var i,c;a?(await Tt(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),je(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(b(),Z("div",{id:"slidev-goto-dialog",class:We(["fixed right-5 bg-main transform transition-all",v(fs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ul(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!v(fs),class:We(["outline-none bg-transparent",{"text-red-400":!v(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Ha(l,["enter"]),Ha(r,["escape"])],onBlur:r},null,42,r1),[[ky,s.value]])],2))}}),i1=J(a1,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Goto.vue"]]),c1=Ee({__name:"Controls",setup(t){H(G);const n=zt(),s=zt();return(o,l)=>(b(),Z(Se,null,[E(GF,{modelValue:v(at),"onUpdate:modelValue":l[0]||(l[0]=r=>xe(at)?at.value=r:null)},null,8,["modelValue"]),E(i1),v(n)?(b(),K(v(n),{key:0})):Fe("v-if",!0),v(s)?(b(),K(v(s),{key:1,modelValue:v(Sl),"onUpdate:modelValue":l[1]||(l[1]=r=>xe(Sl)?Sl.value=r:null)},null,8,["modelValue"])):Fe("v-if",!0),v(Pe).info?(b(),K(l1,{key:2,modelValue:v(Ys),"onUpdate:modelValue":l[2]||(l[2]=r=>xe(Ys)?Ys.value=r:null)},null,8,["modelValue"])):Fe("v-if",!0)],64))}}),p1=J(c1,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Controls.vue"]]),u1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),f1=[d1];function y1(t,n){return b(),Z("svg",u1,f1)}const h1={name:"carbon-settings-adjust",render:y1},m1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F1=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),g1=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),_1=[F1,g1];function B1(t,n){return b(),Z("svg",m1,_1)}const v1={name:"carbon-information",render:B1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w1=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),k1=[w1];function E1(t,n){return b(),Z("svg",b1,k1)}const x1={name:"carbon-download",render:E1},C1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A1=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),D1=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),S1=[A1,D1];function $1(t,n){return b(),Z("svg",C1,S1)}const P1={name:"carbon-user-speaker",render:$1},T1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O1=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),L1=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),I1=[O1,L1];function M1(t,n){return b(),Z("svg",T1,I1)}const R1={name:"carbon-presentation-file",render:M1},N1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U1=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),q1=[U1];function j1(t,n){return b(),Z("svg",N1,q1)}const H1={name:"carbon-pen",render:j1},V1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},W1=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),K1=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),z1=[W1,K1];function Y1(t,n){return b(),Z("svg",V1,z1)}const Z1={name:"ph-cursor-duotone",render:Y1},G1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},J1=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Q1=[J1];function X1(t,n){return b(),Z("svg",G1,Q1)}const Qp={name:"ph-cursor-fill",render:X1},eg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tg=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ng=[tg];function sg(t,n){return b(),Z("svg",eg,ng)}const og={name:"carbon-sun",render:sg},lg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rg=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),ag=[rg];function ig(t,n){return b(),Z("svg",lg,ag)}const cg={name:"carbon-moon",render:ig},pg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ug=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),dg=[ug];function fg(t,n){return b(),Z("svg",pg,dg)}const yg={name:"carbon-apps",render:fg},hg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mg=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Fg=[mg];function gg(t,n){return b(),Z("svg",hg,Fg)}const _g={name:"carbon-arrow-right",render:gg},Bg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vg=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),bg=[vg];function wg(t,n){return b(),Z("svg",Bg,bg)}const kg={name:"carbon-arrow-left",render:wg},Eg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xg=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Cg=[xg];function Ag(t,n){return b(),Z("svg",Eg,Cg)}const Dg={name:"carbon-maximize",render:Ag},Sg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$g=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Pg=[$g];function Tg(t,n){return b(),Z("svg",Sg,Pg)}const Og={name:"carbon-minimize",render:Tg},Lg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ig=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Mg=[Ig];function Rg(t,n){return b(),Z("svg",Lg,Mg)}const Ng={name:"carbon-checkmark",render:Rg},Ug={class:"select-list"},qg={class:"title"},jg={class:"items"},Hg=["onClick"],Vg=Ee({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;H(G);const o=Vt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=Ng;return b(),Z("div",Ug,[e("div",qg,ln(t.title),1),e("div",jg,[(b(!0),Z(Se,null,ho(t.items,i=>(b(),Z("div",{key:i.value,class:We(["item",{active:v(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[E(a,{class:We(["text-green-500",{"opacity-0":v(o)!==i.value}])},null,8,["class"]),d(" "+ln(i.display||i.value),1)],10,Hg))),128))])])}}});const Wg=J(Vg,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/SelectList.vue"]]),Kg={class:"text-sm"},zg=Ee({__name:"Settings",setup(t){H(G);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(b(),Z("div",Kg,[E(Wg,{modelValue:v(To),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(To)?To.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Yg=J(zg,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Settings.vue"]]),Zg={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Gg=Ee({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;H(G);const o=Vt(s,"modelValue",n,{passive:!0}),l=le();return k2(l,()=>{o.value=!1}),(r,a)=>(b(),Z("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:We({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>o.value=!v(o))},[Ot(r.$slots,"button",{class:We({disabled:t.disabled})})],2),(b(),K(Oc,null,[v(o)?(b(),Z("div",Zg,[Ot(r.$slots,"menu")])):Fe("v-if",!0)],1024))],512))}}),Jg=J(Gg,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/MenuButton.vue"]]),Qg={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Xg={__name:"VerticalDivider",setup(t){return H(G),(n,s)=>(b(),Z("div",Qg))}},Co=J(Xg,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),e_={render(){return[]}},t_={class:"slidev-icon-btn"},n_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},s_={class:"my-auto"},o_={class:"opacity-50"},l_=Ee({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;H(G);const s=ir.smaller("md"),{isFullscreen:o,toggle:l}=jp,r=P(()=>yr.value?`?password=${yr.value}`:""),a=P(()=>`/presenter/${Ge.value}${r.value}`),i=P(()=>`/${Ge.value}${r.value}`),c=le(),p=()=>{c.value&&gs.value&&c.value.contains(gs.value)&&gs.value.blur()},u=P(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=zt(),y=zt();return xn(()=>import("./DrawingControls-42364e9f.js"),[]).then(m=>y.value=m.default),(m,F)=>{const _=Og,B=Dg,A=kg,k=_g,D=yg,S=cg,q=og,j=Qp,N=Z1,M=H1,te=R1,oe=tf("RouterLink"),pe=P1,z=x1,ve=v1,Re=h1;return b(),Z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:p},[v(en)?Fe("v-if",!0):(b(),Z("button",{key:0,class:"slidev-icon-btn",onClick:F[0]||(F[0]=(...Ae)=>v(l)&&v(l)(...Ae))},[v(o)?(b(),K(_,{key:0})):(b(),K(B,{key:1}))])),e("button",{class:We(["slidev-icon-btn",{disabled:!v(Ow)}]),onClick:F[1]||(F[1]=(...Ae)=>v(Gn)&&v(Gn)(...Ae))},[E(A)],2),e("button",{class:We(["slidev-icon-btn",{disabled:!v(Tw)}]),title:"Next",onClick:F[2]||(F[2]=(...Ae)=>v(Zn)&&v(Zn)(...Ae))},[E(k)],2),v(en)?Fe("v-if",!0):(b(),Z("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:F[3]||(F[3]=Ae=>v(Hp)())},[E(D)])),v(dr)?Fe("v-if",!0):(b(),Z("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:F[4]||(F[4]=Ae=>v(Yp)())},[v(Wr)?(b(),K(S,{key:0})):(b(),K(q,{key:1}))])),E(Co),v(en)?Fe("v-if",!0):(b(),Z(Se,{key:3},[!v($t)&&!v(s)&&v(f)?(b(),Z(Se,{key:0},[E(v(f)),E(Co)],64)):Fe("v-if",!0),v($t)?(b(),Z("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:F[5]||(F[5]=Ae=>$l.value=!v($l))},[v($l)?(b(),K(j,{key:0})):(b(),K(N,{key:1,class:"opacity-50"}))])):Fe("v-if",!0)],64)),(!v(Pe).drawings.presenterOnly||v($t))&&!v(en)?(b(),Z(Se,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:F[6]||(F[6]=Ae=>Wt.value=!v(Wt))},[E(M),v(Wt)?(b(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:v(qn).color})},null,4)):Fe("v-if",!0)]),E(Co)],64)):Fe("v-if",!0),v(en)?Fe("v-if",!0):(b(),Z(Se,{key:5},[v($t)?(b(),K(oe,{key:0,to:v(i),class:"slidev-icon-btn",title:"Play Mode"},{default:x(()=>[E(te)]),_:1},8,["to"])):Fe("v-if",!0),v(Dw)?(b(),K(oe,{key:1,to:v(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:x(()=>[E(pe)]),_:1},8,["to"])):Fe("v-if",!0),Fe("v-if",!0)],64)),(b(),Z(Se,{key:6},[v(Pe).download?(b(),Z("button",{key:0,class:"slidev-icon-btn",onClick:F[8]||(F[8]=(...Ae)=>v(Wi)&&v(Wi)(...Ae))},[E(z)])):Fe("v-if",!0)],64)),!v($t)&&v(Pe).info&&!v(en)?(b(),Z("button",{key:7,class:"slidev-icon-btn",onClick:F[9]||(F[9]=Ae=>Ys.value=!v(Ys))},[E(ve)])):Fe("v-if",!0),!v($t)&&!v(en)?(b(),K(Jg,{key:8},{button:x(()=>[e("button",t_,[E(Re)])]),menu:x(()=>[E(Yg)]),_:1})):Fe("v-if",!0),v(en)?Fe("v-if",!0):(b(),K(Co,{key:9})),e("div",n_,[e("div",s_,[d(ln(v(Ge))+" ",1),e("span",o_,"/ "+ln(v(pu)),1)])]),E(v(e_))],34)],512)}}}),r_=J(l_,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/NavControls.vue"]]),Xp={render(){return[]}},eu={render(){return[]}},a_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},i_=Ee({__name:"PresenterMouse",setup(t){return H(G),(n,s)=>{const o=Qp;return v(xl).cursor?(b(),Z("div",a_,[E(o,{class:"absolute",style:st({left:`${v(xl).cursor.x}%`,top:`${v(xl).cursor.y}%`})},null,8,["style"])])):Fe("v-if",!0)}}}),c_=J(i_,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),p_=Ee({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){H(G),je(it,()=>{var o,l;(o=it.value)!=null&&o.meta&&it.value.meta.preload!==!1&&(it.value.meta.__preloaded=!0),(l=Tl.value)!=null&&l.meta&&Tl.value.meta.preload!==!1&&(Tl.value.meta.__preloaded=!0)},{immediate:!0});const n=zt();xn(()=>import("./DrawingLayer-c082afe7.js"),[]).then(o=>n.value=o.default);const s=P(()=>ze.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===it.value}));return(o,l)=>(b(),Z(Se,null,[Fe(" Global Bottom "),E(v(eu)),Fe(" Slides "),E(gy,X(v(Mw),{id:"slideshow",tag:"div"}),{default:x(()=>[(b(!0),Z(Se,null,ho(v(s),r=>{var a;return ul((b(),K(v(Yr),{key:r.path,is:r==null?void 0:r.component,clicks:r===v(it)?v(Xn):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:We(v(zr)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ip,r===v(it)]])}),128))]),_:1},16),Fe(" Global Top "),E(v(Xp)),v(n)?(b(),K(v(n),{key:0})):Fe("v-if",!0),v($t)?Fe("v-if",!0):(b(),K(c_,{key:1}))],64))}});const u_=J(p_,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/SlidesShow.vue"]]),d_=Ee({__name:"PrintStyle",setup(t){H(G);function n(s,{slots:o}){if(o.default)return vs("style",o.default())}return(s,o)=>(b(),K(n,null,{default:x(()=>[d(" @page { size: "+ln(v(En))+"px "+ln(v(Nr))+"px; margin: 0px; } ",1)]),_:1}))}}),tu=J(d_,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/PrintStyle.vue"]]),f_=Ee({__name:"Play",setup(t){H(G),MF();const n=le();function s(r){var a;Ci.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Zn():Gn())}Rw(n);const o=P(()=>zm.value||Ci.value);zt();const l=zt();return xn(()=>import("./DrawingControls-42364e9f.js"),[]).then(r=>l.value=r.default),(r,a)=>(b(),Z(Se,null,[v(ws)?(b(),K(tu,{key:0})):Fe("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:st(v(Ur))},[E(Gp,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:v(ws)?v(Yn).width.value:void 0,scale:v(To),onPointerdown:s},{default:x(()=>[E(u_,{context:"slide"})]),controls:x(()=>[e("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(o)?"opacity-100 right-0":"opacity-0 p-2",v(ro)?"pointer-events-none":""]])},[E(r_,{class:"m-auto",persist:v(o)},null,8,["persist"])],2),!v(Pe).drawings.presenterOnly&&!v(en)&&v(l)?(b(),K(v(l),{key:0,class:"ml-0"})):Fe("v-if",!0)]),_:1},8,["style","width","scale"]),Fe("v-if",!0)],4),E(p1)],64))}}),y_=J(f_,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function nu(t){return typeof t>"u"||t===null}function h_(t){return typeof t=="object"&&t!==null}function m_(t){return Array.isArray(t)?t:nu(t)?[]:[t]}function F_(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function g_(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function __(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var B_=nu,v_=h_,b_=m_,w_=g_,k_=__,E_=F_,Zr={isNothing:B_,isObject:v_,toArray:b_,repeat:w_,isNegativeZero:k_,extend:E_};function su(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function io(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=su(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}io.prototype=Object.create(Error.prototype);io.prototype.constructor=io;io.prototype.toString=function(n){return this.name+": "+su(this,n)};var Nn=io,x_=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],C_=["scalar","sequence","mapping"];function A_(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function D_(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(x_.indexOf(s)===-1)throw new Nn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=A_(n.styleAliases||null),C_.indexOf(this.kind)===-1)throw new Nn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var ot=D_;function Ri(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function S_(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function fr(t){return this.extend(t)}fr.prototype.extend=function(n){var s=[],o=[];if(n instanceof ot)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new Nn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof ot))throw new Nn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Nn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Nn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof ot))throw new Nn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(fr.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ri(l,"implicit"),l.compiledExplicit=Ri(l,"explicit"),l.compiledTypeMap=S_(l.compiledImplicit,l.compiledExplicit),l};var $_=fr,P_=new ot("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),T_=new ot("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),O_=new ot("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),L_=new $_({explicit:[P_,T_,O_]});function I_(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function M_(){return null}function R_(t){return t===null}var N_=new ot("tag:yaml.org,2002:null",{kind:"scalar",resolve:I_,construct:M_,predicate:R_,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function U_(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function q_(t){return t==="true"||t==="True"||t==="TRUE"}function j_(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var H_=new ot("tag:yaml.org,2002:bool",{kind:"scalar",resolve:U_,construct:q_,predicate:j_,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function V_(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function W_(t){return 48<=t&&t<=55}function K_(t){return 48<=t&&t<=57}function z_(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!V_(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!W_(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!K_(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function Y_(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function Z_(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Zr.isNegativeZero(t)}var G_=new ot("tag:yaml.org,2002:int",{kind:"scalar",resolve:z_,construct:Y_,predicate:Z_,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),J_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Q_(t){return!(t===null||!J_.test(t)||t[t.length-1]==="_")}function X_(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var e0=/^[-+]?[0-9]+e/;function t0(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Zr.isNegativeZero(t))return"-0.0";return s=t.toString(10),e0.test(s)?s.replace("e",".e"):s}function n0(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Zr.isNegativeZero(t))}var s0=new ot("tag:yaml.org,2002:float",{kind:"scalar",resolve:Q_,construct:X_,predicate:n0,represent:t0,defaultStyle:"lowercase"}),o0=L_.extend({implicit:[N_,H_,G_,s0]}),l0=o0,ou=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),lu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r0(t){return t===null?!1:ou.exec(t)!==null||lu.exec(t)!==null}function a0(t){var n,s,o,l,r,a,i,c=0,p=null,u,f,y;if(n=ou.exec(t),n===null&&(n=lu.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(u=+n[10],f=+(n[11]||0),p=(u*60+f)*6e4,n[9]==="-"&&(p=-p)),y=new Date(Date.UTC(s,o,l,r,a,i,c)),p&&y.setTime(y.getTime()-p),y}function i0(t){return t.toISOString()}var c0=new ot("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r0,construct:a0,instanceOf:Date,represent:i0});function p0(t){return t==="<<"||t===null}var u0=new ot("tag:yaml.org,2002:merge",{kind:"scalar",resolve:p0}),Gr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function d0(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=Gr;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function f0(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=Gr,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function y0(t){var n="",s=0,o,l,r=t.length,a=Gr;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function h0(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var m0=new ot("tag:yaml.org,2002:binary",{kind:"scalar",resolve:d0,construct:f0,predicate:h0,represent:y0}),F0=Object.prototype.hasOwnProperty,g0=Object.prototype.toString;function _0(t){if(t===null)return!0;var n=[],s,o,l,r,a,i=t;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,g0.call(l)!=="[object Object]")return!1;for(r in l)if(F0.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function B0(t){return t!==null?t:[]}var v0=new ot("tag:yaml.org,2002:omap",{kind:"sequence",resolve:_0,construct:B0}),b0=Object.prototype.toString;function w0(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],b0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function k0(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var E0=new ot("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:w0,construct:k0}),x0=Object.prototype.hasOwnProperty;function C0(t){if(t===null)return!0;var n,s=t;for(n in s)if(x0.call(s,n)&&s[n]!==null)return!1;return!0}function A0(t){return t!==null?t:{}}var D0=new ot("tag:yaml.org,2002:set",{kind:"mapping",resolve:C0,construct:A0});l0.extend({implicit:[c0,u0],explicit:[m0,v0,E0,D0]});function Ni(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var S0=new Array(256),$0=new Array(256);for(var is=0;is<256;is++)S0[is]=Ni(is)?1:0,$0[is]=Ni(is);function P0(t){return Array.from(new Set(t))}function Ui(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function ru(t,n){if(!n||n==="all"||n==="*")return Ui(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Ui(+l,r?+r+1:t+1))}return P0(s).filter(o=>o<=t).sort((o,l)=>o-l)}function T0(t){const n=P(()=>t.value.path),s=P(()=>ze.length-1),o=P(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=P(()=>Jr(o.value)),r=P(()=>ze.find(y=>y.path===`${o.value}`)),a=P(()=>{var y,m,F;return(F=(m=(y=r.value)==null?void 0:y.meta)==null?void 0:m.slide)==null?void 0:F.id}),i=P(()=>{var y,m;return((m=(y=r.value)==null?void 0:y.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=P(()=>ze.find(y=>y.path===`${Math.min(ze.length,o.value+1)}`)),p=P(()=>ze.filter(y=>{var m,F;return(F=(m=y.meta)==null?void 0:m.slide)==null?void 0:F.title}).reduce((y,m)=>(Qr(y,m),y),[])),u=P(()=>Xr(p.value,r.value)),f=P(()=>ea(u.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:u,tree:f}}function O0(t,n,s){const o=le(0);Tt(()=>{Cn.afterEach(async()=>{await Tt(),o.value+=1})});const l=P(()=>{var c,p;return o.value,((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=P(()=>{var c,p;return+(((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.clicks)??l.value.length)}),a=P(()=>s.value<ze.length-1||t.value<r.value),i=P(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const L0=["id"],I0=Ee({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=Vt(s,"clicksElements",n),l=P(()=>({height:`${Nr}px`,width:`${En}px`})),r=zt();xn(()=>Promise.resolve().then(()=>KF),void 0).then(p=>r.value=p.default);const a=P(()=>s.clicks),i=O0(a,s.nav.currentRoute,s.nav.currentPage),c=P(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return gt(G,et({nav:{...s.nav,...i},configs:Pe,themeConfigs:P(()=>Pe.themeConfig)})),(p,u)=>{var f;return b(),Z("div",{id:v(c),class:"print-slide-container",style:st(v(l))},[E(v(eu)),E(v(Yr),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":v(o),"onUpdate:clicksElements":u[0]||(u[0]=y=>xe(o)?o.value=y:null),clicks:v(a),"clicks-disabled":!1,class:We(v(zr)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),v(r)?(b(),K(v(r),{key:0,page:+t.route.path},null,8,["page"])):Fe("v-if",!0),E(v(Xp))],12,L0)}}}),qi=J(I0,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),M0=Ee({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const n=t;H(G);const s=et(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=P(()=>n.route),l=T0(o);return(a,i)=>(b(),Z(Se,null,[E(qi,{"clicks-elements":s,"onUpdate:clicksElements":i[0]||(i[0]=c=>s=c),clicks:0,nav:v(l),route:v(o)},null,8,["clicks-elements","nav","route"]),v(cu)?Fe("v-if",!0):(b(!0),Z(Se,{key:0},ho(s.length,c=>(b(),K(qi,{key:c,clicks:c,nav:v(l),route:v(o)},null,8,["clicks","nav","route"]))),128))],64))}}),R0=J(M0,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/PrintSlide.vue"]]),N0={id:"print-content"},U0=Ee({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;H(G);const s=P(()=>n.width),o=P(()=>n.width/kn),l=P(()=>s.value/o.value),r=P(()=>l.value<kn?s.value/En:o.value*kn/En);let a=ze.slice(0,-1);Mt.value.query.range&&(a=ru(a.length,Mt.value.query.range).map(p=>a[p-1]));const i=P(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return gt(dp,r),(c,p)=>(b(),Z("div",{id:"print-container",class:We(v(i))},[e("div",N0,[(b(!0),Z(Se,null,ho(v(a),u=>(b(),K(R0,{key:u.path,route:u},null,8,["route"]))),128))]),Ot(c.$slots,"controls")],2))}});const q0=J(U0,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/PrintContainer.vue"]]),j0=Ee({__name:"Print",setup(t){return H(G),Es(()=>{ws?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(b(),Z(Se,null,[v(ws)?(b(),K(tu,{key:0})):Fe("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:st(v(Ur))},[E(q0,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:v(Yn).width.value},null,8,["style","width"])],4)],64))}});const H0=J(j0,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/internals/Print.vue"]]);const V0={class:"slidev-layout end"},W0={__name:"end",setup(t){return H(G),(n,s)=>(b(),Z("div",V0," END "))}},K0=J(W0,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/layouts/end.vue"]]),z0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y0=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),Z0=[Y0];function G0(t,n){return b(),Z("svg",z0,Z0)}const J0={name:"carbon-logo-github",render:G0},Q0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X0=e("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),eB=e("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1),tB=[X0,eB];function nB(t,n){return b(),Z("svg",Q0,tB)}const sB={name:"carbon-application-web",render:nB};function oB(t){return t.startsWith("/")?"/math201/slides/python04"+t.slice(1):t}const lB={key:0},rB=["src"],aB=Ee({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(t){const n=t;H(G);const s=P(()=>oB(n.logoHeader));return(o,l)=>t.logoHeader?(b(),Z("header",lB,[e("img",{src:v(s),width:"60",height:"60",class:"object-contain"},null,8,rB)])):Fe("v-if",!0)}}),ji=J(aB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),iB={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},cB={key:0,class:"mb-0"},pB={key:1,class:"mb-0"},uB=Ee({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(t){return H(G),(n,s)=>t.website||t.handle?(b(),Z("footer",iB,[t.website?(b(),Z("p",cB,ln(t.website),1)):Fe("v-if",!0),t.handle?(b(),Z("p",pB,"@"+ln(t.handle),1)):Fe("v-if",!0)])):Fe("v-if",!0)}}),Hi=J(uB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),dB={class:"bg-main slidev-layout"},fB={class:"my-auto"},yB=Ee({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(t){return H(G),Ee({LayoutHeader:ji,LayoutFooter:Hi}),(n,s)=>(b(),Z("div",dB,[E(ji,{logoHeader:t.logoHeader},null,8,["logoHeader"]),e("div",fB,[Ot(n.$slots,"default")]),E(Hi,{website:t.website,handle:t.handle},null,8,["website","handle"])]))}}),Go=J(yB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),hB=Ee({__name:"cover",setup(t){return H(G),Ee({Default:Go}),(n,s)=>(b(),K(Go,{class:"cover"},{default:x(()=>[Ot(n.$slots,"default")]),_:3}))}}),mB=J(hB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),FB=e("h1",null,"Python 数据结构",-1),gB=e("h2",null,"上海电力大学",-1),_B=e("p",null,"数理学院数学系",-1),BB=e("h4",null,"邓化宇",-1),vB={class:"abs-br m-6 flex gap-2"},bB={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},wB={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},kB={__name:"1",setup(t){const n={theme:"unicorn",layout:"cover",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!0},transition:"slide-left",css:"unocss"};return H(G),(s,o)=>{const l=sB,r=J0;return b(),K(mB,me(he(n)),{default:x(()=>[FB,gB,_B,BB,e("div",vB,[e("a",bB,[E(l)]),e("a",wB,[E(r)])])]),_:1},16)}}},EB=J(kB,[["__file","/@slidev/slides/1.md"]]),xB={class:"flex flex-col items-center justify-center text-center"},CB=Ee({__name:"center",setup(t){return H(G),Ee({Default:Go}),(n,s)=>(b(),K(Go,{class:"center"},{default:x(()=>[e("div",xB,[Ot(n.$slots,"default")])]),_:3}))}}),pn=J(CB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),AB=e("h1",null,"Lists",-1),DB={__name:"2",setup(t){const n={layout:"center",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[AB]),_:1},16))}},SB=J(DB,[["__file","/@slidev/slides/2.md"]]),$B={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},PB=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),TB=[PB];function OB(t,n){return b(),Z("svg",$B,TB)}const LB={name:"ph-clipboard",render:OB},IB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},MB=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),RB=[MB];function NB(t,n){return b(),Z("svg",IB,RB)}const UB={name:"ph-check-circle",render:NB},qB=["title"],jB=Ee({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;H(G);const s=H(cp),o=H(pp),l=H(up);function r(f=5){const y=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",F=m.length;for(let _=0;_<f;_++)y.push(m.charAt(Math.floor(Math.random()*F)));return y.join("")}const a=le(),i=Zt();yo(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,y=P(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),m=P(()=>n.ranges[y.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const F=r(),_=Ry(n.ranges.length-1).map(B=>F+B);o!=null&&o.value&&(o.value.push(..._),pl(()=>_.forEach(B=>My(o.value,B)),i))}Es(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const B of _){const A=Array.from(B.querySelectorAll(".line")),k=ru(A.length,m.value);if(A.forEach((D,S)=>{const q=k.includes(S+1);D.classList.toggle(Ly,!0),D.classList.toggle("highlighted",q),D.classList.toggle("dishonored",!q)}),n.maxHeight){const D=B.querySelector(".line.highlighted");D&&D.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=O2();function u(){var y,m;const f=(m=(y=a.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&p(f)}return(f,y)=>{const m=UB,F=LB;return b(),Z("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:st({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ot(f.$slots,"default"),v(Pe).codeCopy?(b(),Z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(c)?"Copied":"Copy",onClick:y[0]||(y[0]=_=>u())},[v(c)?(b(),K(m,{key:0,class:"p-2 w-8 h-8"})):(b(),K(F,{key:1,class:"p-2 w-8 h-8"}))],8,qB)):Fe("v-if",!0)],4)}}}),Oe=J(jB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),HB={class:"slidev-layout full w-full h-full"},VB={__name:"full",setup(t){return H(G),(n,s)=>(b(),Z("div",HB,[Ot(n.$slots,"default",{class:"w-full h-full"})]))}},Ce=J(VB,[["__file","/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/node_modules/@slidev/client/layouts/full.vue"]]),WB=e("h1",null,"Lists",-1),KB=e("p",null,"A list is a container that holds a sequence of related pieces of information.",-1),zB=e("p",null,"The shortest list is an empty list, just 2 square brackets:",-1),YB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"members "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," []")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"members "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," []")])])])],-1),ZB=e("p",null,"Lists can hold any Python values, separated by commas:",-1),GB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"members "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},'"Pamela"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Tinu"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Brenda"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Kaya"'),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"ages_of_kids "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"79.99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"49.99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"89.99"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"digits "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"//"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"remixed "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},'"Pamela"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"79.99"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"members "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},'"Pamela"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Tinu"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Brenda"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Kaya"'),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"ages_of_kids "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"79.99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"49.99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"89.99"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"digits "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"//"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"remixed "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},'"Pamela"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"79.99"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),JB={__name:"3",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[WB,KB,zB,E(l,X({},{ranges:[""]}),{default:x(()=>[YB]),_:1},16),ZB,E(l,X({},{ranges:[""]}),{default:x(()=>[GB]),_:1},16)]),_:1},16)}}},QB=J(JB,[["__file","/@slidev/slides/3.md"]]),XB=e("h1",null,"List length",-1),ev=e("p",null,[d("Use the global "),e("code",null,"len()"),d(" function to find the length of a list.")],-1),tv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"attendees "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},'"Tammy"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Shonda"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Tina"'),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"print"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#B392F0"}},"len"),e("span",{style:{color:"#BBBBBB"}},"(attendees))"),e("span",{style:{color:"#B392F0"}},"   "),e("span",{style:{color:"#6B737C"}},"#  3")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"num_of_attendees "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," len"),e("span",{style:{color:"#BBBBBB"}},"(attendees)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"print"),e("span",{style:{color:"#BBBBBB"}},"(num_of_attendees)")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"attendees "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},'"Tammy"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Shonda"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Tina"'),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#6F42C1"}},"len"),e("span",{style:{color:"#212121"}},"(attendees))"),e("span",{style:{color:"#24292EFF"}},"   "),e("span",{style:{color:"#C2C3C5"}},"#  3")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"num_of_attendees "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"len"),e("span",{style:{color:"#212121"}},"(attendees)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"(num_of_attendees)")])])])],-1),nv={__name:"4",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[XB,ev,E(l,X({},{ranges:[""]}),{default:x(()=>[tv]),_:1},16)]),_:1},16)}}},sv=J(nv,[["__file","/@slidev/slides/4.md"]]),ov=e("h1",null,"Accessing list items (brackets)",-1),lv=e("p",null,"Each list item has an index, starting from 0.",-1),rv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},"'A'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'B'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'C'"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# Index:   0     1     2")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},"'A'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'B'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'C'"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# Index:   0     1     2")])])])],-1),av=e("p",null,"Access each item by putting the index in brackets:",-1),iv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 'A'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 'B'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 'C'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 🚫 Error!")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 'A'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 'B'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 'C'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 Error!")])])])],-1),cv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"curr_ind "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#B392F0"}},"curr_ind"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"# 'B'")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"curr_ind "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#24292EFF"}},"curr_ind"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"# 'B'")])])])],-1),pv=e("p",null,"Negative indices are also possible:",-1),uv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 'C'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 'B'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 🚫 Error!")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 'C'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 'B'")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 Error!")])])])],-1),dv={__name:"5",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[ov,lv,E(l,X({},{ranges:[""]}),{default:x(()=>[rv]),_:1},16),av,E(l,X({},{ranges:[""]}),{default:x(()=>[iv]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[cv]),_:1},16),pv,E(l,X({},{ranges:[""]}),{default:x(()=>[uv]),_:1},16)]),_:1},16)}}},fv=J(dv,[["__file","/@slidev/slides/5.md"]]),yv=e("h1",null,"List concatenation",-1),hv=e("p",null,"Add two lists together using the + operator:",-1),mv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"boba_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"smoothie_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"7.00"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"all_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," boba_prices "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," smoothie_prices")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"boba_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"smoothie_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"7.00"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"all_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," boba_prices "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," smoothie_prices")])])])],-1),Fv=e("p",null,[d("Or the "),e("code",null,"add"),d(" function:")],-1),gv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," operator "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," add")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"boba_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"smoothie_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"7.00"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"all_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," add"),e("span",{style:{color:"#BBBBBB"}},"(boba_prices, smoothie_prices)")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," operator "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," add")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"boba_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"smoothie_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"7.00"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"all_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"add"),e("span",{style:{color:"#212121"}},"(boba_prices, smoothie_prices)")])])])],-1),_v={__name:"6",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[yv,hv,E(l,X({},{ranges:[""]}),{default:x(()=>[mv]),_:1},16),Fv,E(l,X({},{ranges:[""]}),{default:x(()=>[gv]),_:1},16)]),_:1},16)}}},Bv=J(_v,[["__file","/@slidev/slides/6.md"]]),vv=e("h1",null,"List repetition",-1),bv=e("p",null,"Concatenate the same list multiple times using the * operator:",-1),wv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"boba_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"more_boba "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," boba_prices "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"boba_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"more_boba "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," boba_prices "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3")])])])],-1),kv=e("p",null,[d("Or the "),e("code",null,"mul"),d(" function:")],-1),Ev=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," operator "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," mul")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"boba_prices "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"5.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6.50"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7.50"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"more_boba "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," mul"),e("span",{style:{color:"#BBBBBB"}},"(boba_prices, "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"from"),e("span",{style:{color:"#24292EFF"}}," operator "),e("span",{style:{color:"#D32F2F"}},"import"),e("span",{style:{color:"#24292EFF"}}," mul")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"boba_prices "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"5.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6.50"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7.50"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"more_boba "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"mul"),e("span",{style:{color:"#212121"}},"(boba_prices, "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},")")])])])],-1),xv=e("p",null,"All together now:",-1),Cv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"digits "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"together "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," digits "),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#6B737C"}},"# [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"together "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," add"),e("span",{style:{color:"#BBBBBB"}},"(["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},"], "),e("span",{style:{color:"#B392F0"}},"mul"),e("span",{style:{color:"#BBBBBB"}},"(digits, "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},"))")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"digits "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"together "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," digits "),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#C2C3C5"}},"# [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"together "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"add"),e("span",{style:{color:"#212121"}},"(["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},"], "),e("span",{style:{color:"#6F42C1"}},"mul"),e("span",{style:{color:"#212121"}},"(digits, "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},"))")])])])],-1),Av={__name:"7",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[vv,bv,E(l,X({},{ranges:[""]}),{default:x(()=>[wv]),_:1},16),kv,E(l,X({},{ranges:[""]}),{default:x(()=>[Ev]),_:1},16),xv,E(l,X({},{ranges:[""]}),{default:x(()=>[Cv]),_:1},16)]),_:1},16)}}},Dv=J(Av,[["__file","/@slidev/slides/7.md"]]),Sv=Ee({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,a;const t=Fa("click"),n=Fa("after"),s=(i,c,p)=>ul(i,[[c,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let o=(a=(r=this.$slots).default)==null?void 0:a.call(r);if(!o)return;o=Iy(o);const l=i=>i.map((c,p)=>Sn(c)?s(vs(c),p%this.every===0?t:n,Math.floor(p/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?vs(o[0],{},[l(o[0].children)]):l(o)}}),go=Ee({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return E(Sv,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),$v=e("h1",null,"Nested Lists",-1),Pv=e("p",null,"Since Python lists can contain any values, an item can itself be a list.",-1),Tv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [ ["),e("span",{style:{color:"#FFAB70"}},'"Brittany"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.15"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Lea"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.5"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Maya"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#B392F0"}},"] ]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [ ["),e("span",{style:{color:"#22863A"}},'"Brittany"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.15"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Lea"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.5"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Maya"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#24292EFF"}},"] ]")])])])],-1),Ov=e("ul",null,[e("li",null,"What’s the length of gymnasts?")],-1),Lv=e("p",null,"3",-1),Iv=e("ul",null,[e("li",null,"What’s the length of gymnasts[0]?")],-1),Mv=e("p",null,"5",-1),Rv={__name:"8",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe,r=go;return b(),K(Ce,me(he(n)),{default:x(()=>[$v,Pv,E(l,X({},{ranges:[""]}),{default:x(()=>[Tv]),_:1},16),Ov,E(r,null,{default:x(()=>[Lv]),_:1}),Iv,E(r,null,{default:x(()=>[Mv]),_:1})]),_:1},16)}}},Nv=J(Rv,[["__file","/@slidev/slides/8.md"]]),Uv=e("h1",null,"Accessing nested list items",-1),qv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Brittany"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.15"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Lea"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.5"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Maya"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            ]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Brittany"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.15"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Lea"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.5"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Maya"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"            ]")])])])],-1),jv=e("p",null,"Access using bracket notation, with more brackets as needed:",-1),Hv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'# ["Brittany", 9.15, 9.4, 9.3, 9.2]')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},'# "Brittany"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},'# "Lea"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"# 9.5")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"# 🚫 IndexError!")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#6B737C"}},"# 🚫 IndexError!")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'# ["Brittany", 9.15, 9.4, 9.3, 9.2]')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},'# "Brittany"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},'# "Lea"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"# 9.5")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 IndexError!")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 IndexError!")])])])],-1),Vv={__name:"9",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Uv,E(l,X({},{ranges:[""]}),{default:x(()=>[qv]),_:1},16),jv,E(l,X({},{ranges:[""]}),{default:x(()=>[Hv]),_:1},16)]),_:1},16)}}},Wv=J(Vv,[["__file","/@slidev/slides/9.md"]]),Kv=e("h1",null,"Containment operator",-1),zv=e("p",null,[d("Use the "),e("code",null,"in"),d(" operator to test if value is inside a container:")],-1),Yv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"digits "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," digits "),e("span",{style:{color:"#6B737C"}},"# True")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," digits "),e("span",{style:{color:"#6B737C"}},"# True")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," digits "),e("span",{style:{color:"#6B737C"}},"# False")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"not"),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," digits) "),e("span",{style:{color:"#6B737C"}},"# True")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"digits "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," digits "),e("span",{style:{color:"#C2C3C5"}},"# True")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," digits "),e("span",{style:{color:"#C2C3C5"}},"# True")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," digits "),e("span",{style:{color:"#C2C3C5"}},"# False")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"not"),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," digits) "),e("span",{style:{color:"#C2C3C5"}},"# True")])])])],-1),Zv={__name:"10",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Kv,zv,E(l,X({},{ranges:[""]}),{default:x(()=>[Yv]),_:1},16)]),_:1},16)}}},Gv=J(Zv,[["__file","/@slidev/slides/10.md"]]),Jv=e("h1",null,"For statements",-1),Qv={__name:"11",setup(t){const n={layout:"center",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[Jv]),_:1},16))}},Xv=J(Qv,[["__file","/@slidev/slides/11.md"]]),e9=e("h1",null,"For loop",-1),t9=e("p",null,"The for loop syntax:",-1),n9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"sequence"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"statement"),e("span",{style:{color:"#F97583"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"statement"),e("span",{style:{color:"#F97583"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"value"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"sequence"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"statement"),e("span",{style:{color:"#D32F2F"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"statement"),e("span",{style:{color:"#D32F2F"}},">")])])])],-1),s9=e("p",null,[d("The for loop provides a cleaner way to write many "),e("code",null,"while"),d(" loops, as long as they are iterating over some sort of sequence.")],-1),o9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," count("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"value"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    total "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," element "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," s"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," element "),e("span",{style:{color:"#F97583"}},"=="),e("span",{style:{color:"#B392F0"}}," value"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            total "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," total "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," total")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"count"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"value"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    total "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," element "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," s"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"        "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," element "),e("span",{style:{color:"#D32F2F"}},"=="),e("span",{style:{color:"#24292EFF"}}," value"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"            total "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," total "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," total")])])])],-1),l9={__name:"12",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[e9,t9,E(l,X({},{ranges:[""]}),{default:x(()=>[n9]),_:1},16),s9,E(l,X({},{ranges:[""]}),{default:x(()=>[o9]),_:1},16)]),_:1},16)}}},r9=J(l9,[["__file","/@slidev/slides/12.md"]]),a9=e("h1",null,"For statement execution procedure",-1),i9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"name"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"expression"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"suite"),e("span",{style:{color:"#F97583"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"name"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"expression"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"suite"),e("span",{style:{color:"#D32F2F"}},">")])])])],-1),c9=e("ul",null,[e("li",null,"Evaluate the header <expression>, which must yield an iterable value (a sequence)"),e("li",null,[d("For each element in that sequence, in order: "),e("ol",null,[e("li",null,"Bind <name> to that element in the current frame"),e("li",null,"Execute the <suite>")])])],-1),p9={__name:"13",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[a9,E(l,X({},{ranges:[""]}),{default:x(()=>[i9]),_:1},16),c9]),_:1},16)}}},u9=J(p9,[["__file","/@slidev/slides/13.md"]]),d9=e("h1",null,"Looping through nested lists",-1),f9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"gymnasts "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Brittany"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.15"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Lea"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.5"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                ["),e("span",{style:{color:"#FFAB70"}},'"Maya"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9.2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8.8"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            ]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"gymnasts "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Brittany"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.15"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Lea"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.5"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                ["),e("span",{style:{color:"#22863A"}},'"Maya"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9.2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8.8"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"            ]")])])])],-1),y9=e("p",null,[d("Use a nested "),e("code",null,"for-in"),d(" loop:")],-1),h9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," gymnast "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," gymnasts"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," data "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," gymnast"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        print"),e("span",{style:{color:"#BBBBBB"}},"(data, end"),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#FFAB70"}},'"|"'),e("span",{style:{color:"#BBBBBB"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," gymnast "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," gymnasts"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," data "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," gymnast"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"        "),e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"(data, end"),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#22863A"}},'"|"'),e("span",{style:{color:"#212121"}},")")])])])],-1),m9=e("p",null,"Remember what type of data is being stored in the loop variable!",-1),F9={__name:"14",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[d9,E(l,X({},{ranges:[""]}),{default:x(()=>[f9]),_:1},16),y9,E(l,X({},{ranges:[""]}),{default:x(()=>[h9]),_:1},16),m9]),_:1},16)}}},g9=J(F9,[["__file","/@slidev/slides/14.md"]]),_9=e("h1",null,"Sequence unpacking in for statements",-1),B9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"pairs "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"]"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#B392F0"}},"]]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"same_count "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," y "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," pairs"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"=="),e("span",{style:{color:"#B392F0"}}," y"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        same_count "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," same_count "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"pairs "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"]"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#24292EFF"}},"]]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"same_count "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," y "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," pairs"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"=="),e("span",{style:{color:"#24292EFF"}}," y"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"        same_count "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," same_count "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1")])])])],-1),v9=e("p",null,"Each name is bound to a value, like in multiple assignment.",-1),b9={__name:"15",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[_9,E(l,X({},{ranges:[""]}),{default:x(()=>[B9]),_:1},16),v9]),_:1},16)}}},w9=J(b9,[["__file","/@slidev/slides/15.md"]]),k9=e("h1",null,"Ranges",-1),E9={__name:"16",setup(t){const n={layout:"center",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[k9]),_:1},16))}},x9=J(E9,[["__file","/@slidev/slides/16.md"]]),C9=e("h1",null,"The range type",-1),A9=e("p",null,"A range represents a sequence of integers.",-1),D9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"... "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#B392F0"}},"...")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"... "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#24292EFF"}},"...")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"                "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#D32F2F"}},"-"),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},")")])])])],-1),S9=e("p",null,"If just one argument, range starts at 0 and ends just before it:",-1),$9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," num "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    print"),e("span",{style:{color:"#BBBBBB"}},"(num)"),e("span",{style:{color:"#B392F0"}},"       "),e("span",{style:{color:"#6B737C"}},"# 0, 1, 2, 3, 4, 5")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," num "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"(num)"),e("span",{style:{color:"#24292EFF"}},"       "),e("span",{style:{color:"#C2C3C5"}},"# 0, 1, 2, 3, 4, 5")])])])],-1),P9=e("p",null,"If two arguments, range starts at first and ends just before second:",-1),T9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," num "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    print"),e("span",{style:{color:"#BBBBBB"}},"(num)"),e("span",{style:{color:"#B392F0"}},"       "),e("span",{style:{color:"#6B737C"}},"# 1, 2, 3, 4, 5")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," num "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"(num)"),e("span",{style:{color:"#24292EFF"}},"       "),e("span",{style:{color:"#C2C3C5"}},"# 1, 2, 3, 4, 5")])])])],-1),O9={__name:"17",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[C9,A9,E(l,X({},{ranges:[""]}),{default:x(()=>[D9]),_:1},16),S9,E(l,X({},{ranges:[""]}),{default:x(()=>[$9]),_:1},16),P9,E(l,X({},{ranges:[""]}),{default:x(()=>[T9]),_:1},16)]),_:1},16)}}},L9=J(O9,[["__file","/@slidev/slides/17.md"]]),I9=e("h1",null,"List comprehensions",-1),M9={__name:"18",setup(t){const n={layout:"center",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[I9]),_:1},16))}},R9=J(M9,[["__file","/@slidev/slides/18.md"]]),N9=e("h1",null,"List comprehension syntax",-1),U9=e("p",null,'A way to create a new list by "mapping" an existing list.',-1),q9=e("p",null,"Short version:",-1),j9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"map exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"name"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"iter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"map"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"name"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"iter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),H9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"odds "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"9"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"evens "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [(num "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#B392F0"}},") "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," num "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," odds]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"odds "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"9"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"evens "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [(num "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#24292EFF"}},") "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," num "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," odds]")])])])],-1),V9=e("p",null,"Long version (with filter):",-1),W9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"map exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"name"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"iter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"filter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"map"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"name"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"iter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"filter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),K9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"temps "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"60"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"65"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"71"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"67"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"77"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"89"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"hot "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [temp "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," temp "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," temps "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," temp "),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"temps "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"60"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"65"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"71"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"67"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"77"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"89"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"hot "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [temp "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," temp "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," temps "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," temp "),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),z9={__name:"19",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[N9,U9,q9,E(l,X({},{ranges:[""]}),{default:x(()=>[j9]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[H9]),_:1},16),V9,E(l,X({},{ranges:[""]}),{default:x(()=>[W9]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[K9]),_:1},16)]),_:1},16)}}},Y9=J(z9,[["__file","/@slidev/slides/19.md"]]),Z9=e("h1",null,"List comprehension execution procedure",-1),G9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"["),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"map exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"name"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"iter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"filter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"["),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"map"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"name"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"iter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"filter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),J9=e("ul",null,[e("li",null,"Add a new frame with the current frame as its parent"),e("li",null,"Create an empty result list that is the value of the expression"),e("li",null,[d("For each element in the iterable value of <iter exp>: "),e("ul",null,[e("li",null,"Bind <name> to that element in the new frame from step 1"),e("li",null,"If <filter exp> evaluates to a true value, then add the value of <map exp> to the result list")])])],-1),Q9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},"'a'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'b'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'c'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'d'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'e'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'f'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'m'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'n'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'o'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'p'"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"word "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," [letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#B392F0"}},"i"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," i "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#B392F0"}},"]]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},"'a'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'b'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'c'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'d'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'e'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'f'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'m'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'n'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'o'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'p'"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"word "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," [letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#24292EFF"}},"i"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," i "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#24292EFF"}},"]]")])])])],-1),X9={__name:"20",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Z9,E(l,X({},{ranges:[""]}),{default:x(()=>[G9]),_:1},16),J9,E(l,X({},{ranges:[""]}),{default:x(()=>[Q9]),_:1},16)]),_:1},16)}}},e3=J(X9,[["__file","/@slidev/slides/20.md"]]),t3=e("h1",null,"Exercise: Divisors",-1),n3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," divisors("),e("span",{style:{color:"#FF9800"}},"n"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Returns all the divisors of N.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"divisors(12)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    [1, 2, 3, 4, 6]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"divisors"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"n"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Returns all the divisors of N.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"divisors(12)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    [1, 2, 3, 4, 6]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')])])])],-1),s3=e("br",null,null,-1),o3=e("p",null,"答案:",-1),l3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," divisors("),e("span",{style:{color:"#FF9800"}},"n"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Returns all the divisors of N.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"divisors(12)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    [1, 2, 3, 4, 6]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," [x "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},", n)"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," n "),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"=="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"divisors"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"n"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Returns all the divisors of N.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"divisors(12)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    [1, 2, 3, 4, 6]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," [x "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},", n)"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," n "),e("span",{style:{color:"#D32F2F"}},"%"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"=="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),r3={__name:"21",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe,r=go;return b(),K(Ce,me(he(n)),{default:x(()=>[t3,E(l,X({},{ranges:[""]}),{default:x(()=>[n3]),_:1},16),s3,E(r,null,{default:x(()=>[o3,E(l,X({},{ranges:[""]}),{default:x(()=>[l3]),_:1},16)]),_:1})]),_:1},16)}}},a3=J(r3,[["__file","/@slidev/slides/21.md"]]),i3=e("h1",null,"Exercise: Frontloaded",-1),c3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," front("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"f"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return S but with elements chosen by F at the front.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"front(range(10), lambda x: x % 2 == 1)  # odds in front")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"front"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"f"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return S but with elements chosen by F at the front.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"front(range(10), lambda x: x % 2 == 1)  # odds in front")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')])])])],-1),p3=e("br",null,null,-1),u3=e("p",null,"答案:",-1),d3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," front("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"f"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return S but with elements chosen by F at the front.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"front(range(10), lambda x: x % 2 == 1)  # odds in front")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," [e "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," e "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," s "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," f"),e("span",{style:{color:"#BBBBBB"}},"(e)"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," [e "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," e "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," s "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"not"),e("span",{style:{color:"#B392F0"}}," f"),e("span",{style:{color:"#BBBBBB"}},"(e)"),e("span",{style:{color:"#B392F0"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"front"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"s"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"f"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return S but with elements chosen by F at the front.')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"front(range(10), lambda x: x % 2 == 1)  # odds in front")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," [e "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," e "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," s "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"f"),e("span",{style:{color:"#212121"}},"(e)"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," [e "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," e "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," s "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"not"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"f"),e("span",{style:{color:"#212121"}},"(e)"),e("span",{style:{color:"#24292EFF"}},"]")])])])],-1),f3={__name:"22",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe,r=go;return b(),K(Ce,me(he(n)),{default:x(()=>[i3,E(l,X({},{ranges:[""]}),{default:x(()=>[c3]),_:1},16),p3,E(r,null,{default:x(()=>[u3,E(l,X({},{ranges:[""]}),{default:x(()=>[d3]),_:1},16)]),_:1})]),_:1},16)}}},y3=J(f3,[["__file","/@slidev/slides/22.md"]]),h3=e("h1",null,"Slicing",-1),m3={__name:"23",setup(t){const n={layout:"center",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[h3]),_:1},16))}},F3=J(m3,[["__file","/@slidev/slides/23.md"]]),g3=e("h1",null,"Slicing syntax",-1),_3=e("p",null,"Slicing a list creates a new list with a subsequence of the original list.",-1),B3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"letters "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#FFAB70"}},'"A"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"B"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"C"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"D"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"E"'),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"F"'),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        "),e("span",{style:{color:"#6B737C"}},"#   0    1    2    3    4    5")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"sublist1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},":]"),e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},"# ['B', 'C', 'D', 'E', 'F']")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"sublist2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," letters"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#F8F8F8"}},"4"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"   "),e("span",{style:{color:"#6B737C"}},"# ['B', 'C', 'D']")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"letters "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#22863A"}},'"A"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"B"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"C"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"D"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"E"'),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"F"'),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"        "),e("span",{style:{color:"#C2C3C5"}},"#   0    1    2    3    4    5")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"sublist1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},":]"),e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},"# ['B', 'C', 'D', 'E', 'F']")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"sublist2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," letters"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#1976D2"}},"4"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"   "),e("span",{style:{color:"#C2C3C5"}},"# ['B', 'C', 'D']")])])])],-1),v3=e("p",null,"Slicing also works for strings.",-1),b3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"compound_word "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"cortaúñas"')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"word1 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," compound_word"),e("span",{style:{color:"#BBBBBB"}},"[:"),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'# "corta"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"word2 "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," compound_word"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},":]"),e("span",{style:{color:"#B392F0"}},"   "),e("span",{style:{color:"#6B737C"}},'# "úñas"')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"compound_word "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"cortaúñas"')]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"word1 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," compound_word"),e("span",{style:{color:"#212121"}},"[:"),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'# "corta"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"word2 "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," compound_word"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},":]"),e("span",{style:{color:"#24292EFF"}},"   "),e("span",{style:{color:"#C2C3C5"}},'# "úñas"')])])])],-1),w3=e("p",null,"Negatives indices and steps can also be specified.",-1),k3={__name:"24",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[g3,_3,E(l,X({},{ranges:[""]}),{default:x(()=>[B3]),_:1},16),v3,E(l,X({},{ranges:[""]}),{default:x(()=>[b3]),_:1},16),w3]),_:1},16)}}},E3=J(k3,[["__file","/@slidev/slides/24.md"]]),x3=e("h1",null,"Copying whole lists",-1),C3=e("p",null,"Slicing a whole list copies a list:",-1),A3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listA "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listB "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," listA")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listC "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," listA"),e("span",{style:{color:"#BBBBBB"}},"[:]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listA"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listB"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listA "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listB "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," listA")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listC "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," listA"),e("span",{style:{color:"#212121"}},"[:]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listA"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listB"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5")])])])],-1),D3=e("p",null,[e("code",null,"list()"),d(" creates a new list containing existing elements from any iterable:")],-1),S3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listA "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listB "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," listA")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listC "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#79B8FF"}},"list"),e("span",{style:{color:"#BBBBBB"}},"(listA)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listA"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"listB"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"5")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listA "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listB "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," listA")]),d(`
`),e("span",{class:"line"}),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listC "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"list"),e("span",{style:{color:"#212121"}},"(listA)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listA"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"4")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"listB"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"5")])])])],-1),$3=e("p",null,[d("Python3 provides more ways in the "),e("a",{href:"https://docs.python.org/3/library/copy.html",target:"_blank",rel:"noopener"},"copy module"),d(".")],-1),P3={__name:"25",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[x3,C3,E(l,X({},{ranges:[""]}),{default:x(()=>[A3]),_:1},16),D3,E(l,X({},{ranges:[""]}),{default:x(()=>[S3]),_:1},16),$3]),_:1},16)}}},T3=J(P3,[["__file","/@slidev/slides/25.md"]]),O3={__name:"26",setup(t){const n={layout:"full",srcSequence:"./pages/list.md"};return H(G),(s,o)=>(b(),K(Ce,me(he(n)),null,16))}},L3=J(O3,[["__file","/@slidev/slides/26.md"]]),I3=e("h1",null,"Tuples",-1),M3={__name:"27",setup(t){const n={layout:"center",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[I3]),_:1},16))}},R3=J(M3,[["__file","/@slidev/slides/27.md"]]),N3=e("h1",null,"Tuples",-1),U3=e("p",null,[d("A "),e("strong",null,"tuple"),d(" is an immutable sequence. It’s like a list, but no mutation allowed!")],-1),q3=e("p",null,"An empty tuple:",-1),j3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"empty "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"empty "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#79B8FF"}},"tuple"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"empty "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ()")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"empty "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"tuple"),e("span",{style:{color:"#212121"}},"()")])])])],-1),H3=e("p",null,"A tuple with multiple elements:",-1),V3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"conditions "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#FFAB70"}},"'rain'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'shine'"),e("span",{style:{color:"#B392F0"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"conditions "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'rain'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'shine'")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"conditions "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#22863A"}},"'rain'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'shine'"),e("span",{style:{color:"#24292EFF"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"conditions "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'rain'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'shine'")])])])],-1),W3=e("p",null,"A tuple with a single element: 🙀",-1),K3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"oogly "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#F8F8F8"}},"61"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"oogly "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"61"),e("span",{style:{color:"#BBBBBB"}},",")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"oogly "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#1976D2"}},"61"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"# or")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"oogly "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"61"),e("span",{style:{color:"#212121"}},",")])])])],-1),z3={__name:"28",setup(t){const n={layout:"full",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[N3,U3,q3,E(l,X({},{ranges:[""]}),{default:x(()=>[j3]),_:1},16),H3,E(l,X({},{ranges:[""]}),{default:x(()=>[V3]),_:1},16),W3,E(l,X({},{ranges:[""]}),{default:x(()=>[K3]),_:1},16)]),_:1},16)}}},Y3=J(z3,[["__file","/@slidev/slides/28.md"]]),Z3=e("h1",null,"Tuple operations",-1),G3=e("p",null,"Many of list’s read-only operations work on tuples.",-1),J3=e("p",null,"Combining tuples into a new tuple:",-1),Q3=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"("),e("span",{style:{color:"#FFAB70"}},"'come'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'☂'"),e("span",{style:{color:"#B392F0"}},") "),e("span",{style:{color:"#F97583"}},"+"),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#FFAB70"}},"'or'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'☼'"),e("span",{style:{color:"#B392F0"}},")  "),e("span",{style:{color:"#6B737C"}},"# ('come', '☂', 'or', '☼')")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#22863A"}},"'come'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'☂'"),e("span",{style:{color:"#24292EFF"}},") "),e("span",{style:{color:"#D32F2F"}},"+"),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#22863A"}},"'or'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'☼'"),e("span",{style:{color:"#24292EFF"}},")  "),e("span",{style:{color:"#C2C3C5"}},"# ('come', '☂', 'or', '☼')")])])])],-1),X3=e("p",null,"Checking containment:",-1),eb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFAB70"}},"'wally'"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#FFAB70"}},"'wall-e'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'wallace'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'waldo'"),e("span",{style:{color:"#B392F0"}},")  "),e("span",{style:{color:"#6B737C"}},"# True")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"'wally'"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#22863A"}},"'wall-e'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'wallace'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'waldo'"),e("span",{style:{color:"#24292EFF"}},")  "),e("span",{style:{color:"#C2C3C5"}},"# True")])])])],-1),tb=e("p",null,"Slicing:",-1),nb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"rainbow "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#FFAB70"}},"'red'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'orange'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'yellow'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'green'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'blue'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'indigo'"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},"'violet'"),e("span",{style:{color:"#B392F0"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"roy "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," rainbow"),e("span",{style:{color:"#BBBBBB"}},"[:"),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# ('red', 'orange', 'yellow')")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"rainbow "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#22863A"}},"'red'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'orange'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'yellow'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'green'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'blue'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'indigo'"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},"'violet'"),e("span",{style:{color:"#24292EFF"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"roy "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," rainbow"),e("span",{style:{color:"#212121"}},"[:"),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# ('red', 'orange', 'yellow')")])])])],-1),sb={__name:"29",setup(t){const n={layout:"full",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Z3,G3,J3,E(l,X({},{ranges:[""]}),{default:x(()=>[Q3]),_:1},16),X3,E(l,X({},{ranges:[""]}),{default:x(()=>[eb]),_:1},16),tb,E(l,X({},{ranges:[""]}),{default:x(()=>[nb]),_:1},16)]),_:1},16)}}},ob=J(sb,[["__file","/@slidev/slides/29.md"]]),lb=e("h1",null,"Immutability vs. Mutability",-1),rb={__name:"30",setup(t){const n={layout:"center",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[lb]),_:1},16))}},ab=J(rb,[["__file","/@slidev/slides/30.md"]]),ib=e("h1",null,"Immutable vs. Mutable",-1),cb=e("p",null,[d("An "),e("strong",null,"immutable"),d(" value is unchanging once created.")],-1),pb=e("p",null,"Immutable types (that we’ve covered): int, float, string, tuple",-1),ub=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a_tuple "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a_tuple"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"0"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#B392F0"}},"                  "),e("span",{style:{color:"#6B737C"}},"# 🚫 Error! Tuple items cannot be set.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a_string "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},`"Hi y'all"`)]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a_string"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"I"'),e("span",{style:{color:"#B392F0"}},"               "),e("span",{style:{color:"#6B737C"}},"# 🚫 Error! String elements cannot be set.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"a_string "),e("span",{style:{color:"#F97583"}},"+="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'", how you doing?"'),e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#6B737C"}},"# 🤔 How does this work?")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"an_int "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"20")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"an_int "),e("span",{style:{color:"#F97583"}},"+="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"2"),e("span",{style:{color:"#B392F0"}},"                     "),e("span",{style:{color:"#6B737C"}},"# 🤔 And this?")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a_tuple "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a_tuple"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"0"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#24292EFF"}},"                  "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 Error! Tuple items cannot be set.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a_string "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},`"Hi y'all"`)]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a_string"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"I"'),e("span",{style:{color:"#24292EFF"}},"               "),e("span",{style:{color:"#C2C3C5"}},"# 🚫 Error! String elements cannot be set.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"a_string "),e("span",{style:{color:"#D32F2F"}},"+="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'", how you doing?"'),e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#C2C3C5"}},"# 🤔 How does this work?")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"an_int "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"20")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"an_int "),e("span",{style:{color:"#D32F2F"}},"+="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"2"),e("span",{style:{color:"#24292EFF"}},"                     "),e("span",{style:{color:"#C2C3C5"}},"# 🤔 And this?")])])])],-1),db=e("p",null,[d("A "),e("strong",null,"mutable"),d(" value can change in value throughout the course of computation. All names that refer to the same object are affected by a mutation.")],-1),fb=e("p",null,"Mutable types (that we’ve covered): list, dict",-1),yb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"grades "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," ["),e("span",{style:{color:"#F8F8F8"}},"90"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"70"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"85"),e("span",{style:{color:"#B392F0"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"grades_copy "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," grades")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"grades"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#F8F8F8"}},"1"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"100")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"words "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#FFAB70"}},'"agua"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"water"'),e("span",{style:{color:"#BBBBBB"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"words"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"pavo"'),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"turkey"')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"grades "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," ["),e("span",{style:{color:"#1976D2"}},"90"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"70"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"85"),e("span",{style:{color:"#24292EFF"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"grades_copy "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," grades")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"grades"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#1976D2"}},"1"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"100")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"words "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#22863A"}},'"agua"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"water"'),e("span",{style:{color:"#212121"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"words"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"pavo"'),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"turkey"')])])])],-1),hb={__name:"31",setup(t){const n={layout:"full",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[ib,cb,pb,E(l,X({},{ranges:[""]}),{default:x(()=>[ub]),_:1},16),db,fb,E(l,X({},{ranges:[""]}),{default:x(()=>[yb]),_:1},16)]),_:1},16)}}},mb=J(hb,[["__file","/@slidev/slides/31.md"]]),Fb=e("h1",null,"Tuples",-1),gb={__name:"32",setup(t){const n={layout:"full",srcSequence:"./pages/tuple.md"};return H(G),(s,o)=>(b(),K(Ce,me(he(n)),{default:x(()=>[Fb]),_:1},16))}},_b=J(gb,[["__file","/@slidev/slides/32.md"]]),Bb=e("h1",null,"Dictionaries",-1),vb={__name:"33",setup(t){const n={layout:"center",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[Bb]),_:1},16))}},bb=J(vb,[["__file","/@slidev/slides/33.md"]]),wb=e("h1",null,"Dictionaries",-1),kb=e("p",null,"A dict is a mapping of key-value pairs",-1),Eb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"states "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"CA"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"California"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"DE"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Delaware"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"NY"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"New York"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"TX"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Texas"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"WY"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Wyoming"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"states "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"CA"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"California"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"DE"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Delaware"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"NY"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"New York"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"TX"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Texas"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"WY"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Wyoming"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"}")])])])],-1),xb=e("p",null,"Dictionaries support similar operations as lists/strings:",-1),Cb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," len"),e("span",{style:{color:"#BBBBBB"}},"(states)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F8"}},"5")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"len"),e("span",{style:{color:"#212121"}},"(states)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"5")])])])],-1),Ab=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"CA"'),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," states")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"True")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"CA"'),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," states")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"True")])])])],-1),Db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"ZZ"'),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," states")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"False")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"ZZ"'),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," states")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"False")])])])],-1),Sb={__name:"34",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[wb,kb,E(l,X({},{ranges:[""]}),{default:x(()=>[Eb]),_:1},16),xb,E(l,X({},{ranges:[""]}),{default:x(()=>[Cb]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[Ab]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[Db]),_:1},16)]),_:1},16)}}},$b=J(Sb,[["__file","/@slidev/slides/34.md"]]),Pb=e("h1",null,"Dictionary access",-1),Tb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"words "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"más"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"more"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"otro"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"other"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	"),e("span",{style:{color:"#FFAB70"}},'"agua"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"water"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"words "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"más"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"more"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"otro"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"other"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	"),e("span",{style:{color:"#22863A"}},'"agua"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"water"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"}")])])])],-1),Ob=e("p",null,"Ways to access a value by key:",-1),Lb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," words"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"otro"'),e("span",{style:{color:"#BBBBBB"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFAB70"}},"'other'")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," words"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"otro"'),e("span",{style:{color:"#212121"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"'other'")])])])],-1),Ib=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," first_word "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"agua"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," words"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#B392F0"}},"first_word"),e("span",{style:{color:"#BBBBBB"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFAB70"}},"'water'")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," first_word "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"agua"')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," words"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#24292EFF"}},"first_word"),e("span",{style:{color:"#212121"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"'water'")])])])],-1),Mb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," words"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#FFAB70"}},'"pavo"'),e("span",{style:{color:"#BBBBBB"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"KeyError"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," pavo")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," words"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#22863A"}},'"pavo"'),e("span",{style:{color:"#212121"}},"]")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"KeyError"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," pavo")])])])],-1),Rb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},">>>"),e("span",{style:{color:"#B392F0"}}," words"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"get"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#FFAB70"}},'"pavo"'),e("span",{style:{color:"#BBBBBB"}},", "),e("span",{style:{color:"#FFAB70"}},'"🤔"'),e("span",{style:{color:"#BBBBBB"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFAB70"}},"'🤔'")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},">>>"),e("span",{style:{color:"#24292EFF"}}," words"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"get"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#22863A"}},'"pavo"'),e("span",{style:{color:"#212121"}},", "),e("span",{style:{color:"#22863A"}},'"🤔"'),e("span",{style:{color:"#212121"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"'🤔'")])])])],-1),Nb={__name:"35",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Pb,E(l,X({},{ranges:[""]}),{default:x(()=>[Tb]),_:1},16),Ob,E(l,X({},{ranges:[""]}),{default:x(()=>[Lb]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[Ib]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[Mb]),_:1},16),E(l,X({},{ranges:[""]}),{default:x(()=>[Rb]),_:1},16)]),_:1},16)}}},Ub=J(Nb,[["__file","/@slidev/slides/35.md"]]),qb=e("h1",null,"Dictionary rules",-1),jb=e("ul",null,[e("li",null,"All keys in a dictionary are distinct (there can only be one value per key)"),e("li",null,"A key cannot be a list or dictionary (or any other mutable type)"),e("li",null,"The values can be any type, however!")],-1),Hb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"spiders "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#FFAB70"}},'"smeringopus"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	  "),e("span",{style:{color:"#FFAB70"}},'"name"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Pale Daddy Long-leg"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	  "),e("span",{style:{color:"#FFAB70"}},'"length"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#BBBBBB"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#FFAB70"}},'"holocnemus pluchei"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	  "),e("span",{style:{color:"#FFAB70"}},'"name"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"Marbled cellar spider"'),e("span",{style:{color:"#BBBBBB"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"	  "),e("span",{style:{color:"#FFAB70"}},'"length"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," ("),e("span",{style:{color:"#F8F8F8"}},"5"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"7"),e("span",{style:{color:"#B392F0"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  "),e("span",{style:{color:"#BBBBBB"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"spiders "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#22863A"}},'"smeringopus"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	  "),e("span",{style:{color:"#22863A"}},'"name"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Pale Daddy Long-leg"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	  "),e("span",{style:{color:"#22863A"}},'"length"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#212121"}},"},")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#22863A"}},'"holocnemus pluchei"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	  "),e("span",{style:{color:"#22863A"}},'"name"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"Marbled cellar spider"'),e("span",{style:{color:"#212121"}},",")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"	  "),e("span",{style:{color:"#22863A"}},'"length"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," ("),e("span",{style:{color:"#1976D2"}},"5"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"7"),e("span",{style:{color:"#24292EFF"}},")")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"  "),e("span",{style:{color:"#212121"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"}")])])])],-1),Vb={__name:"36",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[qb,jb,E(l,X({},{ranges:[""]}),{default:x(()=>[Hb]),_:1},16)]),_:1},16)}}},Wb=J(Vb,[["__file","/@slidev/slides/36.md"]]),Kb=e("h1",null,"Dictionary iteration",-1),zb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"insects "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#FFAB70"}},'"spiders"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"centipedes"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FFAB70"}},'"bees"'),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," name "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," insects"),e("span",{style:{color:"#BBBBBB"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    print"),e("span",{style:{color:"#BBBBBB"}},"(insects[name])")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"insects "),e("span",{style:{color:"#D32F2F"}},"="),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#22863A"}},'"spiders"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"centipedes"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#22863A"}},'"bees"'),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},"}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," name "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," insects"),e("span",{style:{color:"#212121"}},":")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#6F42C1"}},"print"),e("span",{style:{color:"#212121"}},"(insects[name])")])])])],-1),Yb=e("p",null,"What will be the order of items?",-1),Zb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F8"}},"8"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"100"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F8F8F8"}},"6")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1976D2"}},"8"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"100"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#1976D2"}},"6")])])])],-1),Gb=e("p",null,"Keys are iterated over in the order they are first added.",-1),Jb={__name:"37",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Kb,E(l,X({},{ranges:[""]}),{default:x(()=>[zb]),_:1},16),Yb,E(l,X({},{ranges:[""]}),{default:x(()=>[Zb]),_:1},16),Gb]),_:1},16)}}},Qb=J(Jb,[["__file","/@slidev/slides/37.md"]]),Xb=e("h1",null,"Dictionary comprehensions",-1),ew=e("p",null,"General syntax:",-1),tw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," value "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"name"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"<"),e("span",{style:{color:"#B392F0"}},"iter exp"),e("span",{style:{color:"#F97583"}},">"),e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#24292EFF"}},"key"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," value "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#24292EFF"}},"name"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"<"),e("span",{style:{color:"#6F42C1"}},"iter"),e("span",{style:{color:"#24292EFF"}}," exp"),e("span",{style:{color:"#D32F2F"}},">"),e("span",{style:{color:"#212121"}},"}")])])])],-1),nw=e("p",null,"Example:",-1),sw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#B392F0"}},"x"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," x"),e("span",{style:{color:"#F97583"}},"*"),e("span",{style:{color:"#B392F0"}},"x "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," x "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," range"),e("span",{style:{color:"#BBBBBB"}},"("),e("span",{style:{color:"#F8F8F8"}},"3"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#F8F8F8"}},"6"),e("span",{style:{color:"#BBBBBB"}},")}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#24292EFF"}},"x"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," x"),e("span",{style:{color:"#D32F2F"}},"*"),e("span",{style:{color:"#24292EFF"}},"x "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," x "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"range"),e("span",{style:{color:"#212121"}},"("),e("span",{style:{color:"#1976D2"}},"3"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#1976D2"}},"6"),e("span",{style:{color:"#212121"}},")}")])])])],-1),ow={__name:"38",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe;return b(),K(Ce,me(he(n)),{default:x(()=>[Xb,ew,E(l,X({},{ranges:[""]}),{default:x(()=>[tw]),_:1},16),nw,E(l,X({},{ranges:[""]}),{default:x(()=>[sw]),_:1},16)]),_:1},16)}}},lw=J(ow,[["__file","/@slidev/slides/38.md"]]),rw=e("h1",null,"Exercise: Prune",-1),aw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," prune("),e("span",{style:{color:"#FF9800"}},"d"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return a copy of D which only contains key/value pairs')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    whose keys are also in KEYS.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},'prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    {'a': 1, 'b': 2, 'c': 3}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"prune"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"d"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return a copy of D which only contains key/value pairs')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    whose keys are also in KEYS.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},'prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    {'a': 1, 'b': 2, 'c': 3}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')])])])],-1),iw=e("p",null,"答案：",-1),cw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," prune("),e("span",{style:{color:"#FF9800"}},"d"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return a copy of D which only contains key/value pairs')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    whose keys are also in KEYS.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},'prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    {'a': 1, 'b': 2, 'c': 3}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#B392F0"}},"k"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," d"),e("span",{style:{color:"#BBBBBB"}},"["),e("span",{style:{color:"#B392F0"}},"k"),e("span",{style:{color:"#BBBBBB"}},"]"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," k "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," keys"),e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"prune"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"d"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return a copy of D which only contains key/value pairs')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    whose keys are also in KEYS.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},'prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    {'a': 1, 'b': 2, 'c': 3}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#24292EFF"}},"k"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," d"),e("span",{style:{color:"#212121"}},"["),e("span",{style:{color:"#24292EFF"}},"k"),e("span",{style:{color:"#212121"}},"]"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," k "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," keys"),e("span",{style:{color:"#212121"}},"}")])])])],-1),pw={__name:"39",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe,r=go;return b(),K(Ce,me(he(n)),{default:x(()=>[rw,E(l,X({},{ranges:[""]}),{default:x(()=>[aw]),_:1},16),E(r,null,{default:x(()=>[iw,E(l,X({},{ranges:[""]}),{default:x(()=>[cw]),_:1},16)]),_:1})]),_:1},16)}}},uw=J(pw,[["__file","/@slidev/slides/39.md"]]),dw=e("h1",null,"Exercise: Index",-1),fw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," index("),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"values"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"match"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return a dictionary from keys k to a list of values v for which ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    match(k, v) is a true value.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"index"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"values"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"match"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return a dictionary from keys k to a list of values v for which ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    match(k, v) is a true value.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')])])])],-1),yw=e("p",null,"答案：",-1),hw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"def"),e("span",{style:{color:"#B392F0"}}," index("),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"values"),e("span",{style:{color:"#BBBBBB"}},","),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#FF9800"}},"match"),e("span",{style:{color:"#B392F0"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#6B737C"}},'"""Return a dictionary from keys k to a list of values v for which ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    match(k, v) is a true value.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    "),e("span",{style:{color:"#F97583"}},">>> "),e("span",{style:{color:"#6B737C"}},"index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},"    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6B737C"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    "),e("span",{style:{color:"#F97583"}},"return"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#BBBBBB"}},"{"),e("span",{style:{color:"#B392F0"}},"k"),e("span",{style:{color:"#BBBBBB"}},":"),e("span",{style:{color:"#B392F0"}}," [v "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," v "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," values "),e("span",{style:{color:"#F97583"}},"if"),e("span",{style:{color:"#B392F0"}}," match"),e("span",{style:{color:"#BBBBBB"}},"(k, v)"),e("span",{style:{color:"#B392F0"}},"] "),e("span",{style:{color:"#F97583"}},"for"),e("span",{style:{color:"#B392F0"}}," k "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#B392F0"}}," keys"),e("span",{style:{color:"#BBBBBB"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D32F2F"}},"def"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"index"),e("span",{style:{color:"#24292EFF"}},"("),e("span",{style:{color:"#FF9800"}},"keys"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"values"),e("span",{style:{color:"#212121"}},","),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#FF9800"}},"match"),e("span",{style:{color:"#24292EFF"}},"):")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#C2C3C5"}},'"""Return a dictionary from keys k to a list of values v for which ')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    match(k, v) is a true value.")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    ")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    "),e("span",{style:{color:"#D32F2F"}},">>> "),e("span",{style:{color:"#C2C3C5"}},"index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},"    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C2C3C5"}},'    """')]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"    "),e("span",{style:{color:"#D32F2F"}},"return"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#212121"}},"{"),e("span",{style:{color:"#24292EFF"}},"k"),e("span",{style:{color:"#212121"}},":"),e("span",{style:{color:"#24292EFF"}}," [v "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," v "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," values "),e("span",{style:{color:"#D32F2F"}},"if"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#6F42C1"}},"match"),e("span",{style:{color:"#212121"}},"(k, v)"),e("span",{style:{color:"#24292EFF"}},"] "),e("span",{style:{color:"#D32F2F"}},"for"),e("span",{style:{color:"#24292EFF"}}," k "),e("span",{style:{color:"#D32F2F"}},"in"),e("span",{style:{color:"#24292EFF"}}," keys"),e("span",{style:{color:"#212121"}},"}")])])])],-1),mw={__name:"40",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>{const l=Oe,r=go;return b(),K(Ce,me(he(n)),{default:x(()=>[dw,E(l,X({},{ranges:[""]}),{default:x(()=>[fw]),_:1},16),E(r,null,{default:x(()=>[yw,E(l,X({},{ranges:[""]}),{default:x(()=>[hw]),_:1},16)]),_:1})]),_:1},16)}}},Fw=J(mw,[["__file","/@slidev/slides/40.md"]]),gw=e("h1",null,"Nested data",-1),_w=e("p",null,"Many useful way to combine lists and dicts:",-1),Bw=e("table",null,[e("thead",null,[e("tr",null,[e("th"),e("th")])]),e("tbody",null,[e("tr",null,[e("td",null,"Lists of lists"),e("td",null,[e("code",null,"[ [1, 2], [3, 4] ]")])]),e("tr",null,[e("td",null,"Dicts of dicts"),e("td",null,[e("code",null,'{"name": "Brazilian Breads", "location": {"lat": 37.8, "lng": -122}}')])]),e("tr",null,[e("td",null,"Dicts of lists"),e("td",null,[e("code",null,'{"heights": [89, 97], "ages": [6, 8]}')])]),e("tr",null,[e("td",null,"Lists of dicts"),e("td",null,[e("code",null,'[{"title": "Ponyo", "year": 2009}, {"title": "Totoro", "year": 1993}]')])])])],-1),vw={__name:"41",setup(t){const n={layout:"full",srcSequence:"./pages/dict.md"};return H(G),(s,o)=>(b(),K(Ce,me(he(n)),{default:x(()=>[gw,_w,Bw]),_:1},16))}},bw=J(vw,[["__file","/@slidev/slides/41.md"]]),ww=e("h1",null,"Thanks",-1),kw={__name:"42",setup(t){const n={layout:"center"};return H(G),(s,o)=>(b(),K(pn,me(he(n)),{default:x(()=>[ww]),_:1},16))}},Ew=J(kw,[["__file","/@slidev/slides/42.md"]]),xw=[{path:"1",name:"page-1",component:EB,meta:{theme:"unicorn",layout:"cover",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Python 数据结构",slide:{raw:`---
theme: unicorn
layout: cover
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
drawings:
  persist: True
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Python 数据结构

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

`,title:"Python 数据结构",level:1,content:`# Python 数据结构

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
</div>`,frontmatter:{theme:"unicorn",layout:"cover",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Python 数据结构"},index:0,start:0,end:36,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:SB,meta:{layout:"center",title:"Lists",srcSequence:"./pages/list.md",slide:{raw:null,title:"Lists",level:1,content:"# Lists",frontmatter:{layout:"center",title:"Lists",srcSequence:"./pages/list.md"},index:1,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: center
---

# Lists
`,title:"Lists",level:1,content:"# Lists",frontmatter:{layout:"center",title:"Lists"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/list.md
---
`,content:"",frontmatter:{},index:1,start:36,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:QB,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Lists

A list is a container that holds a sequence of related pieces of information.

The shortest list is an empty list, just 2 square brackets:

\`\`\`py
members = []
\`\`\`

Lists can hold any Python values, separated by commas:

\`\`\`py
members = ["Pamela", "Tinu", "Brenda", "Kaya"]

ages_of_kids = [1, 2, 7]

prices = [79.99, 49.99, 89.99]

digits = [2//2, 2+2+2+2, 2, 2*2*2]

remixed = ["Pamela", 7, 79.99, 2*2*2]
\`\`\`
`,title:"Lists",level:1,content:`# Lists

A list is a container that holds a sequence of related pieces of information.

The shortest list is an empty list, just 2 square brackets:

\`\`\`py
members = []
\`\`\`

Lists can hold any Python values, separated by commas:

\`\`\`py
members = ["Pamela", "Tinu", "Brenda", "Kaya"]

ages_of_kids = [1, 2, 7]

prices = [79.99, 49.99, 89.99]

digits = [2//2, 2+2+2+2, 2, 2*2*2]

remixed = ["Pamela", 7, 79.99, 2*2*2]
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:2,start:6,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Lists

A list is a container that holds a sequence of related pieces of information.

The shortest list is an empty list, just 2 square brackets:

\`\`\`py
members = []
\`\`\`

Lists can hold any Python values, separated by commas:

\`\`\`py
members = ["Pamela", "Tinu", "Brenda", "Kaya"]

ages_of_kids = [1, 2, 7]

prices = [79.99, 49.99, 89.99]

digits = [2//2, 2+2+2+2, 2, 2*2*2]

remixed = ["Pamela", 7, 79.99, 2*2*2]
\`\`\`
`,title:"Lists",level:1,content:`# Lists

A list is a container that holds a sequence of related pieces of information.

The shortest list is an empty list, just 2 square brackets:

\`\`\`py
members = []
\`\`\`

Lists can hold any Python values, separated by commas:

\`\`\`py
members = ["Pamela", "Tinu", "Brenda", "Kaya"]

ages_of_kids = [1, 2, 7]

prices = [79.99, 49.99, 89.99]

digits = [2//2, 2+2+2+2, 2, 2*2*2]

remixed = ["Pamela", 7, 79.99, 2*2*2]
\`\`\``,frontmatter:{layout:"full"},index:1,start:6,end:34},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:sv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# List length

Use the global \`len()\` function to find the length of a list.

\`\`\`py
attendees = ["Tammy", "Shonda", "Tina"]

print(len(attendees))   #  3

num_of_attendees = len(attendees)
print(num_of_attendees)
\`\`\`
`,title:"List length",level:1,content:`# List length

Use the global \`len()\` function to find the length of a list.

\`\`\`py
attendees = ["Tammy", "Shonda", "Tina"]

print(len(attendees))   #  3

num_of_attendees = len(attendees)
print(num_of_attendees)
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:3,start:34,end:51,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# List length

Use the global \`len()\` function to find the length of a list.

\`\`\`py
attendees = ["Tammy", "Shonda", "Tina"]

print(len(attendees))   #  3

num_of_attendees = len(attendees)
print(num_of_attendees)
\`\`\`
`,title:"List length",level:1,content:`# List length

Use the global \`len()\` function to find the length of a list.

\`\`\`py
attendees = ["Tammy", "Shonda", "Tina"]

print(len(attendees))   #  3

num_of_attendees = len(attendees)
print(num_of_attendees)
\`\`\``,frontmatter:{layout:"full"},index:2,start:34,end:51},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:fv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Accessing list items (brackets)

Each list item has an index, starting from 0.

\`\`\`py
letters = ['A', 'B', 'C']
# Index:   0     1     2
\`\`\`

Access each item by putting the index in brackets:

\`\`\`py
letters[0]  # 'A'
letters[1]  # 'B'
letters[2]  # 'C'
letters[3]  # 🚫 Error!
\`\`\`

\`\`\`py
curr_ind = 1
letters[curr_ind] # 'B'
\`\`\`

Negative indices are also possible:

\`\`\`py
letters[-1]  # 'C'
letters[-2]  # 'B'
letters[-4]  # 🚫 Error!
\`\`\`
`,title:"Accessing list items (brackets)",level:1,content:`# Accessing list items (brackets)

Each list item has an index, starting from 0.

\`\`\`py
letters = ['A', 'B', 'C']
# Index:   0     1     2
\`\`\`

Access each item by putting the index in brackets:

\`\`\`py
letters[0]  # 'A'
letters[1]  # 'B'
letters[2]  # 'C'
letters[3]  # 🚫 Error!
\`\`\`

\`\`\`py
curr_ind = 1
letters[curr_ind] # 'B'
\`\`\`

Negative indices are also possible:

\`\`\`py
letters[-1]  # 'C'
letters[-2]  # 'B'
letters[-4]  # 🚫 Error!
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:4,start:51,end:86,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Accessing list items (brackets)

Each list item has an index, starting from 0.

\`\`\`py
letters = ['A', 'B', 'C']
# Index:   0     1     2
\`\`\`

Access each item by putting the index in brackets:

\`\`\`py
letters[0]  # 'A'
letters[1]  # 'B'
letters[2]  # 'C'
letters[3]  # 🚫 Error!
\`\`\`

\`\`\`py
curr_ind = 1
letters[curr_ind] # 'B'
\`\`\`

Negative indices are also possible:

\`\`\`py
letters[-1]  # 'C'
letters[-2]  # 'B'
letters[-4]  # 🚫 Error!
\`\`\`
`,title:"Accessing list items (brackets)",level:1,content:`# Accessing list items (brackets)

Each list item has an index, starting from 0.

\`\`\`py
letters = ['A', 'B', 'C']
# Index:   0     1     2
\`\`\`

Access each item by putting the index in brackets:

\`\`\`py
letters[0]  # 'A'
letters[1]  # 'B'
letters[2]  # 'C'
letters[3]  # 🚫 Error!
\`\`\`

\`\`\`py
curr_ind = 1
letters[curr_ind] # 'B'
\`\`\`

Negative indices are also possible:

\`\`\`py
letters[-1]  # 'C'
letters[-2]  # 'B'
letters[-4]  # 🚫 Error!
\`\`\``,frontmatter:{layout:"full"},index:3,start:51,end:86},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Bv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# List concatenation

Add two lists together using the + operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = boba_prices + smoothie_prices
\`\`\`

Or the \`add\` function:

\`\`\`py
from operator import add

boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = add(boba_prices, smoothie_prices)
\`\`\`
`,title:"List concatenation",level:1,content:`# List concatenation

Add two lists together using the + operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = boba_prices + smoothie_prices
\`\`\`

Or the \`add\` function:

\`\`\`py
from operator import add

boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = add(boba_prices, smoothie_prices)
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:5,start:86,end:110,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# List concatenation

Add two lists together using the + operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = boba_prices + smoothie_prices
\`\`\`

Or the \`add\` function:

\`\`\`py
from operator import add

boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = add(boba_prices, smoothie_prices)
\`\`\`
`,title:"List concatenation",level:1,content:`# List concatenation

Add two lists together using the + operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = boba_prices + smoothie_prices
\`\`\`

Or the \`add\` function:

\`\`\`py
from operator import add

boba_prices = [5.50, 6.50, 7.50]
smoothie_prices = [7.00, 7.50]
all_prices = add(boba_prices, smoothie_prices)
\`\`\``,frontmatter:{layout:"full"},index:4,start:86,end:110},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Dv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# List repetition

Concatenate the same list multiple times using the * operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]

more_boba = boba_prices * 3
\`\`\`

Or the \`mul\` function:

\`\`\`py
from operator import mul

boba_prices = [5.50, 6.50, 7.50]
more_boba = mul(boba_prices, 3)
\`\`\`

All together now:

\`\`\`py
digits = [1, 9, 8, 4]
together = [6, 2, 4] + digits * 2 # [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]
together = add([2, 7], mul(digits, 2))
\`\`\`
`,title:"List repetition",level:1,content:`# List repetition

Concatenate the same list multiple times using the * operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]

more_boba = boba_prices * 3
\`\`\`

Or the \`mul\` function:

\`\`\`py
from operator import mul

boba_prices = [5.50, 6.50, 7.50]
more_boba = mul(boba_prices, 3)
\`\`\`

All together now:

\`\`\`py
digits = [1, 9, 8, 4]
together = [6, 2, 4] + digits * 2 # [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]
together = add([2, 7], mul(digits, 2))
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:6,start:110,end:141,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# List repetition

Concatenate the same list multiple times using the * operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]

more_boba = boba_prices * 3
\`\`\`

Or the \`mul\` function:

\`\`\`py
from operator import mul

boba_prices = [5.50, 6.50, 7.50]
more_boba = mul(boba_prices, 3)
\`\`\`

All together now:

\`\`\`py
digits = [1, 9, 8, 4]
together = [6, 2, 4] + digits * 2 # [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]
together = add([2, 7], mul(digits, 2))
\`\`\`
`,title:"List repetition",level:1,content:`# List repetition

Concatenate the same list multiple times using the * operator:

\`\`\`py
boba_prices = [5.50, 6.50, 7.50]

more_boba = boba_prices * 3
\`\`\`

Or the \`mul\` function:

\`\`\`py
from operator import mul

boba_prices = [5.50, 6.50, 7.50]
more_boba = mul(boba_prices, 3)
\`\`\`

All together now:

\`\`\`py
digits = [1, 9, 8, 4]
together = [6, 2, 4] + digits * 2 # [6, 2, 4, 1, 9, 8, 4, 1, 9, 8, 4]
together = add([2, 7], mul(digits, 2))
\`\`\``,frontmatter:{layout:"full"},index:5,start:110,end:141},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Nv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Nested Lists

Since Python lists can contain any values, an item can itself be a list.

\`\`\`py
gymnasts = [ ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8] ]
\`\`\`

- What's the length of gymnasts? 

<v-click>

3

</v-click>

- What's the length of gymnasts[0]? 

<v-click>

5

</v-click>

`,title:"Nested Lists",level:1,content:`# Nested Lists

Since Python lists can contain any values, an item can itself be a list.

\`\`\`py
gymnasts = [ ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8] ]
\`\`\`

- What's the length of gymnasts? 

<v-click>

3

</v-click>

- What's the length of gymnasts[0]? 

<v-click>

5

</v-click>`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:7,start:141,end:172,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Nested Lists

Since Python lists can contain any values, an item can itself be a list.

\`\`\`py
gymnasts = [ ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8] ]
\`\`\`

- What's the length of gymnasts? 

<v-click>

3

</v-click>

- What's the length of gymnasts[0]? 

<v-click>

5

</v-click>

`,title:"Nested Lists",level:1,content:`# Nested Lists

Since Python lists can contain any values, an item can itself be a list.

\`\`\`py
gymnasts = [ ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8] ]
\`\`\`

- What's the length of gymnasts? 

<v-click>

3

</v-click>

- What's the length of gymnasts[0]? 

<v-click>

5

</v-click>`,frontmatter:{layout:"full"},index:6,start:141,end:172},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Wv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Accessing nested list items

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Access using bracket notation, with more brackets as needed:

\`\`\`py
gymnasts[0]    # ["Brittany", 9.15, 9.4, 9.3, 9.2]
gymnasts[0][0] # "Brittany"
gymnasts[1][0] # "Lea"
gymnasts[1][4] # 9.5
gymnasts[1][5] # 🚫 IndexError!
gymnasts[3][0] # 🚫 IndexError!
\`\`\`

`,title:"Accessing nested list items",level:1,content:`# Accessing nested list items

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Access using bracket notation, with more brackets as needed:

\`\`\`py
gymnasts[0]    # ["Brittany", 9.15, 9.4, 9.3, 9.2]
gymnasts[0][0] # "Brittany"
gymnasts[1][0] # "Lea"
gymnasts[1][4] # 9.5
gymnasts[1][5] # 🚫 IndexError!
gymnasts[3][0] # 🚫 IndexError!
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:8,start:172,end:198,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Accessing nested list items

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Access using bracket notation, with more brackets as needed:

\`\`\`py
gymnasts[0]    # ["Brittany", 9.15, 9.4, 9.3, 9.2]
gymnasts[0][0] # "Brittany"
gymnasts[1][0] # "Lea"
gymnasts[1][4] # 9.5
gymnasts[1][5] # 🚫 IndexError!
gymnasts[3][0] # 🚫 IndexError!
\`\`\`

`,title:"Accessing nested list items",level:1,content:`# Accessing nested list items

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Access using bracket notation, with more brackets as needed:

\`\`\`py
gymnasts[0]    # ["Brittany", 9.15, 9.4, 9.3, 9.2]
gymnasts[0][0] # "Brittany"
gymnasts[1][0] # "Lea"
gymnasts[1][4] # 9.5
gymnasts[1][5] # 🚫 IndexError!
gymnasts[3][0] # 🚫 IndexError!
\`\`\``,frontmatter:{layout:"full"},index:7,start:172,end:198},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Gv,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Containment operator

Use the \`in\` operator to test if value is inside a container:

\`\`\`py
digits = [2, 8, 3, 1, 8, 5, 3, 0, 7, 1]

1 in digits # True

3 in digits # True

4 in digits # False

not (4 in digits) # True
\`\`\`
`,title:"Containment operator",level:1,content:`# Containment operator

Use the \`in\` operator to test if value is inside a container:

\`\`\`py
digits = [2, 8, 3, 1, 8, 5, 3, 0, 7, 1]

1 in digits # True

3 in digits # True

4 in digits # False

not (4 in digits) # True
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:9,start:198,end:218,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Containment operator

Use the \`in\` operator to test if value is inside a container:

\`\`\`py
digits = [2, 8, 3, 1, 8, 5, 3, 0, 7, 1]

1 in digits # True

3 in digits # True

4 in digits # False

not (4 in digits) # True
\`\`\`
`,title:"Containment operator",level:1,content:`# Containment operator

Use the \`in\` operator to test if value is inside a container:

\`\`\`py
digits = [2, 8, 3, 1, 8, 5, 3, 0, 7, 1]

1 in digits # True

3 in digits # True

4 in digits # False

not (4 in digits) # True
\`\`\``,frontmatter:{layout:"full"},index:8,start:198,end:218},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Xv,meta:{layout:"center",srcSequence:"./pages/list.md",slide:{raw:`---
layout: center
---

# For statements
`,title:"For statements",level:1,content:"# For statements",frontmatter:{layout:"center",srcSequence:"./pages/list.md"},index:10,start:218,end:224,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: center
---

# For statements
`,title:"For statements",level:1,content:"# For statements",frontmatter:{layout:"center"},index:9,start:218,end:224},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:r9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# For loop

The for loop syntax:

\`\`\`py
for <value> in <sequence>:
    <statement>
    <statement>
\`\`\`

The for loop provides a cleaner way to write many \`while\` loops, as long as they are iterating over some sort of sequence.

\`\`\`py
def count(s, value):
    total = 0
    for element in s:
        if element == value:
            total = total + 1
    return total
\`\`\`
`,title:"For loop",level:1,content:`# For loop

The for loop syntax:

\`\`\`py
for <value> in <sequence>:
    <statement>
    <statement>
\`\`\`

The for loop provides a cleaner way to write many \`while\` loops, as long as they are iterating over some sort of sequence.

\`\`\`py
def count(s, value):
    total = 0
    for element in s:
        if element == value:
            total = total + 1
    return total
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:11,start:224,end:249,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# For loop

The for loop syntax:

\`\`\`py
for <value> in <sequence>:
    <statement>
    <statement>
\`\`\`

The for loop provides a cleaner way to write many \`while\` loops, as long as they are iterating over some sort of sequence.

\`\`\`py
def count(s, value):
    total = 0
    for element in s:
        if element == value:
            total = total + 1
    return total
\`\`\`
`,title:"For loop",level:1,content:`# For loop

The for loop syntax:

\`\`\`py
for <value> in <sequence>:
    <statement>
    <statement>
\`\`\`

The for loop provides a cleaner way to write many \`while\` loops, as long as they are iterating over some sort of sequence.

\`\`\`py
def count(s, value):
    total = 0
    for element in s:
        if element == value:
            total = total + 1
    return total
\`\`\``,frontmatter:{layout:"full"},index:10,start:224,end:249},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:u9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# For statement execution procedure

\`\`\`py
for <name> in <expression>:
    <suite>
\`\`\`

- Evaluate the header \\<expression\\>, which must yield an iterable value (a sequence)
- For each element in that sequence, in order:
    1. Bind \\<name\\> to that element in the current frame
    2. Execute the \\<suite\\>
`,title:"For statement execution procedure",level:1,content:`# For statement execution procedure

\`\`\`py
for <name> in <expression>:
    <suite>
\`\`\`

- Evaluate the header \\<expression\\>, which must yield an iterable value (a sequence)
- For each element in that sequence, in order:
    1. Bind \\<name\\> to that element in the current frame
    2. Execute the \\<suite\\>`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:12,start:249,end:265,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# For statement execution procedure

\`\`\`py
for <name> in <expression>:
    <suite>
\`\`\`

- Evaluate the header \\<expression\\>, which must yield an iterable value (a sequence)
- For each element in that sequence, in order:
    1. Bind \\<name\\> to that element in the current frame
    2. Execute the \\<suite\\>
`,title:"For statement execution procedure",level:1,content:`# For statement execution procedure

\`\`\`py
for <name> in <expression>:
    <suite>
\`\`\`

- Evaluate the header \\<expression\\>, which must yield an iterable value (a sequence)
- For each element in that sequence, in order:
    1. Bind \\<name\\> to that element in the current frame
    2. Execute the \\<suite\\>`,frontmatter:{layout:"full"},index:11,start:249,end:265},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:g9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Looping through nested lists

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Use a nested \`for-in\` loop:

\`\`\`py
for gymnast in gymnasts:
    for data in gymnast:
        print(data, end="|")
\`\`\`

Remember what type of data is being stored in the loop variable!

`,title:"Looping through nested lists",level:1,content:`# Looping through nested lists

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Use a nested \`for-in\` loop:

\`\`\`py
for gymnast in gymnasts:
    for data in gymnast:
        print(data, end="|")
\`\`\`

Remember what type of data is being stored in the loop variable!`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:13,start:265,end:290,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Looping through nested lists

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Use a nested \`for-in\` loop:

\`\`\`py
for gymnast in gymnasts:
    for data in gymnast:
        print(data, end="|")
\`\`\`

Remember what type of data is being stored in the loop variable!

`,title:"Looping through nested lists",level:1,content:`# Looping through nested lists

\`\`\`py
gymnasts = [
                ["Brittany", 9.15, 9.4, 9.3, 9.2],
                ["Lea", 9, 8.8, 9.1, 9.5],
                ["Maya", 9.2, 8.7, 9.2, 8.8]
            ]
\`\`\`

Use a nested \`for-in\` loop:

\`\`\`py
for gymnast in gymnasts:
    for data in gymnast:
        print(data, end="|")
\`\`\`

Remember what type of data is being stored in the loop variable!`,frontmatter:{layout:"full"},index:12,start:265,end:290},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:w9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Sequence unpacking in for statements

\`\`\`py
pairs = [[1, 2], [2, 2], [3, 2], [4, 4]]
same_count = 0

for x, y in pairs:
    if x == y:
        same_count = same_count + 1
\`\`\`

Each name is bound to a value, like in multiple assignment.
`,title:"Sequence unpacking in for statements",level:1,content:`# Sequence unpacking in for statements

\`\`\`py
pairs = [[1, 2], [2, 2], [3, 2], [4, 4]]
same_count = 0

for x, y in pairs:
    if x == y:
        same_count = same_count + 1
\`\`\`

Each name is bound to a value, like in multiple assignment.`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:14,start:290,end:307,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Sequence unpacking in for statements

\`\`\`py
pairs = [[1, 2], [2, 2], [3, 2], [4, 4]]
same_count = 0

for x, y in pairs:
    if x == y:
        same_count = same_count + 1
\`\`\`

Each name is bound to a value, like in multiple assignment.
`,title:"Sequence unpacking in for statements",level:1,content:`# Sequence unpacking in for statements

\`\`\`py
pairs = [[1, 2], [2, 2], [3, 2], [4, 4]]
same_count = 0

for x, y in pairs:
    if x == y:
        same_count = same_count + 1
\`\`\`

Each name is bound to a value, like in multiple assignment.`,frontmatter:{layout:"full"},index:13,start:290,end:307},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:x9,meta:{layout:"center",srcSequence:"./pages/list.md",slide:{raw:`---
layout: center
---

# Ranges
`,title:"Ranges",level:1,content:"# Ranges",frontmatter:{layout:"center",srcSequence:"./pages/list.md"},index:15,start:307,end:313,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: center
---

# Ranges
`,title:"Ranges",level:1,content:"# Ranges",frontmatter:{layout:"center"},index:14,start:307,end:313},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:L9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# The range type

A range represents a sequence of integers.

\`\`\`py
... -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5...
                range(-2, 3)
\`\`\`

If just one argument, range starts at 0 and ends just before it:

\`\`\`py
for num in range(6):
    print(num)       # 0, 1, 2, 3, 4, 5
\`\`\`

If two arguments, range starts at first and ends just before second:

\`\`\`py
for num in range(1, 6):
    print(num)       # 1, 2, 3, 4, 5
\`\`\`
`,title:"The range type",level:1,content:`# The range type

A range represents a sequence of integers.

\`\`\`py
... -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5...
                range(-2, 3)
\`\`\`

If just one argument, range starts at 0 and ends just before it:

\`\`\`py
for num in range(6):
    print(num)       # 0, 1, 2, 3, 4, 5
\`\`\`

If two arguments, range starts at first and ends just before second:

\`\`\`py
for num in range(1, 6):
    print(num)       # 1, 2, 3, 4, 5
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:16,start:313,end:340,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# The range type

A range represents a sequence of integers.

\`\`\`py
... -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5...
                range(-2, 3)
\`\`\`

If just one argument, range starts at 0 and ends just before it:

\`\`\`py
for num in range(6):
    print(num)       # 0, 1, 2, 3, 4, 5
\`\`\`

If two arguments, range starts at first and ends just before second:

\`\`\`py
for num in range(1, 6):
    print(num)       # 1, 2, 3, 4, 5
\`\`\`
`,title:"The range type",level:1,content:`# The range type

A range represents a sequence of integers.

\`\`\`py
... -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5...
                range(-2, 3)
\`\`\`

If just one argument, range starts at 0 and ends just before it:

\`\`\`py
for num in range(6):
    print(num)       # 0, 1, 2, 3, 4, 5
\`\`\`

If two arguments, range starts at first and ends just before second:

\`\`\`py
for num in range(1, 6):
    print(num)       # 1, 2, 3, 4, 5
\`\`\``,frontmatter:{layout:"full"},index:15,start:313,end:340},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:R9,meta:{layout:"center",srcSequence:"./pages/list.md",slide:{raw:`---
layout: center
---

# List comprehensions
`,title:"List comprehensions",level:1,content:"# List comprehensions",frontmatter:{layout:"center",srcSequence:"./pages/list.md"},index:17,start:340,end:346,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: center
---

# List comprehensions
`,title:"List comprehensions",level:1,content:"# List comprehensions",frontmatter:{layout:"center"},index:16,start:340,end:346},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Y9,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# List comprehension syntax

A way to create a new list by "mapping" an existing list.

Short version:

\`\`\`py
[<map exp> for <name> in <iter exp>]
\`\`\`

\`\`\`py
odds = [1, 3, 5, 7, 9]
evens = [(num + 1) for num in odds]
\`\`\`

Long version (with filter):

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

\`\`\`py
temps = [60, 65, 71, 67, 77, 89]
hot = [temp for temp in temps if temp > 70]
\`\`\`
`,title:"List comprehension syntax",level:1,content:'# List comprehension syntax\n\nA way to create a new list by "mapping" an existing list.\n\nShort version:\n\n```py\n[<map exp> for <name> in <iter exp>]\n```\n\n```py\nodds = [1, 3, 5, 7, 9]\nevens = [(num + 1) for num in odds]\n```\n\nLong version (with filter):\n\n```py\n[<map exp> for <name> in <iter exp> if <filter exp>]\n```\n\n```py\ntemps = [60, 65, 71, 67, 77, 89]\nhot = [temp for temp in temps if temp > 70]\n```',frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:18,start:346,end:376,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# List comprehension syntax

A way to create a new list by "mapping" an existing list.

Short version:

\`\`\`py
[<map exp> for <name> in <iter exp>]
\`\`\`

\`\`\`py
odds = [1, 3, 5, 7, 9]
evens = [(num + 1) for num in odds]
\`\`\`

Long version (with filter):

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

\`\`\`py
temps = [60, 65, 71, 67, 77, 89]
hot = [temp for temp in temps if temp > 70]
\`\`\`
`,title:"List comprehension syntax",level:1,content:'# List comprehension syntax\n\nA way to create a new list by "mapping" an existing list.\n\nShort version:\n\n```py\n[<map exp> for <name> in <iter exp>]\n```\n\n```py\nodds = [1, 3, 5, 7, 9]\nevens = [(num + 1) for num in odds]\n```\n\nLong version (with filter):\n\n```py\n[<map exp> for <name> in <iter exp> if <filter exp>]\n```\n\n```py\ntemps = [60, 65, 71, 67, 77, 89]\nhot = [temp for temp in temps if temp > 70]\n```',frontmatter:{layout:"full"},index:17,start:346,end:376},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:e3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# List comprehension execution procedure

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

- Add a new frame with the current frame as its parent
- Create an empty result list that is the value of the expression
- For each element in the iterable value of \\<iter exp\\>:
    - Bind \\<name\\> to that element in the new frame from step 1
    - If \\<filter exp\\> evaluates to a true value, then add the value of \\<map exp\\> to the result list

\`\`\`py
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'n', 'o', 'p']
word = [letters[i] for i in [3, 4, 6, 8]]
\`\`\`
`,title:"List comprehension execution procedure",level:1,content:`# List comprehension execution procedure

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

- Add a new frame with the current frame as its parent
- Create an empty result list that is the value of the expression
- For each element in the iterable value of \\<iter exp\\>:
    - Bind \\<name\\> to that element in the new frame from step 1
    - If \\<filter exp\\> evaluates to a true value, then add the value of \\<map exp\\> to the result list

\`\`\`py
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'n', 'o', 'p']
word = [letters[i] for i in [3, 4, 6, 8]]
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:19,start:376,end:397,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# List comprehension execution procedure

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

- Add a new frame with the current frame as its parent
- Create an empty result list that is the value of the expression
- For each element in the iterable value of \\<iter exp\\>:
    - Bind \\<name\\> to that element in the new frame from step 1
    - If \\<filter exp\\> evaluates to a true value, then add the value of \\<map exp\\> to the result list

\`\`\`py
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'n', 'o', 'p']
word = [letters[i] for i in [3, 4, 6, 8]]
\`\`\`
`,title:"List comprehension execution procedure",level:1,content:`# List comprehension execution procedure

\`\`\`py
[<map exp> for <name> in <iter exp> if <filter exp>]
\`\`\`

- Add a new frame with the current frame as its parent
- Create an empty result list that is the value of the expression
- For each element in the iterable value of \\<iter exp\\>:
    - Bind \\<name\\> to that element in the new frame from step 1
    - If \\<filter exp\\> evaluates to a true value, then add the value of \\<map exp\\> to the result list

\`\`\`py
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'n', 'o', 'p']
word = [letters[i] for i in [3, 4, 6, 8]]
\`\`\``,frontmatter:{layout:"full"},index:18,start:376,end:397},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:a3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Exercise: Divisors

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
    return [x for x in range(1, n) if n % x == 0]
\`\`\`

</v-click>

`,title:"Exercise: Divisors",level:1,content:`# Exercise: Divisors

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
    return [x for x in range(1, n) if n % x == 0]
\`\`\`

</v-click>`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:20,start:397,end:431,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Exercise: Divisors

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
    return [x for x in range(1, n) if n % x == 0]
\`\`\`

</v-click>

`,title:"Exercise: Divisors",level:1,content:`# Exercise: Divisors

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def divisors(n):
    """Returns all the divisors of N.

    >>> divisors(12)
    [1, 2, 3, 4, 6]
    """
    return [x for x in range(1, n) if n % x == 0]
\`\`\`

</v-click>`,frontmatter:{layout:"full"},index:19,start:397,end:431},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:y3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Exercise: Frontloaded

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
    return [e for e in s if f(e)] + [e for e in s if not f(e)]
\`\`\`

</v-click>
`,title:"Exercise: Frontloaded",level:1,content:`# Exercise: Frontloaded

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
    return [e for e in s if f(e)] + [e for e in s if not f(e)]
\`\`\`

</v-click>`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:21,start:431,end:464,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Exercise: Frontloaded

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
    return [e for e in s if f(e)] + [e for e in s if not f(e)]
\`\`\`

</v-click>
`,title:"Exercise: Frontloaded",level:1,content:`# Exercise: Frontloaded

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
\`\`\`

<br/>

<v-click>

答案: 

\`\`\`py
def front(s, f):
    """Return S but with elements chosen by F at the front.

    >>> front(range(10), lambda x: x % 2 == 1)  # odds in front
    [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
    """
    return [e for e in s if f(e)] + [e for e in s if not f(e)]
\`\`\`

</v-click>`,frontmatter:{layout:"full"},index:20,start:431,end:464},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:F3,meta:{layout:"center",srcSequence:"./pages/list.md",slide:{raw:`---
layout: center
---

# Slicing
`,title:"Slicing",level:1,content:"# Slicing",frontmatter:{layout:"center",srcSequence:"./pages/list.md"},index:22,start:464,end:470,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: center
---

# Slicing
`,title:"Slicing",level:1,content:"# Slicing",frontmatter:{layout:"center"},index:21,start:464,end:470},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:E3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Slicing syntax

Slicing a list creates a new list with a subsequence of the original list.

\`\`\`py
letters = ["A", "B", "C", "D", "E", "F"]
        #   0    1    2    3    4    5

sublist1 = letters[1:]    # ['B', 'C', 'D', 'E', 'F']
sublist2 = letters[1:4]   # ['B', 'C', 'D']
\`\`\`

Slicing also works for strings.

\`\`\`py
compound_word = "cortaúñas"

word1 = compound_word[:5]    # "corta"
word2 = compound_word[5:]   # "úñas"
\`\`\`

Negatives indices and steps can also be specified.
`,title:"Slicing syntax",level:1,content:`# Slicing syntax

Slicing a list creates a new list with a subsequence of the original list.

\`\`\`py
letters = ["A", "B", "C", "D", "E", "F"]
        #   0    1    2    3    4    5

sublist1 = letters[1:]    # ['B', 'C', 'D', 'E', 'F']
sublist2 = letters[1:4]   # ['B', 'C', 'D']
\`\`\`

Slicing also works for strings.

\`\`\`py
compound_word = "cortaúñas"

word1 = compound_word[:5]    # "corta"
word2 = compound_word[5:]   # "úñas"
\`\`\`

Negatives indices and steps can also be specified.`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:23,start:470,end:497,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Slicing syntax

Slicing a list creates a new list with a subsequence of the original list.

\`\`\`py
letters = ["A", "B", "C", "D", "E", "F"]
        #   0    1    2    3    4    5

sublist1 = letters[1:]    # ['B', 'C', 'D', 'E', 'F']
sublist2 = letters[1:4]   # ['B', 'C', 'D']
\`\`\`

Slicing also works for strings.

\`\`\`py
compound_word = "cortaúñas"

word1 = compound_word[:5]    # "corta"
word2 = compound_word[5:]   # "úñas"
\`\`\`

Negatives indices and steps can also be specified.
`,title:"Slicing syntax",level:1,content:`# Slicing syntax

Slicing a list creates a new list with a subsequence of the original list.

\`\`\`py
letters = ["A", "B", "C", "D", "E", "F"]
        #   0    1    2    3    4    5

sublist1 = letters[1:]    # ['B', 'C', 'D', 'E', 'F']
sublist2 = letters[1:4]   # ['B', 'C', 'D']
\`\`\`

Slicing also works for strings.

\`\`\`py
compound_word = "cortaúñas"

word1 = compound_word[:5]    # "corta"
word2 = compound_word[5:]   # "úñas"
\`\`\`

Negatives indices and steps can also be specified.`,frontmatter:{layout:"full"},index:22,start:470,end:497},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:T3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---

# Copying whole lists

Slicing a whole list copies a list:

\`\`\`py
listA = [2, 3]
listB = listA

listC = listA[:]
listA[0] = 4
listB[1] = 5
\`\`\`

\`list()\` creates a new list containing existing elements from any iterable:

\`\`\`py
listA = [2, 3]
listB = listA

listC = list(listA)
listA[0] = 4
listB[1] = 5
\`\`\`

Python3 provides more ways in the [copy module](https://docs.python.org/3/library/copy.html).

`,title:"Copying whole lists",level:1,content:`# Copying whole lists

Slicing a whole list copies a list:

\`\`\`py
listA = [2, 3]
listB = listA

listC = listA[:]
listA[0] = 4
listB[1] = 5
\`\`\`

\`list()\` creates a new list containing existing elements from any iterable:

\`\`\`py
listA = [2, 3]
listB = listA

listC = list(listA)
listA[0] = 4
listB[1] = 5
\`\`\`

Python3 provides more ways in the [copy module](https://docs.python.org/3/library/copy.html).`,frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:24,start:497,end:528,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---

# Copying whole lists

Slicing a whole list copies a list:

\`\`\`py
listA = [2, 3]
listB = listA

listC = listA[:]
listA[0] = 4
listB[1] = 5
\`\`\`

\`list()\` creates a new list containing existing elements from any iterable:

\`\`\`py
listA = [2, 3]
listB = listA

listC = list(listA)
listA[0] = 4
listB[1] = 5
\`\`\`

Python3 provides more ways in the [copy module](https://docs.python.org/3/library/copy.html).

`,title:"Copying whole lists",level:1,content:`# Copying whole lists

Slicing a whole list copies a list:

\`\`\`py
listA = [2, 3]
listB = listA

listC = listA[:]
listA[0] = 4
listB[1] = 5
\`\`\`

\`list()\` creates a new list containing existing elements from any iterable:

\`\`\`py
listA = [2, 3]
listB = listA

listC = list(listA)
listA[0] = 4
listB[1] = 5
\`\`\`

Python3 provides more ways in the [copy module](https://docs.python.org/3/library/copy.html).`,frontmatter:{layout:"full"},index:23,start:497,end:528},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:L3,meta:{layout:"full",srcSequence:"./pages/list.md",slide:{raw:`---
layout: full
---`,content:"",frontmatter:{layout:"full",srcSequence:"./pages/list.md"},index:25,start:528,end:531,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",raw:`---
layout: full
---`,content:"",frontmatter:{layout:"full"},index:24,start:528,end:531},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/list.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:R3,meta:{layout:"center",title:"Tuples",srcSequence:"./pages/tuple.md",slide:{raw:null,title:"Tuples",level:1,content:"# Tuples",frontmatter:{layout:"center",title:"Tuples",srcSequence:"./pages/tuple.md"},index:26,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: center
---

# Tuples
`,title:"Tuples",level:1,content:"# Tuples",frontmatter:{layout:"center",title:"Tuples"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/tuple.md
---
`,content:"",frontmatter:{},index:2,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Y3,meta:{layout:"full",srcSequence:"./pages/tuple.md",slide:{raw:`---
layout: full
---

# Tuples

A **tuple** is an immutable sequence. It's like a list, but no mutation allowed!

An empty tuple:

\`\`\`py
empty = ()
# or
empty = tuple()
\`\`\`

A tuple with multiple elements:

\`\`\`py
conditions = ('rain', 'shine')
# or
conditions = 'rain', 'shine'
\`\`\`

A tuple with a single element: 🙀

\`\`\`py
oogly = (61,)
# or
oogly = 61,
\`\`\`
`,title:"Tuples",level:1,content:`# Tuples

A **tuple** is an immutable sequence. It's like a list, but no mutation allowed!

An empty tuple:

\`\`\`py
empty = ()
# or
empty = tuple()
\`\`\`

A tuple with multiple elements:

\`\`\`py
conditions = ('rain', 'shine')
# or
conditions = 'rain', 'shine'
\`\`\`

A tuple with a single element: 🙀

\`\`\`py
oogly = (61,)
# or
oogly = 61,
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/tuple.md"},index:27,start:6,end:38,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: full
---

# Tuples

A **tuple** is an immutable sequence. It's like a list, but no mutation allowed!

An empty tuple:

\`\`\`py
empty = ()
# or
empty = tuple()
\`\`\`

A tuple with multiple elements:

\`\`\`py
conditions = ('rain', 'shine')
# or
conditions = 'rain', 'shine'
\`\`\`

A tuple with a single element: 🙀

\`\`\`py
oogly = (61,)
# or
oogly = 61,
\`\`\`
`,title:"Tuples",level:1,content:`# Tuples

A **tuple** is an immutable sequence. It's like a list, but no mutation allowed!

An empty tuple:

\`\`\`py
empty = ()
# or
empty = tuple()
\`\`\`

A tuple with multiple elements:

\`\`\`py
conditions = ('rain', 'shine')
# or
conditions = 'rain', 'shine'
\`\`\`

A tuple with a single element: 🙀

\`\`\`py
oogly = (61,)
# or
oogly = 61,
\`\`\``,frontmatter:{layout:"full"},index:1,start:6,end:38},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:ob,meta:{layout:"full",srcSequence:"./pages/tuple.md",slide:{raw:`---
layout: full
---

# Tuple operations

Many of list's read-only operations work on tuples.

Combining tuples into a new tuple:

\`\`\`py
('come', '☂') + ('or', '☼')  # ('come', '☂', 'or', '☼')
\`\`\`

Checking containment:

\`\`\`py
'wally' in ('wall-e', 'wallace', 'waldo')  # True
\`\`\`

Slicing:

\`\`\`py
rainbow = ('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
roy = rainbow[:3]  # ('red', 'orange', 'yellow')

\`\`\`
`,title:"Tuple operations",level:1,content:`# Tuple operations

Many of list's read-only operations work on tuples.

Combining tuples into a new tuple:

\`\`\`py
('come', '☂') + ('or', '☼')  # ('come', '☂', 'or', '☼')
\`\`\`

Checking containment:

\`\`\`py
'wally' in ('wall-e', 'wallace', 'waldo')  # True
\`\`\`

Slicing:

\`\`\`py
rainbow = ('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
roy = rainbow[:3]  # ('red', 'orange', 'yellow')

\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/tuple.md"},index:28,start:38,end:66,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: full
---

# Tuple operations

Many of list's read-only operations work on tuples.

Combining tuples into a new tuple:

\`\`\`py
('come', '☂') + ('or', '☼')  # ('come', '☂', 'or', '☼')
\`\`\`

Checking containment:

\`\`\`py
'wally' in ('wall-e', 'wallace', 'waldo')  # True
\`\`\`

Slicing:

\`\`\`py
rainbow = ('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
roy = rainbow[:3]  # ('red', 'orange', 'yellow')

\`\`\`
`,title:"Tuple operations",level:1,content:`# Tuple operations

Many of list's read-only operations work on tuples.

Combining tuples into a new tuple:

\`\`\`py
('come', '☂') + ('or', '☼')  # ('come', '☂', 'or', '☼')
\`\`\`

Checking containment:

\`\`\`py
'wally' in ('wall-e', 'wallace', 'waldo')  # True
\`\`\`

Slicing:

\`\`\`py
rainbow = ('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
roy = rainbow[:3]  # ('red', 'orange', 'yellow')

\`\`\``,frontmatter:{layout:"full"},index:2,start:38,end:66},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:ab,meta:{layout:"center",srcSequence:"./pages/tuple.md",slide:{raw:`---
layout: center
---

# Immutability vs. Mutability

`,title:"Immutability vs. Mutability",level:1,content:"# Immutability vs. Mutability",frontmatter:{layout:"center",srcSequence:"./pages/tuple.md"},index:29,start:66,end:73,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: center
---

# Immutability vs. Mutability

`,title:"Immutability vs. Mutability",level:1,content:"# Immutability vs. Mutability",frontmatter:{layout:"center"},index:3,start:66,end:73},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:mb,meta:{layout:"full",srcSequence:"./pages/tuple.md",slide:{raw:`---
layout: full
---

# Immutable vs. Mutable

An **immutable** value is unchanging once created.

Immutable types (that we've covered): int, float, string, tuple

\`\`\`py
a_tuple = (1, 2)
a_tuple[0] = 3                  # 🚫 Error! Tuple items cannot be set.
a_string = "Hi y'all"
a_string[1] = "I"               # 🚫 Error! String elements cannot be set.
a_string += ", how you doing?"  # 🤔 How does this work?
an_int = 20
an_int += 2                     # 🤔 And this?
\`\`\`


A **mutable** value can change in value throughout the course of computation. All names that refer to the same object are affected by a mutation.

Mutable types (that we've covered): list, dict

\`\`\`py
grades = [90, 70, 85]
grades_copy = grades
grades[1] = 100
words = {"agua": "water"}
words["pavo"] = "turkey"
\`\`\`
`,title:"Immutable vs. Mutable",level:1,content:`# Immutable vs. Mutable

An **immutable** value is unchanging once created.

Immutable types (that we've covered): int, float, string, tuple

\`\`\`py
a_tuple = (1, 2)
a_tuple[0] = 3                  # 🚫 Error! Tuple items cannot be set.
a_string = "Hi y'all"
a_string[1] = "I"               # 🚫 Error! String elements cannot be set.
a_string += ", how you doing?"  # 🤔 How does this work?
an_int = 20
an_int += 2                     # 🤔 And this?
\`\`\`


A **mutable** value can change in value throughout the course of computation. All names that refer to the same object are affected by a mutation.

Mutable types (that we've covered): list, dict

\`\`\`py
grades = [90, 70, 85]
grades_copy = grades
grades[1] = 100
words = {"agua": "water"}
words["pavo"] = "turkey"
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/tuple.md"},index:30,start:73,end:106,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: full
---

# Immutable vs. Mutable

An **immutable** value is unchanging once created.

Immutable types (that we've covered): int, float, string, tuple

\`\`\`py
a_tuple = (1, 2)
a_tuple[0] = 3                  # 🚫 Error! Tuple items cannot be set.
a_string = "Hi y'all"
a_string[1] = "I"               # 🚫 Error! String elements cannot be set.
a_string += ", how you doing?"  # 🤔 How does this work?
an_int = 20
an_int += 2                     # 🤔 And this?
\`\`\`


A **mutable** value can change in value throughout the course of computation. All names that refer to the same object are affected by a mutation.

Mutable types (that we've covered): list, dict

\`\`\`py
grades = [90, 70, 85]
grades_copy = grades
grades[1] = 100
words = {"agua": "water"}
words["pavo"] = "turkey"
\`\`\`
`,title:"Immutable vs. Mutable",level:1,content:`# Immutable vs. Mutable

An **immutable** value is unchanging once created.

Immutable types (that we've covered): int, float, string, tuple

\`\`\`py
a_tuple = (1, 2)
a_tuple[0] = 3                  # 🚫 Error! Tuple items cannot be set.
a_string = "Hi y'all"
a_string[1] = "I"               # 🚫 Error! String elements cannot be set.
a_string += ", how you doing?"  # 🤔 How does this work?
an_int = 20
an_int += 2                     # 🤔 And this?
\`\`\`


A **mutable** value can change in value throughout the course of computation. All names that refer to the same object are affected by a mutation.

Mutable types (that we've covered): list, dict

\`\`\`py
grades = [90, 70, 85]
grades_copy = grades
grades[1] = 100
words = {"agua": "water"}
words["pavo"] = "turkey"
\`\`\``,frontmatter:{layout:"full"},index:4,start:73,end:106},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:_b,meta:{layout:"full",srcSequence:"./pages/tuple.md",slide:{raw:`---
layout: full
---

# Tuples`,title:"Tuples",level:1,content:"# Tuples",frontmatter:{layout:"full",srcSequence:"./pages/tuple.md"},index:31,start:106,end:111,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",raw:`---
layout: full
---

# Tuples`,title:"Tuples",level:1,content:"# Tuples",frontmatter:{layout:"full"},index:5,start:106,end:111},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/tuple.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:bb,meta:{layout:"center",title:"Dictionaries",srcSequence:"./pages/dict.md",slide:{raw:null,title:"Dictionaries",level:1,content:"# Dictionaries",frontmatter:{layout:"center",title:"Dictionaries",srcSequence:"./pages/dict.md"},index:32,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: center
---

# Dictionaries
`,title:"Dictionaries",level:1,content:"# Dictionaries",frontmatter:{layout:"center",title:"Dictionaries"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/dict.md
---
`,content:"",frontmatter:{},index:3,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:$b,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Dictionaries

A dict is a mapping of key-value pairs

\`\`\`py
states = {
	"CA": "California",
	"DE": "Delaware",
	"NY": "New York",
	"TX": "Texas",
	"WY": "Wyoming"
}
\`\`\`

Dictionaries support similar operations as lists/strings:

\`\`\`py
>>> len(states)
5
\`\`\`

\`\`\`py
>>> "CA" in states
True
\`\`\`

\`\`\`py
>>> "ZZ" in states
False
\`\`\`
`,title:"Dictionaries",level:1,content:`# Dictionaries

A dict is a mapping of key-value pairs

\`\`\`py
states = {
	"CA": "California",
	"DE": "Delaware",
	"NY": "New York",
	"TX": "Texas",
	"WY": "Wyoming"
}
\`\`\`

Dictionaries support similar operations as lists/strings:

\`\`\`py
>>> len(states)
5
\`\`\`

\`\`\`py
>>> "CA" in states
True
\`\`\`

\`\`\`py
>>> "ZZ" in states
False
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:33,start:6,end:41,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Dictionaries

A dict is a mapping of key-value pairs

\`\`\`py
states = {
	"CA": "California",
	"DE": "Delaware",
	"NY": "New York",
	"TX": "Texas",
	"WY": "Wyoming"
}
\`\`\`

Dictionaries support similar operations as lists/strings:

\`\`\`py
>>> len(states)
5
\`\`\`

\`\`\`py
>>> "CA" in states
True
\`\`\`

\`\`\`py
>>> "ZZ" in states
False
\`\`\`
`,title:"Dictionaries",level:1,content:`# Dictionaries

A dict is a mapping of key-value pairs

\`\`\`py
states = {
	"CA": "California",
	"DE": "Delaware",
	"NY": "New York",
	"TX": "Texas",
	"WY": "Wyoming"
}
\`\`\`

Dictionaries support similar operations as lists/strings:

\`\`\`py
>>> len(states)
5
\`\`\`

\`\`\`py
>>> "CA" in states
True
\`\`\`

\`\`\`py
>>> "ZZ" in states
False
\`\`\``,frontmatter:{layout:"full"},index:1,start:6,end:41},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Ub,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Dictionary access

\`\`\`py
words = {
	"más": "more",
	"otro": "other",
	"agua": "water"
}
\`\`\`

Ways to access a value by key:

\`\`\`py
>>> words["otro"]
'other'
\`\`\`

\`\`\`py
>>> first_word = "agua"
>>> words[first_word]
'water'
\`\`\`

\`\`\`py
>>> words["pavo"]
KeyError: pavo
\`\`\`

\`\`\`py
>>> words.get("pavo", "🤔")
'🤔'
\`\`\`
`,title:"Dictionary access",level:1,content:`# Dictionary access

\`\`\`py
words = {
	"más": "more",
	"otro": "other",
	"agua": "water"
}
\`\`\`

Ways to access a value by key:

\`\`\`py
>>> words["otro"]
'other'
\`\`\`

\`\`\`py
>>> first_word = "agua"
>>> words[first_word]
'water'
\`\`\`

\`\`\`py
>>> words["pavo"]
KeyError: pavo
\`\`\`

\`\`\`py
>>> words.get("pavo", "🤔")
'🤔'
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:34,start:41,end:78,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Dictionary access

\`\`\`py
words = {
	"más": "more",
	"otro": "other",
	"agua": "water"
}
\`\`\`

Ways to access a value by key:

\`\`\`py
>>> words["otro"]
'other'
\`\`\`

\`\`\`py
>>> first_word = "agua"
>>> words[first_word]
'water'
\`\`\`

\`\`\`py
>>> words["pavo"]
KeyError: pavo
\`\`\`

\`\`\`py
>>> words.get("pavo", "🤔")
'🤔'
\`\`\`
`,title:"Dictionary access",level:1,content:`# Dictionary access

\`\`\`py
words = {
	"más": "more",
	"otro": "other",
	"agua": "water"
}
\`\`\`

Ways to access a value by key:

\`\`\`py
>>> words["otro"]
'other'
\`\`\`

\`\`\`py
>>> first_word = "agua"
>>> words[first_word]
'water'
\`\`\`

\`\`\`py
>>> words["pavo"]
KeyError: pavo
\`\`\`

\`\`\`py
>>> words.get("pavo", "🤔")
'🤔'
\`\`\``,frontmatter:{layout:"full"},index:2,start:41,end:78},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Wb,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Dictionary rules

- All keys in a dictionary are distinct (there can only be one value per key)
- A key cannot be a list or dictionary (or any other mutable type)
- The values can be any type, however!

\`\`\`py
spiders = {
  "smeringopus": {
	  "name": "Pale Daddy Long-leg",
	  "length": 7
  },
  "holocnemus pluchei": {
	  "name": "Marbled cellar spider",
	  "length": (5, 7)
  }
}
\`\`\`
`,title:"Dictionary rules",level:1,content:`# Dictionary rules

- All keys in a dictionary are distinct (there can only be one value per key)
- A key cannot be a list or dictionary (or any other mutable type)
- The values can be any type, however!

\`\`\`py
spiders = {
  "smeringopus": {
	  "name": "Pale Daddy Long-leg",
	  "length": 7
  },
  "holocnemus pluchei": {
	  "name": "Marbled cellar spider",
	  "length": (5, 7)
  }
}
\`\`\``,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:35,start:78,end:101,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Dictionary rules

- All keys in a dictionary are distinct (there can only be one value per key)
- A key cannot be a list or dictionary (or any other mutable type)
- The values can be any type, however!

\`\`\`py
spiders = {
  "smeringopus": {
	  "name": "Pale Daddy Long-leg",
	  "length": 7
  },
  "holocnemus pluchei": {
	  "name": "Marbled cellar spider",
	  "length": (5, 7)
  }
}
\`\`\`
`,title:"Dictionary rules",level:1,content:`# Dictionary rules

- All keys in a dictionary are distinct (there can only be one value per key)
- A key cannot be a list or dictionary (or any other mutable type)
- The values can be any type, however!

\`\`\`py
spiders = {
  "smeringopus": {
	  "name": "Pale Daddy Long-leg",
	  "length": 7
  },
  "holocnemus pluchei": {
	  "name": "Marbled cellar spider",
	  "length": (5, 7)
  }
}
\`\`\``,frontmatter:{layout:"full"},index:3,start:78,end:101},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Qb,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Dictionary iteration

\`\`\`py
insects = {"spiders": 8, "centipedes": 100, "bees": 6}
for name in insects:
    print(insects[name])
\`\`\`

What will be the order of items?

\`\`\`py
8 100 6
\`\`\`

Keys are iterated over in the order they are first added.
`,title:"Dictionary iteration",level:1,content:`# Dictionary iteration

\`\`\`py
insects = {"spiders": 8, "centipedes": 100, "bees": 6}
for name in insects:
    print(insects[name])
\`\`\`

What will be the order of items?

\`\`\`py
8 100 6
\`\`\`

Keys are iterated over in the order they are first added.`,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:36,start:101,end:121,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Dictionary iteration

\`\`\`py
insects = {"spiders": 8, "centipedes": 100, "bees": 6}
for name in insects:
    print(insects[name])
\`\`\`

What will be the order of items?

\`\`\`py
8 100 6
\`\`\`

Keys are iterated over in the order they are first added.
`,title:"Dictionary iteration",level:1,content:`# Dictionary iteration

\`\`\`py
insects = {"spiders": 8, "centipedes": 100, "bees": 6}
for name in insects:
    print(insects[name])
\`\`\`

What will be the order of items?

\`\`\`py
8 100 6
\`\`\`

Keys are iterated over in the order they are first added.`,frontmatter:{layout:"full"},index:4,start:101,end:121},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:lw,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Dictionary comprehensions

General syntax:

\`\`\`py
{key: value for <name> in <iter exp>}
\`\`\`

Example:

\`\`\`py
{x: x*x for x in range(3,6)}
\`\`\`
`,title:"Dictionary comprehensions",level:1,content:"# Dictionary comprehensions\n\nGeneral syntax:\n\n```py\n{key: value for <name> in <iter exp>}\n```\n\nExample:\n\n```py\n{x: x*x for x in range(3,6)}\n```",frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:37,start:121,end:139,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Dictionary comprehensions

General syntax:

\`\`\`py
{key: value for <name> in <iter exp>}
\`\`\`

Example:

\`\`\`py
{x: x*x for x in range(3,6)}
\`\`\`
`,title:"Dictionary comprehensions",level:1,content:"# Dictionary comprehensions\n\nGeneral syntax:\n\n```py\n{key: value for <name> in <iter exp>}\n```\n\nExample:\n\n```py\n{x: x*x for x in range(3,6)}\n```",frontmatter:{layout:"full"},index:5,start:121,end:139},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:uw,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Exercise: Prune

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
    return {k: d[k] for k in keys}
\`\`\`

</v-click>

`,title:"Exercise: Prune",level:1,content:`# Exercise: Prune

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
    return {k: d[k] for k in keys}
\`\`\`

</v-click>`,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:38,start:139,end:171,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Exercise: Prune

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
    return {k: d[k] for k in keys}
\`\`\`

</v-click>

`,title:"Exercise: Prune",level:1,content:`# Exercise: Prune

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def prune(d, keys):
    """Return a copy of D which only contains key/value pairs
    whose keys are also in KEYS.
    >>> prune({"a": 1, "b": 2, "c": 3, "d": 4}, ["a", "b", "c"])
    {'a': 1, 'b': 2, 'c': 3}
    """
    return {k: d[k] for k in keys}
\`\`\`

</v-click>`,frontmatter:{layout:"full"},index:6,start:139,end:171},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:Fw,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Exercise: Index

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
    return {k: [v for v in values if match(k, v)] for k in keys}
\`\`\`

</v-click>

`,title:"Exercise: Index",level:1,content:`# Exercise: Index

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
    return {k: [v for v in values if match(k, v)] for k in keys}
\`\`\`

</v-click>`,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:39,start:171,end:205,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Exercise: Index

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
    return {k: [v for v in values if match(k, v)] for k in keys}
\`\`\`

</v-click>

`,title:"Exercise: Index",level:1,content:`# Exercise: Index

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
\`\`\`

<v-click>

答案：

\`\`\`py
def index(keys, values, match):
    """Return a dictionary from keys k to a list of values v for which 
    match(k, v) is a true value.
    
    >>> index([7, 9, 11], range(30, 50), lambda k, v: v % k == 0)
    {7: [35, 42, 49], 9: [36, 45], 11: [33, 44]}
    """
    return {k: [v for v in values if match(k, v)] for k in keys}
\`\`\`

</v-click>`,frontmatter:{layout:"full"},index:7,start:171,end:205},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:bw,meta:{layout:"full",srcSequence:"./pages/dict.md",slide:{raw:`---
layout: full
---

# Nested data

Many useful way to combine lists and dicts:

|||
| ---- | ---- |
| Lists of lists | \`[ [1, 2], [3, 4] ]\` |
| Dicts of dicts | \`{"name": "Brazilian Breads", "location": {"lat": 37.8, "lng": -122}}\` |
| Dicts of lists | \`{"heights": [89, 97], "ages": [6, 8]}\` |
| Lists of dicts | \`[{"title": "Ponyo", "year": 2009}, {"title": "Totoro", "year": 1993}]\` |
`,title:"Nested data",level:1,content:`# Nested data

Many useful way to combine lists and dicts:

|||
| ---- | ---- |
| Lists of lists | \`[ [1, 2], [3, 4] ]\` |
| Dicts of dicts | \`{"name": "Brazilian Breads", "location": {"lat": 37.8, "lng": -122}}\` |
| Dicts of lists | \`{"heights": [89, 97], "ages": [6, 8]}\` |
| Lists of dicts | \`[{"title": "Ponyo", "year": 2009}, {"title": "Totoro", "year": 1993}]\` |`,frontmatter:{layout:"full",srcSequence:"./pages/dict.md"},index:40,start:205,end:220,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",raw:`---
layout: full
---

# Nested data

Many useful way to combine lists and dicts:

|||
| ---- | ---- |
| Lists of lists | \`[ [1, 2], [3, 4] ]\` |
| Dicts of dicts | \`{"name": "Brazilian Breads", "location": {"lat": 37.8, "lng": -122}}\` |
| Dicts of lists | \`{"heights": [89, 97], "ages": [6, 8]}\` |
| Lists of dicts | \`[{"title": "Ponyo", "year": 2009}, {"title": "Totoro", "year": 1993}]\` |
`,title:"Nested data",level:1,content:`# Nested data

Many useful way to combine lists and dicts:

|||
| ---- | ---- |
| Lists of lists | \`[ [1, 2], [3, 4] ]\` |
| Dicts of dicts | \`{"name": "Brazilian Breads", "location": {"lat": 37.8, "lng": -122}}\` |
| Dicts of lists | \`{"heights": [89, 97], "ages": [6, 8]}\` |
| Lists of dicts | \`[{"title": "Ponyo", "year": 2009}, {"title": "Totoro", "year": 1993}]\` |`,frontmatter:{layout:"full"},index:8,start:205,end:220},filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/pages/dict.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Ew,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Thanks`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center"},index:41,start:48,end:53,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/04_Python_Data_Abstraction/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",component:K0,meta:{layout:"end"}}],ze=xw,qs=[{name:"play",path:"/",component:y_,children:[...ze]},{name:"print",path:"/print",component:H0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!Us.remote||Us.remote===n.query.password)return!0;if(Us.remote&&n.query.password===void 0){const s=prompt("Enter password");if(Us.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};qs.push({path:"/presenter/print",component:()=>xn(()=>import("./PresenterPrint-d9ed2259.js"),["assets/PresenterPrint-d9ed2259.js","assets/NoteDisplay-0210021e.js","assets/index-bfaff5da.js"])}),qs.push({name:"notes",path:"/notes",component:()=>xn(()=>import("./NotesView-fa8b9e26.js"),["assets/NotesView-fa8b9e26.js","assets/NoteDisplay-0210021e.js","assets/index-bfaff5da.js"]),beforeEnter:t}),qs.push({name:"presenter",path:"/presenter/:no",component:()=>xn(()=>import("./Presenter-26f842b0.js"),["assets/Presenter-26f842b0.js","assets/NoteDisplay-0210021e.js","assets/DrawingControls-42364e9f.js","assets/index-bfaff5da.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:t}),qs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Cn=Vm({history:Hh("/math201/slides/python04"),routes:qs});function Cw(t,n,{mode:s="replace"}={}){return P({get(){const o=Cn.currentRoute.value.query[t];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){Tt(()=>{Cn[v(s)]({query:{...Cn.currentRoute.value.query,[t]:o}})})}})}const au=le(0);Tt(()=>{Cn.afterEach(async()=>{await Tt(),au.value+=1})});const iu=le(0),Mt=P(()=>Cn.currentRoute.value),ws=P(()=>Mt.value.query.print!==void 0),Aw=P(()=>Mt.value.query.print==="clicks"),en=P(()=>Mt.value.query.embedded!==void 0),$t=P(()=>Mt.value.path.startsWith("/presenter")),y4=P(()=>Mt.value.path.startsWith("/notes")),cu=P(()=>ws.value&&!Aw.value),yr=P(()=>Mt.value.query.password),Dw=P(()=>!$t.value&&(!Pe.remote||yr.value===Pe.remote)),Vi=Cw("clicks","0"),pu=P(()=>ze.length-1),Sw=P(()=>Mt.value.path),Ge=P(()=>parseInt(Sw.value.split(/\//g).slice(-1)[0])||1);P(()=>Jr(Ge.value));const it=P(()=>ze.find(t=>t.path===`${Ge.value}`));P(()=>{var t,n,s;return(s=(n=(t=it.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});P(()=>{var t,n;return((n=(t=it.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ge.value===1?"cover":"default")});const Tl=P(()=>ze.find(t=>t.path===`${Math.min(ze.length,Ge.value+1)}`)),$w=P(()=>ze.find(t=>t.path===`${Math.max(1,Ge.value-1)}`)),Pw=P(()=>{var t,n;return au.value,((n=(t=it.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Xn=P({get(){if(cu.value)return 99999;let t=+(Vi.value||0);return isNaN(t)&&(t=0),t},set(t){Vi.value=t.toString()}}),Jo=P(()=>{var t,n;return+(((n=(t=it.value)==null?void 0:t.meta)==null?void 0:n.clicks)??Pw.value.length)}),Tw=P(()=>Ge.value<ze.length-1||Xn.value<Jo.value),Ow=P(()=>Ge.value>1||Xn.value>0),Lw=P(()=>ze.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(Qr(t,n),t),[])),Iw=P(()=>Xr(Lw.value,it.value));P(()=>ea(Iw.value));const Mw=P(()=>qw(iu.value,it.value,$w.value));je(it,(t,n)=>{iu.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Zn(){Jo.value<=Xn.value?Qo():Xn.value+=1}async function Gn(){Xn.value<=0?await Xo():Xn.value-=1}function Jr(t){return $t.value?`/presenter/${t}`:`/${t}`}function Qo(){const t=Math.min(ze.length,Ge.value+1);return ks(t)}async function Xo(t=!0){const n=Math.max(1,Ge.value-1);await ks(n),t&&Jo.value&&Cn.replace({query:{...Mt.value.query,clicks:Jo.value}})}function ks(t,n){return Cn.push({path:Jr(t),query:{...Mt.value.query,clicks:n}})}function Rw(t){const n=le(0),{direction:s,distanceX:o,distanceY:l}=ah(t,{onSwipeStart(r){r.pointerType==="touch"&&(ro.value||(n.value=Xl()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||ro.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===sn.LEFT?Zn():Gn():(i/window.innerHeight>.4||i>200)&&(s.value===sn.DOWN?Xo():Qo())}})}async function Wi(){const{saveAs:t}=await xn(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);t(hp(Pe.download)?Pe.download:Pe.exportFilename?`${Pe.exportFilename}.pdf`:"/math201/slides/python04slidev-exported.pdf",`${Pe.title}.pdf`)}async function h4(t){var n,s;if(t==null){const o=(s=(n=it.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Qr(t,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?Qr(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Xr(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Xr(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ea(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:ea(s.children,n+1)}))}const Nw={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Uw(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let s=t.name.includes("|")?t.name:Nw[t.name]||t.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...t,name:s}}function qw(t,n,s){var l,r;let o=t>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Pe.transition),Uw(o,t<0)}export{cp as $,Fu as A,le as B,l4 as C,o4 as D,Te as E,Se as F,i4 as G,kt as H,r4 as I,ec as J,Du as K,yo as L,Tt as M,Or as N,X as O,Sn as P,wr as Q,Ww as R,Zt as S,Xw as T,jw as U,cu as V,Ly as W,My as X,up as Y,pp as Z,J as _,s4 as a,qn as a$,Py as a0,Gw as a1,Jw as a2,Qw as a3,Yw as a4,Zw as a5,T0 as a6,O0 as a7,Wi as a8,Zn as a9,Og as aA,Dg as aB,u4 as aC,it as aD,MF as aE,Rw as aF,c4 as aG,d4 as aH,x as aI,Gp as aJ,at as aK,GF as aL,Jo as aM,Tw as aN,Tl as aO,ro as aP,$l as aQ,u_ as aR,zr as aS,Yr as aT,Hw as aU,Vw as aV,r_ as aW,i1 as aX,a4 as aY,Ot as aZ,Is as a_,Qo as aa,h4 as ab,Gn as ac,Xo as ad,Mt as ae,zw as af,Es as ag,Kd as ah,Wd as ai,xe as aj,p4 as ak,dd as al,e as am,ln as an,ho as ao,st as ap,ze as aq,pu as ar,d as as,Fe as at,Ur as au,We as av,Rt as aw,K as ax,xl as ay,jp as az,Ge as b,Wt as b0,ur as b1,kF as b2,EF as b3,xF as b4,AF as b5,ul as b6,ip as b7,f4 as b8,ut as b9,Co as ba,H1 as bb,dp as bc,DF as bd,Pe as c,Xn as d,y4 as e,$t as f,Jr as g,Ee as h,e4 as i,H as j,G as k,tf as l,Z as m,E as n,t4 as o,n4 as p,b as q,Cn as r,et as s,vs as t,Kw as u,Da as v,je as w,P as x,Tr as y,v as z};
