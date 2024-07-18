const counterBlock = document.getElementById("counterBlock");
const clickButton = document.getElementById("clickerButton");
const counterWrapper = document.getElementById("counterWrapper");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");
let clickCount = 0;

clearButton.addEventListener("click", function () {
  location.reload();
});

clickButton.addEventListener("click", function () {
  clickCount++;
  counterBlock.textContent = clickCount;

  if (clickCount % 5 === 0) {
    const randomColor = generateRandomColor();
    counterWrapper.style.backgroundColor = randomColor;
  }

  if (clickCount === 10) {
    message.textContent = "Поздравляем! Вы достигли 10 кликов!";
  }

  if (clickCount > 10) {
    message.textContent = "Ого! Дальше больше!";
  }

  if (clickCount > 99) {
    message.textContent = "Хвитит...";
  }
});

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
