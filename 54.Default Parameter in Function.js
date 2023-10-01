function add1(num1,num2)
{
    let ans=num1+num2;
    console.log(ans);
}
add1(35,36);

function add2(num1,num2){
    //There is only on parameter is passed so there is num2 is an defined,
    //let ans=num1+num2;//here we get an error
    if(num2===undefined)
    {
        num2=45;
    }
    let ans=num1+num2;
    console.log(ans);
}
add2(45);
add2(78,36);

function add3(num1,num2=0)
{
    let ans=num1+num2;
    console.log(ans);
}
add3(34);//Did not get any error, because of default parameter, in this case num1=34 and num2=0
add3(38,92);//Here num1=38 and num2=92
