<?php
function decodeJsonFromUrl(string $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
    if (curl_exec($ch)) {
        $result = curl_exec($ch);
        curl_close($ch);
        return json_decode($result);
    } else {
        exit("Неудалось подключится к URL-адресу: $url");
    }
}

$json = [
    "posts" => "https://jsonplaceholder.typicode.com/posts",
    "comments" => "https://jsonplaceholder.typicode.com/comments"
];


# Подключение к базе данных
try {
    require_once "mysql_connect.php";
    $posts = decodeJsonFromUrl($json["posts"]);
    foreach ($posts as $post) {
        $sql = "INSERT INTO `posts`(`user_id`, `title`, `body`) VALUES(?, ?, ?)";
        $query = $pdo->prepare($sql);
        $query->execute([$post->userId, $post->title, $post->body]);

        #$post_id = $query->lastInsertId();
    }

    $comments = decodeJsonFromUrl($json["comments"]);
    foreach ($comments as $comment) {
        $sql = "INSERT INTO `comments`(`post_id`, `name`, `email`, `body`) VALUES(?, ?, ?, ?)";
        $query = $pdo->prepare($sql);
        $query->execute([$comment->postId, $comment->name, $comment->email, $comment->body]);
    }
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}
$query = null;
