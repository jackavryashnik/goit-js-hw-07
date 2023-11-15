const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const inputHendler = event => {
  output.textContent = event.currentTarget.value || 'Anonymous';
};

input.addEventListener('input', inputHendler);
