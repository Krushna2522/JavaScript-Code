/*
if(condition)
{
    True Block
}
else
{
    False Block
}
*/

let winningNumber=19;
let userGuess=26
//console.log(userGuess,typeof(userGuess));
//userGuess=+userGuess;
if(userGuess===winningNumber)
{
    console.log("You are the Winner");
}
else
{
    console.log("Better Luck Next Time");
}

let temperature=50;
if(temperature < 0)
    console.log("Extremely Cold Outside");
else if(temperature <16)
    console.log("Cold Outside");
else if(temperature<25)
    console.log("Weather is Okay");
else if(temperature <45)
    console.log("Turn On AC, its Hot Outside");
else
    console.log("Turn on AC, its too much hot Outside");