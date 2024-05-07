"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[6735],{3905:(e,t,i)=>{i.d(t,{Zo:()=>k,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),s=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):d(d({},t),e)),i},k=function(e){var t=s(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=s(i),c=n,m=u["".concat(r,".").concat(c)]||u[c]||p[c]||l;return i?a.createElement(m,d(d({ref:t},k),{},{components:i})):a.createElement(m,d({ref:t},k))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,d=new Array(l);d[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:n,d[1]=o;for(var s=2;s<l;s++)d[s]=i[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},60243:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=i(87462),n=(i(67294),i(3905));const l={id:"texstudio",sidebar_position:5},d="TeXstudio \u642d\u5efaLaTeX\u7f16\u8f91\u73af\u5883",o={unversionedId:"latex/install/texstudio",id:"latex/install/texstudio",title:"TeXstudio \u642d\u5efaLaTeX\u7f16\u8f91\u73af\u5883",description:"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/latex/install/texstudio.md",sourceDirName:"latex/install",slug:"/latex/install/texstudio",permalink:"/math201/latex/install/texstudio",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"texstudio",sidebar_position:5},sidebar:"latexSidebar",previous:{title:"VS Code \u642d\u5efaLaTeX\u7f16\u8f91\u73af\u5883",permalink:"/math201/latex/install/vscode"},next:{title:"\u5728\u7ebf\u7248\u7684LaTeX\u7f16\u8f91\u5668\u2014\u2014Overleaf",permalink:"/math201/latex/install/overleaf"}},r={},s=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f",level:4},{value:"2. \u5b89\u88c5\u9875\u976201",id:"2-\u5b89\u88c5\u9875\u976201",level:4},{value:"3. \u5b89\u88c5\u9875\u976202",id:"3-\u5b89\u88c5\u9875\u976202",level:4},{value:"\u914d\u7f6eXeLaTeX",id:"\u914d\u7f6exelatex",level:2},{value:"1. \u6253\u5f00TeXsudio",id:"1-\u6253\u5f00texsudio",level:4},{value:"2. \u8fdb\u5165TeXsudio\u914d\u7f6e\u754c\u9762",id:"2-\u8fdb\u5165texsudio\u914d\u7f6e\u754c\u9762",level:4},{value:"3. \u5c06\u9ed8\u8ba4\u7f16\u8bd1\u5668\u6539\u4e3aXeLaTeX",id:"3-\u5c06\u9ed8\u8ba4\u7f16\u8bd1\u5668\u6539\u4e3axelatex",level:4},{value:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f &amp; MiKTeX \u7f3a\u5931\u5b8f\u5305\u5b89\u88c5",id:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f--miktex-\u7f3a\u5931\u5b8f\u5305\u5b89\u88c5",level:2},{value:"1. \u65b0\u5efa\u4e00\u4e2aLaTeX\u9879\u76ee",id:"1-\u65b0\u5efa\u4e00\u4e2alatex\u9879\u76ee",level:4},{value:"2. \u4fdd\u5b58LaTeX\u6587\u4ef6",id:"2-\u4fdd\u5b58latex\u6587\u4ef6",level:4},{value:"3. \u8f93\u5165LaTeX\u4ee3\u7801",id:"3-\u8f93\u5165latex\u4ee3\u7801",level:4},{value:"4. \u7f16\u8bd1",id:"4-\u7f16\u8bd1",level:4},{value:"5. MiKTeX \u7f3a\u5931\u5b8f\u5305\u5b89\u88c5",id:"5-miktex-\u7f3a\u5931\u5b8f\u5305\u5b89\u88c5",level:4},{value:"6. \u7f16\u8bd1\u6210\u529f\u5e76\u4e14\u663e\u793aPDF",id:"6-\u7f16\u8bd1\u6210\u529f\u5e76\u4e14\u663e\u793apdf",level:4}],k={toc:s};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"texstudio-\u642d\u5efalatex\u7f16\u8f91\u73af\u5883"},"TeXstudio \u642d\u5efaLaTeX\u7f16\u8f91\u73af\u5883"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u91c7\u7528Windows\u7248\u672c\u5b89\u88c5\uff0cLinux\u548cMacOS\u7248\u672c\u5b89\u88c5\u7c7b\u4f3c\uff0c\u65e2\u7136\u4f60\u5df2\u7ecf\u4f7f\u7528Linux/MacOS\uff0c\u4f5c\u8005\u8ba4\u4e3a\u4f60\u7684\u52a8\u624b\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b\u5f88\u5f3a\uff0c\u76f8\u4fe1\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u7684\u52aa\u529b\u5728Linux/MacOS\u4e0a\u5b89\u88c5\u597dTeXstudio\u3002")),(0,n.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,n.kt)("p",null,"Texstudio \u5b98\u7f51\u4e0b\u8f7d\u5730\u5740\u4e3a\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://texstudio.org"},"https://texstudio.org")),(0,n.kt)("p",null,"\u70b9\u51fbDownload\uff0c\u4e0b\u8f7d\u5b89\u88c5\u5305\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(86661).Z,width:"710",height:"559"})),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("h4",{id:"1-\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"},"1. \u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u53cc\u51fb\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6984).Z,width:"72",height:"102"})),(0,n.kt)("h4",{id:"2-\u5b89\u88c5\u9875\u976201"},"2. \u5b89\u88c5\u9875\u976201"),(0,n.kt)("p",null,"\u9009\u62e9\u4e0b\u4e00\u6b65\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(62205).Z,width:"399",height:"295"})),(0,n.kt)("h4",{id:"3-\u5b89\u88c5\u9875\u976202"},"3. \u5b89\u88c5\u9875\u976202"),(0,n.kt)("p",null,"\u9009\u62e9\u5173\u95ed\uff0c\u7ed3\u675f\u5b89\u88c5\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(60896).Z,width:"393",height:"289"})),(0,n.kt)("h2",{id:"\u914d\u7f6exelatex"},"\u914d\u7f6eXeLaTeX"),(0,n.kt)("h4",{id:"1-\u6253\u5f00texsudio"},"1. \u6253\u5f00TeXsudio"),(0,n.kt)("p",null,"\u5728\u5f00\u59cb\u83dc\u5355\u4e2d\u627e\u5230TeXsudio, \u5e76\u6253\u5f00\u3002"),(0,n.kt)("h4",{id:"2-\u8fdb\u5165texsudio\u914d\u7f6e\u754c\u9762"},"2. \u8fdb\u5165TeXsudio\u914d\u7f6e\u754c\u9762"),(0,n.kt)("p",null,"\u70b9\u51fb Options -> Configure TeXsudio \u4fbf\u53ef\u8fdb\u5165TeXsudio\u914d\u7f6e\u754c\u9762\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(57618).Z,width:"843",height:"311"})),(0,n.kt)("h4",{id:"3-\u5c06\u9ed8\u8ba4\u7f16\u8bd1\u5668\u6539\u4e3axelatex"},"3. \u5c06\u9ed8\u8ba4\u7f16\u8bd1\u5668\u6539\u4e3aXeLaTeX"),(0,n.kt)("p",null,"\u70b9\u51fb Build -> Default Compiler\uff0c \u9009\u62e9 XeLaTex\u3002 \u70b9\u51fb OK\uff0c\u5b8c\u6210\u914d\u7f6e"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(36292).Z,width:"842",height:"533"})),(0,n.kt)("h2",{id:"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f--miktex-\u7f3a\u5931\u5b8f\u5305\u5b89\u88c5"},"\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f & MiKTeX \u7f3a\u5931\u5b8f\u5305\u5b89\u88c5"),(0,n.kt)("h4",{id:"1-\u65b0\u5efa\u4e00\u4e2alatex\u9879\u76ee"},"1. \u65b0\u5efa\u4e00\u4e2aLaTeX\u9879\u76ee"),(0,n.kt)("p",null,"\u70b9\u51fb\u65b0\u5efa\u6587\u4ef6\u56fe\u6807\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(95930).Z,width:"843",height:"426"})),(0,n.kt)("h4",{id:"2-\u4fdd\u5b58latex\u6587\u4ef6"},"2. \u4fdd\u5b58LaTeX\u6587\u4ef6"),(0,n.kt)("p",null,"\u70b9\u51fb\u4fdd\u5b58\u56fe\u6807\uff0c\u8fdb\u5165\u4fdd\u5b58\u8def\u5f84\u8bbe\u7f6e\u754c\u9762\uff0c\u5c06.tex\u6587\u4ef6\u4fdd\u5b58\u5230\u4f60\u60f3\u4fdd\u5b58\u7684\u8def\u5f84\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(35145).Z,width:"773",height:"573"})),(0,n.kt)("h4",{id:"3-\u8f93\u5165latex\u4ee3\u7801"},"3. \u8f93\u5165LaTeX\u4ee3\u7801"),(0,n.kt)("p",null,"\u5728TeXsudio \u754c\u9762\u4e2d\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801: (\u76ee\u524d\u7684\u4f60\u65e0\u9700\u61c2\u5f97\u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u601d\uff0c\u53ea\u662f\u4e3a\u4e86\u6d4b\u8bd5LaTex\u73af\u5883\u662f\u5426\u6210\u529f\u5b89\u88c5)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex",metastring:"showLineNumbers",showLineNumbers:!0},"\\documentclass{ctexart}\n\\begin{document}\n\u4f60\u597d\uff01\\LaTeX\n\\end{document}\n")),(0,n.kt)("h4",{id:"4-\u7f16\u8bd1"},"4. \u7f16\u8bd1"),(0,n.kt)("p",null,"\u70b9\u51fbBuild & View\u56fe\u6807\u6216\u8005\u6309F5\u5065\uff0c\u8fdb\u884cLaTeX\u9879\u76ee\u7f16\u8bd1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(42251).Z,width:"788",height:"419"})),(0,n.kt)("h4",{id:"5-miktex-\u7f3a\u5931\u5b8f\u5305\u5b89\u88c5"},"5. MiKTeX \u7f3a\u5931\u5b8f\u5305\u5b89\u88c5"),(0,n.kt)("p",null,"\u7531\u4e8eMiKTeX\u9ed8\u8ba4\u5b89\u88c5\u6ca1\u6709\u5e26 ctex \u8fd9\u4e2a\u4e2d\u6587\u652f\u6301\u5b8f\u5305\uff0c\u6240\u4ee5\u5728\u7f16\u8bd1\u65f6\u4f1a\u5f39\u51fa\u5982\u4e0b\u7a97\u53e3\uff0c\u70b9\u51fb\u5b89\u88c5\uff0cMiKTeX\u5373\u53ef\u81ea\u52a8\u4ece\u8fdc\u7a0b\u5b8f\u5305\u7ba1\u7406\u5e93\u5b89\u88c5 ctex \u8fd9\u4e2a\u5b8f\u5305\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(94369).Z,width:"369",height:"288"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u53ef\u4ee5\u53d6\u6d88\u52fe\u9009\u201c\u603b\u662f\u663e\u793a\u6b64\u5bf9\u8bdd\u6846\u201d, MiKTeX\u4f1a\u81ea\u52a8\u5b89\u88c5\u6211\u4eecLaTeX\u9879\u76ee\u4e2d\u7528\u5230\u7684\u672c\u5730\u6ca1\u6709\u7684\u5b8f\u5305\u3002\u5982\u679c\u4e0d\u53d6\u6d88\u52fe\u9009\uff0c\u5219\u6bcf\u6b21\u9047\u5230\u7f3a\u5931\u7684\u5b8f\u5305\u8981\u5b89\u88c5\u65f6\uff0c\u90fd\u4f1a\u5f39\u51fa\u6b64\u754c\u9762\u3002")),(0,n.kt)("h4",{id:"6-\u7f16\u8bd1\u6210\u529f\u5e76\u4e14\u663e\u793apdf"},"6. \u7f16\u8bd1\u6210\u529f\u5e76\u4e14\u663e\u793aPDF"),(0,n.kt)("p",null,"MiKTeX\u81ea\u52a8\u5b89\u88c5\u5b8f\u5305\u6210\u529f\u540e\uff0cXeLaTex\u4f1a\u5c06\u6211\u4eec\u7684LaTeX\u9879\u76ee\u7f16\u8bd1\u6210PDF\u6587\u4ef6\uff0c\u5e76\u4e14\u5728\u53f3\u4fa7\u9884\u89c8PDF\u6587\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(24265).Z,width:"2460",height:"1351"})))}u.isMDXComponent=!0},86661:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_01-b20714796bdebf1e6233ad7b05f4c988.png"},6984:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,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"},62205:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_03-a13c1827f57f84128a74efb31aaaf27c.png"},60896:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_04-87c965cf91092cca8dd6968f3002c50a.png"},57618:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_05-0befa830c5a9b899a46a539921349c45.png"},36292:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_06-edf6332c29d373e2bc366eedbdd90191.png"},94369:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_install_07-28dd5502bf9a6208963a634aeadd9690.png"},95930:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_new_01-2c85d4b852d5ca75f967082eadaf114f.png"},35145:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_new_02-e657ab69be1eae8966ae3e6a503c8448.png"},42251:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_new_03-769d285dbb00133e43575e03f38ddca6.png"},24265:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/texstudio_new_04-9ab8d36974a1a6330aafe016dc815307.png"}}]);