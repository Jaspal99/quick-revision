function introduce(city) {
  return `${this.name} from ${city}`;
}

const person = { name: "Jaspal" };

console.log(introduce.call(person, "Delhi")); // Jaspal from Delhi
console.log(introduce.apply(person, ["Gurgaon"]));  // Jaspal from Gurgaon
const bound = introduce.bind(person);
console.log(bound("Banglore")); // Jaspal from Banglore
