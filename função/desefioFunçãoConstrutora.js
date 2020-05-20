// função classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('João')
p2.falar()

// Transformando em construction fuction
function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()
    // function Factory "Possui arrow function interno" "traduzindo" função de fábrica.
const criarPessoa = nome => { // arrow function "traduzindo" função de seta.
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa('joão')
p3.falar()