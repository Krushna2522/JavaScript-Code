//... it is an rest opeator
function myFunction(a,b,c)
{
    console.log("For First Function");
    console.log(`a=>${a}`);
    console.log(`b=>${b}`);
    console.log(`c=>${c}`);
}

myFunction(24,53,98);

function myFunction2(a,b,c)
{
    console.log("For Second Function");
    console.log(`a=>${a}`);
    console.log(`b=>${b}`);
    console.log(`c=>${c}`);
}

myFunction2(35,67,18,90);//Here output get of only 35,67,18 but we have passed 90

//So, at the when we don't have any idea that how many number of parameters are going to passed, use rest operator

function myFunction3(...Param)
{
    //Param is an Array, which stores the passed arguments to the function
    console.log(Array.isArray(Param));
    console.log(Param);
    console.log(`Total Number of Parameters are:${Param.length}`);
    for(let element of Param)
    {
        console.log(element);
    }
}

myFunction3(45,64,27,86,48,38,27);

function myFunction4(a,b,...c)
{
    console.log(`a=>${a}`);
    console.log(`b=>${b}`);
    console.log(`c=>${c}`);
}

myFunction4(24,51,67,48,49,42,43,23,134);


function addAllNumbers(...Numbers)
{
    let sum=0;
    for(let num of Numbers)
    {
        sum+=num;
    }
    //console.log(typeof sum);
    console.log(`Sum of the all elements are:${sum}`);
}

addAllNumbers(35,27,85,97,10,38,23,16);