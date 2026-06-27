console.log("start");
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");

// O/P: start,end,timer,promise
// reason: sync code first, then microtasks (Promise), then macrotasks (setTimeout).
