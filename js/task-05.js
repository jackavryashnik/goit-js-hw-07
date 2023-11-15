function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function chaneColor() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
}

const btn = document.querySelector('.change-color');

btn.addEventListener('click', chaneColor);
