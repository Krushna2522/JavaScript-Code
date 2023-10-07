const body=document.body;
const id=setInterval(()=>{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let randomColor=`rgb(${red},${green},${blue})`;
    body.style.backgroundColor=randomColor;
},1000);

const button=document.querySelector('button');
button.addEventListener('click',()=>{
    clearInterval(id);
    button.textContent=body.style.backgroundColor;
});