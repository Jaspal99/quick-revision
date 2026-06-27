function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

const throttledSearch = throttle(searchQuery, 1000);

throttledSearch("j");
throttledSearch("ja");
throttledSearch("jav");
throttledSearch("java");
throttledSearch("javascript");

console.log("Typing finished...");

// O/P:
// Searching for: j
// Typing finished...
