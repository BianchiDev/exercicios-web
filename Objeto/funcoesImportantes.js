const pessoa = { // Object foi criado com anotação literal.
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
    SEXO: 'feminino'
}

console.log(Object.keys(pessoa)) // Keys tradução" chave". Capitura todas as chaves do Object literal.
console.log(Object.values(pessoa)) // Values tradução "vlores". Capitura todos os valores o Object literal.
console.log(Object.entries(pessoa)) // entries tradução " entradas" Capitura todos os valores e chaves e coloca em uma array.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // forEach vai percorrer os eleméntos do array criado em object.
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', { //"defineproperty" definir uma propriedade de uma função
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object assign (ECMASscript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // a:4 sobescrevel o object a:1
const obj = Object.assign(dest, o1, o2) // O object o1,o2 estam concatenados dentro de dest pela function assign

Object.freeze(obj)
obj.c = 1234
console.log(obj)