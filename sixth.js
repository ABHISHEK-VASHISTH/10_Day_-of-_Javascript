// Here we are going to study the concept of strings in javascript:-

//Creation of String:
let str="Abhishek";

//String Length
console.log(str.length);

//String Indices
console.log(str[2]);

//Template Literals
let sentence=`this is a sentence`;//these (``) are backticks, you can find it below escape.
console.log(sentence);
//For example:
let apple={
    cost:100,
    quantity:"2kg",
};
    let output=`the cost of the apple is ${apple.cost} for ${apple.quantity}`;//by using backticks the out will consider all the sentence as a string but in normal printing the cost of the appple will be considered as an int.
    console.log(output);
    console.log("the cost of the apple is", apple.cost, "for" , apple.quantity);

//String Concatenation
let str1="Hello";
let str2="World";
let str3=str1+str2;
console.log(str3);

//string methods
//for upper care printing:-
let stri ="hello";
console.log(stri.toUpperCase());
//for lower case:-
let strn="    HELLO    ";
console.log(strn.toLowerCase());
//trim
console.log(strn.trim()); //removes the spaces
//there are various other methods in string u can search them out on internet



/*                                               I hope I was able to make you understand the concept of loops in Javascript                                                 */
