//  Arrays

let myArray:string[]= ['AaMna', 'AnSari', 'Faisalabad', 'Pakistan'];
console.log(myArray);
console.log(myArray[2]);

// 📍 Array of strings using generic syntax 📍
let rgb: Array<string> = ["Red", "Green", "Blue"];

rgb.push("Black"); //Add Element
console.log(rgb);

rgb.pop() // remvove
console.log(rgb);


// 📍  one Dimensional 📍

let oneDim:number[] = [1,2,3,4,5,6]
console.log(oneDim);

// 📍 2D Dimensional📍

let twoDim:number[][]= [[12,2],[3,4]]
console.log(twoDim[0]);

//📍 3D Dimensional📍

let threeDim:string[][][]= [[['helo', 'helo'], ['world', 'world'], ['helo', 'world']]]
console.log(threeDim[0][1][0]);


type Person = {
    name: string;
    city: string;
  };
  
  let people: Person[] = [
    { name: "AaMna", city: 'faisalabad' },
    { name: "😎", city: 'Karachi' }
  ];
  console.log(people[1].name);


//  📍 Loop Through an Array 📍
let nums: number[] = [10, 20, 30];
nums = nums.map(num => num * 2); 
console.log(nums);








