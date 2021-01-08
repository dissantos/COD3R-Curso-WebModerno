const fs = require("fs")

const produto = {
    nome: 'celular',
    preco: 898.99
}

fs.writeFile(__dirname+'/arquivoEscrito.json',JSON.stringify(produto),function(err){
    console.log(err || "")
})