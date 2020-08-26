// при загрузке страницы определяет размер экрана
// на мобильных устройствах отображает блок на всю ширину
window.addEventListener('load', function(event) {
    var collectionArticle_aboutUs = document.querySelectorAll('.aboutUs__article');
    var collectionPicture_aboutUs = document.querySelectorAll('.aboutUs__picture');
    
    var collectionArticle_services = document.querySelectorAll('.services__article');
    var collectionPicture_services = document.querySelectorAll('.services__picture');

    if(screen.width <= 518) {
        for(let i = 0; i < collectionArticle_aboutUs.length; i += 1) {
            collectionArticle_aboutUs[i].style.width = '100%';
            collectionPicture_aboutUs[i].style.height = '240px';
        } 

        for(let i = 0; i < collectionArticle_services.length; i += 1) {
            collectionArticle_services[i].style.width = '100%';
            collectionPicture_services[i].style.height = '240px';
        } 
    } else if (screen.width > 519) {
        for(let i = 0; i < collectionArticle_aboutUs.length; i += 1) {
            collectionArticle_aboutUs[i].style.width = '22%';
            collectionPicture_aboutUs[i].style.height = '160px';
        }

        for(let i = 0; i < collectionArticle_services.length; i += 1) {
            collectionArticle_services[i].style.width = '22%';
            collectionPicture_services[i].style.height = '160px';
        } 
    }
});


// динамически определяет размер экрана
// на мобильных устройствах отображает блок на всю ширину
window.addEventListener('resize', function(event) {
    var collectionArticle_aboutUs = document.querySelectorAll('.aboutUs__article');
    var collectionPicture_aboutUs = document.querySelectorAll('.aboutUs__picture');
    
    var collectionArticle_services = document.querySelectorAll('.services__article');
    var collectionPicture_services = document.querySelectorAll('.services__picture');

    if(screen.width <= 518) {
        for(let i = 0; i < collectionArticle_aboutUs.length; i += 1) {
            collectionArticle_aboutUs[i].style.width = '100%';
            collectionPicture_aboutUs[i].style.height = '240px';
        } 

        for(let i = 0; i < collectionArticle_services.length; i += 1) {
            collectionArticle_services[i].style.width = '100%';
            collectionPicture_services[i].style.height = '240px';
        } 
    } else if (screen.width > 519) {
        for(let i = 0; i < collectionArticle_aboutUs.length; i += 1) {
            collectionArticle_aboutUs[i].style.width = '22%';
            collectionPicture_aboutUs[i].style.height = '160px';
        }

        for(let i = 0; i < collectionArticle_services.length; i += 1) {
            collectionArticle_services[i].style.width = '22%';
            collectionPicture_services[i].style.height = '160px';
        } 
    }
});


