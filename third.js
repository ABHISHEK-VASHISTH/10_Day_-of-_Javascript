//So today we are going to study about the operators in javascript:-
/* Arithmatic operators:-
    (+) = Addition
    (-) = Subtraction
    (/) = Divide
    (*) = Multiplication
    (%) = Modulus 
    (**) = Exponential
   Unary operators:-
    (a++) = Increment(a+1) 
    (a--) = Decrement(a-1)
   Assignment Operators:-
    (a+=1) = (a=a+1)
    (a-=1) = (a=a-1)
    (a/=1) = (a=a/1)
    (a*=1) = (a=a*1)
    (a**=1) = (a=a**1)
    (a%=1) = (a=a%1)
   Comparison operators:-
    (<=) = Less than or equal to
    (>=) = Greater than or equal to 
    (>) = Greater than
    (<) = Less than
    (==) = Equal to
    (===) = Strict equal to
    (!=) = Not equal to
    (!==) = Strict not equal to 
   Logical Operators:-
    (&&) = AND
    (||) = OR
    (!) = NOT
 */

//Arithmatic Ops:-
var a=5; 
var b=3;
 console.log("a=",a," & b=",b);
 console.log("a+b=",a+b);
 console.log("a-b=",a-b);
 console.log("a*b=",a*b);
 console.log("a/b=",a/b);
 console.log("a%b=",a%b);
 console.log("a**b=",a**b);

 //Unary Ops:-
 a++;
 console.log(a);//It will increase the value of a by 1.
 a--;
 a--;
 console.log(a);//It will decrease the value of a by 1;

 //Assignment Ops:-
 var a=7; 
 var b=2;
 console.log("a=",a," & b=",b);
 console.log("a+=b=",a+=b);//It will change the value to 9 and it remains nine and execute the other line of code;
 console.log("a-=b=",a-=b);//Here it will be 7 because 9-2=7.
 console.log("a*=b=",a*=b);//7*2=14.
 console.log("a/=b=",a/=b);//14/2=7.
 console.log("a%=b=",a%=b);// a%=b=1 is equivalent to a = a % b (remainder after division)
 console.log("a**=b=",a**=b);// a**=b=1 is equivalent to a = a ** b (exponentiation)

//Comparison Ops:-
//(<=) = Less than or equal to
console.log(5 <= 10); // true
console.log(20 <= 10); // false
//(>=) = Greater than or equal to 
console.log(15 >= 10); // true
console.log(5 >= 20); // false
//(>) = Greater than
console.log(15 > 10); // true
console.log(5 > 20); // false
//(<) = Less than
console.log(5 < 10); // true
console.log(20 < 10); // false
//==) = Equal to
console.log(5 == "5"); // true (because of type coercion)
console.log(10 == 20); // false
//(===) = Strict equal to
console.log(5 === "5"); // false (strict equality)
console.log(10 === 10); // true
//(!=) = Not equal to 
console.log(5 != "5"); // false (because of type coercion)
console.log(10 != 20); // true
//(!==) = Strict not equal to
console.log(5 !== "5"); // true (strict inequality)
console.log(10 !== 10); // false
 
//Logical Ops:-
// "&&" operator:-
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// "||" operator:-
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// "!" operator:-
console.log(!true); // false
console.log(!false); // true
// **We will use them in Conditional statement concepts**

/*                                               I hope I was able to make you understand the concept of operators in Javascript                                                 */


