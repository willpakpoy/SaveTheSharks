(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],b=0,f=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cc9393b7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0086":function(e,t,n){},"07b2":function(e,t,n){},1180:function(e,t,n){},"1abd":function(e,t,n){"use strict";n("79f8")},2557:function(e,t,n){"use strict";n("447e")},3554:function(e,t,n){},"359f":function(e,t,n){"use strict";n("07b2")},"35c2":function(e,t,n){},"3a57":function(e,t,n){"use strict";n("a92d")},"447e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"content"};function o(e,t,n,o,c,s){var i=Object(r["v"])("navigation"),u=Object(r["v"])("router-view"),b=Object(r["v"])("attr");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(i),Object(r["f"])("div",a,[Object(r["f"])(u),Object(r["f"])(b)])],64)}var c=Object(r["A"])("data-v-369743f2");Object(r["r"])("data-v-369743f2");var s={id:"nav-wrap"},i=Object(r["f"])("nav",null,[Object(r["f"])("h1",null,"Save The Sharks"),Object(r["f"])("ul",null,[Object(r["f"])("li",null,"Home"),Object(r["f"])("li",null,"The Facts"),Object(r["f"])("li",null,"Do Something")])],-1),u=Object(r["f"])("hr",null,null,-1);Object(r["p"])();var b=c((function(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("div",s,[i,u])})),l={name:"Navigation"};n("bf82");l.render=b,l.__scopeId="data-v-369743f2";var f=l,d=Object(r["A"])("data-v-62a01be7");Object(r["r"])("data-v-62a01be7");var v={class:"footer f-outer"},O=Object(r["f"])("div",{class:"footer f-inner"},[Object(r["f"])("p",{class:"madeby"},[Object(r["e"])("👨‍💻 with ❤ by 🎓 "),Object(r["f"])("a",{href:"//willpakpoy.com",target:"_blank"},"Will Pak Poy")])],-1);Object(r["p"])();var j=d((function(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("div",v,[O])})),h={name:"Attr"};n("3a57");h.render=j,h.__scopeId="data-v-62a01be7";var m=h,p={components:{Navigation:f,Attr:m}};n("9cdc");p.render=o;var g=p,w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var y=n("6c02"),k=Object(r["A"])("data-v-50aca44d");Object(r["r"])("data-v-50aca44d");var _=Object(r["f"])("div",{id:"hero-1",class:"hero"},[Object(r["f"])("p",null,[Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/25/25415.svg"}),Object(r["e"])("Scroll to continue ")]),Object(r["f"])("p",null,[Object(r["e"])("Over 100 million"),Object(r["f"])("br"),Object(r["e"])("sharks are killed"),Object(r["f"])("br"),Object(r["e"])("every year.")])],-1);Object(r["p"])();var H=k((function(e,t,n,a,o,c){var s=Object(r["v"])("hero-set-1"),i=Object(r["v"])("hero-set-2"),u=Object(r["v"])("hero-set-3");return Object(r["o"])(),Object(r["d"])(r["a"],null,[_,Object(r["f"])(s),Object(r["f"])(i),Object(r["f"])(u)],64)})),S=Object(r["A"])("data-v-0bb066be");Object(r["r"])("data-v-0bb066be");var A={class:"hero-set-1"};Object(r["p"])();var z=S((function(e,t,n,a,o,c){var s=Object(r["v"])("why-sharks-are-important"),i=Object(r["v"])("a-healthy-ocean"),u=Object(r["v"])("carbon-emissions");return Object(r["o"])(),Object(r["d"])("div",A,[Object(r["f"])(s),Object(r["f"])(i),Object(r["f"])(u)])})),L=Object(r["A"])("data-v-3706f1b7");Object(r["r"])("data-v-3706f1b7");var I=Object(r["f"])("h1",null,"What sharks do for us",-1);Object(r["p"])();var P=L((function(e,t,n,a,o,c){var s=Object(r["v"])("hero-75");return Object(r["o"])(),Object(r["d"])(s,null,{default:L((function(){return[I]})),_:1})})),R=Object(r["A"])("data-v-2e5e6d22");Object(r["r"])("data-v-2e5e6d22");var T={class:"hero 75 outer"},X={class:"hero 75 inner"};Object(r["p"])();var C=R((function(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("div",T,[Object(r["f"])("div",X,[Object(r["u"])(e.$slots,"default")])])})),E={name:"Hero75"};n("359f");E.render=C,E.__scopeId="data-v-2e5e6d22";var x=E,W={name:"1WhySharksAreImportant",components:{Hero75:x}};n("64d2");W.render=P,W.__scopeId="data-v-3706f1b7";var F=W,M=Object(r["e"])("A healthy ocean"),N=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/2739/2739396.svg"},null,-1),q=Object(r["e"])(" Sharks help foster a healthy and robust marine ecosystem, by maintaining a structure to the food chain. This has a profound and lasting impact on the continued growth of the ecosystem. Marine biologists are already observing the detrimental impacts of a loss to the shark population. ");function $(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[M]})),image:Object(r["z"])((function(){return[N]})),default:Object(r["z"])((function(){return[q]})),_:1})}var D=Object(r["A"])("data-v-eb1ebdd0");Object(r["r"])("data-v-eb1ebdd0");var J={class:"lrx-hero"},B={class:"image"},G={class:"content"};Object(r["p"])();var K=D((function(e,t,n,a,o,c){var s=Object(r["v"])("hero-75");return Object(r["o"])(),Object(r["d"])(s,null,{default:D((function(){return[Object(r["f"])("div",J,[Object(r["f"])("div",B,[Object(r["u"])(e.$slots,"image")]),Object(r["f"])("div",G,[Object(r["f"])("h1",null,[Object(r["u"])(e.$slots,"header")]),Object(r["f"])("p",null,[Object(r["u"])(e.$slots,"default")])])])]})),_:3})})),Q={name:"LRX75Hero",components:{Hero75:x}};n("1abd");Q.render=K,Q.__scopeId="data-v-eb1ebdd0";var U=Q,V={name:"2AHealthyOcean",components:{LRX75Hero:U}};V.render=$;var Y=V,Z=Object(r["e"])("Sharks help reduce carbon emissions"),ee=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/3050/3050850.svg"},null,-1),te=Object(r["e"])(" Sharks aid in lowering carbon emissions by preventing overgrazing in seagrass meadows. Seagrass consumes vast amounts of carbon from the atmosphere and stores it within itself for energy. This greatly reduces the warming of the atmosphere from greenhouse gases. ");function ne(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[Z]})),image:Object(r["z"])((function(){return[ee]})),default:Object(r["z"])((function(){return[te]})),_:1})}var re={name:"3CarbonEmissions",components:{LRX75Hero:U}};re.render=ne;var ae=re,oe={name:"Home",components:{WhySharksAreImportant:F,AHealthyOcean:Y,CarbonEmissions:ae}};n("7bc3f");oe.render=z,oe.__scopeId="data-v-0bb066be";var ce=oe,se=Object(r["A"])("data-v-34bf0b32");Object(r["r"])("data-v-34bf0b32");var ie={class:"hero-set-2"};Object(r["p"])();var ue=se((function(e,t,n,a,o,c){var s=Object(r["v"])("what-we-do-to-sharks"),i=Object(r["v"])("commercial-shark-finning"),u=Object(r["v"])("entanglement-in-fishing-gear");return Object(r["o"])(),Object(r["d"])("div",ie,[Object(r["f"])(s),Object(r["f"])(i),Object(r["f"])(u)])})),be=Object(r["A"])("data-v-5d54062d");Object(r["r"])("data-v-5d54062d");var le=Object(r["f"])("h1",null,"What we do to sharks",-1);Object(r["p"])();var fe=be((function(e,t,n,a,o,c){var s=Object(r["v"])("hero-75");return Object(r["o"])(),Object(r["d"])(s,null,{default:be((function(){return[le]})),_:1})})),de={name:"1WhySharksAreImportant",components:{Hero75:x}};n("b35d");de.render=fe,de.__scopeId="data-v-5d54062d";var ve=de,Oe=Object(r["e"])("Commercial shark finning"),je=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/905/905576.svg"},null,-1),he=Object(r["e"])(" Commercial shark finning is the practice of catching a shark, removing it's fin, and then discarding the rest of the animal into the sea, where it dies a slow and painful death. This valuable resource is often used in traditional Chinese medicines, and shark fin soup. ");function me(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[Oe]})),image:Object(r["z"])((function(){return[je]})),default:Object(r["z"])((function(){return[he]})),_:1})}var pe={name:"2CommercialSharkFinning",components:{LRX75Hero:U}};pe.render=me;var ge=pe,we=Object(r["e"])("Entanglement in fishing gear"),ye=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/3555/3555785.svg"},null,-1),ke=Object(r["e"])(" Sharks often sadly become entangled in fishing gear, causing great harm to the animal. This could be disregarded commercial fishing equiptment, or 'ghost fishing gear'; equiptment that has been lost or disconnected from the boat and has been left in the ocean. ");function _e(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[we]})),image:Object(r["z"])((function(){return[ye]})),default:Object(r["z"])((function(){return[ke]})),_:1})}var He={name:"3CarbonEmissions",components:{LRX75Hero:U}};He.render=_e;var Se=He,Ae={name:"Home",components:{WhatWeDoToSharks:ve,CommercialSharkFinning:ge,EntanglementInFishingGear:Se}};n("cf74");Ae.render=ue,Ae.__scopeId="data-v-34bf0b32";var ze=Ae,Le=Object(r["A"])("data-v-556794fc");Object(r["r"])("data-v-556794fc");var Ie={class:"hero-set-2"};Object(r["p"])();var Pe=Le((function(e,t,n,a,o,c){var s=Object(r["v"])("society"),i=Object(r["v"])("loan-shark"),u=Object(r["v"])("pool-sharks");return Object(r["o"])(),Object(r["d"])("div",Ie,[Object(r["f"])(s),Object(r["f"])(i),Object(r["f"])(u)])})),Re=Object(r["A"])("data-v-880b21d0");Object(r["r"])("data-v-880b21d0");var Te=Object(r["f"])("h1",null,"How society paints sharks as animals",-1);Object(r["p"])();var Xe=Re((function(e,t,n,a,o,c){var s=Object(r["v"])("hero-75");return Object(r["o"])(),Object(r["d"])(s,null,{default:Re((function(){return[Te]})),_:1})})),Ce={name:"1Society",components:{Hero75:x}};n("2557");Ce.render=Xe,Ce.__scopeId="data-v-880b21d0";var Ee=Ce,xe=Object(r["e"])("Loan shark"),We=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/2721/2721156.svg"},null,-1),Fe=Object(r["e"])(" A loan shark is a person who loans money to an individual at excessively high interest rates. Loan sharks commonly employ violence to collect their debts. This paints sharks in an inaccurate and negative aspect, as sharks are responsible for a mere 10 deaths per year, compared to the 100 million sharks killed by humans. ");function Me(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[xe]})),image:Object(r["z"])((function(){return[We]})),default:Object(r["z"])((function(){return[Fe]})),_:1})}var Ne={name:"2LoanShark",components:{LRX75Hero:U}};Ne.render=Me;var qe=Ne,$e=Object(r["e"])("Pool sharks & greedy cheaters"),De=Object(r["f"])("img",{src:"https://www.flaticon.com/svg/static/icons/svg/1933/1933218.svg"},null,-1),Je=Object(r["e"])(" A pool shark is somebody who cheats or distracts players, in pool. Pool sharks often take advantage of the weaknesses of other players. This can be applied to other areas as well, such as a lawyer who is aggressive in their legal work. ");function Be(e,t,n,a,o,c){var s=Object(r["v"])("LRX75Hero");return Object(r["o"])(),Object(r["d"])(s,null,{header:Object(r["z"])((function(){return[$e]})),image:Object(r["z"])((function(){return[De]})),default:Object(r["z"])((function(){return[Je]})),_:1})}var Ge={name:"3PoolSharks",components:{LRX75Hero:U}};Ge.render=Be;var Ke=Ge,Qe={name:"Home",components:{Society:Ee,LoanShark:qe,PoolSharks:Ke}};n("b079");Qe.render=Pe,Qe.__scopeId="data-v-556794fc";var Ue=Qe,Ve={name:"Home",components:{HeroSet1:ce,HeroSet2:ze,HeroSet3:Ue}};n("6251");Ve.render=H,Ve.__scopeId="data-v-50aca44d";var Ye=Ve,Ze=[{path:"/",name:"Home",component:Ye},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],et=Object(y["a"])({history:Object(y["b"])("/"),routes:Ze}),tt=et,nt=n("5502"),rt=Object(nt["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(g).use(rt).use(tt).mount("#app")},6251:function(e,t,n){"use strict";n("0086")},"64d2":function(e,t,n){"use strict";n("3554")},"79f8":function(e,t,n){},"7bc3":function(e,t,n){},"7bc3f":function(e,t,n){"use strict";n("cc64")},"9cdc":function(e,t,n){"use strict";n("c701")},a92d:function(e,t,n){},b079:function(e,t,n){"use strict";n("35c2")},b35d:function(e,t,n){"use strict";n("d094")},bf82:function(e,t,n){"use strict";n("7bc3")},c701:function(e,t,n){},cc64:function(e,t,n){},cf74:function(e,t,n){"use strict";n("1180")},d094:function(e,t,n){}});
//# sourceMappingURL=app.4cc10262.js.map