let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let zero = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (a, b) {
    return a + b;
  });

console.log(zero);
