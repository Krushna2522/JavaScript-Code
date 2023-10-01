//Map is an iterables
//Store data i Ordered Fashion
//Sotre values in key:value Pair
//Duplicates keys cannot be allowed, values can be duplicate

const person1={
    firstName:"Krushna",
    age:27,
    1:"one"
};
//In case of object the key must an string or symbol, other than this no key are created
for(let key in person1)
{
    console.log(typeof(key));//It gives the outpu as String
}

//In case of map key is of any data type
console.log("In case of Map");
const person2=new Map();
person2.set('firstName','Krushna');//key->string
person2.set('age',7);//key->string
person2.set(1,'one');//key->number
person2.set([1,2,3],'onetwothree');//key->array
person2.set({1:'one'},'one');//key->object

for(let key of person2.keys())
{
    console.log(typeof(key));
}