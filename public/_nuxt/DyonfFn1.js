const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BVcgbNfc.js","./DX4Xkoew.js","./entry.Da8ooIjN.css","./CTBaUHzJ.js","./BwlX181z.js","./C-v3KzvZ.js","./Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{b1 as v,L as c,bc as f,m as g,bd as d,J as l,be as _,ba as h,b6 as r,_ as C}from"./DX4Xkoew.js";import{u as y}from"./D-04LOnm.js";import{q as b,w as m,e as w,s as N,j as $,u as P}from"./CTBaUHzJ.js";import{u as j}from"./BwlX181z.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=b(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(N())return(await f(()=>import("./BVcgbNfc.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=P();return{navigation:n}}const{data:s}=await y(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=h(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),E=D,R=Object.assign(E,{__name:"ContentNavigation"});export{R as default};