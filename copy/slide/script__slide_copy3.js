window.addEventListener('load', function() {

    var slider = document.querySelector('.slider__picture');


    var randomNum = Math.floor(Math.random() * 3) + 1; // от 1 до 3
    // var randomNum2 = Math.floor(Math.random() * 3); // от 0 до 2


    slider.src = `../img/slide${randomNum}.jpg`;


    setInterval(function() {
        if(randomNum > 3) {
            randomNum = 1;
        }
        
        slider.src = `../img/slide${randomNum++}.jpg`;

    }, 1000);
});
