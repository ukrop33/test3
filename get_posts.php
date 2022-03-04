<?php
if ($_POST['suggestion'] !== "") {
    $suggestion = trim($_POST['suggestion']);
    if (!(strlen($suggestion) <= 3) && !(strlen($suggestion) >= 30)) {
        require_once 'mysql_connect.php';
        $suggestion_like = "%" . $suggestion . "%";
        $sql = "SELECT c.post_id,
                    c.id AS \"comment_id\",
                    c.email,
                    p.title AS \"post_title\",
                    c.body AS \"comment\"
                    FROM comments c\n"
            . "JOIN posts p ON c.post_id = p.id\n"
            . "WHERE c.body LIKE ?"
            . "ORDER BY c.post_id DESC;";
        $query = $pdo->prepare($sql);
        $query->execute([$suggestion_like]);
        $result = $query->fetchAll(PDO::FETCH_OBJ);
        foreach ($result as $post) {
            $highlight = "<mark>" . $suggestion . "</mark>";
            $str = str_replace($suggestion, $highlight, $post->comment);
            $post->comment = $str;
        }

        if (count($result) !== 0) {
            echo json_encode($result, JSON_NUMERIC_CHECK);
        } else {
            echo "3"; // такой записи нет
            die();
        }
        #var_dump($result);
    } else {
        echo "2"; // диапазон от 3 до 30 символов
        die();
    }
} else {
    echo "1"; //ничего нет
    die();
}
