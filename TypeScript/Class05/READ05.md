# Union / Intersection Types
In TypeScript, union types and intersection types are used to combine multiple types in different ways:

# Union Types | (OR)
A union type allows a variable to hold a value that can be of one type or another.

Syntax:
```ts
type A = string | number;
```

Example:
```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// ❌ Error
printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

# Intersection Types ( & )
An intersection type combines multiple types into one, requiring the type to satisfy all of the combined types.

Syntax:
```ts
type A = { name: string } & { age: number };
```