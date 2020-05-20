// Operador "...rest" (jutar) e "spread"(espalhar)
// Usar rest como parêmtro de function

// usar spread com  Object
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread co array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)