"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[2128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return n?i.createElement(k,o(o({ref:e},d),{},{components:n})):i.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18973:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={id:"git-use",sidebar_position:4},o="Git\u7684\u672c\u5730\u4ed3\u5e93\u7ba1\u7406",l={unversionedId:"git/git-use",id:"git/git-use",title:"Git\u7684\u672c\u5730\u4ed3\u5e93\u7ba1\u7406",description:"\u7531\u4e8e\u672c\u6559\u7a0b\u4ec5\u5e26\u5927\u5bb6\u5165\u95e8\uff0c\u53ea\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e9b\u5177\u6709\u4ee3\u8868\u6027\u7684\u547d\u4ee4,\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u547d\u4ee4\u611f\u5174\u8da3\uff0c\u53c2\u8003pro git",source:"@site/docs/git/git-use.md",sourceDirName:"git",slug:"/git/git-use",permalink:"/math201/docs/git/git-use",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"git-use",sidebar_position:4},sidebar:"gitSidebar",previous:{title:"Git \u9884\u5907\u77e5\u8bc6",permalink:"/math201/docs/git/git-preuse"},next:{title:"Git\u5206\u652f",permalink:"/math201/docs/git/git-branch"}},p={},s=[{value:"\u83b7\u53d6Git\u4ed3\u5e93",id:"\u83b7\u53d6git\u4ed3\u5e93",level:2},{value:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93",id:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93",level:2},{value:"\u68c0\u67e5\u5f53\u524d\u6587\u4ef6\u72b6\u6001",id:"\u68c0\u67e5\u5f53\u524d\u6587\u4ef6\u72b6\u6001",level:2},{value:"\u8ddf\u8e2a\u65b0\u6587\u4ef6",id:"\u8ddf\u8e2a\u65b0\u6587\u4ef6",level:2},{value:"\u63d0\u4ea4\u66f4\u65b0",id:"\u63d0\u4ea4\u66f4\u65b0",level:2}],d={toc:s};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git\u7684\u672c\u5730\u4ed3\u5e93\u7ba1\u7406"},"Git\u7684\u672c\u5730\u4ed3\u5e93\u7ba1\u7406"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u672c\u6559\u7a0b\u4ec5\u5e26\u5927\u5bb6\u5165\u95e8\uff0c\u53ea\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e9b\u5177\u6709\u4ee3\u8868\u6027\u7684\u547d\u4ee4,\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u547d\u4ee4\u611f\u5174\u8da3\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2"},"pro git"))),(0,r.kt)("h2",{id:"\u83b7\u53d6git\u4ed3\u5e93"},"\u83b7\u53d6Git\u4ed3\u5e93"),(0,r.kt)("p",null,"\u901a\u5e38\u6709\u4e24\u79cd\u83b7\u53d6 Git \u9879\u76ee\u4ed3\u5e93\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u5c1a\u672a\u8fdb\u884c\u7248\u672c\u63a7\u5236\u7684\u672c\u5730\u76ee\u5f55\u8f6c\u6362\u4e3a Git \u4ed3\u5e93\uff1b",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5c1a\u672a\u8fdb\u884c\u7248\u672c\u63a7\u5236\u7684\u9879\u76ee\u76ee\u5f55\uff0c\u60f3\u8981\u7528 Git \u6765\u63a7\u5236\u5b83\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u8fdb\u5165\u8be5\u9879\u76ee\u76ee\u5f55\u4e2d\u3002 ")))),(0,r.kt)("p",null,"\u6211\u4eec\u7528cd\u6765\u5bfc\u5411\u9700\u8981\u7684\u76ee\u5f55\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd /home/user/my_project\n")),(0,r.kt)("p",null,"\u7136\u540e\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git init\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4ece\u5176\u5b83\u670d\u52a1\u5668 \u514b\u9686 \u4e00\u4e2a\u5df2\u5b58\u5728\u7684 Git \u4ed3\u5e93\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u83b7\u5f97\u4e00\u4efd\u5df2\u7ecf\u5b58\u5728\u4e86\u7684 Git \u4ed3\u5e93\u7684\u62f7\u8d1d\uff0c\u6bd4\u5982\u8bf4\uff0c\u4f60\u60f3\u4e3a\u67d0\u4e2a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u81ea\u5df1\u7684\u4e00\u4efd\u529b\uff0c\u8fd9\u65f6\u5c31\u8981\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"git clone"),"\u547d\u4ee4\u3002\u540c\u6837\u9700\u8981\u5148\u5bfc\u5411\u4e00\u4e2a\u76ee\u5f55\u3002\n\u514b\u9686\u4ed3\u5e93\u7684\u547d\u4ee4\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"git clone <url>"),"\u3002\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/libgit2/libgit2 mylibgit\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"init",src:n(61150).Z,width:"1467",height:"963"}),"\nFigure 1.\u521b\u5efa\u4e00\u4e2aGit\u4ed3\u5e93"),(0,r.kt)("p",null,"\u7531\u4e0a\u56fe\uff0c\u6211\u4eec\u5148\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir"),"\u521b\u5efa\u4e86\u4e00\u4e2a\u76ee\u5f55demo\uff0c\u7136\u540e\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"cd"),"\u8fdb\u5165\u6b64\u76ee\u5f55\u3002\u63a5\u7740\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git init"),"\u6765\u521d\u59cb\u5316\u4ed3\u5e93\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230Git\u7ed9\u51fa\u7684\u63d0\u793a\u4fe1\u606f\u3002\u5012\u6570\u7b2c\u4e8c\u884c\uff1a\u5728\u6b64\u76ee\u5f55\u5df2\u7ecf\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684Git\u4ed3\u5e93(repository)\u3002\u9ec4\u5b57\u90e8\u5206\u662f\u5173\u4e8eGit\u5206\u652f\u548c\u914d\u7f6e\u7684\u95ee\u9898\uff0c\u6682\u4e14\u4e0d\u7528\u7ba1\u3002"),(0,r.kt)("h2",{id:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93"},"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u7684\u673a\u5668\u4e0a\u6709\u4e86\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u771f\u5b9e\u9879\u76ee")," \u7684 Git \u4ed3\u5e93\uff0c\u5e76\u4ece\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u68c0\u51fa\u4e86\u6240\u6709\u6587\u4ef6\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u526f\u672c"),"\u3002 \u901a\u5e38\uff0c\u4f60\u4f1a\u5bf9\u8fd9\u4e9b\u6587\u4ef6\u505a\u4e9b\u4fee\u6539\uff0c\u6bcf\u5f53\u5b8c\u6210\u4e86\u4e00\u4e2a\u9636\u6bb5\u7684\u76ee\u6807\uff0c\u60f3\u8981\u5c06\u8bb0\u5f55\u4e0b\u5b83\u65f6\uff0c\u5c31\u5c06\u5b83\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002"),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u4f60\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\u90fd\u4e0d\u5916\u4e4e\u8fd9\u4e24\u79cd\u72b6\u6001\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5df2\u8ddf\u8e2a")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u672a\u8ddf\u8e2a"),"\u3002 \u5df2\u8ddf\u8e2a\u7684\u6587\u4ef6\u662f\u6307\u90a3\u4e9b\u88ab\u7eb3\u5165\u4e86\u7248\u672c\u63a7\u5236\u7684\u6587\u4ef6\uff0c\u5728\u4e0a\u4e00\u6b21\u5feb\u7167\u4e2d\u6709\u5b83\u4eec\u7684\u8bb0\u5f55\uff0c\u5728\u5de5\u4f5c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c \u5b83\u4eec\u7684\u72b6\u6001\u53ef\u80fd\u662f\u672a\u4fee\u6539\uff0c\u5df2\u4fee\u6539\u6216\u5df2\u653e\u5165\u6682\u5b58\u533a\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5df2\u8ddf\u8e2a\u7684\u6587\u4ef6\u5c31\u662f Git \u5df2\u7ecf\u77e5\u9053\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5de5\u4f5c\u76ee\u5f55\u4e2d\u9664\u5df2\u8ddf\u8e2a\u6587\u4ef6\u5916\u7684\u5176\u5b83\u6240\u6709\u6587\u4ef6\u90fd\u5c5e\u4e8e\u672a\u8ddf\u8e2a\u6587\u4ef6\uff0c\u5b83\u4eec\u65e2\u4e0d\u5b58\u5728\u4e8e\u4e0a\u6b21\u5feb\u7167\u7684\u8bb0\u5f55\u4e2d\uff0c\u4e5f\u6ca1\u6709\u88ab\u653e\u5165\u6682\u5b58\u533a\u3002 \u521d\u6b21\u514b\u9686\u67d0\u4e2a\u4ed3\u5e93\u7684\u65f6\u5019\uff0c\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u90fd\u5c5e\u4e8e\u5df2\u8ddf\u8e2a\u6587\u4ef6\uff0c\u5e76\u5904\u4e8e\u672a\u4fee\u6539\u72b6\u6001\uff0c\u56e0\u4e3a Git \u521a\u521a\u68c0\u51fa\u4e86\u5b83\u4eec\uff0c \u800c\u4f60\u5c1a\u672a\u7f16\u8f91\u8fc7\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"\u7f16\u8f91\u8fc7\u67d0\u4e9b\u6587\u4ef6\u4e4b\u540e\uff0c\u7531\u4e8e\u81ea\u4e0a\u6b21\u63d0\u4ea4\u540e\u4f60\u5bf9\u5b83\u4eec\u505a\u4e86\u4fee\u6539\uff0cGit \u5c06\u5b83\u4eec\u6807\u8bb0\u4e3a\u5df2\u4fee\u6539\u6587\u4ef6\u3002 \u5728\u5de5\u4f5c\u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u5c06\u8fd9\u4e9b\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u653e\u5165\u6682\u5b58\u533a\uff0c\u7136\u540e\u63d0\u4ea4\u6240\u6709\u5df2\u6682\u5b58\u7684\u4fee\u6539\uff0c\u5982\u6b64\u53cd\u590d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lifecycle",src:n(47087).Z,width:"800",height:"330"})),(0,r.kt)("p",null,"Figure 2.\u6587\u4ef6\u7684\u72b6\u6001\u53d8\u5316\u5468\u671f"),(0,r.kt)("h2",{id:"\u68c0\u67e5\u5f53\u524d\u6587\u4ef6\u72b6\u6001"},"\u68c0\u67e5\u5f53\u524d\u6587\u4ef6\u72b6\u6001"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," \u547d\u4ee4\u67e5\u770b\u54ea\u4e9b\u6587\u4ef6\u5904\u4e8e\u4ec0\u4e48\u72b6\u6001\u3002 "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"status",src:n(78844).Z,width:"1426",height:"296"})),(0,r.kt)("p",null,"Figure 3. \u5f53\u524d\u4ed3\u5e93\u72b6\u6001"),(0,r.kt)("p",null,"\u8bf4\u660e\u4f60\u7684\u5de5\u4f5c\u76ee\u5f55\u5f88\u5e72\u51c0\uff0c\u8fd8\u6ca1\u6709\u4efb\u4f55\u4fee\u6539\u56fd\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u5728\u9879\u76ee\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"README"),"\u6587\u4ef6\u3002\u5982\u679c\u4e4b\u524d\u4e0d\u5b58\u5728\u8fd9\u4e2a\u6587\u4ef6\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," \u547d\u4ee4\uff0c\u4f60\u5c06\u4f1a\u770b\u5230\u4e00\u4e2a\u672a\u8ddf\u8e2a\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ echo 'My Project' > README\n$ git status\nOn branch master\nYour branch is up-to-date with 'origin/master'.\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\n    README\n\nnothing added to commit but untracked files present (use \"git add\" to track)\n")),(0,r.kt)("p",null,"\u4e0a\u56fe",(0,r.kt)("inlineCode",{parentName:"p"},"echo"),'\u547d\u4ee4\u5c31\u662f\u5199\u5165"My Project"\u5230README\u6587\u4ef6\u3002'),(0,r.kt)("p",null,"\u5728\u72b6\u6001\u62a5\u544a\u4e2d\u53ef\u4ee5\u770b\u5230\u65b0\u5efa\u7684 README \u6587\u4ef6\u51fa\u73b0\u5728 Untracked files \u4e0b\u9762\u3002 \u672a\u8ddf\u8e2a\u7684\u6587\u4ef6\u610f\u5473\u7740 Git \u5728\u4e4b\u524d\u7684\u5feb\u7167\uff08\u63d0\u4ea4\uff09\u4e2d\u6ca1\u6709\u8fd9\u4e9b\u6587\u4ef6\uff1bGit \u4e0d\u4f1a\u81ea\u52a8\u5c06\u4e4b\u7eb3\u5165\u8ddf\u8e2a\u8303\u56f4\uff0c\u9664\u975e\u4f60\u660e\u660e\u767d\u767d\u5730\u544a\u8bc9\u5b83\u201c\u6211\u9700\u8981\u8ddf\u8e2a\u8be5\u6587\u4ef6\u201d\u3002 \u8fd9\u6837\u7684\u5904\u7406\u8ba9\u4f60\u4e0d\u5fc5\u62c5\u5fc3\u5c06\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6216\u5176\u5b83\u4e0d\u60f3\u88ab\u8ddf\u8e2a\u7684\u6587\u4ef6\u5305\u542b\u8fdb\u6765\u3002 \u4e0d\u8fc7\u73b0\u5728\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u786e\u5b9e\u60f3\u8981\u8ddf\u8e2a\u7ba1\u7406 README \u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u8ddf\u8e2a\u65b0\u6587\u4ef6"},"\u8ddf\u8e2a\u65b0\u6587\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4 git add \u5f00\u59cb\u8ddf\u8e2a\u4e00\u4e2a\u6587\u4ef6\u3002 \u6240\u4ee5\uff0c\u8981\u8ddf\u8e2a README \u6587\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git add README\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u518d\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),"\u547d\u4ee4\uff0c\u4f1a\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"README"),"\u6587\u4ef6\u5df2\u88ab\u8ddf\u8e2a\uff0c\u5e76\u5904\u4e8e\u6682\u5b58\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git status\nOn branch master\nYour branch is up-to-date with 'origin/master'.\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n\n    new file:   README\n")),(0,r.kt)("p",null,"\u53ea\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Changes to be committed"),"\u8fd9\u884c\u4e0b\u9762\u7684\uff0c\u5c31\u8bf4\u660e\u662f\u5df2\u6682\u5b58\u72b6\u6001\u3002 \u5982\u679c\u6b64\u65f6\u63d0\u4ea4\uff0c\u90a3\u4e48\u8be5\u6587\u4ef6\u5728\u4f60\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),"\u65f6\u7684\u7248\u672c\u5c06\u88ab\u7559\u5b58\u5728\u540e\u7eed\u7684\u5386\u53f2\u8bb0\u5f55\u4e2d\u3002 \u4f60\u53ef\u80fd\u4f1a\u60f3\u8d77\u4e4b\u524d\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git init"),"\u540e\u5c31\u8fd0\u884c\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"git add <files>"),"\u547d\u4ee4\uff0c\u5f00\u59cb\u8ddf\u8e2a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),"\u547d\u4ee4\u4f7f\u7528\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u8def\u5f84\u4f5c\u4e3a\u53c2\u6570\uff1b\u5982\u679c\u53c2\u6570\u662f\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u8be5\u547d\u4ee4\u5c06\u9012\u5f52\u5730\u8ddf\u8e2a\u8be5\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4fee\u6539\u4e00\u4e2a\u5df2\u88ab\u8ddf\u8e2a\u7684\u6587\u4ef6\u3002\u4f60\u9700\u8981\u518d\u6b21\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),"\u6682\u5b58\u8fd9\u6b21\u66f4\u65b0\uff0c\u5426\u5219Git\u4f1a\u63d0\u793a\u4f60\u6587\u4ef6\u5df2\u88ab\u4fee\u6539\uff0c\u4e0d\u4f1a\u8fdb\u5165\u4e0b\u6b21\u63d0\u4ea4\u3002")),(0,r.kt)("h2",{id:"\u63d0\u4ea4\u66f4\u65b0"},"\u63d0\u4ea4\u66f4\u65b0"),(0,r.kt)("p",null,"\u73b0\u5728\u7684\u6682\u5b58\u533a\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\uff0c\u53ef\u4ee5\u63d0\u4ea4\u4e86\u3002 \u5728\u6b64\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u786e\u8ba4\u8fd8\u6709\u4ec0\u4e48\u5df2\u4fee\u6539\u6216\u65b0\u5efa\u7684\u6587\u4ef6\u8fd8\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),"\u8fc7\uff0c \u5426\u5219\u63d0\u4ea4\u7684\u65f6\u5019\u4e0d\u4f1a\u8bb0\u5f55\u8fd9\u4e9b\u5c1a\u672a\u6682\u5b58\u7684\u53d8\u5316\u3002 \u8fd9\u4e9b\u5df2\u4fee\u6539\u4f46\u672a\u6682\u5b58\u7684\u6587\u4ef6\u53ea\u4f1a\u4fdd\u7559\u5728\u672c\u5730\u78c1\u76d8\u3002 \u6240\u4ee5\uff0c\u6bcf\u6b21\u51c6\u5907\u63d0\u4ea4\u524d\uff0c\u5148\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),"\u770b\u4e0b\uff0c\u4f60\u6240\u9700\u8981\u7684\u6587\u4ef6\u662f\u4e0d\u662f\u90fd\u5df2\u6682\u5b58\u8d77\u6765\u4e86\uff0c \u7136\u540e\u518d\u8fd0\u884c\u63d0\u4ea4\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"git commit"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git commit\n")),(0,r.kt)("p",null,"\u7f16\u8f91\u5668\u4f1a\u663e\u793a\u7c7b\u4f3c\u4e0b\u9762\u7684\u6587\u672c\u4fe1\u606f\uff08\u672c\u4f8b\u9009\u7528 Vim \u7684\u5c4f\u663e\u65b9\u5f0f\u5c55\u793a\uff09\uff1a"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u6587\u672c\u7f16\u8f91\uff0c\u6211\u4eec\u90fd\u4ee5Vim\u4e3a\u4f8b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7f16\u8f91\u5668\uff01")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Please enter the commit message for your changes. Lines starting\n# with '#' will be ignored, and an empty message aborts the commit.\n# On branch master\n# Your branch is up-to-date with 'origin/master'.\n#\n# Changes to be committed:\n#   new file:   README\n#   modified:   CONTRIBUTING.md\n#\n~\n~\n~\n\".git/COMMIT_EDITMSG\" 9L, 283C\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u9ed8\u8ba4\u7684\u63d0\u4ea4\u6d88\u606f\u5305\u542b\u6700\u540e\u4e00\u6b21\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," \u7684\u8f93\u51fa\uff0c\u653e\u5728\u6ce8\u91ca\u884c\u91cc\uff0c\u53e6\u5916\u5f00\u5934\u8fd8\u6709\u4e00\u4e2a\u7a7a\u884c\uff0c\u4f9b\u4f60\u8f93\u5165\u63d0\u4ea4\u8bf4\u660e\u3002 \u4f60\u5b8c\u5168\u53ef\u4ee5\u53bb\u6389\u8fd9\u4e9b\u6ce8\u91ca\u884c\uff0c\u4e0d\u8fc7\u7559\u7740\u4e5f\u6ca1\u5173\u7cfb\uff0c\u591a\u5c11\u80fd\u5e2e\u4f60\u56de\u60f3\u8d77\u8fd9\u6b21\u66f4\u65b0\u7684\u5185\u5bb9\u6709\u54ea\u4e9b\u3002\n\u9000\u51fa\u7f16\u8f91\u5668\u65f6\uff0cGit \u4f1a\u4e22\u5f03\u6ce8\u91ca\u884c\uff0c\u7528\u4f60\u8f93\u5165\u7684\u63d0\u4ea4\u8bf4\u660e\u751f\u6210\u4e00\u6b21\u63d0\u4ea4\u3002"),(0,r.kt)("p",null,"\u597d\uff0c\u73b0\u5728\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a\u63d0\u4ea4\uff01 \u53ef\u4ee5\u770b\u5230\uff0c\u63d0\u4ea4\u540e\u5b83\u4f1a\u544a\u8bc9\u4f60\uff0c\u5f53\u524d\u662f\u5728\u54ea\u4e2a\u5206\u652f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\uff09\u63d0\u4ea4\u7684\uff0c\u672c\u6b21\u63d0\u4ea4\u7684\u5b8c\u6574 SHA-1 \u6821\u9a8c\u548c\u662f\u4ec0\u4e48\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"463dc4f"),"\uff09\uff0c\u4ee5\u53ca\u5728\u672c\u6b21\u63d0\u4ea4\u4e2d\uff0c\u6709\u591a\u5c11\u6587\u4ef6\u4fee\u8ba2\u8fc7\uff0c\u591a\u5c11\u884c\u6dfb\u52a0\u548c\u5220\u6539\u8fc7\u3002"),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u63d0\u4ea4\u65f6\u8bb0\u5f55\u7684\u662f\u653e\u5728\u6682\u5b58\u533a\u57df\u7684\u5feb\u7167\u3002 \u4efb\u4f55\u8fd8\u672a\u6682\u5b58\u6587\u4ef6\u7684\u4ecd\u7136\u4fdd\u6301\u5df2\u4fee\u6539\u72b6\u6001\uff0c\u53ef\u4ee5\u5728\u4e0b\u6b21\u63d0\u4ea4\u65f6\u7eb3\u5165\u7248\u672c\u7ba1\u7406\u3002 \u6bcf\u4e00\u6b21\u8fd0\u884c\u63d0\u4ea4\u64cd\u4f5c\uff0c\u90fd\u662f\u5bf9\u4f60\u9879\u76ee\u4f5c\u4e00\u6b21\u5feb\u7167\uff0c\u4ee5\u540e\u53ef\u4ee5\u56de\u5230\u8fd9\u4e2a\u72b6\u6001\uff0c\u6216\u8005\u8fdb\u884c\u6bd4\u8f83\u3002"))}c.isMDXComponent=!0},61150:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/init-5b2d186a8a1f4fd47136bcfcf2cd577b.png"},47087:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/lifecycle-6a55acbee21785ece80da06a0068cfa6.png"},78844:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/status-a58956400ba5e5fbff95482e48b45a23.png"}}]);