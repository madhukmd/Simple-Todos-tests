(this["webpackJsonpsimple-todos"]=this["webpackJsonpsimple-todos"]||[]).push([[0],{13:function(t,e,i){},15:function(t,e,i){},16:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var n=i(2),o=i.n(n),s=i(4),r=i.n(s),a=i(5),c=i(7),l=i(8),d=i(6),u=(i(13),i(0)),h=function(t){var e=t.TodoList,i=t.onDeleteItem,n=e.title,o=e.id;return Object(u.jsxs)("li",{className:"listItems",children:[Object(u.jsx)("p",{className:"paragraph",children:n}),Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){i(o)},children:"Delete"})]})},m=(i(15),[{id:1,title:"Book the ticket for today evening"},{id:2,title:"Rent the movie for tomorrow movie night"},{id:3,title:"Confirm the slot for the yoga session tomorrow morning"},{id:4,title:"Drop the parcel at Bloomingdale"},{id:5,title:"Order fruits on Big Basket"},{id:6,title:"Fix the production issue"},{id:7,title:"Confirm my slot for Saturday Night"},{id:8,title:"Get essentials for Sunday car wash"}]),j=function(t){Object(l.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(a.a)(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={TodosLists:m},t.onDeleteItem=function(e){var i=t.state.TodosLists.filter((function(t){return t.id!==e}));t.setState({TodosLists:i})},t}return Object(c.a)(i,[{key:"render",value:function(){var t=this,e=this.state.TodosLists;return Object(u.jsx)("div",{className:"bgContainer",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"heading",children:"Simple Todos"}),Object(u.jsx)("ul",{className:"listContainer",children:e.map((function(e){return Object(u.jsx)(h,{TodoList:e,onDeleteItem:t.onDeleteItem},e.id)}))})]})})}}]),i}(n.Component),f=j,b=(i(16),function(){return Object(u.jsx)(f,{})});r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.66c5f203.chunk.js.map