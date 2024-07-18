const body = document.querySelector("body");
const signUpForm = document.querySelector("form");
const userNameInput = document.querySelector(".username");
const lastNameInput = document.querySelector(".lastname");
const emailInput = document.querySelector(".email");

const passwordInput = document.querySelector(".password");

let users = JSON.parse(localStorage.getItem("users"));
if (users === null) {
  users = [];
}
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if(
    userNameInput.value &&
    lastNameInput.value &&
    emailInput &&
    passwordInput.value
  ){

    const newUser = {
      name: userNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

  }  else {
    console.log ("pustoe pole u vas")
  }

});