// // console.log(window)
// // console.log(window.location.href)

// var buttonLike = document.querySelector('.postedPost__buttonLike');

// var linkAddress = window.location.href;
// var numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
// var index_localStorage = numberPage - 1;
// console.log(index_localStorage)
// var counter = window.localStorage.getItem('like0');
// // console.log(counter + 1)
// counter = parseInt(counter, 10);
// // console.log(counter)

// // запись с счетчика с localStorage
// var counterLikePage = document.querySelector('.postedPost__counterLike'); 
// // var counterLikePage = document.querySelector('.postedPost__counterLike'); 
// counterLikePage.innerHTML = window.localStorage.getItem('like' + index_localStorage);

// window.addEventListener('load', function() {
//     var linkAddress = window.location.href;
//     var numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
//     var index_localStorage = numberPage - 1;
// })


// buttonLike.addEventListener('click', function() {
    

//     // numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
//     // index_localStorage = numberPage - 1;


//     counter += 1;
    
//     if(counter === 2) {
//         counterLikePage.innerHTML = 0;
//         counter = 0;
//         window.localStorage.setItem('like' + index_localStorage, counter);
//     } else {
//         counterLikePage.innerHTML = 1;
//         window.localStorage.setItem('like' + index_localStorage, counter);
//     }


//     // console.log(index_localStorage)
//     // console.log(numberPage)
// });




// console.log(index_localStorage)



// console.log(window)
// console.log(window.location.href)

var buttonLike = document.querySelector('.postedPost__buttonLike');


var index_localStorage;

var counter;


// запись с счетчика с localStorage
var counterLikePage = document.querySelector('.postedPost__counterLike'); 
// var counterLikePage = document.querySelector('.postedPost__counterLike'); 
// counterLikePage.innerHTML = window.localStorage.getItem('like' + index_localStorage);

window.addEventListener('load', function() {
    var linkAddress = window.location.href;
    var numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
    index_localStorage = numberPage - 1;
    counterLikePage.innerHTML = window.localStorage.getItem('like' + index_localStorage);

    counter = window.localStorage.getItem('like' + index_localStorage);
    console.log(counter)
    counter = parseInt(counter, 10);
    
})




buttonLike.addEventListener('click', function() {
    

    // numberPage = linkAddress.substring(linkAddress.length - 5, linkAddress.length - 6);
    // index_localStorage = numberPage - 1;

    // console.log(counter)
    counter += 1;
    
    if(counter === 2) {
        counterLikePage.innerHTML = 0;
        counter = 0;
        window.localStorage.setItem('like' + index_localStorage, counter);
    } else {
        counterLikePage.innerHTML = 1;
        window.localStorage.setItem('like' + index_localStorage, counter);
    }


    // console.log(index_localStorage)
    // console.log(numberPage)
});




// console.log(index_localStorage)