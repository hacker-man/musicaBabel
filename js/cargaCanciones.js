function cargarCancion() {
    console.log("cargando canción");
    $.ajax({ //Petición de los datos
        url: "/api/musica/",
        success: function(data) {
            console.log("musica recuperada", data)
            var html ="";
            if (data.length==0)
                html = "<li class ='listaNoData'><i class='fa fa-music'></i> No hay canciones disponibles <i class='fa fa-music'></i></li>";
				
            else{
                html += "<li class = 'listaEncabezado'>"
                html +="<div class = 'row'>"; //abre row
                html += "<div class = 'col-3'>";
                html +="<h2 class= 'listaEncabezado title'>Artista</h2></div>"
                html += "<div class = 'col-3'>";
                html +="<h2 class = 'listaEncabezado title'>Título</h2></div>";
                html += "<div class = 'col-3'>";
                html +="<h2 class = 'listaEncabezado title'>URL</h2></div>";
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
				html +="<div class ='songArtist'>";
                html += artista + "</div>";
				html += "</div>"
                html += "<div class = 'col-3'>";
				html +="<div class ='songTitle'>";
                html += title + "</div>";
				html += "</div>";
                html += "<div class = 'col-3'>";
				html += "<div class = 'songUrl'>";
                html += url +"</div></div>";
                html += "<div class = 'col-1'>";
                html += '<button class="Button Reproducir" id="buttonReproducir" data-musicaid =" ' + id + '"><i class="fa fa-play"></i></button></div>';
                html += "<div class = 'col-1'>";
                html += '<button class="Button Editar" id="buttonEditar" data-musicaid ="' + id + '"><i class="fa fa-pencil-square-o"></i></button></div>';
                html += "<div class = 'col-1'>";
                html += '<button class="Button Eliminar" id="buttonEliminar" data-musicaid ="' + id + '"><i class="fa fa-trash-o"></i></button</div>';
                html += "</div>"; //cierra row
                html += "</li>";
            }
            $("#musicaList").html(html); //innerHTML = html
        }
    });
}
