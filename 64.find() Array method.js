//It returns the first element from the array who satsfies the condition
const myArray=["Hello","cat","dog","Lion"];
//We want the element whose length is 3
const ans=myArray.find((item)=>{
    if(item.length===3)
        return item;
});
console.log(ans);//It gives the answer as the "Cat", but there are multiple elements whose length is 3.
//But the find() method returns the first element from the array who satisfies the condition.

const users=[
    {userId:1,city:'kopergaon',userName:'abc'},
    {userId:2,city:'nashik',userName:'xyz'},
    {userId:3,city:'manmad',userName:'lmn'},
    {uesrId:4,city:'koeprgaon',userName:'pqr'},
    {uesrId:5,city:'manmad',userName:'ghi'}
]

console.log(users);

//It want the first users id and name whos city is 'Manmad'

const answer=users.find((user)=>{
    if(user.city==='manmad')
        return user;
});

console.log(`The resultant user is UserId : ${answer.userId} and UserName: ${answer.userName}`);
