"use strict";function darg(e){var t={biw:250,bih:40};Object.assign(t,e);var n=document.getElementById(t.ele),f=document.getElementById(t.ele1),s=document.getElementById(t.ele2),o=document.getElementById(t.ele3);n.style.width=t.biw+"px",n.style.height=t.bih+"px",s.onmousedown=function(e){var o=e.offsetX;document.onmousemove=function(e){var t=e.pageX-o-n.offsetLeft;t<=0?t=0:t>n.offsetWidth-s.offsetWidth&&(t=n.offsetWidth-s.offsetWidth),s.style.left=t+"px",f.style.width=t+"px"}},document.onmouseup=function(){s.offsetLeft>=n.offsetWidth-s.offsetWidth?(document.onmousemove=null,s.onmousedown=null,o.style.color="green",o.innerHTML="验证通过"):(s.style.left="0px",f.style.width="0px",document.onmousemove=null)}}