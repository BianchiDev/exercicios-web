let isAtivo = false // literal falso
console.log(isAtivo)
    // sempre priorizar constantes ao invés de variáveis

isAtivo = true //literal verdadeiro
console.log(isAtivo)
console.log(!isAtivo) // "!" inverte o resutado para falso

console.log('SO verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // analisa cada um e se ao menos um for verdadeiro será verdadeiro.

let nome = '' //'Lucas'
console.log(nome || 'Desconhecido')