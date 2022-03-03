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
    <div class="container text-center mt-5" style="width: 500px;">
        <h1>Поиск комментарий</h1>
        <br>
        <form action="#" method="post" class="d-flex">
            <input type="text" id="suggestion" class="form-control form-control-lg" placeholder="Поиск">
            <input type="button" id="find" value="Найти" class="btn btn-success btn-lg mblank-2  ms-2">
        </form>
        <div hidden class="alert alert-danger my-3">Комментария с (словом) не существует</div>
    </div>

    <?php

    ?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="find_comment.js"></script>
</body>

</html>