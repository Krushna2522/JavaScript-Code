//Ternary Operator --> condition ? {true} : {false}
//If condition is true then true block is get executed and if condition is false then false block is get executed
//let age=18;
//(age>=18)?console.log("Person is able to make vote"):console.log("Person is not able to make vote");

let firstName ="Krushna";
let age=23;
let nationality='India';

(age>=18)?
    (nationality==='India')?
        console.log(`${firstName} is able to make vote as its nationality is indian and age is more than 18`):
        console.log(`${firstName} is not able to make vote as its nationality is not Indian`)
    :console.log(`${firstName} is not able to make vote as its age is less than 18`);
