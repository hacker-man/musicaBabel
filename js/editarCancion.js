$(document).ready(function() {
    /*Cuando se pulse en el boton editar de los datos de una canción
    se desplagara un formulario en linea justo debajo que nos permitira
    editar los campos de la misma. A su vez este formulario cuenta con un
    boton Cancelar -> Cierra el formulario y Guardar -> valida y envía el 
    formulario.Toda esa funcionalidad esta implementada en este fichero.
    */

    $("#musicaList").on("click", ".Button.Editar", function() {
        var id = $(this).data("musicaid");
        var urlOriginal = "";
        var artistaOriginal = "";
        var tituloOriginal = "";

        var self = this; //Se refiere al button
        var grandpa = $(this).parent().parent();

        $.ajax({ //Petición de los datos
            url: "/api/musica/",
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        artistaOriginal = data[i].artista;
                        tituloOriginal = data[i].title;
                        urlOriginal = data[i].url;
                    }
                }
                console.log(artistaOriginal+ tituloOriginal+ urlOriginal);
                $(self).attr("disabled", true);
                console.log("Editar canción");

                $(grandpa).append("<div class = 'row'><div class = 'col-12'><form class='formlist" + id + "' novalidate>"
                    +"<input type= 'text' id= 'artista' class = 'artistaClase" + id + "' placeholder= 'Artista' name='artista' value='" + artistaOriginal + "'required>" 
                    +"<input type= 'text' id='titulo' class = 'tituloClase" + id + "' placeholder= 'Titulo' name='titulo' value='" + tituloOriginal + "'required> "
                    +"<input type='text' id='url' class = 'urlClase" + id + "' placeholder='URL' name='url' value='" + urlOriginal + "'required> "
                    +"<button type='submit' class ='save'><i class='fa fa-floppy-o'></i></button>"
                    +"<button type = 'button' class = 'cancelar'><i class='fa fa-ban'></i></button></form></div></div>");

                $(grandpa).find(".cancelar").on("click", function() {
                    $(self).attr("disabled", false);
                    $(grandpa).find("form").remove();
                });
                //Para la edición de los formularios en linea:
                $(".artistaClase").focus();

                $(grandpa).find(".formlist" + (id.toString().trim())).on("submit", function() {
                    var artista = $.trim($(".artistaClase" + (id.toString().trim())).val());
                    if (artista == "") {
                        alert("El artista no puede ser vacío");
                        return false;
                    }
                    //Validación del título
                    var titulo = $.trim($(".tituloClase" + (id.toString().trim())).val());
                    if (titulo == "") {
                        alert("El título no puede ser vacío");
                        return false;
                    }
                    //Validación de la url
                    var url = $.trim($(".urlClase" + (id.toString().trim())).val());
                    var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ig;
                    if (url == "") {
                        //|| false == pattern.test(url)) {
                        alert("La url del archivo no es valido");
                        return false;
                    }
                    $.ajax({
                        url: "/api/musica/" + id,
                        data: JSON.stringify({
                            artista: artista,
                            title: titulo,
                            url: url,
                        }),
                        contentType: 'application/json',
                        method: "put",
                        success: function() {
                            alert("Editado con exito");
                            $("form").remove();
                            cargarCancion();
                            return false;
                        },
                        error: function() {
                            alert("Se ha producido un error");
                            return false;
                        }

                    });
                    return false;
                });
            }
        });
    });
});