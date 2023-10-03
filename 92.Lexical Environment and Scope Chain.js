//Lexical Environment is the surrounding environment

let firstName="Krushna";
const myFun=function(){
    let lastName="Patil";
    console.log(lastName);
    console.log(firstName);//Here we think we get an error, as firstName is not that function block
    //But in javascript, if an variable is not get in the that block, then it will search in its parent block
    //and it continue till global scope.
}
myFun();


let fName="Krushna";
const myFun1=function(){
    let midName="Deepak";
    const myFun2=function(){
        let lName="Patil"
        function myFun3(){
            console.log(`The Full Name is : ${fName} ${midName} ${lName}`);
        }
        myFun3();
    }
    myFun2();
}
myFun1();//It gives ouput as "Krushna Deepak Patil"