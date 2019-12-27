const Mouse = require('./mouse');

function Cat(name) {
  this.name = name;
  this.stomach = [];
}

Cat.prototype.eat = function (animal) {
  if (animal instanceof Mouse) {
    this.stomach.push(animal);
  } else {
    throw new Error(`Cat cannot eat ${animal.name}`);
  }
}

module.exports = Cat;