//Arrays are the collection of multiple elements either of same type or different type
//Arrays are the ordered collection of the elements
let fruit="Mango";
console.log(fruit);

let fruits=["Apple","Mango","Grapes","Banana"];
console.log(fruits);

//We can access the elements of array through the index

console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits[3]);

let numbers=[1,2,3,12,34,53,54,63,25,19];
console.log(numbers);

let mixed=[23,54,"Mango","Banana",true,undefined,null,false];
console.log(mixed);

//We can update into the array using the index of an array
console.log(`At third index ${mixed[3]} is present`);
mixed[3]="Apple";//Updated Array
console.log(`After updation at third index ${mixed[3]} is present`);
console.log(mixed);

//Array is an type of object;
console.log(typeof(mixed)); //gives object as an output

//To check given entity is an array or not
//Array.isArray(entityName);
console.log(Array.isArray(mixed));//gives true as an output
let tempObject={};
console.log(Array.isArray(tempObject));//gives false as an output
