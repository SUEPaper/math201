"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[5286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"macos",sidebar_position:3},l="MacOS \u5b89\u88c5",i={unversionedId:"python/install/macos",id:"python/install/macos",title:"MacOS \u5b89\u88c5",description:"\u5b89\u88c5C\u7f16\u8bd1\u5668",source:"@site/docs/python/install/macos.md",sourceDirName:"python/install",slug:"/python/install/macos",permalink:"/math201/docs/python/install/macos",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"macos",sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"Ubuntu Linux \u5b89\u88c5",permalink:"/math201/docs/python/install/ubuntu"},next:{title:"VS Code \u642d\u5efa Python \u5f00\u53d1\u73af\u5883",permalink:"/math201/docs/python/install/vscode"}},p={},c=[{value:"\u5b89\u88c5C\u7f16\u8bd1\u5668",id:"\u5b89\u88c5c\u7f16\u8bd1\u5668",level:2},{value:"\u914d\u7f6eHomebrew \u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6ehomebrew-\u73af\u5883\u53d8\u91cf",level:2},{value:"Homebrew \u5b89\u88c5Python",id:"homebrew-\u5b89\u88c5python",level:2},{value:"\u8fd0\u884cPython\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668(REPL)",id:"\u8fd0\u884cpython\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668repl",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos-\u5b89\u88c5"},"MacOS \u5b89\u88c5"),(0,o.kt)("h2",{id:"\u5b89\u88c5c\u7f16\u8bd1\u5668"},"\u5b89\u88c5C\u7f16\u8bd1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,o.kt)("h2",{id:"\u914d\u7f6ehomebrew-\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6eHomebrew \u73af\u5883\u53d8\u91cf"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210Homebrew\u540e\uff0c\u9700\u5c06\u5176\u6240\u5728\u8def\u5f84\u63d2\u5165\u5230PATH\u73af\u5883\u53d8\u91cf\u7684\u6700\u524d\u9762\uff0c\u5373\u5728\u60a8\u6240\u767b\u5f55\u7528\u6237\u7684 ~/.profile \u6587\u4ef6\u672b\u5c3e\u52a0\u4e0a\u8fd9\u4e00\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH\n")),(0,o.kt)("h2",{id:"homebrew-\u5b89\u88c5python"},"Homebrew \u5b89\u88c5Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python\n")),(0,o.kt)("h2",{id:"\u8fd0\u884cpython\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668repl"},"\u8fd0\u884cPython\u4ea4\u4e92\u5f0f\u89e3\u91ca\u5668(REPL)"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u201c\u8bfb\u53d6-\u6c42\u503c-\u8f93\u51fa\u201d\u5faa\u73af\uff08\u82f1\u8bed\uff1aRead-Eval-Print Loop\uff0c\u7b80\u79f0REPL\uff09\uff0c\u4e5f\u88ab\u79f0\u505a\u4ea4\u4e92\u5f0f\u9876\u5c42\u6784\u4ef6\uff08\u82f1\u8bed\uff1ainteractive toplevel\uff09\uff0c\u662f\u4e00\u4e2a\u7b80\u5355\u7684\uff0c\u4ea4\u4e92\u5f0f\u7684\u7f16\u7a0b\u73af\u5883\u3002\u8fd9\u4e2a\u8bcd\u5e38\u5e38\u7528\u4e8e\u6307\u4ee3\u4e00\u4e2aLisp\u7684\u4ea4\u4e92\u5f0f\u5f00\u53d1\u73af\u5883\uff0c\u4e5f\u80fd\u6307\u4ee3\u547d\u4ee4\u884c\u7684\u6a21\u5f0f\u3002\u2014\u2014\u2014",(0,o.kt)("a",{parentName:"p",href:"https://zh.m.wikipedia.org/zh-hans/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF"},"\u7ef4\u57fa\u767e\u79d1"))),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff0c\u4fbf\u53ef\u8fdb\u5165Python\u7684REPL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3\n")),(0,o.kt)("p",null,"\u89c1\u5230\u5982\u4e0b\u754c\u9762\u4fbf\u8bf4\u660ePython\u5b89\u88c5\u6210\u529f\u4e86\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3811).Z,width:"1974",height:"1186"})))}u.isMDXComponent=!0},3811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mac_python_repl-2f49968f5f7bcf7129f47badc3b48363.png"}}]);