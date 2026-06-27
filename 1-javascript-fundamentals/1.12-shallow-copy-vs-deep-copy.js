const original = {
  name: "A",
  address: {
    city: "Delhi",
  },
};

const shallow = {
  ...original,
};

shallow.address.city = "Noida";
console.log(original.address.city); // Noida

const deep1 = structuredClone(original);
const deep2 = JSON.parse(JSON.stringify(original)); // not recommended for dates, functions, undefined, etc.
deep1.address.city = "Gurgaon";
deep2.address.city = "Banglore";
console.log(original.address.city); // Noida
