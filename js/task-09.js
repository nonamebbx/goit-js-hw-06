function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const valueColor = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')
const colorBackgraund = document.querySelector('body')

btnChangeColor.addEventListener('click', onBtnChangeColorBackgraund)
function onBtnChangeColorBackgraund(event) {

  const colorForEl = getRandomHexColor();
  colorBackgraund.style.backgroundColor = colorForEl;
  valueColor.textContent = colorForEl;
};