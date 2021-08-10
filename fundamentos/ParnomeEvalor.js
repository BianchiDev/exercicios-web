// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 ( é o local físico do seu código foi definido)

function exec() {
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}
//objetos são grupos aninhados de pares nome/valor//
const Cliente = { // anotação litaral de object
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)