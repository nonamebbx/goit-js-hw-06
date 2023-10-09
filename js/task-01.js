document.addEventListener('DOMContentLoaded', function() {

    const categoriesList = document.getElementById('categories');
  

    const categories = categoriesList.querySelectorAll('.item');
  

    let categoryCount = 0;
    let elementCount = 0;
  

    console.log(`Number of categories: ${categories.length}`);
  
 
    categories.forEach((category) => {
   
      categoryCount++;
  
    
      const categoryName = category.querySelector('h2').textContent;
  
 
      const elements = category.querySelectorAll('li');
  
 
      elementCount += elements.length;
  
    
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${elements.length}`);
    });
  });
  