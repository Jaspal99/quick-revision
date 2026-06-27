function createCounter() {
  let count = 0;
  return {
    increment() {
      return (count += 1);
    },
    reset() {
      count = 0;
    },
  };
}

const count = createCounter();
console.log(count.increment()); // 1
console.log(count.increment()); // 2
