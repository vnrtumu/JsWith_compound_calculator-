var str = "aaabbc";
//{a:3, b:2, c:1}
var out = str.split("");

const output = out.reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(output);
