//When we add an function inside the object then that function is called as Method
const person1={
    firstName:"Krusha",
    age:45,
    about:function(){
        console.log("The name of person is Krushna and age is 45");
    }
};

console.log(person1);
console.log(person1.firstName);//It prints the krushna
console.log(person1.age);//It prints the 45
console.log(person1.about);//It print the complete function
person1.about();//It prints "The name of person is Krusha and age is 45"
//But now if I changed the person1 name as Patil
person1.firstName='Patil';
console.log(person1.firstName);//It prints Patil
person1.about();//But it prints the same "The name of person is Krushna and age is 45"
//As we hard core the statement, 
//But if we want to change function content as the changes occure so we have to use 'this' keyword.
//If we placeholder and templet string, but it also print undefined

const person2={
    firstName:"Krushna",
    age:34,
    about:function(){
        console.log(`The name of person is ${firstName} and age is ${age}`);
    }
};
console.log(person2.firstName);//It prints Krushna
console.log(person2.age);//It prints 34
//person2.about();//It gives an error