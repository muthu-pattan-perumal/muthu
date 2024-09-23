(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms-overview"],{"0059":function(t,e,i){"use strict";i("eead")},"0c21":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cursor-pointer",attrs:{id:"async-select-field"}},[t.label?e("FormFieldLabel",{attrs:{label:t.label,"is-mandatory":t.isMandatory,tooltip:t.tooltip}}):t._e(),e("FormFieldWrapper",{ref:"wrapper",attrs:{"is-focused":t._isFocused,"is-clearable":t._isClearable,"is-readonly":t.isReadonly,"is-disabled":t.isDisabled,"has-error":!!t.error,"action-icon":"eva-chevron-down"},on:{click:t.showOptionPicker,clear:t.handleClear},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"async-select"},[t.value?e("div",{staticClass:"value"},[t._v(" "+t._s(t.value)+" ")]):t._e(),e("input",{ref:"searchQuery",staticClass:"q-px-sm",attrs:{type:"text",placeholder:t._placeholder},domProps:{value:t.searchQuery},on:{focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1},input:t.debouncedInput,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleKeypress.apply(null,arguments)}}})]),e("q-menu",{attrs:{target:t.$refs.wrapper,fit:"","no-focus":"","no-refocus":"","no-parent-event":"","transition-show":"scale","transition-hide":"scale"},model:{value:t.optionPicker,callback:function(e){t.optionPicker=e},expression:"optionPicker"}},[e("OptionPicker",{attrs:{value:t.value,options:t._options,"new-option":t.newOption},on:{select:t.handleSelect,loadMore:t.getOptions}})],1)]},proxy:!0},{key:"action",fn:function(){return[t.isLoading?e("q-spinner",{staticClass:"q-mr-sm",attrs:{color:"secondary",size:"20px"}}):t._e()]},proxy:!0}])}),t.error?e("FormFieldError",{attrs:{error:t.error}}):t._e()],1)},a=[],r=(i("caad"),i("14d9"),i("3445")),o=i("0f01"),l=i("e683"),n=i("29db"),c=i("0d5e"),d=i("9996"),u=i("32e8"),p=i("5c8a"),m=i("85b1"),f={name:"AsyncSelectField",components:{FormFieldLabel:r["a"],FormFieldWrapper:o["a"],FormFieldError:l["a"],OptionPicker:n["a"]},props:{value:{type:[String,Number],default:null},label:{type:String,default:""},placeholder:{type:String,default:""},isMandatory:{type:Boolean,default:!1},tooltip:{type:String,default:""},isDisabled:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1},isClearable:{type:Boolean,default:!0},error:{type:String,default:""},newOption:{type:Boolean,default:!1},apiPath:{type:String,default:""},columnName:{type:String,default:""}},data(){return{isFocused:!1,optionPicker:!1,searchQuery:"",options:[],isLoading:!1,optionsClone:[]}},computed:{_placeholder(){return""},_isFocused(){return this.isFocused||this.optionPicker},_isClearable(){return this.isClearable&&!!this.value},_options(){return this.searchQuery?this.optionsClone.filter(t=>Object(d["a"])(t).includes(Object(d["a"])(this.searchQuery))):this.optionsClone}},watch:{options:{immediate:!0,deep:!0,handler(){Object(u["a"])(this.options,this.optionsClone)||(this.optionsClone=Object(p["a"])(this.options))}},optionPicker(){this.optionPicker||(this.searchQuery="")},columnName(){this.columnName&&(this.options=[],this.getOptions())}},created(){this.getOptions()},methods:{showOptionPicker(){this.optionPicker=!0},handleChange(t){this.searchQuery=t.target.value},handleSelect(t){this.$emit("input",t),this.optionPicker=!1},handleKeypress(){this.searchQuery&&this.newOption&&(this.handleSelect(this.searchQuery),this.searchQuery="",this.$refs.searchQuery.blur())},handleClear(){this.$emit("input","")},debouncedInput:Object(m["a"])((function(t){this.searchQuery=t.target.value}),1),async getOptions(){try{const t=await c["b"].post(this.apiPath,JSON.stringify({column:this.label||this.columnName,keyword:this.searchQuery,rowFrom:this.options.length||0,rowCount:this.options.length})),{status:e,data:i}=t;if(200!==e)throw t;const s=JSON.parse(i);this.options.push(...s)}catch(t){console.error(t),this.$alert.error("Error fetching options")}}}},h=f,v=(i("da87"),i("2877")),y=i("4e73"),b=i("0d59"),C=i("93dc"),_=i.n(C),w=Object(v["a"])(h,s,a,!1,null,"f4e0ea94",null);e["a"]=w.exports;_()(w,"components",{QMenu:y["a"],QSpinner:b["a"]})},"0f4e":function(t,e,i){},"1a05":function(t,e,i){"use strict";i("6df8")},"29db":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"options-picker"}},[e("BaseScrollbar",{staticClass:"q-py-sm",attrs:{height:"256px"},on:{scroll:t.handleScroll}},[t.options.length?t._l(t.options,(function(i){return e("div",{key:i,staticClass:"option",class:{"is-selected":t.isSelected(i)},on:{click:function(e){return t.handleClick(i)}}},[e("BaseIcon",{staticClass:"icon",attrs:{name:t.icon(i),"inherit-color":""}}),e("div",{staticClass:"label"},[t._v(t._s(i))])],1)})):e("div",{staticClass:"no-option"},[e("div",{staticClass:"q-mb-sm"},[t._v("No option found")]),t.newOption?e("div",[t._v('Press "Enter" to add new option')]):t._e()])],2)],1)},a=[],r=i("85b1"),o={name:"OptionsPicker",props:{value:{type:[String,Number,Array],required:!0},options:{type:Array,required:!0},isMultiple:{type:Boolean,default:!1},newOption:{type:Boolean,default:!1}},methods:{isSelected(t){return this.isMultiple?!!this.value.find(e=>e===t):this.value===t},icon(t){const e=this.isSelected(t);return this.isMultiple?e?"mdi-checkbox-marked":"mdi-checkbox-blank-outline":e?"eva-radio-button-on":"eva-radio-button-off"},handleClick(t){this.$emit("select",t)},handleScroll:Object(r["a"])((function(t){const e=t.target.scrollHeight,i=t.target.scrollTop,s=t.target.clientHeight,a=e-i===s;a&&this.$emit("loadMore")}),300)}},l=o,n=(i("1a05"),i("2877")),c=Object(n["a"])(l,s,a,!1,null,"12738659",null);e["a"]=c.exports},"43f2":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("SimpleFilter",{attrs:{id:t.formId,list:t.formList,name:"Forms"},on:{"update:id":function(e){t.formId=e},update:t.getOverviewCharts}}),e("BaseScrollbar",{attrs:{height:"calc(100vh - 260px)"}},[e("div",{staticClass:"row items-start q-col-gutter-sm q-my-sm"},[e("div",{staticClass:"col-2 q-col-gutter-sm"},[t._l(t.formCount,(function(i,s){return[e("div",{key:s},[e("div",{staticClass:"cards chartBox"},[e("div",{staticClass:"row items-center header"},[t._v(t._s(i.label))]),e("div",{staticClass:"column"},[e("div",{staticClass:"col self-center q-mt-lg q-mb-sm count"},[t._v(" "+t._s(i.count)+" ")])])])])]}))],2),e("div",{staticClass:"col-10 q-col-gutter-sm"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"cards q-mr-sm"},[e("div",{staticClass:"row items-center header"},[t._v(" Product Trends by Month ")]),e("apexchart",{attrs:{type:"line",height:"90%",options:t.chartOptions,series:t.series}})],1)]),e("div",{staticClass:"col-4",attrs:{id:"workflow"}},[e("BaseScrollbar",{attrs:{height:"265px"}},[e("table",{attrs:{id:"workflowTable"}},[e("thead",[e("tr",t._l(t.userColumns,(function(i){return e("th",{key:i.id,staticClass:"text-bold"},[[t._v(" "+t._s(i.label)+" ")]],2)})),0)]),e("tbody",[t._l(t.userTable,(function(i){return[e("tr",{key:i.id},t._l(t.userColumns,(function(s){return e("td",{key:s.id},[t._t(s.name,(function(){return[[t._v(" "+t._s(i[s.name])+" ")]]}),{value:i[s.name],item:i})],2)})),0)]}))],2)])])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"border-outline q-mr-xs"},[e("PieChart",{attrs:{title:"Action Tracking","x-data":[],"y-data":[32,6,15,25]}})],1)]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"recentCard border-outline q-ml-xs q-mr-xs"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col q-pa-sm"},[e("div",{staticClass:"text-base font-bold"},[t._v("RECENT ACTIVITIES")])])]),e("div",{staticClass:"q-pa-sm"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-auto"},[e("BaseIcon",{attrs:{name:"mdi-checkbox-marked-circle",color:"positive",size:"25px"}})],1),e("div",{staticClass:"col q-ml-sm"},[e("div",{staticClass:"text-md"},[t._v("Document Approval")])]),e("div",{staticClass:"col q-ml-sm"},[e("div",{staticClass:"label text-grey"},[t._v("4 mins ago")])])]),e("div",{staticClass:"q-ml-md q-mt-sm"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-auto"},[e("q-avatar",{attrs:{size:"25px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])],1),e("div",{staticClass:"col label text-grey q-ml-sm"},[t._v(" Sarah has rejected Business proposal document.docx ")])])])]),e("div",{staticClass:"q-pa-sm"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-auto"},[e("BaseIcon",{attrs:{name:"eva-alert-triangle-outline",color:"negative",size:"25px"}})],1),e("div",{staticClass:"col q-ml-sm"},[e("div",{staticClass:"text-md"},[t._v("Document Rejection")])]),e("div",{staticClass:"col q-ml-sm"},[e("div",{staticClass:"label text-grey"},[t._v("4 mins ago")])])]),e("div",{staticClass:"q-ml-md q-mt-sm"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-auto"},[e("q-avatar",{attrs:{size:"25px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])],1),e("div",{staticClass:"col label text-grey q-ml-sm"},[t._v(" Sarah has rejected Business proposal document.docx ")])])])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"cards q-pa-md q-ml-xs"},[e("div",{staticClass:"row items-center header"},[t._v("Recent Submissions")]),e("div",{staticClass:"row items-center header-top q-mt-sm"},[e("div",{staticClass:"label col"},[t._v("Form name")]),e("div",{staticClass:"label col-auto"},[t._v("Last 90 days")])]),e("div",{staticClass:"row items-center q-mb-sm"},[e("div",{staticClass:"col"},[t._v("Sales order")]),e("div",{staticClass:"col-auto row"},[e("div",{staticClass:"q-mr-md"},[t._v("79")]),e("BaseIcon",{attrs:{name:"mdi-triangle",color:"positive"}}),t._v(" 5% ")],1)]),e("div",{staticClass:"row items-center q-mb-sm"},[e("div",{staticClass:"col"},[t._v("Invoice Payable")]),e("div",{staticClass:"col-auto row"},[e("div",{staticClass:"q-mr-md"},[t._v("81")]),e("BaseIcon",{attrs:{name:"mdi-triangle",color:"positive"}}),t._v(" 7% ")],1)])])])])])])])],1)},a=[],r=i("73f9"),o=i("c2d0"),l=i("1b0d"),n={name:"FormsOverview",components:{SimpleFilter:r["a"],PieChart:o["a"]},data(){return{formId:0,formList:[],series:[{name:"TASK",color:"#7e61c8",data:[10,41,35,51,49,62,69,91,148,100,125,30]},{name:"MASTER",color:"#cec2ed",data:[2,33,12,23,50,89,46,80,110]},{name:"WORKFLOW",color:"#9d61c8",data:[10,41,35,51,49,62,69,91,148,100,125,30]},{name:"SLA",color:"#cfb1e6",data:[2,33,12,23,50,89,46,80,110]}],chartOptions:{chart:{height:"100%",type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"",align:"left"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},pieSeries:[50,50],pieChartOptions:{chart:{type:"donut"},title:{text:"",align:"left"},labels:["Open","Closed"],colors:["#bfa0fe","#75c1fd"],responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],legend:{show:!1}},formCount:[{label:"Total Master Forms",value:"master",count:0},{label:"Total Workflow Forms",value:"workflow",count:0},{label:"Total SLA Forms",value:"sla",count:0},{label:"Total Task Forms",value:"task",count:0}],userColumns:[{id:this.$nano.id(),name:"name",label:"Created User"},{id:this.$nano.id(),name:"totalForms",label:"Total Forms"},{id:this.$nano.id(),name:"totalEntries",label:"Total Entries"}],userTable:[]}},created(){this.getForms(),this.getAllFormCounts(),this.getAllFormUserwiseCounts()},methods:{getOverviewCharts(){},async getForms(){this.$store.commit("showLoadingBar");let t="createdBy",e=this.$store.state.session.id;const{error:i,payload:s}=await l["g"].getFormList(t,e);this.$store.commit("hideLoadingBar"),i?this.$alert.error(i):s&&(this.formList=s.map(t=>({id:this.$nano.id(),label:t.value,value:t.id})))},async getAllFormCounts(){this.$store.commit("showLoadingBar");const{error:t,payload:e}=await l["o"].getAllFormCounts();this.$store.commit("hideLoadingBar"),t?this.$alert.error(t):e&&this.formCount.forEach(t=>{const i=Object.keys(e).find(e=>e===t.value);i&&(t.count=e[i])})},async getAllFormGraph(){this.$store.commit("showLoadingBar");let t=(new Date).getFullYear();const{error:e,payload:i}=await l["o"].getAllFormtypeEntryGraph(t);this.$store.commit("hideLoadingBar"),e?this.$alert.error(e):i&&console.log("graph",i)},async getAllFormUserwiseCounts(){this.$store.commit("showLoadingBar");const{error:t,payload:e}=await l["o"].getUserwiseAllFormEntryCounts();this.$store.commit("hideLoadingBar"),t?this.$alert.error(t):e&&(this.userTable=e)}}},c=n,d=(i("7233"),i("2877")),u=i("cb32"),p=i("93dc"),m=i.n(p),f=Object(d["a"])(c,s,a,!1,null,"037fd91e",null);e["default"]=f.exports;m()(f,"components",{QAvatar:u["a"]})},"6df8":function(t,e,i){},7233:function(t,e,i){"use strict";i("0f4e")},"73f9":function(t,e,i){"use strict";i("caad");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",attrs:{id:"simple-filter"}},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[["-1"===t.selectedfid?e("div",{staticClass:"backGround row q-ml-sm q-mr-sm q-mt-sm q-mb-sm",staticStyle:{"font-size":"larger","font-weight":"700",color:"#643094"}},[t._v(" All Save Search ")]):t._e(),"-1"!=t.selectedfid?e("div",{staticClass:"backGround row"},[t.workspace?e("SelectField",{staticClass:"fieldList q-ml-sm q-mr-sm q-mt-sm q-mb-sm",attrs:{"is-mandatory":"",placeholder:"Select Workspace","is-clearable":"",options:t.workspaceList},on:{input:function(e){return t.$emit("update:workspaceId",t.workSpaceId)}},model:{value:t.workSpaceId,callback:function(e){t.workSpaceId=e},expression:"workSpaceId"}}):t._e(),!t.workspace||t.workSpaceId?e("SelectField",{staticClass:"fieldList q-ml-sm q-mr-sm q-mt-sm q-mb-sm",attrs:{"is-mandatory":"",placeholder:t.name,"is-clearable":"",options:t.list},on:{input:t.getData},model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}}):t._e()],1):t._e()],t._l(t.filterGroups,(function(i,s){return[e("div",{key:i.id,staticClass:"backGround"},t._l(i.filters,(function(i,a){return e("ValidationObserver",{key:i.id,ref:"form",refInFor:!0,staticClass:"row"},[e("ValidationProvider",{key:i.id,staticClass:"col q-mr-xs",attrs:{name:"criteria",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:r}){return[e("SelectField",{staticClass:"fieldList q-ml-sm q-mr-xs q-mt-sm q-mb-sm",attrs:{"is-mandatory":"","is-clearable":"",options:t._columns,error:r[0]},on:{input:function(e){return t.applyDataType(s,a,i.criteria)}},model:{value:i.criteria,callback:function(e){t.$set(i,"criteria",e)},expression:"filter.criteria"}})]}}],null,!0)}),"SHORT_TEXT"===i.dataType||"BARCODE"===i.dataType?e("ValidationProvider",{staticClass:"col q-mr-xs",attrs:{name:"value",rules:{required:!["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition)}},scopedSlots:t._u([{key:"default",fn:function({errors:s}){return[e("TextField",{staticClass:"textField q-mt-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),error:s[0]},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"filter.value"}})]}}],null,!0)}):"DATE"===i.dataType?e("ValidationProvider",{staticClass:"row q-mr-xs",attrs:{name:"value",rules:{required:!["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition)}},scopedSlots:t._u([{key:"default",fn:function({errors:s}){return[e("DateField",{staticClass:"dateField q-mr-xs q-mt-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),error:s[0],placeholder:"From Date"},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"filter.value"}}),e("DateField",{staticClass:"dateField q-mt-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),error:s[0],placeholder:"To Date"},model:{value:i.valueTo,callback:function(e){t.$set(i,"valueTo",e)},expression:"filter.valueTo"}})]}}],null,!0)}):"SINGLE_SELECT"===i.dataType||"SINGLE_CHOICE"===i.dataType?e("ValidationProvider",{staticClass:"col q-mr-xs",attrs:{name:"value",rules:{required:!["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition)}},scopedSlots:t._u([{key:"default",fn:function({errors:r}){return[t.apiPath&&!t.getOptions(i.criteria)?[e("AsyncSelectField",{staticClass:"fieldList q-mt-sm q-mb-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),error:r[0],"api-path":t.apiPath,"column-name":i.criteria},on:{input:function(e){t.$emit("update"),t.applyFilterType(s,a,i.criteria,i.arrayValue)}},model:{value:i.arrayValue,callback:function(e){t.$set(i,"arrayValue",e)},expression:"filter.arrayValue"}})]:[e("SelectField",{staticClass:"fieldList q-mt-sm q-mb-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),"is-searchable":!0,options:t.getOptions(i.criteria),error:r[0]},on:{input:function(e){t.$emit("update"),t.applyFilterType(s,a,i.criteria,i.arrayValue)}},model:{value:i.arrayValue,callback:function(e){t.$set(i,"arrayValue",e)},expression:"filter.arrayValue"}})]]}}],null,!0)}):e("ValidationProvider",{staticClass:"col q-mr-xs",attrs:{name:"value",rules:{required:!["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition)}},scopedSlots:t._u([{key:"default",fn:function({errors:s}){return[e("TextField",{staticClass:"textField q-mt-sm",attrs:{"is-mandatory":"","is-disabled":["IS_EMPTY","IS_NOT_EMPTY"].includes(i.condition),error:s[0]},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"filter.value"}})]}}],null,!0)}),e("div",{staticClass:"col-auto q-mt-md"},[e("BaseActionButton",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"search filter",expression:"'search filter'",modifiers:{top:!0}}],staticClass:"plus q-mr-xs",attrs:{icon:"eva-search",size:"20px",color:"primary","is-flat":""},on:{click:function(e){t.$emit("update"),t.applyFilterType(s,a,i.arrayValue)}}})],1),e("div",{staticClass:"col-auto q-mt-md"},[e("BaseActionButton",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"remove filter",expression:"'remove filter'",modifiers:{top:!0}}],staticClass:"plus q-mr-xs",attrs:{icon:"mdi-close",size:"14px","is-flat":"",color:"red"},on:{click:function(e){return t.removeFilterGroup(s)}}})],1)],1)})),1)]})),t.selectedId&&"TABLE"===t.activeView?e("BaseActionButton",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"add filter",expression:"'add filter'",modifiers:{top:!0}}],staticClass:"q-ml-xs q-mt-sm q-mb-sm",attrs:{icon:"mdi-plus",color:"secondary"},on:{click:t.addFilterGroup}}):t._e()],2)]),t.dateValue?e("p",{staticClass:"report-header text-uppercase text-primary"},[t._v(" report generated for : "+t._s(t.weekValue)+" "+t._s(t.monthValue)+" "+t._s(t.yearValue)+" ")]):t._e(),t.noFilter?t._e():e("div",[t.selectedId?e("BaseActionButton",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"Save Filter",expression:"'Save Filter'",modifiers:{top:!0}}],staticClass:"q-ml-xs q-mt-sm q-mb-sm q-mr-sm",attrs:{icon:"mdi-content-save-cog",color:"primary"},on:{click:function(e){return t.$emit("saveData")}}}):t._e(),t.selectedId?t._e():e("SelectField",{staticClass:"fieldList q-ml-sm q-mr-sm q-mt-sm q-mb-sm",attrs:{"is-mandatory":"",placeholder:"Saved Reports   ("+t.filterList.length+")","is-clearable":"",options:t.filterList},on:{click:function(e){return t.$emit("viewFilter")},input:t.filterData},model:{value:t.selectedfid,callback:function(e){t.selectedfid=e},expression:"selectedfid"}})],1)])])},a=[],r=(i("13d5"),i("14d9"),i("7bb1")),o=i("b3d1"),l=i("12b8"),n=i("53c1"),c=i("0c21"),d={name:"SimpleFilter",components:{ValidationObserver:r["a"],ValidationProvider:r["b"],TextField:o["a"],SelectField:l["a"],DateField:n["a"],AsyncSelectField:c["a"]},props:{id:{type:Number,default:0},columns:{type:Array,default:()=>[]},filterBy:{type:Array,default:()=>[]},workspace:{type:Boolean,default:!1},name:{type:String,required:!0},list:{type:Array,default:()=>[]},wId:{type:Number,default:0},workspaceList:{type:Array,default:()=>[]},module:{type:String,default:""},moduleId:{type:[String,Number],default:0},activeView:{type:String,default:""},dateValue:{type:Boolean,default:!1},weekValue:{type:String,default:""},monthValue:{type:String,default:""},yearValue:{type:String,default:""},filterList:{type:Array,default:()=>[]},fid:{type:String,default:""},noFilter:{type:Boolean,default:!1}},data(){return{workSpaceId:0,selectedId:0,filterGroups:[],WfilterId:0,selectedfid:"",filters:!1}},computed:{_columns(){var t=this.columns.reduce((t,e)=>("isFilter"in e?e.isFilter&&t.push({id:e.id,label:e.label,value:e.name,dataType:"TITLE"!==e.dataType?e.dataType:"SHORT_TEXT"}):t.push({id:e.id,label:e.label,value:e.name,dataType:"TITLE"!==e.dataType?e.dataType:"SHORT_TEXT"}),t),[]);return t},apiPath(){return"repository"===this.module?`/repository/${this.moduleId}/uniqueColumnValues`:"form"===this.module?`/form/${this.moduleId}/uniqueColumnValues`:""}},watch:{id:{deep:!0,immediate:!0,handler(){this.id&&(this.selectedId=this.id)}},workSpaceId:{deep:!0,immediate:!0,handler(){this.workSpaceId||(this.filterGroups=[])}},filterGroups:{deep:!0,immediate:!0,handler(){this.filterGroups.length&&(this.filterGroups[0].groupCondition="",this.$emit("update:filterBy",this.filterGroups))}},activeView:{immediate:!0,handler(){"CHART"===this.activeView&&(this.filterGroups=[])}},fid:{deep:!0,immediate:!0,handler(){this.fid&&(this.selectedfid=this.fid,this.filterData())}},wId:{deep:!0,immediate:!0,handler(){this.wId&&(this.workSpaceId=Number(this.wId))}},filterBy:{deep:!0,immediate:!0,handler(){this.filters&&(this.filterGroups=this.filterBy,console.log(this.filterGroups,"groups")),this.filters=!1}}},methods:{addFilterGroup(){this.filterGroups.push({id:this.$nano.id(),filters:[{id:this.$nano.id(),criteria:"",condition:"",value:"",valueTo:"",arrayValue:""}],groupCondition:(this.filterGroups.length,"")})},removeFilterGroup(t){this.filterGroups.splice(t,1),this.selectedId&&this.$emit("update")},addFilter(t){this.filterGroups[t].filters.push({id:this.$nano.id(),criteria:"",condition:"",value:""})},removeFilter(t,e){this.filterGroups[t].filters.splice(e,1)},applyDataType(t,e,i){this.filterGroups[t].filters[e].value="",this.filterGroups[t].filters[e].condition="",this.filterGroups[t].filters[e].condition="CONTAINS",this.filterGroups[t].filters[e].dataType="",this.filterGroups[t].groupCondition="and";let s=this._columns.find(t=>t.value===i);this.filterGroups[t].filters[e].selectedCriteria=s.label,s&&(this.filterGroups[t].filters[e].dataType=s.dataType,"SINGLE_SELECT"===s.dataType&&(this.filterGroups[t].filters[e].condition="IS_EQUALS_TO"))},getData(){this.selectedId?this.$emit("update:id",this.selectedId):this.$emit("update:id",0),this.filterGroups=[],this.$emit("update:filterBy",this.filterGroups)},getOptions(t){var e;return null===(e=this.columns.find(e=>e.name===t))||void 0===e?void 0:e.options},applyFilterType(t,e,i,s){var a;let r=null===(a=this.columns.find(t=>t.name===i))||void 0===a?void 0:a.options,o=r.find(t=>t.value===s);this.filterGroups[t].filters[e].selectedValue=o.label},filterData(){this.selectedfid?("-1"===this.selectedfid?(this.$emit("update:fid",this.selectedfid),this.workspace=!1,this.selectedId=0,this.workSpaceId=0):(this.filters=!0,this.id=this.selectedId,this.wId=this.workSpaceId),this.$emit("update:fid",this.selectedfid)):(this.selectedfid||(this.selectedId=0,this.workSpaceId=0),this.$emit("update:fid",""))}}},u=d,p=(i("dbf6"),i("0059"),i("2877")),m=Object(p["a"])(u,s,a,!1,null,"0293bc04",null);e["a"]=m.exports},"85b1":function(t,e,i){"use strict";var s=i("2332"),a=i("26ee"),r=function(){return a["a"].Date.now()},o=r,l=/\s/;function n(t){var e=t.length;while(e--&&l.test(t.charAt(e)));return e}var c=n,d=/^\s+/;function u(t){return t?t.slice(0,c(t)+1).replace(d,""):t}var p=u,m=i("1bc6"),f=NaN,h=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=parseInt;function C(t){if("number"==typeof t)return t;if(Object(m["a"])(t))return f;if(Object(s["a"])(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Object(s["a"])(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=p(t);var i=v.test(t);return i||y.test(t)?b(t.slice(2),i?2:8):h.test(t)?f:+t}var _=C,w="Expected a function",g=Math.max,S=Math.min;function T(t,e,i){var a,r,l,n,c,d,u=0,p=!1,m=!1,f=!0;if("function"!=typeof t)throw new TypeError(w);function h(e){var i=a,s=r;return a=r=void 0,u=e,n=t.apply(s,i),n}function v(t){return u=t,c=setTimeout(C,e),p?h(t):n}function y(t){var i=t-d,s=t-u,a=e-i;return m?S(a,l-s):a}function b(t){var i=t-d,s=t-u;return void 0===d||i>=e||i<0||m&&s>=l}function C(){var t=o();if(b(t))return T(t);c=setTimeout(C,y(t))}function T(t){return c=void 0,f&&a?h(t):(a=r=void 0,n)}function k(){void 0!==c&&clearTimeout(c),u=0,a=d=r=c=void 0}function q(){return void 0===c?n:T(o())}function x(){var t=o(),i=b(t);if(a=arguments,r=this,d=t,i){if(void 0===c)return v(d);if(m)return clearTimeout(c),c=setTimeout(C,e),h(d)}return void 0===c&&(c=setTimeout(C,e)),n}return e=_(e)||0,Object(s["a"])(i)&&(p=!!i.leading,m="maxWait"in i,l=m?g(_(i.maxWait)||0,e):l,f="trailing"in i?!!i.trailing:f),x.cancel=k,x.flush=q,x}e["a"]=T},b201:function(t,e,i){},c2d0:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("ChartWrapper",{attrs:{"dashboard-view":t.dashboardView,title:t.title,options:t.pieChartOptions,series:t.yData},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header",(function(){return[t.dashboardView?t._e():[e("BaseActionButton",{attrs:{icon:"mdi-pin",color:t.dashboard?"secondary":"gray","no-border":"","is-flat":"",size:"20px",rotate:"rotate-45"},on:{click:function(e){t.dashboard?t.$emit("isDelete"):t.$emit("pin")}}})]]}))]},proxy:!0}],null,!0)})},a=[],r=i("2f62"),o=i("a1a34"),l=i("2adf"),n={name:"PieChart",components:{ChartWrapper:l["a"]},props:{title:{type:String,required:!0},xData:{type:Array,required:!0},yData:{type:Array,required:!0},options:{type:Object,default:()=>{}},dashboard:{type:Boolean,default:!1},dashboardView:{type:Boolean,default:!1}},data(){return{pieChartOptions:{chart:{type:"pie"},labels:this.xData,stroke:{colors:["#ffffff"]}}}},computed:{...Object(r["c"])(["darkTheme"])},watch:{options:{immediate:!0,deep:!0,handler(){Object(o["a"])(this.pieChartOptions,this.options)}},darkTheme(){this.pieChartOptions.stroke.colors=this.darkTheme?["#1d2129"]:["#ffffff"]}}},c=n,d=i("2877"),u=Object(d["a"])(c,s,a,!1,null,"6f859db7",null);e["a"]=u.exports},da87:function(t,e,i){"use strict";i("e10a")},dbf6:function(t,e,i){"use strict";i("b201")},e10a:function(t,e,i){},eead:function(t,e,i){}}]);
//# sourceMappingURL=forms-overview.3d14352a.js.map