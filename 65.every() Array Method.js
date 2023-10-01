//every() method checks that all the array elements satifies the condition
//If all the elements satisfies the condition then it return the True as Output and else returns the False as output

const numbers=[3,4,6,8,10];
//We have to check as the all the elements of array numbers are even or not
const check=numbers.every((number)=>{
    if(number%2===0)
        return true;
    return false;
});
console.log(numbers);
if(check)
    console.log("All the numbers in Array number is Even");
else
    console.log("All the numbers in Array number is not Even");


const userCart=[
    {itemId:3,itemPrice:34256},
    {itemId:2,itemPrice:52563},
    {itemId:4,itemPrice:9855},
    {itemId:1,itemPrice:23233}
];

//We have to check all the items price is greater than 10000 or Not

const result=userCart.every((item)=>{
    if(item.itemPrice<10000)
        return false;
    return true;
})

if(result)
{
    console.log("The Price of All the items is Greater than 100000");
}
else
{
    console.log("Not the all price of the items is Greater than 100000");
}