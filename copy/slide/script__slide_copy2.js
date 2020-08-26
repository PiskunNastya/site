window.addEventListener('load', function() {
    var arrPicture = ['../img/slide1.jpg', '../img/slide2.jpg', '../img/slide3.jpg'];
    var slider = document.querySelector('.slider__picture');


    var randomNum = Math.floor(Math.random() * 3) + 1; // от 1 до 3
    // var randomNum2 = Math.floor(Math.random() * 3); // от 0 до 2


    slider.src = `../img/slide${randomNum}.jpg`;

    var i = randomNum - 1;
    // var collectionPicture = document.querySelectorAll('.slider__picture');
    var collectionPicture = document.getElementsByClassName('slider__picture');

    // setInterval(function() {

    //     // if(i === 3) {
    //     //     collectionPicture[2].classList.remove('showed');
    //     //     i = 0;
    //     //     collectionPicture[i].classList.add('showed');
    //     //     i++;
    //     // } else if(i <= 2) {
    //     //     collectionPicture[i].classList.remove('showed');
    //     //     i++;
    //     //     collectionPicture[i].classList.add('showed');
    //     //     console.log(i);
    //     // }

    //     if(i === 3) {
    //         collectionPicture[2].classList.remove('showed');
    //         i = 0;
    //     } else if (i === 0) {
    //         collectionPicture[i].classList.add('showed');
    //         i++;
    //     } else {
    //         collectionPicture[i].classList.remove('showed');
    //         collectionPicture[++i].classList.add('showed');
    //         console.log(i);
    //     }

    // }, 1000);
});

