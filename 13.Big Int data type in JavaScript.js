let myNumber1=123;
console.log(myNumber1,typeof(myNumber1));//It gives the type of data as Number
let myNumber2=123n;
console.log(myNumber2,typeof(myNumber2));//It gives the type of data as Bigint
console.log(Number.MAX_SAFE_INTEGER);//Up to this value we are able to store the number value beyoud it we have to use Bigint
console.log(Number.MIN_SAFE_INTEGER);//Beyoud this value we are not able to store the value in Number we have to use Bigint

let a=123;
let b=123n;
//console.log(a+b);//It gives an Error as both elements are of different type
a=1345n;
b-2478n;
console.log(a+b);
