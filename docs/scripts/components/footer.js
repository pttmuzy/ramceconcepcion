const Footer=function(){const n={setDate:function(){copyright_date.innerHTML="Ramce Concepcion &copy; "+(new Date).getFullYear()},openURL:function(n){window.open(n,"_blank").focus()},setEvents:function(){sfb.onclick=function(){n.openURL("https://www.facebook.com/ramceconcepcion")},sig.onclick=function(){n.openURL("https://www.instagram.com/rangelojc/")},sgl.onclick=function(){n.openURL("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ramceconcepcion@gmail.com")},sgh.onclick=function(){n.openURL("https://github.com/rangelojc")},sli.onclick=function(){n.openURL("https://linkedin.com/in/ramceconcepcion")}},init:function(){n.setEvents(),n.setDate()}};return n}();export default Footer;