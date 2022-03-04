var isShowed = 0;
$('#find').click(function() {
    if (isShowed) {
        isShowed = 0;
        var element = document.getElementById("posts");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    var suggestion = $('#suggestion').val();
    $.ajax({
        url: 'get_posts.php',
        type: 'POST',
        cache: false,
        data: {
            'suggestion': suggestion,
        },
        dataType: 'html',
        success: function(data) {
            if (data === "1") {
                $('#errorBlock').show();
                $('#errorBlock').text("Введите что нибудь!");
                setTimeout(function() { $("#errorBlock").hide(); }, 3000);
            } else if (data === "2") {
                $('#errorBlock').show();
                $('#errorBlock').text("Введите минимум 3, но не более 30 символов!");
                setTimeout(function() { $("#errorBlock").hide(); }, 3000);
            } else if (data === "3") {
                $('#errorBlock').show();
                $('#errorBlock').text("Ничего не найдено!");
                setTimeout(function() { $("#errorBlock").hide(); }, 3000);
            }
            data = JSON.parse(data);

            var postsEl = document.getElementById("posts");
            postsEl.innerHTML = '<div hidden id="post" class="bg-light rounded col p-3 m-3"></div>';

            var parentElement = document.getElementById("post");
            //var theFirstChild = parentElement.firstChild;
            var postElement = document.createElement("div");
            postElement.className = "bg-light rounded col p-3 m-3";

            let i = 0
            var postNumber = 0;


            for (; i <= data.length;) {

                if (data.length < i + 1) {
                    break;
                }
                var postNumber = data[i].post_id;
                var postTitle = data[i].post_title;
                var commentEmail = data[i].email;
                var comment = data[i].comment;

                if (data.length - 1 == i) {
                    var html =
                        '<div id="post' + postNumber + '" class="bg-light rounded col p-3 m-3">' +
                        '<h4 class="text-center">Название поста: <p><u>' + postTitle + '</u></p></h4>' +
                        '<h5>Комментарии:</h5>' +
                        '<div> <ul> <li>' +
                        '<span"><em>' + commentEmail + '</em></span>' +
                        '<p class="lead">' + comment + '</p>' +
                        '</li></ul></div></div>';
                    postElement = document.createElement("div");
                    postElement.innerHTML = html;
                    parentElement.after(postElement);
                    console.log("ЯЗДЕСЬ!!!!");
                    break;
                } else if (data[i].post_id === data[i + 1].post_id) {

                    var html =
                        '<div id="post' + postNumber + '" class="bg-light rounded col p-3 m-3">' +
                        '<h4 class="text-center">Название поста: <p><u>' + postTitle + '</u></p></h4>' +
                        '<h5>Комментарии:</h5>';
                    html +=
                        '<div> <ul> <li>' +
                        '<span"><em>' + data[i].email + '</em></span>' +
                        '<p class="lead">' + data[i].comment + '</p>' +
                        '</li> </ul> </div>';

                    let k = 1;
                    while (data[i].post_id === data[i + k].post_id) {
                        html +=
                            '<div> <ul> <li>' +
                            '<span"><em>' + data[i + k].email + '</em></span>' +
                            '<p class="lead">' + data[i + k].comment + '</p>' +
                            '</li> </ul> </div>';
                        k++;
                        if (i + k >= data.length) {
                            break;
                        }
                    }
                    html += '</div>';
                    i += k;
                    if (i + 1 >= data.length) {
                        i = data.length;
                    }
                    postElement = document.createElement("div");
                    postElement.innerHTML = html;
                    parentElement.after(postElement);

                } else {
                    var html =
                        '<div id="post' + postNumber + '" class="bg-light rounded col p-3 m-3">' +
                        '<h4 class="text-center">Название поста: <p><u>' + postTitle + '</u></p></h4>' +
                        '<h5>Комментарии:</h5>' +
                        '<div> <ul> <li>' +
                        '<span"><em>' + commentEmail + '</em></span>' +
                        '<p class="lead">' + comment + '</p>' +
                        '</li></ul></div></div>';
                    i++;
                    postElement = document.createElement("div");
                    postElement.innerHTML = html;
                    parentElement.after(postElement);
                }

            }
            isShowed = 1;
        }
    });
});
/*
let array = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [3, 3],
    [3, 4],
    [4, 7],
    [4, 8]
];


for (let num = 0; num <= array.length;) {
    if (array.length - 1 === num) {
        console.log("пост", array[num][0]);
        console.log("   ком", array[num][1])
        break;
    } else if (array[num][0] === array[num + 1][0]) {
        console.log("пост", array[num][0]);
        console.log("   ком", array[num][1]);
        let i = 1;
        while (array[num][0] === array[num + i][0]) {
            console.log("   ком", array[num + i][1])
            i++;
            if (num + i >= array.length) {
                break;
            }
        }
        num += i;
        if (num + 1 >= array.length) {
            num = array.length - 1;
        }
    } else {
        console.log("пост", array[num][0]);
        console.log("   ком", array[num][1])
        num++;
    }
}
*/