(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),s=(a(27),a(8)),i=a(3),o=a(4),d=function(e){return 0===e?7:e},u=function(e,t){return new Date(e,t,1).getDay()},m=function(e,t){return new Date(e,t+1,0).getDay()},f=function(e){return 11===e?0:e+1},p=function(e){return 0===e?11:e-1},y=function(e){return e<10?"0"+e:e},k=(a(32),a(33),function(e){var t=e.weekDayName,a=e.variables,n=void 0===a?"":a;return c.a.createElement("div",{className:"week-day ".concat(n)},t)}),E=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],v=function(){return c.a.createElement("div",{className:"week-days"},E.map((function(e,t){return c.a.createElement(k,{variables:t>=5?"weekend":null,key:t,weekDayName:e})})))},h=function(e){return{type:"CHANGE_ADD_MODE",payload:{isAddMode:e}}},b=function(e){return{type:"CHANGE_MONTH",payload:{type:e}}},g=function(e){return{type:"CHANGE_YEAR",payload:{type:e}}},D=(a(34),function(e){var t=e.title,a=e.variables,n=void 0===a?"":a;return c.a.createElement("div",{className:"day-todo ".concat(n)},t)}),N=(a(35),function(e){var t=e.date,a=e.id,r=e.onClickDateHandler,l=e.rightClassName,s=e.allDays,i=e.selectedDay,o=e.month,d=e.year;return Object(n.useEffect)((function(){"date-num date-num-current"===l&&r(a,y(t),o,d)}),[]),c.a.createElement("div",{className:null!==i&&i.id===a?"date date-selected":"date",id:a,onClick:function(){return r(a,y(t),o,d)}},c.a.createElement("span",{className:l},t),c.a.createElement("div",{className:"date-wrap__tasks"},s[a]&&s[a].tasks.map((function(e,t){return t<4&&c.a.createElement(D,{key:t,title:e.title,onClickDateHandler:r,variables:e.variables})}))))}),O=(a(36),Object(o.b)((function(e){var t=e.date,a=t.month,n=t.year,c=e.tasks;return{month:a,year:n,allDays:c.allDays,selectedDay:c.selectedDay}}),(function(e){return{selectDay:function(t,a,n,c){return e(function(e,t,a,n){return{type:"SELECT_DAY",payload:{id:e,day:t,month:a,year:n}}}(t,a,n,c))},changeMonth:function(t){return e(b(t))},changeYear:function(t){return e(g(t))}}}))((function(e){var t=e.datesArr,a=e.arrPrev,n=e.arrNext,r=e.month,l=e.year,s=e.selectDay,i=e.allDays,o=e.selectedDay,d=e.changeMonth,u=e.changeYear,m=function(e,t){switch(t){case"prev":return"date-num date-num-prev";case"next":return"date-num date-num-next";default:return function(e){var t=new Date,a=t.getDate(),n=t.getFullYear(),c=t.getMonth();return n===l&&c===r&&a===e}(e)?"date-num date-num-current":"date-num"}},f=function(e,t){switch(t){case"prev":return"".concat(0===r?l-1:l).concat(0===r?11:y(r-1)).concat(y(e));case"next":return"".concat(11===r?l+1:l).concat(y(11===r?0:r+1)).concat(y(e));default:return"".concat(l).concat(y(r)).concat(y(e))}},p=function(e,t,a,n){s(e,t,y(a+1),n)},k=function(e,t,a,n){s(e,t,0===a?12:y(a),n),d(""),0===a&&u("")},E=function(e,t,a,n){s(e,t,y(11===a?1:a+2),n),d("next"),11===a&&u("next")};return c.a.createElement("div",{className:"dates"},a.map((function(e){return c.a.createElement(N,{key:f(e,"prev"),date:e,month:r,year:l,id:f(e,"prev"),onClickDateHandler:k,rightClassName:m(e,"prev"),allDays:i,selectedDay:o})})),t.map((function(e){return c.a.createElement(N,{key:f(e,""),date:e,month:r,year:l,id:f(e,""),onClickDateHandler:p,rightClassName:m(e,""),allDays:i,selectedDay:o})})),n.map((function(e){return c.a.createElement(N,{key:f(e,"next"),date:e,month:r,year:l,id:f(e,"next"),onClickDateHandler:E,rightClassName:m(e,"next"),allDays:i,selectedDay:o})})))})));a(37);var j=Object(o.b)((function(e){var t=e.date;return{month:t.month,year:t.year}}),(function(e){return{getAllDays:function(){return e(function(){var e=localStorage.getItem("allDays");return function(t){t({type:"GET_ALL_DAYS",payload:{allDays:JSON.parse(e)}})}}())}}}))((function(e){var t=e.month,a=e.year,r=e.getAllDays,l=Object(n.useState)([]),o=Object(i.a)(l,2),f=o[0],p=o[1],y=Object(n.useState)([]),k=Object(i.a)(y,2),E=k[0],h=k[1],b=Object(n.useState)([]),g=Object(i.a)(b,2),D=g[0],N=g[1];return Object(n.useEffect)((function(){var e=function(e,t){return new Date(e,t+1,0).getDate()}(a,t),n=function(e,t){var a=u(e,t);return d(a)-1}(a,t),c=function(e,t){var a=m(e,t);return 7-d(a)+7}(a,t),r=function(e,t){return new Date(e,t,0).getDate()}(a,t),l=function(e,t,a){for(var n=Object(s.a)(e),c=t;c<=a;c++)n.push(c);return n}([],1,e),i=function(e,t,a){for(var n=Object(s.a)(a),c=0;c<e;c++)n.push(t),t++;return n}(c,1,[]),o=function(e,t,a){for(var n=Object(s.a)(a),c=0;c<e;c++)n.unshift(t),t--;return n}(n,r,[]);p(l),h(o),N(i);var f=o.concat(l,i).length-42;if(0!==f){var y=Object(s.a)(i);y.splice(y.length-f),N(y)}}),[t,a]),Object(n.useEffect)((function(){r()}),[]),c.a.createElement("div",{className:"calendar"},c.a.createElement(v,null),c.a.createElement(O,{datesArr:f,arrPrev:E,arrNext:D}))})),_=a(6),T=a(5),A=(a(41),Object(o.b)((function(e){var t=e.date;return{month:t.month,year:t.year}}),(function(e){return{changeMonth:function(t){return e(b(t))},changeYear:function(t){return e(g(t))}}}))((function(e){var t=e.month,a=e.year,n=e.changeMonth,r=e.changeYear;return c.a.createElement("div",{className:"header"},c.a.createElement("span",{className:"header__logo"},"\u041a\u0410\u041b\u0415\u041d\u0414\u0410\u0420\u042c-\u041e\u0420\u0413\u0410\u041d\u0410\u0419\u0417\u0415\u0420"),c.a.createElement("span",{className:"header__info"},c.a.createElement(_.a,{className:"prev-btn",onClick:function(){return n(""),void(0===t&&r(""))},icon:T.d}),c.a.createElement("span",{className:"header__month-year-wrap"},c.a.createElement("span",{className:"header__month"},["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][t]),c.a.createElement("span",{className:"header__year"},a)),c.a.createElement(_.a,{className:"next-btn",onClick:function(){return n("next"),void(11===t&&r("next"))},icon:T.e})))}))),C=a(13),w=a.n(C),x=a(20),M=(a(42),function(e){var t=e.title,a=e.isCompleted,n=e.removeTask,r=e.id,l=e.completeTask,s=e.selectedTask;return(c.a.createElement("li",{className:"todo-item"},c.a.createElement(_.a,{onClick:function(){return l(r)},icon:a?T.c:x.a,className:a?"mark-complete":"mark"}),c.a.createElement("span",{onClick:function(){return s(r)},className:a?"completed text":"text",title:t},t),c.a.createElement(_.a,{onClick:function(){return n(r)},icon:T.i,className:"delete"})))});M.defaultProps={title:"",isCompleted:!1,removeTask:function(){},completeTask:function(){},id:""};var S=M,I=(a(43),function(e){var t=e.removeTask,a=e.completeTask,r=e.selectedDay,l=e.filters,s=e.selectedTask,o=Object(n.useState)([]),d=Object(i.a)(o,2),u=d[0],m=d[1];return Object(n.useEffect)((function(){m(function(e,t){switch(t){case"completed":return e.filter((function(e){return e.isCompleted}));case"active":return e.filter((function(e){return!e.isCompleted}));default:return e}}(r.tasks,l))}),[l,r.tasks]),c.a.createElement("div",{className:r.tasks.length>=8?"todo-list-wrap todo-list-wrap-scroll":"todo-list-wrap"},c.a.createElement("ul",{className:"todo-list"},u.map((function(e){return c.a.createElement(S,{completeTask:a,removeTask:t,id:e.id,key:w()(),title:e.title,index:e.id,selectedTask:s,isCompleted:e.isCompleted})}))),c.a.createElement("span",{className:0===u.length?"empty":"empty hide"},0===u.length&&"completed"===l?"\u041d\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447":0===u.length&&"\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447"))});I.defaultProps={tasksList:[],removeTask:function(){},completeTask:function(){}};var H=Object(o.b)((function(e){return{selectedDay:e.tasks.selectedDay,filters:e.filters}}),(function(e){return{removeTask:function(t){return e({type:"REMOVE_TASK",payload:{taskId:t}})},completeTask:function(t){return e({type:"COMPLETE_TASK",payload:{taskId:t}})},selectedTask:function(t){return e({type:"SELECT_TASK",payload:{taskId:t}})}}}))(I),L=(a(44),[{text:"\u0412\u0441\u0435",id:"all"},{text:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435",id:"active"},{text:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",id:"completed"}]),F=function(e){var t=e.selectedDay,a=e.filters,r=e.changeFilter,l=Object(n.useState)(0),s=Object(i.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(0),m=Object(i.a)(u,2),f=m[0],p=m[1];Object(n.useEffect)((function(){d(t.tasks.filter((function(e){return!e.isCompleted})).length),p(function(e){return e.filter((function(e){return e.isCompleted})).length}(t.tasks))}),[t.tasks]);var y,k=function(e,t){return 1===e?"".concat(e," ").concat(t,"\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"):e>=2&&e<=4?"".concat(e," ").concat(t,"\u044be \u0437\u0430\u0434\u0430\u0447\u0438"):"".concat(e," ").concat(t,"\u044b\u0445 \u0437\u0430\u0434\u0430\u0447")};return c.a.createElement("div",{className:"filter-todo"},c.a.createElement("span",{className:"amount"},"completed"===a?k(f,"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d"):"active"===a?k(o,"\u0430\u043a\u0442\u0438\u0432\u043d"):"\u0412\u0441\u0435\u0433\u043e ".concat((y=t.tasks.length,"".concat(y,1===y?" \u0437\u0430\u0434\u0430\u0447\u0430":y>=2&&y<=4?" \u0437\u0430\u0434\u0430\u0447\u0438":" \u0437\u0430\u0434\u0430\u0447")))),c.a.createElement("div",{className:"btn-group"},L.map((function(e){var t=e.text,n=e.id;return c.a.createElement("button",{onClick:function(){return r(n)},key:n,className:n===a?"filter-btn active":"filter-btn"},t)}))))};F.defaultProps={amount:0,text:"Add todo",changeFilter:function(){}};var G=Object(o.b)((function(e){return{selectedDay:e.tasks.selectedDay,filters:e.filters}}),(function(e){return{changeFilter:function(t){return e(function(e){return{type:"CHANGE_FILTERS",payload:{activeFilter:e}}}(t))}}}))(F),Y=(a(45),Object(o.b)((function(e){var t=e.tasks;return{selectedDay:t.selectedDay,isAddMode:t.isAddMode}}),(function(e){return{sortTasks:function(t,a,n){return e(function(e,t,a){return{type:"DRAG_HAPPENED",payload:{droppableIndexStart:e,droppableIndexEnd:t,draggableId:a}}}(t,a,n))},changeIsAdd:function(t){return e(h(t))}}}))((function(e){var t=e.selectedDay,a=e.changeIsAdd,n=e.isAddMode;return(c.a.createElement("div",{className:"todos"},t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"title"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043d\u0430 ",t.dayTitle),0===t.tasks.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"todos-no-tasks"},"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447!")):c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null),c.a.createElement(G,null))),c.a.createElement(_.a,{className:"todos-add-btn",onClick:function(){return a(n)},icon:T.g,title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})))}))),K=(a(46),function(e){var t=e.selectedTask,a=e.setEditMode,n=e.editMode;return c.a.createElement("div",{className:"editbox__wrap"},c.a.createElement("div",{className:"editbox__task-wrap"},c.a.createElement("span",{className:"editbox__task__name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("span",{className:"editbox__task__title"},t.title),t.description.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"editbox__task__name"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.a.createElement("span",{className:"editbox__task__description"},t.description))),c.a.createElement(_.a,{className:"editbox__edit-btn",onClick:function(){return a(!n)},icon:T.f,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}))}),R=(a(47),function(e){var t=e.changeMode,a=e.argument,n=e.title,r=e.description,l=e.setTitle,s=e.setDescription,i=e.handleClick;return c.a.createElement("div",{className:"form-wrap"},c.a.createElement("form",{className:"form-add"},c.a.createElement("label",{htmlFor:"title",className:"form__name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("input",{type:"text",name:"title",id:"title",value:n,onChange:function(e){return l(e.target.value)},className:"form__title",maxLength:"40",required:!0}),c.a.createElement("label",{htmlFor:"description",className:"form__name"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.a.createElement("textarea",{name:"description",id:"description",cols:"30",rows:"5",value:r,onChange:function(e){return s(e.target.value)},className:"form__description",maxLength:"200"})),c.a.createElement("div",{className:"button-wrap"},c.a.createElement(_.a,{onClick:function(){return i()},icon:T.c,className:"save",title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),c.a.createElement(_.a,{onClick:function(){return t(a)},icon:T.h,className:"cancel",title:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})))}),P=(a(48),function(e){var t=e.selectedTask,a=e.setEditMode,r=e.editMode,l=e.changeTask,s=Object(n.useState)(t.title),o=Object(i.a)(s,2),d=o[0],u=o[1],m=Object(n.useState)(t.description),f=Object(i.a)(m,2),p=f[0],y=f[1];return c.a.createElement(R,{changeMode:a,argument:!r,title:d,description:p,setTitle:u,setDescription:y,handleClick:function(){""!==d.trim()&&(a(!r),l(t.id,d,p))}})}),z=(a(49),function(e){var t=e.changeIsAdd,a=e.isAddMode,r=e.addTask,l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),f=m[0],p=m[1];return c.a.createElement(R,{changeMode:t,argument:a,title:o,description:f,setTitle:d,setDescription:p,handleClick:function(){""!==o.trim()&&(t(a),r(w()(),o,f,!1))}})}),J=(a(50),Object(o.b)((function(e){var t=e.tasks;return{selectedDay:t.selectedDay,selectedTask:t.selectedTask,isAddMode:t.isAddMode}}),(function(e){return{changeTask:function(t,a,n){return e(function(e,t,a){return{type:"CHANGE_TASK",payload:{taskId:e,title:t,description:a}}}(t,a,n))},changeIsAdd:function(t){return e(h(t))},addTask:function(t,a,n,c){return e(function(e,t,a,n){return{type:"ADD_TASK",payload:{taskId:e,title:t,description:a,isCompleted:n}}}(t,a,n,c))}}}))((function(e){var t=e.changeTask,a=e.selectedDay,r=e.selectedTask,l=e.isAddMode,s=e.changeIsAdd,o=e.addTask,d=Object(n.useState)(!1),u=Object(i.a)(d,2),m=u[0],f=u[1];return c.a.createElement("div",{className:"editbox"},a&&c.a.createElement("div",{className:"editbox__task"},l?c.a.createElement(z,{changeIsAdd:s,isAddMode:l,addTask:o}):r?m?c.a.createElement(P,{selectedTask:r,setEditMode:f,editMode:m,changeTask:t}):c.a.createElement(K,{selectedTask:r,setEditMode:f,editMode:m}):c.a.createElement("div",{className:"editbox-no-tasks"},"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443")))}))),B=(a(51),function(e){var t=e.socialImg,a=e.link;return c.a.createElement("a",{href:a,className:"social",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"/img/svg/".concat(t,".svg"),alt:"",className:"social-img"}))}),V=(a(52),[{socialImg:"vk",link:"https://vk.com/ludingennady"},{socialImg:"facebook",link:"https://www.facebook.com/RussianGarry1980"},{socialImg:"linkedin",link:"https://www.linkedin.com/in/gennadiyludin/"},{socialImg:"github",link:"https://github.com/GennadjiLudin/react-redux_calendar"}]),W=function(){return c.a.createElement("div",{className:"socials"},V.map((function(e,t){return c.a.createElement(B,Object.assign({},e,{key:t}))})))},q=(a(53),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement(W,null),c.a.createElement("div",null," \xa9 Copyright 2019-2020. All Rights Reserved. "))}),$=(a(54),function(e){var t=e.children;return c.a.createElement("div",{className:"organizer-section"},t)}),Q=(a(55),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"organizer ".concat(a?"hide":"")},c.a.createElement($,null,c.a.createElement(Y,null)),c.a.createElement($,null,c.a.createElement(J,null)),c.a.createElement(q,null),c.a.createElement(_.a,{className:"organizer-btn ".concat(a?"organizer-btn-show":""),onClick:function(){return r(!a)},icon:a?T.b:T.a}))});a(56);var U=function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(A,null),c.a.createElement("div",{className:"calendar-wrap"},c.a.createElement(Q,null),c.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(9),Z=a(21),ee=a(2),te={month:(new Date).getMonth(),year:(new Date).getFullYear()},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_MONTH":return Object(ee.a)({},e,{month:"next"===n.type?f(e.month):p(e.month)});case"CHANGE_YEAR":return Object(ee.a)({},e,{year:"next"===n.type?e.year+1:e.year-1});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_FILTERS":return n.activeFilter;default:return e}},ce=a(10),re={allDays:{},selectedDay:null,selectedTask:null,isAddMode:!1},le=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0,n=a.type,c=a.payload,r=function(e){return localStorage.setItem("allDays",JSON.stringify(e))};switch(n){case"GET_ALL_DAYS":return Object(ee.a)({},t,{allDays:c.allDays?c.allDays:t.allDays});case"SELECT_DAY":var l=Object(ee.a)({},t.allDays);return l[c.id]||(l[c.id]={id:c.id,dayTitle:"".concat(c.day,".").concat(c.month,".").concat(c.year),tasks:[]}),console.log(l[c.id]),Object(ee.a)({},t,{allDays:l,selectedDay:l[c.id],selectedTask:l[c.id].tasks[0]});case"SELECT_TASK":var i=Object(s.a)(t.selectedDay.tasks).find((function(e){return e.id===c.taskId}));return Object(ee.a)({},t,{selectedTask:i});case"CHANGE_ADD_MODE":return Object(ee.a)({},t,{isAddMode:!c.isAddMode});case"ADD_TASK":var o={id:c.taskId,title:c.title,description:c.description,isCompleted:c.isCompleted},d=Object(ee.a)({},t.selectedDay,{tasks:[].concat(Object(s.a)(t.selectedDay.tasks),[o])});return r(e=Object(ee.a)({},t.allDays,Object(ce.a)({},t.selectedDay.id,d))),Object(ee.a)({},t,{selectedTask:o,selectedDay:d,allDays:e});case"REMOVE_TASK":var u=Object(ee.a)({},t.selectedDay,{tasks:t.selectedDay.tasks.filter((function(e){return e.id!==c.taskId}))});return r(e=Object(ee.a)({},t.allDays,Object(ce.a)({},t.selectedDay.id,u))),Object(ee.a)({},t,{selectedDay:u,allDays:e,selectedTask:c.taskId===t.selectedTask.id?null:t.selectedTask});case"COMPLETE_TASK":var m=Object(ee.a)({},t.selectedDay,{tasks:t.selectedDay.tasks.map((function(e){var t=Object(ee.a)({},e);return t.id===c.taskId&&(t.isCompleted=!t.isCompleted),t}))});return r(e=Object(ee.a)({},t.allDays,Object(ce.a)({},t.selectedDay.id,m))),Object(ee.a)({},t,{selectedDay:m,allDays:e});case"CHANGE_TASK":var f=Object(ee.a)({},t.selectedTask,{title:c.title,description:c.description}),p=Object(ee.a)({},t.selectedDay,{tasks:t.selectedDay.tasks.map((function(e){var t=Object(ee.a)({},e);return t.id===c.taskId&&(t=f),t}))});return r(e=Object(ee.a)({},t.allDays,Object(ce.a)({},t.selectedDay.id,p))),Object(ee.a)({},t,{selectedDay:p,allDays:e,selectedTask:f});default:return t}},se=Object(X.c)({date:ae,filters:ne,tasks:le}),ie=Object(X.d)(se,Object(X.a)(Z.a));l.a.render(c.a.createElement(o.a,{store:ie},c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[22,1,2]]]);
//# sourceMappingURL=main.b20bca5f.chunk.js.map