//Run this code in Browser console tab
console.log(this);//It prints an window object in browser but here it prints the empty obejct
function myFun(){
    console.log(this);
}
myFun();//It also prints the window object 
//Window object is provided by the JavaScript
console.log(Window===this);//It gives true in browers console