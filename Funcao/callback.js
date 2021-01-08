const nomes = ["Ana","Bruna","Carla"]

nomes.forEach(function(a){
    console.log(a)
})

const notas = [1.2,4.6,7.9,3,10]

let notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)