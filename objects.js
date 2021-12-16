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
     console.log(lookup.echo);

           result = lookup[val];//don't understand
            return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("bravo"));

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
console.log(studentRecords.hasOwnProperty("class"));

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


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
console.log(recordCollection[2468].albumTitle);






function familyTree(names){
  result = "";
  const members = {
    "father" : "Francis",
    "mother" : "Martha",
    "child1" : "Christine",
    "child2" : "Charity",
    "child3" : "David",
    "nephew1" :" Tom",
    "nephew2" :"Harrison",
    "niece3" :"Lucy",
    "nephew3" :"Hillary",
  }
  result = members[names];
  return result;
}
console.log(familyTree("father"));
console.log(familyTree("child3"));
console.log(familyTree("nephew3"));