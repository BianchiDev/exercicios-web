require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // esta tentando mudar o object, mas ele esta congelado com freeze
console.log(MinhaApp.nome)