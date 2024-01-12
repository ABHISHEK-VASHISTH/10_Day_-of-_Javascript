// Conditional Statements
/*
    > If statement
    > if-else statement
    > if else-if... else statement
    > switch statement
    > Ternary operators 
 */
//If statement:-
a=5;
b="5";
if(a==b){
    console.log(true);
}
// If else satements:-
a=5;
b="5";
if(a===b){ // here we can try changing the {==}(equal to value)[will print true] to the {===}(strict equal to value)[will print false]
    console.log(true);
}
else{
    console.log(false);
}
// if else-if... else statement:-
person=61;//change the value of person and you will see the diffrence.
if(person<18){
    console.log("under age");
}
else if(person>60){
    console.log("over age");
}
else{
    console.log("eligible");
}
// Switch statement:-
var dayCode = 3; // Assume 3 represents Wednesday

switch (dayCode) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day code");
}
// Ternary statement:-
var age = 25;
var status = (age >= 18) ? 'Adult' : 'Minor';

console.log(status); // If age is 18 or older, 'Adult'; otherwise, 'Minor'
/*                                               I hope I was able to make you understand the concept of conditional statements in Javascript                                                 */
