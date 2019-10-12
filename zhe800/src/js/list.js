(function(){
    let mbox = document.getElementById('m2box1');
    let ipage = 1;//获取第一页数据
    let num = 28;//每页显示15条


    function init(){
        $.ajax({
        type : 'get',
        url: '../api/list.php',
        data: {
            ipage,
            num
        },
        success: str => {
                creat(str);
            }
        });
        function creat (str){
            let arr = JSON.parse(str);
            // console.log(arr);
            let html = arr.list.map((item,index) =>{
                return `
                    <div class="m2box11">
                        <img src="${item.url}" alt="">
                        <p class="m2p1">${item.title}</p>
                        <p class="m2p2">
                            <span class="m2sp2">${item.price}</span>
                            <span class="m2sp3"></span>
                            <span class="m2sp4">586</span>
                        </p>
                        <span class="m2sp5">剩余7天</span>
                    </div>`;
            }).join('');
            mbox.innerHTML +=html;
            var m2box11 = document.getElementsByClassName('m2box11');
            for (var i = 0 ; i < m2box11.length ; i++){
                m2box11[i].index = i;
                m2box11[i].onclick = function () {
                    
                    var str = objToStr(arr.list[this.index]);
                    console.log(str);
                    window.open('goods.html?' + str);
                }
            }

            isok = true;
            let sum = Math.ceil(arr.total / num);
            if (sum > 1 && ipage != sum) {
            } else {
                window.onscroll = null;
            }
        }
    }
    init();
    
    
    

    let isok = true;
    window.onscroll = () => {
        let scrollTop = window.scrollY;
        let ih = mbox.offsetHeight - window.innerHeight + mbox.offsetTop;
        if (isok) {
            if (scrollTop >= ih) {
                isok = false;
                setTimeout(() => {
                    ipage++;
                    init();
                }, 30);
            }
        }
    }
})();