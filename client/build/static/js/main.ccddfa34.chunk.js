(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(15),l=a(34),s=a(80),u=a(51),m=a(18),p=a(13),d=a.n(p),f=a(22),g=a(83),b=a(153),v=a(162),E=a(163),h=a(149),y=Object(h.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),x=a(74),j=a.n(x),O=a(35),C=a.n(O),w="https://memoriesss-app.herokuapp.com/posts",k=function(e,t){return C.a.patch("".concat(w,"/").concat(e),t)},I=function(e){return C.a.delete("".concat(w,"/").concat(e))},N=function(e){return C.a.patch("".concat(w,"/").concat(e,"/likePost"))},T=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,C.a.post(w,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},A=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(u.a)(c,2),l=i[0],s=i[1],p=Object(o.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),h=y(),x=Object(o.b)();Object(n.useEffect)((function(){p&&s(p)}),[p]);var O=function(){var e=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t?(x(S(t,l)),C()):(x(T(l)),C());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){a(null),s({creator:"",title:"",message:"",tags:"",selectedFile:""})};return r.a.createElement(g.a,{className:h.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(h.root," ").concat(h.form),onSubmit:O},r.a.createElement(b.a,{variant:"h6"}," ",t?"Editing":"Creating"," a memory"),r.a.createElement(v.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:l.creator,onChange:function(e){return s(Object(m.a)(Object(m.a)({},l),{},{creator:e.target.value}))}}),r.a.createElement(v.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object(m.a)(Object(m.a)({},l),{},{title:e.target.value}))}}),r.a.createElement(v.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:l.message,onChange:function(e){return s(Object(m.a)(Object(m.a)({},l),{},{message:e.target.value}))}}),r.a.createElement(v.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:l.tags,onChange:function(e){return s(Object(m.a)(Object(m.a)({},l),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:h.fileInput},r.a.createElement(j.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(m.a)(Object(m.a)({},l),{},{selectedFile:t}))}})),r.a.createElement(E.a,{className:h.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"SUBMIT"),r.a.createElement(E.a,{variant:"contained",color:"secondary",size:"small",onClick:C,fullWidth:!0},"CLEAR")))},D=a(158),L=a(159),_=Object(h.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),z=a(154),W=a(155),B=a(156),F=a(157),M=a(77),R=a.n(M),H=a(78),P=a.n(H),U=a(76),J=a.n(U),K=a(75),V=a.n(K),q=function(e){var t=e.post,a=e.setCurrentId,n=_(),c=Object(o.b)();return r.a.createElement(z.a,{className:n.card},r.a.createElement(W.a,{className:n.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:n.overlay},r.a.createElement(b.a,{variant:"h6"},t.creator),r.a.createElement(b.a,{variant:"body2"},V()(t.createdAt).fromNow())),r.a.createElement("div",{className:n.overlay2},r.a.createElement(E.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(J.a,{fontSize:"default"}))),r.a.createElement("div",{className:n.details},r.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(b.a,{className:n.title,variant:"h5",gutterBottom:!0},t.title),r.a.createElement(B.a,null,r.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(F.a,{className:n.cardActions},r.a.createElement(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(f.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(R.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount),r.a.createElement(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(P.a,{fontSize:"small"}),"\xa0 Delete")))},G=Object(h.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Q=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=G();return console.log(a),a.length?r.a.createElement(L.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(L.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(q,{post:e,setCurrentId:t}))}))):r.a.createElement(D.a,null)},X=a(160),Y=a(161),Z=a(164),$=a(48),ee=Object(h.a)((function(e){return Object($.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(255, 94, 105, 0.8)",fontStyle:"italic"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),te=a(79),ae=a.n(te),ne=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),l=ee();return Object(n.useEffect)((function(){i(function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(w);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]),r.a.createElement(X.a,{maxWidth:"lg"},r.a.createElement(Y.a,{className:l.appBar,position:"static",color:"inherit"},r.a.createElement(b.a,{className:l.heading,variant:"h2",align:"centre"},"Memories"),r.a.createElement("img",{className:l.image,src:ae.a,alt:"memories",height:"60"})),r.a.createElement(Z.a,{in:!0},r.a.createElement(X.a,null,r.a.createElement(L.a,{className:l.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(L.a,{item:!0,xs:12,sm:7},r.a.createElement(Q,{setCurrentId:c})),r.a.createElement(L.a,{item:!0,xs:12,sm:4},r.a.createElement(A,{currentId:a,setCurrentId:c}))))))},re=(a(119),a(81)),ce=Object(l.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(re.a)(e),[t.payload]);case"UPDATE":case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),ie=Object(l.d)(ce,Object(l.c)(Object(l.a)(s.a)));i.a.render(r.a.createElement(o.a,{store:ie},r.a.createElement(ne,null)),document.getElementById("root"))},79:function(e,t,a){e.exports=a.p+"static/media/memories.43af08a0.jpg"},88:function(e,t,a){e.exports=a(120)}},[[88,1,2]]]);
//# sourceMappingURL=main.ccddfa34.chunk.js.map