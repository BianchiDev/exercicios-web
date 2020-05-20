//Object.preventExtensions  Não pode extender atributos, mas pode excluir ou modificar
const produto = Object.preventExtensions({
    nome: 'Qual quer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag // excluiu o atributo "tag: promoção"
console.log(produto)

//Object.seal não consegui adicionar,excuir, mas pode modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // selou pessoa e com isso ele não pode ser deletado.
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes