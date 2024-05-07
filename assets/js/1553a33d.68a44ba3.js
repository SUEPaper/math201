"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[7058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"macos",sidebar_position:3},i="MacOS \u5b89\u88c5 LaTeX",c={unversionedId:"latex/install/macos",id:"latex/install/macos",title:"MacOS \u5b89\u88c5 LaTeX",description:"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003",source:"@site/docs/latex/install/macos.md",sourceDirName:"latex/install",slug:"/latex/install/macos",permalink:"/math201/latex/install/macos",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"macos",sidebar_position:3},sidebar:"latexSidebar",previous:{title:"Ubuntu Linux \u5b89\u88c5 MiKTeX",permalink:"/math201/latex/install/ubuntu"},next:{title:"VS Code \u642d\u5efaLaTeX\u7f16\u8f91\u73af\u5883",permalink:"/math201/latex/install/vscode"}},s={},o=[{value:"\u4e3a\u5565MacOS\u4e0d\u4f7f\u7528MiKTeX\u7248\u672c\uff0c\u800c\u4f7f\u7528MacTeX\uff1f",id:"\u4e3a\u5565macos\u4e0d\u4f7f\u7528miktex\u7248\u672c\u800c\u4f7f\u7528mactex",level:2},{value:"MacTeX VS BasicTeX",id:"mactex-vs-basictex",level:2},{value:"\u5b89\u88c5MacTeX",id:"\u5b89\u88c5mactex",level:2},{value:"1. MacTeX\u4e0b\u8f7d\u94fe\u63a5",id:"1-mactex\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"2. MacTeX\u5b89\u88c5",id:"2-mactex\u5b89\u88c5",level:3},{value:"3. \u5b89\u88c5",id:"3-\u5b89\u88c5",level:3},{value:"4. \u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f",id:"4-\u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f",level:3},{value:"\u5b89\u88c5BasicTeX",id:"\u5b89\u88c5basictex",level:2},{value:"1. BasicTeX\u4e0b\u8f7d\u94fe\u63a5",id:"1-basictex\u4e0b\u8f7d\u94fe\u63a5",level:3},{value:"2. \u5b89\u88c5",id:"2-\u5b89\u88c5",level:3},{value:"3. \u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f",id:"3-\u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f",level:3},{value:"4. \u5b8f\u5305\u7f3a\u5931\u600e\u4e48\u89e3\u51b3\uff1f",id:"4-\u5b8f\u5305\u7f3a\u5931\u600e\u4e48\u89e3\u51b3",level:3},{value:"5. tlmgr\u4e2d\u56fd\u52a0\u901f",id:"5-tlmgr\u4e2d\u56fd\u52a0\u901f",level:3},{value:"Perl\u73af\u5883\u5b89\u88c5",id:"perl\u73af\u5883\u5b89\u88c5",level:2}],p={toc:o};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos-\u5b89\u88c5-latex"},"MacOS \u5b89\u88c5 LaTeX"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"\u975e\u5e38\u91cd\u8981\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\u4ee5\u540e\u518d\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002\uff08\u56e0\u672a\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u672c\u6587\uff0c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u540e\u679c\u81ea\u8d1f\uff0c \u9003\uff5e\uff5e\uff5e\u9003\uff5e\uff5e\uff5e\u9003"))),(0,r.kt)("h2",{id:"\u4e3a\u5565macos\u4e0d\u4f7f\u7528miktex\u7248\u672c\u800c\u4f7f\u7528mactex"},"\u4e3a\u5565MacOS\u4e0d\u4f7f\u7528MiKTeX\u7248\u672c\uff0c\u800c\u4f7f\u7528MacTeX\uff1f"),(0,r.kt)("p",null,"\u6700\u4e3b\u8981\u7684\u539f\u56e0\u662fMiKTeX\u5f53\u524d\u7248\u672c\u4e0d\u80fd\u5f88\u597d\u517c\u5bb9Apple Silicon\u7684\u82af\u7247\uff0c\u800cMacTeX\u80fd\u591f\u5f88\u597d\u7684\u652f\u6301Apple Silicon\u82af\u7247\u3002"),(0,r.kt)("h2",{id:"mactex-vs-basictex"},"MacTeX VS BasicTeX"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MacTeX\u5c5e\u4e8e\u5927\u800c\u5168\u7684\u7248\u672c\uff0c\u5305\u62ec\u4e86LaTeX\u6240\u9700\u8981\u7528\u5230\u7684\u6240\u6709\u5b8f\u5305\u548c\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"BasicTeX\u5c5e\u4e8e\u7cbe\u7b80\u7248\u672c\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u521d\u5b66\u8005\u4e0d\u5efa\u8bae\u4f7f\u7528\u6b64\u7248\u672c"),"\uff0c\u9700\u8981\u89e3\u51b3\u672c\u5730\u7f3a\u5931\u5b8f\u5305\u548c\u5e93\u7684\u95ee\u9898")),(0,r.kt)("h2",{id:"\u5b89\u88c5mactex"},"\u5b89\u88c5MacTeX"),(0,r.kt)("h3",{id:"1-mactex\u4e0b\u8f7d\u94fe\u63a5"},"1. MacTeX\u4e0b\u8f7d\u94fe\u63a5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/mac/mactex/MacTeX.pkg"},"https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/mac/mactex/MacTeX.pkg")),(0,r.kt)("h3",{id:"2-mactex\u5b89\u88c5"},"2. MacTeX\u5b89\u88c5"),(0,r.kt)("h3",{id:"3-\u5b89\u88c5"},"3. \u5b89\u88c5"),(0,r.kt)("p",null,"\u53cc\u51fb\u5df2\u4e0b\u8f7d\u597d\u7684\u5b89\u88c5\u5305"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(46790).Z,width:"214",height:"276"})),(0,r.kt)("h3",{id:"4-\u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f"},"4. \u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f"),(0,r.kt)("p",null,"\u8bf7\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"latex --version\n")),(0,r.kt)("p",null,"\u82e5\u5b89\u88c5\u6210\u529f\uff0c\u7ec8\u7aef\u663e\u793a LaTeX \u7684\u7248\u672c\u4fe1\u606f\uff08\u5982\u4e0b\u56fe\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16365).Z,width:"1976",height:"630"})),(0,r.kt)("h2",{id:"\u5b89\u88c5basictex"},"\u5b89\u88c5BasicTeX"),(0,r.kt)("h3",{id:"1-basictex\u4e0b\u8f7d\u94fe\u63a5"},"1. BasicTeX\u4e0b\u8f7d\u94fe\u63a5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/mac/mactex/BasicTeX.pkg"},"https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/mac/mactex/BasicTeX.pkg")),(0,r.kt)("h3",{id:"2-\u5b89\u88c5"},"2. \u5b89\u88c5"),(0,r.kt)("p",null,"\u53cc\u51fb\u5df2\u4e0b\u8f7d\u597d\u7684\u5b89\u88c5\u5305"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(67667).Z,width:"238",height:"242"})),(0,r.kt)("h3",{id:"3-\u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f"},"3. \u68c0\u67e5\u5b89\u88c5\u662f\u5426\u6210\u529f"),(0,r.kt)("p",null,"\u8bf7\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"latex --version\n")),(0,r.kt)("p",null,"\u82e5\u5b89\u88c5\u6210\u529f\uff0c\u7ec8\u7aef\u663e\u793a LaTeX \u7684\u7248\u672c\u4fe1\u606f\uff08\u5982\u4e0b\u56fe\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16365).Z,width:"1976",height:"630"})),(0,r.kt)("h3",{id:"4-\u5b8f\u5305\u7f3a\u5931\u600e\u4e48\u89e3\u51b3"},"4. \u5b8f\u5305\u7f3a\u5931\u600e\u4e48\u89e3\u51b3\uff1f"),(0,r.kt)("p",null,"BasicTex\u662f\u8f7b\u91cf\u5316\u7684\u7248\u672c\uff0c\u6240\u4ee5\u5982\u679c\u4f7f\u7528\u4e2d\u53d1\u73b0\u4e00\u4e9b\u5de5\u5177\u4e0d\u5b58\u5728\uff0c\u547d\u4ee4\u884c\u62a5\u9519\u201cmultirow.sty not found\u201d\uff0c\u90a3\u4f60\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5\u8fd9\u4e2a\u7f3a\u5931\u7684\u6a21\u5757\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tlmgr install multirow\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"tlmgr\u662fBasicTeX\u81ea\u5e26\u7684\u5b8f\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u7c7b\u4f3cMacOS\u4e0a\u7684Homebrew\u3002tlmgr",(0,r.kt)("a",{parentName:"p",href:"https://github.com/syvshc/tlmgr-intro-zh-cn"},"\u4ecb\u7ecd"))),(0,r.kt)("h3",{id:"5-tlmgr\u4e2d\u56fd\u52a0\u901f"},"5. tlmgr\u4e2d\u56fd\u52a0\u901f"),(0,r.kt)("p",null,"\u7531\u4e8e\u4f17\u6240\u5468\u77e5\u7684\u539f\u56e0\uff0c\u5728\u4e2d\u56fd\u5927\u9646\u8bbf\u95ee\u9ed8\u8ba4\u7684LaTeX\u8fdc\u7a0b\u5b8f\u5305\u7ba1\u7406\u5e93\u975e\u5e38\u6162\uff0c\u56e0\u6b64\u9700\u8981\u9009\u62e9\u4e2d\u56fd\u5927\u9646\u7684\u5b98\u65b9\u955c\u50cf\u6e90\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tlmgr option repository https://mirrors.ustc.edu.cn/CTAN/systems/texlive/\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u4f7f\u7528tlmgr\u5b89\u88c5\u7f3a\u5931\u7684\u5b8f\u5305\u7684\u901f\u5ea6\u4f1a\u8d77\u98de\u3002"),(0,r.kt)("h2",{id:"perl\u73af\u5883\u5b89\u88c5"},"Perl\u73af\u5883\u5b89\u88c5"),(0,r.kt)("p",null,"\u7531\u4e8e\u6709\u90e8\u5206LaTeX\u5b8f\u5305\u4f9d\u8d56Perl\uff0c\u6240\u4ee5\u9700\u8981\u5728MacOS\u4e0a\u5b89\u88c5Perl\u73af\u5883\u3002\u5b89\u88c5\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install perl\n")))}u.isMDXComponent=!0},67667:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BasicTeX-68580fba904165eb0e6e2cc4cfd51604.png"},16365:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LaTeX_CMD-1536954eb0c38448b26f66718fef4743.png"},46790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MacTeX-8a5f196fdf5e39e15eff9e4500049b87.png"}}]);