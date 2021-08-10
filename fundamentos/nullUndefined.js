let valor // não vou inicializar//
console.log(valor)

valor = null // ausência de valor// Vazia
console.log(valor)
    // erro ao acessar o que esta nulo//

const produto = {}
console.log(produto.preço) // não esta definido o preço dentro do produto.
console.log(produto)

produto.preço = 3.50
console.log(produto)
produto.preço = undefined // evitar atribuir undefined
    //delete produto.preço
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)