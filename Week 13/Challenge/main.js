//Global Styling
document.querySelector("html").style.boxSizing = "border-box";
document.body.style.cssText = `margin:0;background-color:#ECECEC; font-family: 'Tahoma', arial;`;

//Navigation Start
const header = document.createElement("header");
header.classList.add("website-head");
header.style.cssText = `display:flex; padding:20px; background-color: #fff; justify-content:space-between; align-items:center`;
document.body.appendChild(header);

const logo = document.createElement("div");
logo.classList.add("logo");
logo.title = "Website Logo";
logo.textContent = "Zero";
logo.style.cssText = `color: #23a96f; font-weight:bold; font-size:1.625rem;`;
header.append(logo);

const ulMenu = document.createElement("ul");
ulMenu.className = "menu";
ulMenu.style.cssText = `display:flex; gap:2.5rem;list-style:none; font-size:1.2rem; margin:0;`;
header.appendChild(ulMenu);

const navLinks = ["Home", "About", "Service", "Contact"];

navLinks.forEach((link) => {
  let menuLi = document.createElement("li");
  let menuA = document.createElement("a");
  menuA.href = `#${link.toLocaleLowerCase()}`;
  menuA.textContent = link;
  menuA.style.cssText = `text-decoration: none; color: black;`;
  menuA.addEventListener("mouseenter", () => (menuA.style.color = "#888"));
  menuA.addEventListener("mouseleave", () => (menuA.style.color = "black"));
  menuLi.appendChild(menuA);
  ulMenu.appendChild(menuLi);
});
//Navigation End

// Content Start
const contentSection = document.createElement("section");
contentSection.className = "content";
contentSection.style.cssText = `padding:20px;display:flex;flex-wrap:wrap;justify-content:center;gap:1.3rem;min-height:calc(100vh - 175px);`;
document.body.appendChild(contentSection);

for (let i = 1; i < 16; i++) {
  const productDiv = document.createElement("div");
  const productSpan = document.createElement("span");
  const productText = document.createTextNode("Product");
  productDiv.className = "product";
  productDiv.style.cssText = `padding: 20px; background-color:#fff;border:1px solid #ddd;border-radius:8px; text-align:center; color:#888; width: calc((100% - 170px) / 3)`;
  productSpan.textContent = i;
  productSpan.style.cssText = `color:#000; font-size: 1.9rem; display: block; padding-bottom: 15px; font-weight: bold`;
  productDiv.appendChild(productSpan);
  productDiv.appendChild(productText);
  contentSection.appendChild(productDiv);
}
// Content End

//Footer Start
const footerSection = document.createElement("footer");
footerSection.className = "footer";
footerSection.textContent = "CopyRight 2021";
footerSection.style.cssText = `background-color:#23a96f; color:#000;font-size:1.5rem; text-align: center; padding:15px`;
document.body.appendChild(footerSection);
