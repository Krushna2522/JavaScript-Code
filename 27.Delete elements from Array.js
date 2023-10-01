//For deleting elements from array there are multiple methods are there
//1.To delete last element of an array --> .pop()
//2.To delete starting element of an array --> .shift()
//3.To delete elements from inbetween from array --> .splice(index of element,number of elements to delete from that index);

let numbers=[34,67,42,7,23,83,14,37,83,28,48,42,84,28,48,93,53,27,86,42,89];
console.log(numbers);

//To remove element from last
let element=numbers.pop();
console.log(`The removed element is: ${element}`);
//To remove element from start
element=numbers.shift();
console.log(`The removed element is: ${element}`);

//If we want to delete multiple elements from array use splice method, it returns array of deleted elements
element=numbers.splice(4,5);
console.log(Array.isArray(element));
console.log(element);