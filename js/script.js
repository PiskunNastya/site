var menu = document.querySelector('.header__allManu');

window.addEventListener('resize', function(event) {
    if(screen.width <= 1199) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});