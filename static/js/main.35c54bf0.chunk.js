(this.webpackJsonpRobo=this.webpackJsonpRobo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=(n(12),n(1)),l=n(2),s=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,o=e.id;return a.a.createElement("div",{className:"tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid white",height:"700px"}},e.children)},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null," Ooooops. This is not good"):this.props.children}}]),n}(o.Component),g=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"ROBOFRIENDS"),a.a.createElement(f,{searchChange:this.onSearchChange}),a.a.createElement(m,null,a.a.createElement(v,null,a.a.createElement(d,{robots:o})))):a.a.createElement("h1",null,"Loading")}}]),n}(o.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(14);c.a.render(a.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Robo",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Robo","/service-worker.js");b?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.35c54bf0.chunk.js.map