const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMiddle')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app,'com param')

app.post('/usuario',usuarioApi.salvar)
app.get('/usuario',usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao("Diego"))

app.use('/opa', (req, res, cadeia) => {
    console.log("Antes")
    cadeia()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado|`)
})


app.get('/opa', (req, res, cadeia) => {
    console.log('Durante')
    //res.send("Estou bem")

    /*
    res.json({
        name: "iPad 32Gb",
        price: 1899.00,
        discount: 0.12
    })*/

    res.json([
        { id: 1, nome: 'A' },
        { id: 2, nome: 'B' }
    ])
    cadeia()
})

app.use('/opa', (req, res) => {
    console.log("Depois")
})

app.listen(3000, () => {
    console.log("Backend executando...")
})