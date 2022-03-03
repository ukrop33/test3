<?php
$user = 'root';
$password = '';
$db = 'blog';
$host = 'localhost:3307';

$dsn = 'mysql:host=' . $host . ';dbname=' . $db;
$pdo = new PDO($dsn, $user, $password);