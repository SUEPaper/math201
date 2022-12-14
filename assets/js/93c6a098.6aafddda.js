"use strict";(self.webpackChunkmath_101=self.webpackChunkmath_101||[]).push([[6960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||u;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<u;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const u={id:"ubuntu",sidebar_position:2},l="Ubuntu Linux \u5b89\u88c5 MiKTeX",i={unversionedId:"latex/install/ubuntu",id:"latex/install/ubuntu",title:"Ubuntu Linux \u5b89\u88c5 MiKTeX",description:"\u914d\u7f6eUbuntu\u5b89\u88c5\u6e90",source:"@site/docs/latex/install/ubuntu.md",sourceDirName:"latex/install",slug:"/latex/install/ubuntu",permalink:"/math201/docs/latex/install/ubuntu",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ubuntu",sidebar_position:2},sidebar:"latexSidebar",previous:{title:"Windows \u5b89\u88c5 MiKTeX",permalink:"/math201/docs/latex/install/windows"},next:{title:"MacOS \u5b89\u88c5 BasicTeX",permalink:"/math201/docs/latex/install/macos"}},o={},s=[{value:"\u914d\u7f6eUbuntu\u5b89\u88c5\u6e90",id:"\u914d\u7f6eubuntu\u5b89\u88c5\u6e90",level:2},{value:"1. \u6ce8\u518c GPG Key",id:"1-\u6ce8\u518c-gpg-key",level:4},{value:"2. \u6ce8\u518c\u5b89\u88c5\u6e90",id:"2-\u6ce8\u518c\u5b89\u88c5\u6e90",level:4},{value:"3. \u547d\u4ee4\u884c\u5b89\u88c5MiKTeX",id:"3-\u547d\u4ee4\u884c\u5b89\u88c5miktex",level:4},{value:"MiKTeX\u8fdc\u7a0b\u4ed3\u5e93\u914d\u7f6e",id:"miktex\u8fdc\u7a0b\u4ed3\u5e93\u914d\u7f6e",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ubuntu-linux-\u5b89\u88c5-miktex"},"Ubuntu Linux \u5b89\u88c5 MiKTeX"),(0,a.kt)("h2",{id:"\u914d\u7f6eubuntu\u5b89\u88c5\u6e90"},"\u914d\u7f6eUbuntu\u5b89\u88c5\u6e90"),(0,a.kt)("h4",{id:"1-\u6ce8\u518c-gpg-key"},"1. \u6ce8\u518c GPG Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys D6BC243565B2087BC3F897C9277A7293F59E4889\n")),(0,a.kt)("h4",{id:"2-\u6ce8\u518c\u5b89\u88c5\u6e90"},"2. \u6ce8\u518c\u5b89\u88c5\u6e90"),(0,a.kt)("p",null,"\u4e0d\u540c\u7684Ubuntu\u7684\u7248\u672c\u6240\u9700\u8981\u6dfb\u52a0\u7684\u6e90\u4e0d\u540c\uff0c\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu 22.04 LTS (Jammy Jellyfish):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb http://miktex.org/download/ubuntu jammy universe" | sudo tee /etc/apt/sources.list.d/miktex.list\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS (Focal Fossa):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb http://miktex.org/download/ubuntu focal universe" | sudo tee /etc/apt/sources.list.d/miktex.list\n')),(0,a.kt)("h4",{id:"3-\u547d\u4ee4\u884c\u5b89\u88c5miktex"},"3. \u547d\u4ee4\u884c\u5b89\u88c5MiKTeX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install miktex\n")),(0,a.kt)("h2",{id:"miktex\u8fdc\u7a0b\u4ed3\u5e93\u914d\u7f6e"},"MiKTeX\u8fdc\u7a0b\u4ed3\u5e93\u914d\u7f6e"),(0,a.kt)("p",null,"\u7531\u4e8e\u4f17\u6240\u5468\u77e5\u7684\u539f\u56e0\uff0c\u5728\u4e2d\u56fd\u5927\u9646\u8bbf\u95ee\u9ed8\u8ba4\u7684MiKTeX\u8fdc\u7a0b\u5b8f\u5305\u7ba1\u7406\u5e93\u975e\u5e38\u6162\uff0c\u56e0\u6b64\u8981\u5c06MiKTeX\u7684\u8fdc\u7a0b\u5b8f\u5305\u7ba1\u7406\u5e93\u914d\u7f6e\u4e3a\u4e2d\u56fd\u5927\u9646\u5185\u7684\u955c\u50cf\u4ed3\u5e93\u3002"))}p.isMDXComponent=!0}}]);