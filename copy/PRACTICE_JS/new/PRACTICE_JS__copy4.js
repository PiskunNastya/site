var loginEnter;
var passwordEnter;

// Войти start___________________

var toComeIn__login = document.querySelector('[name="toComeIn__login"]');
var toComeIn__password = document.querySelector('[name="toComeIn__password"]');

toComeIn__login.addEventListener('input', function(event) {
    loginEnter = event.target.value;
    
    var regExp = /^[\S]{6,10}$/

    if(regExp.test(loginEnter)) {
        toComeIn__login.style.background = '#9bec9b';    // green
    } else if(loginEnter.length === 0){
        toComeIn__login.style.background = 'white';  
    } else {
        toComeIn__login.style.background = '#d07e85';    // red
    }
});


toComeIn__password.addEventListener('input', function(event) {
    passwordEnter = event.target.value;

    var regExp = /^\w{6,10}$/

    if(regExp.test(passwordEnter)) {
        toComeIn__password.style.background = '#9bec9b';    // green
    } else if(passwordEnter.length === 0) {
        toComeIn__password.style.background = 'white';    
    } else {
        toComeIn__password.style.background = '#d07e85';    // red
    }
});



// Войти finish___________________





// Форма регистрации start___________________
var checkIn__login = document.querySelector('[name="checkIn__login"]');
var checkIn__password = document.querySelector('[name="checkIn__password"]');
var checkIn__email = document.querySelector('[name="checkIn__email"]');

var loginCheckIn;
var passwordCheckIn;
var emailCheckIn;

// console.log(checkIn__login)
// console.log(checkIn__password)
// console.log(checkIn__email)

checkIn__login.addEventListener('input', function(event) {
    loginCheckIn = event.target.value;
    
    var regExp = /^[\S]{6,10}$/

    if(regExp.test(loginCheckIn)) {
        checkIn__login.style.background = '#9bec9b';    // green
    } else if(loginCheckIn.length === 0){
        checkIn__login.style.background = 'white';  
    } else {
        checkIn__login.style.background = '#d07e85';    // red
    }
});


checkIn__password.addEventListener('input', function(event) {
    passwordCheckIn = event.target.value;

    var regExp = /^\w{6,10}$/

    if(regExp.test(passwordCheckIn)) {
        checkIn__password.style.background = '#9bec9b';    // green
    } else if(passwordCheckIn.length === 0) {
        checkIn__password.style.background = 'white';    
    } else {
        checkIn__password.style.background = '#d07e85';    // red
    }
});

checkIn__email.addEventListener('input', function(event) {
    emailCheckIn = event.target.value;

    var regExp = /^\w+@.+$/

    if(regExp.test(emailCheckIn)) {
        checkIn__email.style.background = '#9bec9b';    // green
    } else if(emailCheckIn.length === 0) {
        checkIn__email.style.background = 'white';    
    } else {
        checkIn__email.style.background = '#d07e85';    // red
    }
});

// Форма регистрации finish___________________