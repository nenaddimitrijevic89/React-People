(this["webpackJsonpreact-bit-people"]=this["webpackJsonpreact-bit-people"]||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(30),l=t.n(s),c=(t(56),t(57),t(58),t(6)),i=t(16),u=t(17),m=t(24),o=t(20),f=t(19),d=t(21),E=t.n(d),h=t(25),g=function(e){var a=e.isList,t=e.onLayoutChange,n=e.updateUsers;return r.a.createElement(h.Navbar,{className:E.a.header,alignLinks:"right",brand:r.a.createElement("a",{className:"brand-logo"},"React People"),centerChildren:!0,id:"mobile-nav",menuIcon:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:E.a.menu}),r.a.createElement("div",{className:E.a.menu}),r.a.createElement("div",{className:E.a.menu})),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},r.a.createElement(h.NavItem,{onClick:n},r.a.createElement("i",{className:"fa fa-refresh"})),r.a.createElement(h.NavItem,null,a?r.a.createElement("i",{className:"fa fa-th-large",onClick:t}):r.a.createElement("i",{className:"fa fa-list",onClick:t})))};g.defaultProps={isList:!0};var p=t(43),b=(t(103),function(e){for(var a="",t="",n=!1,r="",s="",l=0;l<e.length;l++)"@"!==e[l]&&!1===n&&(t+=e[l]),("@"===e[l]||n)&&(n=!0,a+=e[l]);for(var c=0;c<t.length;c++)c<3&&(r+=t[c]),c+3!==t.length&&c+2!==t.length&&c+1!==t.length||(s+=t[c]);return"".concat(r,"...").concat(s).concat(a)}),v=t(44),N=function(e){var a=e.dob,t=e.img,n=e.name,s=e.email,l=e.last,c=e.gender,i=new Date(a),u=i.getFullYear(),m=i.getMonth()+1,o=i.getDate();return r.a.createElement(v.a,{className:"".concat("female"===c?"female":""," users__user"),lg:12},r.a.createElement("div",{className:"users__user_img"},r.a.createElement("img",{className:"users__user_img_radius",src:t})),r.a.createElement("div",{className:"users__user_info"},r.a.createElement("p",null,r.a.createElement("span",null," ",n," ",l)),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-envelope"})," email:",r.a.createElement("span",null," ",b(s))),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-birthday-cake"})," date of birth:",r.a.createElement("span",null," ","".concat(o,"-").concat(m,"-").concat(u)))))},_=(t(104),t(118)),k=function(e){var a=e.dob,t=e.img,n=e.name,s=e.email,l=e.gender,c=new Date(a),i=c.getFullYear(),u=c.getMonth()+1,m=c.getDate();return r.a.createElement(v.a,{className:"griduser",lg:4},r.a.createElement(_.a,{style:{width:""},className:"a"},r.a.createElement(_.a.Img,{variant:"top",src:t,alt:n}),r.a.createElement(_.a.Body,{className:"".concat("female"===l?"female":"")},r.a.createElement(_.a.Title,null,r.a.createElement("h1",{className:"gridUsers__user_name"},n)),r.a.createElement(_.a.Title,null,r.a.createElement("i",{className:"fa fa-envelope"})," ",b(s)),r.a.createElement(_.a.Title,null,r.a.createElement("i",{className:"fa fa-birthday-cake"})," date of birth:",r.a.createElement("span",null," ","".concat(m,"-").concat(u,"-").concat(i))))))},L=(t(105),t(115)),y=t(116),S=(t(106),function(){return r.a.createElement("div",{className:"sticky"},r.a.createElement("div",{className:"sk-cube-grid"},r.a.createElement("div",{className:"sk-cube sk-cube1"}),r.a.createElement("div",{className:"sk-cube sk-cube2"}),r.a.createElement("div",{className:"sk-cube sk-cube3"}),r.a.createElement("div",{className:"sk-cube sk-cube4"}),r.a.createElement("div",{className:"sk-cube sk-cube5"}),r.a.createElement("div",{className:"sk-cube sk-cube6"}),r.a.createElement("div",{className:"sk-cube sk-cube7"}),r.a.createElement("div",{className:"sk-cube sk-cube8"}),r.a.createElement("div",{className:"sk-cube sk-cube9"})))}),w=t(46),C=t.n(w),O=t(47),j=t.n(O),U=function(){return r.a.createElement(L.a,{className:j.a.sticky},r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement("img",{src:C.a}))))},V=(t(107),function(e){var a=e.users,t=0,n=0;return a.forEach((function(e){"male"===e.gender?t++:n++})),r.a.createElement(v.a,{className:"gender__counter"},r.a.createElement("p",null,"Male: ",t," Female: ",n))}),I=function(e){Object(o.a)(t,e);var a=Object(f.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;if(this.props.isLoading)return r.a.createElement(S,null);if(!this.props.users.length)return r.a.createElement(U,null);var a="";return this.props.isList||(a="usersGrid"),r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement(y.a,{className:"rowMargin"},r.a.createElement(V,{users:this.props.users}))),r.a.createElement(L.a,{className:"users ".concat(a)},r.a.createElement(y.a,{className:"rowMargin"},this.props.users.map((function(a,t){return e.props.isList?r.a.createElement(N,{key:t,img:a.picture.thumbnail,name:a.name.first,email:a.email,dob:a.dob.date,last:a.name.last,gender:a.gender}):r.a.createElement(k,Object(p.a)({key:t,gender:a.gender,img:a.picture.large,name:a.name.first,email:a.email,dob:a.dob.date},"gender",a.gender))})))))}}]),t}(r.a.Component),D=(t(108),t(50)),x=function(e){var a=e.time;return r.a.createElement(L.a,{fluid:!0,className:"footer"},r.a.createElement(L.a,null,r.a.createElement(y.a,{className:"footer__margin"},r.a.createElement(v.a,{className:"footer__info",lg:9}," ",r.a.createElement("h5",null,"\xa9 2020 Copyright BIT")),r.a.createElement(v.a,{lg:3,className:"footer__time"},r.a.createElement("h5",null,"Last update: ",r.a.createElement(D.a,{datetime:a}))))))},B=t(117),J=t(48),F=(t(109),function(e){Object(o.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).onSearch=function(a){e.props.searchedUsers(a.target.value)},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,null,r.a.createElement(y.a,null,r.a.createElement(v.a,{className:"searchBar"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-search searchBar__icon"})),r.a.createElement("span",{className:"searchBar__form"},r.a.createElement(B.a,null,r.a.createElement(J.a,{type:"text",value:this.props.inputValue,onChange:this.onSearch,placeholder:"Search users",className:"mr-sm-2 searchBar__form_border"}))))))}}]),t}(r.a.Component)),M=function(e){Object(o.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).getUsers=function(){n.setState({isLoading:!0}),fetch("https://randomuser.me/api/?results=15").then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){n.setState({users:e.results,filteredUsers:e.results,inputValue:"",timeAgo:new Date},(function(){localStorage.setItem("users",JSON.stringify(e.results))}))})).finally((function(){return n.setState({isLoading:!1})}))},n.searchedUsers=function(e){var a=n.state.users.filter((function(a){return a.name.first.toLowerCase().includes(e.toLowerCase())||a.name.last.toLowerCase().includes(e.toLowerCase())}));n.setState({inputValue:e,filteredUsers:a})},n.onLayoutChange=n.onLayoutChange.bind(Object(m.a)(n)),n.state={isListView:!0,users:[],filteredUsers:[],inputValue:"",isLoading:!1,timeAgo:""},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("users"),a=localStorage.getItem("isListView");e?(this.setState({users:JSON.parse(e),filteredUsers:JSON.parse(e)}),this.setState({isListView:JSON.parse(a)})):this.getUsers()}},{key:"onLayoutChange",value:function(){var e=this;this.setState({isListView:!this.state.isListView},(function(){localStorage.setItem("isListView",JSON.stringify(e.state.isListView))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{isList:this.state.isListView,onLayoutChange:this.onLayoutChange,updateUsers:function(){return e.getUsers()}}),r.a.createElement(F,{searchedUsers:this.searchedUsers,users:this.state.users,inputValue:this.state.inputValue}),r.a.createElement(I,{isList:this.state.isListView,users:this.state.filteredUsers,isLoading:this.state.isLoading}),r.a.createElement(x,{time:this.state.timeAgo}))}}]),t}(r.a.Component),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(L.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",null,"About"))),r.a.createElement(x,null))},T=function(){return r.a.createElement("div",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:M}),r.a.createElement(c.a,{exact:!0,path:"/about",component:A})))},H=(t(113),t(31));l.a.render(r.a.createElement(H.a,null,r.a.createElement(T,null)),document.getElementById("root"))},21:function(e,a,t){e.exports={header:"Header_header__2f-Dv",icon:"Header_icon__2vqeW",menu:"Header_menu__11ckS"}},46:function(e,a,t){e.exports=t.p+"static/media/not_found.74262339.png"},47:function(e,a,t){e.exports={sticky:"NotFound_sticky__3idC-"}},51:function(e,a,t){e.exports=t(114)},58:function(e,a,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.ae0863a4.chunk.js.map