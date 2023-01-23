var user = [
  { name: "Ram", email: "ram@gmail.com", age: 23 },
  { name: "Shyam", email: "shyam23@gmail.com", age: 28 },
  { name: "John", email: "john@gmail.com", age: 33 },
  { name: "Bob", email: "bob32@gmail.com", age: 41 },
];

const output = user.filter((x) => x.age > 30);
console.log(output.map((x) => x.name));

const out = user.reduce(function (acc, curr) {
  if (curr.age > 30) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log(out);
