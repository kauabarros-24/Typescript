//

let numbers: number[] = [1,2,3]

numbers.push(10)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}
const num: Array<number> = [1,2,4]
console.log(num)

//ANY
const todos: Array<any> = [1, 2, 3, "Kaua", true]
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
    
}