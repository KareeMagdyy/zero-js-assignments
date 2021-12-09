// global Selectors
const form = document.querySelector("form");
const userName = document.getElementById("user");
const password = document.getElementById("password");
const email = document.getElementById("email");
const select = document.getElementById("select");
const selectedOpt = document.querySelectorAll("#select option");
const resetBtn = document.getElementById("reset");

//Event Listeners
//preventDefault
form.onsubmit = (e) => e.preventDefault();
//adding values to SessionStorage
userName.addEventListener("blur", addToSessionUser);
password.addEventListener("blur", addToSessionPass);
email.addEventListener("blur", addToSessionEmail);
select.addEventListener("change", addToSessionSelection);
//reset fields and clear storage
resetBtn.addEventListener("click", resetForm);

//functions
//adding values to session storage

function addToSessionUser() {
  sessionStorage.setItem("userName", userName.value);
}
function addToSessionPass() {
  sessionStorage.setItem("password", password.value);
}
function addToSessionEmail() {
  sessionStorage.setItem("email", email.value);
}
function addToSessionSelection() {
  sessionStorage.setItem("selection", select.value);
}

//Reset Fields
function resetForm() {
  sessionStorage.clear();
  userName.value = "";
  password.value = "";
  email.value = "";
  select.value = 1;
}

//load content from  Session Storage
if (sessionStorage.getItem("userName")) {
  userName.value = sessionStorage.getItem("userName");
}
if (sessionStorage.getItem("password")) {
  password.value = sessionStorage.getItem("password");
}
if (sessionStorage.getItem("email")) {
  email.value = sessionStorage.getItem("email");
}
if (sessionStorage.getItem("selection")) {
  select.value = sessionStorage.getItem("selection");
}
