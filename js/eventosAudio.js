
//Pasar el calculo de tiempo de segundos a minutos y segundos
//
function calcularTiempo(tiempo) {
    var calculo = Math.floor(tiempo);
    var html = "";
    var minutos = Math.floor(tiempo / 60);
    var segundos = Math.floor(tiempo - (60 * minutos));

    html += minutos;
    html += (":")
    if (segundos < 10) {
        html += ("0" + segundos);
    } else { html += (segundos) }

    return html;
}

//Calculamos el porcentaje de tiempo transcurrido
function calcularPorcentajeTranscurrido(tiempoTrans, tiempoTotal){
    return (tiempoTrans/tiempoTotal)*100;
}

$(document).ready(function() {

    //Pasar de canción al acabar
    $("#audio").on("ended", function() {
        siguienteCancion();
    });

    //Hallar el tiempo total
    $("#audio").on("durationchange", function() {
        $(".datos-tiempo-total").text(calcularTiempo(this.duration));
    });

    //Hallar el tiempo transcurrido
    $("#audio").on("timeupdate", function() {
        // var porcentaje = this.duration+"%";
        $(".datos-tiempo-restante").text(calcularTiempo(this.currentTime));
        $(".barra.actual").css("width", calcularPorcentajeTranscurrido(this.currentTime, this.duration) + "%");

    });

    //Silenciar canción
    $(".botonMute").on("click", function(){
        if (audio.muted == true){
            console.log("Esta muteado");
            audio.muted = false;
            $(this).html("))");
        }
        else {
            console.log("No esta muteado");
            audio.muted = true;
            $(this).html(")X");
        }
     });

});
