"use strict";!function(){var c=document.querySelector("#celan .celanul1 p"),t=document.querySelector(".cl2");ajax({type:"get",url:"../api/car3.php",success:function(e){console.log(e),function(e){var n=JSON.parse(e);getcookie("username")?(c.innerHTML=n.total,t.innerHTML=n.total):(c.innerHTML=0,t.innerHTML=0)}(e)}})}();