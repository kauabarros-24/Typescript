"use strict";
//Generics
function showData(arg) {
    return `O Dado é ${arg}`;
}
console.log(showData([1, 2, 3]));
console.log(showData(1));
console.log(showData(true));
function showObjectName(obj) {
    return `O nome do objeto é ${obj.name}`;
}
const myOBJ = { name: "Camisa", cor: "Branca" };
console.log(showObjectName(myOBJ));
