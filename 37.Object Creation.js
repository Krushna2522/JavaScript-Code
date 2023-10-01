//Objects are reference type
//key value pairs are their
//object don't have index, they have key through which we can access values

const person={
    name:"Krushna",
    age:22
};

console.log(person);
console.log(typeof(person));
console.log(person.name);
console.log(person.age);

const person1={
    name:"Krushna",
    age:23,
    hobbies:['guitar','sleeping','cricket']
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.hobbies); //Here it directly prints the hobbies array
//Below we are printing the elements in hobbies array
console.log(person1.hobbies[0]);
console.log(person1.hobbies[1]);
console.log(person1.hobbies[2]);
