const alunos = [
    {nome: 'joao', nota: 8},
    {nome: 'maria',nota: 9}
]

const getNotas = a => a.nota
const soma = (total,atual) => total+atual

console.log(alunos.map(getNotas).reduce(soma))