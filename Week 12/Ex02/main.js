let img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  console.log(img[i]);
  img[i].style.backgroundColor = `rgb(${i}5,${i}0,${i}0)`;
  img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img[i].alt = "Elzero Logo";
}
