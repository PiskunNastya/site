// для адаптивности, для корректного отображения на мобильных устройствах
var postedPost = document.querySelector('.postedPost');

window.addEventListener('load', function(event) {
    if(screen.width <= 767) {
        postedPost.style.padding = '0px';
    } else if (screen.width > 767) {
        postedPost.style.padding = '80px';
    }
});

window.addEventListener('resize', function(event) {
    if(screen.width <= 767) {
        postedPost.style.padding = '0px';
    } else if (screen.width > 767) {
        postedPost.style.padding = '80px';
    }
});

