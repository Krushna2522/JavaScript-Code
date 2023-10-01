//Program to check the number is prime number or not
let number=29;
let flag=true;
for(let i=2;i<number;i++)
{
    if(number%i==0)
    {
        flag=false;
        break;
    }
}
if(flag==true)
    console.log(`Entered Number ${number} is Prime NUmber`);
else
    console.log(`Entered Number ${number} is not a Prime Number`);

console.log("Print the odd number between 1 to 10");
for(let i=1;i<=10;i++)
{
    if(i%2==0)
        continue;
    console.log(i);
}