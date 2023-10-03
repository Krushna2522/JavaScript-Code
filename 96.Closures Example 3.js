function myFunction(){
    let counter=0;
    return function()
    {
        if(counter<1){
            console.log("Hi! You Called Me");
            counter++;
        }
        else
            console.log("You have already Called Me");
    }
}

const myfun1=myFunction();
myfun1();//"Hi! You Called Me"
myfun1();//"You have already Called Me"
myfun1();//"You have already Called Me"
const myfun2=myFunction();
myfun2();//"Hi You Called Me"
myfun2();//"You have already Called Me"
myfun2();//"You have already Called Me"