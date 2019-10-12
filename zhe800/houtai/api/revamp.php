<?php
include 'conm.php';

$pwds = isset($_REQUEST['pwds']) ? $_REQUEST['pwds'] : '';
$str = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';

$sql = "update userlist set `psd`='$pwds' where uid=$str";
$res = $conn->query($sql);
var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($arr);
