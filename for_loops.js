const myArray = [];

for (let i=1; i <=10; i++){

myArray.push(i);
}

console.log("The numbers are " + myArray);

// Setup
const myArray2 = [];


for (let a = 0; a <= 9; a += 3){
  myArray2.push(a);
}
console.log('The numbers divisible by 3 are ' + myArray2 + ".");


const myArray3 = [];
for (let j = 1; j <= 9; j += 2){
  myArray3.push(j);
}
console.log("The odd numbers are " + myArray3 + ".");

const array4 = [];
for ( let b = 9; b >= 1; b -=2 ){
array4.push(b);
}
console.log('The odd numbers in descending order are ' + array4);

const array5 = [];
for (let c = 50; c <=100; c +=5){
  array5.push(c);
}
console.log('The numbers divisible by 5 between 50 to 100 are ' + array5);


