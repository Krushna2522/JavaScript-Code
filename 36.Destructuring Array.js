let number=[34,64,26];
// let num1=number[0];
// let num2=number[1];
// let num3=number[2];
// console.log(`${num1} ${num2} ${num3}`);
// Above work is time consuming using array destructuring we can make easy

//Here we created variable using let key word
let [num1,num2,num3]=number; //Here num1,num2,num3 are non constant variable
console.log(`${num1} ${num2} ${num3}`);

//To create vaiable using const key word
const[n1,n2,n3]=number; //Here n1,n2,n3 are constant variable
console.log(`${num1} ${num2} ${num3}`);

let fullName=["Krushna","Deepak","Patil"];
let [firstName,middleName,lastName]=fullName;
console.log(`${firstName} ${middleName} ${lastName}`);

let temp=[34,53,62,63,47,47,27,28];
let [a,b,...c]=temp;
console.log(a);
console.log(b);
console.log(c);