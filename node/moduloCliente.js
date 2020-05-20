 const moduloA = require('./moduloA') // obs: require será sempre menusculo 
 const moduloB = require('./moduloB') // essa requisição 'riquire' acessa outros módulos.

 console.log(moduloA.ola)
 console.log(moduloA.bemVindo)
 console.log(moduloA.ateLogo)
 console.log(moduloA)

 console.log(moduloB.bomDia)
 console.log(moduloB.boaNoite())
 console.log(moduloB)