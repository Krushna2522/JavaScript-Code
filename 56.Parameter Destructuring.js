const person={
    firstName:"Krushna",
    lastName:"Patil"
}
console.log(person);

function getName(person){
    firstName=person.firstName;
    lastName=person.lastName;
    console.log(`Full Name of Person is:${firstName} ${lastName}`);
}

getName(person);

//Using Parameter Destructuring
function getName1({firstName,lastName})
{
    console.log(`Full Name of Person is:${firstName} ${lastName}`);
}

getName1(person);