import{s as i}from"./service.541fc1e6.js";import{_ as c,G as d,r as l,o as s,c as _,w as f,a as u,b as o,t as m,e as a}from"./index.5ebc9ad0.js";const h={name:"SABnzbd",mixins:[i],props:{item:Object},components:{Generic:d},data:()=>({stats:null,error:!1}),computed:{downloads:function(){return this.stats?this.stats.noofslots:""}},created(){const t=parseInt(this.item.downloadInterval,10)||0;t>0&&setInterval(()=>this.fetchStatus(),t),this.fetchStatus()},methods:{fetchStatus:async function(){try{const t=await this.fetch(`/api?output=json&apikey=${this.item.apikey}&mode=queue`);this.error=!1,this.stats=t.queue}catch(t){this.error=!0,console.error(t)}}}},p={class:"notifs"},w=["title"],v={key:1,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function y(t,k,n,B,S,e){const r=l("Generic");return s(),_(r,{item:n.item},{indicator:f(()=>[u("div",p,[e.downloads>0?(s(),o("strong",{key:0,class:"notif downloading",title:`${e.downloads} active download${e.downloads>1?"s":""}`},m(e.downloads),9,w)):a("",!0),t.error?(s(),o("i",v)):a("",!0)])]),_:1},8,["item"])}const g=c(h,[["render",y],["__scopeId","data-v-f2083280"]]);export{g as default};
