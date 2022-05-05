const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const findUl = document.querySelector('ul');
const makeLi = () => { 
  const liPot = document.createElement('li');
  liPot.textContent = 'Potatoes';
  liPot.classList.add('item');
  const liMush = document.createElement('li');
  liMush.textContent = 'Mushrooms';
  liMush.classList.add('item');
  const liGar = document.createElement('li');
  liGar.textContent = 'Garlic';
  liGar.classList.add('item');
  const liTom = document.createElement('li');
  liTom.textContent = 'Tomatos';
  liTom.classList.add('item');
  const liHerbs = document.createElement('li');
  liHerbs.textContent = 'Herbs';
  liHerbs.classList.add('item');
  const liCond = document.createElement('li');
  liCond.textContent = 'Condiments';
  liCond.classList.add('item');
  findUl.append(liPot, liMush, liGar, liTom, liHerbs, liCond);
  };
makeLi();