"use strict";!function(){var e=document.getElementById("li2"),n=document.getElementById("ul2"),o=document.querySelector(".a1"),l=document.querySelector(".a2"),t=document.querySelector(".a3"),i=document.querySelector(".dlsp");function s(){getcookie("username")?(o.style.display="none",l.style.display="none",t.style.display="inline",i.innerHTML=getcookie("username"),i.style.display="inline"):(o.style.display="inline",l.style.display="inline",t.style.display="none",i.innerHTML="",i.style.display="none")}e.onmouseover=function(){n.style.display="flex",e.style.boxShadow="0 0 5px",e.style.zIndex="10"},e.onmouseleave=function(){n.style.display="none",e.style.boxShadow="0 0 0"},s(),t.onclick=function(){alert("退出成功"),window.location.reload(),removeCookie("username"),removeCookie("url"),console.log(getcookie("username")),s()}}();