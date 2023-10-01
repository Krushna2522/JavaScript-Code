//It returns the Array of values who statifies the mentioned condition;
//I want to create an array of even elements from the given array

const numbers=[45,78,15,35,94,82,61,47,92,37,86,51,46,75];
console.log(numbers);

const evenNumber=numbers.filter((number)=>{
    if(number%2===0)
    {
        return number;
    }
});

console.log(evenNumber);
//console.log(numbers);

//I Want to create an array of the odd elements from numbers array

const oddNumbers=numbers.filter((number)=>{
    if(number%2!=0)
    {
        return number;
    }
});
console.log(oddNumbers);

//I Want array of element which are greater than 50 from numbers array

const greaterNumber=numbers.filter((number)=>{
    if(number>50)
    {
        return number-50;
    }
});

console.log(greaterNumber);