//For Insertion in Array, there are multiple options
//1.To insert element at the end of Array ---> push()
//2.To insert element at the begining of Array --> unsift()
//3.To insert element at the inbetween of Array --> splice()

let numbers=[34,53,26,73,27,16,23,42,52];
console.log(numbers);

//To insert an element at the end of array
let elementToinsert=79;
numbers.push(elementToinsert);
console.log(numbers);

//To insert an element at the start of array
elementToinsert=64;
numbers.unshift(elementToinsert);
console.log(numbers);

//To insert an element at the specific index 
elementToinsert=100;
numbers.splice(3,0,elementToinsert);
console.log(numbers);
//To insert multiple elements
numbers.splice(5,0,12,35,68,98);
console.log(numbers);
