function hello(x){
    const a="var1";
    const b="var2";
    return function(){
        console.log(a,b,x);
    }
}
const result=hello("Krushna");
result();//It prints "var1 var2 Krushna" 