window.addEventListener('load', function() {

    var slider = document.querySelector('.slider__picture');


    var randomNum = Math.floor(Math.random() * 3) + 1; // от 1 до 3
    // var randomNum2 = Math.floor(Math.random() * 3); // от 0 до 2


    slider.src = `../img/slide${randomNum}.jpg`;

    var i = 1;
    setInterval(function() {
        if (i > 2) {
            i = 1;
        }

        if(i === 1) {
            if(randomNum > 3) {
                randomNum = 1;
            }
    
            slider.style.opacity = '1';
            slider.src = `../img/slide${randomNum++}.jpg`;
        } else {
            // slider.src = `../img/slide${randomNum}.jpg`;
            slider.style.opacity = '0';
        }

        i++;
        

    }, 5000);

});
