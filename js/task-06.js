function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    container.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px;
      background-color: ${getRandomHexColor()}"></div>`,
    );
  }
}

function createElements() {
  container.innerHTML = '';
  if (Number(input.value) && input.value >= 0 && input.value <= 100) {
    createBoxes(input.value);
  }
  input.value = '';
}

function destroyBoxes() {
  container.innerHTML = '';
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');

createBtn.addEventListener('click', createElements);
destroyBtn.addEventListener('click', destroyBoxes);
