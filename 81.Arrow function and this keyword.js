//In case of the arrow function this keyword is pointing to window object 
//It does not point to the current method object

const person={
    userName:"Krushna",
    age:56,
    about:()=>{
        console.log(`The userName of person is ${this.userName} and age is ${this.age}`);
    }
};

person.about();//It prints "The userName of person is undefined and age is undefined".
person.about.call(person);//In this way also it does not print the correct answer.
const myfun=person.about.bind(person);
myfun();//In this way also it gives the wrong undefined output.

//In Case of Arrow function this key word is not behave correctly

//Short hand property for the method in object

const person1={
    userName:"Krushna",
    age:65,
    about1:function(){
        console.log("Print the userName and age using about1 function");
    },
    about2(){
        console.log("Print the userName and age using about2 function");
    }
};

person1.about1();
person1.about2();

