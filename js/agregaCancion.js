$(document).ready(function() {
    //Cuando se pulse el icono "+" de la página index.html
    //mostrara nuestro formulario para agregar una canción.
    $(".add").on("click", function() {
        console.log("click en icon");
        var self = this;
        var html = "";
        var icono = $(this).data("iconoid");
        if (icono == "+") {
            $(this).html("<i class='fa fa-times-circle-o'></i>");
            html = "<form novalidate> <input type= 'text' class = 'artistaClase' id= 'artista' placeholder= 'Artista' name='artista' required> <input type= 'text' class = 'tituloClase' id=titulo placeholder= 'Titulo' name='titulo' required> <input type='text' class = 'urlClase' id='url' placeholder='URL' name='titulo' required> <button type='submit'>Guardar</button></form>";
            $(".main.content").html(html);
			$(this).data("iconoid","x");
            $("#musicaList li").remove();
            $("form").on("submit",function(){
                $(self).html("<i class='fa fa-plus-circle'></i>");
            });
        } else {
            $(this).html("<i class='fa fa-plus-circle'></i>");
			$(this).data("iconoid","+");
            $("form").remove();
            cargarCancion();
        }



    });
});
