let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

//While Loop not the best option here.
while (index < friends.length) {
  index++;
  if (
    friends[index][friends.indexOf("Ahmed")] === "A" ||
    typeof friends[index] === "number"
  ) {
    continue;
  }
  console.log(`${(counter += 1)} => ${friends[index]}`);
}

//For Loop better option for this example.
for (; index < friends.length; index++) {
  if (
    friends[index][friends.indexOf("Ahmed")] === "A" ||
    typeof friends[index] === "number"
  ) {
    continue;
  }
  console.log(`${(counter += 1)} => ${friends[index]}`);
}

// Output
("1 => Sayed");
("2 => Mahmoud");
