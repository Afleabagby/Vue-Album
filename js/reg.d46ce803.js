(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{b8b8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"reg"}},[s("b-container",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[s("b-form-group",{attrs:{id:"input-group-1",label:"帳號","label-for":"input-1",state:t.accountState,description:"帳號長度為 4~20 個字","invalid-feedback":"帳號格式不符"}},[s("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"請輸入帳號 ...",state:t.accountState},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),s("b-form-group",{attrs:{id:"input-group-2",label:"密碼","label-for":"input-2",state:t.passwordState,description:"密碼長度為 4~20 個字","invalid-feedback":"密碼格式不符"}}),s("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"請輸入密碼 ...",state:t.passwordState},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"text-center"},[s("b-button",{attrs:{variant:"success",type:"submit"}},[t._v("註冊")]),s("b-button",{attrs:{variant:"danger",type:"reset"}},[t._v("重置")])],1)],1)],1)],1)],1)],1)},n=[],o={name:"Reg",data:function(){return{account:"",password:""}},computed:{accountState:function(){return 0===this.account.length?null:this.account.length>=4&&this.account.length<=20},passwordState:function(){return 0===this.password.length?null:this.password.length>=4&&this.password.length<=20}},methods:{onSubmit:function(){var t=this;this.accountState&&this.passwordState&&this.axios.post("https://albumhey.herokuapp.com/users/",this.$data).then((function(e){e.data.success?t.$swal({icon:"success",title:"註冊成功"}):t.$swal({icon:"error",title:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))},onReset:function(){this.account="",this.password=""}}},r=o,i=s("2877"),c=Object(i["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=reg.d46ce803.js.map