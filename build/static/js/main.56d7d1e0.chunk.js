(this.webpackJsonpWebApp=this.webpackJsonpWebApp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),o=a(53),c=a(28),m=a(149),u=a(122),d=a(141),s=a(142),p=Object(d.a)((function(e){return{footer:{padding:e.spacing(6)}}}));function f(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(s.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var E=function(){var e=p();return r.a.createElement("footer",{className:e.footer},r.a.createElement(u.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(f,null))},g=a(156),h=a(145),b=a(143),v=a(152),y=a(144),x=function(e){var t=e.position;return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(u.a,{variant:"h6",align:"left"},r.a.createElement(y.a,{id:"information.".concat(t,".title")})),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(y.a,{id:"information.".concat(t,".visualize")})),r.a.createElement("p",null,r.a.createElement(y.a,{id:"information.".concat(t,".learn")})),r.a.createElement("p",null,r.a.createElement(y.a,{id:"information.".concat(t,".deal")})))),r.a.createElement(h.a,null,r.a.createElement(v.a,{color:"primary",variant:"contained",size:"small"},r.a.createElement(y.a,{id:"information.".concat(t,".button"),defaultMessage:"Locate"})))))},O=a(146),j=a(147),S=Object(d.a)((function(e){return{heroContent:{background:e.palette.backgroundMain,padding:e.spacing(2,0,6),color:"#ffffff",mixBlendMode:"normal",boxShadow:e.palette.boxShadow},heroButtons:{marginTop:e.spacing(4),color:"#ffffff"},heroTitle:{width:"70%"}}})),k=function(){var e=S();return r.a.createElement("div",{className:e.heroContent},r.a.createElement(O.a,null,r.a.createElement("div",{className:e.heroTitle},r.a.createElement(u.a,{variant:"h3",align:"left",gutterBottom:!0},r.a.createElement(y.a,{id:"header.title"}))),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(j.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(j.a,{item:!0,md:6},r.a.createElement(x,{position:"left"})),r.a.createElement(j.a,{item:!0,md:6},r.a.createElement(x,{position:"right"}))))))},w=a(23),C=a(31),N=a(24),T=a(26),L=a(56),D=a.n(L),F=a(72),M=a(73),W=a.n(M).a.create({baseURL:"http://localhost:3001"}),z=Object(d.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(4)},card:{height:"100%",display:"flex",flexDirection:"column",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);",borderRadius:"4px"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),B=function(e){var t=e.category,a=z();return r.a.createElement(j.a,{item:!0,key:t.id,xs:6,sm:3,md:2},r.a.createElement(g.a,{className:a.card},r.a.createElement(b.a,{className:a.cardContent,align:"center"},r.a.createElement(u.a,{variant:"h5",align:"center"},t.quantity),r.a.createElement(u.a,{variant:"span",align:"center"},t.name))),r.a.createElement(h.a,null,r.a.createElement(v.a,{color:"primary",variant:"contained",fullWidth:!0,size:"small"},r.a.createElement(y.a,{id:"category.card.locate"}))))},R=function(e){Object(N.a)(a,e);var t=Object(T.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"renderContainer",value:function(e){return r.a.createElement(O.a,{maxWidth:"lg"},r.a.createElement(j.a,{container:!0,spacing:4},e.map((function(e){return r.a.createElement(B,{category:e,key:e.id})}))))}},{key:"renderList",value:function(){var e=this.props.categories;return e&&e.length>0?this.renderContainer(e):r.a.createElement("div",null,"Loading ...")}},{key:"render",value:function(){return this.renderList()}}]),a}(r.a.Component),A=Object(o.b)((function(e){return{categories:Object.values(e.categories)}}),{fetchCategories:function(){return function(){var e=Object(F.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/categories");case 2:a=e.sent,t({type:"FETCH_CATEGORIES",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(R),H=a(148),G=function(){return r.a.createElement(H.a,null,r.a.createElement(u.a,{variant:"h5"},r.a.createElement(y.a,{id:"app.text",defaultMessage:"Mensageo"})))},q=a(151),I=function(){return r.a.createElement(q.a,{component:"p",m:6},r.a.createElement(u.a,{variant:"h4",align:"center"},r.a.createElement(y.a,{id:"need.update.title"})),r.a.createElement(u.a,{variant:"body1",align:"center"},r.a.createElement(y.a,{id:"need.update.last"}),(new Date).toLocaleString()))},J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(G,null),r.a.createElement("main",null,r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(A,null)),r.a.createElement(E,null))},U=a(18),Y=Object(U.a)(),V=a(155),_=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui container"},r.a.createElement(V.b,{history:Y},r.a.createElement("div",null,r.a.createElement(V.c,null,r.a.createElement(V.a,{path:"/",exact:!0,component:J}))))))},K=a(75),P=a(76),Q=a.n(P),X=Object(c.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(K.a)({},e,{},Q.a.mapKeys(t.payload,"id"));default:return e}}}),Z=a(77),$=a(153),ee=a(150),te=a(79),ae=Object(te.a)({palette:{primary:{main:"#2196F3",contrastText:"#ffffff"},secondary:{main:"#333"},backgroundColor:"#2196F3",backgroundMain:"linear-gradient(90deg, #2196F3 0%, #2092D1 100%)",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.24)"},typography:{fontStyle:"normal",fontWeight:500,letterSpacing:"1.25px",h5:{textTransform:"uppercase"},h6:{color:"#2196F3"}},mixins:{toolbar:{minHeight:64,backgroundColor:"#2196F3",background:"linear-gradient(90deg, #2196F3 0%, #2092D1 100%)",color:"#ffffff",paddingLeft:"13%"}}}),ne=a(78);l.a.render(r.a.createElement(o.a,{store:Object(c.d)(X,Object(c.a)(Z.a))},r.a.createElement(ee.a,{theme:ae},r.a.createElement($.a,{locale:"en",messages:ne},r.a.createElement(_,null)))),document.querySelector("#root"))},78:function(e){e.exports=JSON.parse('{"app.text":"Mensageo","category.card.locate":"Locate","information.left.visualize":"* Visualize and locate real, updated hospital needs. Start helping today!","information.left.learn":"* Learn about specifications. No more rejections of unusable material.","information.left.deal":"* Deal directly with the end user. No middlemen and no fees.","information.left.title":"Makers","information.left.button":"BROWSE WHAT\u2019S NEEDED","information.right.visualize":"* Visualize and locate real, updated hospital needs. Start helping today!","information.right.learn":"* Learn about specifications. No more rejections of unusable material.","information.right.deal":"* Deal directly with the end user. No middlemen and no fees.","information.right.title":"Health Professionals","information.right.button":"LIST YOUR NEEDS","header.title":"We connect health organizations with makers of critical equipment.","need.update.title":"There\u2019s a need for...","need.update.last":"Last Updated: "}')},90:function(e,t,a){e.exports=a(119)}},[[90,1,2]]]);
//# sourceMappingURL=main.56d7d1e0.chunk.js.map