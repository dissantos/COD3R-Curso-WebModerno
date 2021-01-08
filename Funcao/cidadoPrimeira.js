function fun(){
    console.log("olha uma funcao");

}

const fun2 = function(){}

const array = [function(a,b){return a*b},fun,fun2]

const pessoa = {
    nome : "Diego",
    idade : 19
}

pessoa.falar = function(){
    console.log("Merda")
}

pessoa.falar()

function fun3(fun){
    fun();
}

fun3(pessoa.falar)

function sub(a,b){
    return function(c){
        console.log(a-b-c)
    }
}

sub(1,2)(3)