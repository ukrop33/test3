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
            var data = JSON.parse(data);
            console.log(data);
            console.log(data[3]);
        }

    });
});

var my_el = newEl = null;
function addElement(data) {

    let parentElement = document.getElementById("results");
    let theFirstChild = parentElement.firstChild;

    let post_class = parent

    let newElementd = document.createElement("div");

    newEl.className = 
    newEl.innerHTML = data;
    // Добавляем только что созданный элемент в дерево DOM
    
    var parentEl = my_el.parentNode;
    parentEl.insertBefore(newEl, my_el);
}
//addElement();