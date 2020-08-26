// функция создана что б переменная commentButton не біла глобальна
window.addEventListener('load', function () {

    var commentButton = document.querySelector('.comment__button');                 // добираемся к кнопке

    commentButton.addEventListener('click', function () {                           // ставим событие
        var textareaComment = document.querySelector('.commentPage');               // добираемся к textarea
        var blockComment = document.querySelector('.comment__usersComment');        // добираемся к div где будут все комменты
        var noneCommentPage = document.querySelector('.noneComment');               // поле которое говорит что комментов еще нет
        var comment = textareaComment.value;                                        // добираемся к тексту коммента
        var allComment = document.querySelectorAll('.comment_post');                // коллекция всех комментов


        if (comment.length === 0) {                                                 // если поле textarea пусто, то коммент не добавлять
            return
        } else {

            if (allComment.length === 0) {                                          // если это первый коммент, поле что нет комментов удаляеться
                noneCommentPage.remove();
            }

            var div = document.createElement('div');                                // создаем div
            var p = document.createElement('p');                                    // создаем р
            p.innerHTML = comment;                                                  // записываем в р коммент с textarea
            div.classList.add('comment_post')                                       // добавляем класс css

            div.insertAdjacentElement('afterbegin', p);                             // размещаем р в div

            blockComment.insertAdjacentElement('beforeend', div)                    // размещаем созданный div где храняться все комменты
        }



        textareaComment.value = '';                                                 // очищаем поле ввода текста textarea
    });

})