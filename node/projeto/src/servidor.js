const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, nsxt) => { //post adiciona
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JASON
})
app.put('/produtos/:id', (req, res, nsxt) => { // put altera
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JASON
})
app.delete('/produtos/:id', (req, res, nsxt) => { //delete exclui 
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JASON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})