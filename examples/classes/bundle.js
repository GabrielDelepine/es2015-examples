'use strict';

class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age += 1;
    }
}

class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        return this.age;
    }
}

let toto = new Personal('Toto', 5, 'F', 'kid', 'watching TV and making noise');

console.info(`Toto's age`, toto.age);
console.info(`Toto's age after being increment`, toto.incrementAge());
