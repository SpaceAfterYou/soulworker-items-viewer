import{_ as R}from"./nuxt-link.YJdg-JfU.js";import{s as p,o as s,E as x,w as r,G as i,x as A,H as U,I as z,c as a,J as E,a as u,r as S,K as W,q as J,g as O,d as $,z as h,D as q,F as w,t as g,b as c,A as V,C as P,B as D,L as Q,n as C,M as F,N as j,v as M}from"./entry.3YJjmiG8.js";import{_ as k}from"./_plugin-vue_export-helper.x3n3nnut.js";import{a as K,_ as X,u as Y}from"./index.2jgIb6_U.js";const Z=p({__name:"header-link",setup(t){return(e,n)=>{const o=R;return s(),x(o,{class:"uppercase"},{default:r(()=>[i(e.$slots,"default")]),_:3})}}}),ee=p({__name:"input",props:{modelValue:{}},emits:["update:modelValue"],setup(t){const e=A(t,"modelValue");return(n,o)=>U((s(),a("input",{class:"h-full w-full rounded bg-neutral-700 px-4",placeholder:"Search request...","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),type:"text"},null,512)),[[z,e.value]])}}),te=["value"],se=p({__name:"option",props:{value:{}},setup(t){return(e,n)=>(s(),a("option",{value:e.value},[i(e.$slots,"default")],8,te))}}),ne={class:"flex gap-2 rounded bg-black/50"},oe=p({__name:"index",props:{modelValue:{}},emits:["update:modelValue"],setup(t){const e=A(t,"modelValue");return(n,o)=>(s(),a("div",ne,[U(u("select",{class:"rounded bg-neutral-700 px-2 text-white","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},[i(n.$slots,"default")],512),[[E,e.value]])]))}}),le={},ae={class:"flex gap-2 rounded bg-black/50 p-2"},ce={class:"self-center"};function re(t,e){return s(),a("div",ae,[u("span",ce,[i(t.$slots,"head")]),i(t.$slots,"body")])}const ue=k(le,[["render",re]]),_e={},ie={class:"flex flex-col gap-4 p-4"};function pe(t,e){return s(),a("section",ie,[i(t.$slots,"settings"),i(t.$slots,"items")])}const de=k(_e,[["render",pe]]),me={class:"flex flex-wrap gap-4"},fe={key:0,class:"grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2"},he=30,ye=p({__name:"suggs",props:{request:{}},setup(t){const e=[{value:0,filter:"includes",name:"Includes"},{value:1,filter:"startsWith",name:"Starts with"}],n=[{filter:()=>[{from:0,key:"id"},{from:1,key:"name"},{from:1,key:"description"}],value:0,name:"Any of"},{filter:()=>[{from:0,key:"id"}],value:1,name:"Id"},{filter:()=>[{from:1,key:"name"}],value:2,name:"Name"},{filter:()=>[{from:1,key:"description"}],value:3,name:"Description"}],o=S(e[0].value),l=S(n[0].value),{items:m}=W();function*_(v){const d=n[l.value].filter(),b=e[o.value].filter;for(const{from:I,key:B}of d)I===0&&String(v[B])[b](t.request)&&(yield v)}const f=J([]);O(()=>[t.request,o,l],()=>L(m),{deep:!0});const L=K(v=>{if(f.splice(0,f.length),t.request!==""){for(const d of v)for(const b of _(d))if(f.push(b),f.length>=he)return}});return(v,d)=>{const b=se,I=oe,B=ue,G=X,H=de;return s(),x(H,{class:"absolute w-full bg-black/50 backdrop-blur-md"},{settings:r(()=>[u("div",me,[c(B,null,{head:r(()=>[$(" method ")]),body:r(()=>[c(I,{modelValue:h(o),"onUpdate:modelValue":d[0]||(d[0]=y=>q(o)?o.value=y:null)},{default:r(()=>[(s(),a(w,null,V(e,({name:y,value:T})=>c(b,{value:T,key:T},{default:r(()=>[$(g(y),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),c(B,null,{head:r(()=>[$(" where ")]),body:r(()=>[c(I,{modelValue:h(l),"onUpdate:modelValue":d[1]||(d[1]=y=>q(l)?l.value=y:null)},{default:r(()=>[(s(),a(w,null,V(n,({name:y,value:T})=>c(b,{value:T,key:T},{default:r(()=>[$(g(y),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})])]),items:r(()=>[h(f).length>0?(s(),a("div",fe,[(s(!0),a(w,null,V(h(f),y=>(s(),x(G,{key:y.id,item:y},null,8,["item"]))),128))])):P("",!0)]),_:1})}}}),$e={class:"group relative"},ge={class:"h-full py-2"},ve=p({__name:"index",setup(t){const e=S("");return(n,o)=>{const l=ee,m=ye;return s(),a("form",$e,[u("div",ge,[c(l,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=_=>q(e)?e.value=_:null)},null,8,["modelValue"])]),c(m,{class:"invisible hover:visible group-hover:visible",request:h(e)},null,8,["request"])])}}}),be=p({__name:"button",props:{isActive:{type:Boolean}},setup(t){return(e,n)=>(s(),a("button",{class:D({"text-pink-500":e.isActive}),type:"button"},[i(e.$slots,"default")],2))}}),ke={class:"flex gap-4"},xe=p({__name:"button-group",setup(t){const{getLocaleMessage:e}=Q();return(n,o)=>{const l=be;return s(),a("section",ke,[(s(!0),a(w,null,V(n.$i18n.availableLocales,m=>(s(),x(l,{"is-active":n.$i18n.locale===m,onClick:_=>n.$i18n.locale=m,key:m},{default:r(()=>[$(g(h(e)(m).header.locale.name),1)]),_:2},1032,["is-active","onClick"]))),128))])}}}),Se={},Te={class:"grid grid-cols-[1fr_2fr_1fr] gap-4 bg-black/40"},we={class:"flex justify-center gap-8 self-center py-4"},Ve=u("div",{class:"bg-red-500/50 p-8"},[u("ol",null,[u("li",null,"Need translators to translate user interface"),u("li",null,"인터페이스 텍스트를 번역하려면 번역기가 필요합니다."),u("li",null,"需要翻译人员翻译界面文本")])],-1);function Ie(t,e){const n=Z,o=ve,l=xe;return s(),a("div",null,[u("div",Te,[u("nav",we,[c(n,{to:"/"},{default:r(()=>[$(g(t.$t("header.menu.home")),1)]),_:1}),c(n,{to:"settings"},{default:r(()=>[$(g(t.$t("header.menu.settings")),1)]),_:1})]),c(o,{class:"h-full w-full"}),c(l,{class:"flex justify-center self-center"})]),Ve])}const Be=k(Se,[["render",Ie]]),Le=p({__name:"toggle-button",props:{isActive:{type:Boolean}},setup(t){return(e,n)=>(s(),a("button",{class:D(["w-full whitespace-nowrap border border-transparent bg-black/40 px-4 py-2 text-start transition-all hover:border-pink-500 hover:bg-black/20 hover:opacity-50",[{"bg-pink-500 ":e.isActive}]]),type:"button"},[i(e.$slots,"default")],2))}}),qe={},Ce={class:"bg-black/20 p-4"};function Fe(t,e){return s(),a("section",Ce,[i(t.$slots,"default")])}const je=k(qe,[["render",Fe]]),Me={},Ne={class:"flex w-full flex-col"},Ae={class:"bg-black/50 px-4 py-2 text-center uppercase"};function Ue(t,e){const n=je;return s(),a("section",Ne,[u("header",Ae,[i(t.$slots,"head")]),c(n,null,{default:r(()=>[i(t.$slots,"body")]),_:3})])}const De=k(Me,[["render",Ue]]),Ge={class:"flex flex-wrap gap-2"},He={class:"opacity-10 transition-opacity group-hover:opacity-100"},N=p({__name:"togglable-block",props:{token:{},values:{}},setup(t){const{useFilter:e}=Y(),{filters:n,set:o,del:l}=e(t.token);function m(_){n.has(_)?l({id:_}):o({callable:f=>f[t.token]===_,id:_})}return(_,f)=>{const L=Le,v=De;return s(),x(v,null,{head:r(()=>[$(g(_.$t(`${_.token}.name`)),1)]),body:r(()=>[u("section",Ge,[(s(!0),a(w,null,V(_.values,d=>(s(),x(L,{class:"group flex justify-between gap-4","is-active":h(n).has(d),onClick:b=>m(d),key:d},{default:r(()=>[u("span",null,g(_.$t(`${_.token}.values.${d}`)),1),u("span",He,g(d),1)]),_:2},1032,["is-active","onClick"]))),128))])]),_:1})}}}),Re=C("gain-types-store",()=>{const{data:t}=F(j("gainTypes.json"),"$3QlWToVQGO");return{gainTypes:t??S([])}}),ze=p({__name:"gain-types",setup(t){const{gainTypes:e}=M(Re());return(n,o)=>{const l=N;return s(),a("div",null,[c(l,{values:h(e),token:"gainType"},null,8,["values"])])}}}),Ee=C("inventory-types-store",()=>{const{data:t}=F(j("inventoryTypes.json"),"$iZR4YHCq5V");return{inventoryType:t??S([])}}),We=p({__name:"inventory-types",setup(t){const{inventoryType:e}=M(Ee());return(n,o)=>{const l=N;return s(),a("div",null,[c(l,{values:h(e),token:"inventoryType"},null,8,["values"])])}}}),Je=C("slot-types-store",()=>{const{data:t}=F(j("slotTypes.json"),"$vVyzMyqr91");return{slotTypes:t??S([])}}),Oe=p({__name:"slot-types",setup(t){const{slotTypes:e}=M(Je());return(n,o)=>{const l=N;return s(),a("div",null,[c(l,{values:h(e),token:"slotType"},null,8,["values"])])}}}),Pe={};function Qe(t,e){return s(),a("aside",null,[i(t.$slots,"default")])}const Ke=k(Pe,[["render",Qe]]),Xe=["href"],Ye=p({__name:"footer-link",props:{href:{}},setup(t){return(e,n)=>(s(),a("a",{class:"lowercase",href:e.href},[i(e.$slots,"default")],8,Xe))}}),Ze={class:"flex justify-center gap-8 bg-black/40 py-8"},et=u("p",null,"don't lose you panties, boy next door",-1),tt=p({__name:"footer",setup(t){return(e,n)=>{const o=Ye;return s(),a("section",Ze,[c(o,{href:"https://github.com/sawich/soulworker-items-viewer"},{default:r(()=>[$(" GitHub ")]),_:1}),et,c(o,{href:"http://discord.gg/SequFJP"},{default:r(()=>[$(" Discord ")]),_:1})])}}}),st={},nt={class:"flex min-h-screen flex-col bg-neutral-800"},ot={class:"flex grow gap-4 p-4"},lt={class:"grow"};function at(t,e){const n=Be,o=ze,l=We,m=Oe,_=Ke,f=tt;return s(),a("section",nt,[c(n),u("section",ot,[c(_,{class:"flex w-min flex-col gap-4"},{default:r(()=>[c(o),c(l),c(m)]),_:1}),u("section",lt,[i(t.$slots,"default")])]),c(f,{class:""})])}const it=k(st,[["render",at]]);export{it as default};
