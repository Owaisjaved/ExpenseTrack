(this.webpackJsonpexpense=this.webpackJsonpexpense||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("h2",null,"Expense Tracker")}),o=(n(14),n(2)),i=n(7),m=n(3),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transaction:e.transaction.filter((function(e){return e.id!==t.payload}))});case"add_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transaction:[t.payload].concat(Object(i.a)(e.transaction))});default:return e}},E={transaction:[]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(s,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transaction:l.transaction,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"add_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(d).transaction.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))},b=function(){var e=Object(a.useContext)(d).transaction.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-$",n)))},v=function(e){var t=e.transactions,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x")))},x=function(){var e=Object(a.useContext)(d).transaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transactions:e})}))))},h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),i=u[0],m=u[1],s=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e7*Math.random()),text:n,amount:+i};s(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return m(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var O=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"conatiner"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f4bea098.chunk.js.map