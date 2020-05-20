/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
function Divisao(dividendo, divisor) {
    dividendo <= 0
    console.log(resultado = (dividendo / divisor | 0)) // O operador "|" substituia function Math.floor para converter um float em número intéiro.
    console.log(resto = (dividendo % divisor | 0))

}
Divisao(11, 4)

//Função do Professor

function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)