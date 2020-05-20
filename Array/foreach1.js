// foreach percorre o array pelo nome, índice e o array 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel', ]

aprovados.forEach(function(nome, indece, Array) { // linternamente tem o "for"
    console.log(`${indece + 1}) ${nome}`) // templaytstring é um parâmetro.
    console.log(Array)
})

aprovados.forEach(nome => console.log(nome)) // function com um único parámetro 

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)