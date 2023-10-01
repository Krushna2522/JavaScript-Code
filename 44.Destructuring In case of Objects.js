const person = {
    firstName:'abc',
    lastName:'xyz'
};

const {firstName, lastName} = person;
console.log(firstName, lastName);
// console.log(last);

const employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};
// Destructuring the object into our variables
const { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);