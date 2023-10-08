console.log("Hello World");

//promise.resolve(value) return an promise with value as value

Promise.resolve(5); //It returns an resolved promise with the value 5
const myPromise=Promise.resolve(5);
myPromise
    .then((value)=>{console.log(value)});//It prints 5

//Or we can also do in this way

Promise.resolve(5)
    .then((value)=>{console.log(value)});//It also prints 5

//the then method always return the promise 

function newPromise(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Krushna");
        }
        else
        {
            reject("Error");
        }
    })
};

newPromise()
    .then((value)=>{
        console.log(value); //Prints "Krushna"
        return value + " Deepak"//===> return Promise.resolve(value +" Deepak");
    })
    .then((value)=>{
        console.log(value);//Prints "Krushna Deepak"
        return Promise.resolve(value +" Patil")//====> return value + " Patil";
    })
    .then((value)=>{
        console.log(value);//Prints "Krushna Deepak Patil"
        return undefined //return Promise.resolve(undefined);
    })
    .then((value)=>{
        console.log(value);//Prinst "Undefined"
    });

//Here we are created promise chaining