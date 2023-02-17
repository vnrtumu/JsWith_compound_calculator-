// var str = "hi my self venkata";

// var out = str.split(" ");
// var newArr = [];

// var arr = [12, 34, 56, 75, 445, 75];

var arra = [12, 23, 54, 54, 23, 56, 223, 567];

function bSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
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

var out = bSort(arra);
console.log(out[out.length - 2]);
