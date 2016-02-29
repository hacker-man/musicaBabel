$(document).ready(function(){
		//Cuando se haga click en el boton eliminar de la información
	    //de la canción incrustada en nuestro código html se desincrustara
		//y se eliminara del servidor.
		$("#musicaList").on("click", "button", function () {
		console.log("elimino canción");
		var id = $(this).data("musicaid");
		var self = this; //Se refiere al button
		$.ajax({
			url: "/api/musica/" + id,
			method: "delete",
			success: function () {
				$(self).parent().remove();
			}
		});
	});
});