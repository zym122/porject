(function(){
    let dlqh = document.getElementById('dlqh');
    let rgbox1 = document.getElementById('rgbox1');
    let rgbox2 = document.getElementById('rgbox2');
    let imgqh1 = document.getElementById('imgqh1');
    let imgqh2 = document.getElementById('imgqh2');
    let yz1 = document.querySelector('.yz1');
    let yz2 = document.querySelector('.yz2');
    let btdl = document.querySelector('.btdl');

    dlqh.onclick = function(){
        rgbox1.style.display = 'none';
        rgbox2.style.display = 'block';
    }
    imgqh1.onclick = function (){
        rgbox1.style.display = 'none';
        rgbox2.style.display = 'block';
    }
    imgqh2.onclick = function (){
        rgbox1.style.display = 'block';
        rgbox2.style.display = 'none';
    }

    btdl.onclick = () =>{
        let name = yz1.value.trim();
            let password = yz2.value.trim();
            let usn = getcookie('username');
            if (usn) {
                //登陆
                alert('你已经登陆了');
            } else {
                //未登录
                ajax({
                    type: 'post',
                    // url: 'api/03login.php',
                    url: '../api/zhuce1.php',
                    data: {
                        name,
                        password,
                        type: 'login'
                    },
                    success: str => {
                        console.log(str);
                        //存cookie
                        if (str == 'no') {
                            alert('登陆成功');
                            setdata();
                            let url = getcookie('url');
                            if (url) {
                                //查找，证明是有上一页，登陆成功一律回到上一页
                                location.href = url;
                            } else {
                                //注册页、首页、登陆页跳到登陆页的，登陆成功一律回到首页
                                location.href = '../shouye.html';
                            }
                        }else{
                            alert('用户名或密码错误');
                        }
                    }
                });
            }
    }
    function setdata() {
        setcookie('username', yz1.value.trim(), 10);
    }

})();