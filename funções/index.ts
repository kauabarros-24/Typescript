//Funções que não retornam nada

function semRetorno(): void { console.log("Sem retorno")}

semRetorno()

//
const eu: string = "Kaua"

function ola(palavra: string):string {
    return `Olá ${palavra}`
}

ola(eu)

//
function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função")
    const greet = f(userName)
    console.log(greet)
}

preGreeting(ola, "kaua")
preGreeting(ola, "Osvaldo")

//Generic functions

function firstElement<T>(arr: T[]):T {
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a", "b", "c"]))

//2
function mergeObject<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObject({name: "Kaua"}, {age: 16, job: "CEO | PROGRAMMER"})

console.log(newObject)

//Constraints

function bigNumber<T extends number | string>(a: T, b: T): T {
    let grande: T
    if (+a > +b)
        grande = a
    else 
        grande = b

    return grande
}

console.log(bigNumber(1, 2))
console.log(bigNumber("10", "110"))

//Parâmetros opcionais
function choice(name: string, greet?: string) {
    if (greet)
        return `Olá ${greet} ${name}`
    return `Olá ${name}`
}
console.log(choice("Kaua", "Doutor"))
console.log(choice("Kaua"))
//Tipo de parâmetros

function mergeArrays<T>(objx: T[], objy: T[]) {
    return objx.concat(objy)
}

console.log(mergeArrays<number | string>([1,2], [1,2,"A"]))

//Default
function somaDefault(n: number, m = 10) {
    return n + m
}
console.log(somaDefault(10))
console.log(somaDefault(10, 16))

//Unknow
function x(m: unknown) {
    if (Array.isArray(m))
        console.log(m[0])
    else if (typeof m === "number")
        console.log("M é um número")
    else 
        console.log("Não é nada")
}

x([1, 2, 3])
x(1)
x("A")

//Never
function showErrorMessage(msg: string): never{
    throw new Error(msg)
}


//Rest operators

function sumALL(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}
console.log(sumALL(1,2,3,4,5))

//
function showProductions({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e o preço é R$ ${price}`
}
const shirt = {name: "camisa", "price": 99.99}

console.log(showProductions(shirt))