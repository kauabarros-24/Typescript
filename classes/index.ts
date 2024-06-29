//Campos em classes

class User {
    name!: string
    age!: number
}

let user = new User()

console.log(user)

user.name = "Kaua"
console.log(user.name)

//Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const user2 = new NewUser("Kaua", 16)

console.log(user2.name, user2.age)


//Campo readonly
class Car {
    car
    readonly wheels = 4
    constructor(car:string) {this.car = car}
}


const fusca = new Car("fusca")

console.log(fusca.car, fusca.wheels)

//Herança e super
class Machine  {
    name
    constructor(name:string) {this.name=name}
}

const Trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns
    constructor(name:string, guns:number) {super(name); this.guns = guns}
 }

const Destroyer = new KillerMachine("Destroyer", 4)
console.log(Destroyer)

//Métodos
class Dwarf {
    name
    constructor (name:string) {this.name = name}
    greeting() {
        console.log("Hey Stranger")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy, Dwarf)

jimmy.greeting()

//This
class Caminhao {
    model;hp;
    constructor(model:string, hp:number) {
        this.model=model
        this.hp=hp
    }
    showDetails() {
        console.log(`O modelo do caminhão é ${this.model} e o hp é ${this.hp}`)
    }
    
    
    
}
const volvo = new Caminhao("Volvo", 100)

volvo.showDetails()

//Name
class Name {
    name; surname;
    constructor(name: string, surname:string) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + "" + this.surname;
    }
}

const kaua = new Name("Kaua", "Martins")

console.log(kaua.name, kaua.surname)

//Herança de interface
interface showTitle {
    itemTitle(): string
}
class BlogPost implements showTitle {
    title;
    constructor(title:string) {
        this.title=title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`
    }
}

const myPOST = new BlogPost("ARROZ É RUIM")

console.log(myPOST.itemTitle())

//Override
class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("Herdando alguma coisa");
    }
}

//Visibilidade
