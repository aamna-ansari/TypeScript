# Classes and Objects
[<< Day 08](/Class08/READ08.md) | [Day 10 >>](/Class09/Assignment/README.md)

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

# Access Modifiers
TypeScript provides access modifiers (`public`, `private`, `protected`) to control the visibility and access to class members (properties and methods).

- **public**: Default modifier. Members are accessible anywhere.

- **private**: Members are accessible only within the class.

- **protected**: Members are accessible within the class and its subclasses.


 [Access Modifiers Example](./index.ts)

 [<< Day 08](/Class08/READ08.md) | [Day 10 >>](/Class09/Assignment/README.md)