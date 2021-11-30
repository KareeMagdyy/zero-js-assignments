function getDetails(zName, zAge, zCountry) {
  let name = zName.split(" ");
  let age = zAge.split(" ");
  let c = zCountry.split("");
  function namePattern(zName) {
    // Write Your Code Here
    return `${name[0]} ${name[1][0].toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return `Your Age Is ${age[0]}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `You Live In ${c[0]}${c[1].toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
