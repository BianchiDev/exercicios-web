var numero = 1 //escop mais abrangente. 
    {
        let numero = 2 // escopo menor
        console.log('dentro = ', numero)
    }
console.log('fora = ', numero)

/* variáveis definidas com a palavra reservada "var" têm escopo global, escopo de function
variáveis definida com a palavra reservada ""let" têm escopo global, escopo de function e escopo de bloco.*/