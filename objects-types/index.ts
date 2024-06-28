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
