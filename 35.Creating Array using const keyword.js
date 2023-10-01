//Creating Array using const keyword

let num1=98;
const num2=87;
console.log(`Num1:${num1}`);
console.log(`Num1:${num2}`);
num1=num1+45;
//num2=num2+37;//Gives an error as it is constant type variable, we are not able to change value
console.log(`Num1:${num1}`);
console.log(`Num1:${num2}`);

//So, we also create an array using const keyword

const newArray=[34,62,73,53,83,24,54];
console.log(newArray);
newArray.push(55);//we think it gives array, but don't give an array. We can add/remove/update element from const array.
console.log(newArray);

let temp=[34,62,74];
//newArray=temp;//It gives an array as our newArray variable is declared constant
//Creating array using const keyword is an good practice