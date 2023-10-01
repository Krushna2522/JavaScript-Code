//Iterables are on which we are able to apply an loop 
//Examples of Iterables are strings, array
const firstName="Krushna";//String is an Iterables
for(let letter of firstName)
{
    console.log(letter);
}
const numbers=[22,42,53,15,36,63,67,37,28,58,35];//Array is an Iterables
for(let number of numbers)
{
    console.log(number);
}
const persons={
    name:"Krushna",
    age:54,
    id:34,
    city:"Manmad"
};
//So, Objects are not iterables
// for(let person of persons)
// {
//     console.log(person);//It gives an error that persons is not an iterables.
// }