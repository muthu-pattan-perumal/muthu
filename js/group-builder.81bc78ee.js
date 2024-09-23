(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-builder"],{"0ce8":function(t,e,i){},"2ac6":function(t,e,i){"use strict";i("0ce8")},"2ebd":function(t,e,i){},"40f9":function(t,e,i){"use strict";i("c589")},"45fb":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"group-builder"}},[e("ItemBuilder",{on:{close:t.closeBuilder},scopedSlots:t._u([{key:"title",fn:function(){return["NEW"===t.mode?[t._v("Create Group")]:t._e(),"EDIT"===t.mode?[t._v("Edit Group")]:t._e()]},proxy:!0},{key:"description",fn:function(){return["NEW"===t.mode?[t._v(" Feel free to skip the optional fields and fill them later ")]:t._e(),"EDIT"===t.mode?[t._v(" Some of the fields or non-editable ")]:t._e()]},proxy:!0}])},[e("ActionBar",{attrs:{"is-loading":t.isLoading},on:{save:function(e){"EDIT"===t.mode?t.updateGroup():t.createGroup()}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}}),e("BaseScrollbar",{attrs:{height:"calc(100vh - 126px)"}},[e("div",{staticClass:"row"},[e("ValidationObserver",{ref:"form"},[e("div",{staticClass:"form"},[e("GroupDetails",{ref:"GROUP_DETAILS",attrs:{mode:t.mode,name:t.name,users:t.users,description:t.description,"is-active":"GROUP_DETAILS"===t.tab},on:{"update:name":function(e){t.name=e},"update:users":function(e){t.users=e},"update:description":function(e){t.description=e},click:function(e){t.tab="GROUP_DETAILS"}}})],1)])],1)])],1)],1)},s=[],a=i("7bb1"),n=i("8287"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"action-bar"}},[e("Tabs",{attrs:{value:t.value,tabs:t.tabs},on:{input:t.handleInput}}),e("q-space"),e("BaseActionButton",{attrs:{icon:"eva-question-mark",color:"secondary"},on:{click:function(e){return t.$emit("quickHelp")}}}),e("BaseButton",{staticClass:"q-ml-md",attrs:{icon:"eva-save-outline",label:"save","is-loading":t.isLoading},on:{click:function(e){return t.$emit("save")}}})],1)},c=[],l=i("b94d"),u={name:"ActionBar",components:{Tabs:l["a"]},props:{value:{type:String,required:!0},isLoading:{type:Boolean,default:!1}},data(){return{tabs:[{id:this.$nano.id(),label:"group details",value:"GROUP_DETAILS"}]}},methods:{handleInput(t){this.$emit("input",t)}}},d=u,p=(i("64b8"),i("2877")),f=i("2c91"),m=i("93dc"),v=i.n(m),h=Object(p["a"])(d,o,c,!1,null,"4e3a4297",null),b=h.exports;v()(h,"components",{QSpace:f["a"]});var _=function(){var t=this,e=t._self._c;return e("FormSection",t._g({attrs:{icon:t.isActive?"mdi-lock":"mdi-lock-outline","is-active":t.isActive},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Group Details")]},proxy:!0},{key:"description",fn:function(){return[t._v(" Enhancing security, access control, communication, and collaboration within a digital environment ")]},proxy:!0}])},t.$listeners),[e("ValidationProvider",{attrs:{name:"name",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:i}){return[e("TextField",{staticClass:"q-mb-lg",attrs:{label:"name","is-mandatory":"",value:t.name,error:i[0]},on:{input:t.updateName}})]}}])}),e("TextAreaField",{staticClass:"q-mb-lg",attrs:{label:"description",value:t.description},on:{input:t.updateDescription}}),e("ValidationProvider",{attrs:{name:"users",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:i}){return[e("MultiSelectField",{attrs:{label:"users","is-mandatory":"",value:t.users,error:i[0],options:t.userList},on:{input:t.updateUsers}})]}}])})],1)},g=[],y=i("e47f"),$=i("b3d1"),S=i("6df3"),B=i("c3d2"),I=i("1b0d"),k={name:"GroupDetails",components:{FormSection:y["a"],ValidationProvider:a["b"],TextField:$["a"],TextAreaField:S["a"],MultiSelectField:B["a"]},props:{name:{type:String,required:!0},description:{type:String,required:!0},users:{type:Array,required:!0},isActive:{type:Boolean,default:!1},mode:{type:String,default:"NEW"}},data(){return{userList:[]}},created(){this.getUsers()},methods:{updateName(t){this.$emit("update:name",t)},updateDescription(t){this.$emit("update:description",t)},updateUsers(t){this.$emit("update:users",t)},async getUsers(){const{error:t,payload:e}=await I["s"].getUserList();t?this.$alert.error(t):this.userList=e&&e.map(t=>({id:this.$nano.id(),label:t.value,value:Number(t.id)}))}}},w=k,G=Object(p["a"])(w,_,g,!1,null,"698b304e",null),A=G.exports,x={name:"GroupBuilder",components:{ItemBuilder:n["a"],ValidationObserver:a["a"],ActionBar:b,GroupDetails:A},props:{groupId:{type:String,default:""}},data(){return{mode:"NEW",tab:"GROUP_DETAILS",isLoading:!1,name:"",description:"",users:[]}},watch:{groupId:{immediate:!0,handler(){this.groupId&&(this.mode="EDIT",this.getGroup())}}},methods:{closeBuilder(){this.$router.back()},async createGroup(){const t=await this.$refs.form.validate();if(!t)return;this.isLoading=!0;const e={name:this.name,description:this.description,users:this.users},{error:i}=await I["i"].createGroup(e);if(i)return"error creating group"!==i?this.$alert.warning(i):this.$alert.error(i),void(this.isLoading=!1);this.closeBuilder(),this.$alert.success("New group created succesfully")},async getGroup(){var t;const{error:e,payload:i}=await I["i"].getGroup(this.groupId);e?this.$alert.error(e):(this.name=i.name,this.description=i.description,this.users=null===(t=i.users)||void 0===t?void 0:t.map(t=>t.id))},async updateGroup(){const t=await this.$refs.form.validate();if(!t)return;this.isLoading=!0;const e={name:this.name,description:this.description,users:this.users},{error:i}=await I["i"].updateGroup(this.groupId,e);this.isLoading=!1,i?"error updating group"!==i?this.$alert.warning(i):this.$alert.error(i):(this.closeBuilder(),this.$alert.success("Group updated successfully"))}}},T=x,L=(i("7c8f"),Object(p["a"])(T,r,s,!1,null,"b720b586",null));e["default"]=L.exports},"5f2c":function(t,e,i){"use strict";i("ef6b")},"61fb":function(t,e,i){},"64b8":function(t,e,i){"use strict";i("2ebd")},"7c8f":function(t,e,i){"use strict";i("b3fc")},8287:function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"item-builder"}},[e("div",{staticClass:"header"},[e("div",[e("div",{staticClass:"title-1"},[t._t("title")],2),e("div",{staticClass:"description"},[t._t("description")],2)]),e("div",{staticClass:"center"},[t._t("header")],2),e("q-space"),t._t("actions"),e("BaseCloseButton",{on:{click:t.close}})],2),t._t("default")],2)},s=[],a={name:"ItemBuilder",methods:{close(){this.$emit("close")}}},n=a,o=(i("5f2c"),i("2877")),c=i("2c91"),l=i("93dc"),u=i.n(l),d=Object(o["a"])(n,r,s,!1,null,"7edffe0c",null);e["a"]=d.exports;u()(d,"components",{QSpace:c["a"]})},"8b55":function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",t._g({class:{active:t.isActive,"is-full-width":t.isFullWidth},style:{color:t.isActive?t._color:""},attrs:{id:"tab"}},t.$listeners),[t._v(" "+t._s(t.label)+" ")])},s=[],a={name:"Tab",props:{label:{type:String,required:!0},isActive:{type:Boolean,default:!1},isFullWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"}},computed:{_color(){return`var(--${this.color})`}}},n=a,o=(i("2ac6"),i("2877")),c=Object(o["a"])(n,r,s,!1,null,"f3c4783e",null);e["a"]=c.exports},b3fc:function(t,e,i){},b94d:function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{style:{color:t._color},attrs:{id:"tabs"}},[t._l(t.tabs,(function(i){return e("Tab",{key:i.id,ref:"tab",refInFor:!0,attrs:{label:i.label,color:t.color,"is-full-width":t.isFullWidth,"is-active":i.value===t.value},on:{click:function(e){return t.handleClick(i)}}})})),e("div",{ref:"indicator",staticClass:"indicator"})],2)},s=[],a=i("8b55"),n={name:"Tabs",components:{Tab:a["a"]},props:{tabs:{type:Array,required:!0},value:{type:[String,Number],required:!0},color:{type:String,default:"primary"},isFullWidth:{type:Boolean,default:!1}},computed:{_color(){return`var(--${this.color})`}},watch:{value(){this.setIndicatorPosition()}},mounted(){this.setIndicatorPosition()},methods:{setIndicatorPosition(){const t=this.tabs.findIndex(t=>t.value===this.value),e=this.$refs.tab[t],i=e.$el.offsetLeft;this.$refs.indicator.style.left=i+"px";const r=e.$el.clientWidth;this.$refs.indicator.style.width=r+"px"},handleClick(t){t.value!==this.value&&this.$emit("input",t.value)}}},o=n,c=(i("40f9"),i("2877")),l=Object(c["a"])(o,r,s,!1,null,"48eb7e5e",null);e["a"]=l.exports},c589:function(t,e,i){},e47f:function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",t._g({attrs:{id:"form-section"}},t.$listeners),[e("div",{class:{"is-active":t.isActive},attrs:{id:"avatar"}},[e("BaseIcon",{attrs:{name:t.icon,"inherit-color":""}})],1),e("div",{attrs:{id:"info"}},[e("div",{staticClass:"title-2"},[t._t("title")],2),e("div",{staticClass:"description"},[t._t("description")],2)]),e("div",{attrs:{id:"form"}},[t._t("default")],2)])},s=[],a={name:"FormSection",props:{icon:{type:String,required:!0},isActive:{type:Boolean,default:!1}}},n=a,o=(i("f711"),i("2877")),c=Object(o["a"])(n,r,s,!1,null,"a151c5e8",null);e["a"]=c.exports},ef6b:function(t,e,i){},f711:function(t,e,i){"use strict";i("61fb")}}]);
//# sourceMappingURL=group-builder.81bc78ee.js.map