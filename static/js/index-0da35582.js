import"./vue-a2daf982.js";import{E as re,a as le,b as ce,c as ie,d as W,e as ue,f as _e,g as de,h as pe,i as P}from"./element-plus-e68fab71.js";import{s as me,m as ve,d as he,E as ge}from"./@element-plus-736a908b.js";import{C as f,r as h,Z as N,o as i,F as x,G as v,a as s,X as p,L as d,c as _,a7 as k,M as A,i as q,u,A as fe,J as E,W as V,a8 as S,a9 as $,h as be,O as Ae,aa as ye,ab as we,S as F,D as O,ac as B,x as Ce,f as Ie,w as xe,H as ke,ad as Se,ae as $e}from"./@vue-29cfe91d.js";import{u as L,a as Ee,c as Le,b as Re}from"./vue-router-65f8064a.js";import{u as Te,a as je,b as Pe}from"./@vueuse-4fba4516.js";import{H as G}from"./highlight.js-c8d2d5c0.js";import"./@ctrl-eb0b847c.js";import"./lodash-es-be1ea455.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const Ne={style:{"text-align":"center",height:"47px"}},He={style:{"font-size":"1.4rem","font-weight":"600"}},Be={style:{"font-size":"0.95rem","font-weight":"700","user-select":"none"}},Ve=f({__name:"sideBar",props:{title:String,openDrawer:Boolean,sideBarItem:Array},emits:["drawerClosed"],setup(e,{emit:t}){const o=h("ttb"),l=h("18%"),n=()=>{t("drawerClosed")},a=h("Home");return(c,r)=>{const b=N("router-link"),m=re,w=le,I=ce;return i(),x(I,{modelValue:e.openDrawer,"onUpdate:modelValue":r[1]||(r[1]=g=>q(openDrawer)?openDrawer.value=g:null),size:l.value,direction:o.value,"lock-scroll":!1,"modal-class":"drawer_modal","custom-class":"drawer_body","show-close":!1,onClose:r[2]||(r[2]=g=>n())},{header:v(()=>[s("div",Ne,[s("span",He,p(e.title),1)])]),default:v(()=>[d(w,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=g=>a.value=g)},{default:v(()=>[(i(!0),_(A,null,k(e.sideBarItem,g=>(i(),x(m,{key:g.name,name:g.name},{label:v(()=>[(i(),x(b,{key:g.name,to:g.url},{default:v(()=>[s("span",Be,p(g.name),1)]),_:2},1032,["to"]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue","size","direction"])}}}),De=f({__name:"themeChanger",setup(e){const t=Te(),o=je(t);let l=h("dark");return(n,a)=>{const c=ie;return i(),x(c,{modelValue:u(l),"onUpdate:modelValue":a[0]||(a[0]=r=>q(l)?l.value=r:l=r),onClick:a[1]||(a[1]=r=>u(o)()),size:"large","active-icon":u(me),"inactive-icon":u(ve),"inline-prompt":""},null,8,["modelValue","active-icon","inactive-icon"])}}}),X=e=>(S("data-v-06926a8b"),e=e(),$(),e),Oe=X(()=>s("span",null,"Laura's Blog",-1)),Ue=X(()=>s("div",{style:{"min-height":"64px","border-radius":"0 0 24px 24px"}},null,-1)),ze=f({__name:"index",props:{pageScrolled:Boolean},setup(e){const t=L(),o=h([{name:"Home",url:"/"},{name:"Posts",url:"/posts"},{name:"Projects",url:"/projects"},{name:"About",url:"/about"}]),l=fe(()=>t.currentRoute.value.path),n=h(!1),a=h("Lee's Blog");return(c,r)=>{const b=W,m=ue,w=N("router-link"),I=_e;return i(),_(A,null,[s("div",{class:E(["backboard theme-color-changer",e.pageScrolled?"nav-shadow":""])},[d(I,{style:{width:"100%"},justify:"space-between"},{default:v(()=>[d(m,{span:6,class:"menu-btn nav-item"},{default:v(()=>[d(b,{style:{"margin-left":"20px"},size:"small",type:"primary",plain:"",round:"",icon:u(he),onClick:r[0]||(r[0]=g=>n.value=!0)},null,8,["icon"])]),_:1}),d(Ve,{openDrawer:n.value,title:a.value,sideBarItem:o.value,onDrawerClosed:r[1]||(r[1]=g=>n.value=!1)},null,8,["openDrawer","title","sideBarItem"]),d(m,{span:6,class:"nav-item"},{default:v(()=>[d(w,{to:"/",class:"theme-color-changer"},{default:v(()=>[Oe]),_:1})]),_:1}),d(m,{span:12,class:"nav-link"},{default:v(()=>[(i(!0),_(A,null,k(o.value,(g,ae)=>(i(),x(w,{key:ae,to:u(l)===g.url?"":g.url,class:E([u(l)===g.url?"nav-active":"","link-item theme-color-changer"])},{default:v(()=>[V(p(g.name),1)]),_:2},1032,["to","class"]))),128))]),_:1}),d(m,{span:6,class:"nav-item",style:{"flex-direction":"row-reverse"}},{default:v(()=>[d(De,{style:{"margin-right":"20px"}})]),_:1})]),_:1})],2),Ue],64)}}});const y=(e,t)=>{const o=e.__vccOpts||e;for(const[l,n]of t)o[l]=n;return o},Me=y(ze,[["__scopeId","data-v-06926a8b"]]),Ye="Laura Feng",We="Think Big | Start Small | Learn Fast",qe="A Little Data Analyst",Fe="https://www.linkedin.com/in/lauralufeng/",Ge="Laura's Blog",Xe="2024",R={Email:"mailto:laura_lufeng@outlook.com"},C={name:Ye,motto:We,description:qe,link:Fe,Title:Ge,blogStartYear:Xe,contact:R},J=e=>(S("data-v-8b168688"),e=e(),$(),e),Je={class:"footer"},Ze=J(()=>s("br",null,null,-1)),Ke={key:0},Qe={key:1},et=J(()=>s("a",{href:"https://www.linkedin.com/in/lauralufeng/",target:"_blank"},"Laura",-1)),tt=V(". "),st=f({__name:"Footer",setup(e){const t=new Date().getFullYear();return(o,l)=>(i(),_("div",Je,[s("p",null,p(u(C).Title),1),s("p",null,[s("i",null,p(u(C).motto),1)]),Ze,u(t)===Number(u(C).blogStartYear)?(i(),_("span",Ke," \xA9 "+p(u(t))+" "+p(u(C).name)+".\xA0 Powered by ",1)):(i(),_("span",Qe," \xA9 "+p(u(C).blogStartYear)+" - "+p(u(t))+" "+p(u(C).name)+".\xA0 Powered by ",1)),et,tt]))}});const ot=y(st,[["__scopeId","data-v-8b168688"]]),nt=e=>(S("data-v-23398c35"),e=e(),$(),e),at={class:"container"},rt={class:"main"},lt=nt(()=>s("h1",null,"Loading...",-1)),ct=f({__name:"App",setup(e){const t=L(),o=Pe("redirect","");be(async()=>{o.value&&(await t.push(o.value),o.value="")});const l=document.documentElement.clientHeight-64;let n=h(!1),a=h(0);Ae("scrollTop",a);function c({scrollTop:r}){n.value=!!r,a.value=r}return(r,b)=>{const m=N("router-view"),w=de;return i(),_("div",at,[d(Me,{pageScrolled:u(n)},null,8,["pageScrolled"]),d(w,{height:l+"px",onScroll:c},{default:v(()=>[s("div",rt,[(i(),x(ye,null,{default:v(()=>[d(m)]),fallback:v(()=>[lt]),_:1}))]),d(ot,{class:"footer"})]),_:1},8,["height"])])}}});const it=y(ct,[["__scopeId","data-v-23398c35"]]),ut={class:"container"},_t={class:"avatar"},dt=["src"],pt=["src"],mt=f({__name:"index",props:{src:String,size:String},setup(e){const t=e;return we(o=>({"3fe1c424":t.size})),(o,l)=>(i(),_("div",ut,[s("span",_t,[s("img",{src:e.src},null,8,dt),s("img",{src:e.src,class:"back"},null,8,pt)])]))}});const vt=y(mt,[["__scopeId","data-v-a39afe22"]]),U=""+new URL("../jpg/avatar-d4252550.jpg",import.meta.url).href,ht={class:"home"},gt={class:"avatar"},ft={class:"user_info"},bt=["href"],At=f({__name:"Home",setup(e){const t=h("300px");return(o,l)=>(i(),_("div",ht,[s("div",gt,[d(vt,{src:u(U)?u(U):"../assets/avatar.jpg",size:t.value},null,8,["src","size"])]),s("div",ft,[s("h1",null,p(u(C).name),1),s("h4",null,[s("a",{href:u(C).link},p(u(C).description),9,bt)]),s("p",null,p(u(C).motto),1)])]))}});const yt=y(At,[["__scopeId","data-v-e17bb863"]]),Z=""+new URL("../avif/default-js-0e81225e.avif",import.meta.url).href,K=""+new URL("../png/default-vue-6fafe4ef.png",import.meta.url).href,Q="data:image/png;base64,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",ee=""+new URL("../jpg/vuex-e0301082.jpg",import.meta.url).href,wt={class:"cover_container"},Ct=["src"],It={class:"post_info"},xt={class:"tags"},kt=f({__name:"index",props:{post:null},setup(e){const t=l=>new URL(Object.assign({"../../../posts/assets/default-js.avif":Z,"../../../posts/assets/default-vue.png":K,"../../../posts/assets/similarWebLogo.png":Q,"../../../posts/assets/vuex.jpg":ee})[`../../../posts/assets/${l}`],self.location).href,o=h("always");return(l,n)=>{const a=pe,c=N("router-link");return i(),x(c,{to:`/post/${e.post.name}`,class:"card_container"},{default:v(()=>[d(a,{class:E(["post_card",{move_down:o.value==="never"}]),shadow:o.value,onMouseover:n[0]||(n[0]=r=>o.value="never"),onMouseout:n[1]||(n[1]=r=>o.value="always"),"body-style":{padding:"0px"}},{default:v(()=>[s("div",wt,[s("img",{class:E({scale_up:o.value==="never"}),src:t(e.post.cover)||"../../assets/post/default-vue.png"},null,10,Ct)]),s("div",It,[s("h3",null,p(e.post.title),1),s("span",null,p(e.post.date),1),s("p",null,p(e.post.description),1),s("div",xt,[(i(!0),_(A,null,k(e.post.tags,r=>(i(),_("span",{key:r},p(r),1))),128))])])]),_:1},8,["shadow","class"])]),_:1},8,["to"])}}});const St=y(kt,[["__scopeId","data-v-fd252cf8"]]),j=[{title:"\u5982\u4F55\u4F7F\u7528SimilarWeb\u5206\u6790\u7F51\u7AD9\u6570\u636E update",tags:["",""],cover:"similarWebLogo.png",description:"\u770B\u5230\u8FD9\u4E2A\u9700\u6C42\uFF0C \u5FEB\u901F\u5B66\u4E60\u5E76\u4F53\u9A8C\u4E00\u4E0BSimilarWeb\u30021.\u6709\u54EA\u4E9B\u529F\u80FD\uFF1F 2.\u5982\u4F55\u4F7F\u7528SimilarWeb\u5206\u6790\u7F51\u7AD9\u6570\u636E 3. \u6211\u7684Dashboard - Gambling/Sports Betting",date:"2024-01-02",name:"Decorators"},{title:"TBA - \u5168\u7403\u535A\u5F69\u5E02\u573A",tags:["illegal betting","Global Betting"],cover:"default-js.avif",description:"",date:"2023-12-31",name:"String"},{title:"How Organised Crime Operates Illegal Betting,Cyber Scams and Modern Slavery in Southeast Asia - section1\u590D\u73B0\u7EC3\u4E60",tags:["Modern Slavery","Cyber Scams"],cover:"vuex.jpg",description:"",date:"2023-12-31",name:"useStore"}],te=e=>(S("data-v-c4d69dd5"),e=e(),$(),e),$t=te(()=>s("h1",{style:{"font-size":"200%","text-align":"center"}},"Posts",-1)),Et=te(()=>s("p",null," These are my experiences and discoveries in the process of study and practice ",-1)),Lt={class:"fake-card"},Rt=f({__name:"Posts",setup(e){const t=h(j.length),o=h(4);return(l,n)=>{const a=P;return i(),_(A,null,[$t,Et,d(a),s("main",null,[(i(!0),_(A,null,k(u(j),c=>(i(),x(St,{post:c,key:c.name},null,8,["post"]))),128)),t.value%o.value>0?(i(!0),_(A,{key:0},k(o.value-t.value%o.value,c=>(i(),_("div",Lt))),256)):F("",!0)])],64)}}});const Tt=y(Rt,[["__scopeId","data-v-c4d69dd5"]]),jt=""+new URL("../png/CPCU-53561dc1.png",import.meta.url).href,Pt=""+new URL("../png/IUA-ac9d0833.png",import.meta.url).href,Nt=""+new URL("../png/default-vue-6fafe4ef.png",import.meta.url).href,Ht=""+new URL("../png/\u5317\u6781\u51B0\u76D6-b91fcbc3.png",import.meta.url).href,Bt=""+new URL("../svg/github-fab00c2d.svg",import.meta.url).href,se=e=>(S("data-v-78278303"),e=e(),$(),e),Vt={class:"container"},Dt={class:"imgContainer"},Ot=["src"],Ut={class:"interactions"},zt={class:"link"},Mt=["href"],Yt=se(()=>s("img",{src:Bt},null,-1)),Wt={class:"text"},qt=se(()=>s("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",-1)),Ft=f({__name:"index",props:{title:String,link:String,img:String},setup(e){const t=e,o=t.title||"My Fantastic Project",l=t.img||"../../assets/project/default.png",n=L();function a(r){n.push(`/post/${r}`)}const c=r=>new URL(Object.assign({"../../../project/assets/CPCU.png":jt,"../../../project/assets/IUA.png":Pt,"../../../project/assets/default-vue.png":Nt,"../../../project/assets/\u5317\u6781\u51B0\u76D6.png":Ht})[`../../../project/assets/${r}`],self.location).href;return(r,b)=>(i(),_("div",Vt,[s("div",Dt,[s("img",{src:c(u(l))},null,8,Ot),s("div",Ut,[s("div",zt,[s("a",{href:e.link,target:"_blank"},[O(r.$slots,"link-img",{},()=>[Yt],!0)],8,Mt)]),s("div",{class:"title",onClick:b[0]||(b[0]=m=>a(u(o)))},[s("span",null,p(u(o)),1)])])]),s("div",Wt,[O(r.$slots,"description",{},()=>[qt],!0)])]))}});const Gt=y(Ft,[["__scopeId","data-v-78278303"]]),z=[{title:"TBA - Visualization for Reinsurance Survey Points - Automated Underwriting",img:"CPCU.png",description:"Peak Exposure\u7684\u4F4D\u7F6E\uFF0C\u9009\u53D6top10\u7684\u4ED3\u5E93\u548C\u697C\u5B87\uFF0C\u8F6C\u6362\u5730\u5740\u4E3A\u8C37\u6B4C\u5730\u56FE\u7ECF\u7EAC\u5EA6\uFF0C\u5408\u5E76\u9700\u8981\u67E5\u52D8\u7684\u4F4D\u70B9\u548C\u7ECF\u7EAC\u5EA6\u5E76\u8F6C\u4E3AXML\uFF0C\u5728google-earth\u4E2D\u663E\u793A",link:""},{title:"TBA - Data for ESG - Extent and melting of the Arctic Ice Cap",img:"\u5317\u6781\u51B0\u76D6.png",description:"\u63CF\u7ED8\u5317\u6781\u51B0\u76D6\u7684\u8FB9\u7F18\uFF0C\u81EA\u52A8\u62A0\u56FE\u5E76\u88C1\u526A\uFF0C\u5F3A\u8C03\u8FB9\u7F18\uFF0C\u5BF9\u5386\u5E74\u6570\u636E\u8FDB\u884C\u53E0\u52A0\u7EC4\u6210\u52A8\u6001\u56FE\uFF0C\u540C\u65F6\u5C55\u793A\u5386\u5E74CO2\u6392\u653E\u603B\u91CF-\u4EE5\u5C55\u793A\u5B83\u4EEC\u7684\u5173\u7CFB",link:""},{title:"Text Mining for Automated Contract",img:"IUA.png",description:"Crawl the external data source of the relevant insurance industry wording research organizations (IUA and LMA)",link:"https://www.iua.co.uk/"}],oe=e=>(S("data-v-8bb64d96"),e=e(),$(),e),Xt=oe(()=>s("h1",{style:{"font-size":"200%","text-align":"center"}},"Projects",-1)),Jt=oe(()=>s("p",null,"Here are some projects that I personally developed",-1)),Zt={class:"fake-card"},Kt=f({__name:"Projects",setup(e){const t=h(z.length),o=h(3);return(l,n)=>{const a=P;return i(),_(A,null,[Xt,Jt,d(a),s("main",null,[(i(!0),_(A,null,k(u(z),c=>(i(),x(Gt,{title:c.title,link:c.link,img:c.img},{description:v(()=>[s("span",null,p(c.description),1)]),_:2},1032,["title","link","img"]))),256)),t.value%o.value>0?(i(!0),_(A,{key:0},k(o.value-t.value%o.value,c=>(i(),_("div",Zt))),256)):F("",!0)])],64)}}});const Qt=y(Kt,[["__scopeId","data-v-8bb64d96"]]),es="modulepreload",ts=function(e,t){return new URL(e,t).href},M={},T=function(t,o,l){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=ts(n,l),n in M)return;M[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":es,a||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),a)return new Promise((b,m)=>{r.addEventListener("load",b),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},ne=e=>(S("data-v-4fa8a837"),e=e(),$(),e),ss=ne(()=>s("h1",{style:{"font-size":"200%","text-align":"center"}},"About Me",-1)),os=ne(()=>s("p",null,"Who am I and What am I doing now",-1)),ns={class:"about center"},as=["innerHTML"],rs={class:"contact"},ls={class:"grid-3_xs-1_sm-2_md-2 gridContainer"},cs={class:"col"},is=["href"],us={class:"contactItem"},_s=f({__name:"About",async setup(e){let t,o;const{html:l}=([t,o]=B(()=>T(()=>import("./aboutMe-86e4f1cd.js"),["aboutMe-86e4f1cd.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)),t=await t,o(),t);return(n,a)=>{const c=P;return i(),_(A,null,[ss,os,d(c),s("main",null,[s("div",ns,[s("div",{class:"vuepress-markdown-body",innerHTML:u(l)},null,8,as)]),s("div",rs,[s("div",ls,[(i(!0),_(A,null,k(Object.keys(u(R)),r=>(i(),_("div",cs,[s("a",{href:u(R)[r],target:"_blank"},[s("div",us,[s("h3",null,p(r),1),s("p",null,p(u(R)[r]),1)])],8,is)]))),256))])])])],64)}}});const ds=y(_s,[["__scopeId","data-v-4fa8a837"]]),Y=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((l,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function ps(e,t){let o=0,l=e.length-1;for(;o<=l;){let n=Math.floor((o+l)/2);if(e[n]===t)return n;e[n]>t?l=n-1:o=n+1}return l}const ms={class:"toc remove"},vs=["id","onClick"],hs=f({__name:"index",setup(e){const t=h();let o;return o=Ce("scrollTop"),Ie(()=>{t.value=Array.from(document.querySelectorAll(".post-body h2,h3,h4"));const l=t.value.map((a,c)=>Math.floor(a.getBoundingClientRect().top));let n;xe(o,a=>{var b,m;const c=Math.floor(a+document.documentElement.clientHeight/2),r=ps(l,c);n!==r&&((b=document.querySelector(`#toc-${n}`))==null||b.classList.toggle("toc-choosen"),(m=document.querySelector(`#toc-${r}`))==null||m.classList.toggle("toc-choosen"),n=r)})}),(l,n)=>(i(),_("div",ms,[s("ul",null,[(i(!0),_(A,null,k(t.value,(a,c)=>(i(),_("li",{id:`toc-${c}`,class:E(`item-${a.tagName.charAt(1)}`),onClick:r=>a.scrollIntoView({behavior:"smooth",block:"center"})},p(a.innerText),11,vs))),256))])]))}});const gs=y(hs,[["__scopeId","data-v-04345621"]]),fs={class:"container"},bs={class:"cover"},As=["src"],ys=["innerHTML"],ws=f({__name:"ViewPost",async setup(e){let t,o;const l=Ee(),n=L(),a=l.params.postName,c=h(""),r=h("");try{const{html:m}=([t,o]=B(()=>Y(Object.assign({"../../posts/post/String/String.md":()=>T(()=>import("./String-bd5e9c3c.js"),["String-bd5e9c3c.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url),"../../posts/post/useStore/useStore.md":()=>T(()=>import("./useStore-4166f02d.js"),["useStore-4166f02d.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)}),`../../posts/post/${a}/${a}.md`)),t=await t,o(),t);c.value=m;const{cover:w}=j.filter(I=>I.name===a)[0];r.value=w}catch{try{const{html:m}=([t,o]=B(()=>Y(Object.assign({"../../posts/post/Decorators.md":()=>T(()=>import("./Decorators-3e180872.js"),["Decorators-3e180872.js","vue-a2daf982.js","@vue-29cfe91d.js"],import.meta.url)}),`../../posts/post/${a}.md`)),t=await t,o(),t);c.value=m;const{cover:w}=j.filter(I=>I.name===a)[0];r.value=w}catch{console.log("postName\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8F6C404"),n.push("/404")}}const b=m=>new URL(Object.assign({"../../posts/assets/default-js.avif":Z,"../../posts/assets/default-vue.png":K,"../../posts/assets/similarWebLogo.png":Q,"../../posts/assets/vuex.jpg":ee})[`../../posts/assets/${m}`],self.location).href;return(m,w)=>{const I=Se("highlight");return i(),_("div",fs,[s("div",bs,[s("img",{src:b(r.value),alt:"cover"},null,8,As)]),ke(s("div",{class:"post-body vuepress-markdown-body",innerHTML:c.value},null,8,ys),[[I]]),d(gs)])}}});const Cs=y(ws,[["__scopeId","data-v-4831753c"]]),H=e=>(S("data-v-645ddf93"),e=e(),$(),e),Is={class:"notFound"},xs={class:"container"},ks=H(()=>s("h1",null,"404",-1)),Ss=H(()=>s("p",null,"NOT FOUND",-1)),$s=H(()=>s("br",null,null,-1)),Es=H(()=>s("p",null,"\u8981\u4E00\u76F4 \u52AA\u529B\u52AA\u529B \u6C38\u4E0D\u653E\u68C4 \u624D\u53EF\u4EE5 \u6539\u8B8A\u4E16\u754C C'mon \u6539\u8B8A\u81EA\u5DF1",-1)),Ls=V("Return With Me"),Rs=f({__name:"NotFound",setup(e){const t=L();return(o,l)=>{const n=P,a=W;return i(),_("div",Is,[s("div",xs,[ks,Ss,d(n),$s,Es,d(a,{size:"large",onClick:l[0]||(l[0]=c=>u(t).push("/"))},{default:v(()=>[Ls]),_:1})])])}}});const Ts=y(Rs,[["__scopeId","data-v-645ddf93"]]),js=Le("/"),Ps=[{path:"/",name:"Home",component:yt},{path:"/posts",name:"Posts",component:Tt},{path:"/post/:postName",name:"Post",component:Cs},{path:"/projects",name:"Projects",component:Qt},{path:"/about",name:"About",component:ds},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ts}],Ns=Re({history:js,routes:Ps});G.configure({ignoreUnescapedHTML:!0});const D=$e(it);for(const[e,t]of Object.entries(ge))D.component(e,t);D.directive("highlight",function(e){e.querySelectorAll("pre code").forEach(o=>{G.highlightElement(o)})});D.use(Ns).mount("#app");