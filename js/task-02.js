const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");

const arrayEl = [];

for (let i = 0; i < ingredients.length; i++) {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredients[i];
  arrayEl.push(ingredientEl);
}

ingredientList.append(...arrayEl)