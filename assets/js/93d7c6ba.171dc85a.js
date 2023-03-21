"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[5914],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},p=Object.keys(t);for(l=0;l<p.length;l++)n=p[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(l=0;l<p.length;l++)n=p[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=l.createContext({}),i=function(t){var e=l.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return l.createElement(r.Provider,{value:e},t.children)},c="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,r=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=i(n),d=a,m=c["".concat(r,".").concat(d)]||c[d]||b[d]||p;return n?l.createElement(m,o(o({ref:e},u),{},{components:n})):l.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56818:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var l=n(87462),a=(n(67294),n(3905));const p={id:"subplots",sidebar_position:3},o="\u591a\u4e2a\u5b50\u56fe",s={unversionedId:"python/matplotlib/subplots",id:"python/matplotlib/subplots",title:"\u591a\u4e2a\u5b50\u56fe",description:"\u6709\u65f6\u5019\u9700\u8981\u4ece\u591a\u4e2a\u89d2\u5ea6\u5bf9\u6570\u636e\u8fdb\u884c\u5bf9\u6bd4\u3002Matplotlib \u4e3a\u6b64\u63d0\u51fa\u4e86\u5b50\u56fe(subplot)\u7684\u6982\u5ff5:\u5728\u8f83\u5927\u7684\u56fe\u5f62\u4e2d\u540c\u65f6\u653e\u7f6e\u4e00\u7ec4\u8f83\u5c0f\u7684\u5750\u6807\u8f74\u3002\u8fd9\u4e9b\u5b50\u56fe\u53ef\u80fd\u662f\u753b\u4e2d\u753b(inset)\u3001\u7f51\u683c\u56fe(grid of plots)\uff0c\u6216\u8005\u662f\u5176\u4ed6\u66f4\u590d\u6742\u7684\u5e03\u5c40\u5f62\u5f0f\u3002",source:"@site/docs/python/matplotlib/subplots.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/subplots",permalink:"/math201/docs/python/matplotlib/subplots",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"subplots",sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",permalink:"/math201/docs/python/matplotlib/basic"},next:{title:"\u6298\u7ebf\u56fe",permalink:"/math201/docs/python/matplotlib/line"}},r={},i=[{value:"\u521b\u5efa\u5b50\u56fe",id:"\u521b\u5efa\u5b50\u56fe",level:2},{value:"\u6848\u4f8b1:",id:"\u6848\u4f8b1",level:3},{value:"\u6848\u4f8b2:",id:"\u6848\u4f8b2",level:3},{value:"\u5982\u4f55\u8bbe\u7f6e\u6bcf\u5f20\u5b50\u56fe\u7684\u56fe\u7247\u540d\u5b57",id:"\u5982\u4f55\u8bbe\u7f6e\u6bcf\u5f20\u5b50\u56fe\u7684\u56fe\u7247\u540d\u5b57",level:2},{value:"\u5982\u4f55\u8bbe\u7f6e\u603b\u56fe\u7684\u540d\u5b57",id:"\u5982\u4f55\u8bbe\u7f6e\u603b\u56fe\u7684\u540d\u5b57",level:2},{value:"\u8c03\u8282\u5b50\u56fe\u4e4b\u95f4\u7684\u95f4\u8ddd",id:"\u8c03\u8282\u5b50\u56fe\u4e4b\u95f4\u7684\u95f4\u8ddd",level:2},{value:"\u4f7f\u7528<code>tight_layout()</code>\u8c03\u8282\u95f4\u8ddd",id:"\u4f7f\u7528tight_layout\u8c03\u8282\u95f4\u8ddd",level:3},{value:"\u4f7f\u7528<code>subplots_adjust()</code>\u8c03\u8282\u95f4\u8ddd",id:"\u4f7f\u7528subplots_adjust\u8c03\u8282\u95f4\u8ddd",level:3}],u={toc:i};function c(t){let{components:e,...p}=t;return(0,a.kt)("wrapper",(0,l.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u4e2a\u5b50\u56fe"},"\u591a\u4e2a\u5b50\u56fe"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u9700\u8981\u4ece\u591a\u4e2a\u89d2\u5ea6\u5bf9\u6570\u636e\u8fdb\u884c\u5bf9\u6bd4\u3002Matplotlib \u4e3a\u6b64\u63d0\u51fa\u4e86\u5b50\u56fe(subplot)\u7684\u6982\u5ff5:\u5728\u8f83\u5927\u7684\u56fe\u5f62\u4e2d\u540c\u65f6\u653e\u7f6e\u4e00\u7ec4\u8f83\u5c0f\u7684\u5750\u6807\u8f74\u3002\u8fd9\u4e9b\u5b50\u56fe\u53ef\u80fd\u662f\u753b\u4e2d\u753b(inset)\u3001\u7f51\u683c\u56fe(grid of plots)\uff0c\u6216\u8005\u662f\u5176\u4ed6\u66f4\u590d\u6742\u7684\u5e03\u5c40\u5f62\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u5b50\u56fe"},"\u521b\u5efa\u5b50\u56fe"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u591a\u4e2a\u56fe\uff0c\u8bf7\u4f7f\u7528 matplotlib.pyplot.subplots \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u56fe\u5f62\u4ee5\u53ca Axes \u5bf9\u8c61\u6216 Axes \u5bf9\u8c61\u6570\u7ec4\u3002 subplots() \u65b9\u6cd5\u7684 nrows\u3001ncols \u5c5e\u6027\u786e\u5b9a\u5b50\u56fe\u7f51\u683c\u7684\u884c\u6570\u548c\u5217\u6570\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u8fd4\u56de\u5e26\u6709\u5355\u4e2a\u56fe\u7684\u56fe\u7a97\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u8f74\u5bf9\u8c61\uff0c\u5373\u7ed8\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u6807\u9898\uff08\u901a\u8fc7 set_title() \u8bbe\u7f6e\uff09\u3001x \u6807\u7b7e\uff08\u901a\u8fc7 set_xlabel() \u8bbe\u7f6e\uff09\u548c y \u6807\u7b7e\u901a\u8fc7 set_ylabel() \u8bbe\u7f6e\uff09\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u901a\u8fc7\u4ec5\u5728\u4e00\u4e2a\u65b9\u5411\u4e0a\u5806\u53e0\u6765\u8c03\u7528 subplots() \u65b9\u6cd5\u65f6\uff0c\u5b83\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8f74\u5bf9\u8c61\u7684\u4e00\u7ef4\u6570\u7ec4\uff0c\u5373\u5b50\u56fe\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u50cf\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20\u4e00\u6837\u4f7f\u7528\u7d22\u5f15\u8bbf\u95ee\u8fd9\u4e9b\u8f74\u5bf9\u8c61\u3002\u8981\u521b\u5efa\u7279\u5b9a\u7684\u5b50\u56fe\uff0c\u8bf7\u5728\u8f74\u7684\u76f8\u5e94\u7d22\u5f15\u4e0a\u8c03\u7528 matplotlib.pyplot.plot() \u3002\u53c2\u8003\u4e0b\u56fe\u53ef\u4ee5\u66f4\u597d\u7684\u7406\u89e3"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21189).Z,width:"300",height:"189"})),(0,a.kt)("h3",{id:"\u6848\u4f8b1"},"\u6848\u4f8b1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n \n# Some data to display\nx = [1, 2, 3]\ny = [0, 1, 0]\nz = [1, 0, 1]\n \n# Creating 2 subplots\nfig, ax = plt.subplots(2)\n \n# Accessing each axes object to plot the data through returned array\nax[0].plot(x, y)\nax[1].plot(x, z)\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91984).Z,width:"640",height:"480"})),(0,a.kt)("h3",{id:"\u6848\u4f8b2"},"\u6848\u4f8b2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\n \n# Data for plotting\nx = np.arange(0.0, 2.0, 0.01)\ny = 1 + np.sin(2 * np.pi * x)\n \n# Creating 6 subplots and unpacking the output array immediately\nfig, ((ax1, ax2), (ax3, ax4), (ax5, ax6)) = plt.subplots(3, 2)\nax1.plot(x, y, color="orange")\nax2.plot(x, y, color="green")\nax3.plot(x, y, color="blue")\nax4.plot(x, y, color="magenta")\nax5.plot(x, y, color="black")\nax6.plot(x, y, color="red")\n\nplt.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6474).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u6bcf\u5f20\u5b50\u56fe\u7684\u56fe\u7247\u540d\u5b57"},"\u5982\u4f55\u8bbe\u7f6e\u6bcf\u5f20\u5b50\u56fe\u7684\u56fe\u7247\u540d\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport matplotlib.pyplot as plt\n \n# create data\nx=np.array([1, 2, 3, 4, 5])\n \n# making subplots\nfig, ax = plt.subplots(2, 2)\n \n# set data with subplots and plot\nax[0, 0].plot(x, x)\nax[0, 1].plot(x, x*2)\nax[1, 0].plot(x, x*x)\nax[1, 1].plot(x, x*x*x)\n \n# set the title to subplots\nax[0, 0].set_title("Linear")\nax[0, 1].set_title("Double")\nax[1, 0].set_title("Square")\nax[1, 1].set_title("Cube")\n\nplt.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36563).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u603b\u56fe\u7684\u540d\u5b57"},"\u5982\u4f55\u8bbe\u7f6e\u603b\u56fe\u7684\u540d\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n \nfig, (ax1, ax2) = plt.subplots(1, 2)\n \nx1 = [1, 2, 3, 4, 5, 6]\ny1 = [45, 34, 30, 45, 50, 38]\ny2 = [36, 28, 30, 40, 38, 48]\n \nlabels = [\"student 1\", \"student 2\"]\n \n# Add title to subplot\nfig.suptitle(' Student marks in different subjects ', fontsize=5)\n \n# Creating the sub-plots.\nl1 = ax1.plot(x1, y1, color='g')\nl2 = ax2.plot(x1, y2, color='r')\n \nfig.legend([l1, l2], labels=labels)\nplt.subplots_adjust(right=0.9)\n \nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73197).Z,width:"1043",height:"742"})),(0,a.kt)("h2",{id:"\u8c03\u8282\u5b50\u56fe\u4e4b\u95f4\u7684\u95f4\u8ddd"},"\u8c03\u8282\u5b50\u56fe\u4e4b\u95f4\u7684\u95f4\u8ddd"),(0,a.kt)("h3",{id:"\u4f7f\u7528tight_layout\u8c03\u8282\u95f4\u8ddd"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h3"},"tight_layout()"),"\u8c03\u8282\u95f4\u8ddd"),(0,a.kt)("p",null,"tight_layout() \u65b9\u6cd5\u81ea\u52a8\u4fdd\u6301\u9002\u5f53\u7684\u95f4\u8ddd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport matplotlib.pyplot as plt\n\n# create data\nx=np.array([1, 2, 3, 4, 5])\n\n# making subplots\nfig, ax = plt.subplots(2, 2)\n\n# set data with subplots and plot\nax[0, 0].plot(x, x)\nax[0, 1].plot(x, x*2)\nax[1, 0].plot(x, x*x)\nax[1, 1].plot(x, x*x*x)\n# using padding\nfig.tight_layout(pad=5.0)\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97782).Z,width:"640",height:"480"})),(0,a.kt)("h3",{id:"\u4f7f\u7528subplots_adjust\u8c03\u8282\u95f4\u8ddd"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h3"},"subplots_adjust()"),"\u8c03\u8282\u95f4\u8ddd"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 plt.subplots_adjust() \u65b9\u6cd5\u6765\u6539\u53d8 Matplotlib \u5b50\u56fe\u4e4b\u95f4\u7684\u7a7a\u95f4\u3002\u53c2\u6570 wspace \u548c hspace \u6307\u5b9a Matplotlib \u5b50\u56fe\u4e4b\u95f4\u4fdd\u7559\u7684\u7a7a\u95f4\u3002\u5b83\u4eec\u5206\u522b\u662f\u8f74\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u5206\u6570\u3002\u53c2\u6570 left\u3001right\u3001top \u548c bottom \u53c2\u6570\u6307\u5b9a\u5b50\u56fe\u4f4d\u7f6e\u7684\u56db\u4e2a\u8fb9\u3002\u5b83\u4eec\u662f\u56fe\u5f62\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u5206\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport matplotlib.pyplot as plt\n\n# create data\nx=np.array([1, 2, 3, 4, 5])\n\n# making subplots\nfig, ax = plt.subplots(2, 2)\n\n# set data with subplots and plot\nax[0, 0].plot(x, x)\nax[0, 1].plot(x, x*2)\nax[1, 0].plot(x, x*x)\nax[1, 1].plot(x, x*x*x)\n# set the spacing between subplots\nplt.subplots_adjust(left=0.1,\n                    bottom=0.1,\n                    right=0.9,\n                    top=0.9,\n                    wspace=0.4,\n                    hspace=0.4)\n\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38704).Z,width:"640",height:"480"})))}c.isMDXComponent=!0},21189:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_03-5c4e7d3cb68857512002bad9ca017c1f.png"},91984:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_04-8a568478d9b6f381793be0badccbc758.png"},6474:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_05-2601062426ea5fcae1b2967c04469f0a.png"},36563:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_06-378429719e31e4023f693022e8128f6b.png"},73197:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_08-b94be2d41e8b4bb8adbacadf1657dab6.png"},97782:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_09-dacaf0760c37f3372204ccd43e264031.png"},38704:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/matplotlib_10-7e4251baa3e9bcc39d514956c955bdbb.png"}}]);