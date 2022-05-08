const inputEl = document.querySelector('#validation-input');
console.log(inputEl.dataset.length);
inputEl.addEventListener('input', () => {
  if (inputEl.value.length <= inputEl.dataset.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
  else {inputEl.classList.add('invalid');}
});