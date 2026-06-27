console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// O/P: A,D,B,C
// reason: sync code first, then microtasks (Promise), then macrotasks (setTimeout).
