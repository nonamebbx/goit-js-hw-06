const buttons = document.querySelectorAll('button'); // отримуємо всі кнопки з документу
const counterValue = document.querySelector('#value'); // отримуємо елемент з id="value"

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
