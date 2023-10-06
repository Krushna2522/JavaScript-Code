console.log("Hello World");

const button1=document.querySelector('.btn1');
// console.log(button1);
button1.addEventListener('click',function(){
    console.log("First Button is Clicked");
    console.log(this);//In this case the current button is present
    //So we are able to print like
    console.log(this.textContent);
})

const button2=document.querySelector('.btn2');
//console.log(button2)
button2.addEventListener('click',()=>{
    console.log("Second Button is Clicked");
    console.log(this);//In this case window object is print
    //Here we are not able to do
    //console.log(this.textContent);
})