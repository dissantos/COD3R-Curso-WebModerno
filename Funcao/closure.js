const x = "global"

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const fun = fora()
console.log(fun())