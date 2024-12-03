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
      console.log(`Hello, My Name is ${this.firstName} ${this.lastName} 😎 `);
    }
  }
  
  // Creating an Object
  const person1 = new Person("AaMna", 'AnSari');
  person1.greet();
  
  