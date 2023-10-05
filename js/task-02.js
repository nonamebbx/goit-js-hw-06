const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const arrayE1 = [];

for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredients[i];
  arrayE1.push(item);
}

ingredientsList.append(...arrayE1);