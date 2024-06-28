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
