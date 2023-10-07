//The setInterval function takes two parameter
//1.The CallBack function which is get executed after the specified time interval
//2.minimum time delay
//The CallBack function can not get execute exactly after the completion of the specified time period
//After that specified time period it comes into the event queue
//And whenever the call Stack becomes empty
//that call back function is get executed
//In this case the callback function execute continuously after completion of the specified time interval

console.log("Hello World");

console.log("Script Started");
setInterval(()=>{
    console.log("Inside the setTimeout function")
},1000);

console.log("Krushna Deepak Patil");
// for(let i=0;i<100;i++)
// {
//     console.log("Hii Hello!")
// }
console.log("Script Ends");

//setInterval also returns an id

// const id=setInterval(()=>{
//     console.log("Inside the setTimeout function")
// },1000);
// console.log(id);
// clearInterval(id);