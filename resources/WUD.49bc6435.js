import{s as c}from"./service.541fc1e6.js";import{_ as d,G as u,r as l,o as n,c as _,w as f,a as p,b as r,t as o,e as s}from"./index.5ebc9ad0.js";const h={name:"WUD",mixins:[c],props:{item:Object},components:{Generic:u},data:()=>({running:null,update:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){this.fetch("/api/containers").then(e=>{this.running=0,this.update=0;for(var t=0;t<e.length;t++)this.running++,e[t].updateAvailable&&this.update++}).catch(()=>{this.serverError=!0})}}},m={class:"notifs"},g={key:0,class:"notif warnings",title:"Running"},v={key:1,class:"notif errors",title:"Update"},k={key:2,class:"notif errors",title:"Connection error to WUD API, check url in config.yml"};function y(e,t,i,C,D,U){const a=l("Generic");return n(),_(a,{item:i.item},{indicator:f(()=>[p("div",m,[e.running>0?(n(),r("strong",g,o(e.running),1)):s("",!0),e.update>0?(n(),r("strong",v,o(e.update),1)):s("",!0),e.serverError?(n(),r("strong",k," ? ")):s("",!0)])]),_:1},8,["item"])}const G=d(h,[["render",y],["__scopeId","data-v-cc6fa3de"]]);export{G as default};
