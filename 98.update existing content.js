console.log(window);
console.log(document);
//Using innertext and textContent we can get or set the textual content of an html element;

const item1=document.querySelector('.firstName');
console.log(item1)
console.log(item1.innerText);//Print "Krushna"
console.log(item1.textContent);//Print "Krushna"
//So can we say both are same, no there is an difference between the innerText and textContent
//If an element have hidden text, 
//then textContent print the hidden text
//the innerText excludes hidden text while printing

const item2=document.querySelector('.middleName');
console.log(item2);
console.log(item2.innerText);//It prints "Ajay", so innerText prints excluding hidden text
console.log(item2.textContent);//It prints "Ajay Hidden Text is here", so textContent directly print including hidden text

//using textContent and innerText we can set new Values also

const item3=document.querySelector('.lastName');
console.log(item3);
console.log(item3.textContent);//Prints 'Atul'
item3.textContent="Rohit";
console.log(item3.textContent);//Prints 'Rohit'

const item4=document.querySelector('.name');
console.log(item4);
console.log(item4.innerText);//Prints 'Rushikesh'
item4.innerText="Dhananjay";
console.log(item4.innerText);//Prints 'Dhananjay'