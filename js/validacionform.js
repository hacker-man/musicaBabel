$(document).ready(function () {
	//Ñapa:
	function cargarCancion() {
		console.log("cargando canción");
		$.ajax({ //Petición de los datos
			url: "/api/musica/",
			success: function (data) {
				console.log("musica recuperada", data)
				var html = "";
				for (var i in data) {
					var id = data[i].id;
					var artista = data[i].artista;
					var title = data[i].title;
					var url = data[i].url;
					html +="<li>";
					html += artista+" ";
					html += title+" ";
					if (url != "")
						html += " (" + url + ")";
					html += '<button data-musicaid ="' + id + '">Eliminar</button>'
					html += "</li>";
				}
				$("#musicaList").html(html); //innerHTML = html
			}
		});
	}

	//Cuando se haga submmit del formulario incrustado en el contenedor
	//con clase .main.content este se validara y enviara al servidor
	//por medio de ajax con esta funcion:
	$(".main.content").on("submit", "form", function () {
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
			success: function () { //Cuando devuelve un código 2XX
				alert("Guardado con éxito");
				$("form").remove();
				cargarCancion();
			},
			error: function () { //Cuando se devuelve un código 4XX ó 5XX
				alert("Se ha producido un error");
			}
		});
		return false;
	});
	//Si se pulsa el boton salir, desaparece el formulario.
	$(".main.content").on("click", "#salir", function () {
		$("form").remove();
	});

});