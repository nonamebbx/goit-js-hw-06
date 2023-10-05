const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
document.createElement("ul"); 
const list = document.querySelector("#ingredients");
const elements = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});