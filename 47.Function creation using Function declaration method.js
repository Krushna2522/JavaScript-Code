//Funtion creation using Function Declaration method
//function functionName(){
    //statements to be executed.
//}

//Function to print Hello world.
function printHello(){
    console.log("Hello World");
}
printHello();

//Function to print sum of two number.
function printSum(){
    let num1=34;
    let num2=45;
    console.log(`Sum of two number ${num1} and ${num2} is ${num1+num2}`);
}
printSum();

//Function to return the sum of two numbers.

function returnSum(){
    let num1=37;
    let num2=58;
    let answer=num1+num2;
    return answer;
}

const answer=returnSum()
console.log(`Sum of two number is: ${answer}`);

//Function two make of sum of two user entered varable

function makeSum(num1,num2){
    let answer=num1+num2;
    return answer;
}

let ans=makeSum(34,98);
console.log(`Sum of two number is:${ans}`);

//Function to make sum of three numbers

function makeSumofThree(num1,num2,num3){
    let answer=num1+num2+num3;
    return answer;
}

let answer1=makeSumofThree(31,75,49);
console.log(`Sum of three number:${answer1}`);

//Function to check number is odd or even

function checkNumber(number){
    if(number%2===0)
        console.log(`Number ${number} is Even Number`);
    else
        console.log(`Number ${number} is Odd Number`);
}

checkNumber(37);
checkNumber(26);

//Function to check target element is present in Array or not.

function checkTarget(Array,target){
    let flag=-1;
    for(let index in Array){
        if(Array[index]===target)
        {
            flag=index;
            break;
        }
    }
    if(flag===-1)
        console.log(`Target Element ${target} is absent in Array`);
    else
        console.log(`Target Element ${target} is present at index ${flag}`)
}

const tempArray=[34,52,62,75,8,5,23,46,35];
const target=46;
checkTarget(tempArray,target);