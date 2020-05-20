// estrutura de controle "if" igual a "se"
function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.2) // não impriu no console porque a nota é < 7.

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('é verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])