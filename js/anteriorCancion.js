 //Pasar la canción a la anteior
 function anteriorCancion() {
     //Obtenemos el id de la cancion actual
     var idEnCurso = $("#audio").data("id");
     console.log("Adelantando canción", idEnCurso);
     // if (idEnCurso != 0) {
     console.log("No estamos al principio");
     $.ajax({ //Petición de los datos
         url: "/api/musica/",
         success: function(data) {
             console.log("idEnCurso", idEnCurso);
             //Si hay canciones en la BDD
             if (data.length != 0) {
                 var posicion = 0;
                 var i = 0;
                 //Obtenemos en que posicion del array data esta la cancion que se esta reproduciendo
                 for (var i = 0; i < data.length; i++){
                     if (data[i].id == idEnCurso) {
                         console.log(data[i].id + "En curso: " + idEnCurso + "I: " + i);
                         posicion = i;
                     }
                 }
                 console.log(posicion + "length" + data.length);
                 var ultimo = data.length - 1;
                 //Establecemos la primera cancion para reproducir
                 var id = data[ultimo].id;
                 var url = data[ultimo].url;
                 //Si hay anterior ponemos el anterior
                 console.log(posicion + "length" + data.length);
                 if (posicion > 0) {
                     id = data[posicion-1].id;
                     url = data[posicion-1].url;
                 }
                 console.log("Reproduciendo anterior: ", id);
                 reproducir(id, url);
             }
         }
     });
 }