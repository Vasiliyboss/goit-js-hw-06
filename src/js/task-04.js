let counterValue = 0;
const handleDecrement = () => {
    counterValue -= 1;
    valueButton.textContent = counterValue;
};
const handleIncrement = () => {
    counterValue += 1;
    valueButton.textContent = counterValue;
};

const valueButton = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
decrementButton.addEventListener('click', handleDecrement);
incrementButton.addEventListener('click', handleIncrement);
handleDecrement();
handleIncrement();