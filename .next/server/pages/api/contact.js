"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,t){return t in n?n[t]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,t)):"function"==typeof n&&"default"===t?n:void 0}}})},2288:(e,n,t)=>{t.r(n),t.d(n,{config:()=>c,default:()=>d,routeModule:()=>m});var r={};t.r(r),t.d(r,{default:()=>l});var o=t(1802),a=t(7153),i=t(6249);let u=require("nodemailer");var s=t.n(u);function l(e,n){let t=s().createTransport({port:465,host:"smtp.gmail.com",auth:{user:"allison@branue.com",pass:"cfwplqbzznrmruxc"},secure:!0}),r={from:"allison@branue.com",to:"allison@branue.com",subject:"Email From Fusion Finance",html:`
      <div>
        <h2>Get In Touch</h2>
        <strong>Full Name</strong> : ${e.body.fullName} <br>
        <strong>Email</strong> : ${e.body.email} <br>
        <strong>Phone</strong> : ${e.body.phone} <br>
        <strong>County</strong> : ${e.body.county} <br>
        <strong>What are you interested in today?</strong> : ${e.body.interests}
      </div>
    `};t.sendMail(r,function(e,n){}),n.send("success")}let d=(0,i.l)(r,"default"),c=(0,i.l)(r,"config"),m=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:r})},7153:(e,n)=>{var t;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,n,t)=>{e.exports=t(145)}};var n=require("../../webpack-api-runtime.js");n.C(e);var t=n(n.s=2288);module.exports=t})();