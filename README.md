# Test 3

## Задание

- Создать схему БД для хранения записей и комментариев к ним. SQL-запросы для создания БД поместить в отдельный файл.

- Создать PHP скрипт, который скачает список записей и комментариев к ним и загрузит их в БД. По завершению загрузки, вывести в консоль надпись: "Загружено Х записей и Y комментариев"

- Создать HTML-форму поиска записей по тексту комментария (поле ввода и кнопка "Найти"). Пример: при вводе "laudanti" нужно вывести все записи, в комментариях к которым есть эта строка. Поиск должен работать при вводе минимум 3-х символов. В результатах поиска вывести заголовок записи и комментарий с искомой строкой.

## Запуск

- Экспортировать базу данных **blog.sql**;
- Настроить данные для подключения к БД в файле **mysql_connection.php**;
- Запустить скрипт **script.php**, через консоль.

## Версии программного обеспечения

- Open Server 5.4.1;
- PHP 8.0.14;
- MySQL 8.0.24.
