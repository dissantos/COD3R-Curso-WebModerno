const express = require("express")
const app = express()
const bp = require("body-parser")

app.use(bp.urlencoded({extended:true}))

app.post('/usuarios',(req,res,next)=>{
    console.log(req.body)
    res.send("<h1>Funcionou</h1>")
})

app.post('/usuarios/:id',(req,res,next)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.send("<h1>Funcionou.Usuario Alterado</h1>")
})

app.get('/usuarios',(req,res) =>{
    res.send("test")
})

app.listen(3003)