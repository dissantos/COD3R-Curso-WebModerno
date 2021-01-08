const num = [1,2,3]

let dobro = num.map(function(number){
    return number*2
})

console.log(dobro)

const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Caderno", "preco" : 7.50 }'
]


let tabelaPrecos = carrinho.map(function(e){
    return JSON.parse(e)
}).map(function(obj){
    return obj.preco
})

console.log(tabelaPrecos)