// I learned how to declare a read only variable with the const keyword
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
      for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
