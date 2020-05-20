// get e Setter sãu function que dentro dessa function os valores são acessados...
const sequencia = {
    _valor: 1, // Convenção para os desenvolvedores dizendo: que essa variável será acessada internamente.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Como ove a tentativa de um variável menor do que a declarada, o console imprimiu 1002, 1003.
console.log(sequencia.valor, sequencia.valor)