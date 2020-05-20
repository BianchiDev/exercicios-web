// O this na function arrow é um contesto na qual a function foi escrita.
// mesmo com bind não tem variação.
let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // no googlechomer o "objeto global" é "window".

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)