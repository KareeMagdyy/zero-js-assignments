const myEle = document.body.children;

for (let i = 0; i < myEle.length; i++) {
  myEle[i].style.cssText = `cursor:pointer;font-size:3rem;margin:0;padding:0`;
  myEle[i].onclick = () => console.log(`This is ${myEle[i].localName}`);
}
