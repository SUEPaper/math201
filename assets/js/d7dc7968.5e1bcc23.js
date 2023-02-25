"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[2939],{3905:(n,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>f});var p=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,p)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,p,a=function(n,t){if(null==n)return{};var e,p,a={},r=Object.keys(n);for(p=0;p<r.length;p++)e=r[p],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(p=0;p<r.length;p++)e=r[p],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var o=p.createContext({}),s=function(n){var t=p.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},d=function(n){var t=s(n.components);return p.createElement(o.Provider,{value:t},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,o=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),c=s(e),u=a,f=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return e?p.createElement(f,l(l({ref:t},d),{},{components:e})):p.createElement(f,l({ref:t},d))}));function f(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=n,i[c]="string"==typeof n?n:a,l[1]=i;for(var s=2;s<r;s++)l[s]=e[s];return p.createElement.apply(null,l)}return p.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6457:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var p=e(87462),a=(e(67294),e(3905));const r={id:"3d",sidebar_position:10},l="\u4e09\u7ef4\u56fe\u5f62",i={unversionedId:"python/matplotlib/3d",id:"python/matplotlib/3d",title:"\u4e09\u7ef4\u56fe\u5f62",description:"Matplotlib \u53ef\u4ee5\u652f\u6301\u7ed8\u52363D\u7684\u56fe\u5f62\uff0c\u901a\u8fc7\u5173\u952e\u5b57\u53c2\u6570projection='3d'\u6765\u521b\u5efa3D\u89c6\u56fe, \u4e09\u7ef4 axes \u6fc0\u6d3b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4e0a\u9762\u7ed8\u5236\u4e0d\u540c\u7684\u4e09\u7ef4\u56fe\u8868\u7c7b\u578b\u3002",source:"@site/docs/python/matplotlib/3d.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/3d",permalink:"/math201/docs/python/matplotlib/3d",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"3d",sidebar_position:10},sidebar:"pythonSidebar",previous:{title:"\u997c\u56fe",permalink:"/math201/docs/python/matplotlib/pie"},next:{title:"\u66f4\u591a\u753b\u56fe\u79cd\u7c7b",permalink:"/math201/docs/python/matplotlib/others"}},o={},s=[{value:"\u4e09\u7ef4\u7684\u70b9\u548c\u7ebf",id:"\u4e09\u7ef4\u7684\u70b9\u548c\u7ebf",level:2},{value:"\u4e09\u7ef4\u8f6e\u5ed3\u56fe",id:"\u4e09\u7ef4\u8f6e\u5ed3\u56fe",level:2},{value:"\u6846\u7ebf\u56fe\u548c\u8868\u9762\u56fe",id:"\u6846\u7ebf\u56fe\u548c\u8868\u9762\u56fe",level:2},{value:"\u8868\u9762\u4e09\u89d2\u5256\u5206",id:"\u8868\u9762\u4e09\u89d2\u5256\u5206",level:2},{value:"\u83ab\u6bd4\u4e4c\u65af\u73af\u6848\u4f8b",id:"\u83ab\u6bd4\u4e4c\u65af\u73af\u6848\u4f8b",level:2},{value:"\u66f4\u591a3D\u7ed8\u56fe",id:"\u66f4\u591a3d\u7ed8\u56fe",level:2}],d={toc:s};function c(n){let{components:t,...r}=n;return(0,a.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e09\u7ef4\u56fe\u5f62"},"\u4e09\u7ef4\u56fe\u5f62"),(0,a.kt)("p",null,"Matplotlib \u53ef\u4ee5\u652f\u6301\u7ed8\u52363D\u7684\u56fe\u5f62\uff0c\u901a\u8fc7\u5173\u952e\u5b57\u53c2\u6570projection='3d'\u6765\u521b\u5efa3D\u89c6\u56fe, \u4e09\u7ef4 axes \u6fc0\u6d3b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4e0a\u9762\u7ed8\u5236\u4e0d\u540c\u7684\u4e09\u7ef4\u56fe\u8868\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(83709).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"\u4e09\u7ef4\u7684\u70b9\u548c\u7ebf"},"\u4e09\u7ef4\u7684\u70b9\u548c\u7ebf"),(0,a.kt)("p",null,"\u4e09\u7ef4\u56fe\u8868\u4e2d\u6700\u57fa\u7840\u7684\u662f\u4f7f\u7528(x, y, z)\u5750\u6807\u5b9a\u4e49\u7684\u4e00\u6839\u7ebf\u6216\u6563\u70b9\u7684\u96c6\u5408\u3002\u524d\u9762\u4ecb\u7ecd\u8fc7\u666e\u901a\u7684\u4e8c\u7ef4\u56fe\u8868\uff0c\u4f5c\u4e3a\u7c7b\u6bd4\uff0c\u4f7f\u7528ax.plot3D\u548cax.scatter3D\u51fd\u6570\u53ef\u4ee5\u521b\u5efa\u4e09\u7ef4\u6298\u7ebf\u548c\u6563\u70b9\u56fe\u3002\u8fd9\u4e24\u4e2a\u51fd\u6570\u7684\u7b7e\u540d\u4e0e\u4e8c\u7ef4\u7684\u7248\u672c\u57fa\u672c\u4e00\u81f4\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/math201/docs/python/matplotlib/line"},"\u6298\u7ebf\u56fe"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/math201/docs/python/matplotlib/scatter"},"\u6563\u70b9\u56fe"),"\u6765\u590d\u4e60\u4e00\u4e0b\u8fd9\u90e8\u5206\u7684\u5185\u5bb9\u3002\u4e0b\u9762\u6211\u4eec\u7ed8\u5236\u4e00\u4e2a\u4e09\u7ef4\u4e2d\u7684\u4e09\u89d2\u87ba\u65cb\uff0c\u5728\u7ebf\u7684\u9644\u8fd1\u5728\u7ed8\u5236\u4e00\u4e9b\u968f\u673a\u7684\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\n# \u4e09\u7ef4\u87ba\u65cb\u7ebf\u7684\u6570\u636e\nzline = np.linspace(0, 15, 1000)\nxline = np.sin(zline)\nyline = np.cos(zline)\nax.plot3D(xline, yline, zline, 'gray')\n\n# \u4e09\u7ef4\u6563\u70b9\u7684\u6570\u636e\nzdata = 15 * np.random.random(100)\nxdata = np.sin(zdata) + 0.1 * np.random.randn(100)\nydata = np.cos(zdata) + 0.1 * np.random.randn(100)\nax.scatter3D(xdata, ydata, zdata, c=zdata, cmap='Greens')\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(84229).Z,width:"640",height:"480"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u56fe\u4e2d\u7684\u6563\u70b9\u4f1a\u6709\u900f\u660e\u5ea6\u7684\u533a\u522b\uff0c\u7528\u4e8e\u4f53\u73b0\u5728\u56fe\u4e2d\u6563\u70b9\u7684\u6df1\u5ea6\u3002\u867d\u7136\u4e09\u7ef4\u6548\u679c\u5728\u9759\u6001\u56fe\u50cf\u4e2d\u96be\u4ee5\u663e\u793a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ea4\u4e92\u5f0f\u7684\u89c6\u56fe\u6765\u83b7\u5f97\u66f4\u4f73\u7684\u4e09\u7ef4\u76f4\u89c2\u6548\u679c\u3002")),(0,a.kt)("h2",{id:"\u4e09\u7ef4\u8f6e\u5ed3\u56fe"},"\u4e09\u7ef4\u8f6e\u5ed3\u56fe"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c55\u793a\u4e00\u4e2a\u4e09\u7ef4\u7684\u6b63\u5f26\u51fd\u6570\u8f6e\u5ed3\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\nx = np.linspace(-6, 6, 30)\ny = np.linspace(-6, 6, 30)\n\nX, Y = np.meshgrid(x, y)\nZ = f(X, Y)\n\nax.contour3D(X, Y, Z, 50, cmap='binary')\nax.set_xlabel('x')\nax.set_ylabel('y')\nax.set_zlabel('z')\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(2125).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u9ed8\u8ba4\u7684\u89c6\u89d2\u89d2\u5ea6\u4e0d\u662f\u6700\u7406\u60f3\u7684\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528view_init\u51fd\u6570\u6765\u8bbe\u7f6e\u6c34\u5e73\u89d2\u548c\u65b9\u4f4d\u89d2\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f 60\xb0 \u7684\u6c34\u5e73\u89d2\uff08\u5373\u4ee5 60\xb0 \u4fef\u89c6 x-y \u5e73\u9762\uff09\u548c 35\xb0 \u7684\u65b9\u4f4d\u89d2\uff08\u5373\u5c06 z \u8f74\u9006\u65f6\u9488\u65cb\u8f6c 35\xb0\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\nx = np.linspace(-6, 6, 30)\ny = np.linspace(-6, 6, 30)\n\nX, Y = np.meshgrid(x, y)\nZ = f(X, Y)\n\nax.contour3D(X, Y, Z, 50, cmap='binary')\nax.set_xlabel('x')\nax.set_ylabel('y')\nax.set_zlabel('z')\n\nax.view_init(60, 35)\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(65637).Z,width:"640",height:"480"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u4f7f\u7528 Matplotlib \u4ea4\u4e92\u5f0f\u5c55\u793a\u662f\uff0c\u8fd9\u6837\u7684\u65cb\u8f6c\u53ef\u4ee5\u901a\u8fc7\u9f20\u6807\u70b9\u51fb\u548c\u62d6\u62fd\u6765\u5b9e\u73b0\u3002")),(0,a.kt)("h2",{id:"\u6846\u7ebf\u56fe\u548c\u8868\u9762\u56fe"},"\u6846\u7ebf\u56fe\u548c\u8868\u9762\u56fe"),(0,a.kt)("p",null,"\u4f7f\u7528\u7f51\u683c\u6570\u636e\u751f\u6210\u7684\u4e09\u7ef4\u56fe\u8868\u8fd8\u6709\u6846\u7ebf\u56fe\u548c\u8868\u9762\u56fe\u3002\u8fd9\u4e24\u79cd\u56fe\u8868\u5c06\u7f51\u683c\u6570\u636e\u6295\u5c04\u5230\u7279\u5b9a\u7684\u4e09\u7ef4\u8868\u9762\uff0c\u80fd\u591f\u4f7f\u5f97\u7ed3\u679c\u56fe\u50cf\u975e\u5e38\u76f4\u89c2\u548c\u5177\u6709\u8bf4\u670d\u529b\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u6846\u7ebf\u56fe\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\nx = np.linspace(-6, 6, 30)\ny = np.linspace(-6, 6, 30)\n\nX, Y = np.meshgrid(x, y)\nZ = f(X, Y)\n\nax.plot_wireframe(X, Y, Z, color='black')\nax.set_title('wireframe');\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(72978).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"\u8868\u9762\u56fe\u7c7b\u4f3c\u6846\u7ebf\u56fe\uff0c\u533a\u522b\u5728\u4e8e\u6bcf\u4e2a\u6846\u7ebf\u6784\u6210\u7684\u591a\u8fb9\u5f62\u90fd\u4f7f\u7528\u989c\u8272\u8fdb\u884c\u4e86\u586b\u5145\u3002\u6dfb\u52a0\u8272\u56fe\u7528\u4e8e\u586b\u5145\u591a\u8fb9\u5f62\u80fd\u591f\u8ba9\u56fe\u5f62\u8868\u9762\u5c55\u793a\u51fa\u6765\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\nx = np.linspace(-6, 6, 30)\ny = np.linspace(-6, 6, 30)\n\nX, Y = np.meshgrid(x, y)\nZ = f(X, Y)\n\nax.plot_surface(X, Y, Z, rstride=1, cstride=1,\n                cmap='viridis', edgecolor='none')\nax.set_title('surface');\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(30308).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"\u6ce8\u610f\u867d\u7136\u6bcf\u4e2a\u989c\u8272\u586b\u5145\u7684\u8868\u9762\u90fd\u662f\u4e8c\u7ef4\u7684\uff0c\u4f46\u662f\u8868\u9762\u7684\u8fb9\u7f18\u4e0d\u9700\u8981\u662f\u76f4\u7ebf\u6784\u6210\u7684\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u4f7f\u7528surface3D\u7ed8\u5236\u4e86\u4e00\u4e2a\u90e8\u5206\u6781\u5750\u6807\u7f51\u683c\uff0c\u80fd\u591f\u8ba9\u6211\u4eec\u5207\u5165\u5230\u51fd\u6570\u5185\u90e8\u89c2\u5bdf\u6548\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\nr = np.linspace(0, 6, 20)\ntheta = np.linspace(-0.9 * np.pi, 0.8 * np.pi, 40)\nr, theta = np.meshgrid(r, theta)\n\nX = r * np.sin(theta)\nY = r * np.cos(theta)\nZ = f(X, Y)\n\nax.plot_surface(X, Y, Z, rstride=1, cstride=1,\n                cmap='viridis', edgecolor='none')\nax.set_title('surface');\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(88249).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"\u8868\u9762\u4e09\u89d2\u5256\u5206"},"\u8868\u9762\u4e09\u89d2\u5256\u5206"),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u5e94\u7528\u573a\u5408\u4e2d\uff0c\u4e0a\u9762\u7684\u8fd9\u79cd\u5747\u5300\u7f51\u683c\u7ed8\u5236\u7684\u56fe\u8868\u65b9\u5f0f\u592a\u8fc7\u4e8e\u5c40\u9650\u548c\u4e0d\u65b9\u4fbf\u3002\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e09\u89d2\u5256\u5206\u7684\u56fe\u8868\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a\u3002\u5982\u679c\u6211\u4eec\u5e76\u4e0d\u662f\u4f7f\u7528\u7b1b\u5361\u5c14\u5750\u6807\u7cfb\u6216\u6781\u5750\u6807\u7cfb\u7684\u7f51\u683c\u6765\u7ed8\u5236\u4e09\u7ef4\u56fe\u8868\uff0c\u800c\u662f\u4f7f\u7528\u4e00\u7ec4\u968f\u673a\u7684\u70b9\u6765\u7ed8\u5236\u4e09\u7ef4\u56fe\u8868\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\ntheta = 2 * np.pi * np.random.random(1000)\nr = 6 * np.random.random(1000)\nx = np.ravel(r * np.sin(theta))\ny = np.ravel(r * np.cos(theta))\nz = f(x, y)\n\nax.scatter(x, y, z, c=z, cmap='viridis', linewidth=0.5);\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(74624).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u5e76\u672a\u5f62\u8c61\u7684\u8868\u793a\u51fa\u8868\u9762\u60c5\u51b5\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ax.plot_trisurf"),"\u51fd\u6570\uff0c\u5b83\u80fd\u9996\u5148\u6839\u636e\u6211\u4eec\u7684\u6570\u636e\u8f93\u5165\u627e\u5230\u5404\u70b9\u5185\u5728\u7684\u4e09\u89d2\u51fd\u6570\u5f62\u5f0f\uff0c\u7136\u540e\u7ed8\u5236\u8868\u9762\uff08\u6ce8\u610f\u7684\u662f\u8fd9\u91cc\u7684 x\uff0cy\uff0cz \u662f\u4e00\u7ef4\u7684\u6570\u7ec4\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\ndef f(x, y):\n    return np.sin(np.sqrt(x ** 2 + y ** 2))\n\ntheta = 2 * np.pi * np.random.random(1000)\nr = 6 * np.random.random(1000)\nx = np.ravel(r * np.sin(theta))\ny = np.ravel(r * np.cos(theta))\nz = f(x, y)\n\nax.plot_trisurf(x, y, z,\n                cmap='viridis', edgecolor='none');\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(90169).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u7684\u7ed3\u679c\u5f88\u663e\u7136\u6ca1\u6709\u4f7f\u7528\u7f51\u683c\u7ed8\u5236\u8868\u9762\u56fe\u90a3\u4e48\u6e05\u6670\uff0c\u4f46\u662f\u5bf9\u4e8e\u6211\u4eec\u5e76\u4e0d\u662f\u4f7f\u7528\u51fd\u6570\u6784\u5efa\u6570\u636e\u6837\u672c\uff08\u6570\u636e\u6837\u672c\u901a\u5e38\u6765\u81ea\u771f\u5b9e\u4e16\u754c\u7684\u91c7\u6837\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u80fd\u63d0\u4f9b\u5f88\u5927\u7684\u5e2e\u52a9\u3002\u4f8b\u5982\u6211\u4eec\u4e0b\u9762\u4f1a\u770b\u5230\uff0c\u80fd\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u7ed8\u5236\u4e00\u6761\u4e09\u7ef4\u7684\u83ab\u6bd4\u4e4c\u65af\u73af\u3002"),(0,a.kt)("h2",{id:"\u83ab\u6bd4\u4e4c\u65af\u73af\u6848\u4f8b"},"\u83ab\u6bd4\u4e4c\u65af\u73af\u6848\u4f8b"),(0,a.kt)("p",null,"\u662f\u4e00\u79cd\u53ea\u6709\u4e00\u4e2a\u9762\uff08\u8868\u9762\uff09\u548c\u4e00\u6761\u8fb9\u754c\u7684\u66f2\u9762\uff0c\u4e5f\u662f\u4e00\u79cd\u91cd\u8981\u7684\u62d3\u6251\u5b66\u7ed3\u6784\u3002\u5b83\u662f\u7531\u5fb7\u56fd\u6570\u5b66\u5bb6\u3001\u5929\u6587\u5b66\u5bb6\u83ab\u6bd4\u4e4c\u65af\u548c\u7ea6\u7ff0\xb7\u674e\u65af\u4e01\u57281858\u5e74\u72ec\u7acb\u53d1\u73b0\u7684\u3002\u8fd9\u4e2a\u7ed3\u6784\u53ef\u4ee5\u7528\u4e00\u4e2a\u7eb8\u5e26\u65cb\u8f6c\u534a\u5708\u518d\u628a\u4e24\u7aef\u7c98\u4e0a\u4e4b\u540e\u8f7b\u800c\u6613\u4e3e\u5730\u5236\u4f5c\u51fa\u6765\u3002\u4e8b\u5b9e\u4e0a\u6709\u4e24\u79cd\u4e0d\u540c\u7684\u83ab\u6bd4\u4e4c\u65af\u5e26\u955c\u50cf\uff0c\u4ed6\u4eec\u76f8\u4e92\u5bf9\u79f0\u3002\u5982\u679c\u628a\u7eb8\u5e26\u987a\u65f6\u9488\u65cb\u8f6c\u518d\u7c98\u8d34\uff0c\u5c31\u4f1a\u5f62\u6210\u4e00\u4e2a\u53f3\u624b\u6027\u7684\u83ab\u6bd4\u4e4c\u65af\u5e26\uff0c\u53cd\u4e4b\u4ea6\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/M%C3%B6bius_strip"},"\u7ef4\u57fa\u767e\u79d1--\u83ab\u6bd4\u4e4c\u65af\u73af")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nfrom matplotlib.tri import Triangulation\nimport numpy as np\n\ntheta = np.linspace(0, 2 * np.pi, 30)\nw = np.linspace(-0.25, 0.25, 8)\nw, theta = np.meshgrid(w, theta)\n\nphi = 0.5 * theta\n\n# r\u662f\u5750\u6807\u70b9\u8ddd\u79bb\u73af\u5f62\u4e2d\u5fc3\u7684\u8ddd\u79bb\u503c\nr = 1 + w * np.cos(phi)\n# \u5229\u7528\u7b80\u5355\u7684\u4e09\u89d2\u51fd\u6570\u77e5\u8bc6\u7b97\u5f97x\uff0cy\uff0cz\u5750\u6807\u503c\nx = np.ravel(r * np.cos(theta))\ny = np.ravel(r * np.sin(theta))\nz = np.ravel(w * np.sin(phi))\n\ntri = Triangulation(np.ravel(w), np.ravel(theta))\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\nax.plot_trisurf(x, y, z, triangles=tri.triangles,\n                cmap='viridis', linewidths=0.2)\n\nax.set_xlim(-1, 1)\nax.set_ylim(-1, 1)\nax.set_zlim(-1, 1)\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(4590).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"\u66f4\u591a3d\u7ed8\u56fe"},"\u66f4\u591a3D\u7ed8\u56fe"),(0,a.kt)("p",null,"\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863\u5b66\u4e60\u66f4\u591a\u7684Matplotlib 3D\u56fe\u5f62\u7ed8\u5236\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/gallery/mplot3d/index.html"},"https://matplotlib.org/stable/gallery/mplot3d/index.html")))}c.isMDXComponent=!0},83709:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_01-8f5940344e5094574fb23135d24d6e43.png"},84229:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_02-73ebc4f4c65c392ce25d0ccbd408d28b.png"},2125:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_03-4a9dd743e2ebb130003974bcb60a2489.png"},65637:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_04-879b0d47cd8349329cd1da62c75c3c56.png"},72978:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_05-2059487c744740b75d693fbacdb7fbe0.png"},30308:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_06-57192c89a1f73beee3e6cfac85c8f7e6.png"},88249:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_07-8704867f141fd4f893b736a1d689faaa.png"},74624:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_08-1328276f3adb082077f6f1c644ad2851.png"},90169:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_09-1a9913e534c1ddc15e4508aeb99e57bf.png"},4590:(n,t,e)=>{e.d(t,{Z:()=>p});const p=e.p+"assets/images/3D_10-44d881f50fed3a6d4584067ffe80e533.png"}}]);