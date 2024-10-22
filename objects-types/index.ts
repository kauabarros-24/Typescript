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

console.log(coord)

//Extend types
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human{
    superPowers: string[]
}

const kaua: Human = {
    name: "Kaua",
    age: 30
}

const SuperAutista: SuperHuman = {
    name: "Osvaldo",
    age: 25,
    superPowers: ["hiperfoco", "nerdice", "hard skills"]
}

console.log(SuperAutista)
console.log(kaua)

//Intersection types

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Human & Gun

const people:HumanWithGun = {
    name: "Arnold",
    age: 66,
    type: "5.56 ahgr",
    caliber: 5.56

}

console.log(people)

//Read only arrays
let array : ReadonlyArray<string>= ["1", "2", "3"]

console.log(array)
array.forEach((item) => {
    console.log("Fruta" + item)
})

array = array.map((item) => {
    return `Fruta: ${item}`
})

console.log(array)

//Tuplas
type fiveNumbers = [number, number, number, number, number]

const MyNumberArray: fiveNumbers = [1, 2, 3, 4, 5,]
console.log(MyNumberArray)

type nameAndAge = [number, string]

const nameAge: nameAndAge = [16, "Kaua"]

console.log(nameAge)

//Number com readOnly
function showNumber(numbers: readonly [number, number]) {
    console.log(numbers[0], numbers[1])

}

showNumber([1,2])