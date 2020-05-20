console.log(this === global) // this aponta para module.exports(false)
console.log(this === module) // this aponta para module.exports (false)

console.log(this === module.exports) // this aponta para module.exports( thue)
console.log(this === exports) // this aponta para module.exports (thue)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // Dentro de uma fuction, o "this" não aponta para "modele.exports"
    console.log(this === module.exports) // Dentro de uma fuction, o "this" não aponta para "exports"
    console.log(this === global) // this aponta para global

}

logThis()