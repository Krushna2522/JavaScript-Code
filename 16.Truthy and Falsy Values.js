//Truthy values means whose value can be true
//Falsy values means whose value can be false

//Falsy values are --> false, " "(Empty String), null, undefined, 0
//Truthy values are --> values other than falsy values are truthy values

console.log(true && undefined); //gives undefined as output
console.log(true && " "); //gives the empty string as output
console.log(true && null); //gives the null as output
console.log(true && false); //give the false as output
console.log(true && 0); //gives the 0 as output
