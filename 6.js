// var str = maxChar("abcccccccd") === "c"

function maxChar(str) {
  let max = 0;
  let maxChar = "";
  var out = str.split("");
  const output = out.reduce(function (acc, curr) {
    if (acc[curr]) {
      acc[curr] = ++acc[curr];
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  for (let char in output) {
    if (output[char] > max) {
      max = output[char];
      maxChar = char;
    }
  }

  return maxChar;
}


