const Dog = require("./dog");
const Cat = require("./cat");
const Mouse = require("./mouse");

const pug = new Dog("Punk");
pug.sayHi();

const jerry = new Mouse("Jerry");
const tom = new Cat("Tom");
tom.eat(jerry);
pug.eat(tom);

console.log(pug);
