# Function Overloading | Rest & Spread Parameter

[<< Day 06](/Class06/READ06.md) | [Day 08 >>](/Class08/READ08.md)

# Rest & Spread Parameter

![Rest & Spread Parameter](/images/rest,%20spreaad.jpg)

# Function Overloading 
Function overloading in TypeScript allows you to define multiple function signatures for a single function. It provides a way to describe different parameter types and return types for the same function name. This is especially useful when a function can accept various combinations of parameters and return different types based on those parameters.


# Syntax of Function Overloading
**Multiple Function Signatures (Overload Signatures):** These define the various combinations of arguments and return types the function can have.

**Implementation Signature:** This is the actual implementation of the function, which handles all overload cases.

```ts
// Function Overload Signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function Implementation
function add(a: any, b: any): any {
  return a + b;
}

// Usage
console.log(add(1, 2));       // Output: 3 (number)
console.log(add("Hello, ", "World!")); // Output: "Hello, World!" (string)
```


[<< Day 06](/Class06/READ06.md) | [Day 08 >>](/Class08/READ08.md)