//We know that the functions can return functions

function outterFunction(){
    function innerFunction(){
        console.log("InnerFunction is Here");
    }
    return innerFunction;
}

const result1=outterFunction();
result1();// Here we get output as "InnerFunction is Here"

function printName(firstName,lastName){
    function printHelper(){
        console.log(firstName,lastName);
    }
    return printHelper;
}

const result2=printName("Krushna","Patil");
result2();// It prints "Krushna Patil" how it possible
//It answer is Closures in JavaScript

