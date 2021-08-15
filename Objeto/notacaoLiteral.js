 const a = 1
 const b = 2
 const c = 3

 const obj1 = { a: a, b: b, c: c } // antes criava-se assim.
 const obj2 = { a, b, c } // Hoje podemos criar assim. 
 console.log(obj1, obj2)

 const nomeAttr = 'nota'
 const valorAttr = 7.87

 const obj3 = {}
 obj3[nomeAttr] = valorAttr
 console.log(obj3)

 const obj4 = {
     [nomeAttr]: valorAttr }
 console.log(obj4)

 const obj5 = { // FUNCTION EXPRESS
     funcao1: function() {
         //...
     },
     funcao2() { // forma nova do ES6
         // escreve o que quiser...
     }
 }
 console.log(obj5)