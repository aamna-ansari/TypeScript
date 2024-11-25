//   function 


function myFunction(firstName:string, lastName:string): string{
    return `Helo, ${firstName} ${lastName}`
}
console.log(myFunction('AaMna', 'AnSari'))


// Optional Parameters

function optionalPar(name:string, year?:number):string{
    return year? `Heloo, ${name}! Welocome to the ${year}`: `Heloo, ${name}!`
}
console.log(optionalPar('AaMna'));
console.log(optionalPar('AaMna', 2024));
// console.log(optionalPar('AaMna', '2024')); ❌Error 


// Anonymous Function | Arrow Function

const arrow = (a:number, b: number):number =>  a * b / 2
console.log(arrow(2, 6));


// Default Parameters

function multiply(a: number, b: number = 2): number {
    return a * b;
   }
   console.log(multiply(5));    
   console.log(multiply(5, 3));

//    Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3));   
  console.log(sum(10, 20, 30, 40)); 

//   Why it Works
// Rest parameters gather all the provided arguments into an array (numbers).
// The reduce function processes this array to compute the sum.

//  Function Types

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5





