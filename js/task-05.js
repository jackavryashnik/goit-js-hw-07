function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
}

const btn = document.querySelector('.change-color');

btn.addEventListener('click', changeColor);
