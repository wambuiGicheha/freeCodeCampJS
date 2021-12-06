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
const studentRecords = [
    {
      "Name" : "Anne Hathaway",
      "Age" : 15,
      "Grade" : 12,
      "subjects" : [
        "Maths", 
        "Physics",
        "Biology"
      ]
      
  }
];


const someplace = {
  
  "America" : {
    "New York" : "New York"
  }, 
  "Africa" : {
      "Kenya": {
         "Nairobi" : "Nairobi_west",
         "Nakuru" :"Nakuru_East"
               },

      "Nigeria" : "Abuja"
             },
   "Asia" : {
   "Japan" : "Tokyo",
    "China" : "Beijing"
  }

}
 console.log(someplace.Africa.Kenya.Nakuru);

 const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];//second item[1] myPlants.trees[1]
const secondTree = myPlants[1].list[1];
console.log(secondTree);
