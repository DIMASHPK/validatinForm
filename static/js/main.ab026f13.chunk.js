(this.webpackJsonpsyntechtest=this.webpackJsonpsyntechtest||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/check.5e2ffbd6.svg"},29:function(e,a,t){e.exports=t(47)},34:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(12),o=t.n(l),c=t(9),i=(t(34),Object(c.f)((function(e){var a=e.location.pathname;return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"".concat(a.includes("finally")?"Thank you":"Signup")),n.a.createElement("div",{className:"header_progressLine "},n.a.createElement("div",{className:"header__progressElement blue"}),n.a.createElement("div",{className:"header__progressElement ".concat(a.includes("nextStep")||a.includes("finally")?"blue":"")}),n.a.createElement("div",{className:"header__progressElement ".concat(a.includes("finally")?"blue":"")})))}))),d=t(7),s=function(e){var a=e.target;return{type:"CHANGE",value:a.value,name:a.name}},m=(t(40),function(e){var a=e.inputs;return n.a.createElement("section",{className:"firstStep"},a.map((function(e){var a=e.name,t=e.id,r=e.label,l=e.value,o=e.onChange,c=e.onBlur,i=e.error;return n.a.createElement("div",{key:t,className:"firstStep__inputWrap ".concat(i.length>1?"error":"")},n.a.createElement("label",{className:"firstStep__label",htmlFor:a},i.length>1?i:a),n.a.createElement("input",{className:"firstStep__input",type:"text",name:r||a,onChange:o,onBlur:c,value:l}))})))}),u={changeInputsAC:s,validEmailAC:function(e){return{type:"VALID_EMAIL",email:e.target.value}},validPasswordAC:function(e){return{type:"VALID_PASSWORD",password:e.target.value}},validConfirmAC:function(e){return{type:"VALID_COMFIRM",confirm:e.target.value}}},p=Object(d.b)((function(e){var a=e.FirstValiditionReducer,t=a.email,r=a.password,n=a.confirm,l=a.emailValid.emailError,o=a.passwordValid;return{email:t,password:r,confirm:n,emailError:l,passwordError:o.passwordError,confirmError:o.confirmError}}),u)((function(e){var a=e.email,t=e.password,r=e.confirm,l=e.emailError,o=e.passwordError,c=e.confirmError,i=e.changeInputsAC,d=e.validEmailAC,s=e.validPasswordAC,u=e.validConfirmAC,p=e.status,E=[{id:1,name:"email",onChange:i,onBlur:d,value:a,error:l},{id:2,name:"password",onChange:i,onBlur:s,value:t,error:o},{id:3,name:"confirm password",label:"confirm",onChange:i,onBlur:u,value:r,error:c}];return n.a.createElement(m,{inputs:E,status:p})})),E=(t(41),function(e){var a=e.dateInputs,t=e.genderInputs,r=e.aboutUs,l=e.adult,o=e.onChange;return n.a.createElement("section",{className:"secondStep"},n.a.createElement("div",{className:"secondStep__date"},n.a.createElement("h2",{className:"secondStep__title ".concat(l?"":"error")},!1===l?"Sorry you should be adult":"Date of birth"),n.a.createElement("div",{className:"secondStep__dateWrap"},a.map((function(e){var a=e.id,t=e.name,r=e.min,c=e.max,i=e.placeholder,d=e.value,s=e.onBlur,m=e.error;return n.a.createElement("div",{key:a,className:"secondStep__dateElementWrap"},n.a.createElement("input",{type:"number",value:d,error:m,key:a,min:r&&r,max:c&&c,name:t,placeholder:i,onChange:o,onBlur:s,className:"secondStep__dateElement ".concat(m||!l?"error":"")}),n.a.createElement("span",{className:"secondStep__dateError"},m))})))),n.a.createElement("div",{className:"secondStep__gender"},n.a.createElement("h2",{className:"secondStep__title"},"Gender"),n.a.createElement("div",{className:"secondStep__genderWrap"},t.map((function(e){var a=e.id,t=e.value,r=e.gender;return n.a.createElement("div",{className:"secondStep__generElementWrap ".concat(r===t?"active":""),key:a},n.a.createElement("label",{className:"secondStep__genderElementLabel",htmlFor:t},t),n.a.createElement("input",{id:t,type:"radio",name:"gender",value:t,checked:r===t,onChange:o,className:"secondStep__genderElement ",hidden:!0}))})))),n.a.createElement("div",{className:"secondStep__aboutUs"},n.a.createElement("h2",{className:"secondStep__title"}," WHERE DID YOU HEAR ABOUT IS?"),n.a.createElement("div",{className:"secondStep__aboutUsSelectWrap"},n.a.createElement("select",{name:"aboutUs",className:"secondStep__aboutUsSelect",value:r,onChange:o},n.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0,className:"secondStep__aboutUsInput"}),n.a.createElement("option",{className:"secondStep__aboutUsOption",value:"from friends"},"from friends"),n.a.createElement("option",{className:"secondStep__aboutUsOption",value:"From Instagramm"},"From Instagramm"),n.a.createElement("option",{className:"secondStep__aboutUsOption",value:"From Facebook"},"From Facebook")))))}),h={changeInputsAC:s,validDayAC:function(e){return{type:"VALID_DAY",day:e.target.value}},validMonthAC:function(e){return{type:"VALID_MONTH",month:e.target.value}},validYearAC:function(e){return{type:"VALID_YEAR",year:e.target.value}}},f=Object(d.b)((function(e){var a=e.SecondValiditionReducer,t=a.day,r=a.month,n=a.year,l=a.adult,o=a.gender,c=a.aboutUs,i=a.dateValid;return{adult:l,day:t,month:r,year:n,dayError:i.day.dayError,monthError:i.month.monthError,yearError:i.year.yearError,aboutUs:c,gender:o}}),h)((function(e){var a=e.adult,t=e.day,r=e.month,l=e.year,o=e.dayError,c=e.monthError,i=e.yearError,d=e.aboutUs,s=e.gender,m=e.changeInputsAC,u=[{id:1,name:"day",min:1,max:31,placeholder:"DD",value:t,onBlur:e.validDayAC,error:o},{id:2,name:"month",min:1,max:12,placeholder:"MM",value:r,onBlur:e.validMonthAC,error:c},{id:3,name:"year",min:0,placeholder:"YYYY",value:l,onBlur:e.validYearAC,error:i}],p=[{id:1,value:"male",gender:s},{id:2,value:"female",gender:s},{id:3,value:"unspecified",gender:s}];return n.a.createElement(E,{dateInputs:u,genderInputs:p,onChange:m,aboutUs:d,adult:a})})),v=t(27),b=t(21),y=t.n(b),_=(t(42),t(43),function(){return n.a.createElement("div",{className:"preloader"},n.a.createElement("div",{className:"lds-spinner"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)))}),g=function(e){var a=e.getUserData,t=e.loadDone,r=e.load;return n.a.createElement("section",{className:"finally"},r?n.a.createElement("img",{className:"finally__mark",src:y.a,alt:"mark"}):n.a.createElement(n.a.Fragment,null,n.a.createElement(_,null),n.a.createElement("img",{src:y.a,alt:"preload",onLoad:t})),n.a.createElement("button",{className:"finally__button",onClick:a},"Go to Dashboard"))},V=Object(d.b)((function(e){var a=e.FirstValiditionReducer,t=a.email,r=a.password,n=e.SecondValiditionReducer;return{email:t,password:r,day:n.day,month:n.month,year:n.year,gender:n.gender,aboutUs:n.aboutUs}}))((function(e){var a=e.email,t=e.password,r=e.day,l=e.month,o=e.year,c=e.gender,i=e.aboutUs,d=n.a.useState(!1),s=Object(v.a)(d,2),m=s[0],u=s[1];return n.a.createElement(g,{getUserData:function(){return console.log({userData:{email:a,password:t,dateOfBirhday:new Date("".concat(o,"-").concat(l,"-").concat(r)).toLocaleDateString(),gender:c,aboutUs:i}})},load:m,loadDone:function(){return u(!0)}})})),w=t(10),x=(t(44),function(e){var a=e.path,t=e.disabled;return n.a.createElement("footer",{className:"footer"},a.includes("nextStep")?n.a.createElement("button",{className:"footer__button"},n.a.createElement(w.b,{to:"/",className:"footer__link footer__link_back"},"Back")):n.a.createElement("div",null),n.a.createElement("button",{className:"footer__button",disabled:t()},!0===t()?n.a.createElement("span",{className:"footer__link"},"Next"):n.a.createElement(w.b,{to:a.includes("nextStep")?"/finally":"/nextStep",className:"footer__link"},"Next")))}),N=Object(d.b)((function(e){var a=e.FirstValiditionReducer,t=a.emailValid.validEmail,r=a.passwordValid.validPassword,n=e.SecondValiditionReducer,l=n.dateValid;return{validEmail:t,validPassword:r,dayValid:l.day.dayValid,monthValid:l.month.monthValid,yearValid:l.year.yearValid,adult:n.adult}}))((function(e){var a=e.path,t=e.validEmail,r=e.validPassword,l=e.dayValid,o=e.monthValid,c=e.yearValid,i=e.adult;return n.a.createElement(x,{path:a,disabled:function(){return!(a.includes("/nextStep")&&l&&o&&c&&i)&&(!!(a.includes("/nextStep")&&!l||a.includes("/nextStep")&&!o||a.includes("/nextStep")&&!c)||(!!(a.includes("/nextStep")&&t&&r)||!(a.includes("/")&&t&&r)))}})})),S=(t(45),t(46),t(50)),O=t(49),A=Object(c.f)((function(e){var a=e.location,t=a.pathname,r=a.key;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement("div",{className:"transitionWrap"},n.a.createElement(S.a,{className:"transitionWrap__relative"},n.a.createElement(O.a,{key:r,timeout:{enter:500,exit:500},classNames:"fade"},n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/nextStep",component:function(){return n.a.createElement(f,null)}}),n.a.createElement(c.a,{exact:!0,path:"/finally",component:function(){return n.a.createElement(V,null)}}),n.a.createElement(c.a,{exact:!0,path:"/",component:function(){return n.a.createElement(p,null)}}))))),!t.includes("finally")&&n.a.createElement(N,{path:t}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(13),D=t(26),j=t(14),I=t(2),k=function(e){return e.length<1?"email is required":e.length>100?"too large":e.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i)?"":"invalid email"},U=function(e){return e.length<1?"password is required":e.length<6?"Password should be minimum 6 characters long":""},F=function(e){return e>31?"day should be less than 32":e<1?"day should be bigger than 0":""},L=function(e){return e>13?"month should be less than 13":e<1?"month should be bigger than 0":""},R=function(e){return e<1?"year should be bigger than 0":""},B=function(){for(var e=0,a=!1,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.forEach((function(a){return parseInt(a)>0?e++:e--})),3===e&&(a=r.reduce((function(e,a,t){return t<2?e+a+"-":e+a}),""));var l=(new Date).getFullYear()-new Date(a).getFullYear();return l>18},W={email:"",password:"",confirm:"",emailValid:{validEmail:!1,emailError:""},passwordValid:{validPassword:!1,passwordError:"",confirmError:""}},M={day:"",month:"",year:"",adult:!0,gender:"male",aboutUs:"",dateValid:{day:{dayValid:!1,dayError:""},month:{month:"",monthValid:!1,monthError:""},year:{year:"",yearValid:!1,yearError:""}}},P=Object(C.combineReducers)({FirstValiditionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.name,n=a.value,l=a.email,o=a.password,c=a.confirm;switch(t){case"CHANGE":return Object(I.a)({},e,Object(j.a)({},r,n));case"VALID_EMAIL":return Object(I.a)({},e,{emailValid:Object(I.a)({},e.emailValid,{emailError:k(l),validEmail:""===k(l)})});case"VALID_PASSWORD":return Object(I.a)({},e,{passwordValid:Object(I.a)({},e.passwordValid,{passwordError:U(o),validPassword:""===e.passwordValid.passwordError&&e.password===e.confirm,confirmError:e.password!==e.confirm&&e.confirm.length>0?"Password confirmation should match the password":""})});case"VALID_COMFIRM":return Object(I.a)({},e,{passwordValid:Object(I.a)({},e.passwordValid,{validPassword:""===e.passwordValid.passwordError&&e.password===c,confirmError:e.password===c?"":"Password confirmation should match the password"})});default:return Object(I.a)({},e)}},SecondValiditionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.name,n=a.value,l=a.day,o=a.month,c=a.year,i=B(e.year,e.month,e.day);switch(t){case"CHANGE":return Object(I.a)({},e,Object(j.a)({},r,n));case"VALID_DAY":return Object(I.a)({},e,{dateValid:Object(I.a)({},e.dateValid,{day:Object(I.a)({},e.dateValid.day,{dayError:F(l),dayValid:""===F(l)})}),adult:i});case"VALID_MONTH":return Object(I.a)({},e,{dateValid:Object(I.a)({},e.dateValid,{month:Object(I.a)({},e.dateValid.month,{monthError:L(o),monthValid:""===L(o)})}),adult:i});case"VALID_YEAR":return Object(I.a)({},e,{dateValid:Object(I.a)({},e.dateValid,{year:Object(I.a)({},e.dateValid.year,{yearError:R(c),yearValid:""===R(c)})}),adult:i});default:return Object(I.a)({},e)}}}),Y=Object(C.createStore)(P,Object(D.composeWithDevTools)());o.a.render(n.a.createElement(d.a,{store:Y},n.a.createElement(w.a,null,n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.ab026f13.chunk.js.map