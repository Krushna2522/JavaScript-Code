//Iterating through array using loops
//array.length returns total number elements inside array

let fruits=["apple","mango","grapes","banana"];
let length=fruits.length;
console.log(`Number of elements in fruits array is:${length}`);
console.log("Printing using For Loop:");
console.log('Fruits Present in an Array are:');
for(let i=0;i<length;i++)
{
    console.log(`${i}:${fruits[i]}`);
}
//Printing the Fruits in Uppercase format
console.log('Printing fruits name in Uppercase:');
for(let i=0;i<length;i++)
{
    let fruit=fruits[i].toUpperCase();
    console.log(fruit);
}

console.log("Printing using While Loop:");
console.log("Fruits Present in an Array are:");
let i=0;
while(i<length)
{
    console.log(`${i}:${fruits[i]}`);
    i++;
}
