
const categories = document.querySelectorAll(".item")
    console.log(`Number of a categories: ${categories.length}`)
    
    categories.forEach((category) => {
        const nameCategory = category.querySelector("h2").textContent;
        const quantityElements = category.querySelectorAll("li").length;
        console.log(`Category: ${nameCategory}`);
        console.log(`Elements: ${quantityElements}`);  
    });