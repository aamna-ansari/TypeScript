// Basic syntax, variables, and type annotations

// Basic Syntax

function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Alice"));

//   Variables | 

let username: string = "John";  // Explicit type annotation
let age = 28;                  // Type is inferred as number
const isActive: boolean = true; // Constant with explicit type

// Type Annotations

let firstName: string = "Alice";
let age1: number = 30;
let isLoggedIn: boolean = true;

console.log(firstName, age1, isLoggedIn);


// Function Type Annotations
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2,9));

//  any []
let data: any = "Hello";
data = 42;

// Type Inference
let greeting = "Hi"; // Inferred as string

// greeting = 42; //error 


// Boolean example 👍

let isAuthenticated: boolean = false;
function login(username: string, password: string) {
   
    if (username === "user123" && password === "password123") {
        isAuthenticated = true;
        console.log("User successfully logged in!");
    } else {
        console.log("Invalid credentials.");
    }
}
login("user123", "password123"); 







  