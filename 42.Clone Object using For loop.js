const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
};

console.log(obj1);//Existing Object

const newObject1={};
//Cloning Using for in loop
for(let key in obj1)
{
    newObject1[key]=obj1[key];
}

console.log(newObject1);

const newObject2={};
//Cloning Using for of loop
for(let key of Object.keys(obj1))
{
    newObject2[key]=obj1[key];
}

console.log(newObject2);//Newly created object using Existing object