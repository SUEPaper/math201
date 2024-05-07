"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[3438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=s(n),u=r,k=o["".concat(m,".").concat(u)]||o[u]||d[u]||p;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[o]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const p={id:"dict",sidebar_position:3},l="\u5b57\u5178",i={unversionedId:"python/data-structure/dict",id:"python/data-structure/dict",title:"\u5b57\u5178",description:"\u5b57\u5178\u662f\u53e6\u4e00\u79cd\u53ef\u53d8\u5bb9\u5668\u6a21\u578b\uff0c\u4e14\u53ef\u5b58\u50a8\u4efb\u610f\u7c7b\u578b\u5bf9\u8c61\u3002",source:"@site/docs/python/data-structure/dict.md",sourceDirName:"python/data-structure",slug:"/python/data-structure/dict",permalink:"/math201/python/data-structure/dict",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"dict",sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"\u5143\u7ec4",permalink:"/math201/python/data-structure/tuple"},next:{title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",permalink:"/math201/category/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"}},m={},s=[{value:"\u5b57\u5178\u7684\u521b\u5efa",id:"\u5b57\u5178\u7684\u521b\u5efa",level:2},{value:"\u4fee\u6539\u5b57\u5178\u5185\u5bb9",id:"\u4fee\u6539\u5b57\u5178\u5185\u5bb9",level:2},{value:"\u5220\u9664\u5b57\u5178",id:"\u5220\u9664\u5b57\u5178",level:2},{value:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",level:2},{value:"dict\u81ea\u5e26\u7684\u65b9\u6cd5",id:"dict\u81ea\u5e26\u7684\u65b9\u6cd5",level:2},{value:"clear()",id:"clear",level:3},{value:"get()",id:"get",level:3},{value:"clear()",id:"clear-1",level:3},{value:"items()",id:"items",level:3},{value:"other",id:"other",level:3}],c={toc:s};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b57\u5178"},"\u5b57\u5178"),(0,r.kt)("p",null,"\u5b57\u5178\u662f\u53e6\u4e00\u79cd\u53ef\u53d8\u5bb9\u5668\u6a21\u578b\uff0c\u4e14\u53ef\u5b58\u50a8\u4efb\u610f\u7c7b\u578b\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u5b57\u5178\u7684\u6bcf\u4e2a\u952e\u503c",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow"},":"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"key:value")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"ey"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},":"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"))))),"\u5bf9\u7528\u5192\u53f7:\u5206\u5272\uff0c\u6bcf\u4e2a\u952e\u503c\u5bf9\u4e4b\u95f4\u7528\u9017\u53f7,\u5206\u5272\uff0c\u6574\u4e2a\u5b57\u5178\u5305\u62ec\u5728\u82b1\u62ec\u53f7{}\u4e2d ,\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"d = {key1 : value1, key2 : value2 }\n")),(0,r.kt)("h2",{id:"\u5b57\u5178\u7684\u521b\u5efa"},"\u5b57\u5178\u7684\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\n# \u82e5\u952e\u91cd\u590d\uff0c\u5219\u53d6\u6700\u540e\u4e00\u4e2a\ndict2 = {'SUEP':1951,'xsm':2348,'xsm':2020}\nprint(dict1['SUEP'])\nprint(dict2['xsm'])\n# \u82e5\u6ca1\u6709\u5bf9\u5e94\u7684\u952e\uff0c\u4f1a\u62a5\u9519\nprint(dict2['nothing'])\n\"\"\"\n\u8f93\u51fa\uff1a\n1951\n2020\n\"\"\"\n")),(0,r.kt)("h2",{id:"\u4fee\u6539\u5b57\u5178\u5185\u5bb9"},"\u4fee\u6539\u5b57\u5178\u5185\u5bb9"),(0,r.kt)("p",null,"\u4f7f\u7528\u91cd\u65b0\u8d4b\u503c\u7684\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\ndict1['xsm'] = 2020\nprint(dict1['xsm'])\n\"\"\"\n\u8f93\u51fa\uff1a\n2020\n\"\"\"\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u5b57\u5178"},"\u5220\u9664\u5b57\u5178"),(0,r.kt)("p",null,"del dict","['Name']","\u5220\u9664\u952e\u4e3aName\u7684\u952e\u503c\u5bf9"),(0,r.kt)("p",null,"del dict \u5220\u9664\u5b57\u5178"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\nprint(dict1)\ndel dict1['xsm']\nprint(dict1)\n\"\"\"\n\u8f93\u51fa:\n{'SUEP': 1951, 'xsm': 2348}\n{'SUEP': 1951}\n\"\"\"\n")),(0,r.kt)("h2",{id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"},"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\n#\u83b7\u5f97dict\u7684\u957f\u5ea6\nprint(len(dict1))\n\"\"\"\n\u8f93\u51fa\uff1a\n2\ndict_keys(['SUEP', 'xsm'])\n{}\n\"\"\"\n")),(0,r.kt)("h2",{id:"dict\u81ea\u5e26\u7684\u65b9\u6cd5"},"dict\u81ea\u5e26\u7684\u65b9\u6cd5"),(0,r.kt)("h3",{id:"clear"},"clear()"),(0,r.kt)("p",null,"\u6e05\u7a7adict"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dict1 = {\'SUEP\':1951,\'xsm\':2348}\ndict1.clear()\nprint(dict1)\n"""\n\u8f93\u51fa:\n{}\n"""\n')),(0,r.kt)("h3",{id:"get"},"get()"),(0,r.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u952e\u7684\u503c\uff0c\u82e5\u4e0d\u5b58\u5728\u5219\u8fd4\u56de\u9ed8\u8ba4\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\nprint(dict1.get('xsm'))\nprint(dict1.get('bfx'))\n\"\"\"\n\u8f93\u51fa:\n2348\nNone\n\"\"\"\n")),(0,r.kt)("h3",{id:"clear-1"},"clear()"),(0,r.kt)("p",null,"\u6e05\u7a7a\u5b57\u5178"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\nprint(dict1)\ndict1.clear()\nprint(dict1)\n\"\"\"\n\u8f93\u51fa:\n{'SUEP': 1951, 'xsm': 2348}\n{}\n\"\"\"\n")),(0,r.kt)("h3",{id:"items"},"items()"),(0,r.kt)("p",null,"\u8fd4\u56de\u53ef\u8fed\u4ee3\u7684\u5305\u542b\u6240\u6709\u952e\u503c\u5bf9\u7684\u5143\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dict1 = {'SUEP':1951,'xsm':2348}\nprint(dict1.items())\nfor i in dict1.items():\n    print(i)\n\"\"\"\n\u8f93\u51fa:\ndict_items([('SUEP', 1951), ('xsm', 2348)])\n('SUEP', 1951)\n('xsm', 2348)\n\"\"\"\n")),(0,r.kt)("h3",{id:"other"},"other"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.w3cschool.cn/python3/python3-dictionary.html"},"\u5269\u4f59\u7684\u5185\u7f6e\u65b9\u6cd5\uff0cw3cshool"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/tutorial/datastructures.html#dictionaries"},"\u5b98\u7f51\u6587\u6863")))}o.isMDXComponent=!0}}]);