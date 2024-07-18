const colorBlock = document.getElementById("colorBlock");

colorBlock.addEventListener("mouseover", function () {
  colorBlock.classList.remove("blue-block");
  colorBlock.classList.add("red-block");
});

colorBlock.addEventListener("mouseout", function () {
  colorBlock.classList.remove("red-block");
  colorBlock.classList.add("blue-block");
});

const colorBlockTwo = document.getElementById("colorBlockTwo");
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  colorBlockTwo.style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
});
