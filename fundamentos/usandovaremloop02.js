const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() { // o método "push" adicionol uma "function"
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
    // funcs e var vão sempre chamar o numero fora da função pq eles não têm escopo de bloco e
    // não respeitam a variável