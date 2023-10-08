const text = document.querySelector('#text');
const size = document.querySelector('#font-size-control');

size.value = 16; // set initial value to 16
text.style.fontSize = `${size.value}px`; // set initial font size to 16px
size.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});