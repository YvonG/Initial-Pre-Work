// I learned how to stand in line
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var myvar = arr.shift();
  return myvar;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
