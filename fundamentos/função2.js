//aramazendo uma função em uma vairavel
// capas de criar uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
    // Armazenando uma função arrow em uma variável
const soma = (a, b) => { // forma reduzida de construir uma function.
    return a + b
}
console.log(soma(2, 3))

// retorna implicito
const subtracao = (a, b) => a - b // retorno implicito de return
console.log(subtracao(2, 3)) // erofranch 

const imprimir2 = a => console.log(a) // function de um único params.
imprimir2(' Legal!!!')