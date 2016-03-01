$(document).ready(function() {
    //Cuando se haga submmit del formulario incrustado en el contenedor
    //con clase .main.content este se validara y enviara al servidor
    //por medio de ajax con esta funcion:
    $(".main.content").on("submit", "form", function() {
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
        //Guardamos datos con ajax:
        $.ajax({
            url: "/api/musica/",
            data: JSON.stringify({
                artista: artista,
                title: titulo,
                url: url,
            }),
            contentType: 'application/json',
            method: 'post',
            success: function() { //Cuando devuelve un código 2XX
                alert("Guardado con éxito");
                $("form").remove();
                cargarCancion();
                return false;
            },
            error: function() { //Cuando se devuelve un código 4XX ó 5XX
                alert("Se ha producido un error");
                return false;
            }
        });
        return false;
    });
    //Si se pulsa el boton salir, desaparece el formulario.
    cargarCancion();
});
