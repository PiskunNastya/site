var menuButton = document.querySelector('.header__button');

// при загрузке определяеться размер экрана
window.addEventListener('load', function (event) {
    var menu = document.querySelector('.header__menu_ul');
    var menuCollection_li = document.getElementsByClassName('header__menu_li');
    var menuCollection_a = document.getElementsByClassName('header__menu_a');
    var menu_nav = document.querySelector('.header__menu_nav');
    var logoText = document.querySelector('.header__logo-h1');

    if (screen.width <= 1200) {
        menu.classList.remove('header__menu-flex');
        menuButton.style.display = 'block';
        menu.classList.add('header__menu-none');
        menu.classList.remove('header__allMenu');
        logoText.style.width = '200px';
    } else if (screen.width > 1201) {
        menu.classList.add('header__menu-flex');
        menu_nav.classList.remove('header__displayMenu');
        menu.classList.remove('header__allManu-display');
        menu.classList.add('header__allMenu');
        menuButton.style.display = 'none';

        for (let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu-display');
            menuCollection_li[i].classList.add('header__elemMenu');
        }

        for (let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link-display');
            menuCollection_a[i].classList.add('header__elemMenu-link');
        }
    }

});


// при изменении размера экрана
window.addEventListener('resize', function (event) {
    var menu = document.querySelector('.header__menu_ul');
    var menuCollection_li = document.getElementsByClassName('header__menu_li');
    var menuCollection_a = document.getElementsByClassName('header__menu_a');
    var menu_nav = document.querySelector('.header__menu_nav');

    if (screen.width <= 1200) {
        menu.classList.remove('header__menu-flex');
        menuButton.style.display = 'block';
        menu.classList.add('header__menu-none');
        menu_nav.classList.remove('header__displayMenu');
        menu.classList.remove('header__allManu-display');

        for (let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu-display');
        }

        for (let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link-display');
        }

    } else if (screen.width > 1201) {
        menu.classList.add('header__menu-flex');
        menu_nav.classList.remove('header__displayMenu');
        menu.classList.remove('header__allManu-display');
        menu.classList.add('header__allMenu');
        menuButton.style.display = 'none';

        for (let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu-display');
            menuCollection_li[i].classList.add('header__elemMenu');
        }

        for (let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link-display');
            menuCollection_a[i].classList.add('header__elemMenu-link');
        }
    }

});

menuButton.addEventListener('click', function (event) {
    menu_nav.classList.toggle('header__displayMenu');
    menu.classList.toggle('header__allManu-display');
    menu.classList.toggle('header__menu-none');


    for (let i = 0; i < menuCollection_li.length; i += 1) {
        menuCollection_li[i].classList.toggle('header__elemMenu-display');
    }

    for (let i = 0; i < menuCollection_a.length; i += 1) {
        menuCollection_a[i].classList.toggle('header__elemMenu-link-display');
    }
});


window.addEventListener('scroll', function (event) {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 0) {
        header.classList.add('header__menu_scroll');
    } else {
        header.classList.remove('header__menu_scroll');
    }
});



