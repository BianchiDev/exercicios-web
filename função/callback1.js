// fuction call back, função que cham de volta.
const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`) // essa função pode ser pasada para ForRin
}

fabricante.forEach(imprimir) // dentor do array exite a function "for Each".
fabricante.forEach(function(fabricante) {
        console.log(fabricante)
    })
    /* 
     *  A FUnção Kallback é uma função  que será chamada quando um evento acontecer  EVENTO = LUNP 
     */