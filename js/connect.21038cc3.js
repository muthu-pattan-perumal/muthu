(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["connect"],{"0749":function(e,t,a){"use strict";a("2d29")},"0c4b":function(e,t,a){e.exports=a.p+"img/logo-light.7cfed3a8.png"},"18e9":function(e,t,a){e.exports=a.p+"img/logo-dark.d21b5279.png"},"1c54":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("q-dialog",{attrs:{value:e.value},on:{input:e.close}},[t("div",{class:e.cssClass,style:{width:e.width},attrs:{id:"confirm"}},[t("div",{staticClass:"header"},[t("BaseIcon",{staticClass:"q-mr-md",attrs:{name:e.icon,color:e.iconColor,size:e.iconSize}}),t("div",{staticClass:"title-1"},[e._t("title")],2),t("q-space"),t("BaseCloseButton",{on:{click:e.close}})],1),e._t("default"),e.hasFooter?t("div",{staticClass:"footer"},[e._t("footer")],2):e._e()],2)])},n=[],o={name:"Confirm",props:{value:{type:Boolean,required:!0},width:{type:String,default:"480px"},icon:{type:String,required:!0},iconColor:{type:String,default:"secondary"},iconSize:{type:String,default:"20px"},hasFooter:{type:Boolean,default:!0},cssClass:{type:String,default:""}},methods:{close(){this.$emit("input",!1)}}},i=o,r=(a("c7a9"),a("2877")),c=a("24e8"),l=a("2c91"),d=a("93dc"),u=a.n(d),p=Object(r["a"])(i,s,n,!1,null,"3a193cc6",null);t["a"]=p.exports;u()(p,"components",{QDialog:c["a"],QSpace:l["a"]})},"2d29":function(e,t,a){},"600c":function(e,t,a){var s={"./logo-dark.png":"18e9","./logo-light.png":"0c4b"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="600c"},"9f10":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"connection-layout"}},[t("div",{attrs:{id:"toolbar"}},[t("div",{staticClass:"logo"},[t("img",{attrs:{src:e.logo,alt:"logo",height:e.logoHeight}})])]),t("div",{staticClass:"row"},[t("Authentication",[t("div",{attrs:{id:"db-connect"}},[t("div",{staticClass:"title"},[e._v("Database Connection")]),t("ValidationObserver",{ref:"form"},[t("ValidationProvider",{attrs:{name:"server name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("TextField",{staticClass:"q-mb-md",attrs:{label:"server name","is-mandatory":"","auto-focus":!0,"is-readonly":e.isLoadingTest||e.isLoadingDatabase,error:a[0]},on:{enter:e.validate},model:{value:e.servername,callback:function(t){e.servername=t},expression:"servername"}})]}}])}),t("ValidationProvider",{attrs:{name:"username",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("TextField",{staticClass:"q-mb-md",attrs:{label:"username","is-mandatory":"","auto-focus":!0,"is-readonly":e.isLoadingTest||e.isLoadingDatabase,error:a[0]},on:{enter:e.validate},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})]}}])}),t("Password",{attrs:{"is-readonly":e.isLoadingTest||e.isLoadingDatabase},on:{enter:e.validate},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t("div",{staticClass:"row items-center"},[t("q-space"),t("BaseButton",{staticClass:"test-in-btn",attrs:{label:"Test Connection","is-loading":e.isLoadingTest},on:{click:e.validate}})],1),t("ValidationProvider",{attrs:{name:"Database Name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("TextField",{staticClass:"q-mb-md",attrs:{label:"Database Name","is-mandatory":"","auto-focus":!0,"is-readonly":e.isLoadingTest||e.isLoadingDatabase,error:a[0]},model:{value:e.dbname,callback:function(t){e.dbname=t},expression:"dbname"}})]}}])}),t("BaseButton",{staticClass:"connect-btn",attrs:{label:"Connect","is-loading":e.isLoadingDatabase},on:{click:e.updateConnection}}),e.error?t("FormFieldError",{staticClass:"text-center",attrs:{error:e.error}}):e._e()],1)])],1),e.testSuccess?[t("Confirm",{attrs:{value:e.testSuccess,icon:"eva-checkmark-outline","icon-color":"green"},on:{input:function(t){e.testSuccess=!1}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Test Connection Status ")]},proxy:!0},{key:"default",fn:function(){return[t("div",{staticClass:"q-py-md"},[t("p",[e._v(" Test Connection Successfully."),t("br"),e._v(" Please continue with database connection! ")])])]},proxy:!0},{key:"footer",fn:function(){return[t("BaseButton",{attrs:{label:"Ok",color:"primary"},on:{click:function(t){e.testSuccess=!1}}})]},proxy:!0}],null,!1,81584868)})]:e._e(),e.testFailure?[t("Confirm",{attrs:{value:e.testFailure,icon:"eva-close-outline","icon-color":"red"},on:{input:function(t){e.testFailure=!1}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Test Connection Failed ")]},proxy:!0},{key:"default",fn:function(){return[t("div",{staticClass:"q-py-md"},[t("p",[e._v(" Test connection failed. "),t("br"),e._v(" Please check the provided connection details and reconnect again. ")])])]},proxy:!0},{key:"footer",fn:function(){return[t("BaseButton",{attrs:{label:"Ok",color:"primary"},on:{click:function(t){e.testFailure=!1}}})]},proxy:!0}],null,!1,1284478299)})]:e._e(),e.databaseSuccess?[t("Confirm",{attrs:{value:e.databaseSuccess,icon:"eva-checkmark-outline","icon-color":"green"},on:{input:e.successReload},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Database Connected ")]},proxy:!0},{key:"default",fn:function(){return[t("div",{staticClass:"q-py-md"},[t("p",[e._v(" Congratulations! The application has successfully connected to the database. You're all set to use the application's features. ")])])]},proxy:!0},{key:"footer",fn:function(){return[t("BaseButton",{attrs:{label:"Ok",color:"primary"},on:{click:e.successReload}})]},proxy:!0}],null,!1,2779076281)})]:e._e(),t("div",{staticClass:"footer"},[e._v("© 2024 All Rights Reserved")])],2)},n=[],o=a("7bb1"),i=a("e683"),r=function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{name:"password",rules:{required:!0,password:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("PasswordField",{staticClass:"q-mb-md",attrs:{value:e.value,label:"password","is-mandatory":"","is-readonly":e.isLoading,tooltip:e._passwordHint,error:a[0]},on:{input:e.handleInput,enter:function(t){return e.$emit("enter")}}})]}}])})},c=[],l=a("8bc3"),d=a("0c6e"),u={name:"Password",components:{ValidationProvider:o["b"],PasswordField:l["a"]},props:{value:{type:String,default:""},isLoading:{type:Boolean,default:!1}},computed:{_passwordHint(){return d["a"]}},methods:{handleInput(e){this.$emit("input",e)}}},p=u,f=a("2877"),m=Object(f["a"])(p,r,c,!1,null,"b671a5b6",null),v=m.exports,b=a("b3d1"),h=a("1b0d"),g=a("1c54"),y=a("e213"),C={name:"Connect",components:{ValidationObserver:o["a"],Password:v,FormFieldError:i["a"],ValidationProvider:o["b"],TextField:b["a"],Confirm:g["a"],Authentication:y["a"]},data(){return{servername:"",username:"",password:"",dbname:"",rememberMe:!1,isLoadingTest:!1,isLoadingDatabase:!1,error:"",testSuccess:!1,testFailure:!1,databaseSuccess:!1}},computed:{logo(){let e=location.origin;return"https://edmsuat.sobhaapps.com"===e||"https://edms.sobhaapps.com"===e?a("afaa"):a("600c")(`./logo-${this.darkTheme?"dark":"light"}.png`)},logoHeight(){let e=location.origin;return"https://edmsuat.sobhaapps.com"===e||"https://edms.sobhaapps.com"===e?"36px":"24px"}},methods:{successReload(){location.reload()},async validate(){const e=await this.$refs.form.validate();e&&this.testConnection()},async testConnection(){this.isLoadingTest=!0;const e={serverName:this.servername,userName:this.username,password:this.password},{error:t}=await h["a"].testDBConnection(e);this.isLoadingTest=!1,t?this.testFailure=!0:this.testSuccess=!0},async updateConnection(){this.isLoadingDatabase=!0;const e={serverName:this.servername,databaseName:this.dbname,userName:this.username,password:this.password},{error:t}=await h["a"].updateDBConnection(e);this.isLoadingDatabase=!1,t?this.testFailure=!0:this.databaseSuccess=!0}}},k=C,_=(a("0749"),a("2c91")),w=a("93dc"),x=a.n(w),S=Object(f["a"])(k,s,n,!1,null,"585df7ae",null);t["default"]=S.exports;x()(S,"components",{QSpace:_["a"]})},afaa:function(e,t,a){e.exports=a.p+"img/sobha-logo.5f37df97.png"},b2ec:function(e,t,a){},c7a9:function(e,t,a){"use strict";a("b2ec")},d775:function(e,t,a){"use strict";a("e3f3")},e213:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"authentication"}},[t("div",{staticClass:"content"},[e._t("default")],2)])},n=[],o={name:"Authentication"},i=o,r=(a("d775"),a("2877")),c=Object(r["a"])(i,s,n,!1,null,"7f0c661a",null);t["a"]=c.exports},e3f3:function(e,t,a){}}]);
//# sourceMappingURL=connect.21038cc3.js.map