function User(name) {
  this.name = name;
}

User.prototype.sayName = function () {
  return this.name;
};

const user = new User("Jaspal");
console.log(user.sayName());

// Note: Classes in JS are syntactic sugar over prototypes

class User {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return this.name;
  }
}

const user = new User("Jaspal");
console.log(user.sayName());
