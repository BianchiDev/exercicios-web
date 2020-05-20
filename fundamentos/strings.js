const escola = "cod3r"
    // string é uma cadeia de caracter
console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // codigo da tabela ask 51 html.

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!")) // comando para concatena
console.log(escola.replace(/\d/, 'e')) // impressão regular, substitua todas os múmeros por "e"

console.log('ana,maria,pedro'.split(',')) //converter string em array