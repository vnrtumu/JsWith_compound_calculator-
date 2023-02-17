class Animal {
  constructor(params) {}

  Walk() {
    return "Hello I am Walking";
  }
}

class Cat extends Animal {}
var n = new Cat();
console.log(n.Walk());


