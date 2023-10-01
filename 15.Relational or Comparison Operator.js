//The reational operator in the JavaScript are >,>=,<,<=,==,===,!=,!==
//The reational opeartor return the result in the boolean values i.e true or false

let a=34;
let b=25;

console.log(a<b); //gives false;
console.log(a<=b); //gives false;
console.log(a>b); //gives true;
console.log(a>=b); //gives true;

let x="34";
let y=34;

console.log(x==y);// gives true, == called as loose equality, as it check only the values not the data type of the values;
console.log(x===y);// gives false, === called as strict equality, as it check the values as well as the data type of the values;

console.log(x!=y); //gives false, as it only check for the value and not for the values;
console.log( x!==y); //gives true, as it checks for the value as well as for the data type of value.