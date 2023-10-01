// console.log("Hello World");

const obj1={
    key1:'value1',
    key2:'value2'
};

const obj2={
    key3:'value3'
};

console.log(obj1.key1);//print value1
console.log(obj1.key2);//print value2
console.log(obj2.key3);//print value3

console.log(obj2.key2);//print undefined as there is no key2 in obj2
//But we want obj2 print the key2 value of obj1
//i.e while searching for the key, it first search in obj2 if did not get that key,
//then search in the obj1
//For this type of behaviour we use __proto__ or [[prototype]]
const obj3=Object.create(obj1);//here obj1 is passed into the obj3 __proto__ property.
//Object.create()-->It creates an empty object and set __proto__ property of object.
console.log(obj3);
//We get this when we print obj3:-
// key1: "unique"
// key4: "value5"
// key5: "value6"
// key6 : "value7"
// [[Prototype]]: Object
// key1: "value1"
// key2: "value2"
// [[Prototype]]: Object

obj3.key4='value5';
obj3.key5='value6';
obj3.key6='value7';
obj3.key1='unique';

console.log(obj3.key5);//Prints value6
console.log(obj3.key6);//Prints value7
console.log(obj3.key1);//Prints unique, as it first check itself
console.log(obj3.key2);//Prints value2, as it first checks in inself, but it did not get
//it checks in the __proto__ property get and key2 of obj1 so it prints value2

