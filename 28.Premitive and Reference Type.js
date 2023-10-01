//Premitive data types are -->Number, String, Boolean, Undefined, Null;
//Reference data types are -->Objects, Arrays, Functions
let num1=34;
let num2=num1;
console.log(`Num1 Value:${num1}`);
console.log(`Num2 Value:${num2}`);
num1++;
console.log(`Num1 Value:${num1}`);
console.log(`Num2 value:${num2}`);//i.e both num1 and num2 are pointing to difference memory location
//Above, the changes we made in num1 variable are not reflected in num2 variable.
//As well as if we made changes in num2 variable the changes are not reflected in num1 variable.
//In case of Premitives the memory allocated in Stack.

let numbers1=[34,52,64,74,37];
let numbers2=numbers1;
console.log(`Array1-->${numbers1}`);
console.log(`Array2-->${numbers2}`);
//If we push an element into an numbres1 array
let element=100;
numbers1.push(element);
//Now both the arrays are
console.log(`Array1-->${numbers1}`);
console.log(`Array2-->${numbers2}`);//i.e both the numbers1 and numbers2 are pointing to the same memory location.
//The output shows, if we make changes in the array1 are get refelcted in array2
//As well as if make changes in array2, the changes are get refelced in array1
//Number data type is Premitive and Array is reference data type
//We can say that Premitives are copy by their values and the References are copy by addresses
//In case of Reference the memory allocated in Heap.