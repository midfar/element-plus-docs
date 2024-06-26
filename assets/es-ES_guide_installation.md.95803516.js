import{o,c as l,b as s,a as t,e,d as n,_ as p}from"./app.9c6c24e4.js";const c=e('<h1 id="instalacion" tabindex="-1">Instalaci\xF3n <a class="header-anchor vp-link" href="#instalacion" aria-hidden="true">#</a></h1><h2 id="compatibility" tabindex="-1">Compatibility <span class="vp-tag">2.5.0</span> <a class="header-anchor vp-link" href="#compatibility" aria-hidden="true">#</a></h2><p>Element Plus can run on browsers that support last 2 versions.</p>',3),r=n("If you really need to support outdated browsers, please add "),i={href:"https://babeljs.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},u=n("Babel"),d=n(" and Polyfill yourself."),_=e('<p>Since Vue 3 no longer supports IE11, Element Plus does not support IE either.</p><div class="vp-table"><table><thead><tr><th>version</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""> <br> Chrome</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""> <br> Edge</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""> <br> Firefox</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""> <br> Safari</th></tr></thead><tbody><tr><td>&lt; 2.5.0</td><td>Chrome \u2265 64</td><td>Edge \u2265 79</td><td>Firefox \u2265 78</td><td>Safari \u2265 12</td></tr><tr><td>2.5.0 +</td><td>Chrome \u2265 85</td><td>Edge \u2265 85</td><td>Firefox \u2265 79</td><td>Safari \u2265 14.1</td></tr></tbody></table></div><h3 id="version" tabindex="-1">Versi\xF3n <a class="header-anchor vp-link" href="#version" aria-hidden="true">#</a></h3><p>ElementPlus se encuentra actualmente en una iteraci\xF3n de desarrollo r\xE1pido:</p>',4),k={href:"https://www.npmjs.org/package/element-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h=s("img",{src:"https://img.shields.io/npm/v/element-plus.svg?style=flat-square",alt:""},null,-1),m=s("h2",{id:"gestor-de-paquetes",tabindex:"-1"},[n("Gestor de paquetes "),s("a",{class:"header-anchor vp-link",href:"#gestor-de-paquetes","aria-hidden":"true"},"#")],-1),g=n("Se recomienda el uso del administrador de paquetes (NPM, "),v={href:"https://classic.yarnpkg.com/lang/en/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f=n("Yarn"),b=n(", "),q={href:"https://pnpm.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y=n("pnpm"),T=n(") para instalar Element Plus"),P=n(", pero tambi\xE9n puede utilizar otros gestores como "),S={href:"https://vitejs.dev",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=n("Vite"),E=n(" y "),I={href:"https://webpack.js.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},V=n("webpack"),j=n("."),C=e(`<div class="language-shell"><pre><code><span class="token comment"># Elige un gestor de paquetes que te guste.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus
</code></pre></div>`,1),w=n("Si su entorno de red no es bueno, se recomienda utilizar un registro de r\xE9plica como "),A={href:"https://github.com/cnpm/cnpm",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},N=n("cnpm"),D=n(" o "),z={href:"https://registry.npmmirror.com/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},M=n("Alibaba"),W=n("."),Y=s("h2",{id:"importar-en-el-navegador",tabindex:"-1"},[n("Importar en el navegador "),s("a",{class:"header-anchor vp-link",href:"#importar-en-el-navegador","aria-hidden":"true"},"#")],-1),R=s("p",null,[n("Puede importar Element Plus directamente a las etiquetas HTML del navegador y utilizar la variable global "),s("code",null,"ElementPlus"),n(".")],-1),B=n("Seg\xFAn los diferentes proveedores de "),H=s("strong",null,"CDN",-1),F=n(" hay diferentes URLs de importaci\xF3n. Aqu\xED usamos "),U={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},$=n("unpkg"),G=n(" y "),L={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},O=n("jsDelivr"),J=n(" como ejemplo. Tambi\xE9n puede utilizar otros proveedores CDN."),K=e(`<h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>::: consejo</p>`,5),Q=n("Recomendamos usar CDN para importar Element Plus. Emple\xE1ndolo podr\xE1 bloquear la versi\xF3n en la direcci\xF3n del enlace, y no verse afectado por actualizaciones incompatibles cuando Element Plus se actualice en el futuro. Por favor, consulte "),X={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Z=n("unpkg.com"),nn=n(" para ver c\xF3mo fijar una determinada versi\xF3n."),sn=s("p",null,":::",-1),an=s("h2",{id:"hello-world",tabindex:"-1"},[n("Hello World "),s("a",{class:"header-anchor vp-link",href:"#hello-world","aria-hidden":"true"},"#")],-1),tn=n("Con CDN, podemos usar Element Plus f\xE1cilmente para escribir una p\xE1gina de Hola Mundo. "),en={href:"https://codepen.io/iamkun/pen/YzWMaVr",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},on=n("Online Demo"),ln=s("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),pn=s("p",null,[n("Si se ha instalado a trav\xE9s del gestor de paquetes y quiere usarlo con una herramienta de empaquetado, por favor lea la siguiente secci\xF3n: "),s("a",{href:"/en-US/guide/quickstart.html",class:"vp-link"},"Inicio r\xE1pido"),n(".")],-1),kn='{"title":"Instalaci\xF3n","description":"","frontmatter":{"title":"Instalaci\xF3n","lang":"es-ES"},"headers":[{"level":2,"title":"Compatibility ^(2.5.0)","slug":"compatibility"},{"level":3,"title":"Versi\xF3n","slug":"version"},{"level":2,"title":"Gestor de paquetes","slug":"gestor-de-paquetes"},{"level":2,"title":"Importar en el navegador","slug":"importar-en-el-navegador"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"es-ES/guide/installation.md","lastUpdated":null}',cn={},hn=Object.assign(cn,{__name:"installation",setup(rn){return(un,dn)=>{const a=p;return o(),l("div",null,[c,s("p",null,[r,s("a",i,[u,t(a,{class:"link-icon"})]),d]),_,s("p",null,[s("a",k,[h,t(a,{class:"link-icon"})])]),m,s("p",null,[s("strong",null,[g,s("a",v,[f,t(a,{class:"link-icon"})]),b,s("a",q,[y,t(a,{class:"link-icon"})]),T]),P,s("a",S,[x,t(a,{class:"link-icon"})]),E,s("a",I,[V,t(a,{class:"link-icon"})]),j]),C,s("p",null,[w,s("a",A,[N,t(a,{class:"link-icon"})]),D,s("a",z,[M,t(a,{class:"link-icon"})]),W]),Y,R,s("p",null,[B,H,F,s("a",U,[$,t(a,{class:"link-icon"})]),G,s("a",L,[O,t(a,{class:"link-icon"})]),J]),K,s("p",null,[Q,s("a",X,[Z,t(a,{class:"link-icon"})]),nn]),sn,an,s("p",null,[tn,s("a",en,[on,t(a,{class:"link-icon"})])]),ln,pn])}}});export{kn as __pageData,hn as default};
