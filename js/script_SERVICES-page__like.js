var buttonLike = document.querySelector('.postedPost__buttonLike');
var index_localStorage;
var counter;



var counterLikePage = document.querySelector('.postedPost__counterLike'); 

window.addEventListener('load', function() {
    var linkAddress = window.location.href;
    var numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
    index_localStorage = numberPage - 1;
    counterLikePage.innerHTML = window.localStorage.getItem('like' + index_localStorage);

    counter = window.localStorage.getItem('like' + index_localStorage);
    counter = parseInt(counter, 10);
})




buttonLike.addEventListener('click', function() {
    counter += 1;
    
    if(counter === 2) {
        counterLikePage.innerHTML = 0;
        counter = 0;
        window.localStorage.setItem('like' + index_localStorage, counter);
    } else {
        counterLikePage.innerHTML = 1;
        window.localStorage.setItem('like' + index_localStorage, counter);
    }

});




// console.log(index_localStorage)