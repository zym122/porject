(function(){
    let m1box1 = document.querySelector('.m1box1');
    let m1box2 = document.querySelector('.m1box2');
    let a1 = document.querySelector('.a1');
    let a2 = document.querySelector('.a2');
    let a3 = document.querySelector('.a3');
    let dlsp = document.querySelector('.dlsp');


    function qiehuan() {
        let data = getcookie('username');
        if (data) {
            //登陆的
            m1box2.style.display = 'block';
            m1box1.style.display = 'none';
            a1.style.display = 'none';
            a2.style.display = 'none';
            a3.style.display = 'inline';
            dlsp.innerHTML = getcookie('username');
            dlsp.style.display = 'inline';

        } else {
            m1box1.style.display = 'block';
            m1box2.style.display = 'none';
            a1.style.display = 'inline';
            a2.style.display = 'inline';
            a3.style.display = 'none';
            dlsp.innerHTML = '';
            dlsp.style.display = 'none';
        }
    }
    qiehuan();

    a3.onclick = () =>{
        //退出
        alert('退出成功');
        removeCookie('username');
        removeCookie('url');
        console.log(getcookie('username'));
        // welcome.innerHTML = '欢迎你访问我们的网站。<a href="###" class="quit">登陆</a>';
        qiehuan();
}
})();