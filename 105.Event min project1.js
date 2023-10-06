//When we click on the button, the background color of the button is get changed
console.log("Hello World");

const button=document.querySelector('.btn');
console.log(button);
button.addEventListener('click',()=>{
    button.textContent="Color Changed To Red";
    button.style.backgroundColor="red";
});