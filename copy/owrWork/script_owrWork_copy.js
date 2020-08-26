
var ourWork_picture_ALL = document.querySelectorAll('.ourWork__picture');
var ourWork_picture_WEB = document.querySelectorAll('.picture_WEB');
var ourWork_picture_GRAP = document.querySelectorAll('.picture_GRAP');
var ourWork_picture_BRAND = document.querySelectorAll('.picture_BRAND');

var link_ALL = document.getElementById('ALL');
var link_WEB = document.getElementById('WEB');
var link_GRAP = document.getElementById('GRAP');
var link_BRAND = document.getElementById('BRAND');


link_ALL.addEventListener('click', function(event) {
    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'block';
    }
});


link_WEB.addEventListener('click', function(event) {
    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'none';
    }
});


link_GRAP.addEventListener('click', function(event) {
    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'none';
    }
});


link_BRAND.addEventListener('click', function(event) {
    for(let i = 0; i < ourWork_picture_BRAND.length; i += 1) {
        ourWork_picture_BRAND[i].style.display = 'block';
    }

    for(let i = 0; i < ourWork_picture_WEB.length; i += 1) {
        ourWork_picture_WEB[i].style.display = 'none';
    }

    for(let i = 0; i < ourWork_picture_GRAP.length; i += 1) {
        ourWork_picture_GRAP[i].style.display = 'none';
    }
});