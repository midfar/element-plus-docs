import{g as _,j as u,r as c,o as d,c as f,b as v,a as p,u as i,_ as V,F as y,f as b,w as O,t as h}from"../app.999a74ce.js";const j={style:{flex:"auto"}},w=v("p",{style:{"margin-top":"20px","margin-bottom":"8px"}}," set reserve-keyword false ",-1),P=_({__name:"allow-create",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=u(""),n=u([]),e=Array.from({length:1e3}).map((t,l)=>({value:`Option ${l+1}`,label:`${s[l%10]}${l}`}));return(t,l)=>{const r=c("el-select-v2");return d(),f("div",j,[v("div",null,[p(r,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=g=>a.value=g),options:i(e),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:""},null,8,["modelValue","options"]),p(r,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=g=>o.value=g),options:i(e),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},"allow-create":"",filterable:"",clearable:""},null,8,["modelValue","options"])]),v("div",null,[w,p(r,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=g=>n.value=g),options:i(e),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},"allow-create":"",filterable:"",multiple:"",clearable:"","reserve-keyword":!1},null,8,["modelValue","options"])])])}}});var E=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const x=_({__name:"basic-usage",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u(""),o=Array.from({length:1e3}).map((n,e)=>({value:`Option ${e+1}`,label:`${s[e%10]}${e}`}));return(n,e)=>{const t=c("el-select-v2");return d(),f(y,null,[p(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),options:i(o),placeholder:"Please select",size:"large"},null,8,["modelValue","options"]),p(t,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),options:i(o),placeholder:"Please select"},null,8,["modelValue","options"]),p(t,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),options:i(o),placeholder:"Please select",size:"small"},null,8,["modelValue","options"])],64)}}});var S=V(x,[["__scopeId","data-v-534b9e34"]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const M=_({__name:"clearable",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=u(""),n=Array.from({length:1e3}).map((e,t)=>({value:`Option ${t+1}`,label:`${s[t%10]}${t}`}));return(e,t)=>{const l=c("el-select-v2");return d(),f(y,null,[p(l,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),options:i(n),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:"",clearable:""},null,8,["modelValue","options"]),p(l,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value=r),options:i(n),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},clearable:""},null,8,["modelValue","options"])],64)}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const U={style:{"margin-right":"8px"}},k={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}},z=_({__name:"customized-option",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=Array.from({length:1e3}).map((n,e)=>({value:`Option ${e+1}`,label:`${s[e%10]}${e}`}));return(n,e)=>{const t=c("el-select-v2");return d(),b(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),filterable:"",options:i(o),placeholder:"Please select",style:{width:"240px"},multiple:""},{default:O(({item:l})=>[v("span",U,h(l.label),1),v("span",k,h(l.value),1)]),_:1},8,["modelValue","options"])}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const A=_({__name:"disabled",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=Array.from({length:1e3}).map((n,e)=>({value:`Option${e+1}`,label:`${s[e%10]}${e}`,disabled:e%10===0}));return(n,e)=>{const t=c("el-select-v2");return d(),f(y,null,[p(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),filterable:"",options:i(o),placeholder:"Please select",style:{width:"240px","margin-right":"16px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"]),p(t,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),disabled:"",filterable:"",options:i(o),placeholder:"Please select",style:{width:"240px","vertical-align":"middle"},multiple:""},null,8,["modelValue","options"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const T=_({__name:"filterable",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=Array.from({length:1e3}).map((n,e)=>({value:`Option${e+1}`,label:`${s[e%10]}${e}`}));return(n,e)=>{const t=c("el-select-v2");return d(),b(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),filterable:"",options:i(o),placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const C=_({__name:"grouping",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=Array.from({length:10}).map((n,e)=>{const t=e+1;return{value:`Group ${t}`,label:`Group ${t}`,options:Array.from({length:10}).map((l,r)=>({value:`Option ${r+1+10*t}`,label:`${s[r%10]}${r+1+10*t}`}))}});return(n,e)=>{const t=c("el-select-v2");return d(),b(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),filterable:"",options:i(o),placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const N={style:{display:"inline-block"}},I=v("p",{style:{margin:"10px"}},"use collapse-tags",-1),K={style:{display:"inline-block","margin-left":"20px"}},B=v("p",{style:{margin:"10px"}},"use collapse-tags-tooltip",-1),D=_({__name:"hide-extra-tags",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=u([]),n=Array.from({length:1e3}).map((e,t)=>({value:`Option ${t+1}`,label:`${s[t%10]}${t}`}));return(e,t)=>{const l=c("el-select-v2");return d(),f(y,null,[v("div",N,[I,p(l,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),options:i(n),placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":""},null,8,["modelValue","options"])]),v("div",K,[B,p(l,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value=r),options:i(n),placeholder:"Please select",style:{width:"240px"},multiple:"","collapse-tags":"","collapse-tags-tooltip":""},null,8,["modelValue","options"])])],64)}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const W=_({__name:"multiple",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u([]),o=u(Array.from({length:1e3}).map((n,e)=>({value:`Option ${e+1}`,label:`${s[e%10]}${e}`})));return(n,e)=>{const t=c("el-select-v2");return d(),b(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),options:o.value,placeholder:"Please select",style:{width:"240px"},multiple:""},null,8,["modelValue","options"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const F=_({__name:"remote-search",setup(m){const a=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map(l=>({value:`value:${l}`,label:`label:${l}`})),o=u([]),n=u([]),e=u(!1),t=l=>{l!==""?(e.value=!0,setTimeout(()=>{e.value=!1,n.value=a.filter(r=>r.label.toLowerCase().includes(l.toLowerCase()))},200)):n.value=[]};return(l,r)=>{const g=c("el-select-v2");return d(),b(g,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=$=>o.value=$),style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":t,clearable:"",options:n.value,loading:e.value,placeholder:"Please enter a keyword"},null,8,["modelValue","options","loading"])}}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const G=_({__name:"use-valueKey",setup(m){const s=["a","b","c","d","e","f","g","h","i","j"],a=u(""),o=Array.from({length:1e3}).map((n,e)=>({value:{name:`Option ${e+1}`,test:`test ${e%3}`},label:`${s[e%10]}${e}`}));return(n,e)=>{const t=c("el-select-v2");return d(),b(t,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),options:i(o),placeholder:"Please select","value-key":"value.name"},null,8,["modelValue","options"])}}});var L=V(G,[["__scopeId","data-v-acfc3660"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{E as _,J as a,R as b,Y as c,Q as d,X as e,Z as f,q as g,ee as h,le as i,te as j};
