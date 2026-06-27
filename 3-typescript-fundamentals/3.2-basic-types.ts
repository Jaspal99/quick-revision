type TSUser={
    id:string;
    name:string;
    age?:number;
    isActive: boolean;
}

const tsUser: TSUser = {
  id: "26",
  name: "Jaspal",
  isActive: true,
};
console.log(tsUser)