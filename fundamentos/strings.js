const escola = "cod3r"
    // string É UMA CADEIA DE CARACTER 
console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(5))


console.log(escola.charCodeAt(3)) // codigo da tabela ask 51 html.

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!")) // comando para concatena
console.log('Escola' + escola + "!")// Outra forma de concatenação

console.log(escola.replace(/\d/, 'e')) // expressão regular, substitua todas os múmeros por "e"

console.log('ana,maria,pedro'.split(',')) //converter string em array
