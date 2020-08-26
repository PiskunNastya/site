var slider = document.querySelector('.slider');

window.addEventListener('load', function () {
    // слайдер меняет картинки
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
    }, 5000);



    // проверка размера экрана, нужно отображать слайдер или нет 
    if (screen.width < 425) {
        slider.classList.add('slider__none');
        slider.classList.remove('slider');
        ourWork.style.marginTop = '100px';
    } else if (screen.width > 426) {
        slider.classList.remove('slider__none');
        slider.classList.add('slider');
        ourWork.style.marginTop = '295px';
    }

});



// динамическая проверка размера экрана, нужно отображать слайдер или нет 
window.addEventListener('resize', function (event) {

    if (screen.width < 425) {
        slider.classList.add('slider__none');
        slider.classList.remove('slider');
        ourWork.style.marginTop = '100px';
    } else if (screen.width >= 426) {
        slider.classList.remove('slider__none');
        slider.classList.add('slider');
        ourWork.style.marginTop = '295px';
    }

});



