function popup() {
  const div = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "X";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome";

  const para = document.createElement("p");
  para.textContent = "Welcome To Elzero Web School";

  div.appendChild(button);
  div.appendChild(h1);
  div.appendChild(para);

  //Styling
  document.body.style.cssText = `display: flex; justify-content: center; align-items: center; height: 100vh;`;
  div.style.cssText = `width: 50%; text-align: center; border: 1px #888 solid; background-color:#F5F3F4; position:fixed; z-index: 100; padding: 30px;`;
  button.style.cssText = `position: absolute; right: -17.5px; top:-17.5px; background-color:red; border:none; border-radius:50%; width: 35px; height: 35px; cursor: pointer; font-weight:bold; font-size: 1.2rem;color:#fff;`;
  h1.style.fontSize = "3rem";
  para.style.fontSize = "1.5rem";

  button.onclick = () => (div.style.display = "none");

  document.body.appendChild(div);
}

setTimeout(popup, 5000);
