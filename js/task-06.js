const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let content = '';

  for (let i = 0; i < amount; i++) {
    content += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px;
    background-color: ${getRandomHexColor()}"></div>`;
  }

  container.insertAdjacentHTML('beforeend', content);
}

function createElements() {
  const elementsNumber = input.value;
  container.innerHTML = '';

  if (Number(elementsNumber) && elementsNumber >= 1 && elementsNumber <= 100) {
    createBoxes(elementsNumber);
    elementsNumber = '';
  }
}

function destroyBoxes() {
  container.innerHTML = '';
}

createBtn.addEventListener('click', createElements);
destroyBtn.addEventListener('click', destroyBoxes);
