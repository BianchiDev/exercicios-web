// coleção dinâmica de pares, chave e valor.
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = { // atributo pai
    modelo: 'A4',
    valor: 89000,
    propietario: { // atributo filho
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42

    }],
    caulularValorSeguro: function() {
        //...
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.propietario.endereco
delete carro.caulularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // ".lengh" diz o tamanho do Array