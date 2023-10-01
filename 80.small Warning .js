const user={
    userName:"krushna",
    age:45,
    about:function(){
        console.log(this.userName,this.age);
    }
};

console.log(user);
user.about();//krushna 45 //Here we are calling the function
console.log(user.about);//Prints the Function //Here we did not calling the function
const myFun=user.about;
//now myFun is an function
//Now if we call myFun we expect 'krushna 45' as output but
myFun();//But it prints undefined undefined
//myFun=user.about here we are passing the function and not the this value
//to pass the this value we have to bind that value with function
const newMyFun=user.about.bind(user);
newMyFun();//Now it prints the 'krushna 45'