# Functions

[<< Day 05](../Class05/READ05.md) | [Day 07 >>](..)

## Functions
Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));
```
## Optional Parameters
You can make a parameter optional using ?. Optional parameters must come after required ones.
```ts
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}.`;
}
```

## Default Parameters
 ```ts
 function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5));    
console.log(multiply(5, 3));
 ```

## Rest Parameters
Use rest parameters to accept multiple arguments:
```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));   
console.log(sum(10, 20, 30, 40)); 
```
## Anonymous Function

```ts
const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet("AaMna"));
```
[<< Day 05](../Class05/READ05.md) | [Day 07 >>](..)