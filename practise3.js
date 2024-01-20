let number=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
        number++;
    }
}
console.log("total: ",number);

//ask the user weather he can guess the right number or not:-
 let guessnum=35;
 let usernumber=prompt("guess the number = ");

while(usernumber != guessnum){
    usernumber=prompt("guess the number again = ");

 }
console.log("you won the match")
