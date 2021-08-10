// novo recurso do ES2015
// desestruturando apartir de um object

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // {} -> operador de desestruturação.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // tire da estrutura "nome" e "idade" e atrubua n e i para chamar 
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // para desestruturar um dado devemos tercuidado para não ter erro.//

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero) // cep esta undfined pq no Objete pessoa, não possui esse atributo.

