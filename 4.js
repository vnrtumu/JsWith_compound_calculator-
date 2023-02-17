// output = "1, 2., 3, 4, 5,  7, 8, 9";
var input = [1, 2, 2, 3, 4, 10, 7, 9, 5, 7, 8];
var newOut = [];

for (let i = 0; i < input.length; i++) {
  if (!newOut.includes(input[i])) {
    newOut.push(input[i]);
  }
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort(newOut));
