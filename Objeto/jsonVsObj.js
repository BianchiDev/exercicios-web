    const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
    console.log(JSON.stringify(obj)) // JSON é um dado não é uma função, ou seja, é testual

    //console.log(JSON.parse("{a:1, b:2, c:3}")) false
    //console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) false
    console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // true
    console.log(JSON.parse('{"a":1.7, "b": "string", "c":true, "d": {}, "e":[]}')) // true