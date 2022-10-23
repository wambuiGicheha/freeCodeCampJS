var fAnimal = "Wambui";
var fAnimal = "Gicheha"; /*
var when you declare two variable with the var keyword, the initial variable is overwritten. 
var keyword is used on a global scope or locally within a function */
/*
let oth when you declare a viable with let, the same variable name can ot be declared gain to another variable
*/
const person = "Keziah";
//person = "Lucy"; //constant keyword does not allow the same variable to be assigned to a differnt value

let hisName = "Emmanuel";
hisName = "Maina";

console.log("her name is " + fAnimal);
console.log("She is called " + person);
console.log(hisName);
let myOddNumbers = [];
for (let i = 17; i <= 65; i+=2){

myOddNumbers.push(i);
}
console.log(myOddNumbers);

function jobName(){
    console.log("FrontEnd Dev");
      
}

 jobName(); 


 function multiply(a , b){// this is a function that has two parameters, a and b when it is being defined
    console.log(a * b);// these parameters are passed through. this is where everything you need is done so that we do not keep on repeating

   }
   multiply(6,4);// these are the arguments that have been passed through the function

   function giveResults(){
    console.log('Calculations are done to bring results');
   }
   giveResults();
  
   function newOddNumbers(){
    let newOddNumbers=[];
    
    for (let i= 1; i < 10; i +=2) {
        newOddNumbers.push(i);
        console.log(newOddNumbers);
        
    }    
   }
   newOddNumbers()


