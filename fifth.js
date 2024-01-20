//Loops and strings:-
/*
    Loops:-
     > For loop
     > While loop
     > do....while loop
     >for-of loop
     >for-in loop
 */
//For Loop
for (initialization; condition; iteration) {
    // code to be executed
  }
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
//While Loop
while (condition) {
    // code to be executed
  }
var i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
//Do...while Loop
do {
    // code to be executed
  } while (condition);
  var i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
//for-of loop (generlly used for the strings and arrays)
let name="Abhishek";
let size=0;

for(let i of name){
  console.log("i=",i);
  size++;
}
console.log("The total size od the string is: ",size);
//for-in loop (Gerenally used fort he arrays operation or to work with the objects.)
let student={
  name:"Vickey kaushal",
  age:20,
  CGPA:8.5,
  isPass:true,
};

for(let key in student){
  console.log("key = ",key,"Value = ",student[key]);
}

//We have some loop control statements as well those are:-
//  > Break :- This helps the user to come out of a loop.
//  > Continue :- This helps the user to skip a perticular iteration.
//You can understand the concept more clearly by this example:-
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Skip iteration when i is 2
    }
    if (i === 4) {
      break; // Exit the loop when i is 4
    }
    console.log(i);
  }

  
/*                                               I hope I was able to make you understand the concept of loops in Javascript                                                 */
