// operadores relacionais " = " recebe. "==" igual. " === " estritamente igual. != Diferente de 
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2) //menor que 
console.log('06)', 3 > 2) // maior que
console.log('07)', 3 <= 2) // nenor ou igual
console.log('08)', 3 >= 2)

const d1 = new Date(0) // O "0" reprezenta 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)