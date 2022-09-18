//Arrow Function,  ""function anonimy"
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
// this esta assoiciado ao um local dentro da arrow function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/* parametro defult Capacidade de em
     ciama de em cima de um atributo de função
    consegir definir um valor PADRÃO */
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('Sou mais forte')

// Operador rest OU spred
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))