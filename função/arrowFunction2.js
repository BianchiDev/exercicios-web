function Pessoa() {
    this.idade = 0

    setInterval(() => { // Arrow function é uma função anônima e não varia.
        this.idade++
            console.log(this.idade)
    }, 1000)
}
new Pessoa