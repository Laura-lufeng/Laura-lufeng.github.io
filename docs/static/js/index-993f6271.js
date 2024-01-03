import"./vue-a2daf982.js";import{E as ae,a as re,b as le,c as ce,d as W,e as ie,f as _e,g as ue,h as de,i as T}from"./element-plus-e68fab71.js";import{s as pe,m as me,d as ve,E as he}from"./@element-plus-736a908b.js";import{C as g,r as h,Z as B,o as i,F as S,G as v,a as o,X as p,L as d,c as u,a7 as I,M as y,i as q,u as _,A as fe,J as L,W as H,a8 as A,a9 as C,h as ge,O as be,aa as ye,ab as $e,S as Y,D as N,ac as U,x as we,f as xe,w as ke,H as Se,ad as Ie,ae as Ae}from"./@vue-29cfe91d.js";import{u as E,a as Ce,c as Le,b as Ee}from"./vue-router-65f8064a.js";import{u as Pe,a as je,b as De}from"./@vueuse-4fba4516.js";import{H as G}from"./highlight.js-c8d2d5c0.js";import"./@ctrl-eb0b847c.js";import"./lodash-es-be1ea455.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const Te={style:{"text-align":"center",height:"47px"}},Be={style:{"font-size":"1.4rem","font-weight":"600"}},Re={style:{"font-size":"0.95rem","font-weight":"700","user-select":"none"}},Ue=g({__name:"sideBar",props:{title:String,openDrawer:Boolean,sideBarItem:Array},emits:["drawerClosed"],setup(e,{emit:t}){const s=h("ttb"),l=h("18%"),n=()=>{t("drawerClosed")},a=h("Home");return(c,r)=>{const b=B("router-link"),m=ae,w=re,k=le;return i(),S(k,{modelValue:e.openDrawer,"onUpdate:modelValue":r[1]||(r[1]=f=>q(openDrawer)?openDrawer.value=f:null),size:l.value,direction:s.value,"lock-scroll":!1,"modal-class":"drawer_modal","custom-class":"drawer_body","show-close":!1,onClose:r[2]||(r[2]=f=>n())},{header:v(()=>[o("div",Te,[o("span",Be,p(e.title),1)])]),default:v(()=>[d(w,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=f=>a.value=f)},{default:v(()=>[(i(!0),u(y,null,I(e.sideBarItem,f=>(i(),S(m,{key:f.name,name:f.name},{label:v(()=>[(i(),S(b,{key:f.name,to:f.url},{default:v(()=>[o("span",Re,p(f.name),1)]),_:2},1032,["to"]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue","size","direction"])}}}),He=g({__name:"themeChanger",setup(e){const t=Pe(),s=je(t);let l=h("dark");return(n,a)=>{const c=ce;return i(),S(c,{modelValue:_(l),"onUpdate:modelValue":a[0]||(a[0]=r=>q(l)?l.value=r:l=r),onClick:a[1]||(a[1]=r=>_(s)()),size:"large","active-icon":_(pe),"inactive-icon":_(me),"inline-prompt":""},null,8,["modelValue","active-icon","inactive-icon"])}}}),J=e=>(A("data-v-06926a8b"),e=e(),C(),e),Me=J(()=>o("span",null,"Laura's Blog",-1)),Ne=J(()=>o("div",{style:{"min-height":"64px","border-radius":"0 0 24px 24px"}},null,-1)),Ve=g({__name:"index",props:{pageScrolled:Boolean},setup(e){const t=E(),s=h([{name:"Home",url:"/"},{name:"Posts",url:"/posts"},{name:"Projects",url:"/projects"},{name:"About",url:"/about"}]),l=fe(()=>t.currentRoute.value.path),n=h(!1),a=h("Lee's Blog");return(c,r)=>{const b=W,m=ie,w=B("router-link"),k=_e;return i(),u(y,null,[o("div",{class:L(["backboard theme-color-changer",e.pageScrolled?"nav-shadow":""])},[d(k,{style:{width:"100%"},justify:"space-between"},{default:v(()=>[d(m,{span:6,class:"menu-btn nav-item"},{default:v(()=>[d(b,{style:{"margin-left":"20px"},size:"small",type:"primary",plain:"",round:"",icon:_(ve),onClick:r[0]||(r[0]=f=>n.value=!0)},null,8,["icon"])]),_:1}),d(Ue,{openDrawer:n.value,title:a.value,sideBarItem:s.value,onDrawerClosed:r[1]||(r[1]=f=>n.value=!1)},null,8,["openDrawer","title","sideBarItem"]),d(m,{span:6,class:"nav-item"},{default:v(()=>[d(w,{to:"/",class:"theme-color-changer"},{default:v(()=>[Me]),_:1})]),_:1}),d(m,{span:12,class:"nav-link"},{default:v(()=>[(i(!0),u(y,null,I(s.value,(f,ne)=>(i(),S(w,{key:ne,to:_(l)===f.url?"":f.url,class:L([_(l)===f.url?"nav-active":"","link-item theme-color-changer"])},{default:v(()=>[H(p(f.name),1)]),_:2},1032,["to","class"]))),128))]),_:1}),d(m,{span:6,class:"nav-item",style:{"flex-direction":"row-reverse"}},{default:v(()=>[d(He,{style:{"margin-right":"20px"}})]),_:1})]),_:1})],2),Ne],64)}}});const $=(e,t)=>{const s=e.__vccOpts||e;for(const[l,n]of t)s[l]=n;return s},Fe=$(Ve,[["__scopeId","data-v-06926a8b"]]),Oe="Laura Feng",ze="Think Big | Start Small | Learn Fast",We="A Little Data Analyst",qe="https://www.linkedin.com/in/lauralufeng/",Ye="Laura's Blog",Ge="2024",P={Email:"mailto:laura_lufeng@outlook.com"},x={name:Oe,motto:ze,description:We,link:qe,Title:Ye,blogStartYear:Ge,contact:P},X=e=>(A("data-v-8b168688"),e=e(),C(),e),Je={class:"footer"},Xe=X(()=>o("br",null,null,-1)),Ke={key:0},Ze={key:1},Qe=X(()=>o("a",{href:"https://www.linkedin.com/in/lauralufeng/",target:"_blank"},"Laura",-1)),et=H(". "),tt=g({__name:"Footer",setup(e){const t=new Date().getFullYear();return(s,l)=>(i(),u("div",Je,[o("p",null,p(_(x).Title),1),o("p",null,[o("i",null,p(_(x).motto),1)]),Xe,_(t)===Number(_(x).blogStartYear)?(i(),u("span",Ke," \xA9 "+p(_(t))+" "+p(_(x).name)+".\xA0 Powered by ",1)):(i(),u("span",Ze," \xA9 "+p(_(x).blogStartYear)+" - "+p(_(t))+" "+p(_(x).name)+".\xA0 Powered by ",1)),Qe,et]))}});const ot=$(tt,[["__scopeId","data-v-8b168688"]]),st=e=>(A("data-v-23398c35"),e=e(),C(),e),nt={class:"container"},at={class:"main"},rt=st(()=>o("h1",null,"Loading...",-1)),lt=g({__name:"App",setup(e){const t=E(),s=De("redirect","");ge(async()=>{s.value&&(await t.push(s.value),s.value="")});const l=document.documentElement.clientHeight-64;let n=h(!1),a=h(0);be("scrollTop",a);function c({scrollTop:r}){n.value=!!r,a.value=r}return(r,b)=>{const m=B("router-view"),w=ue;return i(),u("div",nt,[d(Fe,{pageScrolled:_(n)},null,8,["pageScrolled"]),d(w,{height:l+"px",onScroll:c},{default:v(()=>[o("div",at,[(i(),S(ye,null,{default:v(()=>[d(m)]),fallback:v(()=>[rt]),_:1}))]),d(ot,{class:"footer"})]),_:1},8,["height"])])}}});const ct=$(lt,[["__scopeId","data-v-23398c35"]]),it={class:"container"},_t={class:"avatar"},ut=["src"],dt=["src"],pt=g({__name:"index",props:{src:String,size:String},setup(e){const t=e;return $e(s=>({"3fe1c424":t.size})),(s,l)=>(i(),u("div",it,[o("span",_t,[o("img",{src:e.src},null,8,ut),o("img",{src:e.src,class:"back"},null,8,dt)])]))}});const mt=$(pt,[["__scopeId","data-v-a39afe22"]]),V=""+new URL("../jpg/avatar-d4252550.jpg",import.meta.url).href,vt={class:"home"},ht={class:"avatar"},ft={class:"user_info"},gt=["href"],bt=g({__name:"Home",setup(e){const t=h("300px");return(s,l)=>(i(),u("div",vt,[o("div",ht,[d(mt,{src:_(V)?_(V):"../assets/avatar.jpg",size:t.value},null,8,["src","size"])]),o("div",ft,[o("h1",null,p(_(x).name),1),o("h4",null,[o("a",{href:_(x).link},p(_(x).description),9,gt)]),o("p",null,p(_(x).motto),1)])]))}});const yt=$(bt,[["__scopeId","data-v-e17bb863"]]),K=""+new URL("../avif/default-js-0e81225e.avif",import.meta.url).href,Z=""+new URL("../png/default-vue-6fafe4ef.png",import.meta.url).href,Q=""+new URL("../jpg/vuex-e0301082.jpg",import.meta.url).href,$t={class:"cover_container"},wt=["src"],xt={class:"post_info"},kt={class:"tags"},St=g({__name:"index",props:{post:null},setup(e){const t=l=>new URL(Object.assign({"../../../posts/assets/default-js.avif":K,"../../../posts/assets/default-vue.png":Z,"../../../posts/assets/vuex.jpg":Q})[`../../../posts/assets/${l}`],self.location).href,s=h("always");return(l,n)=>{const a=de,c=B("router-link");return i(),S(c,{to:`/post/${e.post.name}`,class:"card_container"},{default:v(()=>[d(a,{class:L(["post_card",{move_down:s.value==="never"}]),shadow:s.value,onMouseover:n[0]||(n[0]=r=>s.value="never"),onMouseout:n[1]||(n[1]=r=>s.value="always"),"body-style":{padding:"0px"}},{default:v(()=>[o("div",$t,[o("img",{class:L({scale_up:s.value==="never"}),src:t(e.post.cover)||"../../assets/post/default-vue.png"},null,10,wt)]),o("div",xt,[o("h3",null,p(e.post.title),1),o("span",null,p(e.post.date),1),o("p",null,p(e.post.description),1),o("div",kt,[(i(!0),u(y,null,I(e.post.tags,r=>(i(),u("span",{key:r},p(r),1))),128))])])]),_:1},8,["shadow","class"])]),_:1},8,["to"])}}});const It=$(St,[["__scopeId","data-v-fd252cf8"]]),D=[{title:"\u5982\u4F55\u4F7F\u7528SimilarWeb\u5206\u6790\u7F51\u7AD9\u6570\u636E",tags:["",""],cover:"default-js.avif",description:"\u770B\u5230\u8FD9\u4E2A\u9700\u6C42\uFF0C \u5FEB\u901F\u5B66\u4E60\u5E76\u4F53\u9A8C\u4E00\u4E0BSimilarWeb\u30021.\u6709\u54EA\u4E9B\u529F\u80FD\uFF1F 2.\u5982\u4F55\u4F7F\u7528SimilarWeb\u5206\u6790\u7F51\u7AD9\u6570\u636E 3. \u6211\u7684Dashboard - Gambling/Sports Betting",date:"2024-01-02",name:"Decorators"},{title:"TBA - \u4E2D\u56FD\u6253\u51FB\u975E\u6CD5\u535A\u5F69\u5982\u4F55\u5F71\u54CD\u5168\u7403\u535A\u5F69\u5E02\u573A",tags:["illegal betting","Global Betting"],cover:"default-js.avif",description:"",date:"2023-12-31",name:"String"},{title:"How Organised Crime Operates Illegal Betting,Cyber Scams and Modern Slavery in Southeast Asia - \u62A5\u544A\u603B\u7ED3",tags:["Modern Slavery","Cyber Scams"],cover:"vuex.jpg",description:"",date:"2023-12-31",name:"useStore"}],ee=e=>(A("data-v-c4d69dd5"),e=e(),C(),e),At=ee(()=>o("h1",{style:{"font-size":"200%","text-align":"center"}},"Posts",-1)),Ct=ee(()=>o("p",null," These are my experiences and discoveries in the process of study and practice ",-1)),Lt={class:"fake-card"},Et=g({__name:"Posts",setup(e){const t=h(D.length),s=h(4);return(l,n)=>{const a=T;return i(),u(y,null,[At,Ct,d(a),o("main",null,[(i(!0),u(y,null,I(_(D),c=>(i(),S(It,{post:c,key:c.name},null,8,["post"]))),128)),t.value%s.value>0?(i(!0),u(y,{key:0},I(s.value-t.value%s.value,c=>(i(),u("div",Lt))),256)):Y("",!0)])],64)}}});const Pt=$(Et,[["__scopeId","data-v-c4d69dd5"]]),jt=""+new URL("../png/CPCU-53561dc1.png",import.meta.url).href,Dt=""+new URL("../png/IUA-ac9d0833.png",import.meta.url).href,Tt=""+new URL("../png/default-vue-6fafe4ef.png",import.meta.url).href,Bt=""+new URL("../png/\u5317\u6781\u51B0\u76D6-b91fcbc3.png",import.meta.url).href,Rt=""+new URL("../svg/github-fab00c2d.svg",import.meta.url).href,te=e=>(A("data-v-78278303"),e=e(),C(),e),Ut={class:"container"},Ht={class:"imgContainer"},Mt=["src"],Nt={class:"interactions"},Vt={class:"link"},Ft=["href"],Ot=te(()=>o("img",{src:Rt},null,-1)),zt={class:"text"},Wt=te(()=>o("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",-1)),qt=g({__name:"index",props:{title:String,link:String,img:String},setup(e){const t=e,s=t.title||"My Fantastic Project",l=t.img||"../../assets/project/default.png",n=E();function a(r){n.push(`/post/${r}`)}const c=r=>new URL(Object.assign({"../../../project/assets/CPCU.png":jt,"../../../project/assets/IUA.png":Dt,"../../../project/assets/default-vue.png":Tt,"../../../project/assets/\u5317\u6781\u51B0\u76D6.png":Bt})[`../../../project/assets/${r}`],self.location).href;return(r,b)=>(i(),u("div",Ut,[o("div",Ht,[o("img",{src:c(_(l))},null,8,Mt),o("div",Nt,[o("div",Vt,[o("a",{href:e.link,target:"_blank"},[N(r.$slots,"link-img",{},()=>[Ot],!0)],8,Ft)]),o("div",{class:"title",onClick:b[0]||(b[0]=m=>a(_(s)))},[o("span",null,p(_(s)),1)])])]),o("div",zt,[N(r.$slots,"description",{},()=>[Wt],!0)])]))}});const Yt=$(qt,[["__scopeId","data-v-78278303"]]),F=[{title:"TBA - Visualization for Reinsurance Survey Points - Automated Underwriting",img:"CPCU.png",description:"Peak Exposure\u7684\u4F4D\u7F6E\uFF0C\u9009\u53D6top10\u7684\u4ED3\u5E93\u548C\u697C\u5B87\uFF0C\u8F6C\u6362\u5730\u5740\u4E3A\u8C37\u6B4C\u5730\u56FE\u7ECF\u7EAC\u5EA6\uFF0C\u5408\u5E76\u9700\u8981\u67E5\u52D8\u7684\u4F4D\u70B9\u548C\u7ECF\u7EAC\u5EA6\u5E76\u8F6C\u4E3AXML\uFF0C\u5728google-earth\u4E2D\u663E\u793A",link:""},{title:"TBA - Data for ESG - Extent and melting of the Arctic Ice Cap",img:"\u5317\u6781\u51B0\u76D6.png",description:"\u63CF\u7ED8\u5317\u6781\u51B0\u76D6\u7684\u8FB9\u7F18\uFF0C\u81EA\u52A8\u62A0\u56FE\u5E76\u88C1\u526A\uFF0C\u5F3A\u8C03\u8FB9\u7F18\uFF0C\u5BF9\u5386\u5E74\u6570\u636E\u8FDB\u884C\u53E0\u52A0\u7EC4\u6210\u52A8\u6001\u56FE\uFF0C\u540C\u65F6\u5C55\u793A\u5386\u5E74CO2\u6392\u653E\u603B\u91CF-\u4EE5\u5C55\u793A\u5B83\u4EEC\u7684\u5173\u7CFB",link:""},{title:"Text Mining for Automated Contract",img:"IUA.png",description:"Crawl the external data source of the relevant insurance industry wording research organizations (IUA and LMA)",link:"https://www.iua.co.uk/"}],oe=e=>(A("data-v-8bb64d96"),e=e(),C(),e),Gt=oe(()=>o("h1",{style:{"font-size":"200%","text-align":"center"}},"Projects",-1)),Jt=oe(()=>o("p",null,"Here are some projects that I personally developed",-1)),Xt={class:"fake-card"},Kt=g({__name:"Projects",setup(e){const t=h(F.length),s=h(3);return(l,n)=>{const a=T;return i(),u(y,null,[Gt,Jt,d(a),o("main",null,[(i(!0),u(y,null,I(_(F),c=>(i(),S(Yt,{title:c.title,link:c.link,img:c.img},{description:v(()=>[o("span",null,p(c.description),1)]),_:2},1032,["title","link","img"]))),256)),t.value%s.value>0?(i(!0),u(y,{key:0},I(s.value-t.value%s.value,c=>(i(),u("div",Xt))),256)):Y("",!0)])],64)}}});const Zt=$(Kt,[["__scopeId","data-v-8bb64d96"]]),Qt="modulepreload",eo=function(e,t){return new URL(e,t).href},O={},j=function(t,s,l){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=eo(n,l),n in O)return;O[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":Qt,a||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),a)return new Promise((b,m)=>{r.addEventListener("load",b),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},se=e=>(A("data-v-4fa8a837"),e=e(),C(),e),to=se(()=>o("h1",{style:{"font-size":"200%","text-align":"center"}},"About Me",-1)),oo=se(()=>o("p",null,"Who am I and What am I doing now",-1)),so={class:"about center"},no=["innerHTML"],ao={class:"contact"},ro={class:"grid-3_xs-1_sm-2_md-2 gridContainer"},lo={class:"col"},co=["href"],io={class:"contactItem"},_o=g({__name:"About",async setup(e){let t,s;const{html:l}=([t,s]=U(()=>j(()=>import("./aboutMe-abff0f9a.js"),["aboutMe-abff0f9a.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)),t=await t,s(),t);return(n,a)=>{const c=T;return i(),u(y,null,[to,oo,d(c),o("main",null,[o("div",so,[o("div",{class:"vuepress-markdown-body",innerHTML:_(l)},null,8,no)]),o("div",ao,[o("div",ro,[(i(!0),u(y,null,I(Object.keys(_(P)),r=>(i(),u("div",lo,[o("a",{href:_(P)[r],target:"_blank"},[o("div",io,[o("h3",null,p(r),1),o("p",null,p(_(P)[r]),1)])],8,co)]))),256))])])])],64)}}});const uo=$(_o,[["__scopeId","data-v-4fa8a837"]]),z=(e,t)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((l,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function po(e,t){let s=0,l=e.length-1;for(;s<=l;){let n=Math.floor((s+l)/2);if(e[n]===t)return n;e[n]>t?l=n-1:s=n+1}return l}const mo={class:"toc remove"},vo=["id","onClick"],ho=g({__name:"index",setup(e){const t=h();let s;return s=we("scrollTop"),xe(()=>{t.value=Array.from(document.querySelectorAll(".post-body h2,h3,h4"));const l=t.value.map((a,c)=>Math.floor(a.getBoundingClientRect().top));let n;ke(s,a=>{var b,m;const c=Math.floor(a+document.documentElement.clientHeight/2),r=po(l,c);n!==r&&((b=document.querySelector(`#toc-${n}`))==null||b.classList.toggle("toc-choosen"),(m=document.querySelector(`#toc-${r}`))==null||m.classList.toggle("toc-choosen"),n=r)})}),(l,n)=>(i(),u("div",mo,[o("ul",null,[(i(!0),u(y,null,I(t.value,(a,c)=>(i(),u("li",{id:`toc-${c}`,class:L(`item-${a.tagName.charAt(1)}`),onClick:r=>a.scrollIntoView({behavior:"smooth",block:"center"})},p(a.innerText),11,vo))),256))])]))}});const fo=$(ho,[["__scopeId","data-v-04345621"]]),go={class:"container"},bo={class:"cover"},yo=["src"],$o=["innerHTML"],wo=g({__name:"ViewPost",async setup(e){let t,s;const l=Ce(),n=E(),a=l.params.postName,c=h(""),r=h("");try{const{html:m}=([t,s]=U(()=>z(Object.assign({"../../posts/post/String/String.md":()=>j(()=>import("./String-6b03ce29.js"),[],import.meta.url),"../../posts/post/useStore/useStore.md":()=>j(()=>import("./useStore-38aa1144.js"),["useStore-38aa1144.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)}),`../../posts/post/${a}/${a}.md`)),t=await t,s(),t);c.value=m;const{cover:w}=D.filter(k=>k.name===a)[0];r.value=w}catch{try{const{html:m}=([t,s]=U(()=>z(Object.assign({"../../posts/post/Decorators.md":()=>j(()=>import("./Decorators-4a8e10ff.js"),["Decorators-4a8e10ff.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)}),`../../posts/post/${a}.md`)),t=await t,s(),t);c.value=m;const{cover:w}=D.filter(k=>k.name===a)[0];r.value=w}catch{console.log("postName\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8F6C404"),n.push("/404")}}const b=m=>new URL(Object.assign({"../../posts/assets/default-js.avif":K,"../../posts/assets/default-vue.png":Z,"../../posts/assets/vuex.jpg":Q})[`../../posts/assets/${m}`],self.location).href;return(m,w)=>{const k=Ie("highlight");return i(),u("div",go,[o("div",bo,[o("img",{src:b(r.value),alt:"cover"},null,8,yo)]),Se(o("div",{class:"post-body vuepress-markdown-body",innerHTML:c.value},null,8,$o),[[k]]),d(fo)])}}});const xo=$(wo,[["__scopeId","data-v-4831753c"]]),R=e=>(A("data-v-645ddf93"),e=e(),C(),e),ko={class:"notFound"},So={class:"container"},Io=R(()=>o("h1",null,"404",-1)),Ao=R(()=>o("p",null,"NOT FOUND",-1)),Co=R(()=>o("br",null,null,-1)),Lo=R(()=>o("p",null,"\u8981\u4E00\u76F4 \u52AA\u529B\u52AA\u529B \u6C38\u4E0D\u653E\u68C4 \u624D\u53EF\u4EE5 \u6539\u8B8A\u4E16\u754C C'mon \u6539\u8B8A\u81EA\u5DF1",-1)),Eo=H("Return With Me"),Po=g({__name:"NotFound",setup(e){const t=E();return(s,l)=>{const n=T,a=W;return i(),u("div",ko,[o("div",So,[Io,Ao,d(n),Co,Lo,d(a,{size:"large",onClick:l[0]||(l[0]=c=>_(t).push("/"))},{default:v(()=>[Eo]),_:1})])])}}});const jo=$(Po,[["__scopeId","data-v-645ddf93"]]),Do=Le("/"),To=[{path:"/",name:"Home",component:yt},{path:"/posts",name:"Posts",component:Pt},{path:"/post/:postName",name:"Post",component:xo},{path:"/projects",name:"Projects",component:Zt},{path:"/about",name:"About",component:uo},{path:"/:pathMatch(.*)*",name:"NotFound",component:jo}],Bo=Ee({history:Do,routes:To});G.configure({ignoreUnescapedHTML:!0});const M=Ae(ct);for(const[e,t]of Object.entries(he))M.component(e,t);M.directive("highlight",function(e){e.querySelectorAll("pre code").forEach(s=>{G.highlightElement(s)})});M.use(Bo).mount("#app");
