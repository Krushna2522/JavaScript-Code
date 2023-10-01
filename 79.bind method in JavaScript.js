//It is same as the call method 
//difference is that bind method return an function by calling that function we can get the expected output

function printInfo(Marks,Subject){
    console.log(this.UserName,this.age,Marks,Subject);
}

const user={
    UserName:"Krushna",
    age:45
};

printInfo.bind(user,98,'math');//It did not print anything
//above statement returns an function so we have to accept that function

const returnfun=printInfo.bind(user,98,'math');
console.log(returnfun);
returnfun();//It prints "Krushna 45 98 math".