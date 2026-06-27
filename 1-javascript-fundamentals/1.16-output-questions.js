for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);   // O/P: 3,3,3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);   // O/P: 0,1,2
}

console.log({}+[]); // O/P: [object Object]
console.log({}+[]); // O/P: can be 0 or [object Object] depending on the environment (browser vs Node.js)
