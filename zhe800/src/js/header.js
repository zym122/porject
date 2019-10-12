(function(){
    let t1 = document.getElementById('li2');
    let t2 = document.getElementById('ul2');
    let a1 = document.querySelector('.a1');
    let a2 = document.querySelector('.a2');
    let a3 = document.querySelector('.a3');
    let dlsp = document.querySelector('.dlsp');

    t1.onmouseover = () =>{
        t2.style.display = 'flex';
        t1.style.boxShadow = '0 0 5px';
        t1.style.zIndex = '10';
    }
    t1.onmouseleave = () =>{
        t2.style.display = 'none';
        t1.style.boxShadow = '0 0 0'
    }
    function undate() {
        let data = getcookie('username');
        if (data) {
            //登陆的
            a1.style.display = 'none';
            a2.style.display = 'none';
            a3.style.display = 'inline';
            dlsp.innerHTML = getcookie('username');
            dlsp.style.display = 'inline';
        } else {
            a1.style.display = 'inline';
            a2.style.display = 'inline';
            a3.style.display = 'none';
            dlsp.innerHTML = '';
            dlsp.style.display = 'none';
        }
    }
    undate();
    
    a3.onclick = () =>{
            //退出
            alert('退出成功');
            window.location.reload();
            removeCookie('username');
            removeCookie('url');
            console.log(getcookie('username'));
            // welcome.innerHTML = '欢迎你访问我们的网站。<a href="###" class="quit">登陆</a>';
        undate();
    }
})();