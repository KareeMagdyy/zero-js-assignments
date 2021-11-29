const addClassInput = document.querySelector(".classes-to-add");
const removeClassInput = document.querySelector(".classes-to-remove");
const currentEle = document.querySelector("[title='Current']");
const output = document.querySelector(".classes-list div");

function addAndRemove() {
  document.querySelectorAll("span").forEach((el) => el.remove());

  for (let i = 0; i < this.value.split(" ").length; i++) {
    if (addClassInput.value.length > 0) {
      currentEle.classList.add(addClassInput.value.toLowerCase().split(" ")[i]);
    }
    if (removeClassInput.value.length > 0) {
      currentEle.classList.remove(
        removeClassInput.value.toLowerCase().split(" ")[i]
      );
    }
  }
  addSpan();
  this.value = "";
}

function addSpan() {
  if (currentEle.classList.length === 0) {
    output.textContent = "No Classes To Show!";
  } else {
    output.textContent = "";
    currentEle.classList.value
      .split(" ")
      .sort()
      .forEach((ele) => {
        let newSpan = document.createElement("span");
        newSpan.append(ele);
        output.append(newSpan);
      });
  }
}

addSpan();
addClassInput.onblur = addAndRemove;
removeClassInput.onblur = addAndRemove;
