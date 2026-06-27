type userType={
    id:string;
    name:string;
    age?:number;
    isActive: boolean;
}
interface TSUserInterface{
    id:string;
    name:string;
    age?:number;
    isActive: boolean;
}

// Both type and interface can be used to define the shape of an object in TypeScript. The choice between them often comes down to personal preference or specific use cases. Here are some key differences:
// in short and simple words:
// - Use `interface` when you want to define a contract for classes or objects.
// - Use `type` when you want to create a union or intersection type, or when you want to define a more complex type that cannot be expressed with an interface.