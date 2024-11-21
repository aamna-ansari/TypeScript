# **Arrays | Tuples | Enums**

## TypeScript Arrays

TypeScript has a specific syntax for typing arrays.
- Number
```ts
const arr:number[] = [1,2,3,4,5]
 console.log(arr[2])
 ```
- String
```ts
// string
 const arr:string[] = ['AaMna','Learn', 'TypeScript']
 console.log(arr[2])
 ```

- Array Using 'any[ ]
```ts 
const mixed:any[] = ['AaMna', 'AnSari', true, 0 , 12.34] 
```

 ## Typed Arrays 
 A **tuple** is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:

```ts
// define tuple (Fixed Positions and Types)
let ourTuple: [number, boolean] = [5, false];
```

But what happens if i try to set them in the wrong order

```ts
let ourTuple: [number, boolean] = [false, 2]; 

❌Error: Type 'number' is not assignable to type 'boolean'
```

## Enums
**Enums** are a way to define a set of named constants *(unchangeable variables)*, which can make your code more readable and maintainable.

An enum can be defined using the `enum` keyword.

## Types of Enums
 - Numeric Enums
 - String Enums

### Numeric Enums: 
Numeric enums assign numeric values to each member, starting from `0` by default, or from a custom starting value.

```ts
// Numeric Enums:
enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
  }
  console.log(Direction.North);
  console.log(Direction[0]);
```

#### Custom Start Values:
```ts
enum Direction1 {
    North = 2, // 2
    East,  // 3
    South, // 4
    West   // 5
  }
  console.log(Direction1.East);
  console.log(Direction1[3]);
  ```
### String Enums: 
String enums assign string values to each member explicitly. These values must be provided for all members.

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction2.Down)
console.log(Direction2['Left'])
```
