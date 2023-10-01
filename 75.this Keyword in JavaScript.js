//So we have to makes changes dynamically
//this keyword value is get deteremined at runtime
//this keyword sotres the value of object through which an method is called

const person={
    firstName:"Krushna",
    age:56,
    about:function(){
        console.log(this);
    }
};

person.about();//It Prints the complete person object

const user={
    firstName:"Mohit",
    age:43,
    about:function(){
        console.log(`Users First Name is ${this.firstName} and age is ${this.age}`);
    }
};

user.about();//It Prints "User First Name is Mohit and age is 43".

function personalInfo(){
    console.log(`The First Name of Person is ${this.firstName} and Age is ${this.age}`);
}

const person1={
    firstName:"Krushna",
    age:45,
    about:personalInfo
};

const person2={
    firstName:"Jay",
    age:35,
    about:personalInfo
};

const person3={
    firstName:"Yash",
    age:26,
    about:personalInfo
};

//If I directly calls the presonalInfo function
personalInfo();//It Prints "The first name of person is undefined and age is undefined"
//It make sense when we call it through an object
person1.about();
person2.about();
person3.about();