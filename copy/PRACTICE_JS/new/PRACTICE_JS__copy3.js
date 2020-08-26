var toComeIn__login = document.querySelector('[name="toComeIn__login"]');
var toComeIn__password = document.querySelector('[name="toComeIn__password"]');

toComeIn__login.addEventListener('input', function(event) {
    var login = event.target.value;
    
    var regExp = /^[\S]{6,10}$/

    if(regExp.test(login)) {
        toComeIn__login.style.background = '#9bec9b';    // green
    } else if(login.length === 0){
        toComeIn__login.style.background = 'white';  
    } else {
        toComeIn__login.style.background = '#d07e85';    // red
    }
});


toComeIn__password.addEventListener('input', function(event) {
    var password = event.target.value;

    var regExp = /^\w{6,10}$/

    if(regExp.test(password)) {
        toComeIn__password.style.background = '#9bec9b';    // green
    } else if(password.length === 0) {
        toComeIn__password.style.background = 'white';    
    } else {
        toComeIn__password.style.background = '#d07e85';    // red
    }

    console.log(password.length)
});