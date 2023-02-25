"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[4593],{3905:(e,t,p)=>{p.d(t,{Zo:()=>s,kt:()=>c});var n=p(67294);function a(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function r(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,n)}return p}function i(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?r(Object(p),!0).forEach((function(t){a(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):r(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function l(e,t){if(null==e)return{};var p,n,a=function(e,t){if(null==e)return{};var p,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)p=r[n],t.indexOf(p)>=0||(a[p]=e[p]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)p=r[n],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(a[p]=e[p])}return a}var o=n.createContext({}),A=function(e){var t=n.useContext(o),p=t;return e&&(p="function"==typeof e?e(t):i(i({},t),e)),p},s=function(e){var t=A(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var p=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=A(p),d=a,c=g["".concat(o,".").concat(d)]||g[d]||u[d]||r;return p?n.createElement(c,i(i({ref:t},s),{},{components:p})):n.createElement(c,i({ref:t},s))}));function c(e,t){var p=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=p.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var A=2;A<r;A++)i[A]=p[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,p)}d.displayName="MDXCreateElement"},91242:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>A});var n=p(87462),a=(p(67294),p(3905));const r={id:"pip",sidebar_position:3},i="\u5305\u7ba1\u7406",l={unversionedId:"python/pip",id:"python/pip",title:"\u5305\u7ba1\u7406",description:"pip\u7b80\u4ecb",source:"@site/docs/python/pip.md",sourceDirName:"python",slug:"/python/pip",permalink:"/math201/docs/python/pip",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pip",sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"VS Code \u642d\u5efa Python \u5f00\u53d1\u73af\u5883",permalink:"/math201/docs/python/install/vscode"},next:{title:"Jupyter Notebook \u4ecb\u7ecd",permalink:"/math201/docs/python/jupyter"}},o={},A=[{value:"pip\u7b80\u4ecb",id:"pip\u7b80\u4ecb",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528pip",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528pip",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u901a\u8fc7 pip \u4e0b\u8f7d\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u901a\u8fc7-pip-\u4e0b\u8f7d",level:3},{value:"\u7f51\u7edc\u4e0a\u522b\u4eba\u5206\u4eab\u7684\u7b2c\u4e09\u65b9\u5305\u600e\u4e48\u5904\u7406\uff1f",id:"\u7f51\u7edc\u4e0a\u522b\u4eba\u5206\u4eab\u7684\u7b2c\u4e09\u65b9\u5305\u600e\u4e48\u5904\u7406",level:3},{value:"\u5982\u4f55\u8fdb\u884cpip\u5305\u7ba1\u7406",id:"\u5982\u4f55\u8fdb\u884cpip\u5305\u7ba1\u7406",level:2},{value:"\u4f7f\u7528\u4e2d\u56fd\u6e90",id:"\u4f7f\u7528\u4e2d\u56fd\u6e90",level:3},{value:"\u67e5\u770bpip\u547d\u4ee4\u8bed\u53e5\uff08show help\uff09",id:"\u67e5\u770bpip\u547d\u4ee4\u8bed\u53e5show-help",level:3},{value:"\u4e0b\u8f7d\u6307\u5b9a\u7684Python\u5305",id:"\u4e0b\u8f7d\u6307\u5b9a\u7684python\u5305",level:3},{value:"\u5378\u8f7d\u6307\u5b9a\u7684Python\u5305",id:"\u5378\u8f7d\u6307\u5b9a\u7684python\u5305",level:3},{value:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u5e93",id:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u5e93",level:3},{value:"\u67e5\u770b\u5f53\u524d\u53ef\u5347\u7ea7\u7684\u5e93",id:"\u67e5\u770b\u5f53\u524d\u53ef\u5347\u7ea7\u7684\u5e93",level:3},{value:"\u67e5\u770bpip\u7248\u672c\uff08show version and exit\uff09",id:"\u67e5\u770bpip\u7248\u672cshow-version-and-exit",level:3},{value:"\u5347\u7ea7Python\u5305",id:"\u5347\u7ea7python\u5305",level:3}],s={toc:A};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5305\u7ba1\u7406"},"\u5305\u7ba1\u7406"),(0,a.kt)("h2",{id:"pip\u7b80\u4ecb"},"pip\u7b80\u4ecb"),(0,a.kt)("p",null,"\u2003","pip\u662fPython\u6807\u51c6\u5e93\u7ba1\u7406\u5668\uff0c\u662f\u7528\u6765\u5b89\u88c5\u4e0d\u540c\u7c7b\u5e93\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5bf9Python\u5305\u8fdb\u884c\u67e5\u627e\u3001\u4e0b\u8f7d\u3001\u5b89\u88c5\u548c\u5378\u8f7d\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u2003","pip\u63d0\u4f9b\u4e86\u5bf9Python\u5305\u5feb\u6377\u6709\u6548\u7684\u7ba1\u7406\uff0c\u5f53\u6211\u4eec\u7684Python\u7248\u672c\u57282.7.9+\u62163.4\u53ca\u4ee5\u4e0a\u7248\u672c\u90fd\u81ea\u5e26 pip \u5de5\u5177\u3002\u5728\u6b64\u7b80\u5355\u5730\u4ecb\u7ecd\u4e00\u4e0bpip\u7684\u90e8\u5206\u76f8\u5173\u6307\u4ee4."),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528pip"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528pip"),(0,a.kt)("p",null,"\u2003","\u8f6f\u4ef6\u5f00\u53d1\u5de5\u4f5c\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u90fd\u4e0d\u4f1a\u662f\u5b8c\u5168\u5168\u662f\u81ea\u5df1\u5b9e\u73b0\uff0c\u8fd8\u8981\u4f9d\u8d56\u522b\u4eba\u7684\u4ee3\u7801\u3002\u90a3\u5c31\u81ea\u7136\u5f15\u5165\u4e00\u4e2a\u95ee\u9898\uff0c\u5982\u4f55\u5f15\u5165\u522b\u7684\u4ee3\u7801\uff1f\n","\u2003","\u522b\u4eba\u5f00\u53d1\u5305\uff0c\u6211\u4eec\u76f4\u63a5\u590d\u7528\u522b\u4eba\u7684\u4ee3\u7801\u4e0d\u5c31\u597d\u4e86\u5417\u3002\u4f46\u662f\u8fd9\u6709\u4e00\u4e9b\u95ee\u9898\uff0c\u522b\u4eba\u63d0\u4f9b\u7684\u4ee3\u7801\u4e2d\u7684\u5b9a\u4e49\u4e07\u4e00\u548c\u6211\u7684\u4ee3\u7801\u6709\u5f88\u591a\u51b2\u7a81\u600e\u4e48\u529e\uff0c\u6211\u80fd\u62ff\u8fc7\u6765\u5c31\u7528\u5417\uff1f\u6216\u8bb8\u4fee\u4fee\u8865\u8865\u8fd8\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\u3002\u4f46\u5982\u679c\u6211\u4eec\u5e76\u4e0d\u4e86\u89e3\u522b\u4eba\u4ee3\u7801\uff0c\u90a3\u5c31\u975e\u5e38\u56f0\u96be\u4e86\uff0c\u6210\u672c\u592a\u9ad8\uff0c\u6216\u8bb8\u8fd8\u4f1a\u6539\u51fa bug\u3002\u4e8e\u662f\uff0c\u5305\u5c31\u51fa\u73b0\u4e86\uff0c\u5b83\u901a\u8fc7\u4e00\u4e9b\u7ea6\u5b9a\u4fd7\u6210\u7684\u89c4\u5219\u9632\u6b62\u4e00\u4e9b\u95ee\u9898\u53d1\u751f\uff0c\u6bd4\u5982\u540d\u79f0\u51b2\u7a81\uff0c\u7b80\u5316\u6211\u4eec\u7684\u5de5\u4f5c\u3002\u6211\u4eec\u8981\u4f7f\u7528\u522b\u4eba\u7684\u4ee3\u7801\uff0c\u53ea\u8981 import \u5373\u53ef\u3002\n","\u2003","\u8bed\u8a00\u4e00\u822c\u53ea\u63d0\u4f9b\u6700\u6838\u5fc3\u7684\u80fd\u529b\uff0c\u5176\u4ed6\u529f\u80fd\u90fd\u4f1a\u901a\u8fc7\u5305\u6269\u5c55\uff0c\u5305\u4e00\u822c\u53ef\u5206\u4e24\u7c7b\uff0c\u6807\u51c6\u5e93\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u6807\u51c6\u5e93\u5373\u5b98\u65b9\u63d0\u4f9b\u7ed9\u7684\uff0c\u6bd4\u5982 Python \u4e2d\u7684 math\u3001random\u3001functools \u7b49\u5305\uff0c\u7b2c\u4e09\u65b9\u5305\uff0c\u7b2c\u4e09\u65b9\u4e2a\u4eba\u6216\u7ec4\u7ec7\u5f00\u53d1\u7684\u5305\uff0c\u6bd4\u5982\u6d41\u884c\u7684\u6570\u636e\u5206\u6790\u5904\u7406\u5e93 numpy \u548c pandas\uff0cweb \u9886\u57df\u7684\u4e09\u4e2a\u6846\u67b6 django\u3001flask \u548c tornado\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u901a\u8fc7-pip-\u4e0b\u8f7d"},"\u4e3a\u4ec0\u4e48\u8981\u901a\u8fc7 pip \u4e0b\u8f7d\uff1f"),(0,a.kt)("p",null,"\u2003","\u65e0\u8bba\u662f\u6807\u51c6\u5e93\u8fd8\u662f\u7b2c\u4e09\u65b9\u5e93\uff0c\u5176\u5b9e\u90fd\u662f\u67d0\u4e9b\u4eba\u5f00\u53d1\u51fa\u6765\uff0c\u63d0\u4f9b\u7ed9\u5176\u4ed6\u9700\u8981\u7684\u4eba\u4f7f\u7528\u3002\u6807\u51c6\u5e93\u5728\u5b89\u88c5\u597d Python \u5c31\u6709\u4e86\uff0c\u6807\u51c6\u5e93\u7684\u5305\u83b7\u53d6\u6bd4\u8f83\u7b80\u5355\u3002"),(0,a.kt)("h3",{id:"\u7f51\u7edc\u4e0a\u522b\u4eba\u5206\u4eab\u7684\u7b2c\u4e09\u65b9\u5305\u600e\u4e48\u5904\u7406"},"\u7f51\u7edc\u4e0a\u522b\u4eba\u5206\u4eab\u7684\u7b2c\u4e09\u65b9\u5305\u600e\u4e48\u5904\u7406\uff1f"),(0,a.kt)("p",null,"\u2003","\u5b83\u662f\u9700\u8981\u6211\u4eec\u81ea\u5df1\u4e0b\u8f7d\u7684\u3002\u901a\u5e38\u4f1a\u6709\u4e00\u4e2a\u4e2d\u592e\u4ed3\u5e93\u7528\u4e8e\u522b\u4eba\u53d1\u5e03\u81ea\u5df1\u7684\u5305\uff0c\u5982 Python \u7684 pypi \u6e90\uff0c\u5982\u679c\u4e0b\u8f7d\u901f\u5ea6\u6162\uff0c\u901a\u5e38\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u56fd\u5185\u955c\u50cf\u52a0\u901f\u3002\n","\u2003","\u600e\u4e48\u4ece\u8fd9\u4e9b\u6e90\u4e0b\u8f7d\u5305\uff1f\u7eaf\u7cb9\u624b\u52a8 ftp\u3001http \u4e0b\u8f7d\u5417\uff1f\u4f46\u4e0b\u8f7d\u597d\u4e4b\u540e\uff0c\u8fd8\u4f1a\u8981\u5904\u7406\u8bf8\u5982\u600e\u4e48\u627e\u5230\u5305\uff0c\u5982\u4f55\u628a\u5305\u79fb\u52a8\u5230\u5408\u9002\u7684\u8def\u5f84\u7b49\uff0c\u4e07\u4e00\u8fd9\u4e2a\u5305\u8fd8\u6709\u4f9d\u8d56\u5176\u4ed6\u5305\u600e\u4e48\u529e\uff1f\u518d\u53bb\u624b\u52a8\u4e0b\u8f7d\u5176\u4ed6\u5305\uff1f\u4e07\u4e00\u662f\u4e2a\u5927\u9879\u76ee\uff0c\u901a\u5e38\u4f1a\u4f9d\u8d56\u5f88\u591a\u7684\u5305\uff0c\u5e76\u4e14\u8fd8\u4f1a\u7275\u6d89\u5230\u7248\u672c\u7ba1\u7406\uff0c\u95ee\u9898\u592a\u591a\u4e86\u3002\n","\u2003","\u6a21\u5757/\u5305\u7ba1\u7406\u673a\u5236\u4ea7\u751f\u4e86\uff01pip \u5c31\u662f Python \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002\u73b0\u4ee3\u7684\u8fd9\u4e9b\u9ad8\u7ea7\u8bed\u8a00\uff0c\u57fa\u672c\u90fd\u6709\u4e00\u5957\u6a21\u5757/\u5305\u7ba1\u7406\u673a\u5236\uff0cPython \u7684 pip\uff0cJava \u7684maven\uff0cGo \u7684 go module\uff0cPHP \u7684 composer\uff0cnodeJS \u7684 npm \u7b49\u3002\u524d\u9762\u63d0\u5230\u7684\u90a3\u4e9b\u95ee\u9898\uff0c\u5de5\u5177\u5e2e\u4f60\u89e3\u51b3\uff0c\u771f\u7684\u662f\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u8fdb\u884cpip\u5305\u7ba1\u7406"},"\u5982\u4f55\u8fdb\u884cpip\u5305\u7ba1\u7406"),(0,a.kt)("p",null,"\u9996\u5148\u672c\u9875\u9762\u7684\u6307\u4ee4\u7528\u5230cmd\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u6211\u4eec\u4f7f\u7528win+R\u6253\u5f00\u8fd0\u884c\uff0c\u8f93\u5165cmd\u540e\u6309\u56de\u8f66\u6765\u8fdb\u5165\u754c\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"6",src:p(76382).Z,width:"513",height:"272"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"7",src:p(9828).Z,width:"1223",height:"639"})),(0,a.kt)("h3",{id:"\u4f7f\u7528\u4e2d\u56fd\u6e90"},"\u4f7f\u7528\u4e2d\u56fd\u6e90"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8fdb\u884cpip\u4e0b\u8f7d\u65f6\uff0c\u4f7f\u7528\u5916\u56fd\u7684\u6e90\u4f1a\u5bfc\u81f4\u4e0b\u8f7d\u901f\u5ea6\u5f88\u6162\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u4e4b\u524d\u6211\u4eec\u9996\u5148\u8981\u5b66\u4f1a\u5982\u4f55\u4f7f\u7528\u4e2d\u56fd\u6e90\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5347\u7ea7\u4e00\u4e0bpip\u5305\uff0c\u4fdd\u8bc1\u4ed6\u7684\u7248\u672c\u572810.0.0\u4ee5\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"python -m pip install --upgrade pip\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3",src:p(77845).Z,width:"1200",height:"212"})),(0,a.kt)("p",null,"\u7136\u540e\u66f4\u6362\u4e2d\u56fd\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"8",src:p(91189).Z,width:"1075",height:"156"})),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u4f7f\u7528\u793a\u4f8b\u4e2d\u7684\u6e05\u534e\u6e90\u4f9d\u7136\u4e0b\u8f7d\u5361\u987f\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u9009\u62e9\u522b\u7684\u4e2d\u56fd\u6e90\uff08http\u4e0d\u884c\u5c31\u6362https\u6e90\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u6e05\u534e\uff1ahttps://pypi.tuna.tsinghua.edu.cn/simple\n\u963f\u91cc\u4e91\uff1ahttps://mirrors.aliyun.com/pypi/simple/\n\u4e2d\u56fd\u79d1\u6280\u5927\u5b66 https://pypi.mirrors.ustc.edu.cn/simple/\n\u534e\u4e2d\u7406\u5de5\u5927\u5b66\uff1ahttp://pypi.hustunique.com/\n\u5c71\u4e1c\u7406\u5de5\u5927\u5b66\uff1ahttp://pypi.sdutlinux.org/\n\u8c46\u74e3\uff1ahttp://pypi.douban.com/simple/\n")),(0,a.kt)("h3",{id:"\u67e5\u770bpip\u547d\u4ee4\u8bed\u53e5show-help"},"\u67e5\u770bpip\u547d\u4ee4\u8bed\u53e5\uff08show help\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip help\npip --h\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1",src:p(17254).Z,width:"1195",height:"896"})),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u6307\u5b9a\u7684python\u5305"},"\u4e0b\u8f7d\u6307\u5b9a\u7684Python\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip install package_name\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u5728\u88ab\u5b89\u88c5\u5305\u7684\u540d\u79f0\u540e\u52a0\u4e0a\u7248\u672c\u53f7\u4ee5\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684Python\u5305\uff0c\u5982pip install package_name==1.2.3\u3002"),(0,a.kt)("h3",{id:"\u5378\u8f7d\u6307\u5b9a\u7684python\u5305"},"\u5378\u8f7d\u6307\u5b9a\u7684Python\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip uninstall package_name\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u7248\u672c\u540c\u4e0a"),(0,a.kt)("h3",{id:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u5e93"},"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip list\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"4",src:p(12303).Z,width:"672",height:"468"})),(0,a.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u53ef\u5347\u7ea7\u7684\u5e93"},"\u67e5\u770b\u5f53\u524d\u53ef\u5347\u7ea7\u7684\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip list -o\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"5",src:p(65456).Z,width:"825",height:"280"})),(0,a.kt)("h3",{id:"\u67e5\u770bpip\u7248\u672cshow-version-and-exit"},"\u67e5\u770bpip\u7248\u672c\uff08show version and exit\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip --version\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2",src:p(126).Z,width:"1070",height:"56"})),(0,a.kt)("h3",{id:"\u5347\u7ea7python\u5305"},"\u5347\u7ea7Python\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip install --upgrade package_name\npip install --U package_name\n")),(0,a.kt)("p",null,"\u4f8b\u5982\u5347\u7ea7pip\u5305"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3",src:p(77845).Z,width:"1200",height:"212"})),(0,a.kt)("p",null,"\u5bf9pip \u76f8\u5173\u77e5\u8bc6\u611f\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u67e5\u8be2",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/pip/"},"pip\u5b98\u7f51")))}g.isMDXComponent=!0},17254:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/1-896a47e2f72004e2892b4c1e8b32218c.png"},126:(e,t,p)=>{p.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABC4AAAA4CAIAAAC9jS5kAAAgAElEQVR4Ae1dvVMrSZJvMW/3Zt7e7MXMvo0zFBIGBvwLCskATPAxBBFyAV8GRMhShDBkXgTIVQTIkI9MwJBC/wIYGEgh82bWutidnXncL6v6o/qrulofIPGyZ/fR6qrMyvxVVnVlV2VV5vP3P1rWqyX+/+XLz7/+4xfc88UIMAKMACPACDACjAAjwAgwAozAQhFYc7lnLPqPL0aAEWAEGAFGgBFgBBgBRoARYATeAAHPFXnF3AjNjvDFCDACjAAjwAgwAowAI8AIMAKMwMIR8FyRhRfFBTACjAAjwAgwAowAI8AIMAKMACPgIMCuiIME/2UEGAFGgBFgBBgBRoARYAQYgTdE4JNdVibDTskbws5FMQKMACPACDACjAAjwAgwAt86Ao4D8orrW8eC9WcEGAFGgBFgBBgBRoARYAQYgTdDwHFFMmuZeWyfldm/uLnYfzPp51LQKso8F8WZCSPACDACjAAjwAgwAowAI/COCNiuCPkhc/FFev1RobQ/F1ZvhoqZzJmt/Yt4LysuNbN1enHzIC84aVsxyGSQ7+bmdCvoDm7tu+Q3F6dbLiTgerEfzOym8g0jwAgwAowAI8AIMAKMACOw/AjYrsjrV7pUcdUh9M3FxcWp0VzH6+ttu5sv7amc7Pv9C3tE/kBDbhpGYzrCHqMrg+wIygU/0shMQgpn4ubm4b5VLYQkSUjdOr2u5fr1ne3t7Z3j5ihfbTWioLGszZPaQTbIHfi0qg45qA9arvvxeHnWL127P4OUBr+F8wP4wYNdGlHL5DEyGgamw1kYAUaAEWAEGAFGgBGYEwLOAi2MuZUjDuEjtIpW51iMoXfqHatQKK7HfdEPSPJ0N8iXT8KZb8+2j7sTa9jcPrx8FIEpr7dnO8fdYXMHDwJM3vhnnMwQ4/X18apdr9ePm8MIofSpm7vF7Kh/+ygOs3+8Pe8MrUI5PPUBZyfsiGQy+41qvnt8Lsmt57E1GY6fPRluzw5n8UYg+V2nO+y2bzlISNQyo+HZFt8xAowAI8AIMAKMACPwJgiQK5LBd/FMxj3iEEuFqoVh88geBGPM2js/7lq5DUOBMK63irubhrmtsWnGRebTyvz6SNfzeBIpgSb16WU0ySsuXBQLzE6c1IqjZtDT2TwpFyaDuye7zNfHy8PDM/hwqgwzeiOPt5fgqDL8lu8ZjW+59ll3RoARYAQYAUaAEXgXBIQrsoaYdXuVDkbG+JRvDfvqx3L69t8ZryveBYVGYD2Ls9RKFV1kHqXwRVTid7pfkMyY9jl0poBIs41c1hq9ON6F1BVLs4qjznnPp7ldC6MXOX3kS/P/mMUbQSlboegUP/tv6Bej8Q1VNqvKCDACjAAjwAgwAsuBgHOuiCsNLSqyhh3/0BgrWG4vL908iTcIBL+u7F+dq/5MIhEywMNp1MqFrAibmAyHo3H//MplgsHiXqNWLVDqZNLt1K/k4iUscGpUclY+n8+OOjvnvU0n16R7fHQlR/N6ziTbtDITrcG1tXVaKWPB1ZGrDohoaVZxUD8C2oEYEvJaJoNnUq12IDUeNutntxGTGPBGLOxbZh2d3dKcCSLdK6Vc3hrX2y8VBy2VFjCeXLdkaAoQOnz0eCbSGig6TRZExdzbkThYr0dmA09XPKAqlHNBC6p9DRpSE1jOSaVs18Fk2Knbs4XS6gjn87tdu5Imw26dJ5qmsQCmYQQYAUaAEWAEGIFvEgGaFfn6xx8IW7fVF2NgNSYhEpbXR4R+bLtRH4E8CASnjbQCo+tAptBPGhTWyuNOHYxxHcsIFWcqRg4ZkXy8QxEs9U4OMeBOyPVdH9dgJDyYvUZlHZHiO1jxlLUXlek5S0GmkzmkRMQDjFkREd2i4Jt6YIXVXgWOiO0sRVDmKo2KBV0IDRH0Hhenrs6NPD2/9K18Np+rVEqSdgdQVr2Qd0wBXR4KhBG6478Saf3Zfb/cTQgwWxa4KBjc2aIgkISfSJVRQxMLjoftvtKawMmwqfghcJ8WUfsaNKAeRey0qkVhdTvAcUA7D3hWNxY4o5LaZLQ7zUH+oBaOBfLBxD8YAUaAEWAEGAFGgBFgBBwEQrMiTsKMf3vtbrmyZ93epuGzkbMG7Z69gAnOzvH6xa5Lv1c5sLrHVz05y4HUZumhfLJ5i9H94+Pt42Nma718UCw31uvnYnD/eLbtFa7l7BQxlcwOcfxfMfK/pI/rtdZDWZmo2b8oj+uH/vAPlU02P647szrQt75+04J7lwQpvMRev1StWn1E+8jtAR6xrVm5hb0EevFujyh4Jlo4px7gqh7yXp9qWQjXmRyQ7ygnaTZ3c4O257ktvvbDEuPJXoPCprYvpWIIJzm0cg/Vxt4tZqAeH3sbo+qBh7PVuxuUi5F8+CEjwAgwAowAI8AIMAKMQBiBtT/9x5/X1tY+/+ePP335+3ef5ueZiE2pUn0hFvMSxdp143QfIQwUu4Ita93B6F6JorjV2AkEgTvTHp5eg3bEaFvP2SNOL7NHm3SHUf7VUXOYPYCDhos+t5f6+q3DAvoiCN6KObMFB0uW+vYCLVuQiW9mi8b5YbDiZJ6FNo5n0nMRrjMsOHuvwRMZuzH7cAneoPZDEqKOSgWETfkWK/b62AZNOTnHj5XlzsSFuPEDRoARYAQYAUaAEWAEGIEAAp+wNAsRBr///kfmt9/+9N2fsWnsxCp4H6cD2Y1/ykDw693NSyUUIZEaC42eEepQrrWq2YmyLl8SZg9aDwd+HhPan0rxT4JB4W5uPWeZbTqZ3SISb8gjGlarcmYDg+tC4eGhqlIVWvfQj6IlfKNfNUvEfYQfEpFrFR5hmF+tVvauznv7ldy47Y/vX3TtxwAUdDVEA8nFZObHjAAjwAgwAowAI8AIMAIpEPj0+79/R1D6b//8v3/90/r+zz9b9O3dytNuWV40M/hl9k9Pnq/cOQqjEigQfHfr6klxFZLpaE/V20tEd2zuVWqt63UnWgCUFGM9w+azGs6eWFPJ7JH773BMJJ1weN4LI4DoCHU5E02S3JfHjrKZTIxHGBoYm/ohFAI07TULbZoyXVdtc72MZU8B0N6i9iOkFXNJalN4KzQiZOFHjAAjwAgwAowAI8AIfCwEKGxdvcRw0MoWd9UzCinsu2Qp62VUith7uSxKrkfyMqnnbODpRs79woxoin1nb1lMUFB0RNc7oCS8HAtSGe5Fq+fsyUZH3SHgvhiUWc1hfA/xdouFbH7dpZALfkLehJvu3UB9rKgKnIeIeRRsBawO0E39EJzmvp4PbNDsFZZ0NwttEu9gulj+VG0VR/5VUTQVEVhftojaD0gj24Jwy72Ut0TDK5XvGAFGgBFgBBgBRoAR+IgIBF0R6Ng7p5CGVmNPeiMUb32Nj/u+GAw8jDtXREWp1x7klY20RMQCgiXsXbGwdew1Pn+7i5E2StVaw/VGUAQdVu4cw/F0Ve/mqzcXSKcwEpKqUfGC2tVSw/dazoHsAZllKvkVmFfIl1zxVKrIVNudwNGQQl3koRhorDq78i88koxohOs7RZL0nWQPaieyRGCFIw+7bRcsK8EPyRZrTg2irloI+VdoVeEj7mehjWCX5hH5IpaFI+r9Z8C/We0HZEVbGB1g87Et+VwgOWqmWj8X4Mg/GQFGgBFgBBgBRoARYAQcBDKfv/8RkwHiZ+Zvf//p119/wT3GzSfOeRYWHZZwHliaBU8Am5xibOwe3OEw9P0lPtc1q24fDUGcvYMyJGPPwxFJOWuUL4hzNLAgK3BKQ5xUyqkUdumBxTyJnFWhAzKLn/YpHE42++wLUocUjE1FBgxe7bM9pD5ydy+HEXHYOvUz8DNXaqHpnGhBbE8vKi/n8iARhZl9S4BgtVfdqsgzSfw1GCGzUo962nBZc38S52KR2Aoark3OWPt6NKAdmbpz1o3vNBv/WSg97LalnI0SVzVzh4sZMgKMACPACDACjAAjsLoIZP76409/iHNF4I58+fLzr/8gV2SOFw7VgC8yS4zHHIUxZLWKMquq2e6EsxGwmpR4PwttInPOwAgwAowAI8AIMAKMACPACLgIrGXW1mjB08Kup6vOyB95srCi5sZ4FWWem/LMiBFgBBgBRoARYAQYAUaAEXgTBDJ/+eGvr6901PqCZkXeRAsuxEMAUzrOijFadxVYWefli7qbhTaKHz9jBBgBRoARYAQYAUaAEWAEYhGgWBHMi3x9pWsRC7RiS+YERoARYAQYAUaAEWAEGAFGgBH4hhHASetrcEKwi+03DAKrzggwAowAI8AIMAKMACPwMRHAFjWnF6fqMRUfU8+5avVmoK2JrXHnKjsz+7gIIKgd+ymvln4s8/LXF9fR8teRXsJVrMFvTSO9vvrU96rf9ypXjwanqgisRB1hSL3XqFhtb8tWVQW+j0MAh1Jcta1KYy8uw7yeY0pkXqzmxgfbp15EjXfJp715kJd7wIhhqcTzxiOGa2xIiGyzlGteymrkxGn0hdL+avmvZjLHWZ2sl7hUQ9ugTws3N2Grw3Exjknf4HuNZwNmMnv5F3AHmff3Sb7T/RSNZUpBtPpCEhJl/xTCAMQpi0hPllCuVub0pa04xXugYVvogr50fjyNkt5lam/2IF6xnlFq0UhoKR6X4F1yDWrLDbL70L9FL4gu8GLp3r+rUEebJ7VSP3goxdztJdme516kwlBtv+lHyO5Q5CHQ9l8fL9vj8qLfvGtfv1KciKKO0S26nlMa2M+zVRBPDDVuHu5xYklICiRet4rjzvH29vbOznHHquIQxlCu6AdEWyuPO3VJ2xzkD1rX4XFhJLGgzfXrO0R73BzlU5TrMhSa2U4UVfNqDeVdNcRp9O2uemqlkrastzg0XSNzgtWJmtPZJA7/NLAN9IMH2SBA+JjUqjrksCw6S9Ee9OtlDjJa0O/NjfVS+aCQzS2Iv8I2Ud/dEq5c0T5xSKFc8K2m3ESZFyzacrF/FzRsC8XpsAu4Pp5G+ncZuqN75w2Ll514xXpvyUQ0NC1FVk7kmCGxBhPLTaz5yHITqZYyAzB++y4wGYnlryNYfq04MD/kOVnnmByJ9hxDN4fH+tatL0Df9kGLM6YHxZrhmFlfVlxqxGnrcVnV53SUeKc77LYDp2KredLei5mger1+3KQDt30XehOM5axu/fL2EQnISUfCF6ru0M2XO/Rjr3JgDRRacZB5cdc+9D2U3fdgk458798+krf2+nh73hlahXKqKiETQRcvB6w7OMm+UHLOm/eVtCI/nu4G+fLJai241MissTqqcZqdjLZJpBraBvWDIUckk9lvVPPd43NpWtbzGEd6jp89I9DI7GVa5B2s/eq83p2kK0O4dmgfqSdSNPqiFi7P6EotTTrZg7kTy9XIHOT1DfxeKBqRdvV4e0kd8sKuD6aRvr/aK+HIYvstCUQfb8/wrjqoeN/7NGgkthQwRJ7wmMGkBjXlmtR8ZLkuYaRdualLdYNe8Lw9SNkfv5EGC62j2XXACHDUmfPSrEjLMbHn2dWJ5KBv3ZEk7sPEtk+NaGCpvYFLO6+bKV0RFA/Qzy7JMZjj9fpI1/M43Nw2cllr9PKklEW5MKhXnuhu0ae6cxGA9WVkZXMbOgIn7ellNMmve0OrKOGcvNF/yUSGHbmpLr4fnG1vnwmHKjr38j9Fr2MZ+nFLo4xW5nirI/k1qSa2gQ7rpFYcNYP+9eZJuTAZ3DkWjdfM4SHakzI/qZV5aZANC7KRm+4r9Srqu4oyh2tsXk8Wi8a0djWLdh9LI01/hW5qPR94w+LziP9FPDMaU44ZFlvue9jVLDa5nLSLraOZdManwHJh2O/NxCSKeLksR9O6o4T3nhm1fZoY6QwXuTh/elcECmylibjwVJ/ibhP95ET9ZizdCUt1EuLZ9tqYwOkrX5wpq49dPC18h0OcFe+uYQv7RPG0i0sR2Kf+8GwuD5Y8XmBBGUU3BEsB8uLUSqM5JfMSF5pzQTKb2AaWZhVHnXN/P4i2A/8Ub37PrkL6L0jmUDnzfAC99hoRqytNylhFfVdRZk1dzNirLA6NWexKo29i0gfTSNNfQVN8niuEprvVt+TsaEw3Zlhcue9lV4mGt3IZFldHc4ACYzbVjufA0VpCy9G0br3GJm1fcMCnCfOP//oyI1I/BZ4hjrZSwmfNcb39UqlVxdrsybBZdz/kow5Oru0z9Cbd48NHb2IkkTZQ1pv9pPUdnpgwo33MRQ/azhdpYzm2tk4rZSyqOTJZlkYrcO7dYVn14aFK5QCyI5oohKfeqOSsfD6fHXV2znubew2JtpMBeeEPnFRosT7RTYadur2YB15CFXPpzYFIBEHdriqFlsqKv0RDsmsX64K69ZThXAhTu67sX52rONjHIzoyiGVpWJZEv92P/dCoUSsXsiJsYjIcjsb98yuXiSrVZNLt1K/k4iVDrDScCYkomeMRSp0SaRuQHEtU60dwRALTd+TRTgbPpFrNrmG1ldnFx8sMV9EFEjXYdGxD3wb1qbJQxepgGZ2xH4m4cpFLmKXMfdC6P6A7xxjkUw2tzDB1HSky+1qKZKvaVdjak6WyhYv5E1VHepwN7Tmy7dsaUTuSnTMphFlK2NCwuXP+fJLYq8Tpa9Kr6NsvyTYVGsr75Ojqac/tNqHR2e1rol0JTDZPL2RDou5Mna6Psw1ZC/SmO7/btRthkPZjaiTwCvdXWPNcuq+2rnOyMwE+ldygfu5/S0bVr+Cn+0czZlDIlBpUxht2hvhyNTapLzfRrtR+Q30fKTJH3OrbviSIa4MyVS033F+5RXrnESvdbALnmH4DrQxs1XLD+mpwtkWKqqNENDR1lEjrQqG/oe/Yo7761U/PGZa/1D2SXluRGm7deiKTti89luI6vkErg2k93zSpwVmRp+eXvpXP5nOVSsmJx6UQcTcqAwJdHiKqbfs4tIo8kTaNYP68mHyysuqqIJhLueDPY/xrrwF/ou6Oj03oUByi9FutotUxJZRrsWyghk2CDJc3wXLXxzUYiVE5dplbB9oIJHHXjZEn06pSnP4OruPOgOLl5RozipMBGqWX9tHOcdc6qFXWcUdRKCpCsWrJxl+1iDMkQnjigcPZpUGcABaSKdK6KXQD1WgjLf/oGmZB8jsXzORI/S16uhNn8wBZbqEgDFuQSKmwt4CUqt7JufpaViJWWARlb0sQ5iwlipTZEXamvxrb2KvAEYlfopqrYHdB2crkhghuK9PLTC8h1J+IPiJ9YRs1O3pH3wb1qSjUb3X1vlVWg1w05YJWWMw21TlejcK0VPvR0+r1lalx//pl9rUUkOit3USquHLl80i7SsI50Z5j276tUY2aL6oePQP24ECvdNxsiqDMBM4afRN7FUJyqlamR0N0FPQyGTbpmwXwPIcNwbs+Jj8E+urtStQCNST0hgQI4eGFV2pt464/Fm862uJT7GhC+5l4tFPX75JrFNdfCeTxPilUW/fYqOO68nJGK0aVJaMxPb8ESvOvZszgUBVrjV2vBpXxhqYWkKS3SX25ervSvI8Q4+tsQRP8iw5cb+2QWdMGbY2uqXfXvJ0lJogk7g6pq3W72WTOsf2G3U/GvH8TcJbyTNUTUgTRoseT4UkRfR0tefuVaMf9G9e64/K7dXdOY0ld20dOTIsYxjXoi4tMDboiGIPCubWyVv/c/gaPJ+3uJDx1G2Y3C22Ym/oEVg4ZsnhP7NNWnsJBtwbeuFfNm3CPfqQ0rsMjSMjnT5btBR7BuNyKXLbkz578CxEIt7e3vTusxs2XG+ttTA6g16feEe9f6v1pocuweYg4fbydgezlIcXpe5uGYVanZ78nRv1UbhXt5mQhXtomf6IVwXnyddNcWPOWfiOtjZw1uOvZn9ng7Bx3R16ZtLdAt35lSyWCJmF0JFYiVpal5eyUMZXMDnH83zjbgKWVxzrHNZsfy3oHb+iLmOyge4evzDE4T4b9Z+d7JZbpuj2Evg3qUyGGiGCxawFW16MNHnyax5XryxTzw4Q2Tt8YlvRY31ISrd1EKk3pSArLrMc50Z71GlmipbRFO0IdYQVvNr9u9ajhJHKGtFp99b3KlK1MjwZEklp4xo/PmIO2vZ2DHnqZqrytLGoMHo0GSWDVow9c9Ka7lHP7PR+tyyVt/YJwmTWK7a/gasIrwxex4+ZgNMkWqpHbd4bRcIGa/iZrDdr2HDjEo61hAh+6olqZKM7IJqcRTPM+kk4MHN/QRS9vgxGUpg0m9ldSF3hK4pQMb8WBfK7hrOk3iDZeX8HZCOewbZigISUP/zsLbZib+iSR8zK3X1WR8H1c6w7nVJ+Q423Q9lWSud8HXRG7AP/SOnWskyzBLLTx3OE7Y+RarLbwIeIeO0TX7yxEx2pX24eZYXSIYb86fR/Oo3kCC746CmwroslumoRe2HYqHAp8zCsVrECkVa9PPbQbfO/kTf2XPhIM7twShe3SZE06RrCJfLqdxMRXk2LtugF/UoagYN2cWy7t4aBIBWEiXfAwVsip5+zplV5mjzbpLmAb9Dm21Nd7vAF9aeYvXL9RMqMtHJ7dPlmbdOzHxcV1eH8ufRuMTw3YRkDp5HIDBMpPU9oofRU2wdvElhLQKGDtplIFi/X/jpM5HmeXPmzPiRq5tPqbMGfkn0XfWVuZHg30bo7xb+7mvP0c9ErKVD9ny5lZNkIyhtZX7HT1u8wa0fed4Ltsr4F9HtvokJF0eXaIjSyzyvbiHiBxaHg50t8pG3iAWH4cC4YpRpVrapPpJTJ8H8Uy9tsVZHe/FunboL6/corDeu5WWVSW84T+6jmrOcP3en1NcY6qIyorHo2wJMEns9A6vKK/5es5L3f7dTSL/htu3dH5nKeGbZ+MU43Ydsjn8henrQfjkufCdxFMMHIVS8OwcOis9wRYAhaeUOaMfojkTm0y6ptNQtm6ZP/GYF7OUKVTDz3rBfcXKydnv8Rng5HRgjClMGwBUO+Mc+Va6x5rAC72/dse4M2nTnhTQFJwW4I4rLCKQ8dZijCdzIr4Cbc+20DXXkCAkH3dU9QQ9LvH78AqLD3TSJkxxsLBiPfwyEsWVvnVO4GpCz3L2NRE25ilXEPaSH1jJbYTYlvKQjVypZpKZkkdZ8+xGhEZvj3Stoo0YUhfs0I+vGAdzdmwFgSHiH8W18pE26FP4ZCwUhy7O8tFCJHukRZJM1bT1e8yayT1VvsrwF4qDDtXzkyrmKfFsrnw7MR0aJghbeeijzKhK65cE5sMMTN6YPA+MuITyKRpg4n9lWCFZRRY10t9QOC7pIYzESb1G3p9TXCOq6MAAm/8k77hpr+Wv/3qdVJbtz6nYduXxhn9XtEXYJb6SbgiGczt6/LTsH/aaxZaTZliTy3zj2dYQoev1GdK9Dr2/8LGwZoSZBKOXaRT7JzlTIn555dBePKqgPNAEp0F+vniXKSkMLXdrasnd4LFhCt9cbu9hFlv7lVqret1Jagd61710wh6/hrOHuFUMnvk/juNbdBau1svN1p74748dpTNZMitLNB20moFB78e2fR+mWn0eV0tjJrHR7QmB3lg215JkXd6y9GnOgynKXc6Wr++Dg/N39iWorf2WTQKSmMisxnOgnOsRkiFUneDYa1ce6hSr0x7FigjyKBgyu+56Du3VhZCAyOGKq3IxCrOdqouRVExfKtDMpw79slU9btsGmn6K4vep8GLXIIibWQfrA4TNILMUvwWsgT2yxDkMeUa2WSK8u2sM76PfAU61q5vg/r+ymGIDRlpw5jn9ZvW9cmz2AUHSXrOyJDYbyTqa4RzTB05wou/Dhq+h4Y/pqDFy7aK5SQ9d4Oc6KJCnJet/UaL7TzVtW4nT/Rf07YPgAIrdaL5Tfd0jc5a1/shWEGObmrYT6jImPJnoVVZUjiOck45VjbSMiPvI46aN3gP2uua1VZ2VMXQsFJJPlcEzXsXx5tiKbZzCQ8y3WyMQ5rir/RoAwEc80ISDRPx7er0N5Q6Pd1PIZ/ISkKOisoRWAkMEOHjToOgWxTREd4BJSSV/6QXgG+4W7SesypWWplV2sD9LLYh3grwRXwr3DCPErngMCgznVMz6bqRQgGxon7qLcdNlVL5a0HpntOXC7tClZNEaWiD+kZp5D6jzMNgqJOrEbLprD2NVG6JkTcmMqtSRTKRDxM1Qm9Wy43rdYrSxoWlesGRYhz32fSdbyuLQANvfoQDlvOJcyKeXcVpKp4nIqml9iVOWb/LpFFCf0VuR+CFI977UUugTdDwwZfyB3U6ZuWa26SJCKpdzfI+CpflWXtSG9T1V36+FLaOPWtEOCWlJHHW9xt6fc1xNrENDw2/Ria/pqAV0Ufh6b1gaRGcl6n9BsX1/05o3f7MwV9mbZ/iSKf1AoIlRv1e+/Tpu8xaKGIkix0t9uRoFdvDtRBQLPZnieIQejYLrXDud9ET5UvusNUuAP0TfAIRXQ2vhHazVfYmwhMsfYkMs0Ml4WiHAWJLNjcxtpUXbaLlLHrT0NpDRiu3IcoFK4qDxL66Zp8hQ9CkeIANbUa0VFeM5LDtBtXCqKl4Uyl4+bPSUTV45Tv1i17m5Lps3flOvsDDuHNFVGa99sAXvC77UYkV2AJk2vdsz/YoNkrVWsOtVhRBB9k7x1ZSx5qvikVbtGKQpGpUdtXCNPdazgG6oMwimVpypNXFp6azDernYEaeLKQvbcRwIgHB9oI48jCulflkpo4jCxfQbp604zPOKMG1d3pqWwvS3fqNaL/xqeIYo6q0Omo4jVIeexqU9khIk3IhhXynCRvYPCmty+B6Q1oHHp++zsO4v/qWorP2lFLFCSCfR8gcj3MCK33bpwXZBy2x2O/hBteFG3ylZ2tag3FcZmxlSWhgEEN7k2Bni8gPTJF2FSeq81xvG04uo79T1O9SaaTvryCqMLpruTEMEEG/QdubxLz3I9AwQjEuE/oz0WWIcunlblhuGpuMLjvGrmZ6H6GkOGtP6nN0/ZVfAVSodEZw+BelJHGmHR3i+0sMy4cAAAV3SURBVI0EfdPgHGEbcWj4NYr+NQutw5Hi6UNn5sTWkUO1VO3XESr6r751g0Y7yk1u+zRAKsb2BtEypXya+cvn/3p9/YrZOyz1+PLl51//8QsWotNakrpV8TZq986doAGKs+uyXRYm9txZQi2tXrYIztjgccc+vAKpztEbclGCvcGX5AmgEVoQOcOITx3uRvWqAHLTejzR0NrM0Snbm/jLbb6DUeYqW/VeclaeEFIyUJtAdg8dETnCwmM47p6Voe7z7WyIjv0usaEXIipo99ROriX4eYgp5QZvaaDvnFgSuXM5FQ1+JK9OWVFlNavu7ePhqkwCH72U7ssWTg9pk/3gq0yjlrNG+YI4KYVqMXACAI197VM2VKkSsUrkrOofkDnR6oLWrtgk2NILW2sbkM3fXLwKoqIVfd2zQVRp5X1QZu80EuAEuuddKsO2roT2m9RChdUJlYh1e72GIxpHg34be7kJnOUpKBHlumIjkMWmV+rXkDZa34gm7MEIkriWYnOLt3a9VFFdh69cV2WSgTpGry1oaiHRnvUagdzdewMfVqyNjd1S9cBqYu+9RM4afV8qskOK7VV6m7BWXfudDg0flaKa+lzeh+1K0ZfqpYfd1JxeFb/t0xJielETWlUG8/r1US2ZRvr+is5bsA+yijifx6dXwNq1LVRAJ15ULgvlzYIp+ZPnq7sN56Qc0aPF7Z8WrAXtO0VfritL2K5kEpEr/bP56VtkWpoRlLb3RtFxb+eQxW667yZp7ZrWTe9fxRQD/UaivoLzQtq+vo70SLo1aHKDkUnl5Uj2CQSyto5chipo7kP3Jmw5xNYe1y28R3LFcG80rdtglKtr+yDHu22W9fOukHE3mc/f/4hlhJScyXz5+8+//PK/diVpx6Cx7GQFT0Ubx5OfLzMCb2Cjc1f/Y8usb7/61LlDPTXDVa+jBeEcGIpJeDFQEE6Q7qvB1BUxNaFag4ZoYLnzhv/g1KlLXwThx9NoFpRUNGbhk5b2vco1l9PQ2s0Zzp7zjfsNtY5mQWMW2gBoAQQMOS95jxTQcUE/yRGlU4aU4NcFlOQtzcIkXwb/8cUIpEEAE8rYSEuNPElD/T55Web3wT1NqVxHkWhhIv5l5K3rQ57M1tYJjuTxb4QdSfvGD81rEJ+BsbYQc1CV3JQRiW+j2sfTaBbczNGYpZQw7XuVG5ZkhZ68cb+xhHVE69mOsNTHPgtYX3er0iPptZhLKrlwOAN2HqEBenm8WRG5QOu/y//jzKTa6z309GoqXOGpaVU+fM8IMALTIaBvg/rU6UpkqjACC8UZ74Y9b3kl1jlOhoP61GclhYWf+5NENLCugFaXYmXOkb0cd+4yzJfhx9Novvh8y9wSbeO9wHmXfmMWNGah1YOcyHnleiS9viuRGnRFECuyEnKzkIwAI8AIMAKMACPACDACjAAjsNIIfIL0P3z+4fPnv3xF8Dqvz1rpymThGQFGgBFgBBgBRoARYAQYgdVBgGJF/vjj62//pv9WR2yWlBFgBBgBRoARYAQYAUaAEWAEVhsBmhX57V//wv9w7PoPP/xttbVh6RkBRoARYAQYAUaAEWAEGAFGYEUQ8HbQ+u7Tp09/Is+EL0aAEWAEGAFGgBFgBBgBRoARYAQWjYDnivz+7995jdai4Wb+jAAjwAgwAowAI8AIMAKMACMgEfBckVc6cV2cdcjYMAKMACPACDACjAAjwAgwAowAI7BgBDxXZMEFMXtGgBFgBBgBRoARYAQYAUaAEWAEPATYFfGw4DtGgBFgBBgBRoARYAQYAUaAEXgzBNgVeTOouSBGgBFgBBgBRoARYAQYAUaAEfAQYFfEw4LvGAFGgBFgBBgBRoARYAQYAUbgzRD4f/BT/f/nC9QWAAAAAElFTkSuQmCC"},77845:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/3-53b191a6a0bbf072ca2519790a9eeeb5.png"},12303:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/4-a80b77201b520046b5e259693ed0c34a.png"},65456:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/5-1a6227177456e10c9d860db300d98b3a.png"},76382:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/6-ff3baf62c18b9a81ddf9192117b26398.png"},9828:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/7-56ff0bf90dbd90fe334fc7f174b8abab.png"},91189:(e,t,p)=>{p.d(t,{Z:()=>n});const n=p.p+"assets/images/8-24e32432b93fc6c1d7df230c17f50f32.png"}}]);