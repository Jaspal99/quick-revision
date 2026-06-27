const user = {
  name: "Jaspal",
  normal() {
    return console.log(this.name);
  },
  arrow: () => {
    return console.log(this.name);
  },
};

console.log(user.normal()); // Jaspal
console.log(user.arrow()); // undefined