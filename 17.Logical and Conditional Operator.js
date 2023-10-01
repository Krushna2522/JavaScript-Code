//The logical and conditional operator in javascript are AND OR and NOT
//AND --> &&
//OR -->||
//NOT --> !

//AND --> gives result true when all conditions are true, if one condition is false it result in false
//OR --> gives result true when any one condition is true, if all conditions are false then it result in false;

console.log(true && true && true && true && true); //gives true as an output
console.log(true && true && true && false && true); //gives false as an output
console.log(false || false || true || false); //gives true as an output
console.log(false || false || false || false); //gives false as an output

//&& --> start checking from first condition, as soon as it get any falsy value, it returns that value else return the last truthy value
//|| --> start checking from first condition, as soon as it get any truthy value, it returns that value else return the last falsy value

console.log(true && true && "Krushna"); //gives "Krushna" as output
console.log(true && true && " " && "Krushna"); //gives " " as output
console.log(false || "" || "Krushan"); //gives "Krushna" as output
console.log(false || "" || undefined || false || undefined); //gives null as output