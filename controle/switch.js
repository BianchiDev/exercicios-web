// estrutura de controle "switch e break"
const imprirResultado = function(nota) {
    switch (Math.floor(nota)) { // switch é para multiplas seleções.
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break //sai do bloco caso seja execultado.
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}
imprirResultado(10)
imprirResultado(9)
imprirResultado(8)
imprirResultado(7)
imprirResultado(6)
imprirResultado(5)
imprirResultado(4)
imprirResultado(3)
imprirResultado(2)
imprirResultado(1)
imprirResultado(0)
imprirResultado(-01)