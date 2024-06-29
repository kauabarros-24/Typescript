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
const camisa = { name: "Simples", preco: 19.9, marca: "Paraguaia" };
console.log(camisa);
//Type parameters
function getSomeKey(obj, key) {
    return `O objeto ${key} tem a sua chave como ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name, age) {
    return `${obj.name} ------ ${obj.age} ---- ${name}`;
}
const MyCHAR = {
    name: "Kaua",
    age: 16,
    license: true
};
console.log(showCharName(MyCHAR, "name", "age"));
//TypeOF TYPE OPERATOR
const username = "Kaua";
const username2 = "Osvaldo";
const newTruck = {
    km: 10000,
    kg: 10000,
    description: "Optimus prime"
};
function showKM(km) {
    console.log(`O veiculo tem o km de ${km}`);
}
showKM(newTruck.km);
const somex = 5;
`Soma ${te}`;
