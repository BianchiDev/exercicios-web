console.log(typeof console) // typeof mostra o quê a função é
console.log(Math.ceil(6.1)) // 'Math' arredonda para cima//

const obj1 = {}
obj1.nome = 'Bola'
    // obj1 ['nome'] = 'Bola2'
console.log(obj1.nome) // console é um object


function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()