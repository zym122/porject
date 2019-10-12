function zczz(){

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let inp3 = document.querySelector('.inp3');
    let zzsp1 = document.querySelector('.zzsp1');
    let zzsp2 = document.querySelector('.zzsp2');
    let zzsp3 = document.querySelector('.zzsp3');
    let pp2 = document.querySelector('.pp2');
    let btn3 = document.querySelector('.btn3');


    var istrue1 = false;
    
    var checkReg = {
        trim: function (str) { //去掉前后空格
            var reg = /^\s+|\s+$/g;
            return str.replace(reg, '');
        },
        tel: function (str) { //号码
            var reg = /^1[3-9]\d{9}$/;
            return reg.test(str);
        },
        email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
            var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
            return reg.test(str);
        },
        idcard: function (str) { //身份证
            var reg = /^(\d{17}|\d{14})[\dX]$/;
            return reg.test(str);
        },
        psweasy: function (str) { //6-18位首字母开头
            var reg = /^[a-zA-Z]\w{5,17}$/;
            return reg.test(str);
        },
        pwwagain: function (str1, str2) { //确认密码
            return str1 === str2; //全等 恒等
        },
        urladr: function (str) { //路径：网址规则
            var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
            return reg.test(str);
        },
        name: function (str) { //账号字母开头,6-12位
            var reg = /^[a-zA-Z][\w\-]{5,11}$/;
            return reg.test(str);
        },
        chinese: function (str) { //中文
            var reg = /^[\u2E80-\u9FFF]+$/;
            return reg.test(str);
        },
        birthday: function (str) { //生日
            var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
            return reg.test(str);
        }
    }

    function checkInput(opt) {
        opt.ele.onblur = function () {
            var val = this.value.trim();
            // var reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;
            if (val) {
                //非空验证->正则->正确性(和数据库数据验证)
                // var isok = reg.test(val);
                var str = `checkReg.${opt.type}(val)`;//eval() 把字符串转成js代码
                var isok = eval(str);
                if (isok) {
                    //正则验证通过
                    opt.inf.innerHTML = opt.checkYes;
                    opt.inf.style.color = '#58bc58';
                    istrue1 = true;
                } else {
                    opt.inf.innerHTML = opt.checkNo;
                    opt.inf.style.color = 'red';
                    istrue1 = false;
                    opt.ele.focus();//获取焦点，写错就别想走啦
                }
            } else {
                opt.inf.innerHTML = opt.noval;
                opt.inf.style.color = 'red';
            }
            console.log(istrue1);
        }
    }
    
    
    
    checkInput({
        ele: inp2,
        inf: zzsp2,
        type: 'psweasy',
        noval: '请输入密码',
        checkYes: '密码通过',
        checkNo: '请用正确格式输入密码，这都没通过你还想跑？'
    });
    inp3.onblur = function(){
        if(inp3.value == inp2.value){
            zzsp3.innerHTML = '密码通过';
            zzsp3.style.color = 'green';
            istrue1 = true;
        }
        else{
            zzsp3.innerHTML = '密码与之前的不一样';
            zzsp3.style.color = 'red';
            istrue1 = false;
        }
    }
    let ist = false;

    inp1.onblur = () =>{
        ajax({
            type: 'post',
            url: '../api/zhuce1.php',
            data: {
                name: inp1.value.trim(),
                type: 'checkname'
            },
            success: str => {
                console.log(str);
                if (str == 'yes') {
                    zzsp1.innerHTML = '可以注册';
                    zzsp1.style.color = '#58bc58';
                    ist = true;
                } else {
                    zzsp1.innerHTML = '不可以注册';
                    zzsp1.style.color = 'red';
                    ist = false;
                }
            }
        })
    }

    pp2.onclick = () => {
        if (istrue1 && btn3.checked == true && ist) {
            ajax({
                type: 'post',
                url: '../api/zhuce2.php',
                data: {
                    name: inp1.value.trim(),
                    password: inp2.value.trim(),
                    type: 'reg'
                },
                success: str => {
                    console.log(str);
                    if (str == 'yes') {
                        alert('注册成功');
                        location.href = '../html/denglu.html' + inp1.value.trim();
                    } else {
                        alert('注册失败');
                    }
                }
            });
            location.href = '../html/denglu.html';
            inp1.value = '';
            inp2.value = '';
            zzsp1.innerHTML = '';
            zzsp2.innerHTML = '';
            btn3.checked = false;
        }else if(istrue1 == true){
            alert('请同意协议');
        }else if(istrue1 == false || btn3.checked == true) {
            alert('请验证信息是否填充完整');
        }
    }
}
