//Narrowing -> Recurso para identificar de dado
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b == "string") {
        console.log(parseFloat(a) + parseFloat(b))

    } 
    else if (typeof a === "number" && b === "number") {
        console.log(a + b)
    }
}

sum(1, 2)
sum("1", "100198402194")

let valor: number = 0
//Operação
function operacao(arr: number[], operation: string | undefined) {
    if (operation === "sum") {
        for (const iterator of arr) {valor += iterator}
    }
    else if (operation === "multiplicacao") {
        for (const iterator of arr) {valor *= iterator}
    }
    else if (operation === "divisao") {
        for (const iterator of arr) {valor /= iterator}
    }
    else if (operation === "subtracao") {
        for (const iterator of arr) {valor -= iterator}
     }
     else {
        console.log("Valor indefinido, ")
     }
}

//Instance of
class User {
    name
    constructor(name: string) {
        this.name = name
    }
}
class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User('jhon')
const osvaldo = new SuperUser('osvaldo')


function userGreetings(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}`)
    }
    else {
        console.log("Olá")
    }
}
userGreetings(jhon)
userGreetings(osvaldo)
