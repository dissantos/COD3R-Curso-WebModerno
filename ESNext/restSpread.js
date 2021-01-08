//... (juntar/separar)

//espalhar os atributos de um objeto/array em outro
const funcionarios = {
    nome: "Jose",
    idade: 36,
    profissão: "Gerente"
}

const clone = {ativo: true, ...funcionarios}

console.log(clone)

//juntar todos os elementos em um
const soma = function(...numeros){
    let n = 0
    numeros.forEach(function(a){
        n+=a
    })

    return n
}

console.log(soma(2,3))