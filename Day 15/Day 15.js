

/* 
Create an Animal class.
The class will have name, age, color, legs properties and create different methods
*/


class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

  // method
    speak() {
        console.log(`${this.name} speaks.`);
    }

    describe() {
        console.log(`This is a ${this.color} ${this.constructor.name} named ${this.name}, aged ${this.age} with ${this.legs} legs.`);
    }
}

class Dog extends Animal {
    // Dog-specific method
    bark() {
        console.log("Woof! Woof!");
    }

    // Overriding 
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    // Cat-specific method
    purr() {
        console.log("Purr... Purr...");
    }

    // Overriding
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Buddy", 3, "golden", 4);
dog.describe();
dog.bark();
dog.speak();

const cat = new Cat("Whiskers", 2, "white", 4);
cat.describe();
cat.purr();
cat.speak();