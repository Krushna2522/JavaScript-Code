person={};
console.log(person); //Prints the empty object

person.name="Krushna";
console.log(person); //Now one key and value is added to object
person.age=23;
// person.gender="Male";
//person[gender]="Male";//Here it gives an error as key in the object are the string 
person["gender"]="Male";//So we have to write gender in " "
//person.person age=23;//It gives error as there is an space in key name
person["person age"]=23;//It does not give any error
person.hobbies=['Guitar','Listening Music','Sleeping','Playing Circket'];
console.log(person);

//To add the key name dynamically
const key = "email";
person.key="abc@gmail.com";//But in this case the key created using name key
console.log(person); //key:'abc@gmail.com';
person[key]='abc@gmail.com';//It gives the desired output
console.log(person);//email:'abc@gmail.com'