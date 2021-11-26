function caseInSwitch(val) {
    let answer = "";
  
  switch(val){
    case 1 :
    answer = "alpha";
    break;
  
  case 2 :
    answer = "beta";
    break;
  
    case 3:
    answer = "gamma";
    break;
  
    case 4:
    answer = "delta";
    break;
  }
    
    return answer;
  }
  
  caseInSwitch(1);


  //adding a default option in switch statements
  function switchOfStuff(val) {
    let answer = "";
   
  switch (val) {
  case 1:  
  answer = "apple";
  break;
  
  case 2:
  answer ="bird";
  break;
  
   case 3: 
  answer =  "cat";
   break 
  
   default: 
   answer ="stuff";
  }
    
    return answer;
  }
  
  switchOfStuff(1);
  console.log(switchOfStuff(1))

  /*second swictch case, note that the case statement 
  has the strict equality thing
case "a" is not the same as case a :
  */

  function switchOfStuff(val) {
    let answer = "";  
  switch (val) {
  case "a":  
  answer = "apple";
  break;
  
  case "b":
  answer ="bird";
  break;
  
   case "c": 
  answer =  "cat";
   break 
  
   default: 
   answer ="stuff";
  }
    // Only change code above this line
    return answer;
  }
  
  let seenAnswer = switchOfStuff("b");
    console.log(seenAnswer)

   /*
multiple identical option in switc statemnts- 
when you have many inputs with the same outputs
   */
function sequentialSizes(val){
    let answer = "";

    switch (val){
        case 1:
        case 2:
        case 3:
        answer = "Low";
        break;
            case 4:
            case 5:
            case 6:
            answer ="Mid";
            break;

                case 7:
                case 8:
                 case 9:
                answer = "High"

    }
    return answer;
}
sequentialSizes(1);
console.log(sequentialSizes(1));
