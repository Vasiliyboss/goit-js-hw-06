const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('input', () => {
  if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
  else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
}
});