<?php
header("Content-Type:text/html;charset=utf-8"); //表头中文转码
$servername = 'localhost';
$username = 'root';
$password = 'zym122';
$dbname = 'user';

$conn = new mysqli($servername, $username, $password, $dbname); //连接数据库

// var_dump($conn);
if ($conn->connect_error) { //判断是否连接成功
    die("0" . $conn->connect_error);
} else {
    // echo '成功';
}
