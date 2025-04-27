import{d,i as _,a as p,u,b as h,c as m,e as f,f as l,g as t,t as a,h as n,F as g,r as v,n as x,j as b,o as r,k as y,l as N,m as k,p as w,q as P,_ as S}from"./index-8ae3e291.js";import{N as V}from"./NoteDisplay-6100ad24.js";const j={class:"m-4"},B={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(F){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(o=>{var s;return(s=o.meta)==null?void 0:s.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,s)=>(r(),l("div",{id:"page-root",style:x(n(P))},[t("div",j,[t("div",B,[t("h1",L,a(n(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),l(g,null,v(n(i),(e,c)=>(r(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(y)),1),N(" "+a(e==null?void 0:e.title)+" ",1),s[0]||(s[0]=t("div",{class:"flex-auto"},null,-1))])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(i).length-1?(r(),l("hr",M)):w("v-if",!0)]))),128))])],4))}}),E=S(z,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
