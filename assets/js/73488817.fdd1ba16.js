"use strict";(self.webpackChunkmath_101=self.webpackChunkmath_101||[]).push([[7277],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9655:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={id:"intro",sidebar_position:1},i="1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5",o={unversionedId:"python/numpy/intro",id:"python/numpy/intro",title:"1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5",description:"\u672c\u6587\u53c2\u8003:",source:"@site/docs/python/numpy/intro.md",sourceDirName:"python/numpy",slug:"/python/numpy/intro",permalink:"/math201/docs/python/numpy/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"NumPy\u6559\u7a0b",permalink:"/math201/docs/category/numpy\u6559\u7a0b"},next:{title:"2. \u5411\u91cf(Vector): \u4e00\u7ef4\u6570\u7ec4",permalink:"/math201/docs/python/numpy/vector"}},p={},m=[{value:"1. NumPy \u901f\u67e5\u624b\u518c",id:"1-numpy-\u901f\u67e5\u624b\u518c",level:2},{value:"2. \u5b89\u88c5",id:"2-\u5b89\u88c5",level:2},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:2},{value:"4. NumPy\u6570\u7ec4 vs Python \u5217\u8868",id:"4-numpy\u6570\u7ec4-vs-python-\u5217\u8868",level:2},{value:"5. NumPy\u7684\u6570\u636e\u7c7b\u578b",id:"5-numpy\u7684\u6570\u636e\u7c7b\u578b",level:2}],d={toc:m};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-numpy\u7b80\u4ecb\u4e0e\u5b89\u88c5"},"1. NumPy\u7b80\u4ecb\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"\u672c\u6587\u53c2\u8003: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d"},"NumPy Illustrated: The Visual Guide to NumPy")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://jalammar.github.io/visual-numpy/"},"A Visual Intro to NumPy and Data Representation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/"},"\u300aPython Data Science Handbook\u300b"))),(0,r.kt)("h2",{id:"1-numpy-\u901f\u67e5\u624b\u518c"},"1. NumPy \u901f\u67e5\u624b\u518c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Numpy Cheat Sheet",src:n(8781).Z,width:"2908",height:"2055"})),(0,r.kt)("h2",{id:"2-\u5b89\u88c5"},"2. \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pip install numpy\n")),(0,r.kt)("h2",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1 2 3]\n")),(0,r.kt)("h2",{id:"4-numpy\u6570\u7ec4-vs-python-\u5217\u8868"},"4. NumPy\u6570\u7ec4 vs Python \u5217\u8868"),(0,r.kt)("p",null,"\u4e4d\u770b\u4e0a\u53bb\uff0cNumPy\u6570\u7ec4\u4e0ePython\u5217\u8868\u6781\u5176\u76f8\u4f3c\u3002\u5b83\u4eec\u90fd\u7528\u6765\u88c5\u8f7d\u6570\u636e\uff0c\u90fd\u80fd\u591f\u5feb\u901f\u6dfb\u52a0\u6216\u83b7\u53d6\u5143\u7d20\uff0c\u63d2\u5165\u548c\u79fb\u9664\u5143\u7d20\u5219\u6bd4\u8f83\u6162\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\u76f8\u6bd4python\u5217\u8868\uff0cnumpy\u6570\u7ec4\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u7b97\u672f\u8fd0\u7b97\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(764).Z,width:"1096",height:"466"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u6b64\u4e4b\u5916\uff0cnumpy\u6570\u7ec4\u8fd8\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u66f4\u7d27\u51d1\uff0c\u9ad8\u7ef4\u65f6\u5c24\u4e3a\u660e\u663e"),(0,r.kt)("li",{parentName:"ol"},"\u5411\u91cf\u5316\u540e\u8fd0\u7b97\u901f\u5ea6\u6bd4\u5217\u8868\u66f4\u5feb"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u672b\u5c3e\u6dfb\u52a0\u5143\u7d20\u65f6\u4e0d\u5982\u5217\u8868\u9ad8\u6548"),(0,r.kt)("li",{parentName:"ol"},"\u5143\u7d20\u7c7b\u578b\u4e00\u822c\u6bd4\u8f83\u56fa\u5b9a"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7137).Z,width:"1274",height:"589"})),(0,r.kt)("h2",{id:"5-numpy\u7684\u6570\u636e\u7c7b\u578b"},"5. NumPy\u7684\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool_")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean (True or False) stored as a byte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int_")),(0,r.kt)("td",{parentName:"tr",align:null},"Default integer type (same as C ",(0,r.kt)("inlineCode",{parentName:"td"},"long"),"; normally either ",(0,r.kt)("inlineCode",{parentName:"td"},"int64")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int32"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intc")),(0,r.kt)("td",{parentName:"tr",align:null},"Identical to C ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," (normally ",(0,r.kt)("inlineCode",{parentName:"td"},"int32")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int64"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer used for indexing (same as C ",(0,r.kt)("inlineCode",{parentName:"td"},"ssize_t"),"; normally either ",(0,r.kt)("inlineCode",{parentName:"td"},"int32")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int64"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int8")),(0,r.kt)("td",{parentName:"tr",align:null},"Byte (-128 to 127)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int16")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-32768 to 32767)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-2147483648 to 2147483647)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int64")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-9223372036854775808 to 9223372036854775807)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint8")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 255)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint16")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 65535)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint32")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 4294967295)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 18446744073709551615)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float_")),(0,r.kt)("td",{parentName:"tr",align:null},"Shorthand for ",(0,r.kt)("inlineCode",{parentName:"td"},"float64"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float16")),(0,r.kt)("td",{parentName:"tr",align:null},"Half precision float: sign bit, 5 bits exponent, 10 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float32")),(0,r.kt)("td",{parentName:"tr",align:null},"Single precision float: sign bit, 8 bits exponent, 23 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float64")),(0,r.kt)("td",{parentName:"tr",align:null},"Double precision float: sign bit, 11 bits exponent, 52 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex_")),(0,r.kt)("td",{parentName:"tr",align:null},"Shorthand for ",(0,r.kt)("inlineCode",{parentName:"td"},"complex128"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex64")),(0,r.kt)("td",{parentName:"tr",align:null},"Complex number, represented by two 32-bit floats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex128")),(0,r.kt)("td",{parentName:"tr",align:null},"Complex number, represented by two 64-bit floats")))))}u.isMDXComponent=!0},764:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-02-c0f8d4b783bf0bbbb5d7a9cdc150288c.png"},7137:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-03-2737a8c16b13ef8edf73005a9920cbb6.png"},8781:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-cheat-sheet-12e08c261f28124426bf1510c9dae5a1.png"}}]);