let start = 10;
let end = 0;
let stop = 3;

//Answer

for (let i = start; i >= stop; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else {
    console.log(i);
  }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
