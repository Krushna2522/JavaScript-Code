//Lexical Scoping

let var1="Krushna";
function printName()
{
    console.log(var1);//Here we did not get any error, function printname did not get variable var1,
    //so it check its lexical environment
    let var2="Patil";
    function printFullName()
    {
        console.log(var1, var2);//Same here it did not get any error, it check its lexical environment
    }
    printFullName();
}

printName();