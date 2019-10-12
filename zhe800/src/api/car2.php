<?php
    include 'coon3.php';
    //注册功能
    
    $gurl =  isset($_REQUEST['gurl']) ? $_REQUEST['gurl'] : '';
    $gname =  isset($_REQUEST['gname']) ? $_REQUEST['gname'] : '';
    $gprice =  isset($_REQUEST['gprice']) ? $_REQUEST['gprice'] : '';
    $gnum =  isset($_REQUEST['gnum']) ? $_REQUEST['gnum'] : '';

    //sql语句
    $sql = "INSERT INTO cars(gurl,gname,gprice,gnum) VALUES('$gurl','$gname','$gprice','$gnum')";

    //执行语句
    $res = $conn->query($sql);

    // var_dump($res);
   
    if($res) {
        //插入成功
        echo 'yes';
    }else{
        echo 'no';
    }

    /*
        select : 返回结果集
        insert、update、delete：返回布尔值
    */

    //关闭数据库
    // $res->close();
    // $conn->close();
?>