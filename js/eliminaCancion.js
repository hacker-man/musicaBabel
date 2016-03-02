$(document).ready(function () {
    //Cuando se haga click en el boton eliminar de la información
    //de la canción incrustada en nuestro código html se desincrustara
    //y se eliminara del servidor.
    $("#musicaList").on("click", ".Button.Eliminar", function () {
        console.log("elimino canción");
        var id = $(this).data("musicaid");
        var self = this; //Se refiere al button
        var grandpa = $(this).parent().parent(); //Se va al primer row hijo directo de <li>
        $.ajax({
            url: "/api/musica/" + id,
            method: "delete",
            success: function () {
                $(grandpa).find(".row").remove();
                cargarCancion(); console.log("Se procesa peticion ajax");
            }
        });
    });
});