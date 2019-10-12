<?php
    include 'coon2.php';
    
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
    $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';

    if($type == 'checkname' || $type == 'login') {
        if($type == 'checkname') {
            //验证用户名是否存在
            //sql语句
            $sql = "SELECT * FROM userlist WHERE username='$name'";
        }else{
            $sql = "SELECT * FROM userlist WHERE username='$name' AND psd='$password'";
        }
        
        //执行语句
        $res = $conn->query($sql);
        // var_dump($res);
        //判断是否可以通过验证
        if($res->num_rows) {
            //查找到，不能注册
            echo 'no';  
        }else{
            echo 'yes';
        }
    }

    if($type == 'reg') { 
        //注册功能
        $sql = "INSERT INTO userlist(username,psd) VALUES('$name','$password')";
        //执行语句
        $res = $conn->query($sql);
        if($res) {
            //插入成功
            echo 'yes';
        }else{
            echo 'no';
        }
    }


    /*
        select : 返回结果集
        insert、update、delete：返回布尔值
    */

    //关闭数据库
    // $res->close();
    // $conn->close();
?>