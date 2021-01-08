class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa("Diego")

p1.falar()

function criarPessoa(n){
    let nome = n
    this.falar = function(){
        console.log(`Meu nome eh ${nome}`)
    }
}

const p2 = new criarPessoa("Diego")
p2.falar()