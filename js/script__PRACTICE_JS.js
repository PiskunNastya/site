// функция нужна что б все переленные были локально закрыты
window.addEventListener('load', function() {

    var regExp_login = /^[\S]{6,10}$/
    var regExp_password = /^\w{6,10}$/
    var regExp_email = /^\w+@.+$/
    
    
    
    
    
    // Войти start_______________________________________________________________________________________________
    
    var toComeIn__login = document.querySelector('[name="toComeIn__login"]');           // добрались к инпуту "Логин" поля Войти
    var toComeIn__password = document.querySelector('[name="toComeIn__password"]');     // добрались к инпуту "Пароль" поля Войти
    var toComeIn__button_Ok = document.querySelector('[name="signIn"]');                // добрались к кнопке "Ок" поля Войти
    var toComeIn__button_registration = document.querySelector('[name="toComeIn__registration"]'); // добрались к кнопке "Регистрация" поля Войти
    
    var loginEnter;                                                                     // динамически будет сохраняться логин
    var passwordEnter;                                                                  // динамически будет сохраняться пароль
    
    toComeIn__button_Ok.disabled = true;                                                // ставим кнопку "Ок" неактивной, пока значения с инпута не прошли регулярку
    
    
    
    // прослушивем инпут "Логин" поля Войти
    toComeIn__login.addEventListener('input', function(event) {
        loginEnter = event.target.value;
        
        // регулярка вне функции
    
        if(regExp_login.test(loginEnter)) {
            toComeIn__login.style.background = '#9bec9b';    // green
        } else if(loginEnter.length === 0){
            toComeIn__login.style.background = 'white';  
        } else {
            toComeIn__login.style.background = '#d07e85';    // red
        }
    
        if(regExp_login.test(loginEnter) && regExp_login.test(passwordEnter)) {                 // если все инпуты прошли проверку регуляркой
            toComeIn__button_Ok.disabled = false;                                               // кнопка "Ок" будет активна
        }
    });
    
    
    // прослушивем инпут "Пароль" поля Войти
    toComeIn__password.addEventListener('input', function(event) {
        passwordEnter = event.target.value;
    
        // регулярка вне функции
    
        if(regExp_password.test(passwordEnter)) {
            toComeIn__password.style.background = '#9bec9b';    // green
        } else if(passwordEnter.length === 0) {
            toComeIn__password.style.background = 'white'; 
        } else {
            toComeIn__password.style.background = '#d07e85';    // red
        }
    
        if(regExp_login.test(loginEnter) && regExp_login.test(passwordEnter)) {               // если все инпуты прошли проверку регуляркой
            toComeIn__button_Ok.disabled = false;                                             // кнопка "Ок" будет активна
        }
    });
    
    
    // прослушивем кнопку "Ок" поля Войти
    toComeIn__button_Ok.addEventListener('click', function(event) {
        var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');         // находим поле Войти
        
        // проверяю есть ли в localStorage свойство === loginEnter и значение === passwordEnter
        // проверяю зарегистрирован ли такой пользователь раньше
        if(localStorage.hasOwnProperty(loginEnter) && window.localStorage.getItem(loginEnter) === passwordEnter) {      // если да
            var block_forms__account = document.querySelector('.block-forms__account');                                 // добираемся к блоку Добро пожаловать
            var block_forms__account_welcom = document.querySelector('.block-forms__account_welcom');                   // добираемся к тексту блока Добро пожаловать
    
            block_forms__toComeIn.classList.add('display_none');
            block_forms__account.classList.remove('display_none');
            block_forms__account_welcom.textContent = `Добро пожаловать ${loginEnter}`;
        } else {                                                                                                        // если нет
            var block_forms__userIsNotFound = document.querySelector('.block-forms__userIsNotFound');
    
            block_forms__toComeIn.classList.add('display_none');
            block_forms__userIsNotFound.classList.remove('display_none');
        }
    
        // очищаем значение Логина и Пароля 
        var log = document.querySelector('[name="toComeIn__login"]');
        log.value = '';
        log.style.background = 'white';
        var pas = document.querySelector('[name="toComeIn__password"]');
        pas.value = '';
        pas.style.background = 'white';
    
    });
    
    
    // прослушивем кнопку "регистрация" поля Войти
    toComeIn__button_registration.addEventListener('click', function() {
        var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');                   // находим поле Войти
        var block_forms__checkIn = document.querySelector('.block-forms__checkIn');                     // находим поле Регистрация
    
        block_forms__toComeIn.classList.add('display_none');
        block_forms__checkIn.classList.remove('display_none');
    
        // очищаем значение Логина и Пароля 
        var log = document.querySelector('[name="toComeIn__login"]');
        log.value = '';
        log.style.background = 'white';
        var pas = document.querySelector('[name="toComeIn__password"]');
        pas.value = '';
        pas.style.background = 'white';
    });
    
    // Войти finish_________________________________________________________________________________________________________
    
    
    
    
    
    // Форма регистрации start_______________________________________________________________________________________________
    
    var checkIn__login = document.querySelector('[name="checkIn__login"]');              // добрались к инпуту "Логин" поля Регистрация
    var checkIn__password = document.querySelector('[name="checkIn__password"]');        // добрались к инпуту "Пароль" поля Регистрация
    var checkIn__email = document.querySelector('[name="checkIn__email"]');              // добрались к инпуту "Емейл" поля Регистрация
    var checkIn__registrationButton = document.querySelector('[name="checkIn__registration-button"]'); // добрались к кнопке "регистрация" поля Регистрация
    
    
    var loginCheckIn;                       // динамически будет сохраняться логин
    var passwordCheckIn;                    // динамически будет сохраняться пароль
    var emailCheckIn;                       // динамически будет сохраняться емеил
    
    checkIn__registrationButton.disabled = true;  // ставим кнопку "регистрация" неактивной, пока значения с инпута не прошли регулярку
    
    // прослушивем инпут "Логин" поля Регистрации
    checkIn__login.addEventListener('input', function(event) {
        loginCheckIn = event.target.value;
        
        // регулярка вне функции
    
        if(regExp_login.test(loginCheckIn)) {
            checkIn__login.style.background = '#9bec9b';    // green
        } else if(loginCheckIn.length === 0){
            checkIn__login.style.background = 'white';  
        } else {
            checkIn__login.style.background = '#d07e85';    // red
        }
    
    
        if(regExp_login.test(loginCheckIn) && regExp_login.test(passwordCheckIn) && regExp_email.test(emailCheckIn)) {      // если все инпуты прошли проверку регуляркой
            checkIn__registrationButton.disabled = false;                                                                   // кнопка "Регистрация" будет активна
        }
    
    });
    
    
    // прослушивем инпут "Пароль" поля Регистрации
    checkIn__password.addEventListener('input', function(event) {
        passwordCheckIn = event.target.value;
    
        // регулярка вне функции
    
        if(regExp_password.test(passwordCheckIn)) {
            checkIn__password.style.background = '#9bec9b';    // green
        } else if(passwordCheckIn.length === 0) {
            checkIn__password.style.background = 'white';  
        } else {
            checkIn__password.style.background = '#d07e85';    // red
        }
    
        if(regExp_login.test(loginCheckIn) && regExp_login.test(passwordCheckIn) && regExp_email.test(emailCheckIn)) {      // если все инпуты прошли проверку регуляркой
            checkIn__registrationButton.disabled = false;                                                                   // кнопка "Регистрация" будет активна
        }
    
    });
    
    
    // прослушивем инпут "Емейл" поля Регистрации
    checkIn__email.addEventListener('input', function(event) {
        emailCheckIn = event.target.value;
    
        // регулярка вне функции
    
        if(regExp_email.test(emailCheckIn)) {
            checkIn__email.style.background = '#9bec9b';    // green
        } else if(emailCheckIn.length === 0) {
            checkIn__email.style.background = 'white';    
        } else {
            checkIn__email.style.background = '#d07e85';    // red
        }
    
        if(regExp_login.test(loginCheckIn) && regExp_login.test(passwordCheckIn) && regExp_email.test(emailCheckIn)) {      // если все инпуты прошли проверку регуляркой
            checkIn__registrationButton.disabled = false;                                                                   // кнопка "Регистрация" будет активна
        }
    
    });
    
    
    // прослушивем кнопку "Регистрация" поля Регистрации
    checkIn__registrationButton.addEventListener('click', function(event) {
        var block_forms__account = document.querySelector('.block-forms__account');         // добираемся к полю Добро пожаловать
        var block_forms__checkIn = document.querySelector('.block-forms__checkIn');         // добираемся к полю Зеристрация
        var block_forms__account_welcom = document.querySelector('.block-forms__account_welcom');   // добираемся к тексту поля Добро пожаловать
    
        window.localStorage.setItem(loginCheckIn, passwordCheckIn);                         // записываем данные в localStorage
    
        block_forms__account.classList.remove('display_none');                              // показываем поле Добро пожаловать
        block_forms__checkIn.classList.add('display_none');                                 // скрываем поле регистрации
        block_forms__account_welcom.textContent = `Добро пожаловать ${loginCheckIn}`;       // динамически записываем имя логина                
    
        // очищаем значение Логина и Пароля
        var log = document.querySelector('[name="checkIn__login"]');
        log.value = '';
        log.style.background = 'white';
        var pas = document.querySelector('[name="checkIn__password"]');
        pas.value = '';
        pas.style.background = 'white';
        var em = document.querySelector('[name="checkIn__email"]');
        em.value = '';
        em.style.background = 'white';
    
    });
    
    // Форма регистрации finish_______________________________________________________________________________________________
    
    
    
    
    // Добро пожаловать start_______________________________________________________________________________________________
    
    var block_forms__account_out_button = document.querySelector('.block-forms__account-out');          // добираемся к кнопке "Выйти" поля Добро пожаловать
    var block_forms__account_delete_button = document.querySelector('.block-forms__account-delete');    // добираемся к кнопке "Удалить аккаунт" поля Добро пожаловать
    
    
    // прослушивем кнопку "Выйти" поля Регистрации
    block_forms__account_out_button.addEventListener('click', function() {
        var block_forms__account = document.querySelector('.block-forms__account');         // добираемся к полю Добро пожаловать
        var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');       // добираемся к полю Войти
    
        block_forms__account.classList.add('display_none');                                 // скрываем поле Добро пожаловать
        block_forms__toComeIn.classList.remove('display_none');                             // показываем поле Войти
    });
    
    
    // прослушивем кнопку "Удалить аккаунт" поля Регистрации
    block_forms__account_delete_button.addEventListener('click', function() {
        window.localStorage.removeItem(loginCheckIn);                                       // удаляем данные с localStorage
    
        var block_forms__account = document.querySelector('.block-forms__account');         // добираемся к полю Добро пожаловать
        var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');       // добираемся к полю Войти
    
        block_forms__account.classList.add('display_none');                                 // скрываем поле Добро пожаловать
        block_forms__toComeIn.classList.remove('display_none');                             // показываем поле Войти
    });
    
    // Добро пожаловать finish_______________________________________________________________________________________________
    
    
    
    
    // Пользователь не найден start_______________________________________________________________________________________________
    
    var block_forms__userIsNotFound_button = document.querySelector('.block-forms__userIsNotFound_button');     // добираемся к кнопке "Регистрация" поля Пользователь не найден
    
    block_forms__userIsNotFound_button.addEventListener('click', function(event) {
        var block_forms__userIsNotFound = document.querySelector('.block-forms__userIsNotFound');         // добираемся к полю Пользователь не найден
        var block_forms__checkIn = document.querySelector('.block-forms__checkIn');                       // добираемся к полю Регистрация
    
        block_forms__userIsNotFound.classList.add('display_none');                                        // скрываем проле Пользователь не найден
        block_forms__checkIn.classList.remove('display_none');                                            // показываем поле Регистрация
    });
    
    // Пользователь не найден finish_______________________________________________________________________________________________

});



