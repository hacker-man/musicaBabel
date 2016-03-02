function cargarCancion() {
    console.log("cargando canción");
    $.ajax({ //Petición de los datos
        url: "/api/musica/",
        success: function(data) {
            console.log("musica recuperada", data)
            var html ="";
            if (data.length==0)
                html = "<li class ='listaNoData'>No hay canciones disponibles</li>";
            else{
                html += "<li>"
                html +="<div class = 'row'>"; //abre row
                html += "<div class = 'col-3'>";
                html +="<h2>Artista</h2></div>"
                html += "<div class = 'col-3'>";
                html +="<h2>Título</h2></div>";
                html += "<div class = 'col-3'>";
                html +="<h2>URL</h2></div>";
                html +="</div>" //cierra row
            }
                
            for (var i in data) {
                var id = data[i].id;
                var artista = data[i].artista;
                var title = data[i].title;
                var url = data[i].url;
                html += "<li>";
                html +="<div class = 'row'>"; //abre row
                html += "<div class = 'col-3'>";
                html += artista + "</div>";
                html += "<div class = 'col-3'>";
                html += title + "</div>";
                html += "<div class = 'col-3'>";
                html += "(" + url + ")"+"</div>";
                html += "<div class = 'col-1'>";
                html += '<button class="Button Reproducir" id="buttonReproducir" data-musicaid =" ' + id + '">Reproducir</button></div>';
                html += "<div class = 'col-1'>";
                html += '<button class="Button Editar" id="buttonEditar" data-musicaid ="' + id + '">Editar</button></div>';
                html += "<div class = 'col-1'>";
                html += '<button class="Button Eliminar" id="buttonEliminar" data-musicaid ="' + id + '">Eliminar</button</div>';
                html += "</div>"; //cierra row
                html += "</li>";
            }
            $("#musicaList").html(html); //innerHTML = html
        }
    });
}
