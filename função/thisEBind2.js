//Solução usando Bind
function Pessoa() {
    this.idade = 0 // Criando um object with name "idade"

    const self = this // this que é uma variável se torna constante.
    setInterval(function() { // the function triggers another function (quem dispara a função é o temporizador que esta dentro de setInterval)
        self.idade++
            console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

new Pessoa