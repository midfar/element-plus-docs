import{f,r as u,o as a,g as S,w as _,c as r,j as v,F as n,b as d,t as m,h as k,k as c,l as I,a as s,u as T,ax as z,d as j}from"../app.94992fdf.js";const V={};function $(b,l){const t=u("el-scrollbar");return a(),S(t,{height:"400px"},{default:_(()=>[(a(),r(n,null,v(20,e=>d("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))]),_:1})}var C=f(V,[["render",$],["__scopeId","data-v-c89b7d76"]]),A=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const M={},B={class:"scrollbar-flex-content"};function P(b,l){const t=u("el-scrollbar");return a(),S(t,null,{default:_(()=>[d("div",B,[(a(),r(n,null,v(50,e=>d("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))])]),_:1})}var R=f(M,[["render",P],["__scopeId","data-v-7b938c1c"]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const w=k({__name:"manual-scroll",setup(b){const l=c(0),t=c(0),e=c(),g=c();I(()=>{l.value=e.value.clientHeight-380});const y=o=>{g.value.setScrollTop(o)},i=({scrollTop:o})=>{t.value=o},x=o=>`${o} px`;return(o,h)=>{const O=u("el-slider");return a(),r(n,null,[s(T(z),{ref_key:"scrollbarRef",ref:g,height:"400px",always:"",onScroll:i},{default:_(()=>[d("div",{ref_key:"innerRef",ref:e},[(a(),r(n,null,v(20,p=>d("p",{key:p,class:"scrollbar-demo-item"},m(p),1)),64))],512)]),_:1},512),s(O,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=p=>t.value=p),max:l.value,"format-tooltip":x,onInput:y},null,8,["modelValue","max"])],64)}}});var D=f(w,[["__scopeId","data-v-67ca7c1f"]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const H=j("Add Item"),N=j("Delete Item"),U=k({__name:"max-height",setup(b){const l=c(3),t=()=>{l.value++},e=()=>{l.value>0&&l.value--};return(g,y)=>{const i=u("el-button"),x=u("el-scrollbar");return a(),r(n,null,[s(i,{onClick:t},{default:_(()=>[H]),_:1}),s(i,{onClick:e},{default:_(()=>[N]),_:1}),s(x,{"max-height":"400px"},{default:_(()=>[(a(!0),r(n,null,v(l.value,o=>(a(),r("p",{key:o,class:"scrollbar-demo-item"},m(o),1))),128))]),_:1})],64)}}});var E=f(U,[["__scopeId","data-v-573bb73b"]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{A as _,L as a,q as b,G as c};
