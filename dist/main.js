(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,".playField {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n.map {\n    margin : 0 auto;\n    background-color:aqua;\n    display: flex;\n    width: 500px;\n    height: 500px;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n}\n.square {  \n    width: 48px;\n    height:48px;;\n    border: 1px solid black;\n}\n.square.over {\n    border: 1px dotted red;\n    background-color: blue;\n}\n\n.shipDock {\n    border: 1px solid black;\n    margin: 0 auto;\n    display: flex;\n    width: 280px;\n    height: 280px;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n}\n.vertical {\n    transform: rotate(90deg);\n    \n}\n.ship {\n    display: flex;\n    background-color: grey;\n    cursor:move;\n}\n#s2 {\n    margin: 0 100px;\n\n}\n.ship:hover {\n    background-color: green;\n}\n.rotateButton {\n    width: 100px;\n    height: 50px;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=(()=>{let e;return{createShip:(t,n)=>{let r=t;return e={shipName:r,shipLength:n,hitPositions:[],shipPositions:[],sunk:!1,hit:function(e){return this.hitPositions.push(e),this.isSunk(),this.hitPositions},isSunk:function(){return this.shipLength===this.hitPositions.length?this.sunk=!0:this.sunk=!1,this.sunk}},m.allShip[r]=e,e}}})(),m=(()=>{let e={},t=[];return{createMap:function(){let e=document.createElement("div");e.classList.add("map"),document.querySelector(".playField").appendChild(e)},createBoard:function(){for(let e=1;e<=100;e++){let t=document.createElement("div");t.classList.add("square"),t.id=e,document.querySelector(".map").appendChild(t)}},placeShip:(e,t,n)=>{let r;if("horizontal"===t)for(r=0;r<n.shipLength;r++)n.shipPositions.push(e+r);else if("vertical"===t)for(r=0;r<n.shipLength;r++)n.shipPositions.push(e+10*r);return n.shipPositions},receiveAttack:n=>{let r=!1;for(const t in e)for(let i=0;i<e[t].shipPositions.length;i++)e[t].shipPositions[i]===n&&(r=!0,e[t].hit(n));return!1===r&&t.push(n),r},isAllShipSunked:()=>{let t=0,n=!1,r=Object.keys(e).length;for(const n in e)e[n].isSunk(),!0===e[n].sunk&&(t+=1);return t===r&&(n=!0),n},allShip:e,missedShots:t}})(),g=(()=>{function e(){document.querySelector(".shipDock").classList.toggle("vertical")}return{displayShipDock:()=>{v.createShip("carrier",5),v.createShip("battleShip",4),v.createShip("cruiser",3),v.createShip("submarine",3),v.createShip("destroyer",2);let t=document.createElement("div");t.classList.add("shipDock"),document.querySelector(".playField").appendChild(t);for(const e in m.allShip){let n=m.allShip[e].shipLength,r=document.createElement("div");r.classList.add("ship"),r.setAttribute("draggable",!0),r.classList.add(m.allShip[e].shipName),r.id="s"+n,t.appendChild(r);for(let e=1;e<=n;e++){let e=document.createElement("div");e.classList.add("square"),r.appendChild(e)}}(()=>{let t=document.createElement("button");t.classList.add("rotateButton"),t.innerHTML="Rotate Ships",document.querySelector(".playField").appendChild(t),t.addEventListener("click",e)})()}}})();let y=document.createElement("div");function b(e){this.style.backgroundColor="yellow"}function S(e){this.style.background="grey",w.forEach((function(e){e.classList.remove("over")}))}function x(e){return e.preventDefault(),!1}function L(e){this.classList.add("over"),console.log(this)}function k(e){this.classList.remove("over")}function E(e){return e.stopPropagation(),!1}y.classList.add("playField"),document.body.appendChild(y),g.displayShipDock(),m.createMap(),m.createBoard();let w=document.querySelectorAll(".ship");w.forEach((function(e){e.addEventListener("dragstart",b),e.addEventListener("dragend",S)})),document.querySelectorAll(".map .square").forEach((function(e){e.addEventListener("dragover",x),e.addEventListener("dragenter",L),e.addEventListener("dragleave",k),e.addEventListener("drop",E)}))})()})();