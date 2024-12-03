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


  // Access Modifiers

  class Employee {
    public name: string;
    private salary: number;
    protected department: string;
  
    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }
  
    // Method to access private property
    getSalary() {
      return this.salary;
    }
  }
  
  const emp = new Employee("John", 50000, "Engineering");
  console.log(emp.name); // Accessible
  console.log(emp.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
  

  
  