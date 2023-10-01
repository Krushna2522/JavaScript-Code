const app=()=>{
    const myFun=()=>{
        console.log("Hello World");
    }
    const AddNum=(num1,num2)=>{
        console.log("Addition is: ",num1+num2);
    }
    function multiplyNum(num1,num2)
    {
        console.log("Multiplication is: ",num1*num2);
    }
    const printSomething=function()
    {
        console.log("Namaste Duniya")
    }
    myFun();
    AddNum(45,67);
    multiplyNum(75,45);
    printSomething();
}

app();