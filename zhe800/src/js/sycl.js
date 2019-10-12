function sycl(){
    var pp1 = document.querySelector('.cpp1');
    var cl2 = document.querySelector('.cl2');

    ajax({
        type : 'get',
        url : '../api/car3.php',
        success : str =>{
            console.log(str);
            creat(str);
        }
    });
    function creat (str){

        var arr = JSON.parse(str);

        let data = getcookie('username');
        if (data) {
            pp1.innerHTML = arr.total;
            cl2.innerHTML = arr.total;
        }else{
            pp1.innerHTML = 0;
            cl2.innerHTML = 0;
        }
    }
}