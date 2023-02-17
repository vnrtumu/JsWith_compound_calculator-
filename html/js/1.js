// input: const inpArr = ["mxa", "imn", "mxaimnu", "miinmmu"];
// output: {
//   "a": 2, "i": 4, "m": 7, "n": 3, "u": 2, "x": 2
// }

const inpArr = ["mxa", "imn", "mxaimnu", "miinmmu"];

var out = [];
for (let i = 0; i < inpArr.length; i++) {
  out.push(inpArr[i].split(""));
}
const merge3 = out.flat();

var output = merge3.reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

// console.log(JSON.stringify(output));
// → '{"b":"foo","c":"bar","a":"baz"}'

const ordered = Object.keys(output)
  .sort()
  .reduce((obj, key) => {
    obj[key] = output[key];
    return obj;
  }, {});

console.log(ordered);

// console.log(JSON.stringify(ordered));

// console.log(output);
