console.log("Hello world");

//Understand the Promises
//Using promises we can handle the future work which is going to happens
//Promise is an object which has state and value
//Promises are also the asychronous program
//They are also executed by the brower API.
console.log("Script Started");
console.log("Make the bucket of the foods"); 
const bucket=['vegetables','chips','salt','rice','coffee'];
console.log("Created Buckedt is ",bucket);

//Promise Creation
const friedRicePromise=new Promise((resolved,rejected)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt'))
    {
        resolved("Fried Rice is Ready");
    }
    else
    {
        rejected("Not able to do Fried Rice");
    }
});

friedRicePromise.then((success)=>{
    //then method is execute when an promise is resolved.
    console.log(success);
}).
catch((error)=>{
    //catch method is execute when an promise is rejected.
    console.log(error);
})



setTimeout(()=>{
    console.log("I am inside setTimeout");
},1000);

//The callBack function return by brower in case of events, setTimeout, setInterval are get stored in Event Queue
//The function which are return by brower in case of promises like then, catch are get stored in the Micro Task Queue
//Micro Task Queue has high priority than the Event Queue
//So, the function inside the Micro Task Queue is get executed first than the Event Queue is get executed

for(let i=0;i<100;i++){
    console.log("Hello");
}

console.log("Script Ends");