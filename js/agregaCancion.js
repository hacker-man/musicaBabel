$(document).ready(function() {
    //Cuando se pulse el icono "+" de la página index.html
    //mostrara nuestro formulario para agregar una canción.
    $(".añadir").on("click", function() {
        console.log("click en icon");
        var self = this;
        var html = "";
        var icono = $(this).html();
        if (icono == "+") {
            $(this).html("x");
            html = "<form novalidate> <input type= 'text' id= 'artista' placeholder= 'Artista' name='artista' required> <input type= 'text' id=titulo placeholder= 'Titulo' name='titulo' required> <input type='text' id='url' placeholder='URL' name='titulo' required> <button type='submit'>Guardar</button></form>";
            $(".main.content").html(html);
            $("#musicaList li").remove();
            $("form").on("submit",function(){
                $(self).html("+");
            });
        } else {
            $(this).html("+");
            $("form").remove();
            cargarCancion();
        }



    });
});
