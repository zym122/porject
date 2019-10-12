(function(){
    var main1 = document.getElementById('main1');
    var data = decodeURI(location.search.slice(1));

    var goods = strToObj(data);
    var gurl = goods.url;
    var gname = goods.title;
    var gprice = goods.price;

    var html = `<p class="asdpp">特卖商城 > 鞋品 > 女鞋 > ${goods.title}</p>
    <ul class="thisgood">
        <li>
            <div class="wrap" id="wrap">
                <div class="biger">
                    <img src="${goods.url}" alt="">
                </div>
                <div class="imgs">
                    <div class="main">
                        <img src="${goods.url}" alt="">
                    </div>
                    <div class="bottom">
                        <div class="box">
                            <ul class="smaller">
                                <li><img src="${goods.url}" alt=""></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="m1box1">
        <p class="m1p1">${goods.title}</p>
        <div class="m1box11">
            <ul class="mb1ul1">
                <li class="mbli1">
                    <span>${goods.price}</span>
                    <span></span>
                    <span>￥599</span>
                    
                    <span>
                            <img src="../img/xiangqing.png" alt="">去客户端签到可领红包</span>
                </li>
                <li class="mbli2">
                        
                    <span>积分</span>
                    <span>Z0最多返69积分</span>
                    <span>积分可抵订单金额</span>
                </li>
                <li class="mbli3">
                    <span>优惠</span>
                    <span>优惠指定商品满300元减30元</span>
                    <span>></span>
                </li>
            </ul>
        </div>
        <div class="m1box22">
            <ul class="mb1ul2">
                <li class="mbli4">
                    <span>
                        <img src="../img/xiangqing1.png" alt="">
                    </span>
                    <span>河北霸州</span>
                    <span>至</span>
                    <span>广东广州</span>
                    <span>免运费</span>
                </li>
                <li class="mbli5">
                    <span>
                        <img src="../img/xiangqing2.png" alt="">
                    </span>
                    <span>折</span>
                    <span>本商品由折800买手砍价</span>
                </li>
                <li class="mbli6">
                    <span>
                        <img src="../img/xiangqing3.png" alt="">
                    </span>
                    <span>
                        <input class="cut fl" type="button" value="-">
                        <input class="news fl" type="text" value="1">
                        <input class="add fl" type="button" value="+">
                    </span>
                    <span>库存<span class="kucun">201</span>件</span>
                </li>
            </ul>
        </div>
        <ul class="mb1ul3">
            <li class="mbli7">立即购买</li>
            <li class="mbli8">加入购物车</li>
        </ul>
        <img src="../img/xiangqing4.png" alt="">
    </div>
    <img class="m1cmimg" src="../img/xiangqing5.png" alt="">
    <img class="m1xmimg" src="../img/xiangqing6.png" alt="">`;
    main1.innerHTML =html;

    magniglass({
        ele: 'wrap',//最外层盒子的id(必填)
        imglist: [gurl],//图片数据(必填)
        scal: 3,//大图放大倍数(选填，默认是2倍)
        speed: 1//小图运动的图片个数(选填，默认是一次动一张图)
    });

    var mbli8 = document.querySelector('.mbli8');
    var news = document.querySelector('.news');
    var cut = document.querySelector('.cut');
    var add = document.querySelector('.add');
    var kucun = document.querySelector('.kucun');
    var num1 = 1;

    stock = kucun.innerHTML;
    cut.onclick = () =>{
        num1--;
        if(num1 <=1 ){
            num1 = 1;
        }
        news.value = num1;
    }
    add.onclick = () =>{
        num1++;
        news.value = num1;
    }

    var gnum = news.value;
    // console.log(gnum);

    mbli8.onclick = () =>{
        let data = getcookie('username');
        if(data){
            ajax({
                type : 'post',
                url:'../api/car1.php',
                data:{
                    gurl,
                    gname,
                    gprice,
                    gnum,
                    type: 'checkname'
                },
                success: str => {
                    if (str == 'yes') {
                        ajax({
                            type : 'post',
                            url:'../api/car1.php',
                            data:{
                                gurl,
                                gname,
                                gprice,
                                gnum,
                                stock,
                                type: 'reg'
                            },
                            success :str =>{
                                if (str == 'yes') {
                                    alert('成功加入购物车');
                                    window.location.reload();
                                }
                            }
                        });
                    } else {
                        alert('购物车里已经有这件商品了');
                    }
                }
            })

        }else{
            alert('必须登录才能加入购物车哦');
        }
    }
})();