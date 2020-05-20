console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // O 'a' será visivel fora do arquivo
exports.b = 2 // O 'b' será visivel fora do arquivo
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}
console.log(module.exports)

module.exports = { publico: true }