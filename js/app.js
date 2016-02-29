$(document).ready(function () {

    function cargarCancion() {

        console.log("cargando canción");
        $.ajax({ //Petición de los datos
            url: "/api/musica/",
            success: function (data) {
                console.log("musica recuperada", data)
                var html = "";
                for (var i in data) {
                    var id = data[i].id;
                    var title = data[i].title;
                    var url = data[i].url || ""; //data[i].url || "", sino esta definido -> devuelve undefined
                    html += "<li>";
                    html += title;
                    if (url != "")
                        html += " (" + url + ")";
                    html += '<button data-musicaid ="' + id + '">Eliminar</button>'
                    html += "</li>";
                }
                $("#musicaList").html(html); //innerHTML = html
            }
        });
    }
    $("#cargarMusicaButton").on("click",cargarCancion);
    cargarCancion();
    $("#musicaList").on("click","button",function(){
        console.log("elimino canción");
         var id = $(this).data("musicaid");
         var self = this;
         $.ajax({
             url: "/api/musica/"+id,
             method: "delete",
             success: function(){
                 $(self).parent().remove();
             }
         });
    });
        $("form").on("submit", function () {
        //Validación artista
        var artista = $.trim($("#artista").val());
        if (artista == "") {
            alert("El artista no puede ser vacío");
            return false;
        }
        //Validación del título
        var titulo = $.trim($("#titulo").val());
        if (titulo == "") {
            alert("El título no puede ser vacío");
            return false;
        }
        //Validación de la url
        var url = $.trim($("#url").val());
        var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ig;
        if (url == "" || false == pattern.test(url)) {
            alert("La url del archivo no es valido");
            return false;
        }
        $.ajax({
            url: "/api/musica/",
            data: JSON.stringify({
                artista: artista,
                title: titulo,
                url: url,
            }),
            contentType: 'application/json',
            method: 'post',
            success: function () { //Cuando devuelve un código 2XX
                alert("Guardado con éxito");
                cargarCancion();
            },
            error: function () { //Cuando se devuelve un código 4XX ó 5XX
                alert("Se ha producido un error");
            }
        });
        return false;
    });
});