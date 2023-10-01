class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(`${this.name} is eating food quitely`);
    }
    isCute(){
        return true;
    }
    isSuperCute(){
        return this.age<=11;
    }
};

const animal1=new Animal("Tiger",23);
animal1.eat();
console.log(animal1.isCute());
console.log(animal1.isSuperCute());

class Dog extends Animal{
    //I want to add one more property speed
    constructor(name,age,speed){
        super(name,age);//here we are calling the Super Class / Parent Class Constructor
        this.speed=speed;
    };
    //And we added an Dog's its own function
    runningSpeed(){
        console.log(`${this.name} is running at speed ${this.speed}kmph at age ${this.age}`);
    }
    //eat method is already in the parent class
    //and we want to again define in the child class
    eat(){
        console.log(`${this.name} is eating Biscuit`);
    }
};

const dog1=new Dog("Sheru",15,20);
dog1.eat();//In this case the Dog class eat function is get called
dog1.isCute();
dog1.isSuperCute();
dog1.runningSpeed();