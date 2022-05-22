const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const findUl = document.querySelector('#ingredients')

const elements = ingredients.map(option => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = option;
  ingredientEl.classList.add('item');
  return ingredientEl;
});
findUl.append(...elements);
