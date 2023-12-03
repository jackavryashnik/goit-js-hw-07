const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const inputHandler = event => {
  output.textContent = event.currentTarget.value.trim() || 'Anonymous';
};

input.addEventListener('input', inputHandler);
