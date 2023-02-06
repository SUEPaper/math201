"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[9322],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||p;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8259:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const p={id:"scatter",sidebar_position:5},l="\u6563\u70b9\u56fe",o={unversionedId:"python/matplotlib/scatter",id:"python/matplotlib/scatter",title:"\u6563\u70b9\u56fe",description:"\u4f7f\u7528plt.plot\u753b\u6563\u70b9\u56fe",source:"@site/docs/python/matplotlib/scatter.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/scatter",permalink:"/math201/docs/python/matplotlib/scatter",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"scatter",sidebar_position:5},sidebar:"pythonSidebar",previous:{title:"\u6298\u7ebf\u56fe",permalink:"/math201/docs/python/matplotlib/line"},next:{title:"\u8bef\u5dee\u53ef\u89c6\u5316",permalink:"/math201/docs/python/matplotlib/error"}},i={},s=[{value:"\u4f7f\u7528<code>plt.plot</code>\u753b\u6563\u70b9\u56fe",id:"\u4f7f\u7528pltplot\u753b\u6563\u70b9\u56fe",level:2},{value:"\u4f7f\u7528<code>plt.scatter</code>\u753b\u6563\u70b9\u56fe",id:"\u4f7f\u7528pltscatter\u753b\u6563\u70b9\u56fe",level:2},{value:"<code>plot</code> \u548c <code>scatter</code> \u5bf9\u6bd4",id:"plot-\u548c-scatter-\u5bf9\u6bd4",level:2}],c={toc:s};function m(t){let{components:e,...p}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6563\u70b9\u56fe"},"\u6563\u70b9\u56fe"),(0,r.kt)("h2",{id:"\u4f7f\u7528pltplot\u753b\u6563\u70b9\u56fe"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h2"},"plt.plot"),"\u753b\u6563\u70b9\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np \n\nx = np.linspace(0, 10, 30)\ny = np.sin(x)\n\nplt.plot(x, y, 'o', color='black');\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1336).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plot"),"\u652f\u6301\u4e0d\u540c\u6563\u70b9\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\u6848\u4f8b\u6240\u793a\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u770b",(0,r.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html"},"MarkrStyle"),"\u8bf4\u660e\u6587\u6863\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7961).Z,width:"2084",height:"650"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np \n\nrng = np.random.RandomState(0)\nfor marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:\n    plt.plot(rng.rand(10), rng.rand(10), marker,\n             label=\"marker='{0}'\".format(marker))\nplt.legend(numpoints=1)\nplt.xlim(0, 1.8)\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7469).Z,width:"1006",height:"779"})),(0,r.kt)("h2",{id:"\u4f7f\u7528pltscatter\u753b\u6563\u70b9\u56fe"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h2"},"plt.scatter"),"\u753b\u6563\u70b9\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np \n\nx = np.linspace(0, 10, 30)\ny = np.sin(x)\n\nplt.scatter(x, y, marker='o')\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3614).Z,width:"640",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u652f\u6301\u4e0d\u540c\u6563\u70b9\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\u6848\u4f8b\u6240\u793a\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u770b",(0,r.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.markers.MarkerStyle.html"},"MarkrStyle"),"\u8bf4\u660e\u6587\u6863\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np \n\nrng = np.random.RandomState(0)\nfor marker in ['.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', '*', 'h', 'H', '+', 'x',  'D', 'd', '|', '_', 'P', 'X']:\n    plt.plot(rng.rand(10), rng.rand(10), marker,\n             label=\"marker='{0}'\".format(marker))\nplt.legend(numpoints=1)\nplt.xlim(0, 1.8)\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4489).Z,width:"1014",height:"714"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"plt.plot"),"\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u53ef\u4ee5\u9488\u5bf9\u6bcf\u4e2a\u70b9\u8bbe\u7f6e\u4e0d\u540c\u5c5e\u6027\uff08\u5927\u5c0f\u3001\u586b\u5145\u989c\u8272\u3001\u8fb9\u7f18\u989c\u8272\u7b49\uff09\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u96c6\u5408\u5bf9\u8fd9\u4e9b\u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u968f\u673a\u503c\u6570\u636e\u96c6\u7ed8\u5236\u4e0d\u540c\u989c\u8272\u548c\u5927\u5c0f\u7684\u6563\u70b9\u56fe\u6765\u8bf4\u660e\u3002\u4e3a\u4e86\u66f4\u597d\u7684\u67e5\u770b\u91cd\u53e0\u7684\u7ed3\u679c\uff0c\u6211\u4eec\u8fd8\u4f7f\u7528\u4e86alpha\u5173\u952e\u5b57\u53c2\u6570\u5bf9\u70b9\u7684\u900f\u660e\u5ea6\u8fdb\u884c\u4e86\u8c03\u6574\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\nimport numpy as np \n\nrng = np.random.RandomState(0)\nx = rng.randn(100)\ny = rng.randn(100)\ncolors = rng.rand(100)\nsizes = 1000 * rng.rand(100)\n\nplt.scatter(x, y, c=colors, s=sizes, alpha=0.3,\n            cmap='viridis')\nplt.colorbar()  # \u663e\u793a\u989c\u8272\u5bf9\u6bd4\u6761\n\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9739).Z,width:"819",height:"645"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u51fd\u6570\u4e2d\u53ef\u9009\u53c2\u6570\u201cs\u201d\u7528\u4e8e\u589e\u52a0 matplotlib \u4e2d\u6563\u70b9\u7684\u5927\u5c0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n  \nx = [1,2,3,4,5,6,7,8,9,10,11,12]\ny = [1,2,3,4,5,6,7,8,9,10,11,12]\npoints_size = [100,200,300,400,500,600,700,800,900,1000,1100,1200]\n  \nplt.xticks(np.arange(13))\nplt.yticks(np.arange(13))\n  \nplt.scatter(x, y, s=points_size, c='g')\n  \nplt.title(\"Scatter Plot with increase in size of scatter points \", fontsize=22)\n  \nplt.xlabel('x-axis', fontsize=20)\nplt.ylabel('y-axis', fontsize=20)\n  \nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3711).Z,width:"926",height:"700"})),(0,r.kt)("h2",{id:"plot-\u548c-scatter-\u5bf9\u6bd4"},(0,r.kt)("inlineCode",{parentName:"h2"},"plot")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h2"},"scatter")," \u5bf9\u6bd4"),(0,r.kt)("p",null,"\u6027\u80fd\u63d0\u9192\u9664\u4e86\u4e0a\u9762\u8bf4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"plt.plot"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u5bf9\u4e8e\u6bcf\u4e2a\u6563\u70b9\u4e0d\u540c\u5c5e\u6027\u7684\u652f\u6301\u4e0d\u540c\u4e4b\u5916\uff0c\u8fd8\u6709\u522b\u7684\u56e0\u7d20\u5f71\u54cd\u5bf9\u8fd9\u4e24\u4e2a\u51fd\u6570\u7684\u9009\u62e9\u5417\uff1f\u5bf9\u4e8e\u5c0f\u7684\u6570\u636e\u96c6\u6765\u8bf4\uff0c\u4e24\u8005\u5e76\u65e0\u5dee\u522b\uff0c\u5f53\u6570\u636e\u96c6\u589e\u957f\u5230\u51e0\u5343\u4e2a\u70b9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"plt.plot"),"\u4f1a\u660e\u663e\u6bd4",(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u7684\u6027\u80fd\u8981\u9ad8\u3002\u9020\u6210\u8fd9\u4e2a\u5dee\u5f02\u7684\u539f\u56e0\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"plt.scatter"),"\u652f\u6301\u6bcf\u4e2a\u70b9\u4f7f\u7528\u4e0d\u540c\u7684\u5927\u5c0f\u548c\u989c\u8272\uff0c\u56e0\u6b64\u6e32\u67d3\u6bcf\u4e2a\u70b9\u65f6\u9700\u8981\u5b8c\u6210\u66f4\u591a\u989d\u5916\u7684\u5de5\u4f5c\u3002\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"plt.plot"),"\u6765\u8bf4\uff0c\u6bcf\u4e2a\u70b9\u90fd\u662f\u7b80\u5355\u7684\u590d\u5236\u53e6\u4e00\u4e2a\u70b9\u4ea7\u751f\uff0c\u56e0\u6b64\u5bf9\u4e8e\u6574\u4e2a\u6570\u636e\u96c6\u6765\u8bf4\uff0c\u786e\u5b9a\u6bcf\u4e2a\u70b9\u7684\u5c55\u793a\u5c5e\u6027\u7684\u5de5\u4f5c\u4ec5\u9700\u8981\u8fdb\u884c\u4e00\u6b21\u5373\u53ef\u3002\u5bf9\u4e8e\u5f88\u5927\u7684\u6570\u636e\u96c6\u6765\u8bf4\uff0c\u8fd9\u4e2a\u5dee\u5f02\u4f1a\u5bfc\u81f4\u4e24\u8005\u6027\u80fd\u7684\u5de8\u5927\u533a\u522b\uff0c\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5927\u6570\u636e\u96c6\u5e94\u8be5\u4f18\u5148\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"plt.plot"),"\u51fd\u6570\u3002"))}m.isMDXComponent=!0},7961:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/marks-1cf435d527b2def095efb3d52c085832.png"},1336:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_01-dc221a070411e4259dd31a9b04cfa027.png"},7469:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_02-280455a0dbac9920e58a9fd53ad0751c.png"},3614:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_03-6fffd3361e10b83374a461ce36114861.png"},4489:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_04-7bdaa9a11575fef9bb00cfdfcf22eaf7.png"},9739:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_05-400fdf351585d124d45f2dbe0cd87d52.png"},3711:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/scatter_06-1b2a8ecd38a14c78eed78af9c43ae2d1.png"}}]);