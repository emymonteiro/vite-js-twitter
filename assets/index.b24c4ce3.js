import{r as v,a as x,b as g,c as n,o as p,d as m,e,f as s,F as y,g as d,h as w,i as I,j as $,k,l as B,m as L,n as P}from"./vendor.74b0cfd2.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};A();var f=(l,r)=>{const i=l.__vccOpts||l;for(const[a,o]of r)i[a]=o;return i};const M={components:{ArrowLeftIcon:v,LocationMarkerIcon:x,CakeIcon:g}},C={class:"sticky t-0 flex items-center text-left profileHeader border-solid border-b border-white dark:border-outline"},N={class:"p-2 outline-0 cursor-pointer rounded-full hover:dark:bg-outline hover:bg-white"},S=e("div",{id:"ProfileInfo",class:"flex flex-col"},[e("strong",null,"Emilly Monteiro"),e("span",null,"612 Tweets")],-1),j={id:"ProfileContainer",class:"flex flex-col max-h-full overflow-y-auto"},E=e("div",{id:"Banner"},[e("div",{id:"BannerAvatar",class:"text-tw dark:text-primary"})],-1),F={id:"ProfileData"},H=e("button",{id:"editProfileButton",class:"buttonInGeneral outlined border border-solid border-white dark:border-outline dark:hover:bg-outline hover:bg-white"}," Editar Perfil ",-1),O=e("h1",null,"Emilly Monteiro",-1),V=e("h2",null,"@emymonteiro",-1),z=e("p",null,[d(" Developer at "),e("a",{href:"https://cidadesouth.com"},"SouthRP")],-1),G=d(" Campo Grande, MS - Brazil "),D=d(" Nascida em 25 de Agosto de 1997 "),R=e("div",{id:"Followage",class:"flex"},[e("span",null,[d(" seguindo "),e("strong",null," 94 ")]),e("span",null,[e("strong",null,"94 "),d(" seguidores ")])],-1);function T(l,r,i,a,o,t){const c=n("ArrowLeftIcon"),u=n("LocationMarkerIcon"),_=n("CakeIcon");return p(),m(y,null,[e("header",C,[e("button",N,[s(c,{class:"profileSVG"})]),S]),e("main",j,[E,e("div",F,[H,O,V,z,e("ul",null,[e("li",null,[s(u,{class:"h-5 w-5 text-gray mr-1"}),G]),e("li",null,[s(_,{class:"h-5 w-5 text-gray mr-1"}),D])]),R])])],64)}var q=f(M,[["render",T]]);const K=[{path:"/vite-js-twitter/",name:"Profile",component:q}],W=w({history:I(),routes:K}),J={};function Q(l,r){return null}var U=f(J,[["render",Q]]);const X={components:{HomeIcon:$,BellIcon:k,SearchIcon:B,InboxIcon:L,Main:U}},Y={class:"dark"},Z={class:"flex flex-col min-h-screen bg-tw dark:bg-primary text-primary dark:text-white"},ee={id:"wrapper",class:"h-full max-w-1280px m-0-auto flex flex-col justify-center items-center"},oe={id:"wrapperChild",class:"flex flex-col w-full bg-tw dark:bg-primary border-r border-l border-white dark:border-outline cel:border-solid z-2"},te={id:"footerFather",class:"w-full flex justify-between fixed bottom-0 left-0 z-2 bg-tw dark:bg-primary"};function re(l,r,i,a,o,t){const c=n("router-view"),u=n("HomeIcon"),_=n("SearchIcon"),h=n("BellIcon"),b=n("InboxIcon");return p(),m("div",Y,[e("div",Z,[e("div",ee,[e("div",oe,[s(c),e("footer",te,[s(u,{class:"footerButtons"}),s(_,{class:"footerButtons"}),s(h,{class:"footerButtons"}),s(b,{class:"footerButtons"})])])])])])}var ne=f(X,[["render",re]]);P(ne).use(W).mount("#app");
