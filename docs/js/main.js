!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("search-trigger"),t=document.getElementById("search-container");e&&(e.addEventListener("click",(function(e){var n,r;e.preventDefault(),(n=t).style.opacity=0,n.style.display=r||"block",function e(){var t=parseFloat(n.style.opacity);(t+=.05)>1||(n.style.opacity=t,requestAnimationFrame(e))}(),document.body.classList.add("disable-scroll")})),document.getElementById("search-close").addEventListener("click",(function(){var e;(e=t).style.opacity=1,function t(){(e.style.opacity-=.05)<0?e.style.display="none":requestAnimationFrame(t)}(),document.body.classList.remove("disable-scroll")})));var n=document.getElementById("menu-trigger"),r=function(e){e.classList.remove("primary-menu--slide"),document.body.classList.remove("disable-scroll"),setTimeout((function(){e.classList.remove("primary-menu--show")}),500)};if(n){var o=document.getElementById("primary-menu");n.addEventListener("click",(function(e){e.preventDefault(),o.classList.add("primary-menu--show","primary-menu--slide"),document.body.classList.add("disable-scroll"),document.getElementById("primary-menu-close").addEventListener("click",(function(){r(o)}))})),document.getElementById("primary-menu-close-wrapper").addEventListener("click",(function(){r(o)}))}var i=document.querySelectorAll(".primary-menu__item--has-children"),c=document.querySelectorAll(".primary-menu__sub-menu");i.forEach((function(e,t){e.addEventListener("click",(function(){e.classList.toggle("open"),c[t].classList.toggle("primary-menu__sub-menu--open")}))}))}))}]);