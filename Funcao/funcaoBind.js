const pessoa = {
    saudacao: "ola",
    falar() {
        console.log(this.saudacao)
    }
}



const falar = pessoa.falar
const falar2 = pessoa.falar.bind(pessoa)
falar()
falar2()
