//pessoa -> 123 {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->{...}
//pessoa = {nome: 'Ana'} gera erro porque vc não pode atribuir para pessoa
Object.freeze(pessoa) // "freeze" esta congelando pessoa.
    // "freeze" congelou o nome Pedro e vai iguinorar toda tentativa.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) // object "joão" foi congelado.
console.log(pessoaConstante)