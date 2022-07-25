var RetiredForagerBee = function() {
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  ForagerBee.prototype.forage.call(this, treasure);

  // ES6
  // super.forage();
};

var bee = new RetiredForagerBee();
console.log(bee);