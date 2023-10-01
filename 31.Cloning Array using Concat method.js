//Concat join the two arrays

let numbers1=[56,73,28,95,37,28,17,37,48];
let numbers2=[].concat(numbers1);
console.log(numbers1===numbers2);//both array are created at different memory location
console.log(`Existing Array is:${numbers1}`);
console.log(`Newly created Array is:${numbers2}`);

