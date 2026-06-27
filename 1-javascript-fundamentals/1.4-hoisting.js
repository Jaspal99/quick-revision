sayHi(); // works because function declarations are hoisted

function sayHi() {
  console.log("Hi");
}

sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization

var sayHello = function () {
  console.log("hello");
};
