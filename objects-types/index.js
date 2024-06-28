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
console.log(coord.y);
