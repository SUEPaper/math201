"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[632],{3905:(A,t,e)=>{e.d(t,{Zo:()=>g,kt:()=>s});var n=e(67294);function i(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function r(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,n)}return e}function a(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function l(A,t){if(null==A)return{};var e,n,i=function(A,t){if(null==A)return{};var e,n,i={},r=Object.keys(A);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||(i[e]=A[e]);return i}(A,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(i[e]=A[e])}return i}var p=n.createContext({}),E=function(A){var t=n.useContext(p),e=t;return A&&(e="function"==typeof A?A(t):a(a({},t),A)),e},g=function(A){var t=E(A.components);return n.createElement(p.Provider,{value:t},A.children)},o="mdxType",B={inlineCode:"code",wrapper:function(A){var t=A.children;return n.createElement(n.Fragment,{},t)}},I=n.forwardRef((function(A,t){var e=A.components,i=A.mdxType,r=A.originalType,p=A.parentName,g=l(A,["components","mdxType","originalType","parentName"]),o=E(e),I=i,s=o["".concat(p,".").concat(I)]||o[I]||B[I]||r;return e?n.createElement(s,a(a({ref:t},g),{},{components:e})):n.createElement(s,a({ref:t},g))}));function s(A,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof A||i){var r=e.length,a=new Array(r);a[0]=I;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=A,l[o]="string"==typeof A?A:i,a[1]=l;for(var E=2;E<r;E++)a[E]=e[E];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}I.displayName="MDXCreateElement"},70867:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>E});var n=e(87462),i=(e(67294),e(3905));const r={id:"histogram",sidebar_position:8},a="\u76f4\u65b9\u56fe",l={unversionedId:"python/matplotlib/histogram",id:"python/matplotlib/histogram",title:"\u76f4\u65b9\u56fe",description:"\u76f4\u65b9\u56fe\u57fa\u672c\u4e0a\u7528\u4e8e\u8868\u793a\u4ee5\u67d0\u4e9b\u7ec4\u7684\u5f62\u5f0f\u63d0\u4f9b\u7684\u6570\u636e\u3002\u5b83\u662f\u6570\u5b57\u6570\u636e\u5206\u5e03\u7684\u56fe\u5f62\u8868\u793a\u7684\u51c6\u786e\u65b9\u6cd5\u3002\u5b83\u662f\u4e00\u79cd\u6761\u5f62\u56fe\uff0c\u5176\u4e2d X \u8f74\u8868\u793a bin \u8303\u56f4\uff0c\u800c Y \u8f74\u7ed9\u51fa\u4fe1\u606f\u5173\u4e8e\u9891\u7387",source:"@site/docs/python/matplotlib/histogram.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/histogram",permalink:"/math201/docs/python/matplotlib/histogram",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"histogram",sidebar_position:8},sidebar:"pythonSidebar",previous:{title:"\u6761\u5f62\u56fe",permalink:"/math201/docs/python/matplotlib/bar"},next:{title:"\u997c\u56fe",permalink:"/math201/docs/python/matplotlib/pie"}},p={},E=[{value:"\u57fa\u672c\u6848\u4f8b",id:"\u57fa\u672c\u6848\u4f8b",level:2},{value:"\u4e00\u7ef4\u76f4\u65b9\u56fe",id:"\u4e00\u7ef4\u76f4\u65b9\u56fe",level:2},{value:"\u8bbe\u7f6e\u900f\u660e\u5ea6\u548c\u8fb9\u6846\u989c\u8272",id:"\u8bbe\u7f6e\u900f\u660e\u5ea6\u548c\u8fb9\u6846\u989c\u8272",level:3},{value:"\u4e8c\u7ef4\u76f4\u65b9\u56fe",id:"\u4e8c\u7ef4\u76f4\u65b9\u56fe",level:2},{value:"plt.hexbin\uff1a\u516d\u89d2\u5f62\u5206\u6876",id:"plthexbin\u516d\u89d2\u5f62\u5206\u6876",level:3}],g={toc:E};function o(A){let{components:t,...r}=A;return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u76f4\u65b9\u56fe"},"\u76f4\u65b9\u56fe"),(0,i.kt)("p",null,"\u76f4\u65b9\u56fe\u57fa\u672c\u4e0a\u7528\u4e8e\u8868\u793a\u4ee5\u67d0\u4e9b\u7ec4\u7684\u5f62\u5f0f\u63d0\u4f9b\u7684\u6570\u636e\u3002\u5b83\u662f\u6570\u5b57\u6570\u636e\u5206\u5e03\u7684\u56fe\u5f62\u8868\u793a\u7684\u51c6\u786e\u65b9\u6cd5\u3002\u5b83\u662f\u4e00\u79cd\u6761\u5f62\u56fe\uff0c\u5176\u4e2d X \u8f74\u8868\u793a bin \u8303\u56f4\uff0c\u800c Y \u8f74\u7ed9\u51fa\u4fe1\u606f\u5173\u4e8e\u9891\u7387"),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u76f4\u65b9\u56fe\uff0c\u7b2c\u4e00\u6b65\u662f\u521b\u5efa\u8303\u56f4\u7684 bin\uff0c\u7136\u540e\u5c06\u6574\u4e2a\u8303\u56f4\u7684\u503c\u5206\u5e03\u5230\u4e00\u7cfb\u5217\u95f4\u9694\u4e2d\uff0c\u5e76\u5bf9\u843d\u5165\u6bcf\u4e2a\u95f4\u9694\u7684\u503c\u8fdb\u884c\u8ba1\u6570\u3002Bins \u6e05\u695a\u5730\u6807\u8bc6\u4e3a\u8fde\u7eed\u7684\u3001\u975e\u53d8\u91cf\u7684\u91cd\u53e0\u533a\u95f4\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"matplotlib.pyplot.hist()")," \u51fd\u6570\u7528\u4e8e\u8ba1\u7b97\u548c\u521b\u5efa x \u7684\u76f4\u65b9\u56fe\u3002"),(0,i.kt)("p",null,"matplotlib.pyplot.hist(): ",(0,i.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist"},"https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist")),(0,i.kt)("h2",{id:"\u57fa\u672c\u6848\u4f8b"},"\u57fa\u672c\u6848\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\n \ny = [10, 5, 8, 4, 2]\n \nplt.hist(y)\n\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(30470).Z,width:"640",height:"480"})),(0,i.kt)("h2",{id:"\u4e00\u7ef4\u76f4\u65b9\u56fe"},"\u4e00\u7ef4\u76f4\u65b9\u56fe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n\nnp.random.seed(23685752)\nN_points = 10000\nn_bins = 20\n \nx = np.random.randn(N_points)\ny = .8 ** x + np.random.randn(10000) + 25\n \nfig, axs = plt.subplots(1, 1,\n                        figsize =(10, 7),\n                        tight_layout = True)\n \naxs.hist(x, bins = n_bins)\n\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(21483).Z,width:"1000",height:"700"})),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u900f\u660e\u5ea6\u548c\u8fb9\u6846\u989c\u8272"},"\u8bbe\u7f6e\u900f\u660e\u5ea6\u548c\u8fb9\u6846\u989c\u8272"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n \nseries1 = np.random.randn(500, 1)\nseries2 = np.random.randn(400, 1)\n \nplt.hist(series1, label='series1', alpha=.8, edgecolor='red')\n \nplt.hist(series2, label='series2', alpha=0.7, edgecolor='yellow')\nplt.legend()\n \nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(81706).Z,width:"739",height:"546"})),(0,i.kt)("h2",{id:"\u4e8c\u7ef4\u76f4\u65b9\u56fe"},"\u4e8c\u7ef4\u76f4\u65b9\u56fe"),(0,i.kt)("p",null,"\u6b63\u5982\u524d\u9762\u6211\u4eec\u53ef\u4ee5\u5728\u4e00\u7ef4\u4e0a\u4f7f\u7528\u6570\u503c\u5bf9\u5e94\u7684\u76f4\u7ebf\u5212\u5206\u6876\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u4e8c\u7ef4\u4e0a\u4f7f\u7528\u6570\u636e\u5bf9\u5e94\u7684\u70b9\u6765\u5212\u5206\u6876\u3002\u7ed8\u5236\u4e8c\u7ef4\u76f4\u65b9\u56fe\u6700\u76f4\u63a5\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 Matplotlib \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"plt.hist2d"),"\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n \nmean = [0, 0]\ncov = [[1, 1], [1, 2]]\nx, y = np.random.multivariate_normal(mean, cov, 10000).T\n \nplt.hist2d(x, y, bins=30, cmap='Blues')\ncb = plt.colorbar()\ncb.set_label('counts in bin')\n \nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(86467).Z,width:"640",height:"480"})),(0,i.kt)("h3",{id:"plthexbin\u516d\u89d2\u5f62\u5206\u6876"},"plt.hexbin\uff1a\u516d\u89d2\u5f62\u5206\u6876"),(0,i.kt)("p",null,"\u521a\u624d\u7684\u4e8c\u7ef4\u5206\u6876\u662f\u6cbf\u7740\u5750\u6807\u8f74\u5c06\u6bcf\u4e2a\u6876\u5206\u4e3a\u6b63\u65b9\u5f62\u3002\u53e6\u4e00\u4e2a\u5f88\u81ea\u7136\u7684\u5206\u6876\u5f62\u72b6\u5c31\u662f\u6b63\u516d\u8fb9\u5f62\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u9700\u6c42\uff0cMatplotlib \u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"plt.hexbin"),"\u51fd\u6570\uff0c\u5b83\u4e5f\u662f\u5728\u4e8c\u7ef4\u5e73\u9762\u4e0a\u5206\u6876\u5c55\u793a\uff0c\u4e0d\u8fc7\u6bcf\u4e2a\u6876\uff08\u5373\u56fe\u8868\u4e0a\u7684\u6bcf\u4e2a\u6570\u636e\u683c\uff09\u5c06\u4f1a\u662f\u516d\u8fb9\u5f62\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\n \nmean = [0, 0]\ncov = [[1, 1], [1, 2]]\nx, y = np.random.multivariate_normal(mean, cov, 10000).T\n \nplt.hexbin(x, y, gridsize=30, cmap='Blues')\ncb = plt.colorbar(label='count in bin')\n \nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(72675).Z,width:"640",height:"480"})))}o.isMDXComponent=!0},30470:(A,t,e)=>{e.d(t,{Z:()=>n});const n="data:image/png;base64,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FiUlJZ3WS0pK4qWXXurymC996Utx5MiR+MxnPhOZTCZ+9atfxZe//OUPfQq4tbU1WltbOz5uaWnJzgkAAHSjvLgC+HHs2rUrVq9eHd/+9rdj37598c///M/x+OOPx6pVq055TG1tbQwYMKBjKysr68aJAQCyIy+uAA4cODAKCwujubm503pzc3OUlpZ2ecyKFSvixhtvjJtvvjkiIq655po4fvx4/Nmf/Vnccccd0avXyW28fPnyqK6u7vi4paVFBAIAPU5eXAEsKiqKSZMmRX19fcdae3t71NfXR0VFRZfHvPfeeydFXmFhYUREZDKZLo8pLi6O/v37d9oAAHqavLgCGBFRXV0d8+fPj8mTJ8e1114b69ati+PHj0dVVVVERMybNy+GDh0atbW1ERExc+bMWLt2bUyYMCHKy8tj//79sWLFipg5c2ZHCAIA5KO8CcDZs2fH4cOHY+XKldHU1BTjx4+P7du3d7wx5MCBA52u+N15551RUFAQd955Z7zxxhvxqU99KmbOnBl33313rk4BAKBb5E0ARkQsXrw4Fi9e3OVtu3bt6vRx7969o6amJmpqarphMgCAs0devAYQAIDTJwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEiMAAQASIwABABIjAAEAEpNXAbh+/foYPnx49OnTJ8rLy2PPnj0fuv8777wTixYtisGDB0dxcXF8+tOfjieeeKKbpgUAyI3euR4gW7Zu3RrV1dVRV1cX5eXlsW7dupg2bVq8/PLLMWjQoJP2P3HiRPzO7/xODBo0KB599NEYOnRo/OIXv4gLLrig+4cHAOhGeROAa9eujYULF0ZVVVVERNTV1cXjjz8emzZt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"},21483:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/hist_02-f5a0f13e280a997b609567ce252a02c3.png"},81706:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/hist_03-64b237c223f6512ae5ced22e48b0b6cb.png"},86467:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/hist_04-3ea4c58eda397f37a55f4843d9c8b6b5.png"},72675:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/hist_05-c61fe7551a435bff68d529ea2a604b3e.png"}}]);