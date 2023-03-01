import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as b,o as l,k as y,l as N,m as k,p as w,q as P,_ as S}from"./index-4ace83b6.js";import{N as V}from"./NoteDisplay-ceaadc34.js";const j={class:"m-4"},B={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(q){d(p),h(`
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
`),u({title:`Notes - ${m.title}`});const r=f(()=>b.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(l(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",B,[t("h1",L,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(y)),1),N(" "+s(e==null?void 0:e.title)+" ",1),M])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","/Users/haiwen/gitrepo/math201-lecture/06_Matplotlib_Basic/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
