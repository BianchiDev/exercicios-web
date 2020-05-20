// O array é uma estrutura indexada, começa do índice zero e segui...
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // O método "push" é o mais indicado para adicionar um elemento ao array
console.log(aprovados.length) // Length serve para saber o tamanho do array
console.log(aprovados[3])

aprovados[9] = 'Rafael' + -
    console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// método splice seve para adicionar elementos ou excluir elementos...
aprovados = ['Bia', 'Carlos', 'Ana', 'Kayky', 'Pedro', 'Iara', 'Felipe']
aprovados.splice(1, 2) // primeiro paramentro é o índece e dai em diante e feita a exclusão...
console.log(aprovados)