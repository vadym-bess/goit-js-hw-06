
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonRef: document.querySelector(".change-color"),
  spanRef: document.querySelector(".color"),
};

refs.buttonRef.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.spanRef.textContent = color;
}