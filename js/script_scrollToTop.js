// при загрузке страницы scrollToTop всегда скрыт
window.addEventListener('load', function() {
    var button_scrollToTop = document.querySelector('.scrollToTop');
    button_scrollToTop.style.display = 'none';
});


// событие на прослушку скролла
window.addEventListener('scroll', function(event) {
    var button_scrollToTop = document.querySelector('.scrollToTop');

    // если скрол больше или равно 1, кнопка scrollToTop отображаеться
    if(window.pageYOffset >= 1) {
        button_scrollToTop.style.display = 'block';
    } else {
        button_scrollToTop.style.display = 'none';
    }

    
    // при нажатии кнопки, медленно поднимаемся на вверх страницы
    button_scrollToTop.addEventListener('click', function() {
            var scrollHeight = window.pageYOffset;                  // сограняем в переменную сколько проскроленно
            var t = setInterval(function () {                       // устанавливаем setInterval
                if (scrollHeight > 0) {
                    window.scroll(0, scrollHeight = scrollHeight - 1);  // отнимаем у высоты по 5 пикселей
                } else {
                    clearInterval(t);                                   // если scrollHeight === 0, setInterval очищаем
                } 
            }, 5);
    })

});



