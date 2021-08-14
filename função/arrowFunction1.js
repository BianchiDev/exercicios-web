// function arrow sempre será uma function anônima.
// função normal
let dobro = function(a) {
        return 2 * a
    }
    // reescrevendo a função com arrow function "=>"
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

//------------------------OUTRO EXEMPLO ----------------------------///
let ola = function() {
    return ' Ola '
}

ola = () => 'Ola' // possui parâmentro vazio "( )"
ola = _ => 'Ola' // possui parâmetro "_".
console.log(ola())