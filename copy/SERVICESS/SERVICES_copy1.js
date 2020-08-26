// счетчик лайков от одного пользователя
var buttonLike = document.querySelectorAll('.blog__buttonLike');
var counter = 0;

for(let i = 0; i < buttonLike.length; i += 1) {                                 // делегирование
    buttonLike[i].addEventListener('click', function(event) {
        // console.log(event)
        // console.log(i)
        // console.log('like' + i)
        var parentElem = event.target.parentElement;                            // узнаем родителя кнопки
        var counterLike = parentElem.querySelector('.blog__counterLike');       // и через родитя ищем поле счетчика
        counter += 1;
    
        if(counter === 2) {
            counterLike.innerHTML = 0;
            counter = 0;
            window.localStorage.setItem('like' + i, counter);
        } else {
            counterLike.innerHTML = 1;
            window.localStorage.setItem('like' + i, counter);
        }
    
    });
}


// при обновлении страницы, лайки сохраняються через localStorage
window.addEventListener('load', function() {
    var blog__counterLike = document.querySelectorAll('.blog__counterLike');

    for(let i = 0; i < blog__counterLike.length; i += 1) {
        blog__counterLike[i].innerHTML = window.localStorage.getItem('like' + i);
    }
})


