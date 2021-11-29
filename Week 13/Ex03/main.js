document.querySelectorAll("p")[0].remove();

let divEl = document.querySelector(".our-element");

let newDiv = document.createElement("div");
let newerDiv = document.createElement("div");

newDiv.classList.add("start");
newerDiv.setAttribute("data-value", "Start");
newDiv.title = "Start Element";
newDiv.textContent = "Start";

newerDiv.classList.add("end");
newerDiv.setAttribute("data-value", "End");
newerDiv.title = "End Element";
newerDiv.textContent = "End";

divEl.before(newDiv);
divEl.after(newerDiv);
