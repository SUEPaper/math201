"use strict";(self.webpackChunkmath_201=self.webpackChunkmath_201||[]).push([[6386],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var o=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=o.createContext({}),s=function(t){var e=o.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(a),h=r,k=c["".concat(p,".").concat(h)]||c[h]||u[h]||n;return a?o.createElement(k,l(l({ref:e},m),{},{components:a})):o.createElement(k,l({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3944:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=a(7462),r=(a(7294),a(3905));const n={id:"questions",sidebar_position:20},l="\u7ec3\u4e60\u9898",i={unversionedId:"python/matplotlib/questions",id:"python/matplotlib/questions",title:"\u7ec3\u4e60\u9898",description:"1. What is Matplotlib?",source:"@site/docs/python/matplotlib/questions.md",sourceDirName:"python/matplotlib",slug:"/python/matplotlib/questions",permalink:"/math201/docs/python/matplotlib/questions",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"questions",sidebar_position:20},sidebar:"pythonSidebar",previous:{title:"\u6587\u672c",permalink:"/math201/docs/python/matplotlib/text"},next:{title:"SciPy \u6559\u7a0b",permalink:"/math201/docs/python/scipy"}},p={},s=[],m={toc:s};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is Matplotlib?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you install Matplotlib?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How you import Matplotlib?What are the common aliases used while importing these modules?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is the purpose of the magic command %matplotlib inline?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you plot a line chart in Python? Illustrate with an example.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you specify values for the X-axis of a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you specify labels for the axes of a chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you plot multiple line charts on the same axes?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you show a legend for a line chart with multiple lines?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How you set a title for a chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you show markers on a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What are the different options for styling lines and markers in line charts? Illustrate with examples.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is the purpose of the fmt argument to plt.plot?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Where can you see a list of all the arguments accepted by plt.plot?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you change the size of the figure using Matplotlib?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is a scatter plot?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How is a scatter plot different from a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you decide when to use a scatter plot vs a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you specify the colors for dots on a scatter plot using a categorical variable?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is a histogram?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When should you use a histogram vs a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you draw a histogram using Matplotlib? Illustrate with an example.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'What are "bins" in a histogram?')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you change the sizes of bins in a histogram?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you change the number of bins in a histogram?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you show multiple histograms on the same axes?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you stack multiple histograms on top of one another?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is a bar chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you draw a bar chart using Matplotlib? Illustrate with an example.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is the difference between a bar chart and a histogram?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is the difference between a bar chart and a line chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you stack bars on top of one another?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you show bar plots side-by-side?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you draw a horizontal bar plot?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you show the original values from the dataset on a heat map?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you turn off the axes and gridlines in a chart?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What is the purpose of the plt.subplots function?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do you export a plot into a PNG image file using Matplotlib?"))))}c.isMDXComponent=!0}}]);