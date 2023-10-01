//We are creating an function which return the objects

const person={
    firstName:"Krushna",
    lastName:"Patil",
    email:'imkrushna45@gmail.com',
    age:34,
    address:"I.U.D.P",
    about(){
        console.log(`${this.firstName} is ${this.age} years old`);
    },
    is18(){
        if(this.age>=18)
            console.log(`${this.firstName} is Mature`);
        else
            console.log(`${this.firstName} is Child`);
    }
};

console.log(person);
person.about();
person.is18();

//If we 100 of users with same information, creating objects in above way is not good
//So we can define the function which creates object and return the object

function createUser(firstName,lastName,email,age,address)
{
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        console.log(`${this.firstName} is ${this.age} years old`);
    }
    user.is18=function(){
        if(this.age>=18)
            console.log(`${this.firstName} is Mature`);
        else
            console.log(`${this.firstName} is Child`);
    }
    return user;
}

const user1=createUser("Krushan","Paitl","abc@gmail.com",34,"abc");
const user2=createUser("Rohit","Sharma",'xyz@gmail.com',37,"xyz");
const user3=createUser("Ajay","Khan","lmn@gmail.com",17,'lmn');

user1.about();
user2.about();
user3.about();
user1.is18();
user2.is18();
user3.is18();