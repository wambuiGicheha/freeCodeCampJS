function functionName(num, num1) {
    sum = num + num1;
return num + num1 + 9;
}
const answer = functionName(1, 1);

console.log(answer);

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";   
  }
  trueOrFalse(true);
  trueOrFalse(false);

  function testEqual(myVal) {
    if (myVal == 111){
        return "Equal";
    }
    return "Not Equal";
}
 testEqual(112);
 
