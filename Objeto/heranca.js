const carro = {
    velMax : 200
}
const ferrari= {
    modelo : "n faco ideia",
    velMax : 500,
    __proto__ : carro
}

const volvo = {
    modelo: "n faco ideia 2"
}

const uno = Object.create(carro)

Object.setPrototypeOf(volvo,carro)

console.log(uno.velMax)