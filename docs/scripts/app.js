!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var o=function(){const t={setDate:function(){copyright_date.innerHTML="Ramce Concepcion &copy; "+(new Date).getFullYear()},openURL:function(t){window.open(t,"_blank").focus()},setEvents:function(){sfb.onclick=function(){t.openURL("https://www.facebook.com/ramceconcepcion")},sig.onclick=function(){t.openURL("https://www.instagram.com/rangelojc/")},sgl.onclick=function(){t.openURL("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ramuzuconcepcion@gmail.com")},sgh.onclick=function(){t.openURL("https://github.com/rangelojc")},sli.onclick=function(){t.openURL("https://linkedin.com/in/ramceconcepcion")}},init:function(){t.setEvents(),t.setDate()}};return t}();const c={Main:function(){const t={applyParallax:function(){void 0!==window.scrollY&&null!==window.scrollY&&window.addEventListener("scroll",function(){const t=coverdiv.getBoundingClientRect().width;cover.style.transform=t<900?"translateY(0)":"translateY("+(window.scrollY-1.2*window.scrollY)+"px)"})},download:function(t){window.location.href=t},open:function(t){window.open(t,"_blank").focus()},setEvents:function(){resume_button.onclick=function(){t.attemptGet("files/resume.pdf")}},attemptGet:function(e){const n=prompt("File restricted. You can ask me for the password. Please enter password: "),o=["enca","encb","encc"],c=document.querySelector("["+o[0]+"]"),r=document.querySelector("["+o[1]+"]"),i=document.querySelector("["+o[2]+"]"),u=c.getAttribute(o[0]).replace(/_/g,"")+r.getAttribute(o[1]).replace(/_/g,"")+i.getAttribute(o[2]).replace(/_/g,"");n&&(n==u?t.open(e):n!=u&&alert("You are not allowed to view this file, at least not directly. You can try deciphering the password by looking at this site's unobfuscated source code, it's absurdly simple and improvised."))},lazyLoad:function(){const t=document.querySelectorAll("img[data-src]");[].forEach.call(t,function(t){t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){this.removeAttribute("data-src")}})},animate:function(){var t=function(){new Typed(".hero-text.sub",{strings:["WEB DEVELOPER^500","SOFTWARE ENGINEER^500","GAMER^500","PC HARDWARE HOBBYIST^500","ASPIRING CAR HOBBYIST^500","FOOD LOVER^500","TRAVEL BUDDY^500","LOVES CRAB STICKS^500","LOVES POTATO SALAD EVEN MORE^500"],typeSpeed:50,loop:!0,loopCount:100,showCursor:!1})};new Typed(".hero-text.main",{strings:["RAMCE CONCEPCION"],typeSpeed:50,onComplete:t,showCursor:!1})},init:function(){t.setEvents(),t.lazyLoad(),t.animate()}};return t}(),Footer:o};window.onload=function(){c.Footer.init(),c.Main.init()}}]);
//# sourceMappingURL=app.js.map