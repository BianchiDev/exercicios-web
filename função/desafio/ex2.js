/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function classeTriangulo(a, b, c) {
    if (a == b && b == c) { // se 
        return 'Equilátero'
    } else if (a == b || b == c || a == c) { // se não
        return 'Isóceles'
    } else { // não sendo retorna
        return 'Escaleno'
    }
}
console.log(classeTriangulo(1, 1, 1))
console.log(classeTriangulo(1, 2, 1))
console.log(classeTriangulo(1, 2, 3))