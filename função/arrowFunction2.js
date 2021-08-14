function Pessoa() {
    this.idade = 0

    setInterval(() => { // Na função (Arrow function) o (This) não varia.
        this.idade++
            console.log(this.idade)
    }, 1000)
}
new Pessoa