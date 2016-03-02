 $(document).ready(function() {
     //Controles de los elementos de la cancion de la barra 

     //Control del Play/Pause
     $("#play").on("click", function() {
         var self = this;
         var estado = $(this).data("estado");
         var idEnCurso = $("#audio").data("id");
         console.log("Play/Pause canción", estado);
         if (estado == "play") {
             if (idEnCurso == 0) {
                 $.ajax({ //Petición de los datos
                     url: "/api/musica/",
                     success: function(data) {
                         if (data.length != 0) {
                             var id = data[0].id;
                             var url = data[0].url;
                             reproducir(id, url);
                         }
                     }
                 });
             }
             console.log("Play canción");
             $(this).data("estado", "pause");
             $(this).html("PAUSE");
             $("#audio").trigger('play');

         } else {
             console.log("Pause canción");
             $(this).data("estado", "play");
             $(this).html("PLAY");
             $("#audio").trigger('pause');
         }
     });


     $("#adelante").on("click", function() {
         siguienteCancion();
     });


     $("#atras").on("click", function() {
         anteriorCancion();
     });
 });

 $("#buttonReproducir").on("click", function() {
     var id = $(this).data("musicaid");
     var url = "";
     $.ajax({ //Petición de los datos
         url: "/api/musica/",
         success: function(data) {
             console.log("Data", data);
             //Obtenemos en que posicion del array data esta la cancion que se esta reproduciendo
             for (var i = 0; i < data.length; i++) {
                 if (data[i].id == id) {
                     url = data[i].url;
                 }
             }
         }
     });

 });
