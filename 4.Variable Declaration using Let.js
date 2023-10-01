let firstName="Krushna";
let lastName="Patil";
console.log(firstName);
console.log(lastName);
//Always declare the variable using let keyword ---> Block Scope vs Function Scope
var temp="xyz";
console.log(temp);
var temp="abc";
console.log(temp); //In this we did not get any error that variable is already declared
let newTemp="xyz";
console.log(newTemp);
//let newTemp="lmn"; //In this case we get an error that is variable is already declared
newTemp="lmn";
console.log(newTemp);