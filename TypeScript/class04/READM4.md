# Arrays | Tuples

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
const mixed:any[] = ['AaMna', 'says', 2, true , 22.34] 
```

 ## Typed Arrays
 A tuple is a typed array with a pre-defined length and types for each index.

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
