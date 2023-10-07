//The setTimeout function takes two parameter
//1.The CallBack function which is get executed after the specified time interval
//2.minimum time delay
//The CallBack function can not get execute exactly after the completion of the specified time period
//After that specified time period it comes into the event queue
//And whenever the call Stack becomes empty
//that call back function is get executed


console.log("Hello World");

console.log("Script Started");
setTimeout(()=>{
    console.log("Inside the setTimeout function")
},1000);

console.log("Krushna Deepak Patil");
for(let i=0;i<100;i++)
{
    console.log("Hii Hello!")
}
console.log("Script Ends");

//Output is:
//Hello World
//Script Started
//Krushna Deepak Patil
//Hi Hello 100 times
//Script Ends
//Inside the setTimeout function

//The setTimeout function returns an Id 

console.log("Script Started");
const id=setTimeout(()=>{
    console.log("Inside the setTimeout");
},5000);
console.log("The Id of the setTimeout function is :",id);
console.log("Script End");
clearTimeout(id);