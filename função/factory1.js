// fuction factory é uma função que fagrica um novo objeto.
//Factory simples        Factory = Fabrica.
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())