//?. -> It is syntax for the optional chainging
//It is a way for the error handling
//as undefined.key it gives an error, So befoe accessing an key from undefined we check that it is undefined or not

const user={
    firstName:'Krushna',
    address:{houseNo:'456',area:'I.U.D.P'}
};
console.log(user);

let result=user.address.houseNo;
console.log(result);//Gives result as 456

//But we try to access the property which is not existed in user object
let result1=user.schoolAdd;
console.log(result1);//It gives an output as undefined
//But if we access like
//let result2=user.schoolAdd.area;
//console.log(result2);//It gives an error as we doing undefined.key ---> gives error
//In this case we use the optional chaining
let result2=user?.schoolAdd?.area;
console.log(result2);//Now it gives an output as Undefined