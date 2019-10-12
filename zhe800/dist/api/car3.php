<?php
    include 'coon3.php';

    $goodsid = isset($_REQUEST['goodsid']) ? $_REQUEST['goodsid'] : '';
    $ssse = isset($_REQUEST['ssse']) ? $_REQUEST['ssse'] : '';


    $sql = 'SELECT * FROM cars';

    $sql2 = "DELETE FROM cars WHERE gid = $goodsid";

    $sql3 = "DELETE FROM $ssse";

    $res = $conn->query($sql);
    $res2 = $conn->query($sql);

    $res3 = $conn->query($sql2);

    $ssse= $conn->query($sql3);

    $arr = $res->fetch_all(MYSQLI_ASSOC);
    $data = array(
        'total' => $res2->num_rows,
        'list' => $arr,
    );
    
    echo json_encode($data);
    

    //5.关闭数据库
    // $res->close();
    // $conn->close();
?>