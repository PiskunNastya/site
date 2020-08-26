var regExp_login = /^[\S]{6,10}$/
var regExp_password = /^\w{6,10}$/
var regExp_email = /^\w+@.+$/





// Войти start_______________________________________________________________________________________________

var toComeIn__login = document.querySelector('[name="toComeIn__login"]');
var toComeIn__password = document.querySelector('[name="toComeIn__password"]');
var toComeIn__button_Ok = document.querySelector('[name="signIn"]');
var toComeIn__button_registration = document.querySelector('[name="toComeIn__registration"]');

var loginEnter;
var passwordEnter;

var flag_logo = false;
var flag_password = false;
toComeIn__button_Ok.disabled = true;




toComeIn__login.addEventListener('input', function(event) {
    loginEnter = event.target.value;

    
    // регулярка вне функции

    if(regExp_login.test(loginEnter)) {
        toComeIn__login.style.background = '#9bec9b';    // green
        flag_logo = true;
    } else if(loginEnter.length === 0){
        toComeIn__login.style.background = 'white';  
        flag_logo = false;
    } else {
        toComeIn__login.style.background = '#d07e85';    // red
        flag_logo = false;
    }


    if(flag_logo && flag_password) {
        toComeIn__button_Ok.disabled = false;
    }

    // event.target.value = '';
});


toComeIn__password.addEventListener('input', function(event) {
    passwordEnter = event.target.value;

    // регулярка вне функции

    if(regExp_password.test(passwordEnter)) {
        toComeIn__password.style.background = '#9bec9b';    // green
        flag_password = true;
    } else if(passwordEnter.length === 0) {
        toComeIn__password.style.background = 'white'; 
        flag_password = false;   
    } else {
        toComeIn__password.style.background = '#d07e85';    // red
        flag_password = false;
    }

    if(flag_logo && flag_password) {
        toComeIn__button_Ok.disabled = false;
    }

    // event.target.value = '';
});



toComeIn__button_Ok.addEventListener('click', function(event) {
    var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');
    
    if(localStorage.hasOwnProperty(loginEnter) && window.localStorage.getItem(loginEnter) === passwordEnter) {

        var block_forms__account = document.querySelector('.block-forms__account');
        var block_forms__account_welcom = document.querySelector('.block-forms__account_welcom');
        

        block_forms__toComeIn.classList.add('display_none');
        block_forms__account.classList.remove('display_none');
        block_forms__account_welcom.textContent = `Добро пожаловать ${loginEnter}`;
    } else {
        // console.log('ololo')
        var block_forms__userIsNotFound = document.querySelector('.block-forms__userIsNotFound');

        block_forms__toComeIn.classList.add('display_none');
        block_forms__userIsNotFound.classList.remove('display_none');
    }

    var log = document.querySelector('[name="toComeIn__login"]');
    log.value = '';
    log.style.background = 'white';
    var pas = document.querySelector('[name="toComeIn__password"]');
    pas.value = '';
    pas.style.background = 'white';

});


toComeIn__button_registration.addEventListener('click', function() {
    var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');
    var block_forms__checkIn = document.querySelector('.block-forms__checkIn');

    block_forms__toComeIn.classList.add('display_none');
    block_forms__checkIn.classList.remove('display_none');

    var log = document.querySelector('[name="toComeIn__login"]');
    log.value = '';
    log.style.background = 'white';
    var pas = document.querySelector('[name="toComeIn__password"]');
    pas.value = '';
    pas.style.background = 'white';
});


// Войти finish_________________________________________________________________________________________________________





// Форма регистрации start_______________________________________________________________________________________________
var checkIn__login = document.querySelector('[name="checkIn__login"]');
var checkIn__password = document.querySelector('[name="checkIn__password"]');
var checkIn__email = document.querySelector('[name="checkIn__email"]');
var checkIn__registrationButton = document.querySelector('[name="checkIn__registration-button"]');


var loginCheckIn;
var passwordCheckIn;
var emailCheckIn;

var flag_loginCheckIn = false;
var flag_passwordCheckIn = false;
var flag_emailCheckIn = false;
checkIn__registrationButton.disabled = true;

checkIn__login.addEventListener('input', function(event) {
    loginCheckIn = event.target.value;
    
    // регулярка вне функции

    if(regExp_login.test(loginCheckIn)) {
        checkIn__login.style.background = '#9bec9b';    // green
        flag_loginCheckIn = true;
    } else if(loginCheckIn.length === 0){
        checkIn__login.style.background = 'white';  
        flag_loginCheckIn = false;
    } else {
        checkIn__login.style.background = '#d07e85';    // red
        flag_loginCheckIn = false;
    }

    if(flag_loginCheckIn && flag_passwordCheckIn && flag_emailCheckIn) {
        checkIn__registrationButton.disabled = false;
    }
});


checkIn__password.addEventListener('input', function(event) {
    passwordCheckIn = event.target.value;

    // регулярка вне функции

    if(regExp_password.test(passwordCheckIn)) {
        checkIn__password.style.background = '#9bec9b';    // green
        flag_passwordCheckIn = true;
    } else if(passwordCheckIn.length === 0) {
        checkIn__password.style.background = 'white'; 
        flag_passwordCheckIn = false;   
    } else {
        checkIn__password.style.background = '#d07e85';    // red
        flag_passwordCheckIn = false;
    }

    if(flag_loginCheckIn && flag_passwordCheckIn && flag_emailCheckIn) {
        checkIn__registrationButton.disabled = false;
    }
});


checkIn__email.addEventListener('input', function(event) {
    emailCheckIn = event.target.value;

    // регулярка вне функции

    if(regExp_email.test(emailCheckIn)) {
        checkIn__email.style.background = '#9bec9b';    // green
        flag_emailCheckIn = true;
    } else if(emailCheckIn.length === 0) {
        checkIn__email.style.background = 'white';    
        flag_emailCheckIn = false;
    } else {
        checkIn__email.style.background = '#d07e85';    // red
        flag_emailCheckIn = false;
    }

    if(flag_loginCheckIn && flag_passwordCheckIn && flag_emailCheckIn) {
        checkIn__registrationButton.disabled = false;
    }
});


checkIn__registrationButton.addEventListener('click', function(event) {
    var block_forms__account = document.querySelector('.block-forms__account');
    var block_forms__checkIn = document.querySelector('.block-forms__checkIn');
    var block_forms__account_welcom = document.querySelector('.block-forms__account_welcom');

    window.localStorage.setItem(loginCheckIn, passwordCheckIn);

    block_forms__account.classList.remove('display_none');
    block_forms__checkIn.classList.add('display_none');
    block_forms__account_welcom.textContent = `Добро пожаловать ${loginCheckIn}`;               //_____________________________________

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

var block_forms__account_out_button = document.querySelector('.block-forms__account-out');
var block_forms__account_delete_button = document.querySelector('.block-forms__account-delete');

block_forms__account_out_button.addEventListener('click', function() {
    var block_forms__account = document.querySelector('.block-forms__account');
    var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');

    block_forms__account.classList.add('display_none');
    block_forms__toComeIn.classList.remove('display_none');
});

block_forms__account_delete_button.addEventListener('click', function() {
    window.localStorage.removeItem(loginCheckIn);

    var block_forms__account = document.querySelector('.block-forms__account');
    var block_forms__toComeIn = document.querySelector('.block-forms__toComeIn');

    block_forms__account.classList.add('display_none');
    block_forms__toComeIn.classList.remove('display_none');
});


// Добро пожаловать finish_______________________________________________________________________________________________




// Пользователь не найден start_______________________________________________________________________________________________
var block_forms__userIsNotFound_button = document.querySelector('.block-forms__userIsNotFound_button');

block_forms__userIsNotFound_button.addEventListener('click', function(event) {
    var block_forms__userIsNotFound = document.querySelector('.block-forms__userIsNotFound');
    var block_forms__checkIn = document.querySelector('.block-forms__checkIn');

    block_forms__userIsNotFound.classList.add('display_none');
    block_forms__checkIn.classList.remove('display_none');
});

// Пользователь не найден finish_______________________________________________________________________________________________