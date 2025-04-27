import{d,i as _,a as p,u,b as h,c as m,e as f,f as r,g as t,t as a,h as n,F as g,r as v,n as x,j as y,o as l,k as b,l as N,m as k,p as P,q as w,_ as S}from"./index-ce506b0d.js";import{N as V}from"./NoteDisplay-5b332749.js";const j={class:"m-4"},B={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),u(`
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
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.slice(0,-1).map(s=>{var o;return(o=s.meta)==null?void 0:o.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,o)=>(l(),r("div",{id:"page-root",style:x(n(w))},[t("div",j,[t("div",B,[t("h1",L,a(n(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(l(!0),r(g,null,v(n(i),(e,c)=>(l(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(b)),1),N(" "+a(e==null?void 0:e.title)+" ",1),o[0]||(o[0]=t("div",{class:"flex-auto"},null,-1))])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(i).length-1?(l(),r("hr",z)):P("v-if",!0)]))),128))])],4))}}),E=S(F,[["__file","/Users/haiwen/gitrepo/math201-lecture/05_NumPy_Basic/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
