"use strict";(self.webpackChunkmath_101=self.webpackChunkmath_101||[]).push([[7277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||s[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"intro",sidebar_position:1},i="1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5",p={unversionedId:"python/numpy/intro",id:"python/numpy/intro",title:"1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5",description:"\u672c\u6587\u53c2\u8003:",source:"@site/docs/python/numpy/intro.md",sourceDirName:"python/numpy",slug:"/python/numpy/intro",permalink:"/math201/docs/python/numpy/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"NumPy\u6559\u7a0b",permalink:"/math201/docs/category/numpy\u6559\u7a0b"},next:{title:"2. \u5411\u91cf(Vector): \u4e00\u7ef4\u6570\u7ec4",permalink:"/math201/docs/python/numpy/vector"}},l={},u=[{value:"1. NumPy \u901f\u67e5\u624b\u518c",id:"1-numpy-\u901f\u67e5\u624b\u518c",level:2},{value:"2. \u5b89\u88c5",id:"2-\u5b89\u88c5",level:2},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:2}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-numpy\u7b80\u4ecb\u4e0e\u5b89\u88c5"},"1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5"),(0,a.kt)("p",null,"\u672c\u6587\u53c2\u8003: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d"},"NumPy Illustrated: The Visual Guide to NumPy")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://jalammar.github.io/visual-numpy/"},"A Visual Intro to NumPy and Data Representation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/"},"\u300aPython Data Science Handbook\u300b"))),(0,a.kt)("h2",{id:"1-numpy-\u901f\u67e5\u624b\u518c"},"1. NumPy \u901f\u67e5\u624b\u518c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Numpy Cheat Sheet",src:n(8781).Z,width:"2908",height:"2055"})),(0,a.kt)("h2",{id:"2-\u5b89\u88c5"},"2. \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pip install numpy\n")),(0,a.kt)("h2",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n")))}m.isMDXComponent=!0},8781:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/numpy-cheat-sheet-12e08c261f28124426bf1510c9dae5a1.png"}}]);