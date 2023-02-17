var _ = require("lodash");
var str = "Hello world hello narayan";

const findDuplicateWords = (str) => {
  const strArr = str.split(" ");
  console.log(strArr);
  var newOut = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!newOut.includes(_.camelCase(strArr[i]))) {
      newOut.push(strArr[i]);
    }
  }
  console.log(newOut);
  const res = [];
  for (let i = newOut.length; i >= 0; i--) {
    res.push(newOut[i]);
  }
  console.log(res.join(" "));
  return res.join(" ");
};

console.log(findDuplicateWords(str));
