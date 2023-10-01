const key1="ObjKey1";
const key2="ObjKey2";
const value1="ObjValue1";
const value2="ObjValue2";

const temp1={};
temp1[key1]=value1;
temp1[key2]=value2;

console.log(temp1);

const temp2={
    [key1]:value1,
    [key2]:value2
};

console.log(temp2);