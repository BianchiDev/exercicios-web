const peso1 = 1.0 // constante ""const"
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // saber se o o pesso1 é inteiro ou não
console.log(Number.isInteger(peso2)) // saber se o o pesso2 é inteiro ou não

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // converte ponto flutuante em valor binário
console.log(typeof media) // diz qual é o tipo ("number")

console.log(typeof Number) // tipo function