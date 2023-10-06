console.log("Hello World");

const buttons=document.querySelectorAll('button');
console.log(buttons);//prints an nodelist with all buttons

//Now we can use the loop to add an event to element
for(let button of buttons){
    button.addEventListener('click',function(){
        console.log(`You Clicked on ${this.textContent}`);
    })
}

//Here we can use any type of loop to traverse the NodeList and add the event to element

