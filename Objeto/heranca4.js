 function MeuObjeto() {} // function construtora.
 console.log(MeuObjeto.prototype)

 const obj1 = new MeuObjeto
 const obj2 = new MeuObjeto

 console.log(obj1.__proto__ === obj2.__proto__)
 console.log(MeuObjeto.prototype === obj1.__proto__)

 MeuObjeto.prototype.nome = 'Anônimo'
 MeuObjeto.prototype.falar = function() {
     console.log(`Bom dia! Meu nome é ${this.nome}!`)
 }

 obj1.falar()

 obj2.nome = 'Rafael'
 obj2.falar()

 const obj3 = {} // notação literal de objeto
 obj3.__proto__ = MeuObjeto.prototype
 obj3.nome = 'obj3'
 obj3.falar()

 // Resumindo a loucura...
 console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // o resutado de new MeuObjeto é um objetoS
 console.log(MeuObjeto.__proto__ === Function.prototype)
 console.log(Function.prototype.__proto__ === Object.prototype)
 console.log(Object.prototype.__proto__ === null) // como o objeto é nulo será true o resultado
 console.log(Object.prototype.__proto__ === undefined) // como o objeto é nulo será false o resultado