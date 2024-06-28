interface Product {
    name: string
    price: number
    isAvaliable: true
}
function showDetails(produto: Product) {
    console.log(`O nome do produto é ${produto.name} e custa ${produto.price}`)
    if (produto.isAvaliable)
        console.log("O produto está disponível")
}

const camisa:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true

}
showDetails(camisa)
showDetails({name: "camisa", price: 19.9, isAvaliable: true})

//Propriedades opcionais em interface
interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o email ${user.email}`)
    if (user.role)  
        console.log(`A função do usuário é: ${user.role}`)
}
const user1: User = {
    email: "matheus.com", 
    role: "Admin"
}

showUserDetails(user1)

//Propriedades read_only
interface Car {
    brand: string
    readonly wheels: number


}
const fusca:Car = {
    brand: 'VW',
    wheels: 4,
}
console.log(fusca)

//Index signature

interface CoorObject {
    [index: string]: number
}

let coord: CoorObject = {
    x: 10
}
console.log(coord.x)
coord.y = 15

console.log(coord.y)

