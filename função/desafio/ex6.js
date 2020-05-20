/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function calculandoPorcentagem1(capitalIncial, taxaDeJuros, tempoDeAplicação) {
    console.log(` O montante do Juros Simples é  ${capitalIncial + (capitalIncial*(taxaDeJuros/100)*tempoDeAplicação)}`)
}

function calculandoPorcentagem2(capitalIncial, taxaDeJuros, tempoDeAplicação) {
    console.log(`O valor da aplicação sob regime de juros composto é ${capitalIncial*(((1 + taxaDeJuros)**tempoDeAplicação)/100)}`)
}
calculandoPorcentagem1(100, 10, 2);
calculandoPorcentagem2(100, 10, 2);
//Método do Professor

function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));