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
