//Clone is process of creating new same entity from the existing entity
//It easily possible in case of premitive data type
//Not in case of reference data type
let numbers1=[34,52,76,54];
let numbers2=numbers1;
console.log(numbers1===numbers2);//It gives true, as both are pointing to the same memory location.
let num1=[23,45,65];
let num2=[23,45,65];
console.log(num1===num2);//It gives false, as both are pointing to the difference memory location.

//Cloning array using slice method

let numbers3=numbers1.slice(0);//.slice() return complete array
console.log(numbers3===numbers1)//Gives false as both are array stored at different memory location
console.log(numbers3);