<?php
include 'conm.php';

$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';


$sql = "insert into userlist (psd,username) values ('$password','$username')";
$res = $conn->query($sql);
var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($arr);
