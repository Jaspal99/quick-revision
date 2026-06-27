const user = { name: "Jaspal", role: "frontend" };
const { name, ...rest } = user;
console.log(user); // { name: 'Jaspal', role: 'frontend' }
const arr = [1, 2, 3];
const copy = [...arr, 4];
console.log(copy); // [ 1, 2, 3, 4 ]
