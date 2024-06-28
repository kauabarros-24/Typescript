"use strict";
//Narrowing -> Recurso para identificar de dado
function sum(a, b) {
    if (typeof a === "string" && typeof b == "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && b === "number") {
        console.log(a + b);
    }
}
sum(1, 2);
sum("1", "100198402194");
let valor = 0;
//Operação
function operacao(arr, operation) {
    if (operation === "sum") {
        for (const iterator of arr) {
            valor += iterator;
        }
    }
    else if (operation === "multiplicacao") {
        for (const iterator of arr) {
            valor *= iterator;
        }
    }
    else if (operation === "divisao") {
        for (const iterator of arr) {
            valor /= iterator;
        }
    }
    else if (operation === "subtracao") {
        for (const iterator of arr) {
            valor -= iterator;
        }
    }
    else {
        console.log("Valor indefinido, ");
    }
}
//Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('jhon');
const osvaldo = new SuperUser('osvaldo');
function userGreetings(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}`);
    }
    else {
        console.log("Olá");
    }
}
userGreetings(jhon);
userGreetings(osvaldo);
