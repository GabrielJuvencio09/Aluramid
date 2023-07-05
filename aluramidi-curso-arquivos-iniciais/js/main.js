 
const listadeteclas = document.querySelectorAll('.tecla')



function tocasom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio' ){
        elemento.play();
    }  else{
        alert('elemento nao encotrado')
    }

}


for (let contador = 0; contador < listadeteclas.length;contador++) {

    const tecla =  listadeteclas[contador]

    const instrumento = tecla.classList[1]
    

    const aiAudio =`#som_${instrumento}`
    

    tecla.onclick = function () {

        tocasom(aiAudio)

    }
    
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
        tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}



