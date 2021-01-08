const aprovados = ['adam','bianca','carina']
aprovados.forEach(function(nome,indice){
    console.log(indice, nome)
})


Array.prototype.forEach2 = function(funcao){
    for(let i = 0; i < this.length; i++){
        funcao(this[i],i,this)
    }
}

aprovados.forEach2(function(nome,indice){
    console.log(indice, nome)
})