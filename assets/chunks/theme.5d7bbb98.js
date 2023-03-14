import{f as k,r as i,o as l,c as _,a as u,w as t,F as c,d as a,h,k as y,j as d,g as r,aV as j,u as O,a8 as z,aW as C,t as f,b as g}from"../app.94992fdf.js";const V={},P=a("Tag 1"),M=a("Tag 2"),B=a("Tag 3"),I=a("Tag 4"),D=a("Tag 5");function L(b,s){const n=i("el-tag");return l(),_(c,null,[u(n,null,{default:t(()=>[P]),_:1}),u(n,{class:"ml-2",type:"success"},{default:t(()=>[M]),_:1}),u(n,{class:"ml-2",type:"info"},{default:t(()=>[B]),_:1}),u(n,{class:"ml-2",type:"warning"},{default:t(()=>[I]),_:1}),u(n,{class:"ml-2",type:"danger"},{default:t(()=>[D]),_:1})],64)}var N=k(V,[["render",L]]),fe=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const K=a("Checked"),E=a("Toggle me"),F=h({__name:"checkable",setup(b){const s=y(!1),n=p=>{s.value=p};return(p,o)=>{const e=i("el-check-tag");return l(),_("div",null,[u(e,{checked:"",style:{"margin-right":"8px"}},{default:t(()=>[K]),_:1}),u(e,{checked:s.value,onChange:n},{default:t(()=>[E]),_:1},8,["checked"])])}}});var ge=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const R=a(" + New Tag "),U=h({__name:"editable",setup(b){const s=y(""),n=y(["Tag 1","Tag 2","Tag 3"]),p=y(!1),o=y(),e=x=>{n.value.splice(n.value.indexOf(x),1)},$=()=>{p.value=!0,C(()=>{o.value.input.focus()})},v=()=>{s.value&&n.value.push(s.value),p.value=!1,s.value=""};return(x,T)=>{const w=i("el-tag"),S=i("el-button");return l(),_(c,null,[(l(!0),_(c,null,d(n.value,m=>(l(),r(w,{key:m,class:"mx-1",closable:"","disable-transitions":!1,onClose:pe=>e(m)},{default:t(()=>[a(f(m),1)]),_:2},1032,["onClose"]))),128)),p.value?(l(),r(O(z),{key:0,ref_key:"InputRef",ref:o,modelValue:s.value,"onUpdate:modelValue":T[0]||(T[0]=m=>s.value=m),class:"ml-1 w-20",size:"small",onKeyup:j(v,["enter"]),onBlur:v},null,8,["modelValue","onKeyup"])):(l(),r(S,{key:1,class:"button-new-tag ml-1",size:"small",onClick:$},{default:t(()=>[R]),_:1}))],64)}}});var ie=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const W=h({__name:"removable",setup(b){const s=y([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]);return(n,p)=>{const o=i("el-tag");return l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.name,class:"mx-1",closable:"",type:e.type},{default:t(()=>[a(f(e.name),1)]),_:2},1032,["type"]))),128)}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const q={class:"flex flex-wrap gap-2 my-2"},A={class:"flex flex-wrap gap-2"},G={class:"flex flex-wrap gap-2 my-2"},H=h({__name:"rounded",setup(b){const s=y([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(n,p)=>{const o=i("el-tag");return l(),_(c,null,[g("div",q,[(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,type:e.type,class:"mx-1",effect:"dark",round:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))]),g("div",A,[(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,type:e.type,class:"mx-1",effect:"light",round:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))]),g("div",G,[(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,type:e.type,class:"mx-1",effect:"plain",round:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var be=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const J={},Q=a("Large"),X=a("Default"),Y=a("Small"),Z=a("Large"),ee=a("Default"),le=a("Small");function te(b,s){const n=i("el-tag"),p=i("el-row");return l(),_(c,null,[u(p,null,{default:t(()=>[u(n,{class:"mx-1",size:"large"},{default:t(()=>[Q]),_:1}),u(n,{class:"mx-1"},{default:t(()=>[X]),_:1}),u(n,{class:"mx-1",size:"small"},{default:t(()=>[Y]),_:1})]),_:1}),u(p,{class:"mt-4"},{default:t(()=>[u(n,{class:"mx-1",size:"large",closable:""},{default:t(()=>[Z]),_:1}),u(n,{class:"mx-1",closable:""},{default:t(()=>[ee]),_:1}),u(n,{class:"mx-1",size:"small",closable:""},{default:t(()=>[le]),_:1})]),_:1})],64)}var ae=k(J,[["render",te]]),me=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));const se={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},ne=g("span",{class:"tag-group__title m-1 line-height-2"},"Dark",-1),_e={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},oe=g("span",{class:"tag-group__title m-1"},"Light",-1),ce={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},ue=g("span",{class:"tag-group__title m-1"},"Plain",-1),re=h({__name:"theme",setup(b){const s=y([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(n,p)=>{const o=i("el-tag");return l(),_(c,null,[g("div",se,[ne,(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,type:e.type,class:"mx-1",effect:"dark"},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128)),(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,type:e.type,class:"mx-1",effect:"dark",closable:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))]),g("div",_e,[oe,(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,class:"mx-1",type:e.type,effect:"light"},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128)),(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,class:"mx-1",type:e.type,effect:"light",closable:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))]),g("div",ce,[ue,(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,class:"mx-1",type:e.type,effect:"plain"},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128)),(l(!0),_(c,null,d(s.value,e=>(l(),r(o,{key:e.label,class:"mx-1",type:e.type,effect:"plain",closable:""},{default:t(()=>[a(f(e.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var he=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{fe as _,ge as a,ie as b,ye as c,be as d,me as e,he as f};
