const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInputChange = (event) => {
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }
}

nameInput.addEventListener('input', onInputChange);
