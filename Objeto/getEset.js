const sequencia = {
    _valor : 1, //convencao para private
    get valor(){
        return this._valor++
    },

    set valor(valor){
        this._valor = valor
    }
}

console.log(sequencia.valor,sequencia.valor)