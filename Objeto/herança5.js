console.log(typeof String) // "typeof" é uma finção que mostra o que esta ao lado é (ex: String é uma  fuction)
console.log(typeof Array) // function
console.log(typeof Object) //function
    // são função e todos tem o atributo prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')

}

console.log('Escola Cod3r'.reverse())
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // Array numeral
console.log(['a', 'b', 'c'].first()) // Array com letras

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // resutado foi lascou tudo invertido