function darg (opt){

    var defaultOpt = {

        biw : 250,
        bih : 40

    }
    Object.assign(defaultOpt, opt);

        var box = document.getElementById(defaultOpt.ele);
        var box1 = document.getElementById(defaultOpt.ele1);
        var box2 = document.getElementById(defaultOpt.ele2);
        var pp1 = document.getElementById(defaultOpt.ele3);
        
        box.style.width = defaultOpt.biw + 'px';
        box.style.height = defaultOpt.bih + 'px';

        function move (){
            box2.onmousedown = function (ev){
            var disX = ev.offsetX;
            document.onmousemove = function (ev) {
                var iLeft = ev.pageX - disX - box.offsetLeft;

                if(iLeft <= 0){
                    iLeft = 0;
                }else if(iLeft > box.offsetWidth - box2.offsetWidth){
                    iLeft = box.offsetWidth - box2.offsetWidth;
                }
                box2.style.left = iLeft + 'px';
                box1.style.width = iLeft + 'px';
            }
        }
        }
        move();
        document.onmouseup = function (){
            if(box2.offsetLeft >= box.offsetWidth - box2.offsetWidth){
                document.onmousemove = null;
                box2.onmousedown = null;
                pp1.style.color = 'green';
                pp1.innerHTML = '验证通过';

            }else{
                box2.style.left = 0 +'px';
                box1.style.width = 0 + 'px';
                document.onmousemove = null;
            }
        }
}