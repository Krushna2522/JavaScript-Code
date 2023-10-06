console.log("Hello World");

const body=document.body;
body.addEventListener('keypress',(e)=>{
    console.log(e.key);
});

const button=document.querySelector('.btn');
console.log(button);

button.addEventListener('mouseover',function(){
    console.log("Mouse Over event Occurred");
});

button.addEventListener('mouseleave',()=>{
    console.log("Mouse Leave event Occurred");
})