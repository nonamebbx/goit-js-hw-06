const buttons = document.querySelectorAll('button'); // отримуємо всі кнопки з документу
const counterValue = document.querySelector('#value'); // отримуємо елемент з id="value"

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = parseInt(counterValue.textContent); // отримуємо поточне значення counterValue і перетворюємо його в число
        if (button.classList.contains('increment')) { // якщо кнопка має клас increment
            value++; // збільшуємо значення на одиницю
        } else if (button.classList.contains('decrement')) { // якщо кнопка має клас decrement
            value--; // зменшуємо значення на одиницю
        }
        counterValue.textContent = value; // записуємо нове значення в counterValue
    });
});
