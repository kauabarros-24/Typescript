setTimeout(function() {const sallary: number = 100; console.log(sallary)
},2000)

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordenadas" + coord.x)
    console.log("Y coordenadas" + coord.y)
}

const objCoord = {x: 398, y: 245}

passCoordinates(objCoord)

//Proposições opcionais
function showNumbers(a: number, b:number, c:number) {
    console.log("A" + a)
    console.log("B" + b)
    console.log("C" + c)
}

//Validando argumento opcional
const ame: string = "Kaua"
const lastame: string = "Barros"

function validacao(firstname: string, lastName: string) {
    if (lastName !== undefined) {
        console.log("lastName foi validado")
    } else {
        console.log("lastName não foi validado")
    }
}

validacao(ame, lastame)

//Union Type
function showBalance(balance: string  | number ) {
    console.log("O balanço é de " + balance)
}

showBalance(500)
showBalance("100")