const text = document.querySelector('#text');
const size = document.querySelector('#font-size-control');

size.addEventListener('input', (event) => {
    text.style.transition = 'font-size 0.5s linear';
    text.style.fontSize = `${event.currentTarget.value}px`;
});

size.addEventListener('change', (event) => {
    text.style.transition = 'none';
    text.style.fontSize = `${event.currentTarget.value}px`;
});