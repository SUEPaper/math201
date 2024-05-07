"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[8358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const p={id:"pie",sidebar_position:9},l="\u997c\u56fe",o={unversionedId:"python/matplotlib/pie",id:"python/matplotlib/pie",title:"\u997c\u56fe",description:"\u997c\u56fe\u4e4b\u95f4\u6dfb\u52a0\u8fb9\u6846",source:"@site/docs/python/matplotlib/pie.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/pie",permalink:"/math201/python/matplotlib/pie",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"pie",sidebar_position:9},sidebar:"pythonSidebar",previous:{title:"\u76f4\u65b9\u56fe",permalink:"/math201/python/matplotlib/histogram"},next:{title:"\u4e09\u7ef4\u56fe\u5f62",permalink:"/math201/python/matplotlib/3d"}},i={},s=[{value:"\u997c\u56fe\u4e4b\u95f4\u6dfb\u52a0\u8fb9\u6846",id:"\u997c\u56fe\u4e4b\u95f4\u6dfb\u52a0\u8fb9\u6846",level:2},{value:"\u997c\u56fe\u67d0\u90e8\u5206\u7a81\u51fa\u663e\u793a",id:"\u997c\u56fe\u67d0\u90e8\u5206\u7a81\u51fa\u663e\u793a",level:2},{value:"\u997c\u56fe\u6dfb\u52a0\u9634\u5f71",id:"\u997c\u56fe\u6dfb\u52a0\u9634\u5f71",level:2},{value:"\u7ed8\u5236\u73af\u5f62\u997c\u56fe",id:"\u7ed8\u5236\u73af\u5f62\u997c\u56fe",level:2}],c={toc:s};function d(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u997c\u56fe"},"\u997c\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np\n\ncars = ['AUDI', 'BMW', 'FORD',\n        'TESLA', 'JAGUAR', 'MERCEDES']\n\ndata = [23, 17, 35, 29, 12, 41]\n\nfig = plt.figure(figsize =(10, 7))\nplt.pie(data, labels = cars)\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(14250).Z,width:"1000",height:"700"})),(0,r.kt)("h2",{id:"\u997c\u56fe\u4e4b\u95f4\u6dfb\u52a0\u8fb9\u6846"},"\u997c\u56fe\u4e4b\u95f4\u6dfb\u52a0\u8fb9\u6846"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n  \nyears = [2016, 2017, 2018, 2019, 2020]\nprofit = [15, 19, 35, 14, 17]\n  \nplt.pie(profit, labels = years, autopct = '%1.1f%%',\n        startangle = 90, \n        wedgeprops = {\"edgecolor\" : \"black\",\n                      'linewidth': 2,\n                      'antialiased': True})\n  \nplt.axis('equal')\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83316).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"\u997c\u56fe\u67d0\u90e8\u5206\u7a81\u51fa\u663e\u793a"},"\u997c\u56fe\u67d0\u90e8\u5206\u7a81\u51fa\u663e\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n  \ncontinents = ['Asia', 'Europe', 'North America',\n              'South America','Australia',\n              'Africa','Antarctica']\n  \narea = [25, 20, 15, 10, 15, 10, 5]\nexplode = (0.1, 0, 0.1, 0, 0.1, 0.1, 0.1) \n  \nplt.pie(area, explode = explode, labels = continents,\n        autopct = '%1.1f%%',startangle = 0,\n        wedgeprops = {\"edgecolor\" : \"black\",\n                    'linewidth' : 2,\n                    'antialiased': True})\n  \nplt.axis('equal') \n  \nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3787).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"\u997c\u56fe\u6dfb\u52a0\u9634\u5f71"},"\u997c\u56fe\u6dfb\u52a0\u9634\u5f71"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n  \nproduct = 'Product A', 'Product B',\n            'Product C', 'Product D'\n    \nstock = [15, 30, 35, 20]\nexplode = (0.1, 0, 0.1, 0) \n  \nplt.pie(stock, explode = explode,\n        labels = product, autopct = '%1.1f%%',\n        shadow = True, startangle = 90,\n        wedgeprops= {\"edgecolor\":\"black\",\n                     'linewidth': 3,\n                     'antialiased': True})\n\nplt.axis('equal')  \n  \nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50918).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"\u7ed8\u5236\u73af\u5f62\u997c\u56fe"},"\u7ed8\u5236\u73af\u5f62\u997c\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n\nelection_data = {'Biden': 290, 'Trump': 214, 'Others': 538-290-214}\ncandidate = [key for key in election_data]\nvotes = [value for value in election_data.values()]\n\nplt.figure(figsize=(10, 10), dpi=100)\nexplode = (0, 0, 0)\n\nplt.pie(votes, labels=candidate, explode=explode, autopct=\"%1.2f%%\", colors=['c', 'm', 'y'],\n        textprops={'fontsize': 24}, labeldistance=1.05, pctdistance=0.85, startangle=90)\nplt.pie([1], radius=0.7, colors='w')\n\nplt.legend(loc='upper right', fontsize=16)\nplt.axis('equal')\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(61861).Z,width:"1142",height:"626"})))}d.isMDXComponent=!0},14250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie_01-6016250f0d991df803abcb23937069f3.png"},83316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie_02-b09a252e52c42331bad6440d015f1f3d.png"},3787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie_03-2905e79777f51928d5c0e00126a5aee9.png"},50918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie_04-64a9b34ab8fdd32d25f31966164cd4f5.png"},61861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie_05-7649f1c9593f732006e241da29194760.png"}}]);