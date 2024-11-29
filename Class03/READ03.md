
#  Basic syntax, Variables, and Type Annotations

[<< Day 2](../Class02/READ02.md) | [Day 04 >>](../Class04/READ04.md)

# Basic Syntax
```ts
function greet(name: string): string {
      return `Hello, ${name}!`;
  }
console.log(greet("Alice"));
```


# Variables
```ts
let username: string = "AaMna";  // Explicit type annotation
let age = 28;  // Type is inferred as number
const isActive: boolean = true;
```

# Type Annotations
```ts
let firstName: string = "AaMna";
let age1: number = 30;
let isLoggedIn: boolean = true;

console.log(firstName, age1, isLoggedIn);
```
# Function Type Annotations
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

# Type: any
`any` is a type that disables type checking and effectively allows all types to be used.

```ts
let data: any = "Hello";
data = 42; // No error
```
# Type: undefined & null
```ts
let emptyValue:undefined = undefined;
let notAssigned:null = null;
```
# Type Inference

```ts
let greeting = "Hi"; // Inferred as string

greeting = 42; 

❌Error: Type 'number' is not assignable to type 'string'
```

[<< Day 2](../Class02/READ02.md) | [Day 04 >>](../Class04/READ04.md)