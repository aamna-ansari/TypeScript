// Function Overload Signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function Implementation
function add(a: any, b: any): any {
  return a + b;
}

// Usage
console.log(add(1, 2)); 
console.log(add("Hello, ", "World!")); 
