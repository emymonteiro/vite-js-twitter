import{r as _,a,o as l,c as u,b as o,d as f,F as m,e as h,f as $,g as v,h as y,i as w,j as x,k as g,l as I}from"./vendor.c37d15ad.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};b();var d=(i,n)=>{const s=i.__vccOpts||i;for(const[c,e]of n)s[c]=e;return s};const k={components:{ArrowLeftIcon:_}},L={class:"flex flex-col"},A=o("div",{id:"ProfileInfo"},[o("strong",null,"Emilly Monteiro"),o("span",null,"612 Tweets")],-1),B=o("main",null,null,-1);function M(i,n,s,c,e,t){const r=a("ArrowLeftIcon");return l(),u(m,null,[o("header",L,[o("button",null,[f(r,{class:"h-5 w-5 text-twitter"})]),A]),B],64)}var p=d(k,[["render",M]]);const N={components:{Main:p}};function O(i,n,s,c,e,t){const r=a("Main");return l(),h(r)}var P=d(N,[["render",O]]);const j=[{path:"/vite-js-twitter/",name:"Profile",component:P}],E=$({history:v(),routes:j}),F={components:{HomeIcon:y,BellIcon:w,SearchIcon:x,InboxIcon:g,Main:p}},H={class:"dark"},S={class:"flex flex-col min-h-screen bg-tw dark:bg-primary text-primary dark:text-white"},V={id:"wrapper",class:"h-full max-w-1280px m-0-auto flex justify-center"},q=o("div",{class:"side-left"},null,-1),C={class:"center"},K=o("div",{class:"side-left"},null,-1);function R(i,n,s,c,e,t){const r=a("router-view");return l(),u("div",H,[o("div",S,[o("div",V,[q,o("div",C,[f(r)]),K])])])}var T=d(F,[["render",R]]);I(T).use(E).mount("#app");
