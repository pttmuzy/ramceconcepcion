!function(t){var n={};function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=1)}([function(t,n,o){},function(t,n,o){"use strict";o.r(n);o(0);var e=function(){const t={setDate:function(){copyright_date.innerHTML="Ramce Concepcion &copy; "+(new Date).getFullYear()},openURL:function(t){window.open(t,"_blank").focus()},setEvents:function(){sfb.onclick=function(){t.openURL("https://www.facebook.com/ramceconcepcion")},sig.onclick=function(){t.openURL("https://www.instagram.com/rangelojc/")},sgl.onclick=function(){t.openURL("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ramuzuconcepcion@gmail.com")},sgh.onclick=function(){t.openURL("https://github.com/rangelojc")},sli.onclick=function(){t.openURL("https://linkedin.com/in/ramceconcepcion")}},init:function(){t.setEvents(),t.setDate()}};return t}();const i=btoa("files/resume.pdf"),c=btoa("you got me");const r={Main:function(){const t={applyParallax:function(){void 0!==window.scrollY&&null!==window.scrollY&&window.addEventListener("scroll",function(){const t=coverdiv.getBoundingClientRect().width;cover.style.transform=t<900?"translateY(0)":"translateY("+(window.scrollY-1.2*window.scrollY)+"px)"})},download:function(t){window.location.href=t},open:function(t){window.open(t,"_blank").focus()},setEvents:function(){resume_button.onclick=function(){t.attemptGet(atob(i))}},attemptGet:function(n){const o=prompt("File restricted. You can ask me for the password. Please enter password: ");o===atob(c)?t.open(n):o!==atob(c)&&alert("You are not allowed to view this file.")},lazyLoad:function(){const t=document.querySelectorAll("img[data-src]");[].forEach.call(t,function(t){t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){this.removeAttribute("data-src")}})},animate:function(){var t=function(){new Typed(".hero-text.sub",{strings:["WEB DEVELOPER^500","SOFTWARE ENGINEER^500"],typeSpeed:50,loop:!0,loopCount:100,showCursor:!1})};new Typed(".hero-text.main",{strings:["RAMCE CONCEPCION"],typeSpeed:50,onComplete:t,showCursor:!1})},init:function(){t.setEvents(),t.lazyLoad(),t.animate()}};return t}(),Footer:e};window.onload=function(){r.Footer.init(),r.Main.init()}}]);
//# sourceMappingURL=app.js.map