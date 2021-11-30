let myArray = ["E", "l", "z", ["e", "r"], "o"];

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flatten(myArray).join(""));
