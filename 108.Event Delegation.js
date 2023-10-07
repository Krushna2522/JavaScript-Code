// console.log("Hello World");
//Event Delegation
//If we add an evnet listener only on the root element that is greandParent

const grandParent=document.querySelector('.grandParent');
// console.log(grandParent);
// grandParent.addEventListener('click',()=>{
//     console.log("You Clicked on something");
// }); //Now if you clicked on the grandParent => "You Clicked on Something"
// //if you clicked on the Parent => "You Clicked on Something"
// //if you clicked on the Child => "You Clicked on Something"

//Now if we want actually which button is get pressed
//For that we used Event Object

grandParent.addEventListener('click',(event)=>{
    console.log(`Event is triggered by Clicking on :`, event.target);
    console.log(`But the event listener is added on :`, event.currentTarget);
});

//event.target gives the element through which an event is triggered
//event.currentTarget gives that element on which the event listener is added
