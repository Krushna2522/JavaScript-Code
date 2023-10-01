//Up till now we know about function can return number, string, boolean, etc values.
//Function returning Number
function myfun(number)
{
    return number;
}
console.log(myfun(45));

//Function returning String
function myFun1()
{
    return "Krushna";
}
console.log(myFun1());

//Same as above we are able to return function from function

function myFun()
{
    function printHello()
    {
        console.log("Hello World");
    }
    return printHello;
}

let returnFun=myFun();
console.log(returnFun);
returnFun();

function tempFun()
{
    return function printName()
    {
        console.log("Krushna Deepak Patil");
    }
}

let printName=tempFun();
console.log(printName);
printName();