//Function is the block of code through which we can perform the perticular work.
//There are multiple ways in which we can create an function in javascript
//1.Function Declaration Method:
// function function_name()
// {
//     //statements to be executed;
// }

function addTwoNum(a,b)
{
    console.log(`Addition of two Number is:${a+b}`);
}
addTwoNum(45,36);

//2.Function Expression Method:
// const variablesName=function(){
//     //statements to be executed;
// }

const additionOfTwoNum=function(a,b){
    console.log(`Addition of two Number is:${a+b}`);
}
additionOfTwoNum(26,73);

//3.Arrow Function Method:
//const variableName=()=>{
    //Statements to be Executed;
//}

const additionOfThreeNum=(a,b,c)=>{
    console.log(`Addition of three Number is:${a+b+c}`);
}
additionOfThreeNum(25,73,85);