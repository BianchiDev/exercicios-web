//ES8: Object.values/Pbjsct.entries
const obj = { a: 1, B: 2, c: 3 }
console.log(Object.values(obj)) // valores dos atributos dos meus objetos
console.log(Object.entries(obj)) // matriz ou sejá, um array de array

//Melhoria de anotação Literal
const nome = 'Carla,' // não precisa mais colocar nome: "carla"
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())