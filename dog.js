const chalk = require('chalk');

function Dog(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
}

Dog.prototype.sayHi = function () {
  console.log(`Hi everyone, My name is ${chalk.blue(this.name)}${chalk.red('!')}`);
}

module.exports = Dog;