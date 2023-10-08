console.log("Hello World");
//We want to change the text and color of the given headings
//But it happens in the order
//one by one or after some time interval
const heading1=document.querySelector('.heading1');
//  console.log(heading1)
const heading2=document.querySelector('.heading2');
const heading3=document.querySelector('.heading3');
const heading4=document.querySelector('.heading4');
const heading5=document.querySelector('.heading5');
const heading6=document.querySelector('.heading6');
const heading7=document.querySelector('.heading7');
const heading8=document.querySelector('.heading8');
// function getRandomColor(){
//     let red=Math.floor(Math.random()*256);
//     let green=Math.floor(Math.random()*256);
//     let blue=Math.floor(Math.random()*256);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color=getRandomColor();
//     setTimeout(()=>{
//         heading2.textContent="Heading 2";
//         heading2.style.color=getRandomColor();
//         setTimeout(()=>{
//             heading3.textContent="Heading 3";
//             heading3.style.color=getRandomColor();
//                 setTimeout(()=>{
//                     heading4.textContent="Heading 4";
//                     heading4.style.color=getRandomColor();
//                     setTimeout(()=>{
//                         heading5.textContent="Heading 5";
//                         heading5.style.color=getRandomColor();
//                         setTimeout(()=>{
//                             heading6.textContent="Heading 6";
//                             heading6.style.color=getRandomColor();
//                             setTimeout(()=>{
//                                 heading7.textContent="Heading 7";
//                                 heading7.style.color=getRandomColor();
//                                 setTimeout(()=>{
//                                     heading8.textContent="Heading 8";
//                                     heading8.style.color=getRandomColor();
//                                 },1000);
//                             },2000);
//                         },3000);
//                     },2000);
//                 },1000);
//         },2000);
//     },2000);
// },1000);

//We can do the above work using the function

function helperFun(element,newText,color,time,onSuccess,onFailure){
    if(element){
        setTimeout(()=>{
            element.textContent=newText;
            element.style.color=color;
            onSuccess();
        },time);
    }
    else{
        onFailure();
    }
}

helperFun(heading1,'one','green',1000,()=>{
    helperFun(heading2,'two','orange',1000,()=>{
        helperFun(heading3,'three','blue',1000,()=>{
            helperFun(heading4,'four','voilet',1000,()=>{
                helperFun(heading5,'five','brown',1000,()=>{
                    helperFun(heading6,'six','pink',1000,()=>{
                        helperFun(heading7,'seven','black',1000,()=>{
                            helperFun(heading8,'eight','aqua',1000,()=>{
                                console.log("CallBack Hell is Ready");
                            },()=>{"heading8 element is not Exist"});
                        },()=>{console.log("heading7 element is not Exist")});
                    },()=>{console.log("heading6 element is not Exist")});
                },()=>{console.log("heading5 element is not Exist")});
            },()=>{console.log("heading4 element is not Exist")});
        },()=>{console.log("heading3 element is not Exist")});
    },()=>{console.log("heading2 element not Exist")});
},()=>{console.log("heading1 element not Exist")});