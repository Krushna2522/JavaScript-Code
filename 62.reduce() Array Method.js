const numbers=[45,68,32,15,97,854,45,23,658,621,84,12,78,95,642,35,6285,3145];

// I want sum of all the numbers from the numbers array

const sum=numbers.reduce((accumulator,currentElement)=>{
    //console.log(numbers[index]);
    //console.log(index);
    accumulator=accumulator+currentElement;
    // console.log(accumulator);
    return accumulator;
});

console.log(`Sum of the all the elements are:${sum}`);

//In above case the accumulator value is start from 0
//If we want to start the accumulator value from specific value then metion that value after the call back function
//Let I want to start accumulator value from 25 then,

const nextSum=numbers.reduce((accumulator,currentElement)=>{
    accumulator=accumulator+currentElement;
    return accumulator;
},25);
console.log(`Sum of the all the elements are:${nextSum}`);
console.log(`Difference is :${nextSum-sum}`);//Difference is of 25 so we are correct

const userCart=[
    {itemId:1,Price:34000},
    {itemId:2,Price:54000},
    {itemId:3,Price:32000},
    {itemId:4,Price:2600}
];

//Now I want the total cost user have to pay 

const totalAmount=userCart.reduce((accumulator,currentItem)=>{
    accumulator=accumulator+currentItem.Price;
    return accumulator;
},0);

console.log(`Total amount an customer has to Pay is:${totalAmount}`);