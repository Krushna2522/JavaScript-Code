//Cloning array using Spread Operator (...)
let number1=[65,37,82,96,37,89,27,58,26,38,97,64,23,65];
let number2=[...number1];
console.log(number1===number2);
console.log(`Existing Array:${number1}`);
console.log(`Newly Created Array:${number2}`);