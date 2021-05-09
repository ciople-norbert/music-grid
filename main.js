class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log('Hey I can speak!');
    }
}

class Dog extends Animal{
    #color = 'brown';
    
    constructor(name){
        super(name);
    }
    
    eat(){
        console.log('I can eat');
    }
}

class Cat extends Animal{
    #color = 'brown';
    
    constructor(name){
        super(name);
    }
    
    eat(){
        console.log('I can eat');
    }
}

const myDog = new Dog("Fifi");
myDog.speak();

const myCat = new Cat("Zeus");
myCat.speak();

const arr = [1, 2, 3 ,4];
const [a, b, ...rest]  = arr;
console.log(a, b);

const obj = {
    name: 'Name',
    value: 100
}

const {value} = obj;
console.log(value);