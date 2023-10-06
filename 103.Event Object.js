console.log("Hello World");
//The brower WebAPI at the time giving callback function give an object 
//called event object which stores the overall information about event.

console.log("Hello World");

const buttons=document.querySelectorAll('button');
console.log(buttons);//prints an nodelist with all buttons

//Now we can use the loop to add an event to element
for(let button of buttons){
    button.addEventListener('click',(event)=>{//Now we can use the arrow functions
        console.log(`You Clicked on ${event.currentTarget.textContent}`);
        console.log(event);
        console.log(event.currentTarget);//currentTarget gives element on which event listener is added
        console.log(event.target);//target gives the element throught which an event is occured
    })
}

//Here we can use any type of loop to traverse the NodeList and add the event to element

