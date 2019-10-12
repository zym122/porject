(function(){
    let sp4 = document.querySelector('.sp4');
    let sp5 = document.querySelector('.sp5');
    let btn = document.getElementById('btn');

    let isok = true;

    btn.onclick = () =>{
        if(isok){
            sp4.style.display = 'block';
            sp5.style.display = 'block';
            btn.innerHTML = '更多△'

        }else{
            sp4.style.display = 'none';
            sp5.style.display = 'none';
            btn.innerHTML = '更多▽'
        }
        isok = !isok;
    }

    



})();