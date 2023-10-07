const value = document.querySelector('#value');
let counterValue = 0;

<<<<<<< HEAD
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
=======
let counter = 0; // ініціалізуємо змінну counter значенням 0

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.action === 'increment') { // якщо кнопка має data-action="increment"
            counter++; // збільшуємо значення на одиницю
        } else if (button.dataset.action === 'decrement') { // якщо кнопка має data-action="decrement"
            counter--; // зменшуємо значення на одиницю
        }
        counterValue.textContent = counter; // записуємо нове значення в counterValue
    });
});
>>>>>>> fd79ed448ba41503ccb8d4ca80f0bc4a629a31a5
