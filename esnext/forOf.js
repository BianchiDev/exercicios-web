// "for of" percorrer os elementos das estruturas
for (let letra of "Cod3r") {
    console.log(letra)
}
//outro exemplo

const assuntosEcma = ['Map', 'Set', 'Promes']

for (let i in assuntosEcma) { //usando "for in"
    console.log(i)
}
for (let assunto of assuntosEcma) { // usando "for of"
    console.log(assunto)
}
// outro exemplo
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
// outro exemplo
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}