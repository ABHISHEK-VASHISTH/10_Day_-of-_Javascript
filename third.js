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
 console.log("a*=b=",a*=b);
 console.log("a/=b=",a/=b);
 console.log("a%=b=",a%=b);
 console.log("a**=b=",a**=b);

