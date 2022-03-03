<?php
if (isset($_POST['suggestion'])) {
    $suggestion = trim($_POST['suggestion']);
    if (!(strlen($suggestion) <= 3)) {
        require_once 'mysql_connect.php';
        $suggestion = "%" . $suggestion . "%";
        $sql = "SELECT c.post_id,
                c.id AS \"comment_id\",
                p.title AS \"post_title\",
                c.body AS \"comment\"
                FROM comments c\n"
            . "JOIN posts p ON c.post_id = p.id\n"
            . "WHERE c.body LIKE ?";
        $query = $pdo->prepare($sql);
        $query->execute([$suggestion]);
        $result = $query->fetchAll(PDO::FETCH_OBJ);

        if (count($result) !== 0) {
            echo json_encode($result, JSON_NUMERIC_CHECK);
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
