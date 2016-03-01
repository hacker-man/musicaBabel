// $(document).ready(function() {
//     //Esta función será llamada cuando se pulse el boton con id cargarMusicaButton.
//     //Básicamente es una petición ajax en la que se devuelven: artista titulo y url
//     //de una canción.
//     function cargarCancion() {
//         console.log("cargando canción");
//         $.ajax({ //Petición de los datos
//             url: "/api/musica/",
//             success: function(data) {
//                 console.log("musica recuperada", data)
//                 if (data.lenght == 0) {
//                     html = "<li>No hay canciones disponibles</li>"
//                 } else {
//                     var html = "";
//                     for (var i in data) {
//                         var id = data[i].id;
//                         var artista = data[i].artista;
//                         var title = data[i].title;
//                         var url = data[i].url;
//                         html += "<li>";
//                         html += artista + " ";
//                         html += title + " ";
//                         if (url != "")
//                             html += " (" + url + ")";
//                         html += '<button data-musicaid =" '+ id + '">Reproducir</button>';
//                         html += '<button data-musicaid ="' + id + '">Editar</button>';
//                         html += '<button data-musicaid ="' + id + '">Eliminar</button>';
//                         html += "</li>";
//                     }
//                 }
//                 $("#musicaList").html(html); //innerHTML = html
//             }
//         });
//     }
//     $("#cargarMusicaButton").on("click", cargarCancion);
//     cargarCancion();
// });
