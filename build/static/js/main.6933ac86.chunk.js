(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c});var a=n(128),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a82e631f-9cd1-4e10-9d42-6b79a3605254"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},101:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},122:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(36),r=n(4),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},130:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},14:function(e,t,n){e.exports={nav:"Navbar_nav__19wLQ",item:"Navbar_item__xXAWj",activeLink:"Navbar_activeLink__2rH_q"}},160:function(e,t,n){e.exports=n(287)},165:function(e,t,n){},166:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var a=n(52),r=n(0),o=n.n(r),u=n(46),c=n.n(u),i=n(85),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,u=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,r),u&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",u)}},287:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(125),u=n.n(o),c=(n(165),n(31)),i=n(32),s=n(34),l=n(33),f=(n(166),n(14)),p=n.n(f),m=n(291),d=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(m.a,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(m.a,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(m.a,{to:"/users",activeClassName:p.a.activeLink},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement("a",null,"Settings")))},g=n(126),h=n(292),E=n(290),b=n(13),v=n(7),O=n.n(v),w=n(12),_=n(36),j=n(4),S=n(10),P=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),a):e})},C={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},y=function(e){return{type:"FOLLOW",userId:e}},k=function(e){return{type:"UNFOLLOW",userId:e}},I=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},x=function(){var e=Object(w.a)(O.a.mark(function e(t,n,a,r){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(N(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(N(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},L=n(52),A=n(65),F=n(92),R=n(41),z=n.n(R),D=n(129),G=n.n(D),M=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(a.useState)(1),d=Object(F.a)(m,2),g=d[0],h=d[1],E=(g-1)*i+1,b=g*i;return r.a.createElement("div",{className:z.a.paginator},g>1&&r.a.createElement("div",{className:z.a.portionChange},r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV")),l.filter(function(e){return e>=E&&e<=b}).map(function(e){return r.a.createElement("span",{className:G()(Object(A.a)({},z.a.selectedPage,o===e),z.a.pageNumber),key:e,onClick:function(t){u(e)}},e)}),p>g&&r.a.createElement("div",{className:z.a.portionChange},r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT")))},H=n(87),W=n.n(H),B=n(101),V=n.n(B),X=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(m.a,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:V.a,className:W.a.userPhoto}))),r.a.createElement("div",{className:W.a.follow},t.followed?r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},Y=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,u=e.users,c=Object(L.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(M,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,u.map(function(e){return r.a.createElement(X,{user:e,followingInProgress:c.followingInProgress,key:e.id,unfollow:c.unfollow,follow:c.follow})})))},J=n(35),Q=n(8),Z=n(131),q=Object(Z.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),K=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.totalUsersCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingInProgress},ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(J.a,null):null,r.a.createElement(Y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),re=Object(Q.d)(Object(b.b)(function(e){return{users:q(e),pageSize:K(e),totalUsersCount:$(e),currentPage:ee(e),isFetching:te(e),followingInProgress:ne(e)}},{follow:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(n){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,S.c.follow.bind(S.c),y);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(n){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,S.c.unfollow.bind(S.c),k);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,toggleFollowingProgress:N,getUsers:function(e,t){return function(){var n=Object(w.a)(O.a.mark(function n(a){var r;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(T(!0)),a(I(e)),n.next=4,S.c.getUsers(e,t);case 4:r=n.sent,a(T(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ae),oe=n(88),ue=n.n(oe),ce=function(e){return r.a.createElement("header",{className:ue.a.header},r.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")," "):r.a.createElement(m.a,{to:"/login"},"Login")))},ie=n(21),se={userId:null,email:null,login:null,isAuth:!1},le=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},fe=function(){return function(){var e=Object(w.a)(O.a.mark(function e(t){var n,a,r,o,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,u=a.email,t(le(r,u,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},me=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),n}(r.a.Component),de=Object(b.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(w.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(me),ge=n(123),he=n(28),Ee=n(82),be=n(289),ve=n(46),Oe=n.n(ve),we=Object(ge.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(he.c)("Email","email",[Ee.b],he.a),Object(he.c)("Password","password",[Ee.b],he.a,{type:"password"}),Object(he.c)(null,"rememberMe",[],he.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:Oe.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),_e=Object(b.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var a=Object(w.a)(O.a.mark(function a(r){var o,u;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(fe()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(ie.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(be.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),je={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Pe=n(91),Ce=n(122),ye={},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;arguments.length>1&&arguments[1];return e},Ie=n(133),Te=n(124),Ne=Object(Q.c)({profilePage:Pe.b,dialogsPage:Ce.a,sidebar:ke,usersPage:U,auth:pe,form:Te.a,app:Se}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Ue=Object(Q.e)(Ne,xe(Object(Q.a)(Ie.a)));window.__store__=Ue;var Le=Ue,Ae=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(J.a,null)},r.a.createElement(e,t))}},Fe=r.a.lazy(function(){return n.e(4).then(n.bind(null,298))}),Re=r.a.lazy(function(){return n.e(3).then(n.bind(null,297))}),ze=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(de,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.a,{path:"/dialogs",render:Ae(Fe)}),r.a.createElement(g.a,{path:"/profile/:userId?",render:Ae(Re)}),r.a.createElement(g.a,{path:"/users",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(g.a,{path:"/login",render:function(){return r.a.createElement(_e,null)}}))):r.a.createElement(J.a,null)}}]),n}(a.Component),De=Object(Q.d)(h.a,Object(b.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(ze),Ge=function(e){return r.a.createElement(E.a,null,r.a.createElement(b.a,{store:Le},r.a.createElement(De,null)))};u.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(130),u=n.n(o);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:u.a}))}},41:function(e,t,n){e.exports={paginator:"Paginator_paginator__15o4-",pageNumber:"Paginator_pageNumber__2QbJC",selectedPage:"Paginator_selectedPage__1KPh7",portionChange:"Paginator_portionChange__2vPW_"}},46:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1PL4u",error:"FormsControls_error__R60aZ",formSummaryError:"FormsControls_formSummaryError__2D7ns"}},82:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3A6Mm",follow:"users_follow__3itPD"}},88:function(e,t,n){e.exports={header:"Header_header__2xgQA",loginBlock:"Header_loginBlock__zw6kR"}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return E});var a=n(7),r=n.n(a),o=n(12),u=n(36),c=n(4),i=n(10),s=n(21),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(m(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.6933ac86.chunk.js.map