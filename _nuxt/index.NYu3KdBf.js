import{u as h,_ as y}from"./index.hRohNJxJ.js";import{n as x,q as V,s as g,u as z,v as m,x as B,y as d,z as t,o as s,c as n,F as _,A as f,B as C,t as S,C as $,r as F,g as M,a as N,b as A,D,E}from"./entry.3XAlyh4o.js";const v=x("settings-store",()=>({page:V({size:1e3})})),I={key:0,class:"grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-2 bg-black/20 p-4"},P=["onClick"],R=g({__name:"pagination",props:z({count:{}},{modelValue:{default:0}}),emits:["update:modelValue"],setup(r){const{page:l}=m(v()),a=B(r,"modelValue"),e=d(()=>Math.floor(r.count/l.value.size));return(u,p)=>t(e)>1?(s(),n("section",I,[(s(!0),n(_,null,f(Array.from({length:t(e)}).keys(),o=>(s(),n("button",{class:C(["border border-transparent bg-black/40 py-2 transition-all hover:border-pink-500 hover:bg-black/20 hover:opacity-50",{"bg-pink-500":a.value===o}]),onClick:i=>a.value=o,type:"button",key:o},S(o),11,P))),128))])):$("",!0)}}),q={class:"flex flex-col gap-4"},w={class:"grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2"},U=g({__name:"index",setup(r){const{page:l}=m(v()),{filtered:a}=m(h()),e=F(0),u=d(()=>e.value*l.value.size),p=d(()=>u.value+l.value.size);return M(a,()=>{e.value=0}),(o,i)=>{const k=y,b=R;return s(),n("section",q,[N("div",w,[(s(!0),n(_,null,f(t(a).slice(t(u),t(p)),c=>(s(),E(k,{key:c.id,item:c},null,8,["item"]))),128))]),A(b,{count:t(a).length,modelValue:t(e),"onUpdate:modelValue":i[0]||(i[0]=c=>D(e)?e.value=c:null)},null,8,["count","modelValue"])])}}});export{U as default};
