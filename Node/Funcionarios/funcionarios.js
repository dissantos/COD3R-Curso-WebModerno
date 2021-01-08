const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//usando sort
axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheresChinesas = funcionarios.filter(function(e){
        return (e.genero == 'F')
    }).filter(function(e){
        return (e.pais == 'China')
    }).sort(function(a,b){
        return a.salario - b.salario
    })

    //console.log(mulheresChinesas[0])
})

//usando reduce
axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheresChinesas = funcionarios.filter(function(e){
        return (e.genero == 'F')
    }).filter(function(e){
        return (e.pais == 'China')
    }).reduce(function(acumulado,atual){
        if(acumulado.salario < atual.salario)
            return acumulado
        else
            return atual
    })

    console.log(mulheresChinesas)
})
