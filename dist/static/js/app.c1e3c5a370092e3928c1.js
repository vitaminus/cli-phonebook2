webpackJsonp([1],{"96cd":function(e,a){},Kkia:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("7+uW"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},n,!1,function(e){t("gsu9")},null,null).exports,r=t("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("p")])}]},l=t("VU/8")(null,o,!1,null,null,null).exports,c=t("Sazm"),d=t.n(c),m=Object(c.initializeApp)({apiKey:"AIzaSyAFwmILHGMUh-k2JbaPgLZRpB215hvNq08",authDomain:"cli-phonebook2.firebaseapp.com",databaseURL:"https://cli-phonebook2.firebaseio.com",projectId:"cli-phonebook2",storageBucket:"cli-phonebook2.appspot.com",messagingSenderId:"28993053688"}).database(),u=m.ref("phones"),v=(m.ref("users"),t("hlPV")),p={name:"Phones",components:{EditPhone:l,TheMask:v.TheMask},data:function(){return{title:"Phonebook",filter:"",phones:[],edit:!1,phone:{name:"",number:""}}},firebase:{phones:u},computed:{allPhones:function(){return this.filteredPhones.length},filteredPhones:function(){var e=this,a=this.currentUser.uid;return this.phones.filter(function(t){return t.name.toLowerCase().includes(e.filter)&&t.userId===a})},currentUser:function(){return d.a.auth().currentUser}},methods:{addPhone:function(){var e=this;this.$validator.validateAll().then(function(a){if(a){var t=e.currentUser.uid;u.push({name:e.phone.name,number:e.phone.number,userId:t,edit:!1}),e.phone.name="",e.phone.number="",e.$validator.reset()}})},editPhone:function(e){u.child(e).update({edit:!0})},removePhone:function(e){u.child(e).remove()},cancelEdit:function(e){u.child(e).update({edit:!1})},saveEdit:function(e){var a=this;this.$validator.validateAll().then(function(t){if(t){var s=e[".key"];u.child(s).set({name:e.name,number:e.number,edit:!1}),a.phone.name="",a.phone.number="",a.$validator.reset()}})},logout:function(){var e=this;d.a.auth().signOut().then(function(){e.$router.replace("login")})}}},h={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("div",{staticClass:"col s12 right-align logout"},[t("span",[e._v(e._s(e.currentUser.email))]),e._v(" "),t("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")])]),e._v(" "),t("div",{staticClass:"row"}),e._v(" "),t("h1",[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"input-field col s6 l5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone.name,expression:"phone.name"},{name:"validate",rawName:"v-validate",value:"required|min:5|max:40|alpha_spaces",expression:"'required|min:5|max:40|alpha_spaces'"}],attrs:{type:"text",name:"name",id:"phone-name"},domProps:{value:e.phone.name},on:{input:function(a){a.target.composing||e.$set(e.phone,"name",a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"phone-name"}},[e._v("Name")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"error"},[e._v(e._s(e.errors.first("name")))])]),e._v(" "),t("div",{staticClass:"input-field col s6 l5"},[t("the-mask",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:19",expression:"'required|min:19'"}],attrs:{type:"text",mask:["+### (##)-###-##-##"],masked:!0,id:"phone-number",name:"number"},model:{value:e.phone.number,callback:function(a){e.$set(e.phone,"number",a)},expression:"phone.number"}}),e._v(" "),t("label",{attrs:{for:"phone-number"}},[e._v("Number")]),e._v(" "),t("div",{staticClass:"error-block"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("number"),expression:"errors.has('number')"}],staticClass:"error"},[e._v(e._s(e.errors.first("number")))])])],1),e._v(" "),t("button",{staticClass:"btn col s12 l2",attrs:{disabled:e.errors.any()},on:{click:function(a){e.addPhone()}}},[e._v("Add Phone")]),e._v(" "),t("div"),e._v(" "),t("EditPhone",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],attrs:{phones:"phones"}}),e._v(" "),t("h6",{staticClass:"col s12 right-align"},[e._v("Phones count: "+e._s(e.allPhones))]),e._v(" "),t("div",{staticClass:"input-field col offset-s7 s5 offset-l9 l3 right-align"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{type:"text",id:"phones-filter"},domProps:{value:e.filter},on:{input:function(a){a.target.composing||(e.filter=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"phones-filter"}},[e._v("Filter by name")])]),e._v(" "),e.filteredPhones.length?t("div",[t("div",{staticClass:"hide-on-small-only"},[t("table",{staticClass:"highlight centered"},[e._m(0),e._v(" "),e._l(e.filteredPhones,function(a){return t("tbody",{key:a[".key"]},[a.edit?t("tr",[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"phone.name"},{name:"validate",rawName:"v-validate",value:"required|min:5|max:40",expression:"'required|min:5|max:40'"}],attrs:{type:"text",id:"phone-name",name:"name"},domProps:{value:a.name},on:{input:function(t){t.target.composing||e.$set(a,"name",t.target.value)}}})]),e._v(" "),t("td",[t("the-mask",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:19",expression:"'required|min:19'"}],attrs:{type:"text",name:"number",mask:["+### (##)-###-##-##"],masked:!0,id:"phone-number"},model:{value:a.number,callback:function(t){e.$set(a,"number",t)},expression:"phone.number"}})],1),e._v(" "),t("td",[t("button",{staticClass:"btn-small",on:{click:function(t){e.saveEdit(a)}}},[e._v("Save")])]),e._v(" "),t("td",[t("button",{staticClass:"btn-small",on:{click:function(t){e.cancelEdit(a[".key"])}}},[e._v("Cancel")])])]):t("tr",[t("td",[e._v(e._s(a.name))]),e._v(" "),t("td",[e._v(e._s(a.number))]),e._v(" "),t("td",[t("button",{staticClass:"btn-small",on:{click:function(t){e.editPhone(a[".key"])}}},[e._v("Edit")])]),e._v(" "),t("td",[t("button",{staticClass:"btn-small",on:{click:function(t){e.removePhone(a[".key"])}}},[e._v("Remove")])])])])})],2)]),e._v(" "),t("div",{staticClass:"hide-on-med-and-up"},e._l(e.filteredPhones,function(a){return t("div",{key:a[".key"],staticClass:"col s12"},[a.edit?t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"phone.name"},{name:"validate",rawName:"v-validate",value:"required|min:5|max:40",expression:"'required|min:5|max:40'"}],attrs:{type:"text",id:"phone-name",name:"name"},domProps:{value:a.name},on:{input:function(t){t.target.composing||e.$set(a,"name",t.target.value)}}}),e._v(" "),t("the-mask",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:19",expression:"'required|min:19'"}],attrs:{type:"text",name:"number",mask:["+### (##)-###-##-##"],masked:!0,id:"phone-number"},model:{value:a.number,callback:function(t){e.$set(a,"number",t)},expression:"phone.number"}})],1),e._v(" "),t("div",{staticClass:"card-action"},[t("button",{staticClass:"btn",on:{click:function(t){e.saveEdit(a)}}},[e._v("Save")]),e._v(" "),t("button",{staticClass:"btn",on:{click:function(t){e.cancelEdit(a[".key"])}}},[e._v("Cancel")])])]):t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("span",{staticClass:"card-title"},[e._v(e._s(a.name))]),e._v(" "),t("span",{staticClass:"card-title"},[e._v(e._s(a.number))])]),e._v(" "),t("div",{staticClass:"card-action"},[t("button",{staticClass:"btn",on:{click:function(t){e.editPhone(a[".key"])}}},[e._v("Edit")]),e._v(" "),t("button",{staticClass:"btn",on:{click:function(t){e.removePhone(a[".key"])}}},[e._v("Remove")])])])])}))]):t("div",[t("p",{staticClass:"col offset-s4 s4 not-found"},[e._v("Phones not found")])])],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"35%"}},[this._v("Name")]),this._v(" "),a("th",{attrs:{width:"35%"}},[this._v("Number")]),this._v(" "),a("th",{attrs:{width:"30%",colspan:"2"}},[this._v("Action")])])])}]};var f=t("VU/8")(p,h,!1,function(e){t("TlNU")},"data-v-6e7d6a40",null).exports,_={name:"login",data:function(){return{email:"",password:"",message:"",hasError:!1}},methods:{signIn:function(){var e=this;e.message="",e.hasError=!1,d.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(a){e.hasError=!1,e.email="",e.password="",e.$validator.reset(),console.log("Logged in!"),this.$router.replace("phones")},function(a){console.log("Error!!! "+a.message),e.hasError=!0,e.message=a.message})}}},g={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("h3",[e._v("Sign In")]),e._v(" "),t("div",{staticClass:"col s12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"input-field col offset-s3 s6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate",attrs:{type:"email",name:"email",id:"user-email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"user-email"}},[e._v("Email")])]),e._v(" "),t("div",{staticClass:"input-field col offset-s3 s6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",name:"password",id:"user-password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"user-password"}},[e._v("Password")])])]),e._v(" "),t("div",{staticClass:"row"},[t("button",{staticClass:"btn",on:{click:e.signIn}},[e._v("Enter")])]),e._v(" "),t("span",[e._v("or create new "),t("router-link",{attrs:{to:"/sign-up"}},[e._v("account")]),e._v(".")],1)])])},staticRenderFns:[]};var b=t("VU/8")(_,g,!1,function(e){t("96cd")},"data-v-cde9317e",null).exports,w={name:"signUp",data:function(){return{email:"",password:"",message:"",hasError:!1}},methods:{signUp:function(){var e=this;e.message="",e.hasError=!1,d.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(a){e.message="Accout created successfully!",e.hasError=!1,e.email="",e.password="",e.$validator.reset(),setTimeout(function(){e.message=""},3e3)},function(a){console.log("Error!!!"+a.message),e.hasError=!0,e.message=a.message})}}},C={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("h3",[e._v("Sign Up")]),e._v(" "),t("div",{staticClass:"col s12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"input-field col offset-s3 s6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|min:10|max:50|email",expression:"'required|min:10|max:50|email'"}],staticClass:"validate",attrs:{type:"email",name:"email",id:"user-email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"user-email"}},[e._v("Email")]),e._v(" "),t("div",{staticClass:"error-block"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[e._v(e._s(e.errors.first("email")))])])]),e._v(" "),t("div",{staticClass:"input-field col offset-s3 s6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required|min:9|max:30",expression:"'required|min:9|max:30'"}],staticClass:"validate",attrs:{type:"password",name:"password",id:"user-password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),e._v(" "),t("label",{attrs:{for:"user-password"}},[e._v("Password")]),e._v(" "),t("div",{staticClass:"error-block"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"error"},[e._v(e._s(e.errors.first("password")))])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"row"},[t("div",{staticClass:"col offset-s2 s8 error"},[e._v(e._s(e.message))])]),e._v(" "),t("div",{staticClass:"row"},[t("button",{staticClass:"btn",attrs:{disabled:e.errors.any()},on:{click:e.signUp}},[e._v("Sign Up")])]),e._v(" "),t("span",[e._v("or go back to "),t("router-link",{attrs:{to:"/login"}},[e._v("login")])],1)])])},staticRenderFns:[]};var k=t("VU/8")(w,C,!1,function(e){t("Kkia")},"data-v-1f308a74",null).exports;s.a.use(r.a);var x=new r.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/phones",name:"Phones",component:f,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:b},{path:"/sign-up",name:"SignUp",component:k}]});x.beforeEach(function(e,a,t){var s=d.a.auth().currentUser,n=e.matched.some(function(e){return e.meta.requiresAuth});n&&!s?t("login"):!n&&s?t("phones"):t()});var P=x,E=t("1mcD"),y=t.n(E),N=t("sUu7");s.a.config.productionTip=!1,s.a.use(y.a),s.a.use(N.a);d.a.auth().onAuthStateChanged(function(e){new s.a({el:"#app",router:P,components:{App:i},template:"<App/>"})})},TlNU:function(e,a){},gsu9:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.c1e3c5a370092e3928c1.js.map