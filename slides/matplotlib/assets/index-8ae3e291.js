(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ts(t){const s=Object.create(null);for(const n of t.split(","))s[n]=1;return n=>n in s}const Ne=Object.freeze({}),Vn=Object.freeze([]),ct=()=>{},bd=()=>!1,to=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uo=t=>t.startsWith("onUpdate:"),We=Object.assign,xc=(t,s)=>{const n=t.indexOf(s);n>-1&&t.splice(n,1)},vd=Object.prototype.hasOwnProperty,$e=(t,s)=>vd.call(t,s),pe=Array.isArray,xn=t=>so(t)==="[object Map]",A2=t=>so(t)==="[object Set]",xd=t=>so(t)==="[object RegExp]",ye=t=>typeof t=="function",ze=t=>typeof t=="string",$s=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",wc=t=>(Le(t)||ye(t))&&ye(t.then)&&ye(t.catch),M2=Object.prototype.toString,so=t=>M2.call(t),Ec=t=>so(t).slice(8,-1),T2=t=>so(t)==="[object Object]",kc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wl=Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wd=Ts("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),_r=t=>{const s=Object.create(null);return n=>s[n]||(s[n]=t(n))},Ed=/-(\w)/g,ht=_r(t=>t.replace(Ed,(s,n)=>n?n.toUpperCase():"")),kd=/\B([A-Z])/g,Ds=_r(t=>t.replace(kd,"-$1").toLowerCase()),Mn=_r(t=>t.charAt(0).toUpperCase()+t.slice(1)),pn=_r(t=>t?`on${Mn(t)}`:""),Ws=(t,s)=>!Object.is(t,s),dn=(t,...s)=>{for(let n=0;n<t.length;n++)t[n](...s)},Vo=(t,s,n,l=!1)=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,writable:l,value:n})},Sd=t=>{const s=parseFloat(t);return isNaN(s)?t:s},Dd=t=>{const s=ze(t)?Number(t):NaN;return isNaN(s)?t:s};let Fi;const no=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(t){if(pe(t)){const s={};for(let n=0;n<t.length;n++){const l=t[n],o=ze(l)?Td(l):wt(l);if(o)for(const r in o)s[r]=o[r]}return s}else if(ze(t)||Le(t))return t}const Cd=/;(?![^(]*\))/g,Ad=/:([^]+)/,Md=/\/\*[^]*?\*\//g;function Td(t){const s={};return t.replace(Md,"").split(Cd).forEach(n=>{if(n){const l=n.split(Ad);l.length>1&&(s[l[0].trim()]=l[1].trim())}}),s}function Ke(t){let s="";if(ze(t))s=t;else if(pe(t))for(let n=0;n<t.length;n++){const l=Ke(t[n]);l&&(s+=l+" ")}else if(Le(t))for(const n in t)t[n]&&(s+=n+" ");return s.trim()}function ee(t){if(!t)return null;let{class:s,style:n}=t;return s&&!ze(s)&&(t.class=Ke(s)),n&&(t.style=wt(n)),t}const $d="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Pd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Od="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Rd=Ts($d),Ld=Ts(Pd),Id=Ts(Od),Nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hd=Ts(Nd);function $2(t){return!!t||t===""}const P2=t=>!!(t&&t.__v_isRef===!0),jt=t=>ze(t)?t:t==null?"":pe(t)||Le(t)&&(t.toString===M2||!ye(t.toString))?P2(t)?jt(t.value):JSON.stringify(t,O2,2):String(t),O2=(t,s)=>P2(s)?O2(t,s.value):xn(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[l,o],r)=>(n[Ir(l,r)+" =>"]=o,n),{})}:A2(s)?{[`Set(${s.size})`]:[...s.values()].map(n=>Ir(n))}:$s(s)?Ir(s):Le(s)&&!pe(s)&&!T2(s)?String(s):s,Ir=(t,s="")=>{var n;return $s(t)?`Symbol(${(n=t.description)!=null?n:s})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qt(t,...s){console.warn(`[Vue warn] ${t}`,...s)}let dt;class R2{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!s&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let s,n;if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].pause();for(s=0,n=this.effects.length;s<n;s++)this.effects[s].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let s,n;if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].resume();for(s=0,n=this.effects.length;s<n;s++)this.effects[s].resume()}}run(s){if(this._active){const n=dt;try{return dt=this,s()}finally{dt=n}}else qt("cannot run an inactive effect scope.")}on(){dt=this}off(){dt=this.parent}stop(s){if(this._active){this._active=!1;let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(this.effects.length=0,n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function jd(t){return new R2(t)}function Sc(){return dt}function L2(t,s=!1){dt?dt.cleanups.push(t):s||qt("onScopeDispose() is called when there is no active effect scope to be associated with.")}let Ie;const Nr=new WeakSet;class I2{constructor(s){this.fn=s,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nr.has(this)&&(Nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||H2(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gi(this),j2(this);const s=Ie,n=Jt;Ie=this,Jt=!0;try{return this.fn()}finally{Ie!==this&&qt("Active effect was not restored correctly - this is likely a Vue internal bug."),q2(this),Ie=s,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let s=this.deps;s;s=s.nextDep)Ac(s);this.deps=this.depsTail=void 0,gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let N2=0,El,kl;function H2(t,s=!1){if(t.flags|=8,s){t.next=kl,kl=t;return}t.next=El,El=t}function Dc(){N2++}function Cc(){if(--N2>0)return;if(kl){let s=kl;for(kl=void 0;s;){const n=s.next;s.next=void 0,s.flags&=-9,s=n}}let t;for(;El;){let s=El;for(El=void 0;s;){const n=s.next;if(s.next=void 0,s.flags&=-9,s.flags&1)try{s.trigger()}catch(l){t||(t=l)}s=n}}if(t)throw t}function j2(t){for(let s=t.deps;s;s=s.nextDep)s.version=-1,s.prevActiveLink=s.dep.activeLink,s.dep.activeLink=s}function q2(t){let s,n=t.depsTail,l=n;for(;l;){const o=l.prevDep;l.version===-1?(l===n&&(n=o),Ac(l),qd(l)):s=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=o}t.deps=s,t.depsTail=n}function ga(t){for(let s=t.deps;s;s=s.nextDep)if(s.dep.version!==s.version||s.dep.computed&&(U2(s.dep.computed)||s.dep.version!==s.version))return!0;return!!t._dirty}function U2(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Il))return;t.globalVersion=Il;const s=t.dep;if(t.flags|=2,s.version>0&&!t.isSSR&&t.deps&&!ga(t)){t.flags&=-3;return}const n=Ie,l=Jt;Ie=t,Jt=!0;try{j2(t);const o=t.fn(t._value);(s.version===0||Ws(o,t._value))&&(t._value=o,s.version++)}catch(o){throw s.version++,o}finally{Ie=n,Jt=l,q2(t),t.flags&=-3}}function Ac(t,s=!1){const{dep:n,prevSub:l,nextSub:o}=t;if(l&&(l.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=l,t.nextSub=void 0),n.subsHead===t&&(n.subsHead=o),n.subs===t&&(n.subs=l,!l&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ac(r,!0)}!s&&!--n.sc&&n.map&&n.map.delete(n.key)}function qd(t){const{prevDep:s,nextDep:n}=t;s&&(s.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=s,t.nextDep=void 0)}let Jt=!0;const V2=[];function Ps(){V2.push(Jt),Jt=!1}function Os(){const t=V2.pop();Jt=t===void 0?!0:t}function gi(t){const{cleanup:s}=t;if(t.cleanup=void 0,s){const n=Ie;Ie=void 0;try{s()}finally{Ie=n}}}let Il=0;class Ud{constructor(s,n){this.sub=s,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class br{constructor(s){this.computed=s,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.subsHead=void 0}track(s){if(!Ie||!Jt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new Ud(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,z2(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const l=n.nextDep;l.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=l),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=l)}return Ie.onTrack&&Ie.onTrack(We({effect:Ie},s)),n}trigger(s){this.version++,Il++,this.notify(s)}notify(s){Dc();try{for(let n=this.subsHead;n;n=n.nextSub)n.sub.onTrigger&&!(n.sub.flags&8)&&n.sub.onTrigger(We({effect:n.sub},s));for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cc()}}}function z2(t){if(t.dep.sc++,t.sub.flags&4){const s=t.dep.computed;if(s&&!t.dep.subs){s.flags|=20;for(let l=s.deps;l;l=l.nextDep)z2(l)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subsHead===void 0&&(t.dep.subsHead=t),t.dep.subs=t}}const zo=new WeakMap,wn=Symbol("Object iterate"),_a=Symbol("Map keys iterate"),Nl=Symbol("Array iterate");function st(t,s,n){if(Jt&&Ie){let l=zo.get(t);l||zo.set(t,l=new Map);let o=l.get(n);o||(l.set(n,o=new br),o.map=l,o.key=n),o.track({target:t,type:s,key:n})}}function is(t,s,n,l,o,r){const a=zo.get(t);if(!a){Il++;return}const i=p=>{p&&p.trigger({target:t,type:s,key:n,newValue:l,oldValue:o,oldTarget:r})};if(Dc(),s==="clear")a.forEach(i);else{const p=pe(t),B=p&&kc(n);if(p&&n==="length"){const y=Number(l);a.forEach((u,d)=>{(d==="length"||d===Nl||!$s(d)&&d>=y)&&i(u)})}else switch((n!==void 0||a.has(void 0))&&i(a.get(n)),B&&i(a.get(Nl)),s){case"add":p?B&&i(a.get("length")):(i(a.get(wn)),xn(t)&&i(a.get(_a)));break;case"delete":p||(i(a.get(wn)),xn(t)&&i(a.get(_a)));break;case"set":xn(t)&&i(a.get(wn));break}}Cc()}function Vd(t,s){const n=zo.get(t);return n&&n.get(s)}function Ln(t){const s=me(t);return s===t?s:(st(s,"iterate",Nl),Ft(t)?s:s.map(at))}function vr(t){return st(t=me(t),"iterate",Nl),t}const zd={__proto__:null,[Symbol.iterator](){return Hr(this,Symbol.iterator,at)},concat(...t){return Ln(this).concat(...t.map(s=>pe(s)?Ln(s):s))},entries(){return Hr(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,s){return Fs(this,"every",t,s,void 0,arguments)},filter(t,s){return Fs(this,"filter",t,s,n=>n.map(at),arguments)},find(t,s){return Fs(this,"find",t,s,at,arguments)},findIndex(t,s){return Fs(this,"findIndex",t,s,void 0,arguments)},findLast(t,s){return Fs(this,"findLast",t,s,at,arguments)},findLastIndex(t,s){return Fs(this,"findLastIndex",t,s,void 0,arguments)},forEach(t,s){return Fs(this,"forEach",t,s,void 0,arguments)},includes(...t){return jr(this,"includes",t)},indexOf(...t){return jr(this,"indexOf",t)},join(t){return Ln(this).join(t)},lastIndexOf(...t){return jr(this,"lastIndexOf",t)},map(t,s){return Fs(this,"map",t,s,void 0,arguments)},pop(){return al(this,"pop")},push(...t){return al(this,"push",t)},reduce(t,...s){return _i(this,"reduce",t,s)},reduceRight(t,...s){return _i(this,"reduceRight",t,s)},shift(){return al(this,"shift")},some(t,s){return Fs(this,"some",t,s,void 0,arguments)},splice(...t){return al(this,"splice",t)},toReversed(){return Ln(this).toReversed()},toSorted(t){return Ln(this).toSorted(t)},toSpliced(...t){return Ln(this).toSpliced(...t)},unshift(...t){return al(this,"unshift",t)},values(){return Hr(this,"values",at)}};function Hr(t,s,n){const l=vr(t),o=l[s]();return l!==t&&!Ft(t)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const Wd=Array.prototype;function Fs(t,s,n,l,o,r){const a=vr(t),i=a!==t&&!Ft(t),p=a[s];if(p!==Wd[s]){const u=p.apply(t,r);return i?at(u):u}let B=n;a!==t&&(i?B=function(u,d){return n.call(this,at(u),d,t)}:n.length>2&&(B=function(u,d){return n.call(this,u,d,t)}));const y=p.call(a,B,l);return i&&o?o(y):y}function _i(t,s,n,l){const o=vr(t);let r=n;return o!==t&&(Ft(t)?n.length>3&&(r=function(a,i,p){return n.call(this,a,i,p,t)}):r=function(a,i,p){return n.call(this,a,at(i),p,t)}),o[s](r,...l)}function jr(t,s,n){const l=me(t);st(l,"iterate",Nl);const o=l[s](...n);return(o===-1||o===!1)&&Hl(n[0])?(n[0]=me(n[0]),l[s](...n)):o}function al(t,s,n=[]){Ps(),Dc();const l=me(t)[s].apply(t,n);return Cc(),Os(),l}const Yd=Ts("__proto__,__v_isRef,__isVue"),W2=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($s));function Kd(t){$s(t)||(t=String(t));const s=me(this);return st(s,"has",t),s.hasOwnProperty(t)}class Y2{constructor(s=!1,n=!1){this._isReadonly=s,this._isShallow=n}get(s,n,l){if(n==="__v_skip")return s.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return l===(o?r?Q2:J2:r?Z2:G2).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(l)?s:void 0;const a=pe(s);if(!o){let p;if(a&&(p=zd[n]))return p;if(n==="hasOwnProperty")return Kd}const i=Reflect.get(s,n,Te(s)?s:l);return($s(n)?W2.has(n):Yd(n))||(o||st(s,"get",n),r)?i:Te(i)?a&&kc(n)?i:i.value:Le(i)?o?Gt(i):Ye(i):i}}class K2 extends Y2{constructor(s=!1){super(!1,s)}set(s,n,l,o){let r=s[n];if(!this._isShallow){const p=Cs(r);if(!Ft(l)&&!Cs(l)&&(r=me(r),l=me(l)),!pe(s)&&Te(r)&&!Te(l))return p?!1:(r.value=l,!0)}const a=pe(s)&&kc(n)?Number(n)<s.length:$e(s,n),i=Reflect.set(s,n,l,Te(s)?s:o);return s===me(o)&&(a?Ws(l,r)&&is(s,"set",n,l,r):is(s,"add",n,l)),i}deleteProperty(s,n){const l=$e(s,n),o=s[n],r=Reflect.deleteProperty(s,n);return r&&l&&is(s,"delete",n,void 0,o),r}has(s,n){const l=Reflect.has(s,n);return(!$s(n)||!W2.has(n))&&st(s,"has",n),l}ownKeys(s){return st(s,"iterate",pe(s)?"length":wn),Reflect.ownKeys(s)}}class X2 extends Y2{constructor(s=!1){super(!0,s)}set(s,n){return qt(`Set operation on key "${String(n)}" failed: target is readonly.`,s),!0}deleteProperty(s,n){return qt(`Delete operation on key "${String(n)}" failed: target is readonly.`,s),!0}}const Xd=new K2,Gd=new X2,Zd=new K2(!0),Jd=new X2(!0),ba=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function Qd(t,s,n){return function(...l){const o=this.__v_raw,r=me(o),a=xn(r),i=t==="entries"||t===Symbol.iterator&&a,p=t==="keys"&&a,B=o[t](...l),y=n?ba:s?va:at;return!s&&st(r,"iterate",p?_a:wn),{next(){const{value:u,done:d}=B.next();return d?{value:u,done:d}:{value:i?[y(u[0]),y(u[1])]:y(u),done:d}},[Symbol.iterator](){return this}}}}function fo(t){return function(...s){{const n=s[0]?`on key "${s[0]}" `:"";qt(`${Mn(t)} operation ${n}failed: target is readonly.`,me(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function e1(t,s){const n={get(o){const r=this.__v_raw,a=me(r),i=me(o);t||(Ws(o,i)&&st(a,"get",o),st(a,"get",i));const{has:p}=Bo(a),B=s?ba:t?va:at;if(p.call(a,o))return B(r.get(o));if(p.call(a,i))return B(r.get(i));r!==a&&r.get(o)},get size(){const o=this.__v_raw;return!t&&st(me(o),"iterate",wn),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,a=me(r),i=me(o);return t||(Ws(o,i)&&st(a,"has",o),st(a,"has",i)),o===i?r.has(o):r.has(o)||r.has(i)},forEach(o,r){const a=this,i=a.__v_raw,p=me(i),B=s?ba:t?va:at;return!t&&st(p,"iterate",wn),i.forEach((y,u)=>o.call(r,B(y),B(u),a))}};return We(n,t?{add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear")}:{add(o){!s&&!Ft(o)&&!Cs(o)&&(o=me(o));const r=me(this);return Bo(r).has.call(r,o)||(r.add(o),is(r,"add",o,o)),this},set(o,r){!s&&!Ft(r)&&!Cs(r)&&(r=me(r));const a=me(this),{has:i,get:p}=Bo(a);let B=i.call(a,o);B?bi(a,i,o):(o=me(o),B=i.call(a,o));const y=p.call(a,o);return a.set(o,r),B?Ws(r,y)&&is(a,"set",o,r,y):is(a,"add",o,r),this},delete(o){const r=me(this),{has:a,get:i}=Bo(r);let p=a.call(r,o);p?bi(r,a,o):(o=me(o),p=a.call(r,o));const B=i?i.call(r,o):void 0,y=r.delete(o);return p&&is(r,"delete",o,void 0,B),y},clear(){const o=me(this),r=o.size!==0,a=xn(o)?new Map(o):new Set(o),i=o.clear();return r&&is(o,"clear",void 0,void 0,a),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Qd(o,t,s)}),n}function xr(t,s){const n=e1(t,s);return(l,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?l:Reflect.get($e(n,o)&&o in l?n:l,o,r)}const t1={get:xr(!1,!1)},s1={get:xr(!1,!0)},n1={get:xr(!0,!1)},l1={get:xr(!0,!0)};function bi(t,s,n){const l=me(n);if(l!==n&&s.call(t,l)){const o=Ec(t);qt(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const G2=new WeakMap,Z2=new WeakMap,J2=new WeakMap,Q2=new WeakMap;function o1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function r1(t){return t.__v_skip||!Object.isExtensible(t)?0:o1(Ec(t))}function Ye(t){return Cs(t)?t:wr(t,!1,Xd,t1,G2)}function ey(t){return wr(t,!1,Zd,s1,Z2)}function Gt(t){return wr(t,!0,Gd,n1,J2)}function ys(t){return wr(t,!0,Jd,l1,Q2)}function wr(t,s,n,l,o){if(!Le(t))return qt(`value cannot be made ${s?"readonly":"reactive"}: ${String(t)}`),t;if(t.__v_raw&&!(s&&t.__v_isReactive))return t;const r=o.get(t);if(r)return r;const a=r1(t);if(a===0)return t;const i=new Proxy(t,a===2?l:n);return o.set(t,i),i}function En(t){return Cs(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Cs(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function me(t){const s=t&&t.__v_raw;return s?me(s):t}function Mc(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&Vo(t,"__v_skip",!0),t}const at=t=>Le(t)?Ye(t):t,va=t=>Le(t)?Gt(t):t;function Te(t){return t?t.__v_isRef===!0:!1}function G(t){return ty(t,!1)}function ms(t){return ty(t,!0)}function ty(t,s){return Te(t)?t:new a1(t,s)}class a1{constructor(s,n){this.dep=new br,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?s:me(s),this._value=n?s:at(s),this.__v_isShallow=n}get value(){return this.dep.track({target:this,type:"get",key:"value"}),this._value}set value(s){const n=this._rawValue,l=this.__v_isShallow||Ft(s)||Cs(s);s=l?s:me(s),Ws(s,n)&&(this._rawValue=s,this._value=l?s:at(s),this.dep.trigger({target:this,type:"set",key:"value",newValue:s,oldValue:n}))}}function M(t){return Te(t)?t.value:t}const c1={get:(t,s,n)=>s==="__v_raw"?t:M(Reflect.get(t,s,n)),set:(t,s,n,l)=>{const o=t[s];return Te(o)&&!Te(n)?(o.value=n,!0):Reflect.set(t,s,n,l)}};function sy(t){return En(t)?t:new Proxy(t,c1)}class i1{constructor(s){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new br,{get:l,set:o}=s(n.track.bind(n),n.trigger.bind(n));this._get=l,this._set=o}get value(){return this._value=this._get()}set value(s){this._set(s)}}function ny(t){return new i1(t)}function p1(t){Hl(t)||qt("toRefs() expects a reactive object but received a plain one.");const s=pe(t)?new Array(t.length):{};for(const n in t)s[n]=ly(t,n);return s}class y1{constructor(s,n,l){this._object=s,this._key=n,this._defaultValue=l,this.__v_isRef=!0,this._value=void 0}get value(){const s=this._object[this._key];return this._value=s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Vd(me(this._object),this._key)}}class u1{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function B1(t,s,n){return Te(t)?t:ye(t)?new u1(t):Le(t)&&arguments.length>1?ly(t,s,n):G(t)}function ly(t,s,n){const l=t[s];return Te(l)?l:new y1(t,s,n)}class d1{constructor(s,n,l){this.fn=s,this.setter=n,this._value=void 0,this.dep=new br(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Il-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=l}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return H2(this,!0),!0}get value(){const s=this.dep.track({target:this,type:"get",key:"value"});return U2(this),s&&(s.version=this.dep.version),this._value}set value(s){this.setter?this.setter(s):qt("Write operation failed: computed value is readonly")}}function f1(t,s,n=!1){let l,o;ye(t)?l=t:(l=t.get,o=t.set);const r=new d1(l,o,n);return s&&!n&&(r.onTrack=s.onTrack,r.onTrigger=s.onTrigger),r}const mo={},Wo=new WeakMap;let yn;function m1(t,s=!1,n=yn){if(n){let l=Wo.get(n);l||Wo.set(n,l=[]),l.push(t)}else s||qt("onWatcherCleanup() was called when there was no active watcher to associate with.")}function h1(t,s,n=Ne){const{immediate:l,deep:o,once:r,scheduler:a,augmentJob:i,call:p}=n,B=w=>{(n.onWarn||qt)("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},y=w=>o?w:Ft(w)||o===!1||o===0?ks(w,1):ks(w);let u,d,f,m,g=!1,b=!1;if(Te(t)?(d=()=>t.value,g=Ft(t)):En(t)?(d=()=>y(t),g=!0):pe(t)?(b=!0,g=t.some(w=>En(w)||Ft(w)),d=()=>t.map(w=>{if(Te(w))return w.value;if(En(w))return y(w);if(ye(w))return p?p(w,2):w();B(w)})):ye(t)?s?d=p?()=>p(t,2):t:d=()=>{if(f){Ps();try{f()}finally{Os()}}const w=yn;yn=u;try{return p?p(t,3,[m]):t(m)}finally{yn=w}}:(d=ct,B(t)),s&&o){const w=d,P=o===!0?1/0:o;d=()=>ks(w(),P)}const x=Sc(),v=()=>{u.stop(),x&&x.active&&xc(x.effects,u)};if(r&&s){const w=s;s=(...P)=>{w(...P),v()}}let F=b?new Array(t.length).fill(mo):mo;const k=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(s){const P=u.run();if(o||g||(b?P.some((D,Y)=>Ws(D,F[Y])):Ws(P,F))){f&&f();const D=yn;yn=u;try{const Y=[P,F===mo?void 0:b&&F[0]===mo?[]:F,m];p?p(s,3,Y):s(...Y),F=P}finally{yn=D}}}else u.run()};return i&&i(k),u=new I2(d),u.scheduler=a?()=>a(k,!1):k,m=w=>m1(w,!1,u),f=u.onStop=()=>{const w=Wo.get(u);if(w){if(p)p(w,4);else for(const P of w)P();Wo.delete(u)}},u.onTrack=n.onTrack,u.onTrigger=n.onTrigger,s?l?k(!0):F=u.run():a?a(k.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function ks(t,s=1/0,n){if(s<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),s--,Te(t))ks(t.value,s,n);else if(pe(t))for(let l=0;l<t.length;l++)ks(t[l],s,n);else if(A2(t)||xn(t))t.forEach(l=>{ks(l,s,n)});else if(T2(t)){for(const l in t)ks(t[l],s,n);for(const l of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,l)&&ks(t[l],s,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kn=[];function Ao(t){kn.push(t)}function Mo(){kn.pop()}let qr=!1;function z(t,...s){if(qr)return;qr=!0,Ps();const n=kn.length?kn[kn.length-1].component:null,l=n&&n.appContext.config.warnHandler,o=F1();if(l)el(l,n,11,[t+s.map(r=>{var a,i;return(i=(a=r.toString)==null?void 0:a.call(r))!=null?i:JSON.stringify(r)}).join(""),n&&n.proxy,o.map(({vnode:r})=>`at <${Mr(n,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${t}`,...s];o.length&&r.push(`
`,...g1(o)),console.warn(...r)}Os(),qr=!1}function F1(){let t=kn[kn.length-1];if(!t)return[];const s=[];for(;t;){const n=s[0];n&&n.vnode===t?n.recurseCount++:s.push({vnode:t,recurseCount:0});const l=t.component&&t.component.parent;t=l&&l.vnode}return s}function g1(t){const s=[];return t.forEach((n,l)=>{s.push(...l===0?[]:[`
`],..._1(n))}),s}function _1({vnode:t,recurseCount:s}){const n=s>0?`... (${s} recursive calls)`:"",l=t.component?t.component.parent==null:!1,o=` at <${Mr(t.component,t.type,l)}`,r=">"+n;return t.props?[o,...b1(t.props),r]:[o+r]}function b1(t){const s=[],n=Object.keys(t);return n.slice(0,3).forEach(l=>{s.push(...oy(l,t[l]))}),n.length>3&&s.push(" ..."),s}function oy(t,s,n){return ze(s)?(s=JSON.stringify(s),n?s:[`${t}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?n?s:[`${t}=${s}`]:Te(s)?(s=oy(t,me(s.value),!0),n?s:[`${t}=Ref<`,s,">"]):ye(s)?[`${t}=fn${s.name?`<${s.name}>`:""}`]:(s=me(s),n?s:[`${t}=`,s])}function v1(t,s){t!==void 0&&(typeof t!="number"?z(`${s} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&z(`${s} is NaN - the duration expression might be incorrect.`))}const Tc={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function el(t,s,n,l){try{return l?t(...l):t()}catch(o){lo(o,s,n)}}function Qt(t,s,n,l){if(ye(t)){const o=el(t,s,n,l);return o&&wc(o)&&o.catch(r=>{lo(r,s,n)}),o}if(pe(t)){const o=[];for(let r=0;r<t.length;r++)o.push(Qt(t[r],s,n,l));return o}else z(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`)}function lo(t,s,n,l=!0){const o=s?s.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=s&&s.appContext.config||Ne;if(s){let i=s.parent;const p=s.proxy,B=Tc[n];for(;i;){const y=i.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](t,p,B)===!1)return}i=i.parent}if(r){Ps(),el(r,null,10,[t,p,B]),Os();return}}x1(t,n,o,l,a)}function x1(t,s,n,l=!0,o=!1){{const r=Tc[s];if(n&&Ao(n),z(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Mo(),l)throw t;console.error(t)}}const mt=[];let cs=-1;const zn=[];let Hs=null,qn=0;const ry=Promise.resolve();let Yo=null;const w1=100;function nt(t){const s=Yo||ry;return t?s.then(this?t.bind(this):t):s}function E1(t){let s=cs+1,n=mt.length;for(;s<n;){const l=s+n>>>1,o=mt[l],r=jl(o);r<t||r===t&&o.flags&2?s=l+1:n=l}return s}function Er(t){if(!(t.flags&1)){const s=jl(t),n=mt[mt.length-1];!n||!(t.flags&2)&&s>=jl(n)?mt.push(t):mt.splice(E1(s),0,t),t.flags|=1,ay()}}function ay(){Yo||(Yo=ry.then(py))}function cy(t){pe(t)?zn.push(...t):Hs&&t.id===-1?Hs.splice(qn+1,0,t):t.flags&1||(zn.push(t),t.flags|=1),ay()}function vi(t,s,n=cs+1){for(s=s||new Map;n<mt.length;n++){const l=mt[n];if(l&&l.flags&2){if(t&&l.id!==t.uid||$c(s,l))continue;mt.splice(n,1),n--,l.flags&4&&(l.flags&=-2),l(),l.flags&4||(l.flags&=-2)}}}function iy(t){if(zn.length){const s=[...new Set(zn)].sort((n,l)=>jl(n)-jl(l));if(zn.length=0,Hs){Hs.push(...s);return}for(Hs=s,t=t||new Map,qn=0;qn<Hs.length;qn++){const n=Hs[qn];$c(t,n)||(n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2)}Hs=null,qn=0}}const jl=t=>t.id==null?t.flags&2?-1:1/0:t.id;function py(t){t=t||new Map;const s=n=>$c(t,n);try{for(cs=0;cs<mt.length;cs++){const n=mt[cs];if(n&&!(n.flags&8)){if(s(n))continue;n.flags&4&&(n.flags&=-2),el(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2)}}}finally{for(;cs<mt.length;cs++){const n=mt[cs];n&&(n.flags&=-2)}cs=-1,mt.length=0,iy(t),Yo=null,(mt.length||zn.length)&&py(t)}}function $c(t,s){const n=t.get(s)||0;if(n>w1){const l=s.i,o=l&&zl(l.type);return lo(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return t.set(s,n+1),!1}let Zt=!1;const To=new Map;no().__VUE_HMR_RUNTIME__={createRecord:Ur(yy),rerender:Ur(D1),reload:Ur(C1)};const Tn=new Map;function k1(t){const s=t.type.__hmrId;let n=Tn.get(s);n||(yy(s,t.type),n=Tn.get(s)),n.instances.add(t)}function S1(t){Tn.get(t.type.__hmrId).instances.delete(t)}function yy(t,s){return Tn.has(t)?!1:(Tn.set(t,{initialDef:Ko(s),instances:new Set}),!0)}function Ko(t){return Zy(t)?t.__vccOpts:t}function D1(t,s){const n=Tn.get(t);n&&(n.initialDef.render=s,[...n.instances].forEach(l=>{s&&(l.render=s,Ko(l.type).render=s),l.renderCache=[],Zt=!0,l.update(),Zt=!1}))}function C1(t,s){const n=Tn.get(t);if(!n)return;s=Ko(s),xi(n.initialDef,s);const l=[...n.instances];for(let o=0;o<l.length;o++){const r=l[o],a=Ko(r.type);let i=To.get(a);i||(a!==n.initialDef&&xi(a,s),To.set(a,i=new Set)),i.add(r),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(i.add(r),r.ceReload(s.styles),i.delete(r)):r.parent?Er(()=>{Zt=!0,r.parent.update(),Zt=!1,i.delete(r)}):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),r.root.ce&&r!==r.root&&r.root.ce._removeChildStyle(a)}cy(()=>{To.clear()})}function xi(t,s){We(t,s);for(const n in t)n!=="__file"&&!(n in s)&&delete t[n]}function Ur(t){return(s,n)=>{try{return t(s,n)}catch(l){console.error(l),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let ps,gl=[],xa=!1;function oo(t,...s){ps?ps.emit(t,...s):xa||gl.push({event:t,args:s})}function uy(t,s){var n,l;ps=t,ps?(ps.enabled=!0,gl.forEach(({event:o,args:r})=>ps.emit(o,...r)),gl=[]):typeof window<"u"&&window.HTMLElement&&!((l=(n=window.navigator)==null?void 0:n.userAgent)!=null&&l.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{uy(r,s)}),setTimeout(()=>{ps||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xa=!0,gl=[])},3e3)):(xa=!0,gl=[])}function A1(t,s){oo("app:init",t,s,{Fragment:Ae,Text:sl,Comment:it,Static:Po})}function M1(t){oo("app:unmount",t)}const wa=Pc("component:added"),By=Pc("component:updated"),T1=Pc("component:removed"),$1=t=>{ps&&typeof ps.cleanupBuffer=="function"&&!ps.cleanupBuffer(t)&&T1(t)};/*! #__NO_SIDE_EFFECTS__ */function Pc(t){return s=>{oo(t,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const P1=dy("perf:start"),O1=dy("perf:end");function dy(t){return(s,n,l)=>{oo(t,s.appContext.app,s.uid,s,n,l)}}function R1(t,s,n){oo("component:emit",t.appContext.app,t,s,n)}let Ze=null,fy=null;function Xo(t){const s=Ze;return Ze=t,fy=t&&t.type.__scopeId||null,s}function T(t,s=Ze,n){if(!s||t._n)return t;const l=(...o)=>{l._d&&Li(-1);const r=Xo(s);let a;try{a=t(...o)}finally{Xo(r),l._d&&Li(1)}return By(s),a};return l._n=!0,l._c=!0,l._d=!0,l}function my(t){wd(t)&&z("Do not use built-in directive ids as custom directive id: "+t)}function hy(t,s){if(Ze===null)return z("withDirectives can only be used inside render functions."),t;const n=Ar(Ze),l=t.dirs||(t.dirs=[]);for(let o=0;o<s.length;o++){let[r,a,i,p=Ne]=s[o];r&&(ye(r)&&(r={mounted:r,updated:r}),r.deep&&ks(a),l.push({dir:r,instance:n,value:a,oldValue:void 0,arg:i,modifiers:p}))}return t}function ln(t,s,n,l){const o=t.dirs,r=s&&s.dirs;for(let a=0;a<o.length;a++){const i=o[a];r&&(i.oldValue=r[a].value);let p=i.dir[l];p&&(Ps(),Qt(p,n,8,[t.el,i,t,s]),Os())}}const Fy=Symbol("_vte"),L1=t=>t.__isTeleport,Sn=t=>t&&(t.disabled||t.disabled===""),wi=t=>t&&(t.defer||t.defer===""),Ei=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ki=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ea=(t,s)=>{const n=t&&t.to;if(ze(n))if(s){const l=s(n);return!l&&!Sn(t)&&z(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),l}else return z("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Sn(t)&&z(`Invalid Teleport target: ${n}`),n},gy={name:"Teleport",__isTeleport:!0,process(t,s,n,l,o,r,a,i,p,B){const{mc:y,pc:u,pbc:d,o:{insert:f,querySelector:m,createText:g,createComment:b}}=B,x=Sn(s.props);let{shapeFlag:v,children:F,dynamicChildren:k}=s;if(Zt&&(p=!1,k=null),t==null){const w=s.el=b("teleport start"),P=s.anchor=b("teleport end");f(w,n,l),f(P,n,l);const D=(O,I)=>{v&16&&(o&&o.isCE&&(o.ce._teleportTarget=O),y(F,O,I,o,r,a,i,p))},Y=()=>{const O=s.target=Ea(s.props,m),I=_y(O,s,g,f);O?(a!=="svg"&&Ei(O)?a="svg":a!=="mathml"&&ki(O)&&(a="mathml"),x||(D(O,I),$o(s,!1))):x||z("Invalid Teleport target on mount:",O,`(${typeof O})`)};x&&(D(n,P),$o(s,!0)),wi(s.props)?Qe(()=>{Y(),s.el.__isMounted=!0},r):Y()}else{if(wi(s.props)&&!t.el.__isMounted){Qe(()=>{gy.process(t,s,n,l,o,r,a,i,p,B),delete t.el.__isMounted},r);return}s.el=t.el,s.targetStart=t.targetStart;const w=s.anchor=t.anchor,P=s.target=t.target,D=s.targetAnchor=t.targetAnchor,Y=Sn(t.props),O=Y?n:P,I=Y?w:D;if(a==="svg"||Ei(P)?a="svg":(a==="mathml"||ki(P))&&(a="mathml"),k?(d(t.dynamicChildren,k,O,o,r,a,i),Qo(t,s,!0)):p||u(t,s,O,I,o,r,a,i,!1),x)Y?s.props&&t.props&&s.props.to!==t.props.to&&(s.props.to=t.props.to):ho(s,n,w,B,1);else if((s.props&&s.props.to)!==(t.props&&t.props.to)){const Z=s.target=Ea(s.props,m);Z?ho(s,Z,null,B,0):z("Invalid Teleport target on update:",P,`(${typeof P})`)}else Y&&ho(s,P,D,B,1);$o(s,x)}},remove(t,s,n,{um:l,o:{remove:o}},r){const{shapeFlag:a,children:i,anchor:p,targetStart:B,targetAnchor:y,target:u,props:d}=t;if(u&&(o(B),o(y)),r&&o(p),a&16){const f=r||!Sn(d);for(let m=0;m<i.length;m++){const g=i[m];l(g,s,n,f,!!g.dynamicChildren)}}},move:ho,hydrate:I1};function ho(t,s,n,{o:{insert:l},m:o},r=2){r===0&&l(t.targetAnchor,s,n);const{el:a,anchor:i,shapeFlag:p,children:B,props:y}=t,u=r===2;if(u&&l(a,s,n),(!u||Sn(y))&&p&16)for(let d=0;d<B.length;d++)o(B[d],s,n,2);u&&l(i,s,n)}function I1(t,s,n,l,o,r,{o:{nextSibling:a,parentNode:i,querySelector:p,insert:B,createText:y}},u){const d=s.target=Ea(s.props,p);if(d){const f=Sn(s.props),m=d._lpa||d.firstChild;if(s.shapeFlag&16)if(f)s.anchor=u(a(t),s,i(t),n,l,o,r),s.targetStart=m,s.targetAnchor=m&&a(m);else{s.anchor=a(t);let g=m;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")s.targetStart=g;else if(g.data==="teleport anchor"){s.targetAnchor=g,d._lpa=s.targetAnchor&&a(s.targetAnchor);break}}g=a(g)}s.targetAnchor||_y(d,s,y,B),u(m&&a(m),s,d,n,l,o,r)}$o(s,f)}return s.anchor&&a(s.anchor)}const N1=gy;function $o(t,s){const n=t.ctx;if(n&&n.ut){let l,o;for(s?(l=t.el,o=t.anchor):(l=t.targetStart,o=t.targetAnchor);l&&l!==o;)l.nodeType===1&&l.setAttribute("data-v-owner",n.uid),l=l.nextSibling;n.ut()}}function _y(t,s,n,l){const o=s.targetStart=n(""),r=s.targetAnchor=n("");return o[Fy]=r,t&&(l(o,t),l(r,t)),r}const In=Symbol("_leaveCb"),Fo=Symbol("_enterCb");function H1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return en(()=>{t.isMounted=!0}),ro(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],j1={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt};function q1(t,s){const{leavingVNodes:n}=t;let l=n.get(s.type);return l||(l=Object.create(null),n.set(s.type,l)),l}function ka(t,s,n,l,o){const{appear:r,mode:a,persisted:i=!1,onBeforeEnter:p,onEnter:B,onAfterEnter:y,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:b,onAppear:x,onAfterAppear:v,onAppearCancelled:F}=s,k=String(t.key),w=q1(n,t),P=(O,I)=>{O&&Qt(O,l,9,I)},D=(O,I)=>{const Z=I[1];P(O,I),pe(O)?O.every(q=>q.length<=1)&&Z():O.length<=1&&Z()},Y={mode:a,persisted:i,beforeEnter(O){let I=p;if(!n.isMounted)if(r)I=b||p;else return;O[In]&&O[In](!0);const Z=w[k];Z&&fn(t,Z)&&Z.el[In]&&Z.el[In](),P(I,[O])},enter(O){let I=B,Z=y,q=u;if(!n.isMounted)if(r)I=x||B,Z=v||y,q=F||u;else return;let Be=!1;const de=O[Fo]=Fe=>{Be||(Be=!0,Fe?P(q,[O]):P(Z,[O]),Y.delayedLeave&&Y.delayedLeave(),O[Fo]=void 0)};I?D(I,[O,de]):de()},leave(O,I){const Z=String(t.key);if(O[Fo]&&O[Fo](!0),n.isUnmounting)return I();P(d,[O]);let q=!1;const Be=O[In]=de=>{q||(q=!0,I(),de?P(g,[O]):P(m,[O]),O[In]=void 0,w[Z]===t&&delete w[Z])};w[Z]=t,f?D(f,[O,Be]):Be()},clone(O){const I=ka(O,s,n,l,o);return o&&o(I),I}};return Y}function Kn(t,s){t.shapeFlag&6&&t.component?(t.transition=s,Kn(t.component.subTree,s)):t.shapeFlag&128?(t.ssContent.transition=s.clone(t.ssContent),t.ssFallback.transition=s.clone(t.ssFallback)):t.transition=s}function by(t,s=!1,n){let l=[],o=0;for(let r=0;r<t.length;r++){let a=t[r];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===Ae?(a.patchFlag&128&&o++,l=l.concat(by(a.children,s,i))):(s||a.type!==it)&&l.push(i!=null?hs(a,{key:i}):a)}if(o>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function De(t,s){return ye(t)?(()=>We({name:t.name},s,{setup:t}))():t}function vy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const U1=new WeakSet;function Go(t,s,n,l,o=!1){if(pe(t)){t.forEach((m,g)=>Go(m,s&&(pe(s)?s[g]:s),n,l,o));return}if(Dn(l)&&!o){l.shapeFlag&512&&l.type.__asyncResolved&&l.component.subTree.component&&Go(t,s,n,l.component.subTree);return}const r=l.shapeFlag&4?Ar(l.component):l.el,a=o?null:r,{i,r:p}=t;if(!i){z("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const B=s&&s.r,y=i.refs===Ne?i.refs={}:i.refs,u=i.setupState,d=me(u),f=u===Ne?()=>!1:m=>($e(d,m)&&!Te(d[m])&&z(`Template ref "${m}" used on a non-ref value. It will not work in the production build.`),U1.has(d[m])?!1:$e(d,m));if(B!=null&&B!==p&&(ze(B)?(y[B]=null,f(B)&&(u[B]=null)):Te(B)&&(B.value=null)),ye(p))el(p,i,12,[a,y]);else{const m=ze(p),g=Te(p);if(m||g){const b=()=>{if(t.f){const x=m?f(p)?u[p]:y[p]:p.value;o?pe(x)&&xc(x,r):pe(x)?x.includes(r)||x.push(r):m?(y[p]=[r],f(p)&&(u[p]=y[p])):(p.value=[r],t.k&&(y[t.k]=p.value))}else m?(y[p]=a,f(p)&&(u[p]=a)):g?(p.value=a,t.k&&(y[t.k]=a)):z("Invalid template ref type:",p,`(${typeof p})`)};a?(b.id=-1,Qe(b,n)):b()}else z("Invalid template ref type:",p,`(${typeof p})`)}}no().requestIdleCallback;no().cancelIdleCallback;const Dn=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive,V1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:s}){const n=Vt(),l=n.ctx;if(!l.renderer)return()=>{const v=s.default&&s.default();return v&&v.length===1?v[0]:v};const o=new Map,r=new Set;let a=null;n.__v_cache=o;const i=n.suspense,{renderer:{p,m:B,um:y,o:{createElement:u}}}=l,d=u("div");l.activate=(v,F,k,w,P)=>{const D=v.component;B(v,F,k,0,i),p(D.vnode,v,F,k,D,i,w,v.slotScopeIds,P),Qe(()=>{D.isDeactivated=!1,D.a&&dn(D.a);const Y=v.props&&v.props.onVnodeMounted;Y&&It(Y,D.parent,v)},i),wa(D)},l.deactivate=v=>{const F=v.component;er(F.m),er(F.a),B(v,d,null,1,i),Qe(()=>{F.da&&dn(F.da);const k=v.props&&v.props.onVnodeUnmounted;k&&It(k,F.parent,v),F.isDeactivated=!0},i),wa(F)};function f(v){Vr(v),y(v,n,i,!0)}function m(v){o.forEach((F,k)=>{const w=zl(F.type);w&&!v(w)&&g(k)})}function g(v){const F=o.get(v);F&&(!a||!fn(F,a))?f(F):a&&Vr(a),o.delete(v),r.delete(v)}be(()=>[t.include,t.exclude],([v,F])=>{v&&m(k=>_l(v,k)),F&&m(k=>!_l(F,k))},{flush:"post",deep:!0});let b=null;const x=()=>{b!=null&&(sr(n.subTree.type)?Qe(()=>{o.set(b,go(n.subTree))},n.subTree.suspense):o.set(b,go(n.subTree)))};return en(x),Sr(x),ro(()=>{o.forEach(v=>{const{subTree:F,suspense:k}=n,w=go(F);if(v.type===w.type&&v.key===w.key){Vr(w);const P=w.component.da;P&&Qe(P,k);return}f(v)})}),()=>{if(b=null,!s.default)return a=null;const v=s.default(),F=v[0];if(v.length>1)return z("KeepAlive should contain exactly one component child."),a=null,v;if(!As(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return a=null,F;let k=go(F);if(k.type===it)return a=null,k;const w=k.type,P=zl(Dn(k)?k.type.__asyncResolved||{}:w),{include:D,exclude:Y,max:O}=t;if(D&&(!P||!_l(D,P))||Y&&P&&_l(Y,P))return k.shapeFlag&=-257,a=k,F;const I=k.key==null?w:k.key,Z=o.get(I);return k.el&&(k=hs(k),F.shapeFlag&128&&(F.ssContent=k)),b=I,Z?(k.el=Z.el,k.component=Z.component,k.transition&&Kn(k,k.transition),k.shapeFlag|=512,r.delete(I),r.add(I)):(r.add(I),O&&r.size>parseInt(O,10)&&g(r.values().next().value)),k.shapeFlag|=256,a=k,sr(F.type)?F:k}}},xy=V1;function _l(t,s){return pe(t)?t.some(n=>_l(n,s)):ze(t)?t.split(",").includes(s):xd(t)?(t.lastIndex=0,t.test(s)):!1}function wy(t,s){ky(t,"a",s)}function Ey(t,s){ky(t,"da",s)}function ky(t,s,n=et){const l=t.__wdc||(t.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(kr(s,l,n),n){let o=n.parent;for(;o&&o.parent;)Oc(o.parent.vnode)&&z1(l,s,n,o),o=o.parent}}function z1(t,s,n,l){const o=kr(s,t,l,!0);Dr(()=>{xc(l[s],o)},n)}function Vr(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function go(t){return t.shapeFlag&128?t.ssContent:t}function kr(t,s,n=et,l=!1){if(n){const o=n[t]||(n[t]=[]),r=s.__weh||(s.__weh=(...a)=>{Ps();const i=ao(n),p=Qt(s,n,t,a);return i(),Os(),p});return l?o.unshift(r):o.push(r),r}else{const o=pn(Tc[t].replace(/ hook$/,""));z(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Rs=t=>(s,n=et)=>{(!Vl||t==="sp")&&kr(t,(...l)=>s(...l),n)},W1=Rs("bm"),en=Rs("m"),Y1=Rs("bu"),Sr=Rs("u"),ro=Rs("bum"),Dr=Rs("um"),K1=Rs("sp"),X1=Rs("rtg"),G1=Rs("rtc");function Z1(t,s=et){kr("ec",t,s)}const Sa="components";function ql(t,s){return Q1(Sa,t,!0,s)||t}const J1=Symbol.for("v-ndc");function Q1(t,s,n=!0,l=!1){const o=Ze||et;if(o){const r=o.type;if(t===Sa){const i=zl(r,!1);if(i&&(i===s||i===ht(s)||i===Mn(ht(s))))return r}const a=Si(o[t]||r[t],s)||Si(o.appContext[t],s);if(!a&&l)return r;if(n&&!a){const i=t===Sa?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";z(`Failed to resolve ${t.slice(0,-1)}: ${s}${i}`)}return a}else z(`resolve${Mn(t.slice(0,-1))} can only be used in render() or setup().`)}function Si(t,s){return t&&(t[s]||t[ht(s)]||t[Mn(ht(s))])}function tl(t,s,n,l){let o;const r=n&&n[l],a=pe(t);if(a||ze(t)){const i=a&&En(t);let p=!1;i&&(p=!Ft(t),t=vr(t)),o=new Array(t.length);for(let B=0,y=t.length;B<y;B++)o[B]=s(p?at(t[B]):t[B],B,void 0,r&&r[B])}else if(typeof t=="number"){Number.isInteger(t)||z(`The v-for range expect an integer value but got ${t}.`),o=new Array(t);for(let i=0;i<t;i++)o[i]=s(i+1,i,void 0,r&&r[i])}else if(Le(t))if(t[Symbol.iterator])o=Array.from(t,(i,p)=>s(i,p,void 0,r&&r[p]));else{const i=Object.keys(t);o=new Array(i.length);for(let p=0,B=i.length;p<B;p++){const y=i[p];o[p]=s(t[y],y,p,r&&r[p])}}else o=[];return n&&(n[l]=o),o}function es(t,s,n={},l,o){if(Ze.ce||Ze.parent&&Dn(Ze.parent)&&Ze.parent.ce)return s!=="default"&&(n.name=s),E(),R(Ae,null,[W("slot",n,l&&l())],64);let r=t[s];r&&r.length>1&&(z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),E();const a=r&&Sy(r(n)),i=n.key||a&&a.key,p=R(Ae,{key:(i&&!$s(i)?i:`_${s}`)+(!a&&l?"_fb":"")},a||(l?l():[]),a&&t._===1?64:-2);return!o&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function Sy(t){return t.some(s=>As(s)?!(s.type===it||s.type===Ae&&!Sy(s.children)):!0)?t:null}const Da=t=>t?Ky(t)?Ar(t):Da(t.parent):null,Cn=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ys(t.props),$attrs:t=>ys(t.attrs),$slots:t=>ys(t.slots),$refs:t=>ys(t.refs),$parent:t=>Da(t.parent),$root:t=>Da(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lc(t),$forceUpdate:t=>t.f||(t.f=()=>{Er(t.update)}),$nextTick:t=>t.n||(t.n=nt.bind(t.proxy)),$watch:t=>$f.bind(t)}),Rc=t=>t==="_"||t==="$",zr=(t,s)=>t!==Ne&&!t.__isScriptSetup&&$e(t,s),Dy={get({_:t},s){if(s==="__v_skip")return!0;const{ctx:n,setupState:l,data:o,props:r,accessCache:a,type:i,appContext:p}=t;if(s==="__isVue")return!0;let B;if(s[0]!=="$"){const f=a[s];if(f!==void 0)switch(f){case 1:return l[s];case 2:return o[s];case 4:return n[s];case 3:return r[s]}else{if(zr(l,s))return a[s]=1,l[s];if(o!==Ne&&$e(o,s))return a[s]=2,o[s];if((B=t.propsOptions[0])&&$e(B,s))return a[s]=3,r[s];if(n!==Ne&&$e(n,s))return a[s]=4,n[s];Ca&&(a[s]=0)}}const y=Cn[s];let u,d;if(y)return s==="$attrs"?(st(t.attrs,"get",""),tr()):s==="$slots"&&st(t,"get",s),y(t);if((u=i.__cssModules)&&(u=u[s]))return u;if(n!==Ne&&$e(n,s))return a[s]=4,n[s];if(d=p.config.globalProperties,$e(d,s))return d[s];Ze&&(!ze(s)||s.indexOf("__v")!==0)&&(o!==Ne&&Rc(s[0])&&$e(o,s)?z(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Ze&&z(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:t},s,n){const{data:l,setupState:o,ctx:r}=t;return zr(o,s)?(o[s]=n,!0):o.__isScriptSetup&&$e(o,s)?(z(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):l!==Ne&&$e(l,s)?(l[s]=n,!0):$e(t.props,s)?(z(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in t?(z(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in t.appContext.config.globalProperties?Object.defineProperty(r,s,{enumerable:!0,configurable:!0,value:n}):r[s]=n,!0)},has({_:{data:t,setupState:s,accessCache:n,ctx:l,appContext:o,propsOptions:r}},a){let i;return!!n[a]||t!==Ne&&$e(t,a)||zr(s,a)||(i=r[0])&&$e(i,a)||$e(l,a)||$e(Cn,a)||$e(o.config.globalProperties,a)},defineProperty(t,s,n){return n.get!=null?t._.accessCache[s]=0:$e(n,"value")&&this.set(t,s,n.value,null),Reflect.defineProperty(t,s,n)}};Dy.ownKeys=t=>(z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function ef(t){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Cn).forEach(n=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,get:()=>Cn[n](t),set:ct})}),s}function tf(t){const{ctx:s,propsOptions:[n]}=t;n&&Object.keys(n).forEach(l=>{Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>t.props[l],set:ct})})}function sf(t){const{ctx:s,setupState:n}=t;Object.keys(me(n)).forEach(l=>{if(!n.__isScriptSetup){if(Rc(l[0])){z(`setup() return property ${JSON.stringify(l)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>n[l],set:ct})}})}function Cy(){return nf().slots}function nf(){const t=Vt();return t||z("useContext() called without active instance."),t.setupContext||(t.setupContext=Gy(t))}function Di(t){return pe(t)?t.reduce((s,n)=>(s[n]=null,s),{}):t}function lf(){const t=Object.create(null);return(s,n)=>{t[n]?z(`${s} property "${n}" is already defined in ${t[n]}.`):t[n]=s}}let Ca=!0;function of(t){const s=Lc(t),n=t.proxy,l=t.ctx;Ca=!1,s.beforeCreate&&Ci(s.beforeCreate,t,"bc");const{data:o,computed:r,methods:a,watch:i,provide:p,inject:B,created:y,beforeMount:u,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:b,beforeDestroy:x,beforeUnmount:v,destroyed:F,unmounted:k,render:w,renderTracked:P,renderTriggered:D,errorCaptured:Y,serverPrefetch:O,expose:I,inheritAttrs:Z,components:q,directives:Be,filters:de}=s,Fe=lf();{const[oe]=t.propsOptions;if(oe)for(const ce in oe)Fe("Props",ce)}if(B&&rf(B,l,Fe),a)for(const oe in a){const ce=a[oe];ye(ce)?(Object.defineProperty(l,oe,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),Fe("Methods",oe)):z(`Method "${oe}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(o){ye(o)||z("The data option must be a function. Plain object usage is no longer supported.");const oe=o.call(n,n);if(wc(oe)&&z("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(oe))z("data() should return an object.");else{t.data=Ye(oe);for(const ce in oe)Fe("Data",ce),Rc(ce[0])||Object.defineProperty(l,ce,{configurable:!0,enumerable:!0,get:()=>oe[ce],set:ct})}}if(Ca=!0,r)for(const oe in r){const ce=r[oe],Se=ye(ce)?ce.bind(n,n):ye(ce.get)?ce.get.bind(n,n):ct;Se===ct&&z(`Computed property "${oe}" has no getter.`);const He=!ye(ce)&&ye(ce.set)?ce.set.bind(n):()=>{z(`Write operation failed: computed property "${oe}" is readonly.`)},Ot=A({get:Se,set:He});Object.defineProperty(l,oe,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:ot=>Ot.value=ot}),Fe("Computed",oe)}if(i)for(const oe in i)Ay(i[oe],l,n,oe);if(p){const oe=ye(p)?p.call(n):p;Reflect.ownKeys(oe).forEach(ce=>{Ct(ce,oe[ce])})}y&&Ci(y,t,"c");function Ue(oe,ce){pe(ce)?ce.forEach(Se=>oe(Se.bind(n))):ce&&oe(ce.bind(n))}if(Ue(W1,u),Ue(en,d),Ue(Y1,f),Ue(Sr,m),Ue(wy,g),Ue(Ey,b),Ue(Z1,Y),Ue(G1,P),Ue(X1,D),Ue(ro,v),Ue(Dr,k),Ue(K1,O),pe(I))if(I.length){const oe=t.exposed||(t.exposed={});I.forEach(ce=>{Object.defineProperty(oe,ce,{get:()=>n[ce],set:Se=>n[ce]=Se})})}else t.exposed||(t.exposed={});w&&t.render===ct&&(t.render=w),Z!=null&&(t.inheritAttrs=Z),q&&(t.components=q),Be&&(t.directives=Be),O&&vy(t)}function rf(t,s,n=ct){pe(t)&&(t=Aa(t));for(const l in t){const o=t[l];let r;Le(o)?"default"in o?r=$(o.from||l,o.default,!0):r=$(o.from||l):r=$(o),Te(r)?Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):s[l]=r,n("Inject",l)}}function Ci(t,s,n){Qt(pe(t)?t.map(l=>l.bind(s.proxy)):t.bind(s.proxy),s,n)}function Ay(t,s,n,l){let o=l.includes(".")?qy(n,l):()=>n[l];if(ze(t)){const r=s[t];ye(r)?be(o,r):z(`Invalid watch handler specified by key "${t}"`,r)}else if(ye(t))be(o,t.bind(n));else if(Le(t))if(pe(t))t.forEach(r=>Ay(r,s,n,l));else{const r=ye(t.handler)?t.handler.bind(n):s[t.handler];ye(r)?be(o,r,t):z(`Invalid watch handler specified by key "${t.handler}"`,r)}else z(`Invalid watch option: "${l}"`,t)}function Lc(t){const s=t.type,{mixins:n,extends:l}=s,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(s);let p;return i?p=i:!o.length&&!n&&!l?p=s:(p={},o.length&&o.forEach(B=>Zo(p,B,a,!0)),Zo(p,s,a)),Le(s)&&r.set(s,p),p}function Zo(t,s,n,l=!1){const{mixins:o,extends:r}=s;r&&Zo(t,r,n,!0),o&&o.forEach(a=>Zo(t,a,n,!0));for(const a in s)if(l&&a==="expose")z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=af[a]||n&&n[a];t[a]=i?i(t[a],s[a]):s[a]}return t}const af={data:Ai,props:Mi,emits:Mi,methods:bl,computed:bl,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:bl,directives:bl,watch:pf,provide:Ai,inject:cf};function Ai(t,s){return s?t?function(){return We(ye(t)?t.call(this,this):t,ye(s)?s.call(this,this):s)}:s:t}function cf(t,s){return bl(Aa(t),Aa(s))}function Aa(t){if(pe(t)){const s={};for(let n=0;n<t.length;n++)s[t[n]]=t[n];return s}return t}function ut(t,s){return t?[...new Set([].concat(t,s))]:s}function bl(t,s){return t?We(Object.create(null),t,s):s}function Mi(t,s){return t?pe(t)&&pe(s)?[...new Set([...t,...s])]:We(Object.create(null),Di(t),Di(s??{})):s}function pf(t,s){if(!t)return s;if(!s)return t;const n=We(Object.create(null),t);for(const l in s)n[l]=ut(t[l],s[l]);return n}function My(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function uf(t,s){return function(l,o=null){ye(l)||(l=We({},l)),o!=null&&!Le(o)&&(z("root props passed to app.mount() must be an object."),o=null);const r=My(),a=new WeakSet,i=[];let p=!1;const B=r.app={_uid:yf++,_component:l,_props:o,_container:null,_context:r,_instance:null,version:lr,get config(){return r.config},set config(y){z("app.config cannot be replaced. Modify individual options instead.")},use(y,...u){return a.has(y)?z("Plugin has already been applied to target app."):y&&ye(y.install)?(a.add(y),y.install(B,...u)):ye(y)?(a.add(y),y(B,...u)):z('A plugin must either be a function or an object with an "install" function.'),B},mixin(y){return r.mixins.includes(y)?z("Mixin has already been applied to target app"+(y.name?`: ${y.name}`:"")):r.mixins.push(y),B},component(y,u){return Oa(y,r.config),u?(r.components[y]&&z(`Component "${y}" has already been registered in target app.`),r.components[y]=u,B):r.components[y]},directive(y,u){return my(y),u?(r.directives[y]&&z(`Directive "${y}" has already been registered in target app.`),r.directives[y]=u,B):r.directives[y]},mount(y,u,d){if(p)z("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{y.__vue_app__&&z("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=B._ceVNode||W(l,o);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),r.reload=()=>{t(hs(f),y,d)},u&&s?s(f,y):t(f,y,d),p=!0,B._container=y,y.__vue_app__=B,B._instance=f.component,A1(B,lr),Ar(f.component)}},onUnmount(y){typeof y!="function"&&z(`Expected function as first argument to app.onUnmount(), but got ${typeof y}`),i.push(y)},unmount(){p?(Qt(i,B._instance,16),t(null,B._container),B._instance=null,M1(B),delete B._container.__vue_app__):z("Cannot unmount an app that is not mounted.")},provide(y,u){return y in r.provides&&z(`App already provides property with key "${String(y)}". It will be overwritten with the new value.`),r.provides[y]=u,B},runWithContext(y){const u=Wn;Wn=B;try{return y()}finally{Wn=u}}};return B}}let Wn=null;function Ct(t,s){if(!et)z("provide() can only be used inside setup().");else{let n=et.provides;const l=et.parent&&et.parent.provides;l===n&&(n=et.provides=Object.create(l)),n[t]=s}}function $(t,s,n=!1){const l=et||Ze;if(l||Wn){const o=Wn?Wn._context.provides:l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return n&&ye(s)?s.call(l&&l.proxy):s;z(`injection "${String(t)}" not found.`)}else z("inject() can only be used inside setup() or functional components.")}const Ty={},$y=()=>Object.create(Ty),Py=t=>Object.getPrototypeOf(t)===Ty;function Bf(t,s,n,l=!1){const o={},r=$y();t.propsDefaults=Object.create(null),Oy(t,s,o,r);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);Ly(s||{},o,t),n?t.props=l?o:ey(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function df(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function ff(t,s,n,l){const{props:o,attrs:r,vnode:{patchFlag:a}}=t,i=me(o),[p]=t.propsOptions;let B=!1;if(!df(t)&&(l||a>0)&&!(a&16)){if(a&8){const y=t.vnode.dynamicProps;for(let u=0;u<y.length;u++){let d=y[u];if(Cr(t.emitsOptions,d))continue;const f=s[d];if(p)if($e(r,d))f!==r[d]&&(r[d]=f,B=!0);else{const m=ht(d);o[m]=Ma(p,i,m,f,t,!1)}else f!==r[d]&&(r[d]=f,B=!0)}}}else{Oy(t,s,o,r)&&(B=!0);let y;for(const u in i)(!s||!$e(s,u)&&((y=Ds(u))===u||!$e(s,y)))&&(p?n&&(n[u]!==void 0||n[y]!==void 0)&&(o[u]=Ma(p,i,u,void 0,t,!0)):delete o[u]);if(r!==i)for(const u in r)(!s||!$e(s,u))&&(delete r[u],B=!0)}B&&is(t.attrs,"set",""),Ly(s||{},o,t)}function Oy(t,s,n,l){const[o,r]=t.propsOptions;let a=!1,i;if(s)for(let p in s){if(wl(p))continue;const B=s[p];let y;o&&$e(o,y=ht(p))?!r||!r.includes(y)?n[y]=B:(i||(i={}))[y]=B:Cr(t.emitsOptions,p)||(!(p in l)||B!==l[p])&&(l[p]=B,a=!0)}if(r){const p=me(n),B=i||Ne;for(let y=0;y<r.length;y++){const u=r[y];n[u]=Ma(o,p,u,B[u],t,!$e(B,u))}}return a}function Ma(t,s,n,l,o,r){const a=t[n];if(a!=null){const i=$e(a,"default");if(i&&l===void 0){const p=a.default;if(a.type!==Function&&!a.skipFactory&&ye(p)){const{propsDefaults:B}=o;if(n in B)l=B[n];else{const y=ao(o);l=B[n]=p.call(null,s),y()}}else l=p;o.ce&&o.ce._setProp(n,l)}a[0]&&(r&&!i?l=!1:a[1]&&(l===""||l===Ds(n))&&(l=!0))}return l}const mf=new WeakMap;function Ry(t,s,n=!1){const l=n?mf:s.propsCache,o=l.get(t);if(o)return o;const r=t.props,a={},i=[];let p=!1;if(!ye(t)){const y=u=>{p=!0;const[d,f]=Ry(u,s,!0);We(a,d),f&&i.push(...f)};!n&&s.mixins.length&&s.mixins.forEach(y),t.extends&&y(t.extends),t.mixins&&t.mixins.forEach(y)}if(!r&&!p)return Le(t)&&l.set(t,Vn),Vn;if(pe(r))for(let y=0;y<r.length;y++){ze(r[y])||z("props must be strings when using array syntax.",r[y]);const u=ht(r[y]);Ti(u)&&(a[u]=Ne)}else if(r){Le(r)||z("invalid props options",r);for(const y in r){const u=ht(y);if(Ti(u)){const d=r[y],f=a[u]=pe(d)||ye(d)?{type:d}:We({},d),m=f.type;let g=!1,b=!0;if(pe(m))for(let x=0;x<m.length;++x){const v=m[x],F=ye(v)&&v.name;if(F==="Boolean"){g=!0;break}else F==="String"&&(b=!1)}else g=ye(m)&&m.name==="Boolean";f[0]=g,f[1]=b,(g||$e(f,"default"))&&i.push(u)}}}const B=[a,i];return Le(t)&&l.set(t,B),B}function Ti(t){return t[0]!=="$"&&!wl(t)?!0:(z(`Invalid prop name: "${t}" is a reserved property.`),!1)}function hf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ly(t,s,n){const l=me(s),o=n.propsOptions[0],r=Object.keys(t).map(a=>ht(a));for(const a in o){let i=o[a];i!=null&&Ff(a,l[a],i,ys(l),!r.includes(a))}}function Ff(t,s,n,l,o){const{type:r,required:a,validator:i,skipCheck:p}=n;if(a&&o){z('Missing required prop: "'+t+'"');return}if(!(s==null&&!a)){if(r!=null&&r!==!0&&!p){let B=!1;const y=pe(r)?r:[r],u=[];for(let d=0;d<y.length&&!B;d++){const{valid:f,expectedType:m}=_f(s,y[d]);u.push(m||""),B=f}if(!B){z(bf(t,s,u));return}}i&&!i(s,l)&&z('Invalid prop: custom validator check failed for prop "'+t+'".')}}const gf=Ts("String,Number,Boolean,Function,Symbol,BigInt");function _f(t,s){let n;const l=hf(s);if(l==="null")n=t===null;else if(gf(l)){const o=typeof t;n=o===l.toLowerCase(),!n&&o==="object"&&(n=t instanceof s)}else l==="Object"?n=Le(t):l==="Array"?n=pe(t):n=t instanceof s;return{valid:n,expectedType:l}}function bf(t,s,n){if(n.length===0)return`Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;let l=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Mn).join(" | ")}`;const o=n[0],r=Ec(s),a=$i(s,o),i=$i(s,r);return n.length===1&&Pi(o)&&!vf(o,r)&&(l+=` with value ${a}`),l+=`, got ${r} `,Pi(r)&&(l+=`with value ${i}.`),l}function $i(t,s){return s==="String"?`"${t}"`:s==="Number"?`${Number(t)}`:`${t}`}function Pi(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function vf(...t){return t.some(s=>s.toLowerCase()==="boolean")}const Iy=t=>t[0]==="_"||t==="$stable",Ic=t=>pe(t)?t.map(Xt):[Xt(t)],xf=(t,s,n)=>{if(s._n)return s;const l=T((...o)=>(et&&(!n||n.root===et.root)&&z(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ic(s(...o))),n);return l._c=!1,l},Ny=(t,s,n)=>{const l=t._ctx;for(const o in t){if(Iy(o))continue;const r=t[o];if(ye(r))s[o]=xf(o,r,l);else if(r!=null){z(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const a=Ic(r);s[o]=()=>a}}},Hy=(t,s)=>{Oc(t.vnode)||z("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ic(s);t.slots.default=()=>n},Ta=(t,s,n)=>{for(const l in s)(n||l!=="_")&&(t[l]=s[l])},wf=(t,s,n)=>{const l=t.slots=$y();if(t.vnode.shapeFlag&32){const o=s._;o?(Ta(l,s,n),n&&Vo(l,"_",o,!0)):Ny(s,l)}else s&&Hy(t,s)},Ef=(t,s,n)=>{const{vnode:l,slots:o}=t;let r=!0,a=Ne;if(l.shapeFlag&32){const i=s._;i?Zt?(Ta(o,s,n),is(t,"set","$slots")):n&&i===1?r=!1:Ta(o,s,n):(r=!s.$stable,Ny(s,o)),a=s}else s&&(Hy(t,s),a={default:1});if(r)for(const i in o)!Iy(i)&&a[i]==null&&delete o[i]};let cl,Vs;function _s(t,s){t.appContext.config.performance&&Jo()&&Vs.mark(`vue-${s}-${t.uid}`),P1(t,s,Jo()?Vs.now():Date.now())}function bs(t,s){if(t.appContext.config.performance&&Jo()){const n=`vue-${s}-${t.uid}`,l=n+":end";Vs.mark(l),Vs.measure(`<${Mr(t,t.type)}> ${s}`,n,l),Vs.clearMarks(n),Vs.clearMarks(l)}O1(t,s,Jo()?Vs.now():Date.now())}function Jo(){return cl!==void 0||(typeof window<"u"&&window.performance?(cl=!0,Vs=window.performance):cl=!1),cl}function kf(){const t=[];if(t.length){const s=t.length>1;console.warn(`Feature flag${s?"s":""} ${t.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qe=Hf;function Sf(t){return Df(t)}function Df(t,s){kf();const n=no();n.__VUE__=!0,uy(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:l,remove:o,patchProp:r,createElement:a,createText:i,createComment:p,setText:B,setElementText:y,parentNode:u,nextSibling:d,setScopeId:f=ct,insertStaticContent:m}=t,g=(h,_,S,L=null,j=null,U=null,J=void 0,X=null,K=Zt?!1:!!_.dynamicChildren)=>{if(h===_)return;h&&!fn(h,_)&&(L=se(h),_t(h,j,U,!0),h=null),_.patchFlag===-2&&(K=!1,_.dynamicChildren=null);const{type:V,ref:ue,shapeFlag:ne}=_;switch(V){case sl:b(h,_,S,L);break;case it:x(h,_,S,L);break;case Po:h==null?v(_,S,L,J):F(h,_,S,J);break;case Ae:Be(h,_,S,L,j,U,J,X,K);break;default:ne&1?P(h,_,S,L,j,U,J,X,K):ne&6?de(h,_,S,L,j,U,J,X,K):ne&64||ne&128?V.process(h,_,S,L,j,U,J,X,K,_e):z("Invalid VNode type:",V,`(${typeof V})`)}ue!=null&&j&&Go(ue,h&&h.ref,U,_||h,!_)},b=(h,_,S,L)=>{if(h==null)l(_.el=i(_.children),S,L);else{const j=_.el=h.el;_.children!==h.children&&B(j,_.children)}},x=(h,_,S,L)=>{h==null?l(_.el=p(_.children||""),S,L):_.el=h.el},v=(h,_,S,L)=>{[h.el,h.anchor]=m(h.children,_,S,L,h.el,h.anchor)},F=(h,_,S,L)=>{if(_.children!==h.children){const j=d(h.anchor);w(h),[_.el,_.anchor]=m(_.children,S,j,L)}else _.el=h.el,_.anchor=h.anchor},k=({el:h,anchor:_},S,L)=>{let j;for(;h&&h!==_;)j=d(h),l(h,S,L),h=j;l(_,S,L)},w=({el:h,anchor:_})=>{let S;for(;h&&h!==_;)S=d(h),o(h),h=S;o(_)},P=(h,_,S,L,j,U,J,X,K)=>{_.type==="svg"?J="svg":_.type==="math"&&(J="mathml"),h==null?D(_,S,L,j,U,J,X,K):I(h,_,j,U,J,X,K)},D=(h,_,S,L,j,U,J,X)=>{let K,V;const{props:ue,shapeFlag:ne,transition:ie,dirs:fe}=h;if(K=h.el=a(h.type,U,ue&&ue.is,ue),ne&8?y(K,h.children):ne&16&&O(h.children,K,null,L,j,Wr(h,U),J,X),fe&&ln(h,null,L,"created"),Y(K,h,h.scopeId,J,L),ue){for(const Ve in ue)Ve!=="value"&&!wl(Ve)&&r(K,Ve,null,ue[Ve],U,L);"value"in ue&&r(K,"value",null,ue.value,U),(V=ue.onVnodeBeforeMount)&&It(V,L,h)}Vo(K,"__vnode",h,!0),Vo(K,"__vueParentComponent",L,!0),fe&&ln(h,null,L,"beforeMount");const Ce=Cf(j,ie);Ce&&ie.beforeEnter(K),l(K,_,S),((V=ue&&ue.onVnodeMounted)||Ce||fe)&&Qe(()=>{V&&It(V,L,h),Ce&&ie.enter(K),fe&&ln(h,null,L,"mounted")},j)},Y=(h,_,S,L,j)=>{if(S&&f(h,S),L)for(let U=0;U<L.length;U++)f(h,L[U]);if(j){let U=j.subTree;if(U.patchFlag>0&&U.patchFlag&2048&&(U=Hc(U.children)||U),_===U||sr(U.type)&&(U.ssContent===_||U.ssFallback===_)){const J=j.vnode;Y(h,J,J.scopeId,J.slotScopeIds,j.parent)}}},O=(h,_,S,L,j,U,J,X,K=0)=>{for(let V=K;V<h.length;V++){const ue=h[V]=X?js(h[V]):Xt(h[V]);g(null,ue,_,S,L,j,U,J,X)}},I=(h,_,S,L,j,U,J)=>{const X=_.el=h.el;X.__vnode=_;let{patchFlag:K,dynamicChildren:V,dirs:ue}=_;K|=h.patchFlag&16;const ne=h.props||Ne,ie=_.props||Ne;let fe;if(S&&on(S,!1),(fe=ie.onVnodeBeforeUpdate)&&It(fe,S,_,h),ue&&ln(_,h,S,"beforeUpdate"),S&&on(S,!0),Zt&&(K=0,J=!1,V=null),(ne.innerHTML&&ie.innerHTML==null||ne.textContent&&ie.textContent==null)&&y(X,""),V?(Z(h.dynamicChildren,V,X,S,L,Wr(_,j),U),Qo(h,_)):J||Se(h,_,X,null,S,L,Wr(_,j),U,!1),K>0){if(K&16)q(X,ne,ie,S,j);else if(K&2&&ne.class!==ie.class&&r(X,"class",null,ie.class,j),K&4&&r(X,"style",ne.style,ie.style,j),K&8){const Ce=_.dynamicProps;for(let Ve=0;Ve<Ce.length;Ve++){const qe=Ce[Ve],Et=ne[qe],rt=ie[qe];(rt!==Et||qe==="value")&&r(X,qe,Et,rt,j,S)}}K&1&&h.children!==_.children&&y(X,_.children)}else!J&&V==null&&q(X,ne,ie,S,j);((fe=ie.onVnodeUpdated)||ue)&&Qe(()=>{fe&&It(fe,S,_,h),ue&&ln(_,h,S,"updated")},L)},Z=(h,_,S,L,j,U,J)=>{for(let X=0;X<_.length;X++){const K=h[X],V=_[X],ue=K.el&&(K.type===Ae||!fn(K,V)||K.shapeFlag&70)?u(K.el):S;g(K,V,ue,null,L,j,U,J,!0)}},q=(h,_,S,L,j)=>{if(_!==S){if(_!==Ne)for(const U in _)!wl(U)&&!(U in S)&&r(h,U,_[U],null,j,L);for(const U in S){if(wl(U))continue;const J=S[U],X=_[U];J!==X&&U!=="value"&&r(h,U,X,J,j,L)}"value"in S&&r(h,"value",_.value,S.value,j)}},Be=(h,_,S,L,j,U,J,X,K)=>{const V=_.el=h?h.el:i(""),ue=_.anchor=h?h.anchor:i("");let{patchFlag:ne,dynamicChildren:ie,slotScopeIds:fe}=_;(Zt||ne&2048)&&(ne=0,K=!1,ie=null),fe&&(X=X?X.concat(fe):fe),h==null?(l(V,S,L),l(ue,S,L),O(_.children||[],S,ue,j,U,J,X,K)):ne>0&&ne&64&&ie&&h.dynamicChildren?(Z(h.dynamicChildren,ie,S,j,U,J,X),Qo(h,_)):Se(h,_,S,ue,j,U,J,X,K)},de=(h,_,S,L,j,U,J,X,K)=>{_.slotScopeIds=X,h==null?_.shapeFlag&512?j.ctx.activate(_,S,L,J,K):Fe(_,S,L,j,U,J,K):Ue(h,_,K)},Fe=(h,_,S,L,j,U,J)=>{const X=h.component=Wf(h,L,j);if(X.type.__hmrId&&k1(X),Ao(h),_s(X,"mount"),Oc(h)&&(X.ctx.renderer=_e),_s(X,"init"),Kf(X,!1,J),bs(X,"init"),X.asyncDep){if(Zt&&(h.el=null),j&&j.registerDep(X,oe,J),!h.el){const K=X.subTree=W(it);x(null,K,_,S)}}else oe(X,h,_,S,j,U,J);Mo(),bs(X,"mount")},Ue=(h,_,S)=>{const L=_.component=h.component;if(If(h,_,S))if(L.asyncDep&&!L.asyncResolved){Ao(_),ce(L,_,S),Mo();return}else L.next=_,L.update();else _.el=h.el,L.vnode=_},oe=(h,_,S,L,j,U,J)=>{const X=()=>{if(h.isMounted){let{next:ne,bu:ie,u:fe,parent:Ce,vnode:Ve}=h;{const kt=jy(h);if(kt){ne&&(ne.el=Ve.el,ce(h,ne,J)),kt.asyncDep.then(()=>{h.isUnmounted||X()});return}}let qe=ne,Et;Ao(ne||h.vnode),on(h,!1),ne?(ne.el=Ve.el,ce(h,ne,J)):ne=Ve,ie&&dn(ie),(Et=ne.props&&ne.props.onVnodeBeforeUpdate)&&It(Et,Ce,ne,Ve),on(h,!0),_s(h,"render");const rt=Yr(h);bs(h,"render");const Wt=h.subTree;h.subTree=rt,_s(h,"patch"),g(Wt,rt,u(Wt.el),se(Wt),h,j,U),bs(h,"patch"),ne.el=rt.el,qe===null&&Nf(h,rt.el),fe&&Qe(fe,j),(Et=ne.props&&ne.props.onVnodeUpdated)&&Qe(()=>It(Et,Ce,ne,Ve),j),By(h),Mo()}else{let ne;const{el:ie,props:fe}=_,{bm:Ce,m:Ve,parent:qe,root:Et,type:rt}=h,Wt=Dn(_);if(on(h,!1),Ce&&dn(Ce),!Wt&&(ne=fe&&fe.onVnodeBeforeMount)&&It(ne,qe,_),on(h,!0),ie&&xe){const kt=()=>{_s(h,"render"),h.subTree=Yr(h),bs(h,"render"),_s(h,"hydrate"),xe(ie,h.subTree,h,j,null),bs(h,"hydrate")};Wt&&rt.__asyncHydrate?rt.__asyncHydrate(ie,h,kt):kt()}else{Et.ce&&Et.ce._injectChildStyle(rt),_s(h,"render");const kt=h.subTree=Yr(h);bs(h,"render"),_s(h,"patch"),g(null,kt,S,L,h,j,U),bs(h,"patch"),_.el=kt.el}if(Ve&&Qe(Ve,j),!Wt&&(ne=fe&&fe.onVnodeMounted)){const kt=_;Qe(()=>It(ne,qe,kt),j)}(_.shapeFlag&256||qe&&Dn(qe.vnode)&&qe.vnode.shapeFlag&256)&&h.a&&Qe(h.a,j),h.isMounted=!0,wa(h),_=S=L=null}};h.scope.on();const K=h.effect=new I2(X);h.scope.off();const V=h.update=K.run.bind(K),ue=h.job=K.runIfDirty.bind(K);ue.i=h,ue.id=h.uid,K.scheduler=()=>Er(ue),on(h,!0),K.onTrack=h.rtc?ne=>dn(h.rtc,ne):void 0,K.onTrigger=h.rtg?ne=>dn(h.rtg,ne):void 0,V()},ce=(h,_,S)=>{_.component=h;const L=h.vnode.props;h.vnode=_,h.next=null,ff(h,_.props,L,S),Ef(h,_.children,S),Ps(),vi(h),Os()},Se=(h,_,S,L,j,U,J,X,K=!1)=>{const V=h&&h.children,ue=h?h.shapeFlag:0,ne=_.children,{patchFlag:ie,shapeFlag:fe}=_;if(ie>0){if(ie&128){Ot(V,ne,S,L,j,U,J,X,K);return}else if(ie&256){He(V,ne,S,L,j,U,J,X,K);return}}fe&8?(ue&16&&C(V,j,U),ne!==V&&y(S,ne)):ue&16?fe&16?Ot(V,ne,S,L,j,U,J,X,K):C(V,j,U,!0):(ue&8&&y(S,""),fe&16&&O(ne,S,L,j,U,J,X,K))},He=(h,_,S,L,j,U,J,X,K)=>{h=h||Vn,_=_||Vn;const V=h.length,ue=_.length,ne=Math.min(V,ue);let ie;for(ie=0;ie<ne;ie++){const fe=_[ie]=K?js(_[ie]):Xt(_[ie]);g(h[ie],fe,S,null,j,U,J,X,K)}V>ue?C(h,j,U,!0,!1,ne):O(_,S,L,j,U,J,X,K,ne)},Ot=(h,_,S,L,j,U,J,X,K)=>{let V=0;const ue=_.length;let ne=h.length-1,ie=ue-1;for(;V<=ne&&V<=ie;){const fe=h[V],Ce=_[V]=K?js(_[V]):Xt(_[V]);if(fn(fe,Ce))g(fe,Ce,S,null,j,U,J,X,K);else break;V++}for(;V<=ne&&V<=ie;){const fe=h[ne],Ce=_[ie]=K?js(_[ie]):Xt(_[ie]);if(fn(fe,Ce))g(fe,Ce,S,null,j,U,J,X,K);else break;ne--,ie--}if(V>ne){if(V<=ie){const fe=ie+1,Ce=fe<ue?_[fe].el:L;for(;V<=ie;)g(null,_[V]=K?js(_[V]):Xt(_[V]),S,Ce,j,U,J,X,K),V++}}else if(V>ie)for(;V<=ne;)_t(h[V],j,U,!0),V++;else{const fe=V,Ce=V,Ve=new Map;for(V=Ce;V<=ie;V++){const yt=_[V]=K?js(_[V]):Xt(_[V]);yt.key!=null&&(Ve.has(yt.key)&&z("Duplicate keys found during update:",JSON.stringify(yt.key),"Make sure keys are unique."),Ve.set(yt.key,V))}let qe,Et=0;const rt=ie-Ce+1;let Wt=!1,kt=0;const rl=new Array(rt);for(V=0;V<rt;V++)rl[V]=0;for(V=fe;V<=ne;V++){const yt=h[V];if(Et>=rt){_t(yt,j,U,!0);continue}let os;if(yt.key!=null)os=Ve.get(yt.key);else for(qe=Ce;qe<=ie;qe++)if(rl[qe-Ce]===0&&fn(yt,_[qe])){os=qe;break}os===void 0?_t(yt,j,U,!0):(rl[os-Ce]=V+1,os>=kt?kt=os:Wt=!0,g(yt,_[os],S,null,j,U,J,X,K),Et++)}const mi=Wt?Af(rl):Vn;for(qe=mi.length-1,V=rt-1;V>=0;V--){const yt=Ce+V,os=_[yt],hi=yt+1<ue?_[yt+1].el:L;rl[V]===0?g(null,os,S,hi,j,U,J,X,K):Wt&&(qe<0||V!==mi[qe]?ot(os,S,hi,2):qe--)}}},ot=(h,_,S,L,j=null)=>{const{el:U,type:J,transition:X,children:K,shapeFlag:V}=h;if(V&6){ot(h.component.subTree,_,S,L);return}if(V&128){h.suspense.move(_,S,L);return}if(V&64){J.move(h,_,S,_e);return}if(J===Ae){l(U,_,S);for(let ne=0;ne<K.length;ne++)ot(K[ne],_,S,L);l(h.anchor,_,S);return}if(J===Po){k(h,_,S);return}if(L!==2&&V&1&&X)if(L===0)X.beforeEnter(U),l(U,_,S),Qe(()=>X.enter(U),j);else{const{leave:ne,delayLeave:ie,afterLeave:fe}=X,Ce=()=>l(U,_,S),Ve=()=>{ne(U,()=>{Ce(),fe&&fe()})};ie?ie(U,Ce,Ve):Ve()}else l(U,_,S)},_t=(h,_,S,L=!1,j=!1)=>{const{type:U,props:J,ref:X,children:K,dynamicChildren:V,shapeFlag:ue,patchFlag:ne,dirs:ie,cacheIndex:fe}=h;if(ne===-2&&(j=!1),X!=null&&Go(X,null,S,h,!0),fe!=null&&(_.renderCache[fe]=void 0),ue&256){_.ctx.deactivate(h);return}const Ce=ue&1&&ie,Ve=!Dn(h);let qe;if(Ve&&(qe=J&&J.onVnodeBeforeUnmount)&&It(qe,_,h),ue&6)Rt(h.component,S,L);else{if(ue&128){h.suspense.unmount(S,L);return}Ce&&ln(h,null,_,"beforeUnmount"),ue&64?h.type.remove(h,_,S,_e,L):V&&!V.hasOnce&&(U!==Ae||ne>0&&ne&64)?C(V,_,S,!1,!0):(U===Ae&&ne&384||!j&&ue&16)&&C(K,_,S),L&&ls(h)}(Ve&&(qe=J&&J.onVnodeUnmounted)||Ce)&&Qe(()=>{qe&&It(qe,_,h),Ce&&ln(h,null,_,"unmounted")},S)},ls=h=>{const{type:_,el:S,anchor:L,transition:j}=h;if(_===Ae){h.patchFlag>0&&h.patchFlag&2048&&j&&!j.persisted?h.children.forEach(J=>{J.type===it?o(J.el):ls(J)}):nn(S,L);return}if(_===Po){w(h);return}const U=()=>{o(S),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(h.shapeFlag&1&&j&&!j.persisted){const{leave:J,delayLeave:X}=j,K=()=>J(S,U);X?X(h.el,U,K):K()}else U()},nn=(h,_)=>{let S;for(;h!==_;)S=d(h),o(h),h=S;o(_)},Rt=(h,_,S)=>{h.type.__hmrId&&S1(h);const{bum:L,scope:j,job:U,subTree:J,um:X,m:K,a:V}=h;er(K),er(V),L&&dn(L),j.stop(),U&&(U.flags|=8,_t(J,h,_,S)),X&&Qe(X,_),Qe(()=>{h.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),$1(h)},C=(h,_,S,L=!1,j=!1,U=0)=>{for(let J=U;J<h.length;J++)_t(h[J],_,S,L,j)},se=h=>{if(h.shapeFlag&6)return se(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const _=d(h.anchor||h.el),S=_&&_[Fy];return S?d(S):_};let te=!1;const ae=(h,_,S)=>{h==null?_._vnode&&_t(_._vnode,null,null,!0):g(_._vnode||null,h,_,null,null,null,S),_._vnode=h,te||(te=!0,vi(),iy(),te=!1)},_e={p:g,um:_t,m:ot,r:ls,mt:Fe,mc:O,pc:Se,pbc:Z,n:se,o:t};let je,xe;return s&&([je,xe]=s(_e)),{render:ae,hydrate:je,createApp:uf(ae,je)}}function Wr({type:t,props:s},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:n}function on({effect:t,job:s},n){n?(t.flags|=32,s.flags|=4):(t.flags&=-33,s.flags&=-5)}function Cf(t,s){return(!t||t&&!t.pendingBranch)&&s&&!s.persisted}function Qo(t,s,n=!1){const l=t.children,o=s.children;if(pe(l)&&pe(o))for(let r=0;r<l.length;r++){const a=l[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=js(o[r]),i.el=a.el),!n&&i.patchFlag!==-2&&Qo(a,i)),i.type===sl&&(i.el=a.el),i.type===it&&!i.el&&(i.el=a.el)}}function Af(t){const s=t.slice(),n=[0];let l,o,r,a,i;const p=t.length;for(l=0;l<p;l++){const B=t[l];if(B!==0){if(o=n[n.length-1],t[o]<B){s[l]=o,n.push(l);continue}for(r=0,a=n.length-1;r<a;)i=r+a>>1,t[n[i]]<B?r=i+1:a=i;B<t[n[r]]&&(r>0&&(s[l]=n[r-1]),n[r]=l)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=s[a];return n}function jy(t){const s=t.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:jy(s)}function er(t){if(t)for(let s=0;s<t.length;s++)t[s].flags|=8}const Mf=Symbol.for("v-scx"),Tf=()=>{{const t=$(Mf);return t||z("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function $n(t,s){return Nc(t,null,s)}function be(t,s,n){return ye(s)||z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Nc(t,s,n)}function Nc(t,s,n=Ne){const{immediate:l,deep:o,flush:r,once:a}=n;s||(l!==void 0&&z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&z('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const i=We({},n);i.onWarn=z;const p=s&&l||!s&&r!=="post";let B;if(Vl){if(r==="sync"){const f=Tf();B=f.__watcherHandles||(f.__watcherHandles=[])}else if(!p){const f=()=>{};return f.stop=ct,f.resume=ct,f.pause=ct,f}}const y=et;i.call=(f,m,g)=>Qt(f,y,m,g);let u=!1;r==="post"?i.scheduler=f=>{Qe(f,y&&y.suspense)}:r!=="sync"&&(u=!0,i.scheduler=(f,m)=>{m?f():Er(f)}),i.augmentJob=f=>{s&&(f.flags|=4),u&&(f.flags|=2,y&&(f.id=y.uid,f.i=y))};const d=h1(t,s,i);return Vl&&(B?B.push(d):p&&d()),d}function $f(t,s,n){const l=this.proxy,o=ze(t)?t.includes(".")?qy(l,t):()=>l[t]:t.bind(l,l);let r;ye(s)?r=s:(r=s.handler,n=s);const a=ao(this),i=Nc(o,r.bind(l),n);return a(),i}function qy(t,s){const n=s.split(".");return()=>{let l=t;for(let o=0;o<n.length&&l;o++)l=l[n[o]];return l}}const Pf=(t,s)=>s==="modelValue"||s==="model-value"?t.modelModifiers:t[`${s}Modifiers`]||t[`${ht(s)}Modifiers`]||t[`${Ds(s)}Modifiers`];function Of(t,s,...n){if(t.isUnmounted)return;const l=t.vnode.props||Ne;{const{emitsOptions:y,propsOptions:[u]}=t;if(y)if(!(s in y))(!u||!(pn(ht(s))in u))&&z(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${pn(ht(s))}" prop.`);else{const d=y[s];ye(d)&&(d(...n)||z(`Invalid event arguments: event validation failed for event "${s}".`))}}let o=n;const r=s.startsWith("update:"),a=r&&Pf(l,s.slice(7));a&&(a.trim&&(o=n.map(y=>ze(y)?y.trim():y)),a.number&&(o=n.map(Sd))),R1(t,s,o);{const y=s.toLowerCase();y!==s&&l[pn(y)]&&z(`Event "${y}" is emitted in component ${Mr(t,t.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ds(s)}" instead of "${s}".`)}let i,p=l[i=pn(s)]||l[i=pn(ht(s))];!p&&r&&(p=l[i=pn(Ds(s))]),p&&Qt(p,t,6,o);const B=l[i+"Once"];if(B){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Qt(B,t,6,o)}}function Uy(t,s,n=!1){const l=s.emitsCache,o=l.get(t);if(o!==void 0)return o;const r=t.emits;let a={},i=!1;if(!ye(t)){const p=B=>{const y=Uy(B,s,!0);y&&(i=!0,We(a,y))};!n&&s.mixins.length&&s.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}return!r&&!i?(Le(t)&&l.set(t,null),null):(pe(r)?r.forEach(p=>a[p]=null):We(a,r),Le(t)&&l.set(t,a),a)}function Cr(t,s){return!t||!to(s)?!1:(s=s.slice(2).replace(/Once$/,""),$e(t,s[0].toLowerCase()+s.slice(1))||$e(t,Ds(s))||$e(t,s))}let $a=!1;function tr(){$a=!0}function Yr(t){const{type:s,vnode:n,proxy:l,withProxy:o,propsOptions:[r],slots:a,attrs:i,emit:p,render:B,renderCache:y,props:u,data:d,setupState:f,ctx:m,inheritAttrs:g}=t,b=Xo(t);let x,v;$a=!1;try{if(n.shapeFlag&4){const w=o||l,P=f.__isScriptSetup?new Proxy(w,{get(D,Y,O){return z(`Property '${String(Y)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(D,Y,O)}}):w;x=Xt(B.call(P,w,y,ys(u),f,d,m)),v=i}else{const w=s;i===u&&tr(),x=Xt(w.length>1?w(ys(u),{get attrs(){return tr(),ys(i)},slots:a,emit:p}):w(ys(u),null)),v=s.props?i:Rf(i)}}catch(w){Sl.length=0,lo(w,t,1),x=W(it)}let F=x,k;if(x.patchFlag>0&&x.patchFlag&2048&&([F,k]=Vy(x)),v&&g!==!1){const w=Object.keys(v),{shapeFlag:P}=F;if(w.length){if(P&7)r&&w.some(Uo)&&(v=Lf(v,r)),F=hs(F,v,!1,!0);else if(!$a&&F.type!==it){const D=Object.keys(i),Y=[],O=[];for(let I=0,Z=D.length;I<Z;I++){const q=D[I];to(q)?Uo(q)||Y.push(q[2].toLowerCase()+q.slice(3)):O.push(q)}O.length&&z(`Extraneous non-props attributes (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`),Y.length&&z(`Extraneous non-emits event listeners (${Y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Oi(F)||z("Runtime directive used on component with non-element root node. The directives will not function as intended."),F=hs(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(Oi(F)||z("Component inside <Transition> renders non-element root node that cannot be animated."),Kn(F,n.transition)),k?k(F):x=F,Xo(b),x}const Vy=t=>{const s=t.children,n=t.dynamicChildren,l=Hc(s,!1);if(l){if(l.patchFlag>0&&l.patchFlag&2048)return Vy(l)}else return[t,void 0];const o=s.indexOf(l),r=n?n.indexOf(l):-1,a=i=>{s[o]=i,n&&(r>-1?n[r]=i:i.patchFlag>0&&(t.dynamicChildren=[...n,i]))};return[Xt(l),a]};function Hc(t,s=!0){let n;for(let l=0;l<t.length;l++){const o=t[l];if(As(o)){if(o.type!==it||o.children==="v-if"){if(n)return;if(n=o,s&&n.patchFlag>0&&n.patchFlag&2048)return Hc(n.children)}}else return}return n}const Rf=t=>{let s;for(const n in t)(n==="class"||n==="style"||to(n))&&((s||(s={}))[n]=t[n]);return s},Lf=(t,s)=>{const n={};for(const l in t)(!Uo(l)||!(l.slice(9)in s))&&(n[l]=t[l]);return n},Oi=t=>t.shapeFlag&7||t.type===it;function If(t,s,n){const{props:l,children:o,component:r}=t,{props:a,children:i,patchFlag:p}=s,B=r.emitsOptions;if((o||i)&&Zt||s.dirs||s.transition)return!0;if(n&&p>=0){if(p&1024)return!0;if(p&16)return l?Ri(l,a,B):!!a;if(p&8){const y=s.dynamicProps;for(let u=0;u<y.length;u++){const d=y[u];if(a[d]!==l[d]&&!Cr(B,d))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?Ri(l,a,B):!0:!!a;return!1}function Ri(t,s,n){const l=Object.keys(s);if(l.length!==Object.keys(t).length)return!0;for(let o=0;o<l.length;o++){const r=l[o];if(s[r]!==t[r]&&!Cr(n,r))return!0}return!1}function Nf({vnode:t,parent:s},n){for(;s;){const l=s.subTree;if(l.suspense&&l.suspense.activeBranch===t&&(l.el=t.el),l===t)(t=s.vnode).el=n,s=s.parent;else break}}const sr=t=>t.__isSuspense;function Hf(t,s){s&&s.pendingBranch?pe(t)?s.effects.push(...t):s.effects.push(t):cy(t)}const Ae=Symbol.for("v-fgt"),sl=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),Sl=[];let Mt=null;function E(t=!1){Sl.push(Mt=t?null:[])}function jf(){Sl.pop(),Mt=Sl[Sl.length-1]||null}let Ul=1;function Li(t,s=!1){Ul+=t,t<0&&Mt&&s&&(Mt.hasOnce=!0)}function zy(t){return t.dynamicChildren=Ul>0?Mt||Vn:null,jf(),Ul>0&&Mt&&Mt.push(t),t}function le(t,s,n,l,o,r){return zy(e(t,s,n,l,o,r,!0))}function R(t,s,n,l,o){return zy(W(t,s,n,l,o,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function fn(t,s){if(s.shapeFlag&6&&t.component){const n=To.get(s.type);if(n&&n.has(t.component))return t.shapeFlag&=-257,s.shapeFlag&=-513,!1}return t.type===s.type&&t.key===s.key}const qf=(...t)=>Uf(...t),Wy=({key:t})=>t??null,Oo=({ref:t,ref_key:s,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Te(t)||ye(t)?{i:Ze,r:t,k:s,f:!!n}:t:null);function e(t,s=null,n=null,l=0,o=null,r=t===Ae?0:1,a=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:t,props:s,key:s&&Wy(s),ref:s&&Oo(s),scopeId:fy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ze};return i?(jc(p,n),r&128&&t.normalize(p)):n&&(p.shapeFlag|=ze(n)?8:16),p.key!==p.key&&z("VNode created with invalid key (NaN). VNode type:",p.type),Ul>0&&!a&&Mt&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Mt.push(p),p}const W=qf;function Uf(t,s=null,n=null,l=0,o=null,r=!1){if((!t||t===J1)&&(t||z(`Invalid vnode type when creating vnode: ${t}.`),t=it),As(t)){const i=hs(t,s,!0);return n&&jc(i,n),Ul>0&&!r&&Mt&&(i.shapeFlag&6?Mt[Mt.indexOf(t)]=i:Mt.push(i)),i.patchFlag=-2,i}if(Zy(t)&&(t=t.__vccOpts),s){s=Q(s);let{class:i,style:p}=s;i&&!ze(i)&&(s.class=Ke(i)),Le(p)&&(Hl(p)&&!pe(p)&&(p=We({},p)),s.style=wt(p))}const a=ze(t)?1:sr(t)?128:L1(t)?64:Le(t)?4:ye(t)?2:0;return a&4&&Hl(t)&&(t=me(t),z("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,s,n,l,o,a,r,!0)}function Q(t){return t?Hl(t)||Py(t)?We({},t):t:null}function hs(t,s,n=!1,l=!1){const{props:o,ref:r,patchFlag:a,children:i,transition:p}=t,B=s?we(o||{},s):o,y={__v_isVNode:!0,__v_skip:!0,type:t.type,props:B,key:B&&Wy(B),ref:s&&s.ref?n&&r?pe(r)?r.concat(Oo(s)):[r,Oo(s)]:Oo(s):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a===-1&&pe(i)?i.map(Yy):i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:s&&t.type!==Ae?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:p,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return p&&l&&Kn(y,p.clone(y)),y}function Yy(t){const s=hs(t);return pe(t.children)&&(s.children=t.children.map(Yy)),s}function c(t=" ",s=0){return W(sl,null,t,s)}function ge(t="",s=!1){return s?(E(),R(it,null,t)):W(it,null,t)}function Xt(t){return t==null||typeof t=="boolean"?W(it):pe(t)?W(Ae,null,t.slice()):As(t)?js(t):W(sl,null,String(t))}function js(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function jc(t,s){let n=0;const{shapeFlag:l}=t;if(s==null)s=null;else if(pe(s))n=16;else if(typeof s=="object")if(l&65){const o=s.default;o&&(o._c&&(o._d=!1),jc(t,o()),o._c&&(o._d=!0));return}else{n=32;const o=s._;!o&&!Py(s)?s._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?s._=1:(s._=2,t.patchFlag|=1024))}else ye(s)?(s={default:s,_ctx:Ze},n=32):(s=String(s),l&64?(n=16,s=[c(s)]):n=8);t.children=s,t.shapeFlag|=n}function we(...t){const s={};for(let n=0;n<t.length;n++){const l=t[n];for(const o in l)if(o==="class")s.class!==l.class&&(s.class=Ke([s.class,l.class]));else if(o==="style")s.style=wt([s.style,l.style]);else if(to(o)){const r=s[o],a=l[o];a&&r!==a&&!(pe(r)&&r.includes(a))&&(s[o]=r?[].concat(r,a):a)}else o!==""&&(s[o]=l[o])}return s}function It(t,s,n,l=null){Qt(t,s,7,[n,l])}const Vf=My();let zf=0;function Wf(t,s,n){const l=t.type,o=(s?s.appContext:t.appContext)||Vf,r={uid:zf++,vnode:t,type:l,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new R2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),ids:s?s.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ry(l,o),emitsOptions:Uy(l,o),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:l.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=ef(r),r.root=s?s.root:r,r.emit=Of.bind(null,r),t.ce&&t.ce(r),r}let et=null;const Vt=()=>et||Ze;let nr,Pa;{const t=no(),s=(n,l)=>{let o;return(o=t[n])||(o=t[n]=[]),o.push(l),r=>{o.length>1?o.forEach(a=>a(r)):o[0](r)}};nr=s("__VUE_INSTANCE_SETTERS__",n=>et=n),Pa=s("__VUE_SSR_SETTERS__",n=>Vl=n)}const ao=t=>{const s=et;return nr(t),t.scope.on(),()=>{t.scope.off(),nr(s)}},Ii=()=>{et&&et.scope.off(),nr(null)},Yf=Ts("slot,component");function Oa(t,{isNativeTag:s}){(Yf(t)||s(t))&&z("Do not use built-in or reserved HTML elements as component id: "+t)}function Ky(t){return t.vnode.shapeFlag&4}let Vl=!1;function Kf(t,s=!1,n=!1){s&&Pa(s);const{props:l,children:o}=t.vnode,r=Ky(t);Bf(t,l,r,s),wf(t,o,n);const a=r?Xf(t,s):void 0;return s&&Pa(!1),a}function Xf(t,s){var n;const l=t.type;{if(l.name&&Oa(l.name,t.appContext.config),l.components){const r=Object.keys(l.components);for(let a=0;a<r.length;a++)Oa(r[a],t.appContext.config)}if(l.directives){const r=Object.keys(l.directives);for(let a=0;a<r.length;a++)my(r[a])}l.compilerOptions&&Gf()&&z('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dy),tf(t);const{setup:o}=l;if(o){Ps();const r=t.setupContext=o.length>1?Gy(t):null,a=ao(t),i=el(o,t,0,[ys(t.props),r]),p=wc(i);if(Os(),a(),(p||t.sp)&&!Dn(t)&&vy(t),p){if(i.then(Ii,Ii),s)return i.then(B=>{Ni(t,B,s)}).catch(B=>{lo(B,t,0)});if(t.asyncDep=i,!t.suspense){const B=(n=l.name)!=null?n:"Anonymous";z(`Component <${B}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ni(t,i,s)}else Xy(t,s)}function Ni(t,s,n){ye(s)?t.type.__ssrInlineRender?t.ssrRender=s:t.render=s:Le(s)?(As(s)&&z("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=s,t.setupState=sy(s),sf(t)):s!==void 0&&z(`setup() should return an object. Received: ${s===null?"null":typeof s}`),Xy(t,n)}let Ra;const Gf=()=>!Ra;function Xy(t,s,n){const l=t.type;if(!t.render){if(!s&&Ra&&!l.render){const o=l.template||Lc(t).template;if(o){_s(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:p}=l,B=We(We({isCustomElement:r,delimiters:i},a),p);l.render=Ra(o,B),bs(t,"compile")}}t.render=l.render||ct}{const o=ao(t);Ps();try{of(t)}finally{Os(),o()}}!l.render&&t.render===ct&&!s&&(l.template?z('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):z("Component is missing template or render function: ",l))}const Zf={get(t,s){return tr(),st(t,"get",""),t[s]},set(){return z("setupContext.attrs is readonly."),!1},deleteProperty(){return z("setupContext.attrs is readonly."),!1}};function Jf(t){return new Proxy(t.slots,{get(s,n){return st(t,"get","$slots"),s[n]}})}function Gy(t){const s=n=>{if(t.exposed&&z("expose() should be called only once per setup()."),n!=null){let l=typeof n;l==="object"&&(pe(n)?l="array":Te(n)&&(l="ref")),l!=="object"&&z(`expose() should be passed a plain object, received ${l}.`)}t.exposed=n||{}};{let n,l;return Object.freeze({get attrs(){return n||(n=new Proxy(t.attrs,Zf))},get slots(){return l||(l=Jf(t))},get emit(){return(o,...r)=>t.emit(o,...r)},expose:s})}}function Ar(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sy(Mc(t.exposed)),{get(s,n){if(n in s)return s[n];if(n in Cn)return Cn[n](t)},has(s,n){return n in s||n in Cn}})):t.proxy}const Qf=/(?:^|[-_])(\w)/g,em=t=>t.replace(Qf,s=>s.toUpperCase()).replace(/[-_]/g,"");function zl(t,s=!0){return ye(t)?t.displayName||t.name:t.name||s&&t.__name}function Mr(t,s,n=!1){let l=zl(s);if(!l&&s.__file){const o=s.__file.match(/([^/\\]+)\.\w+$/);o&&(l=o[1])}if(!l&&t&&t.parent){const o=r=>{for(const a in r)if(r[a]===s)return a};l=o(t.components||t.parent.type.components)||o(t.appContext.components)}return l?em(l):n?"App":"Anonymous"}function Zy(t){return ye(t)&&"__vccOpts"in t}const A=(t,s)=>{const n=f1(t,s,Vl);{const l=Vt();l&&l.appContext.config.warnRecursiveComputed&&(n._warnRecursive=!0)}return n};function Tt(t,s,n){const l=arguments.length;return l===2?Le(s)&&!pe(s)?As(s)?W(t,null,[s]):W(t,s):W(t,null,s):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&As(n)&&(n=[n]),W(t,s,n))}function tm(){if(typeof window>"u")return;const t={style:"color:#3ba776"},s={style:"color:#1677ff"},n={style:"color:#f5222d"},l={style:"color:#eb2f96"},o={__vue_custom_formatter:!0,header(u){return Le(u)?u.__isVue?["div",t,"VueInstance"]:Te(u)?["div",{},["span",t,y(u)],"<",i("_value"in u?u._value:u),">"]:En(u)?["div",{},["span",t,Ft(u)?"ShallowReactive":"Reactive"],"<",i(u),`>${Cs(u)?" (readonly)":""}`]:Cs(u)?["div",{},["span",t,Ft(u)?"ShallowReadonly":"Readonly"],"<",i(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const d=[];u.type.props&&u.props&&d.push(a("props",me(u.props))),u.setupState!==Ne&&d.push(a("setup",u.setupState)),u.data!==Ne&&d.push(a("data",me(u.data)));const f=p(u,"computed");f&&d.push(a("computed",f));const m=p(u,"inject");return m&&d.push(a("injected",m)),d.push(["div",{},["span",{style:l.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),d}function a(u,d){return d=We({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(f=>["div",{},["span",l,f+": "],i(d[f],!1)])]]:["span",{}]}function i(u,d=!0){return typeof u=="number"?["span",s,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",l,u]:Le(u)?["object",{object:d?me(u):u}]:["span",n,String(u)]}function p(u,d){const f=u.type;if(ye(f))return;const m={};for(const g in u.ctx)B(f,g,d)&&(m[g]=u.ctx[g]);return m}function B(u,d,f){const m=u[f];if(pe(m)&&m.includes(d)||Le(m)&&d in m||u.extends&&B(u.extends,d,f)||u.mixins&&u.mixins.some(g=>B(g,d,f)))return!0}function y(u){return Ft(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const lr="3.5.13",fs=z;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let La;const Hi=typeof window<"u"&&window.trustedTypes;if(Hi)try{La=Hi.createPolicy("vue",{createHTML:t=>t})}catch(t){fs(`Error creating trusted types policy: ${t}`)}const Jy=La?t=>La.createHTML(t):t=>t,sm="http://www.w3.org/2000/svg",nm="http://www.w3.org/1998/Math/MathML",ws=typeof document<"u"?document:null,ji=ws&&ws.createElement("template"),lm={insert:(t,s,n)=>{s.insertBefore(t,n||null)},remove:t=>{const s=t.parentNode;s&&s.removeChild(t)},createElement:(t,s,n,l)=>{const o=s==="svg"?ws.createElementNS(sm,t):s==="mathml"?ws.createElementNS(nm,t):n?ws.createElement(t,{is:n}):ws.createElement(t);return t==="select"&&l&&l.multiple!=null&&o.setAttribute("multiple",l.multiple),o},createText:t=>ws.createTextNode(t),createComment:t=>ws.createComment(t),setText:(t,s)=>{t.nodeValue=s},setElementText:(t,s)=>{t.textContent=s},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ws.querySelector(t),setScopeId(t,s){t.setAttribute(s,"")},insertStaticContent(t,s,n,l,o,r){const a=n?n.previousSibling:s.lastChild;if(o&&(o===r||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{ji.innerHTML=Jy(l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t);const i=ji.content;if(l==="svg"||l==="mathml"){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}s.insertBefore(i,n)}return[a?a.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}},Ls="transition",il="animation",Xn=Symbol("_vtc"),Qy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},om=We({},j1,Qy),rn=(t,s=[])=>{pe(t)?t.forEach(n=>n(...s)):t&&t(...s)},qi=t=>t?pe(t)?t.some(s=>s.length>1):t.length>1:!1;function rm(t){const s={};for(const q in t)q in Qy||(s[q]=t[q]);if(t.css===!1)return s;const{name:n="v",type:l,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:p=r,appearActiveClass:B=a,appearToClass:y=i,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=am(o),g=m&&m[0],b=m&&m[1],{onBeforeEnter:x,onEnter:v,onEnterCancelled:F,onLeave:k,onLeaveCancelled:w,onBeforeAppear:P=x,onAppear:D=v,onAppearCancelled:Y=F}=s,O=(q,Be,de,Fe)=>{q._enterCancelled=Fe,Ns(q,Be?y:i),Ns(q,Be?B:a),de&&de()},I=(q,Be)=>{q._isLeaving=!1,Ns(q,u),Ns(q,f),Ns(q,d),Be&&Be()},Z=q=>(Be,de)=>{const Fe=q?D:v,Ue=()=>O(Be,q,de);rn(Fe,[Be,Ue]),Ui(()=>{Ns(Be,q?p:r),as(Be,q?y:i),qi(Fe)||Vi(Be,l,g,Ue)})};return We(s,{onBeforeEnter(q){rn(x,[q]),as(q,r),as(q,a)},onBeforeAppear(q){rn(P,[q]),as(q,p),as(q,B)},onEnter:Z(!1),onAppear:Z(!0),onLeave(q,Be){q._isLeaving=!0;const de=()=>I(q,Be);as(q,u),q._enterCancelled?(as(q,d),Ia()):(Ia(),as(q,d)),Ui(()=>{q._isLeaving&&(Ns(q,u),as(q,f),qi(k)||Vi(q,l,b,de))}),rn(k,[q,de])},onEnterCancelled(q){O(q,!1,void 0,!0),rn(F,[q])},onAppearCancelled(q){O(q,!0,void 0,!0),rn(Y,[q])},onLeaveCancelled(q){I(q),rn(w,[q])}})}function am(t){if(t==null)return null;if(Le(t))return[Kr(t.enter),Kr(t.leave)];{const s=Kr(t);return[s,s]}}function Kr(t){const s=Dd(t);return v1(s,"<transition> explicit duration"),s}function as(t,s){s.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xn]||(t[Xn]=new Set)).add(s)}function Ns(t,s){s.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const n=t[Xn];n&&(n.delete(s),n.size||(t[Xn]=void 0))}function Ui(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cm=0;function Vi(t,s,n,l){const o=t._endId=++cm,r=()=>{o===t._endId&&l()};if(n!=null)return setTimeout(r,n);const{type:a,timeout:i,propCount:p}=eu(t,s);if(!a)return l();const B=a+"end";let y=0;const u=()=>{t.removeEventListener(B,d),r()},d=f=>{f.target===t&&++y>=p&&u()};setTimeout(()=>{y<p&&u()},i+1),t.addEventListener(B,d)}function eu(t,s){const n=window.getComputedStyle(t),l=m=>(n[m]||"").split(", "),o=l(`${Ls}Delay`),r=l(`${Ls}Duration`),a=zi(o,r),i=l(`${il}Delay`),p=l(`${il}Duration`),B=zi(i,p);let y=null,u=0,d=0;s===Ls?a>0&&(y=Ls,u=a,d=r.length):s===il?B>0&&(y=il,u=B,d=p.length):(u=Math.max(a,B),y=u>0?a>B?Ls:il:null,d=y?y===Ls?r.length:p.length:0);const f=y===Ls&&/\b(transform|all)(,|$)/.test(l(`${Ls}Property`).toString());return{type:y,timeout:u,propCount:d,hasTransform:f}}function zi(t,s){for(;t.length<s.length;)t=t.concat(t);return Math.max(...s.map((n,l)=>Wi(n)+Wi(t[l])))}function Wi(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ia(){return document.body.offsetHeight}function im(t,s,n){const l=t[Xn];l&&(s=(s?[s,...l]:[...l]).join(" ")),s==null?t.removeAttribute("class"):n?t.setAttribute("class",s):t.className=s}const or=Symbol("_vod"),tu=Symbol("_vsh"),qc={beforeMount(t,{value:s},{transition:n}){t[or]=t.style.display==="none"?"":t.style.display,n&&s?n.beforeEnter(t):pl(t,s)},mounted(t,{value:s},{transition:n}){n&&s&&n.enter(t)},updated(t,{value:s,oldValue:n},{transition:l}){!s!=!n&&(l?s?(l.beforeEnter(t),pl(t,!0),l.enter(t)):l.leave(t,()=>{pl(t,!1)}):pl(t,s))},beforeUnmount(t,{value:s}){pl(t,s)}};qc.name="show";function pl(t,s){t.style.display=s?t[or]:"none",t[tu]=!s}const pm=Symbol("CSS_VAR_TEXT"),ym=/(^|;)\s*display\s*:/;function um(t,s,n){const l=t.style,o=ze(n);let r=!1;if(n&&!o){if(s)if(ze(s))for(const a of s.split(";")){const i=a.slice(0,a.indexOf(":")).trim();n[i]==null&&Ro(l,i,"")}else for(const a in s)n[a]==null&&Ro(l,a,"");for(const a in n)a==="display"&&(r=!0),Ro(l,a,n[a])}else if(o){if(s!==n){const a=l[pm];a&&(n+=";"+a),l.cssText=n,r=ym.test(n)}}else s&&t.removeAttribute("style");or in t&&(t[or]=r?l.display:"",t[tu]&&(l.display="none"))}const Bm=/[^\\];\s*$/,Yi=/\s*!important$/;function Ro(t,s,n){if(pe(n))n.forEach(l=>Ro(t,s,l));else if(n==null&&(n=""),Bm.test(n)&&fs(`Unexpected semicolon at the end of '${s}' style value: '${n}'`),s.startsWith("--"))t.setProperty(s,n);else{const l=dm(t,s);Yi.test(n)?t.setProperty(Ds(l),n.replace(Yi,""),"important"):t[l]=n}}const Ki=["Webkit","Moz","ms"],Xr={};function dm(t,s){const n=Xr[s];if(n)return n;let l=ht(s);if(l!=="filter"&&l in t)return Xr[s]=l;l=Mn(l);for(let o=0;o<Ki.length;o++){const r=Ki[o]+l;if(r in t)return Xr[s]=r}return s}const Xi="http://www.w3.org/1999/xlink";function Gi(t,s,n,l,o,r=Hd(s)){l&&s.startsWith("xlink:")?n==null?t.removeAttributeNS(Xi,s.slice(6,s.length)):t.setAttributeNS(Xi,s,n):n==null||r&&!$2(n)?t.removeAttribute(s):t.setAttribute(s,r?"":$s(n)?String(n):n)}function Zi(t,s,n,l,o){if(s==="innerHTML"||s==="textContent"){n!=null&&(t[s]=s==="innerHTML"?Jy(n):n);return}const r=t.tagName;if(s==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?t.getAttribute("value")||"":t.value,p=n==null?t.type==="checkbox"?"on":"":String(n);(i!==p||!("_value"in t))&&(t.value=p),n==null&&t.removeAttribute(s),t._value=n;return}let a=!1;if(n===""||n==null){const i=typeof t[s];i==="boolean"?n=$2(n):n==null&&i==="string"?(n="",a=!0):i==="number"&&(n=0,a=!0)}try{t[s]=n}catch(i){a||fs(`Failed setting prop "${s}" on <${r.toLowerCase()}>: value ${n} is invalid.`,i)}a&&t.removeAttribute(o||s)}function fm(t,s,n,l){t.addEventListener(s,n,l)}function mm(t,s,n,l){t.removeEventListener(s,n,l)}const Ji=Symbol("_vei");function hm(t,s,n,l,o=null){const r=t[Ji]||(t[Ji]={}),a=r[s];if(l&&a)a.value=ep(l,s);else{const[i,p]=Fm(s);if(l){const B=r[s]=bm(ep(l,s),o);fm(t,i,B,p)}else a&&(mm(t,i,a,p),r[s]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function Fm(t){let s;if(Qi.test(t)){s={};let l;for(;l=t.match(Qi);)t=t.slice(0,t.length-l[0].length),s[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ds(t.slice(2)),s]}let Gr=0;const gm=Promise.resolve(),_m=()=>Gr||(gm.then(()=>Gr=0),Gr=Date.now());function bm(t,s){const n=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=n.attached)return;Qt(vm(l,n.value),s,5,[l])};return n.value=t,n.attached=_m(),n}function ep(t,s){return ye(t)||pe(t)?t:(fs(`Wrong type passed as event handler to ${s} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`),ct)}function vm(t,s){if(pe(s)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},s.map(l=>o=>!o._stopped&&l&&l(o))}else return s}const tp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xm=(t,s,n,l,o,r)=>{const a=o==="svg";s==="class"?im(t,l,a):s==="style"?um(t,n,l):to(s)?Uo(s)||hm(t,s,n,l,r):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):wm(t,s,l,a))?(Zi(t,s,l),!t.tagName.includes("-")&&(s==="value"||s==="checked"||s==="selected")&&Gi(t,s,l,a,r,s!=="value")):t._isVueCE&&(/[A-Z]/.test(s)||!ze(l))?Zi(t,ht(s),l,r,s):(s==="true-value"?t._trueValue=l:s==="false-value"&&(t._falseValue=l),Gi(t,s,l,a))};function wm(t,s,n,l){if(l)return!!(s==="innerHTML"||s==="textContent"||s in t&&tp(s)&&ye(n));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&t.tagName==="INPUT"||s==="type"&&t.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return tp(s)&&ze(n)?!1:s in t}const su=new WeakMap,nu=new WeakMap,rr=Symbol("_moveCb"),sp=Symbol("_enterCb"),Em=t=>(delete t.props.mode,t),km=Em({name:"TransitionGroup",props:We({},om,{tag:String,moveClass:String}),setup(t,{slots:s}){const n=Vt(),l=H1();let o,r;return Sr(()=>{if(!o.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!Mm(o[0].el,n.vnode.el,a))return;o.forEach(Dm),o.forEach(Cm);const i=o.filter(Am);Ia(),i.forEach(p=>{const B=p.el,y=B.style;as(B,a),y.transform=y.webkitTransform=y.transitionDuration="";const u=B[rr]=d=>{d&&d.target!==B||(!d||/transform$/.test(d.propertyName))&&(B.removeEventListener("transitionend",u),B[rr]=null,Ns(B,a))};B.addEventListener("transitionend",u)})}),()=>{const a=me(t),i=rm(a);let p=a.tag||Ae;if(o=[],r)for(let B=0;B<r.length;B++){const y=r[B];y.el&&y.el instanceof Element&&(o.push(y),Kn(y,ka(y,i,l,n)),su.set(y,y.el.getBoundingClientRect()))}r=s.default?by(s.default()):[];for(let B=0;B<r.length;B++){const y=r[B];y.key!=null?Kn(y,ka(y,i,l,n)):y.type!==sl&&fs("<TransitionGroup> children must be keyed.")}return W(p,null,r)}}}),Sm=km;function Dm(t){const s=t.el;s[rr]&&s[rr](),s[sp]&&s[sp]()}function Cm(t){nu.set(t,t.el.getBoundingClientRect())}function Am(t){const s=su.get(t),n=nu.get(t),l=s.left-n.left,o=s.top-n.top;if(l||o){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${l}px,${o}px)`,r.transitionDuration="0s",t}}function Mm(t,s,n){const l=t.cloneNode(),o=t[Xn];o&&o.forEach(i=>{i.split(/\s+/).forEach(p=>p&&l.classList.remove(p))}),n.split(/\s+/).forEach(i=>i&&l.classList.add(i)),l.style.display="none";const r=s.nodeType===1?s:s.parentNode;r.appendChild(l);const{hasTransform:a}=eu(l);return r.removeChild(l),a}const Tm=["ctrl","shift","alt","meta"],$m={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,s)=>Tm.some(n=>t[`${n}Key`]&&!s.includes(n))},Pm=(t,s)=>{const n=t._withMods||(t._withMods={}),l=s.join(".");return n[l]||(n[l]=(o,...r)=>{for(let a=0;a<s.length;a++){const i=$m[s[a]];if(i&&i(o,s))return}return t(o,...r)})},Om={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_o=(t,s)=>{const n=t._withKeys||(t._withKeys={}),l=s.join(".");return n[l]||(n[l]=o=>{if(!("key"in o))return;const r=Ds(o.key);if(s.some(a=>a===r||Om[a]===r))return t(o)})},Rm=We({patchProp:xm},lm);let np;function Lm(){return np||(np=Sf(Rm))}const Im=(...t)=>{const s=Lm().createApp(...t);Hm(s),jm(s);const{mount:n}=s;return s.mount=l=>{const o=qm(l);if(!o)return;const r=s._component;!ye(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Nm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},s};function Nm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hm(t){Object.defineProperty(t.config,"isNativeTag",{value:s=>Rd(s)||Ld(s)||Id(s),writable:!1})}function jm(t){{const s=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return s},set(){fs("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,l='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return fs(l),n},set(){fs(l)}})}}function qm(t){if(ze(t)){const s=document.querySelector(t);return s||fs(`Failed to mount app: mount target selector "${t}" returned null.`),s}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&fs('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Um(){tm()}Um();const Vm=new Set(["title","titleTemplate","script","style","noscript"]),Lo=new Set(["base","meta","link","style","script","noscript"]),zm=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Wm=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),lu=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Ym=typeof window<"u";function ar(t){let s=9;for(let n=0;n<t.length;)s=Math.imul(s^t.charCodeAt(n++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Na(t){if(t._h)return t._h;if(t._d)return ar(t._d);let s=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)s+=`${n}:${String(t.props[n])},`;return ar(s)}function Km(t,s){return t instanceof Promise?t.then(s):s(t)}function Ha(t,s,n,l){const o=l||ru(typeof s=="object"&&typeof s!="function"&&!(s instanceof Promise)?{...s}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:s},t==="templateParams"||t==="titleTemplate");if(o instanceof Promise)return o.then(a=>Ha(t,s,n,a));const r={tag:t,props:o};for(const a of lu){const i=r.props[a]!==void 0?r.props[a]:n[a];i!==void 0&&((!(a==="innerHTML"||a==="textContent"||a==="children")||Vm.has(r.tag))&&(r[a==="children"?"innerHTML":a]=i),delete r.props[a])}return r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(a=>({...r,props:{...r.props,content:a}})):r}function Xm(t,s){var l;const n=t==="class"?" ":";";return s&&typeof s=="object"&&!Array.isArray(s)&&(s=Object.entries(s).filter(([,o])=>o).map(([o,r])=>t==="style"?`${o}:${r}`:o)),(l=String(Array.isArray(s)?s.join(n):s))==null?void 0:l.split(n).filter(o=>!!o.trim()).join(n)}function ou(t,s,n,l){for(let o=l;o<n.length;o+=1){const r=n[o];if(r==="class"||r==="style"){t[r]=Xm(r,t[r]);continue}if(t[r]instanceof Promise)return t[r].then(a=>(t[r]=a,ou(t,s,n,o)));if(!s&&!lu.has(r)){const a=String(t[r]),i=r.startsWith("data-");a==="true"||a===""?t[r]=i?"true":!0:t[r]||(i&&a==="false"?t[r]="false":delete t[r])}}}function ru(t,s=!1){const n=ou(t,s,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const Gm=10;function au(t,s,n){for(let l=n;l<s.length;l+=1){const o=s[l];if(o instanceof Promise)return o.then(r=>(s[l]=r,au(t,s,l)));Array.isArray(o)?t.push(...o):t.push(o)}}function Zm(t){const s=[],n=t.resolvedInput;for(const o in n){if(!Object.prototype.hasOwnProperty.call(n,o))continue;const r=n[o];if(!(r===void 0||!zm.has(o))){if(Array.isArray(r)){for(const a of r)s.push(Ha(o,a,t));continue}s.push(Ha(o,r,t))}}if(s.length===0)return[];const l=[];return Km(au(l,s,0),()=>l.map((o,r)=>(o._e=t._i,t.mode&&(o._m=t.mode),o._p=(t._i<<Gm)+r,o)))}const lp=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),op={base:-10,title:10},rp={critical:-80,high:-10,low:20};function cr(t){const s=t.tagPriority;if(typeof s=="number")return s;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in op&&(n=op[t.tag]),s&&s in rp?n+rp[s]:n}const Jm=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Qm=["name","property","http-equiv"];function cu(t){const{props:s,tag:n}=t;if(Wm.has(n))return n;if(n==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";if(s.id)return`${n}:id:${s.id}`;for(const l of Qm)if(s[l]!==void 0)return`${n}:${l}:${s[l]}`;return!1}const qs="%separator";function eh(t,s,n=!1){var o;let l;if(s==="s"||s==="pageTitle")l=t.pageTitle;else if(s.includes(".")){const r=s.indexOf(".");l=(o=t[s.substring(0,r)])==null?void 0:o[s.substring(r+1)]}else l=t[s];if(l!==void 0)return n?(l||"").replace(/"/g,'\\"'):l||""}const th=new RegExp(`${qs}(?:\\s*${qs})*`,"g");function bo(t,s,n,l=!1){if(typeof t!="string"||!t.includes("%"))return t;let o=t;try{o=decodeURI(t)}catch{}const r=o.match(/%\w+(?:\.\w+)?/g);if(!r)return t;const a=t.includes(qs);return t=t.replace(/%\w+(?:\.\w+)?/g,i=>{if(i===qs||!r.includes(i))return i;const p=eh(s,i.slice(1),l);return p!==void 0?p:i}).trim(),a&&(t.endsWith(qs)&&(t=t.slice(0,-qs.length)),t.startsWith(qs)&&(t=t.slice(qs.length)),t=t.replace(th,n).trim()),t}function ap(t,s){return t==null?s||null:typeof t=="function"?t(s):t}async function iu(t,s={}){const n=s.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const l={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",l),!!l.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async o=>{var u;const r=(await t.resolveTags()).map(d=>({tag:d,id:Lo.has(d.tag)?Na(d):d.tag,shouldRender:!0}));let a=t._dom;if(!a){a={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const d=new Set;for(const f of["body","head"]){const m=(u=n[f])==null?void 0:u.children;for(const g of m){const b=g.tagName.toLowerCase();if(!Lo.has(b))continue;const x={tag:b,props:await ru(g.getAttributeNames().reduce((w,P)=>({...w,[P]:g.getAttribute(P)}),{})),innerHTML:g.innerHTML},v=cu(x);let F=v,k=1;for(;F&&d.has(F);)F=`${v}:${k++}`;F&&(x._d=F,d.add(F)),a.elMap[g.getAttribute("data-hid")||Na(x)]=g}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function i(d,f,m){const g=`${d}:${f}`;a.sideEffects[g]=m,delete a.pendingSideEffects[g]}function p({id:d,$el:f,tag:m}){const g=m.tag.endsWith("Attrs");if(a.elMap[d]=f,g||(m.textContent&&m.textContent!==f.textContent&&(f.textContent=m.textContent),m.innerHTML&&m.innerHTML!==f.innerHTML&&(f.innerHTML=m.innerHTML),i(d,"el",()=>{var b;(b=a.elMap[d])==null||b.remove(),delete a.elMap[d]})),m._eventHandlers)for(const b in m._eventHandlers)Object.prototype.hasOwnProperty.call(m._eventHandlers,b)&&f.getAttribute(`data-${b}`)!==""&&((m.tag==="bodyAttrs"?n.defaultView:f).addEventListener(b.substring(2),m._eventHandlers[b].bind(f)),f.setAttribute(`data-${b}`,""));for(const b in m.props){if(!Object.prototype.hasOwnProperty.call(m.props,b))continue;const x=m.props[b],v=`attr:${b}`;if(b==="class"){if(!x)continue;for(const F of x.split(" "))g&&i(d,`${v}:${F}`,()=>f.classList.remove(F)),!f.classList.contains(F)&&f.classList.add(F)}else if(b==="style"){if(!x)continue;for(const F of x.split(";")){const k=F.indexOf(":"),w=F.substring(0,k).trim(),P=F.substring(k+1).trim();i(d,`${v}:${w}`,()=>{f.style.removeProperty(w)}),f.style.setProperty(w,P)}}else f.getAttribute(b)!==x&&f.setAttribute(b,x===!0?"":String(x)),g&&i(d,v,()=>f.removeAttribute(b))}}const B=[],y={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of r){const{tag:f,shouldRender:m,id:g}=d;if(m){if(f.tag==="title"){n.title=f.textContent;continue}d.$el=d.$el||a.elMap[g],d.$el?p(d):Lo.has(f.tag)&&B.push(d)}}for(const d of B){const f=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),p(d),y[f]=y[f]||n.createDocumentFragment(),y[f].appendChild(d.$el)}for(const d of r)await t.hooks.callHook("dom:renderTag",d,n,i);y.head&&n.head.appendChild(y.head),y.bodyOpen&&n.body.insertBefore(y.bodyOpen,n.body.firstChild),y.bodyClose&&n.body.appendChild(y.bodyClose);for(const d in a.pendingSideEffects)a.pendingSideEffects[d]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:r}),o()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function pu(t,s={}){const n=s.delayFn||(l=>setTimeout(l,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(l=>n(()=>iu(t,s).then(()=>{delete t._domDebouncedUpdatePromise,l()})))}function sh(t){return s=>{var l,o;const n=((o=(l=s.resolvedOptions.document)==null?void 0:l.head.querySelector('script[id="unhead:payload"]'))==null?void 0:o.innerHTML)||!1;return n&&s.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":r=>{pu(r,t)}}}}}function ja(t,s={},n){for(const l in t){const o=t[l],r=n?`${n}:${l}`:l;typeof o=="object"&&o!==null?ja(o,s,r):typeof o=="function"&&(s[r]=o)}return s}const nh={run:t=>t()},lh=()=>nh,yu=typeof console.createTask<"u"?console.createTask:lh;function oh(t,s){const n=s.shift(),l=yu(n);return t.reduce((o,r)=>o.then(()=>l.run(()=>r(...s))),Promise.resolve())}function rh(t,s){const n=s.shift(),l=yu(n);return Promise.all(t.map(o=>l.run(()=>o(...s))))}function Zr(t,s){for(const n of[...t])n(s)}class ah{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,n,l={}){if(!s||typeof n!="function")return()=>{};const o=s;let r;for(;this._deprecatedHooks[s];)r=this._deprecatedHooks[s],s=r.to;if(r&&!l.allowDeprecated){let a=r.message;a||(a=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+s.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(n),()=>{n&&(this.removeHook(s,n),n=void 0)}}hookOnce(s,n){let l,o=(...r)=>(typeof l=="function"&&l(),l=void 0,o=void 0,n(...r));return l=this.hook(s,o),l}removeHook(s,n){if(this._hooks[s]){const l=this._hooks[s].indexOf(n);l!==-1&&this._hooks[s].splice(l,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,n){this._deprecatedHooks[s]=typeof n=="string"?{to:n}:n;const l=this._hooks[s]||[];delete this._hooks[s];for(const o of l)this.hook(s,o)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const n in s)this.deprecateHook(n,s[n])}addHooks(s){const n=ja(s),l=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of l.splice(0,l.length))o()}}removeHooks(s){const n=ja(s);for(const l in n)this.removeHook(l,n[l])}removeAllHooks(){for(const s in this._hooks)delete this._hooks[s]}callHook(s,...n){return n.unshift(s),this.callHookWith(oh,s,...n)}callHookParallel(s,...n){return n.unshift(s),this.callHookWith(rh,s,...n)}callHookWith(s,n,...l){const o=this._before||this._after?{name:n,args:l,context:{}}:void 0;this._before&&Zr(this._before,o);const r=s(n in this._hooks?[...this._hooks[n]]:[],l);return r instanceof Promise?r.finally(()=>{this._after&&o&&Zr(this._after,o)}):(this._after&&o&&Zr(this._after,o),r)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{if(this._before!==void 0){const n=this._before.indexOf(s);n!==-1&&this._before.splice(n,1)}}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{if(this._after!==void 0){const n=this._after.indexOf(s);n!==-1&&this._after.splice(n,1)}}}}function ch(){return new ah}const ih=new Set(["templateParams","htmlAttrs","bodyAttrs"]),ph={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const s=cu(t);s&&!s.startsWith("meta:og:")&&!s.startsWith("meta:twitter:")&&delete t.key;const n=s||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const s=Object.create(null);for(const l of t.tags){const o=(l.key?`${l.tag}:${l.key}`:l._d)||Na(l),r=s[o];if(r){let i=l==null?void 0:l.tagDuplicateStrategy;if(!i&&ih.has(l.tag)&&(i="merge"),i==="merge"){const p=r.props;p.style&&l.props.style&&(p.style[p.style.length-1]!==";"&&(p.style+=";"),l.props.style=`${p.style} ${l.props.style}`),p.class&&l.props.class?l.props.class=`${p.class} ${l.props.class}`:p.class&&(l.props.class=p.class),s[o].props={...p,...l.props};continue}else if(l._e===r._e){r._duped=r._duped||[],l._d=`${r._d}:${r._duped.length+1}`,r._duped.push(l);continue}else if(cr(l)>cr(r))continue}if(!(l.innerHTML||l.textContent||Object.keys(l.props).length!==0)&&Lo.has(l.tag)){delete s[o];continue}s[o]=l}const n=[];for(const l in s){const o=s[l],r=o._duped;n.push(o),r&&(delete o._duped,n.push(...r))}t.tags=n,t.tags=t.tags.filter(l=>!(l.tag==="meta"&&(l.props.name||l.props.property)&&!l.props.content))}}},yh=new Set(["script","link","bodyAttrs"]),uh=t=>({hooks:{"tags:resolve":s=>{for(const n of s.tags){if(!yh.has(n.tag))continue;const l=n.props;for(const o in l){if(o[0]!=="o"||o[1]!=="n"||!Object.prototype.hasOwnProperty.call(l,o))continue;const r=l[o];typeof r=="function"&&(t.ssr&&lp.has(o)?l[o]=`this.dataset.${o}fired = true`:delete l[o],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[o]=r)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||ar(n.props.src||n.props.href))}},"dom:renderTag":({$el:s,tag:n})=>{var o,r;const l=s==null?void 0:s.dataset;if(l)for(const a in l){if(!a.endsWith("fired"))continue;const i=a.slice(0,-5);lp.has(i)&&((r=(o=n._eventHandlers)==null?void 0:o[i])==null||r.call(s,new Event(i.substring(2))))}}}}),Bh=new Set(["link","style","script","noscript"]),dh={hooks:{"tag:normalise":({tag:t})=>{t.key&&Bh.has(t.tag)&&(t.props["data-hid"]=t._h=ar(t.key))}}},fh={mode:"server",hooks:{"tags:beforeResolve":t=>{const s={};let n=!1;for(const l of t.tags)l._m!=="server"||l.tag!=="titleTemplate"&&l.tag!=="templateParams"&&l.tag!=="title"||(s[l.tag]=l.tag==="title"||l.tag==="titleTemplate"?l.textContent:l.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(s),props:{id:"unhead:payload",type:"application/json"}})}}},mh={hooks:{"tags:resolve":t=>{var s;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:l,offset:o}of Jm){if(!n.tagPriority.startsWith(l))continue;const r=n.tagPriority.substring(l.length),a=(s=t.tags.find(i=>i._d===r))==null?void 0:s._p;if(a!==void 0){n._p=a+o;break}}t.tags.sort((n,l)=>{const o=cr(n),r=cr(l);return o<r?-1:o>r?1:n._p-l._p})}}},hh={meta:"content",link:"href",htmlAttrs:"lang"},Fh=["innerHTML","textContent"],gh=t=>({hooks:{"tags:resolve":s=>{var a;const{tags:n}=s;let l;for(let i=0;i<n.length;i+=1)n[i].tag==="templateParams"&&(l=s.tags.splice(i,1)[0].props,i-=1);const o=l||{},r=o.separator||"|";delete o.separator,o.pageTitle=bo(o.pageTitle||((a=n.find(i=>i.tag==="title"))==null?void 0:a.textContent)||"",o,r);for(const i of n){if(i.processTemplateParams===!1)continue;const p=hh[i.tag];if(p&&typeof i.props[p]=="string")i.props[p]=bo(i.props[p],o,r);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const B of Fh)typeof i[B]=="string"&&(i[B]=bo(i[B],o,r,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=o,t._separator=r},"tags:afterResolve":({tags:s})=>{let n;for(let l=0;l<s.length;l+=1){const o=s[l];o.tag==="title"&&o.processTemplateParams!==!1&&(n=o)}n!=null&&n.textContent&&(n.textContent=bo(n.textContent,t._templateParams,t._separator))}}}),_h={hooks:{"tags:resolve":t=>{const{tags:s}=t;let n,l;for(let o=0;o<s.length;o+=1){const r=s[o];r.tag==="title"?n=r:r.tag==="titleTemplate"&&(l=r)}if(l&&n){const o=ap(l.textContent,n.textContent);o!==null?n.textContent=o||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(l){const o=ap(l.textContent);o!==null&&(l.textContent=o,l.tag="title",l=void 0)}l&&t.tags.splice(t.tags.indexOf(l),1)}}},bh={hooks:{"tags:afterResolve":t=>{for(const s of t.tags)typeof s.innerHTML=="string"&&(s.innerHTML&&(s.props.type==="application/ld+json"||s.props.type==="application/json")?s.innerHTML=s.innerHTML.replace(/</g,"\\u003C"):s.innerHTML=s.innerHTML.replace(new RegExp(`</${s.tag}`,"g"),`<\\/${s.tag}`))}}};let uu;function vh(t={}){const s=xh(t);return s.use(sh()),uu=s}function cp(t,s){return!t||t==="server"&&s||t==="client"&&!s}function xh(t={}){const s=ch();s.addHooks(t.hooks||{}),t.document=t.document||(Ym?document:void 0);const n=!t.document,l=()=>{i.dirty=!0,s.callHook("entries:updated",i)};let o=0,r=[];const a=[],i={plugins:a,dirty:!1,resolvedOptions:t,hooks:s,headEntries(){return r},use(p){const B=typeof p=="function"?p(i):p;(!B.key||!a.some(y=>y.key===B.key))&&(a.push(B),cp(B.mode,n)&&s.addHooks(B.hooks||{}))},push(p,B){B==null||delete B.head;const y={_i:o++,input:p,...B};return cp(y.mode,n)&&(r.push(y),l()),{dispose(){r=r.filter(u=>u._i!==y._i),l()},patch(u){for(const d of r)d._i===y._i&&(d.input=y.input=u);l()}}},async resolveTags(){const p={tags:[],entries:[...r]};await s.callHook("entries:resolve",p);for(const B of p.entries){const y=B.resolvedInput||B.input;if(B.resolvedInput=await(B.transform?B.transform(y):y),B.resolvedInput)for(const u of await Zm(B)){const d={tag:u,entry:B,resolvedOptions:i.resolvedOptions};await s.callHook("tag:normalise",d),p.tags.push(d.tag)}}return await s.callHook("tags:beforeResolve",p),await s.callHook("tags:resolve",p),await s.callHook("tags:afterResolve",p),p.tags},ssr:n};return[ph,fh,uh,dh,mh,gh,_h,bh,...(t==null?void 0:t.plugins)||[]].forEach(p=>i.use(p)),i.hooks.callHook("init",i),i}function wh(){return uu}const Eh=lr[0]==="3";function kh(t){return typeof t=="function"?t():M(t)}function ir(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const s=kh(t);if(!t||!s)return s;if(Array.isArray(s))return s.map(n=>ir(n));if(typeof s=="object"){const n={};for(const l in s)if(Object.prototype.hasOwnProperty.call(s,l)){if(l==="titleTemplate"||l[0]==="o"&&l[1]==="n"){n[l]=M(s[l]);continue}n[l]=ir(s[l])}return n}return s}const Sh={hooks:{"entries:resolve":t=>{for(const s of t.entries)s.resolvedInput=ir(s.input)}}},Bu="usehead";function Dh(t){return{install(n){Eh&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Bu,t))}}.install}function Ch(t={}){t.domDelayFn=t.domDelayFn||(n=>nt(()=>setTimeout(()=>n(),0)));const s=vh(t);return s.use(Sh),s.install=Dh(s),s}const ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pp="__unhead_injection_handler__";function Ah(){if(pp in ip)return ip[pp]();const t=$(Bu);return t||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),t||wh()}function du(t,s={}){const n=s.head||Ah();if(n)return n.ssr?n.push(t,s):Mh(n,t,s)}function Mh(t,s,n={}){const l=G(!1),o=G({});$n(()=>{o.value=l.value?{}:ir(s)});const r=t.push(o.value,n);return be(o,i=>{r.patch(i)}),Vt()&&(ro(()=>{r.dispose()}),Ey(()=>{l.value=!0}),wy(()=>{l.value=!1})),r}function Th(t,s){const n=Ch(s||{}),l={unhead:n,install(o){lr.startsWith("3")&&(o.config.globalProperties.$head=n,o.provide("usehead",n))},use(o){n.use(o)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(o,r){return n.push(o,r)},addEntry(o,r){return n.push(o,r)},addHeadObjs(o,r){return n.push(o,r)},addReactiveEntry(o,r){const a=du(o,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,r){r?iu(n,{document:o}):pu(n,{delayFn:a=>setTimeout(()=>a(),50),document:o})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=l.addHeadObjs,n.updateDOM=l.updateDOM,n.hooks.hook("dom:beforeRender",o=>{for(const r of l.hooks["before:dom"])r()===!1&&(o.shouldRender=!1)}),t&&l.addHeadObjs(t),l}const Dl=Symbol("v-click-clicks"),mn=Symbol("v-click-clicks-elements"),qa=Symbol("v-click-clicks-order-map"),Cl=Symbol("v-click-clicks-disabled"),fu=Symbol("slidev-slide-scale"),N=Symbol("slidev-slidev-context"),$h=Symbol("slidev-route"),Ph=Symbol("slidev-slide-context"),un="slidev-vclick-target",Jr="slidev-vclick-hidden",Oh="slidev-vclick-fade",Qr="slidev-vclick-hidden-explicitly",yl="slidev-vclick-current",vo="slidev-vclick-prior",Rh=["localhost","127.0.0.1"];let Lh=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,n)=>(n&=63,n<36?s+=n.toString(36):n<62?s+=(n-26).toString(36).toUpperCase():n>62?s+="-":s+="_",s),"");function Ua(t,s){if(!t)return!1;const n=t.indexOf(s);return n>=0?(t.splice(n,1),!0):!1}function Ih(...t){let s,n,l;t.length===1?(s=0,l=1,[n]=t):[s,n,l=1]=t;const o=[];let r=s;for(;r<n;)o.push(r),r+=l||1;return o}function Nh(t){return t!=null}function Hh(t,s){return Object.fromEntries(Object.entries(t).map(([n,l])=>s(n,l)).filter(Nh))}const vl={theme:"unicorn",title:"Matplotlib 基础",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:".slidev/drawings/slides",presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",layout:"cover"},Me=vl,Ys=Me.aspectRatio??16/9,Ks=Me.canvasWidth??980,Uc=Math.ceil(Ks/Ys),Vc=A(()=>Hh(Me.themeConfig||{},(t,s)=>[`--slidev-theme-${t}`,s]));function mu(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function zt(t,s,n){Object.defineProperty(t,s,{value:n,writable:!0,enumerable:!1})}const Pn=Ye({page:0,clicks:0});let jh=[],qh=[];zt(Pn,"$syncUp",!0);zt(Pn,"$syncDown",!0);zt(Pn,"$paused",!1);zt(Pn,"$onSet",t=>jh.push(t));zt(Pn,"$onPatch",t=>qh.push(t));mu();zt(Pn,"$patch",async()=>!1);function hu(t,s,n=!1){const l=[];let o=!1,r=!1,a,i;const p=Ye(s);function B(f){l.push(f)}function y(f,m){p[f]!==m&&(clearTimeout(a),o=!0,p[f]=m,a=setTimeout(()=>o=!1,0))}function u(f){o||(clearTimeout(i),r=!0,Object.entries(f).forEach(([m,g])=>{p[m]=g}),i=setTimeout(()=>r=!1,0))}function d(f){let m;n?n&&window.addEventListener("storage",b=>{b&&b.key===f&&b.newValue&&u(JSON.parse(b.newValue))}):(m=new BroadcastChannel(f),m.addEventListener("message",b=>u(b.data)));function g(){!n&&m&&!r?m.postMessage(me(p)):n&&!r&&window.localStorage.setItem(f,JSON.stringify(p)),o||l.forEach(b=>b(p))}if(be(p,g,{deep:!0,flush:"sync"}),n){const b=window.localStorage.getItem(f);b&&u(JSON.parse(b))}}return{init:d,onPatch:B,patch:y,state:p}}const{init:Uh,onPatch:Vh,patch:ul,state:ea}=hu(Pn,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),On=Ye({});let zh=[],Wh=[];zt(On,"$syncUp",!0);zt(On,"$syncDown",!0);zt(On,"$paused",!1);zt(On,"$onSet",t=>zh.push(t));zt(On,"$onPatch",t=>Wh.push(t));mu();zt(On,"$patch",async()=>!1);const{init:Yh,onPatch:Kh,patch:Fu,state:pr}=hu(On,{},!0),Xh="modulepreload",Gh=function(t){return"/math201/slides/matplotlib/"+t},yp={},Xs=function(s,n,l){if(!n||n.length===0)return s();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Gh(r),r in yp)return;yp[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!l)for(let y=o.length-1;y>=0;y--){const u=o[y];if(u.href===r&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const B=document.createElement("link");if(B.rel=a?"stylesheet":Xh,a||(B.as="script",B.crossOrigin=""),B.href=r,document.head.appendChild(B),a)return new Promise((y,u)=>{B.addEventListener("load",y),B.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};function ts(t){return Sc()?(L2(t),!0):!1}function Re(t){return typeof t=="function"?t():M(t)}function Zh(t){if(!Te(t))return Ye(t);const s=new Proxy({},{get(n,l,o){return M(Reflect.get(t.value,l,o))},set(n,l,o){return Te(t.value[l])&&!Te(o)?t.value[l].value=o:t.value[l]=o,!0},deleteProperty(n,l){return Reflect.deleteProperty(t.value,l)},has(n,l){return Reflect.has(t.value,l)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ye(s)}const ss=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Jh=t=>typeof t<"u",gu=t=>t!=null,Qh=Object.prototype.toString,yr=t=>Qh.call(t)==="[object Object]",Va=()=>+Date.now(),Ss=()=>{},eF=tF();function tF(){var t,s;return ss&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function sF(t,s){function n(...l){return new Promise((o,r)=>{Promise.resolve(t(()=>s.apply(this,l),{fn:s,thisArg:this,args:l})).then(o).catch(r)})}return n}const _u=t=>t();function nF(t=_u){const s=G(!0);function n(){s.value=!1}function l(){s.value=!0}const o=(...r)=>{s.value&&t(...r)};return{isActive:Gt(s),pause:n,resume:l,eventFilter:o}}function lF(t){let s;function n(){return s||(s=t()),s}return n.reset=async()=>{const l=s;s=void 0,l&&await l},n}function oF(t,s){var n;if(typeof t=="number")return t+s;const l=((n=t.match(/^-?\d+\.?\d*/))==null?void 0:n[0])||"",o=t.slice(l.length),r=Number.parseFloat(l)+s;return Number.isNaN(r)?t:r+o}function bu(t){return t||Vt()}function rF(...t){if(t.length!==1)return B1(...t);const s=t[0];return typeof s=="function"?Gt(ny(()=>({get:s,set:Ss}))):G(s)}function aF(t,s,n={}){const{eventFilter:l=_u,...o}=n;return be(t,sF(l,s),o)}function cF(t,s,n={}){const{eventFilter:l,...o}=n,{eventFilter:r,pause:a,resume:i,isActive:p}=nF(l);return{stop:aF(t,s,{...o,eventFilter:r}),pause:a,resume:i,isActive:p}}function iF(t,s={}){if(!Te(t))return p1(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const l in t.value)n[l]=ny(()=>({get(){return t.value[l]},set(o){var r;if((r=Re(s.replaceRef))!=null?r:!0)if(Array.isArray(t.value)){const i=[...t.value];i[l]=o,t.value=i}else{const i={...t.value,[l]:o};Object.setPrototypeOf(i,Object.getPrototypeOf(t.value)),t.value=i}else t.value[l]=o}}));return n}function co(t,s=!0,n){bu()?en(t,n):s?t():nt(t)}function pF(t,s){bu(s)&&Dr(t,s)}function yF(t,s=1e3,n={}){const{immediate:l=!0,immediateCallback:o=!1}=n;let r=null;const a=G(!1);function i(){r&&(clearInterval(r),r=null)}function p(){a.value=!1,i()}function B(){const y=Re(s);y<=0||(a.value=!0,o&&t(),i(),r=setInterval(t,y))}if(l&&ss&&B(),Te(s)||typeof s=="function"){const y=be(s,()=>{a.value&&ss&&B()});ts(y)}return ts(p),{isActive:a,pause:p,resume:B}}function uF(t,s,n={}){const{immediate:l=!0}=n,o=G(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){o.value=!1,a()}function p(...B){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,t(...B)},Re(s))}return l&&(o.value=!0,ss&&p()),ts(i),{isPending:Gt(o),start:p,stop:i}}function vu(t=!1,s={}){const{truthyValue:n=!0,falsyValue:l=!1}=s,o=Te(t),r=G(t);function a(i){if(arguments.length)return r.value=i,r.value;{const p=Re(n);return r.value=r.value===p?Re(l):p,r.value}}return o?a:[r,a]}function lt(t){var s;const n=Re(t);return(s=n==null?void 0:n.$el)!=null?s:n}const tt=ss?window:void 0,xu=ss?window.document:void 0,wu=ss?window.navigator:void 0;function ke(...t){let s,n,l,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,l,o]=t,s=tt):[s,n,l,o]=t,!s)return Ss;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const r=[],a=()=>{r.forEach(y=>y()),r.length=0},i=(y,u,d,f)=>(y.addEventListener(u,d,f),()=>y.removeEventListener(u,d,f)),p=be(()=>[lt(s),Re(o)],([y,u])=>{if(a(),!y)return;const d=yr(u)?{...u}:u;r.push(...n.flatMap(f=>l.map(m=>i(y,f,m,d))))},{immediate:!0,flush:"post"}),B=()=>{p(),a()};return ts(B),B}let up=!1;function BF(t,s,n={}){const{window:l=tt,ignore:o=[],capture:r=!0,detectIframe:a=!1}=n;if(!l)return Ss;eF&&!up&&(up=!0,Array.from(l.document.body.children).forEach(d=>d.addEventListener("click",Ss)),l.document.documentElement.addEventListener("click",Ss));let i=!0;const p=d=>o.some(f=>{if(typeof f=="string")return Array.from(l.document.querySelectorAll(f)).some(m=>m===d.target||d.composedPath().includes(m));{const m=lt(f);return m&&(d.target===m||d.composedPath().includes(m))}}),y=[ke(l,"click",d=>{const f=lt(t);if(!(!f||f===d.target||d.composedPath().includes(f))){if(d.detail===0&&(i=!p(d)),!i){i=!0;return}s(d)}},{passive:!0,capture:r}),ke(l,"pointerdown",d=>{const f=lt(t);i=!p(d)&&!!(f&&!d.composedPath().includes(f))},{passive:!0}),a&&ke(l,"blur",d=>{setTimeout(()=>{var f;const m=lt(t);((f=l.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(m!=null&&m.contains(l.document.activeElement))&&s(d)},0)})].filter(Boolean);return()=>y.forEach(d=>d())}function dF(t){return typeof t=="function"?t:typeof t=="string"?s=>s.key===t:Array.isArray(t)?s=>t.includes(s.key):()=>!0}function fF(...t){let s,n,l={};t.length===3?(s=t[0],n=t[1],l=t[2]):t.length===2?typeof t[1]=="object"?(s=!0,n=t[0],l=t[1]):(s=t[0],n=t[1]):(s=!0,n=t[0]);const{target:o=tt,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=l,p=dF(s);return ke(o,r,y=>{y.repeat&&Re(i)||p(y)&&n(y)},a)}function mF(){const t=G(!1),s=Vt();return s&&en(()=>{t.value=!0},s),t}function Rn(t){const s=mF();return A(()=>(s.value,!!t()))}function hF(t,s,n={}){const{window:l=tt,...o}=n;let r;const a=Rn(()=>l&&"MutationObserver"in l),i=()=>{r&&(r.disconnect(),r=void 0)},p=A(()=>{const d=Re(t),f=(Array.isArray(d)?d:[d]).map(lt).filter(gu);return new Set(f)}),B=be(()=>p.value,d=>{i(),a.value&&d.size&&(r=new MutationObserver(s),d.forEach(f=>r.observe(f,o)))},{immediate:!0,flush:"post"}),y=()=>r==null?void 0:r.takeRecords(),u=()=>{i(),B()};return ts(u),{isSupported:a,stop:u,takeRecords:y}}function FF(t={}){var s;const{window:n=tt,deep:l=!0,triggerOnRemoval:o=!1}=t,r=(s=t.document)!=null?s:n==null?void 0:n.document,a=()=>{var B;let y=r==null?void 0:r.activeElement;if(l)for(;y!=null&&y.shadowRoot;)y=(B=y==null?void 0:y.shadowRoot)==null?void 0:B.activeElement;return y},i=G(),p=()=>{i.value=a()};return n&&(ke(n,"blur",B=>{B.relatedTarget===null&&p()},!0),ke(n,"focus",p,!0)),o&&hF(r,B=>{B.filter(y=>y.removedNodes.length).map(y=>Array.from(y.removedNodes)).flat().forEach(y=>{y===i.value&&p()})},{childList:!0,subtree:!0}),p(),i}function gF(t,s={}){const{immediate:n=!0,fpsLimit:l=void 0,window:o=tt}=s,r=G(!1),a=l?1e3/l:null;let i=0,p=null;function B(d){if(!r.value||!o)return;i||(i=d);const f=d-i;if(a&&f<a){p=o.requestAnimationFrame(B);return}i=d,t({delta:f,timestamp:d}),p=o.requestAnimationFrame(B)}function y(){!r.value&&o&&(r.value=!0,i=0,p=o.requestAnimationFrame(B))}function u(){r.value=!1,p!=null&&o&&(o.cancelAnimationFrame(p),p=null)}return n&&y(),ts(u),{isActive:Gt(r),pause:u,resume:y}}function hn(t,s={}){const{window:n=tt}=s,l=Rn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const r=G(!1),a=B=>{r.value=B.matches},i=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a))},p=$n(()=>{l.value&&(i(),o=n.matchMedia(Re(t)),"addEventListener"in o?o.addEventListener("change",a):o.addListener(a),r.value=o.matches)});return ts(()=>{p(),i(),o=void 0}),r}const _F={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function bF(t,s={}){function n(y,u){let d=Re(t[Re(y)]);return u!=null&&(d=oF(d,u)),typeof d=="number"&&(d=`${d}px`),d}const{window:l=tt,strategy:o="min-width"}=s;function r(y){return l?l.matchMedia(y).matches:!1}const a=y=>hn(()=>`(min-width: ${n(y)})`,s),i=y=>hn(()=>`(max-width: ${n(y)})`,s),p=Object.keys(t).reduce((y,u)=>(Object.defineProperty(y,u,{get:()=>o==="min-width"?a(u):i(u),enumerable:!0,configurable:!0}),y),{});function B(){const y=Object.keys(t).map(u=>[u,a(u)]);return A(()=>y.filter(([,u])=>u.value).map(([u])=>u))}return Object.assign(p,{greaterOrEqual:a,smallerOrEqual:i,greater(y){return hn(()=>`(min-width: ${n(y,.1)})`,s)},smaller(y){return hn(()=>`(max-width: ${n(y,-.1)})`,s)},between(y,u){return hn(()=>`(min-width: ${n(y)}) and (max-width: ${n(u,-.1)})`,s)},isGreater(y){return r(`(min-width: ${n(y,.1)})`)},isGreaterOrEqual(y){return r(`(min-width: ${n(y)})`)},isSmaller(y){return r(`(max-width: ${n(y,-.1)})`)},isSmallerOrEqual(y){return r(`(max-width: ${n(y)})`)},isInBetween(y,u){return r(`(min-width: ${n(y)}) and (max-width: ${n(u,-.1)})`)},current:B,active(){const y=B();return A(()=>y.value.length===0?"":y.value.at(-1))}})}function Bp(t,s={}){const{controls:n=!1,navigator:l=wu}=s,o=Rn(()=>l&&"permissions"in l);let r;const a=typeof t=="string"?{name:t}:t,i=G(),p=()=>{r&&(i.value=r.state)},B=lF(async()=>{if(o.value){if(!r)try{r=await l.permissions.query(a),ke(r,"change",p),p()}catch{i.value="prompt"}return r}});return B(),n?{state:i,isSupported:o,query:B}:i}function vF(t={}){const{navigator:s=wu,read:n=!1,source:l,copiedDuring:o=1500,legacy:r=!1}=t,a=Rn(()=>s&&"clipboard"in s),i=Bp("clipboard-read"),p=Bp("clipboard-write"),B=A(()=>a.value||r),y=G(""),u=G(!1),d=uF(()=>u.value=!1,o);function f(){a.value&&x(i.value)?s.clipboard.readText().then(v=>{y.value=v}):y.value=b()}B.value&&n&&ke(["copy","cut"],f);async function m(v=Re(l)){B.value&&v!=null&&(a.value&&x(p.value)?await s.clipboard.writeText(v):g(v),y.value=v,u.value=!0,d.start())}function g(v){const F=document.createElement("textarea");F.value=v??"",F.style.position="absolute",F.style.opacity="0",document.body.appendChild(F),F.select(),document.execCommand("copy"),F.remove()}function b(){var v,F,k;return(k=(F=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:F.toString())!=null?k:""}function x(v){return v==="granted"||v==="prompt"}return{isSupported:B,text:y,copied:u,copy:m}}function xF(t){return JSON.parse(JSON.stringify(t))}const xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wo="__vueuse_ssr_handlers__",wF=EF();function EF(){return wo in xo||(xo[wo]=xo[wo]||{}),xo[wo]}function kF(t,s){return wF[t]||s}function SF(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const DF={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},dp="vueuse-storage";function CF(t,s,n,l={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:B=!1,shallow:y,window:u=tt,eventFilter:d,onError:f=I=>{console.error(I)},initOnMounted:m}=l,g=(y?ms:G)(typeof s=="function"?s():s);if(!n)try{n=kF("getDefaultStorage",()=>{var I;return(I=tt)==null?void 0:I.localStorage})()}catch(I){f(I)}if(!n)return g;const b=Re(s),x=SF(b),v=(o=l.serializer)!=null?o:DF[x],{pause:F,resume:k}=cF(g,()=>P(g.value),{flush:r,deep:a,eventFilter:d});u&&i&&co(()=>{ke(u,"storage",Y),ke(u,dp,O),m&&Y()}),m||Y();function w(I,Z){u&&u.dispatchEvent(new CustomEvent(dp,{detail:{key:t,oldValue:I,newValue:Z,storageArea:n}}))}function P(I){try{const Z=n.getItem(t);if(I==null)w(Z,null),n.removeItem(t);else{const q=v.write(I);Z!==q&&(n.setItem(t,q),w(Z,q))}}catch(Z){f(Z)}}function D(I){const Z=I?I.newValue:n.getItem(t);if(Z==null)return p&&b!=null&&n.setItem(t,v.write(b)),b;if(!I&&B){const q=v.read(Z);return typeof B=="function"?B(q,b):x==="object"&&!Array.isArray(q)?{...b,...q}:q}else return typeof Z!="string"?Z:v.read(Z)}function Y(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){g.value=b;return}if(!(I&&I.key!==t)){F();try{(I==null?void 0:I.newValue)!==v.write(g.value)&&(g.value=D(I))}catch(Z){f(Z)}finally{I?nt(k):k()}}}}function O(I){Y(I.detail)}return g}function AF(t){return hn("(prefers-color-scheme: dark)",t)}function D5(t,s={}){var n,l;const{pointerTypes:o,preventDefault:r,stopPropagation:a,exact:i,onMove:p,onEnd:B,onStart:y,initialValue:u,axis:d="both",draggingElement:f=tt,containerElement:m,handle:g=t}=s,b=G((n=Re(u))!=null?n:{x:0,y:0}),x=G(),v=D=>o?o.includes(D.pointerType):!0,F=D=>{Re(r)&&D.preventDefault(),Re(a)&&D.stopPropagation()},k=D=>{var Y;if(D.button!==0||Re(s.disabled)||!v(D)||Re(i)&&D.target!==Re(t))return;const O=Re(m),I=(Y=O==null?void 0:O.getBoundingClientRect)==null?void 0:Y.call(O),Z=Re(t).getBoundingClientRect(),q={x:D.clientX-(O?Z.left-I.left+O.scrollLeft:Z.left),y:D.clientY-(O?Z.top-I.top+O.scrollTop:Z.top)};(y==null?void 0:y(q,D))!==!1&&(x.value=q,F(D))},w=D=>{if(Re(s.disabled)||!v(D)||!x.value)return;const Y=Re(m),O=Re(t).getBoundingClientRect();let{x:I,y:Z}=b.value;(d==="x"||d==="both")&&(I=D.clientX-x.value.x,Y&&(I=Math.min(Math.max(0,I),Y.scrollWidth-O.width))),(d==="y"||d==="both")&&(Z=D.clientY-x.value.y,Y&&(Z=Math.min(Math.max(0,Z),Y.scrollHeight-O.height))),b.value={x:I,y:Z},p==null||p(b.value,D),F(D)},P=D=>{Re(s.disabled)||!v(D)||x.value&&(x.value=void 0,B==null||B(b.value,D),F(D))};if(ss){const D={capture:(l=s.capture)!=null?l:!0};ke(g,"pointerdown",k,D),ke(f,"pointermove",w,D),ke(f,"pointerup",P,D)}return{...iF(b),position:b,isDragging:A(()=>!!x.value),style:A(()=>`left:${b.value.x}px;top:${b.value.y}px;`)}}function MF(t,s,n={}){const{window:l=tt,...o}=n;let r;const a=Rn(()=>l&&"ResizeObserver"in l),i=()=>{r&&(r.disconnect(),r=void 0)},p=A(()=>Array.isArray(t)?t.map(u=>lt(u)):[lt(t)]),B=be(p,u=>{if(i(),a.value&&l){r=new ResizeObserver(s);for(const d of u)d&&r.observe(d,o)}},{immediate:!0,flush:"post"}),y=()=>{i(),B()};return ts(y),{isSupported:a,stop:y}}function TF(t,s={width:0,height:0},n={}){const{window:l=tt,box:o="content-box"}=n,r=A(()=>{var u,d;return(d=(u=lt(t))==null?void 0:u.namespaceURI)==null?void 0:d.includes("svg")}),a=G(s.width),i=G(s.height),{stop:p}=MF(t,([u])=>{const d=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(l&&r.value){const f=lt(t);if(f){const m=f.getBoundingClientRect();a.value=m.width,i.value=m.height}}else if(d){const f=Array.isArray(d)?d:[d];a.value=f.reduce((m,{inlineSize:g})=>m+g,0),i.value=f.reduce((m,{blockSize:g})=>m+g,0)}else a.value=u.contentRect.width,i.value=u.contentRect.height},n);co(()=>{const u=lt(t);u&&(a.value="offsetWidth"in u?u.offsetWidth:s.width,i.value="offsetHeight"in u?u.offsetHeight:s.height)});const B=be(()=>lt(t),u=>{a.value=u?s.width:0,i.value=u?s.height:0});function y(){p(),B()}return{width:a,height:i,stop:y}}function $F(t,s,n={}){const{root:l,rootMargin:o="0px",threshold:r=.1,window:a=tt,immediate:i=!0}=n,p=Rn(()=>a&&"IntersectionObserver"in a),B=A(()=>{const m=Re(t);return(Array.isArray(m)?m:[m]).map(lt).filter(gu)});let y=Ss;const u=G(i),d=p.value?be(()=>[B.value,lt(l),u.value],([m,g])=>{if(y(),!u.value||!m.length)return;const b=new IntersectionObserver(s,{root:lt(g),rootMargin:o,threshold:r});m.forEach(x=>x&&b.observe(x)),y=()=>{b.disconnect(),y=Ss}},{immediate:i,flush:"post"}):Ss,f=()=>{y(),d(),u.value=!1};return ts(f),{isSupported:p,isActive:u,pause(){y(),u.value=!1},resume(){u.value=!0},stop:f}}const fp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function PF(t,s={}){const{document:n=xu,autoExit:l=!1}=s,o=A(()=>{var x;return(x=lt(t))!=null?x:n==null?void 0:n.querySelector("html")}),r=G(!1),a=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),i=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(x=>n&&x in n||o.value&&x in o.value)),p=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(x=>n&&x in n||o.value&&x in o.value)),B=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(x=>n&&x in n),y=Rn(()=>o.value&&n&&a.value!==void 0&&i.value!==void 0&&p.value!==void 0),u=()=>B?(n==null?void 0:n[B])===o.value:!1,d=()=>{if(p.value){if(n&&n[p.value]!=null)return n[p.value];{const x=o.value;if((x==null?void 0:x[p.value])!=null)return!!x[p.value]}}return!1};async function f(){if(!(!y.value||!r.value)){if(i.value)if((n==null?void 0:n[i.value])!=null)await n[i.value]();else{const x=o.value;(x==null?void 0:x[i.value])!=null&&await x[i.value]()}r.value=!1}}async function m(){if(!y.value||r.value)return;d()&&await f();const x=o.value;a.value&&(x==null?void 0:x[a.value])!=null&&(await x[a.value](),r.value=!0)}async function g(){await(r.value?f():m())}const b=()=>{const x=d();(!x||x&&u())&&(r.value=x)};return ke(n,fp,b,!1),ke(()=>lt(o),fp,b,!1),l&&ts(f),{isSupported:y,isFullscreen:r,enter:m,exit:f,toggle:g}}function ns(t,s,n={}){const{window:l=tt}=n;return CF(t,s,l==null?void 0:l.localStorage,n)}const OF={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function RF(t={}){const{reactive:s=!1,target:n=tt,aliasMap:l=OF,passive:o=!0,onEventFired:r=Ss}=t,a=Ye(new Set),i={toJSON(){return{}},current:a},p=s?Ye(i):i,B=new Set,y=new Set;function u(g,b){g in p&&(s?p[g]=b:p[g].value=b)}function d(){a.clear();for(const g of y)u(g,!1)}function f(g,b){var x,v;const F=(x=g.key)==null?void 0:x.toLowerCase(),w=[(v=g.code)==null?void 0:v.toLowerCase(),F].filter(Boolean);F&&(b?a.add(F):a.delete(F));for(const P of w)y.add(P),u(P,b);F==="meta"&&!b?(B.forEach(P=>{a.delete(P),u(P,!1)}),B.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&b&&[...a,...w].forEach(P=>B.add(P))}ke(n,"keydown",g=>(f(g,!0),r(g)),{passive:o}),ke(n,"keyup",g=>(f(g,!1),r(g)),{passive:o}),ke("blur",d,{passive:!0}),ke("focus",d,{passive:!0});const m=new Proxy(p,{get(g,b,x){if(typeof b!="string")return Reflect.get(g,b,x);if(b=b.toLowerCase(),b in l&&(b=l[b]),!(b in p))if(/[+_-]/.test(b)){const F=b.split(/[+_-]/g).map(k=>k.trim());p[b]=A(()=>F.every(k=>Re(m[k])))}else p[b]=G(!1);const v=Reflect.get(g,b,x);return s?Re(v):v}});return m}const LF={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function C5(t={}){const{type:s="page",touch:n=!0,resetOnTouchEnds:l=!1,initialValue:o={x:0,y:0},window:r=tt,target:a=r,scroll:i=!0,eventFilter:p}=t;let B=null;const y=G(o.x),u=G(o.y),d=G(null),f=typeof s=="function"?s:LF[s],m=w=>{const P=f(w);B=w,P&&([y.value,u.value]=P,d.value="mouse")},g=w=>{if(w.touches.length>0){const P=f(w.touches[0]);P&&([y.value,u.value]=P,d.value="touch")}},b=()=>{if(!B||!r)return;const w=f(B);B instanceof MouseEvent&&w&&(y.value=w[0]+r.scrollX,u.value=w[1]+r.scrollY)},x=()=>{y.value=o.x,u.value=o.y},v=p?w=>p(()=>m(w),{}):w=>m(w),F=p?w=>p(()=>g(w),{}):w=>g(w),k=p?()=>p(()=>b(),{}):()=>b();if(a){const w={passive:!0};ke(a,["mousemove","dragover"],v,w),n&&s!=="movement"&&(ke(a,["touchstart","touchmove"],F,w),l&&ke(a,"touchend",x,w)),i&&s==="page"&&ke(r,"scroll",k,{passive:!0})}return{x:y,y:u,sourceType:d}}function IF(t,s={}){const n=rF(t),{threshold:l=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a,disableTextSelect:i=!1}=s,p=Ye({x:0,y:0}),B=(D,Y)=>{p.x=D,p.y=Y},y=Ye({x:0,y:0}),u=(D,Y)=>{y.x=D,y.y=Y},d=A(()=>p.x-y.x),f=A(()=>p.y-y.y),{max:m,abs:g}=Math,b=A(()=>m(g(d.value),g(f.value))>=l),x=G(!1),v=G(!1),F=A(()=>b.value?g(d.value)>g(f.value)?d.value>0?"left":"right":f.value>0?"up":"down":"none"),k=D=>{var Y,O,I;const Z=D.buttons===0,q=D.buttons===1;return(I=(O=(Y=s.pointerTypes)==null?void 0:Y.includes(D.pointerType))!=null?O:Z||q)!=null?I:!0},w=[ke(t,"pointerdown",D=>{if(!k(D))return;v.value=!0;const Y=D.target;Y==null||Y.setPointerCapture(D.pointerId);const{clientX:O,clientY:I}=D;B(O,I),u(O,I),a==null||a(D)}),ke(t,"pointermove",D=>{if(!k(D)||!v.value)return;const{clientX:Y,clientY:O}=D;u(Y,O),!x.value&&b.value&&(x.value=!0),x.value&&(o==null||o(D))}),ke(t,"pointerup",D=>{k(D)&&(x.value&&(r==null||r(D,F.value)),v.value=!1,x.value=!1)})];co(()=>{var D,Y,O,I,Z,q,Be,de;(Y=(D=n.value)==null?void 0:D.style)==null||Y.setProperty("touch-action","none"),i&&((I=(O=n.value)==null?void 0:O.style)==null||I.setProperty("-webkit-user-select","none"),(q=(Z=n.value)==null?void 0:Z.style)==null||q.setProperty("-ms-user-select","none"),(de=(Be=n.value)==null?void 0:Be.style)==null||de.setProperty("user-select","none"))});const P=()=>w.forEach(D=>D());return{isSwiping:Gt(x),direction:Gt(F),posStart:Gt(p),posEnd:Gt(y),distanceX:d,distanceY:f,stop:P}}let NF=0;function A5(t,s={}){const n=G(!1),{document:l=xu,immediate:o=!0,manual:r=!1,id:a=`vueuse_styletag_${++NF}`}=s,i=G(t);let p=()=>{};const B=()=>{if(!l)return;const u=l.getElementById(a)||l.createElement("style");u.isConnected||(u.id=a,s.media&&(u.media=s.media),l.head.appendChild(u)),!n.value&&(p=be(i,d=>{u.textContent=d},{immediate:!0}),n.value=!0)},y=()=>{!l||!n.value||(p(),l.head.removeChild(l.getElementById(a)),n.value=!1)};return o&&!r&&co(B),r||ts(y),{id:a,css:i,unload:y,load:B,isLoaded:Gt(n)}}function M5(t={}){const{controls:s=!1,offset:n=0,immediate:l=!0,interval:o="requestAnimationFrame",callback:r}=t,a=G(Va()+n),i=()=>a.value=Va()+n,p=r?()=>{i(),r(a.value)}:i,B=o==="requestAnimationFrame"?gF(p,{immediate:l}):yF(p,o,{immediate:l});return s?{timestamp:a,...B}:a}function us(t,s,n,l={}){var o,r,a;const{clone:i=!1,passive:p=!1,eventName:B,deep:y=!1,defaultValue:u,shouldEmit:d}=l,f=Vt(),m=n||(f==null?void 0:f.emit)||((o=f==null?void 0:f.$emit)==null?void 0:o.bind(f))||((a=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(f==null?void 0:f.proxy));let g=B;s||(s="modelValue"),g=g||`update:${s.toString()}`;const b=F=>i?typeof i=="function"?i(F):xF(F):F,x=()=>Jh(t[s])?b(t[s]):u,v=F=>{d?d(F)&&m(g,F):m(g,F)};if(p){const F=x(),k=G(F);let w=!1;return be(()=>t[s],P=>{w||(w=!0,k.value=b(P),nt(()=>w=!1))}),be(k,P=>{!w&&(P!==t[s]||y)&&v(P)},{deep:y}),k}else return A({get(){return x()},set(F){v(F)}})}function T5(t={}){const{window:s=tt}=t;if(!s)return G(!1);const n=G(s.document.hasFocus());return ke(s,"blur",()=>{n.value=!1}),ke(s,"focus",()=>{n.value=!0}),n}function HF(t={}){const{window:s=tt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:l=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:r=!0}=t,a=G(n),i=G(l),p=()=>{s&&(r?(a.value=s.innerWidth,i.value=s.innerHeight):(a.value=s.document.documentElement.clientWidth,i.value=s.document.documentElement.clientHeight))};if(p(),co(p),ke("resize",p,{passive:!0}),o){const B=hn("(orientation: portrait)");be(B,()=>p())}return{width:a,height:i}}function jF(){return Eu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Eu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const qF=typeof Proxy=="function",UF="devtools-plugin:setup",VF="plugin:settings:set";let Nn,za;function zF(){var t;return Nn!==void 0||(typeof window<"u"&&window.performance?(Nn=!0,za=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Nn=!0,za=globalThis.perf_hooks.performance):Nn=!1),Nn}function WF(){return zF()?za.now():Date.now()}class YF{constructor(s,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=n;const l={};if(s.settings)for(const a in s.settings){const i=s.settings[a];l[a]=i.defaultValue}const o=`__vue-devtools-plugin-settings__${s.id}`;let r=Object.assign({},l);try{const a=localStorage.getItem(o),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}r=a},now(){return WF()}},n&&n.on(VF,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(B=>{this.targetQueue.push({method:i,args:p,resolve:B})})})}async setRealTarget(s){this.target=s;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function KF(t,s){const n=t,l=Eu(),o=jF(),r=qF&&n.enableEarlyProxy;if(o&&(l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(UF,t,s);else{const a=r?new YF(n,o):null;(l.__VUE_DEVTOOLS_PLUGINS__=l.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:s,proxy:a}),a&&s(a.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof document<"u";function ku(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function XF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ku(t.default)}const Oe=Object.assign;function ta(t,s){const n={};for(const l in s){const o=s[l];n[l]=Pt(o)?o.map(t):t(o)}return n}const Al=()=>{},Pt=Array.isArray;function Ee(t){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(s))}const Su=/#/g,GF=/&/g,ZF=/\//g,JF=/=/g,QF=/\?/g,Du=/\+/g,e0=/%5B/g,t0=/%5D/g,Cu=/%5E/g,s0=/%60/g,Au=/%7B/g,n0=/%7C/g,Mu=/%7D/g,l0=/%20/g;function zc(t){return encodeURI(""+t).replace(n0,"|").replace(e0,"[").replace(t0,"]")}function o0(t){return zc(t).replace(Au,"{").replace(Mu,"}").replace(Cu,"^")}function Wa(t){return zc(t).replace(Du,"%2B").replace(l0,"+").replace(Su,"%23").replace(GF,"%26").replace(s0,"`").replace(Au,"{").replace(Mu,"}").replace(Cu,"^")}function r0(t){return Wa(t).replace(JF,"%3D")}function a0(t){return zc(t).replace(Su,"%23").replace(QF,"%3F")}function c0(t){return t==null?"":a0(t).replace(ZF,"%2F")}function Gn(t){try{return decodeURIComponent(""+t)}catch{Ee(`Error decoding "${t}". Using original value`)}return""+t}const i0=/\/$/,p0=t=>t.replace(i0,"");function sa(t,s,n="/"){let l,o={},r="",a="";const i=s.indexOf("#");let p=s.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(l=s.slice(0,p),r=s.slice(p+1,i>-1?i:s.length),o=t(r)),i>-1&&(l=l||s.slice(0,i),a=s.slice(i,s.length)),l=B0(l??s,n),{fullPath:l+(r&&"?")+r+a,path:l,query:o,hash:Gn(a)}}function y0(t,s){const n=s.query?t(s.query):"";return s.path+(n&&"?")+n+(s.hash||"")}function mp(t,s){return!s||!t.toLowerCase().startsWith(s.toLowerCase())?t:t.slice(s.length)||"/"}function hp(t,s,n){const l=s.matched.length-1,o=n.matched.length-1;return l>-1&&l===o&&Qs(s.matched[l],n.matched[o])&&Tu(s.params,n.params)&&t(s.query)===t(n.query)&&s.hash===n.hash}function Qs(t,s){return(t.aliasOf||t)===(s.aliasOf||s)}function Tu(t,s){if(Object.keys(t).length!==Object.keys(s).length)return!1;for(const n in t)if(!u0(t[n],s[n]))return!1;return!0}function u0(t,s){return Pt(t)?Fp(t,s):Pt(s)?Fp(s,t):t===s}function Fp(t,s){return Pt(s)?t.length===s.length&&t.every((n,l)=>n===s[l]):t.length===1&&t[0]===s}function B0(t,s){if(t.startsWith("/"))return t;if(!s.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${s}". It should look like "/${s}".`),t;if(!t)return s;const n=s.split("/"),l=t.split("/"),o=l[l.length-1];(o===".."||o===".")&&l.push("");let r=n.length-1,a,i;for(a=0;a<l.length;a++)if(i=l[a],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+l.slice(a).join("/")}const Is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wl;(function(t){t.pop="pop",t.push="push"})(Wl||(Wl={}));var Ml;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ml||(Ml={}));function d0(t){if(!t)if(Es){const s=document.querySelector("base");t=s&&s.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),p0(t)}const f0=/^[^#]+#/;function m0(t,s){return t.replace(f0,"#")+s}function h0(t,s){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:s.behavior,left:l.left-n.left-(s.left||0),top:l.top-n.top-(s.top||0)}}const Tr=()=>({left:window.scrollX,top:window.scrollY});function F0(t){let s;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!l||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(l&&r){Ee(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){Ee(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}s=h0(o,t)}else s=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.scrollX,s.top!=null?s.top:window.scrollY)}function gp(t,s){return(history.state?history.state.position-s:-1)+t}const Ya=new Map;function g0(t,s){Ya.set(t,s)}function _0(t){const s=Ya.get(t);return Ya.delete(t),s}let b0=()=>location.protocol+"//"+location.host;function $u(t,s){const{pathname:n,search:l,hash:o}=s,r=t.indexOf("#");if(r>-1){let i=o.includes(t.slice(r))?t.slice(r).length:1,p=o.slice(i);return p[0]!=="/"&&(p="/"+p),mp(p,"")}return mp(n,t)+l+o}function v0(t,s,n,l){let o=[],r=[],a=null;const i=({state:d})=>{const f=$u(t,location),m=n.value,g=s.value;let b=0;if(d){if(n.value=f,s.value=d,a&&a===m){a=null;return}b=g?d.position-g.position:0}else l(f);o.forEach(x=>{x(n.value,m,{delta:b,type:Wl.pop,direction:b?b>0?Ml.forward:Ml.back:Ml.unknown})})};function p(){a=n.value}function B(d){o.push(d);const f=()=>{const m=o.indexOf(d);m>-1&&o.splice(m,1)};return r.push(f),f}function y(){const{history:d}=window;d.state&&d.replaceState(Oe({},d.state,{scroll:Tr()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",y,{passive:!0}),{pauseListeners:p,listen:B,destroy:u}}function _p(t,s,n,l=!1,o=!1){return{back:t,current:s,forward:n,replaced:l,position:window.history.length,scroll:o?Tr():null}}function x0(t){const{history:s,location:n}=window,l={value:$u(t,n)},o={value:s.state};o.value||r(l.value,{back:null,current:l.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(p,B,y){const u=t.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+p:b0()+t+p;try{s[y?"replaceState":"pushState"](B,"",d),o.value=B}catch(f){Ee("Error with push/replace State",f),n[y?"replace":"assign"](d)}}function a(p,B){const y=Oe({},s.state,_p(o.value.back,p,o.value.forward,!0),B,{position:o.value.position});r(p,y,!0),l.value=p}function i(p,B){const y=Oe({},o.value,s.state,{forward:p,scroll:Tr()});s.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`),r(y.current,y,!0);const u=Oe({},_p(l.value,p,null),{position:y.position+1},B);r(p,u,!1),l.value=p}return{location:l,state:o,push:i,replace:a}}function w0(t){t=d0(t);const s=x0(t),n=v0(t,s.state,s.location,s.replace);function l(r,a=!0){a||n.pauseListeners(),history.go(r)}const o=Oe({location:"",base:t,go:l,createHref:m0.bind(null,t)},s,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>s.state.value}),o}function ur(t){return typeof t=="string"||t&&typeof t=="object"}function Pu(t){return typeof t=="string"||typeof t=="symbol"}const Ou=Symbol("navigation failure");var bp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bp||(bp={}));const E0={1({location:t,currentLocation:s}){return`No match for
 ${JSON.stringify(t)}${s?`
while being at
`+JSON.stringify(s):""}`},2({from:t,to:s}){return`Redirected from "${t.fullPath}" to "${S0(s)}" via a navigation guard.`},4({from:t,to:s}){return`Navigation aborted from "${t.fullPath}" to "${s.fullPath}" via a navigation guard.`},8({from:t,to:s}){return`Navigation cancelled from "${t.fullPath}" to "${s.fullPath}" with a new navigation.`},16({from:t,to:s}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Zn(t,s){return Oe(new Error(E0[t](s)),{type:t,[Ou]:!0},s)}function gs(t,s){return t instanceof Error&&Ou in t&&(s==null||!!(t.type&s))}const k0=["params","query","hash"];function S0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const s={};for(const n of k0)n in t&&(s[n]=t[n]);return JSON.stringify(s,null,2)}const vp="[^/]+?",D0={sensitive:!1,strict:!1,start:!0,end:!0},C0=/[.+*?^${}()[\]/\\]/g;function A0(t,s){const n=Oe({},D0,s),l=[];let o=n.start?"^":"";const r=[];for(const B of t){const y=B.length?[]:[90];n.strict&&!B.length&&(o+="/");for(let u=0;u<B.length;u++){const d=B[u];let f=40+(n.sensitive?.25:0);if(d.type===0)u||(o+="/"),o+=d.value.replace(C0,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:g,optional:b,regexp:x}=d;r.push({name:m,repeatable:g,optional:b});const v=x||vp;if(v!==vp){f+=10;try{new RegExp(`(${v})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+k.message)}}let F=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(F=b&&B.length<2?`(?:/${F})`:"/"+F),b&&(F+="?"),o+=F,f+=20,b&&(f+=-8),g&&(f+=-20),v===".*"&&(f+=-50)}y.push(f)}l.push(y)}if(n.strict&&n.end){const B=l.length-1;l[B][l[B].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function i(B){const y=B.match(a),u={};if(!y)return null;for(let d=1;d<y.length;d++){const f=y[d]||"",m=r[d-1];u[m.name]=f&&m.repeatable?f.split("/"):f}return u}function p(B){let y="",u=!1;for(const d of t){(!u||!y.endsWith("/"))&&(y+="/"),u=!1;for(const f of d)if(f.type===0)y+=f.value;else if(f.type===1){const{value:m,repeatable:g,optional:b}=f,x=m in B?B[m]:"";if(Pt(x)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=Pt(x)?x.join("/"):x;if(!v)if(b)d.length<2&&(y.endsWith("/")?y=y.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);y+=v}}return y||"/"}return{re:a,score:l,keys:r,parse:i,stringify:p}}function M0(t,s){let n=0;for(;n<t.length&&n<s.length;){const l=s[n]-t[n];if(l)return l;n++}return t.length<s.length?t.length===1&&t[0]===40+40?-1:1:t.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Ru(t,s){let n=0;const l=t.score,o=s.score;for(;n<l.length&&n<o.length;){const r=M0(l[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-l.length)===1){if(xp(l))return 1;if(xp(o))return-1}return o.length-l.length}function xp(t){const s=t[t.length-1];return t.length>0&&s[s.length-1]<0}const T0={type:0,value:""},$0=/[a-zA-Z0-9_]/;function P0(t){if(!t)return[[]];if(t==="/")return[[T0]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function s(f){throw new Error(`ERR (${n})/"${B}": ${f}`)}let n=0,l=n;const o=[];let r;function a(){r&&o.push(r),r=[]}let i=0,p,B="",y="";function u(){B&&(n===0?r.push({type:0,value:B}):n===1||n===2||n===3?(r.length>1&&(p==="*"||p==="+")&&s(`A repeatable param (${B}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:B,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):s("Invalid state to consume buffer"),B="")}function d(){B+=p}for(;i<t.length;){if(p=t[i++],p==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:p==="/"?(B&&u(),a()):p===":"?(u(),n=1):d();break;case 4:d(),n=l;break;case 1:p==="("?n=2:$0.test(p)?d():(u(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:n=3:y+=p;break;case 3:u(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,y="";break;default:s("Unknown state");break}}return n===2&&s(`Unfinished custom RegExp for param "${B}"`),u(),a(),o}function O0(t,s,n){const l=A0(P0(t.path),n);{const r=new Set;for(const a of l.keys)r.has(a.name)&&Ee(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const o=Oe(l,{record:t,parent:s,children:[],alias:[]});return s&&!o.record.aliasOf==!s.record.aliasOf&&s.children.push(o),o}function R0(t,s){const n=[],l=new Map;s=Sp({strict:!1,end:!0,sensitive:!1},s);function o(u){return l.get(u)}function r(u,d,f){const m=!f,g=Ep(u);H0(g,d),g.aliasOf=f&&f.record;const b=Sp(s,u),x=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of k)x.push(Ep(Oe({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g})))}let v,F;for(const k of x){const{path:w}=k;if(d&&w[0]!=="/"){const P=d.record.path,D=P[P.length-1]==="/"?"":"/";k.path=d.record.path+(w&&D+w)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);if(v=O0(k,d,b),d&&w[0]==="/"&&q0(v,d),f?(f.alias.push(v),N0(f,v)):(F=F||v,F!==v&&F.alias.push(v),m&&u.name&&!kp(v)&&(j0(u,d),a(u.name))),Lu(v)&&p(v),g.children){const P=g.children;for(let D=0;D<P.length;D++)r(P[D],v,f&&f.children[D])}f=f||v}return F?()=>{a(F)}:Al}function a(u){if(Pu(u)){const d=l.get(u);d&&(l.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&l.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function i(){return n}function p(u){const d=U0(u,n);n.splice(d,0,u),u.record.name&&!kp(u)&&l.set(u.record.name,u)}function B(u,d){let f,m={},g,b;if("name"in u&&u.name){if(f=l.get(u.name),!f)throw Zn(1,{location:u});{const F=Object.keys(u.params||{}).filter(k=>!f.keys.find(w=>w.name===k));F.length&&Ee(`Discarded invalid param(s) "${F.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=f.record.name,m=Oe(wp(d.params,f.keys.filter(F=>!F.optional).concat(f.parent?f.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),u.params&&wp(u.params,f.keys.map(F=>F.name))),g=f.stringify(m)}else if(u.path!=null)g=u.path,g.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),f=n.find(F=>F.re.test(g)),f&&(m=f.parse(g),b=f.record.name);else{if(f=d.name?l.get(d.name):n.find(F=>F.re.test(d.path)),!f)throw Zn(1,{location:u,currentLocation:d});b=f.record.name,m=Oe({},d.params,u.params),g=f.stringify(m)}const x=[];let v=f;for(;v;)x.unshift(v.record),v=v.parent;return{name:b,path:g,params:m,matched:x,meta:I0(x)}}t.forEach(u=>r(u));function y(){n.length=0,l.clear()}return{addRoute:r,resolve:B,removeRoute:a,clearRoutes:y,getRoutes:i,getRecordMatcher:o}}function wp(t,s){const n={};for(const l of s)l in t&&(n[l]=t[l]);return n}function Ep(t){const s={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:L0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(s,"mods",{value:{}}),s}function L0(t){const s={},n=t.props||!1;if("component"in t)s.default=n;else for(const l in t.components)s[l]=typeof n=="object"?n[l]:n;return s}function kp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function I0(t){return t.reduce((s,n)=>Oe(s,n.meta),{})}function Sp(t,s){const n={};for(const l in t)n[l]=l in s?s[l]:t[l];return n}function Ka(t,s){return t.name===s.name&&t.optional===s.optional&&t.repeatable===s.repeatable}function N0(t,s){for(const n of t.keys)if(!n.optional&&!s.keys.find(Ka.bind(null,n)))return Ee(`Alias "${s.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of s.keys)if(!n.optional&&!t.keys.find(Ka.bind(null,n)))return Ee(`Alias "${s.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function H0(t,s){s&&s.record.name&&!t.name&&!t.path&&Ee(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function j0(t,s){for(let n=s;n;n=n.parent)if(n.record.name===t.name)throw new Error(`A route named "${String(t.name)}" has been added as a ${s===n?"child":"descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`)}function q0(t,s){for(const n of s.keys)if(!t.keys.find(Ka.bind(null,n)))return Ee(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${s.record.path}".`)}function U0(t,s){let n=0,l=s.length;for(;n!==l;){const r=n+l>>1;Ru(t,s[r])<0?l=r:n=r+1}const o=V0(t);return o&&(l=s.lastIndexOf(o,l-1),l<0&&Ee(`Finding ancestor route "${o.record.path}" failed for "${t.record.path}"`)),l}function V0(t){let s=t;for(;s=s.parent;)if(Lu(s)&&Ru(t,s)===0)return s}function Lu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function z0(t){const s={};if(t===""||t==="?")return s;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<l.length;++o){const r=l[o].replace(Du," "),a=r.indexOf("="),i=Gn(a<0?r:r.slice(0,a)),p=a<0?null:Gn(r.slice(a+1));if(i in s){let B=s[i];Pt(B)||(B=s[i]=[B]),B.push(p)}else s[i]=p}return s}function Dp(t){let s="";for(let n in t){const l=t[n];if(n=r0(n),l==null){l!==void 0&&(s+=(s.length?"&":"")+n);continue}(Pt(l)?l.map(r=>r&&Wa(r)):[l&&Wa(l)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+n,r!=null&&(s+="="+r))})}return s}function W0(t){const s={};for(const n in t){const l=t[n];l!==void 0&&(s[n]=Pt(l)?l.map(o=>o==null?null:""+o):l==null?l:""+l)}return s}const Y0=Symbol("router view location matched"),Cp=Symbol("router view depth"),Wc=Symbol("router"),Iu=Symbol("route location"),Xa=Symbol("router view location");function Bl(){let t=[];function s(l){return t.push(l),()=>{const o=t.indexOf(l);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:s,list:()=>t.slice(),reset:n}}function Us(t,s,n,l,o,r=a=>a()){const a=l&&(l.enterCallbacks[o]=l.enterCallbacks[o]||[]);return()=>new Promise((i,p)=>{const B=d=>{d===!1?p(Zn(4,{from:n,to:s})):d instanceof Error?p(d):ur(d)?p(Zn(2,{from:s,to:d})):(a&&l.enterCallbacks[o]===a&&typeof d=="function"&&a.push(d),i())},y=r(()=>t.call(l&&l.instances[o],s,n,K0(B,s,n)));let u=Promise.resolve(y);if(t.length<3&&(u=u.then(B)),t.length>2){const d=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof y=="object"&&"then"in y)u=u.then(f=>B._called?f:(Ee(d),Promise.reject(new Error("Invalid navigation guard"))));else if(y!==void 0&&!B._called){Ee(d),p(new Error("Invalid navigation guard"));return}}u.catch(d=>p(d))})}function K0(t,s,n){let l=0;return function(){l++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,l===1&&t.apply(null,arguments)}}function na(t,s,n,l,o=r=>r()){const r=[];for(const a of t){!a.components&&!a.children.length&&Ee(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);for(const i in a.components){let p=a.components[i];{if(!p||typeof p!="object"&&typeof p!="function")throw Ee(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){Ee(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const B=p;p=()=>B}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,Ee(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!a.instances[i]))if(ku(p)){const y=(p.__vccOpts||p)[s];y&&r.push(Us(y,n,l,a,i,o))}else{let B=p();"catch"in B||(Ee(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),B=Promise.resolve(B)),r.push(()=>B.then(y=>{if(!y)throw new Error(`Couldn't resolve component "${i}" at "${a.path}"`);const u=XF(y)?y.default:y;a.mods[i]=y,a.components[i]=u;const f=(u.__vccOpts||u)[s];return f&&Us(f,n,l,a,i,o)()}))}}}return r}function Ap(t){const s=$(Wc),n=$(Iu);let l=!1,o=null;const r=A(()=>{const y=M(t.to);return(!l||y!==o)&&(ur(y)||(l?Ee(`Invalid value for prop "to" in useLink()
- to:`,y,`
- previous to:`,o,`
- props:`,t):Ee(`Invalid value for prop "to" in useLink()
- to:`,y,`
- props:`,t)),o=y,l=!0),s.resolve(y)}),a=A(()=>{const{matched:y}=r.value,{length:u}=y,d=y[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(Qs.bind(null,d));if(m>-1)return m;const g=Mp(y[u-2]);return u>1&&Mp(d)===g&&f[f.length-1].path!==g?f.findIndex(Qs.bind(null,y[u-2])):m}),i=A(()=>a.value>-1&&Q0(n.params,r.value.params)),p=A(()=>a.value>-1&&a.value===n.matched.length-1&&Tu(n.params,r.value.params));function B(y={}){if(J0(y)){const u=s[M(t.replace)?"replace":"push"](M(t.to)).catch(Al);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}if(Es){const y=Vt();if(y){const u={route:r.value,isActive:i.value,isExactActive:p.value,error:null};y.__vrl_devtools=y.__vrl_devtools||[],y.__vrl_devtools.push(u),$n(()=>{u.route=r.value,u.isActive=i.value,u.isExactActive=p.value,u.error=ur(M(t.to))?null:'Invalid "to" value'},{flush:"post"})}}return{route:r,href:A(()=>r.value.href),isActive:i,isExactActive:p,navigate:B}}function X0(t){return t.length===1?t[0]:t}const G0=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ap,setup(t,{slots:s}){const n=Ye(Ap(t)),{options:l}=$(Wc),o=A(()=>({[Tp(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[Tp(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=s.default&&X0(s.default(n));return t.custom?r:Tt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Z0=G0;function J0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const s=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return t.preventDefault&&t.preventDefault(),!0}}function Q0(t,s){for(const n in s){const l=s[n],o=t[n];if(typeof l=="string"){if(l!==o)return!1}else if(!Pt(o)||o.length!==l.length||l.some((r,a)=>r!==o[a]))return!1}return!0}function Mp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tp=(t,s,n)=>t??s??n,eg=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:s,slots:n}){sg();const l=$(Xa),o=A(()=>t.route||l.value),r=$(Cp,0),a=A(()=>{let B=M(r);const{matched:y}=o.value;let u;for(;(u=y[B])&&!u.components;)B++;return B}),i=A(()=>o.value.matched[a.value]);Ct(Cp,A(()=>a.value+1)),Ct(Y0,i),Ct(Xa,o);const p=G();return be(()=>[p.value,i.value,t.name],([B,y,u],[d,f,m])=>{y&&(y.instances[u]=B,f&&f!==y&&B&&B===d&&(y.leaveGuards.size||(y.leaveGuards=f.leaveGuards),y.updateGuards.size||(y.updateGuards=f.updateGuards))),B&&y&&(!f||!Qs(y,f)||!d)&&(y.enterCallbacks[u]||[]).forEach(g=>g(B))},{flush:"post"}),()=>{const B=o.value,y=t.name,u=i.value,d=u&&u.components[y];if(!d)return $p(n.default,{Component:d,route:B});const f=u.props[y],m=f?f===!0?B.params:typeof f=="function"?f(B):f:null,b=Tt(d,Oe({},m,s,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[y]=null)},ref:p}));if(Es&&b.ref){const x={depth:a.value,name:u.name,path:u.path,meta:u.meta};(Pt(b.ref)?b.ref.map(F=>F.i):[b.ref.i]).forEach(F=>{F.__vrv_devtools=x})}return $p(n.default,{Component:b,route:B})||b}}});function $p(t,s){if(!t)return null;const n=t(s);return n.length===1?n[0]:n}const tg=eg;function sg(){const t=Vt(),s=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(s&&(s==="KeepAlive"||s.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const l=s==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${l}>
    <component :is="Component" />
  </${l}>
</router-view>`)}}function dl(t,s){const n=Oe({},t,{matched:t.matched.map(l=>Bg(l,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:s,value:n}}}function Eo(t){return{_custom:{display:t}}}let ng=0;function lg(t,s,n){if(s.__hasDevtools)return;s.__hasDevtools=!0;const l=ng++;KF({id:"org.vuejs.router"+(l?"."+l:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((y,u)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:dl(s.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:y,componentInstance:u})=>{if(u.__vrv_devtools){const d=u.__vrv_devtools;y.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Nu})}Pt(u.__vrl_devtools)&&(u.__devtoolsApi=o,u.__vrl_devtools.forEach(d=>{let f=d.route.path,m=qu,g="",b=0;d.error?(f=d.error,m=ig,b=pg):d.isExactActive?(m=ju,g="This is exactly active"):d.isActive&&(m=Hu,g="This link is active"),y.tags.push({label:f,textColor:b,tooltip:g,backgroundColor:m})}))}),be(s.currentRoute,()=>{p(),o.notifyComponentUpdate(),o.sendInspectorTree(i),o.sendInspectorState(i)});const r="router:navigations:"+l;o.addTimelineLayer({id:r,label:`Router${l?" "+l:""} Navigations`,color:4237508}),s.onError((y,u)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:o.now(),data:{error:y},groupId:u.meta.__navigationId}})});let a=0;s.beforeEach((y,u)=>{const d={guard:Eo("beforeEach"),from:dl(u,"Current Location during this navigation"),to:dl(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:y.fullPath,data:d,groupId:y.meta.__navigationId}})}),s.afterEach((y,u,d)=>{const f={guard:Eo("afterEach")};d?(f.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},f.status=Eo("❌")):f.status=Eo("✅"),f.from=dl(u,"Current Location during this navigation"),f.to=dl(y,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:y.fullPath,time:o.now(),data:f,logType:d?"warning":"default",groupId:y.meta.__navigationId}})});const i="router-inspector:"+l;o.addInspector({id:i,label:"Routes"+(l?" "+l:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!B)return;const y=B;let u=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);u.forEach(zu),y.filter&&(u=u.filter(d=>Ga(d,y.filter.toLowerCase()))),u.forEach(d=>Vu(d,s.currentRoute.value)),y.rootNodes=u.map(Uu)}let B;o.on.getInspectorTree(y=>{B=y,y.app===t&&y.inspectorId===i&&p()}),o.on.getInspectorState(y=>{if(y.app===t&&y.inspectorId===i){const d=n.getRoutes().find(f=>f.record.__vd_id===y.nodeId);d&&(y.state={options:rg(d)})}}),o.sendInspectorTree(i),o.sendInspectorState(i)})}function og(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function rg(t){const{record:s}=t,n=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&n.push({editable:!1,key:"name",value:s.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(l=>`${l.name}${og(l)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),s.redirect!=null&&n.push({editable:!1,key:"redirect",value:s.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(l=>l.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(l=>l.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Nu=15485081,Hu=2450411,ju=8702998,ag=2282478,qu=16486972,cg=6710886,ig=16704226,pg=12131356;function Uu(t){const s=[],{record:n}=t;n.name!=null&&s.push({label:String(n.name),textColor:0,backgroundColor:ag}),n.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:qu}),t.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:Nu}),t.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:ju}),t.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:Hu}),n.redirect&&s.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:cg});let l=n.__vd_id;return l==null&&(l=String(yg++),n.__vd_id=l),{id:l,label:n.path,tags:s,children:t.children.map(Uu)}}let yg=0;const ug=/^\/(.*)\/([a-z]*)$/;function Vu(t,s){const n=s.matched.length&&Qs(s.matched[s.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=s.matched.some(l=>Qs(l,t.record))),t.children.forEach(l=>Vu(l,s))}function zu(t){t.__vd_match=!1,t.children.forEach(zu)}function Ga(t,s){const n=String(t.re).match(ug);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(s))return t.children.forEach(a=>Ga(a,s)),t.record.path!=="/"||s==="/"?(t.__vd_match=t.re.test(s),!0):!1;const o=t.record.path.toLowerCase(),r=Gn(o);return!s.startsWith("/")&&(r.includes(s)||o.includes(s))||r.startsWith(s)||o.startsWith(s)||t.record.name&&String(t.record.name).includes(s)?!0:t.children.some(a=>Ga(a,s))}function Bg(t,s){const n={};for(const l in t)s.includes(l)||(n[l]=t[l]);return n}function dg(t){const s=R0(t.routes,t),n=t.parseQuery||z0,l=t.stringifyQuery||Dp,o=t.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');const r=Bl(),a=Bl(),i=Bl(),p=ms(Is);let B=Is;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=ta.bind(null,C=>""+C),u=ta.bind(null,c0),d=ta.bind(null,Gn);function f(C,se){let te,ae;return Pu(C)?(te=s.getRecordMatcher(C),te||Ee(`Parent route "${String(C)}" not found when adding child route`,se),ae=se):ae=C,s.addRoute(ae,te)}function m(C){const se=s.getRecordMatcher(C);se?s.removeRoute(se):Ee(`Cannot remove non-existent route "${String(C)}"`)}function g(){return s.getRoutes().map(C=>C.record)}function b(C){return!!s.getRecordMatcher(C)}function x(C,se){if(se=Oe({},se||p.value),typeof C=="string"){const h=sa(n,C,se.path),_=s.resolve({path:h.path},se),S=o.createHref(h.fullPath);return S.startsWith("//")?Ee(`Location "${C}" resolved to "${S}". A resolved location cannot start with multiple slashes.`):_.matched.length||Ee(`No match found for location with path "${C}"`),Oe(h,_,{params:d(_.params),hash:Gn(h.hash),redirectedFrom:void 0,href:S})}if(!ur(C))return Ee(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`,C),x({});let te;if(C.path!=null)"params"in C&&!("name"in C)&&Object.keys(C.params).length&&Ee(`Path "${C.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),te=Oe({},C,{path:sa(n,C.path,se.path).path});else{const h=Oe({},C.params);for(const _ in h)h[_]==null&&delete h[_];te=Oe({},C,{params:u(h)}),se.params=u(se.params)}const ae=s.resolve(te,se),_e=C.hash||"";_e&&!_e.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`),ae.params=y(d(ae.params));const je=y0(l,Oe({},C,{hash:o0(_e),path:ae.path})),xe=o.createHref(je);return xe.startsWith("//")?Ee(`Location "${C}" resolved to "${xe}". A resolved location cannot start with multiple slashes.`):ae.matched.length||Ee(`No match found for location with path "${C.path!=null?C.path:C}"`),Oe({fullPath:je,hash:_e,query:l===Dp?W0(C.query):C.query||{}},ae,{redirectedFrom:void 0,href:xe})}function v(C){return typeof C=="string"?sa(n,C,p.value.path):Oe({},C)}function F(C,se){if(B!==C)return Zn(8,{from:se,to:C})}function k(C){return D(C)}function w(C){return k(Oe(v(C),{replace:!0}))}function P(C){const se=C.matched[C.matched.length-1];if(se&&se.redirect){const{redirect:te}=se;let ae=typeof te=="function"?te(C):te;if(typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=v(ae):{path:ae},ae.params={}),ae.path==null&&!("name"in ae))throw Ee(`Invalid redirect found:
${JSON.stringify(ae,null,2)}
 when navigating to "${C.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:C.query,hash:C.hash,params:ae.path!=null?{}:C.params},ae)}}function D(C,se){const te=B=x(C),ae=p.value,_e=C.state,je=C.force,xe=C.replace===!0,h=P(te);if(h)return D(Oe(v(h),{state:typeof h=="object"?Oe({},_e,h.state):_e,force:je,replace:xe}),se||te);const _=te;_.redirectedFrom=se;let S;return!je&&hp(l,ae,te)&&(S=Zn(16,{to:_,from:ae}),Ot(ae,ae,!0,!1)),(S?Promise.resolve(S):I(_,ae)).catch(L=>gs(L)?gs(L,2)?L:He(L):ce(L,_,ae)).then(L=>{if(L){if(gs(L,2))return hp(l,x(L.to),_)&&se&&(se._count=se._count?se._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${ae.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):D(Oe({replace:xe},v(L.to),{state:typeof L.to=="object"?Oe({},_e,L.to.state):_e,force:je}),se||_)}else L=q(_,ae,!0,xe,_e);return Z(_,ae,L),L})}function Y(C,se){const te=F(C,se);return te?Promise.reject(te):Promise.resolve()}function O(C){const se=ls.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(C):C()}function I(C,se){let te;const[ae,_e,je]=fg(C,se);te=na(ae.reverse(),"beforeRouteLeave",C,se);for(const h of ae)h.leaveGuards.forEach(_=>{te.push(Us(_,C,se))});const xe=Y.bind(null,C,se);return te.push(xe),Rt(te).then(()=>{te=[];for(const h of r.list())te.push(Us(h,C,se));return te.push(xe),Rt(te)}).then(()=>{te=na(_e,"beforeRouteUpdate",C,se);for(const h of _e)h.updateGuards.forEach(_=>{te.push(Us(_,C,se))});return te.push(xe),Rt(te)}).then(()=>{te=[];for(const h of je)if(h.beforeEnter)if(Pt(h.beforeEnter))for(const _ of h.beforeEnter)te.push(Us(_,C,se));else te.push(Us(h.beforeEnter,C,se));return te.push(xe),Rt(te)}).then(()=>(C.matched.forEach(h=>h.enterCallbacks={}),te=na(je,"beforeRouteEnter",C,se,O),te.push(xe),Rt(te))).then(()=>{te=[];for(const h of a.list())te.push(Us(h,C,se));return te.push(xe),Rt(te)}).catch(h=>gs(h,8)?h:Promise.reject(h))}function Z(C,se,te){i.list().forEach(ae=>O(()=>ae(C,se,te)))}function q(C,se,te,ae,_e){const je=F(C,se);if(je)return je;const xe=se===Is,h=Es?history.state:{};te&&(ae||xe?o.replace(C.fullPath,Oe({scroll:xe&&h&&h.scroll},_e)):o.push(C.fullPath,_e)),p.value=C,Ot(C,se,te,xe),He()}let Be;function de(){Be||(Be=o.listen((C,se,te)=>{if(!nn.listening)return;const ae=x(C),_e=P(ae);if(_e){D(Oe(_e,{replace:!0,force:!0}),ae).catch(Al);return}B=ae;const je=p.value;Es&&g0(gp(je.fullPath,te.delta),Tr()),I(ae,je).catch(xe=>gs(xe,12)?xe:gs(xe,2)?(D(Oe(v(xe.to),{force:!0}),ae).then(h=>{gs(h,20)&&!te.delta&&te.type===Wl.pop&&o.go(-1,!1)}).catch(Al),Promise.reject()):(te.delta&&o.go(-te.delta,!1),ce(xe,ae,je))).then(xe=>{xe=xe||q(ae,je,!1),xe&&(te.delta&&!gs(xe,8)?o.go(-te.delta,!1):te.type===Wl.pop&&gs(xe,20)&&o.go(-1,!1)),Z(ae,je,xe)}).catch(Al)}))}let Fe=Bl(),Ue=Bl(),oe;function ce(C,se,te){He(C);const ae=Ue.list();return ae.length?ae.forEach(_e=>_e(C,se,te)):(Ee("uncaught error during route navigation:"),console.error(C)),Promise.reject(C)}function Se(){return oe&&p.value!==Is?Promise.resolve():new Promise((C,se)=>{Fe.add([C,se])})}function He(C){return oe||(oe=!C,de(),Fe.list().forEach(([se,te])=>C?te(C):se()),Fe.reset()),C}function Ot(C,se,te,ae){const{scrollBehavior:_e}=t;if(!Es||!_e)return Promise.resolve();const je=!te&&_0(gp(C.fullPath,0))||(ae||!te)&&history.state&&history.state.scroll||null;return nt().then(()=>_e(C,se,je)).then(xe=>xe&&F0(xe)).catch(xe=>ce(xe,C,se))}const ot=C=>o.go(C);let _t;const ls=new Set,nn={currentRoute:p,listening:!0,addRoute:f,removeRoute:m,clearRoutes:s.clearRoutes,hasRoute:b,getRoutes:g,resolve:x,options:t,push:k,replace:w,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Ue.add,isReady:Se,install(C){const se=this;C.component("RouterLink",Z0),C.component("RouterView",tg),C.config.globalProperties.$router=se,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>M(p)}),Es&&!_t&&p.value===Is&&(_t=!0,k(o.location).catch(_e=>{Ee("Unexpected error when starting the router:",_e)}));const te={};for(const _e in Is)Object.defineProperty(te,_e,{get:()=>p.value[_e],enumerable:!0});C.provide(Wc,se),C.provide(Iu,ey(te)),C.provide(Xa,p);const ae=C.unmount;ls.add(C),C.unmount=function(){ls.delete(C),ls.size<1&&(B=Is,Be&&Be(),Be=null,p.value=Is,_t=!1,oe=!1),ae()},Es&&lg(C,se,s)}};function Rt(C){return C.reduce((se,te)=>se.then(()=>O(te)),Promise.resolve())}return nn}function fg(t,s){const n=[],l=[],o=[],r=Math.max(s.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=s.matched[a];i&&(t.matched.find(B=>Qs(B,i))?l.push(i):n.push(i));const p=t.matched[a];p&&(s.matched.find(B=>Qs(B,p))||o.push(p))}return[n,l,o]}const la=G(!1),Tl=G(!1),Un=G(!1),mg=G(!0),Za=bF({xs:460,..._F}),An=HF(),Wu=RF(),hg=A(()=>An.height.value-An.width.value/Ys>180),Yu=PF(ss?document.body:null),Gs=FF(),Fg=A(()=>{var t,s;return["INPUT","TEXTAREA"].includes(((t=Gs.value)==null?void 0:t.tagName)||"")||((s=Gs.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),gg=A(()=>{var t;return["BUTTON","A"].includes(((t=Gs.value)==null?void 0:t.tagName)||"")});ns("slidev-camera","default");ns("slidev-mic","default");const Io=ns("slidev-scale",0),Bt=ns("slidev-show-overview",!1),oa=ns("slidev-presenter-cursor",!0),Pp=ns("slidev-show-editor",!1);ns("slidev-editor-width",ss?window.innerWidth*.4:100);const Ku=vu(Bt);var _g=Object.defineProperty,Op=Object.getOwnPropertySymbols,bg=Object.prototype.hasOwnProperty,vg=Object.prototype.propertyIsEnumerable,Rp=(t,s,n)=>s in t?_g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Ja=(t,s)=>{for(var n in s||(s={}))bg.call(s,n)&&Rp(t,n,s[n]);if(Op)for(var n of Op(s))vg.call(s,n)&&Rp(t,n,s[n]);return t},xg=()=>({emit(t,...s){let n=this.events[t]||[];for(let l=0,o=n.length;l<o;l++)n[l](...s)},events:{},on(t,s){var n;return(n=this.events[t])!=null&&n.push(s)||(this.events[t]=[s]),()=>{var l;this.events[t]=(l=this.events[t])==null?void 0:l.filter(o=>s!==o)}}});function Lp(t,s,n,l=o=>o){return t*l(.5-s*(.5-n))}function wg(t){return[-t[0],-t[1]]}function Kt(t,s){return[t[0]+s[0],t[1]+s[1]]}function Nt(t,s){return[t[0]-s[0],t[1]-s[1]]}function Yt(t,s){return[t[0]*s,t[1]*s]}function Eg(t,s){return[t[0]/s,t[1]/s]}function fl(t){return[t[1],-t[0]]}function Ip(t,s){return t[0]*s[0]+t[1]*s[1]}function kg(t,s){return t[0]===s[0]&&t[1]===s[1]}function Sg(t){return Math.hypot(t[0],t[1])}function Dg(t){return t[0]*t[0]+t[1]*t[1]}function Np(t,s){return Dg(Nt(t,s))}function Xu(t){return Eg(t,Sg(t))}function Cg(t,s){return Math.hypot(t[1]-s[1],t[0]-s[0])}function ml(t,s,n){let l=Math.sin(n),o=Math.cos(n),r=t[0]-s[0],a=t[1]-s[1],i=r*o-a*l,p=r*l+a*o;return[i+s[0],p+s[1]]}function Qa(t,s,n){return Kt(t,Yt(Nt(s,t),n))}function Hp(t,s,n){return Kt(t,Yt(s,n))}var{min:Hn,PI:Ag}=Math,jp=.275,hl=Ag+1e-4;function Mg(t,s={}){let{size:n=16,smoothing:l=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=oe=>oe,start:i={},end:p={},last:B=!1}=s,{cap:y=!0,easing:u=oe=>oe*(2-oe)}=i,{cap:d=!0,easing:f=oe=>--oe*oe*oe+1}=p;if(t.length===0||n<=0)return[];let m=t[t.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(n,m):i.taper,b=p.taper===!1?0:p.taper===!0?Math.max(n,m):p.taper,x=Math.pow(n*l,2),v=[],F=[],k=t.slice(0,10).reduce((oe,ce)=>{let Se=ce.pressure;if(r){let He=Hn(1,ce.distance/n),Ot=Hn(1,1-He);Se=Hn(1,oe+(Ot-oe)*(He*jp))}return(oe+Se)/2},t[0].pressure),w=Lp(n,o,t[t.length-1].pressure,a),P,D=t[0].vector,Y=t[0].point,O=Y,I=Y,Z=O,q=!1;for(let oe=0;oe<t.length;oe++){let{pressure:ce}=t[oe],{point:Se,vector:He,distance:Ot,runningLength:ot}=t[oe];if(oe<t.length-1&&m-ot<3)continue;if(o){if(r){let ae=Hn(1,Ot/n),_e=Hn(1,1-ae);ce=Hn(1,k+(_e-k)*(ae*jp))}w=Lp(n,o,ce,a)}else w=n/2;P===void 0&&(P=w);let _t=ot<g?u(ot/g):1,ls=m-ot<b?f((m-ot)/b):1;w=Math.max(.01,w*Math.min(_t,ls));let nn=(oe<t.length-1?t[oe+1]:t[oe]).vector,Rt=oe<t.length-1?Ip(He,nn):1,C=Ip(He,D)<0&&!q,se=Rt!==null&&Rt<0;if(C||se){let ae=Yt(fl(D),w);for(let _e=1/13,je=0;je<=1;je+=_e)I=ml(Nt(Se,ae),Se,hl*je),v.push(I),Z=ml(Kt(Se,ae),Se,hl*-je),F.push(Z);Y=I,O=Z,se&&(q=!0);continue}if(q=!1,oe===t.length-1){let ae=Yt(fl(He),w);v.push(Nt(Se,ae)),F.push(Kt(Se,ae));continue}let te=Yt(fl(Qa(nn,He,Rt)),w);I=Nt(Se,te),(oe<=1||Np(Y,I)>x)&&(v.push(I),Y=I),Z=Kt(Se,te),(oe<=1||Np(O,Z)>x)&&(F.push(Z),O=Z),k=ce,D=He}let Be=t[0].point.slice(0,2),de=t.length>1?t[t.length-1].point.slice(0,2):Kt(t[0].point,[1,1]),Fe=[],Ue=[];if(t.length===1){if(!(g||b)||B){let oe=Hp(Be,Xu(fl(Nt(Be,de))),-(P||w)),ce=[];for(let Se=1/13,He=Se;He<=1;He+=Se)ce.push(ml(oe,Be,hl*2*He));return ce}}else{if(!(g||b&&t.length===1))if(y)for(let ce=1/13,Se=ce;Se<=1;Se+=ce){let He=ml(F[0],Be,hl*Se);Fe.push(He)}else{let ce=Nt(v[0],F[0]),Se=Yt(ce,.5),He=Yt(ce,.51);Fe.push(Nt(Be,Se),Nt(Be,He),Kt(Be,He),Kt(Be,Se))}let oe=fl(wg(t[t.length-1].vector));if(b||g&&t.length===1)Ue.push(de);else if(d){let ce=Hp(de,oe,w);for(let Se=1/29,He=Se;He<1;He+=Se)Ue.push(ml(ce,de,hl*3*He))}else Ue.push(Kt(de,Yt(oe,w)),Kt(de,Yt(oe,w*.99)),Nt(de,Yt(oe,w*.99)),Nt(de,Yt(oe,w)))}return v.concat(Ue,F.reverse(),Fe)}function Tg(t,s={}){var n;let{streamline:l=.5,size:o=16,last:r=!1}=s;if(t.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(t[0])?t:t.map(({x:f,y:m,pressure:g=.5})=>[f,m,g]);if(i.length===2){let f=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Qa(i[0],f,m/4))}i.length===1&&(i=[...i,[...Kt(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],B=!1,y=0,u=p[0],d=i.length-1;for(let f=1;f<i.length;f++){let m=r&&f===d?i[f].slice(0,2):Qa(u.point,i[f],a);if(kg(u.point,m))continue;let g=Cg(m,u.point);if(y+=g,f<d&&!B){if(y<o)continue;B=!0}u={point:m,pressure:i[f][2]>=0?i[f][2]:.5,vector:Xu(Nt(u.point,m)),distance:g,runningLength:y},p.push(u)}return p[0].vector=((n=p[1])==null?void 0:n.vector)||[0,0],p}function $g(t,s={}){return Mg(Tg(t,s),s)}function Br(t,s){return t-s}function Pg(t){return t<0?-1:1}function dr(t){return[Math.abs(t),Pg(t)]}function Gu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Og=2,vs=Og,nl=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var s,n;const l=this.drauu.el,o=(s=this.drauu.options.coordinateScale)!=null?s:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*o,y:(t.pageY-r.top)*o,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const a=r.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*o,y:a.y*o,pressure:t.pressure}}}createElement(t,s){var n;const l=document.createElementNS("http://www.w3.org/2000/svg",t),o=s?Ja(Ja({},this.brush),s):this.brush;return l.setAttribute("fill",(n=o.fill)!=null?n:"transparent"),l.setAttribute("stroke",o.color),l.setAttribute("stroke-width",o.size.toString()),l.setAttribute("stroke-linecap","round"),o.dasharray&&l.setAttribute("stroke-dasharray",o.dasharray),l}attr(t,s){this.el.setAttribute(t,typeof s=="string"?s:s.toFixed(vs))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Rg=class Zu extends nl{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){return Zu.getSvgData(s,this.brush)}static getSvgData(s,n){const l=$g(s,Ja({size:n.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},n.stylusOptions));if(!l.length)return"";const o=l.reduce((r,[a,i],p,B)=>{const[y,u]=B[(p+1)%B.length];return r.push(a,i,(a+y)/2,(i+u)/2),r},["M",...l[0],"Q"]);return o.push("Z"),o.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Lg=class extends nl{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=dr(t.x-this.start.x),[l,o]=dr(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,l);s=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",l);else{const[r,a]=[this.start.x,this.start.x+s*n].sort(Br),[i,p]=[this.start.y,this.start.y+l*o].sort(Br);this.attr("cx",(r+a)/2),this.attr("cy",(i+p)/2),this.attr("rx",(a-r)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ju(t,s){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",s),l.setAttribute("id",t),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(o),n.appendChild(l),n}var Ig=class extends nl{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const s=Gu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Ju(s,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${s})`),n}return this.el}onMove(t){if(!this.el)return!1;let{x:s,y:n}=t;if(this.shiftPressed){const l=t.x-this.start.x,o=t.y-this.start.y;if(o!==0){let r=l/o;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+o*r,n=this.start.y+o):(s=this.start.x+l,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-n),this.attr("x2",s),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",n)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Ng=class extends nl{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=dr(t.x-this.start.x),[l,o]=dr(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,l);s=r,l=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-l),this.attr("width",s*2),this.attr("height",l*2);else{const[r,a]=[this.start.x,this.start.x+s*n].sort(Br),[i,p]=[this.start.y,this.start.y+l*o].sort(Br);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",p-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Hg(t,s){const n=t.x-s.x,l=t.y-s.y;return n*n+l*l}function jg(t,s,n){let l=s.x,o=s.y,r=n.x-l,a=n.y-o;if(r!==0||a!==0){const i=((t.x-l)*r+(t.y-o)*a)/(r*r+a*a);i>1?(l=n.x,o=n.y):i>0&&(l+=r*i,o+=a*i)}return r=t.x-l,a=t.y-o,r*r+a*a}function qg(t,s){let n=t[0];const l=[n];let o;for(let r=1,a=t.length;r<a;r++)o=t[r],Hg(o,n)>s&&(l.push(o),n=o);return n!==o&&o&&l.push(o),l}function ec(t,s,n,l,o){let r=l,a=0;for(let i=s+1;i<n;i++){const p=jg(t[i],t[s],t[n]);p>r&&(a=i,r=p)}r>l&&(a-s>1&&ec(t,s,a,l,o),o.push(t[a]),n-a>1&&ec(t,a,n,l,o))}function Ug(t,s){const n=t.length-1,l=[t[0]];return ec(t,0,n,s,l),l.push(t[n]),l}function qp(t,s,n=!1){if(t.length<=2)return t;const l=s!==void 0?s*s:1;return t=n?t:qg(t,l),t=Ug(t,l),t}var Vg=class Bn extends nl{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=Gu();const n=Ju(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=qp(this.points,1,!0),this.count=0),this.attr("d",Bn.toSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",Bn.toSvgData(qp(this.points,1,!0))),!s.getTotalLength()))}static line(s,n){const l=n.x-s.x,o=n.y-s.y;return{length:Math.sqrt(l**2+o**2),angle:Math.atan2(o,l)}}static controlPoint(s,n,l,o){const r=n||s,a=l||s,i=.2,p=Bn.line(r,a),B=p.angle+(o?Math.PI:0),y=p.length*i,u=s.x+Math.cos(B)*y,d=s.y+Math.sin(B)*y;return{x:u,y:d}}static bezierCommand(s,n,l){const o=Bn.controlPoint(l[n-1],l[n-2],s),r=Bn.controlPoint(s,l[n-1],l[n+1],!0);return`C ${o.x.toFixed(vs)},${o.y.toFixed(vs)} ${r.x.toFixed(vs)},${r.y.toFixed(vs)} ${s.x.toFixed(vs)},${s.y.toFixed(vs)}`}static toSvgData(s){return s.reduce((n,l,o,r)=>o===0?`M ${l.x.toFixed(vs)},${l.y.toFixed(vs)}`:`${n} ${Bn.bezierCommand(l,o,r)}`,"")}},zg=class extends nl{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const s=(n,l)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const r=n[o];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=r.getPointAtLength(a*i/this.pathSubFactor),B=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:B.x,y1:p.y,y2:B.y,segment:i,element:l||r})}}else r.children&&s(r.children,r)}};t&&s(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const n=this.pathFragments[s],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,l)&&(n.element.remove(),t.push(s))}return t.length&&(this.pathFragments=this.pathFragments.filter((s,n)=>!t.includes(n))),t.length>0}lineLineIntersect(t,s){const n=t.x1,l=t.x2,o=s.x1,r=s.x2,a=t.y1,i=t.y2,p=s.y1,B=s.y2,y=(n-l)*(p-B)-(a-i)*(o-r),u=(n*i-a*l)*(o-r)-(n-l)*(o*B-p*r),d=(n*i-a*l)*(p-B)-(a-i)*(o*B-p*r),f=(m,g,b)=>m>=g&&m<=b?!0:m>=b&&m<=g;if(y===0)return!1;{const m={x:u/y,y:d/y};return f(m.x,n,l)&&f(m.y,a,i)&&f(m.x,o,r)&&f(m.y,p,B)}}};function Wg(t){return{draw:new Vg(t),stylus:new Rg(t),line:new Ig(t),rectangle:new Ng(t),ellipse:new Lg(t),eraseLine:new zg(t)}}var Yg=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=xg(),this._originalPointerId=null,this._models=Wg(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(s)||this.el,l=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,s){return this._emitter.on(t,s)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const s=this.model._eventUp(t);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function Kg(t){return new Yg(t)}const tc=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Bs=ns("slidev-drawing-enabled",!1),$5=ns("slidev-drawing-pinned",!1),Xg=G(!1),Gg=G(!1),Zg=G(!1),Yl=G(!1),bn=Zh(ns("slidev-drawing-brush",{color:tc[0],size:4,mode:"stylus"})),Up=G("stylus"),Qu=A(()=>Me.drawings.syncAll||vt.value);let Kl=!1;const Fl=A({get(){return Up.value},set(t){Up.value=t,t==="arrow"?(bn.mode="line",bn.arrowEnd=!0):(bn.mode=t,bn.arrowEnd=!1)}}),Jg=Ye({brush:bn,acceptsInputTypes:A(()=>Bs.value&&(!Me.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),gt=Mc(Kg(Jg));function Qg(){gt.clear(),Qu.value&&Fu(Xe.value,"")}function Yc(){var t;Gg.value=gt.canRedo(),Xg.value=gt.canUndo(),Zg.value=!!((t=gt.el)!=null&&t.children.length)}function e_(t){Kl=!0;const s=pr[t||Xe.value];s!=null?gt.load(s):gt.clear(),Yc(),Kl=!1}gt.on("changed",()=>{if(Yc(),!Kl){const t=gt.dump(),s=Xe.value;(pr[s]||"")!==t&&Qu.value&&Fu(s,gt.dump())}});Kh(t=>{Kl=!0,t[Xe.value]!=null&&gt.load(t[Xe.value]||""),Kl=!1,Yc()});nt(()=>{be(Xe,()=>{gt.mounted&&e_()},{immediate:!0})});gt.on("start",()=>Yl.value=!0);gt.on("end",()=>Yl.value=!1);window.addEventListener("keydown",t=>{if(!Bs.value)return;const s=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let n=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?gt.redo():gt.undo():t.code==="Escape"?Bs.value=!1:t.code==="KeyL"&&s?Fl.value="line":t.code==="KeyA"&&s?Fl.value="arrow":t.code==="KeyS"&&s?Fl.value="stylus":t.code==="KeyR"&&s?Fl.value="rectangle":t.code==="KeyE"&&s?Fl.value="ellipse":t.code==="KeyC"&&s?Qg():t.code.startsWith("Digit")&&s&&+t.code[5]<=tc.length?bn.color=tc[+t.code[5]-1]:n=!1,n&&(t.preventDefault(),t.stopPropagation())},!1);function Je(...t){return A(()=>t.every(s=>Re(s)))}function Dt(t){return A(()=>!Re(t))}const Vp=AF(),ra=ns("slidev-color-schema","auto"),sc=A(()=>Me.colorSchema!=="auto"),Kc=A({get(){return sc.value?Me.colorSchema==="dark":ra.value==="auto"?Vp.value:ra.value==="dark"},set(t){sc.value||(ra.value=t===Vp.value?"auto":t?"dark":"light")}}),eB=vu(Kc);ss&&be(Kc,t=>{const s=document.querySelector("html");s.classList.toggle("dark",t),s.classList.toggle("light",!t)},{immediate:!0});const No=G(1),Ho=A(()=>Ge.length-1),$t=G(0),Xc=G(0);function t_(){$t.value>No.value&&($t.value-=1)}function s_(){$t.value<Ho.value&&($t.value+=1)}function n_(){if($t.value>No.value){let t=$t.value-Xc.value;t<No.value&&(t=No.value),$t.value=t}}function l_(){if($t.value<Ho.value){let t=$t.value+Xc.value;t>Ho.value&&(t=Ho.value),$t.value=t}}function o_(){const{escape:t,space:s,shift:n,left:l,right:o,up:r,down:a,enter:i,d:p,g:B,o:y}=Wu;let u=[{name:"next_space",key:Je(s,Dt(n)),fn:Zs,autoRepeat:!0},{name:"prev_space",key:Je(s,n),fn:Js,autoRepeat:!0},{name:"next_right",key:Je(o,Dt(n),Dt(Bt)),fn:Zs,autoRepeat:!0},{name:"prev_left",key:Je(l,Dt(n),Dt(Bt)),fn:Js,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Zs,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Js,autoRepeat:!0},{name:"next_down",key:Je(a,Dt(Bt)),fn:Gl,autoRepeat:!0},{name:"prev_up",key:Je(r,Dt(Bt)),fn:()=>Zl(!1),autoRepeat:!0},{name:"next_shift",key:Je(o,n),fn:Gl,autoRepeat:!0},{name:"prev_shift",key:Je(l,n),fn:()=>Zl(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,Dt(Bs)),fn:eB},{name:"toggle_overview",key:Je(y,Dt(Bs)),fn:Ku},{name:"hide_overview",key:Je(t,Dt(Bs)),fn:()=>Bt.value=!1},{name:"goto",key:Je(B,Dt(Bs)),fn:()=>Un.value=!Un.value},{name:"next_overview",key:Je(o,Bt),fn:s_},{name:"prev_overview",key:Je(l,Bt),fn:t_},{name:"up_overview",key:Je(r,Bt),fn:n_},{name:"down_overview",key:Je(a,Bt),fn:l_},{name:"goto_from_overview",key:Je(i,Bt),fn:()=>{Qn($t.value),Bt.value=!1}}];const d=new Set(u.map(m=>m.name));if(u.filter(m=>m.name&&d.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return u}const tB=Je(Dt(Fg),Dt(gg),mg);function r_(t,s,n=!1){typeof t=="string"&&(t=Wu[t]);const l=Je(t,tB);let o=0,r;const a=()=>{if(clearTimeout(r),!l.value){o=0;return}n&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),s()};return be(l,a,{flush:"sync"})}function a_(t,s){return fF(t,n=>{tB.value&&(n.repeat||s())})}function c_(){const t=o_();new Map(t.map(n=>[n.key,n])).forEach(n=>{n.fn&&r_(n.key,n.fn,n.autoRepeat)}),a_("f",()=>Yu.toggle())}const i_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function p_(t,s){return E(),le("svg",i_,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"},null,-1)]))}const y_={name:"carbon-close",render:p_};function Gc(t,s=""){var o,r;const n=["slidev-page",s],l=(r=(o=t==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:r.no;return l!=null&&n.push(`slidev-page-${l}`),n.filter(Boolean).join(" ")}const u_=De({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){$(N);const s=t,n=G(),l=TF(n),o=A(()=>s.width?s.width:l.width.value),r=A(()=>s.width?s.width/Ys:l.height.value);s.width&&$n(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${r.value}px`)});const a=A(()=>o.value/r.value),i=A(()=>s.scale&&!Jn.value?s.scale:a.value<Ys?o.value/Ks:r.value*Ys/Ks),p=A(()=>({height:`${Uc}px`,width:`${Ks}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),B=A(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return Ct(fu,i),(y,u)=>(E(),le("div",{id:"slide-container",ref_key:"root",ref:n,class:Ke(B.value)},[e("div",{id:"slide-content",style:wt(p.value)},[es(y.$slots,"default")],4),es(y.$slots,"controls")],2))}});const H=(t,s)=>{const n=t.__vccOpts||t;for(const[l,o]of s)n[l]=o;return n},sB=H(u_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Zc=De({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:s}){const n=us(t,"clicks",s),l=us(t,"clicksElements",s),o=us(t,"clicksDisabled",s),r=us(t,"clicksOrderMap",s);l.value.length=0,Ct($h,t.route),Ct(Ph,t.context),Ct(Dl,n),Ct(Cl,o),Ct(mn,l),Ct(qa,r)},render(){var t,s;return this.$props.is?Tt(this.$props.is):(s=(t=this.$slots)==null?void 0:t.default)==null?void 0:s.call(t)}}),B_=["innerHTML"],d_=De({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return $(N),(s,n)=>M(pr)[s.page]?(E(),le("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:M(pr)[s.page]},null,8,B_)):ge("v-if",!0)}}),nB=H(d_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),f_=Object.freeze(Object.defineProperty({__proto__:null,default:nB},Symbol.toStringTag,{value:"Module"})),m_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},h_=["onClick"],aa=4*16*2,zp=2*16,F_=De({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:s}){$(N);const o=us(t,"modelValue",s);function r(){o.value=!1}function a(d){Qn(d),r()}function i(d){return d===$t.value}const p=Za.smaller("xs"),B=Za.smaller("sm"),y=A(()=>p.value?An.width.value-aa:B.value?(An.width.value-aa-zp)/2:300),u=A(()=>Math.floor((An.width.value-aa)/(y.value+zp)));return $n(()=>{$t.value=Xe.value,Xc.value=u.value}),(d,f)=>{const m=y_;return E(),le(Ae,null,[hy(e("div",m_,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:wt(`grid-template-columns: repeat(auto-fit,minmax(${y.value}px,1fr))`)},[(E(!0),le(Ae,null,tl(M(Ge).slice(0,-1),(g,b)=>(E(),le("div",{key:g.path,class:"relative"},[e("div",{class:Ke(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(b+1),"border-gray-400":!i(b+1)}]),style:wt(M(Vc)),onClick:x=>a(+g.path)},[(E(),R(sB,{key:g.path,width:y.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:T(()=>[g!=null&&g.component?(E(),R(M(Zc),{key:0,is:g.component,"clicks-disabled":!0,class:Ke(M(Gc)(g)),route:g,context:"overview"},null,8,["is","class","route"])):ge("v-if",!0),W(nB,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,h_),e("div",{class:"absolute top-0 opacity-50",style:wt(`left: ${y.value+5}px`)},jt(b+1),5)]))),128))],4)],512),[[qc,M(o)]]),M(o)?(E(),le("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[W(m)])):ge("v-if",!0)],64)}}});const g_=H(F_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),__="/math201/slides/matplotlib/assets/logo-b72bde5d.png",b_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},v_=De({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:s}){$(N);const n=t,o=us(n,"modelValue",s);function r(){o.value=!1}return(a,i)=>(E(),R(xy,null,[M(o)?(E(),le("div",b_,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=p=>r())}),e("div",{class:Ke(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[es(a.$slots,"default")],2)])):ge("v-if",!0)],1024))}}),x_=H(v_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Modal.vue"]]),w_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},E_=["innerHTML"],k_=De({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:s}){$(N);const o=us(t,"modelValue",s),r=A(()=>typeof Me.info=="string");return(a,i)=>(E(),R(x_,{modelValue:M(o),"onUpdate:modelValue":i[0]||(i[0]=p=>Te(o)?o.value=p:null),class:"px-6 py-4"},{default:T(()=>[e("div",w_,[r.value?(E(),le("div",{key:0,class:"mb-4",innerHTML:M(Me).info},null,8,E_)):ge("v-if",!0),i[1]||(i[1]=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:__,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),c("dev ")])])],-1))])]),_:1},8,["modelValue"]))}});const S_=H(k_,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Ms(t){return Array.isArray?Array.isArray(t):rB(t)==="[object Array]"}const D_=1/0;function C_(t){if(typeof t=="string")return t;let s=t+"";return s=="0"&&1/t==-D_?"-0":s}function A_(t){return t==null?"":C_(t)}function ds(t){return typeof t=="string"}function lB(t){return typeof t=="number"}function M_(t){return t===!0||t===!1||T_(t)&&rB(t)=="[object Boolean]"}function oB(t){return typeof t=="object"}function T_(t){return oB(t)&&t!==null}function At(t){return t!=null}function ca(t){return!t.trim().length}function rB(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const $_="Incorrect 'index' type",P_=t=>`Invalid value for key ${t}`,O_=t=>`Pattern length exceeds max of ${t}.`,R_=t=>`Missing ${t} property in key`,L_=t=>`Property 'weight' in key '${t}' must be a positive integer`,Wp=Object.prototype.hasOwnProperty;class I_{constructor(s){this._keys=[],this._keyMap={};let n=0;s.forEach(l=>{let o=aB(l);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(l=>{l.weight/=n})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function aB(t){let s=null,n=null,l=null,o=1,r=null;if(ds(t)||Ms(t))l=t,s=Yp(t),n=nc(t);else{if(!Wp.call(t,"name"))throw new Error(R_("name"));const a=t.name;if(l=a,Wp.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(L_(a));s=Yp(a),n=nc(a),r=t.getFn}return{path:s,id:n,weight:o,src:l,getFn:r}}function Yp(t){return Ms(t)?t:t.split(".")}function nc(t){return Ms(t)?t.join("."):t}function N_(t,s){let n=[],l=!1;const o=(r,a,i)=>{if(At(r))if(!a[i])n.push(r);else{let p=a[i];const B=r[p];if(!At(B))return;if(i===a.length-1&&(ds(B)||lB(B)||M_(B)))n.push(A_(B));else if(Ms(B)){l=!0;for(let y=0,u=B.length;y<u;y+=1)o(B[y],a,i+1)}else a.length&&o(B,a,i+1)}};return o(t,ds(s)?s.split("."):s,0),l?n:n[0]}const H_={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},j_={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,s)=>t.score===s.score?t.idx<s.idx?-1:1:t.score<s.score?-1:1},q_={location:0,threshold:.6,distance:100},U_={useExtendedSearch:!1,getFn:N_,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...j_,...H_,...q_,...U_};const V_=/[^ ]+/g;function z_(t=1,s=3){const n=new Map,l=Math.pow(10,s);return{get(o){const r=o.match(V_).length;if(n.has(r))return n.get(r);const a=1/Math.pow(r,.5*t),i=parseFloat(Math.round(a*l)/l);return n.set(r,i),i},clear(){n.clear()}}}class Jc{constructor({getFn:s=he.getFn,fieldNormWeight:n=he.fieldNormWeight}={}){this.norm=z_(n,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((n,l)=>{this._keysMap[n.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ds(this.docs[0])?this.docs.forEach((s,n)=>{this._addString(s,n)}):this.docs.forEach((s,n)=>{this._addObject(s,n)}),this.norm.clear())}add(s){const n=this.size();ds(s)?this._addString(s,n):this._addObject(s,n)}removeAt(s){this.records.splice(s,1);for(let n=s,l=this.size();n<l;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(s,n){return s[this._keysMap[n]]}size(){return this.records.length}_addString(s,n){if(!At(s)||ca(s))return;let l={v:s,i:n,n:this.norm.get(s)};this.records.push(l)}_addObject(s,n){let l={i:n,$:{}};this.keys.forEach((o,r)=>{let a=o.getFn?o.getFn(s):this.getFn(s,o.path);if(At(a)){if(Ms(a)){let i=[];const p=[{nestedArrIndex:-1,value:a}];for(;p.length;){const{nestedArrIndex:B,value:y}=p.pop();if(At(y))if(ds(y)&&!ca(y)){let u={v:y,i:B,n:this.norm.get(y)};i.push(u)}else Ms(y)&&y.forEach((u,d)=>{p.push({nestedArrIndex:d,value:u})})}l.$[r]=i}else if(ds(a)&&!ca(a)){let i={v:a,n:this.norm.get(a)};l.$[r]=i}}}),this.records.push(l)}toJSON(){return{keys:this.keys,records:this.records}}}function cB(t,s,{getFn:n=he.getFn,fieldNormWeight:l=he.fieldNormWeight}={}){const o=new Jc({getFn:n,fieldNormWeight:l});return o.setKeys(t.map(aB)),o.setSources(s),o.create(),o}function W_(t,{getFn:s=he.getFn,fieldNormWeight:n=he.fieldNormWeight}={}){const{keys:l,records:o}=t,r=new Jc({getFn:s,fieldNormWeight:n});return r.setKeys(l),r.setIndexRecords(o),r}function ko(t,{errors:s=0,currentLocation:n=0,expectedLocation:l=0,distance:o=he.distance,ignoreLocation:r=he.ignoreLocation}={}){const a=s/t.length;if(r)return a;const i=Math.abs(l-n);return o?a+i/o:i?1:a}function Y_(t=[],s=he.minMatchCharLength){let n=[],l=-1,o=-1,r=0;for(let a=t.length;r<a;r+=1){let i=t[r];i&&l===-1?l=r:!i&&l!==-1&&(o=r-1,o-l+1>=s&&n.push([l,o]),l=-1)}return t[r-1]&&r-l>=s&&n.push([l,r-1]),n}const Fn=32;function K_(t,s,n,{location:l=he.location,distance:o=he.distance,threshold:r=he.threshold,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,includeMatches:p=he.includeMatches,ignoreLocation:B=he.ignoreLocation}={}){if(s.length>Fn)throw new Error(O_(Fn));const y=s.length,u=t.length,d=Math.max(0,Math.min(l,u));let f=r,m=d;const g=i>1||p,b=g?Array(u):[];let x;for(;(x=t.indexOf(s,m))>-1;){let D=ko(s,{currentLocation:x,expectedLocation:d,distance:o,ignoreLocation:B});if(f=Math.min(D,f),m=x+y,g){let Y=0;for(;Y<y;)b[x+Y]=1,Y+=1}}m=-1;let v=[],F=1,k=y+u;const w=1<<y-1;for(let D=0;D<y;D+=1){let Y=0,O=k;for(;Y<O;)ko(s,{errors:D,currentLocation:d+O,expectedLocation:d,distance:o,ignoreLocation:B})<=f?Y=O:k=O,O=Math.floor((k-Y)/2+Y);k=O;let I=Math.max(1,d-O+1),Z=a?u:Math.min(d+O,u)+y,q=Array(Z+2);q[Z+1]=(1<<D)-1;for(let de=Z;de>=I;de-=1){let Fe=de-1,Ue=n[t.charAt(Fe)];if(g&&(b[Fe]=+!!Ue),q[de]=(q[de+1]<<1|1)&Ue,D&&(q[de]|=(v[de+1]|v[de])<<1|1|v[de+1]),q[de]&w&&(F=ko(s,{errors:D,currentLocation:Fe,expectedLocation:d,distance:o,ignoreLocation:B}),F<=f)){if(f=F,m=Fe,m<=d)break;I=Math.max(1,2*d-m)}}if(ko(s,{errors:D+1,currentLocation:d,expectedLocation:d,distance:o,ignoreLocation:B})>f)break;v=q}const P={isMatch:m>=0,score:Math.max(.001,F)};if(g){const D=Y_(b,i);D.length?p&&(P.indices=D):P.isMatch=!1}return P}function X_(t){let s={};for(let n=0,l=t.length;n<l;n+=1){const o=t.charAt(n);s[o]=(s[o]||0)|1<<l-n-1}return s}class iB{constructor(s,{location:n=he.location,threshold:l=he.threshold,distance:o=he.distance,includeMatches:r=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,isCaseSensitive:p=he.isCaseSensitive,ignoreLocation:B=he.ignoreLocation}={}){if(this.options={location:n,threshold:l,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:p,ignoreLocation:B},this.pattern=p?s:s.toLowerCase(),this.chunks=[],!this.pattern.length)return;const y=(d,f)=>{this.chunks.push({pattern:d,alphabet:X_(d),startIndex:f})},u=this.pattern.length;if(u>Fn){let d=0;const f=u%Fn,m=u-f;for(;d<m;)y(this.pattern.substr(d,Fn),d),d+=Fn;if(f){const g=u-Fn;y(this.pattern.substr(g),g)}}else y(this.pattern,0)}searchIn(s){const{isCaseSensitive:n,includeMatches:l}=this.options;if(n||(s=s.toLowerCase()),this.pattern===s){let m={isMatch:!0,score:0};return l&&(m.indices=[[0,s.length-1]]),m}const{location:o,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:p,ignoreLocation:B}=this.options;let y=[],u=0,d=!1;this.chunks.forEach(({pattern:m,alphabet:g,startIndex:b})=>{const{isMatch:x,score:v,indices:F}=K_(s,m,g,{location:o+b,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:p,includeMatches:l,ignoreLocation:B});x&&(d=!0),u+=v,x&&F&&(y=[...y,...F])});let f={isMatch:d,score:d?u/this.chunks.length:1};return d&&l&&(f.indices=y),f}}class tn{constructor(s){this.pattern=s}static isMultiMatch(s){return Kp(s,this.multiRegex)}static isSingleMatch(s){return Kp(s,this.singleRegex)}search(){}}function Kp(t,s){const n=t.match(s);return n?n[1]:null}class G_ extends tn{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const n=s===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Z_ extends tn{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const l=s.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,s.length-1]}}}class J_ extends tn{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const n=s.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Q_ extends tn{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const n=!s.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,s.length-1]}}}class e9 extends tn{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const n=s.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class t9 extends tn{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const n=!s.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,s.length-1]}}}class pB extends tn{constructor(s,{location:n=he.location,threshold:l=he.threshold,distance:o=he.distance,includeMatches:r=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:i=he.minMatchCharLength,isCaseSensitive:p=he.isCaseSensitive,ignoreLocation:B=he.ignoreLocation}={}){super(s),this._bitapSearch=new iB(s,{location:n,threshold:l,distance:o,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:p,ignoreLocation:B})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class yB extends tn{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let n=0,l;const o=[],r=this.pattern.length;for(;(l=s.indexOf(this.pattern,n))>-1;)n=l+r,o.push([l,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const lc=[G_,yB,J_,Q_,t9,e9,Z_,pB],Xp=lc.length,s9=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,n9="|";function l9(t,s={}){return t.split(n9).map(n=>{let l=n.trim().split(s9).filter(r=>r&&!!r.trim()),o=[];for(let r=0,a=l.length;r<a;r+=1){const i=l[r];let p=!1,B=-1;for(;!p&&++B<Xp;){const y=lc[B];let u=y.isMultiMatch(i);u&&(o.push(new y(u,s)),p=!0)}if(!p)for(B=-1;++B<Xp;){const y=lc[B];let u=y.isSingleMatch(i);if(u){o.push(new y(u,s));break}}}return o})}const o9=new Set([pB.type,yB.type]);class r9{constructor(s,{isCaseSensitive:n=he.isCaseSensitive,includeMatches:l=he.includeMatches,minMatchCharLength:o=he.minMatchCharLength,ignoreLocation:r=he.ignoreLocation,findAllMatches:a=he.findAllMatches,location:i=he.location,threshold:p=he.threshold,distance:B=he.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:l,minMatchCharLength:o,findAllMatches:a,ignoreLocation:r,location:i,threshold:p,distance:B},this.pattern=n?s:s.toLowerCase(),this.query=l9(this.pattern,this.options)}static condition(s,n){return n.useExtendedSearch}searchIn(s){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:o}=this.options;s=o?s:s.toLowerCase();let r=0,a=[],i=0;for(let p=0,B=n.length;p<B;p+=1){const y=n[p];a.length=0,r=0;for(let u=0,d=y.length;u<d;u+=1){const f=y[u],{isMatch:m,indices:g,score:b}=f.search(s);if(m){if(r+=1,i+=b,l){const x=f.constructor.type;o9.has(x)?a=[...a,...g]:a.push(g)}}else{i=0,r=0,a.length=0;break}}if(r){let u={isMatch:!0,score:i/r};return l&&(u.indices=a),u}}return{isMatch:!1,score:1}}}const oc=[];function a9(...t){oc.push(...t)}function rc(t,s){for(let n=0,l=oc.length;n<l;n+=1){let o=oc[n];if(o.condition(t,s))return new o(t,s)}return new iB(t,s)}const fr={AND:"$and",OR:"$or"},ac={PATH:"$path",PATTERN:"$val"},cc=t=>!!(t[fr.AND]||t[fr.OR]),c9=t=>!!t[ac.PATH],i9=t=>!Ms(t)&&oB(t)&&!cc(t),Gp=t=>({[fr.AND]:Object.keys(t).map(s=>({[s]:t[s]}))});function uB(t,s,{auto:n=!0}={}){const l=o=>{let r=Object.keys(o);const a=c9(o);if(!a&&r.length>1&&!cc(o))return l(Gp(o));if(i9(o)){const p=a?o[ac.PATH]:r[0],B=a?o[ac.PATTERN]:o[p];if(!ds(B))throw new Error(P_(p));const y={keyId:nc(p),pattern:B};return n&&(y.searcher=rc(B,s)),y}let i={children:[],operator:r[0]};return r.forEach(p=>{const B=o[p];Ms(B)&&B.forEach(y=>{i.children.push(l(y))})}),i};return cc(t)||(t=Gp(t)),l(t)}function p9(t,{ignoreFieldNorm:s=he.ignoreFieldNorm}){t.forEach(n=>{let l=1;n.matches.forEach(({key:o,norm:r,score:a})=>{const i=o?o.weight:null;l*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(s?1:r))}),n.score=l})}function y9(t,s){const n=t.matches;s.matches=[],At(n)&&n.forEach(l=>{if(!At(l.indices)||!l.indices.length)return;const{indices:o,value:r}=l;let a={indices:o,value:r};l.key&&(a.key=l.key.src),l.idx>-1&&(a.refIndex=l.idx),s.matches.push(a)})}function u9(t,s){s.score=t.score}function B9(t,s,{includeMatches:n=he.includeMatches,includeScore:l=he.includeScore}={}){const o=[];return n&&o.push(y9),l&&o.push(u9),t.map(r=>{const{idx:a}=r,i={item:s[a],refIndex:a};return o.length&&o.forEach(p=>{p(r,i)}),i})}class ll{constructor(s,n={},l){this.options={...he,...n},this.options.useExtendedSearch,this._keyStore=new I_(this.options.keys),this.setCollection(s,l)}setCollection(s,n){if(this._docs=s,n&&!(n instanceof Jc))throw new Error($_);this._myIndex=n||cB(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){At(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const n=[];for(let l=0,o=this._docs.length;l<o;l+=1){const r=this._docs[l];s(r,l)&&(this.removeAt(l),l-=1,o-=1,n.push(r))}return n}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:n=-1}={}){const{includeMatches:l,includeScore:o,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let p=ds(s)?ds(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return p9(p,{ignoreFieldNorm:i}),r&&p.sort(a),lB(n)&&n>-1&&(p=p.slice(0,n)),B9(p,this._docs,{includeMatches:l,includeScore:o})}_searchStringList(s){const n=rc(s,this.options),{records:l}=this._myIndex,o=[];return l.forEach(({v:r,i:a,n:i})=>{if(!At(r))return;const{isMatch:p,score:B,indices:y}=n.searchIn(r);p&&o.push({item:r,idx:a,matches:[{score:B,value:r,norm:i,indices:y}]})}),o}_searchLogical(s){const n=uB(s,this.options),l=(i,p,B)=>{if(!i.children){const{keyId:u,searcher:d}=i,f=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(p,u),searcher:d});return f&&f.length?[{idx:B,item:p,matches:f}]:[]}const y=[];for(let u=0,d=i.children.length;u<d;u+=1){const f=i.children[u],m=l(f,p,B);if(m.length)y.push(...m);else if(i.operator===fr.AND)return[]}return y},o=this._myIndex.records,r={},a=[];return o.forEach(({$:i,i:p})=>{if(At(i)){let B=l(n,i,p);B.length&&(r[p]||(r[p]={idx:p,item:i,matches:[]},a.push(r[p])),B.forEach(({matches:y})=>{r[p].matches.push(...y)}))}}),a}_searchObjectList(s){const n=rc(s,this.options),{keys:l,records:o}=this._myIndex,r=[];return o.forEach(({$:a,i})=>{if(!At(a))return;let p=[];l.forEach((B,y)=>{p.push(...this._findMatches({key:B,value:a[y],searcher:n}))}),p.length&&r.push({idx:i,item:a,matches:p})}),r}_findMatches({key:s,value:n,searcher:l}){if(!At(n))return[];let o=[];if(Ms(n))n.forEach(({v:r,i:a,n:i})=>{if(!At(r))return;const{isMatch:p,score:B,indices:y}=l.searchIn(r);p&&o.push({score:B,key:s,value:r,idx:a,norm:i,indices:y})});else{const{v:r,n:a}=n,{isMatch:i,score:p,indices:B}=l.searchIn(r);i&&o.push({score:p,key:s,value:r,norm:a,indices:B})}return o}}ll.version="6.6.2";ll.createIndex=cB;ll.parseIndex=W_;ll.config=he;ll.parseQuery=uB;a9(r9);const d9={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},f9=["value","disabled"],m9=["border","onClick"],h9={"w-4":"","text-right":"",op50:"","text-sm":""},F9=De({__name:"Goto",setup(t){$(N);const s=G(),n=G(),l=G(),o=G(),r=G(""),a=G(0);function i(F){return F!=null}const p=A(()=>new ll(Ge.map(F=>{var k;return(k=F.meta)==null?void 0:k.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),B=A(()=>r.value.startsWith("/")?r.value.substring(1):r.value),y=A(()=>p.value.search(B.value).map(F=>F.item)),u=A(()=>!!y.value.length);function d(){if(u.value){const F=y.value.at(a.value||0);F&&Qn(F.no)}f()}function f(){r.value="",Un.value=!1}function m(F){F.preventDefault(),a.value++,a.value>=y.value.length&&(a.value=0),b()}function g(F){F.preventDefault(),a.value--,a.value<=-2&&(a.value=y.value.length-1),b()}function b(){var k;const F=(k=o.value)==null?void 0:k[a.value];F&&l.value&&(F.offsetTop+F.offsetHeight>l.value.offsetHeight+l.value.scrollTop?l.value.scrollTo({behavior:"smooth",top:F.offsetTop+F.offsetHeight-l.value.offsetHeight+1}):F.offsetTop<l.value.scrollTop&&l.value.scrollTo({behavior:"smooth",top:F.offsetTop}))}function x(F){a.value=0,r.value=F.target.value}function v(F){Qn(F),f()}return be(Un,async F=>{var k;F?(r.value="",a.value=0,setTimeout(()=>{var w;return(w=n.value)==null?void 0:w.focus()},0)):(k=n.value)==null||k.blur()}),be(Gs,()=>{var F;(F=s.value)!=null&&F.contains(Gs.value)||f()}),(F,k)=>(E(),le("div",{id:"slidev-goto-dialog",ref_key:"container",ref:s,class:Ke(["fixed right-5 transition-all",M(Un)?"top-5":"-top-20"]),"w-90":""},[e("div",d9,[e("input",{ref_key:"input",ref:n,value:r.value,type:"text",disabled:!M(Un),class:Ke(["outline-none bg-transparent",{"text-red-400":!u.value&&r.value}]),placeholder:"Goto...",onKeydown:[_o(d,["enter"]),_o(f,["escape"]),_o(m,["down"]),_o(g,["up"])],onInput:x},null,42,f9)]),y.value.length>0?(E(),le("ul",{key:0,ref_key:"list",ref:l,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(E(!0),le(Ae,null,tl(y.value,(w,P)=>(E(),le("li",{ref_for:!0,ref_key:"items",ref:o,key:w.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:Ke(a.value===P?"bg-active op100":"op80"),onClick:Pm(D=>v(w.no),["stop"])},[e("div",h9,jt(w.no),1),c(" "+jt(w.title),1)],10,m9))),128))],512)):ge("v-if",!0)],2))}});const g9=H(F9,[["__scopeId","data-v-f5ee02a7"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Goto.vue"]]),_9=De({__name:"Controls",setup(t){$(N);const s=ms(),n=ms();return(l,o)=>(E(),le(Ae,null,[W(g_,{modelValue:M(Bt),"onUpdate:modelValue":o[0]||(o[0]=r=>Te(Bt)?Bt.value=r:null)},null,8,["modelValue"]),W(g9),s.value?(E(),R(M(s),{key:0})):ge("v-if",!0),n.value?(E(),R(M(n),{key:1,modelValue:M(la),"onUpdate:modelValue":o[1]||(o[1]=r=>Te(la)?la.value=r:null)},null,8,["modelValue"])):ge("v-if",!0),M(Me).info?(E(),R(S_,{key:2,modelValue:M(Tl),"onUpdate:modelValue":o[2]||(o[2]=r=>Te(Tl)?Tl.value=r:null)},null,8,["modelValue"])):ge("v-if",!0)],64))}}),b9=H(_9,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Controls.vue"]]),v9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function x9(t,s){return E(),le("svg",v9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"},null,-1)]))}const w9={name:"carbon-settings-adjust",render:x9},E9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function k9(t,s){return E(),le("svg",E9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8"},null,-1),e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1)]))}const S9={name:"carbon-information",render:k9},D9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function C9(t,s){return E(),le("svg",D9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"},null,-1)]))}const A9={name:"carbon-download",render:C9},M9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function T9(t,s){return E(),le("svg",M9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A3 3 0 0 0 28 16a3 3 0 1 0-3 3a3 3 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.01 7.01 0 0 0-7-7H9a7.01 7.01 0 0 0-7 7v5h28v-9.586A2 2 0 0 0 29.415 19M4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"},null,-1)]))}const $9={name:"carbon-user-speaker",render:T9},P9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function O9(t,s){return E(),le("svg",P9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H7V6h18Z"},null,-1)]))}const R9={name:"carbon-presentation-file",render:O9},L9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function I9(t,s){return E(),le("svg",L9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1)]))}const N9={name:"carbon-pen",render:I9},H9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function j9(t,s){return E(),le("svg",H9,s[0]||(s[0]=[e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0l-51.31-51.31a8 8 0 0 0-13 2.46l-17.82 46.41a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85l-46.41 17.82a8 8 0 0 0-2.46 13l51.31 51.31a8 8 0 0 1 0 11.34",opacity:".2"}),e("path",{d:"M168 132.69L214.08 115l.33-.13a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l.13-.33L132.69 168L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63ZM195.31 208L144 156.69a16 16 0 0 0-26 4.93c0 .11-.09.22-.13.32l-17.65 46L48 48l159.85 52.2l-45.95 17.64l-.32.13a16 16 0 0 0-4.93 26L208 195.31Z"})],-1)]))}const q9={name:"ph-cursor-duotone",render:j9},U9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function V9(t,s){return E(),le("svg",U9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"m220.49 207.8l-12.69 12.69a12 12 0 0 1-17 0l-56.57-56.57L115 214.08l-.13.33a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.33.13l-50.16 19.27l56.57 56.56a12 12 0 0 1 0 16.97"},null,-1)]))}const BB={name:"ph-cursor-fill",render:V9},z9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function W9(t,s){return E(),le("svg",z9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1)]))}const Y9={name:"carbon-sun",render:W9},K9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function X9(t,s){return E(),le("svg",K9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"},null,-1)]))}const G9={name:"carbon-moon",render:X9},Z9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function J9(t,s){return E(),le("svg",Z9,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1)]))}const Q9={name:"carbon-apps",render:J9},e3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function t3(t,s){return E(),le("svg",e3,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"},null,-1)]))}const s3={name:"carbon-arrow-right",render:t3},n3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function l3(t,s){return E(),le("svg",n3,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16z"},null,-1)]))}const o3={name:"carbon-arrow-left",render:l3},r3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function a3(t,s){return E(),le("svg",r3,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414z"},null,-1)]))}const c3={name:"carbon-maximize",render:a3},i3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function p3(t,s){return E(),le("svg",i3,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586z"},null,-1)]))}const y3={name:"carbon-minimize",render:p3},u3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function B3(t,s){return E(),le("svg",u3,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"},null,-1)]))}const d3={name:"carbon-checkmark",render:B3},f3={class:"select-list"},m3={class:"title"},h3={class:"items"},F3=["onClick"],g3=De({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:s}){$(N);const o=us(t,"modelValue",s,{passive:!0});return(r,a)=>{const i=d3;return E(),le("div",f3,[e("div",m3,jt(t.title),1),e("div",h3,[(E(!0),le(Ae,null,tl(t.items,p=>(E(),le("div",{key:p.value,class:Ke(["item",{active:M(o)===p.value}]),onClick:()=>{var B;o.value=p.value,(B=p.onClick)==null||B.call(p)}},[W(i,{class:Ke(["text-green-500",{"opacity-0":M(o)!==p.value}])},null,8,["class"]),c(" "+jt(p.display||p.value),1)],10,F3))),128))])])}}});const _3=H(g3,[["__scopeId","data-v-3f89fa11"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SelectList.vue"]]),b3={class:"text-sm"},v3=De({__name:"Settings",setup(t){$(N);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,l)=>(E(),le("div",b3,[W(_3,{modelValue:M(Io),"onUpdate:modelValue":l[0]||(l[0]=o=>Te(Io)?Io.value=o:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),x3=H(v3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Settings.vue"]]),w3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},E3=De({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:s}){$(N);const o=us(t,"modelValue",s,{passive:!0}),r=G();return BF(r,()=>{o.value=!1}),(a,i)=>(E(),le("div",{ref_key:"el",ref:r,class:"flex relative"},[e("button",{class:Ke({disabled:t.disabled}),onClick:i[0]||(i[0]=p=>o.value=!M(o))},[es(a.$slots,"button",{class:Ke({disabled:t.disabled})})],2),(E(),R(xy,null,[M(o)?(E(),le("div",w3,[es(a.$slots,"menu")])):ge("v-if",!0)],1024))],512))}}),k3=H(E3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/MenuButton.vue"]]),S3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},D3={__name:"VerticalDivider",setup(t){return $(N),(s,n)=>(E(),le("div",S3))}},So=H(D3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),C3={render(){return[]}},A3={class:"slidev-icon-btn"},M3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},T3={class:"my-auto"},$3={class:"opacity-50"},P3=De({__name:"NavControls",props:{persist:{default:!1}},setup(t){$(N);const s=t,n=Za.smaller("md"),{isFullscreen:l,toggle:o}=Yu,r=A(()=>pc.value?`?password=${pc.value}`:""),a=A(()=>`/presenter/${Xe.value}${r.value}`),i=A(()=>`/${Xe.value}${r.value}`),p=G();function B(){p.value&&Gs.value&&p.value.contains(Gs.value)&&Gs.value.blur()}const y=A(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),u=ms(),d=ms();return Xs(()=>import("./DrawingControls-43be2e0a.js"),[]).then(f=>d.value=f.default),(f,m)=>{const g=y3,b=c3,x=o3,v=s3,F=Q9,k=G9,w=Y9,P=BB,D=q9,Y=N9,O=R9,I=ql("RouterLink"),Z=$9,q=A9,Be=S9,de=w9;return E(),le("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ke(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",y.value]),onMouseleave:B},[M(xs)?ge("v-if",!0):(E(),le("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...Fe)=>M(o)&&M(o)(...Fe))},[M(l)?(E(),R(g,{key:0})):(E(),R(b,{key:1}))])),e("button",{class:Ke(["slidev-icon-btn",{disabled:!M(V4)}]),onClick:m[1]||(m[1]=(...Fe)=>M(Js)&&M(Js)(...Fe))},[W(x)],2),e("button",{class:Ke(["slidev-icon-btn",{disabled:!M(U4)}]),title:"Next",onClick:m[2]||(m[2]=(...Fe)=>M(Zs)&&M(Zs)(...Fe))},[W(v)],2),M(xs)?ge("v-if",!0):(E(),le("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Fe=>M(Ku)())},[W(F)])),M(sc)?ge("v-if",!0):(E(),le("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Fe=>M(eB)())},[M(Kc)?(E(),R(k,{key:0})):(E(),R(w,{key:1}))])),W(So),M(xs)?ge("v-if",!0):(E(),le(Ae,{key:3},[!M(vt)&&!M(n)&&u.value?(E(),le(Ae,{key:0},[W(M(u)),W(So)],64)):ge("v-if",!0),M(vt)?(E(),le("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Fe=>oa.value=!M(oa))},[M(oa)?(E(),R(P,{key:0})):(E(),R(D,{key:1,class:"opacity-50"}))])):ge("v-if",!0)],64)),(!M(Me).drawings.presenterOnly||M(vt))&&!M(xs)?(E(),le(Ae,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Fe=>Bs.value=!M(Bs))},[W(Y),M(Bs)?(E(),le("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:wt({background:M(bn).color})},null,4)):ge("v-if",!0)]),W(So)],64)):ge("v-if",!0),M(xs)?ge("v-if",!0):(E(),le(Ae,{key:5},[M(vt)?(E(),R(I,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:T(()=>[W(O)]),_:1},8,["to"])):ge("v-if",!0),M(I4)?(E(),R(I,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:T(()=>[W(Z)]),_:1},8,["to"])):ge("v-if",!0),ge("v-if",!0)],64)),(E(),le(Ae,{key:6},[M(Me).download?(E(),le("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...Fe)=>M(yc)&&M(yc)(...Fe))},[W(q)])):ge("v-if",!0)],64)),!M(vt)&&M(Me).info&&!M(xs)?(E(),le("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=Fe=>Tl.value=!M(Tl))},[W(Be)])):ge("v-if",!0),!M(vt)&&!M(xs)?(E(),R(k3,{key:8},{button:T(()=>[e("button",A3,[W(de)])]),menu:T(()=>[W(x3)]),_:1})):ge("v-if",!0),M(xs)?ge("v-if",!0):(E(),R(So,{key:9})),e("div",M3,[e("div",T3,[c(jt(M(Xe))+" ",1),e("span",$3,"/ "+jt(M(N4)),1)])]),W(M(C3))],34)],512)}}}),O3=H(P3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/NavControls.vue"]]),dB={render(){return[]}},fB={render(){return[]}},R3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},L3=De({__name:"PresenterMouse",setup(t){return $(N),(s,n)=>{const l=BB;return M(ea).cursor?(E(),le("div",R3,[W(l,{class:"absolute",style:wt({left:`${M(ea).cursor.x}%`,top:`${M(ea).cursor.y}%`})},null,8,["style"])])):ge("v-if",!0)}}}),I3=H(L3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),N3=De({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){$(N),be(ft,()=>{var l,o;(l=ft.value)!=null&&l.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(o=ia.value)!=null&&o.meta&&ia.value.meta.preload!==!1&&(ia.value.meta.__preloaded=!0)},{immediate:!0});const s=ms();Xs(()=>import("./DrawingLayer-70f7f122.js"),[]).then(l=>s.value=l.default);const n=A(()=>Ge.filter(l=>{var o;return((o=l.meta)==null?void 0:o.__preloaded)||l===ft.value}));return(l,o)=>(E(),le(Ae,null,[ge(" Global Bottom "),W(M(fB)),ge(" Slides "),W(Sm,we(M(Y4),{id:"slideshow",tag:"div"}),{default:T(()=>[(E(!0),le(Ae,null,tl(n.value,r=>{var a;return hy((E(),R(M(Zc),{key:r.path,is:r==null?void 0:r.component,clicks:r===M(ft)?M(Ht):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Ke(M(Gc)(r)),route:r,context:l.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[qc,r===M(ft)]])}),128))]),_:1},16),ge(" Global Top "),W(M(dB)),s.value?(E(),R(M(s),{key:0})):ge("v-if",!0),M(vt)?ge("v-if",!0):(E(),R(I3,{key:1}))],64))}});const H3=H(N3,[["__scopeId","data-v-afb4231e"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/SlidesShow.vue"]]),j3=De({__name:"PrintStyle",setup(t){$(N);function s(n,{slots:l}){if(l.default)return Tt("style",l.default())}return(n,l)=>(E(),R(s,null,{default:T(()=>[c(" @page { size: "+jt(M(Ks))+"px "+jt(M(Uc))+"px; margin: 0px; } ",1)]),_:1}))}}),mB=H(j3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintStyle.vue"]]),q3=De({__name:"Play",setup(t){$(N),c_();const s=G();function n(r){var a;Pp.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Zs():Js())}K4(s);const l=A(()=>hg.value||Pp.value);ms();const o=ms();return Xs(()=>import("./DrawingControls-43be2e0a.js"),[]).then(r=>o.value=r.default),(r,a)=>(E(),le(Ae,null,[M(Jn)?(E(),R(mB,{key:0})):ge("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:wt(M(Vc))},[W(sB,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:M(Jn)?M(An).width.value:void 0,scale:M(Io),onPointerdown:n},{default:T(()=>[W(H3,{context:"slide"})]),controls:T(()=>[e("div",{class:Ke(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[l.value?"opacity-100 right-0":"opacity-0 p-2",M(Yl)?"pointer-events-none":""]])},[W(O3,{class:"m-auto",persist:l.value},null,8,["persist"])],2),!M(Me).drawings.presenterOnly&&!M(xs)&&o.value?(E(),R(M(o),{key:0,class:"ml-0"})):ge("v-if",!0)]),_:1},8,["width","scale"]),ge("v-if",!0)],4),W(b9)],64))}}),U3=H(q3,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hB(t){return typeof t>"u"||t===null}function V3(t){return typeof t=="object"&&t!==null}function z3(t){return Array.isArray(t)?t:hB(t)?[]:[t]}function W3(t,s){var n,l,o,r;if(s)for(r=Object.keys(s),n=0,l=r.length;n<l;n+=1)o=r[n],t[o]=s[o];return t}function Y3(t,s){var n="",l;for(l=0;l<s;l+=1)n+=t;return n}function K3(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var X3=hB,G3=V3,Z3=z3,J3=Y3,Q3=K3,eb=W3,Qc={isNothing:X3,isObject:G3,toArray:Z3,repeat:J3,isNegativeZero:Q3,extend:eb};function FB(t,s){var n="",l=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!s&&t.mark.snippet&&(n+=`

`+t.mark.snippet),l+" "+n):l}function Xl(t,s){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=s,this.message=FB(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Xl.prototype=Object.create(Error.prototype);Xl.prototype.constructor=Xl;Xl.prototype.toString=function(s){return this.name+": "+FB(this,s)};var gn=Xl,tb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],sb=["scalar","sequence","mapping"];function nb(t){var s={};return t!==null&&Object.keys(t).forEach(function(n){t[n].forEach(function(l){s[String(l)]=n})}),s}function lb(t,s){if(s=s||{},Object.keys(s).forEach(function(n){if(tb.indexOf(n)===-1)throw new gn('Unknown option "'+n+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(n){return n},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=nb(s.styleAliases||null),sb.indexOf(this.kind)===-1)throw new gn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var pt=lb;function Zp(t,s){var n=[];return t[s].forEach(function(l){var o=n.length;n.forEach(function(r,a){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(o=a)}),n[o]=l}),n}function ob(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,n;function l(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(s=0,n=arguments.length;s<n;s+=1)arguments[s].forEach(l);return t}function ic(t){return this.extend(t)}ic.prototype.extend=function(s){var n=[],l=[];if(s instanceof pt)l.push(s);else if(Array.isArray(s))l=l.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(n=n.concat(s.implicit)),s.explicit&&(l=l.concat(s.explicit));else throw new gn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof pt))throw new gn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new gn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new gn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof pt))throw new gn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ic.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(l),o.compiledImplicit=Zp(o,"implicit"),o.compiledExplicit=Zp(o,"explicit"),o.compiledTypeMap=ob(o.compiledImplicit,o.compiledExplicit),o};var rb=ic,ab=new pt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),cb=new pt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),ib=new pt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),pb=new rb({explicit:[ab,cb,ib]});function yb(t){if(t===null)return!0;var s=t.length;return s===1&&t==="~"||s===4&&(t==="null"||t==="Null"||t==="NULL")}function ub(){return null}function Bb(t){return t===null}var db=new pt("tag:yaml.org,2002:null",{kind:"scalar",resolve:yb,construct:ub,predicate:Bb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function fb(t){if(t===null)return!1;var s=t.length;return s===4&&(t==="true"||t==="True"||t==="TRUE")||s===5&&(t==="false"||t==="False"||t==="FALSE")}function mb(t){return t==="true"||t==="True"||t==="TRUE"}function hb(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var Fb=new pt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:fb,construct:mb,predicate:hb,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function gb(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function _b(t){return 48<=t&&t<=55}function bb(t){return 48<=t&&t<=57}function vb(t){if(t===null)return!1;var s=t.length,n=0,l=!1,o;if(!s)return!1;if(o=t[n],(o==="-"||o==="+")&&(o=t[++n]),o==="0"){if(n+1===s)return!0;if(o=t[++n],o==="b"){for(n++;n<s;n++)if(o=t[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;l=!0}return l&&o!=="_"}if(o==="x"){for(n++;n<s;n++)if(o=t[n],o!=="_"){if(!gb(t.charCodeAt(n)))return!1;l=!0}return l&&o!=="_"}if(o==="o"){for(n++;n<s;n++)if(o=t[n],o!=="_"){if(!_b(t.charCodeAt(n)))return!1;l=!0}return l&&o!=="_"}}if(o==="_")return!1;for(;n<s;n++)if(o=t[n],o!=="_"){if(!bb(t.charCodeAt(n)))return!1;l=!0}return!(!l||o==="_")}function xb(t){var s=t,n=1,l;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),l=s[0],(l==="-"||l==="+")&&(l==="-"&&(n=-1),s=s.slice(1),l=s[0]),s==="0")return 0;if(l==="0"){if(s[1]==="b")return n*parseInt(s.slice(2),2);if(s[1]==="x")return n*parseInt(s.slice(2),16);if(s[1]==="o")return n*parseInt(s.slice(2),8)}return n*parseInt(s,10)}function wb(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Qc.isNegativeZero(t)}var Eb=new pt("tag:yaml.org,2002:int",{kind:"scalar",resolve:vb,construct:xb,predicate:wb,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),kb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Sb(t){return!(t===null||!kb.test(t)||t[t.length-1]==="_")}function Db(t){var s,n;return s=t.replace(/_/g,"").toLowerCase(),n=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:n*parseFloat(s,10)}var Cb=/^[-+]?[0-9]+e/;function Ab(t,s){var n;if(isNaN(t))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Qc.isNegativeZero(t))return"-0.0";return n=t.toString(10),Cb.test(n)?n.replace("e",".e"):n}function Mb(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Qc.isNegativeZero(t))}var Tb=new pt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Sb,construct:Db,predicate:Mb,represent:Ab,defaultStyle:"lowercase"}),$b=pb.extend({implicit:[db,Fb,Eb,Tb]}),Pb=$b,gB=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_B=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ob(t){return t===null?!1:gB.exec(t)!==null||_B.exec(t)!==null}function Rb(t){var s,n,l,o,r,a,i,p=0,B=null,y,u,d;if(s=gB.exec(t),s===null&&(s=_B.exec(t)),s===null)throw new Error("Date resolve error");if(n=+s[1],l=+s[2]-1,o=+s[3],!s[4])return new Date(Date.UTC(n,l,o));if(r=+s[4],a=+s[5],i=+s[6],s[7]){for(p=s[7].slice(0,3);p.length<3;)p+="0";p=+p}return s[9]&&(y=+s[10],u=+(s[11]||0),B=(y*60+u)*6e4,s[9]==="-"&&(B=-B)),d=new Date(Date.UTC(n,l,o,r,a,i,p)),B&&d.setTime(d.getTime()-B),d}function Lb(t){return t.toISOString()}var Ib=new pt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ob,construct:Rb,instanceOf:Date,represent:Lb});function Nb(t){return t==="<<"||t===null}var Hb=new pt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Nb}),ei=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function jb(t){if(t===null)return!1;var s,n,l=0,o=t.length,r=ei;for(n=0;n<o;n++)if(s=r.indexOf(t.charAt(n)),!(s>64)){if(s<0)return!1;l+=6}return l%8===0}function qb(t){var s,n,l=t.replace(/[\r\n=]/g,""),o=l.length,r=ei,a=0,i=[];for(s=0;s<o;s++)s%4===0&&s&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(l.charAt(s));return n=o%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function Ub(t){var s="",n=0,l,o,r=t.length,a=ei;for(l=0;l<r;l++)l%3===0&&l&&(s+=a[n>>18&63],s+=a[n>>12&63],s+=a[n>>6&63],s+=a[n&63]),n=(n<<8)+t[l];return o=r%3,o===0?(s+=a[n>>18&63],s+=a[n>>12&63],s+=a[n>>6&63],s+=a[n&63]):o===2?(s+=a[n>>10&63],s+=a[n>>4&63],s+=a[n<<2&63],s+=a[64]):o===1&&(s+=a[n>>2&63],s+=a[n<<4&63],s+=a[64],s+=a[64]),s}function Vb(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var zb=new pt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:jb,construct:qb,predicate:Vb,represent:Ub}),Wb=Object.prototype.hasOwnProperty,Yb=Object.prototype.toString;function Kb(t){if(t===null)return!0;var s=[],n,l,o,r,a,i=t;for(n=0,l=i.length;n<l;n+=1){if(o=i[n],a=!1,Yb.call(o)!=="[object Object]")return!1;for(r in o)if(Wb.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(s.indexOf(r)===-1)s.push(r);else return!1}return!0}function Xb(t){return t!==null?t:[]}var Gb=new pt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Kb,construct:Xb}),Zb=Object.prototype.toString;function Jb(t){if(t===null)return!0;var s,n,l,o,r,a=t;for(r=new Array(a.length),s=0,n=a.length;s<n;s+=1){if(l=a[s],Zb.call(l)!=="[object Object]"||(o=Object.keys(l),o.length!==1))return!1;r[s]=[o[0],l[o[0]]]}return!0}function Qb(t){if(t===null)return[];var s,n,l,o,r,a=t;for(r=new Array(a.length),s=0,n=a.length;s<n;s+=1)l=a[s],o=Object.keys(l),r[s]=[o[0],l[o[0]]];return r}var ev=new pt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Jb,construct:Qb}),tv=Object.prototype.hasOwnProperty;function sv(t){if(t===null)return!0;var s,n=t;for(s in n)if(tv.call(n,s)&&n[s]!==null)return!1;return!0}function nv(t){return t!==null?t:{}}var lv=new pt("tag:yaml.org,2002:set",{kind:"mapping",resolve:sv,construct:nv});Pb.extend({implicit:[Ib,Hb],explicit:[zb,Gb,ev,lv]});function Jp(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var ov=new Array(256),rv=new Array(256);for(var jn=0;jn<256;jn++)ov[jn]=Jp(jn)?1:0,rv[jn]=Jp(jn);function av(t){return Array.from(new Set(t))}function Qp(...t){let s,n,l;t.length===1?(s=0,l=1,[n]=t):[s,n,l=1]=t;const o=[];let r=s;for(;r<n;)o.push(r),r+=l||1;return o}function bB(t,s){if(!s||s==="all"||s==="*")return Qp(1,t+1);const n=[];for(const l of s.split(/[,;]/g))if(!l.includes("-"))n.push(+l);else{const[o,r]=l.split("-",2);n.push(...Qp(+o,r?+r+1:t+1))}return av(n).filter(l=>l<=t).sort((l,o)=>l-o)}function vB(t){const s=A(()=>t.value.path),n=A(()=>Ge.length-1),l=A(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),o=A(()=>$r(l.value)),r=A(()=>Ge.find(d=>d.path===`${l.value}`)),a=A(()=>{var d,f,m;return(m=(f=(d=r.value)==null?void 0:d.meta)==null?void 0:f.slide)==null?void 0:m.id}),i=A(()=>{var d,f;return((f=(d=r.value)==null?void 0:d.meta)==null?void 0:f.layout)||(l.value===1?"cover":"default")}),p=A(()=>Ge.find(d=>d.path===`${Math.min(Ge.length,l.value+1)}`)),B=A(()=>Ge.filter(d=>{var f,m;return(m=(f=d.meta)==null?void 0:f.slide)==null?void 0:m.title}).reduce((d,f)=>(ti(d,f),d),[])),y=A(()=>si(B.value,r.value)),u=A(()=>ni(y.value));return{route:t,path:s,total:n,currentPage:l,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:p,rawTree:B,treeWithActiveStatuses:y,tree:u,downloadPDF:yc,next:Zs,nextSlide:Gl,openInEditor:X4,prev:Js,prevSlide:Zl}}function xB(t,s,n){const l=G(0);nt(()=>{xt.afterEach(async()=>{await nt(),l.value+=1})});const o=A(()=>{var p,B;return l.value,((B=(p=s.value)==null?void 0:p.meta)==null?void 0:B.__clicksElements)||[]}),r=A(()=>{var p,B;return+(((B=(p=s.value)==null?void 0:p.meta)==null?void 0:B.clicks)??o.value.length)}),a=A(()=>n.value<Ge.length-1||t.value<r.value),i=A(()=>n.value>1||t.value>0);return{clicks:t,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:i}}const cv=["id"],iv=De({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:Object,required:!0},route:{type:Object,required:!0}},emits:["update:clicksElements"],setup(t,{emit:s}){const n=t,o=us(n,"clicksElements",s),r=A(()=>({height:`${Uc}px`,width:`${Ks}px`})),a=ms();Xs(()=>Promise.resolve().then(()=>f_),void 0).then(y=>a.value=y.default);const i=A(()=>n.clicks),p=xB(i,n.nav.currentRoute,n.nav.currentPage),B=A(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return Ct(N,Ye({nav:{...n.nav,...p},configs:Me,themeConfigs:A(()=>Me.themeConfig)})),(y,u)=>{var d;return E(),le("div",{id:B.value,class:"print-slide-container",style:wt(r.value)},[W(M(fB)),W(M(Zc),{is:(d=y.route)==null?void 0:d.component,"clicks-elements":M(o),"onUpdate:clicksElements":u[0]||(u[0]=f=>Te(o)?o.value=f:null),clicks:i.value,"clicks-disabled":!1,class:Ke(M(Gc)(y.route)),route:y.route},null,8,["is","clicks-elements","clicks","class","route"]),a.value?(E(),R(M(a),{key:0,page:+y.route.path},null,8,["page"])):ge("v-if",!0),W(M(dB))],12,cv)}}}),e2=H(iv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),pv=De({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(t){var r;$(N);const s=t,n=G(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),l=A(()=>s.route),o=vB(l);return(a,i)=>(E(),le(Ae,null,[W(e2,{"clicks-elements":n.value,"onUpdate:clicksElements":i[0]||(i[0]=p=>n.value=p),clicks:0,nav:M(o),route:l.value},null,8,["clicks-elements","nav","route"]),M($l)?ge("v-if",!0):(E(!0),le(Ae,{key:0},tl(n.value.length,p=>(E(),R(e2,{key:p,clicks:p,nav:M(o),route:l.value},null,8,["clicks","nav","route"]))),128))],64))}}),yv=H(pv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintSlide.vue"]]),uv={id:"print-content"},Bv=De({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){$(N);const s=t,n=A(()=>s.width),l=A(()=>s.width/Ys),o=A(()=>n.value/l.value),r=A(()=>o.value<Ys?n.value/Ks:l.value*Ys/Ks);let a=Ge.slice(0,-1);Ut.value.query.range&&(a=bB(a.length,Ut.value.query.range).map(B=>a[B-1]));const i=A(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return Ct(fu,r),(p,B)=>(E(),le("div",{id:"print-container",class:Ke(i.value)},[e("div",uv,[(E(!0),le(Ae,null,tl(M(a),y=>(E(),R(yv,{key:y.path,route:y},null,8,["route"]))),128))]),es(p.$slots,"controls")],2))}});const dv=H(Bv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PrintContainer.vue"]]),fv=De({__name:"Print",setup(t){return $(N),$n(()=>{Jn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,n)=>(E(),le(Ae,null,[M(Jn)?(E(),R(mB,{key:0})):ge("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:wt(M(Vc))},[W(dv,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:M(An).width.value},null,8,["width"])],4)],64))}});const mv=H(fv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/Print.vue"]]);const hv={class:"slidev-layout end"},Fv={__name:"end",setup(t){return $(N),(s,n)=>(E(),le("div",hv,[es(s.$slots,"default",{},()=>[n[0]||(n[0]=c("END"))],!0)]))}},gv=H(Fv,[["__scopeId","data-v-e532b98d"],["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/layouts/end.vue"]]),_v={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function bv(t,s){return E(),le("svg",_v,s[0]||(s[0]=[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"},null,-1)]))}const vv={name:"carbon-logo-github",render:bv},xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function wv(t,s){return E(),le("svg",xv,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"},null,-1),e("path",{fill:"currentColor",d:"M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"},null,-1)]))}const Ev={name:"carbon-application-web",render:wv};function kv(t){return t.startsWith("/")?"/math201/slides/matplotlib"+t.slice(1):t}const Sv={key:0},Dv=["src"],Cv=De({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(t){$(N);const s=t,n=A(()=>kv(s.logoHeader));return(l,o)=>t.logoHeader?(E(),le("header",Sv,[e("img",{src:n.value,width:"60",height:"60",class:"object-contain"},null,8,Dv)])):ge("v-if",!0)}}),Av=H(Cv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/components/LayoutHeader.vue"]]),Mv={key:0,class:"mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"},Tv={key:0,class:"mb-0"},$v={key:1,class:"mb-0"},Pv=De({__name:"LayoutFooter",props:{website:{type:String},handle:{type:String}},setup(t){return $(N),(s,n)=>t.website||t.handle?(E(),le("footer",Mv,[t.website?(E(),le("p",Tv,jt(t.website),1)):ge("v-if",!0),t.handle?(E(),le("p",$v,"@"+jt(t.handle),1)):ge("v-if",!0)])):ge("v-if",!0)}}),Ov=H(Pv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/components/LayoutFooter.vue"]]),Rv={class:"bg-main slidev-layout"},Lv={class:"my-auto"},Iv=De({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(t){return $(N),(s,n)=>(E(),le("div",Rv,[W(Av,{logoHeader:t.logoHeader},null,8,["logoHeader"]),e("div",Lv,[es(s.$slots,"default")]),W(Ov,{website:t.website,handle:t.handle},null,8,["website","handle"])]))}}),re=H(Iv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/default.vue"]]),Nv=De({__name:"cover",setup(t){return $(N),(s,n)=>(E(),R(re,{class:"cover"},{default:T(()=>[es(s.$slots,"default")]),_:3}))}}),Hv=H(Nv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/cover.vue"]]),jv={class:"abs-br m-6 flex gap-2"},qv={href:"https://suepaper.github.io/math201/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Uv={href:"https://github.com/SUEPaper/math201-lecture/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Vv={__name:"1",setup(t){const s={theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss"};return $(N),(n,l)=>{const o=Ev,r=vv;return E(),R(Hv,ee(Q(s)),{default:T(()=>[l[0]||(l[0]=e("h1",null,"Matplotlib 基础",-1)),l[1]||(l[1]=e("h2",null,"上海电力大学",-1)),l[2]||(l[2]=e("p",null,"数理学院数学系",-1)),l[3]||(l[3]=e("h4",null,"邓化宇",-1)),e("div",jv,[e("a",qv,[W(o)]),e("a",Uv,[W(r)])])]),_:1},16)}}},zv=H(Vv,[["__file","/@slidev/slides/1.md"]]),Wv={class:"flex flex-col items-center justify-center text-center"},Yv=De({__name:"center",setup(t){return $(N),(s,n)=>(E(),R(re,{class:"center"},{default:T(()=>[e("div",Wv,[es(s.$slots,"default")])]),_:3}))}}),sn=H(Yv,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/slidev-theme-unicorn/layouts/center.vue"]]),Kv={__name:"2",setup(t){const s={layout:"center",srcSequence:"./pages/what.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"什么是Matplotlib?",-1)])),_:1},16))}},Xv=H(Kv,[["__file","/@slidev/slides/2.md"]]),Gv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function Zv(t,s){return E(),le("svg",Gv,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"},null,-1)]))}const Jv={name:"ph-clipboard",render:Zv},Qv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function e8(t,s){return E(),le("svg",Qv,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"},null,-1)]))}const t8={name:"ph-check-circle",render:e8},s8=["title"],n8=De({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){$(N);const s=t,n=$(Dl),l=$(mn),o=$(Cl);function r(u=5){const d=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=f.length;for(let g=0;g<u;g++)d.push(f.charAt(Math.floor(Math.random()*m)));return d.join("")}const a=G(),i=Vt();en(()=>{const u=s.at==null?l==null?void 0:l.value.length:s.at,d=A(()=>o!=null&&o.value?s.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(u||0)),s.ranges.length-1)),f=A(()=>s.ranges[d.value]||"");if(s.ranges.length>=2&&!(o!=null&&o.value)){const m=r(),g=Ih(s.ranges.length-1).map(b=>m+b);l!=null&&l.value&&(l.value.push(...g),Dr(()=>g.forEach(b=>Ua(l.value,b)),i))}$n(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of g){const x=Array.from(b.querySelectorAll(".line")),v=bB(x.length,f.value);if(x.forEach((F,k)=>{const w=v.includes(k+1);F.classList.toggle(un,!0),F.classList.toggle("highlighted",w),F.classList.toggle("dishonored",!w)}),s.maxHeight){const F=Array.from(b.querySelectorAll(".line.highlighted"));F.reduce((w,P)=>P.offsetHeight+w,0)>a.value.offsetHeight?F[0].scrollIntoView({behavior:"smooth",block:"start"}):F.length>0&&F[Math.round((F.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:B}=vF();function y(){var d,f;const u=(f=(d=a.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:f.textContent;u&&B(u)}return(u,d)=>{const f=t8,m=Jv;return E(),le("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:wt({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[es(u.$slots,"default"),M(Me).codeCopy?(E(),le("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:M(p)?"Copied":"Copy",onClick:d[0]||(d[0]=g=>y())},[M(p)?(E(),R(f,{key:0,class:"p-2 w-8 h-8"})):(E(),R(m,{key:1,class:"p-2 w-8 h-8"}))],8,s8)):ge("v-if",!0)],4)}}}),Pe=H(n8,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),l8={__name:"3",setup(t){const s={transition:"fade-out",srcSequence:"./pages/what.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"什么是Matplotlib?",-1)),l[2]||(l[2]=e("p",null,"Matplotlib是建立在NumPy数组基础上的多平台数据可视化程序库，最初被设计用于完善SciPy的生态环境。Matplotlib最重要的特性之一就是具有良好的操作系统兼容性和图形显示底层接口兼容性(graphics backend)。Matplotlib支持几十种图形显示接口与输出格式，这使得用户无论在哪种操作系统上都可以输出自己想要的图形格式。这种跨平台、面面俱到的特点已经成为Matplotlib最强大的功能之一，Matplotlib也因此吸引了大量用户，进而形成了一个活跃的开发者团队，晋升为Python科学领域不可或缺的强大武器。",-1)),l[3]||(l[3]=e("h2",null,"安装",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"pip "),e("span",{style:{color:"#9DB1C5"}},"install"),e("span",{style:{color:"#B392F0"}}," "),e("span",{style:{color:"#9DB1C5"}},"matplotlib")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"pip"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#2B5581"}},"install"),e("span",{style:{color:"#24292EFF"}}," "),e("span",{style:{color:"#2B5581"}},"matplotlib")])])])],-1)])),_:1},16)]),_:1},16)}}},o8=H(l8,[["__file","/@slidev/slides/3.md"]]),r8={__name:"4",setup(t){const s={srcSequence:"./pages/what.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[3]||(l[3]=e("h1",null,"语法",-1)),l[4]||(l[4]=e("p",null,"基本语法",-1)),l[5]||(l[5]=e("p",null,"画x和y, 默认是线图",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plot"),e("span",{style:{color:"#BBBBBB"}},"(x,y)")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"plot"),e("span",{style:{color:"#212121"}},"(x,y)")])])])],-1)])),_:1},16),l[6]||(l[6]=e("p",null,"用于设置图像的名字",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[1]||(l[1]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"title"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"title"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16),l[7]||(l[7]=e("p",null,"用于设置X,Y轴的标签",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[2]||(l[2]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"xlabel"),e("span",{style:{color:"#BBBBBB"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"plt"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"ylabel"),e("span",{style:{color:"#BBBBBB"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"xlabel"),e("span",{style:{color:"#212121"}},"()")]),c(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"ylabel"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},a8=H(r8,[["__file","/@slidev/slides/4.md"]]),c8={class:"overflow-auto h-xs"},i8={__name:"5",setup(t){const s={srcSequence:"./pages/what.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"具体案例",-1)),l[2]||(l[2]=e("p",null,"在同一窗口绘制如下2条曲线，并加标注。",-1)),l[3]||(l[3]=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"y"),e("mn",null,"1")]),e("mo",null,"="),e("mn",null,"2"),e("mi",null,"s"),e("mi",null,"i"),e("mi",null,"n"),e("mi",null,"x"),e("mo",{separator:"true"},","),e("msub",null,[e("mi",null,"y"),e("mn",null,"2")]),e("mo",null,"="),e("mn",null,"2"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("msup",null,[e("mi",null,"x"),e("mn",null,"2")]),e("mo",{stretchy:"false"},")"),e("mo",{separator:"true"},","),e("mi",null,"x"),e("mo",null,"∈"),e("mo",{stretchy:"false"},"["),e("mn",null,"0"),e("mo",{separator:"true"},","),e("mn",null,"3"),e("mi",null,"π"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"y_1 = 2sinx,y_2 = 2cos(x^2),x \\in [0,3\\pi]")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"1")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mord mathnormal"},"in"),e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])])])])])]),e("span",{class:"mclose"},")"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∈"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),e("span",{class:"mclose"},"]")])])])],-1)),e("div",c8,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},p8=H(i8,[["__file","/@slidev/slides/5.md"]]),y8="/math201/slides/matplotlib/matplotlib_01.png",u8={__name:"6",setup(t){const s={srcSequence:"./pages/what.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"图",-1),e("img",{src:y8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},B8=H(u8,[["__file","/@slidev/slides/6.md"]]),d8={__name:"7",setup(t){const s={layout:"center",srcSequence:"./pages/canshu_plot.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"参数方程绘图",-1)])),_:1},16))}},f8=H(d8,[["__file","/@slidev/slides/7.md"]]),m8={class:"overflow-auto h-xs"},h8={__name:"8",setup(t){const s={srcSequence:"./pages/canshu_plot.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"参数方程绘图：红心",-1)),l[2]||(l[2]=e("p",null,"参数方程",-1)),l[3]||(l[3]=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mo",{fence:"true"},"{"),e("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[e("mtr",null,[e("mtd",null,[e("mstyle",{scriptlevel:"0",displaystyle:"false"},[e("mrow",null,[e("mi",null,"x"),e("mo",null,"="),e("mn",null,"16"),e("mi",null,"s"),e("mi",null,"i"),e("msup",null,[e("mi",null,"n"),e("mn",null,"3")]),e("mo",{stretchy:"false"},"("),e("mi",null,"t"),e("mo",{stretchy:"false"},")")])])])]),e("mtr",null,[e("mtd",null,[e("mstyle",{scriptlevel:"0",displaystyle:"false"},[e("mrow",null,[e("mi",null,"y"),e("mo",null,"="),e("mn",null,"13"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mn",null,"5"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"2"),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mn",null,"2"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"3"),e("mi",null,"t"),e("mo",{stretchy:"false"},")"),e("mo",null,"−"),e("mi",null,"c"),e("mi",null,"o"),e("mi",null,"s"),e("mo",{stretchy:"false"},"("),e("mn",null,"4"),e("mi",null,"t"),e("mo",{stretchy:"false"},")")])])])])])]),e("annotation",{encoding:"application/x-tex"}," \\begin{cases} x = 16sin^3(t)\\\\ y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t) \\end{cases} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"3em","vertical-align":"-1.25em"}}),e("span",{class:"minner"},[e("span",{class:"mopen delimcenter",style:{top:"0em"}},[e("span",{class:"delimsizing size4"},"{")]),e("span",{class:"mord"},[e("span",{class:"mtable"},[e("span",{class:"col-align-l"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.69em"}},[e("span",{style:{top:"-3.69em"}},[e("span",{class:"pstrut",style:{height:"3.008em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mord"},"16"),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"n"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"3")])])])])])])]),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")")])]),e("span",{style:{top:"-2.25em"}},[e("span",{class:"pstrut",style:{height:"3.008em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mord"},"13"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord"},"5"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"3"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord mathnormal"},"cos"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"4"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mclose"},")")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.19em"}},[e("span")])])])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1)),e("div",m8,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},F8=H(h8,[["__file","/@slidev/slides/8.md"]]),g8="/math201/slides/matplotlib/matplotlib_02.png",_8={__name:"9",setup(t){const s={srcSequence:"./pages/canshu_plot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"红心图",-1),e("img",{src:g8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},b8=H(_8,[["__file","/@slidev/slides/9.md"]]),v8={class:"overflow-auto h-xs"},x8={__name:"10",setup(t){const s={srcSequence:"./pages/canshu_plot.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"作业:绘制创意心",-1)),l[2]||(l[2]=e("p",null,"例：",-1)),e("div",v8,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},w8=H(x8,[["__file","/@slidev/slides/10.md"]]),E8="/math201/slides/matplotlib/matplotlib_03.png",k8={__name:"11",setup(t){const s={srcSequence:"./pages/canshu_plot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"创意红心图",-1),e("img",{src:E8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},S8=H(k8,[["__file","/@slidev/slides/11.md"]]),D8={__name:"12",setup(t){const s={layout:"center",srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"散点图",-1)])),_:1},16))}},C8=H(D8,[["__file","/@slidev/slides/12.md"]]),A8={__name:"13",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"散点图",-1)),l[2]||(l[2]=e("h2",null,[c("使用"),e("code",null,"plt.plot"),c("画散点图")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},M8=H(A8,[["__file","/@slidev/slides/13.md"]]),T8="/math201/slides/matplotlib/scatter_01.png",$8={__name:"14",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:T8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},P8=H($8,[["__file","/@slidev/slides/14.md"]]),O8="/math201/slides/matplotlib/marks.png",R8={__name:"15",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("p",null,[e("code",null,"plot"),c("支持不同散点的类型，如下案例所示。详细说明请看"),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html",target:"_blank",rel:"noopener"},"MarkrStyle"),c("说明文档。")],-1)),l[2]||(l[2]=e("img",{src:O8,class:"h-40 mx-auto"},null,-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},L8=H(R8,[["__file","/@slidev/slides/15.md"]]),I8="/math201/slides/matplotlib/scatter_02.png",N8={__name:"16",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:I8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},H8=H(N8,[["__file","/@slidev/slides/16.md"]]),j8={__name:"17",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,[c("使用"),e("code",null,"plt.scatter"),c("画散点图")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},q8=H(j8,[["__file","/@slidev/slides/17.md"]]),U8="/math201/slides/matplotlib/scatter_03.png",V8={__name:"18",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:U8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},z8=H(V8,[["__file","/@slidev/slides/18.md"]]),W8={__name:"19",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"不同散点类型",-1)),l[2]||(l[2]=e("p",null,[e("code",null,"plt.scatter"),c("支持不同散点的类型，如下案例所示。详细说明请看"),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html",target:"_blank",rel:"noopener"},"MarkrStyle"),c("说明文档。")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Y8=H(W8,[["__file","/@slidev/slides/19.md"]]),K8="/math201/slides/matplotlib/scatter_04.png",X8={__name:"20",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:K8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},G8=H(X8,[["__file","/@slidev/slides/20.md"]]),Z8={__name:"21",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"点的透明度",-1)),l[2]||(l[2]=e("p",null,[e("code",null,"plt.scatter"),c("和"),e("code",null,"plt.plot"),c("的主要区别在于，"),e("code",null,"plt.scatter"),c("可以针对每个点设置不同属性（大小、填充颜色、边缘颜色等），还可以通过数据集合对这些属性进行设置。")],-1)),l[3]||(l[3]=e("p",null,"让我们通过一个随机值数据集绘制不同颜色和大小的散点图来说明。为了更好的查看重叠的结果，我们还使用了alpha关键字参数对点的透明度进行了调整：",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},J8=H(Z8,[["__file","/@slidev/slides/21.md"]]),Q8="/math201/slides/matplotlib/scatter_05.png",ex={__name:"22",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Q8,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},tx=H(ex,[["__file","/@slidev/slides/22.md"]]),sx={__name:"23",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"点的大小",-1)),l[2]||(l[2]=e("p",null,[e("code",null,"plt.scatter"),c("函数中可选参数“s”用于增加 matplotlib 中散点的大小。")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},nx=H(sx,[["__file","/@slidev/slides/23.md"]]),lx="/math201/slides/matplotlib/scatter_06.png",ox={__name:"24",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:lx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},rx=H(ox,[["__file","/@slidev/slides/24.md"]]),ax={__name:"25",setup(t){const s={srcSequence:"./pages/scatter.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,[e("code",null,"plot"),c(" 和 "),e("code",null,"scatter"),c(" 对比")],-1),e("p",null,[c("性能提醒除了上面说的"),e("code",null,"plt.plot"),c("和"),e("code",null,"plt.scatter"),c("对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，"),e("code",null,"plt.plot"),c("会明显比"),e("code",null,"plt.scatter"),c("的性能要高。造成这个差异的原因是"),e("code",null,"plt.scatter"),c("支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而"),e("code",null,"plt.plot"),c("来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用"),e("code",null,"plt.plot"),c("函数。")],-1)])),_:1},16))}},cx=H(ax,[["__file","/@slidev/slides/25.md"]]),ix={__name:"26",setup(t){const s={layout:"center",srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"折线图",-1)])),_:1},16))}},px=H(ix,[["__file","/@slidev/slides/26.md"]]),yx={__name:"27",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"折线图",-1)),l[2]||(l[2]=e("p",null,"折线图用于表示不同轴上的两个数据 X 和 Y 之间的关系。在这里，我们将看到一些 Python 线图示例：",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},ux=H(yx,[["__file","/@slidev/slides/27.md"]]),Bx="/math201/slides/matplotlib/matplotlib_11.png",dx={__name:"28",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Bx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},fx=H(dx,[["__file","/@slidev/slides/28.md"]]),mx="/math201/slides/matplotlib/linestyles.png",hx={__name:"29",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=ql("font");return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"折线图风格",-1)),l[2]||(l[2]=e("p",null,"matplotlib.pyplot 的 matplotlib.pyplot.plot(*args, **kwargs) 方法用于绘制图形并指定图形样式，如颜色或线条样式。",-1)),l[3]||(l[3]=e("h3",null,"风格",-1)),l[4]||(l[4]=e("img",{src:mx,class:"h-20 mx-auto"},null,-1)),W(o,{size:"2"},{default:T(()=>l[0]||(l[0]=[e("p",null,"风格有如下几种：",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"code"),e("th",{style:{"text-align":"left"}},"风格")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"-")]),e("td",{style:{"text-align":"left"}},"实线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"--")]),e("td",{style:{"text-align":"left"}},"虚线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"-.")]),e("td",{style:{"text-align":"left"}},"长短点虚线")]),e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,":")]),e("td",{style:{"text-align":"left"}},"点线")])])],-1)])),_:1})]),_:1},16)}}},Fx=H(hx,[["__file","/@slidev/slides/29.md"]]),gx={__name:"30",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"案例:",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},_x=H(gx,[["__file","/@slidev/slides/30.md"]]),bx="/math201/slides/matplotlib/matplotlib_12.png",vx={__name:"31",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:bx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},xx=H(vx,[["__file","/@slidev/slides/31.md"]]),wx={__name:"32",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=ql("font");return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"颜色",-1)),l[2]||(l[2]=e("p",null,"一些基本颜色的单字符速记符号。",-1)),W(o,{size:"2"},{default:T(()=>l[0]||(l[0]=[e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"code"),e("th",{style:{"text-align":"left"}},"颜色")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"b"),e("td",{style:{"text-align":"left"}},"蓝色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"g"),e("td",{style:{"text-align":"left"}},"绿色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"r"),e("td",{style:{"text-align":"left"}},"红色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"c"),e("td",{style:{"text-align":"left"}},"青色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"m"),e("td",{style:{"text-align":"left"}},"品红")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"y"),e("td",{style:{"text-align":"left"}},"黄色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"k"),e("td",{style:{"text-align":"left"}},"黑色")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"w"),e("td",{style:{"text-align":"left"}},"白色")])])],-1)])),_:1})]),_:1},16)}}},Ex=H(wx,[["__file","/@slidev/slides/32.md"]]),kx={__name:"33",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("p",null,[c("除此之外你还可以用RGB的值来表示颜色。（"),e("a",{href:"https://zh.wikipedia.org/zh-hans/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener"},"什么是RGB？"),c(", "),e("a",{href:"https://www.rapidtables.com/web/color/RGB_Color.html",target:"_blank",rel:"noopener"},"如何获得各种颜色的RGB值?"),c("）")],-1)),l[2]||(l[2]=e("h1",null,"案例1:",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Sx=H(kx,[["__file","/@slidev/slides/33.md"]]),Dx="/math201/slides/matplotlib/matplotlib_13.png",Cx={__name:"34",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Dx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Ax=H(Cx,[["__file","/@slidev/slides/34.md"]]),Mx={__name:"35",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"案例2:",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Tx=H(Mx,[["__file","/@slidev/slides/35.md"]]),$x="/math201/slides/matplotlib/matplotlib_14.png",Px={__name:"36",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:$x,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Ox=H(Px,[["__file","/@slidev/slides/36.md"]]),Rx={__name:"37",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"如何在一张图上画多根线",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Lx=H(Rx,[["__file","/@slidev/slides/37.md"]]),Ix="/math201/slides/matplotlib/matplotlib_15.png",Nx={__name:"38",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Ix,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Hx=H(Nx,[["__file","/@slidev/slides/38.md"]]),jx={__name:"39",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"设置线的透明度",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},qx=H(jx,[["__file","/@slidev/slides/39.md"]]),Ux="/math201/slides/matplotlib/matplotlib_16.png",Vx={__name:"40",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Ux,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},zx=H(Vx,[["__file","/@slidev/slides/40.md"]]),Wx={__name:"41",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"改变线的线宽",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Yx=H(Wx,[["__file","/@slidev/slides/41.md"]]),Kx="/math201/slides/matplotlib/matplotlib_17.png",Xx={__name:"42",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Kx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Gx=H(Xx,[["__file","/@slidev/slides/42.md"]]),Zx={__name:"43",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"增加Mark",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Jx=H(Zx,[["__file","/@slidev/slides/43.md"]]),Qx="/math201/slides/matplotlib/matplotlib_18.png",ew={__name:"44",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Qx,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},tw=H(ew,[["__file","/@slidev/slides/44.md"]]),sw={__name:"45",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"调整坐标范围",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},nw=H(sw,[["__file","/@slidev/slides/45.md"]]),lw="/math201/slides/matplotlib/matplotlib_19.png",ow={__name:"46",setup(t){const s={srcSequence:"./pages/line.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:lw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},rw=H(ow,[["__file","/@slidev/slides/46.md"]]),aw={__name:"47",setup(t){const s={layout:"center",srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"直方图",-1)])),_:1},16))}},cw=H(aw,[["__file","/@slidev/slides/47.md"]]),iw={__name:"48",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"直方图",-1),e("p",null,"直方图基本上用于表示以某些组的形式提供的数据。它是数字数据分布的图形表示的准确方法。它是一种条形图，其中 X 轴表示 bin 范围，而 Y 轴给出信息关于频率",-1),e("p",null,[c("要创建直方图，第一步是创建范围的 bin，然后将整个范围的值分布到一系列间隔中，并对落入每个间隔的值进行计数。Bins 清楚地标识为连续的、非变量的重叠区间。"),e("code",null,"matplotlib.pyplot.hist()"),c(" 函数用于计算和创建 x 的直方图。")],-1),e("p",null,[c("matplotlib.pyplot.hist(): "),e("a",{href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist",target:"_blank",rel:"noopener"},"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist")],-1)])),_:1},16))}},pw=H(iw,[["__file","/@slidev/slides/48.md"]]),yw={__name:"49",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"基本案例",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},uw=H(yw,[["__file","/@slidev/slides/49.md"]]),Bw="/math201/slides/matplotlib/hist_01.png",dw={__name:"50",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Bw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},fw=H(dw,[["__file","/@slidev/slides/50.md"]]),mw={__name:"51",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"一维直方图",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},hw=H(mw,[["__file","/@slidev/slides/51.md"]]),Fw="/math201/slides/matplotlib/hist_02.png",gw={__name:"52",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Fw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},_w=H(gw,[["__file","/@slidev/slides/52.md"]]),bw={__name:"53",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"设置透明度和边框颜色",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},vw=H(bw,[["__file","/@slidev/slides/53.md"]]),xw="/math201/slides/matplotlib/hist_03.png",ww={__name:"54",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:xw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Ew=H(ww,[["__file","/@slidev/slides/54.md"]]),kw={__name:"55",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"二维直方图",-1)),l[2]||(l[2]=e("p",null,[c("正如前面我们可以在一维上使用数值对应的直线划分桶一样，我们也可以在二维上使用数据对应的点来划分桶。绘制二维直方图最直接的方法是使用 Matplotlib 的"),e("code",null,"plt.hist2d"),c("函数")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Sw=H(kw,[["__file","/@slidev/slides/55.md"]]),Dw="/math201/slides/matplotlib/hist_04.png",Cw={__name:"56",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Dw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Aw=H(Cw,[["__file","/@slidev/slides/56.md"]]),Mw={__name:"57",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,"plt.hexbin：六角形分桶",-1)),l[2]||(l[2]=e("p",null,[c("刚才的二维分桶是沿着坐标轴将每个桶分为正方形。另一个很自然的分桶形状就是正六边形。对于这个需求，Matplotlib 提供了"),e("code",null,"plt.hexbin"),c("函数，它也是在二维平面上分桶展示，不过每个桶（即图表上的每个数据格）将会是六边形：")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Tw=H(Mw,[["__file","/@slidev/slides/57.md"]]),$w="/math201/slides/matplotlib/hist_05.png",Pw={__name:"58",setup(t){const s={srcSequence:"./pages/histogram.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:$w,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Ow=H(Pw,[["__file","/@slidev/slides/58.md"]]),Rw={__name:"59",setup(t){const s={layout:"center",srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"条形图",-1)])),_:1},16))}},Lw=H(Rw,[["__file","/@slidev/slides/59.md"]]),Iw={__name:"60",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"条形图",-1)),l[2]||(l[2]=e("p",null,"条形图或条形图是表示数据类别的图形，矩形条的长度和高度与其表示的值成比例。条形图可以水平或垂直绘制。条形图描述离散类别之间的比较。图中的一个轴表示被比较的特定类别，而另一个轴表示与这些类别对应的测量值",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#B392F0"}}," matplotlib "),e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Nw=H(Iw,[["__file","/@slidev/slides/60.md"]]),Hw="/math201/slides/matplotlib/bar_01.png",jw={__name:"61",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Hw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},qw=H(jw,[["__file","/@slidev/slides/61.md"]]),Uw={__name:"62",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"水平和竖直画条形图",-1)),l[2]||(l[2]=e("p",null,[e("code",null,"plt.bar"),c("用于竖直的条形图。")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Vw=H(Uw,[["__file","/@slidev/slides/62.md"]]),zw="/math201/slides/matplotlib/bar_02.png",Ww={__name:"63",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:zw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Yw=H(Ww,[["__file","/@slidev/slides/63.md"]]),Kw={__name:"64",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h2",null,[e("code",null,"plt.barh"),c("用于水平的条形图。")],-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},Xw=H(Kw,[["__file","/@slidev/slides/64.md"]]),Gw="/math201/slides/matplotlib/bar_03.png",Zw={__name:"65",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:Gw,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},Jw=H(Zw,[["__file","/@slidev/slides/65.md"]]),Qw={__name:"66",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"条形堆积图",-1)),W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#B392F0"}}," matplotlib"),e("span",{style:{color:"#BBBBBB"}},"."),e("span",{style:{color:"#B392F0"}},"pyplot "),e("span",{style:{color:"#F97583"}},"as"),e("span",{style:{color:"#B392F0"}}," plt")]),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)]),_:1},16)}}},e4=H(Qw,[["__file","/@slidev/slides/66.md"]]),t4="/math201/slides/matplotlib/bar_04.png",s4={__name:"67",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:t4,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},n4=H(s4,[["__file","/@slidev/slides/67.md"]]),l4={class:"overflow-auto h-xs"},o4={__name:"68",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"多个条形图",-1)),e("div",l4,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},r4=H(o4,[["__file","/@slidev/slides/68.md"]]),a4="/math201/slides/matplotlib/bar_05.png",c4={__name:"69",setup(t){const s={srcSequence:"./pages/bar.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("img",{src:a4,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},i4=H(c4,[["__file","/@slidev/slides/69.md"]]),p4={__name:"70",setup(t){const s={layout:"center",srcSequence:"./pages/subplot.md"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"多子图",-1)])),_:1},16))}},y4=H(p4,[["__file","/@slidev/slides/70.md"]]),u4={class:"overflow-auto h-xs"},B4={__name:"71",setup(t){const s={srcSequence:"./pages/subplot.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"图形窗口的分割",-1)),l[2]||(l[2]=e("p",null,"matplotlib.pyplot.subplot 方法",-1)),l[3]||(l[3]=e("p",null,"该subplot()函数采用三个参数来描述图窗的布局。布局按行和列组织，由第一个 和第二个参数表示。第三个参数表示当前图的索引",-1)),e("div",u4,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},d4=H(B4,[["__file","/@slidev/slides/71.md"]]),f4="/math201/slides/matplotlib/matplotlib_04.png",m4={__name:"72",setup(t){const s={srcSequence:"./pages/subplot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"多子图",-1),e("p",null,"例：",-1),e("img",{src:f4,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},h4=H(m4,[["__file","/@slidev/slides/72.md"]]),F4={class:"overflow-auto h-xs"},g4={__name:"73",setup(t){const s={srcSequence:"./pages/3D_plot.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"3D图像",-1)),l[2]||(l[2]=e("p",null,"Matplotlib 可以支持绘制3D的图形，通过关键字参数projection='3d’来创建3D视图, 三维 axes 激活后，我们可以在上面绘制不同的三维图表类型。",-1)),e("div",F4,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},_4=H(g4,[["__file","/@slidev/slides/73.md"]]),b4="/math201/slides/matplotlib/matplotlib_05.png",v4={__name:"74",setup(t){const s={srcSequence:"./pages/3D_plot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"3D螺旋线",-1),e("img",{src:b4,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},x4=H(v4,[["__file","/@slidev/slides/74.md"]]),w4={class:"overflow-auto h-xs"},E4={__name:"75",setup(t){const s={srcSequence:"./pages/3D_plot.md"};return $(N),(n,l)=>{const o=Pe;return E(),R(re,ee(Q(s)),{default:T(()=>[l[1]||(l[1]=e("h1",null,"三维曲面绘图",-1)),l[2]||(l[2]=e("p",null,"meshgrid() 首先是平面网格点的生成 函数命令meshgrid() 用来生成 x-y 平面上的网格点矩阵。 调用形式 为：X, Y = np.meshgrid(x, y)",-1)),e("div",w4,[W(o,we({},{ranges:[""]}),{default:T(()=>l[0]||(l[0]=[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),c(`
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
`),e("span",{class:"line"},[e("span",{style:{color:"#24292EFF"}},"plt"),e("span",{style:{color:"#212121"}},"."),e("span",{style:{color:"#6F42C1"}},"show"),e("span",{style:{color:"#212121"}},"()")])])])],-1)])),_:1},16)])]),_:1},16)}}},k4=H(E4,[["__file","/@slidev/slides/75.md"]]),S4="/math201/slides/matplotlib/matplotlib_06.png",D4={__name:"76",setup(t){const s={srcSequence:"./pages/3D_plot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"三维曲面图",-1),e("img",{src:S4,class:"h-90 mx-auto"},null,-1)])),_:1},16))}},C4=H(D4,[["__file","/@slidev/slides/76.md"]]),A4={__name:"77",setup(t){const s={srcSequence:"./pages/3D_plot.md"};return $(N),(n,l)=>(E(),R(re,ee(Q(s)),null,16))}},M4=H(A4,[["__file","/@slidev/slides/77.md"]]),T4={__name:"78",setup(t){const s={layout:"center"};return $(N),(n,l)=>(E(),R(sn,ee(Q(s)),{default:T(()=>l[0]||(l[0]=[e("h1",null,"Thanks",-1)])),_:1},16))}},$4=H(T4,[["__file","/@slidev/slides/78.md"]]),P4=[{path:"1",name:"page-1",component:zv,meta:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Matplotlib 基础",slide:{raw:`---
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

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"Matplotlib 基础",level:1,content:`# Matplotlib 基础

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
</div>`,frontmatter:{theme:"unicorn",highlighter:"shiki",lineNumbers:!1,layout:"cover",drawings:{persist:!0},transition:"slide-left",css:"unocss",title:"Matplotlib 基础"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:40,noteHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Xv,meta:{layout:"center",title:"什么是Matplotlib?",srcSequence:"./pages/what.md",slide:{raw:null,title:"什么是Matplotlib?",level:1,content:"# 什么是Matplotlib?",frontmatter:{layout:"center",title:"什么是Matplotlib?",srcSequence:"./pages/what.md"},index:1,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`---
layout: center
---

# 什么是Matplotlib?
`,title:"什么是Matplotlib?",level:1,content:"# 什么是Matplotlib?",frontmatter:{layout:"center",title:"什么是Matplotlib?"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/what.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:o8,meta:{transition:"fade-out",srcSequence:"./pages/what.md",slide:{raw:`---
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
\`\`\``,frontmatter:{transition:"fade-out"},index:1,start:6,end:20},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:a8,meta:{srcSequence:"./pages/what.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:2,start:21,end:45},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:p8,meta:{srcSequence:"./pages/what.md",slide:{raw:`
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

</div>`,frontmatter:{},index:3,start:46,end:83},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:B8,meta:{srcSequence:"./pages/what.md",slide:{raw:`
# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">
`,title:"图",level:1,content:`# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/what.md"},index:5,start:84,end:89,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",raw:`
# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">
`,title:"图",level:1,content:`# 图

<img src = "/matplotlib_01.png" class = "h-90 mx-auto">`,frontmatter:{},index:4,start:84,end:89},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/what.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:f8,meta:{layout:"center",title:"参数方程绘图",srcSequence:"./pages/canshu_plot.md",slide:{raw:null,title:"参数方程绘图",level:1,content:"# 参数方程绘图",frontmatter:{layout:"center",title:"参数方程绘图",srcSequence:"./pages/canshu_plot.md"},index:6,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`---
layout: center
---

# 参数方程绘图
`,title:"参数方程绘图",level:1,content:"# 参数方程绘图",frontmatter:{layout:"center",title:"参数方程绘图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/canshu_plot.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:F8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
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

<img src = "/matplotlib_02.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:38,end:44},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:w8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
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
</div>`,frontmatter:{},index:3,start:45,end:72},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:S8,meta:{srcSequence:"./pages/canshu_plot.md",slide:{raw:`
# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">
`,title:"创意红心图",level:1,content:`# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/canshu_plot.md"},index:10,start:73,end:78,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",raw:`
# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">
`,title:"创意红心图",level:1,content:`# 创意红心图

<img src = "/matplotlib_03.png" class = "h-90 mx-auto">`,frontmatter:{},index:4,start:73,end:78},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/canshu_plot.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:C8,meta:{layout:"center",title:"散点图",srcSequence:"./pages/scatter.md",slide:{raw:null,title:"散点图",level:1,content:"# 散点图",frontmatter:{layout:"center",title:"散点图",srcSequence:"./pages/scatter.md"},index:11,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`---
layout: center
---

# 散点图
`,title:"散点图",level:1,content:"# 散点图",frontmatter:{layout:"center",title:"散点图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/scatter.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:M8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`

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
\`\`\``,frontmatter:{},index:1,start:7,end:25},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:P8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:13,start:26,end:29,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_01.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:26,end:29},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:L8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:3,start:30,end:49},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:H8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:15,start:50,end:53,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_02.png" class = "h-90 mx-auto">',frontmatter:{},index:4,start:50,end:53},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:q8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:5,start:54,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:z8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`

<img src = "/scatter_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:17,start:70,end:74,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`

<img src = "/scatter_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_03.png" class = "h-90 mx-auto">',frontmatter:{},index:6,start:70,end:74},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Y8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:7,start:75,end:94},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:G8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:19,start:95,end:98,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_04.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:95,end:98},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:J8,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:9,start:99,end:123},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:tx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_05.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:21,start:124,end:127,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_05.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_05.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:124,end:127},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:nx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:11,start:128,end:153},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:rx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:`
<img src = "/scatter_06.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_06.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/scatter.md"},index:23,start:154,end:157,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:`
<img src = "/scatter_06.png" class = "h-90 mx-auto">
`,content:'<img src = "/scatter_06.png" class = "h-90 mx-auto">',frontmatter:{},index:12,start:154,end:157},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:cx,meta:{srcSequence:"./pages/scatter.md",slide:{raw:"\n# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",title:"`plot` 和 `scatter` 对比",level:1,content:"# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",frontmatter:{srcSequence:"./pages/scatter.md"},index:24,start:158,end:162,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",raw:"\n# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",title:"`plot` 和 `scatter` 对比",level:1,content:"# `plot` 和 `scatter` 对比\n\n性能提醒除了上面说的`plt.plot`和`plt.scatter`对于每个散点不同属性的支持不同之外，还有别的因素影响对这两个函数的选择吗？对于小的数据集来说，两者并无差别，当数据集增长到几千个点时，`plt.plot`会明显比`plt.scatter`的性能要高。造成这个差异的原因是`plt.scatter`支持每个点使用不同的大小和颜色，因此渲染每个点时需要完成更多额外的工作。而`plt.plot`来说，每个点都是简单的复制另一个点产生，因此对于整个数据集来说，确定每个点的展示属性的工作仅需要进行一次即可。对于很大的数据集来说，这个差异会导致两者性能的巨大区别，因此，对于大数据集应该优先使用`plt.plot`函数。",frontmatter:{},index:13,start:158,end:162},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/scatter.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:px,meta:{layout:"center",title:"折线图",srcSequence:"./pages/line.md",slide:{raw:null,title:"折线图",level:1,content:"# 折线图",frontmatter:{layout:"center",title:"折线图",srcSequence:"./pages/line.md"},index:25,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`---
layout: center
---

# 折线图
`,title:"折线图",level:1,content:"# 折线图",frontmatter:{layout:"center",title:"折线图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/line.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:ux,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:1,start:7,end:28},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:fx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_11.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_11.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:27,start:29,end:32,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_11.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_11.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:29,end:32},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Fx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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

</font>`,frontmatter:{},index:3,start:33,end:58},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:_x,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:4,start:59,end:86},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:xx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_12.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_12.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:30,start:87,end:90,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_12.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_12.png" class = "h-90 mx-auto">',frontmatter:{},index:5,start:87,end:90},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ex,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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

</font>`,frontmatter:{},index:6,start:91,end:109},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Sx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:7,start:110,end:127},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Ax,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_13.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_13.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:33,start:128,end:131,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_13.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_13.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:128,end:131},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Tx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:9,start:132,end:147},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Ox,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_14.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_14.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:35,start:148,end:151,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_14.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_14.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:148,end:151},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Lx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:11,start:152,end:172},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Hx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_15.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_15.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:37,start:173,end:176,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_15.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_15.png" class = "h-90 mx-auto">',frontmatter:{},index:12,start:173,end:176},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:qx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:13,start:177,end:203},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:zx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_16.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_16.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:39,start:204,end:207,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_16.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_16.png" class = "h-90 mx-auto">',frontmatter:{},index:14,start:204,end:207},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Yx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:15,start:208,end:233},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Gx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_17.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_17.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:41,start:234,end:237,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_17.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_17.png" class = "h-90 mx-auto">',frontmatter:{},index:16,start:234,end:237},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Jx,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:17,start:238,end:262},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:tw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_18.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_18.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:43,start:263,end:266,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_18.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_18.png" class = "h-90 mx-auto">',frontmatter:{},index:18,start:263,end:266},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:nw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:19,start:267,end:284},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:rw,meta:{srcSequence:"./pages/line.md",slide:{raw:`
<img src = "/matplotlib_19.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_19.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/line.md"},index:45,start:285,end:288,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",raw:`
<img src = "/matplotlib_19.png" class = "h-90 mx-auto">
`,content:'<img src = "/matplotlib_19.png" class = "h-90 mx-auto">',frontmatter:{},index:20,start:285,end:288},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/line.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:cw,meta:{layout:"center",title:"直方图",srcSequence:"./pages/histogram.md",slide:{raw:null,title:"直方图",level:1,content:"# 直方图",frontmatter:{layout:"center",title:"直方图",srcSequence:"./pages/histogram.md"},index:46,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`---
layout: center
---

# 直方图
`,title:"直方图",level:1,content:"# 直方图",frontmatter:{layout:"center",title:"直方图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/histogram.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:pw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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

matplotlib.pyplot.hist(): https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist`,frontmatter:{},index:1,start:7,end:16},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:uw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:2,start:17,end:30},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:fw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:49,start:31,end:34,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_01.png" class = "h-90 mx-auto">',frontmatter:{},index:3,start:31,end:34},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:hw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:4,start:35,end:58},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:_w,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:51,start:59,end:62,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_02.png" class = "h-90 mx-auto">',frontmatter:{},index:5,start:59,end:62},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:vw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:6,start:63,end:81},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Ew,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:53,start:82,end:85,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_03.png" class = "h-90 mx-auto">',frontmatter:{},index:7,start:82,end:85},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Sw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:8,start:86,end:106},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Aw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:55,start:107,end:110,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/hist_04.png" class = "h-90 mx-auto">',frontmatter:{},index:9,start:107,end:110},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:Tw,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:10,start:111,end:130},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:Ow,meta:{srcSequence:"./pages/histogram.md",slide:{raw:`
<img src = "/hist_05.png" class = "h-90 mx-auto">`,content:'<img src = "/hist_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/histogram.md"},index:57,start:131,end:133,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",raw:`
<img src = "/hist_05.png" class = "h-90 mx-auto">`,content:'<img src = "/hist_05.png" class = "h-90 mx-auto">',frontmatter:{},index:11,start:131,end:133},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/histogram.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:Lw,meta:{layout:"center",title:"条形图",srcSequence:"./pages/bar.md",slide:{raw:null,title:"条形图",level:1,content:"# 条形图",frontmatter:{layout:"center",title:"条形图",srcSequence:"./pages/bar.md"},index:58,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`---
layout: center
---

# 条形图
`,title:"条形图",level:1,content:"# 条形图",frontmatter:{layout:"center",title:"条形图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/bar.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Nw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:1,start:7,end:23},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:qw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_01.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:60,start:24,end:27,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_01.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_01.png" class = "h-90 mx-auto">',frontmatter:{},index:2,start:24,end:27},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:Vw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:3,start:28,end:47},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:Yw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_02.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:62,start:48,end:51,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_02.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_02.png" class = "h-90 mx-auto">',frontmatter:{},index:4,start:48,end:51},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Xw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:5,start:52,end:69},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:Jw,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_03.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:64,start:70,end:73,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_03.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_03.png" class = "h-90 mx-auto">',frontmatter:{},index:6,start:70,end:73},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:e4,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
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
\`\`\``,frontmatter:{},index:7,start:74,end:99},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:n4,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_04.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:66,start:100,end:103,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_04.png" class = "h-90 mx-auto">
`,content:'<img src = "/bar_04.png" class = "h-90 mx-auto">',frontmatter:{},index:8,start:100,end:103},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:r4,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
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

</div>`,frontmatter:{},index:9,start:104,end:149},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:i4,meta:{srcSequence:"./pages/bar.md",slide:{raw:`
<img src = "/bar_05.png" class = "h-90 mx-auto">`,content:'<img src = "/bar_05.png" class = "h-90 mx-auto">',frontmatter:{srcSequence:"./pages/bar.md"},index:68,start:150,end:152,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",raw:`
<img src = "/bar_05.png" class = "h-90 mx-auto">`,content:'<img src = "/bar_05.png" class = "h-90 mx-auto">',frontmatter:{},index:10,start:150,end:152},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/bar.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:y4,meta:{layout:"center",title:"多子图",srcSequence:"./pages/subplot.md",slide:{raw:null,title:"多子图",level:1,content:"# 多子图",frontmatter:{layout:"center",title:"多子图",srcSequence:"./pages/subplot.md"},index:69,start:0,end:6,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",raw:`---
layout: center
---

# 多子图
`,title:"多子图",level:1,content:"# 多子图",frontmatter:{layout:"center",title:"多子图"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/subplot.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:d4,meta:{srcSequence:"./pages/subplot.md",slide:{raw:`
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
</div>`,frontmatter:{},index:1,start:7,end:65},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:h4,meta:{srcSequence:"./pages/subplot.md",slide:{raw:`
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

<img src = "/matplotlib_04.png" class = "h-90 mx-auto">`,frontmatter:{},index:2,start:66,end:72},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/subplot.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:_4,meta:{title:"3D图像",srcSequence:"./pages/3D_plot.md",slide:{raw:null,title:"3D图像",level:1,content:`# 3D图像
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
[matplotlib官网](https://matplotlib.org/stable/index.html)`,frontmatter:{},index:8,start:68,end:78},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:x4,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">
`,title:"3D螺旋线",level:1,content:`# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/3D_plot.md"},index:73,start:35,end:40,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`
# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">
`,title:"3D螺旋线",level:1,content:`# 3D螺旋线

<img src = "/matplotlib_05.png" class = "h-90 mx-auto">`,frontmatter:{},index:1,start:35,end:40},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:k4,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:41,end:77},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:C4,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:`
# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">
`,title:"三维曲面图",level:1,content:`# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">`,frontmatter:{srcSequence:"./pages/3D_plot.md"},index:75,start:78,end:83,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:`
# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">
`,title:"三维曲面图",level:1,content:`# 三维曲面图

<img src = "/matplotlib_06.png" class = "h-90 mx-auto">`,frontmatter:{},index:3,start:78,end:83},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:M4,meta:{srcSequence:"./pages/3D_plot.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/3D_plot.md"},index:76,start:84,end:85,source:{filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",raw:"",content:"",frontmatter:{},index:4,start:84,end:85},filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/pages/3D_plot.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:$4,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Thanks`,title:"Thanks",level:1,content:"# Thanks",frontmatter:{layout:"center"},index:77,start:78,end:83,noteHTML:"",filepath:"/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",component:gv,meta:{layout:"end"}}],Ge=P4,xl=[{name:"play",path:"/",component:U3,children:[...Ge]},{name:"print",path:"/print",component:mv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(s){if(!vl.remote||vl.remote===s.query.password)return!0;if(vl.remote&&s.query.password===void 0){const n=prompt("Enter password");if(vl.remote===n)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};xl.push({path:"/presenter/print",component:()=>Xs(()=>import("./PresenterPrint-45c90c35.js"),["assets/PresenterPrint-45c90c35.js","assets/NoteDisplay-6100ad24.js"])}),xl.push({name:"notes",path:"/notes",component:()=>Xs(()=>import("./NotesView-9bdf5796.js"),["assets/NotesView-9bdf5796.js","assets/NoteDisplay-6100ad24.js"]),beforeEnter:t}),xl.push({name:"presenter",path:"/presenter/:no",component:()=>Xs(()=>import("./Presenter-542a13f5.js"),["assets/Presenter-542a13f5.js","assets/NoteDisplay-6100ad24.js","assets/DrawingControls-43be2e0a.js","assets/Presenter-aa6741a8.css"]),beforeEnter:t}),xl.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const xt=dg({history:w0("/math201/slides/matplotlib"),routes:xl});function O4(t,s,{mode:n="replace"}={}){return A({get(){const l=xt.currentRoute.value.query[t];return l==null?s??null:Array.isArray(l)?l.filter(Boolean):l},set(l){nt(()=>{xt[M(n)]({query:{...xt.currentRoute.value.query,[t]:l}})})}})}const wB=G(0);nt(()=>{xt.afterEach(async()=>{await nt(),wB.value+=1})});const EB=G(0),Ut=A(()=>xt.currentRoute.value),Jn=A(()=>Ut.value.query.print!==void 0),R4=A(()=>Ut.value.query.print==="clicks"),xs=A(()=>Ut.value.query.embedded!==void 0),vt=A(()=>Ut.value.path.startsWith("/presenter")),L4=A(()=>Ut.value.path.startsWith("/notes")),$l=A(()=>Jn.value&&!R4.value),pc=A(()=>Ut.value.query.password),I4=A(()=>!vt.value&&(!Me.remote||pc.value===Me.remote)),t2=O4("clicks","0"),N4=A(()=>Ge.length-1),H4=A(()=>Ut.value.path),Xe=A(()=>parseInt(H4.value.split(/\//g).slice(-1)[0])||1);A(()=>$r(Xe.value));const ft=A(()=>Ge.find(t=>t.path===`${Xe.value}`));A(()=>{var t,s,n;return(n=(s=(t=ft.value)==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:n.id});A(()=>{var t,s;return((s=(t=ft.value)==null?void 0:t.meta)==null?void 0:s.layout)||(Xe.value===1?"cover":"default")});const ia=A(()=>Ge.find(t=>t.path===`${Math.min(Ge.length,Xe.value+1)}`)),j4=A(()=>Ge.find(t=>t.path===`${Math.max(1,Xe.value-1)}`)),q4=A(()=>{var t,s;return wB.value,((s=(t=ft.value)==null?void 0:t.meta)==null?void 0:s.__clicksElements)||[]}),Ht=A({get(){if($l.value)return 99999;let t=+(t2.value||0);return isNaN(t)&&(t=0),t},set(t){t2.value=t.toString()}}),mr=A(()=>{var t,s;return+(((s=(t=ft.value)==null?void 0:t.meta)==null?void 0:s.clicks)??q4.value.length)}),U4=A(()=>Xe.value<Ge.length-1||Ht.value<mr.value),V4=A(()=>Xe.value>1||Ht.value>0),z4=A(()=>Ge.filter(t=>{var s,n;return(n=(s=t.meta)==null?void 0:s.slide)==null?void 0:n.title}).reduce((t,s)=>(ti(t,s),t),[])),W4=A(()=>si(z4.value,ft.value));A(()=>ni(W4.value));const Y4=A(()=>J4(EB.value,ft.value,j4.value));be(ft,(t,s)=>{EB.value=Number(t==null?void 0:t.path)-Number(s==null?void 0:s.path)});function Zs(){mr.value<=Ht.value?Gl():Ht.value+=1}async function Js(){Ht.value<=0?await Zl():Ht.value-=1}function $r(t){return vt.value?`/presenter/${t}`:`/${t}`}function Gl(){const t=Math.min(Ge.length,Xe.value+1);return Qn(t)}async function Zl(t=!0){const s=Math.max(1,Xe.value-1);await Qn(s),t&&mr.value&&xt.replace({query:{...Ut.value.query,clicks:mr.value}})}function Qn(t,s){return xt.push({path:$r(t),query:{...Ut.value.query,clicks:s}})}function K4(t){const s=G(0),{direction:n,distanceX:l,distanceY:o}=IF(t,{onSwipeStart(r){r.pointerType==="touch"&&(Yl.value||(s.value=Va()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||Yl.value)return;const a=Math.abs(l.value),i=Math.abs(o.value);a/window.innerWidth>.3||a>100?n.value==="left"?Zs():Js():(i/window.innerHeight>.4||i>200)&&(n.value==="down"?Zl():Gl())}})}async function yc(){const{saveAs:t}=await Xs(()=>import("./FileSaver.min-23a5d44b.js").then(s=>s.F),[]);t(typeof Me.download=="string"?Me.download:Me.exportFilename?`${Me.exportFilename}.pdf`:"/math201/slides/matplotlibslidev-exported.pdf",`${Me.title}.pdf`)}async function X4(t){var s,n;if(t==null){const l=(n=(s=ft.value)==null?void 0:s.meta)==null?void 0:n.slide;if(!(l!=null&&l.filepath))return!1;t=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ti(t,s,n=1){var o,r,a,i,p;const l=(r=(o=s.meta)==null?void 0:o.slide)==null?void 0:r.level;l&&l>n&&t.length>0?ti(t[t.length-1].children,s,n+1):t.push({children:[],level:n,path:s.path,hideInToc:!!((a=s.meta)!=null&&a.hideInToc),title:(p=(i=s.meta)==null?void 0:i.slide)==null?void 0:p.title})}function si(t,s,n=!1,l){return t.map(o=>{const r={...o,active:o.path===(s==null?void 0:s.path),hasActiveParent:n};return r.children.length>0&&(r.children=si(r.children,s,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function ni(t,s=1){return t.filter(n=>!n.hideInToc).map(n=>({...n,children:ni(n.children,s+1)}))}const G4={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Z4(t,s=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let n=t.name.includes("|")?t.name:G4[t.name]||t.name;if(n.includes("|")){const[l,o]=n.split("|").map(r=>r.trim());n=s?o:l}if(n)return{...t,name:n}}function J4(t,s,n){var o,r;let l=t>0?(o=n==null?void 0:n.meta)==null?void 0:o.transition:(r=s==null?void 0:s.meta)==null?void 0:r.transition;return l||(l=Me.transition),Z4(l,t<0)}function Q4(){const t=Me.titleTemplate.replace("%s",Me.title||"Slidev");du({title:t,htmlAttrs:Me.htmlAttrs}),Uh(`${t} - shared`),Yh(`${t} - drawings`);const s=`${location.origin}_${Lh()}`;function n(){L4.value||!vt.value&&!Rh.includes(location.host.split(":")[0])||(vt.value?(ul("page",+Xe.value),ul("clicks",Ht.value)):(ul("viewerPage",+Xe.value),ul("viewerClicks",Ht.value)),ul("lastUpdate",{id:s,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}xt.afterEach(n),be(Ht,n),Vh(l=>{var r;xt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=l.lastUpdate)==null?void 0:r.type)==="presenter"&&(+l.page!=+Xe.value||+Ht.value!=+l.clicks)&&xt.replace({path:$r(l.page),query:{...xt.currentRoute.value.query,clicks:l.clicks||0}})})}const e6=De({__name:"App",setup(t){return $(N),Q4(),(s,n)=>{const l=ql("RouterView"),o=ql("StarportCarrier");return E(),le(Ae,null,[W(l),W(o)],64)}}}),t6=H(e6,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/App.vue"]]);function pa(t){if(t===null||typeof t!="object")return!1;const s=Object.getPrototypeOf(t);return s!==null&&s!==Object.prototype&&Object.getPrototypeOf(s)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function uc(t,s,n=".",l){if(!pa(s))return uc(t,{},n,l);const o=Object.assign({},s);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(l&&l(o,r,a,n)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=[...a,...o[r]]:pa(a)&&pa(o[r])?o[r]=uc(a,o[r],(n?`${n}.`:"")+r.toString(),l):o[r]=a))}return o}function s6(t){return(...s)=>s.reduce((n,l)=>uc(n,l,"",t),{})}const kB=s6(),SB=1/60*1e3,n6=typeof performance<"u"?()=>performance.now():()=>Date.now(),DB=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(n6()),SB);function l6(t){let s=[],n=[],l=0,o=!1,r=!1;const a=new WeakSet,i={schedule:(p,B=!1,y=!1)=>{const u=y&&o,d=u?s:n;return B&&a.add(p),d.indexOf(p)===-1&&(d.push(p),u&&o&&(l=s.length)),p},cancel:p=>{const B=n.indexOf(p);B!==-1&&n.splice(B,1),a.delete(p)},process:p=>{if(o){r=!0;return}if(o=!0,[s,n]=[n,s],n.length=0,l=s.length,l)for(let B=0;B<l;B++){const y=s[B];y(p),a.has(y)&&(i.schedule(y),t())}o=!1,r&&(r=!1,i.process(p))}};return i}const o6=40;let Bc=!0,Jl=!1,dc=!1;const Yn={delta:0,timestamp:0},io=["read","update","preRender","render","postRender"],Pr=io.reduce((t,s)=>(t[s]=l6(()=>Jl=!0),t),{}),fc=io.reduce((t,s)=>{const n=Pr[s];return t[s]=(l,o=!1,r=!1)=>(Jl||c6(),n.schedule(l,o,r)),t},{}),r6=io.reduce((t,s)=>(t[s]=Pr[s].cancel,t),{});io.reduce((t,s)=>(t[s]=()=>Pr[s].process(Yn),t),{});const a6=t=>Pr[t].process(Yn),CB=t=>{Jl=!1,Yn.delta=Bc?SB:Math.max(Math.min(t-Yn.timestamp,o6),1),Yn.timestamp=t,dc=!0,io.forEach(a6),dc=!1,Jl&&(Bc=!1,DB(CB))},c6=()=>{Jl=!0,Bc=!0,dc||DB(CB)},AB=()=>Yn;function MB(t,s){var n={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&s.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)s.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(n[l[o]]=t[l[o]]);return n}var li=function(){},Ql=function(){};li=function(t,s){!t&&typeof console<"u"&&console.warn(s)},Ql=function(t,s){if(!t)throw new Error(s)};const mc=(t,s,n)=>Math.min(Math.max(n,t),s),ya=.001,i6=.01,s2=10,p6=.05,y6=1;function u6({duration:t=800,bounce:s=.25,velocity:n=0,mass:l=1}){let o,r;li(t<=s2*1e3,"Spring duration must be 10 seconds or less");let a=1-s;a=mc(p6,y6,a),t=mc(i6,s2,t/1e3),a<1?(o=B=>{const y=B*a,u=y*t,d=y-n,f=hc(B,a),m=Math.exp(-u);return ya-d/f*m},r=B=>{const u=B*a*t,d=u*n+n,f=Math.pow(a,2)*Math.pow(B,2)*t,m=Math.exp(-u),g=hc(Math.pow(B,2),a);return(-o(B)+ya>0?-1:1)*((d-f)*m)/g}):(o=B=>{const y=Math.exp(-B*t),u=(B-n)*t+1;return-ya+y*u},r=B=>{const y=Math.exp(-B*t),u=(n-B)*(t*t);return y*u});const i=5/t,p=d6(o,r,i);if(t=t*1e3,isNaN(p))return{stiffness:100,damping:10,duration:t};{const B=Math.pow(p,2)*l;return{stiffness:B,damping:a*2*Math.sqrt(l*B),duration:t}}}const B6=12;function d6(t,s,n){let l=n;for(let o=1;o<B6;o++)l=l-t(l)/s(l);return l}function hc(t,s){return t*Math.sqrt(1-s*s)}const f6=["duration","bounce"],m6=["stiffness","damping","mass"];function n2(t,s){return s.some(n=>t[n]!==void 0)}function h6(t){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!n2(t,m6)&&n2(t,f6)){const n=u6(t);s=Object.assign(Object.assign(Object.assign({},s),n),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function oi(t){var{from:s=0,to:n=1,restSpeed:l=2,restDelta:o}=t,r=MB(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:s};let{stiffness:i,damping:p,mass:B,velocity:y,duration:u,isResolvedFromDuration:d}=h6(r),f=l2,m=l2;function g(){const b=y?-(y/1e3):0,x=n-s,v=p/(2*Math.sqrt(i*B)),F=Math.sqrt(i/B)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-s)/100,.4)),v<1){const k=hc(F,v);f=w=>{const P=Math.exp(-v*F*w);return n-P*((b+v*F*x)/k*Math.sin(k*w)+x*Math.cos(k*w))},m=w=>{const P=Math.exp(-v*F*w);return v*F*P*(Math.sin(k*w)*(b+v*F*x)/k+x*Math.cos(k*w))-P*(Math.cos(k*w)*(b+v*F*x)-k*x*Math.sin(k*w))}}else if(v===1)f=k=>n-Math.exp(-F*k)*(x+(b+F*x)*k);else{const k=F*Math.sqrt(v*v-1);f=w=>{const P=Math.exp(-v*F*w),D=Math.min(k*w,300);return n-P*((b+v*F*x)*Math.sinh(D)+k*x*Math.cosh(D))/k}}}return g(),{next:b=>{const x=f(b);if(d)a.done=b>=u;else{const v=m(b)*1e3,F=Math.abs(v)<=l,k=Math.abs(n-x)<=o;a.done=F&&k}return a.value=a.done?n:x,a},flipTarget:()=>{y=-y,[s,n]=[n,s],g()}}}oi.needsInterpolation=(t,s)=>typeof t=="string"||typeof s=="string";const l2=t=>0,TB=(t,s,n)=>{const l=s-t;return l===0?1:(n-t)/l},ri=(t,s,n)=>-n*t+n*s+t,$B=(t,s)=>n=>Math.max(Math.min(n,s),t),Pl=t=>t%1?Number(t.toFixed(5)):t,eo=/(-)?([\d]*\.?[\d])+/g,Fc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,F6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function po(t){return typeof t=="string"}const yo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ol=Object.assign(Object.assign({},yo),{transform:$B(0,1)}),Do=Object.assign(Object.assign({},yo),{default:1}),ai=t=>({test:s=>po(s)&&s.endsWith(t)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${t}`}),an=ai("deg"),Rl=ai("%"),ve=ai("px"),o2=Object.assign(Object.assign({},Rl),{parse:t=>Rl.parse(t)/100,transform:t=>Rl.transform(t*100)}),ci=(t,s)=>n=>!!(po(n)&&F6.test(n)&&n.startsWith(t)||s&&Object.prototype.hasOwnProperty.call(n,s)),PB=(t,s,n)=>l=>{if(!po(l))return l;const[o,r,a,i]=l.match(eo);return{[t]:parseFloat(o),[s]:parseFloat(r),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},vn={test:ci("hsl","hue"),parse:PB("hue","saturation","lightness"),transform:({hue:t,saturation:s,lightness:n,alpha:l=1})=>"hsla("+Math.round(t)+", "+Rl.transform(Pl(s))+", "+Rl.transform(Pl(n))+", "+Pl(Ol.transform(l))+")"},g6=$B(0,255),ua=Object.assign(Object.assign({},yo),{transform:t=>Math.round(g6(t))}),zs={test:ci("rgb","red"),parse:PB("red","green","blue"),transform:({red:t,green:s,blue:n,alpha:l=1})=>"rgba("+ua.transform(t)+", "+ua.transform(s)+", "+ua.transform(n)+", "+Pl(Ol.transform(l))+")"};function _6(t){let s="",n="",l="",o="";return t.length>5?(s=t.substr(1,2),n=t.substr(3,2),l=t.substr(5,2),o=t.substr(7,2)):(s=t.substr(1,1),n=t.substr(2,1),l=t.substr(3,1),o=t.substr(4,1),s+=s,n+=n,l+=l,o+=o),{red:parseInt(s,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:o?parseInt(o,16)/255:1}}const gc={test:ci("#"),parse:_6,transform:zs.transform},bt={test:t=>zs.test(t)||gc.test(t)||vn.test(t),parse:t=>zs.test(t)?zs.parse(t):vn.test(t)?vn.parse(t):gc.parse(t),transform:t=>po(t)?t:t.hasOwnProperty("red")?zs.transform(t):vn.transform(t)},OB="${c}",RB="${n}";function b6(t){var s,n,l,o;return isNaN(t)&&po(t)&&((n=(s=t.match(eo))===null||s===void 0?void 0:s.length)!==null&&n!==void 0?n:0)+((o=(l=t.match(Fc))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)>0}function LB(t){typeof t=="number"&&(t=`${t}`);const s=[];let n=0;const l=t.match(Fc);l&&(n=l.length,t=t.replace(Fc,OB),s.push(...l.map(bt.parse)));const o=t.match(eo);return o&&(t=t.replace(eo,RB),s.push(...o.map(yo.parse))),{values:s,numColors:n,tokenised:t}}function IB(t){return LB(t).values}function NB(t){const{values:s,numColors:n,tokenised:l}=LB(t),o=s.length;return r=>{let a=l;for(let i=0;i<o;i++)a=a.replace(i<n?OB:RB,i<n?bt.transform(r[i]):Pl(r[i]));return a}}const v6=t=>typeof t=="number"?0:t;function x6(t){const s=IB(t);return NB(t)(s.map(v6))}const uo={test:b6,parse:IB,createTransformer:NB,getAnimatableNone:x6},w6=new Set(["brightness","contrast","saturate","opacity"]);function E6(t){let[s,n]=t.slice(0,-1).split("(");if(s==="drop-shadow")return t;const[l]=n.match(eo)||[];if(!l)return t;const o=n.replace(l,"");let r=w6.has(s)?1:0;return l!==n&&(r*=100),s+"("+r+o+")"}const k6=/([a-z-]*)\(.*?\)/g,_c=Object.assign(Object.assign({},uo),{getAnimatableNone:t=>{const s=t.match(k6);return s?s.map(E6).join(" "):t}});function Ba(t,s,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(s-t)*6*n:n<1/2?s:n<2/3?t+(s-t)*(2/3-n)*6:t}function r2({hue:t,saturation:s,lightness:n,alpha:l}){t/=360,s/=100,n/=100;let o=0,r=0,a=0;if(!s)o=r=a=n;else{const i=n<.5?n*(1+s):n+s-n*s,p=2*n-i;o=Ba(p,i,t+1/3),r=Ba(p,i,t),a=Ba(p,i,t-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:l}}const S6=(t,s,n)=>{const l=t*t,o=s*s;return Math.sqrt(Math.max(0,n*(o-l)+l))},D6=[gc,zs,vn],a2=t=>D6.find(s=>s.test(t)),c2=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,HB=(t,s)=>{let n=a2(t),l=a2(s);Ql(!!n,c2(t)),Ql(!!l,c2(s));let o=n.parse(t),r=l.parse(s);n===vn&&(o=r2(o),n=zs),l===vn&&(r=r2(r),l=zs);const a=Object.assign({},o);return i=>{for(const p in a)p!=="alpha"&&(a[p]=S6(o[p],r[p],i));return a.alpha=ri(o.alpha,r.alpha,i),n.transform(a)}},C6=t=>typeof t=="number",A6=(t,s)=>n=>s(t(n)),jB=(...t)=>t.reduce(A6);function qB(t,s){return C6(t)?n=>ri(t,s,n):bt.test(t)?HB(t,s):VB(t,s)}const UB=(t,s)=>{const n=[...t],l=n.length,o=t.map((r,a)=>qB(r,s[a]));return r=>{for(let a=0;a<l;a++)n[a]=o[a](r);return n}},M6=(t,s)=>{const n=Object.assign(Object.assign({},t),s),l={};for(const o in n)t[o]!==void 0&&s[o]!==void 0&&(l[o]=qB(t[o],s[o]));return o=>{for(const r in l)n[r]=l[r](o);return n}};function i2(t){const s=uo.parse(t),n=s.length;let l=0,o=0,r=0;for(let a=0;a<n;a++)l||typeof s[a]=="number"?l++:s[a].hue!==void 0?r++:o++;return{parsed:s,numNumbers:l,numRGB:o,numHSL:r}}const VB=(t,s)=>{const n=uo.createTransformer(s),l=i2(t),o=i2(s);return l.numHSL===o.numHSL&&l.numRGB===o.numRGB&&l.numNumbers>=o.numNumbers?jB(UB(l.parsed,o.parsed),n):(li(!0,`Complex values '${t}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?s:t}`)},T6=(t,s)=>n=>ri(t,s,n);function $6(t){if(typeof t=="number")return T6;if(typeof t=="string")return bt.test(t)?HB:VB;if(Array.isArray(t))return UB;if(typeof t=="object")return M6}function P6(t,s,n){const l=[],o=n||$6(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=o(t[a],t[a+1]);if(s){const p=Array.isArray(s)?s[a]:s;i=jB(p,i)}l.push(i)}return l}function O6([t,s],[n]){return l=>n(TB(t,s,l))}function R6(t,s){const n=t.length,l=n-1;return o=>{let r=0,a=!1;if(o<=t[0]?a=!0:o>=t[l]&&(r=l-1,a=!0),!a){let p=1;for(;p<n&&!(t[p]>o||p===l);p++);r=p-1}const i=TB(t[r],t[r+1],o);return s[r](i)}}function zB(t,s,{clamp:n=!0,ease:l,mixer:o}={}){const r=t.length;Ql(r===s.length,"Both input and output ranges must be the same length"),Ql(!l||!Array.isArray(l)||l.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),s=[].concat(s),t.reverse(),s.reverse());const a=P6(s,l,o),i=r===2?O6(t,a):R6(t,a);return n?p=>i(mc(t[0],t[r-1],p)):i}const Or=t=>s=>1-t(1-s),ii=t=>s=>s<=.5?t(2*s)/2:(2-t(2*(1-s)))/2,L6=t=>s=>Math.pow(s,t),WB=t=>s=>s*s*((t+1)*s-t),I6=t=>{const s=WB(t);return n=>(n*=2)<1?.5*s(n):.5*(2-Math.pow(2,-10*(n-1)))},YB=1.525,N6=4/11,H6=8/11,j6=9/10,KB=t=>t,pi=L6(2),q6=Or(pi),XB=ii(pi),GB=t=>1-Math.sin(Math.acos(t)),ZB=Or(GB),U6=ii(ZB),yi=WB(YB),V6=Or(yi),z6=ii(yi),W6=I6(YB),Y6=4356/361,K6=35442/1805,X6=16061/1805,hr=t=>{if(t===1||t===0)return t;const s=t*t;return t<N6?7.5625*s:t<H6?9.075*s-9.9*t+3.4:t<j6?Y6*s-K6*t+X6:10.8*t*t-20.52*t+10.72},G6=Or(hr),Z6=t=>t<.5?.5*(1-hr(1-t*2)):.5*hr(t*2-1)+.5;function J6(t,s){return t.map(()=>s||XB).splice(0,t.length-1)}function Q6(t){const s=t.length;return t.map((n,l)=>l!==0?l/(s-1):0)}function eE(t,s){return t.map(n=>n*s)}function jo({from:t=0,to:s=1,ease:n,offset:l,duration:o=300}){const r={done:!1,value:t},a=Array.isArray(s)?s:[t,s],i=eE(l&&l.length===a.length?l:Q6(a),o);function p(){return zB(i,a,{ease:Array.isArray(n)?n:J6(a,n)})}let B=p();return{next:y=>(r.value=B(y),r.done=y>=o,r),flipTarget:()=>{a.reverse(),B=p()}}}function tE({velocity:t=0,from:s=0,power:n=.8,timeConstant:l=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:s};let i=n*t;const p=s+i,B=r===void 0?p:r(p);return B!==p&&(i=B-s),{next:y=>{const u=-i*Math.exp(-y/l);return a.done=!(u>o||u<-o),a.value=a.done?B:B+u,a},flipTarget:()=>{}}}const p2={keyframes:jo,spring:oi,decay:tE};function sE(t){if(Array.isArray(t.to))return jo;if(p2[t.type])return p2[t.type];const s=new Set(Object.keys(t));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?jo:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?oi:jo}function JB(t,s,n=0){return t-s-n}function nE(t,s,n=0,l=!0){return l?JB(s+-t,s,n):s-(t-s)+n}function lE(t,s,n,l){return l?t>=s+n:t<=-n}const oE=t=>{const s=({delta:n})=>t(n);return{start:()=>fc.update(s,!0),stop:()=>r6.update(s)}};function QB(t){var s,n,{from:l,autoplay:o=!0,driver:r=oE,elapsed:a=0,repeat:i=0,repeatType:p="loop",repeatDelay:B=0,onPlay:y,onStop:u,onComplete:d,onRepeat:f,onUpdate:m}=t,g=MB(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=g,x,v=0,F=g.duration,k,w=!1,P=!0,D;const Y=sE(g);!((n=(s=Y).needsInterpolation)===null||n===void 0)&&n.call(s,l,b)&&(D=zB([0,100],[l,b],{clamp:!1}),l=0,b=100);const O=Y(Object.assign(Object.assign({},g),{from:l,to:b}));function I(){v++,p==="reverse"?(P=v%2===0,a=nE(a,F,B,P)):(a=JB(a,F,B),p==="mirror"&&O.flipTarget()),w=!1,f&&f()}function Z(){x.stop(),d&&d()}function q(de){if(P||(de=-de),a+=de,!w){const Fe=O.next(Math.max(0,a));k=Fe.value,D&&(k=D(k)),w=P?Fe.done:a<=0}m==null||m(k),w&&(v===0&&(F??(F=a)),v<i?lE(a,F,B,P)&&I():Z())}function Be(){y==null||y(),x=r(q),x.start()}return o&&Be(),{stop:()=>{u==null||u(),x.stop()}}}function ed(t,s){return s?t*(1e3/s):0}function rE({from:t=0,velocity:s=0,min:n,max:l,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:B,driver:y,onUpdate:u,onComplete:d,onStop:f}){let m;function g(F){return n!==void 0&&F<n||l!==void 0&&F>l}function b(F){return n===void 0?l:l===void 0||Math.abs(n-F)<Math.abs(l-F)?n:l}function x(F){m==null||m.stop(),m=QB(Object.assign(Object.assign({},F),{driver:y,onUpdate:k=>{var w;u==null||u(k),(w=F.onUpdate)===null||w===void 0||w.call(F,k)},onComplete:d,onStop:f}))}function v(F){x(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:p},F))}if(g(t))v({from:t,velocity:s,to:b(t)});else{let F=o*s+t;typeof B<"u"&&(F=B(F));const k=b(F),w=k===n?-1:1;let P,D;const Y=O=>{P=D,D=O,s=ed(O-P,AB().delta),(w===1&&O>k||w===-1&&O<k)&&v({from:O,to:k,velocity:s})};x({type:"decay",from:t,velocity:s,timeConstant:r,power:o,restDelta:p,modifyTarget:B,onUpdate:g(F)?Y:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const td=(t,s)=>1-3*s+3*t,sd=(t,s)=>3*s-6*t,nd=t=>3*t,Fr=(t,s,n)=>((td(s,n)*t+sd(s,n))*t+nd(s))*t,ld=(t,s,n)=>3*td(s,n)*t*t+2*sd(s,n)*t+nd(s),aE=1e-7,cE=10;function iE(t,s,n,l,o){let r,a,i=0;do a=s+(n-s)/2,r=Fr(a,l,o)-t,r>0?n=a:s=a;while(Math.abs(r)>aE&&++i<cE);return a}const pE=8,yE=.001;function uE(t,s,n,l){for(let o=0;o<pE;++o){const r=ld(s,n,l);if(r===0)return s;const a=Fr(s,n,l)-t;s-=a/r}return s}const qo=11,Co=1/(qo-1);function BE(t,s,n,l){if(t===s&&n===l)return KB;const o=new Float32Array(qo);for(let a=0;a<qo;++a)o[a]=Fr(a*Co,t,n);function r(a){let i=0,p=1;const B=qo-1;for(;p!==B&&o[p]<=a;++p)i+=Co;--p;const y=(a-o[p])/(o[p+1]-o[p]),u=i+y*Co,d=ld(u,t,n);return d>=yE?uE(a,u,t,n):d===0?u:iE(a,i,i+Co,t,n)}return a=>a===0||a===1?a:Fr(r(a),s,l)}const da={};var dE=Object.defineProperty,fE=(t,s,n)=>s in t?dE(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,mE=(t,s,n)=>(fE(t,typeof s!="symbol"?s+"":s,n),n);class hE{constructor(){mE(this,"subscriptions",new Set)}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,n,l){if(this.subscriptions.size)for(const o of this.subscriptions)o(s,n,l)}clear(){this.subscriptions.clear()}}var FE=Object.defineProperty,gE=(t,s,n)=>s in t?FE(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,rs=(t,s,n)=>(gE(t,typeof s!="symbol"?s+"":s,n),n);function y2(t){return!Number.isNaN(Number.parseFloat(t))}class _E{constructor(s){rs(this,"current"),rs(this,"prev"),rs(this,"timeDelta",0),rs(this,"lastUpdated",0),rs(this,"updateSubscribers",new hE),rs(this,"stopAnimation"),rs(this,"canTrackVelocity",!1),rs(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:l,timestamp:o}=AB();this.lastUpdated!==o&&(this.timeDelta=l,this.lastUpdated=o),fc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),rs(this,"scheduleVelocityCheck",()=>fc.postRender(this.velocityCheck)),rs(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=y2(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=s,this.canTrackVelocity=y2(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ed(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(n=>{const{stop:l}=s(n);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function bE(t){return new _E(t)}const{isArray:vE}=Array;function xE(){const t=G({}),s=l=>{const o=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};l?vE(l)?l.forEach(o):o(l):Object.keys(t.value).forEach(o)},n=(l,o,r)=>{if(t.value[l])return t.value[l];const a=bE(o);return a.onChange(i=>r[l]=i),t.value[l]=a,a};return pF(s),{motionValues:t,get:n,stop:s}}function wE(t){return Array.isArray(t)}function cn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function fa(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function EE(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function ma(){return{type:"keyframes",ease:"linear",duration:300}}function kE(t){return{type:"keyframes",duration:800,values:t}}const u2={default:EE,x:cn,y:cn,z:cn,rotate:cn,rotateX:cn,rotateY:cn,rotateZ:cn,scaleX:fa,scaleY:fa,scale:fa,backgroundColor:ma,color:ma,opacity:ma};function od(t,s){let n;return wE(s)?n=kE:n=u2[t]||u2.default,{to:s,...n(s)}}const B2={...yo,transform:Math.round},rd={color:bt,backgroundColor:bt,outlineColor:bt,fill:bt,stroke:bt,borderColor:bt,borderTopColor:bt,borderRightColor:bt,borderBottomColor:bt,borderLeftColor:bt,borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,size:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:Do,scaleX:Do,scaleY:Do,scaleZ:Do,skew:an,skewX:an,skewY:an,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:Ol,originX:o2,originY:o2,originZ:ve,zIndex:B2,filter:_c,WebkitFilter:_c,fillOpacity:Ol,strokeOpacity:Ol,numOctaves:B2},ui=t=>rd[t];function bc(t,s){return s&&typeof t=="number"&&s.transform?s.transform(t):t}function SE(t,s){let n=ui(t);return n!==_c&&(n=uo),n.getAnimatableNone?n.getAnimatableNone(s):void 0}const DE={linear:KB,easeIn:pi,easeInOut:XB,easeOut:q6,circIn:GB,circInOut:U6,circOut:ZB,backIn:yi,backInOut:z6,backOut:V6,anticipate:W6,bounceIn:G6,bounceInOut:Z6,bounceOut:hr};function d2(t){if(Array.isArray(t)){const[s,n,l,o]=t;return BE(s,n,l,o)}else if(typeof t=="string")return DE[t];return t}function CE(t){return Array.isArray(t)&&typeof t[0]!="number"}function f2(t,s){return t==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&uo.test(s)&&!s.startsWith("url("))}function AE(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function ME({ease:t,times:s,delay:n,...l}){const o={...l};return s&&(o.offset=s),t&&(o.ease=CE(t)?t.map(d2):d2(t)),n&&(o.elapsed=-n),o}function TE(t,s,n){return Array.isArray(s.to)&&(t.duration||(t.duration=800)),AE(s),$E(t)||(t={...t,...od(n,s.to)}),{...s,...ME(t)}}function $E({delay:t,repeat:s,repeatType:n,repeatDelay:l,from:o,...r}){return!!Object.keys(r).length}function PE(t,s){return t[s]||t.default||t}function OE(t,s,n,l,o){const r=PE(l,t);let a=r.from===null||r.from===void 0?s.get():r.from;const i=f2(t,n);a==="none"&&i&&typeof n=="string"&&(a=SE(t,n));const p=f2(t,a);function B(u){const d={from:a,to:n,velocity:l.velocity?l.velocity:s.getVelocity(),onUpdate:f=>s.set(f)};return r.type==="inertia"||r.type==="decay"?rE({...d,...r}):QB({...TE(r,d,t),onUpdate:f=>{d.onUpdate(f),r.onUpdate&&r.onUpdate(f)},onComplete:()=>{o&&o(),u&&u()}})}function y(u){return s.set(n),o&&o(),u&&u(),{stop:()=>{}}}return!p||!i||r.type===!1?y:B}function RE(){const{motionValues:t,stop:s,get:n}=xE();return{motionValues:t,stop:s,push:(o,r,a,i={},p)=>{const B=a[o],y=n(o,B,a);if(i&&i.immediate){y.set(r);return}const u=OE(o,y,r,i,p);y.start(u)}}}function LE(t,s={},{motionValues:n,push:l,stop:o}=RE()){const r=M(s),a=G(!1);be(n,u=>{a.value=Object.values(u).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const i=u=>{if(!r||!r[u])throw new Error(`The variant ${u} does not exist.`);return r[u]},p=u=>{typeof u=="string"&&(u=i(u));const d=Object.entries(u).map(([m,g])=>{if(m!=="transition")return new Promise(b=>l(m,g,t,u.transition||od(m,u[m]),b))}).filter(Boolean);async function f(){var m,g;await Promise.all(d),(g=(m=u.transition)==null?void 0:m.onComplete)==null||g.call(m)}return Promise.all([f()])};return{isAnimating:a,apply:p,set:u=>{const d=yr(u)?u:i(u);Object.entries(d).forEach(([f,m])=>{f!=="transition"&&l(f,m,t,{immediate:!0})})},leave:async u=>{let d;if(r&&(r.leave&&(d=r.leave),!r.leave&&r.initial&&(d=r.initial)),!d){u();return}await p(d),u()},stop:o}}const Bi=typeof window<"u",IE=()=>Bi&&(window.onpointerdown===null||{}.TEST),NE=()=>Bi&&(window.ontouchstart===null||{}.TEST),HE=()=>Bi&&(window.onmousedown===null||{}.TEST);function jE({target:t,state:s,variants:n,apply:l}){const o=M(n),r=G(!1),a=G(!1),i=G(!1),p=A(()=>{let y=[...Object.keys(s.value||{})];return o&&(o.hovered&&(y=[...y,...Object.keys(o.hovered)]),o.tapped&&(y=[...y,...Object.keys(o.tapped)]),o.focused&&(y=[...y,...Object.keys(o.focused)])),y}),B=A(()=>{const y={};Object.assign(y,s.value),r.value&&o.hovered&&Object.assign(y,o.hovered),a.value&&o.tapped&&Object.assign(y,o.tapped),i.value&&o.focused&&Object.assign(y,o.focused);for(const u in y)p.value.includes(u)||delete y[u];return y});o.hovered&&(ke(t,"mouseenter",()=>r.value=!0),ke(t,"mouseleave",()=>{r.value=!1,a.value=!1})),o.tapped&&(HE()&&(ke(t,"mousedown",()=>a.value=!0),ke(t,"mouseup",()=>a.value=!1)),IE()&&(ke(t,"pointerdown",()=>a.value=!0),ke(t,"pointerup",()=>a.value=!1)),NE()&&(ke(t,"touchstart",()=>a.value=!0),ke(t,"touchend",()=>a.value=!1))),o.focused&&(ke(t,"focus",()=>i.value=!0),ke(t,"blur",()=>i.value=!1)),be([r,a,i],()=>{l(B.value)})}function qE({set:t,target:s,variants:n,variant:l}){const o=M(n);be(()=>s,()=>{o&&(o.initial&&(t("initial"),l.value="initial"),o.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function UE({state:t,apply:s}){be(t,n=>{n&&s(n)},{immediate:!0})}function ad({target:t,variants:s,variant:n}){const l=M(s);l&&(l.visible||l.visibleOnce)&&$F(t,([{isIntersecting:o}])=>{l.visible?o?n.value="visible":n.value="initial":l.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function VE(t,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&qE(t),s.syncVariants&&UE(t),s.visibilityHooks&&ad(t),s.eventListeners&&jE(t)}function cd(t={}){const s=Ye({...t}),n=G({});return be(s,()=>{const l={};for(const[o,r]of Object.entries(s)){const a=ui(o),i=bc(r,a);l[o]=i}n.value=l},{immediate:!0,deep:!0}),{state:s,style:n}}function di(t,s){be(()=>lt(t),n=>{n&&s(n)},{immediate:!0})}const zE={x:"translateX",y:"translateY",z:"translateZ"};function id(t={},s=!0){const n=Ye({...t}),l=G("");return be(n,o=>{let r="",a=!1;if(s&&(o.x||o.y||o.z)){const i=[o.x||0,o.y||0,o.z||0].map(p=>bc(p,ve)).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,p]of Object.entries(o)){if(s&&(i==="x"||i==="y"||i==="z"))continue;const B=ui(i),y=bc(p,B);r+=`${zE[i]||i}(${y}) `}s&&!a&&(r+="translateZ(0px) "),l.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:l}}const WE=["","X","Y","Z"],YE=["perspective","translate","scale","rotate","skew"],pd=["transformPerspective","x","y","z"];YE.forEach(t=>{WE.forEach(s=>{const n=t+s;pd.push(n)})});const KE=new Set(pd);function fi(t){return KE.has(t)}const XE=new Set(["originX","originY","originZ"]);function yd(t){return XE.has(t)}function GE(t){const s={},n={};return Object.entries(t).forEach(([l,o])=>{fi(l)||yd(l)?s[l]=o:n[l]=o}),{transform:s,style:n}}function Rr(t){const{transform:s,style:n}=GE(t),{transform:l}=id(s),{style:o}=cd(n);return l.value&&(o.value.transform=l.value),o.value}function ZE(t,s){let n,l;const{state:o,style:r}=cd();return di(t,a=>{l=a;for(const i of Object.keys(rd))a.style[i]===null||a.style[i]===""||fi(i)||yd(i)||(o[i]=a.style[i]);n&&Object.entries(n).forEach(([i,p])=>a.style[i]=p),s&&s(o)}),be(r,a=>{if(!l){n=a;return}for(const i in a)l.style[i]=a[i]},{immediate:!0}),{style:o}}function JE(t){const s=t.trim().split(/\) |\)/);if(s.length===1)return{};const n=l=>l.endsWith("px")||l.endsWith("deg")?Number.parseFloat(l):Number.isNaN(Number(l))?Number(l):l;return s.reduce((l,o)=>{if(!o)return l;const[r,a]=o.split("("),p=a.split(",").map(y=>n(y.endsWith(")")?y.replace(")",""):y.trim())),B=p.length===1?p[0]:p;return{...l,[r]:B}},{})}function QE(t,s){Object.entries(JE(s)).forEach(([n,l])=>{const o=["x","y","z"];if(n==="translate3d"){if(l===0){o.forEach(r=>t[r]=0);return}l.forEach((r,a)=>t[o[a]]=r);return}if(l=Number.parseFloat(`${l}`),n==="translateX"){t.x=l;return}if(n==="translateY"){t.y=l;return}if(n==="translateZ"){t.z=l;return}t[n]=l})}function e7(t,s){let n,l;const{state:o,transform:r}=id();return di(t,a=>{l=a,a.style.transform&&QE(o,a.style.transform),n&&(a.style.transform=n),s&&s(o)}),be(r,a=>{if(!l){n=a;return}l.style.transform=a},{immediate:!0}),{transform:o}}function t7(t){return Object.entries(t)}function s7(t,s){const n=Ye({}),l=a=>Object.entries(a).forEach(([i,p])=>n[i]=p),{style:o}=ZE(t,l),{transform:r}=e7(t,l);return be(n,a=>{t7(a).forEach(([i,p])=>{const B=fi(i)?r:o;B[i]&&B[i]===p||(B[i]=p)})},{immediate:!0,deep:!0}),di(t,()=>s&&l(s)),{motionProperties:n,style:o,transform:r}}function n7(t={}){const s=M(t),n=G();return{state:A(()=>{if(n.value)return s[n.value]}),variant:n}}function ud(t,s={},n){const{motionProperties:l}=s7(t),{variant:o,state:r}=n7(s),a=LE(l,s),i={target:t,variant:o,variants:s,state:r,motionProperties:l,...a};return VE(i,n),i}const Bd=["delay","duration"],l7=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Bd];function o7(t){return Bd.includes(t)}function r7(t,s){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};if(n){n.variants&&yr(n.variants)&&(s.value={...s.value,...n.variants});for(let l of l7)if(!(!n||!n[l])){if(o7(l)&&typeof n[l]=="number"){for(const o of["enter","visible","visibleOnce"]){const r=s.value[o];r!=null&&(r.transition??(r.transition={}),r.transition[l]=n[l])}continue}if(yr(n[l])){const o=n[l];l==="visible-once"&&(l="visibleOnce"),s.value[l]=o}}}}function ha(t,s=!1){return{created:(o,r,a)=>{const i=r.value&&typeof r.value=="string"?r.value:a.key;i&&da[i]&&da[i].stop();const p=s?structuredClone(me(t)||{}):t||{},B=G(p);typeof r.value=="object"&&(B.value=r.value),r7(a,B);const u=ud(o,B,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});o.motionInstance=u,i&&(da[i]=u)},mounted:(o,r,a)=>{o.motionInstance&&ad(o.motionInstance)},getSSRProps(o,r){let{initial:a}=o.value||r&&(r==null?void 0:r.props)||{};a=M(a);const i=kB({},(t==null?void 0:t.initial)||{},a||{});return!i||Object.keys(i).length===0?void 0:{style:Rr(i)}}}}const a7={initial:{opacity:0},enter:{opacity:1}},c7={initial:{opacity:0},visible:{opacity:1}},i7={initial:{opacity:0},visibleOnce:{opacity:1}},p7={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},y7={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},u7={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},B7={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},d7={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},f7={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},m7={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},h7={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},F7={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},g7={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},_7={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},b7={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},v7={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},x7={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},w7={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},E7={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},k7={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},S7={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},D7={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},C7={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},A7={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},M7={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},T7={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},$7={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},P7={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},O7={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},R7={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},_n={__proto__:null,fade:a7,fadeVisible:c7,fadeVisibleOnce:i7,pop:p7,popVisible:y7,popVisibleOnce:u7,rollBottom:v7,rollLeft:B7,rollRight:m7,rollTop:g7,rollVisibleBottom:x7,rollVisibleLeft:d7,rollVisibleOnceBottom:w7,rollVisibleOnceLeft:f7,rollVisibleOnceRight:F7,rollVisibleOnceTop:b7,rollVisibleRight:h7,rollVisibleTop:_7,slideBottom:P7,slideLeft:E7,slideRight:D7,slideTop:M7,slideVisibleBottom:O7,slideVisibleLeft:k7,slideVisibleOnceBottom:R7,slideVisibleOnceLeft:S7,slideVisibleOnceRight:A7,slideVisibleOnceTop:$7,slideVisibleRight:C7,slideVisibleTop:T7};function L7(t){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(s.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(l,o=>n.charAt(s.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const dd=Symbol(import.meta.dev?"motionCustomPresets":""),fd={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function I7(t){return Object.prototype.toString.call(t)==="[object Object]"}function vc(t){if(Array.isArray(t))return t.map(vc);if(I7(t)){const s={};for(const n in t)s[n]=vc(t[n]);return s}return t}function md(t){const s=Ye({}),n=$(dd,{}),l=A(()=>t.preset==null?{}:n!=null&&t.preset in n?structuredClone(me(n)[t.preset]):t.preset in _n?structuredClone(_n[t.preset]):{}),o=A(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused}));function r(p,B){for(const y of["delay","duration"]){if(B[y]==null)continue;const u=Number.parseInt(B[y]);for(const d of["enter","visible","visibleOnce"]){const f=p[d];f!=null&&(f.transition??(f.transition={}),f.transition[y]=u)}}return p}const a=A(()=>{const p=kB({},o.value,l.value,t.variants||{});return r({...p},t)});if(import.meta.dev){t.preset!=null&&(_n==null?void 0:_n[t.preset])==null&&(n==null?void 0:n[t.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${t.preset}\` not found.`);const p=B=>{var y;(y=B.variants)!=null&&y.initial&&B.set("initial"),nt(()=>{var u,d,f;(u=B.variants)!=null&&u.enter&&B.apply("enter"),(d=B.variants)!=null&&d.visible&&B.apply("visible"),(f=B.variants)!=null&&f.visibleOnce&&B.apply("visibleOnce")})};Sr(()=>{for(const B in s)p(s[B])})}function i(p,B,y){var u;p.props??(p.props={}),(u=p.props).style??(u.style={}),p.props.style={...p.props.style,...y};const d=r(vc(a.value),p.props);return p.props.onVnodeMounted=({el:f})=>{s[B]=ud(f,d)},p.props.onVnodeUpdated=({el:f})=>{const m=Rr(s[B].state);for(const[g,b]of Object.entries(m))f.style[g]=b},p}return{motionConfig:a,setNodeInstance:i}}const N7=De({name:"Motion",props:{...fd,is:{type:[String,Object],default:"div"}},setup(t){const s=Cy(),{motionConfig:n,setNodeInstance:l}=md(t);return()=>{const o=Rr(n.value.initial||{}),r=Tt(t.is,void 0,s);return l(r,0,o),r}}}),H7=De({name:"MotionGroup",props:{...fd,is:{type:[String,Object],required:!1}},setup(t){const s=Cy(),{motionConfig:n,setNodeInstance:l}=md(t);return()=>{var a;const o=Rr(n.value.initial||{}),r=((a=s.default)==null?void 0:a.call(s))||[];for(let i=0;i<r.length;i++){const p=r[i];p.type===Ae&&Array.isArray(p.children)?p.children.forEach(function B(y,u){if(y!=null){if(Array.isArray(y)){B(y,u);return}typeof y=="object"&&l(y,u,o)}}):l(p,i,o)}return t.is?Tt(t.is,void 0,r):r}}}),j7={install(t,s){if(t.directive("motion",ha()),!s||s&&!s.excludePresets)for(const n in _n){const l=_n[n];t.directive(`motion-${L7(n)}`,ha(l,!0))}if(s&&s.directives)for(const n in s.directives){const l=s.directives[n];!l.initial&&import.meta.dev&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,ha(l,!0))}t.provide(dd,s==null?void 0:s.directives),t.component("Motion",N7),t.component("MotionGroup",H7)}};var m2;const Ll=typeof window<"u",q7=Object.prototype.toString,U7=t=>q7.call(t)==="[object Object]";Ll&&((m2=window==null?void 0:window.navigator)!=null&&m2.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function V7(t){return Sc()?(L2(t),!0):!1}function z7(t){var s;const n=M(t);return(s=n==null?void 0:n.$el)!=null?s:n}const W7=Ll?window:void 0,h2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F2="__vueuse_ssr_handlers__";h2[F2]=h2[F2]||{};function Y7(t,s={}){const{immediate:n=!0,window:l=W7}=s,o=G(!1);let r=null;function a(){!o.value||!l||(t(),r=l.requestAnimationFrame(a))}function i(){!o.value&&l&&(o.value=!0,a())}function p(){o.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return n&&i(),V7(p),{isActive:o,pause:p,resume:i}}var g2;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(g2||(g2={}));const Lr="vue-starport-injection",hd="vue-starport-options",K7={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Fd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var X7=Object.defineProperty,gr=Object.getOwnPropertySymbols,gd=Object.prototype.hasOwnProperty,_d=Object.prototype.propertyIsEnumerable,_2=(t,s,n)=>s in t?X7(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,G7=(t,s)=>{for(var n in s||(s={}))gd.call(s,n)&&_2(t,n,s[n]);if(gr)for(var n of gr(s))_d.call(s,n)&&_2(t,n,s[n]);return t},b2=(t,s)=>{var n={};for(var l in t)gd.call(t,l)&&s.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&gr)for(var l of gr(t))s.indexOf(l)<0&&_d.call(t,l)&&(n[l]=t[l]);return n};const Z7=De({name:"StarportProxy",props:G7({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Fd),setup(t,s){const n=$(Lr),l=A(()=>n.getInstance(t.port,t.component)),o=G(),r=l.value.generateId(),a=G(!1);return l.value.isVisible||(l.value.land(),a.value=!0),en(async()=>{if(l.value.el){console.error(`[Vue Starport] Multiple proxies of "${l.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(l.value.el=o.value,await nt(),a.value=!0,l.value.rect.update(),l.value.rect.width===0||l.value.rect.height===0){const i=l.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${l.value.componentName}" (port "${t.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",l.value.el),console.warn("rect:",l.value.rect)}}),ro(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await nt(),await nt(),!l.value.el&&n.dispose(l.value.port))}),be(()=>t,async()=>{l.value.props&&await nt();const i=t,{props:p}=i,B=b2(i,["props"]);l.value.props=p||{},l.value.setLocalOptions(B)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:p,mountedProps:B}=i,y=b2(i,["initialProps","mountedProps"]),u=we(y,(a.value?B:p)||{});return Tt("div",we(u,{id:r,ref:o,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),s.slots.default?Tt(s.slots.default):void 0)}}});var J7=Object.defineProperty,Q7=Object.defineProperties,e5=Object.getOwnPropertyDescriptors,v2=Object.getOwnPropertySymbols,t5=Object.prototype.hasOwnProperty,s5=Object.prototype.propertyIsEnumerable,x2=(t,s,n)=>s in t?J7(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,n5=(t,s)=>{for(var n in s||(s={}))t5.call(s,n)&&x2(t,n,s[n]);if(v2)for(var n of v2(s))s5.call(s,n)&&x2(t,n,s[n]);return t},l5=(t,s)=>Q7(t,e5(s));const o5=De({name:"Starport",inheritAttrs:!0,props:Fd,setup(t,s){const n=G(!1);return en(()=>{if(n.value=!0,!$(Lr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const l=(i=(a=s.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const o=l[0];let r=o.type;return(!U7(r)||As(r))&&(r={render(){return l}}),Tt(Z7,l5(n5({},t),{key:t.port,component:Mc(r),props:o.props}))}}});function r5(t){const s=Ye({height:0,width:0,left:0,top:0,update:l,listen:r,pause:a,margin:"0px",padding:"0px"}),n=Ll?document.documentElement||document.body:void 0;function l(){if(!Ll)return;const i=z7(t);if(!i)return;const{height:p,width:B,left:y,top:u}=i.getBoundingClientRect(),d=window.getComputedStyle(i),f=d.margin,m=d.padding;Object.assign(s,{height:p,width:B,left:y,top:n.scrollTop+u,margin:f,padding:m})}const o=Y7(l,{immediate:!1});function r(){Ll&&(l(),o.resume())}function a(){o.pause()}return s}let a5=(t,s=21)=>(n=s)=>{let l="",o=n;for(;o--;)l+=t[Math.random()*t.length|0];return l};const w2=a5("abcdefghijklmnopqrstuvwxyz",5);function E2(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function c5(t){var s;return t.name||((s=t.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var i5=Object.defineProperty,k2=Object.getOwnPropertySymbols,p5=Object.prototype.hasOwnProperty,y5=Object.prototype.propertyIsEnumerable,S2=(t,s,n)=>s in t?i5(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Fa=(t,s)=>{for(var n in s||(s={}))p5.call(s,n)&&S2(t,n,s[n]);if(k2)for(var n of k2(s))y5.call(s,n)&&S2(t,n,s[n]);return t};function u5(t,s,n={}){const l=c5(s),o=E2(l)||w2(),r=G(),a=G(null),i=G(!1),p=G(!1),B=jd(!0),y=G({}),u=A(()=>Fa(Fa(Fa({},K7),n),y.value)),d=G(0);let f;B.run(()=>{f=r5(r),be(r,async x=>{x&&(p.value=!0),await nt(),r.value||(p.value=!1)})});const m=E2(t);function g(){return`starport-${o}-${m}-${w2()}`}const b=g();return Ye({el:r,id:b,port:t,props:a,rect:f,scope:B,isLanded:i,isVisible:p,options:u,liftOffTime:d,component:s,componentName:l,componentId:o,generateId:g,setLocalOptions(x={}){y.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){i.value&&(i.value=!1,d.value=Date.now(),f.listen())},land(){i.value||(i.value=!0,f.pause())}})}function B5(t){const s=Ye(new Map);function n(o,r){let a=s.get(o);return a||(a=u5(o,r,t),s.set(o,a)),a.component=r,a}function l(o){var r;(r=s.get(o))==null||r.scope.stop(),s.delete(o)}return{portMap:s,dispose:l,getInstance:n}}var d5=Object.defineProperty,f5=Object.defineProperties,m5=Object.getOwnPropertyDescriptors,D2=Object.getOwnPropertySymbols,h5=Object.prototype.hasOwnProperty,F5=Object.prototype.propertyIsEnumerable,C2=(t,s,n)=>s in t?d5(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,g5=(t,s)=>{for(var n in s||(s={}))h5.call(s,n)&&C2(t,n,s[n]);if(D2)for(var n of D2(s))F5.call(s,n)&&C2(t,n,s[n]);return t},_5=(t,s)=>f5(t,m5(s));const b5=De({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const s=$(Lr);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=A(()=>s.getInstance(t.port,t.component)),l=A(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),o=A(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),p=n.value.rect,B={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!n.value.isVisible||!n.value.el?_5(g5({},B),{zIndex:-1,display:"none"}):(n.value.isLanded?B.display="none":Object.assign(B,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),B)}),r={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Tt("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Tt(N1,{to:a?`#${l.value}`:"body",disabled:!a},Tt(n.value.component,we(r,n.value.props))))}}}),v5=De({name:"StarportCarrier",setup(t,{slots:s}){const n=B5($(hd,{}));return Vt().appContext.app.provide(Lr,n),()=>{var o;return[(o=s.default)==null?void 0:o.call(s),Array.from(n.portMap.entries()).map(([r,{component:a}])=>Tt(b5,{key:r,port:r,component:a}))]}}});function x5(t={}){return{install(s){s.provide(hd,t),s.component("Starport",o5),s.component("StarportCarrier",v5)}}}function w5(t){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),t.app.use(j7),t.app.use(x5({keepAlive:!0}))}function St(t,s,n){var l;return((l=t.instance)==null?void 0:l.$).provides[s]??n}function E5(){return{install(t){t.directive("click",{name:"v-click",mounted(s,n){var y,u,d,f,m,g;if($l.value||(y=St(n,Cl))!=null&&y.value)return;const l=St(n,mn),o=St(n,Dl),r=St(n,qa),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,p=((u=l==null?void 0:l.value)==null?void 0:u.length)||0,B=i?Oh:Jr;if(l&&!((d=l==null?void 0:l.value)!=null&&d.includes(s))&&l.value.push(s),n.value==null&&(n.value=(f=l==null?void 0:l.value)==null?void 0:f.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=l==null?void 0:l.value)==null?void 0:m.length)||0)+Number(n.value)),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[s]);else if(!((g=r==null?void 0:r.value.get(n.value))!=null&&g.includes(s))){const b=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[s].concat(b))}s==null||s.classList.toggle(un,!0),o&&be(o,()=>{const b=(o==null?void 0:o.value)??0,x=n.value!=null?b>=n.value:b>p;s.classList.contains(Qr)||s.classList.toggle(B,!x),a!==!1&&a!==void 0&&s.classList.toggle(B,x),s.classList.toggle(yl,!1);const v=r==null?void 0:r.value.get(b);v==null||v.forEach((F,k)=>{F.classList.toggle(vo,!1),k===v.length-1?F.classList.toggle(yl,!0):F.classList.toggle(vo,!0)}),s.classList.contains(yl)||s.classList.toggle(vo,x)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(un,!1);const l=St(n,mn);l!=null&&l.value&&Ua(l.value,s)}}),t.directive("after",{name:"v-after",mounted(s,n){var i,p,B;if($l.value||(i=St(n,Cl))!=null&&i.value)return;const l=St(n,mn),o=St(n,Dl),r=St(n,qa),a=l==null?void 0:l.value.length;n.value==null&&(n.value=l==null?void 0:l.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((p=l==null?void 0:l.value)==null?void 0:p.length)||0)+Number(n.value)),r!=null&&r.value.has(n.value)?(B=r==null?void 0:r.value.get(n.value))==null||B.push(s):r==null||r.value.set(n.value,[s]),s==null||s.classList.toggle(un,!0),o&&be(o,()=>{const y=(o.value??0)>=(n.value??a??0);s.classList.contains(Qr)||s.classList.toggle(Jr,!y),s.classList.toggle(yl,!1),s.classList.contains(yl)||s.classList.toggle(vo,y)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(un,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(s,n){var a,i,p;if($l.value||(a=St(n,Cl))!=null&&a.value)return;const l=St(n,mn),o=St(n,Dl),r=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((p=l==null?void 0:l.value)!=null&&p.includes(s))&&l.value.push(s),s==null||s.classList.toggle(un,!0),o&&be(o,()=>{const B=(o==null?void 0:o.value)??0,y=n.value!=null?B>=n.value:B>r;s.classList.toggle(Jr,y),s.classList.toggle(Qr,y)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(un,!1);const l=St(n,mn);l!=null&&l.value&&Ua(l.value,s)}})}}}function k5(t,s){const n=vB(t),l=xB(s,n.currentRoute,n.currentPage);return{nav:{...n,...l},configs:Me,themeConfigs:A(()=>Me.themeConfig)}}function S5(){return{install(t){const s=k5(Ut,Ht);t.provide(N,Ye(s))}}}const ol=Im(t6);ol.use(xt);ol.use(Th());ol.use(E5());ol.use(S5());w5({app:ol,router:xt});ol.mount("#app");export{Zc as $,c3 as A,G as B,M5 as C,ft as D,Ke as E,Ae as F,c_ as G,K4 as H,Ht as I,mr as J,U4 as K,ia as L,en as M,Ye as N,C5 as O,T5 as P,be as Q,T as R,sB as S,Te as T,Bt as U,g_ as V,Yl as W,oa as X,H3 as Y,Gc as Z,H as _,N as a,Xe as a0,O3 as a1,g9 as a2,D5 as a3,es as a4,Fl as a5,bn as a6,Bs as a7,tc as a8,Xg as a9,Gg as aa,Zg as ab,Qg as ac,hy as ad,qc as ae,$5 as af,gt as ag,So as ah,N9 as ai,fu as aj,e_ as ak,ro as al,du as b,Me as c,De as d,f1 as e,le as f,e as g,M as h,$ as i,Ge as j,N4 as k,c as l,W as m,wt as n,E as o,ge as p,Vc as q,tl as r,ns as s,jt as t,A5 as u,A as v,ea as w,R as x,Yu as y,y3 as z};
