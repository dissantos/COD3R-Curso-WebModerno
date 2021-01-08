const notas = [1, 2, 3, 5, 6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Diego" ,
    sobrenome: "Gonçalves",
    idade: 19
}

for(let  atributos in pessoa){
    console.log(atributos, ":",pessoa[atributos])
}