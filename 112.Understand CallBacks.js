console.log("Hello World");
//Understand the callBacks

function fun1(callBack){
    console.log("Doing Task 1");
    callBack();//Here we are calling the function which is accept as parameter by fun1
}

function fun2(){
    console.log("Doing Task 2");
}

fun1(fun2);//Here we are passing the fun2 as parameter to the fun1.

fun1(function callBack(){
    console.log("Doing Task 3");
});//Here we are writing the function inside the paranthsis

fun1(()=>{
    console.log("Doing Task 4");
})//Here we are writing the arrow function directly as argument

console.log("We are writing the function to add two numbers");
//Way 1:
// function getNumber(number1,number2){
//     console.log("Numbers are: ",number1, number2);
//     addNumber(number1,number2);
// }
// function addNumber(num1,num2){
//     console.log("Addition of two Number is: ",num1+num2);
// }
// getNumber(34,22);

//Way 2:
// function getNumber(number1,number2,callBack){
//     console.log("Numbers are:",number1,number2);
//     callBack(number1,number2);
// }

// function addNumber(num1,num2){
//     console.log("Addition of two number is:",num1+num2);
// }

// getNumber(34,46,addNumber);

//Way 3:
// function getNumber(number1,number2,callBack){
//     console.log("Numbers are:",number1,number2);
//     callBack(number1,number2);
// };

// getNumber(35,63,function(num1,num2){
//     console.log("Addition of two Number is:",num1+num2);
// });

//Way 4:
// function getNumber(number1,number2,callBack){
//     console.log("Numbers are:",number1,number2);
//     callBack(number1,number2);
// };

// getNumber(56,32,(num1,num2)=>{
//     console.log("The Addition of two Number is:",num1+num2);
// });

//Now before adding the number we check the data type of that numbers
//If any one of the element have the data type as string then gives an error
//else we done the addition of two number

function getNumber(number1,number2,onSuccess,onFailure){
    if(typeof(number1)==='number' && typeof(number2)==='number')
    {
        console.log("Entered two numbers are:",number1,number2);
        onSuccess(number1,number2);
    }
    else
    {
        onFailure();
    }
}

getNumber(46,65,(num1,num2)=>{
    console.log("Addition of two numbers is:",num1+num2);
},()=>{
    console.log("Please enter the values of number data type");
});

getNumber("46",65,(num1,num2)=>{
    console.log("Addition of two numbers is:",num1+num2);
},()=>{
    console.log("Please enter the values of number data type");
});

