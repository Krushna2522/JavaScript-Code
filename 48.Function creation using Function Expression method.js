//Function creation using Function Expression
//const VariableName=function(){
    //Statements to be Executed
//}

//Function to Print Hello World
 const printHello=function(){
    console.log("Hello World");
 }
printHello();

//Function to Print sum of two numbers
const printSum=function(){
    let num1=47;
    let num2=46;
    console.log(`Sum of two numbers ${num1} and ${num2} is:${num1+num2}`);
}
printSum();

//Function to return sum of two numbers
const returnSum=function(){
    let num1=47;
    let num2=34;
    let answer=num1+num2;
    return answer;
}

let answer=returnSum();
console.log(`Sum of two numbers is: ${answer}`);

//Function to sum user entered two numbers
const makeSum=function(num1,num2)
{
    let answer=num1+num2;
    console.log(`Sum of two number ${num1} and ${num2} is: ${answer}`);
}

makeSum(37,84);

//Function to return sum of two variable
const sumOfTwoNumber=function(num1,num2){
    let answer=num1+num2;
    return answer;
}
let answer1=sumOfTwoNumber(47,89);
console.log("Sum of Two Numbers is: ",answer1);

//Function to check there user Entered Number is Even or Odd
const checkNumber=function(number){
    if(number%2===0)
    {
        console.log(`The user entered number ${number} is Even Number`);
    }
    else
    {
        console.log(`The user entered number ${number} is Odd Number`);
    }
}

checkNumber(45);
checkNumber(77);
checkNumber(34);


//Function to check user entered target value is present in array or not
const checkTarget=function(input,target){
    let flag=-1;
    for(let index in input)
    {
        if(input[index]===target)
        {
            flag=index
            break;
        }
    }
    if(flag===-1)
    {
        console.log(`The target element ${target} is Absent in Array`);
    }
    else
    {
        console.log(`The target element ${target} is Present in Array at index ${flag}`);
    }
}

let target=36;
const input=[45,36,2,14,26,78,15,36,28,45,15,37];
checkTarget(input,target);
