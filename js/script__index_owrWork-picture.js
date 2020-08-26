// var modalWindow = document.querySelector('.ourWork__modalWindow');
// var picture = document.querySelector('[alt="modalWindow"]');
// var pictureText = document.querySelectorAll('.ourWork__picture-Text');
// var buttomOut = document.querySelector('.ourWork__buttomOut');
// // console.log(picture)

// for(let i = 0; i < pictureText.length; i += 1) {
//     pictureText[i].addEventListener('click', function(event) {
//         // console.dir(event.target)
//         var target = event.target;
//         // if(target != 'IMG') {
//         //     return
//         // }

//         var imaga = event.target.src;
//         picture.src = imaga;
//         // console.log(picture)

//         modalWindow.src = imaga;

//         modalWindow.classList.toggle('ourWork__modalWindow_none')
//         modalWindow.classList.toggle('ourWork__modalWindow_display')
//     });
// }

// buttomOut.addEventListener('click', function() {

// });


var modalWindow = document.querySelector('.ourWork__modalWindow');
var picture = document.querySelector('[alt="modalWindow"]');
var pictureText = document.querySelectorAll('.ourWork__picture-Text');
var buttomOut = document.querySelector('.ourWork__buttomOut');

for(let i = 0; i < pictureText.length; i += 1) {
    pictureText[i].addEventListener('click', function(event) {
        // console.dir(event.target)
        var target = event.target;
        // if(target != 'IMG') {
        //     return
        // }

        var imaga = event.target.src;
        picture.src = imaga;
        // console.log(picture)

        modalWindow.src = imaga;

        modalWindow.classList.remove('ourWork__modalWindow_none')
        modalWindow.classList.add('ourWork__modalWindow_display')
    });
}

buttomOut.addEventListener('click', function(event) {
    modalWindow.classList.remove('ourWork__modalWindow_display')
    modalWindow.classList.add('ourWork__modalWindow_none')

});