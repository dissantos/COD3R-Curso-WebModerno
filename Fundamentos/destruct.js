const pessoa = {
    nome : "Diego",
    idade : 19,
    endereco: {
        rua : "aleatoria",
        numero: 123
    }
}

const {nome: n,idade : i} = pessoa
console.log(n,i)

const [a,b] = [19,8,7]
console.log(a,b)