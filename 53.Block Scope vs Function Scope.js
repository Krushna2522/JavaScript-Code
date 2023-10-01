//Block Scope and Function Scope
//Let and Const => It is Block Scope
//Var => It is Function Scope
/*
{
    It is Called as One Block
}
*/

{
    let firstName="Harshit";
    console.log(firstName);
}

//console.log(firstName);//It Gives an Error as firstName is not defined

let lastName="Patil";
console.log(lastName);

{
    var firstName="Krushna";
    console.log(firstName);
}
console.log(firstName);

if(true)
{
    let name="Krushna";
    console.log(name);
}
//console.log(name);//Here name is created using let so, it gives an error as name is not defined

if(true)
{
    var FirstName="Krushna";
    var LastName="Patil";
}
console.log(FirstName,LastName);//It does not give any error as the FirstName and LastName is created using var keyword

function printName()
{
    if(true){
        let firstName="Krushna";
    }
    //console.log(firstName)//It gives an error
}

printName();

function printFullName()
{
    if(true)
    {
        var FirstName="Krushna";
        var SecondName="Patil";
    }
    console.log(FirstName, LastName);
}
console.log(FirstName, LastName);