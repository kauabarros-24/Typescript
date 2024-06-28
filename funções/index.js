"use strict";
//Funções que não retornam nada
function semRetorno() { console.log("Sem retorno"); }
semRetorno();
//
const eu = "Kaua";
function ola(palavra) {
    return `Olá ${palavra}`;
}
ola(eu);
//
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(ola, "kaua");
preGreeting(ola, "Osvaldo");
//Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//2
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObject({ name: "Kaua" }, { age: 16, job: "CEO | PROGRAMMER" });
console.log(newObject);
