//Here we wil going to study about the variables in Javascript
//We have 8 types of data types:=
/*  
    String
    Intiger
    Bigint
    Undefined
    Null
    Symbol
    Object
    Boolean
 */
//For defining the variables we have three catogaries in Javascript:-
/*  
    VAR - It allows the user to define the variables globally and can be re-defined and updated.(Used before 2015 as it was the only catogary present at that time)
    LET - It allows the user to define the variable inside the block and cannot be re-defined and it can also be relocated.
    CONST- It works as a constant in terms of declaring of the variables which further cannot be re-defined or updated.
 */
var age = 12;
var age = 24;
var age = 78;
console.log(age);

let name = Edward;
let name = nolan;//here it we show you error in your IDE because of ES6(Ecmascript6)(Update on Javascript in 2015)
console.log(name);

const surname = dalton;
var surname = hiroma;// Error will come because this variable name is already been used and error will be (Uncaught SyntaxError: Identifier 'surname' has already been declared).
let surname = jimmy;
console.log(surname) 

/*                                               I hope I was able to make you understand the concept of variables in Javascript                                                 */
