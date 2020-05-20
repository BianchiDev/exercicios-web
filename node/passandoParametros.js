module.exports = function(...nomes) { // (...nomes) Esse array recebe quantos nomes forem necessários!
    return nomes.map(nome => `Boa semana ${nome}!`)
}