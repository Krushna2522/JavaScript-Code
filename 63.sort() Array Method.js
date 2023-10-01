//Sort Mthod is used to Sort an array in ascending or decending order.
//Increasing or Decreasing order
const numbers=[5,9,1200,400,300];
numbers.sort();
console.log(numbers);
//In above case, we think we got result like: [5,9,300,400,1200]
//But the actual result we got is like: [1200,300,400,5,9]
//As the sort method consider the element as string then sort.
//In above case the sorting done according to ASCII values.

const alpha=['c','e','a','w','y'];
alpha.sort();
console.log(alpha);
//To sort the Numeric Values
const Numbers=[5,9,1200,400,3000];
//console.log(`Before Sorting : ${Numbers}`);
Numbers.sort((a,b)=>{
    if(a<b)
        return -1;
    else if(a>b)
        return 1;
    else
        return 0;
});
console.log(`After Sorting : ${Numbers}`);


//To make sorting in descending order
const newNumber=[78,54,3,98,52,71,26,247];
function myComparator(num1,num2){
    if(num1>num2)
        return -1;
    else if(num1<num2)
        return 1;
    else
        return 0;
};
newNumber.sort(myComparator);
console.log(newNumber);

const product=[
    {productId:2,price:34457},
    {productId:5,price:25763},
    {productId:1,price:56732},
    {productId:4,price:45738},
    {productId:6,price:34672}
]

//To sort the products according to the Product Id
//console.log(product);
// const sortedProducts1=product.sort((item1,item2)=>{
//     if(item1.productId < item2.productId)
//         return -1;
//     else if(item1.productId > item2.productId)
//         return 1;
//     else 
//         return 0;
// });

//console.log(sortedProducts1);
//console.log(product);

//To sort the products according to the Product Price in Descending Order

console.log(product);

const sortedProducts2=product.sort((item1,item2)=>{
    if(item1.price > item2.price)
        return -1;
    else if(item1.price < item2.price)
        return 1;
    else
        return 0;
});

console.log(sortedProducts2);