let aprovados = new Array('Ana','Bruna','Carla')

console.log(aprovados)

aprovados = ['ana','bia','carlos']
console.log(aprovados)

aprovados[9] = 'eduardo'

console.log(aprovados)
aprovados.sort()

console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados.pop()
console.log(aprovados)

aprovados.shift()
console.log(aprovados)

aprovados.unshift("ferdinando")
console.log(aprovados)

aprovados.splice(1,0,'ana')
console.log(aprovados)
aprovados.splice(2,1)
console.log(aprovados)

let novosAprovados = aprovados.slice(0,2)
console.log(novosAprovados)