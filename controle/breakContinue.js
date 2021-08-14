//estrutura de controle "break" causa desvil de fluxo// continue interrompeu o índece e pulou para a próximo índice
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //desvia o fluxo de "for".
    }
    console.log(` ${x} recebe = ${nums[x]}`)
}
for (y in nums) {
    if (y == 5) {
        continue // interrompeu o indece 5 e pulou para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}
// --------------Não utilizar esse tipo de estrutura abaixo. Lembra o tempo do "Go " ------------------------//
externo: for (a in nums) { 
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}