// Class 04 

                    // ---------------- ARRAY---------------------
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

                // ---------------- TYPE ARRAY | TUPLES---------------------

// Tuples
const collection:[string ,number , boolean] = ['AaMna', 24, true]

// But what happens if i try to set them in the wrong order


// const collection1:[string ,number , boolean] = ['AaMna', true, 24] //Throw Error


                // ---------------- E N U M S---------------------

// Numeric Enums:

enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
  }
  console.log(Direction.North);
  console.log(Direction[0]);

//   Custom Start Values:

enum Direction1 {
    North = 2, // 2
    East,  // 3
    South, // 4
    West   // 5
  }
  console.log(Direction1.East);
  console.log(Direction1[3]);

// Fully Initialized  

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

// String Enums

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction2.Down)
  console.log(Direction2['Left'])