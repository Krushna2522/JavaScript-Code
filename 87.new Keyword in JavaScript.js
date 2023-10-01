// console.log("Hello World");

//The new keyword do the three tasks
//1.It Creates an Empty Object and the 'this' pointer points that empty object
//2.Return the Object this
//3.It sets the Prototype of function in the __proto__ or [[prototype]] of the Object
//So the following function is also called as Constructor Function
function createUser(firstName,lastName,age)
{
    //So here no need to create an empty object
    //and set the object's __proto__ as function prototype
    //like const obj=Object.create(createUser.prototype);
    //and no need to write return obj
    //All that work is done by new keyword
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
};

createUser.prototype.about=function(){
    console.log(`${this.firstName} is ${this.age} Years old`);
};

createUser.prototype.is18=function(){
    if(this.age<18)
        console.log(`${this.firstName} is Child`);
    else
        console.log(`${this.firstName} is Mature`);
}

//Now if we want to create an object we have to use the new keyword

const user1=new createUser("Krushna","Patil",23);
const user2=new createUser("Ajay","Sharma",54);
const user3=new createUser("Rahul","Rawat",32);

user1.about();
user1.is18();
user2.about();
user2.is18();
user3.about();
user3.is18();


//I want to print the key of user1 object
for(let key in user1)
{
    console.log(key);
}
// firstName
// lastName
// age
// about
// is18 //In the above way it prints all the keys including the key in __proto__
//So, if we don't want to print that keys
//there is an function hasOwnproperty()
for(let key in user1)
{
    if(user1.hasOwnProperty(key))
    {
        console.log(key);
    }
}
// firstName
// lastName
// age //It prints only this key