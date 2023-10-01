//Function Creation using Arrow function method
//Function to print Hello World
const printHello=()=>{
    console.log("Hello World");
}
printHello();

//Function to print sum of numbers
const printSum=()=>{
    let num1=45;
    let num2=46;
    console.log(`Sum of two number ${num1} and ${num2} is:${num1+num2}`);
}
printSum();

//Function to Make sum of user entered values
const makeSum=(num1,num2)=>{
    let answer=num1+num2;
    console.log(`Sum of two number ${num1} and ${num2} is:${answer}`);
}

//Function to return sum of three user entered values
const sumThreeNum=(num1,num2,num3)=>{
    return num1+num2+num3;
}
let ans=sumThreeNum(35,35,25);
console.log("The sum of three number is: ",ans);

//Function to check number is even or odd
const checkNumber=(number)=>{
    if(number%2===0)
        console.log("Entered Number is Even Number");
    else
        console.log("Entered Number is Odd Number");
}

checkNumber(35);
checkNumber(98);

//Function to check target element present in input array
const checkTarget=(input,target)=>{
    let flag=-1;
    for(let index in input)
    {
        if(input[index]===target)
        {
            flag=index;
            break;
        }
    }
    if(flag===-1)
        console.log(`Target Element ${target} is Absent in Array`);
    else
        console.log(`Target Element ${target} is Present at index ${flag}`);
}
const input=[45,68,32,15,24,26,87,21,39,22,47,95,22];
let target=54;
checkTarget(input,target);
checkTarget(input,39);

