// Array Filter function 
let numbers = [17, 2, 50, 15, 90, 9, 4, 9, 10]; 
console.log(numbers.filter(number => number % 2 == 1)); 
// Filtering odd numbers => result is [17, 15, 9, 9]

// Start: JavaScript Map Function
const users = [ {firstname : "Robert", lastname: "Redford"}, {firstname : "Sara", lastname: "Schicklet"}, {firstname : "Zara", lastname: "Dupha"} ]; 
users.map(getFullName);
function getFullName(item) {
 return [item.firstname,item.lastname].join(", ");
} 
// Output: Robert Redford, Sara Schicklet, Zara Dupha,
// End: JavaScript Map Function

// Start: JavaScript Concat Example:
const arr1 = ["Robert", "Redford"]; 
const arr2 = ["Sara", "Joe", "Will"]; 
const allUsers = arr1.concat(arr2); 
// Output: Robert, Redford, Sara, Joe, Will 

const arr1 = ["Robert", "Redford"]; 
const arr2 = ["Sara", "Joe", "Will"];  
const arr3 = ["Cris", "James"]; 
const allUsers = arr1.concat(arr2, arr3); 
// Output: Robert, Redford, Sara, Joe, Will, Cris, James
// End: JavaScript Concat Example

// Start: JavaScript Find Function Example
const percentArr = [0, 50, 100, 150]; 
console.log(percentArr.find(checkPercentage));
function checkPercentage(percentage) { 
  return percentage > 99; 
} 
// 100
// End: JavaScript Find Function Example:

// Start: Another Example of the JavaScript Find Function
const pie = [ { flavor: "apple", count: 14 }, { flavor: "wildberry", count: 18 }, { flavor: "cherry", count: 2 } ];
const findWildberry = pie.find(pie => pie.flavor === "wildberry"); // { flavor: "wildberry", count: 18 }
// End: Another Example of the JavaScript Find Function

// Start: FindIndex Function Example
const weights = [37, 10, 120, 89]; 
console.log(weights.findIndex(scale)); 
function scale(weight) { 
  return weight > 90; 
} 
// 2
// End: FindIndex Function Example

// Start: Another FindIndex Function Example
const pie = [ { flavor: "apple", count: 14 }, { flavor: "wildberry", count: 18 }, { flavor: "cherry", count: 3 } ]; 
let findWildberry = pie.findIndex(pie => pie.flavor === "cherry"); 
// 2
// End: Another FindIndex Function Example

// Start: Javascript Includes
const candy = ["tootsie roll", "jolly rancher", "candy cane", "starburst"];
console.log(candy.includes("starburst")); 
// true
// End: JavaScript Includes

// Start: JavaScript Split
let text = "Hello world how are you";
console.log(text.split(" "));
// ["Hello", "world", "how", "are", "you"];

let text = "Hello world how are you";
console.log(text.split(" ", 3)[2]);
// ["how"];
// End: Javascript Split

// Start: Javascript Subscript
const test = "Hey!, thank for everything, have a nice day ahead.";
console.log(test.substring(0, 30));
// Hey!, thank for everything, ha 
// End: JavaScript Subscript
