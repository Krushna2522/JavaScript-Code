console.log("Hello World");

function firedRicePromise(){
    return new Promise((resolved,rejected)=>{
        const bucket=['vegetables','rice','salt','coffee','sugar'];
        //We can also use the setTimeout method here
        setTimeout(()=>{
            if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
                resolved("Fried Rice is Ready");
            }
            else{
                rejected("Not able to make Fried Rice");
            }
        },1000);
    })
};

firedRicePromise()
    .then((message)=>{console.log(message)})
    .catch((error)=>{console.log(error)});