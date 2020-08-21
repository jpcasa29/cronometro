function elemento(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let titulo = elemento("h1");
    let start = elemento('button.start')
    let pause = elemento('button.pause')
    let reset = elemento('button.reset')

    var segundos = 1;
    var minutos = 0;
    var horas = 0
    var segundosMostrar;
    var minutosMostrar;
    var horasMostrar;
    var l = document.getElementById("number");
    var title = elemento('title')
    var barra = elemento('#javascript')

    start.addEventListener('click', function(e){
        e.preventDefault()

        start.setAttribute('disabled', true)
        start.classList.add('disabled')
        pause.removeAttribute('disabled')
        pause.classList.remove('disabled')
        reset.removeAttribute('disabled')
        reset.classList.remove('disabled')
        
        var intervalId = window.setInterval(function(){
            
            if(segundos < 10) {
                segundosMostrar = '0' + segundos
                barra.setAttribute('value',segundos)
                segundos++;
            } else if (segundos > 9 && segundos < 60){
                segundosMostrar = segundos;
                barra.setAttribute('value',segundos)
                segundos++;
            } else {
                minutos++
                segundos = 1
                barra.setAttribute('value',0)
                segundosMostrar = '00'
            }
            if(minutos < 10) {
                minutosMostrar = '0' + minutos
            } else if (minutos > 9 && minutos < 60){
                minutosMostrar = minutos;
            } else {
                horas++
                minutos = 0
                minutosMostrar = '00'
            }
            if(horas < 10) {
                horasMostrar = '0' + horas
            } else if (horas > 9 && horas < 60){
                horasMostrar = horas;
            } else {
                
                horas = 0
            }


            l.innerHTML = horasMostrar + ':' + minutosMostrar + ':' + segundosMostrar;
            title.innerHTML = horasMostrar + ':' + minutosMostrar + ':' + segundosMostrar + ' - Cronometro'
            

        },1000);
        pause.addEventListener('click', function(e){
            e.preventDefault()
            start.removeAttribute('disabled')
            start.classList.remove('disabled')
            pause.setAttribute('disabled', true)
            pause.classList.add('disabled')
            reset.removeAttribute('disabled')
            reset.classList.remove('disabled')

            window.clearInterval(intervalId)
            
        })
        reset.addEventListener('click', function(e){
            e.preventDefault()
            start.removeAttribute('disabled')
            start.classList.remove('disabled')
            pause.setAttribute('disabled', true)
            pause.classList.add('disabled')
            reset.setAttribute('disabled', true)
            reset.classList.add('disabled')

            window.clearInterval(intervalId)
            segundos = 1;
            minutos = 0;
            horas = 0
            segundosMostrar = '00';
            minutosMostrar = '00';
            horasMostrar = '00';
            l.innerHTML = horasMostrar + ':' + minutosMostrar + ':' + segundosMostrar;
            title.innerHTML = 'Cronometro';
        })
    })
    

})