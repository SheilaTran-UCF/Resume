(this.webpackJsonpcvonline=this.webpackJsonpcvonline||[]).push([[0],{34:function(e,a,t){e.exports=t(75)},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),s=(t(39),t(6)),m=l.a.memo((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"main-wrapper"},l.a.createElement("div",{className:"columns-block container"},e.children)))})),i=l.a.memo((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"left-col-block blocks"},e.children))})),o=t(4),u=function(e){return e.resume},d=(Object(o.a)(u,(function(e){return e.loading})),Object(o.a)(u,(function(e){return e.dataResume.introduction}))),E=Object(o.a)(u,(function(e){return e.dataResume.skills})),v=Object(o.a)(u,(function(e){return e.dataResume.education})),p=Object(o.a)(u,(function(e){return e.dataResume.experience})),N=Object(o.a)(u,(function(e){return e.dataResume.interest})),f=Object(o.a)(u,(function(e){return e.dataResume.contact})),b=t(77),g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section-wrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(b.a,{active:!0}))))},h=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({introduction:d})).introduction;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("header",{className:"header theiaStickySidebar"},l.a.createElement("div",{className:"profile-img"},l.a.createElement("img",{src:"img/".concat(e.avatar),className:"img-responsive",alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,e.full_name),l.a.createElement("span",{className:"lead"},e.title),l.a.createElement("div",{className:"about-text"},l.a.createElement("p",null,e.description),l.a.createElement("p",null,l.a.createElement("img",{src:"img/Signature.png",alt:"",className:"img-responsive"}))),l.a.createElement("ul",{className:"social-icon"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-slack","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-dribbble","aria-hidden":"true"})))))):l.a.createElement(g,null))})),k=l.a.memo((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"right-col-block blocks"},e.children))})),_=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({skills:E})).skills;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("section",{className:"section-wrapper skills-wrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Skills")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"progress-wrapper"},e.map((function(e,a){return l.a.createElement("div",{className:"progress-item"},l.a.createElement("span",{className:"progress-title"},e.skill_name),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"".concat(e.skill_level),"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(e.skill_level,"%")}},l.a.createElement("span",{className:"progress-percent"}," ",e.skill_level,"%"))))}))))))):l.a.createElement(g,null))})),w=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({experience:p})).experience;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("section",{className:"section-wrapper section-experience gray-bg"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Work Experience")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},e.map((function(e,a){return l.a.createElement("div",{className:"content-item",key:a},l.a.createElement("small",null,e.time),l.a.createElement("h3",null,e.level),l.a.createElement("h4",null,e.company),l.a.createElement("p",null,e.address))})))))):l.a.createElement(g,null))})),O=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({education:v})).education;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("section",{className:"section-wrapper section-education"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Education")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},e.map((function(e,a){return l.a.createElement("div",{className:"content-item"},l.a.createElement("small",null,e.time),l.a.createElement("h3",null,e.name),l.a.createElement("h4",null,e.school),l.a.createElement("p",null,e.add))})))))):l.a.createElement(g,null))})),j=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({interest:N})).interest;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("section",{className:"section-wrapper section-interest gray-bg"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Interest")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"content-item"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.description))})))))):l.a.createElement(g,null))})),y=l.a.memo((function(){var e=Object(s.c)(Object(o.b)({contact:f})).contact;return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("section",{className:"section-contact section-wrapper gray-bg"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Contact")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("address",null,l.a.createElement("strong",null,"Address"),l.a.createElement("br",null),e.address),l.a.createElement("address",null,l.a.createElement("strong",null,"Phone Number"),l.a.createElement("br",null),e.phone),l.a.createElement("address",null,l.a.createElement("strong",null,"Mobile Number"),l.a.createElement("br",null),e.phone),l.a.createElement("address",null,l.a.createElement("strong",null,"Email"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)))))):l.a.createElement(g,null))})),S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"copyright-section"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"copytext"},"\xa9 Resumex. All rights reserved - 2020")))))))},A=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e({type:"GET_DATA"})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null,l.a.createElement(i,null,l.a.createElement(h,null)),l.a.createElement(k,null,l.a.createElement(_,null),l.a.createElement(w,null),l.a.createElement(O,null),l.a.createElement(j,null),l.a.createElement(y,null),l.a.createElement(S,null))))},T=t(8),x=t(31),F=t(33),R=t(15),C={loading:!1,dataResume:[],error:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING_GET_DATA":return Object(R.a)({},e,{},{loading:a.loading});case"GET_DATA_SUCESS":return Object(R.a)({},e,{},{loading:!1,dataResume:a.data,error:null});case"GET_DATA_FAIL":return Object(R.a)({},e,{},{loading:!1,error:a.error,dataResume:[]});default:return e}},G=Object(T.combineReducers)({resume:D}),I=t(7),L=t.n(I),H=t(9),J={introduction:{full_name:"Sheila Ng",avatar:"img-profile.jpg",title:"Fullstack web-app developer",description:"Programming is life. No code No life "},skills:[{skill_name:"HTML/HTML5",skill_level:95},{skill_name:"CSS/CSS3/SCSS/SASS",skill_level:80},{skill_name:"Javascript / Jquery",skill_level:95},{skill_name:"ReactJS",skill_level:90},{skill_name:"Vuejs",skill_level:70},{skill_name:"React Native",skill_level:90},{skill_name:"NodeJS",skill_level:80},{skill_name:"PHP",skill_level:95},{skill_name:"Golang / C / C++",skill_level:60},{skill_name:"MySQL",skill_level:80},{skill_name:"Cache",skill_level:70},{skill_name:"Redis",skill_level:70},{skill_name:"ResAPI / Soap / GraphQL",skill_level:80}],experience:[{time:"2016 - Present",level:"Senior developer",company:"Vccorp joint stock company",address:"19F, Hapulico center tower, number 1 Nguyen Huy Tuong, Thanh Xuan , Ha Noi"},{time:"2014 - 2016",level:"Junior developer",company:"Viet Nhat General Joint Stock Company (VINICORP)",address:"14F, ICON4 TOWER, 243A La Thanh St., Lang Thuong, Dong Da, Ha Noi, VIETNAM"}],education:[{time:"2008 - 2012",name:"computer science",school:"Ha Noi university of industry",rank:"good",add:"km32 Bac Tu Liem - Ha Noi"}],interest:[{name:"Play sport",description:"Football, Chess ..."},{name:"Read book",description:"Books of technology"}],contact:{phone:"0705414958",address:"261 nguyen dinh chieu, p5, q3, tpHCM",email:"minhngoc2126@gmail.com"}},M=L.a.mark(P);function P(){var e;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J;case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}),M)}var V=P,W=L.a.mark(q),B=L.a.mark(Q);function q(){var e;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(H.c)({type:"LOADING_GET_DATA",loading:!0});case 3:return a.next=5,Object(H.b)(V);case 5:if(!(e=a.sent)){a.next=11;break}return a.next=9,Object(H.c)({type:"GET_DATA_SUCESS",data:e});case 9:a.next=13;break;case 11:return a.next=13,Object(H.c)({type:"GET_DATA_FAIL",error:"error"});case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),console.error(a.t0);case 18:case"end":return a.stop()}}),W,null,[[0,15]])}function Q(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)("GET_DATA",q);case 2:case"end":return e.stop()}}),B)}var U=L.a.mark(X);function X(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(Q)]);case 2:case"end":return e.stop()}}),U)}var $=Object(F.a)(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(T.createStore)(G,e,Object(x.composeWithDevTools)(Object(T.applyMiddleware)($)));return $.run(X),{store:a}}().store;var K=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{store:z},l.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f346314d.chunk.js.map