import{_ as f,s as v,e as o,b as m,a,f as d,w as x,T as h,N as g,o as l,F as _,g as b,k,d as y}from"./bootstrap-274cf3c0.mjs";import O from"./Text-5837ead6.mjs";import w from"./Icon-3fa32d4a.mjs";import"./theme-f740bb55.mjs";import"./getIcon-8c73e5d9.mjs";import"./icons-48be12dc.mjs";const C={props:["data","scape"],methods:{openMenu(){this.menuOpened=!0},close(){this.menuOpened=!1,this.hold=!1},toggleClose(){this.menuOpened=!this.menuOpened,this.menuOpened||this.close()}},watch:{scape(r){r&&(this.menuOpened=!1,this.hold=!1)}},data(){return{state:v.state,menuOpened:!1,hold:!1}}},M={class:"flex items-center cursor-default"};function j(r,t,i,z,n,s){const u=O,p=w,c=g("ch-track");return l(),o("div",{onMouseenter:t[2]||(t[2]=(...e)=>s.openMenu&&s.openMenu(...e)),onMouseleave:t[3]||(t[3]=e=>n.hold?null:n.menuOpened=!1),onClick:t[4]||(t[4]=(...e)=>s.toggleClose&&s.toggleClose(...e)),class:"relative py-[28px]"},[m("div",M,[a(u,{text:i.data.name,size:16},null,8,["text"]),a(p,{class:d(`ml-1 text-brand ${n.menuOpened?"rotate-0":"rotate-180"} transition`),name:"menuArrow",size:16},null,8,["class"])]),m("div",{class:d([n.menuOpened?"opacity-100":"opacity-0","transition","absolute","left-0","bottom-[16px]","min-h-[2px]","w-full","rounded-full","bg-brand"].join(" "))},null,2),a(h,{name:"fast-fade"},{default:x(()=>[n.menuOpened?(l(),o("div",{key:0,onMouseenter:t[0]||(t[0]=e=>n.hold=!0),onMouseleave:t[1]||(t[1]=e=>n.hold=!1),class:"bg-gray500 rounded-4 shadow-40 absolute left-0 top-full py-[40px] w-max"},[(l(!0),o(_,null,b(i.data.items,e=>(l(),o("div",{class:"w-full",key:e.id},[k(a(u,{class:"transition text-gray100 hover:text-purple hover:bg-gray300 px-[32px] py-[8px] min-w-full",text:e.name,size:16,link:e.url},null,8,["text","link"]),[[c,{event:"trackEvent",eventCategory:"header",eventAction:"categoria",eventLabel:e.name}]])]))),128))],32)):y("",!0)]),_:1})],32)}var D=f(C,[["render",j]]);export{D as default};