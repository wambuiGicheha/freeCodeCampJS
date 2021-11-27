

 



 function trueOrFlase(wasThatTrue) {
     if (wasThatTrue) {
         return "yES, THAT WAS TRUE";
     }
     return "No, that was false";
 }

 trueOrFlase(true);

 function noIfBolean(a,b){
return a===b;

 }
 console.log(noIfBolean(2,2));

 function ifItsTrue(a,b){
     return a!==b;
 }
 console.log(ifItsTrue(9,7));

 function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();


  // Setup
function abTest(a, b) {
    // Only change code below this line
   if(a <0 || b < 0){
     return undefined;     
   }
     // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
  