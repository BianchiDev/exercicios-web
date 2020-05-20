const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' // concatenação
const template = ` Olá ${nome}!` // recebe o nome que foi declarado na constante 

console.log(concatenacao, template)
    // expressções...
console.log(`1 + 1 = ${1+1}`)
const up = texto => texto.toUpperCase() // transforma para letra maiúscula.
console.log(`Ei... ${up('cuidado')}!`) // chamando a função