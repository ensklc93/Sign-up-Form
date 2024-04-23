const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm') 
const form = document.querySelector('#myForm')
const span = document.querySelector('span')

form.addEventListener('submit', (e) => {
    if(password.value !== passwordConfirm.value) {
        password.setAttribute('style', 'outline:1px solid red');
        passwordConfirm.setAttribute('style', 'outline:1px solid red');
        span.setAttribute('style', 'position: absolute; top: calc(100% + 1px); left: 0.5px; color:red');
        span.innerHTML="*Password does not match"
        e.preventDefault();
        return;
    }
})

password.addEventListener('click', () => {
    if(password.value != "" && span.innerHTML == "*Password does not match") {
        password.value = "";
        passwordConfirm.value = "";
        span.innerHTML ="";
        span.removeAttribute('style');
    }
})

passwordConfirm.addEventListener('click', () => {
    if(passwordConfirm.value != "" && span.innerHTML == "*Password does not match") {
        passwordConfirm.value = "";
        password.value = "";
        span.innerHTML =""
        span.removeAttribute('style')
    }
})
