// {} forma litaral de object // [] forma literal de array
const PROD1 = {}
PROD1.NAME = 'Celular Ultra Mega' // object é uma coleção de chave e valor.
PROD1.PRECO = 4994, 90
PROD1['Desconto Legal'] = 0.40
    /* evitar atributod com espaço
    jason, diferente de objeto*/

console.log(PROD1)
    /* Objeto é um conjonto de chave e valor */

// Anotação literal
const PROD2 = {
    NOME: 'Camisa Polo',
    PRECO: 79.90,
    obj: {
        blabla: 1,
        obj: { // estrutura aninhada
            blabla: 2
        }
    }
}

console.log(PROD2)