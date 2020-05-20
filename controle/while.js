//laço de repetição while
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
    // while é usado para verificar quantidades indeterminadas de vezes//
while (opcao != -1) { // Enquanto o laço for verdadeiro continui executando até que fique false.
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')