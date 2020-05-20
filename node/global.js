//console.log(global)
global.MinhaApp = Object.freeze({ // o freeze congela o object, com isso ele não será modificado.
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})