import{f as y,o as s,c as r,q as S,s as w,b as e,h as v,k as b,r as i,g as p,w as m,j as h,F as x,t as c,z as f}from"../app.94992fdf.js";const $={},j=a=>(S("data-v-a65b4710"),a=a(),w(),a),k={class:"demo-border"},V=j(()=>e("tbody",null,[e("tr",null,[e("td",{class:"text"},"Name"),e("td",{class:"text"},"Thickness"),e("td",{class:"line"},"Demo")]),e("tr",null,[e("td",{class:"text"},"Solid"),e("td",{class:"text"},"1px"),e("td",{class:"line"},[e("div")])]),e("tr",null,[e("td",{class:"text"},"Dashed"),e("td",{class:"text"},"2px"),e("td",{class:"line"},[e("div",{class:"dashed"})])])],-1)),C=[V];function O(a,n){return s(),r("table",k,C)}var R=y($,[["render",O],["__scopeId","data-v-a65b4710"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const z={class:"title"},B={class:"value"},I=v({__name:"radius",setup(a){const n=b([{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}]),_=o=>((t,l)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${l}`))("border-radius",o);return(o,u)=>{const t=i("el-col"),l=i("el-row");return s(),p(l,{gutter:12,class:"demo-radius"},{default:m(()=>[(s(!0),r(x,null,h(n.value,(d,g)=>(s(),p(t,{key:g,span:6,xs:{span:12}},{default:m(()=>[e("div",z,c(d.name),1),e("div",B,[e("code",null,"border-radius: "+c(_(d.type)||"0px"),1)]),e("div",{class:"radius",style:f({borderRadius:d.type?`var(--el-border-radius-${d.type})`:""})},null,4)]),_:2},1024))),128))]),_:1})}}});var D=y(I,[["__scopeId","data-v-48a70b64"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const L={class:"flex justify-between items-center flex-wrap"},N={p:"y-4",class:"demo-shadow-text",text:"sm"},P={text:"xs"},T=v({__name:"shadow",setup(a){const n=b([{name:"Basic Shadow",type:""},{name:"Light Shadow",type:"light"},{name:"Lighter Shadow",type:"lighter"},{name:"Dark Shadow",type:"dark"}]),_=o=>`--el-box-shadow${o?"-":""}${o}`;return(o,u)=>(s(),r("div",L,[(s(!0),r(x,null,h(n.value,(t,l)=>(s(),r("div",{key:l,class:"flex flex-col justify-center items-center",m:"auto",w:"46"},[e("div",{class:"inline-flex",h:"30",w:"30",m:"2",style:f({boxShadow:`var(${_(t.type)})`})},null,4),e("span",N,c(t.name),1),e("code",P,c(_(t.type)),1)]))),128))]))}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{E as _,F as a,G as b};
