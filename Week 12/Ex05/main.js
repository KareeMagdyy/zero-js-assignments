let imgCheck = document.querySelectorAll("img");

for (let i = 0; i < imgCheck.length; i++) {
  if (imgCheck[i].hasAttribute("alt")) {
    imgCheck[i].alt = "old";
  } else {
    imgCheck[i].alt = "Elzero New";
  }
}
