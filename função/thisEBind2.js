//Solução usando Bind
function Pessoa() {
    this.idade = 0

    const self = this // this que é uma variável se torna constante.
    setInterval(function() { // the function triggers another function
        self.idade++
            console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

new Pessoa