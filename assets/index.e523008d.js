import{r as w,a as v,b as n,o as f,c as h,d as e,e as o,f as d,g,h as b,i as $,j as y,F as k,k as I,l as T,m as B,n as C,p as F,q as P,s as A,_ as L,t as S,u as H}from"./vendor.54d77f75.js";const N=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};N();var _=(i,c)=>{const a=i.__vccOpts||i;for(const[l,t]of c)a[l]=t;return a};const M={components:{HeartIcon:w,ChatIcon:v}},V={class:"Tweet max-w-full flex flex-col border-solid border-b border-white dark:border-outline"},j={class:"Retweeted flex items-center text-gray ml-[30px]"},z=d(" Voc\xEA retweetou "),E={class:"TweetBody flex mt-1 relative"},O=e("div",{class:"TweetAvatar absolute top-0 left-0 h-12 w-12 rounded-full flex-shrink-0 bg-gray"},null,-1),D={class:"TweetBodyContainer flex flex-col w-full mt-[2px] pl-[59px]"},G=g('<div class="TweetHeader flex items-center text-[15px] whitespace-nowrap"><strong class="mr-[5px] whitespace-nowrap text-ellipsis overflow-hidden">VueJs</strong><span class="text-gray">@NuxtVue3</span><div class="mx-[10px] bg-gray h-[2px] w-[2px]"></div><time class="text-gray whitespace-nowrap text-ellipsis overflow-hidden">26 de dez</time></div><p class="TweetDescription text-[14px] mt-[4px]"> Planning to Dev </p><div class="TweetImageContent mt-[12px] w-full bg-outline rounded-[14px] cursor-pointer hover:opacity-[.7]"></div>',3),R={class:"TweetIcons flex items-center text-gray text-[14px] w-full mt-[11px] mx-auto justify-between flex-wrap"},q={class:"TweetStatus flex items-center group"},J={class:"p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline group-hover:text-twitter"},K=e("p",{class:"group-hover:text-twitter"},"900",-1),W={class:"TweetStatus flex items-center group"},Q={class:"p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline group-hover:text-like"},U=e("p",{class:"group-hover:text-like"},"900",-1),X={class:"TweetStatus flex items-center group"},Y={class:"p-[5px] mr-[5px] rounded-full group-hover:bg-white dark:group-hover:bg-outline group-hover:text-retweet"},Z=e("p",{class:"group-hover:text-retweet"},"900",-1);function ee(i,c,a,l,t,s){const r=n("fa"),p=n("ChatIcon"),u=n("HeartIcon");return f(),h("div",V,[e("div",j,[o(r,{icon:"coffee",class:"retweetIcon mr-[10px] h-[16px] w-[16px]"}),z]),e("div",E,[O,e("div",D,[G,e("div",R,[e("div",q,[e("div",J,[o(p,{class:"iconTweet h-5 w-5 group-hover:text-twitter",icon:"heart"})]),K]),e("div",W,[e("div",Q,[o(u,{class:"iconTweet h-5 w-5 group-hover:text-like",icon:"heart"})]),U]),e("div",X,[e("div",Y,[o(r,{class:"",icon:"retweet"})]),Z])])])])])}var te=_(M,[["render",ee]]);const oe={components:{Tweet:te}},re={id:"TweetsContainer",class:"flex flex-col flex-shrink-0"};function se(i,c,a,l,t,s){const r=n("tweet");return f(),h("div",re,[o(r),o(r),o(r),o(r),o(r)])}var ne=_(oe,[["render",se]]);const ce={components:{Tweets:ne}},ie={id:"FeedContainer",class:"flex flex-col"},ae=e("div",{id:"FeedTab",class:"dark:hover:bg-tdarkhover hover:bg-white"},"Tweets",-1);function le(i,c,a,l,t,s){const r=n("Tweets");return f(),h("div",ie,[ae,o(r)])}var de=_(ce,[["render",le]]);const _e={components:{ArrowLeftIcon:b,LocationMarkerIcon:$,CakeIcon:y,Feed:de}},pe={class:"sticky z-[2] bg-tw dark:bg-primary top-0 flex items-center text-left profileHeader border-solid border-b border-white dark:border-outline"},ue={class:"p-2 outline-0 cursor-pointer rounded-full hover:dark:bg-outline hover:bg-white"},fe=e("div",{id:"ProfileInfo",class:"flex flex-col"},[e("strong",null,"Emilly Monteiro"),e("span",null,"612 Tweets")],-1),he={id:"ProfileContainer",class:"flex flex-col max-h-full overflow-y-auto"},xe=e("div",{id:"Banner"},[e("div",{id:"BannerAvatar",class:"text-tw dark:text-primary"})],-1),me={id:"ProfileData"},we=e("button",{id:"editProfileButton",class:"buttonInGeneral outlined border border-solid border-white dark:border-outline dark:hover:bg-outline hover:bg-white"}," Editar Perfil ",-1),ve=e("h1",null,"Emilly Monteiro",-1),ge=e("h2",null,"@emymonteiro",-1),be=e("p",null,[d(" Developer at "),e("a",{href:"https://cidadesouth.com"},"SouthRP")],-1),$e=d(" Campo Grande, MS - Brazil "),ye=d(" Nascida em 25 de Agosto de 1997 "),ke=e("div",{id:"Followage",class:"flex"},[e("span",null,[d(" seguindo "),e("strong",{class:"text-primary dark:text-white"}," 94 ")]),e("span",null,[e("strong",{class:"text-primary dark:text-white"}," 94 "),d(" seguidores ")])],-1);function Ie(i,c,a,l,t,s){const r=n("ArrowLeftIcon"),p=n("LocationMarkerIcon"),u=n("CakeIcon"),x=n("Feed");return f(),h(k,null,[e("header",pe,[e("button",ue,[o(r,{class:"profileSVG"})]),fe]),e("main",he,[xe,e("div",me,[we,ve,ge,be,e("ul",null,[e("li",null,[o(p,{class:"h-5 w-5 text-primary dark:text-white mr-1"}),$e]),e("li",null,[o(u,{class:"h-5 w-5 text-primary dark:text-white mr-1"}),ye])]),ke])]),o(x)],64)}var Te=_(_e,[["render",Ie]]);const Be=[{path:"/vite-js-twitter/",name:"Profile",component:Te}],Ce=I({history:T(),routes:Be}),Fe={};function Pe(i,c){return null}var Ae=_(Fe,[["render",Pe]]);const Le={components:{HomeIcon:B,BellIcon:C,SearchIcon:F,InboxIcon:P,Main:Ae}},Se={class:"dark"},He={class:"flex flex-col min-h-screen bg-tw dark:bg-primary text-primary dark:text-white"},Ne={id:"wrapper",class:"h-full max-w-1280px m-0-auto flex flex-col justify-center items-center"},Me={id:"wrapperChild",class:"flex flex-col w-full bg-tw dark:bg-primary border-r border-l border-white dark:border-outline cel:border-solid z-[2]"},Ve={id:"footerFather",class:"w-full flex justify-between fixed bottom-0 left-0 z-[2] bg-tw dark:bg-primary"};function je(i,c,a,l,t,s){const r=n("router-view"),p=n("HomeIcon"),u=n("SearchIcon"),x=n("BellIcon"),m=n("InboxIcon");return f(),h("div",Se,[e("div",He,[e("div",Ne,[e("div",Me,[o(r),e("footer",Ve,[o(p,{class:"footerButtons"}),o(u,{class:"footerButtons"}),o(x,{class:"footerButtons"}),o(m,{class:"footerButtons"})])])])])])}var ze=_(Le,[["render",je]]);A.add(L);S(ze).use(Ce).component("fa",H).mount("#app");