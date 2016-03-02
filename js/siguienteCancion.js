 function siguienteCancion() {
     //Obtenemos el id de la cancion actual
     var idEnCurso = $("#audio").data("id");
     console.log("Adelantando canción", idEnCurso);
     // if (idEnCurso != 0) {
     console.log("No estamos al principio");
     $.ajax({ //Petición de los datos
         url: "/api/musica/",
         success: function(data) {
             console.log("Data", data);
             //Si hay canciones en la BDD
             if (data.length != 0) {
                 var posicion = 0;
                 //Obtenemos en que posicion del array data esta la cancion que se esta reproduciendo
                 for (var i = 0; i < data.length; i++){
                     if (data[i].id == idEnCurso) {
                         console.log(data[i].id + "En curso: " + idEnCurso + "I: " + i);
                         posicion = i + 1;
                     }
                 }
                 //Establecemos la primera cancion para reproducir
                 var id = data[0].id;
                 var url = data[0].url;
                 //Si hay siguiente ponemos el siguiente
                 console.log(posicion + "length" + data.length);
                 if (posicion < data.length) {
                     id = data[posicion].id;
                     url = data[posicion].url;
                 }
                 console.log("Reproduciendo siguiente: ", id);
                 reproducir(id, url);
             }
         }
     });
 }
