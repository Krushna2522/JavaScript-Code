const numbers=[23,34,15,26,78,54,20];
console.log(numbers);

console.log("Using external call back function")
const square=function(number){
    return number*number;
}
const mapping=numbers.map(square);
console.log(mapping);

console.log("Using callBack function written inside function");
const result=numbers.map((num)=>{
    return num*num;
})
console.log(result);

const result1=numbers.map((number,index)=>{
    return `Number at index ${index} is ${number} and its Square is ${number*number}`;
})
console.log(result1);

//We have given and user information in array of object we have to map the userId and
//user name

const users=[
    {userId:12,userName:"ABC",age:45,city:"Pune"},
    {userId:25,userName:"LMN",age:36,city:"Mumbai"},
    {userId:17,userName:"PQR",age:44,city:"Nagpur"},
    {userId:19,userName:"STU",age:26,city:"Nashik"},
    {userId:38,userName:"MNO",age:43,city:"Patliputra"},
    {userId:27,userName:"XZY",age:46,city:"Manmad"}
];

const mapped=users.map((user)=>{
    let temp={};
    temp[user.userId]=user.userName;
    return temp;
});
console.log(mapped);

const temp=[54,84,21,36,97,52];

const newObj=temp.map((number,index)=>{
    let key=index;
    let value=number;
    let temp={};
    temp[key]=value;
    return temp;
})

console.log(newObj);
for(let element of newObj)
{
    console.log(element);
}