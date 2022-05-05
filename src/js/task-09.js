
function handleChangeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 };
const buttonEl = document.querySelector('button.change-color'); 
buttonEl.addEventListener('click', handleChangeBackgroundColor);
const spanEl = document.querySelector('.color');

// console.dir(buttonEl);
