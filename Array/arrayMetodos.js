const pilotos = ['Vettel', 'Alonso', 'Raikkone', 'Massa'] // não pode atribuir nada por que ela é uma constante.
pilotos.pop() // massa  quebrou o carro! (O método POP retira o útimo elemento do array)
console.log(pilotos)

pilotos.push('Verstappen') // O método PUSH adiciona um elemento à utima posição do array
console.log(pilotos)

pilotos.shift() // O método SHIFT remove o primeiro da lista!
console.log(pilotos)

pilotos.unshift('Hamelton') // O método UNSHIFT adiciona um elemento como primeiro da lista
console.log(pilotos)

// Método splice pode adicionar e remover elementos parte do Array

// adicioar elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover elemento
pilotos.splice(3, 1) // massa saiu
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo Arrey apartir do índece dois.
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)