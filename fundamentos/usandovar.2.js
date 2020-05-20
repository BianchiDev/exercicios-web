var numero = 1 //Só tem dois escopos. 
    {
        var numero = 2
        console.log('dentro = ', numero)
    }
console.log('dentro = ', numero)
console.log('barreiros =', numero)