//It is a data structure which stores only unique elements no duplicates
const numbers=new Set([1,2,3,4]);
console.log(numbers);

const newNumbers=new Set([1,2,3,4,4,4,2,3,8,5,3,2]);
console.log(newNumbers);
//Indexing is not there and order is not maintain
console.log(newNumbers[3]);//Gives result as undefined

const mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add([34,56]);
mySet.add([34,56]);//Both arrays are different so both are present in set
console.log(mySet);

//To check any element is present or not .has() method is their

console.log(numbers.has(4));//gives output as true;
console.log(numbers.has(99));//gives output as false;

if(numbers.has(4))
{
    console.log("Number is Present");
}
else
{
    console.log("Number is Absent");
}

const tempNumbers=[1,2,3,4,5,3,2,5,3,6,7,4,7,8,3,2,6,7,8];
//We want only the unique elements
const uniqueElement=new Set(tempNumbers);
console.log(uniqueElement);
console.log(Array.isArray(uniqueElement));
console.log(typeof(uniqueElement));
let length=0;
for(let element of uniqueElement)
{
    length++;
}
console.log("Total number of Unique Elements are:",length);
console.log(uniqueElement.length);//Not Working gives undefined value