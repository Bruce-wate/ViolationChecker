function verificar(){
    var insert = window.document.querySelector("input#vel")
    var velocidade = Number(insert.value)
    var localidades = window.document.getElementsByName("TXT")
    var res = document.querySelector("div#res")
    var main = document.querySelector("main")
    
    main.style.height = "425px"

    if(velocidade == 0){
        window.alert("[ERRO] Por favor insira a velocidade do condutor!")
    }

    if (localidades[0].checked){
        
        if(velocidade > 0 && velocidade <= 30){ //Fora das localidades
            res.innerHTML = `O condutor excedeu a velocidade de ${velocidade} km/h fora das localidaes e contraiu uma multa de 1000,00MT e uma contravenção leve.`

            res.style.color = "blue"

        } else if(velocidade > 30 && velocidade <= 60) {
             res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h fora das localidaes e contraiu uma multa de 2000,00MT e uma contravenção média.`

             res.style.color = "yellow"
        } else if(velocidade > 60 && velocidade <= 80){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h fora das localidaes e contraiu uma multa de 4000,00MT e uma contravenção grave.`

            res.style.color = "red"
        } else if (velocidade > 80){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h fora das localidaes e contraiu uma multa de 8000,00MT e uma contravenção grave.`

            res.style.color = "red"
        }
        
    } else if (localidades[1].checked){
       
        if (velocidade > 0 && velocidade <= 20){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h dentro das localidaes e contraiu uma multa de 1000,00MT e uma contravenção leve.`

            res.style.color = "blue"
        } else if (velocidade > 20 && velocidade <= 40){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h dentro das localidaes e contraiu uma multa de 2000,00MT e uma contravenção média.`

            res.style.color = "yellow"
        } else if (velocidade > 40 && velocidade <= 60){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h dentro das localidaes e contraiu uma multa de 4000,00MT e uma contravenção grave.`

            res.style.color = "red"
        } else if (velocidade > 60){
            res.innerHTML = `O condutor excedeu a velocidade ${velocidade} km/h dentro das localidaes e contraiu uma multa de 8000,00MT e uma contravenção grave.`

            res.style.color = "red"
        }
    }
}