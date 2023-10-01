//fill method is used to initialized an array with perticular number or item

const myArray=new Array(10).fill(-1);//Here we are adding 10 -1 element into an Array
console.log(myArray);

//Now we can also fill the array below way

myArray.fill(100,2,6);//Here 100 is fill from index 2 to 5, index 6 is exclusive, it is not considered
console.log(myArray);

