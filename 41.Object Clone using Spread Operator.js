const obj={
    Key1:"Value1",
    Key2:"Value2",
    Key1:"Value3"//keys in the object must be unique, if same key decleared, last value assign is it's value.
};
console.log(obj);

const obj1={
    Key1:"Value1",
    Key2:"Value2",
    Key3:"Value3",
    Key4:"Value4"
};

const obj2={
    Key1:"Value5",
    Key2:"Value6",
    Key5:"Value7",
    Key6:"Value8"
};

console.log(obj1);

const newObject1={...obj1};
console.log(newObject1);
//Combining two objects value into another new object
const newObject2={...obj1,...obj2};
console.log(newObject2);

//We have an array and we want to convert it into object 
//in a way that the index become its key and value becomes its value

const info=["Krushna","Deepak","Patil"];

const newObject3={...info};
console.log(newObject3);
