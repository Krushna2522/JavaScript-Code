//Apply method works same as call only difference is that 
//In call we pass additional arguments seperately
//But in case of Apply, arguments are passed as the array of arguments

function printInfo(Marks,Subject){
    console.log(this.userName,this.age,Marks,Subject);
}

const user1={
    userName:"Krushna",
    age:46
};

printInfo.apply(user1,[76,'maths']);//Here we pass the additional argument as array.