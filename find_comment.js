$('#find').click(function () {
    var suggestion = $('#suggestion').val();
    if (suggestion === "") {
        $('#errorBlock').show().innerHTML = "Введите";
    }
    //console.log('Привет');
    $.ajax({
        url: 'get_posts.php',
        type: 'POST',
        cache: false,
        data: {
            'suggestion': suggestion,
        },
        dataType: 'html',
        success: function (data) {
            console.log(data);
        }

    });
});

var my_el = newEl = null;
function addElement(data) {
    // Создаём новый элемент div
    // и добавляем в него немного контента
    var newEl = document.createElement("div");
    newEl.innerHTML = data;
    // Добавляем только что созданный элемент в дерево DOM
    my_el = document.getElementById("ChatBlockEnd");
    var parentEl = my_el.parentNode;
    parentEl.insertBefore(newEl, my_el);
}
//addElement();