"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[9770],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[u]="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5553:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"tensor",sidebar_position:4},o="4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4",p={unversionedId:"python/numpy/tensor",id:"python/numpy/tensor",title:"4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4",description:"\u672c\u6587\u53c2\u8003:",source:"@site/docs/python/numpy/tensor.md",sourceDirName:"python/numpy",slug:"/python/numpy/tensor",permalink:"/math201/python/numpy/tensor",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"tensor",sidebar_position:4},sidebar:"pythonSidebar",previous:{title:"3. \u77e9\u9635(Matrix): \u4e8c\u7ef4\u6570\u7ec4",permalink:"/math201/python/numpy/matrix"},next:{title:"5. \u5e7f\u64ad(Broadcast)",permalink:"/math201/python/numpy/broadcast"}},s={},l=[{value:"1.\u521d\u59cb\u5316",id:"1\u521d\u59cb\u5316",level:2}],c={toc:l};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4-\u5f20\u91cftensor-\u591a\u7ef4\u6570\u7ec4"},"4. \u5f20\u91cf(Tensor): \u591a\u7ef4\u6570\u7ec4"),(0,a.kt)("p",null,"\u672c\u6587\u53c2\u8003: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d"},"NumPy Illustrated: The Visual Guide to NumPy")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://jalammar.github.io/visual-numpy/"},"A Visual Intro to NumPy and Data Representation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/python-data-science/9781491912126/"},"\u300aPython Data Science Handbook\u300b"))),(0,a.kt)("h2",{id:"1\u521d\u59cb\u5316"},"1.\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u901a\u8fc7\u91cd\u58511\u7ef4\u5411\u91cf\u6216\u8f6c\u6362\u5d4c\u5957Python\u5217\u8868\u6765\u521b\u5efa3\u7ef4\u6570\u7ec4\u65f6\uff0c\u7d22\u5f15\u5206\u522b\u5bf9\u5e94(z,y,x)\u3002\u7d22\u5f15z\u662f\u5e73\u9762\u7f16\u53f7\uff0c(y,x)\u5750\u6807\u5728\u8be5\u5e73\u9762\u4e0a\u79fb\u52a8\uff1a\n",(0,a.kt)("img",{src:n(82030).Z,width:"1281",height:"646"})),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u7d22\u5f15\u987a\u5e8f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u4fdd\u7559\u7070\u5ea6\u56fe\u50cf\uff0ca","[i]","\u8868\u793a\u7b2ci\u4e2a\u56fe\u50cf\u3002"),(0,a.kt)("p",null,"\u4f46\u8fd9\u6837\u7684\u7d22\u5f15\u987a\u5e8f\u5e76\u4e0d\u5177\u6709\u5e7f\u6cdb\u6027\uff0c\u4f8b\u5982\u5728\u5904\u7406RGB\u56fe\u50cf\u65f6\uff0c\u901a\u5e38\u4f7f\u7528(y,x,z)\u987a\u5e8f\uff1a\u9996\u5148\u662f\u4e24\u4e2a\u50cf\u7d20\u5750\u6807\uff0c\u7136\u540e\u624d\u662f\u989c\u8272\u5750\u6807\uff08Matplotlib\u4e2d\u7684RGB\uff0cOpenCV\u4e2d\u7684BGR\uff09\uff1a\n",(0,a.kt)("img",{src:n(38014).Z,width:"1167",height:"520"})),(0,a.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u5730\u5b9a\u4f4d\u7279\u5b9a\u50cf\u7d20\uff0c\u5982a","[i,j]","\u7ed9\u51fa\u50cf\u7d20(i,j)\u7684RGB\u5143\u7ec4\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u51e0\u4f55\u5f62\u72b6\u7684\u521b\u5efa\u5b9e\u9645\u53d6\u51b3\u4e8e\u4f60\u5bf9\u57df\u7684\u7ea6\u5b9a\uff1a\n",(0,a.kt)("img",{src:n(96609).Z,width:"1126",height:"539"})),(0,a.kt)("p",null,"\u663e\u7136\uff0chstack\uff0cvstack\u6216dstack\u4e4b\u7c7b\u7684NumPy\u51fd\u6570\u5e76\u4e0d\u4e00\u5b9a\u6ee1\u8db3\u8fd9\u4e9b\u7ea6\u5b9a\uff0c\u5176\u9ed8\u8ba4\u7684\u7d22\u5f15\u987a\u5e8f\u662f(y,x,z)\uff0cRGB\u56fe\u50cf\u987a\u5e8f\u5982\u4e0b\uff1a\n",(0,a.kt)("img",{src:n(94547).Z,width:"1036",height:"679"})),(0,a.kt)("p",null,"\u5982\u679c\u6570\u636e\u4e0d\u662f\u8fd9\u6837\u7684\u5e03\u5c40\uff0c\u4f7f\u7528concatenate\u547d\u4ee4\u53ef\u4ee5\u65b9\u4fbf\u7684\u5806\u53e0\u56fe\u50cf\uff0c\u5e76\u901a\u8fc7axis\u53c2\u6570\u63d0\u4f9b\u7d22\u5f15\u53f7\uff1a\n",(0,a.kt)("img",{src:n(17979).Z,width:"1000",height:"660"})),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u8003\u8651\u8f74\u6570\uff0c\u53ef\u4ee5\u5c06\u6570\u7ec4\u8f6c\u6362hstack\u548c\u76f8\u5e94\u5f62\u5f0f\uff1a\n",(0,a.kt)("img",{src:n(55429).Z,width:"1225",height:"655"})),(0,a.kt)("p",null,"\u8fd9\u79cd\u8f6c\u6362\u975e\u5e38\u65b9\u4fbf\uff0c\u8be5\u8fc7\u7a0b\u53ea\u662f\u6df7\u5408\u7d22\u5f15\u7684\u987a\u5e8f\u91cd\u6392\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u7684\u590d\u5236\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u6df7\u5408\u7d22\u5f15\u987a\u5e8f\u53ef\u5b9e\u73b0\u6570\u7ec4\u8f6c\u7f6e\uff0c\u638c\u63e1\u8be5\u65b9\u6cd5\u5c06\u52a0\u6df1\u4f60\u5bf93\u7ef4\u6570\u636e\u7684\u4e86\u89e3\u3002\u6839\u636e\u786e\u5b9a\u7684\u8f74\u987a\u5e8f\uff0c\u8f6c\u7f6e\u6570\u7ec4\u5e73\u9762\u7684\u547d\u4ee4\u6709\u6240\u4e0d\u540c\uff1a\u5bf9\u4e8e\u901a\u7528\u6570\u7ec4\uff0c\u4ea4\u6362\u7d22\u5f151\u548c2\uff0c\u5bf9\u4e8eRGB\u56fe\u50cf\u4ea4\u63620\u548c1\uff1a\n",(0,a.kt)("img",{src:n(57439).Z,width:"1240",height:"709"})),(0,a.kt)("p",null,"\u6ce8\u610f\uff0ctranspose\uff08a.T\uff09\u7684\u9ed8\u8ba4\u8f74\u53c2\u6570\u4f1a\u98a0\u5012\u7d22\u5f15\u987a\u5e8f\uff0c\u8fd9\u4e0d\u540c\u4e8e\u4e0a\u8ff0\u8ff0\u4e24\u79cd\u7d22\u5f15\u987a\u5e8f\u3002"),(0,a.kt)("p",null,"\u5e7f\u64ad\u673a\u5236\u540c\u6837\u9002\u7528\u591a\u7ef4\u6570\u7ec4\uff0c\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u9605\u7b14\u8bb0\u201c NumPy\u4e2d\u7684\u5e7f\u64ad\u201d\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u4ecb\u7ecdeinsum(Einstein summation)\u51fd\u6570\uff0c\u8fd9\u5c06\u4f7f\u4f60\u5728\u5904\u7406\u591a\u7ef4\u6570\u7ec4\u65f6\u907f\u514d\u5f88\u591aPython\u5faa\u73af\uff0c\u4ee3\u7801\u66f4\u4e3a\u7b80\u6d01\uff1a\n",(0,a.kt)("img",{src:n(4762).Z,width:"1085",height:"228"})),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u5bf9\u91cd\u590d\u7d22\u5f15\u7684\u6570\u7ec4\u6c42\u548c\u3002\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528np.tensordot(a,b,axis=1)\u5c31\u53ef\u4ee5\uff0c\u4f46\u5728\u66f4\u590d\u6742\u7684\u60c5\u51b5\u4e0b\uff0ceinsum\u901f\u5ea6\u66f4\u5feb\uff0c\u8bfb\u5199\u66f4\u5bb9\u6613\u3002"))}u.isMDXComponent=!0},82030:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-63-f859e143bb0f1d4b1f44e19771ad8116.png"},38014:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-64-81e0c394703950438e6acc9770c56f47.png"},96609:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-65-3321185cf86b900095db25526bd2c494.png"},94547:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-66-0caddf43ced9f9cbc95988088ad6b552.png"},17979:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-67-ea715b3395378d1864a003e95a53f537.png"},55429:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-68-91077894e49fc9f653526eeb4848f02c.png"},57439:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-69-e0501e64bb57c215f1844287764a583e.png"},4762:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/numpy-70-b35b7785253072542c04a8b733376545.png"}}]);