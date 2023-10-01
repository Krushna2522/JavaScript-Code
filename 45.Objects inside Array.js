const ObjectArray=[
    {userId:1,firstName:"abc",gender:'male'},
    {userId:2,firstName:"xyz",gender:'female'},
    {userId:3,firstName:"pqr",gender:'male'},
    {userId:4,firstName:"lmn",gender:'female'}
]

console.log(ObjectArray);

for(let object of ObjectArray)
{
    console.log(`Priting infomation of user with userId :${object.userId}`);
    for(let key in object)
    {
        console.log(`${key}=${object[key]}`);
    }
}

// const [{firstName},{userId,gender}]=ObjectArray;
// console.log(firstName);
// console.log(userId);
// console.log(gender);
//Destructuring throgh the array of an object
const[{userId:user1Id,firstName:first},{userId:user2Id,gender}]=ObjectArray;
console.log(user1Id);
console.log(first);
console.log(user2Id);
console.log(gender);