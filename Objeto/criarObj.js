const obj = {}

const obj2 = new Object

function criarObj(){
    return {}
}

const obj3 = criarObj()

function constrObj(param){
    this.param = param
}
const obj4 = new constrObj(null)

const obj5 = Object.create(null)