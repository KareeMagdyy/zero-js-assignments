document.body.style.cssText = `display:flex; justify-content:center;align-items:center; height: 100vh`;
const countDiv = document.createElement("div");
countDiv.textContent = 10;
countDiv.style.cssText = `text-align:center; font-size: 6rem;`;
document.body.appendChild(countDiv);

let counter = setInterval(() => {
  countDiv.textContent -= 1;
  if (countDiv.textContent === "5") {
    window.open(
      "https://www.Elzero.org",
      "",
      "width=400,height=400,top= 20,left=10"
    );
  }
  if (countDiv.textContent === "0") {
    clearInterval(counter);
  }
}, 1000);
