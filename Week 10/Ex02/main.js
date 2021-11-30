let myString = "EElllzzzzzzzeroo";

let clearDubs = myString
  .split("")
  .filter(function (item, index, arr) {
    return arr.indexOf(item) == index;
  })
  .reduce((a, b) => a + b);

console.log(clearDubs);
