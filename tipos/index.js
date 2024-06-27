"use strict";
setTimeout(function () {
    const sallary = 100;
    console.log(sallary);
}, 2000);
function passCoordinates(coord) {
    console.log("X coordenadas" + coord.x);
    console.log("Y coordenadas" + coord.y);
}
const objCoord = { x: 398, y: 245 };
passCoordinates(objCoord);
//Proposições opcionais
function showNumbers(a, b, c) {
    console.log("A" + a);
    console.log("B" + b);
    console.log("C" + c);
}
//Validando argumento opcional
const ame = "Kaua";
const lastame = "Barros";
function validacao(firstname, lastName) {
    if (lastName !== undefined) {
        console.log("lastName foi validado");
    }
    else {
        console.log("lastName não foi validado");
    }
}
validacao(ame, lastame);
validacao(ame);
//Union Type
function showBalance(balance) {
    console.log("O balanço é de " + balance);
}
showBalance(500);
showBalance("100");
