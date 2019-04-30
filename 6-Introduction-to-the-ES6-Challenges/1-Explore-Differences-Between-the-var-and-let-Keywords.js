// I learned how to explore differences between the var and let keywords
let catName;
let quote;
function catTalk() {
  "use strict";

   catName = "Oliver";
   quote = catName + " says Meow!";

}
catTalk();
