function soma(){
    let som = 0
    for(i in arguments){
        som += arguments[i]
    }
    return som
}

function soma1(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma(1,2,3))
console.log(soma1(0,0,0))