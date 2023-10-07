const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//Надо изображения загрузить на вкладку HTML и сделать так, чтобы они отображались в виде галереи изображений.
//Для этого необходимо создать шаблонную строку и добавить в нее элементы массива images.
//Для создания разметки можно использовать функцию createGalleryItem(images), которая будет создавать и возвращать разметку элемента галереи по указанному шаблону.
//Разметка элемента галереи должна состоять из тегов li и img.
//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
const galleryList = document.querySelector(".gallery");
const createGalleryItem = (images) => {
  return images.map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="320" height="240"></li>`;
  });
};
const elements = createGalleryItem(images).join("");
galleryList.insertAdjacentHTML("afterbegin", elements);
galleryList.setAttribute("style", "list-style:none; display: flex; justify-content: space-between;"); 
