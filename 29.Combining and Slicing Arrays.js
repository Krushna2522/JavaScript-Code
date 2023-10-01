//Combining --> Joining the two Arrays
//Slicing --> The the perticular part of Arrays

//Combining an Array
let number1=[34,32,63,85,97,37,28,58];
let number2=[56,27,26,87,18];
let combined=number1.concat(number2);
console.log(Array.isArray(combined));
console.log(combined);

//Slicing Of an Array
console.log(number1.slice(3,7));//it give the element from index 3 upto index 6, index 7 is excluded
console.log(number1.slice(2,6));//it gives the elements from index 2 upto index 5, index 6 is excluded
console.log(number1.slice(2));//it gives the elements from index 2 to upto the last element
console.log(number1.slice());//it gives the complete array