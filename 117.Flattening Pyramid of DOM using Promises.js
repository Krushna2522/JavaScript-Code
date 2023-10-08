heading1=document.querySelector('.heading1');
// console.log(heading1)
heading2=document.querySelector('.heading2');
heading3=document.querySelector('.heading3');
heading4=document.querySelector('.heading4');
heading5=document.querySelector('.heading5');
heading6=document.querySelector('.heading6');
heading7=document.querySelector('.heading7');
heading8=document.querySelector('.heading8');


function changeHelper(element,text,color,time){
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolved();
            }
            else
            {
                rejected(`${element} is not an element`);
            }
        },time);
    });
};

changeHelper(heading1,'heading 1','red',1000)
.then(()=>{return changeHelper(heading2,'heading 2','yellow',1000)})
.then(()=>{return changeHelper(heading3,'heading 3','blue',1000)})
.then(()=>{return changeHelper(heading4,'heading 4','orange',1000)})
.then(()=>{return changeHelper(heading5,'heading 5','red',1000)})
.then(()=>{return changeHelper(heading6,'heading 6','black',1000)})
.then(()=>{return changeHelper(heading7,'heading 7','aqua',1000)})
.then(()=>{return changeHelper(heading8,'heading 8','green',1000)})
.catch((error)=>{console.log(error)});
