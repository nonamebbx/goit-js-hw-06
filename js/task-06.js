const validInput = document.querySelector('#validation-input');
const inputLength = validInput.getAttribute('data-length');

validInput.addEventListener('blur', (event) => {
     validInput.classList.remove('valid', 'invalid');
    if (event.currentTarget.value.length === Number(inputLength)) {
        validInput.classList.add('valid');
    }
    else {
        validInput.classList.add('invalid');
    }
});