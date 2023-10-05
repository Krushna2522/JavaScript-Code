console.log(window);//It is an object which is given by the javaScript
console.log(document);//The document object is presnet inside the window object
//using getElementById() we can access the html element through the ID, it returns the single value
const items1=document.getElementById("listItem");
console.log(items1);

//using  getElementsByClassName() we can access the html element through the Class, it returns the multiple values
const items2=document.getElementsByClassName("items");//this returns the multiple results so they are stored in the object
console.log(items2);//called HTML Collection it is an array like object, in which we can access through indexs and has the length property

//using getElementsByTagName() through which can access the element using tag name, it also returns the multiple values
const items3=document.getElementsByTagName('li');//There multiple results are also stored in the HTML Collection
console.log(items3);

//querySelector() is another method through which we can access the html element. It returns the single result
//To access the element through id using querySelector() method
const items4=document.querySelector("#listItem");
console.log(items4);//
//To access the element through class using querySelector() method
const items5=document.querySelector(".items");//There are multiple elements whos class is 'itmes' in this case it returns the first
console.log(items5);//element whose class is 'itmes'

//To access the element through tag name using querySelector() method
const items6=document.querySelector('li');//In this case also there are multiple elements who's tag name is li but it returns the first
console.log(items6);//element having tag name li

//querySelectorAll() is the method to acccess all the html elements having the same class name or the tag name
//All elements having same class name
const items7=document.querySelectorAll('.items');
console.log(items7);//It returns multiple results but it stores in NodeList not in HTMLCollection

//All elements having same tag name
const items8=document.querySelectorAll('li');
console.log(items8);//It returns multiple results but it stores in NodeList not in HTMLCollection


//The result of multiple elements get through getElementsByClassName and getElementByTagNmae are stored in HTMLCollection
//The result of multiple elements get through querySelectorAll are stored in NodeList
