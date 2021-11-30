function showInfo(
  user = "Unknown",
  age = "Unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome: ${user}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Rate: $${rate}`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(", ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (skills.length > 0) {
      document.write(`<p>Skills: Hidden</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Kareem", 28, 40, "No", "HTML", "CSS", "JS");
