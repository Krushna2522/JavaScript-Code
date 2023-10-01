//String is the Combination of Multiple Characters
let firstName="Krushna"; //"Krushna" it is an String
//String have the Index. 0 based index. We can able to access the elements using Index.
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);
console.log(firstName[4]);
console.log(firstName[5]);
console.log(firstName[6]);

//To get the total length of the string, there is an property length using we can get the length of an string

let length = firstName.length;
console.log("The length of string is: ",length);

//To print the last character of the string

console.log("The Last Character of the Entered String is: ",firstName[length-1]);

//To remove the Spaces from the string we use the trim() fumction

let firstname="   Krushna           ";
console.log("The length before trim: ",firstname.length);
firstname=firstname.trim(); //as the string is immutable, the trim() function return new string
console.log("The length after trim: ",firstname.length);

//To convert all the character of string from lowercase to uppercase there is an function toUppercase()

let newString="krushna";
console.log("Before: ",newString);
newString=newString.toUpperCase(); //As the string is immutable in JavaScript, toUppercase() return new string
console.log("After: ",newString);

//To convert all the character of string from uppercase to lowercase there is an function toLowercase()

let tempString="KRUSHNA";
console.log("Before: ",tempString);
tempString=tempString.toLowerCase();
console.log("After: ",tempString);

//slice() is the function/method used to get the perticular part of the string
//.slice(start,end); start-->Inclusive and end-->Exclusive

let finalString="Krushna Deepak Patil";
console.log("Slicing Result: ",finalString.slice(2,8));
console.log("Slicing Result: ",finalString.slice(4,14));
console.log("Slicing Result: ",finalString.slice(1)); //Start printing from index 1 and go to end of the string