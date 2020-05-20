//(trabalho1 e trabalho recebe valores boleanos)//
function compras(trabalho1, trabalho2) {
    const comprarSorvet = trabalho1 || trabalho2 // operador lógico " ou "
    const comprarTv50 = trabalho1 && trabalho2 // oedrador lógico " e "
        //const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwise xor = ou exclusivo.
    const comprarTv32 = trabalho1 != trabalho2 // outro tipo de operador " ou exclusivo"
    const manterSaudadvel = !comprarSorvet // operador unitário " "negação lógica.

    return { comprarSorvet, comprarTv50, comprarTv32, manterSaudadvel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))