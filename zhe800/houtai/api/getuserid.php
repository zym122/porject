<?php
include 'conm.php';

$userid = isset($_REQUEST['userid']) ? $_REQUEST['userid'] : '';
$sql = "delete from userlist where uid = $userid";

$res = $conn->query($sql); //发送执行的语句

var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($arr);
