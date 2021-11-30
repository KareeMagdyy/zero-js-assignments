/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Sammy",
];
let count = 3;
let memberNum = 1;

document.write(`<h2>We Have ${count} Admins</h2> <hr>`);
for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} is ${myAdmins[i]} </p>`);
  document.write(`<h3>Team Members</h3>`);
  for (let k = 0; k < myEmployees.length; k++) {
    if (myAdmins[i][0] === myEmployees[k][0]) {
      document.write(`<p>- ${memberNum++} ${myEmployees[k]}</p>`);
    }
  }
  memberNum = 1;

  document.write(`</div>`);
  document.write(`<hr>`);
}
