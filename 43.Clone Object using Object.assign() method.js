const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3"
};

const newObject=Object.assign({},obj1);//we have to destination and source and it returns an object
console.log(newObject);

const obj2={
    key4:"value4",
    key5:"value5"
}

const newObject2=Object.assign(obj2,obj1);
console.log(newObject2);