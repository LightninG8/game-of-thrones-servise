(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/error.a2204243.png"},43:function(e,t,n){e.exports=n(71)},53:function(e,t,n){},55:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),l=n.n(c),i=n(5),s=n(8),o=n(7),u=n(9),m=n(74),f=n(72),d=n(73),h=n(22),p=n(23),E=n(14);function g(){var e=Object(h.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return g=function(){return e},e}function b(){var e=Object(h.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return b=function(){return e},e}function v(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return v=function(){return e},e}var j=p.a.div(v()),O=p.a.h3(b()),w=p.a.ul(g()),S=function(){return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(E.b,{to:"/"},"Game of Thrones DB")),r.a.createElement(w,null,r.a.createElement("li",null,r.a.createElement(E.b,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/books/"},"Books"))))},I=n(29),k=n(21);n(53),n(55);var x=function(){return r.a.createElement("div",{className:"loadingio-spinner-spinner-b8xi0vus27l"},r.a.createElement("div",{className:"ldio-4vzzktt10mi"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},y=n(4),C=n.n(y),N=n(15),R=function e(){var t=this;Object(i.a)(this,e),this.getResource=function(){var e=Object(N.a)(C.a.mark(function e(n){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not get ".concat(n," with status ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(N.a)(C.a.mark(function e(){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=5&pageSize=8");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformCharacter));case 4:case"end":return e.stop()}},e,this)})),this.getCharacter=function(){var e=Object(N.a)(C.a.mark(function e(n){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(N.a)(C.a.mark(function e(){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books?&pageSize=8");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformBook));case 4:case"end":return e.stop()}},e,this)})),this.getBook=function(){var e=Object(N.a)(C.a.mark(function e(n){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformBook(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(N.a)(C.a.mark(function e(){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses?&pageSize=8");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformHouse));case 4:case"end":return e.stop()}},e,this)})),this.getHouse=function(){var e=Object(N.a)(C.a.mark(function e(n){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformHouse(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.isSet=function(e){return e||"N/A"},this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformCharacter=function(e){return{id:t._extractId(e),name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture)}},this._transformHouse=function(e){return{id:t._extractId(e),name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),overlord:t.isSet(e.overlord),ancestralWeapons:t.isSet(e.ancestralWeapons)}},this._transformBook=function(e){return{id:t._extractId(e),name:t.isSet(e.name),numberOfPages:t.isSet(e.region),publiser:t.isSet(e.publiser),released:t.isSet(e.released)}},this._apiBase="https://www.anapioficeandfire.com/api"},D=(n(59),n(37)),_=n.n(D);var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:_.a,alt:"error",className:"img error-img"}),r.a.createElement("span",null,"Something goes wrong..."))};function B(e){var t=e.character,n=t.name,a=t.gender,c=t.born,l=t.died,i=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,i))))}var L=function(e){var t,n=Object(a.useState)({character:{},isLoading:!0,isError:!1}),c=Object(k.a)(n,2),l=c[0],i=c[1];Object(a.useEffect)(function(){return m(),t=setInterval(m,5e3),function(){clearInterval(t)}},[]);var s=new R,o=function(e){i(function(t){return Object(I.a)({},t,{character:e,isLoading:!1})})},u=function(){i(function(e){return Object(I.a)({},e,{isError:!0,isLoading:!1})})},m=function(){var e=Math.round(1e3*Math.random());s.getCharacter(e).then(o).catch(u)},f=l.character,d=l.isLoading,h=l.isError,p=h?r.a.createElement(A,null):null,E=d?r.a.createElement(x,null):null,g=d||h?null:r.a.createElement(B,{character:f});return r.a.createElement("div",{className:"random-block rounded"},p,E,g)},z=n(12);n(61);var H=function(e){var t=e.getData,n=e.onItemSelected,c=e.itemId,l=e.renderItem,i=Object(a.useState)([]),s=Object(k.a)(i,2),o=s[0],u=s[1];if(Object(a.useEffect)(function(){t().then(function(e){u(e)})},[]),!o)return r.a.createElement("ul",{className:"item-list list-group"},r.a.createElement(x,null));var m=o.map(function(e,t){var a=e.id,i=l(e),s="list-group-item";return s+=a===c?" active-char-item":"",r.a.createElement("li",{key:t,className:s,onClick:function(){n(a)}},i)});return r.a.createElement("ul",{className:"item-list list-group"},m)},T=(n(63),function(e){var t=e.item,n=e.field,a=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},a),r.a.createElement("span",null,t[n]))}),W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,isLoading:!1,isError:!1},n.gotService=new R,n.componentDidMount=function(){n.updateItem()},n.componentDidUpdate=function(e){n.props.itemId!==e.itemId&&n.updateItem()},n.onItemDetailsLoaded=function(e){n.setState({item:e,isLoading:!1})},n.onError=function(){n.setState({item:null,isError:!0})},n}return Object(u.a)(t,e),Object(z.a)(t,[{key:"updateItem",value:function(){var e=this,t=this.props,n=t.itemId,a=t.getData;n&&(this.setState({isLoading:!0}),a(n).then(this.onItemDetailsLoaded).catch(function(){return e.onError()}))}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.isError,a=e.isLoading;if(!t&&n)return r.a.createElement(A,null);if(!t&&!a)return r.a.createElement("span",{className:"select-error"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442");if(a)return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement(x,null));var c=t.name;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,c),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{item:t})})))}}]),t}(a.Component),F=function(e){var t=e.left,n=e.right;return r.a.createElement(f.a,null,r.a.createElement(d.a,{md:"6"},t),r.a.createElement(d.a,{md:"6"},n))},G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:null},n.gotService=new R,n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(u.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.state.selectedItem,t=r.a.createElement(H,{onItemSelected:this.onItemSelected,itemId:e,getData:this.gotService.getAllCharacters,renderItem:function(e){return"".concat(e.name)}}),n=r.a.createElement(W,{itemId:e,getData:this.gotService.getCharacter},r.a.createElement(T,{field:"gender",label:"Gender"}),r.a.createElement(T,{field:"born",label:"Born"}),r.a.createElement(T,{field:"died",label:"Died"}),r.a.createElement(T,{field:"culture",label:"Culture"}));return r.a.createElement(F,{left:t,right:n})}}]),t}(r.a.Component),M=n(1),P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:null},n.gotService=new R,n}return Object(u.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectedItem;return r.a.createElement(H,{onItemSelected:function(t){e.props.history.push(t)},itemId:t,getData:this.gotService.getAllBooks,renderItem:function(e){return"".concat(e.name)}})}}]),t}(r.a.Component),J=Object(M.f)(P),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:null},n.gotService=new R,n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(u.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.state.selectedItem,t=r.a.createElement(H,{onItemSelected:this.onItemSelected,itemId:e,getData:this.gotService.getAllHouses,renderItem:function(e){return"".concat(e.name)}}),n=r.a.createElement(W,{itemId:e,getData:this.gotService.getHouse},r.a.createElement(T,{field:"region",label:"Region"}),r.a.createElement(T,{field:"words",label:"Words"}),r.a.createElement(T,{field:"titles",label:"Titles"}),r.a.createElement(T,{field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(F,{left:t,right:n})}}]),t}(r.a.Component),$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).gotService=new R,n}return Object(u.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props.bookId;return r.a.createElement(W,{itemId:e,getData:this.gotService.getBook},r.a.createElement(T,{field:"numberOfPages",label:"Number of pages"}),r.a.createElement(T,{field:"publiser",label:"Publisher"}),r.a.createElement(T,{field:"released",label:"Released"}))}}]),t}(r.a.Component),q=(n(65),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={isRandomCharEnable:!0,isError:!1},n.onRandomCharToggle=function(){n.setState(function(e){return{isRandomCharEnable:!e.isRandomCharEnable}})},n.render=function(){var e=n.state,t=e.isRandomCharEnable;if(e.isError)return r.a.createElement(A,null);var a=t?r.a.createElement(L,null):null;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(m.a,null,r.a.createElement(S,null)),r.a.createElement(m.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,{lg:{size:5,offset:0}},a,r.a.createElement("button",{className:"random-char-toggle",onClick:n.onRandomCharToggle},"Toggle Random character"))),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,render:function(){return r.a.createElement("h1",{className:"color-white"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430")}}),r.a.createElement(M.a,{path:"/characters/",component:G}),r.a.createElement(M.a,{path:"/books/",exact:!0,component:J}),r.a.createElement(M.a,{path:"/books/:id",exact:!0,render:function(e){var t=e.match.params.id;return r.a.createElement($,{bookId:t})}}),r.a.createElement(M.a,{path:"/houses/",component:U}),r.a.createElement(M.a,{path:"*",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"color-white"},"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435\u0442"),r.a.createElement(E.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"))}})))))},n}return Object(u.a)(t,e),t}(r.a.Component));n(67),n(69);l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.637cc85c.chunk.js.map