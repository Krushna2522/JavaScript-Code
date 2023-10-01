class person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    // fullName(){
    //     console.log(`The full name of person is ${this.firstName} ${this.lastName}`);
    // }
    get fullName(){
        console.log(`The full name of person is ${this.firstName} ${this.lastName}`);
    }
    // setfullName(name){
    //     const [firstName,lastName]=name.split(" ");
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    set setfullName(name){
        const [firstName,lastName]=name.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1=new person("Krushna","Patil");
// person1.fullName();
person1.fullName;
//person1.setfullName("Rohit Sharma");
person1.setfullName="Rohit Sharma";
//person1.fullName();
person1.fullName;