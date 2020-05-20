const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body) // No método "get" o formulário retorna com (req.query)
    console.log(req.query)
    resp.send('<h1>Acerto  Fii da peste!!!</h1>')

})
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens Acertou</h1>')
})

app.listen(3003)