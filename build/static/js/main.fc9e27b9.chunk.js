(this["webpackJsonpreact-accountbook"]=this["webpackJsonpreact-accountbook"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),s=(n(12),n(3)),i=n(4),l=n(5),u=n(6),d=function(t){var e=t.transactions;return c.a.createElement("div",null,c.a.createElement("center",null,c.a.createElement("h1",null,"Transactions you did")),e&&e.map((function(t){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},t.id),c.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},t.amount),c.a.createElement("p",{className:"card-text ".concat("debit"==t.type?"text-danger":"text-success")},t.type)))})))},m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={transactions:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:8080/api/transactions").then((function(t){return t.json()})).then((function(e){t.setState({transactions:e})})).catch(console.log)}},{key:"render",value:function(){return c.a.createElement(d,{transactions:this.state.transactions})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fc9e27b9.chunk.js.map