"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[7439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,g=c["".concat(p,".").concat(d)]||c[d]||f[d]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={id:"control",sidebar_position:7},o="\u63a7\u5236\u8bed\u53e5",i={unversionedId:"python/control",id:"python/control",title:"\u63a7\u5236\u8bed\u53e5",description:"if\u8bed\u53e5",source:"@site/docs/python/control.md",sourceDirName:"python",slug:"/python/control",permalink:"/math201/python/control",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"control",sidebar_position:7},sidebar:"pythonSidebar",previous:{title:"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",permalink:"/math201/python/variable"},next:{title:"\u51fd\u6570\u548c\u9ad8\u9636\u51fd\u6570",permalink:"/math201/python/function"}},p={},s=[{value:"if\u8bed\u53e5",id:"if\u8bed\u53e5",level:2},{value:"if else \u8bed\u53e5",id:"if-else-\u8bed\u53e5",level:3},{value:"if elif else",id:"if-elif-else",level:3},{value:"if\u5d4c\u5957",id:"if\u5d4c\u5957",level:3},{value:"while\u5faa\u73af\u8bed\u53e5",id:"while\u5faa\u73af\u8bed\u53e5",level:2},{value:"for\u5faa\u73af\u8bed\u53e5",id:"for\u5faa\u73af\u8bed\u53e5",level:2},{value:"break\u8bed\u53e5",id:"break\u8bed\u53e5",level:2},{value:"continue\u8bed\u53e5",id:"continue\u8bed\u53e5",level:2},{value:"else\u5b50\u53e5",id:"else\u5b50\u53e5",level:2},{value:"for else",id:"for-else",level:3},{value:"while else\u8bed\u53e5",id:"while-else\u8bed\u53e5",level:3},{value:"Pass\u8bed\u53e5",id:"pass\u8bed\u53e5",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63a7\u5236\u8bed\u53e5"},"\u63a7\u5236\u8bed\u53e5"),(0,l.kt)("h2",{id:"if\u8bed\u53e5"},"if\u8bed\u53e5"),(0,l.kt)("p",null,"Python\u6761\u4ef6\u8bed\u53e5\u662f\u901a\u8fc7\u4e00\u6761\u6216\u591a\u6761\u8bed\u53e5\u7684\u6267\u884c\u7ed3\u679c\uff08True\u6216\u8005False\uff09\u6765\u51b3\u5b9a\u6267\u884c\u7684\u4ee3\u7801\u5757\uff0c\u6267\u884c\u8bed\u53e5\u53ef\u4ee5\u662f\u5355\u4e2a\u8bed\u53e5\u6216\u8bed\u53e5\u5757\u3002\u5224\u65ad\u6761\u4ef6\u53ef\u4ee5\u662f\u4efb\u4f55\u8868\u8fbe\u5f0f\uff0c\u4efb\u4f55\u975e\u96f6\u3001\u6216\u975e\u7a7a\uff08null\uff09\u7684\u503c\u5747\u4e3atrue\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'if True:\n    print("Hello World")\nprint("Goog Bye")\n------------------------\nHello World\nGoog Bye\n\n\nif False:\n    print("Hello Python")\nprint("Goog Bye")\n------------------------\nGoog Bye\n')),(0,l.kt)("h3",{id:"if-else-\u8bed\u53e5"},"if else \u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'if False:\n    print("No executed")\nelse:\n    print("Executed")\n------------------------\nExecuted\n')),(0,l.kt)("h3",{id:"if-elif-else"},"if elif else"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'age = int(input("Please your age>>:"))\nif 0 < age and age <= 20:\n    print("teenager")\nelif 20 < age and age <= 40:\n    print("Man")\nelif 40 < age and age <= 60:\n    print("Old")\nelse:\n    print("Died")\n------------------------\nPlease your age>>:30\nMan\n')),(0,l.kt)("h3",{id:"if\u5d4c\u5957"},"if\u5d4c\u5957"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'age = int(input("Please your age>>:"))\nif age >= 0:\n    if 0 < age and age <= 20:\n        print("teenager")\n    elif 20 < age and age <= 40:\n        print("Man")\n    elif 40 < age and age <= 60:\n        print("Old")\n    else:\n        print("Died")\nelse:\n    print("Your age error")\n-------------------------\nPlease your age>>:48\nOld\n')),(0,l.kt)("h2",{id:"while\u5faa\u73af\u8bed\u53e5"},"while\u5faa\u73af\u8bed\u53e5"),(0,l.kt)("p",null,"Python\u4e2dwhile\u8bed\u53e5\u7684\u4e00\u822c\u5f62\u5f0f\uff1a\nwhile \u5224\u65ad\u6761\u4ef6\uff1a\n","\u2003","\u8bed\u53e5"),(0,l.kt)("p",null,"\u4e3e\u4f8b\u4e00\u4e2awhile\u7684\u7ecf\u5178\u4f8b\u9898\uff0c\u8ba1\u7b97100\u4e2a\u6570\u4e4b\u548c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"sum = 0\ncount = 0\nwhile count <= 100:\n    sum += count\n    count += 1\nprint(sum)\n-------------------------\n5050\n")),(0,l.kt)("h2",{id:"for\u5faa\u73af\u8bed\u53e5"},"for\u5faa\u73af\u8bed\u53e5"),(0,l.kt)("p",null,"for\u5faa\u73af\u53ef\u4ee5\u904d\u5386\u4efb\u4f55\u5e8f\u5217\u7684\u9879\u76ee\uff08\u4e00\u4e2a\u5217\u8868\u6216\u8005\u4e00\u4e2a\u5b57\u7b26\u4e32\u7b49\uff09\uff0c\u57fa\u672c\u8bed\u6cd5\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"for <variable> in <sequence>:\n    <statements>\nelse:\n    <statements>\n")),(0,l.kt)("p",null,"\u4e3e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"fruits = ['banana', 'apple', 'mango','tomato','pelar']\nfor fruit in range(len(fruits)):\n    print('fruit: ',fruits[fruit])\n------------------------------------------------\nfruit:  banana\nfruit:  apple\nfruit:  mango\nfruit:  tomato\nfruit:  pelar\n")),(0,l.kt)("h2",{id:"break\u8bed\u53e5"},"break\u8bed\u53e5"),(0,l.kt)("p",null,"break \u8bed\u53e5\u53ef\u4ee5\u8df3\u51fa for \u548c while \u7684\u5faa\u73af\u4f53\u3002\u82e5\u9047\u5230break\u800c\u4f7f\u5f97 for \u6216 while \u5faa\u73af\u4e2d\u7ec8\u6b62\u800c\u4e14 else \u5757\u5c06\u4e0d\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u4e3e\u4f8b"),(0,l.kt)("p",null,"for\u5faa\u73af\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"for megs in 'Hello Python':\n    if megs == 'y':\n        break\n    print ('\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :',megs)\n--------------------------------\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : H\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : e\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :  \n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : P\n")),(0,l.kt)("p",null,"while\u5faa\u73af\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'counts = 0\nwhile counts < 6:\n    print("counts:" ,counts)\n    if counts == 3:\n        break\n    counts += 1\n---------------------------------\ncounts: 0\ncounts: 1\ncounts: 2\ncounts: 3\n')),(0,l.kt)("h2",{id:"continue\u8bed\u53e5"},"continue\u8bed\u53e5"),(0,l.kt)("p",null,"continue\u8bed\u53e5\u88ab\u7528\u6765\u544a\u8bc9Python\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u5757\u4e2d\u7684\u5269\u4f59\u8bed\u53e5\uff0c\u7136\u540e\u7ee7\u7eed\u8fdb\u884c\u4e0b\u4e00\u8f6e\u5faa\u73af\u3002"),(0,l.kt)("p",null,"\u4e3e\u4f8b"),(0,l.kt)("p",null,"while\u5faa\u73af\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"for megs in 'Hello Python':\n    if megs == 'y':\n        continue\n    print ('\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :',megs)\n--------------------------------\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : H\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : e\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : l\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a :  \n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : P\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : t\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : h\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : o\n\u8f93\u51fa\u7684\u5f53\u524d\u5b57\u6bcd\u4e3a : n-for\n")),(0,l.kt)("p",null,"for\u5faa\u73af\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'counts = 0\nwhile counts < 6:\n    counts += 1\n    if counts == 3:\n        continue\n    print("counts:", counts)\n--------------------------------\ncounts: 1\ncounts: 2\ncounts: 4\ncounts: 5\ncounts: 6\n')),(0,l.kt)("h2",{id:"else\u5b50\u53e5"},"else\u5b50\u53e5"),(0,l.kt)("p",null,"\u5faa\u73af\u8bed\u53e5\u53ef\u4ee5\u6709 else \u5b50\u53e5\uff0c\u5b83\u5728\u7a77\u5c3d\u5217\u8868(\u4ee5for\u5faa\u73af)\u6216\u6761\u4ef6\u53d8\u4e3a false (\u4ee5while\u5faa\u73af)\u5bfc\u81f4\u5faa\u73af\u7ec8\u6b62\u65f6\u88ab\u6267\u884c,\u4f46\u5faa\u73af\u88abbreak\u7ec8\u6b62\u65f6\u4e0d\u6267\u884c\u3002"),(0,l.kt)("h3",{id:"for-else"},"for else"),(0,l.kt)("p",null,"for \u5faa\u73af\u4e2d\u4f7f\u7528 break \u8bed\u53e5\uff0cbreak \u8bed\u53e5\u7528\u4e8e\u8df3\u51fa\u5f53\u524d\u5faa\u73af\u4f53,\u4e14\u4e0d\u6267\u884celse\u5b50\u53e5\uff0c\u5426\u5219\u6267\u884celse\u5b50\u53e5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'sites = ["Baidu", "Google","UC","Taobao"]\nfor site in sites:\n    if site == "Baidu":\n        print("\u55e8\u55e8\u55e8")\n        break\n    print("\u5faa\u73af\u6570\u636e " + site)\nelse:\n    print("\u6ca1\u6709\u5faa\u73af\u6570\u636e!")\nprint("\u5b8c\u6210\u5faa\u73af!")\n--------------------------------\n\u55e8\u55e8\u55e8\n\u5b8c\u6210\u5faa\u73af!\n')),(0,l.kt)("h3",{id:"while-else\u8bed\u53e5"},"while else\u8bed\u53e5"),(0,l.kt)("p",null,"\u5728\u6761\u4ef6\u8bed\u53e5\u4e3a false \u65f6\u6267\u884c\u5219else \u7684\u8bed\u53e5\u5757\uff0c\u82e5\u9047\u5230break\u8bed\u53e5\u5219\u4e0d\u6267\u884celse\u5b50\u53e5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'count = 0\nwhile count < 10:\n    print (count, " \u5c0f\u4e8e 10")\n    count = count + 1\nelse:\n    print (count, " \u5927\u4e8e\u6216\u7b49\u4e8e 10")\n-------------------------\n0  \u5c0f\u4e8e 10\n1  \u5c0f\u4e8e 10\n2  \u5c0f\u4e8e 10\n3  \u5c0f\u4e8e 10\n4  \u5c0f\u4e8e 10\n5  \u5c0f\u4e8e 10\n6  \u5c0f\u4e8e 10\n7  \u5c0f\u4e8e 10\n8  \u5c0f\u4e8e 10\n9  \u5c0f\u4e8e 10\n10  \u5927\u4e8e\u6216\u7b49\u4e8e 10\n')),(0,l.kt)("h2",{id:"pass\u8bed\u53e5"},"Pass\u8bed\u53e5"),(0,l.kt)("p",null,"pass\u662f\u7a7a\u8bed\u53e5\uff0c\u662f\u4e3a\u4e86\u4fdd\u6301\u7a0b\u5e8f\u7ed3\u6784\u7684\u5b8c\u6574\u6027\u3002pass \u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\uff0c\u4e00\u822c\u7528\u505a\u5360\u4f4d\u8bed\u53e5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'for char in "Hello World":\n    if char == \'W\':\n        pass\n        print("\u6267\u884cpass\u8bed\u53e5")\n    print("char: " ,char)\n------------------------------\nchar:  H\nchar:  e\nchar:  l\nchar:  l\nchar:  o\nchar:   \n\u6267\u884cpass\u8bed\u53e5\nchar:  W\nchar:  o\nchar:  r\nchar:  l\nchar:  d\n')))}c.isMDXComponent=!0}}]);