// tratamento de erro.
//Palavras reservadas para tratar o erro " try{},catch{},finally{}"
function tratarErroELancar(erro) {
    //throw new Erro('...')
    //throw 10
    //throw true
    // throw   'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)