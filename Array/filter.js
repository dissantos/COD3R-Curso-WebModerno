const produto = [
    {nome: 'celular',preco: 300},
    {nome: 'calculadora',preco: 20},
    {nome: 'lapis',preco: 2}
]

console.log(produto.filter(function(e){
    return e.preco < 100
}).filter(function(e){
    return e.preco > 10
}))