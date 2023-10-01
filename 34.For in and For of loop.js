//For of and For in are the loop through which we can iterate an array
let fruits=["apple","mango","orange","grapes","banana"];

console.log("Printing using For of loop:")//For of loop directly gives the values present in Array
for(let fruit of fruits)
{
    console.log(fruit);
}

console.log("Printing using For in loop:");//For in loop gives the index using that we can access the element
for(let index in fruits)
{
    console.log(`${index}:${fruits[index]}`);
}