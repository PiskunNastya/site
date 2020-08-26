
// при загрузке определяеться размер экрана
window.addEventListener('load', function(event) {
    var menu = document.querySelector('.header__menu_ul');
    var menuButton = document.querySelector('.header__button');
    var menu_nav = document.querySelector('.header__menu_nav');
    var menuCollection_li = document.getElementsByClassName('header__menu_li');
    var menuCollection_a = document.getElementsByClassName('header__menu_a');

    if(screen.width <= 991) {
        menu_nav.classList.remove('header__menu-block');
        menu_nav.classList.add('header__displayMenu');
        menu.classList.remove('header__allMenu');
        menu.classList.add('header__allManu-display');
        menuButton.style.display = 'block';

        for(let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu');
            menuCollection_li[i].classList.add('header__elemMenu-display');
        }

        for(let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link');
            menuCollection_a[i].classList.add('header__elemMenu-link-display');
        }
    } else if(screen.width > 992) {
        menu_nav.classList.remove('header__displayMenu');
        menu_nav.classList.add('header__menu-block');
        menu.classList.remove('header__allManu-display');
        menu.classList.add('header__allMenu');
        menuButton.style.display = 'none';

        for(let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu-display');
            menuCollection_li[i].classList.add('header__elemMenu');   
        }

        for(let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link-display');
            menuCollection_a[i].classList.add('header__elemMenu-link');
        }
    }
});


// при изменении размера экрана
window.addEventListener('resize', function(event) {
    var menu = document.querySelector('.header__menu_ul');
    var menuButton = document.querySelector('.header__button');
    var menu_nav = document.querySelector('.header__menu_nav');
    var menuCollection_li = document.getElementsByClassName('header__menu_li');
    var menuCollection_a = document.getElementsByClassName('header__menu_a');
    var logoText = document.querySelector('.header__logo-h1');
    // console.dir(logoText);

    if(screen.width <= 991) {
        menu_nav.classList.remove('header__menu-block');
        menu_nav.classList.add('header__displayMenu');
        menu.classList.remove('header__allMenu');
        menu.classList.add('header__allManu-display');
        menuButton.style.display = 'block';
        logoText.style.fontSize = '1.7rem';

        for(let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu');
            menuCollection_li[i].classList.add('header__elemMenu-display');
        }

        for(let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link');
            menuCollection_a[i].classList.add('header__elemMenu-link-display');
        }
    } else if(screen.width > 992) {
        menu_nav.classList.remove('header__displayMenu');
        menu_nav.classList.add('header__menu-block');
        menu.classList.remove('header__allManu-display');
        menu.classList.add('header__allMenu');
        menuButton.style.display = 'none';
        logoText.style.fontSize = '40px';

        for(let i = 0; i < menuCollection_li.length; i += 1) {
            menuCollection_li[i].classList.remove('header__elemMenu-display');
            menuCollection_li[i].classList.add('header__elemMenu');   
        }

        for(let i = 0; i < menuCollection_a.length; i += 1) {
            menuCollection_a[i].classList.remove('header__elemMenu-link-display');
            menuCollection_a[i].classList.add('header__elemMenu-link');
        }
    }
});