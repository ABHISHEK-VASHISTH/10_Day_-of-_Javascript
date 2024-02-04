// we were give a question that we were given an array:-
//["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// we have to do :-
//Remove the first company from the array.
//Remove Uber and add OLA on its place.
//Add amazon at the end.
 let array=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 //task one:-
 array.shift();
 console.log(array);
 //task two:-
 let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
company.splice(2,1,"OLA");
console.log(company);
//task three:-
 let giants=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
giants.push("amazon");
console.log(giants);
