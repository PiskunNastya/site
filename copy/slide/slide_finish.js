window.addEventListener('load', function () {
    var allPicture = document.getElementsByClassName('slider__picture');
    var randomNum2 = Math.floor(Math.random() * 3); // от 0 до 2
    var i = 0;

    allPicture[randomNum2].classList.add('showed');

    setInterval(() => {
        if (i > 2) {
            i = 0;
        }

        if (i === 0) {
            allPicture[2].classList.remove('showed');
            allPicture[i].classList.add('showed');
            ++i;
        } else {
            allPicture[--i].classList.remove('showed');
            i++;
            allPicture[i].classList.add('showed');
            i++;
        }
    }, 1000);
});