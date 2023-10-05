//getElementsByClassName, getElementsByTagName returns the multiple elements in the form of HTMLCollection
const items1=document.getElementsByClassName('items');
console.log(items1);//It prints an HTMLCollection list as below
// HTMLCollection(4) [li.items.firstName, li.items.middleName, li.items.lastName, li.items.name]

let items2=document.getElementsByTagName('li');
console.log(items2);//It also prints an HTMLCollection list as below
// HTMLCollection(4) [li.items.firstName, li.items.middleName, li.items.lastName, li.items.name]

//querySelectorAll returns the multiple elements in the form of NodeList
const items3=document.querySelectorAll('.items');
console.log(items3);//It prints an NodeList as below
// NodeList(4) [li.items.firstName, li.items.middleName, li.items.lastName, li.items.name]

//To Traverse the HTMLCollection we only use the
//Simple for loop and for of loop and not able to use the foreach() method
//Iterate HTMLCollection using simple for loop
let length=items2.length;
for(let i=0;i<length;i++)
{
    let item=items2[i];
    item.style.color="red";
    item.style.backgroundColor="yellow";
}

//Iterate HTMLCollection using for of loop
for(let item of items2)
{
    item.style.color="blue";
    item.style.backgroundColor="gray";
}

//Iterate HTMLCollection using forEach method
// items2.forEach((item)=>{
//     item.style.color='blue';
//     item.style.backgroundColor='yellow';
// });//But it gives error as forEach method is not work on HTMLCollection
//So we can convert the HTMLCollection -------> Array

let newItems=Array.from(items2);
console.log(Array.isArray(newItems));
newItems.forEach((item)=>{
    item.style.color='blue';
    item.style.backgroundColor='yellow';
});// It works successfully

//The NodeList we can traverse using any type of loops
//We can use simple for loop, for of loop, forEach method

let size=items3.length;
for(let i=0;i<size;i++)
{
    let item=items3[i];
    item.style.color="red";
    item.style.backgroundColor="gray";
}

for(let item of items3){
    item.style.color='black';
    item.style.backgroundColor='White';
}

items3.forEach((item)=>{
    item.style.color="green";
    item.style.backgroundColor='gray';
})