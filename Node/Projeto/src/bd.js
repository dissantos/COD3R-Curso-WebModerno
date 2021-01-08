const sequence = {
    _id : 1,
    get id(){
        return this._id++
    }
}

const produtos = {}

function salvarProd(produto){
    if(!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto

    return produto
}

function excProd(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

function getProd(id){
    return produtos[id]|| {}
}

function getProds(){
    return Object.values(produtos)
}

module.exports = {salvarProd,getProd,getProds,excProd}