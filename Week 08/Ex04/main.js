function checkStatus(a, b, c) {
  // Your Code Here
  if (
    typeof a === "string" &&
    typeof b === "number" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof a === "number" &&
    typeof b === "string" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof a === "boolean" &&
    typeof b === "number" &&
    typeof c === "string"
  ) {
    if (a === true) {
      console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof a === "boolean" &&
    typeof b === "string" &&
    typeof c === "number"
  ) {
    if (a === true) {
      console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`
      );
    }
  } else {
    console.log("Invalid Input");
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
