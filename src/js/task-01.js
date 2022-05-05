const elements = document.querySelectorAll('li.item');
console.log('Number of categories:', elements.length);
elements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`); 
});