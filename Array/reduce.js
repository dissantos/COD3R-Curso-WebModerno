Array.prototype.reduce2 = function(callback,num){
    let acumulador
    if(num == undefined){
        for(let i = 0; i < this.length -1; i++){
            if(i == 0){
                acumulador = callback(this[i],this[i+1],i+1,this)
            }else{
                acumulador = callback(acumulador,this[i+1],i+1,this)
            }
        }
    } else{
        for(let i = 0; i < this.length; i++){
            if(i == 0){
                acumulador = callback(num,this[i],i, this)
            }else{
                acumulador = callback(acumulador,this[i],i,this)
            }
        }
    }
    return acumulador
}

const notas = [1,2,3]
let resultado = notas.reduce2(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador+atual
})

console.log(resultado)