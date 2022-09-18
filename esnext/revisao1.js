// let e const " o let " tem escopo de bloco e escopo de function
// var  " não tem escopo de bloco"
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
 



const produto = 'iPad'
console.log(`${produto} é caro!`)//delimitar  as stringins pro crases

// Destructuring 
// tirar de dentro de algo, seja array, ou qualquer outra coisa... Desestruturar
// operador rest (...)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

//Desestruturando um array
const [x, , y] = [1, 2, 3]
console.log(x, y)

// dessestruturando atributos de um objeto
const { idade: i, nome } = { nome: 'ana', idade: 9 }
console.log(i, nome)