//Generics
function showData<T>(arg: T):string {
    return `O Dado é ${arg}`

}

console.log(showData([1,2,3]))
console.log(showData(1))
console.log(showData(true))

function showObjectName<T extends {name: string}>(obj: T){
    return `O nome do objeto é ${obj.name}`

}

const myOBJ = {name: "Camisa", cor: "Branca"}
console.log(showObjectName(myOBJ))


//Generics com interfaces
interface MyObject<T, U> {
    name: string
    preco: T
    marca: U
}

type Camisa = MyObject<number, string>

const camisa:Camisa = {name: "Simples", preco: 19.9, marca: "Paraguaia"}

console.log(camisa)

//Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `O objeto ${key} tem a sua chave como ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}
console.log(getSomeKey(server, "ram"))

//Keyof type OPERATOR
type character = {name: string, age: number, license: boolean}

type C = keyof character

function showCharName(obj: character, name: C, age: C):string {
    return `${obj.name} ------ ${obj.age} ---- ${name}`

}

const MyCHAR: character = {
    name: "Kaua",
    age: 16, 
    license: true
}

console.log(showCharName(MyCHAR, "name", "age"))

//TypeOF TYPE OPERATOR
const username: string = "Kaua"
const username2: typeof username = "Osvaldo"

//Indexed access types
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 10000,
    description: "Optimus prime"
}

function showKM(km: Km) {
    console.log(`O veiculo tem o km de ${km}`)
}

showKM(newTruck.km)

interface A {}
interface B extends A {}

type MyTYPE = B extends A ? number: string

const somex: MyTYPE = 5

interface teste {
    showKm(): string
}
type MB = teste extends {showKm(): null} ? number:string

//Templace literals type
type teste = "teste"

type Custom Type = `Soma ${te}`