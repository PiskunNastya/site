// в шапке блока ourWork находяться ссылки-кнопки, при нажатии которых будет отображать только те картинки
// которые пользователь выберет

// добираемся к кнопкам
var link_ALL = document.getElementById('ALL');
var link_WEB = document.getElementById('WEB');
var link_GRAP = document.getElementById('GRAP');
var link_BRAND = document.getElementById('BRAND');


// ставим обработчик собития на кнопку
// функция отображает все картинки
link_ALL.addEventListener('click', function(event) {
    // три нижние переменные находяться в функции, что б они не отображались в глобальной области, в объекте window
    var ourWork_picture_WEB = document.querySelectorAll('.picture_WEB');
    var ourWork_picture_GRAP = document.querySelectorAll('.picture_GRAP');
    var ourWork_picture_BRAND = document.querySelectorAll('.picture_BRAND');

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'block';
    }

    event.preventDefault();                                         // отменяет скрола в начало страницы, после нажатия кнопки
});


// ставим обработчик собития на кнопку
// функция отображает картинки WEB
link_WEB.addEventListener('click', function(event) {
    // три нижние переменные находяться в функции, что б они не отображались в глобальной области, в объекте window
    var ourWork_picture_WEB = document.querySelectorAll('.picture_WEB');
    var ourWork_picture_GRAP = document.querySelectorAll('.picture_GRAP');
    var ourWork_picture_BRAND = document.querySelectorAll('.picture_BRAND');

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'none';
    }

    event.preventDefault();                                         // отменяет скрола в начало страницы, после нажатия кнопки
});


// ставим обработчик собития на кнопку
// функция отображает картинки GRAP
link_GRAP.addEventListener('click', function(event) {
    // три нижние переменные находяться в функции, что б они не отображались в глобальной области, в объекте window
    var ourWork_picture_WEB = document.querySelectorAll('.picture_WEB');
    var ourWork_picture_GRAP = document.querySelectorAll('.picture_GRAP');
    var ourWork_picture_BRAND = document.querySelectorAll('.picture_BRAND');

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'none';
    }

    event.preventDefault();                                         // отменяет скрола в начало страницы, после нажатия кнопки
});


// ставим обработчик собития на кнопку
// функция отображает картинки BRAND
link_BRAND.addEventListener('click', function(event) {
    // три нижние переменные находяться в функции, что б они не отображались в глобальной области, в объекте window
    var ourWork_picture_WEB = document.querySelectorAll('.picture_WEB');
    var ourWork_picture_GRAP = document.querySelectorAll('.picture_GRAP');
    var ourWork_picture_BRAND = document.querySelectorAll('.picture_BRAND');

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'none';
    }

    event.preventDefault();                                         // отменяет скрола в начало страницы, после нажатия кнопки
});