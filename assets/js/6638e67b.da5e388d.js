"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[1495],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>y});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,y=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(y,i(i({ref:e},d),{},{components:n})):a.createElement(y,i({ref:e},d))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4053:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={id:"numpy",sidebar_position:1},i="1. \u7b80\u4ecb\u4e0e\u5b89\u88c5",p={unversionedId:"python/numpy/numpy",id:"python/numpy/numpy",title:"1. \u7b80\u4ecb\u4e0e\u5b89\u88c5",description:"\u672c\u6587\u53c2\u8003:",source:"@site/docs/python/numpy/index.md",sourceDirName:"python/numpy",slug:"/python/numpy/",permalink:"/math201/docs/python/numpy/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"numpy",sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"NumPy\u6559\u7a0b",permalink:"/math201/docs/category/numpy\u6559\u7a0b"},next:{title:"2. \u5411\u91cf(Vector): \u4e00\u7ef4\u6570\u7ec4",permalink:"/math201/docs/python/numpy/vector"}},o={},m=[{value:"1. NumPy \u901f\u67e5\u624b\u518c",id:"1-numpy-\u901f\u67e5\u624b\u518c",level:2},{value:"2. \u5b89\u88c5",id:"2-\u5b89\u88c5",level:2},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:2},{value:"4. NumPy\u6570\u7ec4 vs Python \u5217\u8868",id:"4-numpy\u6570\u7ec4-vs-python-\u5217\u8868",level:2},{value:"5. NumPy\u7684\u6570\u636e\u7c7b\u578b",id:"5-numpy\u7684\u6570\u636e\u7c7b\u578b",level:2}],d={toc:m};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-\u7b80\u4ecb\u4e0e\u5b89\u88c5"},"1. \u7b80\u4ecb\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"\u672c\u6587\u53c2\u8003: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d"},"NumPy Illustrated: The Visual Guide to NumPy")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://jalammar.github.io/visual-numpy/"},"A Visual Intro to NumPy and Data Representation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/"},"\u300aPython Data Science Handbook\u300b"))),(0,r.kt)("p",null,"NumPy(Numerical Python \u7684\u7b80\u79f0)\u63d0\u4f9b\u4e86\u9ad8\u6548\u5b58\u50a8\u548c\u64cd\u4f5c\u5bc6\u96c6\u6570\u636e\u7f13\u5b58\u7684\u63a5\u53e3\u3002\u5728\u67d0\u4e9b\u65b9\u9762\uff0cNumPy\u6570\u7ec4\u4e0ePython\u5185\u7f6e\u7684\u5217\u8868\u7c7b\u578b\u975e\u5e38\u76f8\u4f3c\u3002\u4f46\u662f\u968f\u7740\u6570\u7ec4\u5728\u7ef4\u5ea6\u4e0a\u53d8\u5927\uff0cNumPy\u6570\u7ec4\u63d0\u4f9b\u4e86\u66f4\u52a0\u9ad8\u6548\u7684\u5b58\u50a8\u548c\u6570\u636e\u64cd\u4f5c\u3002NumPy\u6570\u7ec4\u51e0\u4e4e\u662f\u6574\u4e2aPython\u6570\u636e\u79d1\u5b66\u5de5\u5177\u751f\u6001\u7cfb\u7edf\u7684\u6838\u5fc3\u3002\u56e0\u6b64\uff0c\u4e0d\u7ba1\u4f60\u5bf9\u6570\u636e\u79d1\u5b66\u7684\u54ea\u4e2a\u65b9\u9762\u611f\u5174\u8da3\uff0c\u82b1\u70b9\u65f6\u95f4\u5b66\u4e60\u5982\u4f55\u6709\u6548\u5730\u4f7f\u7528NumPy\u90fd\u662f\u975e\u5e38\u503c\u5f97\u7684\u3002"),(0,r.kt)("h2",{id:"1-numpy-\u901f\u67e5\u624b\u518c"},"1. NumPy \u901f\u67e5\u624b\u518c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Numpy Cheat Sheet",src:n(8781).Z,width:"2908",height:"2055"})),(0,r.kt)("h2",{id:"2-\u5b89\u88c5"},"2. \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pip install numpy\n")),(0,r.kt)("h2",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import numpy as np\n\na = np.array([1, 2, 3])\nprint(a)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1 2 3]\n")),(0,r.kt)("h2",{id:"4-numpy\u6570\u7ec4-vs-python-\u5217\u8868"},"4. NumPy\u6570\u7ec4 vs Python \u5217\u8868"),(0,r.kt)("p",null,"\u4e4d\u770b\u4e0a\u53bb\uff0cNumPy\u6570\u7ec4\u4e0ePython\u5217\u8868\u6781\u5176\u76f8\u4f3c\u3002\u5b83\u4eec\u90fd\u7528\u6765\u88c5\u8f7d\u6570\u636e\uff0c\u90fd\u80fd\u591f\u5feb\u901f\u6dfb\u52a0\u6216\u83b7\u53d6\u5143\u7d20\uff0c\u63d2\u5165\u548c\u79fb\u9664\u5143\u7d20\u5219\u6bd4\u8f83\u6162\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\u76f8\u6bd4python\u5217\u8868\uff0cnumpy\u6570\u7ec4\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u7b97\u672f\u8fd0\u7b97\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(764).Z,width:"1096",height:"466"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u6b64\u4e4b\u5916\uff0cnumpy\u6570\u7ec4\u8fd8\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u66f4\u7d27\u51d1\uff0c\u9ad8\u7ef4\u65f6\u5c24\u4e3a\u660e\u663e"),(0,r.kt)("li",{parentName:"ol"},"\u5411\u91cf\u5316\u540e\u8fd0\u7b97\u901f\u5ea6\u6bd4\u5217\u8868\u66f4\u5feb"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u672b\u5c3e\u6dfb\u52a0\u5143\u7d20\u65f6\u4e0d\u5982\u5217\u8868\u9ad8\u6548"),(0,r.kt)("li",{parentName:"ol"},"\u5143\u7d20\u7c7b\u578b\u4e00\u822c\u6bd4\u8f83\u56fa\u5b9a"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7137).Z,width:"1274",height:"589"})),(0,r.kt)("h2",{id:"5-numpy\u7684\u6570\u636e\u7c7b\u578b"},"5. NumPy\u7684\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool_")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean (True or False) stored as a byte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int_")),(0,r.kt)("td",{parentName:"tr",align:null},"Default integer type (same as C ",(0,r.kt)("inlineCode",{parentName:"td"},"long"),"; normally either ",(0,r.kt)("inlineCode",{parentName:"td"},"int64")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int32"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intc")),(0,r.kt)("td",{parentName:"tr",align:null},"Identical to C ",(0,r.kt)("inlineCode",{parentName:"td"},"int")," (normally ",(0,r.kt)("inlineCode",{parentName:"td"},"int32")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int64"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer used for indexing (same as C ",(0,r.kt)("inlineCode",{parentName:"td"},"ssize_t"),"; normally either ",(0,r.kt)("inlineCode",{parentName:"td"},"int32")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"int64"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int8")),(0,r.kt)("td",{parentName:"tr",align:null},"Byte (-128 to 127)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int16")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-32768 to 32767)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-2147483648 to 2147483647)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int64")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (-9223372036854775808 to 9223372036854775807)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint8")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 255)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint16")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 65535)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint32")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 4294967295)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"Unsigned integer (0 to 18446744073709551615)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float_")),(0,r.kt)("td",{parentName:"tr",align:null},"Shorthand for ",(0,r.kt)("inlineCode",{parentName:"td"},"float64"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float16")),(0,r.kt)("td",{parentName:"tr",align:null},"Half precision float: sign bit, 5 bits exponent, 10 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float32")),(0,r.kt)("td",{parentName:"tr",align:null},"Single precision float: sign bit, 8 bits exponent, 23 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float64")),(0,r.kt)("td",{parentName:"tr",align:null},"Double precision float: sign bit, 11 bits exponent, 52 bits mantissa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex_")),(0,r.kt)("td",{parentName:"tr",align:null},"Shorthand for ",(0,r.kt)("inlineCode",{parentName:"td"},"complex128"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex64")),(0,r.kt)("td",{parentName:"tr",align:null},"Complex number, represented by two 32-bit floats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"complex128")),(0,r.kt)("td",{parentName:"tr",align:null},"Complex number, represented by two 64-bit floats")))))}u.isMDXComponent=!0},764:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-02-c0f8d4b783bf0bbbb5d7a9cdc150288c.png"},7137:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-03-2737a8c16b13ef8edf73005a9920cbb6.png"},8781:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/numpy-cheat-sheet-12e08c261f28124426bf1510c9dae5a1.png"}}]);