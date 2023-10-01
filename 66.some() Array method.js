//Some method returns true atleast a single array element satisfies the given condition
//If no array elements satisfies the given condition, so it return false as output

const numbers=[2,4,6,8,10,12,14,16,21,18];

const check=numbers.some((number)=>{
    if(number%2!=0)
        return true;
    return false;
});
if(check)
    console.log("Numbers array have an Odd Number");
else
    console.log("Numbers array can not have an Odd Number");


const userCart=[
    {itemId:2,itemPrice:23456},
    {itemId:4,itemPrice:34532},
    {itemId:6,itemPrice:45325},
    {itemId:3,itemPrice:98432}
];

//We have to check that an user cart contain an item with price greater than 40000 or not

const result=userCart.some((item)=>{
    if(item.itemPrice>40000)
        return true;
    return false;
})

if(result)
    console.log("User Cart contain an Item with price greater than 40000");
else
    console.log("User Cart can not contain any Item whose price is greater than 40000");