//CallBack function is the function which is passed as the parameter to another 
//function and called in that function
//Function taking input as function or returning an function, such function is called
//as Higher Order Function.

//Normal function is like
function printName(firsName){
    console.log(firsName);
}
printName("Krushna");

function myfunction2(){
    console.log("Inside my Function 2 from myfunction2");
}

function myfunction1(callBack){//generally called as callBack
    console.log("Inside my Function 1 from myfunction1");
    callBack();
}

console.log(myfunction2);
myfunction1(myfunction2);

//Usability of CallBack Function

function printName(name){
    console.log("Hello from the PrintName function");
    console.log(`The name of Client is ${name}`);
}


function getName(callBack)
{
    let name="Krushna";
    console.log("Hello from getName function");
    callBack(name);
}

getName(printName);

