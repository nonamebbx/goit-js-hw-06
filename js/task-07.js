const text = document.querySelector('#text');
const size = document.querySelector('#font-size-control');

size.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
});