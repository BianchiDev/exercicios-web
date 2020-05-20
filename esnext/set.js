// Não aceita repetição / não indexada
// "size" serve para saber o tamanho de "set"
//"has" serve para saber se o elemento de "set" existe ou não.
const times = new Set()
times.add('Vasco')
times.add('São Paula').add('Palmeiras').add('Corinhitias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) // size é para saber o tamanho do elemento de set.
console.log(times.has('vasco')) // vasco está iniciando com letra menúscula
console.log(times.has('Vasco')) // Vasco está iniciando com letra maiúscula.
times.delete('Flamengo')
console.log(times.has('Flamengo'))
    // outro exemplo
const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nome)
console.log(nomeSet)