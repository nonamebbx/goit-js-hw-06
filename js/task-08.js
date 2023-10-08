const form = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit)
   
   
function onFormSubmit(event) { 
    event.preventDefault();
    
   for (let i = 0; i < inputEl.length; i++) {
    if (inputEl[i].value.trim() === '') {
        alert("Error!!! при відправлені форми, поля не можуть бути пустими.");
        break;
    }
    };
  
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password
    }

    console.log(formData);

    event.currentTarget.reset()
};
