 //Controles de los elementos de la cancion de la barra 
 $(document).ready(function() {
     //Control del Play/Pause
     $("#play").on("click", function() {
         // var hayCancion = false;
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
                             // hayCancion = true;
                         }
                     }
                 });
             }
             console.log("Play canción");
             $(this).data("estado", "pause");
             $(this).html("<i class='fa fa-pause-circle-o'></i>");
             $("#audio").trigger('play');

         } else {
             console.log("Pause canción");
             $(this).data("estado", "play");
             $(this).html("<i class='fa fa-play-circle'></i>");
             $("#audio").trigger('pause');
         }
     });

     //Control de siguiente cancion
     $("#adelante").on("click", function() {
         siguienteCancion();
     });

     //Control de anterior cancion
     $("#atras").on("click", function() {
         anteriorCancion();
     });
 });
