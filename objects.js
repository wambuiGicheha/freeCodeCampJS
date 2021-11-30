const myCharacter = {
    "firstName" : "Elijah",
    "secondName" :"Mikaelson",
    "age" : 45,
    "species" : "vampire"

}

// adding an object
myCharacter.brother= "Klaus";

// add object to remove
myCharacter.father = "Ansel";

//delete object 
delete myCharacter.father;


const actingName = myCharacter.firstName;
const actingAge = myCharacter.age;
const actingbro = myCharacter.brother;

console.log(actingName + " has a brother called " + actingbro + "." );

console.log("This character's name is " + actingName + " who is " + actingAge + " years old");

console.log(myCharacter["father"]);

function phoneticLookup(val) {  
    var result = "";
    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" :" Easy",
        "foxtrot" : "Frank"
     };

           result = lookup[val];
            return result;
}
console.log(phoneticLookup("charlie"));

myCharacter.hasOwnProperty("father");


function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }