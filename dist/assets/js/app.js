!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.addEventListener("DOMContentLoaded",(function(){var e=n(4),t=n(5),r=n(6);e(),t(),r()}))},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1},i=(r(o,c),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:p(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var c=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function y(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function p(e,t){var n,r,o;if(t.singleton){var c=m++;n=v||(v=l(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else n=l(t),r=y.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}},function(e,t,n){},function(e,t){e.exports=function(){var e=document.querySelectorAll(".header__hamburger")[0],t=document.querySelectorAll(".header__hamburger")[1],n=document.querySelector(".overlay-sidebar"),r=document.querySelector(".sidebar");function o(){r.classList.toggle("change"),e.classList.toggle("change"),n.classList.remove("overlay-body"),document.body.classList.remove("scroll-body")}e.addEventListener("click",(function(){e.classList.toggle("change"),r.classList.toggle("change"),n.classList.add("overlay-body"),document.body.classList.add("scroll-body")})),t.addEventListener("click",(function(){o()})),r.addEventListener("click",(function(e){e.target.classList.contains("sidebar__link")&&o()})),n.addEventListener("click",(function(){o()}))}},function(e,t){e.exports=function(){var e=function(){document.querySelectorAll(".strategies__tags .tag").forEach((function(e){e.classList.remove("tag_selected"),e.classList.add("tag_bordered")}))},t=function(e){e.classList.add("tag_selected"),e.classList.remove("tag_bordered")},n=function(){document.querySelectorAll(".strategy-wrapper .strategy").forEach((function(e){e.classList.remove("strategy_hidden")}))},r=function(e){document.querySelectorAll(".strategy-wrapper .strategy").forEach((function(t){t.classList.add("strategy_hidden"),t.querySelectorAll(".tag").forEach((function(n){n.innerText===e&&t.classList.remove("strategy_hidden")}))}))};document.querySelector(".strategies__tags").addEventListener("click",(function(o){if(o.target.classList.contains("tag")){var c=o.target;e(),t(c),"All"===c.innerText?n():r(c.innerText)}}))}},function(e,t){e.exports=function(){var e=document.querySelector(".modal__date"),t=document.querySelector(".close-ico"),n=document.querySelector(".modal"),r=document.querySelector(".overlay-modal"),o=document.querySelectorAll(".button_open_modal"),c=new Date;function i(){n.style.display="none",r.classList.remove("overlay-body"),document.body.classList.remove("scroll-body")}e.innerHTML=c.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"}),o.forEach((function(e){e.addEventListener("click",(function(){n.style.display="block",r.classList.add("overlay-body"),document.body.classList.add("scroll-body")}))})),t.addEventListener("click",(function(){i()})),r.addEventListener("click",(function(){i()}))}}]);