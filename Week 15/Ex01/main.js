const fontSizeSelect = document.getElementById("font-size");
const fontSizeOpt = document.querySelectorAll("#font-size option");
const fontSelector = document.getElementById("font");
const fontOpt = document.querySelectorAll("#font option");
const colorSelector = document.getElementById("color");
const colorOpt = document.querySelectorAll("#color option");
const resetBtn = document.querySelector(".reset-btn");

// build fontSize Options
for (let i = 16; i <= 30; i++) {
  const option = document.createElement("option");
  option.textContent = i;
  option.setAttribute("value", `${i}px`);
  fontSizeSelect.appendChild(option);
}

//Event Listeners
fontSelector.addEventListener("change", fontFamily);
colorSelector.addEventListener("change", bgColor);
fontSizeSelect.addEventListener("change", fontSize);
resetBtn.addEventListener("click", resetLocalStorage);

//functions
//Change Font-Family
function fontFamily() {
  document.body.style.fontFamily = fontSelector.value;
  localStorage.setItem("fontFamily", fontSelector.value);
}

//Change BgColor
function bgColor() {
  document.body.style.backgroundColor = colorSelector.value;
  localStorage.setItem("bgColor", colorSelector.value);
}

//Change Font-Size
function fontSize() {
  document.body.style.fontSize = fontSizeSelect.value;
  localStorage.setItem("fontSize", fontSizeSelect.value);
}

// localStorage
if (localStorage.getItem("bgColor")) {
  document.body.style.backgroundColor = localStorage.getItem("bgColor");
  colorOpt.forEach((opt) => {
    opt.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${localStorage.getItem("bgColor")}']`)
    .setAttribute("selected", true);
}

if (localStorage.getItem("fontFamily")) {
  document.body.style.fontFamily = localStorage.getItem("fontFamily");
  fontOpt.forEach((opt) => {
    opt.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${localStorage.getItem("fontFamily")}']`)
    .setAttribute("selected", true);
}

if (localStorage.getItem("fontSize")) {
  document.body.style.fontSize = localStorage.getItem("fontSize");
  fontOpt.forEach((opt) => {
    opt.removeAttribute("selected");
  });
  document
    .querySelector(`[value='${localStorage.getItem("fontSize")}']`)
    .setAttribute("selected", true);
}

//reset LocalStorage
function resetLocalStorage() {
  localStorage.clear();
  location.reload();
}
