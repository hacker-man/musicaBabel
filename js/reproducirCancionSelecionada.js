//Reproducir la cancion seleccionada en el boton
 $(document).ready(function() {
     $("#musicaList").on("click", "#buttonReproducir", function() {
         var id = $(this).data("musicaid");
         var url = "";
         console.log("Reproducir cancion: " + id);
         $.ajax({ //Petición de los datos
             url: "/api/musica/",
             success: function(data) {
                 console.log("Data", data);
                 //Obtenemos en que posicion del array data esta la cancion que se esta reproduciendo
                 for (var i = 0; i < data.length; i++) {
                     console.log(data[i].id + id);
                     console.log(id == data[i].id);
                     if (data[i].id == id) {
                         url = data[i].url;
                     }
                 }
                 console.log("ID:" + id + "URL" + url);
                 reproducir(id, url);
             }
         });
     });
 });
