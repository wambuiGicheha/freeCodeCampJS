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


function chainToSwitch(val) {
  let answer = "";
  

  switch(val) {
    case "bob":
    answer = "Marley";
    break;

      case 42:
      answer = "The Answer";
      break;

      case 1: 
      answer ="There is no #1";
      break;

      case 99:
      answer = "Missed me by this much!";
      break;

      case 7:
      answer = "Ate Nine";
      break;
      
        }


  return answer;
}

console.log(chainToSwitch(7));

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}


cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4))
/*
let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2 : 
  case 3:
  case 4:
  case 5:
  case 6:
   answer = "Bet";
   break;

   case 7:
   case 8:
   case 9:
   answer = "Hold";
break;

case 10:
case J:
case Q:
case K:
case A:

}

  return "Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/