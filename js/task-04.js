const value = document.querySelector('#value');
let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
