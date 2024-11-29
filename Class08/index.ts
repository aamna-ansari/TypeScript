//  Introduction to interfaces and their usage.

// Define the interface
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // Optional property
  }
  
  // Example object following the interface
  const user1: User = {
    id: 1,
    name: 'AaMna AnSari',
    email: "theaamnansari@gmail.com",
  };
  
  // Another object using the optional property
  const user2: User = {
    id: 2,
    name: "aamnansari",
    email: "aamna@example.com",
    isAdmin: true,
  };
  
  //❌ Error: Missing 'id' property
  // const user3: User = {
  //   name: "aaMna",
  //   email: "aaMna@example.com",
  // };


//  Using Interfaces with Functions



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
  
  console.log(greetUser(user));
  
  
//  Extending Interfaces
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee extends Person {
    jobTitle: string;
  }
  
  const employee: Employee = {
    name: "AaMna",
    age: 30,
    jobTitle: "Software Engineer",
  };
  

  console.log(employee.jobTitle);
  console.log(employee.name)
  