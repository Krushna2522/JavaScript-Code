//Events means any perticular actions taken on the web page by any user
//There are multiple events in javaScript => click, keypress, mouseover, mouseleave, submit are some events
//If we want to add an event listener on any element we have to use addEventListener() method

//I want to add an event listener on the button 
//as soon as the button is cliked print "You Clicked the Button"

const btn=document.querySelector('button');
console.log(btn);

// btn.addEventListener("click",function(){
//     console.log("You clicked on the Button");
// });

//We want when we click on the button we get textcontent of button printed

btn.addEventListener("click",function(){
    console.log(btn.textContent);//It prints Button1 on console
})