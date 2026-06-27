function outer() {
  const count = 10;
  return function inner() {
    return count + 1;
  };
}

const fn = outer();
console.log(fn()); // 11
