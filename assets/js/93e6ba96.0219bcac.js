"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[6286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},A=Object.keys(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=i.createContext({}),s=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(a.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,A=e.originalType,a=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,h=p["".concat(a,".").concat(u)]||p[u]||g[u]||A;return n?i.createElement(h,d(d({ref:t},c),{},{components:n})):i.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var A=n.length,d=new Array(A);d[0]=u;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[p]="string"==typeof e?e:l,d[1]=r;for(var s=2;s<A;s++)d[s]=n[s];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>A,metadata:()=>r,toc:()=>s});var i=n(7462),l=(n(7294),n(3905));const A={id:"vscode",sidebar_position:5},d="VS Code Debug Python",r={unversionedId:"python/vscode",id:"python/vscode",title:"VS Code Debug Python",description:"\u8c03\u8bd5\u7b2c\u4e00\u6b65\uff1a\u8bbe\u7f6e\u65ad\u70b9",source:"@site/docs/python/vscode.md",sourceDirName:"python",slug:"/python/vscode",permalink:"/math201/docs/python/vscode",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"vscode",sidebar_position:5},sidebar:"pythonSidebar",previous:{title:"Jupyter Notebook \u4ecb\u7ecd",permalink:"/math201/docs/python/jupyter"},next:{title:"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",permalink:"/math201/docs/python/variable"}},a={},s=[{value:"\u8c03\u8bd5\u7b2c\u4e00\u6b65\uff1a\u8bbe\u7f6e\u65ad\u70b9",id:"\u8c03\u8bd5\u7b2c\u4e00\u6b65\u8bbe\u7f6e\u65ad\u70b9",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u53d6\u6d88\u65ad\u70b9",id:"\u53d6\u6d88\u65ad\u70b9",level:3},{value:"\u8c03\u8bd5\u7b2c\u4e8c\u6b65\uff1a\u5f00\u59cb\u8c03\u8bd5",id:"\u8c03\u8bd5\u7b2c\u4e8c\u6b65\u5f00\u59cb\u8c03\u8bd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00-1",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c-1",level:3},{value:"\u8c03\u8bd5\u7b2c\u4e09\u6b65\uff1a\u8c03\u8bd5\u4e2d\u6ce8\u610f\u7684\u70b9",id:"\u8c03\u8bd5\u7b2c\u4e09\u6b65\u8c03\u8bd5\u4e2d\u6ce8\u610f\u7684\u70b9",level:2},{value:"\u5feb\u6377\u5de5\u5177\u680f",id:"\u5feb\u6377\u5de5\u5177\u680f",level:3},{value:"\u7ee7\u7eed(F5)",id:"\u7ee7\u7eedf5",level:3},{value:"\u5355\u6b65\u8df3\u8fc7(F10)",id:"\u5355\u6b65\u8df3\u8fc7f10",level:3},{value:"\u5355\u6b65\u8c03\u8bd5(F11)",id:"\u5355\u6b65\u8c03\u8bd5f11",level:3},{value:"\u5355\u6b65\u8df3\u51fa(shift + F11)",id:"\u5355\u6b65\u8df3\u51fashift--f11",level:3},{value:"\u91cd\u542f(ctrl + shift + F5)",id:"\u91cd\u542fctrl--shift--f5",level:3},{value:"\u505c\u6b62(shift + F5)",id:"\u505c\u6b62shift--f5",level:3}],c={toc:s};function p(e){let{components:t,...A}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,A,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vs-code-debug-python"},"VS Code Debug Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def jiecheng1(x):\n    if(x == 1):\n        return 1\n    else:\n        return x * jiecheng1(x-1)\n\ndef jiecheng2(x):\n    ans = 1\n    while(x != 1):\n        ans = ans * x\n        x = x - 1\n    return ans\n\nx = 10\ny = 100\nz = 1000\nwhile(x):\n    print(x)\n    x = x - 1\n\nprint(jiecheng1(5))\nprint(jiecheng2(5))\n")),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u7b2c\u4e00\u6b65\u8bbe\u7f6e\u65ad\u70b9"},"\u8c03\u8bd5\u7b2c\u4e00\u6b65\uff1a\u8bbe\u7f6e\u65ad\u70b9"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2421).Z,width:"290",height:"166"})),(0,l.kt)("p",null,"\u9f20\u6807\u653e\u5728\u60f3\u8981\u63d2\u5165\u65ad\u70b9\u7684\u884c\u53f7\u5de6\u8fb9\uff0c\u4f1a\u51fa\u73b0\u7ea2\u70b9\uff0c\u70b9\u51fb"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6870).Z,width:"266",height:"144"})),(0,l.kt)("p",null,"\u51fa\u73b0\u5b9e\u5fc3\u7ea2\u70b9\u5373\u4e3a\u65ad\u70b9"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,l.kt)("p",null,"\u9f20\u6807\u70b9\u51fb\u6240\u8981\u63d2\u5165\u65ad\u70b9\u7684\u884c\uff0c\u6309F9"),(0,l.kt)("h3",{id:"\u53d6\u6d88\u65ad\u70b9"},"\u53d6\u6d88\u65ad\u70b9"),(0,l.kt)("p",null,"\u5728\u70b9\u4e00\u4e0b\u5c0f\u7ea2\u70b9\u6216\u6309F9"),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u7b2c\u4e8c\u6b65\u5f00\u59cb\u8c03\u8bd5"},"\u8c03\u8bd5\u7b2c\u4e8c\u6b65\uff1a\u5f00\u59cb\u8c03\u8bd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00-1"},"\u65b9\u6cd5\u4e00"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2059).Z,width:"1523",height:"598"}),"\n",(0,l.kt)("img",{src:n(1281).Z,width:"173",height:"114"})),(0,l.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u5c0f\u7bad\u5934\uff0c\u70b9\u51fbDebug Python File\u5373\u53ef\u5f00\u59cb\u8c03\u8bd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8c-1"},"\u65b9\u6cd5\u4e8c"),(0,l.kt)("p",null,"\u6309F5"),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u7b2c\u4e09\u6b65\u8c03\u8bd5\u4e2d\u6ce8\u610f\u7684\u70b9"},"\u8c03\u8bd5\u7b2c\u4e09\u6b65\uff1a\u8c03\u8bd5\u4e2d\u6ce8\u610f\u7684\u70b9"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4084).Z,width:"1844",height:"960"})),(0,l.kt)("p",null,"\u4e0a\u4f4d\u8c03\u8bd5\u5f00\u59cb\u7684\u56fe"),(0,l.kt)("h3",{id:"\u5feb\u6377\u5de5\u5177\u680f"},"\u5feb\u6377\u5de5\u5177\u680f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8280).Z,width:"195",height:"35"})),(0,l.kt)("p",null,"\u5177\u4f53\u529f\u80fd\u5982\u4e0b\uff0c\u4ee5\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f"),(0,l.kt)("h3",{id:"\u7ee7\u7eedf5"},"\u7ee7\u7eed(F5)"),(0,l.kt)("p",null,"\u76f4\u63a5\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\u5904\uff0c\u82e5\u6ca1\u6709\u4e0b\u4e00\u4e2a\u65ad\u70b9\u90a3\u4e48\u76f4\u63a5\u8fd0\u884c\u5b8c\u6574\u6bb5\u4ee3\u7801"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1541).Z,width:"1798",height:"967"})),(0,l.kt)("p",null,"\u4f7f\u7528\u201c\u7ee7\u7eed(F5)\u201d\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u5de6\u8fb9\u7684\u201c\u53d8\u91cf\u201d\u680f\u91cc\u51fa\u73b0\u4e86\u5df2\u6709\u7684\u53d8\u91cf\u4ee5\u53ca\u51fd\u6570"),(0,l.kt)("h3",{id:"\u5355\u6b65\u8df3\u8fc7f10"},"\u5355\u6b65\u8df3\u8fc7(F10)"),(0,l.kt)("p",null,"\u5355\u6b65\u8fd0\u884c\u4ee3\u7801"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1296).Z,width:"1851",height:"976"})),(0,l.kt)("p",null,"\u6b64\u65f6\u8fd0\u884c\u4e86print(x)\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u4e2d\u770b\u5230\u8f93\u51fa\u4e8610"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9971).Z,width:"1850",height:"962"}),"\n\u518d\u6b21\u5355\u6b65\u8df3\u8fc7\uff0c\u6b64\u65f6\u8fd0\u884c\u4e86x = x - 1,\u53ef\u4ee5\u770b\u5230\u5de6\u4e0a\u89d2\u7684x\u7684\u503c\u53d8\u4e3a\u4e869"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9284).Z,width:"1835",height:"964"}),"\n\u53d6\u6d8818\u884c\u7684\u65ad\u70b9\uff0c\u5e76\u572821\u884c\u6dfb\u52a0\u65b0\u7684\u65ad\u70b9\uff0c\u4f7f\u7528\u201c\u7ee7\u7eed(F5)\u201d\uff0c\u5230\u8fbe21\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u6b64\u65f6x\u4e3a0\uff0c\u4e14\u547d\u4ee4\u884c\u8f93\u51fa\u4e8610~1"),(0,l.kt)("h3",{id:"\u5355\u6b65\u8c03\u8bd5f11"},"\u5355\u6b65\u8c03\u8bd5(F11)"),(0,l.kt)("p",null,"\u8fdb\u5165\u5230\u8be5\u884c\u4ee3\u7801\u5bf9\u5e94\u7684\u51fd\u6570\u5185\u90e8"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2902).Z,width:"1788",height:"944"})),(0,l.kt)("p",null,'\u4f7f\u7528\u201c\u5355\u6b65\u8c03\u8bd5(F11)\u201d\uff0c\u8fdb\u5165\u4e86"jiecheng1"\u7684\u51fd\u6570\u5185\u90e8\uff0c\u53ef\u4ee5\u770b\u5230\u6b64\u65f6\u7684\u5c40\u90e8\u53d8\u91cfx=5\uff0c\u800c\u5168\u5c40\u53d8\u91cf\u4e0d\u53d8\uff0c\u51fd\u6570\u5806\u6808\u589e\u52a0\u4e86"jiecheng1"'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1098).Z,width:"1788",height:"965"})),(0,l.kt)("p",null,'\u5728\u7b2c\u4e8c\u884c\u8bbe\u7f6e\u65ad\u70b9\uff0c\u8fd0\u884c\u4e24\u6b21\u201c\u7ee7\u7eed\u201d\uff0c\u6b64\u65f6\u53d8\u91cfx=3\uff0c\u51fd\u6570\u6808\u65b0\u589e\u4e24\u4e2a"jiecheng1"(\u53ef\u4ee5\u901a\u8fc7\u8c03\u8bd5\u6765\u4e86\u89e3\u9012\u5f52)'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8583).Z,width:"1780",height:"963"})),(0,l.kt)("p",null,"\u7ecf\u8fc7\u4e86\u591a\u6b21\u201c\u5355\u6b65\u8df3\u8fc7(F10)\u201d\u540e\uff0c\u5982\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4271).Z,width:"1797",height:"964"})),(0,l.kt)("p",null,'\u6b64\u65f6"jiecheng1"\u6267\u884c\u5b8c\u6bd5\uff0c\u51fd\u6570\u6808\u53d8\u4e3a\u4e00\u4e2a\uff0c\u8f93\u51fa\u4e86120\uff0c\u51fd\u6570\u8fd4\u56de\u503c\u4e3a120\u3002'),(0,l.kt)("h3",{id:"\u5355\u6b65\u8df3\u51fashift--f11"},"\u5355\u6b65\u8df3\u51fa(shift + F11)"),(0,l.kt)("p",null,"\u8df3\u51fa\u5f53\u524d\u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3182).Z,width:"1788",height:"965"})),(0,l.kt)("p",null,'\u4f7f\u7528\u201c\u5355\u6b65\u8c03\u8bd5(F11)\u201d\u8fdb\u5165"jiecheng2"'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(728).Z,width:"1788",height:"973"})),(0,l.kt)("p",null,'\u4f7f\u7528\u201c\u5355\u6b65\u8df3\u51fa(shift + F11)\u201d\u8df3\u51fa"jiecheng2"\uff0c\u6b64\u65f6\u8fd4\u56de\u503c\u4e3a120\uff0c\u4f46\u6ca1\u6709print\u51fa120'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9121).Z,width:"1795",height:"950"}),"\n\u4f7f\u7528\u201c\u5355\u6b65\u8df3\u8fc7(F10)\u201d\uff0c\u6b64\u65f6\u8f93\u51fa120\uff0c\u540c\u65f6\u7a0b\u5e8f\u8fd0\u884c\u5b8c\u6bd5\uff0c\u7ed3\u675f\u8c03\u8bd5\u3002"),(0,l.kt)("h3",{id:"\u91cd\u542fctrl--shift--f5"},"\u91cd\u542f(ctrl + shift + F5)"),(0,l.kt)("p",null,"\u91cd\u542f\u8c03\u8bd5"),(0,l.kt)("h3",{id:"\u505c\u6b62shift--f5"},"\u505c\u6b62(shift + F5)"),(0,l.kt)("p",null,"\u505c\u6b62\u8c03\u8bd5"))}p.isMDXComponent=!0},4084:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging-52fbb956b96eedca7a65ad4cb9758717.png"},4271:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging10-2c46923c0ce5b7f91046434eb094e107.png"},3182:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging11-7f59e204a27fda0d88eb784b7eae456c.png"},728:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging12-8a4471dfe84406855f767df702d8c763.png"},9121:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging13-2d4c6ff8045a4dbe344bad07629ba273.png"},8280:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},1541:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging3-13ab0b260748948d6405c3d2f97d3569.png"},1296:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging4-3a41d1914ed7acf4d8df515a75c4ff70.png"},9971:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging5-986908b4b3522648b4191d70db4829dd.png"},9284:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging6-e53b64a8619426c0978171304189c4fe.png"},2902:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging7-4c583ed54127077a25ad87551d33a603.png"},1098:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging8-d897c5e7c80ef493d18c342564d912fc.png"},8583:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debuging9-930c1d8abc35cf5e634a8a6507c25e06.png"},2421:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/duandian-7391ad32ecdcdd260af24b079a6ff612.png"},6870:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/duandian2-8d8e8542f92cd78dba228e8d080d70ca.png"},2059:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start_debug-36d4f438a8e5e19774621ac9ef5567b5.png"},1281:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAByCAIAAACupcbuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAASbElEQVR4nO2da1wTR9vGJyEhBAlQlBKLRhR9hdbWIxSoTwVsRSkoSipFBSFaDkIU1Ket4gmlfRS0tujPFqGCiiAqqYLWQ0EF1HJKixAIRARBCxJAiWggCUneD6sxSI4aSCLz50t2Znbm3t1rd2Z351pQU6ZMAZBhD4bH42s7Boj2QWs7AIhOAHUAAQDqAIIAdQABAOoAggB1AAEAAIy2A9AwOBzOCG+EwWBRqFezxGLQ1yfo7enl8XjaCE2neat0MGLECLwxXl4uCgWwWCwWi8VwMc+ePRvKwHSft6dfwOFwCkQgDd4Yj8PhBjse/UJPdGBg/9XO+C0rnN4zklvECC8/780KDwf0pF9Am1m+CwSPvLfEOeenp+dUtAsGFMFgsKrXp6iwlVPAqiXOpBGC1srs344UPhAAAMwcgsNmMn/9tZijdujG9n7R1M/GSbeHRWMFIqktEHLr/zj4Y079wI0aMvREBwAAUcdfh/cf+T/vgBU7Yj/JPZ5+idn/mAwcGCpAfmHL+UFfjWMlbUxoem9BJHXV/Pq43Gczgr8NHFeZTFNfBABg7T9z4RxbE1IsOchYp/UHnMuj9hf2vkgx/nR93Fz7i/WV2hOC/uhADAAQtFfQfqwtdiIHh8Y6Vf6eerKgiavZVrC2k0jt5clMrgDU5xW3eMwk4ewnffWf0SZgdPR+DyDg3Ps7N/VIfrM6R0z8WilDi56MDwAQS3ZVb0tx+vebDxRh3aN++MZvppUa3YFyRM0tHaOdPD6yJFjae84mdTQ185g5Jwtbupsu740MXh19kG7q/bX3OIPXilydlCFGX3QgBv3PGe7d/KSdO5KYo/1i4qK97c3UOTCKELbkJGe12oXEJ+6J/LAj+7fcFiHglKXFH2siuXxoJuTWX86vNyOR1NDeq5HLS9Eu+qIDWftKyGHm/hQTl9U+fc330e4E8Uvec/x0iqm4HyOnfTrDUjpBXjuCB0VJ/8uq7GFm7z189cX1n1OeFp9cgowPBMI3jlxWina1oCc6EFRePFnYMnDGjIGprYOT3chn9cyWXqnktibB9C/JH5q9WH5n+jIfuydNbFWbEz//Uy9LxapUSZGHAckr5sDBrV4kg+eLS7YeOLh18fNFjJ3f978e/M5jtPpXRxnjRAXnypBjPHF+cNCCDy1Be9WVo0cE/SIztnUPCPCy6y0++b/DJa2CUZajJFl9D29l5DgsJZPFZ84w0NO+9LGtyc6seNyvaoWbiVwx5BRRkCW7MtC//MDKkd8q1CkGYsnaYgDEQIwWP69eLKn65aI8UAPulzDSgegSlu7hK0kdXLvp/AsJ6+ngwxVrwkNMKrEW99N+udpu9N7H5JV+MzCVuT/HXJN9y9DHLss4C/zJXzuIHv3z+5mKLjXbl7s/1N1Vso6JjH5BtVqFTee/p56XWqTtoNIkiwJmVkxYlmoxSX4jmsDongIQ2osLWlypbsb/lox2/sILADEXM8V9QtGh0+0Gdsu3hk++f+Fw7JVaqTt6GRvSUZqRdc9KxG5T+2WCohGEspNNRnlllatbpSZBmtbd8QH3Tn1rH7upsUuMEotR4q679f/2tjJruABwytN3bfu1nwjk0v0aIgBACMRiMUABAPBT/KnLPjJ9nv6u47Jo3+mEyT4bAmZbq3jPIENSYvGA8YG2T0cVnyNJd2WDFEl/sI5rf6ZMAXXHaKdvINd97PSRTmGB8aHi//5aWqOBFhTteWH9nZYlLp9Ppp+rrS2u9wyN9hfvz6g0/DzQdwzryLZDrabOq8ICF9TvOdeq9N5BLBaL+t+gICkDRgya1UL/AYDyR60ydaBtcQIABKWJazlf7fAd+Q4AiA5GEgldVxNjs+rk7HpNBi1s/fNIxsgVy3fsNcOgARaLHe8/n85ikaza/06pbe8G7deK7i5wHIMGynUgqLt687OwvYkB/a+8kxIS/SQLop6Gi0m1Gn2o3H9n9FtAocBAZUjrQAcOvxR42/fHG1mPWra46UR+A5jw2fK5NgTOtPdN66qeyCwvFqvxikHplgoelh3fW3YcALzd4ijKtLbsvLpeMOaBlaP7B//8cd/C1cXmYd1ZkSpNcevOJkSfVTWwIUD84jmWtCAMLCxGKlOAGAxZd/CSUS5LPuGeS76O+njJ0sXznceLKrIO/8l3cDGrp9+TeYOAxWLQaFWHOwKBgNeryqwk06lffIq5lnK0vAMAbsMdtuVs34ClHlOM7uQcPc98ou4TJS3w4tyQe4ogakDZ2k4ckKVbFwYVMTQ0NCGYqFj4afdTPn+YGrmU9gtKj79Oq4PP5/VwDVSZktTD7eHzh8kURRmXAal+4WUuikgkDllQEJ0FAwDAYjX66haibwgEAt19jgQZSqAOIABAHUAQoA4gAEAdQBCgDiAAQB1AEKAOIAAMNx34+Pj4+vpqOwpdZHjpwM/Pz9nZWdtR6CIa9rXFxsYuWbIEh8Px+fz29vbi4uJffvmlublZI5UbGhoGBwd7e3uPGzeOz+ffvXv31KlTZ86c0UjlwxwN64BIJDY0NMTGxhoYGEyYMIFCoZw5c8bb27utre0Na8bhcEePHp06deqpU6eSk5N5PN7777//zjvvaCRsiOZ9rt3d3X///TcAoKysrKys7NKlS56enqmpqYWFhadPnz5w4ABSjMlk7ty5MzMzEwCwadMmV1dXCwsLY2PjxsbGH3/88erVq69UGxERMWPGDAqFcuPGDSTl0qVLklxfX9/w8HAikdjY2Lhnzx5JGRQKFRYWtmzZMgKBUFdXRyQS//33X8lay5cvDwgIsLKyYrFYCQkJ5eXlGt8b+sLgjg84HA5Q4X3mrFmzWlpa1q1bR6VS2Wz2zz//bGFh8UoZMpmcn58vOcDSrFy5cteuXTk5OWvWrKHT6b/99tvs2bORrKioqIiIiMzMTCqVmpeXZ2LycqLK6tWro6KiUlNTv/7665aWlpSUFEtLyzfaWn1msHzvRkZGJBIpPDxcIBDk5+crLd/c3Hzr1i0AQFVV1Y0bN1xdXWm0lwYNCwuLUaNGVVdXD1wRh8OtXbv2+PHjiYmJAIDCwkJra+tvvvnmxo0bWCw2KCgoJSXl0KFDAICioiJ3d3fJWlQqNSEhISsrCwBw+/btsrKyefPmnThxQhNbr39oXgeOjo4sFgv5zWKxgoOD7969q/rq7e3tHA7n3XfflU5EJh4KhTLmA9ra2hIIBOnrxM2bNzdv3ozD4caMGYPH40tLS2WuhcfjN23a9O233yIpSHnV43zL0LwOqqqqtmzZgkKh4uPjUShUVVUVkt7X12dkpNJXiXp7e1/pSjo7Ozkcjp2d3cDCA616EpDmMBgZ24h8Oi8uLq6kpESSiPRiwxPNjw96enqYTGZNTc2aNWuIROK2bduQdDabPXHiwDmxKiEWiy9evOjh4TF16tRXsurr6589e/bJJ59IUpydnVksFo/Hq6+v53K5rq6uAyu8f/9+T0/PpEmTGqTo7Ox8vfDeAgxMTEwMDDT1FQng7e1taGiIdO0cDofNZq9bt+727dtNTU14PD4gIACFQmEwmAkTJnh7excUFDAYDACAn58fm82+fv06UklwcHBNTc0r1/OKigoPD4/AwEA8Hm9kZDR+/Hg3NzdnZ+fi4mI+nx8eHi4Wi3E43MqVKxctWrR58+Z79+4JhcLe3t7w8HACgQAAIJFICxYsaGtru3LlilAoRKPRq1atIhAIaDR64sSJc+bMqaio0NR+0C9EItHgfh/p7NmzCxcu3Lp1q6en54kTJ8zNzf39/SMiIrq7uxkMRlNTk+pVPX78mEwmh4aGzp8/n0KhCIXC+/fvX7hwAQCQmprK5XJDQ0MjIyMbGxtDQ0MlkkpLS+vs7AwLC1uxYgWXy21ra7t9+zaSdejQoa6urqCgoICAgCdPnjCZzLS0NA1vv/6AIhKJcJ7qMAfOU4U8B+oAAgDUAQQB6gACANQBBAHqAAIA1AEEAeoAAgDUAQQB6gACANQBBAHqAALAsNKBn5+fj4+Ptlpft27dsmXLtNW6Ut5aHUybNs3e3l46ZenSpdOnTx/KGGg02o4dO5Dfn3/+uY2NzVC2rhZ642ORrrmjo6OkpCQpKamhoUFe+cTExNOnTzOZzDdvWilJSUlubm7SKWlpaT/88ENjY6P0NHldRm98LJKa0Wg0iUQKCgrKzs728fFRazLL4FFTU7Nr1y7JIrK9GzZs0F5E6qH5fgHxsZSVlWVlZYWHh5ubm3t6egIACgsLqVSqpBiTyfT390d+b9q06fLly2VlZdXV1efPn5fMLpdZc3l5OY1GW7169YgRIxYvXrx79+68vDxJmcWLFzOZTFNTUwAAlUplsVgsFotCoSC5bm5uRUVFDAZjYCu+vr55eXkMBiM3N1dif1A9tqdPn9KlePDgAQAgOzs7NjZWZvnly5dfunTpn3/+ycrKmjVrlpJ9OvjojY/lFbhcrkgkMjIyKigoIJFIJBIJSXdwcKisrHzy5AkAICMjw8vLy8vLS2KFaGlp2b59e0RERGtrq3QrCpwwKsaGQqEMpFAcvA5aaPTDx4KA7GtjY2MbG5vQ0FA0Gp2Xl1dbW8vj8dzd3ZHZhbNmzcrNzUXKd3Z2SpwUCHV1dYhjrrq6+ubNm0grCpwwqsfm4OAgPRaxt7eX6bYAumqh0Q8fC4L0vm5ubl6/fj3iSLx27ZqHh0daWpqVlZWNjY1M79srdHR0SFpR4IRBbA6qxMZgMLZv3y5ZlCcCoKsWGv3wsSAwGIxt27ZxudxHjx51db38h0s0Gi0pKcna2nrOnDldXV3IjGSl3wqXtKLACaN6bFwuV7KlitFNC41++FgQuFwug8FoaGiQFgEA4Pr1642NjWQyee7cuX/++adIJAIAdHd3m5ubq1KtAifMm0Q7EMSdp5sWmkH0LzQ3N+/atSs+Pv7ixYuFhYUXLlyIiYmhUql0Oh2Lxap1Firl2LFjkZGRpqamISEhSEpVVdWCBQtKS0t7e3uFQqGCzoLH4yUmJm7cuJHD4VRWVrq5ubm6uoaGhmowPAAAm83++OOPJ02adOfOnaSkJCqVyufzb926hcVix44dq3XrhN74WBRDo9GioqLa29v/+usvJOWnn34iEon79u3r7u7OzMxUPGhQ4ITRFAcOHIiLiwsKCoqJidFBC83b42P5/fff//jjj+TkZG0Hon8IBILBvR4MAfb29iKRyM/Pz9zcPD09Xdvh6Ct6r4Pdu3fb2NhUVFRQKJSenh5th6OvvD39AuS1gf5GyHOgDiAAQB1AEKAOIABAHUAQoA4gAEAdQBCgDiAAQB1AEHRFB2QyeeHChdqOQjbDwQCjKzrw9/efOXOmtqMAYLgaYAbLx8Lj8dhsdnl5eUZGhuTTlVoBGmBUYVB8LDt37sRgMNbW1l5eXqdOndq3b9/hw4c125C6IUEDjGIGxcdCp9NLSkpoNBqFQklJSdm4caP0NV+ehWPmzJk5OTlVVVV5eXmLFi2SpCswwAAAFi1adPny5erq6uLi4uzsbJk+E2iAUcqgjw8SExO7u7vJZDKyqMDCYWJicvLkycjIyKKiooSEhC+++EJp5QEBAXv27MnPzw8JCdmyZYutra3SqbDQACOTQZ+HwuPx6urqbG1tgTILR0FBQUZGBvJj9OjRISEhyGe05WFgYLB27drMzMz4+HhJWzJLQgOMUoZ0PpLqFo6SkpINGzag0WhkErpMxo4da2ZmVlBQoLRdaIBRyqDrAIfDTZ48+cqVK0AdCwcGgzE0NER0IM8Ag/xXhb6+PqUxQAOMUgZdB9HR0QQCAflvmxILB/Lv+hQwZ86c6upq5BjLM8A0Njb29fU5ODgoPY8RA8zAdIkB5qOPPnoTA0xRURGSMjQGGKV77zXQvA5MTU0dHR0l941OTk579+6l0+kAAD6fr8DCMW7cOBcXFxwOt3DhQgcHh6CgICRdngHm6dOnx44do1Aojx8/rq6unjZtmvS/5VMRaIBB0LAOHj586OLikp6eLnmO9OWXX1ZWVkoKyLNwlJaWzp079+DBg1gstra2NjAwUHL1U2CA2b9/PxqNDgoKMjU1Ra4fCvpXmUADDMLbM1/Z2NiYTqd/9913586dU2tFaIDRex/LvHnz0Gh0a2srgUAIDAzkcrmSrlop0AAjjX7r4IMPPvDx8Rk5ciSHw6mqqlqxYsWjR49UXBcaYKR5e/oFyGsDfSyQ50AdQACAOoAgQB1AAIA6gCBAHUAAQJ4fCAQCbYcB0TIYDAYDBrxsVfruFaIXWFlZDfzC+Suvy5FFtLw8zX7XDqIVlB5WyeL/A0raqJCn7xhIAAAAAElFTkSuQmCC"}}]);