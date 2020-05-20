const carrinho = [
    '{"nome": "borracha","preco": 3.45}',
    '{"nome": "caderno","preco": 13.90}',
    '{"nome": "kit lapiseira","preco": 41.22}',
    '{"nome": "caneta","preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json) // Chama JSON.parse para transformar as strings em objects.
const apenasPreco = produto => produto.preco // recebe o elemento de entrada e retorna apenas o preço.

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)