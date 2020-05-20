// fuction call back, função que cham de volta.
const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}

fabricante.forEach(imprimir) // dentor do array exite a function "for each".
fabricante.forEach(function(fabricante) {
    console.log(fabricante)
})