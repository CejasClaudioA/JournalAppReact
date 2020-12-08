(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(31),s=n.n(r),o=n(7),i=n(60),u=n(22),l="[Auth] Login",d="[Auth] Logout",j="[UI] Set Error",p="[UI] Remove Error",b="[UI] Start Loading",f="[UI] Finish Loading",m="[Notes] New note",O="[Notes] Set active note",h="[Notes] Load notes",x="[Notes] Updated note",v="[Notes] Delete note",g="[Notes] Logout Cleaning",_=n(5),y={loading:!1,msgError:""},N=n(44),w={notes:[],active:null},k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,E=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{uid:t.payload.uid,name:t.payload.displayName};case d:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(_.a)(Object(_.a)({},e),{},{msgError:t.payload});case p:return Object(_.a)(Object(_.a)({},e),{},{msgError:null});case b:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case f:return Object(_.a)(Object(_.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(_.a)(Object(_.a)({},e),{},{active:Object(_.a)({},t.payload)});case m:return Object(_.a)(Object(_.a)({},e),{},{notes:[t.payload].concat(Object(N.a)(e.notes))});case h:return Object(_.a)(Object(_.a)({},e),{},{notes:Object(N.a)(t.payload)});case x:return Object(_.a)(Object(_.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case v:return Object(_.a)(Object(_.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case g:return Object(_.a)(Object(_.a)({},e),{},{active:null,notes:[]});default:return e}}}),C=Object(u.e)(E,k(Object(u.a)(i.a))),A=n(8),R=n.n(A),S=n(11),I=n(15),J=n(20),L=n(10),D=n(29);n(72),n(75);D.a.initializeApp({apiKey:"AIzaSyDLnSDKLmnMsJAs2GbTn1tB5f3P8Zw6pnA",authDomain:"journalappreact-23859.firebaseapp.com",databaseURL:"https://journalappreact-23859.firebaseio.com",projectId:"journalappreact-23859",storageBucket:"journalappreact-23859.appspot.com",messagingSenderId:"636096798472",appId:"1:636096798472:web:3a0dcce4b388df43bf16bd",measurementId:"G-SN6RKQ1EZ4"});var P=D.a.firestore(),U=new D.a.auth.GoogleAuthProvider,G=n(21),T=n.n(G),B=function(){var e=Object(S.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(_.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(S.a)(R.a.mark((function e(t){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ddvuy10fr/upload",(n=new FormData).append("upload_preset","JournalAppReact"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/ddvuy10fr/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return{type:O,payload:Object(_.a)({id:e},t)}},K=function(e,t){return{type:m,payload:Object(_.a)({id:e},t)}},W=function(e){return function(){var t=Object(S.a)(R.a.mark((function t(n){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:a=t.sent,n(X(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return{type:h,payload:e}},M=function(e){return function(){var t=Object(S.a)(R.a.mark((function t(n,a){var c,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.imageUrl||delete e.imageUrl,delete(r=Object(_.a)({},e)).id,t.next=6,P.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(Z(e.id,e)),T.a.fire("Guardado",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Z=function(e,t){return{type:x,payload:{id:e,note:Object(_.a)({id:e},t)}}},q=function(e){return{type:v,payload:e}},Q=function(e){return{type:j,payload:e}},V=function(){return{type:b}},Y=function(){return{type:f}},H=function(e,t){return{type:l,payload:{uid:e,displayName:t}}},$=function(){return{type:d}},ee=n(33),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(I.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(_.a)(Object(_.a)({},a),{},Object(ee.a)({},t.name,t.value)))};return[a,o,s]},ne=function(){var e=Object(o.b)(),t=te({email:"",password:""}),n=Object(I.a)(t,2),c=n[0],r=n[1],s=c.email,i=c.password,u=Object(o.c)((function(e){return e.ui})).loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title mb-5",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(n){n(V()),D.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(H(t.uid,t.displayName)),n(Y())})).catch((function(e){console.log(e),n(Y()),T.a.fire("ERROR",e.message,"error")}))}}(s,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"email",name:"email",autoComplete:"off",value:s,onChange:r}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"password",name:"password",value:i,onChange:r}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",disabled:u,type:"submit",children:"Iniciar Sesi\xf3n"}),Object(a.jsx)("div",{className:"auth__social-networks",children:Object(a.jsxs)("div",{className:"google-btn",onClick:function(t){t.preventDefault(),e((function(e){D.a.auth().signInWithPopup(U).then((function(t){var n=t.user;e(H(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Continuar con Google"})})]})}),Object(a.jsx)(J.b,{className:"link",to:"/JournalAppReact/auth/register",children:" Registarse"})]})]})},ae=n(61),ce=n.n(ae),re=function(){var e=Object(o.b)(),t=te({nombre:"",email:"",password:"",password2:""}),n=Object(I.a)(t,2),c=n[0],r=n[1],s=c.nombre,i=c.email,u=c.password,l=c.password2,d=Object(o.c)((function(e){return e.ui})).msgError,p=function(){return 0===s.trim().length?(e(Q("Se necesita el nombre")),!1):ce.a.isEmail(i)?u!==l||u.length<5?(e(Q("Error en el password")),!1):(e({type:j}),!0):(e(Q("Email invalido")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title mb-5",children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p()&&e(function(e,t,n){return function(a){a(V()),D.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(S.a)(R.a.mark((function e(t){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(H(c.uid,c.displayName)),a(Y);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),T.a.fire("ERROR",e.message,"error")}))}}(i,u,s))},className:"animate__animated animate__fadeIn animate__faster",children:[d&&Object(a.jsx)("div",{className:"auth__alert-error",children:d}),Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"Nombre",name:"nombre",autoComplete:"off",value:s,onChange:r}),Object(a.jsx)("input",{className:"auth__input",type:"text",placeholder:"Email",name:"email",autoComplete:"off",value:i,onChange:r}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"Password",name:"password",value:u,onChange:r}),Object(a.jsx)("input",{className:"auth__input",type:"password",placeholder:"Confirmar Password",name:"password2",value:l,onChange:r}),Object(a.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Registrarse"}),Object(a.jsx)(J.b,{className:"link mt-5",to:"/JournalAppReact/auth/login",children:" Ya est\xe1s registrado?"})]})]})},se=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(L.b,{exact:!0,path:"/JournalAppReact/auth/login",component:ne}),Object(a.jsx)(L.b,{exact:!0,path:"/JournalAppReact/auth/register",component:re}),Object(a.jsx)(L.a,{to:"/JournalAppReact/auth/login"})]})})})},oe=n(35),ie=function(e){var t=e.isAuthenticated,n=e.component,c=Object(oe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(_.a)({},e)):Object(a.jsx)(L.a,{to:"/JournalAppReact/auth/login"})}}))},ue=n(40),le=n.n(ue),de=(n(157),function(e){var t=e.id,n=e.date,c=e.title,r=e.body,s=e.url,i=le()(n),u=Object(o.b)();return Object(a.jsxs)("div",{className:"journal__entry animate__animated animate__fadeIn animate__faster",onClick:function(){u(F(t,{id:t,date:n,title:c,body:r,imageUrl:s}))},children:[s&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundPosition:"center",backgroundPositionX:-10,backgroundSize:"cover",backgroundImage:"url(".concat(s,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:c}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:i.format("dddd")}),Object(a.jsx)("h4",{children:i.format("D")})]})]})}),je=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(a.jsx)(de,Object(_.a)({},e),e.id)}))})},pe=function(){var e=Object(o.b)(),t=Object(c.useState)(0),n=Object(I.a)(t,2),r=n[0],s=n[1],i=Object(c.useRef)();Object(c.useLayoutEffect)((function(){var e=i.current.getBoundingClientRect().width;s(e)}),[]);var u=Object(o.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",style:{marginTop:5},children:[Object(a.jsxs)("h3",{ref:i,children:[Object(a.jsx)("i",{className:"fas fa-user",style:{marginTop:8}}),Object(a.jsxs)("span",{children:[" ",u]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(S.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.auth().signOut();case 2:t($()),t({type:g});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:Object(a.jsx)("i",{className:"fas fa-sign-out-alt fa-2x"})})]}),Object(a.jsx)("hr",{style:{color:"red",width:r}}),Object(a.jsxs)("div",{className:"journal__new-entry pointer",onClick:function(){e(function(){var e=Object(S.a)(R.a.mark((function e(t,n){var a,c,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,P.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(F(r.id,c)),t(K(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"Nueva Entrada"})]}),Object(a.jsx)(je,{})]})},be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"01 Diciembre 2020"}),Object(a.jsx)("input",{id:"fileSelector",name:"file",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(S.a)(R.a.mark((function t(n,a){var c,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,T.a.fire({title:"Subiendo...",text:"Espere por favor.",allowOutsideClick:!1,showCancelButton:!1,willOpen:function(){T.a.showLoading()}}),t.next=4,z(e);case 4:r=t.sent,c.url=r,n(M(c)),T.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Imagen"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(M(t))},children:"Guardar"})]})]})},fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=te(t),r=Object(I.a)(n,3),s=r[0],i=r[1],u=r[2],l=Object(c.useRef)(t.id),d=s.title,j=s.body,p=s.id;Object(c.useEffect)((function(){t.id!==l.current&&(u(t),l.current=t.id)}),[t,u]),Object(c.useEffect)((function(){e(F(s.id,Object(_.a)({},s)))}),[s,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(be,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Titulo",className:"notes__title-input",name:"title",value:d,onChange:i}),Object(a.jsx)("textarea",{placeholder:"Contenido",className:"notes__textarea",name:"body",value:j,onChange:i}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"Imagen"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(S.a)(R.a.mark((function t(n,a){var c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,P.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(q(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(p))},children:"Eliminar"})]})},me=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsx)("p",{children:"Selecci\xf3na alguna nota para visualizarla"}),Object(a.jsx)("i",{className:"far fa-sticky-note fa-8x"})]})},Oe=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(pe,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(fe,{}):Object(a.jsx)(me,{})})]})},he=function(e){var t=e.isAuthenticated,n=e.component,c=Object(oe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)("div",{children:Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(L.a,{to:"/JournalAppReact/"}):Object(a.jsx)(n,Object(_.a)({},e))}}))})},xe=function(){var e=Object(o.b)(),t=Object(c.useState)(!0),n=Object(I.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),u=Object(I.a)(i,2),l=u[0],d=u[1];return Object(c.useEffect)((function(){D.a.auth().onAuthStateChanged(function(){var t=Object(S.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(H(n.uid,n.displayName)),d(!0),e(W(n.uid))):d(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,d]),r?Object(a.jsx)("h1",{children:"Espere..."}):Object(a.jsx)(J.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(he,{path:"/JournalAppReact/auth",component:se,isAuthenticated:l}),Object(a.jsx)(ie,{exact:!0,isAuthenticated:l,path:"/JournalAppReact/",component:Oe}),Object(a.jsx)(L.a,{to:"/JournalAppReact/auth/login"})]})})})},ve=function(){return Object(a.jsx)(o.a,{store:C,children:Object(a.jsx)(xe,{})})};n(158);s.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.fd1c5984.chunk.js.map