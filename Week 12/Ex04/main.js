let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");

let div1T = div1.title;
let div2T = div2.title;

let cont1 = div1.innerText;
let cont2 = div2.innerText;

div1.title = div2T;
div2.title = div1T;
div1.innerText = cont2;
div2.innerText = cont1;
