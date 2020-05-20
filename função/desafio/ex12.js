// Faça um algoritmo que calcule o fatorial de um número.
function calculandoFatorial(fator) {
    if (fator == 0) {
        return 1
    } else {
        return fator * calculandoFatorial(fator - 1)
    }
}
console.log(calculandoFatorial(10))