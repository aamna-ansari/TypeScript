# Arrays

[<< Day 11](../Class11/READ11.md) | [Day 13 >>](../Class13/READ13.md)

An array is a data structure that stores multiple values in a single variable, all of which must be of the same type. Arrays allow you to group and manipulate a collection of data more efficiently.

In **TypeScript**, arrays are strongly-typed, meaning the type of their elements must be defined and adhered to.

# Syntax of Arrays
```ts
let arrayName: type[];// Using array type syntax
let arrayName: Array<type>;  // Using generic array syntax
```
# Dimensional Arrays 
## One-Dimensional Array
A single row of elements.
```ts
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits); 
```

## Multi-Dimensional Array
An array of arrays, often used for matrices or grids.

```ts
// Declaring a 2D array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Accessing elements in a 2D array
console.log(matrix[0][1]); 
```

## 3D Array

```ts
// Declaring a 3D array
let cube: number[][][] = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
  [[9, 10], [11, 12]]
];

// Accessing elements in a 3D array
console.log(cube[1][0][1]); // Output: 6
```
# Array of Objects

```ts
type Person = {
  name: string;
  city: string;
};
// Array of Objects
let people: Person[] = [
  { name: "AaMna", city: 'Faisalabad' },
  { name: "😎", city: 'Karachi'}
];  
```

[<< Day 11](../Class11/READ11.md) | [Day 13 >>](../Class13/READ13.md)