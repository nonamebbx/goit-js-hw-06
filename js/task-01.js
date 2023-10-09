const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const categoryName = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
}