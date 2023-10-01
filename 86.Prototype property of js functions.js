//console.log("Hello World");
function hello(){
    console.log("Hello World");
}
hello();

//Functions in the javascript are function as well as an object also
//That is the function have the Properties also

//If I want to know the name of the function
console.log(hello.name);
//If want to set new key value pair for the function 
//we are able to do that
hello.newProperty="Unique Value";
console.log(hello.newProperty);
//we can set the function as property
hello.myfun=function(){
    console.log("hello from function property");
}
hello.myfun();
console.log(hello);
//We can say that the function in the javascript are object also.

//Now we see prototype ==> prototype is an empty object provided by an javascript function
console.log(hello.prototype);//It prints an empty object
//only the functions have the prototype property
// function print(){
//     console.log("Printing something");
// };//In this case it prints "Prototype Property is Present"
const print={
    key1:"Value1",
    key2:"Value2"
};//In this case it prints "Prototype Property is Absent"
if(print.prototype)
    console.log("Prototype Property is Present");
else
    console.log("Prototype Property is Absent");

//Prototype perovides an empty object
//So we can able to make function returning object more efficiently

// const methodObject={
//     about(){
//         console.log(`${this.firstName} is ${this.age} years old`);
//     },
//     is18(){
//         if(this.age>=18)
//             console.log(`${this.firstName} is Mature`);
//         else
//             console.log(`${this.firstName} is Child`);
//     }
// };

// function createUser(firstName,lastName,email,age,address)
// {
//     const user=Object.create(methodObject);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user;
// }
//In the above code we are making an another object which contains an methods
//It consumes an memory
//So the function have the Prototype property is an empty object
//So either creating an object for the method, we can use the prototype property for that
//And we want to add that functions into to the object __proto__

function createUser(firstName,lastName,email,age,address)
{
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
};

createUser.prototype.about=function(){
         console.log(`${this.firstName} is ${this.age} years old`);     
};
createUser.prototype.is18=function(){
         if(this.age>=18)
             console.log(`${this.firstName} is Mature`);
         else
             console.log(`${this.firstName} is Child`);
};

const user1=createUser("Krushan","Paitl","abc@gmail.com",34,"abc");
const user2=createUser("Rohit","Sharma",'xyz@gmail.com',37,"xyz");
const user3=createUser("Ajay","Khan","lmn@gmail.com",17,'lmn');

user1.about();
user1.is18();
user2.about();
user2.is18();
user3.about();
user3.is18();