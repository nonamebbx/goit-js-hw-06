const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    if (nameInput.value.trim() !== '') {
        return nameOutput.textContent = event.currentTarget.value;
    } else {
        return nameOutput.textContent = 'Anonymous';
    }
});
