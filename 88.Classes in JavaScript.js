class createUser{
    constructor(firstName,age){
        console.log("The Constructor is Called");
        this.firstName=firstName;
        this.age=age;
    };
    about(){
        console.log(`${this.firstName} is ${this.age} Years Old`);
    };
    is18(){
        if(this.age>18)
            console.log(`${this.firstName} is Mature Person`);
        else
            console.log(`${this.firstName} is Child`);
    };
}

//In case of class, to create an object we have to use new keyword

const user1=new createUser("Krushna",23);
user1.about();
user1.is18();
console.log(user1);//The methods are present in the __proto__ section of the object.
const user2=new createUser("Raju",13);
user2.about();
user2.is18();