
function falarDpsDe(segundos, frase){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            response(frase)
        },segundos*1000)
    })
}

Promise.all([falarDpsDe(1,"Oi,"),falarDpsDe(2," Vc"),falarDpsDe(3," esta"),falarDpsDe(4," bem?")]).then(frase => console.log(frase)).catch(e => console.log(e))