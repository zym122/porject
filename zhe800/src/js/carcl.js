(function(){
    var cl2 = document.querySelector('.cl2');

    ajax({
        type : 'get',
        url : '../api/car3.php',
        success : str =>{
            creat(str);
        }
    });
    function creat (str){

        var arr = JSON.parse(str);

        let data = getcookie('username');
        if (data) {
            cl2.innerHTML = arr.total;
        }else{
            cl2.innerHTML = 0;
        }
    }
})();