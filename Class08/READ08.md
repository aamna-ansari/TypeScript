# Introduction to interfaces and their usage

[<< Day 07](../Class07/READ07.md) | [Day 09 >>](../Class09/Class_09)
## Interfaces

An interface is a way to define a blueprint or contract for the structure of an object in TypeScript. It specifies the properties and types that an object should have but doesn’t provide implementation. Think of it as a "guide" for how an object should look.

## Key Features of Interfaces:

- **Defines Object Shape:** Specifies what properties an object should have and their types.

- **Optional Properties:** Allows some properties to be optional using `?`.

- **Readonly Properties:** Ensures some properties cannot be changed after initialization.
Extensibility: Can be extended to add more properties.

## Why Use Interfaces?
- **Type Safety:** Ensures objects conform to a predefined structure.
- **Code Consistency:** Helps maintain a consistent structure in your application.
- **Error Prevention:** Catches errors at compile time when an object doesn't follow the specified structure.


## Basic Usage of Interfaces

```ts
// Define the interface
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
}
```
### Example object following the interface
```ts
const user1: User = {
   id: 1,
  name: "Alice",
  email: "alice@example.com",
};
```

## Using Interfaces with Functions

```ts
// Define the interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Function accepting a parameter of type User
function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

const user: User = { 
    id: 1, 
    name: "AaMna", 
    email: "AaMna@example.com" };

console.log(greetUser(user)); // Output: Hello, AaMna!
```

[<< Day 07](../Class07/READ07.md) | [Day 09 >>](../Class09/Class_09)