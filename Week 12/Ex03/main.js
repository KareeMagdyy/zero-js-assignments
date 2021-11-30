let curencyInput = document.querySelector("input[name = 'dollar']");
let result = document.querySelector(".result");

function conversion() {
  let cov = curencyInput.value * 15.6;
  return cov.toFixed(2);
}

curencyInput.addEventListener("input", () => {
  result.innerText = `{${
    curencyInput.value
  }} USD Dollar = {${conversion()}} Egyptian Pound`;
});
