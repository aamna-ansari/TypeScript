# Classes and Objects
A class in TypeScript is a blueprint for creating objects with properties and methods.

## Defining a Class:
```ts
class Person {
  // Properties
  firstName: string;
  lastName: string;

  // Constructor
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method
  greet() {
    console.log(`Hello, my firstName is ${this.firstName} and I am ${this.lastName} years old.`);
  }
}
// Creating an Object
const person1 = new Person("AaMna", 'AnSari');
person1.greet(); 
```