!function(n){var t={};function o(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)o.d(e,c,function(t){return n[t]}.bind(null,c));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=1)}([function(n,t,o){},function(n,t,o){"use strict";o.r(t);o(0);var e=function(){const n={setDate:function(){copyright_date.innerHTML="Ramce Concepcion &copy; "+(new Date).getFullYear()},openURL:function(n){window.open(n,"_blank").focus()},setEvents:function(){sfb.onclick=function(){n.openURL("https://www.facebook.com/ramceconcepcion")},sig.onclick=function(){n.openURL("https://www.instagram.com/rangelojc/")},sgl.onclick=function(){n.openURL("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ramceconcepcion@gmail.com")},sgh.onclick=function(){n.openURL("https://github.com/rangelojc")},sli.onclick=function(){n.openURL("https://linkedin.com/in/ramceconcepcion")}},init:function(){n.setEvents(),n.setDate()}};return n}();const c={Main:function(){const n={applyParallax:function(){void 0!==window.scrollY&&null!==window.scrollY&&window.addEventListener("scroll",function(){const n=coverdiv.getBoundingClientRect().width;cover.style.transform=n<900?"translateY(0)":"translateY("+(window.scrollY-1.2*window.scrollY)+"px)"})},download:function(n){window.location.href=n},open:function(n){window.open(n,"_blank").focus()},setEvents:function(){resume_button.onclick=function(){n.open("files/resume.pdf")}},lazyLoad:function(){const n=document.querySelectorAll("img[data-src]");[].forEach.call(n,function(n){n.setAttribute("src",n.getAttribute("data-src")),n.onload=function(){this.removeAttribute("data-src")}})},animate:function(){new Typed(".hero-text.sub",{strings:["A WEB DEVELOPER^500","A SOFTWARE DEVELOPER^500","A CODE AUTHOR^500","A COFFEE DRINKER^500","A TEA SIPPER^500","A VIDEO GAME ENJOYER^500","A PART-TIME SIM RACER^500","A PART-TIME VIRTUAL TRUCKER^500"],typeSpeed:50,loop:!0,loopCount:100,showCursor:!1})},init:function(){n.setEvents(),n.lazyLoad(),n.animate()}};return n}(),Footer:e};window.onload=function(){c.Footer.init(),c.Main.init()}}]);
//# sourceMappingURL=app.js.map