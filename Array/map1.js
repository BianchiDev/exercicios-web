//"function map" um laço que mapea o array para outro elemento 
const nums = [1, 2, 3, 4, 5]

// FOR com propósito
let resultado = nums.map(function(e) {
    return e * 20

})
console.log(resultado)
const soma10 = e => e + 10
const triplo = e => e * 3
const dobro = e => e * 2
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(dobro).map(paraDinheiro)
console.log(resultado)