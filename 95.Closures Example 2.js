function myFunction(power){
    return function(number){
        console.log(`${number} raised to ${power} : ${number**power}`);
    }
}

const myFun1=myFunction(2);
myFun1(4);//It prints "4 raised to 2 : 16"
myFun1(6);//It prints "6 raised to 2 : 36"
const myFun2=myFunction(3);
myFun2(5);//It prints "5 raised to 3 : 125"
myFun2(2);//It prints "2 raised to 3 : 8"