"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[5241],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var l=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),c=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=c(t.components);return l.createElement(p.Provider,{value:e},t.children)},b="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),b=c(a),m=r,f=b["".concat(p,".").concat(m)]||b[m]||u[m]||n;return a?l.createElement(f,o(o({ref:e},s),{},{components:a})):l.createElement(f,o({ref:e},s))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[b]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6477:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var l=a(7462),r=(a(7294),a(3905));const n={id:"matplotlib",sidebar_position:1},o="\u7b80\u4ecb\u4e0e\u5b89\u88c5",i={unversionedId:"python/matplotlib/matplotlib",id:"python/matplotlib/matplotlib",title:"\u7b80\u4ecb\u4e0e\u5b89\u88c5",description:"Matplotlib\u662f\u5efa\u7acb\u5728NumPy\u6570\u7ec4\u57fa\u7840\u4e0a\u7684\u591a\u5e73\u53f0\u6570\u636e\u53ef\u89c6\u5316\u7a0b\u5e8f\u5e93\uff0c\u6700\u521d\u88ab\u8bbe\u8ba1\u7528\u4e8e\u5b8c\u5584SciPy\u7684\u751f\u6001\u73af\u5883\u3002Matplotlib\u6700\u91cd\u8981\u7684\u7279\u6027\u4e4b\u4e00\u5c31\u662f\u5177\u6709\u826f\u597d\u7684\u64cd\u4f5c\u7cfb\u7edf\u517c\u5bb9\u6027\u548c\u56fe\u5f62\u663e\u793a\u5e95\u5c42\u63a5\u53e3\u517c\u5bb9\u6027(graphics backend)\u3002Matplotlib\u652f\u6301\u51e0\u5341\u79cd\u56fe\u5f62\u663e\u793a\u63a5\u53e3\u4e0e\u8f93\u51fa\u683c\u5f0f\uff0c\u8fd9\u4f7f\u5f97\u7528\u6237\u65e0\u8bba\u5728\u54ea\u79cd\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u90fd\u53ef\u4ee5\u8f93\u51fa\u81ea\u5df1\u60f3\u8981\u7684\u56fe\u5f62\u683c\u5f0f\u3002\u8fd9\u79cd\u8de8\u5e73\u53f0\u3001\u9762\u9762\u4ff1\u5230\u7684\u7279\u70b9\u5df2\u7ecf\u6210\u4e3aMatplotlib\u6700\u5f3a\u5927\u7684\u529f\u80fd\u4e4b\u4e00\uff0cMatplotlib\u4e5f\u56e0\u6b64\u5438\u5f15\u4e86\u5927\u91cf\u7528\u6237\uff0c\u8fdb\u800c\u5f62\u6210\u4e86\u4e00\u4e2a\u6d3b\u8dc3\u7684\u5f00\u53d1\u8005\u56e2\u961f\uff0c\u664b\u5347\u4e3aPython\u79d1\u5b66\u9886\u57df\u4e0d\u53ef\u6216\u7f3a\u7684\u5f3a\u5927\u6b66\u5668\u3002",source:"@site/docs/python/matplotlib/index.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/",permalink:"/math201/docs/python/matplotlib/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"matplotlib",sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"Matplotlib\u6559\u7a0b",permalink:"/math201/docs/category/matplotlib\u6559\u7a0b"},next:{title:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",permalink:"/math201/docs/python/matplotlib/basic"}},p={},c=[{value:"0\u3001Matplotlib \u901f\u67e5\u624b\u518c",id:"0matplotlib-\u901f\u67e5\u624b\u518c",level:2},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:2},{value:"2. Matplotlib VS Seaborn",id:"2-matplotlib-vs-seaborn",level:2}],s={toc:c};function b(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u4ecb\u4e0e\u5b89\u88c5"},"\u7b80\u4ecb\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"Matplotlib\u662f\u5efa\u7acb\u5728NumPy\u6570\u7ec4\u57fa\u7840\u4e0a\u7684\u591a\u5e73\u53f0\u6570\u636e\u53ef\u89c6\u5316\u7a0b\u5e8f\u5e93\uff0c\u6700\u521d\u88ab\u8bbe\u8ba1\u7528\u4e8e\u5b8c\u5584SciPy\u7684\u751f\u6001\u73af\u5883\u3002Matplotlib\u6700\u91cd\u8981\u7684\u7279\u6027\u4e4b\u4e00\u5c31\u662f\u5177\u6709\u826f\u597d\u7684\u64cd\u4f5c\u7cfb\u7edf\u517c\u5bb9\u6027\u548c\u56fe\u5f62\u663e\u793a\u5e95\u5c42\u63a5\u53e3\u517c\u5bb9\u6027(graphics backend)\u3002Matplotlib\u652f\u6301\u51e0\u5341\u79cd\u56fe\u5f62\u663e\u793a\u63a5\u53e3\u4e0e\u8f93\u51fa\u683c\u5f0f\uff0c\u8fd9\u4f7f\u5f97\u7528\u6237\u65e0\u8bba\u5728\u54ea\u79cd\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u90fd\u53ef\u4ee5\u8f93\u51fa\u81ea\u5df1\u60f3\u8981\u7684\u56fe\u5f62\u683c\u5f0f\u3002\u8fd9\u79cd\u8de8\u5e73\u53f0\u3001\u9762\u9762\u4ff1\u5230\u7684\u7279\u70b9\u5df2\u7ecf\u6210\u4e3aMatplotlib\u6700\u5f3a\u5927\u7684\u529f\u80fd\u4e4b\u4e00\uff0cMatplotlib\u4e5f\u56e0\u6b64\u5438\u5f15\u4e86\u5927\u91cf\u7528\u6237\uff0c\u8fdb\u800c\u5f62\u6210\u4e86\u4e00\u4e2a\u6d3b\u8dc3\u7684\u5f00\u53d1\u8005\u56e2\u961f\uff0c\u664b\u5347\u4e3aPython\u79d1\u5b66\u9886\u57df\u4e0d\u53ef\u6216\u7f3a\u7684\u5f3a\u5927\u6b66\u5668\u3002"),(0,r.kt)("h2",{id:"0matplotlib-\u901f\u67e5\u624b\u518c"},"0\u3001Matplotlib \u901f\u67e5\u624b\u518c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9913).Z,width:"3626",height:"2562"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3733).Z,width:"3622",height:"2564"})),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(7846).Z},"\u901f\u67e5\u624b\u518c\u4e0b\u8f7d")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/matplotlib/cheatsheets"},"Cheatsheets for Matplotlib users")),(0,r.kt)("h2",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install matplotlib\n")),(0,r.kt)("h2",{id:"2-matplotlib-vs-seaborn"},"2. Matplotlib VS Seaborn"),(0,r.kt)("p",null,"\u9664\u4e86Matplotlib\u4ee5\u5916\u5e38\u7528\u7684Python\u7ed8\u56fe\u5e93\u53eb\u505aSeaborn, Seaborn\u7684\u5e95\u5c42\u662f\u57fa\u4e8eMatplotlib\u7684\uff0c\u4ed6\u4eec\u7684\u5dee\u5f02\u6709\u70b9\u50cf\u5728\u70b9\u9910\u65f6\u9009\u5957\u9910\u8fd8\u662f\u81ea\u5df1\u70b9\u7684\u533a\u522b: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Matplotlib\u662f\u72ec\u7acb\u70b9\u83dc\uff0c\u53ef\u80fd\u8d39\u65f6\u8d39\u5fc3\u4f46\u6700\u540e\u4e0a\u684c\u7684\u83dc\u5168\u662f\u7279\u522b\u9002\u5408\u81ea\u5df1\u7684\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u800cSeaborn\u662f\u70b9\u5957\u9910\uff0c\u7279\u522b\u7b80\u5355\uff0c\u4e00\u5207\u90fd\u662f\u914d\u597d\u7684\uff0c\u867d\u7136\u7701\u65f6\u7701\u5fc3\uff0c\u4f46\u53ef\u80fd\u5957\u9910\u91cc\u603b\u6709\u4e9b\u83dc\u662f\u4e0d\u90a3\u4e48\u5408\u81ea\u5df1\u53e3\u5473\u7684\u3002")),(0,r.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seaborn\u662f\u7528\u6237\u628a\u81ea\u5df1\u5e38\u7528\u5230\u7684\u53ef\u89c6\u5316\u7ed8\u56fe\u8fc7\u7a0b\u8fdb\u884c\u4e86\u51fd\u6570\u5c01\u88c5\uff0c\u5f62\u6210\u7684\u4e00\u4e2a\u201c\u5feb\u6377\u65b9\u5f0f\u201d\uff0c\u4ed6\u76f8\u6bd4Matplotlib\u7684\u597d\u5904\u662f\u4ee3\u7801\u66f4\u7b80\u6d01\uff0c\u53ef\u4ee5\u7528\u4e00\u884c\u4ee3\u7801\u5b9e\u73b0\u4e00\u4e2a\u6e05\u6670\u597d\u770b\u7684\u53ef\u89c6\u5316\u8f93\u51fa\u3002\u4e3b\u8981\u7684\u7f3a\u70b9\u5219\u662f\u5b9a\u5236\u5316\u80fd\u529b\u4f1a\u6bd4\u8f83\u5dee\uff0c\u53ea\u80fd\u5b9e\u73b0\u56fa\u5316\u7684\u4e00\u4e9b\u53ef\u89c6\u5316\u6a21\u677f\u7c7b\u578b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"Matplotlib\u662f\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u5ea6\u5b9a\u5236\u5316\u7ed8\u56fe\u7684\uff0c\u9ad8\u5ea6\u5b9a\u5236\u5316\u53ef\u4ee5\u8ba9\u4f60\u83b7\u5f97\u6700\u7b26\u5408\u5fc3\u610f\u7684\u53ef\u89c6\u5316\u8f93\u51fa\u7ed3\u679c\uff0c\u4f46\u4e5f\u56e0\u6b64\u9700\u8981\u8bbe\u7f6e\u66f4\u591a\u7684\u53c2\u6570\uff0c\u56e0\u800c\u4ee3\u7801\u66f4\u52a0\u590d\u6742\u4e00\u4e9b\u3002")),(0,r.kt)("p",null,"\u672c\u8bfe\u7a0b\u4e0d\u6559\u6388Seaborn\u5982\u4f55\u4f7f\u7528\uff0c\u5982\u679c\u4f60\u60f3\u5b66\u4e60Seaborn\u7684\u7528\u6cd5\uff0c\u8bf7\u81ea\u6211\u5b66\u4e60",(0,r.kt)("a",{parentName:"p",href:"https://seaborn.pydata.org/tutorial.html"},"Seaborn\u5b98\u65b9\u6587\u6863")))}b.isMDXComponent=!0},7846:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/files/cheatsheets-9508c3073c9c419d1a4738f2183e96a7.pdf"},9913:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/cheatsheets_01-acb8ff2eb3cd6077acd6b5aff864b4d5.png"},3733:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/cheetsheets_02-8410c78ca541c3896f8296f8e316ef1f.png"}}]);