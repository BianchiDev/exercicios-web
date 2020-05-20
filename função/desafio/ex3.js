//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function Potencia(base, expoente) {
    valor = base ** expoente
    return valor
}

console.log(Potencia(2, 3))


// forma do Professor


function expoente(base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
        //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))