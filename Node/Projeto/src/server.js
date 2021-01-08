const porta = 3003

const express = require('express')
const app = express()
const bd = require('./bd.js')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.post('/produtos',(req,res,next)=>{
    const produto = bd.salvarProd({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.put('/produtos/:id',(req,res,next)=>{
    const produto = bd.salvarProd({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res) =>{
    const produto = bd.excProd(req.params.id)
    res.send(produto)
})

app.get('/produtos',(req,res,next)=>{
    res.send(bd.getProds())
})

app.get('/produtos/:id',(req,res) =>{
    res.send(bd.getProd(req.params.id))
})

app.listen(porta, ()=>{
    console.log("Servidor esta na porta:",porta)
})