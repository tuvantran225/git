const Dog = require("./dog");
const Cat = require("./cat");
const Mouse = require("./mouse");

const pug = new Dog("Punk");
pug.sayHi();

const jerry = new Mouse("Jerry");
const micky = new Mouse("Micky");
const tom = new Cat("Tom");
tom.eat(jerry);
tom.eat(micky);
pug.eat(tom);

console.log(pug);
