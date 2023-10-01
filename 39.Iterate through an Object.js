//For Iterating through an object we use for in loop

const person={
    firstName:"Krushan",
    lastName:"Patil",
    age:23,
    mobNo:444444444444
};

console.log(person);
console.log("Iterating through object using for in loop");
for(let key in person)
{
    console.log(`Key:${key}, Value:${person[key]}`);
}

console.log(" ");  

for(let key in person)
{
    console.log(`${key} = ${person[key]}`);
}
console.log();
console.log("Iterating through object using Object.keys()");
console.log(Object.keys(person));//It returns the array of keys of object
console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person))
{
    console.log(`${key} = ${person[key]}`);
}