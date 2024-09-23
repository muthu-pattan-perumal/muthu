(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspace-builder"],{"0ce8":function(e,t,i){},2993:function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"cursor-pointer",attrs:{id:"color-field"}},[e.label?t("FormFieldLabel",{attrs:{label:e.label,"is-mandatory":e.isMandatory,tooltip:e.tooltip}}):e._e(),t("FormFieldWrapper",{ref:"wrapper",attrs:{"is-focused":e._isFocused,"is-clearable":e.isClearable,"is-readonly":e.isReadonly,"is-disabled":e.isDisabled,"has-error":!!e.error,"action-icon":"eva-chevron-down"},on:{click:e.toggleColorPicker,clear:e.handleClear}},[t("div",{staticClass:"color",attrs:{tabindex:0},on:{focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"color-dot",class:e.bgColor(e.value)}),t("div",{staticClass:"font-medium"},[e._v(e._s(e.colorLabel(e.value)))])])]),t("q-menu",{attrs:{target:e.$refs.wrapper,fit:"","max-width":"320px","no-refocus":"","no-parent-event":"","transition-show":"scale","transition-hide":"scale"},model:{value:e.isColorPickerVisible,callback:function(t){e.isColorPickerVisible=t},expression:"isColorPickerVisible"}},[t("div",{attrs:{id:"colors"}},e._l(e.colors,(function(i){return t("div",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:i,staticClass:"color",class:e.bgColor(i),on:{click:function(t){return e.handleInput(i)}}},[e.value===i?t("BaseIcon",{attrs:{name:"eva-checkmark",color:"white"}}):e._e()],1)})),0)])],1),e.error?t("FormFieldError",{attrs:{error:e.error}}):e._e()],1)},s=[],a=i("874f"),o=i("9996"),n=i("2f62"),l=i("3445"),c=i("0f01"),d=i("e683"),u={name:"ColorField",components:{FormFieldLabel:l["a"],FormFieldWrapper:c["a"],FormFieldError:d["a"]},props:{value:{type:String,default:""},label:{type:String,default:""},isMandatory:{type:Boolean,default:!1},tooltip:{type:String,default:""},isDisabled:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1},error:{type:String,default:""}},data(){return{isFocused:!1,colors:["primary","secondary","red","pink","purple","deep-purple","indigo","blue","light-blue","teal","green","light-green","lime","amber","orange","deep-orange","brown"],isColorPickerVisible:!1}},computed:{...Object(n["c"])(["darkTheme"]),_isFocused(){return this.isFocused||this.isColorPickerVisible},isClearable(){return!!this.value}},methods:{colorLabel(e){return Object(a["a"])(Object(o["a"])(e))},toggleColorPicker(){this.isColorPickerVisible=!this.isColorPickerVisible},bgColor(e){return this.darkTheme?`bg-${e}-5`:"bg-"+e},handleInput(e){this.isColorPickerVisible=!1,this.$emit("input",e)},handleClear(){this.$emit("input","")}}},p=u,f=(i("84a8"),i("2877")),h=i("4e73"),m=i("7f67"),v=i("93dc"),b=i.n(v),_=Object(f["a"])(p,r,s,!1,null,"334d67c0",null);t["a"]=_.exports;b()(_,"components",{QMenu:h["a"]}),b()(_,"directives",{ClosePopup:m["a"]})},"2ac6":function(e,t,i){"use strict";i("0ce8")},"2de9":function(e,t,i){},"40f9":function(e,t,i){"use strict";i("c589")},"53cf":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"workspace-builder"}},[t("ItemBuilder",{on:{close:e.closeBuilder},scopedSlots:e._u([{key:"title",fn:function(){return["NEW"===e.mode?[e._v("Create Workspace")]:e._e(),"EDIT"===e.mode?[e._v("Edit Workspace")]:e._e()]},proxy:!0},{key:"description",fn:function(){return["NEW"===e.mode?[e._v(" Feel free to skip the optional fields and fill them later ")]:e._e(),"EDIT"===e.mode?[e._v(" Some of the fields or non-editable ")]:e._e()]},proxy:!0}])},[t("ActionBar",{attrs:{"is-loading":e.isLoading},on:{save:function(t){"EDIT"===e.mode?e.updateWorkspace():e.createWorkspace()}},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}}),t("BaseScrollbar",{attrs:{height:"calc(100vh - 126px)"}},[t("div",{staticClass:"row"},[t("ValidationObserver",{ref:"form"},[t("div",{staticClass:"form"},[t("WorkspaceDetails",{ref:"WORKSPACE_DETAILS",attrs:{mode:e.mode,name:e.name,color:e.color,description:e.description,users:e.users,"is-active":"WORKSPACE_DETAILS"===e.tab},on:{"update:name":function(t){e.name=t},"update:color":function(t){e.color=t},"update:description":function(t){e.description=t},"update:users":function(t){e.users=t},click:function(t){e.tab="WORKSPACE_DETAILS"}}})],1)])],1)])],1)],1)},s=[],a=i("1b0d"),o=i("7bb1"),n=i("8287"),l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"action-bar"}},[t("Tabs",{attrs:{value:e.value,tabs:e.tabs},on:{input:e.handleInput}}),t("q-space"),t("BaseActionButton",{attrs:{icon:"eva-question-mark",color:"secondary"},on:{click:function(t){return e.$emit("quickHelp")}}}),t("BaseButton",{staticClass:"q-ml-md",attrs:{icon:"eva-save-outline",label:"save","is-loading":e.isLoading},on:{click:function(t){return e.$emit("save")}}})],1)},c=[],d=i("b94d"),u={name:"ActionBar",components:{Tabs:d["a"]},props:{value:{type:String,required:!0},isLoading:{type:Boolean,default:!1}},data(){return{tabs:[{id:this.$nano.id(),label:"workspace details",value:"WORKSPACE_DETAILS"}]}},methods:{handleInput(e){this.$emit("input",e)}}},p=u,f=(i("8f0c"),i("2877")),h=i("2c91"),m=i("93dc"),v=i.n(m),b=Object(f["a"])(p,l,c,!1,null,"fd00a2aa",null),_=b.exports;v()(b,"components",{QSpace:h["a"]});var y=function(){var e=this,t=e._self._c;return t("FormSection",e._g({attrs:{icon:e.isActive?"mdi-briefcase":"mdi-briefcase-outline","is-active":e.isActive},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Workspace Details")]},proxy:!0},{key:"description",fn:function(){return[e._v(" With just a few clicks, you can create a centralized hub for all your digital resources, making it easy to stay organized ")]},proxy:!0}])},e.$listeners),[t("ValidationProvider",{attrs:{name:"name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:i}){return[t("TextField",{staticClass:"q-mb-lg",attrs:{value:e.name,label:"name","is-mandatory":"",error:i[0]},on:{input:e.updateName}})]}}])}),t("ValidationProvider",{attrs:{name:"description",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:i}){return[t("TextAreaField",{staticClass:"q-mb-lg",attrs:{value:e.description,label:"description","is-mandatory":"",error:i[0]},on:{input:e.updateDescription}})]}}])}),t("ValidationProvider",{attrs:{name:"users",rules:{required:!1}},scopedSlots:e._u([{key:"default",fn:function({errors:i}){return[t("MultiSelectField",{staticClass:"q-mb-lg",attrs:{label:"users",value:e.users,options:e.userList,error:i[0]},on:{input:e.updateUsers}})]}}])}),t("ColorField",{staticClass:"q-mb-lg",attrs:{value:e.color,label:"color"},on:{input:e.updateColor}})],1)},k=[],g=i("e47f"),C=i("b3d1"),S=i("6df3"),w=i("2993"),F=i("c3d2"),W={name:"WorkspaceDetails",components:{FormSection:g["a"],ValidationProvider:o["b"],TextField:C["a"],TextAreaField:S["a"],ColorField:w["a"],MultiSelectField:F["a"]},props:{name:{type:String,required:!0},description:{type:String,required:!0},color:{type:String,required:!0},isActive:{type:Boolean,default:!1},mode:{type:String,default:"NEW"},users:{type:Array,default:()=>[]}},data(){return{userList:[]}},created(){this.getUserList()},methods:{updateName(e){this.$emit("update:name",e)},updateDescription(e){this.$emit("update:description",e)},updateColor(e){this.$emit("update:color",e)},updateUsers(e){this.$emit("update:users",e)},async getUserList(){this.userList=[];const{error:e,payload:t}=await a["s"].getUserList();e?this.$alert.error("Error fetching users"):this.userList=t&&t.map(e=>({id:this.$nano.id(),label:e.value,value:e.id}))}}},$=W,I=Object(f["a"])($,y,k,!1,null,"7e43859a",null),q=I.exports,A={name:"WorkspaceBuilder",components:{ItemBuilder:n["a"],ValidationObserver:o["a"],ActionBar:_,WorkspaceDetails:q},props:{workspaceId:{type:String,default:""}},data(){return{mode:"NEW",tab:"WORKSPACE_DETAILS",isLoading:!1,name:"",description:"",color:"",users:[]}},watch:{workspaceId:{immediate:!0,handler(){this.workspaceId&&(this.mode="EDIT",this.getWorkspace())}}},methods:{closeBuilder(){this.$router.back()},async createWorkspace(){const e=await this.$refs.form.validate();if(!e)return;this.isLoading=!0;const t={name:this.name,description:this.description,color:this.color,userId_Array:this.users},{error:i}=await a["u"].createWorkspace(t);if(i)return this.$alert.error(i),void(this.isLoading=!1);this.closeBuilder(),this.$alert.success("New workspace created")},async getWorkspace(){const{error:e,payload:t}=await a["u"].getWorkspace(this.workspaceId);e?this.$alert.error(e):(this.name=t.name,this.description=t.description,this.color=t.color,this.users=t.userId_Array)},async updateWorkspace(){const e=await this.$refs.form.validate();if(!e)return;this.isLoading=!0;const t={name:this.name,description:this.description,color:this.color,userId_Array:this.users},{error:i}=await a["u"].updateWorkspace(this.workspaceId,t);this.isLoading=!1,i?this.$alert.error(i):(this.closeBuilder(),this.$alert.success("Workspace updated successfully"))}}},B=A,L=(i("b51d"),Object(f["a"])(B,r,s,!1,null,"5b3f3144",null));t["default"]=L.exports},"5f2c":function(e,t,i){"use strict";i("ef6b")},"61fb":function(e,t,i){},"7f67":function(e,t,i){"use strict";var r=i("9e62"),s=i("dc8a");function a(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}function o(e){const t=e.__qclosepopup;void 0!==t&&(e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup)}t["a"]={name:"close-popup",bind(e,{value:t},i){void 0!==e.__qclosepopup&&(o(e),e.__qclosepopup_destroyed=!0);const n={depth:a(t),handler(e){0!==n.depth&&setTimeout(()=>{Object(r["b"])(i.componentInstance||i.context,e,n.depth)})},handlerKey(e){!0===Object(s["a"])(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},update(e,{value:t,oldValue:i}){void 0!==e.__qclosepopup&&t!==i&&(e.__qclosepopup.depth=a(t))},unbind(e){void 0===e.__qclosepopup_destroyed?o(e):delete e.__qclosepopup_destroyed}}},"80ae":function(e,t,i){},8287:function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"item-builder"}},[t("div",{staticClass:"header"},[t("div",[t("div",{staticClass:"title-1"},[e._t("title")],2),t("div",{staticClass:"description"},[e._t("description")],2)]),t("div",{staticClass:"center"},[e._t("header")],2),t("q-space"),e._t("actions"),t("BaseCloseButton",{on:{click:e.close}})],2),e._t("default")],2)},s=[],a={name:"ItemBuilder",methods:{close(){this.$emit("close")}}},o=a,n=(i("5f2c"),i("2877")),l=i("2c91"),c=i("93dc"),d=i.n(c),u=Object(n["a"])(o,r,s,!1,null,"7edffe0c",null);t["a"]=u.exports;d()(u,"components",{QSpace:l["a"]})},"84a8":function(e,t,i){"use strict";i("80ae")},"874f":function(e,t,i){"use strict";var r=i("7c4a"),s=i("0e40"),a=Object(r["a"])((function(e,t,i){return e+(i?" ":"")+Object(s["a"])(t)}));t["a"]=a},"8b55":function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",e._g({class:{active:e.isActive,"is-full-width":e.isFullWidth},style:{color:e.isActive?e._color:""},attrs:{id:"tab"}},e.$listeners),[e._v(" "+e._s(e.label)+" ")])},s=[],a={name:"Tab",props:{label:{type:String,required:!0},isActive:{type:Boolean,default:!1},isFullWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"}},computed:{_color(){return`var(--${this.color})`}}},o=a,n=(i("2ac6"),i("2877")),l=Object(n["a"])(o,r,s,!1,null,"f3c4783e",null);t["a"]=l.exports},"8f0c":function(e,t,i){"use strict";i("2de9")},b51d:function(e,t,i){"use strict";i("be35")},b94d:function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{style:{color:e._color},attrs:{id:"tabs"}},[e._l(e.tabs,(function(i){return t("Tab",{key:i.id,ref:"tab",refInFor:!0,attrs:{label:i.label,color:e.color,"is-full-width":e.isFullWidth,"is-active":i.value===e.value},on:{click:function(t){return e.handleClick(i)}}})})),t("div",{ref:"indicator",staticClass:"indicator"})],2)},s=[],a=i("8b55"),o={name:"Tabs",components:{Tab:a["a"]},props:{tabs:{type:Array,required:!0},value:{type:[String,Number],required:!0},color:{type:String,default:"primary"},isFullWidth:{type:Boolean,default:!1}},computed:{_color(){return`var(--${this.color})`}},watch:{value(){this.setIndicatorPosition()}},mounted(){this.setIndicatorPosition()},methods:{setIndicatorPosition(){const e=this.tabs.findIndex(e=>e.value===this.value),t=this.$refs.tab[e],i=t.$el.offsetLeft;this.$refs.indicator.style.left=i+"px";const r=t.$el.clientWidth;this.$refs.indicator.style.width=r+"px"},handleClick(e){e.value!==this.value&&this.$emit("input",e.value)}}},n=o,l=(i("40f9"),i("2877")),c=Object(l["a"])(n,r,s,!1,null,"48eb7e5e",null);t["a"]=c.exports},be35:function(e,t,i){},c589:function(e,t,i){},e47f:function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",e._g({attrs:{id:"form-section"}},e.$listeners),[t("div",{class:{"is-active":e.isActive},attrs:{id:"avatar"}},[t("BaseIcon",{attrs:{name:e.icon,"inherit-color":""}})],1),t("div",{attrs:{id:"info"}},[t("div",{staticClass:"title-2"},[e._t("title")],2),t("div",{staticClass:"description"},[e._t("description")],2)]),t("div",{attrs:{id:"form"}},[e._t("default")],2)])},s=[],a={name:"FormSection",props:{icon:{type:String,required:!0},isActive:{type:Boolean,default:!1}}},o=a,n=(i("f711"),i("2877")),l=Object(n["a"])(o,r,s,!1,null,"a151c5e8",null);t["a"]=l.exports},ef6b:function(e,t,i){},f711:function(e,t,i){"use strict";i("61fb")}}]);
//# sourceMappingURL=workspace-builder.37f16027.js.map