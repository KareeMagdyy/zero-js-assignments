let start = 0;
let swappedName = "elZerO";
let outputStringArray = [];
let outputString = "";
let newChar = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toUpperCase()) {
    newChar = swappedName[i].toLowerCase();
  } else {
    newChar = swappedName[i].toUpperCase();
  }
  outputString += newChar;
  outputStringArray.push(newChar);
}
console.log(outputString);
console.log(outputStringArray.join(""));

// Output
// "ELzERo"
