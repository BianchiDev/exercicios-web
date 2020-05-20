console.log('a =', a) //a variável reservada 'var a = 2' sofreo o hoisting
var a = 2
console.log('a =', a)
    //----------
console.log('a =', b)
let b = 2
console.log('a =', b)
    // definido com "let" não ocorre o hoisting e gera um erro.