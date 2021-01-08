function sobreposicao(e1,e2){
    const a = e1.getBoundingClientRect()
    const b = e2.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical =  a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function colisao(passaro,barreira){
    let colidiu = false
    barreira.pares.forEach(function(par){
        if(!colidiu){
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento
            colidiu = sobreposicao(passaro.elemento,superior) ||
                      sobreposicao(passaro.elemento,inferior)
        }
    })
    return colidiu
}

function novoElemento(nomeTag,nomeClasse){
    const elemento = document.createElement(nomeTag)
    elemento.className = nomeClasse
    return elemento
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div','barreiras')
    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')
    if(reversa){
        this.elemento.appendChild(corpo)
        this.elemento.appendChild(borda)
    }else{
        this.elemento.appendChild(borda)
        this.elemento.appendChild(corpo)
    }

    this.setAltura = function(altura){
        corpo.style.height = `${altura}px`
    }
}

function ParDeBarreira(altura,abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras')
    
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = function(){
        const altSuperior = Math.random()*(altura - abertura)
        const altInferior = altura - altSuperior - abertura

        this.superior.setAltura(altSuperior)
        this.inferior.setAltura(altInferior)
    }

    this.getX = function(){
        return parseInt(this.elemento.style.left.split('px')[0])
    }
    this.setX = function(x){
        this.elemento.style.left = `${x}px`
    }
    this.getLargura = function(){
        return this.elemento.clientWidth
    }

    this.sortearAbertura()
    this.setX(x)
}

function Barreiras(altura,largura,abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreira(altura,abertura,largura),
        new ParDeBarreira(altura,abertura,largura + espaco),
        new ParDeBarreira(altura,abertura,largura + espaco * 2),
        new ParDeBarreira(altura,abertura,largura + espaco * 3)
    ]

    const desloc = 3

    this.animar = function() {
        this.pares.forEach((par) => {
            par.setX(par.getX() - desloc)

            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura/2
            const cruzou = ((par.getX() + desloc) >= meio)&&(par.getX() < meio)
            
            if(cruzou){
                notificarPonto()
            }
        })
    }
}

function Passaro(alturaJogo){
    let voar = false
    this.elemento = novoElemento('img','passaro')
    this.elemento.src = 'imgs/passaro.png'
    
    this.getY = function(){
        return parseInt(this.elemento.style.bottom.split('px')[0])
    }
    this.setY = function(y){
        this.elemento.style.bottom = `${y}px`
    }

    window.onkeydown = e => voar = true
    window.onkeyup = e => voar = false

    this.animar = function(){
        const novoY = this.getY() + (voar ? 8:-5)
        const alturaMax = alturaJogo - this.elemento.clientHeight

        if(novoY < 0){
            this.setY(0)
        } else if(novoY >= alturaMax){
            this.setY(alturaMax)
            console.log(540)
        } else{
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo/2)
}



function Progresso(){
    this.elemento = novoElemento('span','progresso')
    this.atualizaPontos = pts =>{
        this.elemento.innerHTML = pts
    }
    
    this.atualizaPontos(0)
}

function Derrota(){
    this.elemento = novoElemento('div','derrota')
    this.recorde = function(pontos){
        this.elemento.innerHTML = `${pontos} pontos`
    }
}
/*
const bars = new Barreiras(700,1200,350,400)
const passaro = new Passaro(560)
const area = document.querySelector('[wm-flappy]')
area.appendChild(passaro.elemento)
area.appendChild(new Progresso().elemento)
bars.pares.forEach(function(par){
    area.appendChild(par.elemento)
})

setInterval(function(){
    bars.animar()
    passaro.animar()
},20)*/

function FlappyBird(){
    let pontos = 0

    const area = document.querySelector('[wm-flappy]')
    const altura = area.clientHeight
    const largura = area.clientWidth

    const progresso = new Progresso()
    const derrota = new Derrota()
    const barreiras = new Barreiras(altura,largura,250,400,function(){
        progresso.atualizaPontos(++pontos)
    })
    const passaro = new Passaro(altura)

    area.appendChild(progresso.elemento)
    barreiras.pares.forEach(function(par){
        area.appendChild(par.elemento)
    })
    area.appendChild(passaro.elemento)

    this.start = () =>{
        const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()
            if(colisao(passaro,barreiras)){
                area.appendChild(derrota.elemento)
                derrota.recorde(pontos)
                clearInterval(temporizador)
                setTimeout(function(){
                    window.location.reload()
                },1000)
            }
        },20)
    }

}

new FlappyBird().start()