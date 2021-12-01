const numRange = prompt("Print Number From – To", "Example 5-10");
let start;
let end;
let nums = numRange.split("-");

if (Math.abs(nums[0]) < Math.abs(nums[1])) {
  start = Math.abs(nums[0]);
  end = Math.abs(nums[1]);
} else {
  end = Math.abs(nums[0]);
  start = Math.abs(nums[1]);
}

function printNums(userInput) {
  for (let i = start; i <= end; i++) {
    const divEl = document.createElement("div");
    divEl.textContent = i;
    divEl.style.cssText = `font-size: 2rem; font-weight:bold;`;
    document.body.appendChild(divEl);
  }
}

printNums(numRange);
