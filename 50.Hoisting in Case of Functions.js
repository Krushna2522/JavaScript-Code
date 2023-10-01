//Hoisting in Case of Functions in JavaScript
//If we case call the function before its declaration, 
//there is no problem or error, the function is get called and execute successfully.
//But it is only true when function is created using function declaration method.
//Not true for the function created using function expression or arrow function method.

printHello();

function printHello()
{
    console.log("Hello World");
}

//makeSum(34,42);

const makeSum=function(num1,num2){
    console.log(`The sum of ${num1} and ${num2} is: ${num1+num2}`);
}

makeSum(34,42);

//makeSub(34,42);

const makeSub=(num1,num2)=>{
    console.log(`The Substraction of ${num1} and ${num2} is: ${num1-num2}`);
}

makeSub(34,42);