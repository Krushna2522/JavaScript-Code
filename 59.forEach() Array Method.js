//forEach() method takes an callback function
//That callBack function spcifies what work should be done

const numbers=[34,53,62,63,15,98];
console.log(numbers);
//Our need to multiply by 2 to each element of numbers.
function multiplyBy2(number,index){
    console.log(`At index ${index}:${number} and 2*${number}=${2*number}`);
}
for(let index in numbers)
{
    multiplyBy2(numbers[index],index);
}

//The same is also done using forEach loop
console.log("Using forEach loop");
numbers.forEach(multiplyBy2);

numbers.forEach((number,index)=>{
    console.log(`${index}:${number} and 2*${number}=${2*number}`);
});

//We an array of objects, in which each object contains firstName and age property
//we have to print firstName of the Person

const users=[
    {firstName:"ABC",age:34},
    {firstName:"XYZ",age:25},
    {firstName:"LMN",age:29},
    {firstName:"PQR",age:39},
    {firstName:"STU",age:18}
]

console.log(users);

// function printUser(person){
//     console.log(`PersonName:${person.firstName} and PersonAge:${person.age}`);
// }

// users.forEach(printUser);

users.forEach((/*person*/{firstName,age})=>{
    console.log(`PersonName:${firstName} and PersonAge:${age}`);
});

const temp=[78,65,32,41,27];
temp.forEach((number,index)=>{
    console.log(number*index);
})