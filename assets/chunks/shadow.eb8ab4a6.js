import{_ as b,o as a,c as d,p as w,q as S,b as e,g as v,j as x,r as u,f as p,w as m,i as h,F as y,t as c,y as g}from"../app.999a74ce.js";const $={},j=o=>(w("data-v-a65b4710"),o=o(),S(),o),k={class:"demo-border"},V=j(()=>e("tbody",null,[e("tr",null,[e("td",{class:"text"},"Name"),e("td",{class:"text"},"Thickness"),e("td",{class:"line"},"Demo")]),e("tr",null,[e("td",{class:"text"},"Solid"),e("td",{class:"text"},"1px"),e("td",{class:"line"},[e("div")])]),e("tr",null,[e("td",{class:"text"},"Dashed"),e("td",{class:"text"},"2px"),e("td",{class:"line"},[e("div",{class:"dashed"})])])],-1)),C=[V];function z(o,l){return a(),d("table",k,C)}var O=b($,[["render",z],["__scopeId","data-v-a65b4710"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const R={class:"title"},B={class:"value"},I=v({__name:"radius",setup(o){const l=x([{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}]),n=r=>((t,s)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${s}`))("border-radius",r);return(r,i)=>{const t=u("el-col"),s=u("el-row");return a(),p(s,{gutter:12,class:"demo-radius"},{default:m(()=>[(a(!0),d(y,null,h(l.value,(_,f)=>(a(),p(t,{key:f,span:6,xs:{span:12}},{default:m(()=>[e("div",R,c(_.name),1),e("div",B,[e("code",null,"border-radius: "+c(n(_.type)||"0px"),1)]),e("div",{class:"radius",style:g({borderRadius:_.type?`var(--el-border-radius-${_.type})`:""})},null,4)]),_:2},1024))),128))]),_:1})}}});var D=b(I,[["__scopeId","data-v-48a70b64"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const L={class:"flex justify-between items-center flex-wrap"},N={p:"y-4",class:"demo-shadow-text",text:"sm"},P={text:"xs"},T=v({__name:"shadow",setup(o){const l=x([{name:"Basic Shadow",type:""},{name:"Light Shadow",type:"light"},{name:"Lighter Shadow",type:"lighter"},{name:"Dark Shadow",type:"dark"}]),n=r=>`--el-box-shadow${r?"-":""}${r}`;return(r,i)=>(a(),d("div",L,[(a(!0),d(y,null,h(l.value,(t,s)=>(a(),d("div",{key:s,class:"flex flex-col justify-center items-center",m:"auto",w:"46"},[e("div",{class:"inline-flex",h:"30",w:"30",m:"2",style:g({boxShadow:`var(${n(t.type)})`})},null,4),e("span",N,c(t.name),1),e("code",P,c(n(t.type)),1)]))),128))]))}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{E as _,F as a,G as b};
