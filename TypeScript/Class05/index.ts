function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  printId(101);
  printId("202");
  // ❌ Error
//   printId({ myID: 22342 });