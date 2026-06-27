type UtilityUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Omit<UtilityUser, "password">;
type UpdateUserPayload = Partial<Pick<UtilityUser, "name" | "email">>;
type UserMap = Record<string, PublicUser>;

// must know utility types in TypeScript:
// - Omit<Type, Keys>: Constructs a type by picking all properties from Type and then removing Keys.
// - Pick<Type, Keys>: Constructs a type by picking the set of properties Keys from Type.
// - Partial<Type>: Constructs a type with all properties of Type set to optional.
// - Required<Type>: Constructs a type consisting of all properties of Type set to required.
// - Record<Keys, Type>: Constructs an object type whose property keys are Keys and whose property values are Type.