const fs = require("fs")

//sincrono

const conteudo = fs.readFileSync(__dirname+'/arquivo.json','utf-8')
console.log(conteudo)

//assincrono

fs.readFile(__dirname+'/arquivo.json','utf-8',function(erro, conteudo){
    console.log(JSON.parse(conteudo).bd.nome, JSON.parse(conteudo).bd.idade)
})