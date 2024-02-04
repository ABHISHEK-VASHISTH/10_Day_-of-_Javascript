// Here we are going to study the concept of arrays in javascript:-
let marks_students=[98,78,56,45,54,78];
console.log(marks_students);
let random_array=["Abhishek",76,"recursive"];



//We can also create a array by:-
let altr_way= new Array["washington",8765,"london",867837,"boston"];
console.log(altr_way[0]);  // Output: "washington"
console.log(random_array[3]);  // Output: "recursive"



//to upadte an array:-
altr_way[1] = 10;
console.log(altr_way);  // Output: ["washington",1,"london",867837,"boston"]



//Array methods:-
myArray=[12,34,546,76,879,8980,459,69,0];

myArray.push(5, "six");//push: Adds one or more elements to the end of an array.

let removedElement = myArray.pop();//remove the last element from an array and returns it.

let firstElement = myArray.shift();//remove the first element from an array and returns it.

myArray.unshift(0, "newElement");//Adds one or more elements to the beginning of an array.

let slicedArray = myArray.slice(1, 3);//slice the array prints only 1-3

let index = myArray.indexOf(76);//Returns the first index at which a given element is found in the array.


/*                                               I hope I was able to make you understand the concept of arrays in Javascript                                                 */







