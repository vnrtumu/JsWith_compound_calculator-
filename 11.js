var _ = require("lodash");
var input = ["hello", "venkat", "hello", "world"];
var newOut = [];

for (let i = 0; i < input.length; i++) {
  if (
    !newOut.includes(input[i]) ||
    !newOut.includes(_.capitalize(input[i])) ||
    !newOut.includes(_.camelCase(input[i]))
  ) {
    console.log("to Lower case", _.camelCase(input[i]));
    console.log("to Camel case", _.capitalize(input[i]));
    console.log("Normal", input[i]);
    newOut.push(input[i]);
  }
}

console.log(newOut);

// let array = [6, 9, 15, 6, 13, 9, 11, 15];
// let index = 0,
//   newArr = [];
// const length = array.length; // to get length of array
// function findDuplicates(arr) {
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (arr[i] === arr[j]) {
//         newArr[index] = arr[i];
//         index++;
//       }
//     }
//   }
//   return newArr;
// }

// console.log(findDuplicates(array));

// var newTest = array.filter((currentValue, currentIndex) => {
//   array.indexOf(currentValue) !== currentIndex;
// });
// console.log(newTest);
