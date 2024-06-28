"use strict";
function showDetails(produto) {
    console.log(`O nome do produto é ${produto.name} e custa ${produto.price}`);
    if (produto.isAvaliable)
        console.log("O produto está disponível");
}
const camisa = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showDetails(camisa);
showDetails({ name: "camisa", price: 19.9, isAvaliable: true });
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role)
        console.log(`A função do usuário é: ${user.role}`);
}
const user1 = {
    email: "matheus.com",
    role: "Admin"
};
showUserDetails(user1);
const fusca = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
let coord = {
    x: 10
};
console.log(coord.x);
coord.y = 15;
console.log(coord);
const kaua = {
    name: "Kaua",
    age: 30
};
const SuperAutista = {
    name: "Osvaldo",
    age: 25,
    superPowers: ["hiperfoco", "nerdice", "hard skills"]
};
console.log(SuperAutista);
console.log(kaua);
const people = {
    name: "Arnold",
    age: 66,
    type: "5.56 ahgr",
    caliber: 5.56
};
console.log(people);
//Read only arrays
let array = ["1", "2", "3"];
console.log(array);
array.forEach((item) => {
    console.log("Fruta" + item);
});
array = array.map((item) => {
    return `Fruta: ${item}`;
});
console.log(array);
const MyNumberArray = [1, 2, 3, 4, 5,];
console.log(MyNumberArray);
const nameAge = [16, "Kaua"];
console.log(nameAge);
//Number com readOnly
function showNumber(numbers) {
    console.log(numbers[0], numbers[1]);
}
showNumber([1, 2]);
