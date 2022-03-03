<?php
if (isset($_POST['suggestion'])) {
    $suggestion = trim($_POST['suggestion']);
    if (!(strlen($suggestion) <= 3)) {
        require_once 'mysql_connect.php';
        $suggestion = "%" . $suggestion . "%";
        $sql = "SELECT `post_id` FROM `comments` WHERE `body` LIKE ?";
        $query = $pdo->prepare($sql);
        $query->execute([$suggestion]);
        $result = $query->fetchAll(PDO::FETCH_OBJ);

        if (count($result) !== 0) {
            echo json_encode($result);
            //echo json_encode($result);
        } else {
            echo "Ничего не найдено!";
        }
        #var_dump($result);
    } else {
        echo "Введите минимум 3 или более символов";
    }
} else {
    echo "Введите что нибудь";
}
