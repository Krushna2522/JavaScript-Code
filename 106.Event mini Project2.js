console.log("Hello World");

function generateRandomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    const color=`rgb(${red},${green},${blue})`;
    return color;
}
const body=document.querySelector('div');
const button=document.querySelector('.btn');
console.log(button);
button.addEventListener('click',(event)=>{
    const color=generateRandomColor();
    body.style.backgroundColor=color;
    event.currentTarget.textContent=`Body Color : ${color}`;
});