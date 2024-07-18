const userName = "admin";
const userPassword = "password";

const loginFrom = document.getElementById("loginForm");
loginFrom.addEventListener("submit", function (event) {
  event.preventDefault();
  const enteredUserName = document.getElementById("username").value;
  const enteredUserPassword = document.getElementById("password").value;

  if (enteredUserName === userName && enteredUserPassword === userPassword) {
    alert("Войти удалось успешно!");
  } else {
    alert("Неверные данные для входа =-(");
  }
});
