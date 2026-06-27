function identity<T>(value: T): T {
  return value;
}

const displayname = identity<string>("Jaspal");
const age = identity<number>(18);
console.log(displayname, age);
