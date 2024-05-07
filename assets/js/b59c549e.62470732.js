"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[8504],{3905:(t,n,e)=>{e.d(n,{Zo:()=>o,kt:()=>d});var a=e(67294);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,s=function(t,n){if(null==t)return{};var e,a,s={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(s[e]=t[e]);return s}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var i=a.createContext({}),m=function(t){var n=a.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},o=function(t){var n=m(t.components);return a.createElement(i.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,s=t.mdxType,l=t.originalType,i=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=m(e),k=s,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||l;return e?a.createElement(d,r(r({ref:n},o),{},{components:e})):a.createElement(d,r({ref:n},o))}));function d(t,n){var e=arguments,s=n&&n.mdxType;if("string"==typeof t||s){var l=e.length,r=new Array(l);r[0]=k;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=t,p[c]="string"==typeof t?t:s,r[1]=p;for(var m=2;m<l;m++)r[m]=e[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},4513:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=e(87462),s=(e(67294),e(3905));const l={id:"list",sidebar_position:1},r="\u5217\u8868",p={unversionedId:"python/data-structure/list",id:"python/data-structure/list",title:"\u5217\u8868",description:"\u5217\u8868\uff08list\uff09\u662fPython\u4e2d\u4e00\u4e2a\u57fa\u672c\u7684\u6570\u636e\u7ed3\u6784\u3002",source:"@site/docs/python/data-structure/list.md",sourceDirName:"python/data-structure",slug:"/python/data-structure/list",permalink:"/math201/python/data-structure/list",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"list",sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/math201/category/\u6570\u636e\u7ed3\u6784"},next:{title:"\u5143\u7ec4",permalink:"/math201/python/data-structure/tuple"}},i={},m=[{value:"\u5217\u8868\u7684\u521b\u5efa",id:"\u5217\u8868\u7684\u521b\u5efa",level:2},{value:"\u5217\u8868\u7684\u4f7f\u7528",id:"\u5217\u8868\u7684\u4f7f\u7528",level:2},{value:"\u901a\u8fc7\u7d22\u5f15",id:"\u901a\u8fc7\u7d22\u5f15",level:3},{value:"\u5207\u7247",id:"\u5207\u7247",level:3},{value:"\u5217\u8868\u5143\u7d20\u66f4\u65b0",id:"\u5217\u8868\u5143\u7d20\u66f4\u65b0",level:3},{value:"\u5217\u8868\u7684\u8fd0\u7b97",id:"\u5217\u8868\u7684\u8fd0\u7b97",level:3},{value:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570",level:3},{value:"list\u5220\u9664",id:"list\u5220\u9664",level:3},{value:"list\u8fed\u4ee3",id:"list\u8fed\u4ee3",level:3},{value:"list\u81ea\u5e26\u7684\u5e38\u7528\u65b9\u6cd5",id:"list\u81ea\u5e26\u7684\u5e38\u7528\u65b9\u6cd5",level:3},{value:"append()",id:"append",level:4},{value:"extend()",id:"extend",level:4},{value:"index()",id:"index",level:4},{value:"insert()",id:"insert",level:4},{value:"pop()",id:"pop",level:4},{value:"reverse()",id:"reverse",level:4},{value:"in",id:"in",level:4},{value:"other",id:"other",level:4}],o={toc:m};function c(t){let{components:n,...e}=t;return(0,s.kt)("wrapper",(0,a.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5217\u8868"},"\u5217\u8868"),(0,s.kt)("p",null,"\u5217\u8868\uff08list\uff09\u662fPython\u4e2d\u4e00\u4e2a\u57fa\u672c\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,s.kt)("p",null,"\u7c7b\u4f3c\u4e8ec\u8bed\u8a00\u4e2d\u7684\u6570\u7ec4\uff0c\u6709\u7740\u7d22\u5f15\uff0c\u4ece0\u5f00\u59cb\u3002"),(0,s.kt)("h2",{id:"\u5217\u8868\u7684\u521b\u5efa"},"\u5217\u8868\u7684\u521b\u5efa"),(0,s.kt)("p",null,"Python\u65b0\u5efa\u53d8\u91cf\u4e0d\u50cfc\u8bed\u8a00\u4e00\u6837\u9700\u8981\u58f0\u660e\u3002"),(0,s.kt)("p",null,"\u5728c\u8bed\u8a00\u4e2d\uff0c\u521b\u5efa\u6570\u7ec4\u9700\u8981\u58f0\u660e\u8fd9\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u6709\u51e0\u4e2a\u5143\u7d20\uff0c\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-C"},"int array[5];\n")),(0,s.kt)("p",null,"\u4f46\u5728Python\u4e2d\uff0c\u6bd4\u8f83\u81ea\u7531\uff0c\u65e0\u9700\u58f0\u660e\uff0c\u4ec0\u4e48\u7c7b\u578b\u7684\u6570\u636e\u90fd\u53ef\u4ee5\u653e\u5165\u5217\u8868\uff0c\u6574\u5f62\uff0c\u6d6e\u70b9\u578b\uff0c\u5b57\u7b26\u4e32\u7b49\u7b49\uff0c\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"list1 = [\"SUEP\",1951,1.13]\nlist2 = [1,2,3,4,5]\nlist3 = ['a','b','c']\n")),(0,s.kt)("p",null,"\u56e0\u4e3aPython\u7684\u5217\u8868\u5565\u90fd\u53ef\u4ee5\u653e\uff0c\u56e0\u6b64\u751a\u81f3\u53ef\u4ee5\u5d4c\u5957"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nlist2 = [1,2,3,4,5]\nlist3 = [1,2,list2]\nprint(list3)\nprint(list3[2])\n"""\n\u8f93\u51fa\uff1a\n[1, 2, [1, 2, 3, 4, 5]]\n[1, 2, 3, 4, 5]\n"""\n')),(0,s.kt)("h2",{id:"\u5217\u8868\u7684\u4f7f\u7528"},"\u5217\u8868\u7684\u4f7f\u7528"),(0,s.kt)("h3",{id:"\u901a\u8fc7\u7d22\u5f15"},"\u901a\u8fc7\u7d22\u5f15"),(0,s.kt)("p",null,"c\u8bed\u8a00\u4e2d\uff0c\u6570\u7ec4\u7684\u4f7f\u7528\u662f\u7528\u7d22\u5f15\u6765\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u503c\uff0c\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'int array[5] = {1,2,3,4,5};\nprintf("%d",array[1]);\n/*\n\u8f93\u51fa\uff1a\n2\n*/\n')),(0,s.kt)("p",null,"Python\u4e0e\u5176\u7c7b\u4f3c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'list1 = ["SUEP",1951,1.13]\nprint(list1[1])\n"""\n\u8f93\u51fa\uff1a\n1951\n"""\n')),(0,s.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cPython\u7684\u7d22\u5f15\u8fd8\u53ef\u4ee5\u662f\u8d1f\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'list1 = ["SUEP",1951,1.13]\nprint(list1[-1])\nprint(list1[-2])\n"""\n\u8f93\u51fa\uff1a\n1.13\n1951\n"""\n')),(0,s.kt)("h3",{id:"\u5207\u7247"},"\u5207\u7247"),(0,s.kt)("p",null,"\u4e0ec\u8bed\u8a00\u4e0d\u540c\u7684\u662f\uff0cPython\u6709\u7740\u5207\u7247\u8fd9\u4e00\u6982\u5ff5\uff0c\u4e0eMATLAB\u7c7b\u4f3c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'#\u8bed\u6cd5\u4e3alist[a:b],\u8fd4\u56delist\u4e2d\u7d22\u5f15\u4e3aa\u5230b\u7684\u5143\u7d20\nlist1 = ["SUEP",1951,1.13,19.39]\nprint(list1[1:4])\nprint(list1[4:1])\nprint(list1[-4:-1])\n#\u4e5f\u53ef\u4ee5list[a:]\uff0c\u8fd4\u56delist\u4e2d\u7d22\u5f15\u4e3aa\u5230\u7ed3\u675f\u7684\u5143\u7d20\nprint(list1[2:])\n"""\n\u8f93\u51fa\uff1a\n[1951, 1.13, 19.39]\n[]\n[\'SUEP\', 1951, 1.13]\n[1.13, 19.39]\n"""\n')),(0,s.kt)("h3",{id:"\u5217\u8868\u5143\u7d20\u66f4\u65b0"},"\u5217\u8868\u5143\u7d20\u66f4\u65b0"),(0,s.kt)("p",null,"c\u8bed\u8a00\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5bf9\u6570\u7ec4\u5143\u7d20\u8d4b\u503c\u7684\u529e\u6cd5\u6539\u53d8\u5176\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'int array[5] = {1,2,3,4,5};\narray[1] = 666\nprintf("%d",array[1]);\n/*\n\u8f93\u51fa\uff1a\n666\n*/\n')),(0,s.kt)("p",null,"\u540c\u7406\uff0cPython\u4e5f\u53ef\u4ee5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nlist1[1] = 666\nprint(list1[1])\n"""\n\u8f93\u51fa\uff1a\n666\n"""\n')),(0,s.kt)("h3",{id:"\u5217\u8868\u7684\u8fd0\u7b97"},"\u5217\u8868\u7684\u8fd0\u7b97"),(0,s.kt)("p",null,"\u5217\u8868\u5177\u6709",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"+")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"+")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"+"))))),"\u4e0e",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2217")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217"))))),"\u8fd9\u4e24\u79cd\u8fd0\u7b97\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"+")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"+")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"+"))))),"\u4e3a\u5217\u8868\u76f8\u8fde\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2217")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217"))))),"\u4e3a\u5217\u8868\u91cd\u590d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"list1 = [\"SUEP\",1951,1.13]\nlist2 = [\"xsm\"]\nprint(list1 + list2)\nprint(list2 + list1)\nprint(list2 + list1 + list2)\nprint(list2 * 2)\n#\u4e5f\u53ef\u4ee5\u4f7f\u7528+=\u4e0e*=\nlist2 += list2\nprint(list2)\nlist2 *= 3\nprint(list2)\n\"\"\"\n\u8f93\u51fa\uff1a\n['SUEP', 1951, 1.13, 'xsm']\n['xsm', 'SUEP', 1951, 1.13]\n['SUEP', 1951, 1.13, 'xsm', 'SUEP', 1951, 1.13]\n['xsm', 'SUEP', 1951, 1.13, 'xsm']\n['xsm', 'xsm']\n['xsm', 'xsm']\n['xsm', 'xsm', 'xsm', 'xsm', 'xsm', 'xsm']\n\"\"\"\n")),(0,s.kt)("p",null,"== \u53ef\u4ee5\u5224\u65ad\u4e24\u4e2alist\u662f\u5426\u4e00\u6837"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["xsm"]\nlist2 = ["bfx"]\nprint(list1 == list2)\nprint(list1 == list1)\n"""\n\u8f93\u51fa\uff1a\nFalse\nTrue\n"""\n')),(0,s.kt)("h3",{id:"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"},"\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\n#\u83b7\u5f97list\u7684\u957f\u5ea6\nprint(len(list1))\n#\u83b7\u5f97\u6700\u5927\u6700\u5c0f\u503c\nlist2 = [1,1,4,5,1]\nprint(min(list2))\nprint(max(list2))\n"""\n\u8f93\u51fa\uff1a\n3\n1\n5\n"""\n')),(0,s.kt)("h3",{id:"list\u5220\u9664"},"list\u5220\u9664"),(0,s.kt)("p",null,"del list","[loc]","\u5220\u9664\u7d22\u5f15\u4e3aloc\u7684\u5143\u7d20"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\ndel list1[1]\nprint(list1)\n"""\n\u8f93\u51fa\uff1a\n[\'SUEP\', 1.13]\n"""\n')),(0,s.kt)("h3",{id:"list\u8fed\u4ee3"},"list\u8fed\u4ee3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nfor i in list1:\n    print(i)\n"""\n\u8f93\u51fa\uff1a\nSUEP\n1951\n1.13\n"""\n')),(0,s.kt)("h3",{id:"list\u81ea\u5e26\u7684\u5e38\u7528\u65b9\u6cd5"},"list\u81ea\u5e26\u7684\u5e38\u7528\u65b9\u6cd5"),(0,s.kt)("h4",{id:"append"},"append()"),(0,s.kt)("p",null,"list.append(xxx)\u5728list\u540e\u6dfb\u52a0xxx(\u53ea\u80fd\u4e00\u4e2a)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nlist1.append("xsm")\nprint(list1)\nlist1.append(["xsm","xsm"])\nprint(list1)\n"""\n\u8f93\u51fa\uff1a\n[\'SUEP\', 1951, 1.13, \'xsm\']\n[\'SUEP\', 1951, 1.13, \'xsm\', [\'xsm\', \'xsm\']]\n""" \n')),(0,s.kt)("h4",{id:"extend"},"extend()"),(0,s.kt)("p",null,"list.extend(xxx,xxx)\u5728list\u540e\u6dfb\u52a0xxx\uff0cxxx(\u597d\u51e0\u4e2a)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"list1 = [\"SUEP\",1951,1.13]\nlist1.extend(\"xsm\")\nprint(list1)\nlist1.extend([\"xsm\"])\nprint(list1)\nlist1.extend([\"xsm\",\"bfx\"])\nprint(list1)\n\"\"\"\n\u8f93\u51fa\uff1a\n['SUEP', 1951, 1.13, 'x', 's', 'm']\n['SUEP', 1951, 1.13, 'x', 's', 'm', 'xsm']\n['SUEP', 1951, 1.13, 'x', 's', 'm', 'xsm', 'xsm', 'bfx']\n\"\"\" \n")),(0,s.kt)("h4",{id:"index"},"index()"),(0,s.kt)("p",null,"list.index(xxx)\u5bfb\u627elist\u4e2dxxx\u7684\u7d22\u5f15"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13,"xsm"]\nprint(list1.index("xsm"))\n"""\n\u8f93\u51fa\uff1a\n3\n"""\n')),(0,s.kt)("h4",{id:"insert"},"insert()"),(0,s.kt)("p",null,"list.insert(loc,xxx)\u5728\u7d22\u5f15loc\u5904\u63d2\u5165xxx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nprint(list1.insert(1,"xsm"))\n"""\n\u8f93\u51fa\uff1a\n[\'SUEP\', \'xsm\', 1951, 1.13]\n"""\n')),(0,s.kt)("h4",{id:"pop"},"pop()"),(0,s.kt)("p",null,"list.pop()\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5e76\u8fd4\u56de\u8be5\u5143\u7d20"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nprint(list1.pop())\nprint(list1)\n"""\n\u8f93\u51fa\uff1a\n1.13\n[\'SUEP\',1951]\n"""\n')),(0,s.kt)("h4",{id:"reverse"},"reverse()"),(0,s.kt)("p",null,"list.reverse()\u53cd\u8f6c\u5143\u7d20"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nlist1.reverse()\nprint(list1)\n')),(0,s.kt)("h4",{id:"in"},"in"),(0,s.kt)("p",null,"xxx in list list\u5185\u662f\u5426\u6709xxx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'list1 = ["SUEP",1951,1.13]\nprint(1951 in list1)\n"""\n\u8f93\u51fa\uff1a\nTrue\n"""\n')),(0,s.kt)("h4",{id:"other"},"other"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.w3school.com.cn/python/python_ref_functions.asp"},"\u5269\u4f59\u7684\u5185\u7f6e\u65b9\u6cd5\uff0cw3cshool"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/tutorial/datastructures.html#more-on-lists"},"\u5b98\u7f51\u6587\u6863")))}c.isMDXComponent=!0}}]);