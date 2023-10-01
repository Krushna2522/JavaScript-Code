//use call method we can metion the what which object is to be passed as this

const person1={
    firstName:"Krushna",
    age:45,
    about:function(){
        console.log(`The Person firstName is ${this.firstName} and age is ${this.age}`);
    }
};

person1.about();//It prints "The Person firstName is Krushna and age is 45";

const person2={
    firstName:"Mohit",
    age:54
};

// The person2 don't have an about method, but we want to call the about method using person2
//person2.about();//Gives an Error

//So we can use Call method

person1.about.call(person2);//It prints "The Person firstName is Mohit and age is 54".

//Now we can defined the function outside the object and call this function using different users.

function userInfo(){
    console.log(`Username is ${this.userName} and Age is ${this.age}`);
}

const user1={
    userName:'Krushna',
    age:45
};

const user2={
    userName:'Patil',
    age:34
};

const user3={
    userName:'Rohan',
    age:36
};

//If we directly calls the userInfo function
userInfo();//It prints "Username is undefined and Age is undefined"
//Now Pass the this value as user1
userInfo.call(user1);//It prints "Username is Krushna and Age is 45"
//Now Pass the this value as user2
userInfo.call(user2);//It prints "Username is Patil and Age is 34"
//Now Pass the this value as user3
userInfo.call(user3);//It Prints "Username is Rohan and Age is 36"

function infoPrint(Marks,Subject){
    console.log(this.userName,this.age,Marks,Subject);
};

const user4={
    userName:"Ajay",
    age:36
};

infoPrint.call(user4,98,"Maths");//In this way we can pass the arguments and It prints "Ajay 36 98 Maths"