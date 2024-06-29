"use strict";
//Campos em classes
class User {
}
let user = new User();
console.log(user);
user.name = "Kaua";
console.log(user.name);
//Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user2 = new NewUser("Kaua", 16);
console.log(user2.name, user2.age);
//Campo readonly
class Car {
    constructor(car) {
        this.wheels = 4;
        this.car = car;
    }
}
const fusca = new Car("fusca");
console.log(fusca.car, fusca.wheels);
//Herança e super
class Machine {
    constructor(name) { this.name = name; }
}
const Trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) { super(name); this.guns = guns; }
}
const Destroyer = new KillerMachine("Destroyer", 4);
console.log(Destroyer);
//Métodos
class Dwarf {
    constructor(name) { this.name = name; }
    greeting() {
        console.log("Hey Stranger");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy, Dwarf);
jimmy.greeting();
//This
class Caminhao {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O modelo do caminhão é ${this.model} e o hp é ${this.hp}`);
    }
}
const volvo = new Caminhao("Volvo", 100);
volvo.showDetails();
//Name
class Name {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + "" + this.surname;
    }
}
const kaua = new Name("Kaua", "Martins");
console.log(kaua.name, kaua.surname);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPOST = new BlogPost("ARROZ É RUIM");
console.log(myPOST.itemTitle());
//Override
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Herdando alguma coisa");
    }
}
//Visibilidade
