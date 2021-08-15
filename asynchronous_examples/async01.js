// Asynchronous

// In this example the order has been compromised.
// We will fix it with the 'setTimeout' function
console.log(" I ");
// This line of code will execute after every other line
setTimeout(() => {
  console.log(" eat it ");
},1000);
console.log(" bake ");
console.log(" a cake ");
console.log(" and I ");
