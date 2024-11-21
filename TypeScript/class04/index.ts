// Class 04 
// Array  Number

const arr:number[] = [1,2,3,4,5] // Array create in TS
console.log(arr[0])


//  Array String
const arrStr:string[] = ['AaMna', 'Learn','TS'];
console.log(arrStr[0])

// Array Using 'any[]'

const mixed:any[] = ['AaMna', 'says', 2, true , 22.34]
console.log(mixed[0])


// Filter 
const evenNumber = arr.filter((ele) => ele %2 ===0)
console.log(evenNumber);


// Example of Type Inference

const arr1 = [1,2,3,4,5]
arr1.push(8)
console.log(arr1)

// But Wait...........

// arr1.push('12'); //Type error
console.log(arr1)

// Tuples

const collection:[string ,number , boolean] = ['AaMna', 24, true]

// But what happens if i try to set them in the wrong order


const collection1:[string ,number , boolean] = ['AaMna', true, 24] //Throw Error
