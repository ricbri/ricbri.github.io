webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("ElRic Cuisines")])],1)])])},staticRenderFns:[]},r={name:"App",components:{Navbar:i("VU/8")(null,a,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},c=i("VU/8")(r,s,!1,null,null,null).exports,o=i("/ocq"),l=i("Sazm"),d=i.n(l),p=(i("3VHS"),d.a.initializeApp({apiKey:"AIzaSyDBH3kxLhY-pMZSB6PtFa_e1N13C1LwFlE",authDomain:"elric-cuisines.firebaseapp.com",databaseURL:"https://elric-cuisines.firebaseio.com",projectId:"elric-cuisines",storageBucket:"elric-cuisines.appspot.com",messagingSenderId:"494044083715"}).firestore()),u={name:"dashboard",data:function(){return{recipes:[]}},created:function(){var e=this;p.collection("recipes").orderBy("name").get().then(function(t){t.forEach(function(t){console.log(t.data());var i={id:t.id,recipe_id:t.data().recipe_id,name:t.data().name,description:t.data().description};e.recipes.push(i)})})}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.recipes,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.name))]),e._v(e._s(t.description)+"\n      "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-recipe",params:{recipe_id:t.recipe_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Recipes")])])}]},m=i("VU/8")(u,v,!1,null,null,null).exports,_={name:"new-recipe",data:function(){return{recipe_id:null,name:null,description:null}},methods:{saveRecipe:function(){var e=this;p.collection("recipes").add({recipe_id:this.recipe_id,name:this.name,description:this.description}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(e)})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-recipe"}},[i("h3",[e._v("New Recipe")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.saveRecipe(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe_id,expression:"recipe_id"}],attrs:{type:"text",required:""},domProps:{value:e.recipe_id},on:{input:function(t){t.target.composing||(e.recipe_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Recipe ID#")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),i("label",[e._v("Description")])])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},h=i("VU/8")(_,f,!1,null,null,null).exports,C={name:"view-recipe",data:function(){return{recipe_id:null,name:null,description:null}},beforeRouteEnter:function(e,t,i){p.collection("recipes").where("recipe_id","==",e.params.recipe_id).get().then(function(e){e.forEach(function(e){i(function(t){t.recipe_id=e.data().recipe_id,t.name=e.data().name,t.description=e.data().description})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("recipes").where("recipe_id","==",this.$route.params.recipe_id).get().then(function(t){t.forEach(function(t){e.recipe_id=t.data().recipe_id,e.name=t.data().name,e.description=t.data().description})})},deleteRecipe:function(){var e=this;confirm("Are you sure?")&&p.collection("recipes").where("recipe_id","==",this.$route.params.recipe_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-recipe"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v(e._s(e.description))])]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),i("button",{staticClass:"btn red",on:{click:e.deleteRecipe}},[e._v("Delete")]),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-recipe",params:{recipe_id:e.recipe_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},g=i("VU/8")(C,w,!1,null,null,null).exports,b={name:"edit-recipe",data:function(){return{recipe_id:null,name:null,description:null}},beforeRouteEnter:function(e,t,i){p.collection("recipes").where("recipe_id","==",e.params.recipe_id).get().then(function(e){e.forEach(function(e){i(function(t){t.recipe_id=e.data().recipe_id,t.name=e.data().name,t.description=e.data().description})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("recipes").where("recipe_id","==",this.$route.params.recipe_id).get().then(function(t){t.forEach(function(t){e.recipe_id=t.data().recipe_id,e.name=t.data().name,e.description=t.data().description})})},updateRecipe:function(){var e=this;p.collection("recipes").where("recipe_id","==",this.$route.params.recipe_id).get().then(function(t){t.forEach(function(t){t.ref.update({recipe_id:e.recipe_id,name:e.name,description:e.description}).then(function(){e.$router.push({name:"view-recipe",params:{recipe_id:e.recipe_id}})})})})}}},x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-recipe"}},[i("h3",[e._v("Edit Recipe")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.updateRecipe(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe_id,expression:"recipe_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.recipe_id},on:{input:function(t){t.target.composing||(e.recipe_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},R=i("VU/8")(b,x,!1,null,null,null).exports;n.a.use(o.a);var y=new o.a({routes:[{path:"/",name:"dashboard",component:m},{path:"/new",name:"new-recipe",component:h},{path:"/edit/:recipe_id",name:"edit-recipe",component:R},{path:"/:recipe_id",name:"view-recipe",component:g}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:y,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.11f6d7b9cb3691337ae1.js.map