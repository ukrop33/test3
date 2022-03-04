$('#errorBlock').hide();
$('#find').click(function() {
    var suggestion = $('#suggestion').val();
    //$('#errorBlock').hide();
    /*
        var d = $("#posts .bg-light.rounded.col.p-3.m-3").toArray().map(el => el.id);
        console.log(d);

        for (let num = 0; num < d.length; num++) {
            const post_id = d[num];

            
        }
    */
    //console.log('Привет');
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
                $('#errorBlock').hide();
                $('#errorBlock').show();
                $('#errorBlock').text("Введите что нибудь");
            } else if (data === "2") {
                $('#errorBlock').hide();
                $('#errorBlock').show();
                $('#errorBlock').text("Введите минимум 3 или более символов");
            } else if (data === "3") {
                $('#errorBlock').hide();
                $('#errorBlock').show();
                $('#errorBlock').text("Ничего не найдено!");
            }
            $('#errorBlock').hide();
            data = JSON.parse(data);

            var parentElement = document.getElementById("post");
            var theFirstChild = parentElement.firstChild;
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
                    postElement = document.createElement("div")
                    postElement.innerHTML = html;
                    parentElement.after(postElement, theFirstChild);
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
                        //console.log(i + k);
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
                    postElement = document.createElement("div")
                    postElement.innerHTML = html;
                    parentElement.after(postElement, theFirstChild);

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
                    postElement = document.createElement("div")
                    postElement.innerHTML = html;
                    parentElement.after(postElement, theFirstChild);
                }

            }
        }

    });
    /*
    var element = document.getElementById("posts");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    */
});

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