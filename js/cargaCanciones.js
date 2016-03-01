function cargarCancion() {
    console.log("cargando canción");
    $.ajax({ //Petición de los datos
        url: "/api/musica/",
        success: function(data) {
            console.log("musica recuperada", data)
            var html = "<li>No hay canciones disponibles</li>";
            for (var i in data) {
                var id = data[i].id;
                var artista = data[i].artista;
                var title = data[i].title;
                var url = data[i].url;
                html = "<li>";
                html += artista + " ";
                html += title + " ";
                if (url != "")
                    html += " (" + url + ")";
                html += '<button class="Button Reproducir" id="buttonReproducir" data-musicaid =" ' + id + '">Reproducir</button>';
                html += '<button class="Button Editar" id="buttonEditar" data-musicaid ="' + id + '">Editar</button>';
                html += '<button class="Button Eliminar" id="buttonEliminar" data-musicaid ="' + id + '">Eliminar</button>';
                html += "</li>";
            }
            $("#musicaList").html(html); //innerHTML = html
        }
    });
}
