<?php
    include 'coon3.php';
    $gurl =  isset($_REQUEST['gurl']) ? $_REQUEST['gurl'] : '';
    $gname =  isset($_REQUEST['gname']) ? $_REQUEST['gname'] : '';
    $gprice =  isset($_REQUEST['gprice']) ? $_REQUEST['gprice'] : '';
    $gnum =  isset($_REQUEST['gnum']) ? $_REQUEST['gnum'] : '';
    $stock =  isset($_REQUEST['stock']) ? $_REQUEST['stock'] : '';


    $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';

    if($type == 'checkname' || $type == 'login') {
        if($type == 'checkname') {
            $sql = "SELECT * FROM cars WHERE gname='$gname'";
        }else{
            $sql = "SELECT * FROM cars WHERE gurl='$gurl' AND gname='$gname'AND price='$gprice' AND gnum='$gnum' AND stock='$stock'";
        }
        
        //执行语句
        $res = $conn->query($sql);
        // var_dump($res);
        if($res->num_rows) {
            echo 'no';
        }else{
            echo 'yes';
        }
    }

    if($type == 'reg') { 
        //注册功能
        $sql = "INSERT INTO cars(gurl,gname,price,gnum,stock) VALUES('$gurl','$gname','$gprice','$gnum','$stock')";
        //执行语句
        $res = $conn->query($sql);
        if($res) {
            //插入成功
            echo 'yes';
        }else{
            echo 'no';
        }
    }

?>