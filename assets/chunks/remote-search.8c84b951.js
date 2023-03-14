import{h as y,k as b,r,o,g as h,w as d,c as _,j as c,F as i,a as s,b as f,t as S,l as k}from"../app.94992fdf.js";const j=y({__name:"allow-create",setup(V){const a=b([]),n=[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"Choose tags for your article"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const x=y({__name:"basic-usage",setup(V){const a=b(""),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),_(i,null,[s(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),class:"m-2",placeholder:"Select",size:"large"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),s(p,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),class:"m-2",placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),s(p,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value=e),class:"m-2",placeholder:"Select",size:"small"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const w=y({__name:"clearable",setup(V){const a=b(""),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),clearable:"",placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const M={style:{float:"left"}},z={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},C=y({__name:"custom-template",setup(V){const a=b(""),n=[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},{default:d(()=>[f("span",M,S(e.label),1),f("span",z,S(e.value),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const $=y({__name:"disabled-option",setup(V){const a=b(""),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2",disabled:!0},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])}}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const U=y({__name:"disabled",setup(V){const a=b(""),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),disabled:"",placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const T=y({__name:"filterable",setup(V){const a=b(""),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(m,l)=>{const u=r("el-option"),p=r("el-select");return o(),h(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),filterable:"",placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,e=>s(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const P=y({__name:"grouping",setup(V){const a=b(""),n=[{label:"Popular cities",options:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"City name",options:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}];return(m,l)=>{const u=r("el-option"),p=r("el-option-group"),e=r("el-select");return o(),h(e,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=v=>a.value=v),placeholder:"Select"},{default:d(()=>[(o(),_(i,null,c(n,v=>s(p,{key:v.label,label:v.label},{default:d(()=>[(o(!0),_(i,null,c(v.options,O=>(o(),h(u,{key:O.value,label:O.label,value:O.value},null,8,["label","value"]))),128))]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const N={class:"m-4"},B=f("p",null,"default",-1),D={class:"m-4"},L=f("p",null,"use collapse-tags",-1),G={class:"m-4"},I=f("p",null,"use collapse-tags-tooltip",-1),A={class:"m-4"},H=f("p",null,"use max-collapse-tags",-1),W=y({__name:"multiple",setup(V){const a=b([]),n=b([]),m=b([]),l=b([]),u=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(p,e)=>{const v=r("el-option"),O=r("el-select");return o(),_(i,null,[f("div",N,[B,s(O,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),multiple:"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),_(i,null,c(u,t=>s(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),f("div",D,[L,s(O,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),multiple:"","collapse-tags":"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),_(i,null,c(u,t=>s(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),f("div",G,[I,s(O,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=t=>m.value=t),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),_(i,null,c(u,t=>s(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),f("div",A,[H,s(O,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value=t),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),_(i,null,c(u,t=>s(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])],64)}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const F={class:"flex flex-wrap"},J={class:"m-4"},K=f("p",null,"default",-1),E={class:"m-4"},R=f("p",null,"use remote-show-suffix",-1),Y=y({__name:"remote-search",setup(V){const a=b([]),n=b([]),m=b([]),l=b(!1);k(()=>{a.value=p.map(e=>({value:`value:${e}`,label:`label:${e}`}))});const u=e=>{e?(l.value=!0,setTimeout(()=>{l.value=!1,n.value=a.value.filter(v=>v.label.toLowerCase().includes(e.toLowerCase()))},200)):n.value=[]},p=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(e,v)=>{const O=r("el-option"),t=r("el-select");return o(),_("div",F,[f("div",J,[K,s(t,{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=g=>m.value=g),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":u,loading:l.value},{default:d(()=>[(o(!0),_(i,null,c(n.value,g=>(o(),h(O,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),f("div",E,[R,s(t,{modelValue:m.value,"onUpdate:modelValue":v[1]||(v[1]=g=>m.value=g),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-show-suffix":"","remote-method":u,loading:l.value},{default:d(()=>[(o(!0),_(i,null,c(n.value,g=>(o(),h(O,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])])])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{X as _,Z as a,q as b,ee as c,le as d,ae as e,oe as f,te as g,ne as h,ue as i};