"use strict";!function(){var e=document.getElementById("m2box1"),l=1;function o(){$.ajax({type:"get",url:"../api/list.php",data:{ipage:l,num:28},success:function(n){!function(n){var s=JSON.parse(n),o=s.list.map(function(n,s){return'\n                    <div class="m2box11">\n                        <img src="'+n.url+'" alt="">\n                        <p class="m2p1">'+n.title+'</p>\n                        <p class="m2p2">\n                            <span class="m2sp2">'+n.price+'</span>\n                            <span class="m2sp3"></span>\n                            <span class="m2sp4">586</span>\n                        </p>\n                        <span class="m2sp5">剩余7天</span>\n                    </div>'}).join("");e.innerHTML+=o;for(var t=document.getElementsByClassName("m2box11"),a=0;a<t.length;a++)t[a].index=a,t[a].onclick=function(){var n=objToStr(s.list[this.index]);console.log(n),window.open("goods.html?"+n)};c=!0;var i=Math.ceil(s.total/28);1<i&&l!=i||(window.onscroll=null)}(n)}})}o();var c=!0;window.onscroll=function(){var n=window.scrollY,s=e.offsetHeight-window.innerHeight+e.offsetTop;c&&s<=n&&(c=!1,setTimeout(function(){l++,o()},30))}}();