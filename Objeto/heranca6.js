function Aula(nome, VideoID) {
    this.nome = nome
    this.VideoID = VideoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simular o operador new 
function novo(f, ...params) {
    const obj = {} // notação literal de object
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)