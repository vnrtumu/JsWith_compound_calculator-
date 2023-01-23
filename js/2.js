var radius = [2, 4, 5, 6];

function area(radius) {
  return Math.PI * radius * radius;
}
var output = [];

Array.prototype.calculate = function (logic) {
  for (var i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(radius.calculate(area));
