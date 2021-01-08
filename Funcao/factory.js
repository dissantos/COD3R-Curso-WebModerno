const produto = {
    nome: "qualquer",
    preco: 33
}

//factory

function criarProduto(nome,preco){
    return {
        nome, 
        preco

    }
}

const novoProduto = criarProduto("qualquer2",50)

console.log(novoProduto)