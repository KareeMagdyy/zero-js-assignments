let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => -ele);
console.log(nums);
