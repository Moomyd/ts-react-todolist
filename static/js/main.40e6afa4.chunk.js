(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c(0),l=c.n(n),d=c(20),r=c.n(d),s=(c(39),c(49)),a=c(19),i=c(18),u=c(8),j=(c(40),function(e){var t=e.addTodo,c=Object(n.useState)(""),l=Object(u.a)(c,2),d=l[0],r=l[1];return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"todos"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(d),r("")},children:Object(o.jsx)("input",{className:"addTodo",type:"text",value:d,onChange:function(e){r(e.target.value)},placeholder:"What needs to be done?"})})]})}),b=(c(41),c(50)),m=(c(42),function(e){var t=e.todo,c=e.completeTodo,n=e.deleteTodo;return Object(o.jsxs)("li",{className:"item",children:[Object(o.jsxs)("label",{className:t.complete?"complete":"",children:[Object(o.jsx)("input",{checked:t.complete,onClick:function(){return c(t)},type:"checkbox"}),t.data]}),Object(o.jsx)(b.a,{className:"delete",onClick:function(){return n(t)}})]})}),p=(c(43),function(e){var t=e.todos,c=e.completeTodo,n=e.deleteTodo,l=e.choose,d=t.filter((function(e){return 1===l?e:2===l?!1===e.complete:3===l?!0===e.complete:e}));return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{className:"todo-list",children:d.map((function(e){return Object(o.jsx)(m,{todo:e,completeTodo:c,deleteTodo:n})}))})})}),O=(c(44),function(e){var t=e.todos,c=e.clearCompleted,l=e.completeTodo,d=e.deleteTodo,r=e.count,s=Object(n.useState)(1),a=Object(u.a)(s,2),i=a[0],j=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{choose:i,completeTodo:l,deleteTodo:d,todos:t}),Object(o.jsxs)("div",{className:"footer",children:[r," item left",Object(o.jsx)("button",{onClick:function(){return j(1)},type:"button",children:"All"}),Object(o.jsx)("button",{onClick:function(){return j(2)},type:"button",children:"Active"}),Object(o.jsx)("button",{onClick:function(){return j(3)},type:"button",children:"Completed"}),Object(o.jsx)("button",{onClick:c,type:"button",className:"clear",children:"Clear completed"})]})]})}),f=[{data:"\u5199todo",complete:!1}],h=function(){var e=Object(n.useState)(f),t=Object(u.a)(e,2),c=t[0],l=t[1],d=Object(n.useState)(1),r=Object(u.a)(d,2),s=r[0],b=r[1];return Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(j,{addTodo:function(e){""!==e.trim()&&(l([].concat(Object(i.a)(c),[{data:e,complete:!1}])),b(s+1))}}),Object(o.jsx)(O,{todos:c,count:s,completeTodo:function(e){e.complete||b(s-1),e.complete&&b(s+1);var t=c.map((function(t){return t===e?Object(a.a)(Object(a.a)({},t),{},{complete:!t.complete}):t}));l(t)},deleteTodo:function(e){!1===e.complete&&b(s-1);var t=Object(i.a)(c);t.map((function(c,o){return c===e&&t.splice(o,1),c})),l(t)},clearCompleted:function(){var e=c.filter((function(e){return!1===e.complete}));l(e)}})]})},x=s.a.Sider,v=s.a.Content;r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsxs)(s.a,{className:"layout",children:[Object(o.jsx)(x,{className:"sider",children:"ECMAScript 6"}),Object(o.jsx)(v,{children:Object(o.jsx)(h,{})})]})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.40e6afa4.chunk.js.map