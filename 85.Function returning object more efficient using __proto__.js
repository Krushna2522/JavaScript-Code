//Here we are seting the methodObject at the __proto__ property of each object

const methodObject={
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

function createUser(firstName,lastName,email,age,address)
{
    const user=Object.create(methodObject);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}


const user1=createUser("Krushan","Paitl","abc@gmail.com",34,"abc");
const user2=createUser("Rohit","Sharma",'xyz@gmail.com',37,"xyz");
const user3=createUser("Ajay","Khan","lmn@gmail.com",17,'lmn');

user1.about();
user1.is18();
user2.about();
user2.is18();
user3.about();
user3.is18();