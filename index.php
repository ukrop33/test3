<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Тестовое задание</title>
</head>

<body>
    <?php
    function debug($debug)
    {
        var_dump($debug);
    }


    function decodeJsonFromUrl(string $url)
    {
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

    $arr = [
        "posts" => "https://jsonplaceholder.typicode.com/posts",
        "comments" => "https://jsonplaceholder.typicode.com/comments"
    ];

    $posts = decodeJsonFromUrl($arr["posts"]);
    #$comments = decodeJsonFromUrl($arr["comments"]);
    print_r($posts);
    # Подключение к базе данных
    require_once("mysql_connect");
    foreach ($posts as $post) {
        $userId = $post->userId;
        $title = $post->title;
        $body = $post->body;
    }





    ?>







    <!--
    <div class="container text-center">
        <h2>Поиск</h2>
        <form action="#" method="post" class="form-control-sm row g-3">
            <div class="col-3">
            </div>
            <div class="col-5">
                <input class="form-control form-control-lg" type="text" placeholder="Поиск">
            </div>
            <div class="col-1">
                <input type="button" value="Найти" class="btn btn-success mt-1">
            </div>
        </form>
    </div>
    -->
</body>

</html>