//Phases in Event Execution
//1.Event Bubbling / Event Propagation
//2.Event Capturing
//3.Event Delegation
// console.log("Hello World");
const child=document.querySelector('.child');
const parent=document.querySelector('.parent');
const grandparent=document.querySelector('.grandParent');

// console.log(child);
// console.log(parent);
// console.log(grandparent);

//Now we add an click event on the child
//Event Bubbling
child.addEventListener('click',()=>{
    console.log("Event Bubbled at Child")
})

parent.addEventListener('click',()=>{
    console.log("Event Bubbled at Parent");
})

grandparent.addEventListener('click',()=>{
    console.log("Event Bubbled at GrandParent");
});

document.body.addEventListener('click',()=>{
    console.log("Event Bubbled at Docuemnt.body");
})

//Event Capturing

child.addEventListener('click',()=>{
    console.log("Event Captured at Child");
},true);

parent.addEventListener('click',()=>{
    console.log('Event Captured at Parent');
},true);

grandparent.addEventListener('click',()=>{
    console.log('Event Captured at grandParent');
},true);

document.body.addEventListener('click',()=>{
    console.log('Event Captured at Document.body');
},true);